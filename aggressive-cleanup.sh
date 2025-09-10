#!/bin/bash

# Aggressive Netlify Functions Cleanup Script
# This script removes more non-essential functions to get to a manageable number

echo "🚀 Starting Aggressive Functions Cleanup..."
echo "📊 Current function count: $(find /workspace/netlify/functions -name "*.js" | wc -l)"

# Remove more non-essential functions
echo "🗑️  Removing additional non-essential functions..."

# Remove all runner functions (they're typically for automation, not core functionality)
echo "  🏃 Removing runner functions..."
find /workspace/netlify/functions -name "*runner*.js" -exec mv {} /workspace/netlify/functions-backup/ \;

# Remove audit functions (they're for analysis, not core functionality)
echo "  🔍 Removing audit functions..."
find /workspace/netlify/functions -name "*audit*.js" -exec mv {} /workspace/netlify/functions-backup/ \;

# Remove report functions
echo "  📊 Removing report functions..."
find /workspace/netlify/functions -name "*report*.js" -exec mv {} /workspace/netlify/functions-backup/ \;

# Remove orchestrator functions (they're typically for complex automation)
echo "  🎼 Removing orchestrator functions..."
find /workspace/netlify/functions -name "*orchestrator*.js" -exec mv {} /workspace/netlify/functions-backup/ \;

# Remove autonomous functions (they're for automation)
echo "  🤖 Removing autonomous functions..."
find /workspace/netlify/functions -name "autonomous-*.js" -exec mv {} /workspace/netlify/functions-backup/ \;

# Remove AI functions (they're for automation)
echo "  🧠 Removing AI automation functions..."
find /workspace/netlify/functions -name "ai-*.js" -exec mv {} /workspace/netlify/functions-backup/ \;

# Remove continuous functions (they're for automation)
echo "  🔄 Removing continuous functions..."
find /workspace/netlify/functions -name "continuous-*.js" -exec mv {} /workspace/netlify/functions-backup/ \;

# Remove auto functions (they're for automation)
echo "  ⚙️  Removing auto functions..."
find /workspace/netlify/functions -name "auto-*.js" -exec mv {} /workspace/netlify/functions-backup/ \;

# Remove cron functions (they're for scheduled tasks)
echo "  ⏰ Removing cron functions..."
find /workspace/netlify/functions -name "cron-*.js" -exec mv {} /workspace/netlify/functions-backup/ \;

# Remove specific non-essential functions
echo "  🎯 Removing specific non-essential functions..."
non_essential_specific=(
    "accessibility-quickscan.js"
    "asset-inventory-runner.js"
    "asset-size-report.js"
    "async-concurrency-tester.js"
    "automation-catalog.js"
    "automation-guardian.js"
    "broken-image-defender.js"
    "cache-warmer.js"
    "changelog-publisher.js"
    "cloud-automation-inventor.js"
    "competitive-intel-radar.js"
    "content-curator.js"
    "content-gap-analyzer.js"
    "content-gap-finder.js"
    "content-keywords-runner.js"
    "content-refresh-runner.js"
    "content-staleness-auditor.js"
    "content-staleness-runner.js"
    "content-ux-curator.js"
    "dependencies-guardian.js"
    "dependency-health-radar-runner.js"
    "dependency-health-runner.js"
    "dependency-intelligence-upgrader.js"
    "dependency-licenses-audit.js"
    "deps-auto-upgrader.js"
    "deps-upgrade-daily.js"
    "design-token-harmonizer-runner.js"
    "diversification-runner.js"
    "docs-drift-detector.js"
    "docs-freshness-runner.js"
    "docs-gap-finder-runner.js"
    "docs-glossary-builder.js"
    "docs-pages-indexer.js"
    "docs-seo-optimizer.js"
    "duplicate-content-detector.js"
    "edge-cache-warmer.js"
    "edge-case-handler.js"
    "embed-health-audit-runner.js"
    "external-link-check.js"
    "external-link-checker.js"
    "external-link-rel-auditor-runner.js"
    "freshness-audit-runner.js"
    "front-autopilot.js"
    "front-functions-injector.js"
    "front-index-advertiser.js"
    "frontend-sync-autonomous-runner.js"
    "guardian-orchestrator.js"
    "guardian-security-fast.js"
    "guardian-ultra.js"
    "headers-enforcer.js"
    "home-functions-injector.js"
    "hyper-automation-orchestrator.js"
    "hyper-front-index-accelerator.js"
    "i18n-audit-runner.js"
    "i18n-extractor-runner.js"
    "i18n-seed-runner.js"
    "image-lazyload-auditor.js"
    "image-optimizer.js"
    "innovation-generator.js"
    "innovation-lab.js"
    "innovation-scout.js"
    "intelligent-meta-orchestrator.js"
    "internal-anchor-audit-runner.js"
    "internal-link-orphan-audit.js"
    "internal-link-sentinel-runner.js"
    "internal-link-suggester.js"
    "internal-redirect-optimizer.js"
    "knowledge-and-innovation.js"
    "knowledge-graph-orchestrator.js"
    "knowledge-graph.js"
    "license-compliance-auditor.js"
    "license-compliance-runner.js"
    "link-health-scheduler.js"
    "linting-orchestrator-runner.js"
    "llm-content-curator.js"
    "marketing-and-features-promo.js"
    "media-orchestrator.js"
    "media-press-runner.js"
    "meta-accelerator.js"
    "meta-og-enhancer-runner.js"
    "meta-orchestrator-runner.js"
    "meta-tags-audit-runner.js"
    "metadata-schema-runner.js"
    "netlify-auto-healer-runner.js"
    "newsroom-auto.js"
    "newsroom-generator.js"
    "newsroom-orchestrator.js"
    "newsroom-publisher.js"
    "newsroom-scheduler.js"
    "og-coverage-auditor.js"
    "og-image-maker.js"
    "og-image-refresh.js"
    "og-image-scheduler.js"
    "og-meta-audit-runner.js"
    "og-meta-auditor.js"
    "og-metadata-auditor.js"
    "og-preview-validator.js"
    "og-tags-validator.js"
    "opportunity-miner.js"
    "orphan-asset-report-runner.js"
    "orphan-page-audit-runner.js"
    "orphan-page-detector.js"
    "orphan-page-linker-runner.js"
    "orphan-pages-report-runner.js"
    "orphan-pages-runner.js"
    "orphan-routes-detector.js"
    "perf-budget-enforcer.js"
    "perf-budget-guardian.js"
    "perf-budget-runner.js"
    "performance-budget-checker.js"
    "performance-budget-runner.js"
    "performance-budget-watcher.js"
    "performance-hints-runner.js"
    "performance-monitoring-runner.js"
    "readme-badges-updater.js"
    "redirect-404-suggester.js"
    "redirects-synthesizer.js"
    "repo-fitness-score.js"
    "repo-graph-runner.js"
    "repo-insights-digest.js"
    "repo-knowledge-graph.js"
    "repo-radar-metrics.js"
    "revenue-agents-runner.js"
    "revenue-cta-inserter-runner.js"
    "revenue-ideas-runner.js"
    "roadmap-auto-generator.js"
    "roadmap-builder-runner.js"
    "roadmap-runner.js"
    "roadmap-synthesizer.js"
    "robots-auditor.js"
    "rss-feed-generator.js"
    "scheduled-nudges.ts"
    "security-and-integrity-runner.js"
    "security-audit.js"
    "self-healing-guardian.js"
    "semantic-code-map-runner.js"
    "seo-schema-audit-runner.js"
    "sitemap-pinger.js"
    "smart-redirects.js"
    "stale-content-refresher.js"
    "structured-data-auditor.js"
    "tech-debt-dashboard.js"
    "todo-scanner.js"
    "ui-beautifier-runner.js"
    "ui-evolution-runner.js"
    "ultrafast-front-orchestrator.js"
    "ultrafast-orchestrator.js"
)

for file in "${non_essential_specific[@]}"; do
    if [ -f "/workspace/netlify/functions/$file" ]; then
        echo "    📦 Moving $file to backup"
        mv "/workspace/netlify/functions/$file" "/workspace/netlify/functions-backup/"
    fi
done

# Final count
final_count=$(find /workspace/netlify/functions -name "*.js" | wc -l)
echo ""
echo "✅ Aggressive cleanup completed!"
echo "📊 Final function count: $final_count"
echo "📁 Backup size: $(du -sh /workspace/netlify/functions-backup | cut -f1)"

# Show remaining functions
echo ""
echo "📋 Remaining functions:"
ls /workspace/netlify/functions/*.js | wc -l
echo ""
echo "🎯 Remaining function categories:"
ls /workspace/netlify/functions/*.js | sed 's/.*\///' | sed 's/-.*//' | sort | uniq -c | sort -nr | head -10

echo ""
echo "📝 Remaining functions list:"
ls /workspace/netlify/functions/*.js | sed 's/.*\///' | sort