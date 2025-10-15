import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the file
const filePath = path.join(__dirname, 'app/data/servicesData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Remove all merge conflict markers and keep the HEAD version
const lines = content.split('\n');
const cleanedLines = [];
let inConflict = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.startsWith('<<<<<<< HEAD')) {
    inConflict = true;
    continue;
  }
  
  if (line.startsWith('=======')) {
    // Skip until we find the end marker
    continue;
  }
  
  if (line.startsWith('>>>>>>>')) {
    inConflict = false;
    continue;
  }
  
  if (!inConflict) {
    cleanedLines.push(line);
  }
}

// Write the cleaned content back
const cleanedContent = cleanedLines.join('\n');
fs.writeFileSync(filePath, cleanedContent, 'utf8');

console.log('Merge conflicts cleaned up successfully!');