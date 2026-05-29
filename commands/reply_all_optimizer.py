#!/usr/bin/env python3
"""
ReplyAllOptimizer — Learns per-sender appropriateness of reply-all decisions.

Keeps track of:
    - For each sender, how many times reply-all was correct vs incorrect.
    - Uses Laplace smoothing to avoid zero divisions.

Updates are made based on email thread outcomes:
    - Correct: (reply-all and positive/neutral outcome) OR (no reply-all and positive/neutral outcome)
    - Incorrect: (reply-all and negative outcome) OR (no reply-all and negative outcome)

Outcome is determined by ResponseOutcomeAnalyzerV22 (positive, neutral, negative).

File: data/reply_all_optimizer.jsonl
Each line: {"sender": "alice@example.com", "correct": 5, "incorrect": 2}
"""

import json
from pathlib import Path
from collections import defaultdict

WORKSPACE = Path(__file__).resolve().parent.parent
DATA = WORKSPACE / 'data'
OPTIMIZER_FILE = DATA / 'reply_all_optimizer.jsonl'

class ReplyAllOptimizer:
    def __init__(self):
        self._counts = defaultdict(lambda: {"correct": 0, "incorrect": 0})
        self._load()

    def _load(self):
        if not OPTIMIZER_FILE.exists():
            return
        try:
            for line in OPTIMIZER_FILE.read_text().splitlines():
                if not line.strip():
                    continue
                record = json.loads(line)
                sender = record.get("sender")
                if sender:
                    self._counts[sender] = {
                        "correct": record.get("correct", 0),
                        "incorrect": record.get("incorrect", 0)
                    }
        except Exception:
            pass

    def _save(self):
        try:
            OPTIMIZER_FILE.parent.mkdir(parents=True, exist_ok=True)
            with open(OPTIMIZER_FILE, 'w') as f:
                for sender, counts in self._counts.items():
                    f.write(json.dumps({
                        "sender": sender,
                        "correct": counts["correct"],
                        "incorrect": counts["incorrect"]
                    }) + '\n')
        except Exception:
            pass

    def update(self, sender: str, correct: bool):
        """Update the counts for a sender based on whether the reply-all decision was correct."""
        if not sender:
            return
        entry = self._counts[sender]
        if correct:
            entry["correct"] += 1
        else:
            entry["incorrect"] += 1
        self._save()

    def get_appropriateness_ratio(self, sender: str) -> float:
        """
        Returns the probability that reply-all is appropriate for this sender.
        Uses Laplace smoothing: (correct + 1) / (correct + incorrect + 2)
        """
        if not sender:
            return 0.5  # neutral
        entry = self._counts[sender]
        correct = entry["correct"]
        incorrect = entry["incorrect"]
        return (correct + 1) / (correct + incorrect + 2)

    def get_stats(self, sender: str) -> dict:
        """Return raw counts for debugging."""
        if not sender:
            return {"correct": 0, "incorrect": 0}
        return self._counts.get(sender, {"correct": 0, "incorrect": 0})