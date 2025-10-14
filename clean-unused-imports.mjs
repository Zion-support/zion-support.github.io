import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files with unused imports to clean up
const filesToClean = [
  'app/about/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-automation-platform/page.tsx',
  'app/ai-customer-sentiment-tracker/page.tsx',
  'app/ai-healthcare-diagnostics/page.tsx'
];

// Clean unused imports for each file
filesToClean.forEach(filePath => {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused imports based on the specific files
    if (filePath === 'app/about/page.tsx') {
      content = content.replace(/Mail, |Smartphone, /g, '');
    }
    
    if (filePath === 'app/ai-analytics/page.tsx') {
      content = content.replace(/Star, |Globe, |Mail, |Phone, |Lightbulb, /g, '');
    }
    
    if (filePath === 'app/ai-automation-platform/page.tsx') {
      content = content.replace(/Zap, /g, '');
    }
    
    if (filePath === 'app/ai-customer-sentiment-tracker/page.tsx') {
      content = content.replace(/TrendingUp, |MessageSquare, |Smile, |AlertCircle, /g, '');
    }
    
    if (filePath === 'app/ai-healthcare-diagnostics/page.tsx') {
      content = content.replace(/ArrowRight, |Brain, |Shield, |Users, |BarChart3, |CheckCircle, |Sparkles, |Mail, |Smartphone, |Globe, /g, '');
    }
    
    // Clean up any double commas or trailing commas
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*\)/g, ')');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Cleaned unused imports: ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
});

console.log('Unused imports cleaning completed!');