# PM2 Automation Setup - Replacing GitHub Actions

## Overview
This project has been migrated from GitHub Actions to PM2-based automation for better performance, reliability, and cost-effectiveness.

## What PM2 is Now Handling

### 1. **Console Error Fixer** (Every 15 minutes)
- **Script**: `./scripts/automation/console-error-fixer.cjs`
- **Purpose**: Continuously monitors and fixes console errors
- **Replaces**: GitHub Actions error monitoring workflows

### 2. **Link Checker** (Every 30 minutes)
- **Script**: `./scripts/automation/link-checker.cjs`
- **Purpose**: Checks for broken links and reports issues
- **Replaces**: GitHub Actions link checking workflows

### 3. **Continuous Improvement** (Every 2 hours)
- **Script**: `./scripts/automation/continuous-improvement.cjs`
- **Purpose**: Runs continuous improvement processes
- **Replaces**: GitHub Actions continuous improvement workflows

### 4. **Daily Build & Test** (Every hour)
- **Script**: `./scripts/automation/daily-build-test.cjs`
- **Purpose**: Automated building and testing
- **Replaces**: GitHub Actions CI/CD workflows

### 5. **Security Audit** (Every 4 hours)
- **Script**: `./scripts/automation/security-audit.cjs`
- **Purpose**: Security vulnerability scanning and reporting
- **Replaces**: GitHub Actions security workflows

### 6. **Dependency Updates** (Every 6 hours)
- **Script**: `./scripts/automation/dependency-updates.cjs`
- **Purpose**: Monitors and updates dependencies
- **Replaces**: GitHub Actions dependency management workflows

### 7. **Performance Monitoring** (Every 2 hours)
- **Script**: `./scripts/automation/performance-monitor.cjs`
- **Purpose**: Performance monitoring and optimization
- **Replaces**: GitHub Actions performance workflows

### 8. **Quality Checks** (Every 3 hours)
- **Script**: `./scripts/automation/quality-checks.cjs`
- **Purpose**: Code quality and linting checks
- **Replaces**: GitHub Actions quality assurance workflows

### 9. **Link Integrity** (Every 2 hours)
- **Script**: `./scripts/automation/link-integrity.cjs`
- **Purpose**: Deep link integrity checking
- **Replaces**: GitHub Actions link integrity workflows

### 10. **Front Maximizer** (Every 4 hours)
- **Script**: `./scripts/automation/front-maximizer.cjs`
- **Purpose**: Frontend optimization and maximization
- **Replaces**: GitHub Actions frontend optimization workflows

### 11. **Sitemap Runner** (Every 6 hours)
- **Script**: `./scripts/automation/sitemap-runner.cjs`
- **Purpose**: Sitemap generation and maintenance
- **Replaces**: GitHub Actions sitemap workflows

## Benefits of PM2 Over GitHub Actions

1. **Cost-Effective**: No per-minute billing, runs on your own infrastructure
2. **Faster Execution**: No queue waiting, immediate execution
3. **Better Monitoring**: Real-time process monitoring and restart capabilities
4. **Customizable**: Full control over execution timing and conditions
5. **Persistent**: Continues running even during GitHub downtime
6. **Resource Efficient**: Optimized for Node.js applications

## GitHub Actions Removed

The following GitHub Actions workflows have been removed and replaced by PM2:

- ✅ `ci.yml` → PM2 daily-build-test
- ✅ `test.yml` → PM2 daily-build-test  
- ✅ `deploy.yml` → PM2 continuous-improvement
- ✅ `quality-check.yml` → PM2 quality-checks
- ✅ `continuous-improvement.yml` → PM2 continuous-improvement
- ✅ `security-audit.yml` → PM2 security-audit
- ✅ `link-checker.yml` → PM2 link-checker

## PM2 Status

To check the status of all automation processes:
```bash
pm2 status
```

To view logs for a specific process:
```bash
pm2 logs <process-name>
```

To restart all processes:
```bash
pm2 restart all
```

## Configuration

All PM2 processes are configured in `ecosystem.config.cjs` with:
- Automatic restart on failure
- Memory limits and optimization
- Environment-specific configurations
- Scheduled execution intervals

## Maintenance

- PM2 automatically restarts failed processes
- All processes run continuously with specified intervals
- Memory usage is monitored and optimized
- Logs are automatically managed and rotated