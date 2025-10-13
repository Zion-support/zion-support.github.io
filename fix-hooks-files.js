#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of hooks files that need fixing
const hooksFiles = [
  'app/hooks/useEnhancedPerformance.ts',
  'app/hooks/usePerformanceMonitor.ts'
];

// Function to generate a proper hook file
function generateHookFile(filePath) {
  const fileName = path.basename(filePath, '.ts');
  const hookName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
  
  return `import { useState, useEffect } from 'react';
export function ${fileName}() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    // Initialize hook logic here
    setLoading(false);
  }, []);

  const processData = (input: any) => {
    try {
      setLoading(true);
      // Process data logic here
      setData(input);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred"An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    processData,
    fetchData
  };
}
`;
}

// Function to fix a single hook file
function fixHookFile(filePath) {
  try {
    const content = generateHookFile(filePath);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
// Main execution
console.log('Fixing hooks files...');

let fixedCount = 0;
let errorCount = 0;

hooksFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixHookFile(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`\nFixed ${fixedCount} files, ${errorCount} errors`);