const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JavaScript/TypeScript syntax errors
function fixJSSyntax(content) {
  let fixed = content;
  
  // Fix broken array syntax
  fixed = fixed.replace(/const\s+\w+\s*=\s*\[\s*{\s*([^}]+)\s*},\s*{\s*([^}]+)\s*},\s*{\s*([^}]+)\s*}\s*\]/g, (match, item1, item2, item3) => {
    return `const services = [
    {
      ${item1.trim()}
    },
    {
      ${item2.trim()}
    },
    {
      ${item3.trim()}
    }
  ]`;
  });
  
  // Fix broken array syntax with missing brackets
  fixed = fixed.replace(/const\s+\w+\s*=\s*\[\s*{\s*([^}]+)\s*},\s*{\s*([^}]+)\s*},\s*{\s*([^}]+)\s*}\s*\]/g, (match, item1, item2, item3) => {
    return `const services = [
    {
      ${item1.trim()}
    },
    {
      ${item2.trim()}
    },
    {
      ${item3.trim()}
    }
  ]`;
  });
  
  // Fix array syntax with missing opening bracket
  fixed = fixed.replace(/const\s+\w+\s*=\s*\[\s*{\s*([^}]+)\s*},\s*{\s*([^}]+)\s*},\s*{\s*([^}]+)\s*}\s*\]/g, (match, item1, item2, item3) => {
    return `const services = [
    {
      ${item1.trim()}
    },
    {
      ${item2.trim()}
    },
    {
      ${item3.trim()}
    }
  ]`;
  });
  
  // Fix specific broken patterns
  fixed = fixed.replace(/const\s+\w+\s*=\s*\[\s*{\s*([^}]+)\s*},\s*{\s*([^}]+)\s*},\s*{\s*([^}]+)\s*}\s*\]/g, (match, item1, item2, item3) => {
    return `const services = [
    {
      ${item1.trim()}
    },
    {
      ${item2.trim()}
    },
    {
      ${item3.trim()}
    }
  ]`;
  });
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/,\s*;\s*}/g, '\n  }');
  fixed = fixed.replace(/,\s*;\s*]/g, '\n  ]');
  fixed = fixed.replace(/,\s*;\s*\)/g, '\n  )');
  
  // Fix specific broken array patterns
  fixed = fixed.replace(/const\s+\w+\s*=\s*\[\s*{\s*([^}]+)\s*},\s*{\s*([^}]+)\s*},\s*{\s*([^}]+)\s*}\s*\]/g, (match, item1, item2, item3) => {
    return `const services = [
    {
      ${item1.trim()}
    },
    {
      ${item2.trim()}
    },
    {
      ${item3.trim()}
    }
  ]`;
  });
  
  return fixed;
}

// Main function to process files
function processFiles() {
  const files = glob.sync('app/**/*.tsx', { cwd: __dirname });
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let processedCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    try {
      const filePath = path.join(__dirname, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has syntax issues
      if (content.includes('const services = []') || content.includes('const services = [') || content.includes('const features = []') || content.includes('const features = [')) {
        console.log(`Fixing syntax in ${file}`);
        content = fixJSSyntax(content);
        fs.writeFileSync(filePath, content, 'utf8');
      }
      
      processedCount++;
      
      if (processedCount % 50 === 0) {
        console.log(`Processed ${processedCount} files...`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  });
  
  console.log(`\nProcessing complete!`);
  console.log(`Files processed: ${processedCount}`);
  console.log(`Errors: ${errorCount}`);
}

// Run the fix
processFiles();