const fs = require('fs');
const path = require('path');

// Function to fix a single AI page file
function fixAiPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the common syntax errors
    content = content
      // Remove extra semicolons after import statements
      .replace(/from 'lucide-react'\s*;\s*$/, "from 'lucide-react'")
      // Fix object literals with extra semicolons
      .replace(/\{\s*;\s*icon:/g, '{\n      icon:')
      .replace(/\{\s*;\s*name:/g, '{\n      name:')
      // Fix switch statements with extra semicolons
      .replace(/switch\(serviceType\)\s*\{\s*;/g, 'switch(serviceType) {')
      // Fix return statements with extra semicolons
      .replace(/return\s*\(\s*;\s*<>/g, 'return (\n    <>')
      // Fix JSX syntax issues
      .replace(/md:\s*text-/g, 'md:text-')
      .replace(/sm:\s*flex-row/g, 'sm:flex-row')
      .replace(/md:\s*grid-cols-/g, 'md:grid-cols-')
      .replace(/hover:\s*bg-/g, 'hover:bg-')
      .replace(/hover:\s*from-/g, 'hover:from-')
      // Fix template literals
      .replace(/\{\s*"bg-gradient-to-r "\s*\+\s*getGradientColors\(\)\s*\+\s*" bg-clip-text text-transparent"\s*\}\s*>/g, '{"bg-gradient-to-r " + getGradientColors() + " bg-clip-text text-transparent"}>')
      .replace(/\{\s*"bg-gradient-to-r "\s*\+\s*getButtonColors\(\)\s*\+\s*" text-white/g, '{"bg-gradient-to-r " + getButtonColors() + " text-white')
      .replace(/\{\s*"w-16 h-16 bg-gradient-to-r "\s*\+\s*getIconColors\(\)\s*\+\s*" rounded-2xl/g, '{"w-16 h-16 bg-gradient-to-r " + getIconColors() + " rounded-2xl')
      // Fix semicolons in JSX
      .replace(/;\s*$/gm, '')
      .replace(/;\s*<ArrowRight/g, '\n                  <ArrowRight')
      .replace(/;\s*<CheckCircle/g, '\n                    <CheckCircle')
      .replace(/;\s*<Star/g, '\n                      <Star')
      // Fix extra semicolons in function calls
      .replace(/\(\s*;\s*$/gm, '(')
      .replace(/\(\s*;\s*<div/g, '(\n                <div')
      .replace(/\(\s*;\s*<button/g, '(\n                <button')
      // Add missing serviceType variable
      .replace(/const\s+\w+Page:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/, (match) => {
        return match + '\n  const serviceType = \'ai\'; // Define serviceType variable';
      })
      // Fix export statements
      .replace(/export\s+default\s+\w+Page\s*;\s*;\s*$/, (match) => {
        return match.replace(/;\s*;\s*$/, '');
      })
      // Clean up extra semicolons and spaces
      .replace(/\s*;\s*$/gm, '')
      .replace(/\s*;\s*<ArrowRight/g, '\n                  <ArrowRight')
      .replace(/\s*;\s*<CheckCircle/g, '\n                    <CheckCircle')
      .replace(/\s*;\s*<Star/g, '\n                      <Star')
      // Fix specific JSX issues
      .replace(/className=\{\s*"bg-gradient-to-r "\s*\+\s*getGradientColors\(\)\s*\+\s*" bg-clip-text text-transparent"\s*\}\s*>/g, 'className={"bg-gradient-to-r " + getGradientColors() + " bg-clip-text text-transparent"}>')
      .replace(/className=\{\s*"bg-gradient-to-r "\s*\+\s*getButtonColors\(\)\s*\+\s*" text-white/g, 'className={"bg-gradient-to-r " + getButtonColors() + " text-white')
      .replace(/className=\{\s*"w-16 h-16 bg-gradient-to-r "\s*\+\s*getIconColors\(\)\s*\+\s*" rounded-2xl/g, 'className={"w-16 h-16 bg-gradient-to-r " + getIconColors() + " rounded-2xl')
      // Fix specific text content issues
      .replace(/Transform your business with our advanced \w+ services\.;\s*$/gm, (match) => {
        return match.replace(/;\s*$/, '');
      })
      .replace(/Contact our experts today and discover how our \w+ solutions can drive your success\.;\s*$/gm, (match) => {
        return match.replace(/;\s*$/, '');
      })
      // Fix button text issues
      .replace(/Get Started Today;\s*$/gm, 'Get Started Today')
      .replace(/Schedule Consultation;\s*$/gm, 'Schedule Consultation')
      // Fix hover classes
      .replace(/hover:\s*bg-cyan-500\/10/g, 'hover:bg-cyan-500/10')
      .replace(/hover:\s*bg-white\/10/g, 'hover:bg-white/10')
      .replace(/hover:\s*from-cyan-600 hover:to-purple-600/g, 'hover:from-cyan-600 hover:to-purple-600')
      .replace(/hover:\s*from-purple-600 hover:to-pink-600/g, 'hover:from-purple-600 hover:to-pink-600')
      .replace(/hover:\s*from-green-600 hover:to-emerald-600/g, 'hover:from-green-600 hover:to-emerald-600')
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/\s+$/gm, '');
    
    // Write the fixed content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all AI page files
const appDir = path.join(__dirname, 'app');
const aiPages = [];

function findAiPages(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && file.startsWith('ai-')) {
      const pageFile = path.join(filePath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        aiPages.push(pageFile);
      }
    } else if (stat.isDirectory()) {
      findAiPages(filePath);
    }
  }
}

// Find all AI pages
findAiPages(appDir);

console.log(`Found ${aiPages.length} AI pages to fix`);

// Fix all AI pages
let fixedCount = 0;
for (const page of aiPages) {
  if (fixAiPage(page)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} out of ${aiPages.length} AI pages`);