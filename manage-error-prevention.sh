#!/bin/bash

# Error Prevention Automation Management Script

case "$1" in
    start)
        echo "🚀 Starting Error Prevention Automation..."
        pm2 start ecosystem-error-prevention.config.cjs
        ;;
    stop)
        echo "⏹️  Stopping Error Prevention Automation..."
        pm2 stop ecosystem-error-prevention.config.cjs
        ;;
    restart)
        echo "🔄 Restarting Error Prevention Automation..."
        pm2 restart ecosystem-error-prevention.config.cjs
        ;;
    reload)
        echo "🔄 Reloading Error Prevention Automation..."
        pm2 reload ecosystem-error-prevention.config.cjs
        ;;
    status)
        echo "📊 Error Prevention Automation Status:"
        pm2 status
        ;;
    logs)
        echo "📝 Error Prevention Automation Logs:"
        pm2 logs --lines 50
        ;;
    monitor)
        echo "📊 Error Prevention Automation Monitor:"
        pm2 monit
        ;;
    run-once)
        echo "🎯 Running Error Prevention Automation once..."
        node scripts/automation/automation-orchestrator.cjs run
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|reload|status|logs|monitor|run-once}"
        echo ""
        echo "Commands:"
        echo "  start     - Start the automation system"
        echo "  stop      - Stop the automation system"
        echo "  restart   - Restart the automation system"
        echo "  reload    - Reload the automation system"
        echo "  status    - Show status of all processes"
        echo "  logs      - Show recent logs"
        echo "  monitor   - Open PM2 monitoring interface"
        echo "  run-once  - Run automation once manually"
        exit 1
        ;;
esac
