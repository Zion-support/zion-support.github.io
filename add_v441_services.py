#!/usr/bin/env python3
import subprocess
import json

services = [
    {
        "id": "v441-scheduling-optimizer",
        "title": "AI Email Scheduling Optimizer",
        "description": "Analyzes recipient engagement patterns and suggests optimal send times for maximum open rates.",
        "features": ["Engagement pattern analysis", "Timezone detection", "Optimal send time suggestions", "Historical data analysis", "Reply-all enforcement"],
        "benefits": ["Higher open rates", "Better response times", "Global reach", "Data-driven scheduling"],
        "pricing": {"basic": "$49/month", "pro": "$129/month", "enterprise": "$299/month"},
        "contactInfo": {"email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950", "address": "364 E Main St STE 1008 Middletown DE 19709"},
        "icon": "⏰",
        "href": "/services/v441-scheduling-optimizer",
        "category": "ai",
        "popular": True
    },
    {
        "id": "v442-signature-manager",
        "title": "AI Email Signature Manager",
        "description": "Manages dynamic email signatures with branding, legal disclaimers, social links, and personalization.",
        "features": ["Dynamic signatures", "Legal disclaimers", "Social links", "Brand consistency", "Reply-all enforcement"],
        "benefits": ["Professional appearance", "Legal compliance", "Brand consistency", "Easy updates"],
        "pricing": {"basic": "$29/month", "pro": "$79/month", "enterprise": "$179/month"},
        "contactInfo": {"email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950", "address": "364 E Main St STE 1008 Middletown DE 19709"},
        "icon": "✍️",
        "href": "/services/v442-signature-manager",
        "category": "micro-saas"
    },
    {
        "id": "v443-unsubscribe-manager",
        "title": "AI Email Unsubscribe Manager",
        "description": "Detects subscription emails, manages bulk unsubscribe operations, and categorizes newsletters by engagement value.",
        "features": ["Subscription detection", "Bulk unsubscribe", "Engagement scoring", "Inbox cleanup", "Reply-all enforcement"],
        "benefits": ["Cleaner inbox", "Save time", "Reduce clutter", "Better focus"],
        "pricing": {"basic": "$19/month", "pro": "$49/month", "enterprise": "$99/month"},
        "contactInfo": {"email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950", "address": "364 E Main St STE 1008 Middletown DE 19709"},
        "icon": "🗑️",
        "href": "/services/v443-unsubscribe-manager",
        "category": "micro-saas"
    },
    {
        "id": "v444-forwarding-intelligence",
        "title": "AI Email Forwarding Intelligence",
        "description": "Smart email forwarding based on content analysis, recipient expertise, and organizational hierarchy.",
        "features": ["Content-based routing", "Expertise detection", "Org chart awareness", "Loop prevention", "Reply-all enforcement"],
        "benefits": ["Right person first time", "Faster resolution", "Reduced back-and-forth", "Expert matching"],
        "pricing": {"basic": "$59/month", "pro": "$149/month", "enterprise": "$349/month"},
        "contactInfo": {"email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950", "address": "364 E Main St STE 1008 Middletown DE 19709"},
        "icon": "↪️",
        "href": "/services/v444-forwarding-intelligence",
        "category": "ai"
    },
    {
        "id": "v445-backup-verification",
        "title": "AI Email Backup Verification",
        "description": "Verifies email backup integrity, detects corruption, validates recovery, and ensures compliance with retention policies.",
        "features": ["Integrity verification", "Recovery validation", "Compliance checking", "Corruption detection", "Reply-all enforcement"],
        "benefits": ["Data integrity", "Compliance ready", "Fast recovery", "Peace of mind"],
        "pricing": {"basic": "$69/month", "pro": "$179/month", "enterprise": "$449/month"},
        "contactInfo": {"email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950", "address": "364 E Main St STE 1008 Middletown DE 19709"},
        "icon": "💾",
        "href": "/services/v445-backup-verification",
        "category": "security"
    }
]

with open('C:/Users/Zion/tmp/zion-clone-test/app/data/servicesData.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Current count: {len(data)}")
data.extend(services)
print(f"New count: {len(data)}")

with open('C:/Users/Zion/tmp/zion-clone-test/app/data/servicesData.json', 'w', encoding='utf-8') as f:
    json.dump(data, f)

print("Done!")
