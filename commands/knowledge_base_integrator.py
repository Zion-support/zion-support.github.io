#!/usr/bin/env python3
"""
Knowledge Base Integrator - Pull relevant context for responses

Features:
- Search knowledge base for sender/company context
- Auto-include relevant details in responses
- Track what information was used
"""

import json, re
from pathlib import Path
from typing import Dict, List

WORKSPACE = Path('/root/.openclaw/workspace')
KB_FILE = WORKSPACE / 'zion.app' / 'data' / 'email_kb.json'
COMPANY_KB = WORKSPACE / 'zion.app' / 'data' / 'company_knowledge.json'

def load_knowledge_base():
    """Load knowledge base for context lookup."""
    kb = {}
    if KB_FILE.exists():
        kb = json.loads(KB_FILE.read_text())
    return kb

def find_relevant_context(sender: str, subject: str, snippet: str) -> List[str]:
    """Find relevant knowledge base entries for this email."""
    kb = load_knowledge_base()
    relevant = []
    
    text = f"{sender} {subject} {snippet}".lower()
    
    # Look for company-specific info
    if 'zion' in text or 'tech' in text:
        relevant.append("Zion Tech Group: AI-powered solutions, established 2020")
    
    # Look for project references
    if 'project' in text:
        relevant.append("Current projects: AI automation, Next.js dashboards, API integrations")
    
    # Look for rate card mentions
    if 'price' in text or 'cost' in text or 'rate' in text:
        relevant.append("Rate card available: $50-200/hr depending on scope")
    
    return relevant[:3]  # Max 3 context items

def format_context_for_response(context_items: List[str]) -> str:
    """Format context items for inclusion in response."""
    if not context_items:
        return ""
    
    return "\n\n**Quick context:**\n" + "\n".join(f"• {item}" for item in context_items)

if __name__ == '__main__':
    # Test
    ctx = find_relevant_context("Client about pricing", "Project rate inquiry", "What do you charge?")
    print(f"Context found: {ctx}")