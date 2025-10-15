import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const utilityFiles = [
  'app/utils/apiClient.ts',
  'app/utils/advancedCaching.ts',
  'app/utils/errorHandler.ts',
  'app/utils/advancedAnalytics.ts',
  'app/utils/analytics.ts'
];

utilityFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  }
});

console.log('Fixed all utility file conflicts');