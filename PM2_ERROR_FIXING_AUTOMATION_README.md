# PM2 Error Fixing Automation System

A comprehensive, intelligent automation system that continuously monitors and automatically fixes project errors using PM2 process management.

## 🚀 Overview

This system provides automated error detection and fixing for TypeScript, JavaScript, React, and general project issues. It runs continuously in the background using PM2 to ensure your project stays error-free.

## 🎯 Features

### Core Automation Components

1. **Enhanced Error Detector** - Continuously monitors for various types of errors
2. **Intelligent TypeScript Fixer** - Automatically fixes TypeScript compilation errors
3. **Smart Linting Fixer** - Resolves ESLint and code quality issues
4. **Auto Import/Export Fixer** - Manages import/export statements and dependencies
5. **JSX/TSX Syntax Fixer** - Fixes React component syntax issues
6. **Dependency Error Resolver** - Handles dependency conflicts and updates
7. **Build Error Auto-Fixer** - Resolves build-time errors
8. **Error Prevention Monitor** - Proactive error prevention
9. **Master Error Fixing Orchestrator** - Coordinates all fixers and provides oversight

### Key Capabilities

- **Real-time Error Detection**: Monitors project every 5 minutes for new errors
- **Intelligent Fixing**: Applies context-aware fixes based on error types
- **Continuous Operation**: Runs 24/7 with automatic restart capabilities
- **Performance Monitoring**: Tracks fixer performance and success rates
- **Comprehensive Reporting**: Generates detailed reports on fixes applied
- **Health Monitoring**: Monitors system health and auto-recovery

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PM2 (will be installed automatically)

### Quick Start

1. **Clone or navigate to your project directory**
   ```bash
   cd /path/to/your/project
   ```

2. **Run the startup script**
   ```bash
   ./start-error-fixing-automation.sh
   ```

3. **The system will automatically:**
   - Install PM2 if not present
   - Create necessary directories
   - Start all automation processes
   - Begin monitoring and fixing errors

### Manual Setup (Alternative)

If you prefer manual setup:

```bash
# Install PM2 globally
npm install -g pm2

# Create logs directory
mkdir -p logs automation/logs

# Install project dependencies
npm install

# Start the automation system
pm2 start ecosystem-error-fixing.config.cjs --update-env
```

## 📊 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PM2 Error Fixing System                  │
├─────────────────────────────────────────────────────────────┤
│  🎯 Master Error Fixing Orchestrator (Hourly)              │
│  ├── System Health Monitoring                              │
│  ├── Error State Analysis                                  │
│  ├── Fix Prioritization                                    │
│  └── Performance Monitoring                                │
├─────────────────────────────────────────────────────────────┤
│  🔍 Enhanced Error Detector (Every 5 min)                  │
│  ├── TypeScript Error Detection                            │
│  ├── Linting Error Detection                               │
│  ├── Build Error Detection                                 │
│  ├── Dependency Error Detection                            │
│  ├── Import/Export Error Detection                         │
│  └── Syntax Error Detection                                │
├─────────────────────────────────────────────────────────────┤
│  🔧 Intelligent Fixers (Various Intervals)                 │
│  ├── TypeScript Error Fixer (10 min)                       │
│  ├── Linting Error Fixer (10 min)                          │
│  ├── Import/Export Fixer (15 min)                          │
│  ├── JSX/TSX Syntax Fixer (15 min)                         │
│  ├── Dependency Error Resolver (30 min)                    │
│  ├── Build Error Auto-Fixer (30 min)                       │
│  └── Error Prevention Monitor (5 min)                      │
└─────────────────────────────────────────────────────────────┘
```

## 🎮 Usage

### Starting the System

```bash
# Start all automations
./start-error-fixing-automation.sh

# Or manually
pm2 start ecosystem-error-fixing.config.cjs
```

### Monitoring

```bash
# Check status of all processes
pm2 status

# View real-time logs
pm2 logs

# View logs for specific process
pm2 logs enhanced-error-detector

# Monitor all processes in terminal UI
pm2 monit
```

### Stopping the System

```bash
# Stop all processes
pm2 stop all

# Delete all processes
pm2 delete all

# Or stop specific process
pm2 stop intelligent-typescript-fixer
```

### Restarting

```bash
# Restart all processes
pm2 restart all

# Restart specific process
pm2 restart enhanced-error-detector

# Reload configuration
pm2 reload ecosystem-error-fixing.config.cjs
```

## 📈 Monitoring & Reports

### Real-time Monitoring

The system provides comprehensive monitoring through:

- **PM2 Status**: `pm2 status` - Shows all running processes
- **PM2 Monitor**: `pm2 monit` - Real-time terminal UI
- **PM2 Logs**: `pm2 logs` - View all logs in real-time

### Generated Reports

The system generates various reports in JSON format:

- `enhanced-error-detector-report.json` - Current error state
- `intelligent-typescript-fixer-report.json` - TypeScript fixes applied
- `smart-linting-fixer-report.json` - Linting fixes applied
- `auto-import-export-fixer-report.json` - Import/export fixes
- `jsx-tsx-syntax-fixer-report.json` - JSX/TSX syntax fixes
- `master-error-fixing-orchestrator-report.json` - System overview

### Log Files

All processes log to:
- `logs/` - Main log directory
- `automation/logs/` - Automation-specific logs

## 🔧 Configuration

### Environment Variables

You can customize the system behavior using environment variables:

```bash
# Error detection interval (default: 5 minutes)
ERROR_DETECTION_INTERVAL=300000

# TypeScript fix interval (default: 10 minutes)
TYPESCRIPT_FIX_INTERVAL=600000

# Linting fix interval (default: 10 minutes)
LINTING_FIX_INTERVAL=600000

# Import/export fix interval (default: 15 minutes)
IMPORT_EXPORT_FIX_INTERVAL=900000

# JSX/TSX fix interval (default: 15 minutes)
JSX_TSX_FIX_INTERVAL=900000

# Orchestrator interval (default: 1 hour)
ORCHESTRATOR_INTERVAL=3600000
```

### PM2 Configuration

The system uses `ecosystem-error-fixing.config.cjs` for PM2 configuration. Key settings:

- **Memory limits**: 512M-1G per process
- **Auto-restart**: Enabled for all processes
- **Log rotation**: 10MB max size, 30 files retained
- **Cron schedules**: Various intervals for different fixers

## 🎯 Error Types Handled

### TypeScript Errors
- Compilation errors
- Type annotation issues
- Interface definition problems
- Import/export errors
- React component errors
- Hook errors
- Generic type errors

### Linting Errors
- ESLint violations
- Code formatting issues
- Unused imports/variables
- Missing semicolons
- Quote consistency
- Trailing spaces

### JSX/TSX Errors
- Syntax errors
- Attribute issues
- Closing tag problems
- Fragment syntax
- React component syntax
- Event handler types

### Import/Export Errors
- Missing imports
- Unused imports
- Import path issues
- Export syntax problems
- Circular dependencies
- Import organization

### Build Errors
- Compilation failures
- Dependency conflicts
- Configuration issues
- Asset loading problems

## 🚨 Troubleshooting

### Common Issues

1. **PM2 not found**
   ```bash
   npm install -g pm2
   ```

2. **Permission denied**
   ```bash
   chmod +x start-error-fixing-automation.sh
   ```

3. **Process not starting**
   ```bash
   pm2 logs --lines 50
   ```

4. **High memory usage**
   ```bash
   pm2 restart all
   ```

### Debug Mode

Enable debug logging:

```bash
# Set debug environment
export DEBUG=pm2:*

# Start with debug
pm2 start ecosystem-error-fixing.config.cjs --env development
```

### Health Checks

```bash
# Check system health
pm2 ping

# Check process health
pm2 status

# View error logs
pm2 logs --err --lines 100
```

## 📊 Performance Metrics

The system tracks various performance metrics:

- **Success Rate**: Percentage of successful fixes
- **Error Count**: Number of errors detected
- **Fix Count**: Number of fixes applied
- **Response Time**: Time to detect and fix errors
- **Uptime**: Process availability

## 🔄 Integration

### With CI/CD

The system can be integrated with CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Start Error Fixing Automation
  run: |
    ./start-error-fixing-automation.sh
    sleep 30
    pm2 status
```

### With Development Workflow

- **Pre-commit**: Run quick error checks
- **Pre-push**: Ensure no critical errors
- **Continuous**: Background monitoring and fixing

## 🛡️ Safety Features

- **Backup Creation**: Creates backups before major changes
- **Rollback Capability**: Can revert changes if needed
- **Error Isolation**: Prevents one error from affecting others
- **Rate Limiting**: Prevents excessive file modifications
- **Validation**: Validates fixes before applying

## 📝 Best Practices

1. **Regular Monitoring**: Check `pm2 status` regularly
2. **Log Review**: Review logs for unusual patterns
3. **Backup Strategy**: Keep regular backups of your codebase
4. **Gradual Deployment**: Test in development before production
5. **Documentation**: Document any custom configurations

## 🤝 Contributing

To contribute to the automation system:

1. Fork the repository
2. Create a feature branch
3. Add your automation script
4. Update the ecosystem configuration
5. Test thoroughly
6. Submit a pull request

## 📄 License

This automation system is provided as-is for educational and development purposes.

## 🆘 Support

For issues or questions:

1. Check the troubleshooting section
2. Review the logs: `pm2 logs --lines 100`
3. Check system status: `pm2 status`
4. Review generated reports in the project root

---

**Note**: This system is designed to assist with development and should not replace proper code review and testing practices. Always review automated changes before deploying to production.