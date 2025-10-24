import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesToFix = [
  { file: 'app/ai-automation/page.tsx', component: 'AiAutomationPage' },
  { file: 'app/ai-customer-support/page.tsx', component: 'AiCustomerSupportPage' },
  { file: 'app/ai-cybersecurity/page.tsx', component: 'AiCybersecurityPage' },
  { file: 'app/ai-data-analytics/page.tsx', component: 'AiDataAnalyticsPage' },
  { file: 'app/ai-data-visualization/page.tsx', component: 'AiDataVisualizationPage' },
  { file: 'app/ai-fintech/page.tsx', component: 'AiFintechPage' },
  { file: 'app/ai-healthcare/page.tsx', component: 'AiHealthcarePage' },
  { file: 'app/ai-marketing/page.tsx', component: 'AiMarketingPage' },
  { file: 'app/ai-sales-automation/page.tsx', component: 'AiSalesAutomationPage' },
  { file: 'app/ai-workflow-automation/page.tsx', component: 'AiWorkflowAutomationPage' },
  { file: 'app/ar-vr-solutions/page.tsx', component: 'ArVrSolutionsPage' },
  { file: 'app/autonomous-systems/page.tsx', component: 'AutonomousSystemsPage' },
  { file: 'app/consultation/page.tsx', component: 'ConsultationPage' },
  { file: 'app/iot-edge-computing/page.tsx', component: 'IotEdgeComputingPage' },
  { file: 'app/it-infrastructure/page.tsx', component: 'ItInfrastructurePage' },
  { file: 'app/it-support/page.tsx', component: 'ItSupportPage' },
  { file: 'app/micro-saas/page.tsx', component: 'MicroSaasPage' },
  { file: 'app/quantum-computing/page.tsx', component: 'QuantumComputingPage' },
  { file: 'app/status/page.tsx', component: 'StatusPage' }
];

function fixFile(filePath, componentName) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the ending
    content = content.replace(
      /    <\/React\.Fragment>\s*\);\s*};\s*export default PagePage;/g,
      `  );
};

export default ${componentName};`
    );
    
    // Also fix any other variations
    content = content.replace(
      /    <\/React\.Fragment>\s*\);\s*};\s*export default \w+Page;/g,
      `  );
};

export default ${componentName};`
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed file: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(({ file, component }) => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath, component);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('All files fixed!');