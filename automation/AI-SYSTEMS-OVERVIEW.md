# 🤖 AI Systems Overview

Comprehensive overview of all autonomous AI systems in the Zion App.

Last Updated: November 3, 2025

## AI Improvement Systems

### 1. AI App Improvement Specialist (AAIS) ⭐ NEW
**Status**: Active | **Version**: 2.0.0 | **Path**: `automation/ai-app-improvement-specialist.cjs`

**Description**: Next-generation autonomous AI system for comprehensive app improvement

**Features**:
- Deep code analysis with pattern recognition
- Intelligent issue prioritization (critical → low)
- Automated refactoring and optimization
- Security vulnerability scanning and patching
- Performance profiling and bundle size analysis
- Accessibility and SEO improvements
- Architecture analysis (circular dependencies, coupling)
- Dependency health management
- Testing coverage analysis
- Comprehensive health scoring (0-100)
- Detailed reporting with actionable recommendations

**Operation Modes**:
- **Standard**: Balanced improvements (default)
- **Aggressive**: More improvements, faster iteration
- **Conservative**: Critical fixes only

**Runs**: Every 30 minutes via PM2 | Every 6 hours via GitHub Actions

**Commands**:
```bash
# One-time run
node automation/ai-app-improvement-specialist.cjs run

# Analysis only
node automation/ai-app-improvement-specialist.cjs analyze

# Continuous mode
AAIS_CONTINUOUS=true node automation/ai-app-improvement-specialist.cjs continuous

# Quick start script
./automation/start-ai-app-improvement-specialist.sh run

# PM2
pm2 start ecosystem.config.cjs --only ai-app-improvement-specialist
```

**Current Health Score**: 96/100 ✅

---

### 2. AI Continuous Improvement Agent
**Status**: Active | **Path**: `automation/ai-continuous-improvement-agent.cjs`

**Description**: Advanced continuous improvement system with automated fixes

**Features**:
- Real-time error detection and fixing
- Proactive code quality improvements
- Performance optimization
- Security vulnerability patching
- Pattern-based learning

**Runs**: Every 10 minutes via PM2

---

### 3. AI Development Agent
**Status**: Active | **Path**: `automation/ai-development-agent.cjs`

**Description**: Autonomous code development and improvement

**Features**:
- Analyzes codebase for improvements
- Identifies bugs and technical debt
- Fixes linting and type errors
- Addresses security vulnerabilities
- Improves accessibility
- Enhances code quality

**Runs**: Every 6 hours via PM2

---

### 4. AI Master Orchestrator
**Status**: Active | **Path**: `automation/ai-master-orchestrator.cjs`

**Description**: Coordinates all AI agents and manages improvement queue

**Features**:
- Prioritizes tasks
- Manages improvement queue
- Monitors system health
- Generates comprehensive reports
- Commits and pushes changes automatically

**Runs**: Every hour via PM2

---

### 5. AI Code Generator
**Status**: On-demand | **Path**: `automation/ai-code-generator.cjs`

**Description**: AI-powered code generation (requires API keys)

**Features**:
- Generates new components using AI
- Creates comprehensive tests
- Refactors code
- Fixes complex bugs
- Generates documentation
- Suggests new features

**Requires**: `ANTHROPIC_API_KEY` or `OPENAI_API_KEY`

**Runs**: Weekly on Sunday (feature suggestions)

---

## Automation Systems

### 6. Comprehensive Continuous Automation
**Status**: Active | **Path**: `scripts/automation/comprehensive-continuous-automation.cjs`

**Description**: Master orchestrator for fast operation

**Runs**: Every 5 minutes via PM2

---

### 7. Error Monitor
**Status**: Active | **Path**: `scripts/automation/error-monitor.cjs`

**Description**: Fast error detection

**Runs**: Every 5 minutes via PM2

---

### 8. Health Checker
**Status**: Active | **Path**: `scripts/automation/health-checker.cjs`

**Description**: Continuous health monitoring

**Runs**: Every 3 minutes via PM2

---

### 9. Auto Fixer
**Status**: Active | **Path**: `scripts/automation/auto-fixer.cjs`

**Description**: Fast automated fixes

**Runs**: Every 10 minutes via PM2

---

### 10. Syntax Fixer
**Status**: Active | **Path**: `scripts/automation/syntax-fixer.cjs`

**Description**: Fast syntax error fixing

**Runs**: Every 15 minutes via PM2

---

### 11. Dependency Manager
**Status**: Active | **Path**: `scripts/automation/dependency-manager.cjs`

**Description**: Hourly dependency checks

**Runs**: Every hour via PM2

---

### 12. Build Monitor
**Status**: Active | **Path**: `scripts/automation/build-monitor.cjs`

**Description**: Fast build monitoring

**Runs**: Every 10 minutes via PM2

---

### 13. Intelligent Orchestrator
**Status**: Active | **Path**: `scripts/automation/intelligent-automation-orchestrator.cjs`

**Description**: Master coordination

**Runs**: Every 20 minutes via PM2

---

## Content & Marketing Systems

### 14. AI Content Generator
**Status**: Active | **Path**: `automation/ai-content-generator-automation.cjs`

**Description**: ULTRA-FAST continuous content generation

**Runs**: Continuously (no interval)

---

### 15. AI Content Optimization
**Status**: Active | **Path**: `automation/ai-content-optimization-automation.js`

**Description**: Optimizes content for SEO and engagement

**Features**:
- SEO optimization
- Readability improvements
- Engagement enhancements
- Meta tags optimization
- Image optimization

---

### 16. AI SEO Monitor & Optimizer
**Status**: Active | **Path**: `automation/ai-seo-monitor-optimizer.cjs`

**Description**: Continuous SEO health monitoring and optimization

**Runs**: Every 30 minutes via PM2

---

### 17. LinkedIn Automation
**Status**: Active | **Path**: `automation/ai-social-media-automation.js`

**Description**: Continuous LinkedIn marketing

**Requires**: `LINKEDIN_ACCESS_TOKEN`, `LINKEDIN_URN` env vars

**Runs**: Every 4 hours via PM2

---

### 18. Instagram Automation
**Status**: Active | **Path**: `automation/ai-social-media-automation.js`

**Description**: Continuous Instagram marketing

**Requires**: `IG_USER_ID`, `IG_ACCESS_TOKEN` env vars

**Runs**: Every 4 hours via PM2 (offset from LinkedIn)

---

## Meta-Automation Systems

### 19. AI PM2 Optimization Agent
**Status**: Active | **Path**: `automation/ai-pm2-optimization-agent.cjs`

**Description**: Meta-automation to continuously improve PM2 ecosystem

**Runs**: Every 2 hours via PM2

---

### 20. Automation Dashboard
**Status**: Active | **Path**: `scripts/automation/automation-dashboard.cjs`

**Description**: Real-time monitoring dashboard

**Port**: 3001

**Runs**: Continuously via PM2

---

### 21. Log Cleaner
**Status**: Active | **Path**: `scripts/automation/log-cleaner.cjs`

**Description**: Daily log cleanup

**Runs**: Daily at 2 AM via PM2

---

### 22. Lighthouse Production Audit 🆕
**Status**: Active | **Path**: `automation/ai-lighthouse-production-audit.cjs`

**Description**: Audits the live production site (https://ziontechgroup.com) using Lighthouse

**Features**:
- Performance, accessibility, best-practices, SEO scores
- Stores results in `automation/reports/lighthouse-production-latest.json`
- Configurable thresholds for CI failure
- Trend analysis support

**Runs**: Weekly on Sunday via GitHub Actions and cron

**Commands**:
```bash
npm run lighthouse:production
npm run lighthouse:production-threshold  # Fail if any score < 80
```

---

### 23. AI Ecosystem Intelligence Agent 🆕
**Status**: Active | **Path**: `automation/ai-ecosystem-intelligence-agent.cjs`

**Description**: Analyzes the automation ecosystem and generates actionable suggestions for new automations, cron jobs, and improvements.

**Features**:
- Scans existing agents, workflows, and cron jobs
- Identifies gaps and improvement opportunities
- Suggests new automation ideas
- Proposes new cron jobs and GitHub workflows
- Generates implementation-ready recommendations

**Runs**: Daily at 6 AM via cron | Weekly Monday via GitHub Actions

**Commands**:
```bash
npm run ecosystem:intel
npm run ecosystem:suggestions
npm run ecosystem:summary
```

---

### 24. AI Content Freshness Agent 🆕
**Status**: Active | **Path**: `automation/ai-content-freshness-agent.cjs`

**Description**: Scans blog posts, case studies, and key pages for stale content.

**Features**:
- Extracts date metadata from content files
- Uses file mtime as fallback
- Configurable stale threshold (default 12 months)
- Blog metadata check (posts >18mo, missing dates)
- Generates actionable freshness reports

**Runs**: Weekly Monday 4 AM via cron | Weekly via GitHub Actions

**Commands**:
```bash
npm run content:freshness
npm run content:freshness-summary
npm run content:metadata-check
```

---

### 25. AI Telegram Notification Agent 🆕
**Status**: Active | **Path**: `automation/ai-telegram-notification-agent.cjs`

**Description**: Sends automation alerts to Telegram (health, Lighthouse, security, stale content).

**Features**:
- Respects USER.md: no notifications 23:00–08:00 (America/Sao_Paulo)
- Urgent prefix `[URGENTE]` bypasses quiet hours
- Health, digest, Lighthouse, freshness subcommands

**Requires**: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`

**Runs**: Daily 9 AM digest via cron (after report aggregator)

**Commands**:
```bash
npm run telegram:send "message"
npm run telegram:health
npm run telegram:digest
npm run telegram:lighthouse
npm run telegram:freshness
```

---

### 26. AI Report Aggregator Agent 🆕
**Status**: Active | **Path**: `automation/ai-report-aggregator-agent.cjs`

**Description**: Aggregates automation reports into a single dashboard (JSON + HTML).

**Features**:
- Unified view: health, Lighthouse, content freshness, site health, dependencies
- Generates `aggregate-dashboard.json` and `aggregate-dashboard.html`
- Status: ok | warning | critical

**Runs**: Daily 7 AM via cron

**Commands**:
```bash
npm run reports:aggregate
```

---

### 27. AI Test Coverage Improvement Agent 🆕
**Status**: Active | **Path**: `automation/ai-test-coverage-improvement-agent.cjs`

**Description**: Identifies untested critical paths (app/, components/, lib/) and suggests tests.

**Features**:
- Runs coverage, finds uncovered/low-coverage critical files
- Generates actionable suggestions
- Complements ai-test-automation-agent (which generates tests)

**Runs**: Weekly Tuesday 5 AM via cron

**Commands**:
```bash
npm run test:coverage-improvement
```

---

### 28. AI Suggestion Importer Agent 🆕
**Status**: Active | **Path**: `automation/ai-suggestion-importer-agent.cjs`

**Description**: Reads ecosystem-suggestions.json and autonomously implements safe suggestions (cron jobs, etc.).

**Features**:
- Applies cron_job suggestions to automation.cron
- Logs workflow/enhancement suggestions for review
- Makes the ecosystem self-improving

**Runs**: Daily 6 AM via daily pipeline (after ecosystem intel)

**Commands**:
```bash
npm run suggestions:import
```

---

### 29. AI Daily Automation Pipeline 🆕
**Status**: Active | **Path**: `automation/ai-daily-automation-pipeline.cjs`

**Description**: Orchestrates key agents in sequence for a full daily run.

**Pipeline**: Ecosystem intel → Suggestion importer → Content freshness → SEO content refresh → Report aggregator → Telegram digest

**Runs**: Daily 6 AM via cron | Weekly Monday via GitHub Actions

**Commands**:
```bash
npm run automation:daily-pipeline
SKIP_TELEGRAM=1 npm run automation:daily-pipeline  # Skip Telegram
```

---

### 30. Broken Link Fixer - External Link History 🆕
**Status**: Active | **Path**: `automation/ai-broken-link-fixer.cjs`

**Enhancement**: Tracks external link health over time. Stores failure history in `automation/data/external-link-history.json`. Reports repeated failures (2+ times) for proactive maintenance.

---

### 31. AI Dependency Outdated Agent 🆕
**Status**: Active | **Path**: `automation/ai-dependency-outdated-agent.cjs`

**Description**: Lightweight agent that runs `npm outdated` and categorizes updates by major/minor/patch.

**Features**:
- Generates report with safe update recommendations
- Stores history in `automation/data/dependency-outdated-history.json`
- Complements ai-smart-dependency-manager

**Runs**: Weekly Thursday 5 AM via cron | Weekly Thursday via GitHub Actions

**Commands**:
```bash
npm run deps:outdated
npm run deps:outdated-summary
```

---

### 32. AI Bundle Size Monitor Agent 🆕
**Status**: Active | **Path**: `automation/ai-bundle-size-monitor-agent.cjs`

**Description**: Builds the app, measures output size, tracks history, and detects regressions.

**Features**:
- Alerts when bundle size increases >10% (configurable via BUNDLE_REGRESSION_THRESHOLD)
- Stores history in `automation/data/bundle-size-history.json`
- Complements PR bundle-size workflow

**Runs**: Weekly Friday 5 AM via cron | Weekly Thursday via GitHub Actions

**Commands**:
```bash
npm run bundle:monitor
npm run bundle:monitor-summary
```

---

### 33. AI Dead Code Detector Agent 🆕
**Status**: Active | **Path**: `automation/ai-dead-code-detector-agent.cjs`

**Description**: Uses depcheck to find unused dependencies and devDependencies.

**Features**:
- Generates actionable removal recommendations
- Reduces bundle size and maintenance burden

**Runs**: Weekly Thursday 4 AM via cron | Weekly Thursday via GitHub Actions

**Commands**:
```bash
npm run deadcode:detect
npm run deadcode:detect-summary
```

---

### 34. AI CI Failure Recovery Agent 🆕
**Status**: Active | **Path**: `automation/ai-ci-failure-recovery-agent.cjs`

**Description**: Diagnoses CI failures and attempts automated recovery (lint fix, type-check, tests).

**Features**:
- Runs lint:fix, type-check, test:ci
- Generates recovery report with next steps
- Optionally commits fixes when AUTO_COMMIT=1
- Triggered by GitHub Actions when CI fails on main

**Runs**: On-demand | workflow_dispatch | After CI failure via ai-ci-recovery.yml

**Commands**:
```bash
npm run ci:recovery
AUTO_COMMIT=1 npm run ci:recovery  # Auto-commit fixes
```

---

### 35. AI SEO Content Refresh Agent 🆕
**Status**: Active | **Path**: `automation/ai-seo-content-refresh-agent.cjs`

**Description**: Identifies high-value stale pages for content refresh (blog, services, solutions).

**Features**:
- Uses content freshness data
- Prioritizes by page type and staleness
- Generates actionable refresh recommendations
- Integrated into daily pipeline

**Runs**: Weekly Wednesday 5 AM via cron | Daily via pipeline

**Commands**:
```bash
npm run seo:content-refresh
npm run seo:content-refresh-summary
```

---

### 36. Python Agents (Lead Discovery, Email Interaction, Feature Promotion) 🆕
**Status**: Active | **Path**: `commands/`

**Description**: Python-based agents for lead discovery, email interaction, and feature promotion.

**Agents**:
- **Lead Discovery** (`zion_lead_discovery_agent.py`): Fetches leads from Crunchbase/Apollo, stores in PostgreSQL. Requires CRUNCHBASE_API_KEY, APOLLO_API_KEY, Postgres.
- **Email Interaction** (`zion_email_interaction_agent.py`): Monitors Gmail via gog CLI, AI-powered replies. Requires GOG_TOKEN, CURSOR_API_KEY.
- **Feature Promotion** (`zion_feature_promotion_agent.py`): Generates index.html from feature_promo.yml.

**Runs**: Lead discovery daily 8 AM | Email interaction every 2 hours | Feature promotion daily 7 AM (cron)

**Commands**:
```bash
npm run agents:lead-discovery
npm run agents:email-interaction
npm run agents:feature-promotion
npm run agents:python-all
```

---

### 37. AI Auto-Implementation Agent 🆕
**Status**: Active | **Path**: `automation/ai-auto-implementation-agent.cjs`

**Description**: Meta-agent that runs ecosystem intelligence and suggestion importer, optionally commits automation updates.

**Features**:
- Runs ecosystem intel → suggestion importer
- AUTO_COMMIT=1 to commit and push changes
- Makes the ecosystem self-improving

**Commands**:
```bash
npm run automation:auto-impl
AUTO_COMMIT=1 npm run automation:auto-impl-commit
```

---

### 38. AI Code Hygiene Agent 🆕
**Status**: Active | **Path**: `automation/ai-code-hygiene-agent.cjs`

**Description**: Proactive daily agent that runs lint:fix and type-check, commits auto-fixable changes before they reach CI.

**Features**:
- Runs npm run lint:fix
- Runs npm run type-check
- Commits only when lint made changes (AUTO_COMMIT=1)
- Complements ai-ci-failure-recovery-agent

**Runs**: Daily 5:30 AM via cron

**Commands**:
```bash
npm run hygiene:run
AUTO_COMMIT=1 npm run hygiene:run-commit
```

---

### 39. AI Cron Health Monitor Agent 🆕
**Status**: Active | **Path**: `automation/ai-cron-health-monitor-agent.cjs`

**Description**: Verifies cron jobs have run recently by checking log file mtimes.

**Features**:
- Maps cron jobs to log files
- Checks mtime against expected frequency
- Reports stale jobs that may have missed runs
- Integrated with report aggregator

**Runs**: Daily 8 AM via cron

**Commands**:
```bash
npm run cron:health
npm run cron:health-summary
```

---

### 40. AI Documentation Sync Agent 🆕
**Status**: Active | **Path**: `automation/ai-documentation-sync-agent.cjs`

**Description**: Keeps AI-SYSTEMS-OVERVIEW.md in sync with actual automation agents and workflows.

**Features**:
- Scans automation/ for ai-*.cjs agents
- Scans .github/workflows for workflows
- Reports agents/workflows missing from overview
- Integrated with report aggregator

**Runs**: Weekly Friday 6 AM via cron

**Commands**:
```bash
npm run docs:sync
npm run docs:sync-summary
```

---

### 41. AI Changelog Generator Agent 🆕
**Status**: Active | **Path**: `automation/ai-changelog-generator-agent.cjs`

**Description**: Auto-generates CHANGELOG.md from git commits (conventional commits).

**Features**:
- Parses commits since last N days (CHANGELOG_DAYS, default 30)
- Groups by type (feat, fix, chore, docs, etc.)
- AUTO_COMMIT=1 to commit changelog updates

**Runs**: Weekly Friday 7 AM via cron

**Commands**:
```bash
npm run changelog:generate
AUTO_COMMIT=1 npm run changelog:generate-commit
```

---

### 42. AI Dependency Vulnerability Alert Agent 🆕
**Status**: Active | **Path**: `automation/ai-dependency-vulnerability-alert-agent.cjs`

**Description**: Runs npm audit, sends Telegram alert for high/critical vulnerabilities.

**Features**:
- Complements weekly deps-security cron (low-risk auto-fix)
- Immediate visibility on critical/high vulns
- VULN_ALERT_THRESHOLD=high|critical

**Requires**: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

**Runs**: Weekly Sunday 3:30 AM via cron (after deps-security)

**Commands**:
```bash
npm run vuln:alert
npm run vuln:alert-summary
```

---

## System Architecture

```
┌──────────────────────────────────────────────────────────┐
│         AI App Improvement Specialist (NEW)              │
│         Comprehensive Analysis & Health Monitoring        │
│         Runs: Every 30 minutes                           │
└─────────────────────┬────────────────────────────────────┘
                      │
┌─────────────────────┴────────────────────────────────────┐
│              AI Master Orchestrator                       │
│              Coordinates All AI Agents                    │
│              Runs: Every hour                             │
└─────────────────────┬────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        │             │             │
┌───────▼──────┐ ┌────▼────────┐ ┌─▼──────────────┐
│  Development │ │ Continuous  │ │  Code          │
│    Agent     │ │ Improvement │ │ Generator      │
│ (6 hours)    │ │ (10 min)    │ │ (Weekly)       │
└──────────────┘ └─────────────┘ └────────────────┘
        │             │             │
        └─────────────┴─────────────┘
                      │
┌─────────────────────▼────────────────────────────────────┐
│          Comprehensive Continuous Automation              │
│          Master Fast Orchestrator                         │
│          Runs: Every 5 minutes                            │
└─────────────────────┬────────────────────────────────────┘
                      │
        ┌─────────────┼──────────────┬──────────────┐
        │             │              │              │
┌───────▼──────┐ ┌────▼────────┐ ┌──▼──────┐ ┌────▼──────┐
│ Error        │ │ Health      │ │ Auto    │ │ Syntax    │
│ Monitor      │ │ Checker     │ │ Fixer   │ │ Fixer     │
│ (5 min)      │ │ (3 min)     │ │ (10 min)│ │ (15 min)  │
└──────────────┘ └─────────────┘ └─────────┘ └───────────┘
```

## Health Monitoring

### Current System Health

- **Overall Health Score**: 96/100 ✅
- **Lint Errors**: 0 ✅
- **Type Errors**: 0 ✅
- **Security Vulnerabilities**: 0 ✅
- **Build Status**: Passing ✅
- **Accessibility Score**: 100/100 ✅
- **SEO Score**: 100/100 ✅
- **Test Coverage**: 11% ⚠️
- **Outdated Dependencies**: 7 ⚠️

### Health Score Breakdown

The health score (0-100) is calculated based on:

- **Code Quality** (30%)
  - Lint errors/warnings
  - Type errors
  - Code smells

- **Security** (35%)
  - Vulnerabilities (critical/high/moderate/low)
  - Insecure patterns

- **Build Status** (15%)
  - Build success/failure

- **Performance** (10%)
  - Bundle size
  - Large files

- **Testing** (5%)
  - Test coverage

- **Accessibility & SEO** (5%)
  - A11y score
  - SEO score

## PM2 Management

### View All Running Agents
```bash
pm2 list
```

### View Specific Agent
```bash
pm2 list | grep ai-app-improvement-specialist
```

### View Logs
```bash
# All AI agents
pm2 logs

# Specific agent
pm2 logs ai-app-improvement-specialist
```

### Start/Stop/Restart
```bash
# Start all agents
pm2 start ecosystem.config.cjs

# Start specific agent
pm2 start ecosystem.config.cjs --only ai-app-improvement-specialist

# Stop all
pm2 stop all

# Stop specific
pm2 stop ai-app-improvement-specialist

# Restart all
pm2 restart all

# Restart specific
pm2 restart ai-app-improvement-specialist
```

### Monitor Status
```bash
pm2 monit
```

## Reports & Logs

### AI App Improvement Specialist Reports
- **Location**: `automation/reports/improvement-specialist/`
- **Latest**: `automation/reports/improvement-specialist/latest-report.json`
- **Historical**: `automation/reports/improvement-specialist/aais-report-{timestamp}.json`

### Logs
- **Location**: `automation/logs/`
- **AI App Improvement Specialist**: `automation/logs/aais-{date}.log`
- **Other Agents**: `automation/logs/{agent-name}.log`

## Environment Variables

### Required
- `GH_TOKEN` - GitHub token for automated commits/pushes

### Optional (for AI features)
- `ANTHROPIC_API_KEY` - Anthropic Claude API key
- `OPENAI_API_KEY` - OpenAI GPT API key

### Optional (for social media)
- `LINKEDIN_ACCESS_TOKEN` - LinkedIn API token
- `LINKEDIN_URN` - LinkedIn URN
- `IG_USER_ID` - Instagram user ID
- `IG_ACCESS_TOKEN` - Instagram access token

### Configuration
- `AAIS_MODE` - Operation mode (standard|aggressive|conservative)
- `AAIS_CONTINUOUS` - Enable continuous mode (true|false)
- `AAIS_INTERVAL` - Minutes between runs (default: 30)
- `AAIS_AUTO_COMMIT` - Auto-commit changes (default: true)
- `AAIS_AUTO_PUSH` - Auto-push to remote (default: true)
- `AAIS_MAX_IMPROVEMENTS` - Max improvements per cycle (default: 15)
- `AAIS_MIN_HEALTH` - Target health score (default: 80)

## Best Practices

1. **Monitor Health Score**: Keep it above 80
2. **Review Reports**: Check daily for insights
3. **Update Dependencies**: Review outdated packages regularly
4. **Improve Test Coverage**: Add tests for critical paths
5. **Check Logs**: Monitor for errors or warnings
6. **Use Conservative Mode**: For production deployments
7. **Review Commits**: Check automated commits periodically

## Troubleshooting

### High CPU Usage
- Reduce PM2 agent frequency
- Use conservative mode
- Check for runaway processes

### High Memory Usage
- Increase `max_memory_restart` in ecosystem.config.cjs
- Reduce `maxImprovementsPerRun`
- Clear old logs

### Health Score Decreasing
- Check latest report for issues
- Run AI App Improvement Specialist in aggressive mode
- Review and fix critical issues manually

### Agent Not Running
```bash
# Check status
pm2 status

# Check logs
pm2 logs ai-app-improvement-specialist --lines 100

# Restart
pm2 restart ai-app-improvement-specialist
```

## Future Enhancements

- [ ] ML-based predictive maintenance
- [ ] Visual report dashboards (HTML/PDF)
- [x] Telegram notifications (ai-telegram-notification-agent.cjs)
- [ ] Multi-branch support
- [ ] Custom rule engine
- [ ] Integration with Jira/Linear
- [ ] Cost analysis tracking
- [ ] Technical debt visualization
- [ ] Performance benchmarking
- [ ] A/B testing automation
- [x] Ecosystem Intelligence Agent (suggests new automations)
- [x] Content Freshness Agent (stale content detection)
- [x] Weekly dependency security audit (cron)
- [x] Report aggregator (single dashboard view)
- [x] Test coverage improvement agent
- [x] Blog date metadata check
- [x] Python agents cron (lead discovery, email interaction, feature promotion)
- [x] Sitemap validation in CI (continue-on-error until coverage improved)
- [x] Auto-implementation agent (ecosystem intel + suggestion apply + optional commit)
- [x] Code hygiene agent (proactive lint/type fixes)
- [x] Cron health monitor (verify cron logs freshness)
- [x] Mid-week auto-implementation workflow (Wed 14 UTC)
- [x] Documentation sync agent (keeps AI-SYSTEMS-OVERVIEW in sync)
- [x] Changelog generator agent (conventional commits)
- [x] Dependency vulnerability alert agent (Telegram for high/critical)

---

**🤖 Powered by AI - Continuously Improving the Zion App**

Repository: https://github.com/Zion-Holdings/zion.app
Canonical URL: https://ziontechgroup.com

