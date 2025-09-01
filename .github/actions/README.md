# GitHub Actions Workflows - DEPRECATED

⚠️ **IMPORTANT: This directory is deprecated. All automation has been migrated to PM2.**

## Migration Status

All GitHub Actions workflows described in this document have been replaced with PM2-based automation processes that run continuously on the server. This provides better performance, reliability, and real-time monitoring compared to GitHub Actions.

## What Was Replaced

The following GitHub Actions workflows have been replaced by PM2 processes:

### 1. CI/CD Pipeline (`ci-cd.yml`) → PM2: `daily-build-test`

- **PM2 Process**: Runs every hour
- **Purpose**: Automated building, testing, and deployment
- **Status**: ✅ Migrated to PM2

### 2. Security & Dependency Management (`security.yml`) → PM2: `security-audit` & `dependency-updates`

- **PM2 Process**: Runs every 4-6 hours
- **Purpose**: Security scanning, dependency updates, vulnerability checks
- **Status**: ✅ Migrated to PM2

### 3. Testing & Quality Assurance (`testing.yml`) → PM2: `quality-checks` & `daily-build-test`

- **PM2 Process**: Runs every 1-3 hours
- **Purpose**: Automated testing, quality checks, and build verification
- **Status**: ✅ Migrated to PM2

### 4. Release Management (`release.yml`) → PM2: `continuous-improvement`

- **PM2 Process**: Runs every 2 hours
- **Purpose**: Automated releases, version management, and deployment
- **Status**: ✅ Migrated to PM2

### 5. Dependency Management (`dependencies.yml`) → PM2: `dependency-updates`

- **PM2 Process**: Runs every 6 hours
- **Purpose**: Automated dependency updates and security patches
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
