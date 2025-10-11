const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Remove all duplicate Footer and closing fragment tags
content = content.replace(/\s*<Footer \/>\s*<\/>\s*/g, '');

// Remove duplicate closing tags that appear in the middle of JSX
content = content.replace(/\s*<\/>\s*<\/div>\s*$/gm, '\n          </div>');

// Fix the structure - ensure proper closing
const lines = content.split('\n');
const fixedLines = [];

let inStatsSection = false;
let inFeaturesSection = false;
let inCtaSection = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('Stats Section')) {
    inStatsSection = true;
    inFeaturesSection = false;
    inCtaSection = false;
  } else if (line.includes('Features Section')) {
    inStatsSection = false;
    inFeaturesSection = true;
    inCtaSection = false;
  } else if (line.includes('CTA Section')) {
    inStatsSection = false;
    inFeaturesSection = false;
    inCtaSection = true;
  }
  
  // Skip duplicate Footer and closing fragment tags
  if (line.includes('<Footer />') || line.includes('</>')) {
    continue;
  }
  
  fixedLines.push(line);
}

// Add the proper closing structure at the end
const finalContent = fixedLines.join('\n');

// Ensure proper closing
if (!finalContent.includes('<Footer />')) {
  const lastSectionIndex = finalContent.lastIndexOf('</section>');
  if (lastSectionIndex !== -1) {
    const beforeLastSection = finalContent.substring(0, lastSectionIndex);
    const afterLastSection = finalContent.substring(lastSectionIndex);
    
    const properEnding = afterLastSection.replace('</section>', '</section>\n      </div>\n      \n      <Footer />\n    </>');
    
    fs.writeFileSync('/workspace/app/page.tsx', beforeLastSection + properEnding, 'utf8');
  } else {
    fs.writeFileSync('/workspace/app/page.tsx', finalContent, 'utf8');
  }
} else {
  fs.writeFileSync('/workspace/app/page.tsx', finalContent, 'utf8');
}

console.log('Fixed page.tsx');