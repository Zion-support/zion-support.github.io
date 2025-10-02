#!/bin/bash

# Bulk merge script to handle large numbers of branches
echo "Starting bulk merge process..."

# Get all remaining branches
ALL_BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | wc -l)
echo "Total branches to process: $ALL_BRANCHES"

# Process in batches of 50
BATCH_SIZE=50
processed_count=0
successful_merges=0
conflict_count=0
batch_number=1

while [ $processed_count -lt $ALL_BRANCHES ]; do
    echo ""
    echo "=== Processing Batch $batch_number ==="
    
    # Get next batch of branches
    BATCH_BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | head -n $((processed_count + BATCH_SIZE)) | tail -n $BATCH_SIZE)
    
    if [ -z "$BATCH_BRANCHES" ]; then
        echo "No more branches to process"
        break
    fi
    
    batch_processed=0
    batch_successful=0
    batch_conflicts=0
    
    for branch in $BATCH_BRANCHES; do
        branch_name=$(echo $branch | sed 's/origin\///')
        echo "Processing: $branch_name ($((processed_count + batch_processed + 1))/$ALL_BRANCHES)"
        
        # Checkout the branch
        if git checkout -b temp_$branch_name $branch 2>/dev/null; then
            # Try to merge into main
            git checkout main
            
            # Pull latest changes first
            git pull origin main --rebase 2>/dev/null
            
            if git merge temp_$branch_name --no-ff -m "Merge $branch_name" 2>/dev/null; then
                echo "  ✅ Merged successfully"
                
                # Push with force if needed
                if git push origin main 2>/dev/null; then
                    echo "  ✅ Pushed successfully"
                    ((batch_successful++))
                    ((successful_merges++))
                else
                    echo "  ⚠️  Push failed, trying with force"
                    git push origin main --force-with-lease 2>/dev/null
                    if [ $? -eq 0 ]; then
                        echo "  ✅ Force pushed successfully"
                        ((batch_successful++))
                        ((successful_merges++))
                    else
                        echo "  ❌ Push failed completely"
                    fi
                fi
                
                # Clean up
                git branch -D temp_$branch_name
            else
                echo "  ⚠️  Merge conflict - skipping"
                ((batch_conflicts++))
                ((conflict_count++))
                git merge --abort
                git branch -D temp_$branch_name
            fi
        else
            echo "  ❌ Could not checkout branch"
        fi
        
        ((batch_processed++))
        ((processed_count++))
        
        # Add small delay every 10 branches
        if [ $((batch_processed % 10)) -eq 0 ]; then
            sleep 2
        fi
    done
    
    echo "Batch $batch_number completed:"
    echo "  Processed: $batch_processed"
    echo "  Successful: $batch_successful"
    echo "  Conflicts: $batch_conflicts"
    echo ""
    
    ((batch_number++))
    
    # Break if we've processed all branches
    if [ $processed_count -ge $ALL_BRANCHES ]; then
        break
    fi
done

echo "=== BULK MERGE PROCESS COMPLETED ==="
echo "Final Summary:"
echo "  Total processed: $processed_count"
echo "  Successful merges: $successful_merges"
echo "  Conflicts encountered: $conflict_count"
echo "  Success rate: $(( (successful_merges * 100) / processed_count ))%"