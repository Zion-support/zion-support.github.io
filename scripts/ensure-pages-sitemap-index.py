#!/usr/bin/env python3
"""Restore required Pages sitemap references using byte insertions only."""

import argparse
import codecs
import os
from pathlib import Path
import tempfile
import xml.etree.ElementTree as ET
from xml.parsers import expat

NAMESPACE = "http://www.sitemaps.org/schemas/sitemap/0.9"
REQUIRED = (
    ("sitemap-0.xml", "https://ziontechgroup.com/sitemap-0.xml"),
    ("apps/apps-sitemap.xml", "https://ziontechgroup.com/apps/apps-sitemap.xml"),
)


def parse_index(raw):
    root = ET.fromstring(raw)
    if root.tag != f"{{{NAMESPACE}}}sitemapindex":
        raise ValueError("expected sitemapindex in the sitemap XML namespace")
    return root


def locations(root):
    return {
        (node.text or "").strip()
        for node in root.findall(f"{{{NAMESPACE}}}sitemap/{{{NAMESPACE}}}loc")
    }


def require_nonempty_file(path):
    if path.is_symlink() or not path.is_file() or path.stat().st_size == 0:
        raise ValueError(f"required sitemap must be a nonempty regular file: {path}")


def insertion_point(raw):
    # Expat reports byte positions, so comments and trailing processing
    # instructions cannot be mistaken for the root's actual closing tag.
    parser = expat.ParserCreate()
    state = {"depth": 0, "root": None, "close": None, "encoding": "utf-8"}

    def start(name, _attributes):
        if state["depth"] == 0:
            state["root"] = name
        state["depth"] += 1

    def end(_name):
        state["depth"] -= 1
        if state["depth"] == 0:
            state["close"] = parser.CurrentByteIndex

    def declaration(_version, encoding, _standalone):
        state["encoding"] = encoding or "utf-8"

    parser.StartElementHandler = start
    parser.EndElementHandler = end
    parser.XmlDeclHandler = declaration
    parser.Parse(raw, True)
    encoding = state["encoding"]
    if raw.startswith(codecs.BOM_UTF16_LE) or raw.startswith(b"<\x00"):
        encoding = "utf-16-le"
    elif raw.startswith(codecs.BOM_UTF16_BE) or raw.startswith(b"\x00<"):
        encoding = "utf-16-be"
    close = state["close"]
    if close is None or not raw[close:].startswith(
        f"</{state['root']}".encode(encoding)
    ):
        raise ValueError("an explicit closing sitemapindex tag is required; refusing to rewrite existing bytes")
    newline = "\r\n" if "\r\n".encode(encoding) in raw else "\n"
    # Keep the complete closing line, including any indentation, unchanged.
    line_feed = "\n".encode(encoding)
    previous_line = raw.rfind(line_feed, 0, close)
    line_start = previous_line + len(line_feed) if previous_line >= 0 else 0
    if not raw[line_start:close].decode(encoding).strip(" \t\r"):
        close = line_start
    prefix = state["root"].rsplit(":", 1)[0] + ":" if ":" in state["root"] else ""
    return close, prefix, encoding, newline


def ensure_index(output):
    index = output / "sitemap.xml"
    require_nonempty_file(index)
    original = index.read_bytes()
    root = parse_index(original)
    for relative, _url in REQUIRED:
        require_nonempty_file(output / relative)
    present = locations(root)
    missing = [url for _relative, url in REQUIRED if url not in present]
    if not missing:
        return 0

    offset, prefix, encoding, newline = insertion_point(original)
    inserted = "".join(
        f"<{prefix}sitemap><{prefix}loc>{url}</{prefix}loc></{prefix}sitemap>{newline}"
        for url in missing
    ).encode(encoding)
    proposed = original[:offset] + inserted + original[offset:]
    verified = parse_index(proposed)
    if not {url for _relative, url in REQUIRED} <= locations(verified):
        raise ValueError("required references are not in the sitemap XML namespace")

    # Validate everything before replacing the index. A write failure leaves
    # the existing index intact; no sitemap payload is ever created here.
    with tempfile.TemporaryDirectory(prefix=".sitemap-index-", dir=index.parent) as temporary:
        staged = Path(temporary) / "sitemap.xml"
        staged.write_bytes(proposed)
        staged.chmod(index.stat().st_mode & 0o777)
        os.replace(staged, index)
    return len(missing)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", nargs="?", type=Path, default=Path("out"))
    arguments = parser.parse_args()
    try:
        added = ensure_index(arguments.output)
    except (OSError, ValueError, ET.ParseError, expat.ExpatError, LookupError) as error:
        raise SystemExit(f"ERROR sitemap index: {error}") from error
    print(f"OK sitemap index: {added} required reference(s) added")


if __name__ == "__main__":
    main()
