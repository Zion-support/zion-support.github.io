#!/bin/bash

# Netlify Functions Cleanup Script
# This script removes duplicate and unnecessary functions to reduce build time

echo "🧹 Starting Netlify Functions Cleanup..."
echo "📊 Current function count: $(find /workspace/netlify/functions -name "*.js" | wc -l)"

# Create backup directory
mkdir -p /workspace/netlify/functions-backup
echo "📁 Created backup directory"

# Remove .md files (reports) from functions directory
echo "🗑️  Removing .md report files from functions directory..."
find /workspace/netlify/functions -name "*.md" -exec mv {} /workspace/netlify/functions-backup/ \;

# Remove duplicate functions (keeping kebab-case versions, removing snake_case)
echo "🔄 Removing snake_case duplicates (keeping kebab-case versions)..."

# List of duplicate patterns to clean up
duplicates=(
    "a11y_alt_text_runner.js"
    "ai_changelog_runner.js"
    "ai_trends_radar_runner.js"
    "anchor_links_auto_fixer.js"
    "autonomous_meta_orchestrator.js"
    "broken_image_scanner.js"
    "broken_image_scanner_runner.js"
    "canonical_auditor.js"
    "cloud_orchestrator.js"
    "code_smell_audit_runner.js"
    "component_coupling_graph_runner.js"
    "component_size_report.js"
    "content_freshness_score_runner.js"
    "continuous_front_runner.js"
    "continuous_orchestrator.js"
    "dead_code_report.js"
    "deps_auto_upgrade_runner.js"
    "docs_index_runner.js"
    "docs_search_index_runner.js"
    "duplicate_media_finder_runner.js"
    "external_link_check_runner.js"
    "fast_front_promoter.js"
    "fast_orchestrator.js"
    "features_capabilities_benefits_advertiser.js"
    "front_ads_promoter.js"
    "front_enhancer.js"
    "front_index_orchestrator.js"
    "front_maximizer.js"
    "front_visionary_expander.js"
    "frontpage_enhancer.js"
    "home_visionary_expander.js"
    "homepage_advertiser.js"
    "hyper_front_index_accelerator.js"
    "image_optimizer_runner.js"
    "innovation_lab.js"
    "intelligent_meta_orchestrator.js"
    "internal_link_graph_runner.js"
    "knowledge_pack_runner.js"
    "license_compliance_auditor.js"
    "link_and_health_scheduler.js"
    "marketing_and_features_promo.js"
    "meta_audit.js"
    "metadata_optimizer_runner.js"
    "netlify_auto_healer_runner.js"
    "newsroom_runner.js"
    "og_image_update_runner.js"
    "orphan_pages_detector.js"
    "pagespeed_insights_runner.js"
    "readme_advertiser.js"
    "repo_knowledge_graph_runner.js"
    "repo_radar_runner.js"
    "revenue_ideas_lab.js"
    "roadmap_curator.js"
    "robots_auditor.js"
    "security_audit_runner.js"
    "seo_audit_runner.js"
    "site_404_map_runner.js"
    "sitemap_runner.js"
    "stale_content_auditor_runner.js"
    "todo_scanner_runner.js"
    "todo_summary_runner.js"
    "topic_cluster_builder_runner.js"
    "topics_map_runner.js"
    "ultrafast_front_orchestrator.js"
    "ultrafast_orchestrator.js"
)

# Move duplicates to backup
for file in "${duplicates[@]}"; do
    if [ -f "/workspace/netlify/functions/$file" ]; then
        echo "  📦 Moving $file to backup"
        mv "/workspace/netlify/functions/$file" "/workspace/netlify/functions-backup/"
    fi
done

# Remove test and temporary functions
echo "🧪 Removing test and temporary functions..."
test_patterns=(
    "test-function.js"
    "trigger_all_and_commit.js"
    "trigger-all-and-commit.js"
    "rapid-git-sync.js"
    "ultrafast-git-sync.js"
    "hyper-sync-committer.js"
)

for file in "${test_patterns[@]}"; do
    if [ -f "/workspace/netlify/functions/$file" ]; then
        echo "  🗑️  Removing $file"
        rm "/workspace/netlify/functions/$file"
    fi
done

# Remove functions that are likely not needed for production
echo "🚫 Removing non-essential functions..."
non_essential=(
    "auto_discovery_runner.js"
    "auto_scheduler.js"
    "branch-cleanup-runner.js"
    "branch-cleanup-scheduler.js"
    "cron-daily-rankings.js"
    "cron-hourly-uptime.js"
    "cron-weekly-changelog.js"
    "cron-weekly-dao.js"
    "cron-weekly-deps.js"
    "cron-weekly-learn.js"
    "cron-weekly-links.js"
    "cron-weekly-pagespeed.js"
    "cron-weekly-seo.js"
    "cron-weekly-sitemap.js"
    "dead-code-scan-scheduler.js"
    "broken-image-scanner-scheduler.js"
    "image-optimizer-scheduler.js"
    "ai-changelog-scheduler.js"
    "seo-audit-scheduler.js"
    "security-audit-scheduler.js"
    "docs-index-scheduler.js"
    "link-and-health-scheduler.js"
    "repo-radar-scheduler.js"
)

for file in "${non_essential[@]}"; do
    if [ -f "/workspace/netlify/functions/$file" ]; then
        echo "  📦 Moving $file to backup (non-essential)"
        mv "/workspace/netlify/functions/$file" "/workspace/netlify/functions-backup/"
    fi
done

# Final count
final_count=$(find /workspace/netlify/functions -name "*.js" | wc -l)
echo ""
echo "✅ Cleanup completed!"
echo "📊 Final function count: $final_count"
echo "📁 Backup created in: /workspace/netlify/functions-backup"
echo "💾 Backup size: $(du -sh /workspace/netlify/functions-backup | cut -f1)"

# Show remaining functions
echo ""
echo "📋 Remaining functions:"
ls /workspace/netlify/functions/*.js | wc -l
echo ""
echo "🎯 Top remaining function categories:"
ls /workspace/netlify/functions/*.js | sed 's/.*\///' | sed 's/-.*//' | sort | uniq -c | sort -nr | head -10