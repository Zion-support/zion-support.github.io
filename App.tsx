import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import ITServicesPage from './app/it-services/page'
import MicroSAASServicesPage from './app/micro-saas-services/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'

// AI Services
import AIContentGeneratorPage from './app/ai-content-generator/page'
import AIChatbotBuilderPage from './app/ai-chatbot-builder/page'
import AIAnalyticsDashboardPage from './app/ai-analytics-dashboard/page'
import AIEmailAssistantPage from './app/ai-email-assistant/page'
import AICustomerSupportPage from './app/ai-customer-support/page'
import AICybersecurityPage from './app/ai-cybersecurity/page'
import AIDataAnalyticsPage from './app/ai-data-analytics/page'
import AIDocumentProcessingPage from './app/ai-document-processing/page'
import AIEcommerceSolutionsPage from './app/ai-ecommerce-solutions/page'
import AIEnterpriseSolutionsPage from './app/ai-enterprise-solutions/page'
import AIContentWriterPage from './app/ai-content-writer/page'
import AICodeAssistantPage from './app/ai-code-assistant/page'
import AICRMAssistantPage from './app/ai-crm-assistant/page'
import AICustomerServicePage from './app/ai-customer-service/page'
import AIDesignStudioPage from './app/ai-design-studio/page'
import AIDocumentIntelligencePage from './app/ai-document-intelligence/page'
import AIEducationPage from './app/ai-education/page'
import AIEmailMarketingPage from './app/ai-email-marketing/page'
import AIEnergyPage from './app/ai-energy/page'
import AIExpenseTrackerPage from './app/ai-expense-tracker/page'
import AIFinancialAdvisorPage from './app/ai-financial-advisor/page'
import AICloudInfrastructurePage from './app/ai-cloud-infrastructure/page'
import AIBlockchainSolutionsPage from './app/ai-blockchain-solutions/page'
import AIBusinessIntelligencePage from './app/ai-business-intelligence/page'
import AIComputerVisionPage from './app/ai-computer-vision/page'
import AIConversationalAIPage from './app/ai-conversational-ai/page'
import AICustomerChurnPage from './app/ai-customer-churn/page'
import AIDrugDiscoveryProPage from './app/ai-drug-discovery-pro/page'
import AIEdgeComputingPage from './app/ai-edge-computing/page'
import AIFashionDesignPage from './app/ai-fashion-design/page'
import AIFinancialAnalyzerPage from './app/ai-financial-analyzer/page'
import AI3DGenerationPage from './app/ai-3d-generation/page'
import AIAccountingAssistantPage from './app/ai-accounting-assistant/page'
import AIAgriculturalIntelligenceProPage from './app/ai-agricultural-intelligence-pro/page'
import AIAnalyticsPage from './app/ai-analytics/page'
import AIAPIManagementPage from './app/ai-api-management/page'
import AIAPIManagerPage from './app/ai-api-manager/page'
import AIAutomatedReportingPage from './app/ai-automated-reporting/page'
import AIAutomatedTestingPage from './app/ai-automated-testing/page'
import AIAutomationPage from './app/ai-automation/page'
import AIAutonomousSystemsPage from './app/ai-autonomous-systems/page'
import AIBlockchainAnalyticsPage from './app/ai-blockchain-analytics/page'
import AIChatbotEnterprisePage from './app/ai-chatbot-enterprise/page'
import AIClimatePredictionEnginePage from './app/ai-climate-prediction-engine/page'
import AIClimateSolutionsProPage from './app/ai-climate-solutions-pro/page'
import AICodeGenerationPage from './app/ai-code-generation/page'
import AICodeSecurityAuditorPage from './app/ai-code-security-auditor/page'
import AIContentDeliveryNetworkPage from './app/ai-content-delivery-network/page'
import AIContentGenerationPage from './app/ai-content-generation/page'
import AIContentGenerationProPage from './app/ai-content-generation-pro/page'
import AIContentModerationPage from './app/ai-content-moderation/page'
import AIContentStudioPage from './app/ai-content-studio/page'
import AIConversationAnalyticsPage from './app/ai-conversation-analytics/page'
import AICustomerSupportBotPage from './app/ai-customer-support-bot/page'
import AICustomerSupportChatbotPage from './app/ai-customer-support-chatbot/page'
import AICyberDefenseMatrixPage from './app/ai-cyber-defense-matrix/page'
import AICybersecurityMonitorPage from './app/ai-cybersecurity-monitor/page'
import AICybersecuritySuitePage from './app/ai-cybersecurity-suite/page'
import AIDataVisualizationPage from './app/ai-data-visualization/page'
import AIDocumentProcessorPage from './app/ai-document-processor/page'
import AIDocumentScannerPage from './app/ai-document-scanner/page'
import AIEcommerceAssistantPage from './app/ai-ecommerce-assistant/page'
import AIEcommerceOptimizerPage from './app/ai-ecommerce-optimizer/page'
import AIEmailMarketingAutomationPage from './app/ai-email-marketing-automation/page'
import AIEnergyGridManagementProPage from './app/ai-energy-grid-management-pro/page'
import AIExpenseTrackerPage from './app/ai-expense-tracker/page'
import AIFinancialCrimeDetectionProPage from './app/ai-financial-crime-detection-pro/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/it-services" element={<ITServicesPage />} />
            <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
            <Route path="/cloud-services" element={<CloudServicesPage />} />
            <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
            
            {/* AI Services Routes */}
            <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
            <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
            <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
            <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
            <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
            <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
            <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
            <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
            <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
            <Route path="/ai-enterprise-solutions" element={<AIEnterpriseSolutionsPage />} />
            <Route path="/ai-content-writer" element={<AIContentWriterPage />} />
            <Route path="/ai-code-assistant" element={<AICodeAssistantPage />} />
            <Route path="/ai-crm-assistant" element={<AICRMAssistantPage />} />
            <Route path="/ai-customer-service" element={<AICustomerServicePage />} />
            <Route path="/ai-design-studio" element={<AIDesignStudioPage />} />
            <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />
            <Route path="/ai-education" element={<AIEducationPage />} />
            <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
            <Route path="/ai-energy" element={<AIEnergyPage />} />
            <Route path="/ai-expense-tracker" element={<AIExpenseTrackerPage />} />
            <Route path="/ai-financial-advisor" element={<AIFinancialAdvisorPage />} />
            <Route path="/ai-cloud-infrastructure" element={<AICloudInfrastructurePage />} />
            <Route path="/ai-blockchain-solutions" element={<AIBlockchainSolutionsPage />} />
            <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
            <Route path="/ai-computer-vision" element={<AIComputerVisionPage />} />
            <Route path="/ai-conversational-ai" element={<AIConversationalAIPage />} />
            <Route path="/ai-customer-churn" element={<AICustomerChurnPage />} />
            <Route path="/ai-drug-discovery-pro" element={<AIDrugDiscoveryProPage />} />
            <Route path="/ai-edge-computing" element={<AIEdgeComputingPage />} />
            <Route path="/ai-fashion-design" element={<AIFashionDesignPage />} />
            <Route path="/ai-financial-analyzer" element={<AIFinancialAnalyzerPage />} />
            <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
            <Route path="/ai-accounting-assistant" element={<AIAccountingAssistantPage />} />
            <Route path="/ai-agricultural-intelligence-pro" element={<AIAgriculturalIntelligenceProPage />} />
            <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
            <Route path="/ai-api-management" element={<AIAPIManagementPage />} />
            <Route path="/ai-api-manager" element={<AIAPIManagerPage />} />
            <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage />} />
            <Route path="/ai-automated-testing" element={<AIAutomatedTestingPage />} />
            <Route path="/ai-automation" element={<AIAutomationPage />} />
            <Route path="/ai-autonomous-systems" element={<AIAutonomousSystemsPage />} />
            <Route path="/ai-blockchain-analytics" element={<AIBlockchainAnalyticsPage />} />
            <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />
            <Route path="/ai-climate-prediction-engine" element={<AIClimatePredictionEnginePage />} />
            <Route path="/ai-climate-solutions-pro" element={<AIClimateSolutionsProPage />} />
            <Route path="/ai-code-generation" element={<AICodeGenerationPage />} />
            <Route path="/ai-code-security-auditor" element={<AICodeSecurityAuditorPage />} />
            <Route path="/ai-content-delivery-network" element={<AIContentDeliveryNetworkPage />} />
            <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
            <Route path="/ai-content-generation-pro" element={<AIContentGenerationProPage />} />
            <Route path="/ai-content-moderation" element={<AIContentModerationPage />} />
            <Route path="/ai-content-studio" element={<AIContentStudioPage />} />
            <Route path="/ai-conversation-analytics" element={<AIConversationAnalyticsPage />} />
            <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
            <Route path="/ai-customer-support-chatbot" element={<AICustomerSupportChatbotPage />} />
            <Route path="/ai-cyber-defense-matrix" element={<AICyberDefenseMatrixPage />} />
            <Route path="/ai-cybersecurity-monitor" element={<AICybersecurityMonitorPage />} />
            <Route path="/ai-cybersecurity-suite" element={<AICybersecuritySuitePage />} />
            <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
            <Route path="/ai-document-processor" element={<AIDocumentProcessorPage />} />
            <Route path="/ai-document-scanner" element={<AIDocumentScannerPage />} />
            <Route path="/ai-ecommerce-assistant" element={<AIEcommerceAssistantPage />} />
            <Route path="/ai-ecommerce-optimizer" element={<AIEcommerceOptimizerPage />} />
            <Route path="/ai-email-marketing-automation" element={<AIEmailMarketingAutomationPage />} />
            <Route path="/ai-energy-grid-management-pro" element={<AIEnergyGridManagementProPage />} />
            <Route path="/ai-financial-crime-detection-pro" element={<AIFinancialCrimeDetectionProPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App