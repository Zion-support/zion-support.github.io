#!/usr/bin/env node; import fs from "fs"; import path from "path"; import { fileURLToPath } from "url"; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const corruptedFiles = [ "src/pages/services/AI-Talent-Acquisition-Platform.tsx","src/pages/services/AI5GNetwork.tsx","src/pages/services/AIAnsible.tsx","src/pages/services/AIApplicationSecurity.tsx","src/pages/services/AIAugmentedReality.tsx","src/pages/services/AIAutonomousBusinessOperationsPlatform.tsx","src/pages/services/AIAutonomousCodeGenerator.tsx","src/pages/services/AIBlockchain.tsx","src/pages/services/AIBlockchainIntegrationPlatform.tsx","src/pages/services/AIBusinessIntelligenceDashboard.tsx","src/pages/services/AIBusinessIntelligenceElite.tsx","src/pages/services/AIBusinessProcessAutomation.tsx","src/pages/services/AICarbonFootprintManagementPlatform.tsx","src/pages/services/AICassandra.tsx","src/pages/services/AICloudNative.tsx","src/pages/services/AIComplianceAssistant.tsx","src/pages/services/AIComplianceMonitoring.tsx","src/pages/services/AIContentCreation.tsx","src/pages/services/AIContentCreationSuite.tsx","src/pages/services/AIContentMarketingSuite.tsx","src/pages/services/AIContentPerformanceAnalytics.tsx","src/pages/services/AICustomerServiceAutomation.jsx","src/pages/services/AICustomerServiceAutomation.tsx","src/pages/services/AICustomerSupportAutomation.tsx","src/pages/services/AICybersecurityElite.tsx","src/pages/services/AICybersecurityThreatDetection.tsx","src/pages/services/AICybersecurityThreatIntelligencePlatform.tsx","src/pages/services/AIDataAnalytics.tsx","src/pages/services/AIDataSecurity.tsx","src/pages/services/AIDevOps.tsx","src/pages/services/AIDocker.tsx","src/pages/services/AIDocumentIntelligence.tsx","src/pages/services/AIEdgeComputing.tsx","src/pages/services/AIEducation.tsx","src/pages/services/AIElasticsearch.tsx","src/pages/services/AIEnergyManagement.tsx","src/pages/services/AIEnergyOptimization.tsx","src/pages/services/AIEntertainment.tsx","src/pages/services/AIFinancialPlanning.tsx","src/pages/services/AIFinancialPlanningAssistant.tsx","src/pages/services/AIFinancialRiskManagement.tsx","src/pages/services/AIFinancialRiskManagementPlatform.tsx","src/pages/services/AIFinancialTrading.tsx","src/pages/services/AIFinancialTradingAlgorithm.tsx","src/pages/services/AIGaming.tsx","src/pages/services/AIGrafana.tsx","src/pages/services/AIHRManagement.tsx","src/pages/services/AIHRPlatform.tsx","src/pages/services/AIHRRecruitment.tsx","src/pages/services/AIHRRecruitmentSuite.tsx","src/pages/services/AIHRTalentAcquisition.tsx","src/pages/services/AIHealthcare.tsx"]; function createServiceComponent(serviceName) { const componentName = serviceName.replace(/[^a-zA-Z0-9]/g,""); const displayName = serviceName.replace(/AI|\.tsx|\.jsx/g,"").replace(/([A-Z])/g," $1").trim(); return `import React from "react"; import Link from "next/link"; import Head from "next/head"; const ${componentName} = () => { return (; <>; <Head>; <title>${displayName} - AI Services</title>; <meta name="description" content="Professional ${displayName} services powered by AI" />; </Head>; ; <div className="min-h-screen bg-gray-50">; <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">; <div className="text-center">; <h1 className="text-4xl font-bold text-gray-900 mb-8">; ${displayName} </h1>; <p className="text-xl text-gray-600 mb-12">; Professional ${displayName} services powered by artificial intelligence; </p>; ; <div className="grid md:grid-cols-2 gap-8 mb-12">; <div className="bg-white p-6 rounded-lg shadow-md">; <h2 className="text-2xl font-semibold mb-4">Our Services</h2>; <ul className="text-gray-600 space-y-2">; <li>• Advanced AI Solutions</li>; <li>• Custom Implementation</li>; <li>• 24/7 Support</li>; <li>• Expert Consultation</li>; </ul>; </div>; ; <div className="bg-white p-6 rounded-lg shadow-md">; <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>; <ul className="text-gray-600 space-y-2">; <li>• Industry Expertise</li>; <li>• Proven Results</li>; <li>• Scalable Solutions</li>; <li>• Competitive Pricing</li>; </ul>; </div>; </div>; ; <div className="flex flex-col sm:flex-row gap-4 justify-center">; <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">; View Pricing; </Link>; <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">; Contact Us; </Link>; </div>; </div>; </div>; </div>; </>; )} export default ${componentName};`,} ; function fixNextLinks(filePath) { try { let content = fs.readFileSync(filePath,"utf8"); if (content.includes("href="/") && !content.includes("import Link")) { content = content.replace(; /import React from "react";/,`import React from "react"; import Link from "next/link";`; )} ; content = content.replace(; /<a href="(\/[^"]*)"([^>]*)>/g,"<Link href="$1"$2>"; ); content = content.replace(/<\/a>/g,"</Link>"); fs.writeFileSync(filePath,content); } catch (error) { console.error(`Error fixing links in ${filePath}:`,error.message)} } ; function fixTestFiles() { const testFiles = [ "src/test/App.test.tsx"]; testFiles.forEach(filePath => { try { if (fs.existsSync(filePath)) { let content = fs.readFileSync(filePath,"utf8"); content = content.replace(/import\s*{([^}]*)\s*}\s*from\s*[""]@testing-library\/react[""];/,"import { $1 } from "@testing-library/react";"); fs.writeFileSync(filePath,content); } } catch (error) { console.error(`Error fixing test file ${filePath}:`,error.message)} })} ;   corruptedFiles.forEach(filePath => { try { const serviceName = path.basename(filePath,path.extname(filePath)); const newContent = createServiceComponent(serviceName); fs.writeFileSync(filePath,newContent); } catch (error) { console.error(`Error rewriting ${filePath}:`,error.message)} });  const serviceDir = "src/pages/services"; if (fs.existsSync(serviceDir)) { const files = fs.readdirSync(serviceDir); files.forEach(file => { if (file.endsWith(".tsx") || file.endsWith(".jsx")) { const filePath = path.join(serviceDir,file); fixNextLinks(filePath)} })} ;  fixReduxFiles();  fixTestFiles();  const problematicFiles = [ "src/pages/services/AICustomerServiceAutomation.js.jsx","src/pages/services/EnterpriseIT.js.jsx"]; problematicFiles.forEach(filePath => { try { if (fs.existsSync(filePath)) { fs.unlinkSync(filePath); } } catch (error) { console.error(`Error removing ${filePath}:`,error.message)} }); 
#!/usr/bin/env node;
import fs from "fs";
import path from "path";
import { fileURLToPath  } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// List of all corrupted files that need to be completely rewritten;
const corruptedFiles = ["src/pages/services/AI-Talent-Acquisition-Platform.tsx",
  "src/pages/services/AI5GNetwork.tsx",
  "src/pages/services/AIAnsible.tsx",
  "src/pages/services/AIApplicationSecurity.tsx",
  "src/pages/services/AIAugmentedReality.tsx",
  "src/pages/services/AIAutonomousBusinessOperationsPlatform.tsx",
  "src/pages/services/AIAutonomousCodeGenerator.tsx",
  "src/pages/services/AIBlockchain.tsx",
  "src/pages/services/AIBlockchainIntegrationPlatform.tsx",
  "src/pages/services/AIBusinessIntelligenceDashboard.tsx",
  "src/pages/services/AIBusinessIntelligenceElite.tsx",
  "src/pages/services/AIBusinessProcessAutomation.tsx",
  "src/pages/services/AICarbonFootprintManagementPlatform.tsx",
  "src/pages/services/AICassandra.tsx",
  "src/pages/services/AICloudNative.tsx",
  "src/pages/services/AIComplianceAssistant.tsx",
  "src/pages/services/AIComplianceMonitoring.tsx",
  "src/pages/services/AIContentCreation.tsx",
  "src/pages/services/AIContentCreationSuite.tsx",
  "src/pages/services/AIContentMarketingSuite.tsx",
  "src/pages/services/AIContentPerformanceAnalytics.tsx",
  "src/pages/services/AICustomerServiceAutomation.jsx",
  "src/pages/services/AICustomerServiceAutomation.tsx",
  "src/pages/services/AICustomerSupportAutomation.tsx",
  "src/pages/services/AICybersecurityElite.tsx",
  "src/pages/services/AICybersecurityThreatDetection.tsx",
  "src/pages/services/AICybersecurityThreatIntelligencePlatform.tsx",
  "src/pages/services/AIDataAnalytics.tsx",
  "src/pages/services/AIDataSecurity.tsx",
  "src/pages/services/AIDevOps.tsx",
  "src/pages/services/AIDocker.tsx",
  "src/pages/services/AIDocumentIntelligence.tsx",
  "src/pages/services/AIEdgeComputing.tsx",
  "src/pages/services/AIEducation.tsx",
  "src/pages/services/AIElasticsearch.tsx",
  "src/pages/services/AIEnergyManagement.tsx",
  "src/pages/services/AIEnergyOptimization.tsx",
  "src/pages/services/AIEntertainment.tsx",
  "src/pages/services/AIFinancialPlanning.tsx",
  "src/pages/services/AIFinancialPlanningAssistant.tsx",
  "src/pages/services/AIFinancialRiskManagement.tsx",
  "src/pages/services/AIFinancialRiskManagementPlatform.tsx",
  "src/pages/services/AIFinancialTrading.tsx",
  "src/pages/services/AIFinancialTradingAlgorithm.tsx",
  "src/pages/services/AIGaming.tsx",
  "src/pages/services/AIGrafana.tsx",
  "src/pages/services/AIHRManagement.tsx",
  "src/pages/services/AIHRPlatform.tsx",
  "src/pages/services/AIHRRecruitment.tsx",
  "src/pages/services/AIHRRecruitmentSuite.tsx",
  "src/pages/services/AIHRTalentAcquisition.tsx",
  "src/pages/services/AIHealthcare.tsx"];
// Function to create a proper React component;
function createServiceComponent(serviceName) {
  const componentName = serviceName.replace(/[^a-zA-Z0-9]/g, "");
  const displayName = serviceName.replace(/AI|\.tsx|\.jsx/g, "").replace(/([A-Z])/g, " $1").trim();
  return `import React from "react";
import Link from "next/link";
import Head from "next/head";
const ${componentName} = () => {
  return (;
    <>;
      <Head>;
        <title>${displayName} - AI Services</title>;
        <meta name="description" content="Professional ${displayName} services powered by AI" />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8 py-12">;
          <div className="text-center">;
            <h1 className="text-4xl font-bold text-gray-900 mb-8">;
              ${displayName}
            </h1>;
            <p className="text-xl text-gray-600 mb-12">;
              Professional ${displayName} services powered by artificial intelligence;
            </p>;
            <div className="grid "md": grid-cols-2 gap-8 mb-12">;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Advanced AI Solutions</li>;
                  <li>• Custom Implementation</li>;
                  <li>• 24/7 Support</li>;
                  <li>• Expert Consultation</li>;
                </ul>;
              </div>;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Industry Expertise</li>;
                  <li>• Proven Results</li>;
                  <li>• Scalable Solutions</li>;
                  <li>• Competitive Pricing</li>;
                </ul>;
              </div>;
            </div>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">;
                Contact Us;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  )}
export default ${componentName};`}
;
// Function to fix Next.js Link issues;
function fixNextLinks(filePath) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
    // Add Link import if not present and file has href attributes;
    if (content.includes("href="/") && !content.includes("import Link")) {
  content = content.replace(;
        /import React from "react";/,
        "import React from "react";
import Link from "next/link";";
      )}
    ;
    // Replace <a href="/..."> with <Link href="/...">;
    content = content.replace(;
      /<a href="(\/[^"]*)"([^>]*)>/g,
      "<Link href="$1"$2>";
    );
    // Replace </a> with </Link>;
    content = content.replace(/<\/a>/g, "</Link>");
    fs.writeFileSync(filePath, content);
    console.log(`Fixed Next.js links "in": ${filePath}`)} catch (error) {
  console.error(`Error fixing links in ${filePath}:`, error.message)}
}
;
// "Note": previously broken fixer removed to avoid syntax errors.
// Function to fix test files;
function fixTestFiles() {
  const testFiles = ["src/test/App.test.tsx"];
  testFiles.forEach(filePath => {
  try {
  if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, "utf8");
        // Fix common test syntax errors;
        content = content.replace(/import\s*{([^}]*)\s*}\s*from\s*[""]@testing-library\/react[""];/,
          "import { $1  } from "@testing-library/react";");
        fs.writeFileSync(filePath, content);
        console.log(`Fixed test "file": ${filePath}`)}
    } catch (error) {
  console.error(`Error fixing test file ${filePath}:`, error.message)}
  })}
;
// Main execution;
console.log("Starting comprehensive fix...");
// 1. Fix corrupted files by rewriting them;
console.log("Fixing corrupted files...");
corruptedFiles.forEach(filePath => {
  try {
  const serviceName = path.basename(filePath, path.extname(filePath));
    const newContent = createServiceComponent(serviceName);
    fs.writeFileSync(filePath, newContent);
    console.log(`Rewrote corrupted "file": ${filePath}`)} catch (error) {
  console.error(`Error rewriting ${filePath}:`, error.message)}
});
// 2. Fix Next.js Link issues in all service files;
console.log("Fixing Next.js Link issues...");
const serviceDir = "src/pages/services";
if (fs.existsSync(serviceDir)) {
  const files = fs.readdirSync(serviceDir);
  files.forEach(file => {
  if (file.endsWith(".tsx") || file.endsWith(".jsx")) {
  const filePath = path.join(serviceDir, file);
      fixNextLinks(filePath)}
  })}
;
// 3. Fix Redux files;
console.log("Fixing Redux files...");
fixReduxFiles();
// 4. Fix test files;
console.log("Fixing test files...");
fixTestFiles();
// 5. Remove problematic .js.jsx files;
console.log("Removing problematic .js.jsx files...");
const problematicFiles = ["src/pages/services/AICustomerServiceAutomation.js.jsx",
  "src/pages/services/EnterpriseIT.js.jsx"];
problematicFiles.forEach(filePath => {
  try {
  if (fs.existsSync(filePath)) {
  fs.unlinkSync(filePath);
      console.log(`Removed problematic "file": ${filePath}`)}
  } catch (error) {
  console.error(`Error removing ${filePath}:`, error.message)}
});
console.log("Comprehensive fix completed!")
#!/usr/bin/env node; import fs from "fs"; import path from "path"; import { fileURLToPath } from "url"; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const corruptedFiles = [ "src/pages/services/AI-Talent-Acquisition-Platform.tsx","src/pages/services/AI5GNetwork.tsx","src/pages/services/AIAnsible.tsx","src/pages/services/AIApplicationSecurity.tsx","src/pages/services/AIAugmentedReality.tsx","src/pages/services/AIAutonomousBusinessOperationsPlatform.tsx","src/pages/services/AIAutonomousCodeGenerator.tsx","src/pages/services/AIBlockchain.tsx","src/pages/services/AIBlockchainIntegrationPlatform.tsx","src/pages/services/AIBusinessIntelligenceDashboard.tsx","src/pages/services/AIBusinessIntelligenceElite.tsx","src/pages/services/AIBusinessProcessAutomation.tsx","src/pages/services/AICarbonFootprintManagementPlatform.tsx","src/pages/services/AICassandra.tsx","src/pages/services/AICloudNative.tsx","src/pages/services/AIComplianceAssistant.tsx","src/pages/services/AIComplianceMonitoring.tsx","src/pages/services/AIContentCreation.tsx","src/pages/services/AIContentCreationSuite.tsx","src/pages/services/AIContentMarketingSuite.tsx","src/pages/services/AIContentPerformanceAnalytics.tsx","src/pages/services/AICustomerServiceAutomation.jsx","src/pages/services/AICustomerServiceAutomation.tsx","src/pages/services/AICustomerSupportAutomation.tsx","src/pages/services/AICybersecurityElite.tsx","src/pages/services/AICybersecurityThreatDetection.tsx","src/pages/services/AICybersecurityThreatIntelligencePlatform.tsx","src/pages/services/AIDataAnalytics.tsx","src/pages/services/AIDataSecurity.tsx","src/pages/services/AIDevOps.tsx","src/pages/services/AIDocker.tsx","src/pages/services/AIDocumentIntelligence.tsx","src/pages/services/AIEdgeComputing.tsx","src/pages/services/AIEducation.tsx","src/pages/services/AIElasticsearch.tsx","src/pages/services/AIEnergyManagement.tsx","src/pages/services/AIEnergyOptimization.tsx","src/pages/services/AIEntertainment.tsx","src/pages/services/AIFinancialPlanning.tsx","src/pages/services/AIFinancialPlanningAssistant.tsx","src/pages/services/AIFinancialRiskManagement.tsx","src/pages/services/AIFinancialRiskManagementPlatform.tsx","src/pages/services/AIFinancialTrading.tsx","src/pages/services/AIFinancialTradingAlgorithm.tsx","src/pages/services/AIGaming.tsx","src/pages/services/AIGrafana.tsx","src/pages/services/AIHRManagement.tsx","src/pages/services/AIHRPlatform.tsx","src/pages/services/AIHRRecruitment.tsx","src/pages/services/AIHRRecruitmentSuite.tsx","src/pages/services/AIHRTalentAcquisition.tsx","src/pages/services/AIHealthcare.tsx"]; function createServiceComponent(serviceName) { const componentName = serviceName.replace(/[^a-zA-Z0-9]/g,""); const displayName = serviceName.replace(/AI|\.tsx|\.jsx/g,"").replace(/([A-Z])/g," $1").trim(); return `import React from "react"; import Link from "next/link"; import Head from "next/head"; const ${componentName} = () => { return (; <>; <Head>; <title>${displayName} - AI Services</title>; <meta name="description" content="Professional ${displayName} services powered by AI" />; </Head>; ; <div className="min-h-screen bg-gray-50">; <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">; <div className="text-center">; <h1 className="text-4xl font-bold text-gray-900 mb-8">; ${displayName} </h1>; <p className="text-xl text-gray-600 mb-12">; Professional ${displayName} services powered by artificial intelligence; </p>; ; <div className="grid md:grid-cols-2 gap-8 mb-12">; <div className="bg-white p-6 rounded-lg shadow-md">; <h2 className="text-2xl font-semibold mb-4">Our Services</h2>; <ul className="text-gray-600 space-y-2">; <li>• Advanced AI Solutions</li>; <li>• Custom Implementation</li>; <li>• 24/7 Support</li>; <li>• Expert Consultation</li>; </ul>; </div>; ; <div className="bg-white p-6 rounded-lg shadow-md">; <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>; <ul className="text-gray-600 space-y-2">; <li>• Industry Expertise</li>; <li>• Proven Results</li>; <li>• Scalable Solutions</li>; <li>• Competitive Pricing</li>; </ul>; </div>; </div>; ; <div className="flex flex-col sm:flex-row gap-4 justify-center">; <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">; View Pricing; </Link>; <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">; Contact Us; </Link>; </div>; </div>; </div>; </div>; </>; )} export default ${componentName};`,} ; function fixNextLinks(filePath) { try { let content = fs.readFileSync(filePath,"utf8"); if (content.includes("href="/") && !content.includes("import Link")) { content = content.replace(; /import React from "react";/,`import React from "react"; import Link from "next/link";`; )} ; content = content.replace(; /<a href="(\/[^"]*)"([^>]*)>/g,"<Link href="$1"$2>"; ); content = content.replace(/<\/a>/g,"</Link>"); fs.writeFileSync(filePath,content); console.log(`Fixed Next.js links in: ${filePath}`)} catch (error) { console.error(`Error fixing links in ${filePath}:`,error.message)} } ; function fixTestFiles() { const testFiles = [ "src/test/App.test.tsx"]; testFiles.forEach(filePath => { try { if (fs.existsSync(filePath)) { let content = fs.readFileSync(filePath,"utf8"); content = content.replace(/import\s*{([^}]*)\s*}\s*from\s*[""]@testing-library\/react[""];/,"import { $1 } from "@testing-library/react";"); fs.writeFileSync(filePath,content); console.log(`Fixed test file: ${filePath}`)} } catch (error) { console.error(`Error fixing test file ${filePath}:`,error.message)} })} ; console.log("Starting comprehensive fix..."); console.log("Fixing corrupted files..."); corruptedFiles.forEach(filePath => { try { const serviceName = path.basename(filePath,path.extname(filePath)); const newContent = createServiceComponent(serviceName); fs.writeFileSync(filePath,newContent); console.log(`Rewrote corrupted file: ${filePath}`)} catch (error) { console.error(`Error rewriting ${filePath}:`,error.message)} }); console.log("Fixing Next.js Link issues..."); const serviceDir = "src/pages/services"; if (fs.existsSync(serviceDir)) { const files = fs.readdirSync(serviceDir); files.forEach(file => { if (file.endsWith(".tsx") || file.endsWith(".jsx")) { const filePath = path.join(serviceDir,file); fixNextLinks(filePath)} })} ; console.log("Fixing Redux files..."); fixReduxFiles(); console.log("Fixing test files..."); fixTestFiles(); console.log("Removing problematic .js.jsx files..."); const problematicFiles = [ "src/pages/services/AICustomerServiceAutomation.js.jsx","src/pages/services/EnterpriseIT.js.jsx"]; problematicFiles.forEach(filePath => { try { if (fs.existsSync(filePath)) { fs.unlinkSync(filePath); console.log(`Removed problematic file: ${filePath}`)} } catch (error) { console.error(`Error removing ${filePath}:`,error.message)} }); console.log("Comprehensive fix completed!")
#!/usr/bin/env node; import fs from "fs"; import path from "path"; import { fileURLToPath } from "url"; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const corruptedFiles = [ "src/pages/services/AI-Talent-Acquisition-Platform.tsx","src/pages/services/AI5GNetwork.tsx","src/pages/services/AIAnsible.tsx","src/pages/services/AIApplicationSecurity.tsx","src/pages/services/AIAugmentedReality.tsx","src/pages/services/AIAutonomousBusinessOperationsPlatform.tsx","src/pages/services/AIAutonomousCodeGenerator.tsx","src/pages/services/AIBlockchain.tsx","src/pages/services/AIBlockchainIntegrationPlatform.tsx","src/pages/services/AIBusinessIntelligenceDashboard.tsx","src/pages/services/AIBusinessIntelligenceElite.tsx","src/pages/services/AIBusinessProcessAutomation.tsx","src/pages/services/AICarbonFootprintManagementPlatform.tsx","src/pages/services/AICassandra.tsx","src/pages/services/AICloudNative.tsx","src/pages/services/AIComplianceAssistant.tsx","src/pages/services/AIComplianceMonitoring.tsx","src/pages/services/AIContentCreation.tsx","src/pages/services/AIContentCreationSuite.tsx","src/pages/services/AIContentMarketingSuite.tsx","src/pages/services/AIContentPerformanceAnalytics.tsx","src/pages/services/AICustomerServiceAutomation.jsx","src/pages/services/AICustomerServiceAutomation.tsx","src/pages/services/AICustomerSupportAutomation.tsx","src/pages/services/AICybersecurityElite.tsx","src/pages/services/AICybersecurityThreatDetection.tsx","src/pages/services/AICybersecurityThreatIntelligencePlatform.tsx","src/pages/services/AIDataAnalytics.tsx","src/pages/services/AIDataSecurity.tsx","src/pages/services/AIDevOps.tsx","src/pages/services/AIDocker.tsx","src/pages/services/AIDocumentIntelligence.tsx","src/pages/services/AIEdgeComputing.tsx","src/pages/services/AIEducation.tsx","src/pages/services/AIElasticsearch.tsx","src/pages/services/AIEnergyManagement.tsx","src/pages/services/AIEnergyOptimization.tsx","src/pages/services/AIEntertainment.tsx","src/pages/services/AIFinancialPlanning.tsx","src/pages/services/AIFinancialPlanningAssistant.tsx","src/pages/services/AIFinancialRiskManagement.tsx","src/pages/services/AIFinancialRiskManagementPlatform.tsx","src/pages/services/AIFinancialTrading.tsx","src/pages/services/AIFinancialTradingAlgorithm.tsx","src/pages/services/AIGaming.tsx","src/pages/services/AIGrafana.tsx","src/pages/services/AIHRManagement.tsx","src/pages/services/AIHRPlatform.tsx","src/pages/services/AIHRRecruitment.tsx","src/pages/services/AIHRRecruitmentSuite.tsx","src/pages/services/AIHRTalentAcquisition.tsx","src/pages/services/AIHealthcare.tsx"]; function createServiceComponent(serviceName) { const componentName = serviceName.replace(/[^a-zA-Z0-9]/g,""); const displayName = serviceName.replace(/AI|\.tsx|\.jsx/g,"").replace(/([A-Z])/g," $1").trim(); return `import React from "react"; import Link from "next/link"; import Head from "next/head"; const ${componentName} = () => { return (; <>; <Head>; <title>${displayName} - AI Services</title>; <meta name="description" content="Professional ${displayName} services powered by AI" />; </Head>; ; <div className="min-h-screen bg-gray-50">; <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">; <div className="text-center">; <h1 className="text-4xl font-bold text-gray-900 mb-8">; ${displayName} </h1>; <p className="text-xl text-gray-600 mb-12">; Professional ${displayName} services powered by artificial intelligence; </p>; ; <div className="grid md:grid-cols-2 gap-8 mb-12">; <div className="bg-white p-6 rounded-lg shadow-md">; <h2 className="text-2xl font-semibold mb-4">Our Services</h2>; <ul className="text-gray-600 space-y-2">; <li>• Advanced AI Solutions</li>; <li>• Custom Implementation</li>; <li>• 24/7 Support</li>; <li>• Expert Consultation</li>; </ul>; </div>; ; <div className="bg-white p-6 rounded-lg shadow-md">; <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>; <ul className="text-gray-600 space-y-2">; <li>• Industry Expertise</li>; <li>• Proven Results</li>; <li>• Scalable Solutions</li>; <li>• Competitive Pricing</li>; </ul>; </div>; </div>; ; <div className="flex flex-col sm:flex-row gap-4 justify-center">; <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">; View Pricing; </Link>; <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">; Contact Us; </Link>; </div>; </div>; </div>; </div>; </>; )} export default ${componentName};`,} ; function fixNextLinks(filePath) { try { let content = fs.readFileSync(filePath,"utf8"); if (content.includes("href="/") && !content.includes("import Link")) { content = content.replace(; /import React from "react";/,`import React from "react"; import Link from "next/link";`; )} ; content = content.replace(; /<a href="(\/[^"]*)"([^>]*)>/g,"<Link href="$1"$2>"; ); content = content.replace(/<\/a>/g,"</Link>"); fs.writeFileSync(filePath,content); console.log(`Fixed Next.js links in: ${filePath}`)} catch (error) { console.error(`Error fixing links in ${filePath}:`,error.message)} } ; function fixTestFiles() { const testFiles = [ "src/test/App.test.tsx"]; testFiles.forEach(filePath => { try { if (fs.existsSync(filePath)) { let content = fs.readFileSync(filePath,"utf8"); content = content.replace(/import\s*{([^}]*)\s*}\s*from\s*[""]@testing-library\/react[""];/,"import { $1 } from "@testing-library/react";"); fs.writeFileSync(filePath,content); console.log(`Fixed test file: ${filePath}`)} } catch (error) { console.error(`Error fixing test file ${filePath}:`,error.message)} })} ; console.log("Starting comprehensive fix..."); console.log("Fixing corrupted files..."); corruptedFiles.forEach(filePath => { try { const serviceName = path.basename(filePath,path.extname(filePath)); const newContent = createServiceComponent(serviceName); fs.writeFileSync(filePath,newContent); console.log(`Rewrote corrupted file: ${filePath}`)} catch (error) { console.error(`Error rewriting ${filePath}:`,error.message)} }); console.log("Fixing Next.js Link issues..."); const serviceDir = "src/pages/services"; if (fs.existsSync(serviceDir)) { const files = fs.readdirSync(serviceDir); files.forEach(file => { if (file.endsWith(".tsx") || file.endsWith(".jsx")) { const filePath = path.join(serviceDir,file); fixNextLinks(filePath)} })} ; console.log("Fixing Redux files..."); fixReduxFiles(); console.log("Fixing test files..."); fixTestFiles(); console.log("Removing problematic .js.jsx files..."); const problematicFiles = [ "src/pages/services/AICustomerServiceAutomation.js.jsx","src/pages/services/EnterpriseIT.js.jsx"]; problematicFiles.forEach(filePath => { try { if (fs.existsSync(filePath)) { fs.unlinkSync(filePath); console.log(`Removed problematic file: ${filePath}`)} } catch (error) { console.error(`Error removing ${filePath}:`,error.message)} }); console.log("Comprehensive fix completed!")
