import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining unused imports
function fixRemainingImports() {
  
  filesToFix.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove the entire unused icon import line
      \n/g;
      content = content.replace(iconImportRegex, '');
      
      // Also try other variations
      const iconImportRegex2 = /import \{ Star, Clock, Zap, Shield, Globe, Database, Users, Settings, Check \} from 'lucide-react';\n/g;
      content = content.replace(iconImportRegex2, '');
      
      // Clean up extra empty lines
      content = content.replace(/\n\n\n+/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
          } catch (error) {
    // Empty block
  }
  });
}

// Function to fix component files
function fixComponentFiles() {
  const filesToFix = [
    'app/components/Navigation.tsx'
  ];

  filesToFix.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unused Search import
      content = content.replace(/, Search/g, '');
      
      // Clean up extra empty lines
      content = content.replace(/\n\n\n+/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
          } catch (error) {
    // Empty block
  }
  });
}

// Function to fix hook files
function fixHookFiles() {
  const filesToFix = [
    'app/hooks/useEnhancedPerformance.ts'
  ];

  filesToFix.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unused destructured elements
      content = content.replace(/const \{ [^}]+ \} = useCallback\(\(\) => \{[\s\S]*?\}, \[\]\);\n/g, '');
      
      // Clean up extra empty lines
      content = content.replace(/\n\n\n+/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
          } catch (error) {
    // Empty block
  }
  });
}

// Main function
async function main() {
    fixRemainingImports();
  
    fixComponentFiles();
  
    fixHookFiles();
  
  }

main().catch(console.error);