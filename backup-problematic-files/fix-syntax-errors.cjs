const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');



    content = content.replace(/
    
    // Fix missing semicolons in imports
    content = content.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');
    
    // Fix missing semicolons in exports
    content = content.replace(/export\s+([^;]+)\s*$/gm, 'export $1;');
    
    // Fix JSX syntax errors
    content = content.replace(/<([^>]+)>\s*$/gm, '<$1>');
    
    // Fix TypeScript interface syntax
    content = content.replace(/interface\s+(\w+)\s*\{\s*\}/g, 'interface $1 {}');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n}'.repeat(openBraces - closeBraces);
    }


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {


    return false;
  }
}




      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files;
}



