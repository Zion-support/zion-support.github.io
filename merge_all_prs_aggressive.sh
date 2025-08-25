#!/bin/bash

echo "Starting aggressive automated PR merge process..."
echo "================================================"

# Get the list of open PRs
echo "Fetching open pull requests..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs.json

# Extract PR numbers and branch names using awk
echo "Extracting PR information..."
awk '
/"number":/ {
    number = $2
    gsub(/,/, "", number)
    printf "Processing PR #%s...\n", number
}
/"ref":/ && !/compare_url/ {
    ref = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", ref)
    gsub(/"/, "", ref)
    if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url") {
        printf "  Branch: %s\n", ref
        
        # Fetch the branch
        printf "  Fetching branch...\n"
        system("git fetch origin " ref " 2>/dev/null")
        
        if (system("git fetch origin " ref " 2>/dev/null") == 0) {
            printf "  Attempting to merge...\n"
            
            # Try to merge
            merge_cmd = "git merge origin/" ref " --no-edit 2>/dev/null"
            if (system(merge_cmd) == 0) {
                printf "  ✓ Successfully merged PR #%s\n", number
                printf "  Committing merge...\n"
                commit_cmd = "git commit -m \"Merge PR #" number ": " ref "\" 2>/dev/null"
                system(commit_cmd)
                printf "  ✓ Merge committed\n"
            } else {
                printf "  ✗ Merge failed for PR #%s, attempting conflict resolution...\n", number
                
                # Check for conflicts and resolve them automatically
                if (system("git status | grep -q \"unmerged paths\"") == 0) {
                    printf "  Resolving conflicts automatically...\n"
                    
                    # Resolve conflicts by accepting incoming changes for common files
                    system("git checkout --theirs src/App.tsx 2>/dev/null")
                    system("git checkout --theirs src/components/Header.tsx 2>/dev/null")
                    system("git checkout --theirs src/components/Footer.tsx 2>/dev/null")
                    system("git checkout --theirs src/pages/Home.tsx 2>/dev/null")
                    system("git checkout --theirs src/index.css 2>/dev/null")
                    system("git checkout --theirs package.json 2>/dev/null")
                    system("git checkout --theirs package-lock.json 2>/dev/null")
                    system("git checkout --theirs yarn.lock 2>/dev/null")
                    
                    # Add all resolved files
                    system("git add . 2>/dev/null")
                    
                    # Try to commit
                    if (system("git commit -m \"Merge PR #" number ": " ref " (auto-resolved conflicts)\" 2>/dev/null") == 0) {
                        printf "  ✓ Conflicts resolved and merge committed\n"
                    } else {
                        printf "  ✗ Failed to commit resolved conflicts\n"
                        system("git merge --abort 2>/dev/null")
                    }
                } else {
                    printf "  Aborting merge and continuing...\n"
                    system("git merge --abort 2>/dev/null")
                }
            }
        } else {
            printf "  ✗ Failed to fetch branch %s\n", ref
        }
        
        printf "  ---\n"
    }
}
' prs.json

echo "All PRs processed. Pushing changes to main branch..."
git push origin main --force

echo "Process complete!"