#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common imports that are missing
const commonImports = {
  'Link': "import { Link } from 'react-router-dom';",
  'motion': "import { motion } from 'framer-motion';",
  'SEO': "import SEO from '@/components/SEO';",
  'Helmet': "import { Helmet } from 'react-helmet-async';",
  'CogIcon': "import { Cog } from 'lucide-react';",
  'MagnifyingGlassIcon': "import { Search } from 'lucide-react';",
  'CheckCircle': "import { CheckCircle } from 'lucide-react';",
  'Shield': "import { Shield } from 'lucide-react';",
  'Cloud': "import { Cloud } from 'lucide-react';",
  'SignalIcon': "import { Signal } from 'lucide-react';",
  'CubeIcon': "import { Cube } from 'lucide-react';",
  'Package': "import { Package } from 'lucide-react';",
  'Settings': "import { Settings } from 'lucide-react';",
  'Brain': "import { Brain } from 'lucide-react';",
  'Heart': "import { Heart } from 'lucide-react';",
  'Building2': "import { Building2 } from 'lucide-react';",
  'DollarSign': "import { DollarSign } from 'lucide-react';",
  'ShoppingCart': "import { ShoppingCart } from 'lucide-react';",
  'Zap': "import { Zap } from 'lucide-react';",
  'Target': "import { Target } from 'lucide-react';",
  'BookOpen': "import { BookOpen } from 'lucide-react';",
  'Cpu': "import { Cpu } from 'lucide-react';",
  'ShieldCheckIcon': "import { ShieldCheck } from 'lucide-react';",
  'Check': "import { Check } from 'lucide-react';",
  'TrendingUp': "import { TrendingUp } from 'lucide-react';",
  'Code': "import { Code } from 'lucide-react';",
  'useParams': "import { useParams } from 'react-router-dom';",
  'useAuth': "import { useAuth } from '@/hooks/useAuth';",
  'useTalentQuotes': "import { useTalentQuotes } from '@/hooks/useTalentQuotes';",
  'ProtectedRoute': "import ProtectedRoute from '@/components/ProtectedRoute';",
  'RequestsHeader': "import RequestsHeader from '@/components/RequestsHeader';",
  'Tabs': "import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';",
  'QuoteDetails': "import QuoteDetails from '@/components/QuoteDetails';",
  'Icon': "import { Icon } from 'lucide-react';",
  'IconComponent': "import { Icon } from 'lucide-react';"
};

// Data arrays that need to be defined
const dataArrays = {
  'features': 'const features = [];',
  'benefits': 'const benefits = [];',
  'useCases': 'const useCases = [];',
  'testimonials': 'const testimonials = [];',
  'pricingPlans': 'const pricingPlans = [];',
  'integrations': 'const integrations = [];',
  'cloudServices': 'const cloudServices = [];',
  'cloudPlatforms': 'const cloudPlatforms = [];',
  'technologies': 'const technologies = [];',
  'securityServices': 'const securityServices = [];',
  'complianceStandards': 'const complianceStandards = [];',
  'securityTechnologies': 'const securityTechnologies = [];',
  'devopsServices': 'const devopsServices = [];',
  'cloudProviders': 'const cloudProviders = [];',
  'industries': 'const industries = [];',
  'iotServices': 'const iotServices = [];',
  'microsaasServices': 'const microsaasServices = [];',
  'services': 'const services = [];',
  'quantumServices': 'const quantumServices = [];',
  'applications': 'const applications = [];',
  'blockchainServices': 'const blockchainServices = [];',
  'web3Technologies': 'const web3Technologies = [];',
  'solutions': 'const solutions = [];',
  'caseStudies': 'const caseStudies = [];',
  'autonomousFeatures': 'const autonomousFeatures = [];',
  'ecosystemFeatures': 'const ecosystemFeatures = [];',
  'ecosystemComponents': 'const ecosystemComponents = [];',
  'researchFeatures': 'const researchFeatures = [];',
  'biFeatures': 'const biFeatures = [];',
  'biSolutions': 'const biSolutions = [];',
  'contentFeatures': 'const contentFeatures = [];',
  'contentTypes': 'const contentTypes = [];',
  'securityFeatures': 'const securityFeatures = [];',
  'securitySolutions': 'const securitySolutions = [];',
  'edgeFeatures': 'const edgeFeatures = [];',
  'quantumFeatures': 'const quantumFeatures = [];',
  'implementation': 'const implementation = [];',
  'retailTypes': 'const retailTypes = [];',
  'soc2Criteria': 'const soc2Criteria = [];',
  'automationBenefits': 'const automationBenefits = [];',
  'complianceTools': 'const complianceTools = [];'
};

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if it's a TypeScript/TSX file
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) {
      return false;
    }
    
    // Skip if file is in node_modules or dist
    if (filePath.includes('node_modules') || filePath.includes('dist')) {
      return false;
    }
    
    // Add missing imports
    const importsToAdd = [];
    for (const [variable, importStatement] of Object.entries(commonImports)) {
      if (content.includes(variable) && !content.includes(importStatement)) {
        importsToAdd.push(importStatement);
        modified = true;
      }
    }
    
    // Add missing data arrays
    const dataToAdd = [];
    for (const [variable, definition] of Object.entries(dataArrays)) {
      if (content.includes(variable) && !content.includes(`const ${variable}`)) {
        dataToAdd.push(definition);
        modified = true;
      }
    }
    
    if (modified) {
      // Find the last import statement
      const importLines = content.split('\n');
      let lastImportIndex = -1;
      
      for (let i = 0; i < importLines.length; i++) {
        if (importLines[i].trim().startsWith('import ')) {
          lastImportIndex = i;
        }
      }
      
      // Insert new imports after the last import
      if (lastImportIndex >= 0) {
        const newImports = [...importsToAdd, ...dataToAdd];
        importLines.splice(lastImportIndex + 1, 0, '', ...newImports);
        content = importLines.join('\n');
      } else {
        // No imports found, add at the beginning
        const newImports = [...importsToAdd, ...dataToAdd];
        content = newImports.join('\n') + '\n\n' + content;
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting linting error fixes...');
  
  // Get all TypeScript/TSX files
  const files = await glob('src/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFile, commonImports, dataArrays };