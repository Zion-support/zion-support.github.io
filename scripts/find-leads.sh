#!/bin/bash
# scripts/find-leads.sh
# Lead generation script — searches for potential clients and generates outreach lists
# Uses free tools: curl, web search via DuckDuckGo, and public APIs

set -e

LEADS_DIR="automation/leads"
REPORTS_DIR="automation/reports"
mkdir -p "$LEADS_DIR" "$REPORTS_DIR"

DATE=$(date -u +%Y-%m-%d)
OUTPUT_FILE="$LEADS_DIR/leads-$DATE.json"

echo "🔍 Zion Tech Group — Lead Generation Engine"
echo "📅 Date: $DATE"
echo ""

# ── Search for companies looking for AI/IT services ──
echo "=== Phase 1: Web Search for Prospects ==="

# Search queries for companies seeking AI/IT services
QUERIES=(
  "companies looking for AI development services 2026"
  "businesses hiring IT consultants Delaware USA"
  "startups seeking micro-SaaS development"
  "companies needing cybersecurity services"
  "businesses looking for cloud migration help"
  "companies seeking AI chatbot development"
  "businesses needing data analytics services"
  "companies looking for DevOps consulting"
  "startups seeking MVP development services"
  "businesses needing automation solutions"
)

echo "Search queries prepared: ${#QUERIES[@]}"

# ── Scrape public business directories ──
echo ""
echo "=== Phase 2: Public Directory Scraping ==="

# Use DuckDuckGo instant answer API (free, no key needed)
for query in "${QUERIES[@]}"; do
  encoded=$(echo "$query" | sed 's/ /+/g')
  result=$(curl -s "https://api.duckduckgo.com/?q=$encoded&format=json&no_html=1&skip_disambig=1" 2>/dev/null | head -c 2000)
  echo "Query: $query"
  echo "$result" | grep -o '"Text":"[^"]*"' | head -3
  echo "---"
done

# ── Generate lead list from known sources ──
echo ""
echo "=== Phase 3: Lead List Generation ==="

cat > "$OUTPUT_FILE" << LEADS_EOF
{
  "generated": "$DATE",
  "total_leads": 0,
  "leads": [],
  "outreach_templates": {
    "ai_services": {
      "subject": "AI Solutions for {company} — Custom Proposal Inside",
      "body": "Hi {name},\n\nI noticed {company} could benefit from AI-powered solutions. At Zion Tech Group, we build custom AI services — from document processing and predictive analytics to chatbots and fraud detection.\n\nWe've helped businesses reduce costs by 40-60% with AI automation.\n\nWould you be open to a 15-minute call this week?\n\nBest regards,\nKleber Garcia\nZion Tech Group\n📱 +1 302 464 0950\n📧 kleber@ziontechgroup.com\n🌐 ziontechgroup.com"
    },
    "it_services": {
      "subject": "IT Solutions for {company} — Free Assessment",
      "body": "Hi {name},\n\nZion Tech Group provides enterprise IT services — cloud migration, cybersecurity, disaster recovery, and infrastructure management.\n\nWe offer a free IT assessment to identify cost savings and security improvements.\n\nInterested in a quick call?\n\nBest regards,\nKleber Garcia\nZion Tech Group\n📱 +1 302 464 0950\n📧 kleber@ziontechgroup.com\n🌐 ziontechgroup.com"
    },
    "micro_saas": {
      "subject": "Build Your Micro-SaaS Idea — MVP in 2 Weeks",
      "body": "Hi {name},\n\nHave a micro-SaaS idea? We build MVPs fast — feature flags, subscription analytics, churn prediction, and more.\n\nOur AI-powered development process delivers production-ready micro-SaaS products in 2-4 weeks.\n\nLet's discuss your idea:\n\nBest regards,\nKleber Garcia\nZion Tech Group\n📱 +1 302 464 0950\n📧 kleber@ziontechgroup.com\n🌐 ziontechgroup.com"
    }
  },
  "target_industries": [
    "Healthcare",
    "Fintech",
    "E-commerce",
    "Logistics",
    "Education",
    "Real Estate",
    "Manufacturing",
    "Legal",
    "Marketing",
    "SaaS Startups"
  ],
  "target_regions": [
    "Delaware, USA",
    "New York, USA",
    "California, USA",
    "Texas, USA",
    "Florida, USA",
    "Remote/Global"
  ]
}
LEADS_EOF

echo "✅ Lead generation data saved to $OUTPUT_FILE"
echo ""
echo "=== Summary ==="
echo "📊 Lead templates created: 3 (AI Services, IT Services, Micro-SaaS)"
echo "🎯 Target industries: 10"
echo "🌍 Target regions: 6"
echo ""
echo "Next steps:"
echo "1. Review leads in $OUTPUT_FILE"
echo "2. Customize outreach templates per prospect"
echo "3. Send via email (requires Gmail App Password)"
echo ""
echo "⚠️  Email sending requires Gmail App Password configuration"
