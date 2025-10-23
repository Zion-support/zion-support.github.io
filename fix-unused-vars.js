#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to fix with their specific unused variables
const fixes = [
  {
    file: 'app/ai-services/page.tsx',
    fixes: [
      { pattern: /import.*Star.*from 'lucide-react';/, replacement: "import { CheckCircle, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/iot-edge/page.tsx',
    fixes: [
      { pattern: /import.*Cpu.*from 'lucide-react';/, replacement: "import { CheckCircle, Star, BarChart, TrendingUp, Target } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/iot-edge-computing/page.tsx',
    fixes: [
      { pattern: /import.*Target.*Brain.*Settings.*from 'lucide-react';/, replacement: "import { CheckCircle, Star, BarChart, TrendingUp } from 'lucide-react';" },
      { pattern: /const _categories = \[[\s\S]*?\];/, replacement: '' }
    ]
  },
  {
    file: 'app/it-infrastructure/page.tsx',
    fixes: [
      { pattern: /import.*Users.*TrendingUp.*Globe.*Brain.*Cpu.*Target.*MessageSquare.*Eye.*Sparkles.*ArrowRight.*Server.*Database.*Cloud.*Lock.*Settings.*Monitor.*from 'lucide-react';/, replacement: "import { CheckCircle, Star, BarChart } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/it-services/page.tsx',
    fixes: [
      { pattern: /import.*Star.*Zap.*Shield.*Clock.*Users.*Globe.*Brain.*Cpu.*Target.*BarChart.*MessageSquare.*Eye.*Sparkles.*ArrowRight.*from 'lucide-react';/, replacement: "import { CheckCircle, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';" },
      { pattern: /const categories = \[[\s\S]*?\];/, replacement: '' }
    ]
  },
  {
    file: 'app/micro-saas/page.tsx',
    fixes: [
      { pattern: /import.*Star.*Zap.*Shield.*Clock.*Users.*Globe.*Brain.*Cpu.*Target.*BarChart.*MessageSquare.*Eye.*Sparkles.*ArrowRight.*from 'lucide-react';/, replacement: "import { CheckCircle, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';" },
      { pattern: /const categories = \[[\s\S]*?\];/, replacement: '' }
    ]
  }
];

// Function to apply fixes to a file
function fixFile(filePath, fixes) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Apply all fixes
fixes.forEach(({ file, fixes }) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    fixFile(filePath, fixes);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Unused variable fixes completed!');