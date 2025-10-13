<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
import fs from 'fs';
import path from 'path';
// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
};

// Remove unused imports from a file
const removeUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Get unused imports from ESLint
    try {
      const eslintOutput = execSync(`npx eslint "${filePath}" --format=json --no-fix`, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe'
      });

      const eslintResult = JSON.parse(eslintOutput);
      const unusedVars = eslintResult[0]?.messages?.filter(msg =>
        msg.ruleId === '@typescript-eslint/no-unused-vars' &&
        msg.message.includes('is defined but never used')
      ) || [];

      for (const unusedVar of unusedVars) {
        const lineNumber = unusedVar.line - 1;
        const lines = content.split('\n');
        const line = lines[lineNumber];

        if (line && line.includes('import')) {
          // Extract the import statement
          const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
          if (importMatch) {
            const [, imports, source] = importMatch;
            const importList = imports.split(',').map(imp => imp.trim());
            const unusedImport = unusedVar.message.match(/'([^']+)'/)?.[1];

            if (unusedImport && importList.includes(unusedImport)) {
              // Remove the unused import
              const newImportList = importList.filter(imp => imp !== unusedImport);

              if (newImportList.length === 0) {
                // Remove entire import line if no imports left
                lines[lineNumber] = '';
              } else {
                // Update import line
                lines[lineNumber] = line.replace(
                  /import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/,
                  `import { ${newImportList.join(', ')} } from '${source}'`
                );
              }

              content = lines.join('\n');
            }
          }
        }
      }

      // Clean up empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed unused imports in: ${filePath}`);
        return true;
      }
    } catch (error) {
      // ESLint might fail, continue with other files
      console.log(`Skipping ${filePath} due to ESLint error: ${error.message}`);
    }

    return false;
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
    return false;
  }
};

// Main execution
console.log('Starting unused imports cleanup...');

const files = getAllFiles('/workspace/app');
let fixedCount = 0;

for (const file of files) {
  if (removeUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unused imports in ${fixedCount} files.`);

// Also fix some specific files that have issues
const specificFiles = [
  '/workspace/App_clean.tsx',
  '/workspace/app/components/Analytics.tsx',
  '/workspace/app/components/EnhancedPerformanceMonitor.tsx',
  '/workspace/app/components/Footer.tsx',
  '/workspace/app/components/ImprovedFooter.tsx',
  '/workspace/app/components/ImprovedImage.tsx',
  '/workspace/app/components/Navigation.tsx',
  '/workspace/app/components/PerformanceOptimizer.tsx'
];

for (const file of specificFiles) {
  if (fs.existsSync(file)) {
    removeUnusedImports(file);
  }
}

console.log('Cleanup completed!');
const files = execSync('find app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log(`Found ${files.length} files to process`);

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;

    // Remove unused imports from lucide-react
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideImportMatch) {
      const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const usedImports = [];

      imports.forEach(imp => {
        // Check if the import is used in the file
        const importName = imp.replace(/\s+as\s+\w+/, '').trim();
        const regex = new RegExp(`\\b${importName}\\b`, 'g');
        if (regex.test(content)) {
          usedImports.push(imp);
        }
      });

      if (usedImports.length === 0) {
        // Remove the entire import line
        newContent = newContent.replace(lucideImportMatch[0], '');
      } else if (usedImports.length !== imports.length) {
        // Replace with only used imports
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        newContent = newContent.replace(lucideImportMatch[0], newImport);
      }
    }

    // Remove unused React imports (if only default import and not used)
    const reactImportMatch = content.match(/import\s+React\s+from\s+['"]react['"];?/);
    if (reactImportMatch && !content.includes('React.')) {
      newContent = newContent.replace(reactImportMatch[0], '');
    }

    // Remove unused Helmet imports
    const helmetImportMatch = content.match(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?/);
    if (helmetImportMatch && !content.includes('<Helmet')) {
      newContent = newContent.replace(helmetImportMatch[0], '');
    }

    // Remove unused Link imports
    const linkImportMatch = content.match(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?/);
    if (linkImportMatch && !content.includes('<Link')) {
      newContent = newContent.replace(linkImportMatch[0], '');
    }

    // Remove unused variable declarations
    const lines = newContent.split('\n');
    const newLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Check for const/let/var declarations that might be unused
      const varMatch = line.match(/^\s*(const|let|var)\s+(\w+)\s*=/);
      if (varMatch) {
        const varName = varMatch[2];
        const isUsed = new RegExp(`\\b${varName}\\b`).test(newContent.replace(line, ''));
        if (!isUsed && !line.includes('// eslint-disable')) {
          // Skip this line (remove unused variable)
          continue;
        }
      }

      newLines.push(line);
    }

    newContent = newLines.join('\n');

    // Clean up multiple empty lines
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Done fixing unused imports and variables');
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}

// Remove unused imports from a file
const removeUnusedImports = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Check if this is an import line
      if (line.trim().startsWith('import ')) {
        // Check if the next line is also an import (multiline import)
        let importLines = [line];
        let j = i + 1;

        while (j < lines.length && lines[j].trim().startsWith('import ')) {
          importLines.push(lines[j]);
          j++;
        }

        // Check if any of these imports are used in the file
        const importContent = importLines.join('\n');
        const restOfFile = lines.slice(j).join('\n');

        // Extract imported names
        const importMatches = importContent.match(/\{([^}]+)\}/g);
        if (importMatches) {
          const importedNames = importMatches
            .flatMap(match => match.slice(1, -1).split(','))
            .map(name => name.trim().split(' as ')[0].trim());

          // Check if any imported name is used in the rest of the file
          const isUsed = importedNames.some(name => {
            if (name === 'React') return true; // Always keep React
            const regex = new RegExp(`\\b${name}\\b`, 'g');
            return regex.test(restOfFile);
          });

          if (!isUsed) {
            console.log(`Removing unused import from ${filePath}: ${importedNames.join(', ')}`);
            i = j - 1; // Skip the import lines
            continue;
          }
        }
      }

      newLines.push(line);
    }

    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Updated ${filePath}`);    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
const files = getAllFiles('/workspace/app');
console.log(`Found ${files.length} files to process`);
files.forEach(file => {
  removeUnusedImports(file);
});

console.log('Done fixing unused imports');
=======
import fs from 'fs';';
import path from 'path';';
import { fileURLToPath } from 'url';'
// Common unused imports that appear frequently;
const commonUnusedImports = [
  // TODO: Add items
]
  // TODO: Add items
]
  'ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', '
  'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award', 'Mail', 'MapPin','
  'Image', 'Zap', 'Shield', 'CheckCircle', 'Phone', 'Calendar', 'Target','
  'Brain', 'Navigation', 'Footer', 'SEOOptimizer''
]
// Files to process;
const filesToProcess = [
  // TODO: Add items
]
  // TODO: Add items
]
  'src/ai-ab-testing/page.tsx','
  'src/ai-analytics-dashboard/page.tsx','
  'src/ai-analytics/page.tsx','
  'src/ai-automation/page.tsx','
  'src/ai-computer-vision/page.tsx','
  'src/ai-content-generation/page.tsx','
  'src/ai-content-studio/page.tsx','
  'src/ai-crm/page.tsx','
  'src/ai-customer-insights/page.tsx','
  'src/ai-customer-support-bot/page.tsx','
  'src/ai-customer-support/page.tsx','
  'src/ai-cybersecurity/page.tsx','
  'src/ai-data-analytics/page.tsx','
  'src/ai-data-visualization/page.tsx','
  'src/ai-design-assistant/page.tsx','
  'src/ai-document-processing/page.tsx','
  'src/ai-document-processor/page.tsx','
  'src/ai-ecommerce-optimizer/page.tsx','
  'src/ai-ecommerce-solutions/page.tsx''

function cleanUnusedImports(filePath) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
let content = fs.readFileSync(filePath, 'utf8');';
let modified = false
    // Remove unused imports from lucide-react;
const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/)";'"
    if (lucideImportMatch) {;
const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());';
const usedImports = []
      // Check which imports are actually used in the file;
imports.forEach(imp => {)
        if (content.includes(imp) && !imp.includes('//')) {'
          usedImports.push(imp)
        }
      })
      if (usedImports.length !== imports.length) {;
const newImport = usedImports.length > 0
function cleanUnusedImports(filePath) {/* TODO: Fix JSX expression */}
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/)";'"
    if (lucideImportMatch) {/* TODO: Fix JSX expression */}
        }
      })
      if (usedImports.length !== imports.length) {/* TODO: Fix JSX expression */}
          ? `import { ${usedImports.join(', ')} } from 'lucide-react';`';'
          : '''
        content = content.replace(lucideImportMatch[0], newImport)
        modified = true
    // Remove unused component imports;
const componentImports = ['Navigation', 'Footer', 'SEOOptimizer']'
    componentImports.forEach(comp => {);
const importRegex = new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, 'g')';'"
      if (importRegex.test(content) && !content.includes(`<${comp}`) && !content.includes(`${comp}.`)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        content = content.replace(importRegex, ')''
    // Remove unused variable declarations;
const unusedVarPatterns = [
  // TODO: Add items
]
  // TODO: Add items
]
      /const\s+(\w+)\s*=\s*React\.FC.*?;\s*/g,
      /const\s+(\w+)\s*=\s*\(\)\s*=>\s*{[\s\S]*?};\s*/g
    unusedVarPatterns.forEach(pattern => {)
      content = content.replace(pattern, (match, varName) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
        if (!content.includes(varName) || content.indexOf(varName) === content.lastIndexOf(varName)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
          return '''
        return match
    if (modified) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      fs.writeFileSync(filePath, content)
      console.log(`Cleaned: ${filePath}`)
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error(`Error processing ${filePath}:`, error.message)
// Process all files
filesToProcess.forEach(file => {);
const fullPath = path.join(__dirname, file)
  if (fs.existsSync(fullPath)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    cleanUnusedImports(fullPath)
console.log('Unused imports cleanup completed!')';
import { execSync } from 'child_process';'
// Function to remove unused imports from a single file;
function removeUnusedImportsFromFile(filePath) {;
const content = fs.readFileSync(filePath, 'utf8');';
const lines = content.split('\n');';
const newLines = [];
let inImportBlock = false;
let importStartLine = -1;
let importEndLine = -1;
let currentImport = '''
    for (let i = 0; i < lines.length; i++) {;
const line = lines[i];
const trimmedLine = line.trim()
      // Check if this is an import line
      if (trimmedLine.startsWith('import ')) {'
        inImportBlock = true;
importStartLine = i
        currentImport = line
        // Check if this is a single-line import
        if (trimmedLine.endsWith(';') || trimmedLine.endsWith('from')) {'
          // This is a single-line import, check if it's used'
          if (isImportUsed(content, currentImport)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
            newLines.push(line)
          inImportBlock = false
        } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
          // This is a multi-line import, collect all lines;
const importLines = [line];
let j = i + 1
          while (j < lines.length && !trimmedLine.endsWith(';')) {';
importLines.push(lines[j])
            j++;
importEndLine = j - 1
          // Check if any part of this import is used;
const fullImport = importLines.join('\n')'
          if (isImportUsed(content, fullImport)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
            newLines.push(...importLines)
          i = j - 1; // Skip the processed lines
      } else if (inImportBlock && (trimmedLine.endsWith(';') || trimmedLine.includes('from'))) {'
        // End of multi-line import;
importEndLine = i;
const importLines = lines.slice(importStartLine, i + 1);
const newContent = newLines.join('\n')'
    if (newContent !== content) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      fs.writeFileSync(filePath, newContent, 'utf8')'
      console.log(`Fixed unused imports in: ${filePath}`)
    componentImports.forEach(comp => {/* TODO: Fix JSX expression */}")`;";
const importRegex = new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, 'g');`';'"
      if (importRegex.test(content) && !content.includes(`<${comp}`) && !content.includes(`${comp}.`)) {/* TODO: Fix JSX expression */}
      /const\s+(\w+)\s*=\s*\(\)\s*=>\s*{[\s\S]*?};\s*/g
    unusedVarPatterns.forEach(pattern => {/* TODO: Fix JSX expression */})`
  d: ${filePath}`)
  } catch (error) {/* TODO: Fix JSX expression */}`
    console.error(`Error processing ${filePath}:`, error.message)
// Process all files
filesToProcess.forEach(file => {/* TODO: Fix JSX expression */}
import { execSync } from 'child_process';'
// Function to remove unused imports from a single file;);
function removeUnusedImportsFromFile(filePath) {/* TODO: Fix JSX expression */}
        } else {/* TODO: Fix JSX expression */}
      } else if (inImportBlock && (trimmedLine.endsWith(';') || trimmedLine.includes('from'))) {/* TODO: Fix JSX expression */}`'
  in: ${filePath}`)
      return true
  return false
// Function to check if an import is used in the content
function isImportUsed(content, importLine) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  // Extract the imported names from the import line;
const importMatch = importLine.match(/import\s*{([^}]+)}\s*from/);
  if (importMatch) {;
const imports = importMatch[1].split(',').map(imp => imp.trim())'
    return imports.some(imp => {);
const name = imp.split(' as ')[0].trim()'
      // Check if the name is used in the content (excluding the import line itself);
const contentWithoutImport = content.replace(importLine, '')'
      return contentWithoutImport.includes(name) &&
             !contentWithoutImport.includes(`import ${name}`) &&
             !contentWithoutImport.includes(`{ ${name}`) &&
function isImportUsed(content, importLine) {/* TODO: Fix JSX expression */}
  const importMatch = importLine.match(/import\s*{([^}]+)}\s*from/);
  if (importMatch) {/* TODO: Fix JSX expression */}`
             !contentWithoutImport.includes(`import ${name}`) &&`
             !contentWithoutImport.includes(`{ ${name}`) &&`
             !contentWithoutImport.includes(`{${name}`)
  // For default imports;
const defaultImportMatch = importLine.match(/import\s+(\w+)\s+from/);
  if (defaultImportMatch) {/* TODO: Fix JSX expression */}`
           !contentWithoutImport.includes(`import ${name}`)
  return true; // If we can't determine, keep the import'
// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {;';
let results = [];
const list = fs.readdirSync(dir)
  list.forEach(file => {);
const filePath = path.join(dir, file);
const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', '.next', 'out', 'build'].includes(file)) {'
        results = results.concat(getAllFiles(filePath, extensions));
const ext = path.extname(file)
      if (extensions.includes(ext)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        results.push(filePath)
  return results
// Main execution
console.log('Fixing unused imports...');';
const files = getAllFiles('.', ['.ts', '.tsx', '.js', '.jsx'])'
  .filter(file => )
    !file.includes('node_modules') && '
    !file.includes('.git') &&'
    !file.includes('dist') &&'
    !file.includes('.next') &&'
    !file.includes('out') &&'
    !file.includes('build') &&'
    !file.includes('remove-unused-imports.js') &&'
    !file.includes('fix-unused-imports.js')'
  );
let fixedCount = 0
files.forEach(file => {)
  if (removeUnusedImportsFromFile(file)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    fixedCount++
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {/* TODO: Fix JSX expression */}`'
console.log(`Fixed ${fixedCount} files`)
"`"
}}}}}}}}}}}}}}}}}}}}}}}}
=======

