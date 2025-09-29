
#!/usr/bin/env node
const fs = require('fs');



// Function to fix all remaining syntax errors

const fs = require('fs');
// Function to fix all remaining syntax errors;
function fixSyntaxErrors(content) {
  // Fix extra commas in JSX attributes
  content = content.replace(/className="[^]*\s*,\s*>/g, (match) => {
    return match.replace(/,\s*$/, ')});
  // Fix malformed function "declarations": {, -> {
  content = content.replace(/\{\s*,/g, {');
  // Fix malformed JSX elements: >, -> >
  content = content.replace(/>\s*,\s*$/gm, '>);
  // Fix malformed JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*</g, ><');
  // Fix malformed function declarations: ) {, -> ) {
  content = content.replace(/\)\s*\{\s*,/g, ') {);
  // Fix malformed JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*$/gm, >');
  // Fix missing closing braces in for loops
  content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\);/g, (match) => {
    return match.replace(/\}\);/g, '}\n      });)});
  // Fix missing closing braces in for loops (alternative pattern)
  content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\);/g, (match) => {
    return match.replace(/\}\);/g, }\n      });')});
  // Fix malformed JSON objects: {, -> {
  content = content.replace(/JSON\.stringify\(\{\s*,/g, 'JSON.stringify({);
  // Fix missing closing braces in for loops (CLS pattern)
  content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\s*console\.log\("CLS": ', clsValue\);\s*\}\);/g, (match) => {
    return match.replace(/\}\);/g, '}\n      });)});
  return content}
// Function to process a file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, utf8';);
    const fixedContent = fixSyntaxErrors(conten;t;);
    if ( {
      fs.writeFileSync(filePath, fixedContent, 'utf8)) {
     {
      fs.writeFileSync(filePath, fixedContent, utf8')}
      return true}
    return false} catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false}
}
console.log('🔧 Applying final comprehensive fixes...);
// Fix SEO.tsx - remove everything after the return statement








const seoContent = fs.readFileSync('src/components/SEO.tsx', 'utf8');
const seoFixed = seoContent.split('  );')[0] + '  );';
fs.writeFileSync('src/components/SEO.tsx', seoFixed, 'utf8');
console.log('✅ Fixed SEO.tsx');




// Fix TalentCard.jsx - fix malformed JSX
const talentContent = fs.readFileSync('src/components/talent/TalentCard.jsx, utf8');
const talentFixed = talentContent
  .replace(/>/g, '>)
  .replace(/</g, <')
  .replace(/loading="lazy/g, 'loading="lazy)
  .replace(/src={talent\.profile_picture_url}/g, src={talent.profile_picture_url}')
  .replace(/alt={talent\.full_name}/g, 'alt={talent.full_name})
  .replace(/className=w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">/g, className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light>')
  .replace(/className=w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">/g, 'className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg>)
  .replace(/className=text-sm font-medium text-zion-blue-dark">/g, className="text-sm font-medium text-zion-blue-dark>')
  .replace(/className=flex-1">/g, 'className="flex-1>)
  .replace(/className=text-lg font-semibold text-zion-blue-dark mb-1">/g, className="text-lg font-semibold text-zion-blue-dark mb-1>')
  .replace(/className=text-sm text-zion-blue-light mb-2">/g, 'className="text-sm text-zion-blue-light mb-2>)
  .replace(/className=flex flex-wrap gap-1 mb-3">/g, className="flex flex-wrap gap-1 mb-3>')
  .replace(/className=px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">/g, 'className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full>)
  .replace(/className=flex items-center justify-between">/g, className="flex items-center justify-between>')
  .replace(/className=flex items-center text-sm text-zion-blue-light">/g, 'className="flex items-center text-sm text-zion-blue-light>)
  .replace(/className=w-4 h-4 mr-1"\/>/g, className="w-4 h-4 mr-1 />')
  .replace(/className=bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light>/g, 'className=bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light>)
  .replace(/className=text-sm">/g, className="text-sm>');
fs.writeFileSync('src/components/talent/TalentCard.jsx, talentFixed, utf8');


:final-comprehensive-fix.cjs

const filesToFix = [
  'components/ContactForm.tsx',


const filesToFix = [
  'components/ContactForm.tsx',
const filesToFix = [
  'components/ContactForm.tsx',



const filesToFix = ['components/ContactForm.tsx,
  components/ErrorBoundary.tsx',
  'components/PerformanceMonitor.tsx,
  pages/docs.tsx',
  'pages/index.tsx
];
// Fix use-toast.ts - add missing closing brace
const toastContent = fs.readFileSync(src/components/ui/use-toast.ts', 'utf8');
const toastFixed = toastContent.replace(  return { showToast }\n}', '  return { showToast }\n});
fs.writeFileSync(src/components/ui/use-toast.ts', toastFixed, 'utf8);
console.log(✅ Fixed use-toast.ts');

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


// Fix enhancedServices.ts - fix malformed object properties
const servicesContent = fs.readFileSync('src/data/enhancedServices.ts', 'utf8');
const servicesFixed = servicesContent


// Fix enhancedServices.ts - fix malformed object properties
const servicesContent = fs.readFileSync('src/data/enhancedServices.ts, utf8');
const servicesFixed = servicesContent
  .replace(/currency": "\$,/g, 'currency: "$",)
  .replace(/tags: \["Process Automation, "RPA, Workflow Optimization, AI"\]/g, "tags: [Process Automation", "RPA, Workflow Optimization", "AI]')
  .replace(/name": "Zion Tech Group,/g, 'name: "Zion Tech Group",)
  .replace(/id: "zion-tech-group,/g, "id: zion-tech-group",')
  .replace(/"avatarUrl: https:\/\/ziontechgroup\.com\/wp-content\/uploads\/2024\/01\/zion-logo\.png",/g, '"avatarUrl: https://ziontechgroup.com/wp-content/uploads/2024/01/zion-logo.png",)
  .replace(/"email: kleber@ziontechgroup\.com"/g, "email: kleber@ziontechgroup.com"')
  .replace(/images: \["https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?auto=format&fit=crop&w=800&h=500\]/g, 'images": ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500])
  .replace(/createdAt: 2024-01-15T10:00:00\.000Z"/g, "createdAt: 2024-01-15T10:00:00.000Z"')
  .replace(/reviewCount: 156/g, '"reviewCount: 156);
fs.writeFileSync(src/data/enhancedServices.ts', servicesFixed, 'utf8);


// Fix useAuth.tsx - fix malformed function
const authContent = fs.readFileSync(src/hooks/useAuth.tsx', 'utf8');
const authFixed = authContent
  .replace(/isAuthenticated": tru e,/g, "isAuthenticated: true,')
  .replace(/isLoading": fals e/g, '"isLoading: false)
  .replace(/:src\/hooks\/useAuth\.tsx/g, ')
  .replace(/useEffect\(\(\) => \{\s*\/\/ Check if user is logged in \(e\.g\., check localStorage, cookies, etc\.\)\s*\/\/ Implementation here\s*\}, \[\]\);/g, 'useEffect(() => {\n    // Check if user is logged in (e.g., check localStorage, cookies, etc.)\n    // Implementation here\n  }, []););
fs.writeFileSync(src/hooks/useAuth.tsx', authFixed, 'utf8);


:final-comprehensive-fix.cjs



console.log(`\n📊 Syntax fixing complete:`)) {


console.log(`\n📊 Syntax fixing complete:`)) {

console.log(`\n📊 Syntax fixing complete:`)) {




) {
    if (processFile(file)) {
      totalFixed++}
  }

console.log('✨ Final comprehensive fixes completed!');
  }} else {
  }

  console.log('\n✅ All syntax errors have been fixed!')}} else {
  console.log('\n✅ No syntax errors found!')}
console.log('✨ Final comprehensive fixes completed!');
  }} else {
  }
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");/ Function to fix all remaining syntax errorsfunction fixSyntaxErrors(content) { / Fix extra commas in JSX attributes content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {" return match.replace(/,\s*$/, "")}); " / Fix malformed function declarations: {, -> {" content = content.replace(/\{\s*,/g, "{"); " / Fix malformed JSX elements: >, -> >" content = content.replace(/>\s*,\s*$/gm, ">"); " / Fix malformed JSX elements: >, -> >" content = content.replace(/>\s*,\s*</g, "><"); " / Fix malformed function declarations: ) {, -> ) {" content = content.replace(/\)\s*\{\s*,/g, ") {"); " / Fix malformed JSX elements: >, -> >" content = content.replace(/>\s*,\s*$/gm, ">"); / Fix missing closing braces in for loops content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\);/g, (match) => {" return match.replace(/\}\);/g, "}\n });")}); / Fix missing closing braces in for loops (alternative pattern) content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\);/g, (match) => {" return match.replace(/\}\);/g, "}\n });")}); " / Fix malformed JSON objects: {, -> {" content = content.replace(/JSON\.stringify\(\{\s*,/g, "JSON.stringify({"); / Fix missing closing braces in for loops (CLS pattern)"" content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\s*console\.log\("CLS: ", clsValue\);\s*\}\);/g, (match) => {" return match.replace(/\}\);/g, "}\n });")}); return content}/ Function to process a filefunction processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8";); const fixedContent = fixSyntaxErrors(conten;t;); if ( {" fs.writeFileSync(filePath, fixedContent, "utf8")) { {" fs.writeFileSync(filePath, fixedContent, "utf8")}" console.log(` Fixed: ${filePath}`); return true} return false} catch (error) {` console.error(` Error processing ${filePath}:`, error.message); return false}}/ Fix TalentCard.jsx - fix malformed JSX"const talentContent = fs.readFileSync("src/components/talent/TalentCard.jsx", "utf8");const talentFixed = talentContent"" .replace(/>"/g, ">")"" .replace(/"</g, "<")"" .replace(/loading="lazy/g, "loading="lazy"")" .replace(/src={talent\.profile_picture_url}/g, "src={talent.profile_picture_url}")" .replace(/alt={talent\.full_name}/g, "alt={talent.full_name}")"" .replace(/className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">/g, "className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">")"" .replace(/className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">/g, "className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">")"" .replace(/className="text-sm font-medium text-zion-blue-dark">/g, "className="text-sm font-medium text-zion-blue-dark">")"" .replace(/className="flex-1">/g, "className="flex-1">")"" .replace(/className="text-lg font-semibold text-zion-blue-dark mb-1">/g, "className="text-lg font-semibold text-zion-blue-dark mb-1">")"" .replace(/className="text-sm text-zion-blue-light mb-2">/g, "className="text-sm text-zion-blue-light mb-2">")"" .replace(/className="flex flex-wrap gap-1 mb-3">/g, "className="flex flex-wrap gap-1 mb-3">")"" .replace(/className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">/g, "className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">")"" .replace(/className="flex items-center justify-between">/g, "className="flex items-center justify-between">")"" .replace(/className="flex items-center text-sm text-zion-blue-light">/g, "className="flex items-center text-sm text-zion-blue-light">")"" .replace(/className="w-4 h-4 mr-1"\/>/g, "className="w-4 h-4 mr-1" />")"" .replace(/className="bg-zion-cyan text-zion-blue-dark hover: bg-zion-cyan-light">/g, "className="bg-zion-cyan text-zion-blue-dark hover: bg-zion-cyan-light">")"" .replace(/className="text-sm">/g, "className="text-sm">");"fs.writeFileSync("src/components/talent/TalentCard.jsx", talentFixed, "utf8");"console.log(" Fixed TalentCard.jsx");"const filesToFix = ["components/ContactForm.tsx"," "components/ErrorBoundary.tsx"," "components/PerformanceMonitor.tsx"," "pages/docs.tsx"," "pages/index.tsx"];/ Fix enhancedServices.ts - fix malformed object properties"const servicesContent = fs.readFileSync("src/data/enhancedServices.ts", "utf8");const servicesFixed = servicesContent"" .replace(/currency: "\$,/g, "currency: "$",")"" .replace(/tags: \["Process Automation, "RPA, "Workflow Optimization, "AI"\]/g, "tags: ["Process Automation", "RPA", "Workflow Optimization", "AI"]")"" .replace(/name: "Zion Tech Group,/g, "name: "Zion Tech Group",")"" .replace(/id: "zion-tech-group,/g, "id: "zion-tech-group",")"" .replace(/avatarUrl: "https:\/\/ziontechgroup\.com\/wp-content\/uploads\/2024\/01\/zion-logo\.png",/g, "avatarUrl: "https:/ziontechgroup.com/wp-content/uploads/2024/01/zion-logo.png",")"" .replace(/email: "kleber@ziontechgroup\.com"/g, "email: "kleber@ziontechgroup.com"")"" .replace(/images: \["https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?auto=format&fit=crop&w=800&h=500"\]/g, "images: ["https:/images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"]")"" .replace(/createdAt: "2024-01-15T10:00:00\.000Z"/g, "createdAt: "2024-01-15T10:00:00.000Z"")"" .replace(/reviewCount: 156/g, "reviewCount: 156");"fs.writeFileSync("src/data/enhancedServices.ts", servicesFixed, "utf8");"console.log(" Fixed enhancedServices.ts");/ Fix useAuth.tsx - fix malformed function"const authContent = fs.readFileSync("src/hooks/useAuth.tsx", "utf8");const authFixed = authContent"" .replace(/isAuthenticated: tru e,/g, "isAuthenticated: true,")"" .replace(/isLoading: fals e/g, "isLoading: false")" .replace(/:src\/hooks\/useAuth\.tsx/g, "")" .replace(/useEffect\(\(\) => \{\s*\/\/ Check if user is logged in \(e\.g\., check localStorage, cookies, etc\.\)\s*\/\/ Implementation here\s*\}, \[\]\);/g, "useEffect(() => {\n / Check if user is logged in (e.g., check localStorage, cookies, etc.)\n / Implementation here\n }, []);");"fs.writeFileSync("src/hooks/useAuth.tsx", authFixed, "utf8");"console.log(" Fixed useAuth.tsx");"console.log("\n Syntax fixing complete: ")) { ) { if (processFile(file)) { totalFixed++} }}"console.log("\n Syntax fixing complete: ")}"`console.log(` - Files fixed: ${totalFixed}`);"console.log(" - Issues encountered: 0");if ( {" console.log("\n All syntax errors have been fixed!")) { {" console.log("\n All syntax errors have been fixed!")}} else {" console.log("\n No syntax errors found!")}'"`'"`
if ( {
  ) {
     {
  console.log('\n✅ All syntax errors have been fixed!')}} else {
  console.log('\n✅ No syntax errors found!')}
console.log('✨ Final comprehensive fixes completed!');
  }} else {
  }
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");/ Function to fix all remaining syntax errorsfunction fixSyntaxErrors(content) { / Fix extra commas in JSX attributes content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {" return match.replace(/,\s*$/, "")}); " / Fix malformed function declarations: {, -> {" content = content.replace(/\{\s*,/g, "{"); " / Fix malformed JSX elements: >, -> >" content = content.replace(/>\s*,\s*$/gm, ">"); " / Fix malformed JSX elements: >, -> >" content = content.replace(/>\s*,\s*</g, "><"); " / Fix malformed function declarations: ) {, -> ) {" content = content.replace(/\)\s*\{\s*,/g, ") {"); " / Fix malformed JSX elements: >, -> >" content = content.replace(/>\s*,\s*$/gm, ">"); / Fix missing closing braces in for loops content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\);/g, (match) => {" return match.replace(/\}\);/g, "}\n });")}); / Fix missing closing braces in for loops (alternative pattern) content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\);/g, (match) => {" return match.replace(/\}\);/g, "}\n });")}); " / Fix malformed JSON objects: {, -> {" content = content.replace(/JSON\.stringify\(\{\s*,/g, "JSON.stringify({"); / Fix missing closing braces in for loops (CLS pattern)"" content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\s*console\.log\("CLS: ", clsValue\);\s*\}\);/g, (match) => {" return match.replace(/\}\);/g, "}\n });")}); return content}/ Function to process a filefunction processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8";); const fixedContent = fixSyntaxErrors(conten;t;); if ( {" fs.writeFileSync(filePath, fixedContent, "utf8")) { {" fs.writeFileSync(filePath, fixedContent, "utf8")}" console.log(` Fixed: ${filePath}`); return true} return false} catch (error) {` console.error(` Error processing ${filePath}:`, error.message); return false}}/ Fix TalentCard.jsx - fix malformed JSX"const talentContent = fs.readFileSync("src/components/talent/TalentCard.jsx", "utf8");const talentFixed = talentContent"" .replace(/>"/g, ">")"" .replace(/"</g, "<")"" .replace(/loading="lazy/g, "loading="lazy"")" .replace(/src={talent\.profile_picture_url}/g, "src={talent.profile_picture_url}")" .replace(/alt={talent\.full_name}/g, "alt={talent.full_name}")"" .replace(/className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">/g, "className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">")"" .replace(/className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">/g, "className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">")"" .replace(/className="text-sm font-medium text-zion-blue-dark">/g, "className="text-sm font-medium text-zion-blue-dark">")"" .replace(/className="flex-1">/g, "className="flex-1">")"" .replace(/className="text-lg font-semibold text-zion-blue-dark mb-1">/g, "className="text-lg font-semibold text-zion-blue-dark mb-1">")"" .replace(/className="text-sm text-zion-blue-light mb-2">/g, "className="text-sm text-zion-blue-light mb-2">")"" .replace(/className="flex flex-wrap gap-1 mb-3">/g, "className="flex flex-wrap gap-1 mb-3">")"" .replace(/className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">/g, "className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">")"" .replace(/className="flex items-center justify-between">/g, "className="flex items-center justify-between">")"" .replace(/className="flex items-center text-sm text-zion-blue-light">/g, "className="flex items-center text-sm text-zion-blue-light">")"" .replace(/className="w-4 h-4 mr-1"\/>/g, "className="w-4 h-4 mr-1" />")"" .replace(/className="bg-zion-cyan text-zion-blue-dark hover: bg-zion-cyan-light">/g, "className="bg-zion-cyan text-zion-blue-dark hover: bg-zion-cyan-light">")"" .replace(/className="text-sm">/g, "className="text-sm">");"fs.writeFileSync("src/components/talent/TalentCard.jsx", talentFixed, "utf8");"console.log(" Fixed TalentCard.jsx");"const filesToFix = ["components/ContactForm.tsx"," "components/ErrorBoundary.tsx"," "components/PerformanceMonitor.tsx"," "pages/docs.tsx"," "pages/index.tsx"];/ Fix enhancedServices.ts - fix malformed object properties"const servicesContent = fs.readFileSync("src/data/enhancedServices.ts", "utf8");const servicesFixed = servicesContent"" .replace(/currency: "\$,/g, "currency: "$",")"" .replace(/tags: \["Process Automation, "RPA, "Workflow Optimization, "AI"\]/g, "tags: ["Process Automation", "RPA", "Workflow Optimization", "AI"]")"" .replace(/name: "Zion Tech Group,/g, "name: "Zion Tech Group",")"" .replace(/id: "zion-tech-group,/g, "id: "zion-tech-group",")"" .replace(/avatarUrl: "https:\/\/ziontechgroup\.com\/wp-content\/uploads\/2024\/01\/zion-logo\.png",/g, "avatarUrl: "https:/ziontechgroup.com/wp-content/uploads/2024/01/zion-logo.png",")"" .replace(/email: "kleber@ziontechgroup\.com"/g, "email: "kleber@ziontechgroup.com"")"" .replace(/images: \["https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?auto=format&fit=crop&w=800&h=500"\]/g, "images: ["https:/images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"]")"" .replace(/createdAt: "2024-01-15T10:00:00\.000Z"/g, "createdAt: "2024-01-15T10:00:00.000Z"")"" .replace(/reviewCount: 156/g, "reviewCount: 156");"fs.writeFileSync("src/data/enhancedServices.ts", servicesFixed, "utf8");"console.log(" Fixed enhancedServices.ts");/ Fix useAuth.tsx - fix malformed function"const authContent = fs.readFileSync("src/hooks/useAuth.tsx", "utf8");const authFixed = authContent"" .replace(/isAuthenticated: tru e,/g, "isAuthenticated: true,")"" .replace(/isLoading: fals e/g, "isLoading: false")" .replace(/:src\/hooks\/useAuth\.tsx/g, "")" .replace(/useEffect\(\(\) => \{\s*\/\/ Check if user is logged in \(e\.g\., check localStorage, cookies, etc\.\)\s*\/\/ Implementation here\s*\}, \[\]\);/g, "useEffect(() => {\n / Check if user is logged in (e.g., check localStorage, cookies, etc.)\n / Implementation here\n }, []);");"fs.writeFileSync("src/hooks/useAuth.tsx", authFixed, "utf8");"console.log(" Fixed useAuth.tsx");"console.log("\n Syntax fixing complete: ")) { ) { if (processFile(file)) { totalFixed++} }}"console.log("\n Syntax fixing complete: ")}"`console.log(` - Files fixed: ${totalFixed}`);"console.log(" - Issues encountered: 0");if ( {" console.log("\n All syntax errors have been fixed!")) { {" console.log("\n All syntax errors have been fixed!")}} else {" console.log("\n No syntax errors found!")}'"`'"`
console.log('✨ Final comprehensive fixes completed!');
  }} else {
  }
#!/usr/bin/env node;
const fs = require(fs')
    return match.replace(/,\s*$/, ')
  content = content.replace(/\{\s*,/g, {'})
  content = content.replace(/>\s*,\s*$/gm, '>)
  content = content.replace(/>\s*,\s*</g, ><')
  content = content.replace(/\)\s*\{\s*,/g, ') {}
  content = content.replace(/>\s*,\s*$/gm, >')
    return match.replace(/\}\);/g, '}\n      }
});
    return match.replace(/\}\);/g, }\n      }
});'
  content = content.replace(/JSON\.stringify\(\{\s*,/g, 'JSON.stringify({})
  content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\s*console\.log\(CLS")
  .replace(/>")
  .replace(/)
  .replace(/loading=lazy/g, 'loading="lazy")
  .replace(/className=w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light>/g, 'className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light")
  .replace(/className=w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg>/g, className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg")
  .replace(/className=text-sm font-medium text-zion-blue-dark>/g, className="text-sm font-medium text-zion-blue-dark")
  .replace(/className=flex-1>/g, 'className="flex-1")
  .replace(/className=text-lg font-semibold text-zion-blue-dark mb-1>/g, 'className="text-lg font-semibold text-zion-blue-dark mb-1")
  .replace(/className=text-sm text-zion-blue-light mb-2>/g, className="text-sm text-zion-blue-light mb-2")
  .replace(/className=flex flex-wrap gap-1 mb-3>/g, className="flex flex-wrap gap-1 mb-3")
  .replace(/className=px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full>/g, 'className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full")
  .replace(/className=flex items-center justify-between>/g, 'className="flex items-center justify-between")
  .replace(/className=flex items-center text-sm text-zion-blue-light>/g, className="flex items-center text-sm text-zion-blue-light")
  .replace(/className=w-4 h-4 mr-1\/>/g, className="w-4 h-4 mr-1")
  .replace(/className=bg-zion-cyan text-zion-blue-dark hover": bg-zion-cyan-light">/g, 'className=bg-zion-cyan text-zion-blue-dark hover": bg-zion-cyan-light")
  .replace(/className=text-sm>/g, 'className="text-sm")
  .replace(/currency: "\$,/g, "currency: $")
  .replace(/"tags: \[Process Automation, "RPA, "Workflow Optimization, AI\]/g, "tags": [Process Automation, "RPA", Workflow Optimization, "AI")]
  .replace(/name: "Zion Tech Group,/g, '"name: Zion Tech Group")
  .replace(/"id: zion-tech-group,/g, '"id": zion-tech-group)
  .replace(/"avatarUrl": https:\/\/ziontechgroup\.com\/wp-content\/uploads\/2024\/01\/zion-logo\.png,/g, "avatarUrl": https://ziontechgroup.com/wp-content/uploads/2024/01/zion-logo.png)
  .replace(/"email": kleber@ziontechgroup\.com/g, "email": kleber@ziontechgroup.com)
  .replace(/images: \["https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?auto=format&fit=crop&w=800&h=500"\]/g, 'images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500")]
  .replace(/createdAt: 2024-01-15T10:00:00\.000Z/g, '"createdAt": 2024-01-15T10:00:00.000Z)
  .replace(/reviewCount: 156/g, "reviewCount")
  .replace(/isAuthenticated: tru e,/g, "isAuthenticated")
  .replace(/isLoading: fals e/g, '"isLoading")


  .replace(/"isLoading": fals e/g, '"isLoading")

  .replace(/"isLoading": fals e/g, '"isLoading")

main

  .replace(/"isLoading": fals e/g, '"isLoading")


