const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax issues
function fixJSXSyntax(content) {
  let fixedContent = content;
  
  // Fix className attributes that are missing quotes
  // Pattern: className=value -> className="value"
  fixedContent = fixedContent.replace(/className=([a-zA-Z0-9\-_:\s]+)(?![">\s])/g, (match, value) => {
    // Clean up the value and wrap in quotes
    const cleanValue = value.trim().replace(/\s+/g, ' ');
    return `className="${cleanValue}"`;
  });
  
  // Fix malformed className attributes with extra quotes
  // Pattern: className="value"" -> className="value"
  fixedContent = fixedContent.replace(/className="([^"]*)"+/g, 'className="$1"');
  
  // Fix className attributes that are split across lines
  // Pattern: className=value\n -> className="value"
  fixedContent = fixedContent.replace(/className=([a-zA-Z0-9\-_:\s]+)\n/g, (match, value) => {
    const cleanValue = value.trim().replace(/\s+/g, ' ');
    return `className="${cleanValue}"\n`;
  });
  
  // Fix JSX attributes that are missing quotes
  // Pattern: aria-label=value -> aria-label="value"
  fixedContent = fixedContent.replace(/aria-label=([a-zA-Z0-9\-_\s]+)(?![">\s])/g, (match, value) => {
    const cleanValue = value.trim();
    return `aria-label="${cleanValue}"`;
  });
  
  // Fix value attributes that are missing quotes
  // Pattern: value=value -> value="value"
  fixedContent = fixedContent.replace(/value=([a-zA-Z0-9\-_]+)(?![">\s])/g, (match, value) => {
    return `value="${value}"`;
  });
  
  // Fix src attributes that are missing quotes
  // Pattern: src=value -> src="value"
  fixedContent = fixedContent.replace(/src=([a-zA-Z0-9\-_:\/\?=&]+)(?![">\s])/g, (match, value) => {
    return `src="${value}"`;
  });
  
  // Fix alt attributes that are missing quotes
  // Pattern: alt=value -> alt="value"
  fixedContent = fixedContent.replace(/alt=([a-zA-Z0-9\-_\s]+)(?![">\s])/g, (match, value) => {
    const cleanValue = value.trim();
    return `alt="${cleanValue}"`;
  });
  
  // Fix width and height attributes
  // Pattern: width=40 -> width={40}
  fixedContent = fixedContent.replace(/width=(\d+)/g, 'width={$1}');
  fixedContent = fixedContent.replace(/height=(\d+)/g, 'height={$1}');
  
  // Fix malformed JSX elements
  // Pattern: <div className=value> -> <div className="value">
  fixedContent = fixedContent.replace(/<(\w+)\s+className=([^>]+)>/g, (match, tag, className) => {
    if (!className.includes('"') && !className.includes("'")) {
      const cleanClassName = className.trim().replace(/\s+/g, ' ');
      return `<${tag} className="${cleanClassName}">`;
    }
    return match;
  });
  
  // Fix broken JSX structure where elements are concatenated
  // Pattern: </td>                <td -> </td><td
  fixedContent = fixedContent.replace(/<\/td>\s+<td/g, '</td><td');
  fixedContent = fixedContent.replace(/<\/div>\s+<div/g, '</div><div');
  fixedContent = fixedContent.replace(/<\/button>\s+<button/g, '</button><button');
  fixedContent = fixedContent.replace(/<\/option>\s+<option/g, '</option><option');
  
  // Fix broken className concatenation
  // Pattern: className=value1 value2 -> className="value1 value2"
  fixedContent = fixedContent.replace(/className=([a-zA-Z0-9\-_:\s]+)\s+([a-zA-Z0-9\-_:\s]+)(?![">\s])/g, (match, value1, value2) => {
    const cleanValue = `${value1.trim()} ${value2.trim()}`.replace(/\s+/g, ' ');
    return `className="${cleanValue}"`;
  });
  
  // Fix broken JSX where elements are not properly closed
  // Pattern: <div className=value -> <div className="value">
  fixedContent = fixedContent.replace(/<(\w+)\s+className=([^>]+)(?!>)/g, (match, tag, className) => {
    if (!className.includes('"') && !className.includes("'")) {
      const cleanClassName = className.trim().replace(/\s+/g, ' ');
      return `<${tag} className="${cleanClassName}">`;
    }
    return match;
  });
  
  // Fix broken JSX where attributes are not properly closed
  // Pattern: aria-label=value -> aria-label="value"
  fixedContent = fixedContent.replace(/aria-label=([a-zA-Z0-9\-_\s]+)(?![">\s])/g, (match, value) => {
    const cleanValue = value.trim();
    return `aria-label="${cleanValue}"`;
  });
  
  // Fix broken JSX where className is split
  // Pattern: className=value1\nvalue2 -> className="value1 value2"
  fixedContent = fixedContent.replace(/className=([a-zA-Z0-9\-_:\s]+)\n\s*([a-zA-Z0-9\-_:\s]+)/g, (match, value1, value2) => {
    const cleanValue = `${value1.trim()} ${value2.trim()}`.replace(/\s+/g, ' ');
    return `className="${cleanValue}"`;
  });
  
  // Fix broken JSX where elements are not properly structured
  // Pattern: <div className=value\n -> <div className="value">
  fixedContent = fixedContent.replace(/<(\w+)\s+className=([a-zA-Z0-9\-_:\s]+)\n/g, (match, tag, className) => {
    const cleanClassName = className.trim().replace(/\s+/g, ' ');
    return `<${tag} className="${cleanClassName}">\n`;
  });
  
  // Fix broken JSX where attributes are malformed
  // Pattern: className=value"" -> className="value"
  fixedContent = fixedContent.replace(/className=([a-zA-Z0-9\-_:\s]+)""/g, (match, value) => {
    const cleanValue = value.trim().replace(/\s+/g, ' ');
    return `className="${cleanValue}"`;
  });
  
  // Fix broken JSX where elements are concatenated without proper spacing
  // Pattern: </td><td -> </td> <td
  fixedContent = fixedContent.replace(/<\/td><td/g, '</td> <td');
  fixedContent = fixedContent.replace(/<\/div><div/g, '</div> <div');
  fixedContent = fixedContent.replace(/<\/button><button/g, '</button> <button');
  fixedContent = fixedContent.replace(/<\/option><option/g, '</option> <option');
  
  // Fix broken JSX where elements are not properly closed
  // Pattern: <div className=value -> <div className="value">
  fixedContent = fixedContent.replace(/<(\w+)\s+className=([a-zA-Z0-9\-_:\s]+)(?!>)/g, (match, tag, className) => {
    if (!className.includes('"') && !className.includes("'")) {
      const cleanClassName = className.trim().replace(/\s+/g, ' ');
      return `<${tag} className="${cleanClassName}">`;
    }
    return match;
  });
  
  // Fix broken JSX where elements are not properly structured
  // Pattern: <div className=value\n -> <div className="value">
  fixedContent = fixedContent.replace(/<(\w+)\s+className=([a-zA-Z0-9\-_:\s]+)\n/g, (match, tag, className) => {
    const cleanClassName = className.trim().replace(/\s+/g, ' ');
    return `<${tag} className="${cleanClassName}">\n`;
  });
  
  // Fix broken JSX where attributes are malformed
  // Pattern: className=value"" -> className="value"
  fixedContent = fixedContent.replace(/className=([a-zA-Z0-9\-_:\s]+)""/g, (match, value) => {
    const cleanValue = value.trim().replace(/\s+/g, ' ');
    return `className="${cleanValue}"`;
  });
  
  // Fix broken JSX where elements are concatenated without proper spacing
  // Pattern: </td><td -> </td> <td
  fixedContent = fixedContent.replace(/<\/td><td/g, '</td> <td');
  fixedContent = fixedContent.replace(/<\/div><div/g, '</div> <div');
  fixedContent = fixedContent.replace(/<\/button><button/g, '</button> <button');
  fixedContent = fixedContent.replace(/<\/option><option/g, '</option> <option');
  
  return fixedContent;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/JavaScript files in src/components
function findComponentFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const componentsDir = path.join(__dirname, 'src', 'components');
const files = findComponentFiles(componentsDir);

console.log(`Found ${files.length} component files to process...`);

files.forEach(processFile);

console.log('Done processing files!');