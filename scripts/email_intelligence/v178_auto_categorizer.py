#!/usr/bin/env python3
"""V178 - AI Email Auto-Categorizer Pro
Smart folder/label assignment with ML-based classification across custom categories.
Learns from user corrections to improve over time."""
import json, re, hashlib
from datetime import datetime
from typing import Dict, List, Any
from collections import defaultdict

class AutoCategorizerPro:
    def __init__(self):
        self.categories = self._build_default_categories()
        self.user_corrections = []
        self.category_scores = defaultdict(lambda: defaultdict(float))

    def _build_default_categories(self):
        return {
            "urgent": {"keywords": ["urgent", "asap", "immediately", "critical", "emergency", "deadline today"], "color": "#EF4444", "priority": 1},
            "sales": {"keywords": ["proposal", "quote", "pricing", "deal", "contract", "opportunity", "pipeline", "revenue"], "color": "#10B981", "priority": 2},
            "support": {"keywords": ["help", "issue", "bug", "not working", "error", "troubleshoot", "ticket", "complaint"], "color": "#F59E0B", "priority": 3},
            "finance": {"keywords": ["invoice", "payment", "billing", "receipt", "expense", "budget", "tax", "accounting"], "color": "#6366F1", "priority": 4},
            "hr": {"keywords": ["hiring", "interview", "onboarding", "employee", "benefits", "payroll", "PTO", "performance review"], "color": "#EC4899", "priority": 5},
            "project": {"keywords": ["milestone", "sprint", "standup", "roadmap", "deliverable", "scope", "timeline", "stakeholder"], "color": "#8B5CF6", "priority": 6},
            "marketing": {"keywords": ["campaign", "content", "SEO", "social media", "analytics", "brand", "engagement", "newsletter"], "color": "#14B8A6", "priority": 7},
            "legal": {"keywords": ["contract", "agreement", "NDA", "compliance", "regulation", "terms", "liability", "GDPR"], "color": "#64748B", "priority": 8},
            "newsletter": {"keywords": ["unsubscribe", "digest", "weekly update", "news", "roundup", "this week in"], "color": "#94A3B8", "priority": 9},
            "personal": {"keywords": ["lunch", "dinner", "weekend", "happy hour", "birthday", "holiday"], "color": "#F97316", "priority": 10}
        }

    def categorize_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        sender = email.get("from", "").lower()
        scores = {}
        for cat, config in self.categories.items():
            score = 0
            matched = []
            for kw in config["keywords"]:
                if kw.lower() in content:
                    score += 10
                    matched.append(kw)
            # Sender domain boost
            if any(domain in sender for domain in self._get_category_domains(cat)):
                score += 15
            # Learned corrections boost
            learned_boost = self.category_scores[sender].get(cat, 0)
            score += learned_boost
            if score > 0:
                scores[cat] = {"score": score, "matched_keywords": matched, "color": config["color"], "priority": config["priority"]}
        if not scores:
            scores["general"] = {"score": 1, "matched_keywords": [], "color": "#9CA3AF", "priority": 99}
        sorted_cats = sorted(scores.items(), key=lambda x: x[1]["score"], reverse=True)
        primary = sorted_cats[0]
        secondary = sorted_cats[1] if len(sorted_cats) > 1 else None
        confidence = min(1.0, primary[1]["score"] / 30)
        return {
            "categorization_id": hashlib.md5(f"{sender}{email.get('subject','')}".encode()).hexdigest()[:12],
            "primary_category": primary[0],
            "primary_score": primary[1]["score"],
            "primary_color": primary[1]["color"],
            "secondary_category": secondary[0] if secondary else None,
            "confidence": round(confidence, 2),
            "all_scores": {k: v["score"] for k, v in sorted_cats[:5]},
            "matched_keywords": primary[1]["matched_keywords"],
            "auto_label": self._generate_label(primary[0], email),
            "folder_path": self._suggest_folder(primary[0]),
            "reply_all_category_context": primary[1]["priority"] <= 3
        }

    def _get_category_domains(self, cat: str) -> List[str]:
        domain_map = {
            "support": ["support@", "help@", "ticket@"],
            "finance": ["billing@", "invoice@", "accounting@"],
            "hr": ["hr@", "careers@", "recruiting@"],
            "newsletter": ["newsletter@", "digest@", "updates@"],
            "sales": ["sales@", "business@", "partnership@"]
        }
        return domain_map.get(cat, [])

    def _generate_label(self, category: str, email: Dict) -> str:
        labels = {
            "urgent": "🔴 URGENT", "sales": "💰 Sales", "support": "🎧 Support",
            "finance": "💵 Finance", "hr": "👥 HR", "project": "📋 Project",
            "marketing": "📢 Marketing", "legal": "⚖️ Legal", "newsletter": "📰 Newsletter",
            "personal": "👋 Personal", "general": "📧 General"
        }
        return labels.get(category, f"📧 {category.title()}")

    def _suggest_folder(self, category: str) -> str:
        folders = {
            "urgent": "Inbox/🔴 Urgent", "sales": "Inbox/💰 Sales",
            "support": "Inbox/🎧 Support Tickets", "finance": "Inbox/💵 Finance",
            "hr": "Inbox/👥 HR", "project": "Inbox/📋 Projects",
            "marketing": "Inbox/📢 Marketing", "legal": "Inbox/⚖️ Legal",
            "newsletter": "Archive/📰 Newsletters", "personal": "Inbox/👋 Personal"
        }
        return folders.get(category, f"Inbox/{category.title()}")

    def learn_from_correction(self, email: Dict, predicted: str, actual: str):
        sender = email.get("from", "").lower()
        self.user_corrections.append({"timestamp": datetime.now().isoformat(), "sender": sender, "predicted": predicted, "actual": actual})
        self.category_scores[sender][actual] += 10
        self.category_scores[sender][predicted] -= 5

    def get_accuracy_report(self) -> Dict:
        total = len(self.user_corrections)
        if total == 0:
            return {"accuracy": "N/A", "total_corrections": 0}
        return {
            "total_corrections": total,
            "categories_learned": len(self.category_scores),
            "most_corrected_to": self._get_most_corrected_categories(),
            "learning_status": "Active — improving with each correction"
        }

    def _get_most_corrected_categories(self) -> List[Dict]:
        from collections import Counter
        corrections = Counter(c["actual"] for c in self.user_corrections)
        return [{"category": cat, "count": n} for cat, n in corrections.most_common(5)]

if __name__ == "__main__":
    cat = AutoCategorizerPro()
    result = cat.categorize_email({"from": "billing@stripe.com", "subject": "Invoice #1234 - Payment received", "body": "Your invoice for $5,000 has been paid. Receipt attached. Please review the billing details and update your accounting records."})
    print(json.dumps(result, indent=2))
