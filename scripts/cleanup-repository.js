#!/usr/bin/env node}
  }
;
  console.log(`🧹 Cleaned ${cleanedCount} temporary script files`);`}
;
function cleanRootFiles() {;
  const rootFiles = glob.sync('*' { "nodir": true });
;  let cleanedCount = 0;;  for (const file of rootFiles) {;
    // Remove temporary files in root;
    if(;);      file.includes('fix-') ||';      file.includes('resolve-') ||';      file.includes('final-') ||';      file.includes('comprehensive-') ||';      file.includes('aggressive-') ||';      file.includes('targeted-') ||';      file.includes('merge-') ||';      file.includes('smart-merge-') ||';      file.includes('quick-conflict-') ||';      file.includes('process_') ||';      file.includes('resolve_') ||';      file.includes('fix_') ||';      file.includes('final_') ||';      file.includes('comprehensive_') ||';      file.includes('aggressive_') ||';      file.includes('targeted_') ||';      file.includes('merge_') ||';      file.includes('smart_merge_') ||';      file.includes('quick_conflict_') ||';      file.includes('process-') ||';      file.includes('resolve-') ||';      file.includes('fix-') ||';      file.includes('final-') ||';      file.includes('comprehensive-') ||';      file.includes('aggressive-') ||';      file.includes('targeted-') ||';      file.includes('merge-') ||';      file.includes('smart-merge-') ||';      file.includes('quick-conflict-') ||';      file.endsWith('.txt') ||';      file.endsWith('.log') ||';      file.endsWith('.cjs') ||';      file.endsWith('.js') ||';      file.endsWith('.sh')';    ) {;';      if (removeFile(file)) {;
        cleanedCount++}
    }
  }
;
  console.log(`🧹 Cleaned ${cleanedCount} temporary root files`);`}
;
function cleanReportFiles() {;
  const reportFiles = glob.sync('**/* */)'
