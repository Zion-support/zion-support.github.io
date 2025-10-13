const fs = require('fs');

function checkJSX(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Simple JSX tag matching
  const openTags = [];
  const tagRegex = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)[^>]*>/g;
  let match;
  
  while ((match = tagRegex.exec(content)) !== null) {
    const isClosing = match[1] === '/';
    const tagName = match[2];
    
    if (isClosing) {
      if (openTags.length === 0) {
        console.log(`Unexpected closing tag: ${tagName} at position ${match.index}`);
        return false;
      }
      const lastOpen = openTags.pop();
      if (lastOpen !== tagName) {
        console.log(`Mismatched tags: expected </${lastOpen}> but found </${tagName}> at position ${match.index}`);
        return false;
      }
    } else if (!tagName.match(/^(br|hr|img|input|meta|link)$/)) {
      // Self-closing tags
      if (!match[0].endsWith('/>')) {
        openTags.push(tagName);
      }
    }
  }
  
  if (openTags.length > 0) {
    console.log(`Unclosed tags: ${openTags.join(', ')}`);
    return false;
  }
  
  return true;
}

const filePath = process.argv[2];
if (filePath) {
  checkJSX(filePath);
} else {
  console.log('Usage: node check_jsx.js <file_path>');
}