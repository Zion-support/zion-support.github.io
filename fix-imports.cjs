const fs = require('fs');

const files = [
  {
    path: 'app/ai-services/page.tsx',
    currentImport: 'import { CheckCircle, ArrowRight } from "lucide-react";',
    newImport: 'import { CheckCircle, ArrowRight, Brain, Zap, Target, BarChart, TrendingUp, Shield } from "lucide-react";'
  },
  {
    path: 'app/it-services/page.tsx',
    currentImport: 'import { ArrowRight, CheckCircle, Brain } from "lucide-react";',
    newImport: 'import { ArrowRight, CheckCircle, Brain, Shield, Zap, Target, BarChart, TrendingUp } from "lucide-react";'
  },
  {
    path: 'app/team/page.tsx',
    currentImport: 'import { ArrowRight, CheckCircle, Brain } from "lucide-react";',
    newImport: 'import { ArrowRight, CheckCircle, Brain, Shield, Zap, Target, BarChart, TrendingUp } from "lucide-react";'
  }
];

files.forEach(file => {
  if (fs.existsSync(file.path)) {
    let content = fs.readFileSync(file.path, 'utf8');
    content = content.replace(file.currentImport, file.newImport);
    fs.writeFileSync(file.path, content);
    console.log(`Fixed imports in ${file.path}`);
  }
});

console.log('Import fixes completed!');