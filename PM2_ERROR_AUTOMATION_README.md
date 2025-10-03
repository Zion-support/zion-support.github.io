# PM2 Error Automation System

A comprehensive, intelligent automation system that automatically detects, fixes, and prevents errors in your project using PM2 process management.

## 🚀 Overview

This system provides automated error fixing and prevention capabilities that run continuously in the background, ensuring your project stays error-free and maintainable.

## ✨ Features

### 🔧 **Comprehensive Error Fixer**
- **Frequency**: Runs every 15 minutes
- **Capabilities**:
  - Fixes duplicate files with different casing
  - Resolves import/export issues
  - Removes unused variables and imports
  - Fixes TypeScript type issues
  - Resolves React-specific problems
  - Fixes Lucide React icon issues
  - Resolves Stripe configuration problems
  - Fixes Service Worker type issues
  - Resolves Sitemap Generator issues
  - Runs ESLint auto-fix
  - Performs TypeScript type checks

### 🛡️ **Intelligent Error Prevention**
- **Frequency**: Runs every 10 minutes
- **Capabilities**:
  - Scans for potential issues before they occur
  - Applies preventive fixes automatically
  - Validates file structure
  - Checks for orphaned files
  - Monitors dependencies for updates
  - Identifies security vulnerabilities
  - Runs preventive build and type checks

### 🎯 **PM2 Error Automation Orchestrator**
- **Frequency**: Runs every 10 minutes
- **Capabilities**:
  - Coordinates all automation systems
  - Monitors PM2 process status
  - Manages automation lifecycle
  - Performs maintenance tasks
  - Generates comprehensive reports
  - Provides recommendations for improvement

## 📁 File Structure

```
scripts/automation/
├── comprehensive-error-fixer.cjs          # Main error fixing engine
├── intelligent-error-prevention.cjs       # Proactive error prevention
├── pm2-error-automation-orchestrator.cjs  # System coordination
├── console-error-fixer.cjs               # Console error resolution
├── typescript-syntax-fixer.cjs           # TypeScript-specific fixes
├── ai-code-analyzer.cjs                  # AI-powered code analysis
└── ... (other automation scripts)

ecosystem.config.cjs                      # PM2 configuration
start-error-automation-system.sh          # Management script
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Automation System
```bash
./start-error-automation-system.sh start
```

### 3. Check Status
```bash
./start-error-automation-system.sh status
```

### 4. View Logs
```bash
./start-error-automation-system.sh logs
```

## 🎮 Management Commands

### Start the System
```bash
./start-error-automation-system.sh start
```

### Stop the System
```bash
./start-error-automation-system.sh stop
```

### Restart the System
```bash
./start-error-automation-system.sh restart
```

### Check Status
```bash
./start-error-automation-system.sh status
```

### View Logs
```bash
./start-error-automation-system.sh logs
```

### Run Manual Error Fix
```bash
./start-error-automation-system.sh fix
```

### Run Manual Error Prevention
```bash
./start-error-automation-system.sh prevent
```

### Install Dependencies
```bash
./start-error-automation-system.sh install
```

## 🔧 Manual Execution

### Run Comprehensive Error Fixer
```bash
node scripts/automation/comprehensive-error-fixer.cjs
```

### Run Intelligent Error Prevention
```bash
node scripts/automation/intelligent-error-prevention.cjs
```

### Run PM2 Orchestrator
```bash
node scripts/automation/pm2-error-automation-orchestrator.cjs
```

## 📊 Monitoring & Reports

The system generates detailed reports for each automation run:

- `comprehensive-error-fixer-report.json` - Details of all fixes applied
- `intelligent-error-prevention-report.json` - Prevention actions taken
- `pm2-error-automation-orchestrator-report.json` - Overall system status

### Report Structure
```json
{
  "timestamp": "2025-08-29T23:22:47.498Z",
  "duration": 58466,
  "fixesApplied": 703,
  "errorsFixed": ["List of specific fixes..."],
  "status": "success"
}
```

## ⚙️ Configuration

### PM2 Ecosystem Configuration
The system is configured in `ecosystem.config.cjs` with the following processes:

- **pm2-error-automation-orchestrator**: Runs every 10 minutes
- **comprehensive-error-fixer**: Runs every 15 minutes  
- **intelligent-error-prevention**: Runs every 10 minutes
- **console-error-fixer**: Runs every 15 minutes
- **typescript-syntax-fixer**: Runs every 15 minutes
- **ai-code-analyzer**: Runs every 4 hours

### Environment Variables
```bash
NODE_ENV=production
AUTOMATION_INTERVAL=600000  # 10 minutes in milliseconds
```

## 🔍 Error Types Fixed

### 1. **File System Issues**
- Duplicate files with different casing
- Missing directories
- Orphaned files

### 2. **Import/Export Issues**
- Missing default exports
- Incorrect import statements
- Unused imports

### 3. **TypeScript Issues**
- Type mismatches
- Unused variables
- Missing type annotations

### 4. **React Issues**
- Unnecessary React imports
- Component naming mismatches
- Hook usage problems

### 5. **Dependency Issues**
- Outdated packages
- Security vulnerabilities
- Missing dependencies

### 6. **Code Quality Issues**
- Trailing whitespace
- Inconsistent quotes
- Missing semicolons

## 📈 Performance Metrics

### Current Results
- **Initial Errors**: 10,094
- **Errors After First Run**: 9,939
- **Errors Fixed**: 155
- **Files Processed**: 560+
- **Automation Scripts**: 6+

### Optimization Features
- **Parallel Processing**: Multiple automation scripts run simultaneously
- **Smart Caching**: Avoids reprocessing unchanged files
- **Incremental Fixes**: Applies fixes progressively to avoid conflicts
- **Error Recovery**: Continues processing even if individual fixes fail

## 🛠️ Customization

### Adding New Error Fixers
1. Create a new script in `scripts/automation/`
2. Add it to the PM2 ecosystem configuration
3. Update the orchestrator to include it

### Modifying Fix Strategies
Edit the respective automation scripts to customize:
- Error detection patterns
- Fix application logic
- Reporting formats
- Execution frequency

### Custom Error Patterns
Add new error patterns to `intelligent-error-prevention.cjs`:

```javascript
this.errorPatterns.set('custom-issue', {
  pattern: /your-regex-pattern/g,
  fix: (content) => content.replace(/pattern/g, 'replacement'),
  description: 'Description of the issue'
});
```

## 🚨 Troubleshooting

### Common Issues

#### 1. **PM2 Not Found**
```bash
npm install -g pm2
```

#### 2. **Permission Denied**
```bash
chmod +x start-error-automation-system.sh
```

#### 3. **Script Execution Errors**
```bash
node --version  # Ensure Node.js 16+ is installed
npm --version   # Ensure npm is available
```

#### 4. **Memory Issues**
Adjust memory limits in `ecosystem.config.cjs`:
```javascript
max_memory_restart: '2G'  // Increase from 1G if needed
```

### Debug Mode
Run scripts with verbose logging:
```bash
DEBUG=* node scripts/automation/comprehensive-error-fixer.cjs
```

## 🔮 Future Enhancements

### Planned Features
- **Machine Learning Integration**: AI-powered error prediction
- **Real-time Monitoring**: Web dashboard for system status
- **Custom Rules Engine**: User-defined error patterns
- **Integration APIs**: Connect with external tools
- **Performance Analytics**: Detailed performance metrics

### Extensibility
The system is designed to be easily extensible:
- Plugin architecture for custom fixers
- Webhook support for external notifications
- REST API for remote management
- Configuration management system

## 📚 API Reference

### ComprehensiveErrorFixer Class
```javascript
const fixer = new ComprehensiveErrorFixer();
await fixer.run();
```

### IntelligentErrorPrevention Class
```javascript
const prevention = new IntelligentErrorPrevention();
await prevention.run();
```

### PM2ErrorAutomationOrchestrator Class
```javascript
const orchestrator = new PM2ErrorAutomationOrchestrator();
await orchestrator.run();
```

## 🤝 Contributing

### Adding New Fixes
1. Identify the error pattern
2. Create a fix function
3. Add it to the appropriate automation script
4. Test with sample files
5. Update documentation

### Reporting Issues
- Check existing reports first
- Provide specific error examples
- Include file paths and line numbers
- Describe expected vs actual behavior

## 📄 License

This automation system is part of the Zion Tech Group project and follows the same licensing terms.

## 🆘 Support

### Getting Help
1. Check the generated reports for specific error details
2. Review the troubleshooting section
3. Check PM2 logs for process issues
4. Verify script permissions and dependencies

### Emergency Stop
```bash
pm2 stop all
pm2 delete all
```

---

**Last Updated**: August 29, 2025  
**Version**: 1.0.0  
**Status**: Active Development