const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed Navigation component
    if (content.includes('<Navigation / />')) {
      content = content.replace(/<Navigation \/ \/>/g, '<Navigation />');
      modified = true;
    }

    // Fix malformed self-closing tags with spaces
    const malformedSelfClosingPattern = /<([^>]+) \/>/g;
    if (malformedSelfClosingPattern.test(content)) {
      content = content.replace(malformedSelfClosingPattern, '<$1 />');
      modified = true;
    }

    // Fix malformed JSX with self-closing tags where there should be opening and closing tags
    const selfClosingDivPattern = /<div className="[^"]*" \/>/g;
    if (selfClosingDivPattern.test(content)) {
      content = content.replace(selfClosingDivPattern, (match) => {
        const className = match.match(/className="([^"]*)"/)?.[1] || '';
        return `<div className="${className}">`;
      });
      modified = true;
    }

    // Fix malformed JSX with self-closing section tags
    const selfClosingSectionPattern = /<section className="[^"]*" \/>/g;
    if (selfClosingSectionPattern.test(content)) {
      content = content.replace(selfClosingSectionPattern, (match) => {
        const className = match.match(/className="([^"]*)"/)?.[1] || '';
        return `<section className="${className}">`;
      });
      modified = true;
    }

    // Fix malformed JSX with self-closing main tags
    const selfClosingMainPattern = /<main className="[^"]*" \/>/g;
    if (selfClosingMainPattern.test(content)) {
      content = content.replace(selfClosingMainPattern, (match) => {
        const className = match.match(/className="([^"]*)"/)?.[1] || '';
        return `<main className="${className}">`;
      });
      modified = true;
    }

    // Fix malformed JSX with self-closing header tags
    const selfClosingHeaderPattern = /<header className="[^"]*" \/>/g;
    if (selfClosingHeaderPattern.test(content)) {
      content = content.replace(selfClosingHeaderPattern, (match) => {
        const className = match.match(/className="([^"]*)"/)?.[1] || '';
        return `<header className="${className}">`;
      });
      modified = true;
    }

    // Fix malformed JSX with self-closing footer tags
    const selfClosingFooterPattern = /<footer className="[^"]*" \/>/g;
    if (selfClosingFooterPattern.test(content)) {
      content = content.replace(selfClosingFooterPattern, (match) => {
        const className = match.match(/className="([^"]*)"/)?.[1] || '';
        return `<footer className="${className}">`;
      });
      modified = true;
    }

    // Fix malformed JSX with self-closing article tags
    const selfClosingArticlePattern = /<article className="[^"]*" \/>/g;
    if (selfClosingArticlePattern.test(content)) {
      content = content.replace(selfClosingArticlePattern, (match) => {
        const className = match.match(/className="([^"]*)"/)?.[1] || '';
        return `<article className="${className}">`;
      });
      modified = true;
    }

    // Fix malformed JSX with self-closing aside tags
    const selfClosingAsidePattern = /<aside className="[^"]*" \/>/g;
    if (selfClosingAsidePattern.test(content)) {
      content = content.replace(selfClosingAsidePattern, (match) => {
        const className = match.match(/className="([^"]*)"/)?.[1] || '';
        return `<aside className="${className}">`;
      });
      modified = true;
    }

    // Fix malformed JSX with self-closing nav tags
    const selfClosingNavPattern = /<nav className="[^"]*" \/>/g;
    if (selfClosingNavPattern.test(content)) {
      content = content.replace(selfClosingNavPattern, (match) => {
        const className = match.match(/className="([^"]*)"/)?.[1] || '';
        return `<nav className="${className}">`;
      });
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Start fixing
console.log('Starting Navigation JSX fixes...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);