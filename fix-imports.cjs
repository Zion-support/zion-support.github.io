const fs = require('fs');
const path = require('path');

// List of files that need fixing
const filesToFix = [
  'app/5g-mobile-applications/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx'
];

// Common imports to add
const commonImports = `import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
`;

// Icons that might be needed
const iconImports = `import { Brain, BarChart, Target, TrendingUp, ArrowRight, CheckCircle, Shield, FileText, Database, Users, Zap, Globe, Settings, Monitor, Cpu, Lock, Search, Mail, Phone, MapPin, Clock, Star, Award, ChevronRight, ExternalLink, Download, Upload, Edit, Trash2, Plus, Minus, X, Menu, Home, Info, AlertCircle, CheckCircle2, XCircle, HelpCircle, Eye, EyeOff, Download as DownloadIcon, Upload as UploadIcon } from 'lucide-react';
`;

function fixFile(filePath) {
  try {
    const fullPath = path.join('/workspace', filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if imports are already present
    if (content.includes('import React from') || content.includes('import Navigation')) {
      console.log(`Skipping ${filePath} - already has imports`);
      return;
    }
    
    // Find the metadata export and add imports before it
    const metadataMatch = content.match(/export const metadata = \{/);
    if (metadataMatch) {
      const insertIndex = metadataMatch.index;
      const beforeMetadata = content.substring(0, insertIndex);
      const afterMetadata = content.substring(insertIndex);
      
      // Add imports
      let newContent = beforeMetadata + commonImports + iconImports + '\n' + afterMetadata;
      
      // Fix the component export at the end
      if (newContent.includes('export default') === false) {
        // Find the last closing brace and add export
        const lastBraceIndex = newContent.lastIndexOf('}');
        if (lastBraceIndex !== -1) {
          const beforeLastBrace = newContent.substring(0, lastBraceIndex + 1);
          const afterLastBrace = newContent.substring(lastBraceIndex + 1);
          
          // Extract component name from the function declaration
          const componentMatch = newContent.match(/const (\w+): React\.FC/);
          if (componentMatch) {
            const componentName = componentMatch[1];
            newContent = beforeLastBrace + '\n\nexport default ' + componentName + ';' + afterLastBrace;
          }
        }
      }
      
      fs.writeFileSync(fullPath, newContent);
      console.log(`Fixed ${filePath}`);
    } else {
      console.log(`No metadata found in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Import fixing completed!');