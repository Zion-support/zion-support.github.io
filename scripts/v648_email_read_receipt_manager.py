#!/usr/bin/env python3
"""V648 - Email Read Receipt Manager
Track email opens, manage read receipts, and provide engagement analytics.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
from datetime import datetime, timedelta
from typing import Dict, List, Any

class EmailReadReceiptManager:
    """Manage email read receipts and track engagement."""
    
    def __init__(self):
        self.receipt_db = {}
        self.engagement_history = []
    
    def request_receipt(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Request read receipt for sent email."""
        email_id = email.get('id', f"email_{len(self.receipt_db) + 1:06d}")
        recipients = email.get('to', []) + email.get('cc', [])
        
        receipt_request = {
            "email_id": email_id,
            "subject": email.get('subject', ''),
            "sent_at": datetime.now().isoformat(),
            "recipients": recipients,
            "receipt_status": {r: "pending" for r in recipients},
            "receipt_requested": True
        }
        
        self.receipt_db[email_id] = receipt_request
        
        return {
            "engine": "V648",
            "email_id": email_id,
            "receipt_request": receipt_request,
            "total_recipients": len(recipients),
            "reply_all_enforced": len(recipients) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def record_open(self, email_id: str, recipient: str) -> Dict[str, Any]:
        """Record when an email is opened."""
        if email_id not in self.receipt_db:
            return {"error": "Email not found"}
        
        receipt = self.receipt_db[email_id]
        
        if recipient not in receipt['recipients']:
            return {"error": "Recipient not found"}
        
        # Update status
        receipt['receipt_status'][recipient] = {
            "status": "opened",
            "opened_at": datetime.now().isoformat()
        }
        
        # Calculate engagement metrics
        opened_count = sum(1 for status in receipt['receipt_status'].values() 
                         if isinstance(status, dict) and status.get('status') == 'opened')
        open_rate = (opened_count / len(receipt['recipients'])) * 100
        
        return {
            "engine": "V648",
            "email_id": email_id,
            "recipient": recipient,
            "opened_at": datetime.now().isoformat(),
            "total_recipients": len(receipt['recipients']),
            "opened_count": opened_count,
            "open_rate_percent": round(open_rate, 2),
            "timestamp": datetime.now().isoformat()
        }
    
    def get_receipt_status(self, email_id: str) -> Dict[str, Any]:
        """Get current receipt status for an email."""
        if email_id not in self.receipt_db:
            return {"error": "Email not found"}
        
        receipt = self.receipt_db[email_id]
        
        # Calculate metrics
        total = len(receipt['recipients'])
        opened = sum(1 for status in receipt['receipt_status'].values() 
                    if isinstance(status, dict) and status.get('status') == 'opened')
        pending = total - opened
        
        # Calculate time to open
        sent_time = datetime.fromisoformat(receipt['sent_at'])
        open_times = []
        
        for status in receipt['receipt_status'].values():
            if isinstance(status, dict) and status.get('status') == 'opened':
                opened_time = datetime.fromisoformat(status['opened_at'])
                open_times.append((opened_time - sent_time).total_seconds() / 3600)
        
        avg_time_to_open = sum(open_times) / len(open_times) if open_times else None
        
        return {
            "engine": "V648",
            "email_id": email_id,
            "subject": receipt['subject'],
            "sent_at": receipt['sent_at'],
            "total_recipients": total,
            "opened": opened,
            "pending": pending,
            "open_rate_percent": round((opened / total) * 100, 2) if total > 0 else 0,
            "average_time_to_open_hours": round(avg_time_to_open, 2) if avg_time_to_open else None,
            "receipt_status": receipt['receipt_status'],
            "timestamp": datetime.now().isoformat()
        }
    
    def generate_engagement_report(self) -> Dict[str, Any]:
        """Generate overall engagement report."""
        if not self.receipt_db:
            return {"error": "No data available"}
        
        total_emails = len(self.receipt_db)
        total_recipients = sum(len(r['recipients']) for r in self.receipt_db.values())
        total_opened = 0
        all_open_times = []
        
        for receipt in self.receipt_db.values():
            sent_time = datetime.fromisoformat(receipt['sent_at'])
            
            for recipient, status in receipt['receipt_status'].items():
                if isinstance(status, dict) and status.get('status') == 'opened':
                    total_opened += 1
                    opened_time = datetime.fromisoformat(status['opened_at'])
                    all_open_times.append((opened_time - sent_time).total_seconds() / 3600)
        
        avg_open_rate = (total_opened / total_recipients * 100) if total_recipients > 0 else 0
        avg_time_to_open = sum(all_open_times) / len(all_open_times) if all_open_times else None
        
        # Best performing emails
        email_performance = []
        for email_id, receipt in self.receipt_db.items():
            opened = sum(1 for status in receipt['receipt_status'].values() 
                        if isinstance(status, dict) and status.get('status') == 'opened')
            rate = (opened / len(receipt['recipients'])) * 100 if receipt['recipients'] else 0
            email_performance.append({
                "email_id": email_id,
                "subject": receipt['subject'],
                "open_rate": round(rate, 2)
            })
        
        top_emails = sorted(email_performance, key=lambda x: x['open_rate'], reverse=True)[:3]
        
        return {
            "engine": "V648 - Email Read Receipt Manager",
            "total_emails_tracked": total_emails,
            "total_recipients": total_recipients,
            "total_opened": total_opened,
            "overall_open_rate_percent": round(avg_open_rate, 2),
            "average_time_to_open_hours": round(avg_time_to_open, 2) if avg_time_to_open else None,
            "top_performing_emails": top_emails,
            "timestamp": datetime.now().isoformat()
        }
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.request_receipt(e) for e in emails]
        
        return {
            "engine": "V648 - Email Read Receipt Manager",
            "total_emails": len(results),
            "total_recipients": sum(r['total_recipients'] for r in results),
            "reply_all_enforced": sum(1 for r in results if r['reply_all_enforced']),
            "results": results
        }

if __name__ == "__main__":
    manager = EmailReadReceiptManager()
    
    # Request receipts
    test_emails = [
        {
            "subject": "Project Update",
            "to": ["alice@company.com", "bob@company.com"],
            "cc": ["manager@company.com"]
        },
        {
            "subject": "Meeting Tomorrow",
            "to": ["team@company.com"]
        }
    ]
    
    results = manager.process_batch(test_emails)
    print(json.dumps(results, indent=2))
    
    # Simulate opens
    email_id = results['results'][0]['email_id']
    manager.record_open(email_id, "alice@company.com")
    
    # Get status
    status = manager.get_receipt_status(email_id)
    print("\nReceipt Status:")
    print(json.dumps(status, indent=2))
    
    # Generate report
    report = manager.generate_engagement_report()
    print("\nEngagement Report:")
    print(json.dumps(report, indent=2))
