#!/usr/bin/env python3
"""V142: AI Email Gamification Engine — XP, leaderboards, achievements, team challenges."""
import json, hashlib, math
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple
from enum import Enum
from collections import defaultdict

class AchievementCategory(Enum):
    SPEED = "speed"
    VOLUME = "volume"
    QUALITY = "quality"
    CONSISTENCY = "consistency"
    COLLABORATION = "collaboration"
    STREAK = "streak"

class ChallengeType(Enum):
    INDIVIDUAL = "individual"
    TEAM = "team"
    DEPARTMENT = "department"

@dataclass
class Achievement:
    achievement_id: str
    name: str
    description: str
    category: AchievementCategory
    xp_reward: int
    icon: str
    unlocked_at: Optional[datetime] = None
    is_unlocked: bool = False

@dataclass
class PlayerProfile:
    user_id: str
    name: str
    team: str
    xp: int = 0
    level: int = 1
    achievements: List[Achievement] = field(default_factory=list)
    streak_days: int = 0
    last_active: Optional[datetime] = None
    emails_processed: int = 0
    avg_response_time_min: float = 60.0
    reply_all_compliance: float = 1.0

@dataclass
class Challenge:
    challenge_id: str
    name: str
    description: str
    type: ChallengeType
    target: int
    reward_xp: int
    start_date: datetime
    end_date: datetime
    participants: Dict[str, int] = field(default_factory=dict)  # user_id -> progress
    is_active: bool = True

class EmailGamificationEngine:
    """V142: Gamify email productivity with XP, achievements, and challenges."""
    
    ACHIEVEMENTS = [
        Achievement("inbox_zero_1", "Inbox Zero Hero", "Achieve inbox zero for the first time", AchievementCategory.QUALITY, 100, "🏆"),
        Achievement("inbox_zero_7", "Week of Zen", "Maintain inbox zero for 7 consecutive days", AchievementCategory.STREAK, 500, "🧘"),
        Achievement("inbox_zero_30", "Monthly Master", "Maintain inbox zero for 30 consecutive days", AchievementCategory.STREAK, 2000, "👑"),
        Achievement("speed_demon", "Speed Demon", "Respond to 10 emails in under 2 minutes each", AchievementCategory.SPEED, 200, "⚡"),
        Achievement("lightning", "Lightning Fast", "Average response time under 5 minutes for a day", AchievementCategory.SPEED, 300, "🌩️"),
        Achievement("century", "Century Club", "Process 100 emails in a single day", AchievementCategory.VOLUME, 150, "💯"),
        Achievement("marathon", "Email Marathon", "Process 500 emails in a single day", AchievementCategory.VOLUME, 500, "🏃"),
        Achievement("reply_all_pro", "Reply-All Pro", "Maintain 100% reply-all compliance for 30 days", AchievementCategory.COLLABORATION, 400, "📬"),
        Achievement("team_player", "Team Player", "Help 5 teammates with shared inbox responses", AchievementCategory.COLLABORATION, 250, "🤝"),
        Achievement("consistency_7", "Consistent Performer", "Process 20+ emails daily for 7 days", AchievementCategory.CONSISTENCY, 300, "📊"),
    ]
    
    XP_PER_LEVEL = 500
    
    def __init__(self):
        self.players: Dict[str, PlayerProfile] = {}
        self.challenges: Dict[str, Challenge] = {}
        self.leaderboard: List[Tuple[str, int]] = []
        self.reply_all_count = 0
    
    def register_player(self, user_id: str, name: str, team: str) -> PlayerProfile:
        player = PlayerProfile(user_id, name, team, last_active=datetime.now())
        self.players[user_id] = player
        return player
    
    def record_email_activity(self, user_id: str, emails_count: int = 1, response_time_min: float = 30,
                              achieved_inbox_zero: bool = False, reply_all_compliant: bool = True,
                              helped_teammate: bool = False) -> Dict:
        player = self.players.get(user_id)
        if not player:
            return {"error": "Player not found"}
        
        xp_earned = 0
        new_achievements = []
        
        # Base XP: 2 XP per email processed
        base_xp = emails_count * 2
        xp_earned += base_xp
        player.emails_processed += emails_count
        
        # Speed bonus
        if response_time_min < 5:
            xp_earned += 10
        elif response_time_min < 15:
            xp_earned += 5
        
        # Update average response time
        player.avg_response_time_min = (player.avg_response_time_min * 0.8 + response_time_min * 0.2)
        
        # Reply-all compliance
        if reply_all_compliant:
            player.reply_all_compliance = min(1.0, player.reply_all_compliance + 0.01)
            self.reply_all_count += 1
        else:
            player.reply_all_compliance = max(0.0, player.reply_all_compliance - 0.05)
        
        # Streak
        if player.last_active and (datetime.now() - player.last_active).days == 1:
            player.streak_days += 1
        elif not player.last_active or (datetime.now() - player.last_active).days > 1:
            player.streak_days = 1
        player.last_active = datetime.now()
        
        # Check achievements
        for ach in self.ACHIEVEMENTS:
            if ach.is_unlocked:
                continue
            unlocked = False
            if ach.achievement_id == "inbox_zero_1" and achieved_inbox_zero:
                unlocked = True
            elif ach.achievement_id == "inbox_zero_7" and achieved_inbox_zero and player.streak_days >= 7:
                unlocked = True
            elif ach.achievement_id == "inbox_zero_30" and achieved_inbox_zero and player.streak_days >= 30:
                unlocked = True
            elif ach.achievement_id == "speed_demon" and response_time_min < 2 and emails_count >= 10:
                unlocked = True
            elif ach.achievement_id == "lightning" and player.avg_response_time_min < 5:
                unlocked = True
            elif ach.achievement_id == "century" and emails_count >= 100:
                unlocked = True
            elif ach.achievement_id == "marathon" and emails_count >= 500:
                unlocked = True
            elif ach.achievement_id == "reply_all_pro" and player.reply_all_compliance >= 1.0 and player.streak_days >= 30:
                unlocked = True
            elif ach.achievement_id == "team_player" and helped_teammate:
                unlocked = True
            elif ach.achievement_id == "consistency_7" and player.streak_days >= 7 and emails_count >= 20:
                unlocked = True
            if unlocked:
                ach.is_unlocked = True
                ach.unlocked_at = datetime.now()
                xp_earned += ach.xp_reward
                new_achievements.append(ach)
                player.achievements.append(ach)
        
        # Level up
        player.xp += xp_earned
        player.level = (player.xp // self.XP_PER_LEVEL) + 1
        
        # Update challenges
        for challenge in self.challenges.values():
            if challenge.is_active and user_id in challenge.participants:
                challenge.participants[user_id] += emails_count
        
        return {"xp_earned": xp_earned, "total_xp": player.xp, "level": player.level,
                "new_achievements": [a.name for a in new_achievements], "streak": player.streak_days}
    
    def create_challenge(self, name: str, description: str, challenge_type: ChallengeType,
                         target: int, reward_xp: int, duration_days: int = 7,
                         participants: List[str] = None) -> Challenge:
        cid = hashlib.md5(f"{name}{datetime.now().isoformat()}".encode()).hexdigest()[:12]
        challenge = Challenge(cid, name, description, challenge_type, target, reward_xp,
                            datetime.now(), datetime.now() + timedelta(days=duration_days),
                            {uid: 0 for uid in (participants or self.players.keys())})
        self.challenges[cid] = challenge
        return challenge
    
    def get_leaderboard(self, top_n: int = 10) -> List[Dict]:
        sorted_players = sorted(self.players.values(), key=lambda p: p.xp, reverse=True)
        return [{"rank": i+1, "name": p.name, "team": p.team, "xp": p.xp, "level": p.level,
                 "streak": p.streak_days, "achievements": len(p.achievements)}
                for i, p in enumerate(sorted_players[:top_n])]
    
    def get_player_stats(self, user_id: str) -> Dict:
        p = self.players.get(user_id)
        if not p:
            return {}
        return {"name": p.name, "team": p.team, "level": p.level, "xp": p.xp,
                "xp_to_next_level": self.XP_PER_LEVEL - (p.xp % self.XP_PER_LEVEL),
                "emails_processed": p.emails_processed, "avg_response_time": f"{p.avg_response_time_min:.1f}min",
                "streak_days": p.streak_days, "reply_all_compliance": f"{p.reply_all_compliance:.0%}",
                "achievements_unlocked": len(p.achievements),
                "achievement_names": [a.name for a in p.achievements]}
    
    def get_stats(self) -> Dict:
        return {"total_players": len(self.players),
                "active_challenges": sum(1 for c in self.challenges.values() if c.is_active),
                "total_achievements_available": len(self.ACHIEVEMENTS),
                "reply_all_enforced": self.reply_all_count,
                "engine_version": "V142"}


if __name__ == "__main__":
    engine = EmailGamificationEngine()
    print("=" * 60)
    print("V142: AI Email Gamification Engine")
    print("=" * 60)
    
    # Register players
    players = [("alice", "Alice Johnson", "Sales"), ("bob", "Bob Smith", "Sales"),
               ("carol", "Carol Davis", "Support"), ("dave", "Dave Wilson", "Engineering")]
    for uid, name, team in players:
        engine.register_player(uid, name, team)
        print(f"  Registered: {name} ({team})")
    
    # Simulate activity
    print("\n--- Email Activity ---")
    activities = [
        ("alice", 25, 3.5, True, True, False),
        ("bob", 15, 8.0, False, True, True),
        ("carol", 45, 2.0, True, True, False),
        ("dave", 10, 12.0, False, False, False),
        ("alice", 30, 4.0, True, True, True),
    ]
    for uid, count, resp_time, inbox_zero, reply_all, helped in activities:
        result = engine.record_email_activity(uid, count, resp_time, inbox_zero, reply_all, helped)
        print(f"  {uid}: +{result['xp_earned']}XP → Lv{result['level']}, streak={result['streak']}, achievements={result['new_achievements']}")
    
    # Create challenge
    print("\n--- Team Challenge ---")
    challenge = engine.create_challenge("Inbox Blitz", "Process 100 emails this week", ChallengeType.TEAM, 100, 500, 7)
    print(f"  Created: {challenge.name} (target: {challenge.target}, reward: {challenge.reward_xp}XP)")
    
    # Leaderboard
    print("\n--- Leaderboard ---")
    for entry in engine.get_leaderboard():
        print(f"  #{entry['rank']} {entry['name']} ({entry['team']}) — Lv{entry['level']}, {entry['xp']}XP, 🔥{entry['streak']}")
    
    # Player stats
    print("\n--- Alice's Stats ---")
    stats = engine.get_player_stats("alice")
    for k, v in stats.items():
        print(f"  {k}: {v}")
    
    print(f"\n--- Engine Stats ---")
    for k, v in engine.get_stats().items():
        print(f"  {k}: {v}")
