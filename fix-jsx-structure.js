const fs = require('fs');
const path = require('path');

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed JSX structure
    content = content.replace(/<div><\/div>\s*<Head>/g, '<div>\n      <Head>');
    content = content.replace(/<div><\/div>\s*<div/g, '<div>\n      <div');
    content = content.replace(/<div><\/div>\s*<section/g, '<div>\n      <section');
    content = content.replace(/<div><\/div>\s*<main/g, '<div>\n      <main');
    content = content.replace(/<div><\/div>\s*<header/g, '<div>\n      <header');
    content = content.replace(/<div><\/div>\s*<footer/g, '<div>\n      <footer');
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1>');
    content = content.replace(/<main([^>]*)>\s*$/gm, '<main$1>');
    content = content.replace(/<article([^>]*)>\s*$/gm, '<article$1>');
    content = content.replace(/<header([^>]*)>\s*$/gm, '<header$1>');
    content = content.replace(/<footer([^>]*)>\s*$/gm, '<footer$1>');
    content = content.replace(/<nav([^>]*)>\s*$/gm, '<nav$1>');
    content = content.replace(/<aside([^>]*)>\s*$/gm, '<aside$1>');
    
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
      fixJSXStructure(filePath);
    }
  }
}

// Start fixing from the app directory
findAndFixFiles('./app');
findAndFixFiles('./components');
findAndFixFiles('./src');

console.log('JSX structure fixing completed!');
