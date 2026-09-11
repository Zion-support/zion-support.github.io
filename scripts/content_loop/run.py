#!/usr/bin/env python3
"""Uninterrupted SEO content loop for ziontechgroup.com.

Usage:
  python3 -m scripts.content_loop.run --limit 2
  python3 scripts/content_loop/run.py --limit 12 --refresh-index
"""

from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from scripts.content_loop import BANK_PATH, BRIEFS_DIR, CONFIG_PATH, CONTENT_DIR
from scripts.content_loop.publish import (
    load_state,
    refresh_indexes,
    save_state,
    write_distribution,
    write_post,
)
from scripts.content_loop.quality import evaluate_html, load_config
from scripts.content_loop.render import render_article
from scripts.content_loop.select import next_briefs, spawn_satellites


def main() -> int:
    parser = argparse.ArgumentParser(description="Zion content creation loop")
    parser.add_argument("--limit", type=int, default=None)
    parser.add_argument("--refresh-index", action="store_true")
    parser.add_argument("--force", action="store_true", help="Republish even if the slug already exists")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    config = load_config(CONFIG_PATH)
    gates = config["quality_gates"]
    loop = config["loop"]
    limit = args.limit if args.limit is not None else int(loop["daily_limit"])

    if args.force:
        briefs = []
        for path in sorted(BRIEFS_DIR.glob("*.json")):
            brief = json.loads(path.read_text(encoding="utf-8"))
            brief["slug"] = brief.get("slug") or path.stem
            briefs.append(brief)
            if len(briefs) >= limit:
                break
    else:
        briefs = next_briefs(BRIEFS_DIR, ROOT / "public" / "blog", limit)
    published = []
    rejected = []

    for brief in briefs:
        html = render_article(brief)
        result = evaluate_html(html, gates)
        if not result["ok"]:
            rejected.append({"slug": brief["slug"], "issues": result["issues"]})
            continue
        if args.dry_run:
            published.append({"slug": brief["slug"], "words": result["words"], "dry_run": True})
            continue
        write_post(brief["slug"], html)
        write_distribution(brief, CONTENT_DIR / "distribution")
        spawned = spawn_satellites(
            BANK_PATH,
            brief,
            per_publish=int(loop["satellites_per_publish"]),
            max_queue=int(loop["max_queue"]),
        )
        published.append(
            {
                "slug": brief["slug"],
                "words": result["words"],
                "url": f"/blog/{brief['slug']}/",
                "satellites": spawned,
            }
        )

    index_stats = {"quality_posts": None}
    if not args.dry_run and (published or args.refresh_index or not briefs):
        index_stats = refresh_indexes()

    state = load_state()
    state["runs"].append(
        {
            "at": datetime.now(timezone.utc).isoformat(),
            "published": [p["slug"] for p in published],
            "rejected": rejected,
            "quality_posts": index_stats.get("quality_posts"),
        }
    )
    state["runs"] = state["runs"][-50:]
    state["published"] = sorted(set(state.get("published", []) + [p["slug"] for p in published]))
    if not args.dry_run:
        save_state(state)

    report = {
        "published": published,
        "rejected": rejected,
        "quality_posts": index_stats.get("quality_posts"),
        "remaining_briefs": max(0, len(list(BRIEFS_DIR.glob("*.json"))) - len(state.get("published", []))),
    }
    print(json.dumps(report, indent=2, ensure_ascii=False))
    if rejected and not published:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
