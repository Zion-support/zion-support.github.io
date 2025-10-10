#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Function to fix common lint issues in a file;
function fixLintIssues(filePath) {
    try {
    // Skip if not a source file;
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.js') && !filePath.endsWith('.jsx')) {
<<<<<<< HEAD
      return false
  }
    
    // Skip test files and certain directories;
    if (filePath.includes('/__tests__/') || filePath.includes('/test/') || filePath.includes('.test.') || filePath.includes('.spec.')) {
    return false
  }
    
=======
      return false};
    // Skip test files and certain directories;
    if (filePath.includes('/__tests__/') || filePath.includes('/test/') || filePath.includes('.test.') || filePath.includes('.spec.')) {
      return false};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
//     // Fix 1: Remove unused React imports (keep if JSX is used),
    if (content.includes('import React from \'react\';') && !content.includes('<') && !content.includes('React.')) {
    ,
      content = content.replace(/import React from 'react';\n?/g, '');
<<<<<<< HEAD
      modified = true
  }
    
    // Fix 2: Remove unused Helmet imports,
    if (content.includes('import { Helmet } from \'react-helmet-async\';') && !content.includes('<Helmet')) {
function fixLintIssues(filePath) {/* TODO: Fix JSX expression */}
    }
    
=======
      modified = true};
    // Fix 2: Remove unused Helmet imports;
    if (content.includes('import { Helmet } from \'react-helmet-async\';') && !content.includes('<Helmet')) {;
function fixLintIssues(filePath) {/* TODO: Fix JSX expression */};
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Skip test files and certain directories;
    if (filePath.includes('/__tests__/') || filePath.includes('/test/') || filePath.includes('.test.') || filePath.includes('.spec.')) {/* TODO: Fix JSX expression */};
    };
//     // Fix,
  1: Remove unused React imports (keep if JSX is used)
<<<<<<< HEAD
    if (content.includes('import React from \'react\',') && !content.includes('<') && !content.includes('React.')) {/* TODO: Fix JSX expression */}
    }
    
    // Fix,
  2: Remove unused Helmet imports,
    if (content.includes('import { Helmet } from \'react-helmet-async\';') && !content.includes('<Helmet')) {/* TODO: Fix JSX expression */}
      content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
      modified = true;
    }
    
    // Fix 3: Remove unused lucide-react imports,
    if (lucideMatch) {
    ,
=======
    if (content.includes('import React from \'react\';') && !content.includes('<') && !content.includes('React.')) {/* TODO: Fix JSX expression */};
    };
    // Fix,
  2: Remove unused Helmet imports;
    if (content.includes('import { Helmet } from \'react-helmet-async\';') && !content.includes('<Helmet')) {/* TODO: Fix JSX expression */};
      content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
      modified = true};
    // Fix 3: Remove unused lucide-react imports;
    if (lucideMatch) {,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      if (usedImports.length === 0) {,
        modified = true
  } else if (usedImports.length < imports.length) {
        modified = true;
    // Fix,
<<<<<<< HEAD
  3: Remove unused lucide-react imports,
    if (lucideMatch) {/* TODO: Fix JSX expression */}
      } else if (usedImports.length < imports.length) {/* TODO: Fix JSX expression */}
      }
    }
    
=======
  3: Remove unused lucide-react imports;
    if (lucideMatch) {/* TODO: Fix JSX expression */};
      } else if (usedImports.length < imports.length) {/* TODO: Fix JSX expression */};
      };
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Fix,
  4: Remove unused variables (simple cases)
    for (let i = 0; i < lines.length; i++) {
<<<<<<< HEAD
    // Skip lines that are just unused variable declarations;
=======
      // Skip lines that are just unused variable declarations;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      if (line.match(/^\s*const\s+\w+\s*=\s*[^;]+;\s*$/) && 
          !line.includes('export') && 
          !line.includes('return') &&
//           !line.includes('console.log') &&
//           !line.includes('console.error') &&
//           !line.includes('console.warn')) {
//         const varName = line.match(/const\s+(\w+)/)?.[1];
        if (varName && !content.includes(varName + '.') && !content.includes(varName + '(') && !content.includes(varName + '[')) {
<<<<<<< HEAD
          // Comment out instead of removing to be safe
          fixedLines.push('// ' + line)
          modified = true,,
          continue
  }
      }
      
=======
          // Comment out instead of removing to be safe;
          fixedLines.push('// ' + line);
          modified = true;,
          continue};
      };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      // Fix 5: Comment out console statements in production code;
//       if (line.includes('console.') && !filePath.includes('test') && !filePath.includes('spec')) {
        if (!line.trim().startsWith('//')) {
          fixedLines.push('// ' + line);
<<<<<<< HEAD
          modified = true
          continue
    for (let i = 0; i < lines.length, i++) {/* TODO: Fix JSX expression */}
        }
      }
      
      // Fix,
  5: Comment out console statements in production code,
//       if (line.includes('console.') && !filePath.includes('test') && !filePath.includes('spec')) {/* TODO: Fix JSX expression */}
        }
      }
      
      fixedLines.push(line);
    }
    
    content = fixedLines.join('\n');
    
    // Fix 6: Remove unused useCallback imports,
=======
          modified = true;
          continue;
    for (let i = 0; i < lines.length; i++) {/* TODO: Fix JSX expression */};
        };
      };
      // Fix,
  5: Comment out console statements in production code;
//       if (line.includes('console.') && !filePath.includes('test') && !filePath.includes('spec')) {/* TODO: Fix JSX expression */};
        };
      };
      fixedLines.push(line)};
    content = fixedLines.join('\n');
    // Fix 6: Remove unused useCallback imports;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    if (content.includes('useCallback') && !content.includes('useCallback(')) {,
      content = content.replace(/,\s*useCallback/g, '');
      content = content.replace(/useCallback,\s*/g, '');
      if (content.includes('import { useCallback }')) {
    // Fix,
<<<<<<< HEAD
  6: Remove unused useCallback imports,
    if (content.includes('useCallback') && !content.includes('useCallback(')) {/* TODO: Fix JSX expression */}
      if (content.includes('import { useCallback }')) {/* TODO: Fix JSX expression */}
        content = content.replace(/import { useCallback } from 'react';\n?/g, '');
      }
      modified = true;
    }
    
    // Fix 7: Remove unused lazy imports,
=======
  6: Remove unused useCallback imports;
    if (content.includes('useCallback') && !content.includes('useCallback(')) {/* TODO: Fix JSX expression */};
      if (content.includes('import { useCallback }')) {/* TODO: Fix JSX expression */};
        content = content.replace(/import { useCallback } from 'react';\n?/g, '')};
      modified = true};
    // Fix 7: Remove unused lazy imports;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    if (content.includes('lazy') && !content.includes('lazy(')) {,
      content = content.replace(/,\s*lazy/g, '');
      content = content.replace(/lazy,\s*/g, '');
      if (content.includes('import { lazy }')) {
    // Fix,
<<<<<<< HEAD
  7: Remove unused lazy imports,
    if (content.includes('lazy') && !content.includes('lazy(')) {/* TODO: Fix JSX expression */}
      if (content.includes('import { lazy }')) {/* TODO: Fix JSX expression */}
        content = content.replace(/import { lazy } from 'react';\n?/g, '');
      }
      modified = true;
    }
    
    // Fix 8: Remove unused Link imports from react-router-dom,
    if (content.includes('import { Link } from \'react-router-dom\';') && !content.includes('<Link')) {
    // Fix,
  8: Remove unused Link imports from react-router-dom,
    if (content.includes('import { Link } from \'react-router-dom\';') && !content.includes('<Link')) {/* TODO: Fix JSX expression */}
      content = content.replace(/import { Link } from 'react-router-dom';\n?/g, '');
      modified = true;
    }
    
    // Fix 9: Remove unused Users imports,
=======
  7: Remove unused lazy imports;
    if (content.includes('lazy') && !content.includes('lazy(')) {/* TODO: Fix JSX expression */};
      if (content.includes('import { lazy }')) {/* TODO: Fix JSX expression */};
        content = content.replace(/import { lazy } from 'react';\n?/g, '')};
      modified = true};
    // Fix 8: Remove unused Link imports from react-router-dom;
    if (content.includes('import { Link } from \'react-router-dom\';') && !content.includes('<Link')) {
    // Fix,
  8: Remove unused Link imports from react-router-dom;
    if (content.includes('import { Link } from \'react-router-dom\';') && !content.includes('<Link')) {/* TODO: Fix JSX expression */};
      content = content.replace(/import { Link } from 'react-router-dom';\n?/g, '');
      modified = true};
    // Fix 9: Remove unused Users imports;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Fix,
  9: Remove unused Users imports,
//     const unusedIcons = ['ArrowLeft', 'Search', 'BookOpen', 'Users', 'Star', 'Target', 'CheckCircle', 'Calendar', 'User', 'Tag', 'Cpu'];
    for (const icon of unusedIcons) {/* TODO: Fix JSX expression */};
      if (content.includes(icon) && !content.includes(`<${icon}`) && !content.includes(`${icon}.`)) {/* TODO: Fix JSX expression */}`
        content = content.replace(new RegExp(`,\\s*${icon}`, 'g'), '');`
        content = content.replace(new RegExp(`${icon},\\s*`, 'g'), '');
<<<<<<< HEAD
        modified = true;
      }
    }
    
    // Fix 10: Remove unused jest imports in non-test files,
=======
        modified = true};
    };
    // Fix 10: Remove unused jest imports in non-test files;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    if (content.includes('jest') && !filePath.includes('test') && !filePath.includes('spec')) {,
      content = content.replace(/,\s*jest/g, '');
      content = content.replace(/\s*/g, '');
      modified = true;
    // Fix,
<<<<<<< HEAD
  10: Remove unused jest imports in non-test files,
    if (content.includes('jest') && !filePath.includes('test') && !filePath.includes('spec')) {/* TODO: Fix JSX expression */}
    }
    
    if (modified) {/* TODO: Fix JSX expression */}
    }
    
    return false;
  } catch (error) {/* TODO: Fix JSX expression */}
  }
}

=======
  10: Remove unused jest imports in non-test files;
    if (content.includes('jest') && !filePath.includes('test') && !filePath.includes('spec')) {/* TODO: Fix JSX expression */};
    };
    if (modified) {/* TODO: Fix JSX expression */};
    };
    return false} catch (error) {/* TODO: Fix JSX expression */};
  };
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Function to recursively fix lint issues;
function fixAllLintIssues(_dir) {
  try {
    for (const file of files) {
      try {
        if (stat.isDirectory()) {
          // Skip certain directories;
          if (['node_modules', '.git', 'dist', '.next', 'media', '__tests__'].includes(file)) {
            continue;
<<<<<<< HEAD
function fixAllLintIssues(_dir) {/* TODO: Fix JSX expression */}
          }
          fixedCount += fixAllLintIssues(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {/* TODO: Fix JSX expression */}
          }
        }
      } catch (error) {/* TODO: Fix JSX expression */}
      }
    }
    
    return fixedCount;
  } catch (error) {/* TODO: Fix JSX expression */}
  }
}

=======
function fixAllLintIssues(_dir) {/* TODO: Fix JSX expression */};
          };
          fixedCount += fixAllLintIssues(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {/* TODO: Fix JSX expression */};
          };
        };
      } catch (error) {/* TODO: Fix JSX expression */};
      };
    };
    return fixedCount} catch (error) {/* TODO: Fix JSX expression */};
  };
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Main execution;
// const workspaceDir = process.cwd();
// // const fixedCount = fixAllLintIssues(workspaceDir);
// `