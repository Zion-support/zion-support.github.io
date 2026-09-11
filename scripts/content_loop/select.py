"""Pick the next unpublished briefs and spawn satellite topics after publish."""

from __future__ import annotations

import json
import re
from pathlib import Path


def slugify(text: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return slug[:80]


def load_json(path: Path, default):
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return default


def save_json(path: Path, data) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def existing_slugs(blog_dir: Path) -> set[str]:
    if not blog_dir.exists():
        return set()
    return {p.parent.name for p in blog_dir.glob("*/index.html")}


def next_briefs(briefs_dir: Path, blog_dir: Path, limit: int) -> list[dict]:
    published = existing_slugs(blog_dir)
    selected = []
    for path in sorted(briefs_dir.glob("*.json")):
        brief = json.loads(path.read_text(encoding="utf-8"))
        slug = brief.get("slug") or path.stem
        brief["slug"] = slug
        if slug in published:
            continue
        selected.append(brief)
        if len(selected) >= limit:
            break
    return selected


def spawn_satellites(bank_path: Path, brief: dict, per_publish: int, max_queue: int) -> int:
    bank = load_json(bank_path, {"topics": []})
    topics = bank.setdefault("topics", [])
    existing = {t.get("slug") for t in topics}
    spawned = 0
    for sat in brief.get("satellites") or []:
        if spawned >= per_publish:
            break
        slug = sat.get("slug") or slugify(sat["title"])
        if slug in existing:
            continue
        topics.append(
            {
                "slug": slug,
                "title": sat["title"],
                "cluster": brief.get("cluster") or "AI Agents",
                "lang": sat.get("lang") or brief.get("lang", "en"),
                "status": "queued",
                "parent": brief["slug"],
                "angle": sat.get("angle") or "",
                "primary_keyword": sat.get("primary_keyword") or sat["title"],
            }
        )
        existing.add(slug)
        spawned += 1
    if len(topics) > max_queue:
        bank["topics"] = topics[:max_queue]
    save_json(bank_path, bank)
    return spawned
