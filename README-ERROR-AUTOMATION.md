# Error Fixing Automation System

This project includes a comprehensive PM2-based automation system that automatically detects and fixes common project errors, ensuring your codebase remains healthy and build-ready.

## 🚀 Features

### Automated Error Detection & Fixing
- **TypeScript Error Fixing**: Automatically fixes import errors, property access issues, and type mismatches
- **ESLint Error Resolution**: Fixes unused variables, console statements, and code style issues
- **Import Path Correction**: Automatically corrects broken import paths
- **Missing File Creation**: Creates missing component files with proper structure
- **Package.json Validation**: Ensures all required scripts and dependencies are present

### Continuous Monitoring
- **Real-time Error Monitoring**: Continuously monitors for new errors
- **Build Health Checks**: Monitors build status and triggers fixes when needed
- **File Change Detection**: Watches for file changes and triggers appropriate fixes
- **Performance Metrics**: Tracks error rates, fix success rates, and build times

### PM2 Process Management
- **Process Orchestration**: Manages multiple automation processes
- **Automatic Restarts**: Handles process crashes and restarts
- **Log Management**: Comprehensive logging with rotation
- **Resource Monitoring**: Monitors memory and CPU usage

## 📁 Project Structure

```
├── automation/
│   ├── error-fixer-automation.js      # Main error fixing automation
│   ├── error-monitor.js               # Continuous error monitoring
│   ├── build-watcher.js               # Build monitoring and triggering
│   └── logs/                          # PM2 log files
├── error-reports/                     # Error fixing reports
├── ecosystem-error-fixing-automation.config.cjs  # PM2 configuration
├── start-error-fixing-automation.sh   # Management script
└── README-ERROR-AUTOMATION.md         # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PM2 (will be installed automatically)

### Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the automation system**:
   ```bash
   ./start-error-fixing-automation.sh start
   ```

3. **Check status**:
   ```bash
   ./start-error-fixing-automation.sh status
   ```

## 📋 Available Commands

### Management Script Commands

```bash
# Start the automation system
./start-error-fixing-automation.sh start

# Stop the automation system
./start-error-fixing-automation.sh stop

# Restart the automation system
./start-error-fixing-automation.sh restart

# Show status and recent logs
./start-error-fixing-automation.sh status

# View logs (default: 50 lines)
./start-error-fixing-automation.sh logs [lines]

# Run a single error fix
./start-error-fixing-automation.sh fix

# Run a health check
./start-error-fixing-automation.sh health

# Clean up old reports and logs
./start-error-fixing-automation.sh cleanup

# Show help
./start-error-fixing-automation.sh help
```

### Direct PM2 Commands

```bash
# Check PM2 process status
pm2 status

# View all PM2 logs
pm2 logs

# Monitor PM2 processes
pm2 monit

# Reload all processes
pm2 reload all

# Stop all processes
pm2 stop all

# Delete all processes
pm2 delete all
```

## 🔧 Configuration

### PM2 Ecosystem Configuration

The automation system uses `ecosystem-error-fixing-automation.config.cjs` which defines three main processes:

1. **error-fixer-automation**: Main error fixing process
   - Runs every 6 hours
   - Applies fixes for TypeScript, ESLint, import, and missing file errors
   - Generates detailed reports

2. **error-monitor**: Continuous monitoring process
   - Runs every minute
   - Monitors for new errors
   - Triggers error fixer when threshold is exceeded

3. **build-watcher**: Build monitoring process
   - Watches for file changes
   - Triggers builds on file modifications
   - Monitors build health

### Customization

You can customize the automation behavior by modifying the configuration:

```javascript
// In ecosystem-error-fixing-automation.config.cjs
automation_settings: {
  check_interval: 300000,        // 5 minutes
  max_fixes_per_run: 100,        // Maximum fixes per run
  backup_before_fix: true,       // Backup files before fixing
  notify_on_errors: true,        // Enable notifications
  auto_commit_fixes: false,      // Auto-commit fixes to git
  fix_types: [                   // Types of errors to fix
    'typescript',
    'eslint', 
    'import',
    'missing_files',
    'package_json'
  ]
}
```

## 📊 Monitoring & Reports

### Error Reports

The system generates detailed reports in the `error-reports/` directory:

- `error-fixer-report-*.json`: Detailed reports of fixes applied
- `error-monitor-report-*.json`: Health monitoring reports
- `build-watcher-report-*.json`: Build monitoring reports

### Report Structure

```json
{
  "timestamp": "2025-09-01T05:28:48.895Z",
  "duration": 5004,
  "fixesApplied": [
    {
      "type": "import_path",
      "file": "src/App.tsx",
      "description": "Fixed import path from ./components/Header to ./src/components/Header.tsx",
      "line": 3
    }
  ],
  "errorsFound": [],
  "warnings": []
}
```

### Log Files

PM2 logs are stored in `automation/logs/`:

- `error-fixer-error.log`: Error fixer error logs
- `error-fixer-out.log`: Error fixer output logs
- `error-monitor-error.log`: Monitor error logs
- `error-monitor-out.log`: Monitor output logs
- `build-watcher-error.log`: Build watcher error logs
- `build-watcher-out.log`: Build watcher output logs

## 🔍 Error Types Handled

### TypeScript Errors
- **Property Access Errors**: Fixes incorrect property access in imports
- **Module Import Errors**: Corrects broken module import paths
- **Type Assignment Errors**: Flags type mismatches for manual review

### ESLint Errors
- **Unused Variables**: Prefixes unused variables with underscore
- **Console Statements**: Comments out console.log statements
- **Prefer Const**: Converts let to const where appropriate

### Import Errors
- **Relative Path Issues**: Fixes incorrect relative import paths
- **Missing Extensions**: Adds proper file extensions
- **Path Resolution**: Resolves import paths to correct locations

### Missing Files
- **Component Files**: Creates missing React components
- **Page Files**: Creates missing page components
- **Utility Files**: Creates missing utility files

### Package.json Issues
- **Missing Scripts**: Adds required npm scripts
- **Dependency Issues**: Flags missing dependencies

## 🚨 Troubleshooting

### Common Issues

1. **PM2 not found**:
   ```bash
   npm install -g pm2
   ```

2. **Permission denied**:
   ```bash
   chmod +x start-error-fixing-automation.sh
   ```

3. **Process not starting**:
   ```bash
   pm2 delete all
   ./start-error-fixing-automation.sh start
   ```

4. **High memory usage**:
   ```bash
   pm2 restart all
   ```

### Debug Mode

To run in debug mode:

```bash
# Run error fixer directly
node automation/error-fixer-automation.js

# Run monitor directly
node automation/error-monitor.js

# Run build watcher directly
node automation/build-watcher.js
```

### Log Analysis

```bash
# View recent errors
pm2 logs --lines 100

# View specific process logs
pm2 logs error-fixer-automation

# Monitor in real-time
pm2 logs --follow
```

## 🔄 Automation Workflow

1. **Initial Setup**: System performs initial health check and fixes any existing errors
2. **Continuous Monitoring**: Error monitor runs every minute checking for new issues
3. **File Change Detection**: Build watcher monitors file changes and triggers builds
4. **Error Detection**: When errors are detected, the error fixer is triggered
5. **Fix Application**: Error fixer applies appropriate fixes based on error type
6. **Report Generation**: Detailed reports are generated for each fix session
7. **Health Validation**: System validates that fixes resolved the issues

## 📈 Performance Metrics

The system tracks various metrics:

- **Error Count**: Total number of errors detected
- **Fix Success Rate**: Percentage of successful fixes
- **Build Success Rate**: Percentage of successful builds
- **Response Time**: Time to detect and fix errors
- **Resource Usage**: Memory and CPU consumption

## 🔒 Security Considerations

- **Backup Before Fix**: Files are backed up before applying fixes
- **Safe Fixes**: Only applies safe, automated fixes
- **Manual Review**: Complex errors are flagged for manual review
- **Logging**: All actions are logged for audit purposes

## 🤝 Contributing

To extend the automation system:

1. **Add New Error Types**: Extend the error detection logic in the automation scripts
2. **Add New Fixes**: Implement new fix strategies in the error fixer
3. **Add New Monitors**: Create new monitoring processes as needed
4. **Update Configuration**: Modify PM2 configuration for new processes

## 📞 Support

For issues or questions:

1. Check the logs: `pm2 logs`
2. Review error reports in `error-reports/`
3. Run health check: `./start-error-fixing-automation.sh health`
4. Restart system: `./start-error-fixing-automation.sh restart`

## 📝 License

This automation system is part of the project and follows the same license terms.

---

**Note**: This automation system is designed to help maintain code quality but should not replace proper code review and testing practices. Always review automated fixes before deploying to production.