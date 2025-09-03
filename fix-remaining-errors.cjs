#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing brace for function
    if (content.includes('export default') && !content.includes('}')) {
      content = content.replace(/(\s*\)\s*;\s*export\s+default)/g, '\n  );\n}\n\nexport default');
      modified = true;
    }

    // Fix missing closing div tags
    if (content.includes('<div') && !content.includes('</div>')) {
      content = content.replace(/(\s*\)\s*;\s*export\s+default)/g, '\n      </div>\n    </div>\n  );\n}\n\nexport default');
      modified = true;
    }

    // Fix malformed arrays and objects
    if (content.includes('],') && content.includes('export default')) {
      content = content.replace(/(\s*\]\s*,\s*export\s+default)/g, '\n  ];\n\nexport default');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Fix specific problematic files
const problematicFiles = [
  'src/pages/services/AIHealthcareRevenueCycle.tsx',
  'src/pages/services/AIIdentityManagement.tsx',
  'src/pages/services/AIIncidentResponse.tsx',
  'src/pages/services/AIInsurance.tsx',
  'src/pages/services/AIInternetOfThings.tsx',
  'src/pages/services/AIKafka.tsx',
  'src/pages/services/AIKubernetes.tsx',
  'src/pages/services/AILegalDocumentAutomation.tsx',
  'src/pages/services/AILegalTech.tsx',
  'src/pages/services/AIManufacturing.tsx',
  'src/pages/services/AIManufacturingQualityControl.tsx',
  'src/pages/services/AIMarketingAutomation.tsx',
  'src/pages/services/AIMentalHealthSupportPlatform.tsx',
  'src/pages/services/AIMetaverse.tsx',
  'src/pages/services/AIMicroservices.tsx',
  'src/pages/services/AIMongoDB.tsx',
  'src/pages/services/AIMySQL.tsx',
  'src/pages/services/AINetworkSecurity.tsx',
  'src/pages/services/AIPenetrationTesting.tsx',
  'src/pages/services/AIPostgreSQL.tsx',
  'src/pages/services/AIPoweredSEO.tsx',
  'src/pages/services/AIPredictiveAnalytics.tsx',
  'src/pages/services/AIPredictiveAnalyticsPlatform.tsx',
  'src/pages/services/AIPredictiveMaintenance.tsx',
  'src/pages/services/AIProductivitySuite.tsx',
  'src/pages/services/AIProjectManagement.tsx',
  'src/pages/services/AIProjectManagementAssistant.tsx',
  'src/pages/services/AIPrometheus.tsx',
  'src/pages/services/AIQuantumComputing.tsx',
  'src/pages/services/AIQuantumComputingSolutions.tsx',
  'src/pages/services/AIQuantumMachineLearning.tsx',
  'src/pages/services/AIRealEstate.tsx',
  'src/pages/services/AIRealTimeBusinessIntelligence.tsx',
  'src/pages/services/AIRedis.tsx',
  'src/pages/services/AIRetail.tsx',
  'src/pages/services/AISEOOptimizer.tsx',
  'src/pages/services/AISecurityAnalytics.tsx',
  'src/pages/services/AISecurityAssessment.tsx',
  'src/pages/services/AISecurityAuditing.tsx',
  'src/pages/services/AISecurityAutomation.tsx',
  'src/pages/services/AISecurityAwareness.tsx',
  'src/pages/services/AISecurityCompliance.tsx',
  'src/pages/services/AISecurityConsulting.tsx',
  'src/pages/services/AISecurityForensics.tsx',
  'src/pages/services/AISecurityGovernance.tsx',
  'src/pages/services/AISecurityImplementation.tsx',
  'src/pages/services/AISecurityIntelligence.tsx',
  'src/pages/services/AISecurityMaintenance.tsx',
  'src/pages/services/AISecurityMonitoring.tsx',
  'src/pages/services/AISecurityOperations.tsx',
  'src/pages/services/AISecurityOrchestration.tsx',
  'src/pages/services/AISecurityRiskManagement.tsx',
  'src/pages/services/AISecuritySupport.tsx',
  'src/pages/services/AISecurityTesting.tsx',
  'src/pages/services/AISecurityTraining.tsx',
  'src/pages/services/AIServerless.tsx',
  'src/pages/services/AIServices.tsx',
  'src/pages/services/AISmartCityInfrastructure.tsx',
  'src/pages/services/AISmartCityPlatform.tsx',
  'src/pages/services/AISports.tsx',
  'src/pages/services/AISupplyChainOptimizationPlatform.tsx',
  'src/pages/services/AISustainableTechnology.tsx',
  'src/pages/services/AITerraform.tsx',
  'src/pages/services/AITransportation.tsx',
  'src/pages/services/AITravel.tsx',
  'src/pages/services/AIVideoAnalytics.tsx',
  'src/pages/services/AIVirtualReality.tsx',
  'src/pages/services/AIVulnerabilityManagement.tsx',
  'src/pages/services/AIWorkflowAutomation.tsx',
  'src/pages/services/Blockchain-Supply-Chain-Transparency.tsx',
  'src/pages/services/BlockchainAsAService.tsx',
  'src/pages/services/BlockchainSolutions.tsx',
  'src/pages/services/BlockchainWeb3Platform.tsx',
  'src/pages/services/CloudFinOpsOptimizer.tsx',
  'src/pages/services/CloudServices.tsx',
  'src/pages/services/Consulting.tsx',
  'src/pages/services/CybersecurityServices.tsx',
  'src/pages/services/DSRPortal.tsx',
  'src/pages/services/DataAnalytics.tsx',
  'src/pages/services/DigitalTwin.tsx',
  'src/pages/services/EnterpriseIT.tsx',
  'src/pages/services/FinOpsAdvisor.tsx',
  'src/pages/services/HelpdeskPlatform.tsx',
  'src/pages/services/ITConsulting.tsx',
  'src/pages/services/InterviewAssessmentAI.tsx',
  'src/pages/services/MachineLearning.tsx',
  'src/pages/services/MicroSAASSolutions.tsx',
  'src/pages/services/MicroSaaSPlatformElite.tsx',
  'src/pages/services/QuantumComputingElite.tsx',
  'src/pages/services/RoboticsAutomation.tsx',
  'src/pages/services/SecurityHeadersCSP.tsx',
  'src/pages/services/WebsiteAnalytics.tsx',
  'src/pages/services/ZeroTrustNetworkAccess.tsx'
];

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed ${fixedCount} files.`);