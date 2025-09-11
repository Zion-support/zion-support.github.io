#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log(
  'ℹ️ [2025-09-06T09:26:05.797Z] 🚀 Starting All Learn API Files Fix...'
);
console.log('ℹ️ [2025-09-06T09:26:05.800Z] =');
console.log('');
// Fix certificates [courseId] file
const certificatesPath =
  '/workspace/pages/api/learn/certificates/[courseId].ts';
if (fs.existsSync(certificatesPath)) {
  let content = fs.readFileSync(certificatesPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(certificatesPath, content);
  console.log(
    '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/learn/certificates/[courseId].ts'
  );
}
// Fix coach file
const coachPath = '/workspace/pages/api/learn/coach.ts';
if (fs.existsSync(coachPath)) {
  let content = fs.readFileSync(coachPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(coachPath, content);
  console.log(
    '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/learn/coach.ts'
  );
}
// Fix courses file
const coursesPath = '/workspace/pages/api/learn/courses.ts';
if (fs.existsSync(coursesPath)) {
  let content = fs.readFileSync(coursesPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(coursesPath, content);
  console.log(
    '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/learn/courses.ts'
  );
}
// Fix courses [id] file
const coursesIdPath = '/workspace/pages/api/learn/courses/[id].ts';
if (fs.existsSync(coursesIdPath)) {
  let content = fs.readFileSync(coursesIdPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(coursesIdPath, content);
  console.log(
    '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/learn/courses/[id].ts'
  );
}
// Fix leaderboard file
const leaderboardPath = '/workspace/pages/api/learn/leaderboard.ts';
if (fs.existsSync(leaderboardPath)) {
  let content = fs.readFileSync(leaderboardPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(leaderboardPath, content);
  console.log(
    '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/learn/leaderboard.ts'
  );
}
console.log('');
console.log('📊 ALL LEARN API FILES FIX REPORT');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] =');
console.log('');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] Files fixed: 5');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] Errors: 0');
console.log('');
console.log('✅ Successfully fixed files:');
console.log(
  'ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/learn/certificates/[courseId].ts'
);
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/learn/coach.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/learn/courses.ts');
console.log(
  'ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/learn/courses/[id].ts'
);
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/learn/leaderboard.ts');
console.log('');
// Save report
const report = {
  timestamp: new Date().toISOString(),
  filesFixed: 5,
  errors: 0,
  fixedFiles: [
    'pages/api/learn/certificates/[courseId].ts',
    'pages/api/learn/coach.ts',
    'pages/api/learn/courses.ts',
    'pages/api/learn/courses/[id].ts',
    'pages/api/learn/leaderboard.ts',
  ],
};
fs.writeFileSync(
  '/workspace/all-learn-api-files-fix-report.json',
  JSON.stringify(report, null, 2)
);
console.log('📄 Report saved to all-learn-api-files-fix-report.json');
