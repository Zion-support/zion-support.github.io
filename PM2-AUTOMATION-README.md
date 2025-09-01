# PM2 Error Fixing Automation System

This PM2 automation system continuously monitors your project for errors and automatically fixes common issues to prevent build failures and maintain code quality.

## 🎯 What It Does

The system consists of 5 automated services that work together to:

1. **Monitor for errors** - Continuously checks build, lint, and TypeScript errors
2. **Fix syntax issues** - Automatically resolves common syntax errors and merge conflicts
3. **Maintain build health** - Ensures dependencies and build assets are healthy
4. **Resolve merge conflicts** - Intelligently resolves Git merge conflicts
5. **Self-healing** - Automatically restarts services and triggers fixes when issues are detected

## 🚀 Quick Start

```bash
# Start the entire automation system
./start-pm2-automation.sh

# View all services status
pm2 status

# Monitor all services in real-time
pm2 monit

# View logs from all services
pm2 logs
```

## 🔧 Services Overview

### 1. Error Monitor (`error-monitor`)
- **Frequency**: Every 5 minutes
- **Purpose**: Detects build, lint, and TypeScript errors
- **Actions**: Triggers appropriate fix services when errors are found
- **Logs**: `./logs/error-monitor.log`

### 2. Syntax Fixer (`syntax-fixer`)
- **Frequency**: Every 10 minutes (or when triggered by error monitor)
- **Purpose**: Fixes common syntax errors automatically
- **Fixes**:
  - Unterminated strings in JSX/React components
  - Malformed lazy import statements
  - Object property syntax errors
  - Missing semicolons and quotes
- **Logs**: `./logs/syntax-fixer.log`

### 3. Build Health Check (`build-health-check`)
- **Frequency**: Every 15 minutes
- **Purpose**: Monitors overall project build health
- **Checks**:
  - Dependencies health (`node_modules` status)
  - Configuration file validity
  - Build asset generation
- **Auto-fixes**: Reinstalls dependencies when needed
- **Logs**: `./logs/build-health.log`

### 4. Merge Conflict Resolver (`merge-conflict-resolver`)
- **Frequency**: Every 30 minutes
- **Purpose**: Automatically resolves Git merge conflicts
- **Strategy**: Smart merging with backup creation
- **Features**:
  - Creates backups before resolving conflicts
  - Intelligent conflict resolution based on content type
  - Handles imports, object properties, and code blocks
- **Logs**: `./logs/merge-resolver.log`

### 5. Main Application (`zion-app`)
- **Purpose**: Your main application server
- **Features**: Auto-restart, memory management, health monitoring
- **Logs**: `./logs/app-combined.log`

## 📊 Monitoring & Reports

All services generate detailed reports in the `./logs/` directory:

- `error-report.json` - Latest error detection results
- `syntax-fixes.json` - Syntax fixes applied
- `build-health-report.json` - Build health status
- `merge-conflicts-resolved.json` - Merge conflict resolution results

## 🔧 Manual Operations

### Restart Specific Services
```bash
pm2 restart error-monitor        # Restart error monitoring
pm2 restart syntax-fixer         # Restart syntax fixer
pm2 restart build-health-check   # Restart build health checker
pm2 restart merge-conflict-resolver # Restart merge conflict resolver
```

### Trigger Immediate Fixes
```bash
pm2 restart syntax-fixer         # Trigger immediate syntax fixing
pm2 restart merge-conflict-resolver # Trigger immediate conflict resolution
```

### View Service Logs
```bash
pm2 logs error-monitor           # View error monitor logs
pm2 logs syntax-fixer           # View syntax fixer logs
pm2 logs build-health-check     # View build health logs
pm2 logs merge-conflict-resolver # View merge resolver logs
```

### Stop/Start All Services
```bash
pm2 stop all                    # Stop all services
pm2 start ecosystem.config.js   # Start all services
pm2 restart all                 # Restart all services
```

## 🛠️ Configuration

### Adjusting Check Frequencies

Edit `ecosystem.config.js` and modify the `cron_restart` values:

```javascript
cron_restart: '*/5 * * * *'   // Every 5 minutes
cron_restart: '*/10 * * * *'  // Every 10 minutes
cron_restart: '*/15 * * * *'  // Every 15 minutes
cron_restart: '*/30 * * * *'  // Every 30 minutes
```

### Memory Limits

Adjust `max_memory_restart` in `ecosystem.config.js` for each service:

```javascript
max_memory_restart: '1G'      // Main app
max_memory_restart: '500M'    // Error monitor
max_memory_restart: '300M'    // Health check
```

## 🚨 Troubleshooting

### Service Won't Start
```bash
pm2 delete all                  # Remove all processes
./start-pm2-automation.sh       # Restart from scratch
```

### High Memory Usage
```bash
pm2 monit                       # Monitor memory usage
pm2 restart [service-name]      # Restart specific service
```

### Logs Not Rotating
```bash
pm2 install pm2-logrotate       # Reinstall log rotation
pm2 set pm2-logrotate:max_size 10M
```

### Check System Status
```bash
pm2 status                      # Overall status
pm2 info [service-name]         # Detailed service info
pm2 describe [service-name]     # Service configuration
```

## 🔄 Backup & Recovery

- **Merge conflict backups**: `./backups/merge-conflicts/`
- **PM2 configuration**: Saved automatically with `pm2 save`
- **Log files**: Rotated automatically (7 days retention)

### Restore from Backup
```bash
# If automated fixes cause issues, restore from backup
cp ./backups/merge-conflicts/[backup-file] [original-file]
```

## 📈 Performance Impact

The automation system is designed to be lightweight:

- **CPU Usage**: Minimal (runs only during scheduled checks)
- **Memory Usage**: ~100-500MB total for all services
- **Disk Usage**: Log rotation keeps disk usage minimal
- **Network**: No external network calls

## 🔐 Security Considerations

- Scripts only modify files within the project directory
- Backups are created before making changes
- No external dependencies or network requests
- All operations are logged for audit trail

## 📞 Support

- **Check logs**: `./logs/` directory for detailed information
- **View status**: `pm2 status` for current service status
- **Monitor real-time**: `pm2 monit` for live monitoring
- **Service details**: `pm2 describe [service-name]` for configuration

## 🎯 Common Issues Fixed Automatically

1. **Syntax Errors**:
   - Unterminated strings
   - Malformed imports
   - Missing quotes/semicolons

2. **Merge Conflicts**:
   - Git merge markers
   - Duplicate imports
   - Conflicting code blocks

3. **Build Issues**:
   - Missing dependencies
   - Invalid configuration files
   - Build asset problems

4. **Type Errors**:
   - TypeScript compilation issues
   - Missing type definitions

This system ensures your project maintains high quality and builds successfully by automatically detecting and fixing common development issues before they become problems.