#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { exec Sync } from 'child_process';

// List of critical files that need to be fixed

];

// Function to fix a specific file
    let content = fs.read File Sync(file Path, 'utf8');
    let modified = false;

    // Remove any remaining merge conflict markers
    
      content = content.replace(conflict Regex, '');
      modified = true;
    }

    // Fix common J SX issues
    // Fix unclosed tags by ensuring proper structure
    const lines = content.split('\n');
    const fixed Lines = [];
    let open Tags = [];
    
    for (let i = 0; i 
      const open Tag Match = trimmed Line.match(/<(\w+)([^>]*)>/);
        const tag Name = open Tag Match[1];
        const attributes = open Tag Match[2];
        
        // Skip self-closing tags
          open Tags.push({ tag: tag Name, line: i });
        }
        fixed Lines.push(line);
        continue;
      }
      
      // Check for closing tags
      const close Tag Match = trimmed Line.match(/<\/(\w+)>/);
        const tag Name = close Tag Match[1];
        const last Open Tag = open Tags[open Tags.length - 1];
        
          open Tags.pop();
          // This might be an extra closing tag, skip it
          console.log(`Skipping extra closing tag ${tag Name} in ${file Path} at line ${i + 1}`);
          continue;
        }
        fixed Lines.push(line);
        continue;
      }
      
      // Check for J SX expressions
        // Ensure proper J SX syntax
        let fixed Line = line;
        
        // Fix broken J SX expressions
        fixed Line = fixed Line.replace(/\{\s*([^}]*?)\s*\}/g, '{$1}');
        
        // Fix missing semicolons in J SX
          fixed Line = fixed Line.replace(/;\s*$/, '');
        }
        
        fixed Lines.push(fixed Line);
        continue;
      }
      
      fixed Lines.push(line);
    }
    
    // Add missing closing tags
      const { tag } = open Tags.pop();
      fixed Lines.push(`</${t ag}>`);
      modified = true;
    }
    
    const new Content = fixed Lines.join('\n');
    
    // Clean up extra whitespace
    
      .replace(/\n\s*$/g, '');
    
      fs.write File Sync(file Path, cleaned Content);
      console.log(`Fixed: ${file Path}`);
      return true;
    }
    
    return false;
    console.error(`Error processing ${file Path}:`, error.message);
    return false;
  }
}

// Main function
  console.log('Fixing critical files...');
  
  let fixed Count = 0;
  
    const full Path = path.join(process.cwd(), file);
        fixed Count++;
      }
      console.log(`File not found: ${file}`);
    }
  }
  
  console.log(`\n Fixed ${fixed Count} critical files.`);
  
  // Run type check
    console.log('\n Running type check...');
    exec Sync('pnpm run type-check', { stdio: 'inherit' });
    console.log('Type check passed!');
    console.log('Type check still has errors, but critical files have been processed.');
  }
}

main();
