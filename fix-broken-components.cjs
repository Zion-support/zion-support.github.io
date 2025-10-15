const fs = require('fs');
const path = require('path');

// List of broken files that need fixing
const brokenFiles = [
  'app/zion-ai-fraud-detection-pro/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/contact/page.tsx',
  'app/contact/index.tsx',
  'app/faq/page.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/AdvancedLoadingStates.tsx',
  'app/components/WebVitalsTracker.tsx',
  'app/components/LazyComponent.tsx',
  'app/components/AnalyticsProvider.tsx',
  'app/components/Header.tsx',
  'app/components/OptimizedImage.tsx',
  'app/components/FuturisticBackground.tsx',
  'app/components/Breadcrumb.tsx',
  'app/components/UnifiedErrorBoundary.tsx',
  'app/zion-data-sync/page.tsx',
  'app/zion-content-studio/page.tsx',
  'app/demo/page.tsx',
  'app/zion-cloud-vault/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/zion-inventory-smart/page.tsx',
  'app/zion-compliance-manager/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/support/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/zion-performance-monitor/page.tsx',
  'app/zion-email-automation/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/zion-ai-invoice-generator/page.tsx',
  'app/zion-invoice-genius/page.tsx',
  'app/zion-project-master/page.tsx',
  'app/zion-social-scheduler/page.tsx',
  'app/zion-analytics-pro/page.tsx',
  'app/zion-ai-video-generator/page.tsx',
  'app/zion-lead-magnet/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/zion-workflow-automation/page.tsx',
  'app/zion-ai-customer-insights/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-automated-reporting/page.tsx',
  'app/zion-ai-image-recognition-pro/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/zion-security-shield/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx'
];

function fixBrokenComponent(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if file has the broken pattern
    if (!content.includes('return;')) {
      console.log(`Skipping ${filePath} - no broken pattern found`);
      return;
    }
    
    console.log(`Fixing ${filePath}...`);
    
    // Find the function declaration line
    const functionMatch = content.match(/export default function (\w+)\(\) \{/);
    if (!functionMatch) {
      console.log(`Could not find function declaration in ${filePath}`);
      return;
    }
    
    const functionName = functionMatch[1];
    
    // Find the broken return statement and the data arrays that follow
    const lines = content.split('\n');
    let fixedLines = [];
    let inFunction = false;
    let foundBrokenReturn = false;
    let dataArrays = [];
    let jsxReturnStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes(`export default function ${functionName}() {`)) {
        inFunction = true;
        fixedLines.push(line);
        continue;
      }
      
      if (inFunction && line.trim() === 'return;') {
        foundBrokenReturn = true;
        // Skip this line and start collecting data arrays
        continue;
      }
      
      if (inFunction && foundBrokenReturn && line.trim() === '},') {
        // End of data array, add it to our collection
        dataArrays.push(line);
        continue;
      }
      
      if (inFunction && foundBrokenReturn && line.trim() === '];') {
        // End of data array, add it to our collection
        dataArrays.push(line);
        continue;
      }
      
      if (inFunction && foundBrokenReturn && line.trim().startsWith('const ') && line.includes('=')) {
        // This is a data array definition, collect it
        dataArrays.push(line);
        continue;
      }
      
      if (inFunction && foundBrokenReturn && line.trim().startsWith('{') && !line.includes('return')) {
        // This is part of a data array, collect it
        dataArrays.push(line);
        continue;
      }
      
      if (inFunction && foundBrokenReturn && line.trim().startsWith('title:') || 
          line.trim().startsWith('description:') || 
          line.trim().startsWith('icon:') || 
          line.trim().startsWith('included:') ||
          line.trim().startsWith('name:') ||
          line.trim().startsWith('price:') ||
          line.trim().startsWith('period:') ||
          line.trim().startsWith('features:') ||
          line.trim().startsWith('popular:') ||
          line.trim().startsWith('number:') ||
          line.trim().startsWith('label:') ||
          line.trim().startsWith('rating:') ||
          line.trim().startsWith('avatar:') ||
          line.trim().startsWith('content:') ||
          line.trim().startsWith('author:') ||
          line.trim().startsWith('date:')) {
        // This is part of a data array, collect it
        dataArrays.push(line);
        continue;
      }
      
      if (inFunction && line.trim().startsWith('return (')) {
        // Found the JSX return statement
        jsxReturnStart = i;
        // Add the data arrays before the return statement
        if (dataArrays.length > 0) {
          fixedLines.push('');
          fixedLines.push('  // Data arrays');
          dataArrays.forEach(dataLine => {
            fixedLines.push(dataLine);
          });
          fixedLines.push('');
        }
        fixedLines.push(line);
        continue;
      }
      
      if (jsxReturnStart !== -1) {
        // We're in the JSX return section, keep all lines
        fixedLines.push(line);
        continue;
      }
      
      if (inFunction && !foundBrokenReturn) {
        // We're in the function but haven't found the broken return yet
        fixedLines.push(line);
        continue;
      }
    }
    
    // Write the fixed content
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(fullPath, fixedContent, 'utf8');
    console.log(`Fixed ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all broken files
console.log('Starting to fix broken components...');
brokenFiles.forEach(fixBrokenComponent);
console.log('Finished fixing components!');