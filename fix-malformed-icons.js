import fs from 'fs';

const filesToFix = [
  'app/ai-healthcare-platform/page.tsx',
  'app/ai-voice-assistant-enterprise/page.tsx',
  'app/api-docs/page.tsx'
];

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed icon tags
    content = content.replace(/icon: <className="w-[0-9]+ h-[0-9]+" \/>/g, 'icon: <Star className="w-6 h-6" />');
    content = content.replace(/icon: <className="w-[0-9]+ h-[0-9]+" \/>/g, 'icon: <CheckCircle className="w-6 h-6" />');
    
    // Fix other malformed patterns
    content = content.replace(/<className="w-[0-9]+ h-[0-9]+" \/>/g, '<Star className="w-6 h-6" />');
    
    // Fix malformed JSX
    content = content.replace(/<className="w-[0-9]+ h-[0-9]+" \/>/g, '<Star className="w-6 h-6" />');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

filesToFix.forEach(fixFile);
console.log('Malformed icons fixed');