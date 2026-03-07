# 🤖 AI Development System

Autonomous AI-powered development and improvement system for continuous codebase evolution.

## Overview

This system consists of multiple AI agents that work together to continuously analyze, improve, and develop the application:

### Core Agents

1. **AI Development Agent** (`ai-development-agent.cjs`)
   - Analyzes codebase for improvements
   - Identifies bugs and technical debt
   - Fixes linting and type errors
   - Addresses security vulnerabilities
   - Improves accessibility
   - Enhances code quality
   - Automatically commits and pushes changes

2. **AI Code Generator** (`ai-code-generator.cjs`)
   - Generates new components using AI (Anthropic Claude or OpenAI GPT)
   - Creates comprehensive tests
   - Refactors code
   - Fixes complex bugs
   - Generates documentation
   - Suggests new features
   - Optimizes performance

3. **AI Master Orchestrator** (`ai-master-orchestrator.cjs`)
   - Coordinates all AI agents
   - Prioritizes tasks
   - Manages improvement queue
   - Monitors system health
   - Generates comprehensive reports
   - Commits and pushes changes automatically

4. **AI PM2 Optimization Agent** (`ai-pm2-optimization-agent.cjs`)
   - **Meta-automation**: Continuously improves PM2 automations
   - Monitors PM2 process performance metrics
   - Optimizes memory limits and restart strategies
   - Improves cron schedules for better efficiency
   - Identifies and creates new useful automations
   - Enhances error handling and logging
   - Self-optimizing infrastructure

5. **AI Smart Dependency Manager** (`ai-smart-dependency-manager.cjs`) 🆕
   - **Security & Optimization**: Autonomous dependency management
   - Detects and fixes security vulnerabilities automatically
   - Analyzes and removes unused dependencies
   - Identifies duplicate dependencies across the tree
   - Analyzes bundle size and suggests lighter alternatives
   - Calculates dependency health score (0-100)
   - Generates comprehensive dependency reports
   - Auto-commits fixes and optimizations

6. **AI Content Optimization** (`ai-content-optimization-automation.js`)
   - Optimizes content for SEO
   - Improves readability
   - Enhances engagement
   - Adds meta tags
   - Optimizes images

7. **Layout & Design Automation** (`ai-layout-design-automation-pipeline-full.cjs`) 🆕
   - **Layout/design improvements**: Audits live site and codebase, applies safe layout fixes
   - Runs Live Site UX Audit → Layout Design Audit (LLM or heuristic) → Layout Implementation
   - Optional auto-commit and push; can trigger Netlify deploy
   - Scheduled via PM2 cron (e.g. every 6 hours)
   - Use: `npm run layout:automation-commit` or `pm2 start ecosystem.config.cjs --only ai-layout-design-automation`

## Features

### Automated Improvements

- ✅ **Linting & Type Checking** - Automatically fixes ESLint and TypeScript errors
- 🔒 **Security Scanning** - Identifies and fixes security vulnerabilities
- ⚡ **Performance Optimization** - Detects and optimizes slow code
- ♿ **Accessibility** - Adds ARIA labels, alt text, and improves a11y
- 🧪 **Test Coverage** - Identifies missing tests
- 📝 **Code Quality** - Removes console.log, improves structure
- 📦 **Dependency Management** - Monitors outdated packages

### AI-Powered Generation

- 🎨 **Component Generation** - Create new React components with AI
- 🧪 **Test Generation** - Generate comprehensive test suites
- 📚 **Documentation** - Auto-generate component documentation
- 🔧 **Refactoring** - Intelligent code refactoring
- 🐛 **Bug Fixing** - AI-assisted bug resolution
- 💡 **Feature Suggestions** - Generate new feature ideas

### Continuous Operation

- ⏰ **Scheduled Runs** - Automatic periodic execution
- 🔄 **Health Monitoring** - Continuous system health checks
- 📊 **Reporting** - Detailed analysis and improvement reports
- 🚀 **Auto-Deploy** - Automatic commit and push to main branch

## Installation

### Prerequisites

```bash
# Node.js 18+ required
node --version

# PM2 for process management
npm install -g pm2
```

### Environment Variables

Set up environment variables in Netlify or your deployment platform:

```bash
# AI API Keys (at least one required for AI Code Generator)
ANTHROPIC_API_KEY=your_anthropic_key
OPENAI_API_KEY=your_openai_key

# GitHub Token for automated commits/pushes
GH_TOKEN=your_github_token

# Optional: Configuration
AUTO_COMMIT=true
AUTO_PUSH=true
MAX_CONCURRENT_TASKS=3
```

## Usage

### Manual Execution

#### AI Development Agent

```bash
# Run one-time analysis and improvements
node automation/ai-development-agent.cjs run

# Run continuously with periodic analysis
node automation/ai-development-agent.cjs continuous

# Analysis only (no changes)
node automation/ai-development-agent.cjs analyze
```

#### AI Code Generator

```bash
# Analyze a file
node automation/ai-code-generator.cjs analyze src/pages/index.tsx

# Generate a new component
node automation/ai-code-generator.cjs component Button "A reusable button component"

# Generate tests for a file
node automation/ai-code-generator.cjs tests src/components/Header.tsx

# Refactor code
node automation/ai-code-generator.cjs refactor src/utils/api.ts "Use async/await instead of promises"

# Fix bugs
node automation/ai-code-generator.cjs fix src/pages/dashboard.tsx "Fix memory leak in useEffect"

# Generate documentation
node automation/ai-code-generator.cjs docs src/components/Card.tsx

# Suggest new features
node automation/ai-code-generator.cjs features

# Optimize performance
node automation/ai-code-generator.cjs optimize src/pages/products.tsx
```

#### AI Master Orchestrator

```bash
# Run one orchestration cycle
node automation/ai-master-orchestrator.cjs run

# Run continuously
node automation/ai-master-orchestrator.cjs continuous
```

#### AI PM2 Optimization Agent 🆕

```bash
# Run one-time PM2 optimization
node automation/ai-pm2-optimization-agent.cjs run

# Run continuously (optimizes every 2 hours)
node automation/ai-pm2-optimization-agent.cjs continuous

# View current PM2 metrics only
node automation/ai-pm2-optimization-agent.cjs metrics

# Using npm scripts
npm run pm2:optimize              # One-time run
npm run pm2:optimize-continuous   # Continuous mode
npm run pm2:metrics               # View metrics
npm run pm2:optimize-report       # View latest report
```

### PM2 Management

```bash
# Start all AI agents
pm2 start ecosystem.config.cjs

# Start specific agent
pm2 start ecosystem.config.cjs --only ai-development-agent
pm2 start ecosystem.config.cjs --only ai-code-generator
pm2 start ecosystem.config.cjs --only ai-master-orchestrator
pm2 start ecosystem.config.cjs --only ai-pm2-optimization

# View logs
pm2 logs ai-development-agent
pm2 logs ai-code-generator
pm2 logs ai-master-orchestrator
pm2 logs ai-pm2-optimization

# Monitor status
pm2 status
pm2 monit

# Stop agents
pm2 stop ai-development-agent
pm2 stop all

# Restart agents
pm2 restart ai-development-agent
pm2 restart all

# Delete agents
pm2 delete ai-development-agent
pm2 delete all
```

### GitHub Actions

The system automatically runs via GitHub Actions:

- **Every 6 hours** - AI Development Agent analyzes and improves code
- **On push to main** - Triggered after changes
- **Manual trigger** - Via GitHub Actions UI

View workflow: `.github/workflows/ai-development-agent.yml`

## Configuration

### AI Development Agent

Edit `automation/config/ai-development-config.json`:

```json
{
  "enabledFeatures": {
    "bugFixes": true,
    "performance": true,
    "codeQuality": true,
    "newFeatures": true,
    "testing": true,
    "documentation": true,
    "security": true,
    "accessibility": true,
    "seo": true
  },
  "priorities": {
    "critical": ["security", "bugFixes"],
    "high": ["performance", "accessibility"],
    "medium": ["codeQuality", "testing"],
    "low": ["documentation", "seo"]
  },
  "autoCommit": true,
  "autoPush": true,
  "maxChangesPerRun": 5,
  "analysisInterval": 3600000,
  "featureSuggestions": true,
  "aiProvider": "anthropic",
  "repository": "https://github.com/Zion-Holdings/zion.app",
  "canonicalUrl": "https://ziontechgroup.com"
}
```

## Reports & Logs

### Report Files

- `automation/logs/ai-development-report.json` - Development agent analysis
- `automation/logs/orchestrator-report.json` - Master orchestrator status
- `automation/logs/orchestrator-state.json` - System state and task queue

### Log Files

- `automation/logs/ai-development.log` - Development agent logs
- `automation/logs/ai-code-generator.log` - Code generator logs
- `automation/logs/ai-master-orchestrator.log` - Orchestrator logs

### Generated Files

- `automation/generated/` - AI-generated components, tests, and documentation

## Architecture

```
┌─────────────────────────────────────────┐
│      AI Master Orchestrator             │
│  (Coordinates all agents & tasks)       │
└─────────────┬───────────────────────────┘
              │
    ┌─────────┴─────────┐
    │                   │
┌───▼──────────┐  ┌────▼─────────────┐
│  Development │  │  Code Generator  │
│    Agent     │  │   (AI-Powered)   │
└───┬──────────┘  └────┬─────────────┘
    │                  │
    │  ┌───────────────┘
    │  │
┌───▼──▼────────────────────────────────┐
│         Codebase Changes              │
│   (Auto-committed and pushed)         │
└───────────────────────────────────────┘
```

## Workflow

1. **Analysis Phase**
   - AI Development Agent scans codebase
   - Identifies errors, warnings, and improvements
   - Calculates health score and metrics

2. **Prioritization Phase**
   - Master Orchestrator receives analysis
   - Prioritizes tasks by severity and category
   - Queues tasks for execution

3. **Execution Phase**
   - Agents execute high-priority tasks
   - Apply automatic fixes
   - Use AI for complex improvements

4. **Commit Phase**
   - Changes are automatically staged
   - Descriptive commit messages generated
   - Pushed to main branch

5. **Reporting Phase**
   - Comprehensive reports generated
   - Metrics updated
   - Health history tracked

## Visit → Audit → Implement → Deploy

Canonical loop for **app improvement and evolution** driven by visiting https://ziontechgroup.com:

| Workflow | Schedule | What it does |
|----------|----------|--------------|
| **App Visit Audit Implement Deploy** | Wed 12 UTC, Sat 14 UTC, manual | Runs `ai-app-evolution-audit-pipeline.cjs`: Phase 0 (UX, layout, automation, site links) → Phase 1 (ideation + evolution ideas) → Phase 2 (blog, front page, product, services) → Phase 3 (commit + push + Netlify deploy). |
| **AI App Evolution Audit** | Sat 14 UTC, manual | Same pipeline; alternate trigger. |
| **AI App Visit Intelligence** | Mon 14 UTC, manual | Visit pages → system intel + UX + conversion + local LLM specialists + evolution implement + auto-fix → commit/deploy. |
| **AI Ideas to Implementation** | 4x daily | Ideation + blog + front page + product pages → commit + deploy. |
| **AI Content Ideas to Deploy** | 3x daily | Ideation + front page + template burst → commit + deploy. |

See `automation/APP-VISIT-AUDIT-2025-03-07.md` for the full audit and automation recommendations.

## Health Monitoring

The system tracks health metrics:

- **Lint Errors** - ESLint violations
- **Type Errors** - TypeScript errors
- **Security Issues** - npm audit vulnerabilities
- **Bundle Size** - Build output size
- **Test Coverage** - Percentage of tested code
- **Performance** - Page load times

Health Score calculation:
- Start at 100
- -10 points per critical error
- -5 points per medium error
- -2 points per warning
- -0.5 points per suggestion

## Best Practices

### For Development

1. **Monitor Reports** - Check daily reports for improvements
2. **Review Changes** - Periodically review automated commits
3. **Adjust Config** - Fine-tune agent behavior in config files
4. **Set Limits** - Use `maxChangesPerRun` to control pace
5. **API Keys** - Keep AI API keys in environment variables only

### For Deployment

1. **Use PM2** - Run agents as background processes
2. **Log Rotation** - Use log cleaner to manage log sizes
3. **Error Alerts** - Monitor PM2 logs for failures
4. **Resource Limits** - Set memory limits in ecosystem.config.cjs
5. **Backup State** - Regularly backup orchestrator state file

## Troubleshooting

### Agent Not Running

```bash
# Check PM2 status
pm2 status

# Check logs for errors
pm2 logs ai-development-agent --lines 100

# Restart agent
pm2 restart ai-development-agent
```

### No Changes Being Made

1. Check `autoCommit` is `true` in config
2. Verify git credentials are configured
3. Check if there are actual issues to fix
4. Review logs for error messages

### AI Generator Fails

1. Verify API keys are set: `echo $ANTHROPIC_API_KEY`
2. Check API key validity
3. Ensure sufficient API credits
4. Review error logs for rate limiting

### High Memory Usage

1. Reduce `maxChangesPerRun` in config
2. Increase `max_memory_restart` in ecosystem.config.cjs
3. Run agents less frequently
4. Clear old logs and reports

## Contributing

To add new agent capabilities:

1. Create new agent file in `automation/`
2. Add CLI interface for manual testing
3. Add to ecosystem.config.cjs for PM2
4. Update this README
5. Test thoroughly before enabling auto-commit

## License

Part of the Zion Tech Group project.

## Support

For issues or questions:
- Check logs in `automation/logs/`
- Review reports in report files
- Contact: https://ziontechgroup.com

---

**🤖 Powered by AI - Continuously improving your codebase**

