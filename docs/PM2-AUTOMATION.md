# PM2 Automation System

This project includes a comprehensive PM2 automation system that automatically monitors, fixes, and maintains code quality, dependencies, and performance.

## 🚀 Quick Start

### 1. Install PM2 (if not already installed)
```bash
npm install -g pm2
```

### 2. Start all automation processes
```bash
npm run automation:setup
```

### 3. Check status
```bash
npm run pm2:status
```

### 4. View logs
```bash
npm run pm2:logs
```

## 📋 Available Scripts

### PM2 Management
- `npm run pm2:start` - Start all PM2 processes
- `npm run pm2:stop` - Stop all PM2 processes
- `npm run pm2:restart` - Restart all PM2 processes
- `npm run pm2:delete` - Remove all PM2 processes
- `npm run pm2:status` - Show PM2 process status
- `npm run pm2:logs` - Show PM2 logs
- `npm run pm2:monit` - Open PM2 monitoring dashboard

### Individual Automation Scripts
- `npm run lint:fix` - Run lint fixer manually
- `npm run quality:check` - Run code quality monitor manually
- `npm run quality:fix` - Run lint fixer + auto-commit
- `npm run deps:check` - Check dependencies manually
- `npm run perf:check` - Check performance manually

## 🔧 Automation Processes

### 1. Lint Fixer (`lint-fixer`)
- **Schedule**: Every 6 hours
- **Purpose**: Automatically fixes common lint issues
- **Fixes**:
  - Trailing spaces
  - Unused React imports
  - Console statements (comments them out)
  - Prefer-const violations
  - Empty blocks
- **Auto-commit**: Yes, with descriptive messages

### 2. Code Quality Monitor (`code-quality-monitor`)
- **Schedule**: Every 12 hours
- **Purpose**: Monitors code quality and reports issues
- **Checks**:
  - Trailing spaces
  - Long lines (>120 characters)
  - Console statements
  - TODO/FIXME comments
  - Unused imports
- **Output**: JSON report with recommendations

### 3. Auto-Commit Fixes (`auto-commit-fixes`)
- **Schedule**: Every 4 hours
- **Purpose**: Automatically commits small fixes
- **Auto-commit rules**:
  - Lint and formatting changes: Always
  - Small source changes (<10 files): Always
  - Large changes or dependency updates: Manual review required
- **Git integration**: Pushes to non-main branches automatically

### 4. Dependency Monitor (`dependency-monitor`)
- **Schedule**: Weekly (Sunday)
- **Purpose**: Monitors package health and security
- **Checks**:
  - Security vulnerabilities (npm audit)
  - Outdated packages
  - Package-lock.json status
  - Node.js and npm versions
  - Git hooks
- **Output**: Security report with recommendations

### 5. Performance Monitor (`performance-monitor`)
- **Schedule**: Every 8 hours
- **Purpose**: Monitors build performance and bundle size
- **Checks**:
  - Build time and success
  - Bundle size analysis
  - Dependency size analysis
  - Lighthouse availability
  - Bundle analyzer availability
- **Output**: Performance report with optimization recommendations

## 📊 Monitoring and Logs

### Log Files
All processes log to `logs/pm2/`:
- `lint-fixer.log` - Lint fixing operations
- `code-quality-monitor.log` - Quality monitoring
- `auto-commit-fixes.log` - Auto-commit operations
- `dependency-monitor.log` - Dependency checks
- `performance-monitor.log` - Performance monitoring

### Reports
- `code-quality-report.json` - Code quality analysis
- `dependency-report.json` - Dependency health report
- `performance-report.json` - Performance metrics

### Real-time Monitoring
```bash
# View all logs in real-time
npm run pm2:logs

# Open monitoring dashboard
npm run pm2:monit

# Check process status
npm run pm2:status
```

## ⚙️ Configuration

### Ecosystem Configuration
The `ecosystem.config.js` file configures all PM2 processes with:
- Automatic restarts
- Memory limits (1GB per process)
- Cron-based restarts
- Log file management
- Environment variables

### Customization
You can modify the automation behavior by editing:
- `scripts/pm2/*.js` - Individual automation scripts
- `ecosystem.config.js` - PM2 process configuration
- `package.json` - NPM scripts and scheduling

## 🚨 Troubleshooting

### Common Issues

#### PM2 not starting
```bash
# Check if PM2 is installed
pm2 --version

# Install PM2 globally
npm install -g pm2

# Clear PM2 cache
pm2 kill
pm2 cleardump
```

#### Processes failing
```bash
# Check process logs
npm run pm2:logs

# Restart processes
npm run pm2:restart

# Check specific process
pm2 logs lint-fixer
```

#### Git issues
```bash
# Check git status
git status

# Ensure git hooks are properly configured
git config core.hooksPath .husky
```

### Manual Recovery
```bash
# Stop all processes
npm run pm2:stop

# Clear PM2 state
pm2 kill
pm2 cleardump

# Restart automation
npm run automation:setup
```

## 🔄 Integration with CI/CD

### GitHub Actions
The automation system can be integrated with GitHub Actions:

```yaml
name: PM2 Automation Health Check
on:
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours

jobs:
  health-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run quality:check
      - run: npm run deps:check
```

### Netlify Integration
The automation system automatically triggers builds when:
- Lint issues are fixed
- Code quality improvements are committed
- Dependencies are updated

## 📈 Best Practices

### 1. Regular Monitoring
- Check PM2 status weekly: `npm run pm2:status`
- Review logs monthly: `npm run pm2:logs`
- Monitor performance reports: `npm run perf:check`

### 2. Maintenance
- Update PM2 globally: `npm update -g pm2`
- Review automation scripts quarterly
- Adjust schedules based on project needs

### 3. Security
- Review dependency reports weekly
- Address security vulnerabilities immediately
- Keep Node.js and npm versions updated

## 🎯 Benefits

### Automated Code Quality
- Consistent code formatting
- Reduced technical debt
- Automated issue detection

### Continuous Improvement
- Regular performance monitoring
- Dependency health tracking
- Automated security checks

### Developer Experience
- Reduced manual lint fixing
- Automated git operations
- Comprehensive monitoring dashboard

## 📞 Support

For issues with the PM2 automation system:
1. Check the logs: `npm run pm2:logs`
2. Review the troubleshooting section
3. Check PM2 documentation: https://pm2.keymetrics.io/
4. Review the automation scripts in `scripts/pm2/`

---

**Note**: This automation system is designed to work autonomously. It will automatically fix issues, commit changes, and maintain code quality without manual intervention. Monitor the logs regularly to ensure it's working as expected.
