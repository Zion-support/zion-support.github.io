import fs from 'fs';
import { glob } from 'glob';

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find the actual function name
    const functionMatch = content.match(/function (\w+)\(\)/);
    if (functionMatch) {
      const functionName = functionMatch[1];
      
      // Fix the export wrapper to use the correct function name
      if (content.includes('<Page {...props} />') && functionName !== 'Page') {
        content = content.replace('<Page {...props} />', `<${functionName} {...props} />`);
        modified = true;
      }
      
      // Fix other common mismatches
      const commonMismatches = [
        'AiPoweredDevopsPage',
        'AiPoweredEmailAnalyzerPage', 
        'EcommerceAnalyticsProPage',
        'CybersecurityAuditPage',
        'LegalDocumentManagerPage',
        'MedicalRecordsManagerPage',
        'OnlineLearningPlatformPage',
        'PropertyManagementAiPage',
        'SupplyChainOptimizerPage',
        'TestPage',
        'ZionAIAPITesterPage',
        'ZionAIDatabaseOptimizerPage'
      ];
      
      for (const mismatch of commonMismatches) {
        if (content.includes(`<${mismatch} {...props} />`)) {
          content = content.replace(`<${mismatch} {...props} />`, `<${functionName} {...props} />`);
          modified = true;
        }
      }
    }
    
    // Fix any type issues - replace any with proper types
    if (content.includes('props: any')) {
      content = content.replace(/props: any/g, 'props: Record<string, any>');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page.tsx files
async function fixAllFiles() {
  try {
    const files = await glob('app/**/page.tsx');
    files.forEach(fixFile);
    console.log('All files processed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixAllFiles();