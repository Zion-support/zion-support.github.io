const conflictMarkers = runGitCommand(
  'grep -r "" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" | head -10'
);
if (conflictMarkers && conflictMarkers.trim()) {
//   //   } else {
//   }

// 7. Create a summary report
const report = {
  timestamp: new Date().toISOString(),
  currentBranch: currentBranch?.trim(),
  divergence: diverged?.trim(),
  hasConflicts: conflictFiles && conflictFiles.trim() ? true : false,
  conflictFiles:
    conflictFiles
      ?.trim()
      .split('\n')
      .filter(f => f) || [],
  recentCommits: recentCommits?.trim().split('\n') || [],
  recentBranches: recentBranches?.trim().split('\n') || [],
};

fs.writeFileSync('merge-analysis-report.json', JSON.stringify(report, null, 2));

// // // // // // // // // 8. Provide next steps
// // // // // // // 
