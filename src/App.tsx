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
import AiServicesPage from './ai-services/page';
import AiMarketingPage from './ai-marketing/page';
import AiAutomationPage from './ai-automation/page';
import AiWorkflowAutomationPage from './ai-workflow-automation/page';
import AiHealthcarePage from './ai-healthcare/page';
import AiFintechPage from './ai-fintech/page';
import AiContentGenerationPage from './ai-content-generation/page';
import AiDataAnalyticsPage from './ai-data-analytics/page';
import AiCybersecurityPage from './ai-cybersecurity/page';
import AiMobileAppDevelopmentPage from './ai-mobile-app-development/page';
import AiEcommerceSolutionsPage from './ai-ecommerce-solutions/page';
import AiCustomerSupportPage from './ai-customer-support/page';
import AiSalesAutomationPage from './ai-sales-automation/page';
import AiDataVisualizationPage from './ai-data-visualization/page';
import AiLeadGenerationPage from './ai-lead-generation/page';
import AiDocumentProcessingPage from './ai-document-processing/page';
import AiCrmPage from './ai-crm/page';
import AiChatbotBuilderPage from './ai-chatbot-builder/page';
import AiAnalyticsDashboardPage from './ai-analytics-dashboard/page';
import AiEmailAssistantPage from './ai-email-assistant/page';
import AiSchedulerPage from './ai-scheduler/page';
import AiWritingAssistantPage from './ai-writing-assistant/page';
import AiProjectManagerPage from './ai-project-manager/page';
import AiSocialMediaManagerPage from './ai-social-media-manager/page';

// IT Services
import ItServicesPage from './it-services/page';
import ItInfrastructurePage from './it-infrastructure/page';
import CybersecurityPage from './cybersecurity/page';
import CloudServicesPage from './cloud-services/page';
import DevopsPage from './devops/page';
import DatabasePage from './database/page';
import NetworkingPage from './networking/page';

// Emerging Technologies
import QuantumComputingPage from './quantum-computing/page';
import RoboticsPage from './robotics/page';
import IotEdgeComputingPage from './iot-edge-computing/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import BusinessIntelligencePage from './business-intelligence/page';
import AutonomousSystemsPage from './autonomous-systems/page';

// Company Pages
import TeamPage from './team/page';
import CareersPage from './careers/page';
import NewsPage from './news/page';
import SupportPage from './support/page';

// Legal Pages
import PrivacyPage from './privacy/page';
import TermsPage from './terms/page';
import CookiesPage from './cookies/page';
import GdprPage from './gdpr/page';
import SecurityPage from './security/page';
import CompliancePage from './compliance/page';

// Additional Pages
import PricingPage from './pricing/page';
import EnterprisePage from './enterprise/page';
import MicroSaasPage from './micro-saas/page';
import ApiPage from './api/page';
import ApiDocsPage from './api-docs/page';
import DocsPage from './docs/page';
import DemoPage from './demo/page';
import ConsultationPage from './consultation/page';
import DeveloperToolsPage from './developer-tools/page';
import MarketingToolsPage from './marketing-tools/page';
import BusinessAppsPage from './business-apps/page';
import ProductivityPage from './productivity/page';
import AnalyticsToolsPage from './analytics-tools/page';
import SmartAnalyticsPage from './smart-analytics/page';
import TaskManagerProPage from './task-manager-pro/page';
import ExpenseTrackerPage from './expense-tracker/page';
import SystemStatusPage from './system-status/page';
import StatusPage from './status/page';
import OfflinePage from './offline/page';
import SitemapPage from './sitemap/page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />

        {/* AI Services */}
        <Route path="/ai-services" element={<AiServicesPage />} />
        <Route path="/ai-marketing" element={<AiMarketingPage />} />
        <Route path="/ai-automation" element={<AiAutomationPage />} />
        <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
        <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
        <Route path="/ai-fintech" element={<AiFintechPage />} />
        <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
        <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
        <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
        <Route path="/ai-mobile-app-development" element={<AiMobileAppDevelopmentPage />} />
        <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
        <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
        <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
        <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />
        <Route path="/ai-lead-generation" element={<AiLeadGenerationPage />} />
        <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
        <Route path="/ai-crm" element={<AiCrmPage />} />
        <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
        <Route path="/ai-analytics-dashboard" element={<AiAnalyticsDashboardPage />} />
        <Route path="/ai-email-assistant" element={<AiEmailAssistantPage />} />
        <Route path="/ai-scheduler" element={<AiSchedulerPage />} />
        <Route path="/ai-writing-assistant" element={<AiWritingAssistantPage />} />
        <Route path="/ai-project-manager" element={<AiProjectManagerPage />} />
        <Route path="/ai-social-media-manager" element={<AiSocialMediaManagerPage />} />

        {/* IT Services */}
        <Route path="/it-services" element={<ItServicesPage />} />
        <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
        <Route path="/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/cloud-services" element={<CloudServicesPage />} />
        <Route path="/devops" element={<DevopsPage />} />
        <Route path="/database" element={<DatabasePage />} />
        <Route path="/networking" element={<NetworkingPage />} />

        {/* Emerging Technologies */}
        <Route path="/quantum-computing" element={<QuantumComputingPage />} />
        <Route path="/robotics" element={<RoboticsPage />} />
        <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
        <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
        <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
        <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />

        {/* Company Pages */}
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/support" element={<SupportPage />} />

        {/* Legal Pages */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/gdpr" element={<GdprPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/compliance" element={<CompliancePage />} />

        {/* Additional Pages */}
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
        <Route path="/micro-saas" element={<MicroSaasPage />} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="/api-docs" element={<ApiDocsPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/developer-tools" element={<DeveloperToolsPage />} />
        <Route path="/marketing-tools" element={<MarketingToolsPage />} />
        <Route path="/business-apps" element={<BusinessAppsPage />} />
        <Route path="/productivity" element={<ProductivityPage />} />
        <Route path="/analytics-tools" element={<AnalyticsToolsPage />} />
        <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
        <Route path="/task-manager-pro" element={<TaskManagerProPage />} />
        <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
        <Route path="/system-status" element={<SystemStatusPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/offline" element={<OfflinePage />} />
        <Route path="/sitemap" element={<SitemapPage />} />

        {/* Blog Posts */}
        <Route path="/blog/ai-cost-optimization-breakthrough-2026" element={<BlogPage />} />
        <Route path="/blog/ai-2025-march-autonomous-enterprise-operations-revolution" element={<BlogPage />} />
        <Route path="/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough" element={<BlogPage />} />
        <Route path="/blog/ai-2026-enterprise-breakthrough" element={<BlogPage />} />
        <Route path="/blog/ai-2025-2026-mega-trends-breakthrough" element={<BlogPage />} />
        <Route path="/blog/ai-2025-sept-30-operational-trust-scorecards-v3" element={<BlogPage />} />
        <Route path="/blog/ai-2025-january-cutting-edge-trends-breakthrough" element={<BlogPage />} />
        <Route path="/blog/ai-enterprise-transformation-ultimate-guide-2025" element={<BlogPage />} />
        <Route path="/blog/ai-2025-january-advanced-ai-revolution" element={<BlogPage />} />
        <Route path="/blog/ai-2026-february-ultimate-consciousness-breakthrough" element={<BlogPage />} />
        <Route path="/blog/ai-2026-consensus-intelligence-breakthrough" element={<BlogPage />} />
        <Route path="/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough" element={<BlogPage />} />
        <Route path="/blog/ai-2026-april-ultimate-breakthrough-revolution" element={<BlogPage />} />
        <Route path="/blog/ai-powered-autonomous-business-processes-2026" element={<BlogPage />} />
        <Route path="/blog/ai-2026-advanced-neural-optimization-revolution" element={<BlogPage />} />
        <Route path="/blog/ai-2026-autonomous-business-intelligence-breakthrough" element={<BlogPage />} />
        <Route path="/blog/agent-release-runbooks-v2-2026" element={<BlogPage />} />
        <Route path="/blog/ai-2026-adaptive-neural-architectures-breakthrough" element={<BlogPage />} />
        <Route path="/blog/ai-innovation-labs-product-development-2025" element={<BlogPage />} />
        <Route path="/blog/ai-2026-hyperconscious-computing-revolution" element={<BlogPage />} />
        <Route path="/blog/ai-enterprise-transformation-2025" element={<BlogPage />} />
        <Route path="/blog/ai-trends-2026-future-enterprise-transformation" element={<BlogPage />} />
        <Route path="/blog/ai-2026-enterprise-automation-revolutionary-breakthrough" element={<BlogPage />} />
        <Route path="/blog/ai-2026-april-revolutionary-breakthrough" element={<BlogPage />} />
        <Route path="/blog/ai-autonomous-business-systems-2026" element={<BlogPage />} />
        <Route path="/blog/ai-2026-autonomous-agent-factories" element={<BlogPage />} />
        <Route path="/blog/ai-2026-february-mega-breakthrough-revolution" element={<BlogPage />} />
        <Route path="/blog/ai-2026-autonomous-enterprise-architecture" element={<BlogPage />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;