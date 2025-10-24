const fs = require('fs');
const path = require('path');

// Function to fix servicesData.ts
function fixServicesData(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing commas in array elements
    content = content.replace(/(\w+)\s*\n\s*"([^"]*)"/g, '$1,\n      "$2"');
    content = content.replace(/"([^"]*)"\s*\n\s*"([^"]*)"/g, '"$1",\n      "$2"');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2:');
    
    // Fix specific patterns
    content = content.replace(/(\w+)\s*\n\s*\[/g, '$1,\n    [');
    content = content.replace(/(\w+)\s*\n\s*{/g, '$1,\n    {');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed servicesData: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix JSX syntax in page files
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the specific issue with return statement and JSX
    if (content.includes('return (<>\n') && content.includes('<Head>')) {
      // Add proper spacing and structure
      content = content.replace(
        /return \(<>\n\s*<Head>/g,
        'return (\n    <>\n      <Head>'
      );
      modified = true;
    }

    // Fix missing closing tags for JSX fragments
    if (content.includes('return (<>\n') && !content.includes('</>')) {
      const lastDivIndex = content.lastIndexOf('</div>');
      if (lastDivIndex !== -1) {
        const beforeLastDiv = content.substring(0, lastDivIndex);
        const afterLastDiv = content.substring(lastDivIndex);
        
        if (!beforeLastDiv.includes('</>') && !afterLastDiv.includes('</>')) {
          content = beforeLastDiv + afterLastDiv.replace('</div>', '</div>\n    </>');
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix servicesData.ts
fixServicesData('/workspace/app/data/servicesData.ts');

// Fix page.tsx
fixJSXSyntax('/workspace/app/page.tsx');

console.log('Syntax fixes completed');