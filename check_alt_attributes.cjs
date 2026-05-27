const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else {
      callback(filePath, stat);
    }
  });
}

function checkFileForAlt(filePath) {
  const ext = path.extname(filePath);
  if (ext !== '.tsx' && ext !== '.jsx') {
    return [];
  }
  const content = fs.readFileSync(filePath, 'utf8');
  // Regex to find <img ... /> or <img ...> (but we assume self-closing in JSX)
  // This is a simple regex and might miss some edge cases, but should work for most cases.
  const imgRegex = /<img([^>]*?)\/?>/g;
  let match;
  const issues = [];
  while ((match = imgRegex.exec(content)) !== null) {
    const imgTag = match[0];
    const attrs = match[1];
    // Check if alt attribute is present
    if (!/alt\s*=/.test(attrs)) {
      // Find the line number
      const lines = content.split('\n');
      let lineNumber = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(imgTag)) {
          lineNumber = i + 1;
          break;
        }
      }
      issues.push({
        file: filePath,
        line: lineNumber,
        tag: imgTag.trim()
      });
    }
  }
  return issues;
}

// Main function
function main() {
  const appDir = path.join(__dirname, 'app');
  let totalIssues = 0;
  walkDir(appDir, (filePath) => {
    const issues = checkFileForAlt(filePath);
    if (issues.length > 0) {
      console.log(`\nFile: ${filePath}`);
      issues.forEach(issue => {
        console.log(`  Line ${issue.line}: ${issue.tag}`);
      });
      totalIssues += issues.length;
    }
  });
  console.log(`\nTotal images missing alt attributes: ${totalIssues}`);
  if (totalIssues === 0) {
    console.log('✅ All images have alt attributes!');
  }
}

main();