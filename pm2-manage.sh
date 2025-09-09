#!/bin/bash

case "$1" in
  "start")
    echo "🚀 Starting PM2 automation ecosystem..."
    pm2 start ecosystem.config.js
    pm2 save
    ;;
  "stop")
    echo "⏹️  Stopping all PM2 processes..."
    pm2 stop all
    ;;
  "restart")
    echo "🔄 Restarting all PM2 processes..."
    pm2 restart all
    ;;
  "status")
    echo "📊 PM2 Status:"
    pm2 status
    ;;
  "logs")
    echo "📋 PM2 Logs:"
    pm2 logs
    ;;
  "monitor")
    echo "📈 PM2 Monitor:"
    pm2 monit
    ;;
  "delete")
    echo "🗑️  Deleting all PM2 processes..."
    pm2 delete all
    ;;
  "reload")
    echo "🔄 Reloading PM2 ecosystem..."
    pm2 reload ecosystem.config.cjs
    ;;
  *)
    echo "Usage: $0 {start|stop|restart|status|logs|monitor|delete|reload}"
    echo ""
    echo "Commands:"
    echo "  start   - Start all automation processes"
    echo "  stop    - Stop all processes"
    echo "  restart - Restart all processes"
    echo "  status  - Show process status"
    echo "  logs    - Show process logs"
    echo "  monitor - Open PM2 monitor"
    echo "  delete  - Delete all processes"
    echo "  reload  - Reload ecosystem configuration"
    exit 1
    ;;
esac