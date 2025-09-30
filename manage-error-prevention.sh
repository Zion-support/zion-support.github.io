#!/bin/bash

# Error Prevention Automation Management Script

case "$1" in
    start)
        echo "🚀 Starting Error Prevention Automation..."
        pm2 start ecosystem-error-prevention-automation.cjs
        ;;
    stop)
        echo "⏹️  Stopping Error Prevention Automation..."
        pm2 stop all
        ;;
    restart)
        echo "🔄 Restarting Error Prevention Automation..."
        pm2 restart all
        ;;
    status)
        echo "📊 Error Prevention Automation Status:"
        pm2 status
        ;;
    logs)
        echo "📝 Error Prevention Automation Logs:"
        pm2 logs --lines 50
        ;;
    monit)
        echo "📊 Error Prevention Automation Monitor:"
        pm2 monit
        ;;
    fix-now)
        echo "🎯 Running error prevention scan now..."
        node scripts/automation/error-prevention-orchestrator.cjs scan
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs|monit|fix-now}"
        echo ""
        echo "Commands:"
        echo "  start     - Start the automation system"
        echo "  stop      - Stop the automation system"
        echo "  restart   - Restart the automation system"
        echo "  status    - Show status of all processes"
        echo "  logs      - Show recent logs"
        echo "  monit     - Open PM2 monitoring interface"
        echo "  fix-now   - Run error prevention scan immediately"
        exit 1
        ;;
esac
