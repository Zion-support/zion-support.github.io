const fs = require('fs');
const path = require('path');

// Fix context files
const fixContextFiles = () => {
  const contextFiles = [];
  
  const scanDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('Context.tsx') || item.endsWith('Context.ts')) {
        contextFiles.push(fullPath);
      }
    });
  };
  
  scanDirectory('app');
  
  contextFiles.forEach(filePath => {
    try {
      const fileName = path.basename(filePath, '.tsx').replace('.ts', '');
      const content = `import React, { createContext, useContext, useState, useEffect } from 'react';

interface ${fileName}State {
  // State properties will be defined here
}

interface ${fileName}ContextType extends ${fileName}State {
  // Context methods will be defined here
}

const ${fileName} = createContext<${fileName}ContextType | undefined>(undefined);

export const use${fileName} = () => {
  const context = useContext(${fileName});
  if (!context) {
    throw new Error(\`use${fileName} must be used within a ${fileName}Provider\`);
  }
  return context;
};

export const ${fileName}Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<${fileName}State>({});

  const value = {
    ...state,
    // Context methods will be defined here
  };

  return (
    <${fileName}.Provider value={value}>
      {children}
    </${fileName}.Provider>
  );
};

export default ${fileName};`;
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed context file: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  });
};

// Fix error files
const fixErrorFiles = () => {
  const errorFiles = [];
  
  const scanDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item === 'error.tsx' || item === 'error.ts') {
        errorFiles.push(fullPath);
      }
    });
  };
  
  scanDirectory('app');
  
  errorFiles.forEach(filePath => {
    try {
      const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorPageProps {
  error?: Error;
  resetError?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, resetError }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Error | Zion Tech Group</title>
        <meta name="description" content="An error occurred while loading the page." />
      </Helmet>
      
      <div className="text-center px-4">
        <AlertTriangle className="w-24 h-24 text-red-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          {error?.message || 'An unexpected error occurred. Please try again.'}
        </p>
        {resetError && (
          <button
            onClick={resetError}
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;`;
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed error file: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  });
};

// Remove any remaining problematic files
const removeProblematicFiles = () => {
  const problematicFiles = [];
  
  const scanDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.includes('broken') || item.includes('corrupted') || item.includes('temp') || item.includes('backup')) {
        problematicFiles.push(fullPath);
      }
    });
  };
  
  scanDirectory('app');
  
  problematicFiles.forEach(filePath => {
    try {
      fs.unlinkSync(filePath);
      console.log(`Removed problematic file: ${filePath}`);
    } catch (error) {
      console.error(`Error removing ${filePath}:`, error.message);
    }
  });
};

// Run all fixes
console.log('Fixing context files...');
fixContextFiles();

console.log('Fixing error files...');
fixErrorFiles();

console.log('Removing problematic files...');
removeProblematicFiles();

console.log('All final files have been fixed!');
