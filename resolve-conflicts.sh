#!/bin/bash

# Function to clean merge conflicts from a file
clean_conflicts() {
    local file="$1"
    # Skip if file doesn't exist or is a directory
    [[ ! -f "$file" ]] && return
    
    # Create temp file
    local tmp=$(mktemp)
    
    # Process file: remove conflict markers and keep the code
    awk '
        /^<<<<<<</ { in_conflict=1; next }
        /^=======/ { in_ours=0; next }
        /^>>>>>>>/ { in_conflict=0; in_ours=0; next }
        !in_conflict || in_ours { print }
        in_conflict && !in_ours { in_ours=1 }
    ' "$file" > "$tmp"
    
    # Only update if different
    if ! cmp -s "$file" "$tmp"; then
        mv "$tmp" "$file"
        echo "Fixed: $file"
    else
        rm "$tmp"
    fi
}

# Main source files to fix (non-backup files)
for file in \
    "api/subscribe.js" \
    "api/wallet.js" \
    "app/App.tsx" \
    "components/LoadingComponents.tsx" \
    "src/hooks/usePerformance.ts" \
    "lib/error-handler.ts" \
    "lib/security.js" \
    "lib/performance.ts" \
    "src/utils/performanceOptimizer.ts" \
    "lib/integrations/connectors.ts" \
    "lib/integrations/fileStore.ts" \
    "lib/integrations/registry.ts" \
    "lib/integrations/types.ts" \
    "src.disabled/utils/analytics.ts" \
    "corrupted-src-backup/utils/imageOptimization.ts"
do
    [[ -f "$file" ]] && clean_conflicts "$file"
done

echo "Conflict resolution complete!"
