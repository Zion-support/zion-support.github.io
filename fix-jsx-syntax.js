#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common JSX syntax issues
function fixJSXSyntax(content) {}
  // Fix malformed closing tags like </div></div> -> </div>;
  content = content.replace(/<\/div><\/div>/g, '</div>');
  content = content.replace(/<\/section><\/section>/g, '</section>');
  content = content.replace(/<\/h1><\/h1>/g, '</h1>');
  content = content.replace(/<\/p><\/p>/g, '</p>');
  content = content.replace(/<\/span><\/span>/g, '</span>');
  
  // Fix self-closing tags that are incorrectly closed
  content = content.replace(/<div[^>]*><\/div>/g, (match) => {}
    const className = match.match(/class="[^"]*"/);"    return className ? `<div ${className[0]}></div>` : '<div></div>';
  });
  
  // Fix empty tags with content
  content = content.replace(/<h1[^>]*><\/h1>/g, (match) => {}
    const className = match.match(/class="[^"]*"/);"    return className ? `<h1 ${className[0]}></h1>` : '<h1></h1>';
  });
  
  content = content.replace(/<p[^>]*><\/p>/g, (match) => {}
    const className = match.match(/class="[^"]*"/);"    return className ? `<p ${className[0]}></p>` : '<p></p>';
  });
  
  content = content.replace(/<span[^>]*><\/span>/g, (match) => {}
    const className = match.match(/class="[^"]*"/);"    return className ? `<span ${className[0]}></span>` : '<span></span>';
  });
  
  return content;
}

// Function to find and fix JSX files
function fixJSXFiles() {}
  const files = []
    'app/services/page.tsx',
    'app/about/page.tsx',
    'app/components/Footer.tsx',
    'app/components/Breadcrumb.tsx'
  ];
  
  let fixedCount = 0;
  
  for (const filePath of, files) {}
    try {}
      if (fs.existsSync(filePath)) {}
        console.log(`Fixing JSX syntax in: ${filePath}`);
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixJSXSyntax(content);
        
        if (content !== originalContent) {}
          fs.writeFileSync(filePath, content, 'utf8');
          fixedCount++;
          console.log(`  ✓ Fixed JSX syntax issues`);
        } else {}
          console.log(`  - No issues found`);
        }
      }
    } catch (error) {}
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
}

// Run the fix
fixJSXFiles();