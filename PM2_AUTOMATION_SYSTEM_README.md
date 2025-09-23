# PM2 Automation System for Zion App

## Overview

This project includes a comprehensive PM2-based automation system that automatically detects and fixes common issues in the codebase. The system runs continuously in the background and ensures code quality, file integrity, and build health.

## 🚀 Quick Start

### 1. Install PM2 (if not already installed)

```bash
npm install -g pm2
```

### 2. Start all automation processes

```bash
npm run automation:setup
```

### 3. Check automation status

```bash
npm run automation:health-check
```

### 4. Run a quick fix

```bash
npm run automation:quick-fix
```

### 5. Run full automation scan

```bash
npm run automation:full-scan
```

## 🔧 Available Automation Scripts

### Core Automation Scripts

#### 1. **Automation Orchestrator** (`automation-orchestrator.js`)

- **Purpose**: Coordinates all automation processes in the correct order
- **Schedule**: Runs every 2 hours
- **Memory**: 2GB max
- **What it does**:
  - Runs critical fixes sequentially
  - Runs monitoring processes in parallel
  - Generates comprehensive reports
  - Checks system health

#### 2. **TypeScript Error Fixer** (`typescript-error-fixer.js`)

- **Purpose**: Automatically fixes TypeScript syntax errors
- **Schedule**: Runs every 4 hours
- **Memory**: 1GB max
- **What it fixes**:
  - Missing closing tags (div, section, main, Card, etc.)
  - Unmatched braces, parentheses, and brackets
  - Empty files (creates basic component templates)
  - Syntax errors like unexpected tokens
  - Function declaration issues

#### 3. **File Integrity Checker** (`file-integrity-checker.js`)

- **Purpose**: Detects and fixes corrupted or problematic files
- **Schedule**: Runs every 6 hours
- **Memory**: 1GB max
- **What it checks**:
  - Empty files and whitespace-only files
  - Corrupted binary content
  - Broken imports
  - Unmatched braces, parentheses, brackets
  - File syntax validation

#### 4. **Build Health Monitor** (`build-health-monitor.js`)

- **Purpose**: Monitors and fixes build system issues
- **Schedule**: Runs every 8 hours
- **Memory**: 1GB max
- **What it monitors**:
  - Dependencies (npm install, package-lock.json)
  - Configuration files (tsconfig.json, vite.config.ts)
  - Build scripts
  - Build tests (TypeScript compilation, ESLint)
  - Configuration conflicts

#### 5. **Lint Fixer** (`lint-fixer.js`)

- **Purpose**: Automatically fixes common linting issues
- **Schedule**: Runs every 6 hours
- **Memory**: 1GB max
- **What it fixes**:
  - Trailing spaces
  - Unused imports
  - Console statements (comments them out)
  - Prefer-const issues
  - Empty blocks

#### 6. **Code Quality Monitor** (`code-quality-monitor.js`)

- **Purpose**: Monitors overall code quality
- **Schedule**: Runs every 12 hours
- **Memory**: 1GB max
- **What it monitors**:
  - Code quality metrics
  - Issue patterns
  - Recommendations for improvements

#### 7. **Auto Commit Fixes** (`auto-commit-fixes.js`)

- **Purpose**: Automatically commits fixes to git
- **Schedule**: Runs every 4 hours
- **Memory**: 1GB max
- **What it does**:
  - Commits automatic fixes
  - Maintains git history
  - Prevents accumulation of uncommitted changes

#### 8. **Dependency Monitor** (`dependency-monitor.js`)

- **Purpose**: Monitors and updates dependencies
- **Schedule**: Runs weekly on Sunday
- **Memory**: 1GB max
- **What it monitors**:
  - Outdated packages
  - Security vulnerabilities
  - Dependency conflicts

#### 9. **Performance Monitor** (`performance-monitor.js`)

- **Purpose**: Monitors application performance
- **Schedule**: Runs every 8 hours
- **Memory**: 1GB max
- **What it monitors**:
  - Bundle size
  - Build performance
  - Runtime performance metrics

## 📋 Available NPM Scripts

### Automation Commands

```bash
# Start all automation processes
npm run automation:setup

# Stop all automation processes
npm run automation:stop

# Run the full automation orchestrator
npm run automation:orchestrate

# Run all automation fixes
npm run automation:fix-all

# Quick fix for common issues
npm run automation:quick-fix

# Full automation scan with quality checks
npm run automation:full-scan

# Check automation process health
npm run automation:health-check
```

### Individual Automation Scripts

```bash
# Fix TypeScript errors
npm run typescript:fix

# Check file integrity
npm run file:check

# Check build health
npm run build:health

# Fix linting issues
npm run lint:fix

# Check code quality
npm run quality:check

# Check dependencies
npm run deps:check

# Check performance
npm run perf:check
```

### PM2 Management

```bash
# Start PM2 processes
npm run pm2:start

# Stop PM2 processes
npm run pm2:stop

# Restart PM2 processes
npm run pm2:restart

# Delete PM2 processes
npm run pm2:delete

# View PM2 logs
npm run pm2:logs

# Check PM2 status
npm run pm2:status

# Monitor PM2 processes
npm run pm2:monit
```

## 📊 Monitoring and Reports

### Log Files

All automation processes generate detailed logs in the `logs/pm2/` directory:

- `{process-name}.log` - Standard output logs
- `{process-name}-error.log` - Error logs
- `{process-name}-out.log` - Detailed output logs

### Report Files

Automation processes generate JSON reports in the `logs/pm2/` directory:

- `automation-report.json` - Comprehensive automation report
- `file-integrity-report.json` - File integrity analysis
- `code-quality-report.json` - Code quality metrics
- `build-health-report.json` - Build system health

### Real-time Monitoring

```bash
# Monitor all processes in real-time
npm run pm2:monit

# View live logs
npm run pm2:logs

# Check process status
npm run pm2:status
```

## 🔍 How It Works

### 1. **Sequential Processing** (Critical Fixes)

The orchestrator runs critical fixes in sequence to ensure dependencies are resolved:

1. File Integrity Checker
2. TypeScript Error Fixer
3. Build Health Monitor
4. Lint Fixer
5. Code Quality Monitor

### 2. **Parallel Processing** (Monitoring)

Non-critical monitoring processes run in parallel:

- Dependency Monitor
- Performance Monitor
- Auto Commit Fixes

### 3. **Automatic Issue Resolution**

- **Detection**: Each script scans the codebase for specific issues
- **Analysis**: Issues are categorized by type and severity
- **Fixing**: Automatic fixes are applied where possible
- **Reporting**: Detailed reports are generated
- **Commitment**: Fixes are automatically committed to git

### 4. **Continuous Monitoring**

- Processes restart automatically on failure
- Cron-based scheduling ensures regular execution
- Memory limits prevent resource exhaustion
- Comprehensive logging for debugging

## 🛠️ Customization

### Modifying Schedules

Edit `ecosystem.config.js` to change cron schedules:

```javascript
cron_restart: '0 */2 * * *'; // Every 2 hours
cron_restart: '0 0 * * 0'; // Weekly on Sunday
cron_restart: '0 */6 * * *'; // Every 6 hours
```

### Adding New Automation Scripts

1. Create your script in `scripts/pm2/`
2. Add it to `ecosystem.config.js`
3. Add npm scripts to `package.json`
4. Update the orchestrator if needed

### Environment Variables

Each process can be configured with environment variables:

```javascript
env: {
  NODE_ENV: 'development',
  PM2_PROCESS_NAME: 'your-process-name',
  CUSTOM_VAR: 'custom-value'
}
```

## 🚨 Troubleshooting

### Common Issues

#### Process Not Starting

```bash
# Check PM2 status
npm run pm2:status

# Check logs for errors
npm run pm2:logs

# Restart processes
npm run pm2:restart
```

#### Memory Issues

```bash
# Check memory usage
npm run pm2:monit

# Restart specific process
pm2 restart process-name
```

#### Log File Issues

```bash
# Check if logs directory exists
ls -la logs/pm2/

# Create logs directory if missing
mkdir -p logs/pm2/
```

### Debug Mode

To run a script manually for debugging:

```bash
# Run individual script
node scripts/pm2/typescript-error-fixer.js

# Check script output
tail -f logs/pm2/typescript-error-fixer.log
```

## 📈 Performance Considerations

### Resource Usage

- **Memory**: Each process limited to 1-2GB
- **CPU**: Processes run sequentially to avoid overwhelming system
- **Disk**: Logs and reports stored in `logs/pm2/` directory

### Optimization Tips

- Adjust cron schedules based on project needs
- Monitor memory usage with `npm run pm2:monit`
- Review logs regularly to identify performance bottlenecks
- Consider running heavy processes during off-peak hours

## 🔒 Security Features

### Git Integration

- Automatic commits with descriptive messages
- No sensitive data in commit messages
- Safe git operations with error handling

### File Safety

- Backup creation before major changes
- Validation of all file operations
- Rollback capabilities for failed fixes

### Process Isolation

- Each automation process runs independently
- Memory limits prevent resource exhaustion
- Automatic restart on failure

## 📚 Best Practices

### 1. **Regular Monitoring**

- Check automation status daily
- Review logs weekly
- Monitor system resources

### 2. **Gradual Rollout**

- Start with basic automation
- Add complex processes gradually
- Test in development first

### 3. **Documentation**

- Keep this README updated
- Document custom automation scripts
- Maintain troubleshooting guides

### 4. **Backup Strategy**

- Regular git commits
- Backup important configuration files
- Version control for automation scripts

## 🎯 Success Metrics

### Key Performance Indicators

- **Issue Resolution Rate**: Percentage of issues automatically fixed
- **Process Success Rate**: Percentage of successful automation runs
- **Time to Resolution**: How quickly issues are detected and fixed
- **Code Quality Score**: Overall code quality metrics

### Monitoring Dashboard

```bash
# Quick status check
npm run automation:health-check

# Detailed report
cat logs/pm2/automation-report.json

# Process monitoring
npm run pm2:monit
```

## 🤝 Contributing

### Adding New Automation Features

1. Create feature branch
2. Implement automation script
3. Add to ecosystem config
4. Update package.json scripts
5. Test thoroughly
6. Submit pull request

### Reporting Issues

- Check logs first: `npm run pm2:logs`
- Review automation reports
- Create detailed issue report
- Include relevant log files

## 📞 Support

### Getting Help

1. Check this README
2. Review automation logs
3. Check PM2 status
4. Review recent commits
5. Create support ticket

### Emergency Procedures

```bash
# Stop all automation
npm run automation:stop

# Check what's running
npm run pm2:status

# Restart specific process
pm2 restart process-name

# Full restart
npm run pm2:restart
```

---

**Last Updated**: August 29, 2024  
**Version**: 2.0.0  
**Maintainer**: Zion Tech Group Automation Team

For more information, check the logs in `logs/pm2/` or run `npm run automation:health-check`.
