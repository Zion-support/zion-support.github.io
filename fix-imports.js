#!/usr/bin/env node

import fs from 'fs';

const filesToFix = [
  'app/ai-sales-automation/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/ai-services/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/it-services/page.tsx',
  'app/micro-saas/page.tsx'
];

function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix broken imports
    content = content.replace(/import { } from 'lucide-react';/g, "import { BarChart3, PieChart, Eye } from 'lucide-react';");
    content = content.replace(/import { 3, PieChart, Eye } from 'lucide-react';/g, "import { BarChart3, PieChart, Eye } from 'lucide-react';");
    content = content.replace(/import { 3, TrendingUp, Users, Target } from 'lucide-react';/g, "import { BarChart3, TrendingUp, Users, Target } from 'lucide-react';");
    content = content.replace(/import { 3, TrendingUp, Users, Target, BarChart3 } from 'lucide-react';/g, "import { BarChart3, TrendingUp, Users, Target } from 'lucide-react';");
    content = content.replace(/import { 3, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';/g, "import { BarChart3, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';");
    content = content.replace(/import { 3, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';/g, "import { BarChart3, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';");
    
    // Fix broken icon references
    content = content.replace(/<3 className="w-6 h-6" \/>/g, '<BarChart3 className="w-6 h-6" />');
    content = content.replace(/<3 className="w-8 h-8" \/>/g, '<BarChart3 className="w-8 h-8" />');
    content = content.replace(/<3 className="w-12 h-12" \/>/g, '<BarChart3 className="w-12 h-12" />');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

filesToFix.forEach(fixImports);
console.log('Import fixes completed!');