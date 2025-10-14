const fs = require('fs');
const path = require('path');

function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements with extra semicolons
    const importFix = content.replace(/import\s+.*?from\s+['"][^'"]*['"];';';/g, (match) => {
      return match.replace(/;';';$/, ';');
    });

    if (importFix !== content) {
      content = importFix;
      modified = true;
    }

    // Fix JSX with extra semicolons and quotes
    const jsxFix = content.replace(/className="[^"]*">";";/g, (match) => {
      return match.replace(/>";";$/, '>');
    });

    if (jsxFix !== content) {
      content = jsxFix;
      modified = true;
    }

    // Fix other common patterns
    const commonFixes = content
      .replace(/>";";/g, '>')
      .replace(/";";/g, ';')
      .replace(/;';';/g, ';')
      .replace(/className="[^"]*">";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/content="[^"]*">";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<h1[^>]*>[^<]*<\/h1>";/g, (match) => match.replace(/<\/h1>";$/, '</h1>'))
      .replace(/<p[^>]*>[^<]*<\/p>";/g, (match) => match.replace(/<\/p>";$/, '</p>'))
      .replace(/<div[^>]*>[^<]*<\/div>";/g, (match) => match.replace(/<\/div>";$/, '</div>'))
      .replace(/<title[^>]*>[^<]*<\/title>";/g, (match) => match.replace(/<\/title>";$/, '</title>'))
      .replace(/<meta[^>]*\/>";/g, (match) => match.replace(/\/>";$/, '/>'))
      .replace(/<link[^>]*\/>";/g, (match) => match.replace(/\/>";$/, '/>'))
      .replace(/<script[^>]*>.*?<\/script>";/g, (match) => match.replace(/<\/script>";$/, '</script>'))
      .replace(/<Helmet[^>]*>.*?<\/Helmet>";/g, (match) => match.replace(/<\/Helmet>";$/, '</Helmet>'))
      .replace(/<React\.Fragment[^>]*>.*?<\/React\.Fragment>";/g, (match) => match.replace(/<\/React\.Fragment>";$/, '</React.Fragment>'))
      .replace(/<Fragment[^>]*>.*?<\/Fragment>";/g, (match) => match.replace(/<\/Fragment>";$/, '</Fragment>'))
      .replace(/<div[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<h1[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<p[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<span[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<a[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<button[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<ul[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<li[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<nav[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<header[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<footer[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<main[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<section[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<article[^>]*>";/g, (match) => match.replace(/>";$/, '>'))
      .replace(/<aside[^>]*>";/g, (match) => match.replace(/>";$/, '>'));

    if (commonFixes !== content) {
      content = commonFixes;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixImportsInFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

console.log('Starting to fix import and JSX syntax errors...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed ${fixedCount} files`);