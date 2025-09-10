<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
// Function to fix all remaining syntax errors
function fixSyntaxErrors(content) {
  // Fix extra commas in JSX attributes
  content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {
    return match.replace(/,\s*$/, '')});
  // Fix malformed function "declarations": {, -> {
  content = content.replace(/\{\s*,/g, '{');
  // Fix malformed JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*$/gm, '>');
  // Fix malformed JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*</g, '><');
  // Fix malformed function "declarations": ) {, -> ) {
  content = content.replace(/\)\s*\{\s*,/g, ') {');
  // Fix malformed JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*$/gm, '>');
  // Fix missing closing braces in for loops
  content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\);/g, (match) => {
    return match.replace(/\}\);/g, '}\n      });')});
  // Fix missing closing braces in for loops (alternative pattern)
  content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\);/g, (match) => {
    return match.replace(/\}\);/g, '}\n      });')});
  // Fix malformed JSON "objects": {, -> {
  content = content.replace(/JSON\.stringify\(\{\s*,/g, 'JSON.stringify({');
  // Fix missing closing braces in for loops (CLS pattern)
  content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\s*console\.log\('"CLS": ', clsValue\);\s*\}\);/g, (match) => {
    return match.replace(/\}\);/g, '}\n      });')});
  return content}
// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const fixedContent = fixSyntaxErrors(conten;t;);
    if ( {
      fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
      fs.writeFileSync(filePath, fixedContent, 'utf8')}
      return true}
    return false} catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false}
}
console.log('🔧 Applying final comprehensive fixes...');
// Fix SEO.tsx - remove everything after the return statement
const seoContent = fs.readFileSync('src/components/SEO.tsx', 'utf8');
const seoFixed = seoContent.split('  );')[0] + '  );';
fs.writeFileSync('src/components/SEO.tsx', seoFixed, 'utf8');
console.log('✅ Fixed SEO.tsx');
<<<<<<< HEAD
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
=======
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985

// Fix TalentCard.jsx - fix malformed JSX
const talentContent = fs.readFileSync('src/components/talent/TalentCard.jsx', 'utf8');
const talentFixed = talentContent
  .replace(/>"/g, '>')
  .replace(/"</g, '<')
  .replace(/loading="lazy/g, 'loading="lazy"')
  .replace(/src={talent\.profile_picture_url}/g, 'src={talent.profile_picture_url}')
  .replace(/alt={talent\.full_name}/g, 'alt={talent.full_name}')
  .replace(/className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">/g, 'className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">')
  .replace(/className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">/g, 'className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">')
  .replace(/className="text-sm font-medium text-zion-blue-dark">/g, 'className="text-sm font-medium text-zion-blue-dark">')
  .replace(/className="flex-1">/g, 'className="flex-1">')
  .replace(/className="text-lg font-semibold text-zion-blue-dark mb-1">/g, 'className="text-lg font-semibold text-zion-blue-dark mb-1">')
  .replace(/className="text-sm text-zion-blue-light mb-2">/g, 'className="text-sm text-zion-blue-light mb-2">')
  .replace(/className="flex flex-wrap gap-1 mb-3">/g, 'className="flex flex-wrap gap-1 mb-3">')
  .replace(/className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">/g, 'className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">')
  .replace(/className="flex items-center justify-between">/g, 'className="flex items-center justify-between">')
  .replace(/className="flex items-center text-sm text-zion-blue-light">/g, 'className="flex items-center text-sm text-zion-blue-light">')
  .replace(/className="w-4 h-4 mr-1"\/>/g, 'className="w-4 h-4 mr-1" />')
  .replace(/className="bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light">/g, 'className="bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light">')
  .replace(/className="text-sm">/g, 'className="text-sm">');
fs.writeFileSync('src/components/talent/TalentCard.jsx', talentFixed, 'utf8');
const filesToFix = [
  'components/ContactForm.tsx',
const filesToFix = ['components/ContactForm.tsx',
  'components/ErrorBoundary.tsx',
  'components/PerformanceMonitor.tsx',
  'pages/docs.tsx',
  'pages/index.tsx'
];
// Fix use-toast.ts - add missing closing brace
const toastContent = fs.readFileSync('src/components/ui/use-toast.ts', 'utf8');
const toastFixed = toastContent.replace('  return { showToast };\n}', '  return { showToast };\n}');
fs.writeFileSync('src/components/ui/use-toast.ts', toastFixed, 'utf8');
console.log('✅ Fixed use-toast.ts');
<<<<<<< HEAD
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
=======
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985

// Fix enhancedServices.ts - fix malformed object properties
const servicesContent = fs.readFileSync('src/data/enhancedServices.ts', 'utf8');
const servicesFixed = servicesContent
  .replace(/"currency": "\$,/g, '"currency": "$",')
  .replace(/"tags": \["Process Automation, "RPA, "Workflow Optimization, "AI"\]/g, '"tags": ["Process Automation", "RPA", "Workflow Optimization", "AI"]')
  .replace(/"name": "Zion Tech Group,/g, '"name": "Zion Tech Group",')
  .replace(/"id": "zion-tech-group,/g, '"id": "zion-tech-group",')
  .replace(/"avatarUrl": "https:\/\/ziontechgroup\.com\/wp-content\/uploads\/2024\/01\/zion-logo\.png",/g, '"avatarUrl": "https://ziontechgroup.com/wp-content/uploads/2024/01/zion-logo.png",')
  .replace(/"email": "kleber@ziontechgroup\.com"/g, '"email": "kleber@ziontechgroup.com"')
  .replace(/images: \["https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?auto=format&fit=crop&w=800&h=500"\]/g, '"images": ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"]')
  .replace(/createdAt: "2024-01-15T10:00:00\.000Z"/g, '"createdAt": "2024-01-15T10:00:00.000Z"')
  .replace(/reviewCount: 156/g, '"reviewCount": 156');
fs.writeFileSync('src/data/enhancedServices.ts', servicesFixed, 'utf8');
// Fix useAuth.tsx - fix malformed function
const authContent = fs.readFileSync('src/hooks/useAuth.tsx', 'utf8');
const authFixed = authContent
  .replace(/"isAuthenticated": tru e,/g, '"isAuthenticated": true,')
  .replace(/"isLoading": fals e/g, '"isLoading": false')
  .replace(/:src\/hooks\/useAuth\.tsx/g, '')
  .replace(/useEffect\(\(\) => \{\s*\/\/ Check if user is logged in \(e\.g\., check localStorage, cookies, etc\.\)\s*\/\/ Implementation here\s*\}, \[\]\);/g, 'useEffect(() => {\n    // Check if user is logged in (e.g., check localStorage, cookies, etc.)\n    // Implementation here\n  }, []);');
fs.writeFileSync('src/hooks/useAuth.tsx', authFixed, 'utf8');
console.log(`\n📊 Syntax fixing complete:`)) {
) {
    ) {
    if (processFile(file)) {
      totalFixed++}
  }
}
}
if ( {
  ) {
     {
  console.log('\n✅ All syntax errors have been fixed!')}} else {
  console.log('\n✅ No syntax errors found!')}
console.log('✨ Final comprehensive fixes completed!');
  }} else {
  }
<<<<<<< HEAD
=======
=======
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
#!/usr/bin/env node;
const fs = require('fs')
    return match.replace(/,\s*$/, '')
  content = content.replace(/\{\s*,/g, '{'})
  content = content.replace(/>\s*,\s*$/gm, '>')
  content = content.replace(/>\s*,\s*</g, '><')
  content = content.replace(/\)\s*\{\s*,/g, ') {'}
  content = content.replace(/>\s*,\s*$/gm, '>')
    return match.replace(/\}\);/g, '}\n      }
});'
    return match.replace(/\}\);/g, '}\n      }
});'
  content = content.replace(/JSON\.stringify\(\{\s*,/g, 'JSON.stringify({'})
  content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\s*console\.log\('"CLS")
  .replace(/>")
  .replace(/")
  .replace(/loading="lazy/g, 'loading="lazy")
  .replace(/className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">/g, 'className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light")
  .replace(/className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">/g, 'className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg")
  .replace(/className="text-sm font-medium text-zion-blue-dark">/g, 'className="text-sm font-medium text-zion-blue-dark")
  .replace(/className="flex-1">/g, 'className="flex-1")
  .replace(/className="text-lg font-semibold text-zion-blue-dark mb-1">/g, 'className="text-lg font-semibold text-zion-blue-dark mb-1")
  .replace(/className="text-sm text-zion-blue-light mb-2">/g, 'className="text-sm text-zion-blue-light mb-2")
  .replace(/className="flex flex-wrap gap-1 mb-3">/g, 'className="flex flex-wrap gap-1 mb-3")
  .replace(/className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">/g, 'className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full")
  .replace(/className="flex items-center justify-between">/g, 'className="flex items-center justify-between")
  .replace(/className="flex items-center text-sm text-zion-blue-light">/g, 'className="flex items-center text-sm text-zion-blue-light")
  .replace(/className="w-4 h-4 mr-1"\/>/g, 'className="w-4 h-4 mr-1")
  .replace(/className="bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light">/g, 'className="bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light")
  .replace(/className="text-sm">/g, 'className="text-sm")
  .replace(/"currency": "\$,/g, '"currency": "$")
  .replace(/"tags": \["Process Automation, "RPA, "Workflow Optimization, "AI"\]/g, '"tags": ["Process Automation", "RPA", "Workflow Optimization", "AI")]
  .replace(/"name": "Zion Tech Group,/g, '"name": "Zion Tech Group")
  .replace(/"id": "zion-tech-group,/g, '"id": "zion-tech-group")
  .replace(/"avatarUrl": "https:\/\/ziontechgroup\.com\/wp-content\/uploads\/2024\/01\/zion-logo\.png",/g, '"avatarUrl": "https://ziontechgroup.com/wp-content/uploads/2024/01/zion-logo.png")
  .replace(/"email": "kleber@ziontechgroup\.com"/g, '"email": "kleber@ziontechgroup.com")
  .replace(/images: \["https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?auto=format&fit=crop&w=800&h=500"\]/g, '"images": ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500")]
  .replace(/createdAt: "2024-01-15T10:00:00\.000Z"/g, '"createdAt": "2024-01-15T10:00:00.000Z")
  .replace(/reviewCount: 156/g, '"reviewCount")
  .replace(/"isAuthenticated": tru e,/g, '"isAuthenticated")
  .replace(/"isLoading": fals e/g, '"isLoading")
=======
const fs = require("fs");
const path = require("path");
function fixFile(filePath) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
    let originalContent = content;

    // Remove all duplicate export default function Page() declarations;
    content = content.replace(
      /export\s+default\s+function\s+Page\(\)\s*\{[\s\S]*?\}/g,
      ''
    );

    // Remove all duplicate export function Page() declarations;
    content = content.replace(
      /export\s+function\s+Page\(\)\s*\{[\s\S]*?\}/g,
      ''
    );

    // Fix malformed function declarations with imports inside;
    content = content.replace(
      /export\s+default\s+function\s+(\w+)\s*\(\)\s*\{\s*import\s+\{([^}]+)\}\s+from\s+['"`]([^'"`]+)['"`];/g,
      "import { $2 } from '$3';"
    );

    // Fix malformed function declarations;
    content = content.replace(
      /export\s+default\s+function\s+(\w+)\s*\(\)\s*\{\s*import\s+\{/g,
      'import {'
    );
    content = content.replace(
      /export\s+function\s+(\w+)\s*\(\)\s*\{\s*import\s+\{/g,
      'import {'
    );

    // Fix import statements with extra spaces;
    content = content.replace(;
      /import\s+\{\s*([^}]+)\s*\}\s+from\s+[""`]([^""`]+)[""`];/g,;
      (match, imports, path) => {
  const cleanImports = imports.replace(/\s+/g, ` `).trim();
        return `import { ${cleanImports} } from `${path}`;`;}
    );

    // Fix import paths with spaces;
    content = content.replace(
      /from\s+['"`]\.\.\/data\s*\/\s*([^'"`]+)['"`]/g,
      "from '../data/$1'"
    );
    content = content.replace(
      /from\s+['"`]\.\.\/components\s*\/\s*([^'"`]+)['"`]/g,
      "from '../components/$1'"
    );

    // Fix framer-motion imports;
    content = content.replace(
      /import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]framer\s*-\s*motion['"`]/g,
      "import { $1 } from 'framer-motion'"
    );

    // Fix lucide-react imports;
    content = content.replace(
      /import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]lucide\s*-\s*react['"`]/g,
      "import { $1 } from 'lucide-react'"
    );

    // Fix react-router-dom imports;
    content = content.replace(
      /import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]react\s*-\s*router\s*-\s*dom['"`]/g,
      "import { $1 } from 'react-router-dom'"
    );

    // Fix React imports;
    content = content.replace(
      /import\s+React\s+from\s+['"`]react\.ts['"`]/g,
      "import React from 'react'"
    );

    // Fix missing function declarations;
    if (;
      content.includes("import {") &&;
      !content.includes("export default function") &&;
      !content.includes("export function");
    ) {
  content = content.replace(;
        /^\s*import\s+\{[^}]*\}\s+from\s+[""`][^""`]*[""`];\s*$/gm,;
        match => {
  return match + "\nexport default function Page() {";}
      );}

    // Fix missing closing braces;
    if (content.includes("export default function") && !content.includes("}")) {
  content += "\n}";}

    // Fix JSX syntax issues;
    content = content.replace(/return\s*\(/g, 'return (');
    content = content.replace(/return\s*\{/g, 'return {');

    // Remove empty lines and clean up;
    content = content.replace(/\n\s*\n\s*\n/g, "\n\n");
    if (content !== originalContent) {
  fs.writeFileSync(filePath, content, `utf8`);
      console.log(`Fixed: ${filePath}`);
      return true;}
    return false;} catch (error) {
  console.error(`Error processing ${filePath }:`, error.message);
    return false;}
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  files.forEach(file => {
  const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
  if (![`node_modules`, ".git", ".next", "out", "dist"].includes(file)) {
  fixedCount += processDirectory(filePath);}
    } else if (;
      file.endsWith(".tsx") ||;
      file.endsWith(".ts") ||;
      file.endsWith(".jsx") ||;
      file.endsWith(".js");
    ) {
  if (fixFile(filePath)) {
  fixedCount++;}
    }
  });
  return fixedCount;}

console.log("Starting final comprehensive syntax fixes...");
const fixedCount = processDirectory("./src');
console.log(`Fixed ${fixedCount} files.`)}}}))
>>>>>>> origin/automation-fixes
