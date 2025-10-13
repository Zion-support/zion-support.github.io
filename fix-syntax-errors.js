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
// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    if (!fs.existsSync(filePath) || (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts'))) {
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Fix common syntax errors
    let fixed = false;
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Fix malformed import statements
      if (line.trim() === 'import { ' && i + 1 < lines.length) {
        const nextLine = lines[i + 1];
        if (nextLine.trim().startsWith('import { ')) {
          // Skip the malformed line and use the next one
          continue;
        }
      }
      
      // Fix duplicate import statements
      if (line.trim().startsWith('import { ') && i + 1 < lines.length) {
        const nextLine = lines[i + 1];
        if (nextLine.trim().startsWith('import { ') && line.trim() === nextLine.trim()) {
          // Skip duplicate
          continue;
        }
      }
      
      // Fix incomplete import statements
      if (line.trim() === 'import { ' && i + 1 < lines.length) {
        const nextLine = lines[i + 1];
        if (nextLine.trim().startsWith('} from ')) {
          // Merge the lines
          newLines.push('import { ' + nextLine.trim().substring(1));
          i++; // Skip the next line
          continue;
        }
      }
      
      newLines.push(line);
    }
    
    const newContent = newLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed syntax errors in: ${filePath}`);
      fixed = true;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.includes('node_modules') && !file.includes('.git')) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
console.log('Starting to fix syntax errors...');

const files = findFiles('/workspace/app');
files.forEach(file => {
  fixSyntaxErrors(file);
});

console.log('Finished fixing syntax errors.');
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
