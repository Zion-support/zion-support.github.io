#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get list of config and data files
const configFiles = execSync('find app -name "*.ts" -o -name "*.js" | grep -E "(config|data)"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && fs.existsSync(file));

console.log(`Found ${configFiles.length} config/data files to rebuild`);

let fixedFiles = 0;
let errorFiles = 0;

for (const filePath of configFiles) {
  try {
    const fileName = path.basename(filePath);
    let newContent = '';

    if (fileName.includes('appConfig')) {
      newContent = `export const appConfig = {
  name: 'Zion Tech Group',
  version: '1.0.0',
  description: 'AI & IT Solutions',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
  features: {
    analytics: true,
    notifications: true,
    darkMode: true
  }
};

export default appConfig;
`;
    } else if (fileName.includes('security')) {
      newContent = `export const securityConfig = {
  cors: {
    origin: process.env.NEXT_PUBLIC_APP_URL || 'https://ziontechgroup.com',
    credentials: true
  },
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  }
};

export default securityConfig;
`;
    } else if (fileName.includes('services')) {
      newContent = `export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    basic: number;
    premium: number;
    enterprise: number;
  };
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Comprehensive AI solutions for your business',
    category: 'AI',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    pricing: {
      basic: 1000,
      premium: 2500,
      enterprise: 5000
    }
  },
  {
    id: 'it-services',
    name: 'IT Services',
    description: 'Professional IT services and support',
    category: 'IT',
    features: ['Cloud Migration', 'Security Audits', 'System Maintenance'],
    pricing: {
      basic: 800,
      premium: 2000,
      enterprise: 4000
    }
  }
];

export default services;
`;
    } else {
      // Generic config file
      newContent = `export const config = {
  // Configuration options
};

export default config;
`;
    }

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Rebuilt: ${filePath}`);
    fixedFiles++;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    errorFiles++;
  }
}

console.log(`\nSummary:`);
console.log(`- Files processed: ${configFiles.length}`);
console.log(`- Files rebuilt: ${fixedFiles}`);
console.log(`- Files with errors: ${errorFiles}`);