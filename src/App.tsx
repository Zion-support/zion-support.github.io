'use client';
import React, { useEffect, useState, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components for better performance;
// Import enhancement utilities;
import PerformanceEnhancer from './utils/performanceEnhancer';
import SEOEnhancer from './utils/seoEnhancer';
import AccessibilityEnhancer from './utils/accessibilityEnhancer';
import SecurityEnhancer from './utils/securityEnhancer';
import UserExperienceEnhancer from './utils/userExperienceEnhancer';

// Loading component;
const LoadingSpinner: React.FC = () => (
  <div>
    <div>
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>);

// AI Services Pages;
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

// IT Services Pages;
import ITServicesPage from './it-services/page';
import ITInfrastructurePage from './it-infrastructure/page';
import CybersecurityPage from './cybersecurity/page';
import CloudMigrationPage from './cloud-migration/page';
import DevOpsPage from './devops/page';
import DatabasePage from './database/page';
import NetworkingPage from './networking/page';
// Micro SAAS Pages;
import AICRMPage from './ai-crm/page';
import AIAnalyticsDashboardPage from './ai-analytics-dashboard/page';
import AIChatbotBuilderPage from './ai-chatbot-builder/page';
import AIEmailMarketingPage from './ai-email-marketing/page';
import AIWritingAssistantPage from './ai-writing-assistant/page';

// Specialized Solutions Pages;
import QuantumComputingPage from './quantum-computing/page';
import AutonomousSystemsPage from './autonomous-systems/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import IoTEdgeComputingPage from './iot-edge-computing/page';
import BusinessIntelligencePage from './business-intelligence/page';
import RoboticsPage from './robotics/page';

// Company Pages;
import TeamPage from './team/page';
import CareersPage from './careers/page';
import NewsPage from './news/page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import ServicesPage from './services/page';
import BlogPage from './blog/page';
import CaseStudiesPage from './case-studies/page';

// Support Pages;
// Additional Pages;
import PricingPage from './pricing/page';
import DemoPage from './demo/page';
import ConsultationPage from './consultation/page';

// AI Services;
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

// Additional AI Services;
import AICustomerSupportBotPage from './ai-customer-support-bot/page';
import AICodeGenerationPage from './ai-code-generation/page';
import AISocialMediaManagerPage from './ai-social-media-manager/page';
import AIChatbotBuilderPage from './ai-chatbot-builder/page';
import AIWritingAssistantPage from './ai-writing-assistant/page';
import AICRMPage from './ai-crm/page';
import AIMLPlatformPage from './ai-ml-platform/page';

// Specialized Solutions;
import QuantumComputingPage from './quantum-computing/page';
import AutonomousSystemsPage from './autonomous-systems/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import IoTEdgeComputingPage from './iot-edge-computing/page';
import BusinessIntelligencePage from './business-intelligence/page';
import RoboticsPage from './robotics/page';

// Company Pages;
import TeamPage from './team/page';
import CareersPage from './careers/page';
import NewsPage from './news/page';
import PricingPage from './pricing/page';
import DemoPage from './demo/page';
import ConsultationPage from './consultation/page';

// Support Pages;
// AI Services Pages;
import AIProjectManagerPage from './ai-project-manager/page';
import AICustomerSupportBotPage from './ai-customer-support-bot/page';
import AIAutomationPage from './ai-automation/page';
import AIMLPlatformPage from './ai-ml-platform/page';

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false)
  const [, setEnhancers] = useState<{
    performance: unknown;
    seo: unknown;
    accessibility: unknown;
    security: unknown;
    ux: unknown;
  } | null>(null);

  useEffect(() => {
    const initializeEnhancers = async () => {
      try {
        // Initialize SEO enhancer
        // Initialize accessibility enhancer
        // Initialize security enhancer
        // Initialize UX enhancer
        setEnhancers({
          performance: performanceEnhancer,
          seo: seoEnhancer,
          accessibility: accessibilityEnhancer,
          security: securityEnhancer,
          ux: uxEnhancer
        });

        // Optimize for Core Web Vitals
        seoEnhancer.optimizeForCoreWebVitals();

        // Generate reports (for development)
        if (process.env.NODE_ENV === 'development') {
          // Reports generated silently in development
        }

        setIsInitialized(true);
      } catch (error) {
        // Silently handle enhancer initialization errors
        console.warn('Enhancer initialization failed:', error);
        setIsInitialized(true); // Continue even if enhancers fail
      }
    }
    initializeEnhancers();
  }, [])
  if (!isInitialized) {
    return <LoadingSpinner />
  }

  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        
        {/* Company Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Main Services */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        
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
        
        {/* Micro SAAS Solutions */}
        <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
        <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
        <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
        <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
        <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
        <Route path="/ai-code-generation" element={<AICodeGenerationPage />} />
        <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
        <Route path="/ai-writing-assistant" element={<AIWritingAssistantPage />} />
        <Route path="/ai-crm" element={<AICRMPage />} />
        
        {/* IT Services */}
        <Route path="/it-services" element={<ITServicesPage />} />
        <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
        <Route path="/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/cloud-migration" element={<CloudMigrationPage />} />
        <Route path="/devops-cicd" element={<DevOpsPage />} />
        <Route path="/database-management" element={<DatabasePage />} />
        <Route path="/network-solutions" element={<NetworkingPage />} />
        
        {/* Specialized Solutions */}
        <Route path="/quantum-computing" element={<QuantumComputingPage />} />
        <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
        <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
        <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
        <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
        <Route path="/robotics" element={<RoboticsPage />} />
        
        {/* Content Pages */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        
        {/* AI Services Routes */}
        <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
        <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
        <Route path="/ai-automation" element={<AIAutomationPage />} />
        <Route path="/ai-ml-platform" element={<AIMLPlatformPage />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>);
}
// 404 Page Component
const NotFoundPage: React.FC = () => (
  <div>
    <div>
      <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="cyber-button inline-flex items-center px-6 py-3 text-lg font-semibold"
      >
        Go Home
      </a>
    </div>
  </div>);

export default App