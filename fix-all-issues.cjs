const fs = require('fs');
const path = require('path');

// Files with unused imports to fix
const filesToFix = [
  {
    file: 'app/ai-content-generation/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Star, Phone, Mail, Cube, Zap, Shield, Globe, Target, MessageSquare, ArrowRight } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/ai-crm/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield, Clock, TrendingUp, ArrowRight, Mail, MapPin } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/ai-customer-support/page.tsx',
    fixes: [
      { from: "import SEOOptimizer from '../components/SEOOptimizer';", to: "// Removed unused SEOOptimizer import" },
      { from: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield, Headphones, Bot, Zap, BarChart, Star, ArrowRight, Phone, Mail } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield, Headphones, Bot, BarChart } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/ai-cybersecurity/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield, ArrowRight, AlertTriangle, Database, Settings } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/ai-data-visualization/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Star, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/ai-document-processing/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield, ArrowRight, Database, Globe, Settings } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/ai-fitness-coach/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Star, Phone, Mail, Cube, Zap, Shield, Zap, Clock, TrendingUp, Users } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/ai-lead-generation/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield, Phone, ArrowRight, TrendingUp, Globe, Database } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/ai-sales-automation/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Star, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/ai-scheduler/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield, Clock, ArrowRight, Mail, MapPin, BarChart } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/ai-voice-cloning/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Star, Phone, Mail, Cube, Zap, Shield, MapPin, Languages, Clock } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/ai-workflow-automation/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Star, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/ai-writing-assistant/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield, ArrowRight, MapPin, Users, BarChart } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/analytics-tools/page.tsx',
    fixes: [
      { from: "import { CheckCircle, Star, Phone, Mail, Cube, Zap, Shield, Zap, Shield, Clock, Users, Globe, Cpu, MessageSquare, Eye, Sparkles, ArrowRight } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  },
  {
    file: 'app/careers/page.tsx',
    fixes: [
      { from: "import Link from 'next/link';", to: "// Removed unused Link import" },
      { from: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield, ArrowRight, Users, Award, Zap } from 'lucide-react';", to: "import { CheckCircle, Phone, Mail, Cube, Zap, Shield } from 'lucide-react';" }
    ]
  }
];

// Console statements to remove
const consoleStatementsToRemove = [
  'app/components/ComprehensiveErrorBoundary.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/PWAInstaller.tsx',
  'app/components/PerformanceOptimizer.tsx',
  'app/components/SecurityEnhancer.tsx'
];

function fixFile(filePath, fixes) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      if (content.includes(fix.from)) {
        content = content.replace(fix.from, fix.to);
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

function removeConsoleStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log statements
    const consoleRegex = /console\.(log|warn|error|info|debug)\([^)]*\);?\s*/g;
    if (consoleRegex.test(content)) {
      content = content.replace(consoleRegex, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Removed console statements from: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error removing console statements from ${filePath}:`, error.message);
  }
}

// Fix unused imports
console.log('Fixing unused imports...');
filesToFix.forEach(({ file, fixes }) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    fixFile(filePath, fixes);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

// Remove console statements
console.log('Removing console statements...');
consoleStatementsToRemove.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    removeConsoleStatements(filePath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All fixes applied!');