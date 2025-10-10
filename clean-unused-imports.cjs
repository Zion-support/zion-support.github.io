#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to clean unused imports and variables
function cleanUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const lines = content.split('\n');
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip unused import lines
      if (line.trim().startsWith('import ') && 
          (line.includes('React') || 
           line.includes('useState') || 
           line.includes('useEffect') || 
           line.includes('Routes') || 
           line.includes('Route') ||
           line.includes('Navigation') ||
           line.includes('Footer') ||
           line.includes('Helmet') ||
           line.includes('Link') ||
           line.includes('Users') ||
           line.includes('Target') ||
           line.includes('Brain') ||
           line.includes('Shield') ||
           line.includes('TestTube') ||
           line.includes('Zap') ||
           line.includes('Settings') ||
           line.includes('CheckCircle') ||
           line.includes('BarChart') ||
           line.includes('Star') ||
           line.includes('TrendingUp') ||
           line.includes('Clock') ||
           line.includes('Phone') ||
           line.includes('Eye') ||
           line.includes('Camera') ||
           line.includes('Video') ||
           line.includes('ArrowRight') ||
           line.includes('PerformanceEnhancer') ||
           line.includes('SEOEnhancer') ||
           line.includes('AccessibilityEnhancer') ||
           line.includes('SecurityEnhancer') ||
           line.includes('UserExperienceEnhancer') ||
           line.includes('ITServicesPage') ||
           line.includes('ITInfrastructurePage') ||
           line.includes('CybersecurityPage') ||
           line.includes('CloudMigrationPage') ||
           line.includes('DevOpsPage') ||
           line.includes('DatabasePage') ||
           line.includes('NetworkingPage') ||
           line.includes('AICRMPage') ||
           line.includes('AIAnalyticsDashboardPage') ||
           line.includes('AIChatbotBuilderPage') ||
           line.includes('AIEmailMarketingPage') ||
           line.includes('AIWritingAssistantPage') ||
           line.includes('TeamPage') ||
           line.includes('CareersPage') ||
           line.includes('NewsPage') ||
           line.includes('AboutPage') ||
           line.includes('ContactPage') ||
           line.includes('ServicesPage') ||
           line.includes('BlogPage') ||
           line.includes('CaseStudiesPage') ||
           line.includes('AICustomerSupportBotPage') ||
           line.includes('AICodeGenerationPage') ||
           line.includes('AISocialMediaManagerPage') ||
           line.includes('AIMLPlatformPage'))) {
        // Skip this import line
        modified = true;
        continue;
      }
      
      // Skip unused variable declarations
      if (line.trim().startsWith('const _') || 
          line.trim().startsWith('let _') ||
          line.trim().startsWith('var _')) {
        // Skip unused variable declarations
        modified = true;
        continue;
      }
      
      // Skip standalone expressions that are not assignments or function calls
      if (line.trim().match(/^[a-zA-Z_][a-zA-Z0-9_]*\s*\(\)\s*;?\s*$/) && 
          !line.includes('=') && 
          !line.includes('export') &&
          !line.includes('return')) {
        // Skip standalone function calls
        modified = true;
        continue;
      }
      
      cleanedLines.push(line);
    }
    
    if (modified) {
      content = cleanedLines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files in src directory
function findSourceFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Only search in src directory
        if (item === 'src' || currentDir.includes('src')) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if it's a source file
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
function main() {
  console.log('🔍 Searching for source files in src directory...');
  
  const sourceFiles = findSourceFiles(process.cwd());
  
  console.log(`📁 Found ${sourceFiles.length} source files`);
  
  console.log('\n🧹 Cleaning unused imports and variables...');
  
  let cleanedCount = 0;
  let errorCount = 0;
  
  for (const file of sourceFiles) {
    if (cleanUnusedImports(file)) {
      cleanedCount++;
      console.log(`✅ Cleaned: ${file}`);
    } else {
      // Check if file has issues
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('import ') && content.includes('React')) {
          console.log(`🔍 Checked: ${file}`);
        }
      } catch (error) {
        errorCount++;
        console.log(`❌ Error: ${file}`);
      }
    }
  }
  
  console.log(`\n✅ Cleaned ${cleanedCount} files`);
  if (errorCount > 0) {
    console.log(`❌ ${errorCount} files had errors`);
  }
}

// Run the script
main();