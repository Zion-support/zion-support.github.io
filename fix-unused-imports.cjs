const fs = require('fs');
const path = require('path');

// List of files and their correct import statements
const filesToFix = [
  {
    file: 'app/ai-content-generation/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/ai-crm/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/ai-customer-support/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/ai-cybersecurity/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/ai-data-visualization/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/ai-document-processing/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/ai-fitness-coach/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/ai-lead-generation/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/ai-sales-automation/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/ai-scheduler/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/ai-voice-cloning/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/ai-workflow-automation/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/ai-writing-assistant/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  },
  {
    file: 'app/analytics-tools/page.tsx',
    correctImport: "import { CheckCircle, Zap, Brain, BarChart, Eye } from 'lucide-react';"
  }
];

function fixFile(filePath, correctImport) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find and replace the lucide-react import line
    const importRegex = /import\s*{\s*[^}]*}\s*from\s*['"]lucide-react['"];?/g;
    const match = content.match(importRegex);
    
    if (match) {
      content = content.replace(importRegex, correctImport);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`No lucide-react import found in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Apply fixes
console.log('Fixing unused imports...');
filesToFix.forEach(({ file, correctImport }) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    fixFile(filePath, correctImport);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All unused import fixes applied!');