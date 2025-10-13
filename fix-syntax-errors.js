import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
=======
// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix misplaced variable declarations
  const lines = content.split('\n');
  const fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Fix lines that have variable declarations in the middle of object literals
    if (line.includes('const ') && line.includes('= [];') && 
        (line.includes('{') || line.includes('}') || line.includes(':'))) {
      // This is a misplaced variable declaration, skip it
      continue;
    }
    
    // Fix malformed object literals
    if (line.includes('{') && line.includes('const ') && line.includes('= []')) {
      // Split the line and fix it
      const parts = line.split('{');
      if (parts.length > 1) {
        const beforeBrace = parts[0].trim();
        const afterBrace = parts.slice(1).join('{');
        
        // Add the variable declaration before the object
        if (beforeBrace.includes('const ')) {
          const varName = beforeBrace.match(/const\s+(\w+)\s*=\s*\[\]/);
          if (varName) {
            fixedLines.push(`  const ${varName[1]} = [];`);
            fixedLines.push(`  const analyticsStats = [`);
            fixedLines.push(afterBrace);
            modified = true;
            continue;
          }
        }
      }
    }
    
    // Fix malformed import statements
    if (line.includes('import {') && line.includes('} from') && line.includes(';import')) {
      const parts = line.split(';import');
      if (parts.length > 1) {
        fixedLines.push(parts[0] + ';');
        fixedLines.push('import ' + parts[1]);
        modified = true;
        continue;
      }
    }
    
    // Fix JSX fragment issues
    if (line.includes('<>') && !line.includes('</>')) {
      // Check if there's a closing tag later
      let hasClosing = false;
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].includes('</>')) {
          hasClosing = true;
          break;
        }
      }
      if (!hasClosing) {
        // Add closing tag at the end of the component
        const lastLineIndex = lines.length - 1;
        if (lastLineIndex > i) {
          lines[lastLineIndex] = '  </>\n  );';
          modified = true;
        }
      }
    }
    
    fixedLines.push(line);
  }
  
  if (modified) {
    content = fixedLines.join('\n');
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in: ${filePath}`);
  }
}

// Main execution
console.log('Starting syntax error fixes...');

const appDir = path.join(process.cwd(), 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} files to process`);

for (const file of files) {
  try {
    fixSyntaxErrors(file);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log('Syntax error fixes completed!');
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
