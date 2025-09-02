# PM2 Sync Automation System

A comprehensive automation system that solves all issues and keeps changes synced with the repository automatically. This system replaces traditional CI/CD pipelines with intelligent, real-time automation that runs locally using PM2.

## 🚀 Features

### Core Automation

- **Intelligent File Watching**: Monitors all project files for changes
- **Automatic Repository Sync**: Commits and pushes changes automatically
- **Smart Build Triggers**: Automatically builds when relevant files change
- **Automated Testing**: Runs tests when test files or dependencies change
- **Security Scanning**: Regular security audits and vulnerability fixes

### Issue Resolution

- **Automatic Problem Detection**: Identifies issues before they become problems
- **Self-Healing System**: Automatically resolves common issues
- **Conflict Resolution**: Handles git merge conflicts automatically
- **Build Recovery**: Automatically fixes build failures
- **Dependency Management**: Ensures all dependencies are properly installed

### Monitoring & Health

- **Real-time Health Monitoring**: Continuous system health checks
- **Performance Metrics**: CPU, memory, and disk usage monitoring
- **Error Tracking**: Comprehensive error logging and reporting
- **Automated Restarts**: Restarts failed processes automatically
- **Health Dashboard**: Web-based health check endpoints

## 🛠️ Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- PM2 (will be installed automatically if missing)

### Quick Start

1. **Clone the repository** (if not already done):

   ```bash
   git clone https://github.com/Zion-Holdings/zion.app.git
   cd zion.app
   ```

2. **Run the startup script**:

   ```bash
   chmod +x scripts/start-pm2-sync-system.sh
   ./scripts/start-pm2-sync-system.sh
   ```

3. **The system will automatically**:
   - Install dependencies
   - Set up PM2 processes
   - Initialize git repository (if needed)
   - Start monitoring and automation

## 📋 Usage

### Basic Commands

```bash
# Start the system
./scripts/start-pm2-sync-system.sh

# Stop the system
./scripts/start-pm2-sync-system.sh stop

# Restart the system
./scripts/start-pm2-sync-system.sh restart

# Check status
./scripts/start-pm2-sync-system.sh status

# View logs
./scripts/start-pm2-sync-system.sh logs

# Open monitoring interface
./scripts/start-pm2-sync-system.sh monitor
```

### PM2 Commands

```bash
# View all processes
pm2 list

# Monitor processes in real-time
pm2 monit

# View logs
pm2 logs

# Restart all processes
pm2 restart all

# Stop all processes
pm2 stop all

# Delete all processes
pm2 delete all
```

### Health Check Endpoints

Once the system is running, you can access:

- **Health Status**: http://localhost:3001/health
- **Detailed Metrics**: http://localhost:3001/metrics

## 🔧 Configuration

### Environment Variables

Create a `.env` file in your project root:

```env
# PM2 Sync Automation Environment Variables
NODE_ENV=production
AUTOMATION_INTERVAL=30000          # 30 seconds - file sync interval
BUILD_INTERVAL=300000             # 5 minutes - build check interval
TEST_INTERVAL=600000              # 10 minutes - test run interval
SECURITY_INTERVAL=1800000         # 30 minutes - security scan interval
MONITOR_INTERVAL=60000            # 1 minute - health check interval
```

### Ecosystem Configuration

The system uses `ecosystem.config.cjs` to manage PM2 processes. Key configurations:

```javascript
// PM2 Sync Automation System
{
  name: 'pm2-sync-automation',
  script: './scripts/automation/pm2-sync-automation.cjs',
  instances: 1,
  autorestart: true,
  max_memory_restart: '1G',
  env: {
    NODE_ENV: 'production',
    AUTOMATION_INTERVAL: '30000'
  }
}

// PM2 Sync Monitor
{
  name: 'pm2-sync-monitor',
  script: './scripts/automation/pm2-sync-monitor.cjs',
  instances: 1,
  autorestart: true,
  max_memory_restart: '256M',
  env: {
    NODE_ENV: 'production',
    MONITOR_INTERVAL: '60000'
  }
}
```

## 📁 File Structure

```
scripts/
├── automation/
│   ├── pm2-sync-automation.cjs    # Core automation system
│   ├── pm2-sync-monitor.cjs       # Health monitoring system
│   └── ...                        # Other automation scripts
├── start-pm2-sync-system.sh       # Main startup script
├── pm2-sync-start.sh              # Quick start shortcut
├── pm2-sync-stop.sh               # Quick stop shortcut
├── pm2-sync-restart.sh            # Quick restart shortcut
└── pm2-sync-logs.sh               # Quick logs shortcut

logs/                               # System logs and metrics
ecosystem.config.cjs                # PM2 configuration
```

## 🔄 How It Works

### 1. File Watching

The system monitors all project files using `chokidar`:

- Watches `src/`, `pages/`, `components/`, `utils/`, `public/`
- Ignores `node_modules/`, `.next/`, `dist/`, `build/`, `logs/`
- Debounces changes to avoid excessive processing

### 2. Change Detection

When files change, the system:

- Determines if changes require a build
- Determines if changes require tests
- Queues changes for processing

### 3. Automatic Processing

Every 30 seconds, the system:

- Stages all pending changes
- Commits changes with descriptive messages
- Pushes to the repository
- Triggers builds if needed
- Runs tests if needed

### 4. Health Monitoring

Every minute, the system:

- Checks PM2 process status
- Verifies file system integrity
- Validates git repository status
- Checks build artifacts
- Scans for security vulnerabilities

### 5. Issue Resolution

When issues are detected:

- Automatically restarts failed processes
- Installs missing dependencies
- Fixes security vulnerabilities
- Commits uncommitted changes
- Triggers builds for missing artifacts

## 🚨 Troubleshooting

### Common Issues

**Process not starting:**

```bash
# Check PM2 logs
pm2 logs pm2-sync-automation

# Check system logs
tail -f logs/pm2-sync-automation.log

# Restart the process
pm2 restart pm2-sync-automation
```

**Git issues:**

```bash
# Check git status
git status

# Check remote configuration
git remote -v

# Reset to clean state
git reset --hard HEAD
git clean -fd
```

**Build failures:**

```bash
# Clear build cache
rm -rf .next dist build node_modules/.cache

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

**High memory usage:**

```bash
# Check memory usage
pm2 monit

# Restart processes
pm2 restart all

# Check for memory leaks
pm2 logs --lines 100
```

### Log Files

- **Main automation**: `logs/pm2-sync-automation.log`
- **Monitor system**: `logs/pm2-sync-monitor.log`
- **PM2 logs**: `pm2 logs` command
- **Metrics**: `logs/pm2-sync-metrics.json`

## 📊 Monitoring & Metrics

### Health Check Response

```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600000,
  "healthChecks": 60,
  "successRate": 98.33,
  "errors": 1,
  "restarts": 0
}
```

### Metrics Response

```json
{
  "startTime": 1705312200000,
  "healthChecks": 60,
  "successfulChecks": 59,
  "failedChecks": 1,
  "successRate": 98.33,
  "errors": [...],
  "restarts": 0,
  "performance": {
    "cpu": 2.5,
    "memory": 45.2,
    "disk": 67.8
  }
}
```

## 🔒 Security Features

- **Automatic security scanning** every 30 minutes
- **Vulnerability detection** and automatic fixing
- **Dependency audit** with npm audit
- **Secure git operations** with proper authentication
- **Log rotation** to prevent disk space issues

## 🚀 Performance Optimization

- **Intelligent file watching** with debouncing
- **Efficient change detection** using file patterns
- **Background processing** to avoid blocking
- **Memory management** with automatic restarts
- **Disk space monitoring** with cleanup routines

## 📈 Scaling & Production

### Production Deployment

1. **Set environment variables**:

   ```bash
   export NODE_ENV=production
   export AUTOMATION_INTERVAL=30000
   ```

2. **Start with PM2**:

   ```bash
   pm2 start ecosystem.config.cjs --env production
   ```

3. **Save PM2 configuration**:
   ```bash
   pm2 save
   pm2 startup
   ```

### Monitoring in Production

- Use the health check endpoints for load balancer health checks
- Set up external monitoring (e.g., UptimeRobot, Pingdom)
- Configure log aggregation (e.g., ELK stack, Splunk)
- Set up alerting for critical failures

## 🤝 Contributing

To contribute to the PM2 Sync Automation System:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the Zion Tech Group application and follows the same licensing terms.

## 🆘 Support

For support and questions:

- Check the troubleshooting section above
- Review the logs for error details
- Check the health endpoints for system status
- Open an issue on GitHub with detailed information

---

**The PM2 Sync Automation System is designed to be completely autonomous and self-healing. Once started, it will continuously monitor, sync, and maintain your project without manual intervention.**
