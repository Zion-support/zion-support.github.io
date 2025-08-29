#!/bin/bash

# PM2 Automation System Setup Script
# This script sets up a comprehensive PM2 automation ecosystem for the Zion Tech Group website

set -e

echo "🚀 Setting up PM2 Automation System for Zion Tech Group..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root"
   exit 1
fi

# Check if we're in the right directory
if [[ ! -f "package.json" ]]; then
    print_error "Please run this script from the project root directory"
    exit 1
fi

print_status "Starting PM2 automation system setup..."

# Step 1: Install PM2 globally if not already installed
print_status "Step 1: Installing PM2 globally..."
if ! command -v pm2 &> /dev/null; then
    print_status "PM2 not found, installing globally..."
    npm install -g pm2
    print_success "PM2 installed successfully"
else
    print_success "PM2 already installed"
fi

# Step 2: Install PM2 log rotation
print_status "Step 2: Installing PM2 log rotation..."
pm2 install pm2-logrotate
print_success "PM2 log rotation installed"

# Step 3: Configure PM2 log rotation
print_status "Step 3: Configuring PM2 log rotation..."
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss
print_success "PM2 log rotation configured"

# Step 4: Create necessary directories
print_status "Step 4: Creating necessary directories..."
mkdir -p automation/logs
mkdir -p automation/backups
mkdir -p automation/reports
print_success "Directories created"

# Step 5: Make automation scripts executable
print_status "Step 5: Making automation scripts executable..."
chmod +x automation/*.cjs
chmod +x automation/*.js
print_success "Scripts made executable"

# Step 6: Install additional dependencies
print_status "Step 6: Installing additional dependencies..."
npm install --save-dev pm2-logrotate
print_success "Dependencies installed"

# Step 7: Create PM2 startup script
print_status "Step 7: Creating PM2 startup script..."
cat > start-pm2-automation.sh << 'EOF'
#!/bin/bash

# PM2 Automation Startup Script
echo "🚀 Starting PM2 Automation System..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Please run setup-pm2-automation.sh first."
    exit 1
fi

# Start the PM2 ecosystem
echo "📡 Starting PM2 ecosystem..."
pm2 start ecosystem.config.js --env development

# Start the automation launcher
echo "🤖 Starting automation launcher..."
node automation/pm2-automation-launcher.cjs start dev

echo "✅ PM2 Automation System started successfully!"
echo ""
echo "📊 Available commands:"
echo "  pm2 status                    - View PM2 process status"
echo "  pm2 logs                      - View PM2 logs"
echo "  pm2 monit                     - Monitor PM2 processes"
echo "  node automation/pm2-automation-launcher.cjs help  - Show automation commands"
echo ""
echo "🛑 To stop: pm2 stop all"
echo "🔄 To restart: pm2 restart all"
echo "🧹 To clean up: pm2 delete all"
EOF

chmod +x start-pm2-automation.sh
print_success "Startup script created"

# Step 8: Create PM2 stop script
print_status "Step 8: Creating PM2 stop script..."
cat > stop-pm2-automation.sh << 'EOF'
#!/bin/bash

# PM2 Automation Stop Script
echo "🛑 Stopping PM2 Automation System..."

# Stop all PM2 processes
pm2 stop all

# Delete all PM2 processes
pm2 delete all

# Clear PM2 logs
pm2 flush

echo "✅ PM2 Automation System stopped successfully!"
EOF

chmod +x stop-pm2-automation.sh
print_success "Stop script created"

# Step 9: Create PM2 restart script
print_status "Step 9: Creating PM2 restart script..."
cat > restart-pm2-automation.sh << 'EOF'
#!/bin/bash

# PM2 Automation Restart Script
echo "🔄 Restarting PM2 Automation System..."

# Stop all processes
pm2 stop all

# Delete all processes
pm2 delete all

# Clear logs
pm2 flush

# Start fresh
echo "🚀 Starting fresh..."
pm2 start ecosystem.config.js --env development

# Start automation launcher
node automation/pm2-automation-launcher.cjs start dev

echo "✅ PM2 Automation System restarted successfully!"
EOF

chmod +x restart-pm2-automation.sh
print_success "Restart script created"

# Step 10: Create quick commands script
print_status "Step 10: Creating quick commands script..."
cat > pm2-quick-commands.sh << 'EOF'
#!/bin/bash

# PM2 Quick Commands Script
case "$1" in
    "start")
        echo "🚀 Starting PM2 automation..."
        ./start-pm2-automation.sh
        ;;
    "stop")
        echo "🛑 Stopping PM2 automation..."
        ./stop-pm2-automation.sh
        ;;
    "restart")
        echo "🔄 Restarting PM2 automation..."
        ./restart-pm2-automation.sh
        ;;
    "status")
        echo "📊 PM2 Status:"
        pm2 status
        ;;
    "logs")
        echo "📝 PM2 Logs:"
        pm2 logs
        ;;
    "monit")
        echo "👀 PM2 Monitor:"
        pm2 monit
        ;;
    "workflow")
        if [ -z "$2" ]; then
            echo "Usage: $0 workflow <type>"
            echo "Types: development, production, maintenance, testing"
            exit 1
        fi
        echo "⚡ Starting workflow: $2"
        node automation/pm2-automation-launcher.cjs workflow $2
        ;;
    "report")
        echo "📊 Generating report..."
        node automation/pm2-automation-launcher.cjs report
        ;;
    "help")
        echo "🚀 PM2 Quick Commands:"
        echo "  $0 start                    - Start PM2 automation"
        echo "  $0 stop                     - Stop PM2 automation"
        echo "  $0 restart                  - Restart PM2 automation"
        echo "  $0 status                   - Show PM2 status"
        echo "  $0 logs                     - Show PM2 logs"
        echo "  $0 monit                    - Show PM2 monitor"
        echo "  $0 workflow <type>          - Start workflow"
        echo "  $0 report                   - Generate report"
        echo "  $0 help                     - Show this help"
        echo ""
        echo "Workflow Types:"
        echo "  development                 - Code quality, linting, testing"
        echo "  production                  - Pre-deployment, security, deployment"
        echo "  maintenance                 - Health checks, cleanup, optimization"
        echo "  testing                     - Test generation, execution, coverage"
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs|monit|workflow|report|help}"
        exit 1
        ;;
esac
EOF

chmod +x pm2-quick-commands.sh
print_success "Quick commands script created"

# Step 11: Create environment configuration
print_status "Step 11: Creating environment configuration..."
if [[ ! -f ".env" ]]; then
    cat > .env << 'EOF'
# PM2 Automation Environment Configuration
NODE_ENV=development
PM2_AUTO_RESTART=true
PM2_MAX_MEMORY_RESTART=1G
PM2_LOG_LEVEL=info
PM2_HEALTH_CHECK_INTERVAL=30000
PM2_AUTO_OPTIMIZATION_INTERVAL=60000
PM2_MAX_CONCURRENT_WORKFLOWS=3
PM2_AUTO_RECOVERY_ENABLED=true
EOF
    print_success "Environment configuration created"
else
    print_warning "Environment file already exists, skipping..."
fi

# Step 12: Create PM2 configuration backup
print_status "Step 12: Creating PM2 configuration backup..."
if [[ -f "ecosystem.config.js" ]]; then
    cp ecosystem.config.js ecosystem.config.js.backup
    print_success "PM2 configuration backed up"
fi

# Step 13: Test PM2 installation
print_status "Step 13: Testing PM2 installation..."
pm2 --version > /dev/null 2>&1
if [ $? -eq 0 ]; then
    print_success "PM2 installation verified"
else
    print_error "PM2 installation verification failed"
    exit 1
fi

# Step 14: Create documentation
print_status "Step 14: Creating documentation..."
cat > PM2_AUTOMATION_README.md << 'EOF'
# PM2 Automation System - Zion Tech Group

## Overview
This is a comprehensive PM2 automation system that manages the entire development workflow for the Zion Tech Group website.

## Quick Start

### 1. Start the System
```bash
./start-pm2-automation.sh
```

### 2. Use Quick Commands
```bash
./pm2-quick-commands.sh start      # Start automation
./pm2-quick-commands.sh workflow development  # Start development workflow
./pm2-quick-commands.sh status     # Check status
./pm2-quick-commands.sh stop       # Stop automation
```

## Architecture

### Core Components
- **PM2 Ecosystem**: Manages all application processes
- **Intelligent Manager**: Advanced PM2 process management
- **Enhanced Orchestrator**: Workflow orchestration and automation
- **Automation Launcher**: Unified interface for all systems
- **Health Monitor**: Continuous health checking and auto-recovery

### Automation Systems
- **Code Quality Monitor**: Continuous code quality analysis
- **Lint Monitor**: Automated linting and error fixing
- **Performance Optimizer**: Performance monitoring and optimization
- **Security Scanner**: Security vulnerability scanning
- **SEO Optimizer**: SEO analysis and optimization
- **Test Generator**: Automated test generation
- **Content Generator**: Content generation and management

## Workflows

### Development Workflow
1. Code quality scan
2. Lint fixing
3. Type checking
4. Test generation
5. Performance optimization
6. Security scan

### Production Workflow
1. Pre-deployment check
2. Security audit
3. Performance benchmark
4. Deployment
5. Post-deployment verification

### Maintenance Workflow
1. Health check
2. Cleanup
3. Optimization
4. Report generation

## Commands

### PM2 Management
```bash
pm2 start ecosystem.config.js --env development
pm2 status
pm2 logs
pm2 monit
pm2 stop all
pm2 delete all
```

### Automation Management
```bash
node automation/pm2-automation-launcher.cjs start dev
node automation/pm2-automation-launcher.cjs workflow development
node automation/pm2-automation-launcher.cjs status
node automation/pm2-automation-launcher.cjs report
```

### Workflow Execution
```bash
node automation/pm2-enhanced-orchestrator.cjs workflow development
node automation/pm2-enhanced-orchestrator.cjs workflow production
node automation/pm2-enhanced-orchestrator.cjs monitor
```

## Monitoring

### Health Checks
- Process status monitoring
- Resource usage tracking
- Auto-restart on failures
- Performance bottleneck detection

### Auto-Recovery
- Critical process monitoring
- Automatic restart on failures
- Performance optimization
- Resource management

### Reporting
- System health reports
- Workflow execution reports
- Performance analytics
- Optimization recommendations

## Configuration

### Environment Variables
- `NODE_ENV`: Environment (development/production)
- `PM2_AUTO_RESTART`: Enable auto-restart
- `PM2_MAX_MEMORY_RESTART`: Memory limit for restart
- `PM2_LOG_LEVEL`: Logging level
- `PM2_HEALTH_CHECK_INTERVAL`: Health check frequency
- `PM2_AUTO_OPTIMIZATION_INTERVAL`: Optimization frequency
- `PM2_MAX_CONCURRENT_WORKFLOWS`: Maximum concurrent workflows
- `PM2_AUTO_RECOVERY_ENABLED`: Enable auto-recovery

### PM2 Settings
- Log rotation: 10MB max size, 7 days retention
- Auto-restart on memory/CPU thresholds
- Process monitoring and metrics
- Cluster mode support

## Troubleshooting

### Common Issues
1. **PM2 not found**: Run `npm install -g pm2`
2. **Permission denied**: Check file permissions
3. **Port conflicts**: Check port usage in ecosystem.config.js
4. **Memory issues**: Adjust max_memory_restart in ecosystem.config.js

### Logs
- PM2 logs: `pm2 logs`
- Application logs: `automation/logs/`
- System logs: `automation/logs/pm2-*.log`

### Recovery
- Auto-restart: PM2 automatically restarts failed processes
- Manual restart: `pm2 restart <process-name>`
- Full restart: `./restart-pm2-automation.sh`

## Performance

### Optimization Features
- Intelligent resource management
- Auto-scaling based on load
- Performance bottleneck detection
- Memory and CPU optimization
- Workflow prioritization

### Monitoring
- Real-time performance metrics
- Resource usage tracking
- Trend analysis
- Alert system

## Security

### Features
- Process isolation
- Resource limits
- Security scanning
- Vulnerability detection
- Audit logging

## Support

### Getting Help
1. Check logs: `pm2 logs`
2. View status: `pm2 status`
3. Monitor processes: `pm2 monit`
4. Generate report: `node automation/pm2-automation-launcher.cjs report`

### Maintenance
- Regular health checks
- Performance monitoring
- Log rotation
- System optimization
EOF

print_success "Documentation created"

# Step 15: Final verification
print_status "Step 15: Final verification..."
echo ""
print_success "🎉 PM2 Automation System setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Start the system: ./start-pm2-automation.sh"
echo "2. Use quick commands: ./pm2-quick-commands.sh help"
echo "3. Start a workflow: ./pm2-quick-commands.sh workflow development"
echo "4. Check status: ./pm2-quick-commands.sh status"
echo ""
echo "📚 Documentation: PM2_AUTOMATION_README.md"
echo "🔧 Configuration: ecosystem.config.js"
echo "📁 Logs: automation/logs/"
echo ""
echo "🚀 Happy automating!"

# Optional: Start the system automatically
read -p "Would you like to start the PM2 automation system now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_status "Starting PM2 automation system..."
    ./start-pm2-automation.sh
fi