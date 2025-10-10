const fs = require('fs');
const path = require('path');

// List of AI service pages that need fixing
const aiPages = [
  'ai-automation',
  'ai-analytics', 
  'ai-chatbot-builder',
  'ai-cybersecurity',
  'ai-data-analytics',
  'ai-healthcare',
  'ai-fintech'
];

// Function to fix common syntax errors in AI pages
function fixAIPage(pageName) {
  const filePath = path.join(__dirname, 'app', pageName, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common syntax errors
  content = content.replace(/Ai ([A-Za-z]+);/g, 'AI $1');
  content = content.replace(/ai ([a-z]+) solution/g, 'AI $1 solution');
  content = content.replace(/Get Started;/g, 'Get Started');
  content = content.replace(/View Demo;/g, 'View Demo');
  content = content.replace(/Learn More;/g, 'Learn More');
  content = content.replace(/Contact Us;/g, 'Contact Us');
  
  // Fix malformed JSX closing tags
  content = content.replace(/  <\//g, '  </');
  content = content.replace(/;$/gm, '');
  
  // Fix specific patterns
  content = content.replace(/className="[^"]*">;\s*$/gm, (match) => match.replace(';', ''));
  content = content.replace(/text-[^"]*">;\s*$/gm, (match) => match.replace(';', ''));
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
}

// Fix all AI pages
aiPages.forEach(fixAIPage);

console.log('AI pages fixed successfully!');