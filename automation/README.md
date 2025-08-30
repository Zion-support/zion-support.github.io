# Zion App PM2 Automation System

A comprehensive automation system that prevents and automatically fixes common build issues, code quality problems, and dependency issues using PM2 process management.

## 🚀 Overview

This automation system consists of five specialized monitors that work together to maintain the health and stability of your Zion App project:

1. **Build Health Monitor** - Prevents and fixes build issues
2. **Code Quality Monitor** - Maintains code quality and fixes syntax errors
3. **Dependency Monitor** - Manages dependencies and security vulnerabilities
4. **Build Automation** - Automatically fixes build failures and optimizes builds
5. **File Integrity Monitor** - Ensures file system integrity and project structure

## 📋 Features

### ✅ **Automatic Issue Detection**
- Real-time monitoring of build health
- Automatic detection of Next.js import issues
- TypeScript compilation error detection
- Dependency conflict resolution
- File corruption detection

### ✅ **Automatic Issue Resolution**
- Self-healing build configurations
- Automatic Next.js to React Router conversion
- Missing file regeneration
- Permission fixes
- Dependency auto-updates

### ✅ **Proactive Maintenance**
- Scheduled health checks every 15-30 minutes
- Daily deep scans and optimizations
- Weekly maintenance routines
- Automatic log cleanup and rotation

### ✅ **Comprehensive Reporting**
- Detailed issue reports with actionable solutions
- Build performance metrics
- Security vulnerability tracking
- File integrity checksums

## 🛠️ Installation

### 1. Install PM2 Globally
```bash
npm install -g pm2
```

### 2. Install Automation Dependencies
```bash
cd automation
npm install
```

### 3. Start All Automation Services
```bash
npm run start:all
```

## 🔧 Configuration

### PM2 Ecosystem Configuration
The `ecosystem.config.cjs` file configures all automation services with:
- Automatic restarts on failure
- Scheduled daily restarts for freshness
- Comprehensive logging
- Memory limits and resource management

### Automation Scripts
Each monitor runs independently with its own schedule:

| Monitor | Frequency | Purpose |
|---------|-----------|---------|
| Build Health | Every 15 minutes | Prevents build failures |
| Code Quality | Every 30 minutes | Maintains code standards |
| Dependencies | Every 2 hours | Manages package health |
| Build Automation | Every 4 hours | Tests and optimizes builds |
| File Integrity | Every 6 hours | Ensures file system health |

## 📊 Monitoring and Management

### View Status
```bash
npm run status
```

### View Logs
```bash
npm run logs
```

### Monitor in Real-time
```bash
npm run monitor
```

### Stop All Services
```bash
npm run stop:all
```

### Restart All Services
```bash
npm run restart:all
```

## 🚨 Issue Resolution Examples

### Next.js Import Issues
**Problem**: `Cannot resolve module 'next/link'`
**Solution**: Automatically converts to `react-router-dom` Link component

### Build Configuration Issues
**Problem**: Mixed CommonJS/ES6 modules in vite.config.ts
**Solution**: Regenerates clean, optimized Vite configuration

### Missing Dependencies
**Problem**: `Module not found` errors
**Solution**: Automatically installs missing packages

### File Corruption
**Problem**: Build files corrupted or unreadable
**Solution**: Restores from backups or regenerates files

## 📁 File Structure

```
automation/
├── build-health-monitor.js      # Main build health monitoring
├── code-quality-monitor.js      # Code quality and syntax checking
├── dependency-monitor.js        # Dependency management and security
├── build-automation.js          # Build testing and optimization
├── file-integrity-monitor.js    # File system integrity
├── package.json                 # Automation dependencies
├── ecosystem.config.cjs         # PM2 configuration
└── README.md                    # This file
```

## 🔍 How It Works

### 1. **Continuous Monitoring**
Each monitor runs continuously, checking for issues at regular intervals.

### 2. **Issue Detection**
Monitors use various detection methods:
- File system checks
- Build process testing
- Dependency analysis
- Code compilation testing

### 3. **Automatic Resolution**
When issues are detected, the system attempts automatic fixes:
- File replacements
- Configuration regeneration
- Dependency installation
- Permission fixes

### 4. **Reporting and Alerts**
All activities are logged and reported:
- Success/failure metrics
- Issue resolution summaries
- Manual intervention requirements

## 🚀 Getting Started

### Quick Start
```bash
# Navigate to automation directory
cd automation

# Install dependencies
npm install

# Start all automation services
npm run start:all

# Check status
npm run status
```

### Manual Start (for testing)
```bash
# Start individual monitors
node build-health-monitor.js
node code-quality-monitor.js
node dependency-monitor.js
node build-automation.js
node file-integrity-monitor.js
```

## 📈 Performance Impact

- **Memory Usage**: Each monitor uses 256MB-512MB RAM
- **CPU Usage**: Minimal impact, mostly idle monitoring
- **Disk I/O**: Low, only during scheduled checks
- **Network**: Minimal, only for dependency checks

## 🔒 Security Features

- No external API calls without authentication
- Local file system operations only
- Secure dependency management
- Automatic security vulnerability scanning

## 🐛 Troubleshooting

### Common Issues

#### PM2 Not Found
```bash
npm install -g pm2
```

#### Permission Denied
```bash
sudo npm install -g pm2
```

#### Monitor Not Starting
Check logs for specific errors:
```bash
pm2 logs build-health-monitor
```

#### High Memory Usage
Adjust memory limits in `ecosystem.config.cjs`:
```javascript
max_memory_restart: '256M'  // Reduce from 512M
```

### Log Locations
- **Build Health**: `logs/build-monitor.log`
- **Code Quality**: `logs/code-quality.log`
- **Dependencies**: `logs/dependency.log`
- **Build Automation**: `logs/build-automation.log`
- **File Integrity**: `logs/file-integrity.log`

## 📊 Metrics and Reporting

### Available Metrics
- Build success/failure rates
- Issues detected and resolved
- Performance optimization counts
- File integrity check results
- Dependency update statistics

### Report Files
- `logs/build-failure-report.txt` - Build failure details
- `logs/typescript-errors-report.txt` - TypeScript compilation issues
- `logs/security-audit-report.txt` - Security vulnerability reports
- `logs/dependency-update-report.txt` - Package update summaries

## 🔄 Maintenance

### Daily Operations
- Automatic health checks
- Security vulnerability scanning
- Build testing and optimization

### Weekly Operations
- Deep system analysis
- Log cleanup and rotation
- Performance optimization
- File integrity validation

### Monthly Operations
- Dependency major version review
- Configuration optimization
- Performance metrics analysis

## 🤝 Contributing

To add new automation features:

1. Create new monitor script in `automation/` directory
2. Add to `ecosystem.config.cjs`
3. Update `package.json` dependencies
4. Document in this README

## 📞 Support

For issues with the automation system:

1. Check PM2 logs: `pm2 logs`
2. Review individual monitor logs in `logs/` directory
3. Check PM2 status: `pm2 status`
4. Restart services: `npm run restart:all`

## 🎯 Best Practices

### For Developers
- Commit changes regularly to trigger automation
- Monitor automation logs for insights
- Use automation reports for code quality improvements

### For DevOps
- Monitor PM2 process health
- Review automation metrics regularly
- Adjust schedules based on project needs

### For Project Managers
- Review weekly automation reports
- Use metrics for project health assessment
- Plan maintenance based on automation insights

---

**Note**: This automation system is designed to work autonomously. It will automatically fix most common issues without human intervention, but will create detailed reports for issues that require manual attention.
