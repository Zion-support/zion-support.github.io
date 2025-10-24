const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX with duplicate closing tags
    const duplicateClosingTagPattern = /<([^>]+)><\/\1>/g;
    if (duplicateClosingTagPattern.test(content)) {
      content = content.replace(duplicateClosingTagPattern, '<$1></$1>');
      modified = true;
    }

    // Fix malformed self-closing tags
    const selfClosingPattern = /<([^>]+)><\/\1>/g;
    if (selfClosingPattern.test(content)) {
      content = content.replace(selfClosingPattern, '<$1 />');
      modified = true;
    }

    // Fix malformed JSX with duplicate className
    const duplicateClassNamePattern = /<([^>]+)><\/\1 className="[^"]*">/g;
    if (duplicateClassNamePattern.test(content)) {
      content = content.replace(duplicateClassNamePattern, '<$1></$1>');
      modified = true;
    }

    // Fix malformed JSX with duplicate attributes
    const duplicateAttrPattern = /<([^>]+)><\/\1 [^>]*>/g;
    if (duplicateAttrPattern.test(content)) {
      content = content.replace(duplicateAttrPattern, '<$1></$1>');
      modified = true;
    }

    // Fix malformed JSX fragments
    const malformedFragmentPattern = /<>\s*<\/>/g;
    if (malformedFragmentPattern.test(content)) {
      content = content.replace(malformedFragmentPattern, '<></>');
      modified = true;
    }

    // Fix malformed function parameters
    const malformedParamsPattern = /,\s*\)\s*{/g;
    if (malformedParamsPattern.test(content)) {
      content = content.replace(malformedParamsPattern, ') {');
      modified = true;
    }

    // Fix malformed JSX with extra closing tags
    const extraClosingPattern = /<\/div><\/div>/g;
    if (extraClosingPattern.test(content)) {
      content = content.replace(extraClosingPattern, '</div>');
      modified = true;
    }

    // Fix malformed JSX with malformed closing tags
    const malformedClosingPattern = /<\/div><\/\/div>/g;
    if (malformedClosingPattern.test(content)) {
      content = content.replace(malformedClosingPattern, '</div>');
      modified = true;
    }

    // Fix malformed JSX with duplicate Navigation tags
    const duplicateNavPattern = /<Navigation \/><\/Navigation \/>/g;
    if (duplicateNavPattern.test(content)) {
      content = content.replace(duplicateNavPattern, '<Navigation />');
      modified = true;
    }

    // Fix malformed JSX with duplicate div tags
    const duplicateDivPattern = /<div className="[^"]*"><\/div className="[^"]*">/g;
    if (duplicateDivPattern.test(content)) {
      content = content.replace(duplicateDivPattern, '<div className="$1"></div>');
      modified = true;
    }

    // Fix malformed JSX with duplicate section tags
    const duplicateSectionPattern = /<section className="[^"]*"><\/section className="[^"]*">/g;
    if (duplicateSectionPattern.test(content)) {
      content = content.replace(duplicateSectionPattern, '<section className="$1"></section>');
      modified = true;
    }

    // Fix malformed JSX with duplicate closing tags in general
    const generalDuplicatePattern = /<([^>]+)><\/\1 [^>]*>/g;
    if (generalDuplicatePattern.test(content)) {
      content = content.replace(generalDuplicatePattern, '<$1></$1>');
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
console.log('Starting JSX error fixes...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);