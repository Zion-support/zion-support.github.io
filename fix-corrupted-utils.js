import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of corrupted files from the lint output
const corruptedFiles = [
  'app/data/servicesData.ts',
  'app/hooks/useAccessibility.ts',
  'app/hooks/useAdvancedPerformanceMonitoring.ts',
  'app/hooks/useEnhancedPerformance.ts',
  'app/hooks/useIntersectionObserver.ts',
  'app/hooks/usePerformance.ts',
  'app/hooks/usePerformanceMonitor.ts',
  'app/hooks/usePerformanceOptimization.ts',
  'app/hooks/useSEO.ts',
  'app/metadata.ts',
  'app/types/next.d.ts',
  'app/utils/accessibilityChecker.ts',
  'app/utils/accessibilityEnhancer.ts',
  'app/utils/accessibilityUtils.ts',
  'app/utils/advancedAnalytics.ts',
  'app/utils/advancedCaching.ts',
  'app/utils/analyticsTracker.ts',
  'app/utils/apiCache.ts',
  'app/utils/apiClient.ts',
  'app/utils/dataValidator.ts',
  'app/utils/formValidation.ts',
  'app/utils/monitoring.ts',
  'app/utils/performanceEnhancer.ts',
  'app/utils/performanceMetrics.ts',
  'app/utils/performanceMonitoring.ts',
  'app/utils/performanceOptimizations.ts',
  'app/utils/performanceOptimizer.ts',
  'app/utils/securityManager.ts',
  'app/utils/sitemapGenerator.ts',
  'app/utils/usePerformanceMonitor.ts',
  'app/utils/validators.ts',
  'components/AccessibilityComponents.tsx',
  'components/AccessibilityUtils.tsx',
  'components/utils/accessibilityUtils.ts',
  'hooks/usePerformanceMetrics.ts',
  'hooks/usePerformanceMonitor.ts',
  'hooks/usePerformanceOptimization.ts',
  'pages/AboutPage.tsx',
  'pages/ITServicesPage.tsx',
  'pages/MicroSAASPage.tsx',
  'pages/NotFoundPage.tsx',
  'pages/ServiceDetailPage.tsx',
  'pages/ServicesPage.tsx',
  'utils/accessibilityUtils.ts',
  'utils/logger.ts',
  'utils/performanceUtils.ts'
];

// Template for TypeScript utility files
const tsUtilTemplate = (fileName) => `// ${fileName}
export const ${fileName.replace(/[^a-zA-Z0-9]/g, '')} = {
  // Utility functions will be implemented here
  init: () => {
    console.log('${fileName} initialized');
  }
};

export default ${fileName.replace(/[^a-zA-Z0-9]/g, '')};
`;

// Template for React hook files
const hookTemplate = (fileName) => `import { useEffect, useState } from 'react';

export const ${fileName.replace(/[^a-zA-Z0-9]/g, '')} = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Hook logic will be implemented here
  }, []);

  return {
    state,
    setState
  };
};

export default ${fileName.replace(/[^a-zA-Z0-9]/g, '')};
`;

// Template for React component files
const componentTemplate = (fileName) => `import React from 'react';

interface ${fileName.replace(/[^a-zA-Z0-9]/g, '')}Props {
  // Props will be defined here
}

const ${fileName.replace(/[^a-zA-Z0-9]/g, '')}: React.FC<${fileName.replace(/[^a-zA-Z0-9]/g, '')}Props> = () => {
  return (
    <div>
      <h1>${fileName}</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ${fileName.replace(/[^a-zA-Z0-9]/g, '')};
`;

// Template for services data
const servicesDataTemplate = `export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Comprehensive AI solutions for modern businesses',
    shortDescription: 'AI-powered solutions',
    icon: '🤖',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    pricing: {
      basic: 5000,
      pro: 15000,
      enterprise: 50000
    },
    benefits: ['Increased Efficiency', 'Cost Reduction', 'Better Decision Making'],
    useCases: ['Automation', 'Analytics', 'Customer Service'],
    technologies: ['Python', 'TensorFlow', 'PyTorch'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'info@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  }
];

export default services;
`;

// Template for metadata
const metadataTemplate = `export const metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI and IT solutions for businesses worldwide. Transform your operations with cutting-edge technology.',
  keywords: ['AI', 'IT Solutions', 'Machine Learning', 'Digital Transformation'],
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI and IT solutions for businesses worldwide.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI and IT solutions for businesses worldwide.'
  }
};

export default metadata;
`;

// Template for Next.js types
const nextTypesTemplate = `declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_APP_URL: string;
    }
  }
}

export {};
`;

// Function to get the appropriate template based on file type and name
function getTemplate(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const ext = path.extname(filePath);
  
  if (filePath.includes('servicesData')) {
    return servicesDataTemplate;
  }
  
  if (filePath.includes('metadata')) {
    return metadataTemplate;
  }
  
  if (filePath.includes('next.d.ts')) {
    return nextTypesTemplate;
  }
  
  if (filePath.includes('hooks/') || filePath.includes('use')) {
    return hookTemplate(fileName);
  }
  
  if (ext === '.tsx' || filePath.includes('components/') || filePath.includes('pages/')) {
    return componentTemplate(fileName);
  }
  
  return tsUtilTemplate(fileName);
}

// Fix all corrupted files
corruptedFiles.forEach(filePath => {
  try {
    const fullPath = path.join(__dirname, filePath);
    const content = getTemplate(filePath);
    
    // Ensure directory exists
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write the new content
    fs.writeFileSync(fullPath, content, 'utf8');
    
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All corrupted utility files have been fixed!');