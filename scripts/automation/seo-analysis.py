#!/usr/bin/env python3
"""Serialize SEO audit data and validate a completed provider response.

This module performs no network requests and never evaluates audit content.
"""

import argparse
import json
from pathlib import Path
import sys


def read_json(path):
    def invalid_constant(_value):
        raise ValueError("JSON contains a non-finite number")

    with Path(path).open(encoding="utf-8") as source:
        return json.load(source, parse_constant=invalid_constant)


def build_request(metadata):
    if not isinstance(metadata, list) or any(
        not isinstance(page, dict) for page in metadata
    ):
        raise ValueError("SEO metadata must be an array of page objects")

    prompt = (
        "Analyze this SEO metadata audit for ziontechgroup.com "
        "(a Next.js AI solutions website).\n"
        "For each page with issues, provide specific, actionable SEO improvements.\n"
        "Focus on: missing/weak titles, missing/short descriptions, "
        "keyword optimization for AI/tech services.\n"
        "Keep suggestions practical and ready to implement. Use markdown formatting.\n\n"
        "Page metadata:\n"
        + json.dumps(metadata[:20], ensure_ascii=False, indent=2, allow_nan=False)
    )
    return {
        "model": "openrouter/auto",
        "max_tokens": 2048,
        "messages": [
            {
                "role": "system",
                "content": (
                    "You are an SEO expert specializing in B2B technology and AI "
                    "services websites. Provide actionable, specific SEO recommendations."
                ),
            },
            {"role": "user", "content": prompt},
        ],
    }


def read_analysis(response, http_status):
    if not 200 <= http_status < 300:
        raise ValueError(f"AI provider returned HTTP {http_status}")
    if not isinstance(response, dict):
        raise ValueError("AI provider response must be a JSON object")
    if "error" in response:
        raise ValueError("AI provider returned an error response")
    choices = response.get("choices")
    if not isinstance(choices, list) or not choices:
        raise ValueError("AI provider response has no choices")
    first = choices[0]
    if not isinstance(first, dict) or not isinstance(first.get("message"), dict):
        raise ValueError("AI provider response has no message")
    analysis = first["message"].get("content")
    if not isinstance(analysis, str) or not analysis.strip():
        raise ValueError("AI provider response has no non-empty analysis")
    return analysis


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest="command", required=True)
    request = commands.add_parser("request")
    request.add_argument("metadata")
    response = commands.add_parser("response")
    response.add_argument("response")
    response.add_argument("--http-status", type=int, required=True)
    args = parser.parse_args()

    try:
        if args.command == "request":
            result = build_request(read_json(args.metadata))
            print(json.dumps(result, ensure_ascii=False, allow_nan=False))
        else:
            # Reject unsuccessful HTTP status before inspecting the response body.
            if not 200 <= args.http_status < 300:
                raise ValueError(f"AI provider returned HTTP {args.http_status}")
            print(read_analysis(read_json(args.response), args.http_status))
    except (OSError, UnicodeError, ValueError) as error:
        # Do not echo metadata, response bodies, headers, or credentials.
        if isinstance(error, json.JSONDecodeError):
            message = "input is not valid JSON"
        elif isinstance(error, (OSError, UnicodeError)):
            message = "input file could not be read as UTF-8"
        else:
            message = str(error)
        print(f"SEO analysis failed: {message}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
