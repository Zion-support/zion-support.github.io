#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const filesToFix = [
  'app/ai-customer-support/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-fintech/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> cursor\/enhance-app-with-new-services-and-futuristic-design-4856\n/g, '');
    
    // Fix common JSX issues
    content = content.replace(/<\/div>\s*<\/div>\s*<\/main>\s*<Footer \/>\s*<\/div>\s*<\/>/g, '</div>\n      </main>\n      <Footer />\n    </>');
    content = content.replace(/<\/div>\s*<\/main>\s*<Footer \/>\s*<\/div>\s*<\/>/g, '</div>\n      </main>\n      <Footer />\n    </>');
    
    // Fix pricingPlans vs pricing variable names
    content = content.replace(/pricingPlans\.map/g, 'pricing.map');
    
    // Fix missing closing tags
    content = content.replace(/<\/section>\s*<\/div>\s*<\/main>\s*<Footer \/>\s*<\/>/g, '</section>\n        </main>\n        <Footer />\n      </div>\n    </>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    fixMergeConflicts(fullPath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Merge conflict fixing completed!');