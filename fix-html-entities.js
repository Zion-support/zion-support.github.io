import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixHtmlEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace HTML entities with proper characters
    const replacements = {
      '&quot;': '"',
      '&apos;': "'",
      '&lt;': '<',
      '&gt;': '>',
      '&amp;': '&',
      '&#39;': "'",
      '&lsquo;': "'",
      '&rsquo;': "'",
      '&ldquo;': '"',
      '&rdquo;': '"'
    };
    
    let hasChanges = false;
    for (const [entity, replacement] of Object.entries(replacements)) {
      if (content.includes(entity)) {
        content = content.replace(new RegExp(entity, 'g'), replacement);
        hasChanges = true;
      }
    }
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed HTML entities in ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Fix the contact page
const contactPage = path.join(__dirname, 'app/contact/page.tsx');
fixHtmlEntities(contactPage);

console.log('Done fixing HTML entities!');