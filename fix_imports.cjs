const fs = require('fs');

const filesToFix = [
  'app/zion-ai-inventory-optimizer-pro/page.tsx'
];

function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the import section by replacing the malformed import
    const importMatch = content.match(/import {[\s\S]*?} from 'lucide-react';/);
    if (importMatch) {
      const cleanImport = `import { 
  Package, 
  BarChart3, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Zap, 
  Sparkles,
  Cpu,
  Globe,
  AlertTriangle,
  ShoppingCart,
  Truck
} from 'lucide-react';`;
      
      content = content.replace(importMatch[0], cleanImport);
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

filesToFix.forEach(fixImports);
console.log('Import fixes completed.');