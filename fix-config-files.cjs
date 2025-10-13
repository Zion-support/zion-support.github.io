#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of problematic config files
const configFiles = [
  '/workspace/app/404.tsx',
  '/workspace/app/config/appConfig.ts',
  '/workspace/app/config/security.ts',
  '/workspace/app/data/services.ts',
  '/workspace/app/sitemap.ts',
  '/workspace/app/types/global.d.ts'
];

// Function to create a clean 404 page
function createClean404() {
  return `import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page Not Found</p>
        <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;`;
}

// Function to create a clean app config
function createCleanAppConfig() {
  return `// App configuration
export const appConfig = {
  name: 'Zion Tech Group',
  version: '1.0.0',
  description: 'Advanced AI and IT Solutions',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  environment: process.env.NODE_ENV || 'development',
  features: {
    analytics: true,
    notifications: true,
    darkMode: true
  }
};

export default appConfig;`;
}

// Function to create a clean security config
function createCleanSecurityConfig() {
  return `// Security configuration
export const securityConfig = {
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
    credentials: true
  },
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  },
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block'
  }
};

export default securityConfig;`;
}

// Function to create a clean services data
function createCleanServicesData() {
  return `// Services data
export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Advanced artificial intelligence solutions for your business',
    category: 'AI',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    description: 'Scalable cloud infrastructure and services',
    category: 'Cloud',
    features: ['AWS', 'Azure', 'Google Cloud', 'Migration']
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Transform your data into actionable insights',
    category: 'Analytics',
    features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization']
  }
];

export default services;`;
}

// Function to create a clean sitemap
function createCleanSitemap() {
  return `// Sitemap configuration
export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: \`\${baseUrl}/about\`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: \`\${baseUrl}/services\`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: \`\${baseUrl}/contact\`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}`;
}

// Function to create a clean global types
function createCleanGlobalTypes() {
  return `// Global type definitions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export {};`;
}

// Main execution
console.log('🔧 Fixing configuration files...');

let fixedCount = 0;
let errorCount = 0;

for (const filePath of configFiles) {
  try {
    if (fs.existsSync(filePath)) {
      let content = '';
      
      if (filePath.includes('404.tsx')) {
        content = createClean404();
      } else if (filePath.includes('appConfig.ts')) {
        content = createCleanAppConfig();
      } else if (filePath.includes('security.ts')) {
        content = createCleanSecurityConfig();
      } else if (filePath.includes('services.ts')) {
        content = createCleanServicesData();
      } else if (filePath.includes('sitemap.ts')) {
        content = createCleanSitemap();
      } else if (filePath.includes('global.d.ts')) {
        content = createCleanGlobalTypes();
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
    errorCount++;
  }
}

console.log(`\n✅ Fixed ${fixedCount} configuration files`);
if (errorCount > 0) {
  console.log(`❌ Failed to fix ${errorCount} files`);
}

console.log('\n🎉 Configuration files fix complete!');