const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all problematic files
const files = glob.sync('app/**/*.tsx', { cwd: '/workspace' });

console.log(`Found ${files.length} files to check`);

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix JSX attributes missing quotes
  if (content.includes('className=') && !content.includes('className="')) {
    console.log(`Fixing JSX attributes in ${file}`);
    
    // Fix className attributes
    content = content.replace(/className=([^"'\s>]+)/g, 'className="$1"');
    
    // Fix other common attributes
    content = content.replace(/title=([^"'\s>]+)/g, 'title="$1"');
    content = content.replace(/name=([^"'\s>]+)/g, 'name="$1"');
    content = content.replace(/content=([^"'\s>]+)/g, 'content="$1"');
    content = content.replace(/href=([^"'\s>]+)/g, 'href="$1"');
    content = content.replace(/src=([^"'\s>]+)/g, 'src="$1"');
    content = content.replace(/alt=([^"'\s>]+)/g, 'alt="$1"');
    content = content.replace(/type=([^"'\s>]+)/g, 'type="$1"');
    content = content.replace(/placeholder=([^"'\s>]+)/g, 'placeholder="$1"');
    
    modified = true;
  }

  // Fix malformed JSX structure
  if (content.includes('return (') && content.includes('<>') && content.includes('</>')) {
    // Fix JSX fragment issues
    content = content.replace(/<>\s*<Helmet>/g, '<>\n      <Helmet>');
    content = content.replace(/<\/Helmet>\s*<div/g, '</Helmet>\n      <div');
    content = content.replace(/<\/div>\s*<\/>/g, '</div>\n    </>');
    
    modified = true;
  }

  // Fix unterminated strings by adding missing quotes
  const lines = content.split('\n');
  let fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Fix lines that start with a quote but don't end with one
    if (line.match(/^\s*"[^"]*$/)) {
      line = line + '"';
      modified = true;
    }
    
    // Fix malformed JSX attributes
    line = line.replace(/className=([^"'\s>]+)/g, 'className="$1"');
    line = line.replace(/title=([^"'\s>]+)/g, 'title="$1"');
    line = line.replace(/name=([^"'\s>]+)/g, 'name="$1"');
    line = line.replace(/content=([^"'\s>]+)/g, 'content="$1"');
    
    fixedLines.push(line);
  }
  
  if (fixedLines.length > 0) {
    content = fixedLines.join('\n');
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});

console.log('JSX attributes fixes completed');