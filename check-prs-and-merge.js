const conflictMarkers = runGitCommand('grep -r "" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" | head -10');
if (conflictMarkers && conflictMarkers.trim()) {
  console.log('⚠️  Files with merge conflict markers:');
  console.log(conflictMarkers);
} else {
  console.log('✅ No merge conflict markers found');
}

// 7. Create a summary report
const report = {
  timestamp: new Date().toISOString(),
  currentBranch: currentBranch?.trim(),
  divergence: diverged?.trim(),
  hasConflicts: conflictFiles && conflictFiles.trim() ? true : false,
  conflictFiles: conflictFiles?.trim().split('\n').filter(f => f) || [],
  recentCommits: recentCommits?.trim().split('\n') || [],
  recentBranches: recentBranches?.trim().split('\n') || []
};

fs.writeFileSync('merge-analysis-report.json', JSON.stringify(report, null, 2));

console.log('\n📋 Summary Report:');
console.log(`- Current branch: ${report.currentBranch}`);
console.log(`- Divergence: ${report.divergence}`);
console.log(`- Has conflicts: ${report.hasConflicts}`);
console.log(`- Conflict files: ${report.conflictFiles.length}`);
console.log(`- Recent commits: ${report.recentCommits.length}`);
console.log(`- Recent branches: ${report.recentBranches.length}`);

console.log('\n📄 Detailed report saved to: merge-analysis-report.json');

// 8. Provide next steps
console.log('\n🚀 Next Steps:');
console.log('1. Review the merge-analysis-report.json for detailed information');
console.log('2. If there are conflicts, resolve them manually or run the resolve-merge-conflicts.sh script');
console.log('3. Check GitHub for open PRs: https://github.com/Zion-Holdings/zion.app/pulls');
console.log('4. Merge any open PRs that are ready');
console.log('5. Push the final merged changes to main');

console.log('\n✅ Analysis complete!');