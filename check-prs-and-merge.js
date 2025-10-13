const conflictMarkers = runGitCommand('grep -r ""*.ts" --include=" --include="*.js"*.jsx" | head -10')'""
