
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

    try {
      const tsResult = execSync('npx tsc --noEmit' {
        encoding: 'utf8',
        stdio: 'pipe',

      });

    // 2. Detect linting errors;
    console.log('🔍 Detecting linting errors...');
    try {;
      const lintResult = execSync('npm run lint' {;
        encoding: 'utf8',;
        stdio: 'pipe',});

    // 3. Detect build errors;
    console.log('🔍 Detecting build errors...');
    try {;
      const buildResult = execSync('npm run build' {;
        encoding: 'utf8',;
        stdio: 'pipe',});

    // 4. Detect dependency issues;
    console.log('🔍 Detecting dependency issues...');
    try {;
      const auditResult = execSync('npm audit --json' {;
        encoding: 'utf8',;
        stdio: 'pipe',});
      const auditData = JSON.parse(auditResult);
      errors.dependencies = parseDependencyIssues(auditData);

    fs.writeFileSync(reportPath, JSON.stringify(errors, null, 2));
;
    console.log(✅ Error detection completed. Found:);console.log(   - ${errors.typescript.length} TypeScript errors``);console.log(`   - ${errors.linting.length} linting errors`);console.log(`   - ${errors.build.length} build errors`);console.log(`   - ${errors.dependencies.length} dependency issues`);console.log(`   - ${errors.syntax.length} syntax errors`);console.log(`📊 Report saved to: ${reportPath}`);
;
    return errors;

    return errors}
}
;
function parseTypeScriptErrors(output) {;
  const errors = [];

      const match = line.match(/(.+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
      if (match) {;
        errors.push({;
          file: match[1].trim(),;
          line: parseInt(match[2]),;
          column: parseInt(match[3]),;
          message: match[4].trim(),;
          type: 'typescript',})}
    }
  }
;
  return errors}
;
function parseLintingErrors(output) {;
  const errors = [];
  const lines = output.split('\n');
;
  for (const line of lines) {;
    if (;
      line.includes('error') &&;
      (line.includes('.tsx') ||;
        line.includes('.ts') ||;
        line.includes('.jsx') ||;
        line.includes('.js'));
    ) {;
      const match = line.match(/(.+):(\d+):(\d+)\s*-\s*(.+)/);
      if (match) {;
        errors.push({;
          file: match[1].trim(),;
          line: parseInt(match[2]),;
          column: parseInt(match[3]),;
          message: match[4].trim(),;
          type: 'linting',})}
    }
  }
;
  return errors}
;
function parseBuildErrors(output) {;
  const errors = [];
  const lines = output.split('\n');
;
  for (const line of lines) {;
    if (;
      line.includes('Failed to compile') ||;
      line.includes('Type error') ||;
      line.includes('Cannot find module');
    ) {;
      errors.push({;
        message: line.trim(),;
        type: 'build',})}
  }
;
  return errors}
;
function parseDependencyIssues(auditData) {;
  const issues = []})}
  }
;
  return issues}
;
async function detectSyntaxErrors() {;
  const errors = [];
  const sourceDirs = ['src', 'components', 'pages', 'utils', 'hooks'];
;
  for (const dir of sourceDirs) {;
    if (fs.existsSync(dir)) {;
      const files = getAllFiles(dir)})}
        }
      }
    }
  }
;
  return errors}
;
function getAllFiles(dir) {;
  const files = [];
;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);

      const stat = fs.statSync(fullPath);
;
      if (stat.isDirectory()) {;
        traverse(fullPath)} else {;
        files.push(fullPath)}
    }
  }
;
  traverse(dir);
  return files}

  // Check for common syntax issues;
  const lines = content.split('\n');
;
  for (let i = 0; i < lines.length; i++) {;
    const line = lines[i];
    const lineNumber = i + 1;

    // Check for unmatched brackets;
    const openBrackets = (line.match(/\{/g) || []).length;
    const closeBrackets = (line.match(/\}/g) || []).length;
    const openParens = (line.match(/\(/g) || []).length;
    const closeParens = (line.match(/\)/g) || []).length;
;
    if (openBrackets !== closeBrackets || openParens !== closeParens) {;
      errors.push({;
        file: filePath,;
        line: lineNumber,;
        message: 'Potential unmatched brackets or parentheses',;
        type: 'syntax',})}

      })}
  }
;
  return errors}

      process.exit(0)});
    .catch(error => {;
      console.error('❌ Error detection failed:', error);
      process.exit(1)})}
;
module.exports = { detectAllErrors };
