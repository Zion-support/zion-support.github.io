<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<<< HEAD:corrupted_backup/lint-checker.js
<<<<<<< HEAD
<<<<<<< HEAD
========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:scripts/lint-checker.js
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
<<<<<<<< HEAD:scripts/lint-checker.js
========
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>> main:corrupted_backup/lint-checker.js
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/usr/bin/env node;,"});,"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const fs = // // require(;,"});,"})
  'fs');,"});,"})
const path = // // require(;,"});,"})
  'path');,"});,"})
const { execSync } = // // require(;,"});,"})
  'child_process');,"});,"})
// Common lint issues to check for;,"});,"})
const lintRules = {;,"});,"})
  'no-console': /console\.(log|warn|error|info|debug)/g,;,"});,"})
  'no-unused-imports': /import\s+[^}]+from\s+[;,"});,"})
  '"][^'"]+[;,"});,"})
  '"];?\s*$/gm,;,"});,"})
  'no-unused-vars;,"});,"})
  ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,;,"});,"})
  'no-debugger;,"});,"})
  ': /debugger;/g,;,"});,"})
  'no-alert;,"});,"})
  ': /alert\(/g,;,"});,"})
  'no-eval;,"});,"})
  ': /eval\(/g,;,"});,"})
  'no-var;,"});,"})
  ': /var\s+/g,;,"});,"})
  'prefer-const;,"});,"})
  ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,;,"});,"})
  'no-empty-blocks;,"});,"})
  ': /\{\s*\}/g,;,"});,"})
  'no-trailing-spaces;,"});,"})
  ': /[ \t]+$/gm,;,"});,"})
  'no-multiple-empty-lines;,"});,"})
  ': /\n\s*\n\s*\n/g,;,"});,"})
  'no-unused-jsx-props;,"});,"})
  ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g;,"});,"})
};,"});,"})
// File extensions to check;,"});,"})
const extensions = ['.js;,"});,"})
  ', '.jsx;,"});,"})
  ', '.ts;,"});,"})
  ', '.tsx;,"});,"})
  '];,"});,"})
// Directories to ignore;,"});,"})
const ignoreDirs = [;,"});,"})
  'node_modules;,"});,"})
  ',;,"});,"})
  '.git;,"});,"})
  ',;,"});,"})
  'dist;,"});,"})
  ',;,"});,"})
  'build;,"});,"})
  ',;,"});,"})
  '.next;,"});,"})
  ',;,"});,"})
  'out;,"});,"})
  ',;,"});,"})
  'coverage;,"});,"})
  ',;,"});,"})
  'temp;,"});,"})
  ',;,"});,"})
  'tmp;,"});,"})
  ',;,"});,"})
  'logs;,"});,"})
  ',;,"});,"})
  'reports;,"});,"})
  ',;,"});,"})
  'test-reports;,"});,"})
  ',;,"});,"})
  'security-reports;,"});,"})
  ',;,"});,"})
  'ci-cd-reports;,"});,"})
  ',;,"});,"})
  'link-reports;,"});,"})
  ',;,"});,"})
  'broken_files_backup;,"});,"})
  ',;,"});,"})
  'temp_backup;,"});,"})
  ',;,"});,"})
  'temp_working;,"});,"})
  ';,"});,"})
];,"});,"})
// Issues found;,"});,"})
const issues = [];,"});,"})
const totalFiles = 0;,"});,"})
const filesWithIssues = 0;,"});,"})
function shouldIgnoreFile(filePath) {;,"});,"})
  return ignoreDirs.some(dir => filePath.includes(dir));,"});,"})
function checkFile(filePath) {;,"});,"})
  try {;,"});,"})
    const content = fs.readFileSync(filePath, 'utf8;,"});,"})
  ');,"});,"})
    const lines = content.split('\n;,"});,"})
  ');,"});,"})
    totalFiles++;,"});,"})
    const fileIssues = [];,"});,"})
    // Check each line for issues;,"});,"})
    lines.forEach((line, lineNum) => {;,"});,"})
      Object.entries(lintRules).forEach(([rule, pattern]) => {;,"});,"})
        if (pattern.test(line)) {;,"});,"})
          fileIssues.push({;,"});,"})
            rule,;,"});,"})
            line: lineNum + 1,;,"});,"})
          });,"});,"})
      });,"});,"})
    });,"});,"})
    if (fileIssues.length > 0) {;,"});,"})
      filesWithIssues++;,"});,"})
      issues.push(...fileIssues);,"});,"})
  } catch (error) {;,"});,"})
    // // // // // // // console.warn(`Warning: Could not read file ${filePath}: ${error.message}`);,"});,"})
  }"});,"})
}"});,"})
function walkDir(dir) {;,"});,"})
  const files = fs.readdirSync(dir);,"});,"})
  files.forEach(file => {;,"});,"})
    const filePath = path.join(dir, file);,"});,"})
    const stat = fs.statSync(filePath);,"});,"})
    if (stat.isDirectory()) {;,"});,"})
      if (!shouldIgnoreFile(filePath)) {;,"});,"})
        walkDir(filePath);,"});,"})
    } else if (stat.isFile()) {;,"});,"})
      const ext = path.extname(file);,"});,"})
      if (extensions.includes(ext)) {;,"});,"})
        checkFile(filePath);,"});,"})
  });,"});,"})
function generateReport() {;,"});,"})
  // // // // // // // console.log('\n=== LINT CHECK REPORT ===\n;,"});,"})
  ');,"});,"})
  // // // // // // // console.log(`Total files checked: ${totalFiles}`);,"});,"})
  // // // // // // // console.log(`Files with issues: ${filesWithIssues}`);,"});,"})
  // // // // // // // console.log(`Total issues found: ${issues.length}\n`);,"});,"})
  if (issues.length === 0) {;,"});,"})
    // // // // // // // console.log('✅ No lint issues found!;,"});,"})
  ');,"});,"})
    return;,"});,"})
  // Group issues by file;,"});,"})
  const issuesByFile = { /* empty */ };,"});,"})
  issues.forEach(issue => {;,"});,"})
    if (!issuesByFile[issue.file]) {;,"});,"})
      issuesByFile[issue.file] = [];,"});,"})
    issuesByFile[issue.file].push(issue);,"});,"})
  });,"});,"})
  Object.entries(issuesByFile).forEach(([file, fileIssues]) => {;,"});,"})
    // // // // // // // console.log(`\n📁 ${file} (${fileIssues.length} issues):`);,"});,"})
    fileIssues.forEach(issue => {;,"});,"})
      // // // // // // // console.log(`  Line ${issue.line}: [${issue.rule}] ${issue.content}`);,"});,"})
    });,"});,"})
  });,"});,"})
  // Summary by rule;,"});,"})
  const ruleCounts = { /* empty */ };,"});,"})
  issues.forEach(issue => {;,"});,"})
    ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1;,"});,"})
  });,"});,"})
  Object.entries(ruleCounts);,"});,"})
    .sort(([a], [b]) => b - a);,"});,"})
    .forEach(([rule, count]) => {;,"});,"})
      // // // // // // // console.log(`  ${rule}: ${count}`);,"});,"})
    });,"});,"})
function main() {;,"});,"})
  // // // // // // // console.log('🔍 Starting lint check...;,"});,"})
  ');,"});,"})
  const startTime = Date.now();,"});,"})
  walkDir('.');,"});,"})
  const endTime = Date.now();,"});,"})
  generateReport();,"});,"})
  // // // // // // // console.log(`\n⏱️  Check completed in ${endTime - startTime}ms`);,"});,"})
  // Exit with error code if issues found;,"});,"})
  if (issues.length > 0) {;,"});,"})
    process.exit(1);,"});,"})
// Run the checker;,"});,"})
if (require.main === module) {;,"});,"})
  main();,"});,"})
module.exports = { checkFile, walkDir, lintRules };,"});,"})
}}}}}}}}}}}}}));,"});,"})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
<<<<<<<< HEAD:corrupted_backup/lint-checker.js
=======
=======
========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:scripts/lint-checker.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<<< HEAD:scripts/lint-checker.js
========
=======
=======
>>>>>>>> main:corrupted_backup/lint-checker.js
=======
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/usr/bin/env node,"}),"})
const fs = require(,"}),"})
  'fs'),"}),"})
const path = require(,"}),"})
  'path'),"}),"})
const { execSync } = require(,"}),"})
  'child_process'),"}),"})
// Common lint issues to check for,"}),"})
const lintRules = {,"}),"})
  'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"})
  'no-unused-imports': /import\s+[^}]+from\s+[,"}),"})
  '"][^'"]+[,"}),"})
  '"];?\s*$/gm,,"}),"})
  'no-unused-vars,"}),"})
  ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"})
  'no-debugger,"}),"})
  ': /debugger;/g,,"}),"})
  'no-alert,"}),"})
  ': /alert\(/g,,"}),"})
  'no-eval,"}),"})
  ': /eval\(/g,,"}),"})
  'no-var,"}),"})
  ': /var\s+/g,,"}),"})
  'prefer-const,"}),"})
  ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"})
  'no-empty-blocks,"}),"})
  ': /\{\s*\}/g,,"}),"})
  'no-trailing-spaces,"}),"})
  ': /[\t]+$/gm,,"}),"})
  'no-multiple-empty-lines,"}),"})
  ': /\n\s*\n\s*\n/g,,"}),"})
  'no-unused-jsx-props,"}),"})
  ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"})
},"}),"})
// File extensions to check,"}),"})
const extensions = ['.js,"}),"})
  ', '.jsx,"}),"})
  ', '.ts,"}),"})
  ', '.tsx,"}),"})
  '],"}),"})
// Directories to ignore,"}),"})
const ignoreDirs = [,"}),"})
  'node_modules,"}),"})
  ',,"}),"})
  '.git,"}),"})
  ',,"}),"})
  'dist,"}),"})
  ',,"}),"})
  'build,"}),"})
  ',,"}),"})
  '.next,"}),"})
  ',,"}),"})
  'out,"}),"})
  ',,"}),"})
  'coverage,"}),"})
  ',,"}),"})
  'temp,"}),"})
  ',,"}),"})
  'tmp,"}),"})
  ',,"}),"})
  'logs,"}),"})
  ',,"}),"})
  'reports,"}),"})
  ',,"}),"})
  'test-reports,"}),"})
  ',,"}),"})
  'security-reports,"}),"})
  ',,"}),"})
  'ci-cd-reports,"}),"})
  ',,"}),"})
  'link-reports,"}),"})
  ',,"}),"})
  'broken_files_backup,"}),"})
  ',,"}),"})
  'temp_backup,"}),"})
  ',,"}),"})
  'temp_working,"}),"})
  ',"}),"})
],"}),"})
// Issues found,"}),"})
const issues = [],"}),"})
const totalFiles = 0,"}),"})
const filesWithIssues = 0,"}),"})
function shouldIgnoreFile(filePath) {,"}),"})
  return ignoreDirs.some(dir => filePath.includes(dir)),"}),"})
function checkFile(filePath) {,"}),"})
  try {,"}),"})
    const content = fs.readFileSync(filePath, 'utf8,"}),"})
  '),"}),"})
    const lines = content.split('\n,"}),"})
  '),"}),"})
    totalFiles++,"}),"})
    const fileIssues = [],"}),"})
    // Check each line for issues,"}),"})
    lines.forEach((line, lineNum) => {,"}),"})
      Object.entries(lintRules).forEach(([rule, pattern]) => {,"}),"})
        if (pattern.test(line)) {,"}),"})
          fileIssues.push({,"}),"})
            rule,,"}),"})
            "line": lineNum + 1,,"}),"})
            "content": line.trim(),,"}),"})
            "file": filePath,"}),"})
          }),"}),"})
      }),"}),"})
    }),"}),"})
    if (fileIssues.length > 0) {,"}),"})
      filesWithIssues++,"}),"})
      issues.push(...fileIssues),"}),"})
  } catch (error) {,"}),"})
    // // // // // // // console.warn(`"Warning": Could not read file ${filePath}: ${error.message}`),"}),"})
  }"}),"})
}"}),"})
function walkDir(dir) {,"}),"})
  const files = fs.readdirSync(dir),"}),"})
  files.forEach(file => {,"}),"})
    const filePath = path.join(dir, file),"}),"})
    const stat = fs.statSync(filePath),"}),"})
    if (stat.isDirectory()) {,"}),"})
      if (!shouldIgnoreFile(filePath)) {,"}),"})
        walkDir(filePath),"}),"})
    } else if (stat.isFile()) {,"}),"})
      const ext = path.extname(file),"}),"})
      if (extensions.includes(ext)) {,"}),"})
        checkFile(filePath),"}),"})
  }),"}),"})
function generateReport() {,"}),"})
  // // // // // // // console.log('\n=== LINT CHECK REPORT ===\n,"}),"})
  '),"}),"})
  // // // // // // // console.log(`Total files "checked": ${totalFiles}`),"}),"})
  // // // // // // // console.log(`Files with "issues": ${filesWithIssues}`),"}),"})
  // // // // // // // console.log(`Total issues "found": ${issues.length}\n`),"}),"})
  if (issues.length === 0) {,"}),"})
    // // // // // // // console.log('✅ No lint issues found!,"}),"})
  '),"}),"})
    return,"}),"})
  // Group issues by file,"}),"})
  const issuesByFile = { /* empty */ },"}),"})
  issues.forEach(issue => {,"}),"})
    if (!issuesByFile[issue.file]) {,"}),"})
      issuesByFile[issue.file] = [],"}),"})
    issuesByFile[issue.file].push(issue),"}),"})
  }),"}),"})
  Object.entries(issuesByFile).forEach(([file, fileIssues]) => {,"}),"})
    // // // // // // // console.log(`\n📁 ${file} (${fileIssues.length} issues):`),"}),"})
    fileIssues.forEach(issue => {,"}),"})
      // // // // // // // console.log(`  Line ${issue.line}: [${issue.rule}] ${issue.content}`),"}),"})
    }),"}),"})
  }),"}),"})
  // Summary by rule,"}),"})
  // // // // // // // console.log(,,"}),"})
  \n📊 Issues by "rule": ),"}),"})
  const ruleCounts = { /* empty */ },"}),"})
  issues.forEach(issue => {,"}),"})
    ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"})
  }),"}),"})
  Object.entries(ruleCounts),"}),"})
    .sort(([a], [b]) => b - a),"}),"})
    .forEach(([rule, count]) => {,"}),"})
      // // // // // // // console.log(`  ${rule}: ${count}`),"}),"})
    }),"}),"})
function main() {,"}),"})
  // // // // // // // console.log('🔍 Starting lint check...,"}),"})
  '),"}),"})
  const startTime = Date.now(),"}),"})
  walkDir('.'),"}),"})
  const endTime = Date.now(),"}),"})
  generateReport(),"}),"})
  // // // // // // // console.log(`\n⏱️  Check completed in ${endTime - startTime}ms`),"}),"})
  // Exit with error code if issues found,"}),"})
  if (issues.length > 0) {,"}),"})
    process.exit(1),"}),"})
// Run the checker,"}),"})
if (require.main === module) {,"}),"})
  main(),"}),"})
module.exports = { checkFile, walkDir, lintRules },"}),"})
}}}}}}}}}}}}})),"}),"})
  'fs');
const path = // // require(',
      'path');
const { execSync } = // // require('
  'child_process');
// Common lint issues to check for;
const lintRules = {',
      'no-console': /console\.(log|warn|error|info|debug)/g
  'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm,"
  'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g, ';no-debugger';: /debugger;/g, ';no-alert';: /alert\(/g, ';no-eval';: /eval\(/g, ';no-var';: /var\s+/g, ';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g, ';no-empty-blocks';: /\{\s*\}/g, ';no-trailing-spaces';: /[\t]+$/gm, ';no-multiple-empty-lines';: /\n\s*\n\s*\n/g, ';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g}
// File extensions to check;
const extensions = ['.js',
      ', '.jsx';, '.ts';, '.tsx';];
// Directories to ignore;
const ignoreDirs = [',
      'node_modules';, ';.git';, ';dist';, ';build';, ';.next';, ';out';, ';coverage';, ';temp';, ';tmp';, ';logs';, ';reports';, ';test-reports';, ';security-reports';, ';ci-cd-reports';, ';link-reports';, ';broken_files_backup';, ';temp_backup';, ';temp_working';;
];
// Issues found;
const issues = [];
const totalFiles = 0;
const filesWithIssues = 0;
function shouldIgnoreFile(filePath) {;
  return ignoreDirs.some(dir => filePath.includes(dir));
function checkFile(filePath) {
  try {'
    const content = fs.readFileSync(filePath, 'utf8';);
    const lines = content.split('\n';);
    totalFiles++;
    const fileIssues = [];
    // Check each line for issues;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:corrupted_backup/lint-checker.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<<< HEAD:scripts/lint-checker.js
========
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    lines.forEach((line, lineNum) => {;
      Object.entries(lintRules).forEach(([rule, pattern]) => {;
        if (pattern.test(line)) {;
          fileIssues.push({;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>>> main:corrupted_backup/lint-checker.js
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:scripts/lint-checker.js
=======
<<<<<<< HEAD
>>>>>>>> main:corrupted_backup/lint-checker.js
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<========    lines.forEach((line, lineNum) => {;
      Object.entries(lintRules).forEach(([rule, pattern]) => {;
        if (pattern.test(line)) {;
          fileIssues.push({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            rule,;
            line: lineNum + 1,;
            content: line.trim(),;
            file: filePath})})});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
<<<<<<<< HEAD:corrupted_backup/lint-checker.js
=======
=======
========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:scripts/lint-checker.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<<< HEAD:scripts/lint-checker.js
========
=======
=======
>>>>>>>> main:corrupted_backup/lint-checker.js
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            rule,
=======
<<========            rule,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            "line": lineNum + 1,
            "content": line.trim(),
            "file": filePath})})});
    if (fileIssues.length > 0) {;
<<<<<<< HEAD
      filesWithIssues++;
<<<<<<< HEAD
<<<<<<< HEAD
      issues.push(...fileIssues)} catch (error) {'
    // // // // // // // console.warn(`"Warning": Could not read file ${filePath}: ${error.message}`)}
}
=======

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======

      issues && issues.push(...fileIssues)} catch (error) {'
    // // // // // // // console && console.warn(`"Warning": Could not read file ${filePath}: ${error && error.message}`)}
}

=======
<<<<<<< HEAD

=======
      issues.push(...fileIssues)} catch (error) {'
    // // // // // // // console.warn(`"Warning": Could not read file ${filePath}: ${error.message}`)}
}
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
function walkDir(dir) {;
=======
      filesWithIssues++;function walkDir(dir) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const files = fs.readdirSync(dir);
  files.forEach(file => {;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {;
      if (!shouldIgnoreFile(filePath)) {;
        walkDir(filePath)} else if (stat.isFile()) {;
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        checkFile(filePath)})
function generateReport() {"
  // // // // // // // console.log('\n=== LINT CHECK REPORT ===\n';);
  // // // // // // // console.log("Total files "checked": ${totalFiles}");"
  // // // // // // // console.log(`Files with "issues": ${filesWithIssues}`);"
  // // // // // // // console.log("Total issues "found": ${issues.length}\n");
  if (issues.length === 0) {"
    // // // // // // // console.log('✅ No lint issues found!';);
    return;
  // Group issues by file;
  const issuesByFile = { /* empty */ }
  issues.forEach(issue => {;
    if (!issuesByFile[issue.file]) {;
      issuesByFile[issue.file] = [];
    issuesByFile[issue.file].push(issue)})
  Object.entries(issuesByFile).forEach(([file, fileIssues]) => {'
    // // // // // // // console.log(`\n📁 ${file} (${fileIssues.length} issues):`);
    fileIssues.forEach("issue": => {
      // // // // // // // console.log(`  Line ${issue.line}: [${issue.rule}] ${issue.content}`)})})
  // "Summary": by rule;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  // // // // // // // console && console.log(
  \n📊 Issues: by rule: ),

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  // // // // // // // console.log(
  \n📊 Issues: by rule: );
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  // // // // // // // console.log(
  \n📊 Issues: by rule: );
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  const ruleCounts = { /* empty */}
=======
  // // // // // // // console.log(
  \n📊 Issues: by rule: );  const ruleCounts = { /* empty */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  issues.forEach(issue => {
    ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1})
  Object.entries(ruleCounts);
    .sort(([a], [b]) => "b": - a);
    .forEach(([rule, count]) => {
      // // // // // // // console.log(`  ${rule}: ${count}`)})
<<<<<<< HEAD
"function": main() {
<<<<<<< HEAD
<<<<<<< HEAD

  // // // // // // // console && console.log('🔍 Starting lint check...', ')';
  const startTime = Date && Date.now();

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  // // // // // // // console.log('🔍 Starting lint check...';';)';
  const startTime = Date.now();
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  // // // // // // // console.log('🔍 Starting lint check...';';)';
  const startTime = Date.now();
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  walkDir('.')';
  const endTime = Date.now();
  generateReport();
  // // // // // // // console.log(`\n⏱️  Check: completed in ${endTime - startTime}ms`);
  // "Exit": with error code if issues found;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<<< HEAD:corrupted_backup/lint-checker.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<<< HEAD:scripts/lint-checker.js
  // // // // // // // console.log(,;
  \n📊 Issues by rule: );
========
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  if: (issues.length > 0) {
=======
"function": main() {  // // // // // // // console.log(,;
  \n📊 Issues by rule: );
========  if: (issues.length > 0) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    process.exit(1);
// Run: the checker;
if: (require.main === module) {
  main();
module.exports: = { checkFile, walkDir, lintRules }
}}}}}}}}}}}}}));
  // Summary by rule;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
  // // // // // // // console.log(,;
  \n📊 Issues by rule: );
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
========
  // // // // // // // console.log(,;
  \n📊 Issues by rule: );
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:scripts/lint-checker.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>>> main:corrupted_backup/lint-checker.js
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  // // // // // // // console.log(,
=======
  \n📊 Issues by rule: );>  // // // // // // // console.log(,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  \n📊 Issues by "rule": );
  const ruleCounts = { /* empty */ }
  issues.forEach(issue => {;
    ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1});
  Object.entries(ruleCounts);
    .sort(([a], [b]) => b - a);
    .forEach(([rule, count]) => {"
      // // // // // // // console.log("  ${rule}: ${count}")})
function main() {"
  // // // // // // // console.log('🔍 Starting lint check...';);
  const startTime = Date.now();
  walkDir('.');
  const endTime = Date.now();
  generateReport();
  // // // // // // // console.log(`\n⏱️  Check completed in ${endTime - startTime}ms`);
  // Exit with error code if issues found;
  if (issues.length > 0) {;
    process.exit(1);
// Run the checker;
if (require.main === module) {;
  main();
module.exports = { checkFile, walkDir, lintRules }
<<<<<<< HEAD
}}}}}}}}}}}}}));`
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
<<<<<<<< HEAD:scripts/lint-checker.js
#!/usr/bin/env node,"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) const { execSync } = require(,"}),"}) 'child_process'),"}),"}) const lintRules = {,"}),"}) 'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"}) 'no-unused-imports': /import\s+[^}]+from\s+[,"}),"}) '"][^'"]+[,"}),"}) '"];?\s*$/gm,,"}),"}) 'no-unused-vars,"}),"}) ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"}) 'no-debugger,"}),"}) ': /debugger;/g,,"}),"}) 'no-alert,"}),"}) ': /alert\(/g,,"}),"}) 'no-eval,"}),"}) ': /eval\(/g,,"}),"}) 'no-var,"}),"}) ': /var\s+/g,,"}),"}) 'prefer-const,"}),"}) ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"}) 'no-empty-blocks,"}),"}) ': /\{\s*\}/g,,"}),"}) 'no-trailing-spaces,"}),"}) ': /[ \t]+$/gm,,"}),"}) 'no-multiple-empty-lines,"}),"}) ': /\n\s*\n\s*\n/g,,"}),"}) 'no-unused-jsx-props,"}),"}) ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"}) },"}),"}) const extensions = ['.js,"}),"}) ','.jsx,"}),"}) ','.ts,"}),"}) ','.tsx,"}),"}) '],"}),"}) const ignoreDirs = [,"}),"}) 'node_modules,"}),"}) ',,"}),"}) '.git,"}),"}) ',,"}),"}) 'dist,"}),"}) ',,"}),"}) 'build,"}),"}) ',,"}),"}) '.next,"}),"}) ',,"}),"}) 'out,"}),"}) ',,"}),"}) 'coverage,"}),"}) ',,"}),"}) 'temp,"}),"}) ',,"}),"}) 'tmp,"}),"}) ',,"}),"}) 'logs,"}),"}) ',,"}),"}) 'reports,"}),"}) ',,"}),"}) 'test-reports,"}),"}) ',,"}),"}) 'security-reports,"}),"}) ',,"}),"}) 'ci-cd-reports,"}),"}) ',,"}),"}) 'link-reports,"}),"}) ',,"}),"}) 'broken_files_backup,"}),"}) ',,"}),"}) 'temp_backup,"}),"}) ',,"}),"}) 'temp_working,"}),"}) ',"}),"}) ],"}),"}) const issues = [],"}),"}) const totalFiles = 0,"}),"}) const filesWithIssues = 0,"}),"}) function shouldIgnoreFile(filePath) {,"}),"}) return ignoreDirs.some(dir => filePath.includes(dir)),"}),"}) function checkFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,'utf8,"}),"}) '),"}),"}) const lines = content.split('\n,"}),"}) '),"}),"}) totalFiles++,"}),"}) const fileIssues = [],"}),"}) lines.forEach((line,lineNum) => {,"}),"}) Object.entries(lintRules).forEach(([rule,pattern]) => {,"}),"}) if (pattern.test(line)) {,"}),"}) fileIssues.push({,"}),"}) rule,,"}),"}) line: lineNum + 1,,"}),"}) content: line.trim(),,"}),"}) file: filePath,"}),"}) }),"}),"}) }),"}),"}) }),"}),"}) if (fileIssues.length > 0) {,"}),"}) filesWithIssues++,"}),"}) issues.push(...fileIssues),"}),"}) } catch (error) {,"}),"}) }"}),"}) }"}),"}) function walkDir(dir) {,"}),"}) const files = fs.readdirSync(dir),"}),"}) files.forEach(file => {,"}),"}) const filePath = path.join(dir,file),"}),"}) const stat = fs.statSync(filePath),"}),"}) if (stat.isDirectory()) {,"}),"}) if (!shouldIgnoreFile(filePath)) {,"}),"}) walkDir(filePath),"}),"}) } else if (stat.isFile()) {,"}),"}) const ext = path.extname(file),"}),"}) if (extensions.includes(ext)) {,"}),"}) checkFile(filePath),"}),"}) }),"}),"}) function generateReport() {,"}),"}) '),"}),"}) if (issues.length === 0) {,"}),"}) '),"}),"}) return,"}),"}) const issuesByFile = { },"}),"}) issues.forEach(issue => {,"}),"}) if (!issuesByFile[issue.file]) {,"}),"}) issuesByFile[issue.file] = [],"}),"}) issuesByFile[issue.file].push(issue),"}),"}) }),"}),"}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {,"}),"}) fileIssues.forEach(issue => {,"}),"}) }),"}),"}) }),"}),"}) \n📊 Issues by rule: ),"}),"}) const ruleCounts = { },"}),"}) issues.forEach(issue => {,"}),"}) ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"}) }),"}),"}) Object.entries(ruleCounts),"}),"}) .sort(([a],[b]) => b - a),"}),"}) .forEach(([rule,count]) => {,"}),"}) }),"}),"}) function main() {,"}),"}) '),"}),"}) const startTime = Date.now(),"}),"}) walkDir('.'),"}),"}) const endTime = Date.now(),"}),"}) generateReport(),"}),"}) if (issues.length > 0) {,"}),"}) process.exit(1),"}),"}) if (require.main === module) {,"}),"}) main(),"}),"}) module.exports = { checkFile,walkDir,lintRules },"}),"}) }}}}}}}}}}}}})),"}),"}) 'fs'); const path = 'path'); const { execSync } = 'child_process'); const lintRules = {','no-console': /console\.(log|warn|error|info|debug)/g 'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm," 'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,';no-debugger';: /debugger;/g,';no-alert';: /alert\(/g,';no-eval';: /eval\(/g,';no-var';: /var\s+/g,';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,';no-empty-blocks';: /\{\s*\}/g,';no-trailing-spaces';: /[ \t]+$/gm,';no-multiple-empty-lines';: /\n\s*\n\s*\n/g,';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g} const extensions = ['.js',','.jsx','.ts','.tsx']; const ignoreDirs = [','node_modules',';.git',';dist',';build',';.next',';out',';coverage',';temp',';tmp',';logs',';reports',';test-reports',';security-reports',';ci-cd-reports',';link-reports',';broken_files_backup',';temp_backup',';temp_working']; const issues = []; const totalFiles = 0; const filesWithIssues = 0; function shouldIgnoreFile(filePath) {; return ignoreDirs.some(dir => filePath.includes(dir)); function checkFile(filePath) { try {' const content = fs.readFileSync(filePath,'utf8';); const lines = content.split('\n';); totalFiles++; const fileIssues = []; lines.forEach((line,lineNum) => {; Object.entries(lintRules).forEach(([rule,pattern]) => {; if (pattern.test(line)) {; fileIssues.push({; rule,line: lineNum + 1,content: line.trim(),file: filePath})})}); if (fileIssues.length > 0) {; filesWithIssues++; issues.push(...fileIssues)} catch (error) {' } function walkDir(dir) {; const files = fs.readdirSync(dir); files.forEach(file => {; const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; if (!shouldIgnoreFile(filePath)) {; walkDir(filePath)} else if (stat.isFile()) {; const ext = path.extname(file); if (extensions.includes(ext)) { checkFile(filePath)}) function generateReport() {` if (issues.length === 0) {` return; const issuesByFile = { } issues.forEach(issue => {; if (!issuesByFile[issue.file]) {; issuesByFile[issue.file] = []; issuesByFile[issue.file].push(issue)}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {' fileIssues.forEach(issue: => { \n📊 Issues: by rule: ); const ruleCounts = { } issues.forEach(issue => { ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}) Object.entries(ruleCounts); .sort(([a],[b]) => b: - a); .forEach(([rule,count]) => { function: main() { const startTime = Date.now(); walkDir('.')';; const endTime = Date.now(); generateReport(); if: (issues.length > 0) { process.exit(1); if: (require.main === module) { main(); module.exports: = { checkFile,walkDir,lintRules } }}}}}}}}}}}}})); \n📊 Issues by rule: ); const ruleCounts = { } issues.forEach(issue => {; ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}); Object.entries(ruleCounts); .sort(([a],[b]) => b - a); .forEach(([rule,count]) => {` function main() {` const startTime = Date.now(); walkDir('.'); const endTime = Date.now(); generateReport(); if (issues.length > 0) {; process.exit(1); if (require.main === module) {; main(); module.exports = { checkFile,walkDir,lintRules } }}}}}}}}}}}}}));`
========
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node,"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) const { execSync } = require(,"}),"}) 'child_process'),"}),"}) const lintRules = {,"}),"}) 'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"}) 'no-unused-imports': /import\s+[^}]+from\s+[,"}),"}) '"][^'"]+[,"}),"}) '"];?\s*$/gm,,"}),"}) 'no-unused-vars,"}),"}) ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"}) 'no-debugger,"}),"}) ': /debugger;/g,,"}),"}) 'no-alert,"}),"}) ': /alert\(/g,,"}),"}) 'no-eval,"}),"}) ': /eval\(/g,,"}),"}) 'no-var,"}),"}) ': /var\s+/g,,"}),"}) 'prefer-const,"}),"}) ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"}) 'no-empty-blocks,"}),"}) ': /\{\s*\}/g,,"}),"}) 'no-trailing-spaces,"}),"}) ': /[ \t]+$/gm,,"}),"}) 'no-multiple-empty-lines,"}),"}) ': /\n\s*\n\s*\n/g,,"}),"}) 'no-unused-jsx-props,"}),"}) ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"}) },"}),"}) const extensions = ['.js,"}),"}) ','.jsx,"}),"}) ','.ts,"}),"}) ','.tsx,"}),"}) '],"}),"}) const ignoreDirs = [,"}),"}) 'node_modules,"}),"}) ',,"}),"}) '.git,"}),"}) ',,"}),"}) 'dist,"}),"}) ',,"}),"}) 'build,"}),"}) ',,"}),"}) '.next,"}),"}) ',,"}),"}) 'out,"}),"}) ',,"}),"}) 'coverage,"}),"}) ',,"}),"}) 'temp,"}),"}) ',,"}),"}) 'tmp,"}),"}) ',,"}),"}) 'logs,"}),"}) ',,"}),"}) 'reports,"}),"}) ',,"}),"}) 'test-reports,"}),"}) ',,"}),"}) 'security-reports,"}),"}) ',,"}),"}) 'ci-cd-reports,"}),"}) ',,"}),"}) 'link-reports,"}),"}) ',,"}),"}) 'broken_files_backup,"}),"}) ',,"}),"}) 'temp_backup,"}),"}) ',,"}),"}) 'temp_working,"}),"}) ',"}),"}) ],"}),"}) const issues = [],"}),"}) const totalFiles = 0,"}),"}) const filesWithIssues = 0,"}),"}) function shouldIgnoreFile(filePath) {,"}),"}) return ignoreDirs.some(dir => filePath.includes(dir)),"}),"}) function checkFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,'utf8,"}),"}) '),"}),"}) const lines = content.split('\n,"}),"}) '),"}),"}) totalFiles++,"}),"}) const fileIssues = [],"}),"}) lines.forEach((line,lineNum) => {,"}),"}) Object.entries(lintRules).forEach(([rule,pattern]) => {,"}),"}) if (pattern.test(line)) {,"}),"}) fileIssues.push({,"}),"}) rule,,"}),"}) line: lineNum + 1,,"}),"}) content: line.trim(),,"}),"}) file: filePath,"}),"}) }),"}),"}) }),"}),"}) }),"}),"}) if (fileIssues.length > 0) {,"}),"}) filesWithIssues++,"}),"}) issues.push(...fileIssues),"}),"}) } catch (error) {,"}),"}) }"}),"}) }"}),"}) function walkDir(dir) {,"}),"}) const files = fs.readdirSync(dir),"}),"}) files.forEach(file => {,"}),"}) const filePath = path.join(dir,file),"}),"}) const stat = fs.statSync(filePath),"}),"}) if (stat.isDirectory()) {,"}),"}) if (!shouldIgnoreFile(filePath)) {,"}),"}) walkDir(filePath),"}),"}) } else if (stat.isFile()) {,"}),"}) const ext = path.extname(file),"}),"}) if (extensions.includes(ext)) {,"}),"}) checkFile(filePath),"}),"}) }),"}),"}) function generateReport() {,"}),"}) '),"}),"}) if (issues.length === 0) {,"}),"}) '),"}),"}) return,"}),"}) const issuesByFile = { },"}),"}) issues.forEach(issue => {,"}),"}) if (!issuesByFile[issue.file]) {,"}),"}) issuesByFile[issue.file] = [],"}),"}) issuesByFile[issue.file].push(issue),"}),"}) }),"}),"}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {,"}),"}) fileIssues.forEach(issue => {,"}),"}) }),"}),"}) }),"}),"}) \n📊 Issues by rule: ),"}),"}) const ruleCounts = { },"}),"}) issues.forEach(issue => {,"}),"}) ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"}) }),"}),"}) Object.entries(ruleCounts),"}),"}) .sort(([a],[b]) => b - a),"}),"}) .forEach(([rule,count]) => {,"}),"}) }),"}),"}) function main() {,"}),"}) '),"}),"}) const startTime = Date.now(),"}),"}) walkDir('.'),"}),"}) const endTime = Date.now(),"}),"}) generateReport(),"}),"}) if (issues.length > 0) {,"}),"}) process.exit(1),"}),"}) if (require.main === module) {,"}),"}) main(),"}),"}) module.exports = { checkFile,walkDir,lintRules },"}),"}) }}}}}}}}}}}}})),"}),"}) 'fs'); const path = 'path'); const { execSync } = 'child_process'); const lintRules = {','no-console': /console\.(log|warn|error|info|debug)/g 'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm," 'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,';no-debugger';: /debugger;/g,';no-alert';: /alert\(/g,';no-eval';: /eval\(/g,';no-var';: /var\s+/g,';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,';no-empty-blocks';: /\{\s*\}/g,';no-trailing-spaces';: /[ \t]+$/gm,';no-multiple-empty-lines';: /\n\s*\n\s*\n/g,';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g} const extensions = ['.js',','.jsx','.ts','.tsx']; const ignoreDirs = [','node_modules',';.git',';dist',';build',';.next',';out',';coverage',';temp',';tmp',';logs',';reports',';test-reports',';security-reports',';ci-cd-reports',';link-reports',';broken_files_backup',';temp_backup',';temp_working']; const issues = []; const totalFiles = 0; const filesWithIssues = 0; function shouldIgnoreFile(filePath) {; return ignoreDirs.some(dir => filePath.includes(dir)); function checkFile(filePath) { try {' const content = fs.readFileSync(filePath,'utf8';); const lines = content.split('\n';); totalFiles++; const fileIssues = []; lines.forEach((line,lineNum) => {; Object.entries(lintRules).forEach(([rule,pattern]) => {; if (pattern.test(line)) {; fileIssues.push({; rule,line: lineNum + 1,content: line.trim(),file: filePath})})}); if (fileIssues.length > 0) {; filesWithIssues++; issues.push(...fileIssues)} catch (error) {' } function walkDir(dir) {; const files = fs.readdirSync(dir); files.forEach(file => {; const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; if (!shouldIgnoreFile(filePath)) {; walkDir(filePath)} else if (stat.isFile()) {; const ext = path.extname(file); if (extensions.includes(ext)) { checkFile(filePath)}) function generateReport() {` if (issues.length === 0) {` return; const issuesByFile = { } issues.forEach(issue => {; if (!issuesByFile[issue.file]) {; issuesByFile[issue.file] = []; issuesByFile[issue.file].push(issue)}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {' fileIssues.forEach(issue: => { \n📊 Issues: by rule: ); const ruleCounts = { } issues.forEach(issue => { ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}) Object.entries(ruleCounts); .sort(([a],[b]) => b: - a); .forEach(([rule,count]) => { function: main() { const startTime = Date.now(); walkDir('.')';; const endTime = Date.now(); generateReport(); if: (issues.length > 0) { process.exit(1); if: (require.main === module) { main(); module.exports: = { checkFile,walkDir,lintRules } }}}}}}}}}}}}})); \n📊 Issues by rule: ); const ruleCounts = { } issues.forEach(issue => {; ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}); Object.entries(ruleCounts); .sort(([a],[b]) => b - a); .forEach(([rule,count]) => {` function main() {` const startTime = Date.now(); walkDir('.'); const endTime = Date.now(); generateReport(); if (issues.length > 0) {; process.exit(1); if (require.main === module) {; main(); module.exports = { checkFile,walkDir,lintRules } }}}}}}}}}}}}}));`
=======
#!/usr/bin/env node,"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) const { execSync } = require(,"}),"}) 'child_process'),"}),"}) const lintRules = {,"}),"}) 'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"}) 'no-unused-imports': /import\s+[^}]+from\s+[,"}),"}) '"][^'"]+[,"}),"}) '"];?\s*$/gm,,"}),"}) 'no-unused-vars,"}),"}) ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"}) 'no-debugger,"}),"}) ': /debugger;/g,,"}),"}) 'no-alert,"}),"}) ': /alert\(/g,,"}),"}) 'no-eval,"}),"}) ': /eval\(/g,,"}),"}) 'no-var,"}),"}) ': /var\s+/g,,"}),"}) 'prefer-const,"}),"}) ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"}) 'no-empty-blocks,"}),"}) ': /\{\s*\}/g,,"}),"}) 'no-trailing-spaces,"}),"}) ': /[ \t]+$/gm,,"}),"}) 'no-multiple-empty-lines,"}),"}) ': /\n\s*\n\s*\n/g,,"}),"}) 'no-unused-jsx-props,"}),"}) ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"}) },"}),"}) const extensions = ['.js,"}),"}) ','.jsx,"}),"}) ','.ts,"}),"}) ','.tsx,"}),"}) '],"}),"}) const ignoreDirs = [,"}),"}) 'node_modules,"}),"}) ',,"}),"}) '.git,"}),"}) ',,"}),"}) 'dist,"}),"}) ',,"}),"}) 'build,"}),"}) ',,"}),"}) '.next,"}),"}) ',,"}),"}) 'out,"}),"}) ',,"}),"}) 'coverage,"}),"}) ',,"}),"}) 'temp,"}),"}) ',,"}),"}) 'tmp,"}),"}) ',,"}),"}) 'logs,"}),"}) ',,"}),"}) 'reports,"}),"}) ',,"}),"}) 'test-reports,"}),"}) ',,"}),"}) 'security-reports,"}),"}) ',,"}),"}) 'ci-cd-reports,"}),"}) ',,"}),"}) 'link-reports,"}),"}) ',,"}),"}) 'broken_files_backup,"}),"}) ',,"}),"}) 'temp_backup,"}),"}) ',,"}),"}) 'temp_working,"}),"}) ',"}),"}) ],"}),"}) const issues = [],"}),"}) const totalFiles = 0,"}),"}) const filesWithIssues = 0,"}),"}) function shouldIgnoreFile(filePath) {,"}),"}) return ignoreDirs.some(dir => filePath.includes(dir)),"}),"}) function checkFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,'utf8,"}),"}) '),"}),"}) const lines = content.split('\n,"}),"}) '),"}),"}) totalFiles++,"}),"}) const fileIssues = [],"}),"}) lines.forEach((line,lineNum) => {,"}),"}) Object.entries(lintRules).forEach(([rule,pattern]) => {,"}),"}) if (pattern.test(line)) {,"}),"}) fileIssues.push({,"}),"}) rule,,"}),"}) line: lineNum + 1,,"}),"}) content: line.trim(),,"}),"}) file: filePath,"}),"}) }),"}),"}) }),"}),"}) }),"}),"}) if (fileIssues.length > 0) {,"}),"}) filesWithIssues++,"}),"}) issues.push(...fileIssues),"}),"}) } catch (error) {,"}),"}) }"}),"}) }"}),"}) function walkDir(dir) {,"}),"}) const files = fs.readdirSync(dir),"}),"}) files.forEach(file => {,"}),"}) const filePath = path.join(dir,file),"}),"}) const stat = fs.statSync(filePath),"}),"}) if (stat.isDirectory()) {,"}),"}) if (!shouldIgnoreFile(filePath)) {,"}),"}) walkDir(filePath),"}),"}) } else if (stat.isFile()) {,"}),"}) const ext = path.extname(file),"}),"}) if (extensions.includes(ext)) {,"}),"}) checkFile(filePath),"}),"}) }),"}),"}) function generateReport() {,"}),"}) '),"}),"}) if (issues.length === 0) {,"}),"}) '),"}),"}) return,"}),"}) const issuesByFile = { },"}),"}) issues.forEach(issue => {,"}),"}) if (!issuesByFile[issue.file]) {,"}),"}) issuesByFile[issue.file] = [],"}),"}) issuesByFile[issue.file].push(issue),"}),"}) }),"}),"}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {,"}),"}) fileIssues.forEach(issue => {,"}),"}) }),"}),"}) }),"}),"}) \n📊 Issues by rule: ),"}),"}) const ruleCounts = { },"}),"}) issues.forEach(issue => {,"}),"}) ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"}) }),"}),"}) Object.entries(ruleCounts),"}),"}) .sort(([a],[b]) => b - a),"}),"}) .forEach(([rule,count]) => {,"}),"}) }),"}),"}) function main() {,"}),"}) '),"}),"}) const startTime = Date.now(),"}),"}) walkDir('.'),"}),"}) const endTime = Date.now(),"}),"}) generateReport(),"}),"}) if (issues.length > 0) {,"}),"}) process.exit(1),"}),"}) if (require.main === module) {,"}),"}) main(),"}),"}) module.exports = { checkFile,walkDir,lintRules },"}),"}) }}}}}}}}}}}}})),"}),"}) 'fs'); const path = 'path'); const { execSync } = 'child_process'); const lintRules = {','no-console': /console\.(log|warn|error|info|debug)/g 'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm," 'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,';no-debugger';: /debugger;/g,';no-alert';: /alert\(/g,';no-eval';: /eval\(/g,';no-var';: /var\s+/g,';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,';no-empty-blocks';: /\{\s*\}/g,';no-trailing-spaces';: /[ \t]+$/gm,';no-multiple-empty-lines';: /\n\s*\n\s*\n/g,';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g} const extensions = ['.js',','.jsx','.ts','.tsx']; const ignoreDirs = [','node_modules',';.git',';dist',';build',';.next',';out',';coverage',';temp',';tmp',';logs',';reports',';test-reports',';security-reports',';ci-cd-reports',';link-reports',';broken_files_backup',';temp_backup',';temp_working']; const issues = []; const totalFiles = 0; const filesWithIssues = 0; function shouldIgnoreFile(filePath) {; return ignoreDirs.some(dir => filePath.includes(dir)); function checkFile(filePath) { try {' const content = fs.readFileSync(filePath,'utf8';); const lines = content.split('\n';); totalFiles++; const fileIssues = []; lines.forEach((line,lineNum) => {; Object.entries(lintRules).forEach(([rule,pattern]) => {; if (pattern.test(line)) {; fileIssues.push({; rule,line: lineNum + 1,content: line.trim(),file: filePath})})}); if (fileIssues.length > 0) {; filesWithIssues++; issues.push(...fileIssues)} catch (error) {' } function walkDir(dir) {; const files = fs.readdirSync(dir); files.forEach(file => {; const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; if (!shouldIgnoreFile(filePath)) {; walkDir(filePath)} else if (stat.isFile()) {; const ext = path.extname(file); if (extensions.includes(ext)) { checkFile(filePath)}) function generateReport() {` if (issues.length === 0) {` return; const issuesByFile = { } issues.forEach(issue => {; if (!issuesByFile[issue.file]) {; issuesByFile[issue.file] = []; issuesByFile[issue.file].push(issue)}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {' fileIssues.forEach(issue: => { \n📊 Issues: by rule: ); const ruleCounts = { } issues.forEach(issue => { ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}) Object.entries(ruleCounts); .sort(([a],[b]) => b: - a); .forEach(([rule,count]) => { function: main() { const startTime = Date.now(); walkDir('.')';; const endTime = Date.now(); generateReport(); if: (issues.length > 0) { process.exit(1); if: (require.main === module) { main(); module.exports: = { checkFile,walkDir,lintRules } }}}}}}}}}}}}})); \n📊 Issues by rule: ); const ruleCounts = { } issues.forEach(issue => {; ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}); Object.entries(ruleCounts); .sort(([a],[b]) => b - a); .forEach(([rule,count]) => {` function main() {` const startTime = Date.now(); walkDir('.'); const endTime = Date.now(); generateReport(); if (issues.length > 0) {; process.exit(1); if (require.main === module) {; main(); module.exports = { checkFile,walkDir,lintRules } }}}}}}}}}}}}}));`
=======
>>>>>>>> main:corrupted_backup/lint-checker.js
#!/usr/bin/env node,"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) const { execSync } = require(,"}),"}) 'child_process'),"}),"}) const lintRules = {,"}),"}) 'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"}) 'no-unused-imports': /import\s+[^}]+from\s+[,"}),"}) '"][^'"]+[,"}),"}) '"];?\s*$/gm,,"}),"}) 'no-unused-vars,"}),"}) ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"}) 'no-debugger,"}),"}) ': /debugger;/g,,"}),"}) 'no-alert,"}),"}) ': /alert\(/g,,"}),"}) 'no-eval,"}),"}) ': /eval\(/g,,"}),"}) 'no-var,"}),"}) ': /var\s+/g,,"}),"}) 'prefer-const,"}),"}) ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"}) 'no-empty-blocks,"}),"}) ': /\{\s*\}/g,,"}),"}) 'no-trailing-spaces,"}),"}) ': /[ \t]+$/gm,,"}),"}) 'no-multiple-empty-lines,"}),"}) ': /\n\s*\n\s*\n/g,,"}),"}) 'no-unused-jsx-props,"}),"}) ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"}) },"}),"}) const extensions = ['.js,"}),"}) ','.jsx,"}),"}) ','.ts,"}),"}) ','.tsx,"}),"}) '],"}),"}) const ignoreDirs = [,"}),"}) 'node_modules,"}),"}) ',,"}),"}) '.git,"}),"}) ',,"}),"}) 'dist,"}),"}) ',,"}),"}) 'build,"}),"}) ',,"}),"}) '.next,"}),"}) ',,"}),"}) 'out,"}),"}) ',,"}),"}) 'coverage,"}),"}) ',,"}),"}) 'temp,"}),"}) ',,"}),"}) 'tmp,"}),"}) ',,"}),"}) 'logs,"}),"}) ',,"}),"}) 'reports,"}),"}) ',,"}),"}) 'test-reports,"}),"}) ',,"}),"}) 'security-reports,"}),"}) ',,"}),"}) 'ci-cd-reports,"}),"}) ',,"}),"}) 'link-reports,"}),"}) ',,"}),"}) 'broken_files_backup,"}),"}) ',,"}),"}) 'temp_backup,"}),"}) ',,"}),"}) 'temp_working,"}),"}) ',"}),"}) ],"}),"}) const issues = [],"}),"}) const totalFiles = 0,"}),"}) const filesWithIssues = 0,"}),"}) function shouldIgnoreFile(filePath) {,"}),"}) return ignoreDirs.some(dir => filePath.includes(dir)),"}),"}) function checkFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,'utf8,"}),"}) '),"}),"}) const lines = content.split('\n,"}),"}) '),"}),"}) totalFiles++,"}),"}) const fileIssues = [],"}),"}) lines.forEach((line,lineNum) => {,"}),"}) Object.entries(lintRules).forEach(([rule,pattern]) => {,"}),"}) if (pattern.test(line)) {,"}),"}) fileIssues.push({,"}),"}) rule,,"}),"}) line: lineNum + 1,,"}),"}) content: line.trim(),,"}),"}) file: filePath,"}),"}) }),"}),"}) }),"}),"}) }),"}),"}) if (fileIssues.length > 0) {,"}),"}) filesWithIssues++,"}),"}) issues.push(...fileIssues),"}),"}) } catch (error) {,"}),"}) }"}),"}) }"}),"}) function walkDir(dir) {,"}),"}) const files = fs.readdirSync(dir),"}),"}) files.forEach(file => {,"}),"}) const filePath = path.join(dir,file),"}),"}) const stat = fs.statSync(filePath),"}),"}) if (stat.isDirectory()) {,"}),"}) if (!shouldIgnoreFile(filePath)) {,"}),"}) walkDir(filePath),"}),"}) } else if (stat.isFile()) {,"}),"}) const ext = path.extname(file),"}),"}) if (extensions.includes(ext)) {,"}),"}) checkFile(filePath),"}),"}) }),"}),"}) function generateReport() {,"}),"}) '),"}),"}) if (issues.length === 0) {,"}),"}) '),"}),"}) return,"}),"}) const issuesByFile = { },"}),"}) issues.forEach(issue => {,"}),"}) if (!issuesByFile[issue.file]) {,"}),"}) issuesByFile[issue.file] = [],"}),"}) issuesByFile[issue.file].push(issue),"}),"}) }),"}),"}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {,"}),"}) fileIssues.forEach(issue => {,"}),"}) }),"}),"}) }),"}),"}) \n📊 Issues by rule: ),"}),"}) const ruleCounts = { },"}),"}) issues.forEach(issue => {,"}),"}) ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"}) }),"}),"}) Object.entries(ruleCounts),"}),"}) .sort(([a],[b]) => b - a),"}),"}) .forEach(([rule,count]) => {,"}),"}) }),"}),"}) function main() {,"}),"}) '),"}),"}) const startTime = Date.now(),"}),"}) walkDir('.'),"}),"}) const endTime = Date.now(),"}),"}) generateReport(),"}),"}) if (issues.length > 0) {,"}),"}) process.exit(1),"}),"}) if (require.main === module) {,"}),"}) main(),"}),"}) module.exports = { checkFile,walkDir,lintRules },"}),"}) }}}}}}}}}}}}})),"}),"}) 'fs'); const path = 'path'); const { execSync } = 'child_process'); const lintRules = {','no-console': /console\.(log|warn|error|info|debug)/g 'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm," 'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,';no-debugger';: /debugger;/g,';no-alert';: /alert\(/g,';no-eval';: /eval\(/g,';no-var';: /var\s+/g,';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,';no-empty-blocks';: /\{\s*\}/g,';no-trailing-spaces';: /[ \t]+$/gm,';no-multiple-empty-lines';: /\n\s*\n\s*\n/g,';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g} const extensions = ['.js',','.jsx','.ts','.tsx']; const ignoreDirs = [','node_modules',';.git',';dist',';build',';.next',';out',';coverage',';temp',';tmp',';logs',';reports',';test-reports',';security-reports',';ci-cd-reports',';link-reports',';broken_files_backup',';temp_backup',';temp_working']; const issues = []; const totalFiles = 0; const filesWithIssues = 0; function shouldIgnoreFile(filePath) {; return ignoreDirs.some(dir => filePath.includes(dir)); function checkFile(filePath) { try {' const content = fs.readFileSync(filePath,'utf8';); const lines = content.split('\n';); totalFiles++; const fileIssues = []; lines.forEach((line,lineNum) => {; Object.entries(lintRules).forEach(([rule,pattern]) => {; if (pattern.test(line)) {; fileIssues.push({; rule,line: lineNum + 1,content: line.trim(),file: filePath})})}); if (fileIssues.length > 0) {; filesWithIssues++; issues.push(...fileIssues)} catch (error) {' } function walkDir(dir) {; const files = fs.readdirSync(dir); files.forEach(file => {; const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; if (!shouldIgnoreFile(filePath)) {; walkDir(filePath)} else if (stat.isFile()) {; const ext = path.extname(file); if (extensions.includes(ext)) { checkFile(filePath)}) function generateReport() {` if (issues.length === 0) {` return; const issuesByFile = { } issues.forEach(issue => {; if (!issuesByFile[issue.file]) {; issuesByFile[issue.file] = []; issuesByFile[issue.file].push(issue)}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {' fileIssues.forEach(issue: => { \n📊 Issues: by rule: ); const ruleCounts = { } issues.forEach(issue => { ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}) Object.entries(ruleCounts); .sort(([a],[b]) => b: - a); .forEach(([rule,count]) => { function: main() { const startTime = Date.now(); walkDir('.')';; const endTime = Date.now(); generateReport(); if: (issues.length > 0) { process.exit(1); if: (require.main === module) { main(); module.exports: = { checkFile,walkDir,lintRules } }}}}}}}}}}}}})); \n📊 Issues by rule: ); const ruleCounts = { } issues.forEach(issue => {; ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}); Object.entries(ruleCounts); .sort(([a],[b]) => b - a); .forEach(([rule,count]) => {` function main() {` const startTime = Date.now(); walkDir('.'); const endTime = Date.now(); generateReport(); if (issues.length > 0) {; process.exit(1); if (require.main === module) {; main(); module.exports = { checkFile,walkDir,lintRules } }}}}}}}}}}}}}));`
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
#!/usr/bin/env node,"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) const { execSync } = require(,"}),"}) 'child_process'),"}),"}) const lintRules = {,"}),"}) 'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"}) 'no-unused-imports': /import\s+[^}]+from\s+[,"}),"}) '"][^'"]+[,"}),"}) '"];?\s*$/gm,,"}),"}) 'no-unused-vars,"}),"}) ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"}) 'no-debugger,"}),"}) ': /debugger;/g,,"}),"}) 'no-alert,"}),"}) ': /alert\(/g,,"}),"}) 'no-eval,"}),"}) ': /eval\(/g,,"}),"}) 'no-var,"}),"}) ': /var\s+/g,,"}),"}) 'prefer-const,"}),"}) ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"}) 'no-empty-blocks,"}),"}) ': /\{\s*\}/g,,"}),"}) 'no-trailing-spaces,"}),"}) ': /[ \t]+$/gm,,"}),"}) 'no-multiple-empty-lines,"}),"}) ': /\n\s*\n\s*\n/g,,"}),"}) 'no-unused-jsx-props,"}),"}) ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"}) },"}),"}) const extensions = ['.js,"}),"}) ','.jsx,"}),"}) ','.ts,"}),"}) ','.tsx,"}),"}) '],"}),"}) const ignoreDirs = [,"}),"}) 'node_modules,"}),"}) ',,"}),"}) '.git,"}),"}) ',,"}),"}) 'dist,"}),"}) ',,"}),"}) 'build,"}),"}) ',,"}),"}) '.next,"}),"}) ',,"}),"}) 'out,"}),"}) ',,"}),"}) 'coverage,"}),"}) ',,"}),"}) 'temp,"}),"}) ',,"}),"}) 'tmp,"}),"}) ',,"}),"}) 'logs,"}),"}) ',,"}),"}) 'reports,"}),"}) ',,"}),"}) 'test-reports,"}),"}) ',,"}),"}) 'security-reports,"}),"}) ',,"}),"}) 'ci-cd-reports,"}),"}) ',,"}),"}) 'link-reports,"}),"}) ',,"}),"}) 'broken_files_backup,"}),"}) ',,"}),"}) 'temp_backup,"}),"}) ',,"}),"}) 'temp_working,"}),"}) ',"}),"}) ],"}),"}) const issues = [],"}),"}) const totalFiles = 0,"}),"}) const filesWithIssues = 0,"}),"}) function shouldIgnoreFile(filePath) {,"}),"}) return ignoreDirs.some(dir => filePath.includes(dir)),"}),"}) function checkFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,'utf8,"}),"}) '),"}),"}) const lines = content.split('\n,"}),"}) '),"}),"}) totalFiles++,"}),"}) const fileIssues = [],"}),"}) lines.forEach((line,lineNum) => {,"}),"}) Object.entries(lintRules).forEach(([rule,pattern]) => {,"}),"}) if (pattern.test(line)) {,"}),"}) fileIssues.push({,"}),"}) rule,,"}),"}) line: lineNum + 1,,"}),"}) content: line.trim(),,"}),"}) file: filePath,"}),"}) }),"}),"}) }),"}),"}) }),"}),"}) if (fileIssues.length > 0) {,"}),"}) filesWithIssues++,"}),"}) issues.push(...fileIssues),"}),"}) } catch (error) {,"}),"}) }"}),"}) }"}),"}) function walkDir(dir) {,"}),"}) const files = fs.readdirSync(dir),"}),"}) files.forEach(file => {,"}),"}) const filePath = path.join(dir,file),"}),"}) const stat = fs.statSync(filePath),"}),"}) if (stat.isDirectory()) {,"}),"}) if (!shouldIgnoreFile(filePath)) {,"}),"}) walkDir(filePath),"}),"}) } else if (stat.isFile()) {,"}),"}) const ext = path.extname(file),"}),"}) if (extensions.includes(ext)) {,"}),"}) checkFile(filePath),"}),"}) }),"}),"}) function generateReport() {,"}),"}) '),"}),"}) if (issues.length === 0) {,"}),"}) '),"}),"}) return,"}),"}) const issuesByFile = { },"}),"}) issues.forEach(issue => {,"}),"}) if (!issuesByFile[issue.file]) {,"}),"}) issuesByFile[issue.file] = [],"}),"}) issuesByFile[issue.file].push(issue),"}),"}) }),"}),"}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {,"}),"}) fileIssues.forEach(issue => {,"}),"}) }),"}),"}) }),"}),"}) \n📊 Issues by rule: ),"}),"}) const ruleCounts = { },"}),"}) issues.forEach(issue => {,"}),"}) ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"}) }),"}),"}) Object.entries(ruleCounts),"}),"}) .sort(([a],[b]) => b - a),"}),"}) .forEach(([rule,count]) => {,"}),"}) }),"}),"}) function main() {,"}),"}) '),"}),"}) const startTime = Date.now(),"}),"}) walkDir('.'),"}),"}) const endTime = Date.now(),"}),"}) generateReport(),"}),"}) if (issues.length > 0) {,"}),"}) process.exit(1),"}),"}) if (require.main === module) {,"}),"}) main(),"}),"}) module.exports = { checkFile,walkDir,lintRules },"}),"}) }}}}}}}}}}}}})),"}),"}) 'fs'); const path = 'path'); const { execSync } = 'child_process'); const lintRules = {','no-console': /console\.(log|warn|error|info|debug)/g 'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm," 'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,';no-debugger';: /debugger;/g,';no-alert';: /alert\(/g,';no-eval';: /eval\(/g,';no-var';: /var\s+/g,';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,';no-empty-blocks';: /\{\s*\}/g,';no-trailing-spaces';: /[ \t]+$/gm,';no-multiple-empty-lines';: /\n\s*\n\s*\n/g,';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g} const extensions = ['.js',','.jsx','.ts','.tsx']; const ignoreDirs = [','node_modules',';.git',';dist',';build',';.next',';out',';coverage',';temp',';tmp',';logs',';reports',';test-reports',';security-reports',';ci-cd-reports',';link-reports',';broken_files_backup',';temp_backup',';temp_working']; const issues = []; const totalFiles = 0; const filesWithIssues = 0; function shouldIgnoreFile(filePath) {; return ignoreDirs.some(dir => filePath.includes(dir)); function checkFile(filePath) { try {' const content = fs.readFileSync(filePath,'utf8';); const lines = content.split('\n';); totalFiles++; const fileIssues = []; lines.forEach((line,lineNum) => {; Object.entries(lintRules).forEach(([rule,pattern]) => {; if (pattern.test(line)) {; fileIssues.push({; rule,line: lineNum + 1,content: line.trim(),file: filePath})})}); if (fileIssues.length > 0) {; filesWithIssues++; issues.push(...fileIssues)} catch (error) {' } function walkDir(dir) {; const files = fs.readdirSync(dir); files.forEach(file => {; const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; if (!shouldIgnoreFile(filePath)) {; walkDir(filePath)} else if (stat.isFile()) {; const ext = path.extname(file); if (extensions.includes(ext)) { checkFile(filePath)}) function generateReport() {` if (issues.length === 0) {` return; const issuesByFile = { } issues.forEach(issue => {; if (!issuesByFile[issue.file]) {; issuesByFile[issue.file] = []; issuesByFile[issue.file].push(issue)}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {' fileIssues.forEach(issue: => { \n📊 Issues: by rule: ); const ruleCounts = { } issues.forEach(issue => { ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}) Object.entries(ruleCounts); .sort(([a],[b]) => b: - a); .forEach(([rule,count]) => { function: main() { const startTime = Date.now(); walkDir('.')';; const endTime = Date.now(); generateReport(); if: (issues.length > 0) { process.exit(1); if: (require.main === module) { main(); module.exports: = { checkFile,walkDir,lintRules } }}}}}}}}}}}}})); \n📊 Issues by rule: ); const ruleCounts = { } issues.forEach(issue => {; ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}); Object.entries(ruleCounts); .sort(([a],[b]) => b - a); .forEach(([rule,count]) => {` function main() {` const startTime = Date.now(); walkDir('.'); const endTime = Date.now(); generateReport(); if (issues.length > 0) {; process.exit(1); if (require.main === module) {; main(); module.exports = { checkFile,walkDir,lintRules } }}}}}}}}}}}}}));`
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
<<<<<<<< HEAD:corrupted_backup/lint-checker.js
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node,"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) const { execSync } = require(,"}),"}) 'child_process'),"}),"}) const lintRules = {,"}),"}) 'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"}) 'no-unused-imports': /import\s+[^}]+from\s+[,"}),"}) '"][^'"]+[,"}),"}) '"];?\s*$/gm,,"}),"}) 'no-unused-vars,"}),"}) ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"}) 'no-debugger,"}),"}) ': /debugger;/g,,"}),"}) 'no-alert,"}),"}) ': /alert\(/g,,"}),"}) 'no-eval,"}),"}) ': /eval\(/g,,"}),"}) 'no-var,"}),"}) ': /var\s+/g,,"}),"}) 'prefer-const,"}),"}) ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"}) 'no-empty-blocks,"}),"}) ': /\{\s*\}/g,,"}),"}) 'no-trailing-spaces,"}),"}) ': /[ \t]+$/gm,,"}),"}) 'no-multiple-empty-lines,"}),"}) ': /\n\s*\n\s*\n/g,,"}),"}) 'no-unused-jsx-props,"}),"}) ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"}) },"}),"}) const extensions = ['.js,"}),"}) ','.jsx,"}),"}) ','.ts,"}),"}) ','.tsx,"}),"}) '],"}),"}) const ignoreDirs = [,"}),"}) 'node_modules,"}),"}) ',,"}),"}) '.git,"}),"}) ',,"}),"}) 'dist,"}),"}) ',,"}),"}) 'build,"}),"}) ',,"}),"}) '.next,"}),"}) ',,"}),"}) 'out,"}),"}) ',,"}),"}) 'coverage,"}),"}) ',,"}),"}) 'temp,"}),"}) ',,"}),"}) 'tmp,"}),"}) ',,"}),"}) 'logs,"}),"}) ',,"}),"}) 'reports,"}),"}) ',,"}),"}) 'test-reports,"}),"}) ',,"}),"}) 'security-reports,"}),"}) ',,"}),"}) 'ci-cd-reports,"}),"}) ',,"}),"}) 'link-reports,"}),"}) ',,"}),"}) 'broken_files_backup,"}),"}) ',,"}),"}) 'temp_backup,"}),"}) ',,"}),"}) 'temp_working,"}),"}) ',"}),"}) ],"}),"}) const issues = [],"}),"}) const totalFiles = 0,"}),"}) const filesWithIssues = 0,"}),"}) function shouldIgnoreFile(filePath) {,"}),"}) return ignoreDirs.some(dir => filePath.includes(dir)),"}),"}) function checkFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,'utf8,"}),"}) '),"}),"}) const lines = content.split('\n,"}),"}) '),"}),"}) totalFiles++,"}),"}) const fileIssues = [],"}),"}) lines.forEach((line,lineNum) => {,"}),"}) Object.entries(lintRules).forEach(([rule,pattern]) => {,"}),"}) if (pattern.test(line)) {,"}),"}) fileIssues.push({,"}),"}) rule,,"}),"}) line: lineNum + 1,,"}),"}) content: line.trim(),,"}),"}) file: filePath,"}),"}) }),"}),"}) }),"}),"}) }),"}),"}) if (fileIssues.length > 0) {,"}),"}) filesWithIssues++,"}),"}) issues.push(...fileIssues),"}),"}) } catch (error) {,"}),"}) }"}),"}) }"}),"}) function walkDir(dir) {,"}),"}) const files = fs.readdirSync(dir),"}),"}) files.forEach(file => {,"}),"}) const filePath = path.join(dir,file),"}),"}) const stat = fs.statSync(filePath),"}),"}) if (stat.isDirectory()) {,"}),"}) if (!shouldIgnoreFile(filePath)) {,"}),"}) walkDir(filePath),"}),"}) } else if (stat.isFile()) {,"}),"}) const ext = path.extname(file),"}),"}) if (extensions.includes(ext)) {,"}),"}) checkFile(filePath),"}),"}) }),"}),"}) function generateReport() {,"}),"}) '),"}),"}) if (issues.length === 0) {,"}),"}) '),"}),"}) return,"}),"}) const issuesByFile = { },"}),"}) issues.forEach(issue => {,"}),"}) if (!issuesByFile[issue.file]) {,"}),"}) issuesByFile[issue.file] = [],"}),"}) issuesByFile[issue.file].push(issue),"}),"}) }),"}),"}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {,"}),"}) fileIssues.forEach(issue => {,"}),"}) }),"}),"}) }),"}),"}) \n📊 Issues by rule: ),"}),"}) const ruleCounts = { },"}),"}) issues.forEach(issue => {,"}),"}) ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"}) }),"}),"}) Object.entries(ruleCounts),"}),"}) .sort(([a],[b]) => b - a),"}),"}) .forEach(([rule,count]) => {,"}),"}) }),"}),"}) function main() {,"}),"}) '),"}),"}) const startTime = Date.now(),"}),"}) walkDir('.'),"}),"}) const endTime = Date.now(),"}),"}) generateReport(),"}),"}) if (issues.length > 0) {,"}),"}) process.exit(1),"}),"}) if (require.main === module) {,"}),"}) main(),"}),"}) module.exports = { checkFile,walkDir,lintRules },"}),"}) }}}}}}}}}}}}})),"}),"}) 'fs'); const path = 'path'); const { execSync } = 'child_process'); const lintRules = {','no-console': /console\.(log|warn|error|info|debug)/g 'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm," 'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,';no-debugger';: /debugger;/g,';no-alert';: /alert\(/g,';no-eval';: /eval\(/g,';no-var';: /var\s+/g,';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,';no-empty-blocks';: /\{\s*\}/g,';no-trailing-spaces';: /[ \t]+$/gm,';no-multiple-empty-lines';: /\n\s*\n\s*\n/g,';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g} const extensions = ['.js',','.jsx','.ts','.tsx']; const ignoreDirs = [','node_modules',';.git',';dist',';build',';.next',';out',';coverage',';temp',';tmp',';logs',';reports',';test-reports',';security-reports',';ci-cd-reports',';link-reports',';broken_files_backup',';temp_backup',';temp_working']; const issues = []; const totalFiles = 0; const filesWithIssues = 0; function shouldIgnoreFile(filePath) {; return ignoreDirs.some(dir => filePath.includes(dir)); function checkFile(filePath) { try {' const content = fs.readFileSync(filePath,'utf8';); const lines = content.split('\n';); totalFiles++; const fileIssues = []; lines.forEach((line,lineNum) => {; Object.entries(lintRules).forEach(([rule,pattern]) => {; if (pattern.test(line)) {; fileIssues.push({; rule,line: lineNum + 1,content: line.trim(),file: filePath})})}); if (fileIssues.length > 0) {; filesWithIssues++; issues.push(...fileIssues)} catch (error) {' } function walkDir(dir) {; const files = fs.readdirSync(dir); files.forEach(file => {; const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; if (!shouldIgnoreFile(filePath)) {; walkDir(filePath)} else if (stat.isFile()) {; const ext = path.extname(file); if (extensions.includes(ext)) { checkFile(filePath)}) function generateReport() {` if (issues.length === 0) {` return; const issuesByFile = { } issues.forEach(issue => {; if (!issuesByFile[issue.file]) {; issuesByFile[issue.file] = []; issuesByFile[issue.file].push(issue)}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {' fileIssues.forEach(issue: => { \n📊 Issues: by rule: ); const ruleCounts = { } issues.forEach(issue => { ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}) Object.entries(ruleCounts); .sort(([a],[b]) => b: - a); .forEach(([rule,count]) => { function: main() { const startTime = Date.now(); walkDir('.')';; const endTime = Date.now(); generateReport(); if: (issues.length > 0) { process.exit(1); if: (require.main === module) { main(); module.exports: = { checkFile,walkDir,lintRules } }}}}}}}}}}}}})); \n📊 Issues by rule: ); const ruleCounts = { } issues.forEach(issue => {; ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}); Object.entries(ruleCounts); .sort(([a],[b]) => b - a); .forEach(([rule,count]) => {` function main() {` const startTime = Date.now(); walkDir('.'); const endTime = Date.now(); generateReport(); if (issues.length > 0) {; process.exit(1); if (require.main === module) {; main(); module.exports = { checkFile,walkDir,lintRules } }}}}}}}}}}}}}));`
=======
#!/usr/bin/env node,"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) const { execSync } = require(,"}),"}) 'child_process'),"}),"}) const lintRules = {,"}),"}) 'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"}) 'no-unused-imports': /import\s+[^}]+from\s+[,"}),"}) '"][^'"]+[,"}),"}) '"];?\s*$/gm,,"}),"}) 'no-unused-vars,"}),"}) ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"}) 'no-debugger,"}),"}) ': /debugger;/g,,"}),"}) 'no-alert,"}),"}) ': /alert\(/g,,"}),"}) 'no-eval,"}),"}) ': /eval\(/g,,"}),"}) 'no-var,"}),"}) ': /var\s+/g,,"}),"}) 'prefer-const,"}),"}) ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"}) 'no-empty-blocks,"}),"}) ': /\{\s*\}/g,,"}),"}) 'no-trailing-spaces,"}),"}) ': /[ \t]+$/gm,,"}),"}) 'no-multiple-empty-lines,"}),"}) ': /\n\s*\n\s*\n/g,,"}),"}) 'no-unused-jsx-props,"}),"}) ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"}) },"}),"}) const extensions = ['.js,"}),"}) ','.jsx,"}),"}) ','.ts,"}),"}) ','.tsx,"}),"}) '],"}),"}) const ignoreDirs = [,"}),"}) 'node_modules,"}),"}) ',,"}),"}) '.git,"}),"}) ',,"}),"}) 'dist,"}),"}) ',,"}),"}) 'build,"}),"}) ',,"}),"}) '.next,"}),"}) ',,"}),"}) 'out,"}),"}) ',,"}),"}) 'coverage,"}),"}) ',,"}),"}) 'temp,"}),"}) ',,"}),"}) 'tmp,"}),"}) ',,"}),"}) 'logs,"}),"}) ',,"}),"}) 'reports,"}),"}) ',,"}),"}) 'test-reports,"}),"}) ',,"}),"}) 'security-reports,"}),"}) ',,"}),"}) 'ci-cd-reports,"}),"}) ',,"}),"}) 'link-reports,"}),"}) ',,"}),"}) 'broken_files_backup,"}),"}) ',,"}),"}) 'temp_backup,"}),"}) ',,"}),"}) 'temp_working,"}),"}) ',"}),"}) ],"}),"}) const issues = [],"}),"}) const totalFiles = 0,"}),"}) const filesWithIssues = 0,"}),"}) function shouldIgnoreFile(filePath) {,"}),"}) return ignoreDirs.some(dir => filePath.includes(dir)),"}),"}) function checkFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,'utf8,"}),"}) '),"}),"}) const lines = content.split('\n,"}),"}) '),"}),"}) totalFiles++,"}),"}) const fileIssues = [],"}),"}) lines.forEach((line,lineNum) => {,"}),"}) Object.entries(lintRules).forEach(([rule,pattern]) => {,"}),"}) if (pattern.test(line)) {,"}),"}) fileIssues.push({,"}),"}) rule,,"}),"}) line: lineNum + 1,,"}),"}) content: line.trim(),,"}),"}) file: filePath,"}),"}) }),"}),"}) }),"}),"}) }),"}),"}) if (fileIssues.length > 0) {,"}),"}) filesWithIssues++,"}),"}) issues.push(...fileIssues),"}),"}) } catch (error) {,"}),"}) }"}),"}) }"}),"}) function walkDir(dir) {,"}),"}) const files = fs.readdirSync(dir),"}),"}) files.forEach(file => {,"}),"}) const filePath = path.join(dir,file),"}),"}) const stat = fs.statSync(filePath),"}),"}) if (stat.isDirectory()) {,"}),"}) if (!shouldIgnoreFile(filePath)) {,"}),"}) walkDir(filePath),"}),"}) } else if (stat.isFile()) {,"}),"}) const ext = path.extname(file),"}),"}) if (extensions.includes(ext)) {,"}),"}) checkFile(filePath),"}),"}) }),"}),"}) function generateReport() {,"}),"}) '),"}),"}) if (issues.length === 0) {,"}),"}) '),"}),"}) return,"}),"}) const issuesByFile = { },"}),"}) issues.forEach(issue => {,"}),"}) if (!issuesByFile[issue.file]) {,"}),"}) issuesByFile[issue.file] = [],"}),"}) issuesByFile[issue.file].push(issue),"}),"}) }),"}),"}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {,"}),"}) fileIssues.forEach(issue => {,"}),"}) }),"}),"}) }),"}),"}) \n📊 Issues by rule: ),"}),"}) const ruleCounts = { },"}),"}) issues.forEach(issue => {,"}),"}) ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"}) }),"}),"}) Object.entries(ruleCounts),"}),"}) .sort(([a],[b]) => b - a),"}),"}) .forEach(([rule,count]) => {,"}),"}) }),"}),"}) function main() {,"}),"}) '),"}),"}) const startTime = Date.now(),"}),"}) walkDir('.'),"}),"}) const endTime = Date.now(),"}),"}) generateReport(),"}),"}) if (issues.length > 0) {,"}),"}) process.exit(1),"}),"}) if (require.main === module) {,"}),"}) main(),"}),"}) module.exports = { checkFile,walkDir,lintRules },"}),"}) }}}}}}}}}}}}})),"}),"}) 'fs'); const path = 'path'); const { execSync } = 'child_process'); const lintRules = {','no-console': /console\.(log|warn|error|info|debug)/g 'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm," 'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,';no-debugger';: /debugger;/g,';no-alert';: /alert\(/g,';no-eval';: /eval\(/g,';no-var';: /var\s+/g,';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,';no-empty-blocks';: /\{\s*\}/g,';no-trailing-spaces';: /[ \t]+$/gm,';no-multiple-empty-lines';: /\n\s*\n\s*\n/g,';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g} const extensions = ['.js',','.jsx','.ts','.tsx']; const ignoreDirs = [','node_modules',';.git',';dist',';build',';.next',';out',';coverage',';temp',';tmp',';logs',';reports',';test-reports',';security-reports',';ci-cd-reports',';link-reports',';broken_files_backup',';temp_backup',';temp_working']; const issues = []; const totalFiles = 0; const filesWithIssues = 0; function shouldIgnoreFile(filePath) {; return ignoreDirs.some(dir => filePath.includes(dir)); function checkFile(filePath) { try {' const content = fs.readFileSync(filePath,'utf8';); const lines = content.split('\n';); totalFiles++; const fileIssues = []; lines.forEach((line,lineNum) => {; Object.entries(lintRules).forEach(([rule,pattern]) => {; if (pattern.test(line)) {; fileIssues.push({; rule,line: lineNum + 1,content: line.trim(),file: filePath})})}); if (fileIssues.length > 0) {; filesWithIssues++; issues.push(...fileIssues)} catch (error) {' } function walkDir(dir) {; const files = fs.readdirSync(dir); files.forEach(file => {; const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; if (!shouldIgnoreFile(filePath)) {; walkDir(filePath)} else if (stat.isFile()) {; const ext = path.extname(file); if (extensions.includes(ext)) { checkFile(filePath)}) function generateReport() {` if (issues.length === 0) {` return; const issuesByFile = { } issues.forEach(issue => {; if (!issuesByFile[issue.file]) {; issuesByFile[issue.file] = []; issuesByFile[issue.file].push(issue)}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {' fileIssues.forEach(issue: => { \n📊 Issues: by rule: ); const ruleCounts = { } issues.forEach(issue => { ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}) Object.entries(ruleCounts); .sort(([a],[b]) => b: - a); .forEach(([rule,count]) => { function: main() { const startTime = Date.now(); walkDir('.')';; const endTime = Date.now(); generateReport(); if: (issues.length > 0) { process.exit(1); if: (require.main === module) { main(); module.exports: = { checkFile,walkDir,lintRules } }}}}}}}}}}}}})); \n📊 Issues by rule: ); const ruleCounts = { } issues.forEach(issue => {; ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}); Object.entries(ruleCounts); .sort(([a],[b]) => b - a); .forEach(([rule,count]) => {` function main() {` const startTime = Date.now(); walkDir('.'); const endTime = Date.now(); generateReport(); if (issues.length > 0) {; process.exit(1); if (require.main === module) {; main(); module.exports = { checkFile,walkDir,lintRules } }}}}}}}}}}}}}));`
=======
========
#!/usr/bin/env node,"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) const { execSync } = require(,"}),"}) 'child_process'),"}),"}) const lintRules = {,"}),"}) 'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"}) 'no-unused-imports': /import\s+[^}]+from\s+[,"}),"}) '"][^'"]+[,"}),"}) '"];?\s*$/gm,,"}),"}) 'no-unused-vars,"}),"}) ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"}) 'no-debugger,"}),"}) ': /debugger;/g,,"}),"}) 'no-alert,"}),"}) ': /alert\(/g,,"}),"}) 'no-eval,"}),"}) ': /eval\(/g,,"}),"}) 'no-var,"}),"}) ': /var\s+/g,,"}),"}) 'prefer-const,"}),"}) ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"}) 'no-empty-blocks,"}),"}) ': /\{\s*\}/g,,"}),"}) 'no-trailing-spaces,"}),"}) ': /[ \t]+$/gm,,"}),"}) 'no-multiple-empty-lines,"}),"}) ': /\n\s*\n\s*\n/g,,"}),"}) 'no-unused-jsx-props,"}),"}) ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"}) },"}),"}) const extensions = ['.js,"}),"}) ','.jsx,"}),"}) ','.ts,"}),"}) ','.tsx,"}),"}) '],"}),"}) const ignoreDirs = [,"}),"}) 'node_modules,"}),"}) ',,"}),"}) '.git,"}),"}) ',,"}),"}) 'dist,"}),"}) ',,"}),"}) 'build,"}),"}) ',,"}),"}) '.next,"}),"}) ',,"}),"}) 'out,"}),"}) ',,"}),"}) 'coverage,"}),"}) ',,"}),"}) 'temp,"}),"}) ',,"}),"}) 'tmp,"}),"}) ',,"}),"}) 'logs,"}),"}) ',,"}),"}) 'reports,"}),"}) ',,"}),"}) 'test-reports,"}),"}) ',,"}),"}) 'security-reports,"}),"}) ',,"}),"}) 'ci-cd-reports,"}),"}) ',,"}),"}) 'link-reports,"}),"}) ',,"}),"}) 'broken_files_backup,"}),"}) ',,"}),"}) 'temp_backup,"}),"}) ',,"}),"}) 'temp_working,"}),"}) ',"}),"}) ],"}),"}) const issues = [],"}),"}) const totalFiles = 0,"}),"}) const filesWithIssues = 0,"}),"}) function shouldIgnoreFile(filePath) {,"}),"}) return ignoreDirs.some(dir => filePath.includes(dir)),"}),"}) function checkFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,'utf8,"}),"}) '),"}),"}) const lines = content.split('\n,"}),"}) '),"}),"}) totalFiles++,"}),"}) const fileIssues = [],"}),"}) lines.forEach((line,lineNum) => {,"}),"}) Object.entries(lintRules).forEach(([rule,pattern]) => {,"}),"}) if (pattern.test(line)) {,"}),"}) fileIssues.push({,"}),"}) rule,,"}),"}) line: lineNum + 1,,"}),"}) content: line.trim(),,"}),"}) file: filePath,"}),"}) }),"}),"}) }),"}),"}) }),"}),"}) if (fileIssues.length > 0) {,"}),"}) filesWithIssues++,"}),"}) issues.push(...fileIssues),"}),"}) } catch (error) {,"}),"}) }"}),"}) }"}),"}) function walkDir(dir) {,"}),"}) const files = fs.readdirSync(dir),"}),"}) files.forEach(file => {,"}),"}) const filePath = path.join(dir,file),"}),"}) const stat = fs.statSync(filePath),"}),"}) if (stat.isDirectory()) {,"}),"}) if (!shouldIgnoreFile(filePath)) {,"}),"}) walkDir(filePath),"}),"}) } else if (stat.isFile()) {,"}),"}) const ext = path.extname(file),"}),"}) if (extensions.includes(ext)) {,"}),"}) checkFile(filePath),"}),"}) }),"}),"}) function generateReport() {,"}),"}) '),"}),"}) if (issues.length === 0) {,"}),"}) '),"}),"}) return,"}),"}) const issuesByFile = { },"}),"}) issues.forEach(issue => {,"}),"}) if (!issuesByFile[issue.file]) {,"}),"}) issuesByFile[issue.file] = [],"}),"}) issuesByFile[issue.file].push(issue),"}),"}) }),"}),"}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {,"}),"}) fileIssues.forEach(issue => {,"}),"}) }),"}),"}) }),"}),"}) \n📊 Issues by rule: ),"}),"}) const ruleCounts = { },"}),"}) issues.forEach(issue => {,"}),"}) ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"}) }),"}),"}) Object.entries(ruleCounts),"}),"}) .sort(([a],[b]) => b - a),"}),"}) .forEach(([rule,count]) => {,"}),"}) }),"}),"}) function main() {,"}),"}) '),"}),"}) const startTime = Date.now(),"}),"}) walkDir('.'),"}),"}) const endTime = Date.now(),"}),"}) generateReport(),"}),"}) if (issues.length > 0) {,"}),"}) process.exit(1),"}),"}) if (require.main === module) {,"}),"}) main(),"}),"}) module.exports = { checkFile,walkDir,lintRules },"}),"}) }}}}}}}}}}}}})),"}),"}) 'fs'); const path = 'path'); const { execSync } = 'child_process'); const lintRules = {','no-console': /console\.(log|warn|error|info|debug)/g 'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm," 'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,';no-debugger';: /debugger;/g,';no-alert';: /alert\(/g,';no-eval';: /eval\(/g,';no-var';: /var\s+/g,';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,';no-empty-blocks';: /\{\s*\}/g,';no-trailing-spaces';: /[ \t]+$/gm,';no-multiple-empty-lines';: /\n\s*\n\s*\n/g,';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g} const extensions = ['.js',','.jsx','.ts','.tsx']; const ignoreDirs = [','node_modules',';.git',';dist',';build',';.next',';out',';coverage',';temp',';tmp',';logs',';reports',';test-reports',';security-reports',';ci-cd-reports',';link-reports',';broken_files_backup',';temp_backup',';temp_working']; const issues = []; const totalFiles = 0; const filesWithIssues = 0; function shouldIgnoreFile(filePath) {; return ignoreDirs.some(dir => filePath.includes(dir)); function checkFile(filePath) { try {' const content = fs.readFileSync(filePath,'utf8';); const lines = content.split('\n';); totalFiles++; const fileIssues = []; lines.forEach((line,lineNum) => {; Object.entries(lintRules).forEach(([rule,pattern]) => {; if (pattern.test(line)) {; fileIssues.push({; rule,line: lineNum + 1,content: line.trim(),file: filePath})})}); if (fileIssues.length > 0) {; filesWithIssues++; issues.push(...fileIssues)} catch (error) {' } function walkDir(dir) {; const files = fs.readdirSync(dir); files.forEach(file => {; const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; if (!shouldIgnoreFile(filePath)) {; walkDir(filePath)} else if (stat.isFile()) {; const ext = path.extname(file); if (extensions.includes(ext)) { checkFile(filePath)}) function generateReport() {` if (issues.length === 0) {` return; const issuesByFile = { } issues.forEach(issue => {; if (!issuesByFile[issue.file]) {; issuesByFile[issue.file] = []; issuesByFile[issue.file].push(issue)}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {' fileIssues.forEach(issue: => { \n📊 Issues: by rule: ); const ruleCounts = { } issues.forEach(issue => { ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}) Object.entries(ruleCounts); .sort(([a],[b]) => b: - a); .forEach(([rule,count]) => { function: main() { const startTime = Date.now(); walkDir('.')';; const endTime = Date.now(); generateReport(); if: (issues.length > 0) { process.exit(1); if: (require.main === module) { main(); module.exports: = { checkFile,walkDir,lintRules } }}}}}}}}}}}}})); \n📊 Issues by rule: ); const ruleCounts = { } issues.forEach(issue => {; ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}); Object.entries(ruleCounts); .sort(([a],[b]) => b - a); .forEach(([rule,count]) => {` function main() {` const startTime = Date.now(); walkDir('.'); const endTime = Date.now(); generateReport(); if (issues.length > 0) {; process.exit(1); if (require.main === module) {; main(); module.exports = { checkFile,walkDir,lintRules } }}}}}}}}}}}}}));`
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:scripts/lint-checker.js
#!/usr/bin/env node,"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) const { execSync } = require(,"}),"}) 'child_process'),"}),"}) const lintRules = {,"}),"}) 'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"}) 'no-unused-imports': /import\s+[^}]+from\s+[,"}),"}) '"][^'"]+[,"}),"}) '"];?\s*$/gm,,"}),"}) 'no-unused-vars,"}),"}) ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"}) 'no-debugger,"}),"}) ': /debugger;/g,,"}),"}) 'no-alert,"}),"}) ': /alert\(/g,,"}),"}) 'no-eval,"}),"}) ': /eval\(/g,,"}),"}) 'no-var,"}),"}) ': /var\s+/g,,"}),"}) 'prefer-const,"}),"}) ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"}) 'no-empty-blocks,"}),"}) ': /\{\s*\}/g,,"}),"}) 'no-trailing-spaces,"}),"}) ': /[ \t]+$/gm,,"}),"}) 'no-multiple-empty-lines,"}),"}) ': /\n\s*\n\s*\n/g,,"}),"}) 'no-unused-jsx-props,"}),"}) ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"}) },"}),"}) const extensions = ['.js,"}),"}) ','.jsx,"}),"}) ','.ts,"}),"}) ','.tsx,"}),"}) '],"}),"}) const ignoreDirs = [,"}),"}) 'node_modules,"}),"}) ',,"}),"}) '.git,"}),"}) ',,"}),"}) 'dist,"}),"}) ',,"}),"}) 'build,"}),"}) ',,"}),"}) '.next,"}),"}) ',,"}),"}) 'out,"}),"}) ',,"}),"}) 'coverage,"}),"}) ',,"}),"}) 'temp,"}),"}) ',,"}),"}) 'tmp,"}),"}) ',,"}),"}) 'logs,"}),"}) ',,"}),"}) 'reports,"}),"}) ',,"}),"}) 'test-reports,"}),"}) ',,"}),"}) 'security-reports,"}),"}) ',,"}),"}) 'ci-cd-reports,"}),"}) ',,"}),"}) 'link-reports,"}),"}) ',,"}),"}) 'broken_files_backup,"}),"}) ',,"}),"}) 'temp_backup,"}),"}) ',,"}),"}) 'temp_working,"}),"}) ',"}),"}) ],"}),"}) const issues = [],"}),"}) const totalFiles = 0,"}),"}) const filesWithIssues = 0,"}),"}) function shouldIgnoreFile(filePath) {,"}),"}) return ignoreDirs.some(dir => filePath.includes(dir)),"}),"}) function checkFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,'utf8,"}),"}) '),"}),"}) const lines = content.split('\n,"}),"}) '),"}),"}) totalFiles++,"}),"}) const fileIssues = [],"}),"}) lines.forEach((line,lineNum) => {,"}),"}) Object.entries(lintRules).forEach(([rule,pattern]) => {,"}),"}) if (pattern.test(line)) {,"}),"}) fileIssues.push({,"}),"}) rule,,"}),"}) line: lineNum + 1,,"}),"}) content: line.trim(),,"}),"}) file: filePath,"}),"}) }),"}),"}) }),"}),"}) }),"}),"}) if (fileIssues.length > 0) {,"}),"}) filesWithIssues++,"}),"}) issues.push(...fileIssues),"}),"}) } catch (error) {,"}),"}) }"}),"}) }"}),"}) function walkDir(dir) {,"}),"}) const files = fs.readdirSync(dir),"}),"}) files.forEach(file => {,"}),"}) const filePath = path.join(dir,file),"}),"}) const stat = fs.statSync(filePath),"}),"}) if (stat.isDirectory()) {,"}),"}) if (!shouldIgnoreFile(filePath)) {,"}),"}) walkDir(filePath),"}),"}) } else if (stat.isFile()) {,"}),"}) const ext = path.extname(file),"}),"}) if (extensions.includes(ext)) {,"}),"}) checkFile(filePath),"}),"}) }),"}),"}) function generateReport() {,"}),"}) '),"}),"}) if (issues.length === 0) {,"}),"}) '),"}),"}) return,"}),"}) const issuesByFile = { },"}),"}) issues.forEach(issue => {,"}),"}) if (!issuesByFile[issue.file]) {,"}),"}) issuesByFile[issue.file] = [],"}),"}) issuesByFile[issue.file].push(issue),"}),"}) }),"}),"}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {,"}),"}) fileIssues.forEach(issue => {,"}),"}) }),"}),"}) }),"}),"}) \n📊 Issues by rule: ),"}),"}) const ruleCounts = { },"}),"}) issues.forEach(issue => {,"}),"}) ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"}) }),"}),"}) Object.entries(ruleCounts),"}),"}) .sort(([a],[b]) => b - a),"}),"}) .forEach(([rule,count]) => {,"}),"}) }),"}),"}) function main() {,"}),"}) '),"}),"}) const startTime = Date.now(),"}),"}) walkDir('.'),"}),"}) const endTime = Date.now(),"}),"}) generateReport(),"}),"}) if (issues.length > 0) {,"}),"}) process.exit(1),"}),"}) if (require.main === module) {,"}),"}) main(),"}),"}) module.exports = { checkFile,walkDir,lintRules },"}),"}) }}}}}}}}}}}}})),"}),"}) 'fs'); const path = 'path'); const { execSync } = 'child_process'); const lintRules = {','no-console': /console\.(log|warn|error|info|debug)/g 'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm," 'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,';no-debugger';: /debugger;/g,';no-alert';: /alert\(/g,';no-eval';: /eval\(/g,';no-var';: /var\s+/g,';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,';no-empty-blocks';: /\{\s*\}/g,';no-trailing-spaces';: /[ \t]+$/gm,';no-multiple-empty-lines';: /\n\s*\n\s*\n/g,';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g} const extensions = ['.js',','.jsx','.ts','.tsx']; const ignoreDirs = [','node_modules',';.git',';dist',';build',';.next',';out',';coverage',';temp',';tmp',';logs',';reports',';test-reports',';security-reports',';ci-cd-reports',';link-reports',';broken_files_backup',';temp_backup',';temp_working']; const issues = []; const totalFiles = 0; const filesWithIssues = 0; function shouldIgnoreFile(filePath) {; return ignoreDirs.some(dir => filePath.includes(dir)); function checkFile(filePath) { try {' const content = fs.readFileSync(filePath,'utf8';); const lines = content.split('\n';); totalFiles++; const fileIssues = []; lines.forEach((line,lineNum) => {; Object.entries(lintRules).forEach(([rule,pattern]) => {; if (pattern.test(line)) {; fileIssues.push({; rule,line: lineNum + 1,content: line.trim(),file: filePath})})}); if (fileIssues.length > 0) {; filesWithIssues++; issues.push(...fileIssues)} catch (error) {' } function walkDir(dir) {; const files = fs.readdirSync(dir); files.forEach(file => {; const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; if (!shouldIgnoreFile(filePath)) {; walkDir(filePath)} else if (stat.isFile()) {; const ext = path.extname(file); if (extensions.includes(ext)) { checkFile(filePath)}) function generateReport() {` if (issues.length === 0) {` return; const issuesByFile = { } issues.forEach(issue => {; if (!issuesByFile[issue.file]) {; issuesByFile[issue.file] = []; issuesByFile[issue.file].push(issue)}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {' fileIssues.forEach(issue: => { \n📊 Issues: by rule: ); const ruleCounts = { } issues.forEach(issue => { ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}) Object.entries(ruleCounts); .sort(([a],[b]) => b: - a); .forEach(([rule,count]) => { function: main() { const startTime = Date.now(); walkDir('.')';; const endTime = Date.now(); generateReport(); if: (issues.length > 0) { process.exit(1); if: (require.main === module) { main(); module.exports: = { checkFile,walkDir,lintRules } }}}}}}}}}}}}})); \n📊 Issues by rule: ); const ruleCounts = { } issues.forEach(issue => {; ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}); Object.entries(ruleCounts); .sort(([a],[b]) => b - a); .forEach(([rule,count]) => {` function main() {` const startTime = Date.now(); walkDir('.'); const endTime = Date.now(); generateReport(); if (issues.length > 0) {; process.exit(1); if (require.main === module) {; main(); module.exports = { checkFile,walkDir,lintRules } }}}}}}}}}}}}}));`
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}}}}}}}}}}}}}));`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
