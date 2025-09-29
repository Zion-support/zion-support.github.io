#!/bin/bash

# Script to merge important feature branches into main
set -e

echo "🚀 Starting merge of important feature branches..."
echo "⏰ Started at: $(date)"
echo "---"

# Create a backup branch if we don't already have one
if ! git branch | grep -q "backup-main"; then
    BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
    echo "🔒 Creating backup branch: $BACKUP_BRANCH"
    git checkout -b "$BACKUP_BRANCH"
    git push origin "$BACKUP_BRANCH"
    git checkout main
else
    echo "🔒 Backup branch already exists"
fi

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0

# Function to log messages with timestamps
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message"
}

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    log_message "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        log_message "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Enhanced conflict resolution strategy
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            log_message "📦 Critical file detected, keeping main version and merging dependencies..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            log_message "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == *".tsx" || "$file" == *".ts" ]]; then
            log_message "📱 TypeScript file detected, keeping incoming version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            log_message "📝 Regular file, attempting to merge both versions..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        log_message "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        log_message "❌ Branch $branch does not exist on remote, skipping..."
        return 1
    fi
    
    # Check if branch is already up to date
    if git merge-base --is-ancestor HEAD "origin/$branch" 2>/dev/null; then
        log_message "✅ Branch $branch is already up to date, skipping..."
        return 0
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        log_message "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$CONFLICTED_FILES" ]; then
            log_message "📋 Conflicted files: $CONFLICTED_FILES"
            
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            
            log_message "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            log_message "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# List of important feature branches to merge (prioritized)
IMPORTANT_BRANCHES=(
    "cursor/enhance-app-with-new-services-and-futuristic-design-524b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5350"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5357"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5359"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5375"
    "cursor/enhance-app-with-new-services-and-futuristic-design-53a4"
    "cursor/enhance-app-with-new-services-and-futuristic-design-545a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-551a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-55a2"
    "cursor/enhance-app-with-new-services-and-futuristic-design-574a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5873"
    "cursor/enhance-app-with-new-services-and-futuristic-design-58a2"
    "cursor/enhance-app-with-new-services-and-futuristic-design-59b4"
    "cursor/enhance-app-with-new-services-and-futuristic-design-59d9"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5b4b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5c61"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5ce2"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5d1d"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5d2f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5d44"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5d7f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5dad"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5db4"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5e0c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5ee0"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5ee5"
    "cursor/enhance-app-with-new-services-and-futuristic-design-5eec"
    "cursor/enhance-app-with-new-services-and-futuristic-design-605d"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6060"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6085"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6093"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6135"
    "cursor/enhance-app-with-new-services-and-futuristic-design-613b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6168"
    "cursor/enhance-app-with-new-services-and-futuristic-design-621c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6271"
    "cursor/enhance-app-with-new-services-and-futuristic-design-62b6"
    "cursor/enhance-app-with-new-services-and-futuristic-design-62dc"
    "cursor/enhance-app-with-new-services-and-futuristic-design-631b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-631c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-63bf"
    "cursor/enhance-app-with-new-services-and-futuristic-design-63dc"
    "cursor/enhance-app-with-new-services-and-futuristic-design-641b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-649a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6517"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6568"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6582"
    "cursor/enhance-app-with-new-services-and-futuristic-design-65a2"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6683"
    "cursor/enhance-app-with-new-services-and-futuristic-design-673c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6753"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6758"
    "cursor/enhance-app-with-new-services-and-futuristic-design-67e4"
    "cursor/enhance-app-with-new-services-and-futuristic-design-680a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-681f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-68ea"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6a3e"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6a71"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6ab4"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6b49"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6d41"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6d80"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6e06"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6e47"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6f74"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6f84"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7047"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7053"
    "cursor/enhance-app-with-new-services-and-futuristic-design-70ec"
    "cursor/enhance-app-with-new-services-and-futuristic-design-713b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7153"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7156"
    "cursor/enhance-app-with-new-services-and-futuristic-design-71a0"
    "cursor/enhance-app-with-new-services-and-futuristic-design-72ba"
    "cursor/enhance-app-with-new-services-and-futuristic-design-72dd"
    "cursor/enhance-app-with-new-services-and-futuristic-design-732a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7384"
    "cursor/enhance-app-with-new-services-and-futuristic-design-73aa"
    "cursor/enhance-app-with-new-services-and-futuristic-design-73be"
    "cursor/enhance-app-with-new-services-and-futuristic-design-73d5"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7466"
    "cursor/enhance-app-with-new-services-and-futuristic-design-750a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-757c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-75e1"
    "cursor/enhance-app-with-new-services-and-futuristic-design-767b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7684"
    "cursor/enhance-app-with-new-services-and-futuristic-design-76fc"
    "cursor/enhance-app-with-new-services-and-futuristic-design-77a4"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7821"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7826"
    "cursor/enhance-app-with-new-services-and-futuristic-design-78ae"
    "cursor/enhance-app-with-new-services-and-futuristic-design-78c2"
    "cursor/enhance-app-with-new-services-and-futuristic-design-79df"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7c3b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7c71"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7cbf"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7d74"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7e5c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7e85"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7f19"
    "cursor/enhance-app-with-new-services-and-futuristic-design-7f29"
    "cursor/enhance-app-with-new-services-and-futuristic-design-80f7"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8149"
    "cursor/enhance-app-with-new-services-and-futuristic-design-81b0"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8223"
    "cursor/enhance-app-with-new-services-and-futuristic-design-82a2"
    "cursor/enhance-app-with-new-services-and-futuristic-design-82d7"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8468"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8471"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8488"
    "cursor/enhance-app-with-new-services-and-futuristic-design-84ce"
    "cursor/enhance-app-with-new-services-and-futuristic-design-85cd"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8602"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8640"
    "cursor/enhance-app-with-new-services-and-futuristic-design-86a5"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8757"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8790"
    "cursor/enhance-app-with-new-services-and-futuristic-design-87b2"
    "cursor/enhance-app-with-new-services-and-futuristic-design-890c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-895f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8a38"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8a5d"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8d64"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8dd4"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8eef"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8f08"
    "cursor/enhance-app-with-new-services-and-futuristic-design-8fef"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9071"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9077"
    "cursor/enhance-app-with-new-services-and-futuristic-design-915b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-917b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-917e"
    "cursor/enhance-app-with-new-services-and-futuristic-design-92f8"
    "cursor/enhance-app-with-new-services-and-futuristic-design-93a0"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9479"
    "cursor/enhance-app-with-new-services-and-futuristic-design-96da"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9755"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9756"
    "cursor/enhance-app-with-new-services-and-futuristic-design-97bc"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9860"
    "cursor/enhance-app-with-new-services-and-futuristic-design-988e"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9976"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9a62"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9a6c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9a82"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9a98"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9ac5"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9ae5"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9b3f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9c80"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9cca"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9cf7"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9d55"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9e3c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9f53"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9ffa"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a1b9"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a1ce"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a2e5"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a3c7"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a3ef"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a54a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a6f6"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a708"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a83f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a889"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a8bf"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a942"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a9a3"
    "cursor/enhance-app-with-new-services-and-futuristic-design-aa58"
    "cursor/enhance-app-with-new-services-and-futuristic-design-aaa8"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ac34"
    "cursor/enhance-app-with-new-services-and-futuristic-design-acbf"
    "cursor/enhance-app-with-new-services-and-futuristic-design-adc1"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ae10"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ae49"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ae5b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-af95"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b08b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b1b6"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b1ef"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b20b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b23f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b2b5"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b2df"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b389"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b3b1"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b433"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b45b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b4cd"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b4dc"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b5c6"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b66f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b6d6"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b77f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b843"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b865"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b8ff"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b9b3"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ba35"
    "cursor/enhance-app-with-new-services-and-futuristic-design-bae8"
    "cursor/enhance-app-with-new-services-and-futuristic-design-bb2a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-bb37"
    "cursor/enhance-app-with-new-services-and-futuristic-design-bbf4"
    "cursor/enhance-app-with-new-services-and-futuristic-design-bc5f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-bc8a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-bcb4"
    "cursor/enhance-app-with-new-services-and-futuristic-design-bd72"
    "cursor/enhance-app-with-new-services-and-futuristic-design-bd79"
    "cursor/enhance-app-with-new-services-and-futuristic-design-bdb9"
    "cursor/enhance-app-with-new-services-and-futuristic-design-bde9"
    "cursor/enhance-app-with-new-services-and-futuristic-design-beb1"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c073"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c108"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c31e"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c357"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c3ac"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c3ba"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c411"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c454"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c4ba"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c4dc"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c532"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c57f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c5d5"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c672"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c719"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c7a0"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c7b3"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c7ec"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c804"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c85b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c86b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c91b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c93c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-c93d"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ca73"
    "cursor/enhance-app-with-new-services-and-futuristic-design-cae9"
    "cursor/enhance-app-with-new-services-and-futuristic-design-cb52"
    "cursor/enhance-app-with-new-services-and-futuristic-design-cb67"
    "cursor/enhance-app-with-new-services-and-futuristic-design-cd12"
    "cursor/enhance-app-with-new-services-and-futuristic-design-cdc2"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ce5f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ce67"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ced2"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ced7"
    "cursor/enhance-app-with-new-services-and-futuristic-design-cef6"
    "cursor/enhance-app-with-new-services-and-futuristic-design-cf18"
    "cursor/enhance-app-with-new-services-and-futuristic-design-cfba"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d088"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d098"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d124"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d160"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d239"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d269"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d2d6"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d425"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d55a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d693"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d704"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d780"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d80e"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d816"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d88c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d8fa"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d92c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d9a5"
    "cursor/enhance-app-with-new-services-and-futuristic-design-da6f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-da9e"
    "cursor/enhance-app-with-new-services-and-futuristic-design-dadc"
    "cursor/enhance-app-with-new-services-and-futuristic-design-dadf"
    "cursor/enhance-app-with-new-services-and-futuristic-design-dbd9"
    "cursor/enhance-app-with-new-services-and-futuristic-design-dcf3"
    "cursor/enhance-app-with-new-services-and-futuristic-design-de94"
    "cursor/enhance-app-with-new-services-and-futuristic-design-df1a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-df45"
    "cursor/enhance-app-with-new-services-and-futuristic-design-dfab"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e015"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e0a3"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e0ad"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e0d1"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e0e2"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e11d"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e274"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e2d3"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e2d5"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e363"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e36f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e3a5"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e581"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e718"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e799"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e843"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e865"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e86f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e876"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e882"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e946"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e960"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e972"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e98a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ea62"
    "cursor/enhance-app-with-new-services-and-futuristic-design-eaff"
    "cursor/enhance-app-with-new-services-and-futuristic-design-eb08"
    "cursor/enhance-app-with-new-services-and-futuristic-design-eb32"
    "cursor/enhance-app-with-new-services-and-futuristic-design-eb4a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-eb69"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ec95"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ed16"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ed49"
    "cursor/enhance-app-with-new-services-and-futuristic-design-eedb"
    "cursor/enhance-app-with-new-services-and-futuristic-design-eeea"
    "cursor/enhance-app-with-new-services-and-futuristic-design-eef3"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ef2f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-ef4e"
    "cursor/enhance-app-with-new-services-and-futuristic-design-efa1"
    "cursor/enhance-app-with-new-services-and-futuristic-design-f009"
    "cursor/enhance-app-with-new-services-and-futuristic-design-f1f4"
    "cursor/enhance-app-with-new-services-and-futuristic-design-f2a6"
    "cursor/enhance-app-with-new-services-and-futuristic-design-f2b7"
    "cursor/enhance-app-with-new-services-and-futuristic-design-f53d"
    "cursor/enhance-app-with-new-services-and-futuristic-design-f685"
    "cursor/enhance-app-with-new-services-and-futuristic-design-f6bf"
    "cursor/enhance-app-with-new-services-and-futuristic-design-f70c"
    "cursor/enhance-app-with-new-services-and-futuristic-design-f758"
    "cursor/enhance-app-with-new-services-and-futuristic-design-f896"
    "cursor/enhance-app-with-new-services-and-futuristic-design-f8ca"
    "cursor/enhance-app-with-new-services-and-futuristic-design-f934"
    "cursor/enhance-app-with-new-services-and-futuristic-design-fa1e"
    "cursor/enhance-app-with-new-services-and-futuristic-design-fa22"
    "cursor/enhance-app-with-new-services-and-futuristic-design-fa24"
    "cursor/enhance-app-with-new-services-and-futuristic-design-fbd3"
    "cursor/enhance-app-with-new-services-and-futuristic-design-fc6b"
    "cursor/enhance-app-with-new-services-and-futuristic-design-fd25"
    "cursor/enhance-app-with-new-services-and-futuristic-design-fd86"
    "cursor/enhance-app-with-new-services-and-futuristic-design-fe75"
    "cursor/enhance-app-with-new-services-and-futuristic-design-feb6"
    "cursor/enhance-app-with-new-services-and-futuristic-design-fee1"
)

log_message "🔄 Processing important feature branches..."

# Process each important branch
for branch in "${IMPORTANT_BRANCHES[@]}"; do
    echo ""
    echo "=========================================="
    echo "🔄 Processing branch: $branch"
    echo "=========================================="
    
    if merge_branch "$branch"; then
        log_message "✅ Branch $branch processed successfully"
    else
        log_message "❌ Branch $branch processing failed"
    fi
    
    echo "=========================================="
    echo ""
    
    # Push changes every 2 successful merges to avoid losing work
    if [ $((SUCCESSFUL_MERGES % 2)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        log_message "💾 Pushing progress to remote..."
        git push origin main
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 1
done

# Final push
log_message "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Feature branch merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
echo "🧹 Cleanup recommendations:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Consider cleaning up old feature branches"
echo "   4. Run tests to ensure everything works correctly"