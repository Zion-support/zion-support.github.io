import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main Pages
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
import AIHealthcarePage from './ai-healthcare/page';
import AIFintechPage from './ai-fintech/page';
import AIEcommercePage from './ai-ecommerce-solutions/page';
import AIMobileAppPage from './ai-mobile-app-development/page';
import AICybersecurityPage from './ai-cybersecurity/page';
import AICRMPage from './ai-crm/page';
import AICustomerSupportPage from './ai-customer-support/page';
import AIDataAnalyticsPage from './ai-data-analytics/page';
import AIDataVisualizationPage from './ai-data-visualization/page';
import AIDocumentProcessingPage from './ai-document-processing/page';
import AIEmailAssistantPage from './ai-email-assistant/page';
import AILeadGenerationPage from './ai-lead-generation/page';
import AISalesAutomationPage from './ai-sales-automation/page';
import AISchedulerPage from './ai-scheduler/page';
import AIWorkflowAutomationPage from './ai-workflow-automation/page';
import AIWritingAssistantPage from './ai-writing-assistant/page';
import AIAnalyticsDashboardPage from './ai-analytics-dashboard/page';
import AIChatbotBuilderPage from './ai-chatbot-builder/page';
import AIContentGenerationPage from './ai-content-generation/page';

// IT Services
import ITServicesPage from './it-services/page';
import CloudServicesPage from './cloud-services/page';
import DevOpsPage from './devops/page';
import CybersecurityPage from './cybersecurity/page';
import DatabasePage from './database/page';
import ITInfrastructurePage from './it-infrastructure/page';
import NetworkingPage from './networking/page';
import SupportPage from './support/page';

// Emerging Technologies
import QuantumComputingPage from './quantum-computing/page';
import RoboticsPage from './robotics/page';
import IoTEdgeComputingPage from './iot-edge-computing/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import BusinessIntelligencePage from './business-intelligence/page';
import AutonomousSystemsPage from './autonomous-systems/page';

// Company Pages
import TeamPage from './team/page';
import CareersPage from './careers/page';
import NewsPage from './news/page';
import PricingPage from './pricing/page';
import DemoPage from './demo/page';
import ConsultationPage from './consultation/page';
import EnterprisePage from './enterprise/page';

// Micro SAAS
import MicroSaasPage from './micro-saas/page';

// Additional Services
import AnalyticsToolsPage from './analytics-tools/page';
import BusinessAppsPage from './business-apps/page';
import DeveloperToolsPage from './developer-tools/page';
import MarketingToolsPage from './marketing-tools/page';
import ProductivityPage from './productivity/page';
import SmartAnalyticsPage from './smart-analytics/page';

// Legal & Compliance
import PrivacyPage from './privacy/page';
import TermsPage from './terms/page';
import CookiesPage from './cookies/page';
import GDPRPage from './gdpr/page';
import CompliancePage from './compliance/page';
import SecurityPage from './security/page';

// Documentation & Support
import DocsPage from './docs/page';
import APIDocsPage from './api-docs/page';
import StatusPage from './status/page';
import SystemStatusPage from './system-status/page';

// Additional Pages
import SitemapPage from './sitemap/page';
import OfflinePage from './offline/page';

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
        <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
        <Route path="/ai-fintech" element={<AIFintechPage />} />
        <Route path="/ai-ecommerce-solutions" element={<AIEcommercePage />} />
        <Route path="/ai-mobile-app-development" element={<AIMobileAppPage />} />
        <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
        <Route path="/ai-crm" element={<AICRMPage />} />
        <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
        <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
        <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
        <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
        <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
        <Route path="/ai-lead-generation" element={<AILeadGenerationPage />} />
        <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
        <Route path="/ai-scheduler" element={<AISchedulerPage />} />
        <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
        <Route path="/ai-writing-assistant" element={<AIWritingAssistantPage />} />
        <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
        <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
        <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
        
        {/* IT Services */}
        <Route path="/it-services" element={<ITServicesPage />} />
        <Route path="/cloud-services" element={<CloudServicesPage />} />
        <Route path="/devops" element={<DevOpsPage />} />
        <Route path="/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/database" element={<DatabasePage />} />
        <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
        <Route path="/networking" element={<NetworkingPage />} />
        <Route path="/support" element={<SupportPage />} />
        
        {/* Emerging Technologies */}
        <Route path="/quantum-computing" element={<QuantumComputingPage />} />
        <Route path="/robotics" element={<RoboticsPage />} />
        <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
        <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
        <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
        <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
        
        {/* Company Pages */}
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
        
        {/* Micro SAAS */}
        <Route path="/micro-saas" element={<MicroSaasPage />} />
        
        {/* Additional Services */}
        <Route path="/analytics-tools" element={<AnalyticsToolsPage />} />
        <Route path="/business-apps" element={<BusinessAppsPage />} />
        <Route path="/developer-tools" element={<DeveloperToolsPage />} />
        <Route path="/marketing-tools" element={<MarketingToolsPage />} />
        <Route path="/productivity" element={<ProductivityPage />} />
        <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
        
        {/* Legal & Compliance */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/gdpr" element={<GDPRPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/security" element={<SecurityPage />} />
        
        {/* Documentation & Support */}
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/api-docs" element={<APIDocsPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/system-status" element={<SystemStatusPage />} />
        
        {/* Additional Pages */}
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="/offline" element={<OfflinePage />} />
        
        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;