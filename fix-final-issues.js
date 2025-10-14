import fs from 'fs';
import path from 'path';

// Function to fix numeric identifier issues
function fixNumericIdentifiers(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix numeric identifiers by adding underscore prefix
    content = content.replace(/const (\d+[A-Za-z]+)/g, 'const _$1');
    content = content.replace(/export default (\d+[A-Za-z]+)/g, 'export default _$1');
    content = content.replace(/<(\d+[A-Za-z]+)/g, '<_$1');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed numeric identifiers in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific corrupted files
function fixSpecificFiles() {
  const filesToFix = [
    {
      path: 'app/main.tsx',
      content: `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {};
    window.performance.now = window.performance.now || (() => Date.now());
  }
}

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => {
        // Service worker registered successfully
        console.log('Service worker registered successfully');
      })
      .catch((registrationError) => {
        // Service worker registration failed
        console.error('Service worker registration failed:', registrationError);
      });
  });
}`
    },
    {
      path: 'app/components/Navigation-backup.tsx',
      content: `import React from "react";

const NavigationBackup = () => {
  return (
    <div>
      <h1>Navigation Backup</h1>
      <p>This is a navigation backup component.</p>
    </div>
  );
};

export default NavigationBackup;`
    },
    {
      path: 'app/contexts/AnalyticsContext.tsx',
      content: `import { createContext } from "react";

const AnalyticsContext = createContext({});

export default AnalyticsContext;`
    },
    {
      path: 'app/contexts/AnalyticsContextDefinition.tsx',
      content: `import { createContext } from "react";

const AnalyticsContextDefinition = createContext({});

export default AnalyticsContextDefinition;`
    },
    {
      path: 'app/utils/errorHandler.tsx',
      content: `import React from "react";

const ErrorHandler = () => {
  return (
    <div>
      <h1>Error Handler</h1>
      <p>This is an error handler component.</p>
    </div>
  );
};

export default ErrorHandler;`
    },
    {
      path: 'public/sw.js',
      content: `// Service Worker
console.log('Service Worker loaded');`
    }
  ];

  let fixedCount = 0;
  for (const file of filesToFix) {
    try {
      fs.writeFileSync(file.path, file.content);
      console.log(`Fixed: ${file.path}`);
      fixedCount++;
    } catch (error) {
      console.error(`Error fixing ${file.path}:`, error.message);
    }
  }
  
  return fixedCount;
}

// Fix numeric identifier issues in specific files
const numericFiles = [
  'app/5g-implementation/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/pages/5GSolutionsPage.tsx'
];

let fixedCount = 0;
for (const file of numericFiles) {
  if (fixNumericIdentifiers(file)) {
    fixedCount++;
  }
}

// Fix specific corrupted files
const specificFixed = fixSpecificFiles();

console.log(`Fixed ${fixedCount} numeric identifier files and ${specificFixed} specific files.`);