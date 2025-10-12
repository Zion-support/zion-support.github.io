import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix remaining issues in a file
function fixRemainingIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused Helmet imports
    if (content.includes("import { Helmet } from 'react-helmet-async';") && !content.includes('<Helmet>')) {
      content = content.replace("import { Helmet } from 'react-helmet-async';\n", '');
      modified = true;
    }

    // Remove unused BarChart imports
    if (content.includes("BarChart") && !content.includes('<BarChart') && !content.includes('icon: BarChart')) {
      content = content.replace(/,?\s*BarChart\s*,?/g, '');
      // Clean up any double commas
      content = content.replace(/,\s*,/g, ',');
      // Clean up any trailing commas before closing brace
      content = content.replace(/,\s*}/g, '}');
      modified = true;
    }

    // Remove unused state variables
    if (content.includes("const [isVisible, setIsVisible] = useState(false);") && !content.includes('isVisible')) {
      content = content.replace("const [isVisible, setIsVisible] = useState(false);\n", '');
      content = content.replace("setIsVisible(true);\n", '');
      modified = true;
    }

    if (content.includes("const [selectedPlan, setSelectedPlan] = useState('basic');") && !content.includes('selectedPlan')) {
      content = content.replace("const [selectedPlan, setSelectedPlan] = useState('basic');\n", '');
      modified = true;
    }

    // Fix merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      // Remove merge conflict markers and keep the HEAD version
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed issues in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

for (const file of tsxFiles) {
  fixRemainingIssues(file);
}

console.log('Finished fixing remaining issues');