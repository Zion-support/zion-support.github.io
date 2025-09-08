# PM2 Automation System

This project now uses PM2 (Process Manager 2) for all automation instead of GitHub Actions. PM2 provides a more efficient, local, and customizable automation solution.

## 🚀 Overview

The PM2 automation system replaces all GitHub Actions workflows with local, scheduled processes that run automatically. This provides:

- **Faster execution** - No waiting for GitHub Actions runners
- **Cost savings** - No GitHub Actions minutes consumed
- **Better control** - Full control over execution environment
- **Real-time monitoring** - Live process monitoring and logging
- **Customizable scheduling** - Flexible cron-based scheduling

## 📋 Available Automations

### 1. CI/CD Pipeline (`ci-cd-pipeline`)
- **Schedule**: Every 6 hours
- **Purpose**: Complete CI/CD pipeline including code quality, build, testing, and deployment
- **Features**:
  - Code quality and security checks
  - Build and test processes
  - Performance testing
  - Deployment automation
  - Post-deployment health checks

### 2. Continuous Improvement (`continuous-improvement`)
- **Schedule**: Weekly on Monday at 2 AM
- **Purpose**: Automated code quality improvements and repository maintenance
- **Features**:
  - Repository maintenance
  - Code quality analysis
  - Performance optimization checks
  - Auto-fix application
  - Report generation

### 3. Dependency Management (`dependency-manager`)
- **Schedule**: Weekly on Monday at 2 AM
- **Purpose**: Automated dependency updates and security patches
- **Features**:
  - Check for outdated packages
  - Security vulnerability scanning
  - Automatic dependency updates
  - Build verification
  - Test execution

### 4. Link Checker (`link-checker`)
- **Schedule**: Daily at 2 AM
- **Purpose**: Automated link validation and broken link detection
- **Features**:
  - Extract links from build files
  - Validate internal and external links
  - Generate broken link reports
  - Issue creation for broken links

### 5. Code Quality (`code-quality`)
- **Schedule**: Every 4 hours
- **Purpose**: Continuous code quality monitoring
- **Features**:
  - ESLint execution
  - TypeScript type checking
  - Security audits
  - Code complexity analysis
  - Build health checks

### 6. Performance Monitor (`performance-monitor`)
- **Schedule**: Every 2 hours
- **Purpose**: Performance monitoring and optimization
- **Features**:
  - Bundle size analysis
  - Build performance measurement
  - Dependency analysis
  - Lighthouse audits
  - Performance reporting

### 7. Security Audit (`security-audit`)
- **Schedule**: Daily at 3 AM
- **Purpose**: Comprehensive security monitoring
- **Features**:
  - NPM security audits
  - Snyk vulnerability scanning
  - Secret detection
  - Code security analysis
  - Dependency vulnerability checks

### 8. Build Automation (`build-automation`)
- **Schedule**: Every 8 hours
- **Purpose**: Automated build processes and verification
- **Features**:
  - Environment checks
  - Dependency installation
  - Pre-build validation
  - Build execution
  - Post-build testing

## 🛠️ Installation and Setup

### Prerequisites
- Node.js 18+ installed
- PM2 installed globally: `npm install -g pm2`

### Quick Start
1. **Start the automation system**:
   ```bash
   ./scripts/pm2/start-pm2-automation.sh
   ```

2. **Or manually start**:
   ```bash
   pm2 start ecosystem.config.cjs
   pm2 save
   ```

### Manual Setup
1. **Install PM2**:
   ```bash
   npm install -g pm2
   ```

2. **Start the ecosystem**:
   ```bash
   pm2 start ecosystem.config.cjs
   ```

3. **Save configuration**:
   ```bash
   pm2 save
   ```

4. **Setup startup**:
   ```bash
   pm2 startup
   ```

## 📊 Monitoring and Management

### View Status
```bash
pm2 list                    # List all processes
pm2 monit                   # Interactive monitoring
pm2 logs                    # View all logs
pm2 logs [process-name]     # View specific process logs
```

### Process Management
```bash
pm2 restart all             # Restart all processes
pm2 restart [process-name]  # Restart specific process
pm2 stop all                # Stop all processes
pm2 stop [process-name]     # Stop specific process
pm2 delete all              # Remove all processes
pm2 delete [process-name]   # Remove specific process
```

### Logs and Reports
All automation processes generate detailed logs and reports in the `logs/` directory:

- **Log files**: `logs/[process-name].log`
- **Markdown reports**: `logs/[process-name]-report.md`
- **JSON reports**: `logs/[process-name]-report.json`

## ⚙️ Configuration

### Ecosystem Configuration
The main configuration is in `ecosystem.config.cjs`:

- **Scheduling**: Cron-based scheduling for each automation
- **Memory limits**: Configurable memory limits for each process
- **Environment variables**: Custom environment configuration
- **Deployment**: Production and staging deployment configuration

### Customization
Each automation script can be customized:

1. **Modify scripts** in `scripts/pm2/`
2. **Adjust schedules** in `ecosystem.config.cjs`
3. **Add new automations** by creating new scripts
4. **Configure thresholds** and rules in individual scripts

## 🔧 Troubleshooting

### Common Issues

1. **Process not starting**:
   ```bash
   pm2 logs [process-name]  # Check for errors
   pm2 restart [process-name] # Restart the process
   ```

2. **Memory issues**:
   ```bash
   pm2 monit                 # Monitor memory usage
   pm2 restart [process-name] # Restart to free memory
   ```

3. **Schedule not working**:
   ```bash
   pm2 list                  # Check cron schedules
   pm2 restart [process-name] # Restart to apply new schedule
   ```

### Log Analysis
- Check individual process logs in `logs/` directory
- Review generated reports for detailed information
- Monitor PM2 logs for system-level issues

## 📈 Benefits Over GitHub Actions

| Feature | GitHub Actions | PM2 Automation |
|---------|----------------|----------------|
| **Execution Speed** | Queue-based, variable | Immediate, consistent |
| **Cost** | Minutes consumed | Free (local execution) |
| **Control** | Limited by GitHub | Full local control |
| **Monitoring** | Web interface only | Real-time CLI monitoring |
| **Customization** | YAML-based | Full JavaScript/Node.js |
| **Scheduling** | Push/PR based | Flexible cron scheduling |
| **Resource Usage** | Shared runners | Dedicated local resources |
| **Integration** | GitHub ecosystem | Any local system |

## 🚀 Migration from GitHub Actions

The following GitHub Actions workflows have been replaced:

- ✅ `ci-cd.yml` → PM2 CI/CD Pipeline
- ✅ `continuous-improvement.yml` → PM2 Continuous Improvement
- ✅ `dependencies.yml` → PM2 Dependency Manager
- ✅ `link-checker.yml` → PM2 Link Checker
- ✅ `codeql.yml` → PM2 Security Audit
- ✅ `quality-check.yml` → PM2 Code Quality
- ✅ `testing.yml` → PM2 Performance Monitor
- ✅ `deploy.yml` → PM2 Build Automation

## 📝 Adding New Automations

To add a new automation:

1. **Create script** in `scripts/pm2/`
2. **Add to ecosystem** in `ecosystem.config.cjs`
3. **Configure schedule** using cron syntax
4. **Test the automation** manually first
5. **Start with PM2** and monitor

Example new automation:
```javascript
// scripts/pm2/new-automation.js
class NewAutomation {
  async run() {
    // Your automation logic here
  }
}

if (require.main === module) {
  const automation = new NewAutomation();
  automation.run();
}

module.exports = NewAutomation;
```

## 🔒 Security Considerations

- All automation runs locally with your system permissions
- No external service access to your code
- Logs contain sensitive information - secure appropriately
- Consider file permissions for automation scripts
- Monitor for any unexpected behavior

## 📞 Support

For issues with the PM2 automation system:

1. Check PM2 logs: `pm2 logs`
2. Review individual process logs in `logs/` directory
3. Check process status: `pm2 list`
4. Restart problematic processes: `pm2 restart [process-name]`

## 📚 Additional Resources

- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [Cron Syntax Reference](https://crontab.guru/)
- [Node.js Process Management](https://nodejs.org/api/process.html)

---

**Note**: This automation system replaces all GitHub Actions workflows. Ensure your team is familiar with PM2 commands and monitoring before removing GitHub Actions completely.