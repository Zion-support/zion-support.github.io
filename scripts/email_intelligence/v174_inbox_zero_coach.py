#!/usr/bin/env python3
"""V174 - AI Email Inbox Zero Coach
Gamified inbox management with streaks, daily goals, automated batching,
and productivity insights to achieve and maintain inbox zero."""
import json
from datetime import datetime, timedelta
from typing import Dict, List, Any
from collections import defaultdict

class InboxZeroCoach:
    def __init__(self):
        self.user_stats = {"streak_days": 0, "total_processed": 0, "daily_goal": 25}
        self.daily_log = defaultdict(lambda: {"processed": 0, "archived": 0, "replied": 0, "deleted": 0, "starred": 0})
        self.achievements = self._build_achievements()

    def _build_achievements(self):
        return {
            "first_zero": {"name": "First Inbox Zero", "desc": "Achieved inbox zero for the first time", "unlocked": False, "xp": 100},
            "streak_7": {"name": "Week Warrior", "desc": "7-day inbox zero streak", "unlocked": False, "xp": 500},
            "streak_30": {"name": "Monthly Master", "desc": "30-day inbox zero streak", "unlocked": False, "xp": 2000},
            "speed_demon": {"name": "Speed Demon", "desc": "Process 50 emails in under 10 minutes", "unlocked": False, "xp": 300},
            "batch_king": {"name": "Batch King", "desc": "Batch process 100+ emails", "unlocked": False, "xp": 400},
            "reply_machine": {"name": "Reply Machine", "desc": "Reply to 20 emails in one session", "unlocked": False, "xp": 350},
        }

    def process_email(self, email: Dict, action: str, batch_size: int = 1) -> Dict:
        today = datetime.now().strftime("%Y-%m-%d")
        log = self.daily_log[today]
        log["processed"] += batch_size
        if action in log:
            log[action] += batch_size
        self.user_stats["total_processed"] += batch_size
        return self._generate_coaching_feedback(log, action, batch_size)

    def _generate_coaching_feedback(self, log: Dict, action: str, batch_size: int) -> Dict:
        goal = self.user_stats["daily_goal"]
        processed = log["processed"]
        pct = min(100, round(processed / goal * 100))
        feedback = []
        if pct >= 100:
            feedback.append("Daily goal achieved! Keep the streak alive!")
        elif pct >= 75:
            feedback.append("Almost there! Just a few more to hit your goal.")
        elif pct >= 50:
            feedback.append("Halfway done! You're making great progress.")
        else:
            feedback.append(f"Good start! {goal - processed} more to reach your daily goal.")
        if batch_size >= 10:
            feedback.append(f"Nice batch of {batch_size}! Batch processing is efficient.")
        new_achievements = self._check_achievements(log)
        return {
            "daily_progress": pct, "processed_today": processed, "daily_goal": goal,
            "feedback": feedback, "new_achievements": new_achievements,
            "streak": self.user_stats["streak_days"],
            "reply_all_reminder": True,
            "coaching_tip": self._get_tip(action, processed)
        }

    def _check_achievements(self, log: Dict) -> List[str]:
        unlocked = []
        if log["processed"] >= 50 and not self.achievements["speed_demon"]["unlocked"]:
            self.achievements["speed_demon"]["unlocked"] = True
            unlocked.append("Speed Demon: Processed 50+ emails!")
        if log["replied"] >= 20 and not self.achievements["reply_machine"]["unlocked"]:
            self.achievements["reply_machine"]["unlocked"] = True
            unlocked.append("Reply Machine: 20+ replies in one session!")
        if log["processed"] >= 100 and not self.achievements["batch_king"]["unlocked"]:
            self.achievements["batch_king"]["unlocked"] = True
            unlocked.append("Batch King: 100+ emails processed!")
        return unlocked

    def _get_tip(self, action: str, processed: int) -> str:
        tips = {
            "archived": "Archive newsletters and FYIs to keep inbox clean.",
            "replied": "Remember to Reply All when others need to stay in the loop.",
            "deleted": "Unsubscribe from newsletters you never read to reduce future clutter.",
            "starred": "Use stars for items requiring follow-up within 48 hours."
        }
        return tips.get(action, "Keep processing — every email handled is progress!")

    def get_daily_report(self) -> Dict:
        today = datetime.now().strftime("%Y-%m-%d")
        log = self.daily_log[today]
        return {
            "date": today, "processed": log["processed"], "archived": log["archived"],
            "replied": log["replied"], "deleted": log["deleted"], "starred": log["starred"],
            "goal_progress": min(100, round(log["processed"] / self.user_stats["daily_goal"] * 100)),
            "achievements_unlocked": sum(1 for a in self.achievements.values() if a["unlocked"]),
            "total_xp": sum(a["xp"] for a in self.achievements.values() if a["unlocked"]),
            "streak": self.user_stats["streak_days"]
        }

if __name__ == "__main__":
    coach = InboxZeroCoach()
    for i in range(30):
        coach.process_email({"from": f"sender{i}@test.com", "subject": f"Email {i}"}, "archived")
    result = coach.get_daily_report()
    print(json.dumps(result, indent=2))
