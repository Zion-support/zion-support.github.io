import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

// Common unused imports that appear frequently;
const commonUnusedImports = [
  'Download', 'Share', 'Star', 'Clock', 'Users', 'Award', 'ArrowRight', 'Sparkles',']'
  'Mail', 'MapPin', 'Phone', 'Globe', 'Target', 'MessageSquare', 'Eye', 'Zap','
  'Shield', 'Database', 'Settings', 'BarChart', 'TrendingUp', 'CheckCircle','
  'DollarSign', 'AlertCircle', 'Activity', 'PieChart', 'Headphones', 'Bot','
  'AlertTriangle', 'Calendar', 'Briefcase', 'Wrench', 'Hammer', 'Paintbrush','
  'Scissors', 'BookOpen', 'Calculator', 'Compass', 'Navigation', 'TrendingDown','
  'Lightning', 'Crosshair', 'Security', 'People', 'StarIcon', 'Check', 'Arrow','
  'PhoneIcon', 'MailIcon', 'Location', 'Truck', 'Smartphone', 'Cpu', 'Lock','
  'FileText', 'Search', 'Palette', 'Camera', 'Music', 'Video', 'Gamepad2','
  'ShoppingCart', 'CreditCard', 'Building', 'Factory', 'Car', 'Plane', 'Ship','
  'Train', 'Home', 'Heart', 'Stethoscope', 'GraduationCap', 'Wrench', 'Hammer','
  'Paintbrush', 'Scissors', 'BookOpen', 'Calculator', 'Calendar', 'Clock3','
  'Compass', 'Navigation', 'PieChart', 'TrendingDown', 'Activity', 'Zap as Lightning','
  'Target as Crosshair', 'Shield as Security', 'Users as People', 'Star as StarIcon','
  'CheckCircle as Check', 'ArrowRight as Arrow', 'Phone as PhoneIcon', 'Mail as MailIcon','
  'MapPin as Location', 'Truck', 'Smartphone', 'TrendingUp', 'Mic', 'Helmet','
  'useState', 'isLoaded', 'stats', 'Link', 'errorHandler', 'isDevelopment','
  'keys', 'array', 'byte', 'mountTimeRef', 'renderCountRef', 'duration','
  'startTime', 'errorEvent', 'error', 'rejectionEvent', 'fieldValue', 'rules','
  'result', 'validationResults', 'formErrors', 'fieldName', 'onSubmit','
  'paintEntries', 'cumulativeLayoutShift', 'firstInputDelay', 'entries','
  'lastEntry', 'clsValue', 'navEntry', 'ttfb', 'resourceEntry', 'loadTime','
  'images', 'criticalResources', 'link', 'metrics', 'record', 'now', 'resetTime','
  'headers', 'cfConnectingIp', 'realIp', 'forwardedFor', 'identifier','
  'middleware', 'startTime', 'token', 'requests', 'key', 'timestamps','
  'currentContent', 'performanceScore', 'performanceMetrics', 'errorStats','
  'memoryInfo', 'networkInfo', 'interval', 'memory', 'percentage', 'nav',;'
  'connection', 'a', 'url', 'body', 'img', 'score'
];

// Function to remove unused imports from a file;
function fixUnusedImports(filePath)   {}
  try 
    let content = fs.readFileSync(filePath, 'utf8');'
    let modified = false;

    // Find import statements;
    const importRegex = /import\s*{([^}]+)}\s*from\s*['"][^'"]+['"];?/g;"
    const imports = content.match(importRegex);
;
    if (imports) 
      imports.forEach(importStatement => {}
        // Extract the import list;
        const match = importStatement.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"];?/);"
        if (match) 
          const importList = match[1];
          const source = match[2];
          
          // Split imports and clean them;
          const imports = importList.split(',').map(imp => imp.trim());'
          const usedImports = imports.filter(imp => ;
            // Check if this import is actually used in the file;
            const importName = imp.split(' as ')[0].trim();'
            const alias = imp.includes(' as ') ? imp.split(' as ')[1].trim() : importName;'
            
            // Skip if it's a common unused import'
            if (commonUnusedImports.includes(importName) || commonUnusedImports.includes(alias)) 
              return false;
            }
            
            // Check if the import is used in the file (excluding the import statement itself);
            const contentWithoutImports = content.replace(importStatement, );
            const usageRegex = new RegExp(`\\b${alias}\\b`, 'g');'`
            const matches = contentWithoutImports.match(usageRegex);
            ;
            return matches && matches.length > 0;
          });
;
          if (usedImports.length !== imports.length) 
            const newImportStatement = usedImports.length > 0 ;
              ? `import { ${usedImports.join(', ')} } from '${source}'``
              : content = content.replace(importStatement, newImportStatement);
            modified = true;
          }
        }
      });
    }
;
    if (modified) 
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);`
    }
  } catch (error) 
    console.error(`Error processing ${filePath}:`, error.message);`
  }
}

// Find all TypeScript/JavaScript files;
const files = await glob('src/**/*.{ts,tsx,js,jsx}', '
  ignore: [
    'node_modules/**',']'
    'dist/**','
    'build/**','
    '**/*.d.ts'
  ];
});
;
console.log(`Processing ${files.length} files...`);`

for (const file of files) ;
  fixUnusedImports(file);
}
;
console.log('Unused imports cleanup completed!');'
import fs from 'fs' import path from 'path' import { glob } from 'glob' // Common unused imports that appear frequently; const commonUnusedImports = [;Download', 'Share', 'Star', 'Clock', 'Users', 'Award', 'ArrowRight', 'Sparkles','Mail', 'MapPin', 'Phone', 'Globe', 'Target', 'MessageSquare', 'Eye', 'Zap','Shield', 'Database', 'Settings', 'BarChart', 'TrendingUp', 'CheckCircle','DollarSign', 'AlertCircle', 'Activity', 'PieChart', 'Headphones', 'Bot','AlertTriangle', 'Calendar', 'Briefcase', 'Wrench', 'Hammer', 'Paintbrush','Scissors', 'BookOpen', 'Calculator', 'Compass', 'Navigation', 'TrendingDown','Lightning', 'Crosshair', 'Security', 'People', 'StarIcon', 'Check', 'Arrow','PhoneIcon', 'MailIcon', 'Location', 'Truck', 'Smartphone', 'Cpu', 'Lock','FileText', 'Search', 'Palette', 'Camera', 'Music', 'Video', 'Gamepad2','ShoppingCart', 'CreditCard', 'Building', 'Factory', 'Car', 'Plane', 'Ship','Train', 'Home', 'Heart', 'Stethoscope', 'GraduationCap', 'Wrench', 'Hammer','Paintbrush', 'Scissors', 'BookOpen', 'Calculator', 'Calendar', 'Clock3','Compass', 'Navigation', 'PieChart', 'TrendingDown', 'Activity', 'Zap as Lightning','Target as Crosshair', 'Shield as Security', 'Users as People', 'Star as StarIcon','CheckCircle as Check', 'ArrowRight as Arrow', 'Phone as PhoneIcon', 'Mail as MailIcon','MapPin as Location', 'Truck', 'Smartphone', 'TrendingUp', 'Mic', 'Helmet','useState', 'isLoaded', 'stats', 'Link', 'errorHandler', 'isDevelopment','keys', 'array', 'byte', 'mountTimeRef', 'renderCountRef', 'duration','startTime', 'errorEvent', 'error', 'rejectionEvent', 'fieldValue', 'rules','result', 'validationResults', 'formErrors', 'fieldName', 'onSubmit','paintEntries', 'cumulativeLayoutShift', 'firstInputDelay', 'entries','lastEntry', 'clsValue', 'navEntry', 'ttfb', 'resourceEntry', 'loadTime','images', 'criticalResources', 'link', 'metrics', 'record', 'now', 'resetTime','headers', 'cfConnectingIp', 'realIp', 'forwardedFor', 'identifier','middleware', 'startTime', 'token', 'requests', 'key', 'timestamps','currentContent', 'performanceScore', 'performanceMetrics', 'errorStats','memoryInfo', 'networkInfo', 'interval', 'memory', 'percentage', 'nav','connection', 'a', 'url', 'body', 'img', 'score]; // Function to remove unused imports from a file; function fixUnusedImports(filePath)  try  let content = fs.readFileSync(filePath, 'utf8'); let modified = false; // Find import statements; const importRegex = /import\s*{([^}]+)}\s*from\s*['"][^'"]+['"];?/g;''
const imports = content.match(importRegex); if (imports)  imports.forEach(importStatement =>  // Extract the import list; const match = importStatement.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"];?/);''
if (match)  const importList = match[1]; const source = match[2]; // Split imports and clean them; const imports = importList.split(',').map(imp => imp.trim()); const usedImports = imports.filter(imp => ; // Check if this import is actually used in the file; const importName = imp.split(' as ')[0].trim(); const alias = imp.includes(' as ') ? imp.split(' as ')[1].trim() : importName; // Skip if it's a common unused import' if (commonUnusedImports.includes(importName) || commonUnusedImports.includes(alias))  return false; } // Check if the import is used in the file (excluding the import statement itself); const contentWithoutImports = content.replace(importStatement, ); const usageRegex = new RegExp(`\\b${alias}\\b`, 'g');`'``
const matches = contentWithoutImports.match(usageRegex); return matches && matches.length > 0; }); if (usedImports.length !== imports.length)  const newImportStatement = usedImports.length > 0; ? `import { ${usedImports.join(', ')} } from '${source}'`'`'` : content = content.replace(importStatement, newImportStatement); modified = true; } } }); } if (modified)  fs.writeFileSync(filePath, content); console.log(`Fixed unused imports in: ${filePath}`);`` } } catch (error)  console.error(`Error processing ${filePath}:`, error.message);`` }'``
}
// Find all TypeScript/JavaScript files; const files = await glob('src/**/*.{ts,tsx,js,jsx}', {'}; ignore: [ 'node_modules/**','dist/**','build/**','**/*.d.ts' ]''
}); console.log(`Processing ${files.length} files...`);```
for (const file of files)  fixUnusedImports(file); }
console.log('Unused imports cleanup completed!');''
'"`"'`"'``
