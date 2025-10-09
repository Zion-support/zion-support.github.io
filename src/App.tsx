import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import ServicesPage from './services/page';
import BlogPage from './blog/page';
import CaseStudiesPage from './case-studies/page';
import NotFoundPage from './not-found';

// AI Services
import AIServicesPage from './ai-services/page';
import AIMarketingPage from './ai-marketing/page';
import AIAutomationPage from './ai-automation/page';
import AIHealthcarePage from './ai-healthcare/page';
import AIFintechPage from './ai-fintech/page';
import AIContentGenerationPage from './ai-content-generation/page';
import AIDataAnalyticsPage from './ai-data-analytics/page';
import AICybersecurityPage from './ai-cybersecurity/page';
import AIWorkflowAutomationPage from './ai-workflow-automation/page';
import AIMobileAppDevelopmentPage from './ai-mobile-app-development/page';
import AIEcommerceSolutionsPage from './ai-ecommerce-solutions/page';
import AICustomerSupportPage from './ai-customer-support/page';
import AISalesAutomationPage from './ai-sales-automation/page';
import AIDataVisualizationPage from './ai-data-visualization/page';
import AILeadGenerationPage from './ai-lead-generation/page';
import AIDocumentProcessingPage from './ai-document-processing/page';
import AIMLPlatformPage from './ai-ml-platform/page';
import AIComputerVisionPage from './ai-computer-vision/page';
import AINLPPage from './ai-nlp/page';
import AIRoboticsPage from './ai-robotics/page';
import AIResearchDevelopmentPage from './ai-research-development/page';
import AIEdgeComputingPage from './ai-edge-computing/page';

// Micro SAAS Services
import AIProjectManagerPage from './ai-project-manager/page';
import AISocialMediaManagerPage from './ai-social-media-manager/page';
import AIAnalyticsDashboardPage from './ai-analytics-dashboard/page';
import AIEmailMarketingPage from './ai-email-marketing/page';
import AICustomerSupportBotPage from './ai-customer-support-bot/page';
import AICodeGenerationPage from './ai-code-generation/page';
import AIChatbotBuilderPage from './ai-chatbot-builder/page';
import AICRMPage from './ai-crm/page';
import AIAnalyticsPage from './ai-analytics/page';
import AIContentStudioPage from './ai-content-studio/page';
import AIMobileBuilderPage from './ai-mobile-builder/page';
import AISEOOptimizerPage from './ai-seo-optimizer/page';
import AIInvoiceGeneratorPage from './ai-invoice-generator/page';
import AILeadScoringPage from './ai-lead-scoring/page';
import AISalesForecastingPage from './ai-sales-forecasting/page';
import AIEcommerceOptimizerPage from './ai-ecommerce-optimizer/page';
import AIDesignAssistantPage from './ai-design-assistant/page';
import AIDocumentProcessorPage from './ai-document-processor/page';
import AISecurityMonitorPage from './ai-security-monitor/page';
import AIPerformanceTrackerPage from './ai-performance-tracker/page';
import AIVoiceAssistantPage from './ai-voice-assistant/page';
import AIHRAssistantPage from './ai-hr-assistant/page';
import AIInventoryManagerPage from './ai-inventory-manager/page';
import AICustomerInsightsPage from './ai-customer-insights/page';
import AIABTestingPage from './ai-ab-testing/page';
import AIPredictiveAnalyticsPage from './ai-predictive-analytics/page';

// IT Services
import ITServicesPage from './it-services/page';
import ITInfrastructurePage from './it-infrastructure/page';
import CybersecurityPage from './cybersecurity/page';
import CloudMigrationPage from './cloud-migration/page';
import DevOpsCICDPage from './devops-cicd/page';
import DatabaseManagementPage from './database-management/page';
import NetworkSolutionsPage from './network-solutions/page';
import SystemAdministrationPage from './system-administration/page';
import ITConsultingPage from './it-consulting/page';
import ITSupportPage from './it-support/page';
import ITTrainingPage from './it-training/page';
import ITInfrastructureDesignPage from './it-infrastructure-design/page';
import ITPerformanceMonitoringPage from './it-performance-monitoring/page';
import ITDisasterRecoveryPage from './it-disaster-recovery/page';
import ITAutomationPage from './it-automation/page';
import GlobalITSupportPage from './global-it-support/page';

// Specialized Solutions
import QuantumComputingPage from './quantum-computing/page';
import AutonomousSystemsPage from './autonomous-systems/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import IoTEdgeComputingPage from './iot-edge-computing/page';
import BusinessIntelligencePage from './business-intelligence/page';
import RoboticsPage from './robotics/page';
import ARVRSolutionsPage from './ar-vr-solutions/page';
import SmartCitiesPage from './smart-cities/page';
import DigitalTransformationPage from './digital-transformation/page';
import InnovationLabsPage from './innovation-labs/page';
import SustainabilityTechPage from './sustainability-tech/page';
import FutureTechnologiesPage from './future-technologies/page';

// Company Pages
import TeamPage from './team/page';
import CareersPage from './careers/page';
import NewsPage from './news/page';
import PricingPage from './pricing/page';
import DemoPage from './demo/page';
import ConsultationPage from './consultation/page';
import PrivacyPage from './privacy/page';
import TermsPage from './terms/page';
import CookiesPage from './cookies/page';
import SupportPage from './support/page';
import StatusPage from './status/page';
import DocsPage from './docs/page';
import APIDocsPage from './api-docs/page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        
        {/* AI Services */}
        <Route path="/ai-services" element={<AIServicesPage />} />
        <Route path="/ai-marketing" element={<AIMarketingPage />} />
        <Route path="/ai-automation" element={<AIAutomationPage />} />
        <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
        <Route path="/ai-fintech" element={<AIFintechPage />} />
        <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
        <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
        <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
        <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
        <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
        <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
        <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
        <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
        <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
        <Route path="/ai-lead-generation" element={<AILeadGenerationPage />} />
        <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
        <Route path="/ai-ml-platform" element={<AIMLPlatformPage />} />
        <Route path="/ai-computer-vision" element={<AIComputerVisionPage />} />
        <Route path="/ai-nlp" element={<AINLPPage />} />
        <Route path="/ai-robotics" element={<AIRoboticsPage />} />
        <Route path="/ai-research-development" element={<AIResearchDevelopmentPage />} />
        <Route path="/ai-edge-computing" element={<AIEdgeComputingPage />} />
        
        {/* Micro SAAS Services */}
        <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
        <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
        <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
        <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
        <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
        <Route path="/ai-code-generation" element={<AICodeGenerationPage />} />
        <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
        <Route path="/ai-crm" element={<AICRMPage />} />
        <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
        <Route path="/ai-content-studio" element={<AIContentStudioPage />} />
        <Route path="/ai-mobile-builder" element={<AIMobileBuilderPage />} />
        <Route path="/ai-seo-optimizer" element={<AISEOOptimizerPage />} />
        <Route path="/ai-invoice-generator" element={<AIInvoiceGeneratorPage />} />
        <Route path="/ai-lead-scoring" element={<AILeadScoringPage />} />
        <Route path="/ai-sales-forecasting" element={<AISalesForecastingPage />} />
        <Route path="/ai-ecommerce-optimizer" element={<AIEcommerceOptimizerPage />} />
        <Route path="/ai-design-assistant" element={<AIDesignAssistantPage />} />
        <Route path="/ai-document-processor" element={<AIDocumentProcessorPage />} />
        <Route path="/ai-security-monitor" element={<AISecurityMonitorPage />} />
        <Route path="/ai-performance-tracker" element={<AIPerformanceTrackerPage />} />
        <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
        <Route path="/ai-hr-assistant" element={<AIHRAssistantPage />} />
        <Route path="/ai-inventory-manager" element={<AIInventoryManagerPage />} />
        <Route path="/ai-customer-insights" element={<AICustomerInsightsPage />} />
        <Route path="/ai-ab-testing" element={<AIABTestingPage />} />
        <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
        
        {/* IT Services */}
        <Route path="/it-services" element={<ITServicesPage />} />
        <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
        <Route path="/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/cloud-migration" element={<CloudMigrationPage />} />
        <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
        <Route path="/database-management" element={<DatabaseManagementPage />} />
        <Route path="/network-solutions" element={<NetworkSolutionsPage />} />
        <Route path="/system-administration" element={<SystemAdministrationPage />} />
        <Route path="/it-consulting" element={<ITConsultingPage />} />
        <Route path="/it-support" element={<ITSupportPage />} />
        <Route path="/it-training" element={<ITTrainingPage />} />
        <Route path="/it-infrastructure-design" element={<ITInfrastructureDesignPage />} />
        <Route path="/it-performance-monitoring" element={<ITPerformanceMonitoringPage />} />
        <Route path="/it-disaster-recovery" element={<ITDisasterRecoveryPage />} />
        <Route path="/it-automation" element={<ITAutomationPage />} />
        <Route path="/global-it-support" element={<GlobalITSupportPage />} />
        
        {/* Specialized Solutions */}
        <Route path="/quantum-computing" element={<QuantumComputingPage />} />
        <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
        <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
        <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
        <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
        <Route path="/robotics" element={<RoboticsPage />} />
        <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />
        <Route path="/smart-cities" element={<SmartCitiesPage />} />
        <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
        <Route path="/innovation-labs" element={<InnovationLabsPage />} />
        <Route path="/sustainability-tech" element={<SustainabilityTechPage />} />
        <Route path="/future-technologies" element={<FutureTechnologiesPage />} />
        
        {/* Company Pages */}
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/api-docs" element={<APIDocsPage />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;