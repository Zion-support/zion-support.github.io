#!/usr/bin// Fixed regex

<<<<<<< HEAD
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
    const content = fs.readFileSync(filePath, 'utf8'
    if (content.includes('') || content.includes('') || content.includes('>>>>>>>'
  console.error('Error:'
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx'
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules'
const appDir = '
=======
// List of files with merge conflicts
const filesToFix = [
  'app/components/AccessibilityComponents.tsx',
  'app/components/AccessibilityUtils.tsx',
  'app/components/EnhancedAccessibility.tsx',
  'app/components/Footer.tsx',
  'app/components/LazyImage.tsx',
  'app/components/OptimizedImage.tsx',
  'app/components/PerformanceDashboard.tsx',
  'app/components/PerformanceImage.tsx',
  'app/components/SEOHead.tsx',
  'app/components/Sidebar.tsx',
  'app/pages/AdminPage.tsx',
  'app/pages/ContactPage.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version (first part)
>>>>>>> origin/main
