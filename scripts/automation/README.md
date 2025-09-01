# PM2 Error Prevention & Code Quality Automation

This directory contains automated scripts that continuously monitor and fix common code quality issues to prevent errors from accumulating in your project.

## 🚀 Quick Start

### 1. Start All Automation Services

```bash
# Start all automation services with PM2
pm2 start ecosystem-error-prevention.config.cjs

# View running services
pm2 list

# View logs
pm2 logs
```

### 2. Individual Service Management

```bash
# Start specific services
pm2 start scripts/automation/pm2-error-prevention.cjs --name error-prevention
pm2 start scripts/automation/code-quality-monitor.cjs --name code-quality-monitor
pm2 start scripts/automation/auto-fix-scheduler.cjs --name auto-fix-scheduler

# Stop services
pm2 stop error-prevention
pm2 stop code-quality-monitor
pm2 stop auto-fix-scheduler

# Restart services
pm2 restart error-prevention

# Delete services
pm2 delete error-prevention
```

## 📋 Available Automation Scripts

### 1. PM2 Error Prevention (`pm2-error-prevention.cjs`)

- **Purpose**: Continuously monitors for TypeScript errors and automatically fixes them
- **Frequency**: Checks every 5 minutes
- **Auto-fix**: Triggers when error count exceeds 100
- **Features**:
  - Real-time error detection
  - Automatic error fixing
  - Import issue resolution
  - Syntax error correction

### 2. Code Quality Monitor (`code-quality-monitor.cjs`)

- **Purpose**: Monitors overall code quality and generates reports
- **Frequency**: Checks every 10 minutes
- **Thresholds**:
  - Max errors: 50
  - Max warnings: 100
  - Max files with issues: 20
- **Features**:
  - TypeScript compilation monitoring
  - ESLint quality checks
  - Import quality analysis
  - Syntax quality validation
  - Quality score calculation
  - Automatic fix triggering

### 3. Auto-Fix Scheduler (`auto-fix-scheduler.cjs`)

- **Purpose**: Runs scheduled maintenance and cleanup tasks
- **Schedules**:
  - **Daily**: 2 AM - Quick fixes (imports, syntax)
  - **Weekly**: Sunday 2 AM - Comprehensive fixes
  - **Monthly**: 1st of month 2 AM - Deep cleanup
- **Features**:
  - Scheduled maintenance
  - Progressive fix levels
  - Fix history tracking
  - Project health reports

## 🔧 Manual Error Fixing

### Run Comprehensive Error Fixer

```bash
node scripts/automation/comprehensive-error-fixer.cjs
```

### Run Specific Fixers

```bash
# Fix any type annotations
node scripts/automation/fix-any-types.cjs

# Fix remaining errors
node scripts/automation/fix-remaining-errors.cjs

# Fix final patterns
node scripts/automation/fix-final-errors.cjs
```

## 📊 Monitoring & Logs

### View Real-time Logs

```bash
# View all automation logs
pm2 logs

# View specific service logs
pm2 logs error-prevention
pm2 logs code-quality-monitor
pm2 logs auto-fix-scheduler

# Follow logs in real-time
pm2 logs --follow
```

### Generated Reports

The automation scripts generate various reports in the `logs/` directory:

- `quality-report.json` - Current code quality metrics
- `project-health-report.json` - Monthly project health summary
- `fix-history.json` - History of all automated fixes
- `typescript-errors.log` - TypeScript error logs
- `eslint-errors.log` - ESLint error logs

### Quality Metrics

- **Quality Score**: 0-100 based on error/warning counts
- **Error Count**: Number of TypeScript compilation errors
- **Warning Count**: Number of ESLint warnings/errors
- **Files with Issues**: Number of files containing problems
- **Total Files**: Total source files in the project

## ⚙️ Configuration

### Environment Variables

```bash
# Set check intervals (in milliseconds)
export AUTOMATION_INTERVAL=900000  # 15 minutes

# Enable/disable auto-fixing
export PM2_ERROR_PREVENTION=true
export PM2_CODE_QUALITY=true
export PM2_AUTO_FIX=true
```

### Thresholds

Modify thresholds in the respective scripts:

```javascript
// In code-quality-monitor.cjs
this.thresholds = {
  maxErrors: 50, // Trigger auto-fix when errors exceed this
  maxWarnings: 100, // Trigger auto-fix when warnings exceed this
  maxFilesWithIssues: 20, // Trigger auto-fix when files with issues exceed this
};

// In pm2-error-prevention.cjs
this.config = {
  checkInterval: 5 * 60 * 1000, // 5 minutes
  maxErrors: 100, // Trigger auto-fix when errors exceed this
  autoFix: true, // Enable automatic fixing
  backupBeforeFix: true, // Create backups before fixing
};
```

## 🚨 Troubleshooting

### Common Issues

1. **Service Not Starting**

   ```bash
   # Check PM2 status
   pm2 list

   # Check logs for errors
   pm2 logs error-prevention

   # Restart service
   pm2 restart error-prevention
   ```

2. **Auto-fix Not Working**

   ```bash
   # Check if scripts exist
   ls -la scripts/automation/

   # Test script manually
   node scripts/automation/comprehensive-error-fixer.cjs

   # Check permissions
   chmod +x scripts/automation/*.cjs
   ```

3. **High Memory Usage**

   ```bash
   # Check memory usage
   pm2 monit

   # Restart services to free memory
   pm2 restart all

   # Adjust memory limits in ecosystem config
   ```

### Reset Automation

```bash
# Stop all automation services
pm2 stop all

# Delete all automation services
pm2 delete all

# Clear PM2 logs
pm2 flush

# Restart from scratch
pm2 start ecosystem-error-prevention.config.cjs
```

## 📈 Performance Impact

### Resource Usage

- **CPU**: Minimal impact (checks run every 5-10 minutes)
- **Memory**: ~50-100MB per service
- **Disk I/O**: Low (only when errors are detected)

### Optimization Tips

1. **Adjust check intervals** for less critical environments
2. **Disable auto-fix** in production if manual review is preferred
3. **Set appropriate thresholds** based on your project size
4. **Monitor logs** to ensure automation is working efficiently

## 🔒 Security Considerations

- Automation scripts run with the same permissions as the PM2 process
- Scripts only modify source code files in the `src/` directory
- All changes are logged for audit purposes
- Consider running in a development environment only

## 📚 Integration with Existing PM2 Setup

These automation scripts integrate with your existing PM2 ecosystem:

```javascript
// Add to your existing ecosystem.config.cjs
module.exports = {
  apps: [
    // ... your existing apps ...

    // Error Prevention Automation
    {
      name: 'error-prevention',
      script: 'scripts/automation/pm2-error-prevention.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },

    // Code Quality Monitor
    {
      name: 'code-quality-monitor',
      script: 'scripts/automation/code-quality-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
    },
  ],
};
```

## 🎯 Best Practices

1. **Start Small**: Begin with error prevention, then add quality monitoring
2. **Review Logs**: Regularly check automation logs to ensure proper operation
3. **Adjust Thresholds**: Fine-tune thresholds based on your project's needs
4. **Backup Code**: Ensure your code is committed before enabling auto-fix
5. **Monitor Performance**: Watch for any performance impact on your development workflow

## 📞 Support

If you encounter issues with the automation scripts:

1. Check the logs: `pm2 logs`
2. Test scripts manually: `node scripts/automation/[script-name].cjs`
3. Review the configuration in the ecosystem file
4. Ensure all dependencies are installed: `npm install`

---

**Note**: These automation scripts are designed to help maintain code quality but should not replace proper code review practices. Always review automated changes before committing them to your main branch.
