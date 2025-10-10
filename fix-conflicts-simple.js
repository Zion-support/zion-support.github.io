import fs from 'fs';
import { execSync } from 'child_process';

function fixAllMergeConflicts() {
  try {
    // Find all files with merge conflicts
    const result = execSync('grep -r "^<<<<<<<\\|^=======\\|^>>>>>>>" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l', { encoding: 'utf8' });
    const files = result.trim().split('\n').filter(f => f);
    
    console.log(`Found merge conflicts in ${files.length} files:`, files);
    
    files.forEach(filePath => {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Simple approach: remove all merge conflict markers and keep only the content after =======
        const lines = content.split('\n');
        const resolvedLines = [];
        let skipUntilNextMarker = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          if (line.trim().startsWith('<<<<<<<')) {
            skipUntilNextMarker = true;
            continue;
          } else if (line.trim().startsWith('=======')) {
            skipUntilNextMarker = false;
            continue;
          } else if (line.trim().startsWith('>>>>>>>')) {
            skipUntilNextMarker = false;
            continue;
          }
          
          if (!skipUntilNextMarker) {
            resolvedLines.push(line);
          }
        }
        
        const resolvedContent = resolvedLines.join('\n');
        fs.writeFileSync(filePath, resolvedContent);
        console.log(`Fixed merge conflicts in ${filePath}`);
        
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    });
    
  } catch (error) {
    console.error('Error finding files with merge conflicts:', error.message);
  }
}

fixAllMergeConflicts();