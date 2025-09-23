<<<<<<< HEAD
# Zion Tech Group - Automation System

This document describes the comprehensive automation system that automatically detects and fixes errors in the Zion Tech Group application.

## 🚀 Overview

The automation system consists of multiple specialized scripts that work together to:

- Automatically detect and fix TypeScript errors
- Resolve merge conflicts
- Fix ESLint issues
- Monitor build health
- Manage dependencies
- Optimize performance

## 📋 Available Automation Scripts

### 1. Auto Error Fixer (`auto-error-fixer.cjs`)

- **Purpose**: Continuously monitors and fixes common errors
- **Frequency**: Runs every 5 minutes
- **Features**:
  - Fixes missing type annotations
  - Resolves import/export issues
  - Fixes JSX syntax errors
  - Auto-fixes ESLint issues
  - Monitors build errors

### 2. Merge Conflict Resolver (`merge-conflict-resolver.cjs`)

- **Purpose**: Automatically detects and resolves merge conflicts
- **Frequency**: Runs every 2 minutes
- **Features**:
  - Detects merge conflict markers
  - Auto-resolves conflicts based on file type
  - Prefers HEAD version for TypeScript/JavaScript
  - Merges JSON objects intelligently
  - Stages resolved files automatically

### 3. Comprehensive Error Fixer (`comprehensive-error-fixer.cjs`)

- **Purpose**: Runs comprehensive error fixes on schedule
- **Frequency**: Runs every 2 hours
- **Features**:
  - Deep error analysis
  - Syntax error correction
  - Code quality improvements
  - Performance optimizations

### 4. TypeScript Error Fixer (`typescript-error-fixer.cjs`)

- **Purpose**: Specialized for TypeScript issues
- **Frequency**: Runs every 3 hours
- **Features**:
  - Type annotation fixes
  - Interface improvements
  - Import/export optimization
  - JSX syntax correction

### 5. Console Error Fixer (`console-error-fixer.cjs`)

- **Purpose**: Fixes console and runtime errors
- **Frequency**: Runs every 4 hours
- **Features**:
  - Console error detection
  - Runtime error fixing
  - Error boundary improvements

### 6. Master Automation Controller (`master-automation-controller.cjs`)

- **Purpose**: Coordinates and monitors all automation scripts
- **Frequency**: Monitors every minute
- **Features**:
  - Centralized control
  - Health monitoring
  - Performance analysis
  - Emergency stop functionality

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- PM2 (Process Manager)
- Git

### 1. Install PM2

```bash
npm install -g pm2
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Logs Directory

```bash
mkdir -p logs
```

## 🚀 Usage

### Start All Automations

```bash
npm run automation:start-all
```

### Start Individual Automation

```bash
# Start auto error fixer
npm run automation:auto-fix

# Start merge conflict resolver
npm run automation:resolve-conflicts

# Start comprehensive error fixer
npm run automation:comprehensive-fix
```

### Monitor Automations

```bash
# View status
npm run automation:status

# View logs
npm run automation:logs

# Monitor in real-time
npm run automation:monit

# Check health
npm run automation:health
```

### Control Automations

```bash
# Stop all
npm run automation:stop-all

# Restart all
npm run automation:restart-all

# Emergency stop
npm run automation:emergency
```

### Master Controller Commands

```bash
# Start master controller
npm run automation:master

# Check health
npm run automation:master health

# Emergency stop
npm run automation:master emergency-stop
```

## 📊 PM2 Management

### Start Ecosystem

```bash
pm2 start ecosystem.config.cjs
```

### View Status

```bash
pm2 status
```

### View Logs

```bash
pm2 logs
```

### Monitor Resources

```bash
pm2 monit
```

### Stop All

```bash
pm2 stop all
```

### Restart All

```bash
pm2 restart all
```

## 🔧 Configuration

### Ecosystem Configuration

The `ecosystem.config.cjs` file contains:

- App configurations for each automation
- Memory limits and restart policies
- Log file locations
- Cron schedules for periodic tasks

### Customization

You can modify:

- Check intervals in each automation script
- Memory limits in ecosystem config
- Log file paths
- Cron schedules

## 📈 Monitoring & Health

### Health Checks

- **Automation Status**: Running/stopped/errored
- **Memory Usage**: Track memory consumption
- **CPU Usage**: Monitor CPU utilization
- **Error Rates**: Count and analyze errors
- **Performance Trends**: Memory and CPU trends

### Reports

- **Health Reports**: Generated every minute
- **Error Logs**: Stored in `logs/` directory
- **Performance Metrics**: Memory and CPU usage
- **Recommendations**: Automated suggestions

### Log Files

- `logs/auto-error-fixer-*.log`
- `logs/merge-conflict-resolver-*.log`
- `logs/comprehensive-error-fixer-*.log`
- `logs/master-automation-controller-*.log`

## 🚨 Troubleshooting

### Common Issues

#### 1. PM2 Not Found

```bash
npm install -g pm2
```

#### 2. Permission Denied

```bash
sudo npm install -g pm2
```

#### 3. Memory Issues

- Check memory limits in ecosystem config
- Restart automations: `pm2 restart all`

#### 4. High CPU Usage

- Monitor with: `pm2 monit`
- Check for infinite loops in automation scripts

#### 5. Log File Issues

- Ensure `logs/` directory exists
- Check file permissions

### Debug Mode

```bash
# Enable debug logging
DEBUG=* npm run automation:master

# View detailed logs
pm2 logs --lines 100
```

## 🔄 Maintenance

### Regular Tasks

- **Daily**: Check automation health
- **Weekly**: Review error logs
- **Monthly**: Update dependencies
- **Quarterly**: Review and optimize automation logic

### Updates

```bash
# Update PM2
pm2 update

# Update dependencies
npm update

# Restart automations
pm2 restart all
```

### Backup

```bash
# Save PM2 configuration
pm2 save

# Backup automation scripts
cp -r scripts/automation/ backup/
```

## 📚 API Reference

### Master Controller Methods

#### `start()`

Starts the master controller and all automations.

#### `stop()`

Stops the master controller and all automations.

#### `getStatus()`

Returns the current status of all automations.

#### `runCommand(command, args)`

Executes automation commands:

- `start [name]`: Start specific automation
- `stop [name]`: Stop specific automation
- `restart [name]`: Restart specific automation
- `health`: Generate health report
- `emergency-stop`: Emergency stop all

### Automation Script Methods

Each automation script provides:

- `start()`: Start the automation
- `stop()`: Stop the automation
- `getStatus()`: Get current status
- `log(message)`: Log messages with timestamps

## 🤝 Contributing

### Adding New Automations

1. Create new automation script in `scripts/automation/`
2. Extend base automation class
3. Add to ecosystem config
4. Update master controller
5. Add npm scripts

### Testing

```bash
# Test individual automation
npm run automation:test

# Test all automations
pm2 restart all && sleep 30 && pm2 status
=======
# Zion App Automation System

This document describes the comprehensive automation system for the Zion App project.

## 🚀 Quick Start

### Start All Automation Systems
```bash
./start-automation.sh
```

### Test All Automation Systems
```bash
./test-automation.sh
```

### Fix Automation Issues
```bash
./fix-automation.sh
```

### Monitor Automation Health
```bash
./monitor-automation.sh status
```

## 📊 System Status

- **Dashboard**: http://localhost:3001
- **Health Check**: http://localhost:3001/health
- **Success Rate**: 92.3% (24/26 tests passing)

## 🤖 Automation Systems

### Core Systems
1. **Intelligent Automation Orchestrator** - Main coordination system
2. **Netlify Monitor** - Build monitoring and deployment automation
3. **Performance Monitor** - Frontend performance tracking
4. **Task Automation** - Dependency updates and maintenance tasks

### Working Systems
- ✅ Core Automation Orchestrator
- ✅ Netlify Automation
- ✅ Performance Monitoring
- ✅ Task Automation

### Systems with Issues
- ⚠️ Continuous Improvement (path issues)
- ⚠️ Cursor Integration (syntax errors)

## 📁 File Structure

```
automation/
├── intelligent-automation-orchestrator.js  # Main orchestrator
├── netlify-monitor.js                      # Netlify build monitoring
├── start-working-automations.js            # Working systems starter
├── test-all-automations.js                 # Comprehensive test suite
├── automation-manager.js                   # Management interface
├── performance/
│   └── monitor.js                          # Performance monitoring
├── tasks/
│   ├── DependencyUpdater.js                # Dependency management
│   ├── SecurityScanner.js                  # Security scanning
│   └── CodeQualityEnforcer.js              # Code quality checks
├── continuous-improvement/
│   ├── enhanced-automation.js              # Continuous improvement
│   ├── monitor.js                          # CI monitoring
│   └── improve.js                          # Improvement engine
└── logs/                                   # System logs
```

## 🛠️ Management Scripts

### start-automation.sh
Starts all working automation systems in the background.

**Features:**
- Checks Node.js availability
- Installs dependencies if needed
- Creates necessary directories
- Starts automation systems
- Provides health check URLs

### test-automation.sh
Runs comprehensive tests on all automation systems.

**Features:**
- Tests 26 different automation components
- Provides detailed success/failure reports
- Shows test summary with success rate
- Saves detailed test reports

### fix-automation.sh
Automatically fixes common automation system issues.

**Features:**
- Creates missing directories
- Installs missing dependencies
- Fixes corrupted configuration files
- Validates fixes with test runs

### monitor-automation.sh
Monitors the health and status of automation systems.

**Commands:**
- `./monitor-automation.sh status` - Overall system status
- `./monitor-automation.sh logs` - Recent logs
- `./monitor-automation.sh resources` - System resource usage
- `./monitor-automation.sh restart` - Restart automation systems
- `./monitor-automation.sh health` - Detailed health data

## 📈 Monitoring & Health

### Health Endpoints
- **Main Health**: `GET http://localhost:3001/health`
- **System Status**: JSON response with system health data

### Log Files
- **Combined Logs**: `automation/logs/combined.log`
- **Error Logs**: `automation/logs/error.log`
- **Test Reports**: `automation/test-report.json`

### Process Management
- **PID File**: `automation/automation.pid`
- **Stop Command**: `kill $(cat automation/automation.pid)`

## 🔧 Troubleshooting

### Common Issues

1. **Automation not starting**
   ```bash
   ./fix-automation.sh
   ./start-automation.sh
   ```

2. **Tests failing**
   ```bash
   ./test-automation.sh
   # Check specific error messages
   ```

3. **Dashboard not responding**
   ```bash
   ./monitor-automation.sh restart
   ```

4. **High resource usage**
   ```bash
   ./monitor-automation.sh resources
   ```

### Manual Fixes

1. **Syntax Errors**
   - Check for missing quotes in configuration files
   - Verify JSON syntax in package.json files
   - Ensure proper import paths

2. **Missing Dependencies**
   ```bash
   npm install async --save
   npm install
   ```

3. **Permission Issues**
   ```bash
   chmod +x *.sh
   ```

## 🔄 Automation Workflow

1. **Startup**: `./start-automation.sh`
2. **Monitoring**: `./monitor-automation.sh status`
3. **Testing**: `./test-automation.sh`
4. **Fixing**: `./fix-automation.sh` (if needed)
5. **Restart**: `./monitor-automation.sh restart`

## 📊 Performance Metrics

- **Startup Time**: ~5 seconds
- **Memory Usage**: ~0.2% of system memory
- **CPU Usage**: Minimal background processing
- **Success Rate**: 92.3% (24/26 systems working)

## 🔮 Future Improvements

1. **Fix remaining syntax errors** in cursor integration system
2. **Resolve path issues** in continuous improvement system
3. **Add more automation systems** as needed
4. **Implement automated recovery** for failed systems
5. **Add web-based dashboard** for better monitoring

## 📝 Logging

All automation systems use Winston for logging with:
- **Console output** in development
- **File logging** in production
- **Structured JSON** format
- **Error tracking** with stack traces

## 🚨 Emergency Procedures

### Stop All Automation
```bash
kill $(cat automation/automation.pid)
```

### Reset Automation System
```bash
kill $(cat automation/automation.pid)
rm -rf automation/logs/*
./fix-automation.sh
./start-automation.sh
```

### Complete Reset
```bash
kill $(cat automation/automation.pid)
rm -rf automation/logs/* automation/data/*
npm install
./fix-automation.sh
./start-automation.sh
>>>>>>> origin/auto/autonomy-17186719616
```

## 📞 Support

<<<<<<< HEAD
For issues or questions:

1. Check the logs in `logs/` directory
2. Review this documentation
3. Check PM2 status: `pm2 status`
4. Review automation health: `npm run automation:health`

## 📄 License

This automation system is part of the Zion Tech Group application and follows the same licensing terms.

---

**Last Updated**: 2025-08-30
**Version**: 1.0.0
**Maintainer**: Zion Tech Group Development Team
=======
For automation system issues:
1. Check logs: `./monitor-automation.sh logs`
2. Run tests: `./test-automation.sh`
3. Apply fixes: `./fix-automation.sh`
4. Restart: `./monitor-automation.sh restart`

---

**Last Updated**: 2025-07-25
**Version**: 1.0.0
**Status**: ✅ Operational (92.3% success rate) 
>>>>>>> origin/auto/autonomy-17186719616
