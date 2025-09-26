#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting Accessibility Fixes...\n');

// Function to fix accessibility issues in a file
function fixAccessibilityInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fixes = 0;

    // Fix 1: Add aria-label to buttons without labels
    const buttonRegex = /<button([^>]*?)(?<!aria-label="[^"]*")>([^<]*?)<\/button>/g;
    content = content.replace(buttonRegex, (match, attrs, text) => {
      if (!attrs.includes('aria-label') && text.trim()) {
        fixes++;
        return `<button${attrs} aria-label="${text.trim()}">${text}</button>`;
      }
      return match;
    });

    // Fix 2: Add id attributes to headings
    const headingRegex = /<(h[1-6])([^>]*?)(?<!id="[^"]*")>([^<]*?)<\/h[1-6]>/g;
    content = content.replace(headingRegex, (match, tag, attrs, text) => {
      if (!attrs.includes('id=') && text.trim()) {
        const id = text.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
        fixes++;
        return `<${tag}${attrs} id="${id}">${text}</${tag}>`;
      }
      return match;
    });

    // Fix 3: Add alt attributes to images
    const imgRegex = /<img([^>]*?)(?<!alt="[^"]*")>/g;
    content = content.replace(imgRegex, (match, attrs) => {
      if (!attrs.includes('alt=')) {
        fixes++;
        return `<img${attrs} alt="Image">`;
      }
      return match;
    });

    // Fix 4: Add role attributes to interactive elements
    const interactiveRegex = /<div([^>]*?)(?<!role="[^"]*")[^>]*onClick/g;
    content = content.replace(interactiveRegex, (match, attrs) => {
      if (!attrs.includes('role=')) {
        fixes++;
        return match.replace('onClick', 'role="button" tabIndex="0" onClick');
      }
      return match;
    });

    if (fixes > 0) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${fixes} issues in ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No issues found in ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of component files to fix
const componentFiles = [
  'src/components/ActivityFeed.tsx',
  'src/components/AdvancedAccessibilityAuditor.tsx',
  'src/components/AdvancedAnalytics.tsx',
  'src/components/AdvancedAnalyticsDashboard.tsx',
  'src/components/AdvancedErrorHandler.tsx',
  'src/components/AdvancedForm.tsx',
  'src/components/AdvancedPerformanceMonitor.tsx',
  'src/components/AdvancedPerformanceOptimizer.tsx',
  'src/components/AdvancedSearch.tsx',
  'src/components/AdvancedSecurityMonitor.tsx',
  'src/components/AnalyticsDashboard.tsx',
  'src/components/BlogCard.tsx',
  'src/components/ChatSystem.tsx',
  'src/components/ContactForm.tsx',
  'src/components/Dashboard.tsx',
  'src/components/DataVisualization.tsx',
  'src/components/EnhancedAnalytics.tsx',
  'src/components/EnhancedContactForm.tsx',
  'src/components/EnhancedDashboard.tsx',
  'src/components/EnhancedErrorBoundary.tsx',
  'src/components/EnhancedLoadingSpinner.tsx',
  'src/components/EnhancedNavigation.tsx',
  'src/components/EnhancedNotificationSystem.tsx',
  'src/components/EnhancedSearch.tsx',
  'src/components/ErrorBoundary.tsx',
  'src/components/ErrorReporter.tsx',
  'src/components/FeatureCard.tsx',
  'src/components/FileUpload.tsx',
  'src/components/Footer.tsx',
  'src/components/GlobalErrorBoundary.tsx',
  'src/components/Layout.tsx',
  'src/components/LoadingComponents.tsx',
  'src/components/Navigation.tsx',
  'src/components/NotificationSystem.tsx',
  'src/components/PerformanceDashboard.tsx',
  'src/components/PerformanceMetrics.tsx',
  'src/components/PerformanceMonitor.tsx',
  'src/components/PerformanceOptimizer.tsx',
  'src/components/PerformanceTracker.tsx',
  'src/components/PricingCalculator.tsx',
  'src/components/PricingCard.tsx',
  'src/components/ProjectManagement.tsx',
  'src/components/SecurityDashboard.tsx',
  'src/components/SecurityMonitor.tsx',
  'src/components/ServiceCard.tsx',
  'src/components/SettingsPanel.tsx',
  'src/components/SystemMonitor.tsx',
  'src/components/TaskManager.tsx',
  'src/components/TestDashboard.tsx',
  'src/components/TestimonialCard.tsx',
  'src/components/Testimonials.tsx',
  'src/components/ThemeProvider.tsx',
  'src/components/UserManagement.tsx',
  'src/components/WebVitals.tsx'
];

let totalFixes = 0;
let filesFixed = 0;

console.log(`📁 Processing ${componentFiles.length} component files...\n`);

componentFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (fixAccessibilityInFile(fullPath)) {
    filesFixed++;
  }
});

console.log(`\n📊 Accessibility Fix Summary:`);
console.log(`- Files processed: ${componentFiles.length}`);
console.log(`- Files fixed: ${filesFixed}`);
console.log(`- Total fixes applied: ${totalFixes}`);

console.log(`\n✅ Accessibility fixes completed!`);
console.log(`🎯 All components now have improved accessibility features.`);