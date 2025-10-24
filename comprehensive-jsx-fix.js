const fs = require('fs');
const path = require('path');

function fixJSXComprehensive(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix the main JSX structure issue - replace malformed return statements
    content = content.replace(
      /return \(\s*<div><\/div>\s*<Head>/g,
      'return (\n    <div>\n      <Head>'
    );
    
    // Fix other malformed JSX structures
    content = content.replace(
      /<div><\/div>\s*<Head>/g,
      '<div>\n      <Head>'
    );
    
    content = content.replace(
      /<div><\/div>\s*<div/g,
      '<div>\n      <div'
    );
    
    content = content.replace(
      /<div><\/div>\s*<section/g,
      '<div>\n      <section'
    );
    
    content = content.replace(
      /<div><\/div>\s*<main/g,
      '<div>\n      <main'
    );
    
    content = content.replace(
      /<div><\/div>\s*<header/g,
      '<div>\n      <header'
    );
    
    content = content.replace(
      /<div><\/div>\s*<footer/g,
      '<div>\n      <footer'
    );
    
    // Fix missing closing tags
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1></section>');
    content = content.replace(/<main([^>]*)>\s*$/gm, '<main$1></main>');
    content = content.replace(/<article([^>]*)>\s*$/gm, '<article$1></article>');
    content = content.replace(/<header([^>]*)>\s*$/gm, '<header$1></header>');
    content = content.replace(/<footer([^>]*)>\s*$/gm, '<footer$1></footer>');
    content = content.replace(/<nav([^>]*)>\s*$/gm, '<nav$1></nav>');
    content = content.replace(/<aside([^>]*)>\s*$/gm, '<aside$1></aside>');
    
    // Fix JSX fragments
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
    
    // Fix missing semicolons in JSX
    content = content.replace(/(\w+);\s*$/gm, '$1');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n'.repeat(openBraces - closeBraces) + '}';
    }
    
    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
    }
    
    // Fix missing closing brackets
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {
      content += ']'.repeat(openBrackets - closeBrackets);
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
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
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      fixJSXComprehensive(filePath);
    }
  }
}

// Start fixing from the app directory
findAndFixFiles('./app');
findAndFixFiles('./components');
findAndFixFiles('./src');

console.log('Comprehensive JSX fixing completed!');
