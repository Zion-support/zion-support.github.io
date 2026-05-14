#!/bin/bash
# Zion Org Memory Telegram Bot — Start in detached tmux session
# Usage: ./start_orgmem_bot.sh [start|stop|logs]

SESSION="orgmem-bot"
SCRIPT="/root/.openclaw/workspace/zion.app/commands/org_memory_telegram_bot.py"
LOG="/root/.openclaw/workspace/zion.app/logs/orgmem-bot.log"
mkdir -p "$(dirname "$LOG")"

case "${1:-start}" in
  start)
    if tmux has-session -t "$SESSION" 2>/dev/null; then
      echo "✅ Session $SESSION already running. Attach: tmux attach -t $SESSION"
      exit 0
    fi
    echo "🚀 Starting Org Memory Telegram bot in tmux session '$SESSION'..."
    tmux new-session -d -s "$SESSION" "cd /root/.openclaw/workspace/zion.app && python3 $SCRIPT 2>&1 | tee -a $LOG"
    sleep 1
    if tmux has-session -t "$SESSION" 2>/dev/null; then
      echo "✅ Bot started. Logs: tail -f $LOG"
      echo "   Attach: tmux attach -t $SESSION"
    else
      echo "❌ Failed to start bot. Check log: $LOG"
    fi
    ;;
  stop)
    if tmux has-session -t "$SESSION" 2>/dev/null; then
      tmux kill-session -t "$SESSION"
      echo "🛑 Bot stopped."
    else
      echo "ℹ️ No session named $SESSION found."
    fi
    ;;
  logs|log)
    if [ -f "$LOG" ]; then
      tail -f "$LOG"
    else
      echo "No log file found at $LOG"
    fi
    ;;
  attach)
    tmux attach-session -t "$SESSION" 2>/dev/null || echo "Session not found."
    ;;
  *)
    echo "Usage: $0 {start|stop|logs|attach}"
    exit 1
    ;;
esac
