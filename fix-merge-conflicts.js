import fs from 'fs';

// List of files with merge conflicts
const filesWithConflicts = [
  'app/ai-email-assistant/page.tsx',
  'app/ai-email-marketing-automation/page.tsx',
  'app/ai-expense-tracker/page.tsx',
  'app/ai-invoice-generator/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after the last =======
    const lines = content.split('\n');
    let fixedLines = [];
    let inConflict = false;
    let keepContent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepContent = false;
        continue;
      }
      
      if (line.includes('=======')) {
        keepContent = true;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepContent = false;
        continue;
      }
      
      if (!inConflict || keepContent) {
        fixedLines.push(line);
      }
    }
    
    // Clean up any remaining issues
    let fixedContent = fixedLines.join('\n');
    
    // Remove any remaining merge conflict markers
    fixedContent = fixedContent.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    fixedContent = fixedContent.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up empty lines
    fixedContent = fixedContent.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithConflicts.forEach(fixMergeConflicts);
console.log('Merge conflict fixing completed!');