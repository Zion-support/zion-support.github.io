import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// Page Components
import HomePage from './app/page';
import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';
import ServicesPage from './app/pages/ServicesPage';
import BlogPage from './app/pages/BlogPage';
import TutorialsPage from './app/pages/TutorialsPage';
import DemoPage from './app/pages/DemoPage';
import SupportPage from './app/pages/SupportPage';
import PrivacyPage from './app/pages/PrivacyPage';
import TermsPage from './app/pages/TermsPage';
import PricingPage from './app/pages/PricingPage';
import CareersPage from './app/pages/CareersPage';
import CaseStudiesPage from './app/pages/CaseStudiesPage';
import CloudInfrastructurePage from './app/pages/CloudInfrastructurePage';
import DigitalTransformationPage from './app/pages/DigitalTransformationPage';
import AIServicesPage from './app/pages/AIServicesPage';
import ITServicesPage from './app/pages/ITServicesPage';
import MicroSaaSPage from './app/pages/MicroSaaSPage';

// AI Service Pages - Only include verified existing pages
import AIAnalyticsPage from './app/ai-analytics/page';
import AIContentGenerationPage from './app/ai-content-generation/page';
import AICustomerServicePage from './app/ai-customer-service/page';
import AIEducationPage from './app/ai-education/page';
import AIHealthcarePage from './app/ai-healthcare/page';
import AIMarketingPage from './app/ai-marketing/page';
import AIPredictiveAnalyticsPage from './app/ai-predictive-analytics/page';
import AIVoiceAssistantPage from './app/ai-voice-assistant/page';
import AIWorkflowAutomationPage from './app/ai-workflow-automation/page';

// Additional AI Pages - Only include verified existing pages
import AI3DGenerationPage from './app/ai-3d-generation/page';
import AIAccountingAssistantPage from './app/ai-accounting-assistant/page';
import AIAgriculturalIntelligenceProPage from './app/ai-agricultural-intelligence-pro/page';
import AIAnalyticsDashboardPage from './app/ai-analytics-dashboard/page';
import AIAPIManagementPage from './app/ai-api-management/page';
import AIAPIManagerPage from './app/ai-api-manager/page';
import AIAutomatedReportingPage from './app/ai-automated-reporting/page';
import AIAutomatedTestingPage from './app/ai-automated-testing/page';
import AIAutomationPlatformPage from './app/ai-automation-platform/page';
import AIAutonomousSystemsPage from './app/ai-autonomous-systems/page';
import AIBlockchainAnalyticsPage from './app/ai-blockchain-analytics/page';
import AIBlockchainSolutionsPage from './app/ai-blockchain-solutions/page';
import AIBusinessIntelligenceProPage from './app/ai-business-intelligence-pro/page';
import AIChatbotBuilderPage from './app/ai-chatbot-builder/page';
import AIChatbotEnterprisePage from './app/ai-chatbot-enterprise/page';
import AIClimatePredictionEnginePage from './app/ai-climate-prediction-engine/page';
import AIClimateSolutionsProPage from './app/ai-climate-solutions-pro/page';
import AICodeAssistantPage from './app/ai-code-assistant/page';
import AICodeAssistantProPage from './app/ai-code-assistant-pro/page';
import AIContentGenerationProPage from './app/ai-content-generation-pro/page';
import AICybersecurityPlatformPage from './app/ai-cybersecurity-platform/page';
import AIDatabaseSolutionsPage from './app/ai-database-solutions/page';
import AIEcommercePlatformPage from './app/ai-ecommerce-platform/page';
import AIEducationSolutionsProPage from './app/ai-education-solutions-pro/page';
import AIEmailMarketingPage from './app/ai-email-marketing/page';
import AIFinancialPlatformPage from './app/ai-financial-platform/page';
import AIHealthcarePlatformPage from './app/ai-healthcare-platform/page';
import AIHealthcareSolutionsProPage from './app/ai-healthcare-solutions-pro/page';
import AIIoTManagementProPage from './app/ai-iot-management-pro/page';
import AIMarketingAutomationProPage from './app/ai-marketing-automation-pro/page';
import AINeuralMemoryAssistantPage from './app/ai-neural-memory-assistant/page';
import AIProjectManagementProPage from './app/ai-project-management-pro/page';
import AIProjectManagerPage from './app/ai-project-manager/page';
import AIProjectManagerProPage from './app/ai-project-manager-pro/page';
import AISocialMediaManagerPage from './app/ai-social-media-manager/page';
import AISocialMediaManagerProPage from './app/ai-social-media-manager-pro/page';
import AIVoiceAssistantEnterprisePage from './app/ai-voice-assistant-enterprise/page';

// Other Service Pages
import CloudMigrationServicesPage from './app/cloud-migration-services/page';
import CybersecurityConsultingPage from './app/cybersecurity-consulting/page';
import DatabaseManagementPage from './app/database-management/page';
import DatabaseServicesPage from './app/database-services/page';
import DatabasePage from './app/database/page';
import IntelligentDatabaseMigrationPage from './app/intelligent-database-migration/page';
import ITServicesCloudMigrationPage from './app/it-services/cloud-migration/page';

// Additional Pages
import NewsPage from './app/news/page';
import DocsPage from './app/docs/page';
import DemoPageComponent from './app/demo/page';
import CookiesPage from './app/cookies/page';
import GDPRPage from './app/gdpr/page';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 text-white">
            <Navigation />
            <Sidebar />
            <main className="flex-1">
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/careers" element={<CareersPage />} />
                
                {/* Additional Service Pages */}
                <Route path="/micro-saas" element={<MicroSaaSPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                
                {/* AI Service Pages */}
                <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                <Route path="/ai-customer-service" element={<AICustomerServicePage />} />
                <Route path="/ai-education" element={<AIEducationPage />} />
                <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                <Route path="/ai-marketing" element={<AIMarketingPage />} />
                <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                
                {/* Additional AI Pages */}
                <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
                <Route path="/ai-accounting-assistant" element={<AIAccountingAssistantPage />} />
                <Route path="/ai-agricultural-intelligence-pro" element={<AIAgriculturalIntelligenceProPage />} />
                <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                <Route path="/ai-api-management" element={<AIAPIManagementPage />} />
                <Route path="/ai-api-manager" element={<AIAPIManagerPage />} />
                <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage />} />
                <Route path="/ai-automated-testing" element={<AIAutomatedTestingPage />} />
                <Route path="/ai-automation-platform" element={<AIAutomationPlatformPage />} />
                <Route path="/ai-autonomous-systems" element={<AIAutonomousSystemsPage />} />
                <Route path="/ai-blockchain-analytics" element={<AIBlockchainAnalyticsPage />} />
                <Route path="/ai-blockchain-solutions" element={<AIBlockchainSolutionsPage />} />
                <Route path="/ai-business-intelligence-pro" element={<AIBusinessIntelligenceProPage />} />
                <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />
                <Route path="/ai-climate-prediction-engine" element={<AIClimatePredictionEnginePage />} />
                <Route path="/ai-climate-solutions-pro" element={<AIClimateSolutionsProPage />} />
                <Route path="/ai-code-assistant" element={<AICodeAssistantPage />} />
                <Route path="/ai-code-assistant-pro" element={<AICodeAssistantProPage />} />
                <Route path="/ai-content-generation-pro" element={<AIContentGenerationProPage />} />
                <Route path="/ai-cybersecurity-platform" element={<AICybersecurityPlatformPage />} />
                <Route path="/ai-database-solutions" element={<AIDatabaseSolutionsPage />} />
                <Route path="/ai-ecommerce-platform" element={<AIEcommercePlatformPage />} />
                <Route path="/ai-education-solutions-pro" element={<AIEducationSolutionsProPage />} />
                <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
                <Route path="/ai-financial-platform" element={<AIFinancialPlatformPage />} />
                <Route path="/ai-healthcare-platform" element={<AIHealthcarePlatformPage />} />
                <Route path="/ai-healthcare-solutions-pro" element={<AIHealthcareSolutionsProPage />} />
                <Route path="/ai-iot-management-pro" element={<AIIoTManagementProPage />} />
                <Route path="/ai-marketing-automation-pro" element={<AIMarketingAutomationProPage />} />
                <Route path="/ai-neural-memory-assistant" element={<AINeuralMemoryAssistantPage />} />
                <Route path="/ai-project-management-pro" element={<AIProjectManagementProPage />} />
                <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
                <Route path="/ai-project-manager-pro" element={<AIProjectManagerProPage />} />
                <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
                <Route path="/ai-social-media-manager-pro" element={<AISocialMediaManagerProPage />} />
                <Route path="/ai-voice-assistant-enterprise" element={<AIVoiceAssistantEnterprisePage />} />
                
                {/* Other Service Pages */}
                <Route path="/cloud-migration-services" element={<CloudMigrationServicesPage />} />
                <Route path="/cybersecurity-consulting" element={<CybersecurityConsultingPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/database-services" element={<DatabaseServicesPage />} />
                <Route path="/database" element={<DatabasePage />} />
                <Route path="/intelligent-database-migration" element={<IntelligentDatabaseMigrationPage />} />
                <Route path="/it-services/cloud-migration" element={<ITServicesCloudMigrationPage />} />
                
                {/* Additional Pages */}
                <Route path="/news" element={<NewsPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/demo" element={<DemoPageComponent />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/gdpr" element={<GDPRPage />} />
              </Routes>
            </main>
            <Footer />
            <PerformanceMonitor />
            <AccessibilityEnhancer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;