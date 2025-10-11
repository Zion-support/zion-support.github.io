const fs = require('fs');

function checkJSXStructure(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Count opening and closing tags
    const openDivs = (content.match(/<div/g) || []).length;
    const closeDivs = (content.match(/<\/div>/g) || []).length;
    const openSections = (content.match(/<section/g) || []).length;
    const closeSections = (content.match(/<\/section>/g) || []).length;
    const openMain = (content.match(/<main/g) || []).length;
    const closeMain = (content.match(/<\/main>/g) || []).length;
    
    console.log(`\n${filePath}:`);
    console.log(`  <div>: ${openDivs} open, ${closeDivs} close (${openDivs - closeDivs} unclosed)`);
    console.log(`  <section>: ${openSections} open, ${closeSections} close (${openSections - closeSections} unclosed)`);
    console.log(`  <main>: ${openMain} open, ${closeMain} close (${openMain - closeMain} unclosed)`);
    
    if (openDivs !== closeDivs || openSections !== closeSections || openMain !== closeMain) {
      console.log(`  ❌ JSX structure issues found!`);
    } else {
      console.log(`  ✅ JSX structure looks good`);
    }
  } catch (error) {
    console.error(`Error checking ${filePath}:`, error.message);
  }
}

const files = [
  'app/ai-customer-support/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-workflow-automation/page.tsx'
];

files.forEach(checkJSXStructure);