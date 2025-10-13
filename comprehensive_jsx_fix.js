import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove any remaining merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n.*?\n>>>>>>> [^\n]+\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n/g, '');
      modified = true;
    }
    
    // Fix common JSX structure issues
    const lines = content.split('\n');
    const newLines = [];
    let inJSX = false;
    let tagStack = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const trimmedLine = line.trim();
      
      // Skip lines that are clearly malformed
      if (trimmedLine.includes('</string>') || 
          trimmedLine.includes('</AnalyticsProviderProps>') ||
          trimmedLine.includes('</AnalyticsContextType>') ||
          trimmedLine.match(/^<\/[A-Z][a-zA-Z]*>$/) ||
          trimmedLine.match(/^<\/[a-z]+>$/) && !trimmedLine.match(/^<\/[a-z]+>$/)) {
        modified = true;
        continue;
      }
      
      // Fix common malformed closing tags
      line = line.replace(/<\/[A-Z][a-zA-Z]*Props>/g, '');
      line = line.replace(/<\/[A-Z][a-zA-Z]*Type>/g, '');
      line = line.replace(/<\/string>/g, '');
      line = line.replace(/<\/number>/g, '');
      line = line.replace(/<\/boolean>/g, '');
      
      // Fix common JSX tag mismatches
      line = line.replace(/<(\w+)>([^<]*)<\/[A-Z][a-zA-Z]*>/g, '<$1>$2</$1>');
      line = line.replace(/<(\w+)>([^<]*)<\/[a-z]+>/g, '<$1>$2</$1>');
      
      // Fix specific common issues
      line = line.replace(/<title>([^<]*)<\/Helmet>/g, '<title>$1</title>');
      line = line.replace(/<meta([^>]*)><\/meta>/g, '<meta$1 />');
      line = line.replace(/<h(\d+)>([^<]*)<\/div>/g, '<h$1>$2</h$1>');
      line = line.replace(/<p>([^<]*)<\/div>/g, '<p>$1</p>');
      line = line.replace(/<span>([^<]*)<\/div>/g, '<span>$1</span>');
      line = line.replace(/<div>([^<]*)<\/h(\d+)>/g, '<div>$1</div>');
      line = line.replace(/<div>([^<]*)<\/p>/g, '<div>$1</div>');
      line = line.replace(/<div>([^<]*)<\/span>/g, '<div>$1</div>');
      line = line.replace(/<div>([^<]*)<\/ul>/g, '<div>$1</div>');
      line = line.replace(/<div>([^<]*)<\/li>/g, '<div>$1</div>');
      line = line.replace(/<div>([^<]*)<\/section>/g, '<div>$1</div>');
      line = line.replace(/<div>([^<]*)<\/nav>/g, '<div>$1</div>');
      line = line.replace(/<div>([^<]*)<\/footer>/g, '<div>$1</div>');
      line = line.replace(/<div>([^<]*)<\/button>/g, '<div>$1</div>');
      line = line.replace(/<div>([^<]*)<\/Link>/g, '<div>$1</div>');
      
      // Fix icon components
      line = line.replace(/<(\w+)>([^<]*)<\/[A-Z][a-zA-Z]*>/g, '<$1>$2</$1>');
      
      // Fix specific icon issues
      line = line.replace(/<ArrowRight>([^<]*)<\/ArrowRight>/g, '<ArrowRight className="w-5 h-5" />');
      line = line.replace(/<Sparkles>([^<]*)<\/Sparkles>/g, '<Sparkles className="w-5 h-5" />');
      line = line.replace(/<Star>([^<]*)<\/Star>/g, '<Star className="w-5 h-5" />');
      line = line.replace(/<Mail>([^<]*)<\/Mail>/g, '<Mail className="w-5 h-5" />');
      line = line.replace(/<Smartphone>([^<]*)<\/Smartphone>/g, '<Smartphone className="w-5 h-5" />');
      line = line.replace(/<Globe>([^<]*)<\/Globe>/g, '<Globe className="w-5 h-5" />');
      line = line.replace(/<GlobeIcon>([^<]*)<\/GlobeIcon>/g, '<Globe className="w-5 h-5" />');
      line = line.replace(/<Shield>([^<]*)<\/Shield>/g, '<Shield className="w-5 h-5" />');
      line = line.replace(/<Brain>([^<]*)<\/Brain>/g, '<Brain className="w-5 h-5" />');
      line = line.replace(/<Users>([^<]*)<\/Users>/g, '<Users className="w-5 h-5" />');
      line = line.replace(/<Award>([^<]*)<\/Award>/g, '<Award className="w-5 h-5" />');
      line = line.replace(/<Zap>([^<]*)<\/Zap>/g, '<Zap className="w-5 h-5" />');
      line = line.replace(/<Code>([^<]*)<\/Code>/g, '<Code className="w-5 h-5" />');
      line = line.replace(/<Database>([^<]*)<\/Database>/g, '<Database className="w-5 h-5" />');
      line = line.replace(/<Cloud>([^<]*)<\/Cloud>/g, '<Cloud className="w-5 h-5" />');
      line = line.replace(/<BarChart3>([^<]*)<\/BarChart3>/g, '<BarChart3 className="w-5 h-5" />');
      
      // Fix 'use client' directive placement
      if (line.includes("'use client'") && !line.startsWith("'use client'")) {
        line = line.replace(/.*'use client';.*\n/g, '');
        if (i === 0) {
          newLines.unshift("'use client';");
        }
        modified = true;
      }
      
      // Fix duplicate imports
      if (line.trim().startsWith('import ') && newLines.some(l => l.trim() === line.trim())) {
        modified = true;
        continue;
      }
      
      newLines.push(line);
    }
    
    // Clean up any remaining malformed tags at the end
    while (newLines.length > 0 && 
           (newLines[newLines.length - 1].trim().match(/^<\/[A-Z][a-zA-Z]*>$/) ||
            newLines[newLines.length - 1].trim().match(/^<\/[a-z]+>$/))) {
      newLines.pop();
      modified = true;
    }
    
    if (modified) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed JSX issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixJSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixJSXFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixJSXFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix issues in app directory
const appDir = path.join(__dirname, 'app');
const fixedCount = findAndFixJSXFiles(appDir);

console.log(`Fixed JSX issues in ${fixedCount} files`);