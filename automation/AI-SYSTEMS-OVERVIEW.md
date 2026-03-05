# 🤖 AI Systems Overview

Comprehensive overview of all autonomous AI systems in the Zion App.

Last Updated: March 5, 2026

## LLM Provider (Primary → Fallback)

All LLM-powered agents use **Ollama (local, free) as primary** and **OpenRouter as fallback**:
- **Primary:** Local Ollama (`npm run llm:install`) — no API key
- **Fallback:** OpenRouter when Ollama unavailable (CI, no local install)
- See `docs/LOCAL-LLM-SETUP.md` and `docs/OPENROUTER-SETUP.md`

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

### 22a. AI App Audit Automation 🆕
**Status**: Active | **Path**: `automation/ai-app-audit-automation-agent.cjs`

**Description**: Audits live ziontechgroup.com with OpenRouter LLM. Fetches key pages, extracts content, generates improvement suggestions for content, UX, SEO, performance, conversion.

**Features**:
- Fetches homepage, services, solutions, case-studies, contact, about, blog, ai-services, industries
- Follows 301/302 redirects for full content
- Uses meta-llama/llama-3.2-3b-instruct:free (free tier)
- Outputs app-audit-suggestions.json for implementation agent

**Requires**: `OPENROUTER_API_KEY`

**Runs**: Weekly Saturday 10 AM UTC via GitHub Actions

**Commands**:
```bash
npm run app:audit
npm run app:audit-summary
npm run app:audit-apply      # Apply safe suggestions
npm run app:audit-apply-summary
```

---

### 22a2. AI App Audit Implementation Agent 🆕
**Status**: Active | **Path**: `automation/ai-app-audit-implementation-agent.cjs`

**Description**: Applies safe high-priority suggestions from app audit (meta tags, SEO enhancements).

**Runs**: After app audit in workflow

**Commands**:
```bash
npm run app:audit-apply
```

---

### 22b. AI Layout & Design Audit Agent 🆕
**Status**: Active | **Path**: `automation/ai-layout-design-audit-agent.cjs`

**Description**: Audits https://ziontechgroup.com layout and design. Uses OpenRouter LLM when available; falls back to local heuristic audit when API key is missing.

**Features**:
- Fetches live production HTML for visual/layout audit
- Analyzes app/layout.tsx, Header, Footer, globals.css
- Uses openrouter/free for LLM-powered audit (when OPENROUTER_API_KEY set)
- **Local heuristic fallback**: font display, section spacing, typography scale, image aspect-ratio, container padding
- Generates JSON report with prioritized suggestions

**Requires**: `OPENROUTER_API_KEY`

**Runs**: Weekly Saturday 12 UTC via GitHub Actions | Weekly Saturday 5 AM via cron

**Commands**:
```bash
npm run layout:audit
npm run layout:audit-summary
npm run layout:audit-apply      # Apply safe layout improvements
npm run layout:audit-apply-summary
npm run layout:pipeline        # Audit + apply in one command
npm run layout:pipeline-commit  # Audit + apply + commit
```

### 22b2. AI Layout Design Implementation Agent 🆕
**Status**: Active | **Path**: `automation/ai-layout-design-implementation-agent.cjs`

**Description**: Applies safe layout/design improvements: font display swap, section spacing token, simplified Navigation shadow, typography scale design tokens, image aspect-ratio for CLS prevention.

**Runs**: After layout audit in workflow

---

### 22c2. AI Automation Audit Agent 🆕
**Status**: Active | **Path**: `automation/ai-automation-audit-agent.cjs`

**Description**: Audits the automation ecosystem: agents, workflows, cron jobs. Validates file paths, detects broken references, and uses OpenRouter LLM for improvement suggestions when available.

**Features**:
- Validates agent files and lib/openrouter-client references
- Checks workflow YAML for missing agent paths
- Verifies cron .env sourcing for OpenRouter jobs
- LLM-powered suggestions when OPENROUTER_API_KEY set
- Integrates with report aggregator dashboard

**Requires**: `OPENROUTER_API_KEY` (optional, for LLM suggestions)

**Runs**: Weekly Saturday 11 AM UTC via GitHub Actions | Weekly Saturday 11 AM via cron

**Commands**:
```bash
npm run automation:audit
npm run automation:audit-summary
```

---

### 22c2b. AI Automation Self-Healing Agent 🆕
**Status**: Active | **Path**: `automation/ai-automation-self-healing-agent.cjs`

**Description**: Reads automation-audit-latest.json and applies fixable fixes automatically (e.g. creates automation/logs/ when missing).

**Features**:
- Fixes missing_log_dir by creating automation/logs/
- Runs after automation audit in daily pipeline and workflow
- Integrates with report aggregator (automationSelfHeal)
- DRY_RUN=1 for preview mode

**Runs**: After automation audit in daily pipeline | After automation audit in ai-automation-audit workflow

**Commands**:
```bash
npm run automation:self-heal
npm run automation:self-heal-summary
```

---

### 22c3. AI Automation Improvements Pipeline 🆕
**Status**: Active | **Path**: `automation/ai-automation-improvements-pipeline.cjs`

**Description**: Orchestrates automation health checks: automation audit + site link audit + report aggregator. Use before deploy or weekly to ensure automations are healthy.

**Features**:
- Runs automation audit (agents, workflows, cron)
- Runs site link audit (validates live site links)
- Refreshes report aggregator dashboard
- CREATE_PAGES=1 to create missing pages when broken links found

**Runs**: Weekly Wednesday 10 UTC via GitHub Actions | Weekly Wednesday 10 AM via cron

**Commands**:
```bash
npm run automation:improve
npm run automation:improve-create-pages   # CREATE_PAGES=1
```

---

### 22c. AI GitHub Actions & App Audit Agent 🆕
**Status**: Active | **Path**: `automation/ai-github-actions-audit-agent.cjs`

**Description**: Audits all GitHub Actions workflows and live ziontechgroup.com using OpenRouter LLM (meta-llama/llama-3.2-3b-instruct:free). Generates workflow improvements, new workflow suggestions, and app automation ideas.

**Features**:
- Reads all .github/workflows/*.yml
- Fetches key site pages (home, services, solutions, contact, about, blog, industries, consultation, automation, micro-saas-services)
- Uses OpenRouter free model for LLM analysis
- Outputs workflowImprovements, newWorkflowSuggestions, appAutomationIdeas
- Integrates with report aggregator dashboard

**Requires**: `OPENROUTER_API_KEY`

**Runs**: Weekly Sunday 9 AM UTC via GitHub Actions | Weekly Sunday 9 AM via cron

**Commands**:
```bash
npm run actions:audit
npm run actions:audit-summary
```

**GitHub**: Add `OPENROUTER_API_KEY` to repo secrets for workflow.

### 22c2. AI GitHub Actions Implementation Agent 🆕
**Status**: Active | **Path**: `automation/ai-github-actions-implementation-agent.cjs`

**Description**: Applies safe workflow improvements from github-actions-audit-suggestions.json. Adds workflow_dispatch, creates new workflows (e.g. deploy-preflight), uses fallback improvements when LLM suggestions unavailable.

**Features**:
- Applies workflowImprovements from audit
- Creates new workflows from newWorkflowSuggestions
- Fallback: workflow_dispatch for ci-cd, deploy-preflight workflow
- AUTO_COMMIT=1 to commit and push applied changes
- workflow_dispatch with auto_commit input for manual improvement deployment

**Runs**: After ai-github-actions-audit in workflow | Weekly Sunday 9 AM via cron

**Deploy**: deploy-on-push.yml triggers Netlify deploy when CI/CD succeeds on main (requires NETLIFY_BUILD_HOOK). Optimized: no local build (Netlify builds from repo). workflow_dispatch for manual deploy. production-smoke-test.yml runs post-deploy validation.

**Commands**:
```bash
npm run actions:impl
npm run actions:impl-summary
AUTO_COMMIT=1 npm run actions:impl   # Auto-commit improvements
```

---

### 22d. AI App Evolution Automation Agent 🆕
**Status**: Active | **Path**: `automation/ai-app-evolution-automation-agent.cjs`

**Description**: Orchestrates app audit + OpenRouter LLM to generate implementation-ready evolution ideas. Audits ziontechgroup.com, produces evolution backlog with prioritized tasks, quick wins, and roadmap. Auto-commits backlog on schedule.

**Features**:
- Runs app audit (fetches live site, LLM analysis)
- Generates evolution ideas from audit suggestions
- Fallback improvement ideas when LLM unavailable (402/401)
- Implementation tasks with safeToAutoApply flag
- Optional AUTO_APPLY=1, AUTO_COMMIT=1 for automation

**Requires**: `OPENROUTER_API_KEY` (GitHub secrets for workflow)

**Runs**: Weekly Sunday 11 AM via cron | Weekly Sunday 11 AM UTC via GitHub Actions

**Commands**:
```bash
npm run app:evolution
npm run app:evolution-audit
npm run app:evolution-ideas
npm run app:evolution-summary
```

---

### 22e. AI App Improvement Orchestrator 🆕
**Status**: Active | **Path**: `automation/ai-app-improvement-orchestrator.cjs`

**Description**: Full pipeline orchestrator for app improvement and evolution. Runs site link audit → app audit → evolution ideas → implementation → optional commit & push → optional deploy trigger. Automates app improvement and deploys new ideas continuously.

**Features**:
- Site link audit (crawl live site, check for broken links)
- App audit (live ziontechgroup.com via OpenRouter LLM)
- App evolution (ideas from audit → backlog)
- Site link audit (validates all internal links; CREATE_PAGES=1 to create missing)
- Optional layout audit (LAYOUT_AUDIT=1)
- Optional content ideation (CONTENT_IDEAS=1)
- Optional evolution ideas (EVOLUTION_IDEAS=1) — new deployable ideas from live site
- App audit implementation (apply safe meta/SEO changes)
- Layout implementation (apply safe layout fixes)
- Auto-commit & push (AUTO_COMMIT=1)
- Optional Netlify deploy trigger (TRIGGER_DEPLOY=1, NETLIFY_BUILD_HOOK)

**Requires**: `OPENROUTER_API_KEY` (GitHub secrets for workflow)

**Runs**: Weekly Monday 12 UTC via GitHub Actions | Weekly Monday 12 PM via cron

**Commands**:
```bash
npm run app:improve           # Full pipeline (no commit)
npm run app:improve-commit    # Pipeline + commit & push
npm run app:improve-summary   # Show latest report
```

**Environment**: LAYOUT_AUDIT=1, CONTENT_IDEAS=1, EVOLUTION_IDEAS=1, CREATE_PAGES=1, TRIGGER_DEPLOY=1, SKIP_LLM=1

---

### 22e2. AI App Evolution Ideas Agent 🆕
**Status**: Active | **Path**: `automation/ai-app-evolution-ideas-agent.cjs`

**Description**: Fetches live ziontechgroup.com, reads evolution backlog, uses LLM to generate NEW deployable evolution ideas. Enriches backlog with innovative suggestions.

**Features**:
- Fetches key pages from live site
- Merges new ideas into app-evolution-backlog.json
- Fallback heuristic ideas when LLM unavailable
- Runs as part of orchestrator (EVOLUTION_IDEAS=1) or standalone

**Commands**:
```bash
npm run app:evolution-ideas-run
npm run app:evolution-ideas-summary
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

### 24b. AI Front Page Content Expansion Agent 🆕
**Status**: Active | **Path**: `automation/ai-front-page-content-expansion-agent.cjs`

**Description**: Uses OpenRouter LLM to generate new services and content for the main front page (industry solutions, case studies, innovation bundles, platform spotlights, FAQ, momentum signals).

**Features**:
- Scans existing industries, case studies, bundles to avoid duplicates
- Generates 2 industry solutions, 2 case studies, 1 innovation bundle
- Adds platform page spotlights, FAQ items, momentum signals
- Applies changes to `app/page.tsx` and `app/case-studies/page.tsx`

**Requires**: `OPENROUTER_API_KEY`

**Commands**:
```bash
npm run content:front-page-expand
```

---

### 24b2. AI Front Page Services Advertiser Agent 🆕
**Status**: Active | **Path**: `automation/ai-front-page-services-advertiser-agent.cjs`

**Description**: Promotes under-featured Zion AI product pages to the main front page. Scans `app/zion-ai-*` and `app/zion-*` pages, compares with `featuredApps`, and adds 2–4 apps not yet prominently featured.

**Features**:
- LLM selection when `OPENROUTER_API_KEY` set; heuristic fallback when key missing
- Adds apps to `featuredApps` in `app/page.tsx`
- Integrated into content turbo and services-and-content pipelines

**Runs**: Weekly Friday 5 AM via cron | Tue/Thu/Sat via AI Content Automation workflow

**Commands**:
```bash
npm run content:front-page-advertise
```

---

### 24b3. AI Zion Product Page Creator Agent 🆕
**Status**: Active | **Path**: `automation/ai-zion-product-page-creator-agent.cjs`

**Description**: Creates new Zion AI product pages and adds them to the front page. Uses OpenRouter LLM when available; falls back to predefined templates.

**Options**: `MAX_PAGES=1`, `SKIP_FRONT_PAGE=1`

**Commands**:
```bash
npm run content:create-product-page
```

---

### 24c. AI Content Fast Pipeline 🆕
**Status**: Active | **Path**: `automation/ai-content-fast-pipeline.cjs`

**Description**: High-speed content generation orchestration. Runs blog generation (OpenRouter) and front-page expansion in parallel.

**Features**:
- Uses `meta-llama/llama-3.2-3b-instruct:free` or `openrouter/free` for zero-cost generation
- Parallel execution of blog + front page
- `MAX_BLOG_POSTS` limits new posts per run (default: 2)
- `AUTO_COMMIT=1` commits and pushes

**Requires**: `OPENROUTER_API_KEY`

**Runs**: Tue/Thu 4 AM UTC via cron and GitHub Actions

**Commands**:
```bash
npm run content:fast
AUTO_COMMIT=1 npm run content:fast-commit
```

---

### 24d. AI Content Ideation Agent 🆕
**Status**: Active | **Path**: `automation/ai-content-ideation-agent.cjs`

**Description**: Fetches live site, suggests new blog topics, industries, case studies via OpenRouter LLM.

**Output**: `automation/reports/content-ideation-latest.json`

**Commands**:
```bash
npm run content:ideate
```

---

### 24e. AI Content Maximum Pipeline 🆕
**Status**: Active | **Path**: `automation/ai-content-maximum-pipeline.cjs`

**Enhancements** (March 2026): Now includes Evolution Ideas (phase 1) and Product Page Creator (phase 2) for maximum content velocity.

**Description**: Ultra-fast content generation for maximum velocity. Runs ideation + content-audit-ideas + evolution ideas in parallel, then blog (with dynamic topics from ideation) + front page + product page creator + services advertiser in parallel. Higher concurrency (6 posts, 6 parallel LLM calls), auto-commit, optional Netlify deploy trigger.

**Features**:
- Ideation + content-audit-ideas + evolution ideas in parallel (feeds dynamic topics to blog)
- Product page creator creates new Zion AI product pages and adds to front page
- Blog uses `content-audit-ideas-latest.json` or `content-ideation-latest.json` when available
- `MAX_BLOG_POSTS=6`, `MAX_CONCURRENCY=6` for speed
- `AUTO_COMMIT=1` commits and pushes
- `TRIGGER_DEPLOY=1` calls `NETLIFY_BUILD_HOOK` after commit
- Syncs `BLOG_SLUGS` in `app/lib/blog-data.ts` when new posts created

**Requires**: `OPENROUTER_API_KEY`; `NETLIFY_BUILD_HOOK` for deploy trigger

**Runs**: Daily 4 AM UTC via cron and GitHub Actions (default pipeline)

**Commands**:
```bash
npm run content:maximum
AUTO_COMMIT=1 npm run content:maximum-commit
AUTO_COMMIT=1 TRIGGER_DEPLOY=1 npm run content:maximum-deploy
```

---

### 24f. AI Ideas to Implementation Pipeline 🆕
**Status**: Active | **Path**: `automation/ai-ideas-to-implementation-pipeline.cjs`

**Description**: Maximum-velocity pipeline for ideation → content → deploy. Runs ideation, evolution ideas, content audit ideas in parallel, then blog, front page, product page creator, and services advertiser in parallel.

**Features**:
- Phase 1: Ideation + Content Audit Ideas + Evolution Ideas (parallel)
- Phase 2: Blog + Front Page + Product Page Creator + Services Advertiser (parallel)
- Auto-commit and Netlify deploy trigger
- `MAX_PRODUCT_PAGES=1` creates new Zion AI product pages per run
- `SKIP_EVOLUTION_IDEAS=1`, `SKIP_PRODUCT_PAGES=1` to disable steps

**LLM**: Ollama (primary) or `OPENROUTER_API_KEY`; `NETLIFY_BUILD_HOOK` for deploy trigger

**Runs**: Twice daily (4 AM and 4 PM UTC) via GitHub Actions; daily 4 PM via cron

**Commands**:
```bash
npm run content:ideas-implementation
npm run content:ideas-implementation-commit
npm run content:ideas-implementation-deploy
```

---

### 24g. AI App Evolution Audit Pipeline 🆕
**Status**: Active | **Path**: `automation/ai-app-evolution-audit-pipeline.cjs`

**Description**: Unified pipeline for ziontechgroup.com: visit → audit → implement → deploy. Orchestrates automation health, site link validation, ideation, evolution ideas, content generation, and optional commit/deploy.

**Features**:
- Phase 0: Live Site UX Audit (heuristic, no LLM) + Automation Audit + Site Link Audit
- Phase 1: Ideation + Content Audit Ideas + Evolution Ideas (parallel)
- Phase 2: Blog + Front Page + Product Creator + Services Advertiser (parallel)
- Phase 3: Commit & Deploy (when `AUTO_COMMIT=1`)
- `SKIP_UX_AUDIT=1`, `SKIP_AUTOMATION_AUDIT=1`, `SKIP_SITE_LINKS=1` to disable Phase 0 steps

**Requires**: `OPENROUTER_API_KEY` for Phase 1/2; `NETLIFY_BUILD_HOOK` for deploy trigger

**Runs**: Weekly Saturday 14 UTC via GitHub Actions; weekly Saturday 2 PM via cron

**Commands**:
```bash
npm run app:evolution-audit
npm run app:evolution-audit-commit
npm run app:evolution-audit-deploy
npm run app:ux-audit   # Live Site UX Audit only (no LLM)
```

---

### 24h. AI Live Site UX Audit Agent 🆕
**Status**: Active | **Path**: `automation/ai-live-site-ux-audit-agent.cjs`

**Description**: Fetches live ziontechgroup.com homepage and performs heuristic UX/SEO checks. No LLM required.

**Features**:
- Meta description, og:image, viewport, schema.org, H1, CTA presence, internal links, title
- Generates actionable improvement ideas
- Output: `automation/reports/live-site-ux-audit-latest.json`

**Runs**: As part of App Evolution Audit Pipeline (Phase 0) or standalone

**Commands**:
```bash
npm run app:ux-audit
```

---

### 24i. AI Local LLM App Automation Pipeline 🆕
**Status**: Active | **Path**: `automation/ai-local-llm-app-automation-pipeline.cjs`

**Description**: Orchestrates app improvement and evolution using local LLM (Ollama primary, OpenRouter fallback). Fetches live ziontechgroup.com, generates ideas via LLM, implements improvements, and optionally commits/deploys.

**Features**:
- Site link audit (CREATE_PAGES=1 to create missing pages)
- Evolution ideas (LLM or heuristic fallback)
- Content audit ideas
- App audit (LLM or heuristic fallback)
- App evolution and implementation
- Auto-commit and Netlify deploy trigger

**LLM**: Ollama (primary) or `OPENROUTER_API_KEY`; `NETLIFY_BUILD_HOOK` for deploy

**Runs**: Weekly Wednesday 12 UTC via GitHub Actions; workflow_dispatch

**Commands**:
```bash
npm run automation:local-llm
npm run automation:local-llm-commit
npm run automation:local-llm-deploy
```

---

### 24j. AI Ultra-Fast Content Pipeline 🆕
**Status**: Active | **Path**: `automation/ai-ultra-fast-content-pipeline.cjs`

**Description**: Maximum-velocity content generation. Phase 0 creates industry solution pages from templates (no LLM). Phase 1-2 run ideation + blog + front page + products with higher throughput (8 blog posts, 2 product pages, 2 industry pages per run).

**Features**:
- Phase 0: Industry discovery + auto-create solution pages (template-based, no LLM)
- Phase 1: Ideation + Content Audit Ideas + Evolution Ideas (parallel)
- Phase 2: Blog (8) + Front Page + Product Creator (2) + Services Advertiser (parallel)
- `MAX_BLOG_POSTS=8`, `MAX_CONCURRENCY=8`, `MAX_PRODUCT_PAGES=2`, `MAX_INDUSTRY_PAGES=2`
- `SKIP_INDUSTRY_PAGES=1` to skip Phase 0

**LLM**: Ollama or `OPENROUTER_API_KEY` for Phase 1-2; Phase 0 requires no LLM

**Runs**: Daily 10 AM UTC via GitHub Actions; daily 10 AM via cron (3x daily content with ideas-implementation at 4 AM and 4 PM)

**Commands**:
```bash
npm run content:ultra-fast
npm run content:ultra-fast-commit
npm run content:ultra-fast-deploy
```

---

### 24k. AI Industry Solution Auto-Creator Agent 🆕
**Status**: Active | **Path**: `automation/ai-industry-solution-auto-creator-agent.cjs`

**Description**: Creates dedicated solution pages from industry discovery report using templates. No LLM required. Updates industries page hrefs and sitemap.

**Features**:
- Reads `industry-solution-discovery-latest.json` (run `nav:industry-discovery` first)
- Creates up to `MAX_PAGES=2` new solution pages per run
- Industry-specific app mappings (Technology & SaaS, Government, Banking, Telecom)
- Updates industries page and sitemap automatically

**Runs**: As part of Ultra-Fast Content Pipeline (Phase 0) or standalone

**Commands**:
```bash
npm run content:industry-create
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

### 30b. AI Broken Link & Page Automation 🆕
**Status**: Active | **Path**: `automation/ai-broken-link-page-automation.cjs`

**Description**: Audits the codebase for broken internal links and creates missing pages using OpenRouter LLM.

**Features**:
- Scans app/ and components/ for internal links
- Validates each link against existing pages
- Creates missing pages via OpenRouter (meta-llama free model) when `OPENROUTER_API_KEY` is set
- Excludes static assets (svg, json, etc.) and protocol-relative URLs
- Integrated into daily automation pipeline

**Runs**: Tue/Fri 7 AM via GitHub Actions | Part of `automation:daily-pipeline`

**Commands**:
```bash
npm run links:audit          # Audit only (no API key needed)
OPENROUTER_API_KEY=xxx npm run links:audit-fix  # Audit + create missing pages
```

**GitHub**: Add `OPENROUTER_API_KEY` to repo secrets for page-creation on manual dispatch.

---

### 30c. AI Site Link Audit Automation 🆕
**Status**: Active | **Path**: `automation/ai-site-link-audit-automation.cjs`

**Description**: Crawls the live production site (ziontechgroup.com), extracts internal links, validates HTTP status, and optionally creates missing pages via OpenRouter LLM.

**Features**:
- Fetches key pages from live site (home, services, products, solutions, etc.)
- Extracts all internal links from HTML
- Validates each link's HTTP status (200 vs 404)
- Creates missing pages via OpenRouter (meta-llama free model) when `--create-pages` and `OPENROUTER_API_KEY` are set
- Saves report to `automation/reports/site-link-audit-latest.json`
- Integrated into daily automation pipeline and broken-link workflow

**Runs**: Tue/Fri 8 AM via GitHub Actions | Part of `automation:daily-pipeline`

**Commands**:
```bash
npm run site:links:audit       # Audit live site (no API key needed)
OPENROUTER_API_KEY=xxx npm run site:links:audit-fix  # Audit + create missing pages
```

**GitHub**: Add `OPENROUTER_API_KEY` to repo secrets for page-creation on manual dispatch.

---

### 30d. AI Navigation Improvement Automation 🆕
**Status**: Active | **Path**: `automation/ai-navigation-improvement-automation.cjs`

**Description**: Audits ziontechgroup.com navigation and footer using OpenRouter LLM. Suggests improvements for nav/footer consistency, missing high-value pages, and conversion paths.

**Features**:
- Fetches live homepage HTML
- Compares nav constants and footer links against discovered routes
- Detects broken internal links
- Uses OpenRouter (meta-llama/llama-3.2-3b-instruct:free) for UX/IA improvement suggestions
- Saves report to `automation/reports/navigation-improvement-audit-latest.json`

**Runs**: Weekly Thursday 9 AM UTC via GitHub Actions | workflow_dispatch

**Commands**:
```bash
npm run nav:improve        # Full audit with LLM suggestions (OPENROUTER_API_KEY)
npm run nav:improve-audit  # Audit only (no API key needed)
```

**GitHub**: Add `OPENROUTER_API_KEY` to repo secrets for LLM suggestions.

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

