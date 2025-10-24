<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");
"
// List of problematic pages that need dynamic rendering;"
const problematicPages = ["'"
  'ai-content-generator","'"
  'ai-email-automation", "'"
  'ai-email-marketing-automation","'"
  'ai-expense-tracker","'"
  'ai-invoice-generator","'"
  'ai-social-media-manager","'"
  'ai-video-editor","'"
  'ai-automation","'"
  'ai-chatbot-builder","'"
  'ai-ecommerce-optimizer-pro","'"
  'ai-financial-analytics-pro",;"'"
  'ai-project-management-pro";
=======
const fs = require('fs');
const path = require('path');
;
// List of problematic pages that need dynamic rendering;
const problematicPages = [;
  'ai-content-generator',;
  'ai-email-automation',;
  'ai-email-marketing-automation',;
  'ai-expense-tracker',;
  'ai-invoice-generator',;
  'ai-social-media-manager',;
  'ai-video-editor',;
  'ai-automation',;
  'ai-chatbot-builder',;
  'ai-ecommerce-optimizer-pro',;
  'ai-financial-analytics-pro','ai-project-management-pro'
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
];
;
// Function to add dynamic export to a file;
<<<<<<< HEAD
function addDynamicExport(filePath) { "
;"
try { ;"'"
let content = fs.readFileSync(filePath, 'utf8");"
"
    // Check if dynamic export already exists;"'"
if (content.includes('export const dynamic")) {;
return false;
, , }
    }"
"
    // Add dynamic export after the imports;"'"
const importMatch = content.match(/import.*from 'lucide-react";/);"
    if (importMatch) {;"
const insertPoint = importMatch.index + importMatch[0,].length;"'"
      const dynamicExport = "\n\nexport const dynamic = 'force-dynamic';\n";
      content = content.slice(0, insertPoint) + dynamicExport + content.slice(insertPoint);"
;"
fs.writeFileSync(filePath, content);"
      console.log(`Added dynamic export to: "${filePath",;}`);
      return true;
    }
;
return false;
  } catch (error) {;
=======
function addDynamicExport(filePath) {;
;
try { ;
let content = fs.readFileSync(filePath, 'utf8');
;
    // Check if dynamic export already exists;
if (content.includes('export const dynamic')) {;
return false}
    }
    // Add dynamic export after the imports;
const importMatch = content.match(/import.*from 'lucide-react';/);
    if (importMatch) {;
const insertPoint = importMatch.index + importMatch[0].length;
      const dynamicExport = "\n\nexport const dynamic = 'force-dynamic';\n"
      content = content.slice(0, insertPoint) + dynamicExport + content.slice(insertPoint);
;"
fs.writeFileSync(filePath, content);"
      console.log(`Added dynamic export to: "${filePath"}`);
      return true}
return false} catch (error) {;`
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
console.error(`Error processing ${filePath}:`, error.message);
    return false}
}
<<<<<<< HEAD

// Fix all problematic pages;"
let fixedCount = 0;"
for(const page, of, problematicPages) { ;"'"
const filePath = path.join(__dirname, 'app', page, 'page.tsx");
=======
// Fix all problematic pages;
let fixedCount = 0;
for(const page, of, problematicPages) { ;
const filePath = path.join(__dirname, 'app', page, 'page.tsx');
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  if (fs.existsSync(filePath)) {;
if (addDynamicExport(filePath)) {;
fixedCount++}
  }
<<<<<<< HEAD
}"
;"
console.log(`Added dynamic exports to ${fixedCount} pages`);"'"
=======
}`"
console.log(`Added dynamic exports to ${fixedCount} pages`);";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
