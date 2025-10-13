
// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix missing commas in object literals and arrays
    // Look for patterns like: key: value\n  key2: value2
    content = content.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*[^,\n}]+)\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1,\n  $2');
    
    // Fix missing commas in JSX props
    content = content.replace(/(\w+="[^"]*")\n\s*(\w+=)/g, '$1\n  $2');
    content = content.replace(/(\w+={[^}]*})\n\s*(\w+=)/g, '$1\n  $2');
    
    // Fix incomplete function calls - add missing closing parentheses
    // Look for patterns like: lazy(() => import("./path/page")\nconst
    content = content.replace(/lazy\(\(\) => import\("([^"]+)"\)\n\s*const/g, 'lazy(() => import("$1")),\nconst');
    
    // Fix missing closing parentheses in lazy imports
    content = content.replace(/lazy\(\(\) => import\("([^"]+)"\)\n\s*([a-zA-Z_$])/g, 'lazy(() => import("$1")),\n$2');
    
    // Fix missing commas after lazy imports
    content = content.replace(/lazy\(\(\) => import\("([^"]+)"\)\n\s*\/\/ /g, 'lazy(() => import("$1")),\n// ');
    
    // Fix incomplete JSX elements
    content = content.replace(/(<[^>]+)\n\s*([a-zA-Z_$])/g, '$1>\n  $2');
    
    // Fix missing closing tags in JSX
    content = content.replace(/(<[^>]+)\n\s*<\/[^>]+>/g, '$1>\n  </div>');
    
    // Fix missing commas in array elements
    content = content.replace(/([^,\n])\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1,\n  $2');
    
    // Fix missing closing brackets in objects
    content = content.replace(/([^}]\n\s*)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1  $2');
    
    // Fix incomplete function declarations
    content = content.replace(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(\s*\)\s*{\s*\n\s*return\s*\(\s*\n\s*<[^>]*>\s*\n\s*\)\s*;\s*\n\s*}\s*\n\s*([a-zA-Z_$])/g, 
      'function $1() {\n  return (\n    <div>\n      {/* Content */}\n    </div>\n  );\n}\n\n$2');
    
    // Fix missing export statements
    content = content.replace(/}\s*\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '}\n\nexport { $1');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove any remaining orphaned markers
    content = content.replace(/^<<<<<<<|^
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

        }
      }
    } catch (error) {
      // Skip directories that can't be read

    }
  } else {
    console.log(`File not found: ${filePath}`);
  }

