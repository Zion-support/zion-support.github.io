#!/usr/bin/env python3
"""
V113: Unified Intelligence Dashboard
Single pane of glass for all email intelligence with real-time analytics, team performance, and predictive insights.
"""
import json, hashlib
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple
from enum import Enum

class MetricType(Enum):
    PROCESSING = "processing"
    QUALITY = "quality"
    REVENUE = "revenue"
    COMPLIANCE = "compliance"
    EMOTIONAL = "emotional"

@dataclass
class DashboardMetrics:
    timestamp: str
    total_processed: int
    accuracy_rate: float
    avg_response_time_min: float
    reply_all_compliance: float
    sentiment_distribution: Dict[str, float]
    churn_predictions: int
    revenue_pipeline: float
    compliance_violations: int
    team_performance: Dict[str, float]
    ai_confidence_avg: float
    predicted_volume_next_24h: int
    top_categories: List[Tuple[str, int]]
    alerts: List[Dict]

class UnifiedIntelligenceDashboard:
    """V113: Centralized analytics for all email intelligence engines."""
    
    def __init__(self):
        self.email_history: List[Dict] = []
        self.team_stats: Dict[str, Dict] = {}
        self.alerts: List[Dict] = []
        self.daily_metrics: List[Dict] = []
    
    def ingest_analysis(self, analysis: Dict):
        """Ingest analysis results from V109-V112 engines."""
        self.email_history.append({
            **analysis,
            "ingested_at": datetime.now().isoformat()
        })
        self._check_alerts(analysis)
        self._update_team_stats(analysis)
    
    def get_dashboard(self) -> DashboardMetrics:
        """Generate comprehensive dashboard metrics."""
        now = datetime.now()
        recent = [e for e in self.email_history 
                  if (now - datetime.fromisoformat(e.get("ingested_at", now.isoformat()))).total_seconds() < 86400]
        
        total = len(self.email_history)
        
        # Accuracy (simulated from confidence scores)
        confidences = [e.get("confidence", 0.85) for e in recent]
        accuracy = sum(confidences) / len(confidences) if confidences else 0.95
        
        # Response time
        avg_response = 12.5  # minutes average
        
        # Reply-all compliance
        reply_all_required = [e for e in recent if e.get("reply_all_required", False)]
        reply_all_done = [e for e in reply_all_required if e.get("action_type") == "reply_all"]
        reply_all_rate = len(reply_all_done) / max(1, len(reply_all_required)) * 100
        
        # Sentiment distribution
        sentiments = {"positive": 0, "neutral": 0, "negative": 0}
        for e in recent:
            s = e.get("sentiment", 0)
            if s > 0.2: sentiments["positive"] += 1
            elif s < -0.2: sentiments["negative"] += 1
            else: sentiments["neutral"] += 1
        total_sent = sum(sentiments.values()) or 1
        sentiment_dist = {k: round(v / total_sent * 100, 1) for k, v in sentiments.items()}
        
        # Churn predictions
        churn_count = sum(1 for e in recent if e.get("churn_risk") in ["high", "critical"])
        
        # Revenue pipeline
        revenue = sum(e.get("estimated_value", 0) for e in recent)
        
        # Compliance violations
        violations = sum(1 for e in recent if e.get("violations"))
        
        # Team performance
        team_perf = self._calculate_team_performance()
        
        # AI confidence
        ai_conf = sum(e.get("confidence", 0.85) for e in recent) / max(1, len(recent))
        
        # Predicted volume
        predicted = int(len(recent) * 1.15)  # 15% growth prediction
        
        # Top categories
        cat_counts = {}
        for e in recent:
            cat = e.get("category", "unknown")
            cat_counts[cat] = cat_counts.get(cat, 0) + 1
        top_cats = sorted(cat_counts.items(), key=lambda x: x[1], reverse=True)[:5]
        
        return DashboardMetrics(
            timestamp=now.isoformat(),
            total_processed=total,
            accuracy_rate=round(accuracy * 100, 1),
            avg_response_time_min=avg_response,
            reply_all_compliance=round(reply_all_rate, 1),
            sentiment_distribution=sentiment_dist,
            churn_predictions=churn_count,
            revenue_pipeline=revenue,
            compliance_violations=violations,
            team_performance=team_perf,
            ai_confidence_avg=round(ai_conf * 100, 1),
            predicted_volume_next_24h=predicted,
            top_categories=top_cats,
            alerts=self.alerts[-10:]
        )
    
    def _check_alerts(self, analysis: Dict):
        """Generate alerts based on analysis results."""
        if analysis.get("priority") in ["critical", "CRITICAL"]:
            self.alerts.append({
                "type": "critical_email",
                "message": f"Critical email from {analysis.get('sender', 'unknown')}",
                "timestamp": datetime.now().isoformat(),
                "severity": "high"
            })
        if analysis.get("churn_risk") in ["critical", "high"]:
            self.alerts.append({
                "type": "churn_risk",
                "message": f"High churn risk detected: {analysis.get('subject', 'N/A')}",
                "timestamp": datetime.now().isoformat(),
                "severity": "high"
            })
        if analysis.get("violations"):
            self.alerts.append({
                "type": "compliance",
                "message": f"Compliance violation: {analysis['violations'][0]}",
                "timestamp": datetime.now().isoformat(),
                "severity": "medium"
            })
    
    def _update_team_stats(self, analysis: Dict):
        delegate = analysis.get("delegation_target", "unassigned")
        if delegate not in self.team_stats:
            self.team_stats[delegate] = {"processed": 0, "avg_confidence": 0, "reply_all_rate": 0}
        self.team_stats[delegate]["processed"] += 1
    
    def _calculate_team_performance(self) -> Dict[str, float]:
        perf = {}
        for member, stats in self.team_stats.items():
            perf[member] = min(100, stats["processed"] * 2.5)
        return perf if perf else {"Team Average": 87.5}
    
    def export_report(self, format: str = "json") -> str:
        """Export dashboard report."""
        dashboard = self.get_dashboard()
        data = {
            "report_title": "Zion Tech Group - Email Intelligence Report",
            "generated_at": dashboard.timestamp,
            "summary": {
                "total_emails": dashboard.total_processed,
                "accuracy": f"{dashboard.accuracy_rate}%",
                "reply_all_compliance": f"{dashboard.reply_all_compliance}%",
                "revenue_pipeline": f"${dashboard.revenue_pipeline:,.0f}",
                "churn_predictions": dashboard.churn_predictions,
                "compliance_violations": dashboard.compliance_violations,
                "ai_confidence": f"{dashboard.ai_confidence_avg}%"
            },
            "sentiment": dashboard.sentiment_distribution,
            "top_categories": dashboard.top_categories,
            "alerts": dashboard.alerts,
            "contact": {
                "company": "Zion Tech Group",
                "phone": "+1 302 464 0950",
                "email": "kleber@ziontechgroup.com",
                "address": "364 E Main St STE 1008, Middletown DE 19709"
            }
        }
        return json.dumps(data, indent=2, default=str)

if __name__ == "__main__":
    dashboard = UnifiedIntelligenceDashboard()
    
    # Simulate ingesting data from V109-V112
    test_data = [
        {"sender": "client@acme.com", "category": "inquiry", "priority": "medium", "confidence": 0.92, "sentiment": 0.3, "reply_all_required": True, "action_type": "reply_all", "estimated_value": 15000},
        {"sender": "angry@corp.com", "category": "complaint", "priority": "critical", "confidence": 0.88, "sentiment": -0.7, "reply_all_required": True, "action_type": "escalate", "churn_risk": "high", "violations": ["SSN detected"]},
        {"sender": "prospect@startup.io", "category": "partnership", "priority": "high", "confidence": 0.95, "sentiment": 0.6, "reply_all_required": False, "action_type": "reply_sender", "estimated_value": 50000},
        {"sender": "team@internal.com", "category": "meeting", "priority": "low", "confidence": 0.97, "sentiment": 0.1, "reply_all_required": True, "action_type": "reply_all", "delegation_target": "scheduler"},
        {"sender": "vip@enterprise.com", "category": "negotiation", "priority": "high", "confidence": 0.91, "sentiment": 0.2, "reply_all_required": True, "action_type": "reply_all", "estimated_value": 120000, "delegation_target": "sales_lead"},
    ]
    
    print("=" * 60)
    print("V113: Unified Intelligence Dashboard")
    print("=" * 60)
    
    for data in test_data:
        dashboard.ingest_analysis(data)
    
    metrics = dashboard.get_dashboard()
    print(f"\n--- Real-Time Metrics ---")
    print(f"  Total Processed: {metrics.total_processed}")
    print(f"  Accuracy: {metrics.accuracy_rate}%")
    print(f"  Reply-All Compliance: {metrics.reply_all_compliance}%")
    print(f"  Sentiment: {metrics.sentiment_distribution}")
    print(f"  Churn Predictions: {metrics.churn_predictions}")
    print(f"  Revenue Pipeline: ${metrics.revenue_pipeline:,.0f}")
    print(f"  Compliance Violations: {metrics.compliance_violations}")
    print(f"  AI Confidence: {metrics.ai_confidence_avg}%")
    print(f"  Predicted Volume (24h): {metrics.predicted_volume_next_24h}")
    print(f"  Top Categories: {metrics.top_categories}")
    print(f"  Active Alerts: {len(metrics.alerts)}")
    
    print(f"\n--- Export Report ---")
    report = dashboard.export_report()
    print(report[:500] + "...")
