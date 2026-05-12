#!/usr/bin/env bash
# Re-run any failed workflow that hasn't been retried 3 times
set -e
REPO="Zion-support/zion.app"
TOKEN=$(gh secret list -R $REPO | awk '/GITHUB_TOKEN/{print $3}')
# Get latest 20 workflow runs
RUNS=$(curl -s -H "Authorization: token $TOKEN" "https://api.github.com/repos/$REPO/actions/runs?per_page=20" | jq -c '.workflow_runs[]')
while read -r RUN; do
  ID=$(echo $RUN | jq -r .id)
  STATUS=$(echo $RUN | jq -r .conclusion)
  ATTEMPT=$(echo $RUN | jq -r .run_attempt)
  if [[ "$STATUS" == "failure" && $ATTEMPT -lt 3 ]]; then
    curl -s -X POST -H "Authorization: token $TOKEN" "https://api.github.com/repos/$REPO/actions/runs/$ID/rerun"
    echo "Rerun triggered for workflow run $ID (attempt $((ATTEMPT+1)))"
  fi
done <<< "$RUNS"
