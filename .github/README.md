# GitHub Actions Workflows - DEPRECATED

⚠️ **IMPORTANT: This directory is deprecated. All automation has been migrated to PM2.**

## Migration Status

All GitHub Actions workflows have been replaced with PM2-based automation processes that run continuously on the server. This provides better performance, reliability, and real-time monitoring compared to GitHub Actions.

## What Was Replaced

The following GitHub Actions workflows have been replaced by PM2 processes:

### 🔄 CI (Continuous Integration) → PM2: `daily-build-test`

- **PM2 Process**: Runs every hour
- **Purpose**: Build verification, linting, and type checking
- **Status**: ✅ Migrated to PM2

### 🧪 Test → PM2: `daily-build-test`

- **PM2 Process**: Runs every hour
- **Purpose**: Comprehensive testing and build verification
- **Status**: ✅ Migrated to PM2

### 🔒 CodeQL Security Analysis → PM2: `security-audit`

- **PM2 Process**: Runs every 4 hours
- **Purpose**: Security vulnerability scanning and dependency analysis
- **Status**: ✅ Migrated to PM2

### 📦 NPM Package Check → PM2: `dependency-updates`

- **PM2 Process**: Runs every 6 hours
- **Purpose**: Package verification and dependency updates
- **Status**: ✅ Migrated to PM2

### 🚀 Deploy to Production → PM2: `zion-app` & `zion-backend`

- **PM2 Process**: Continuous deployment with auto-restart
- **Purpose**: Production deployment with build verification
- **Status**: ✅ Migrated to PM2

### 🔍 Dependency Review → PM2: `dependency-updates`

- **PM2 Process**: Runs every 6 hours
- **Purpose**: Security vulnerability checking in dependencies
- **Status**: ✅ Migrated to PM2

### ✅ Quality Check → PM2: `quality-checks`

- **PM2 Process**: Runs every 3 hours
- **Purpose**: Code quality, linting, and security audits
- **Status**: ✅ Migrated to PM2

### 🔄 Continuous Improvement → PM2: `continuous-improvement`

- **PM2 Process**: Runs every 2 hours
- **Purpose**: Automated improvement suggestions and optimization
- **Status**: ✅ Migrated to PM2

### 🕷️ Link Crawler Factory → PM2: `link-checker` & `link-integrity`

- **PM2 Process**: Runs every 30 minutes and 2 hours respectively
- **Purpose**: Automated link checking and broken link detection
- **Status**: ✅ Migrated to PM2

## PM2 Automation Benefits

### 🚀 Performance Improvements

- **Real-time execution**: No waiting for GitHub Actions queue
- **Faster feedback**: Immediate error detection and fixing
- **Resource optimization**: Better memory and CPU utilization

### 🔧 Enhanced Monitoring

- **Live process monitoring**: Real-time status and metrics
- **Automatic restart**: Self-healing on failures
- **Memory management**: Automatic restart on memory issues

### 📊 Continuous Operations

- **24/7 automation**: No dependency on external services
- **Scheduled execution**: Configurable intervals for each task
- **Parallel processing**: Multiple automation tasks run simultaneously

## Current PM2 Status

All automation processes are running continuously:

```bash
# Check PM2 status
pm2 status

# View logs for specific process
pm2 logs [process-name]

# Restart all processes
pm2 restart all
```

## Configuration

PM2 configuration is in `ecosystem.config.cjs` at the project root, which includes:

- **Main Application**: `zion-app` and `zion-backend`
- **Automation Processes**: 12 continuous automation tasks
- **Resource Management**: Memory limits and auto-restart policies
- **Environment Variables**: Production-optimized settings

## Why This Migration?

1. **Cost Efficiency**: No GitHub Actions minutes consumption
2. **Performance**: Faster execution and real-time monitoring
3. **Reliability**: No external service dependencies
4. **Control**: Full control over execution environment
5. **Scalability**: Easy to add new automation tasks

## Support

For automation issues, check:

1. PM2 process status: `pm2 status`
2. Process logs: `pm2 logs [process-name]`
3. Ecosystem configuration: `ecosystem.config.cjs`
4. Individual automation scripts in `scripts/automation/`

---

**Note**: This directory is kept for reference only. All active automation is now handled by PM2 processes running on the server.
