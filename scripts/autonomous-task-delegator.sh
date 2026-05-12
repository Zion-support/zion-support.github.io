#!/usr/bin/env bash
# autonomous-task-delegator.sh - Creates and delegates new tasks to Openclaw
# This script is called by the Hermes heartbeat every 5 minutes

INBOX="/Users/klebergarciaalcatrao/.hermes/inbox.md"
OUTBOX="/Users/klebergarciaalcatrao/.hermes/outbox.md"
TASKS="/Users/klebergarciaalcatrao/.hermes/active-tasks.md"
LOG="/Users/klebergarciaalcatrao/.hermes/memory/delegation.log"

# Function to log actions
log_action() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG"
}

# Check if there are new tasks in outbox that need delegation
if [[ -s "$OUTBOX" ]]; then
  # Read the first task from outbox
  NEW_TASK=$(head -n 1 "$OUTBOX")
  
  # Add task to active-tasks.md
  echo "| $(date +%s) | $NEW_TASK | Openclaw | In Progress | $(date) |" >> "$TASKS"
  
  # Log the delegation
  log_action "Delegated task: $NEW_TASK"
  
  # Clear the outbox (or mark as processed)
  sed -i '' '1d' "$OUTBOX"
  
  log_action "Task delegated successfully"
fi

# Add a new autonomous task suggestion
echo "New task: Review and optimize database query performance using free tools" >> "$OUTBOX"
log_action "Added new autonomous task suggestion"

echo "Delegation cycle complete"