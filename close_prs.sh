#!/bin/bash

# List of PR numbers to close
pr_numbers=(33745 33744 33743 33741 33738 33736 33735 33733 33731 33728 33726 33725 33724 33723 33721 33720 33719 33717 33716 33713 33712 33710 33709 33708 33707 33706 33705 33693 33691)

echo "Closing PRs..."

for pr in "${pr_numbers[@]}"; do
    echo "Closing PR #$pr..."
    gh pr close $pr --comment "This PR has been superseded by the main branch merge. All changes have been incorporated."
    sleep 1
done

echo "All PRs closed."