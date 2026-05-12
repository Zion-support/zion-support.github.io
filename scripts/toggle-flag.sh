#!/bin/bash
set -e

FLAG_NAME=$1
NEW_VALUE=$2

CONFIG_PATH="/Users/klebergarciaalcatrao/config/feature-flags.json"
LOG_PATH="/Users/klebergarciaalcatrao/logs/feature-flags.log"

if [ -z "$FLAG_NAME" ] || [ -z "$NEW_VALUE" ]; then
  echo "Usage: $0 <flag_name> <new_value>"
  echo "Example: $0 enable_new_feature true"
  exit 1
fi

# Check if jq is installed
if ! command -v jq &> /dev/null; then
  echo "Error: jq is required but not installed. Install with: brew install jq"
  exit 1
fi

# Read current config
CURRENT_CONFIG=$(cat "$CONFIG_PATH")

# Update the specific flag
NEW_CONFIG=$(echo "$CURRENT_CONFIG" | jq --arg name "$FLAG_NAME" --argjson value "$NEW_VALUE" '.[$name] = $value')

# Validate new JSON
if ! echo "$NEW_CONFIG" | jq empty 2>/dev/null; then
  echo "Error: Invalid JSON generated"
  exit 1
fi

# Write back to file
echo "$NEW_CONFIG" > "$CONFIG_PATH"

# Log the change
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
echo "[$TIMESTAMP] Toggled '$FLAG_NAME' to $NEW_VALUE" >> "$LOG_PATH"

echo "Successfully updated $FLAG_NAME to $NEW_VALUE"
echo "Logged to $LOG_PATH"