import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../page';
import ServicesPage from '../services/page';
import MicroSAASPage from '../micro-saas/page';
import AIServicesPage from '../ai-services/page';
import ITServicesPage from '../it-services/page';
import AboutPage from '../about/page';
import ContactPage from '../contact/page';
import BlogPage from '../blog/page';
import NotFoundPage from '../not-found';

// Import all other pages
import AIAutomationPage from '../ai-automation/page';
import AICloudInfrastructurePage from '../ai-cloud-infrastructure/page';
import AIContentGenerationPage from '../ai-content-generation/page';
import AICustomerSupportPage from '../ai-customer-support/page';
import AICybersecurityPage from '../ai-cybersecurity/page';
import AIDataAnalyticsPage from '../ai-data-analytics/page';
import AIDataVisualizationPage from '../ai-data-visualization/page';
import AIDocumentProcessingPage from '../ai-document-processing/page';
import AIEcommerceSolutionsPage from '../ai-ecommerce-solutions/page';
import AIFintechPage from '../ai-fintech/page';
import AIHealthcarePage from '../ai-healthcare/page';
import AILeadGenerationPage from '../ai-lead-generation/page';
import AIMarketingPage from '../ai-marketing/page';
import AIMobileAppDevelopmentPage from '../ai-mobile-app-development/page';
import AISalesAutomationPage from '../ai-sales-automation/page';
import AIWorkflowAutomationPage from '../ai-workflow-automation/page';
import AnalyticsToolsPage from '../analytics-tools/page';
import APIPage from '../api/page';
import APIDocsPage from '../api-docs/page';
import AutonomousSystemsPage from '../autonomous-systems/page';
import BlockchainPage from '../blockchain/page';
import BlockchainWeb3Page from '../blockchain-web3/page';
import BusinessAppsPage from '../business-apps/page';
import BusinessIntelligencePage from '../business-intelligence/page';
import CareersPage from '../careers/page';
import CaseStudiesPage from '../case-studies/page';
import CloudServicesPage from '../cloud-services/page';
import CompliancePage from '../compliance/page';
import CookiesPage from '../cookies/page';
import CybersecurityPage from '../cybersecurity/page';
import DatabasePage from '../database/page';
import DeveloperToolsPage from '../developer-tools/page';
import DevOpsPage from '../devops/page';
import DocsPage from '../docs/page';
import EnterprisePage from '../enterprise/page';
import GDPRPage from '../gdpr/page';
import IoTEdgePage from '../iot-edge/page';
import IoTEdgeComputingPage from '../iot-edge-computing/page';
import ITInfrastructurePage from '../it-infrastructure/page';
import MarketingToolsPage from '../marketing-tools/page';
import NetworkingPage from '../networking/page';
import NewsPage from '../news/page';
import OfflinePage from '../offline/page';
import PrivacyPage from '../privacy/page';
import ProductivityPage from '../productivity/page';
import QuantumComputingPage from '../quantum-computing/page';
import RoboticsPage from '../robotics/page';
import SecurityPage from '../security/page';
import ServicesAdvertisingPage from '../services-advertising/page';
import SLAPage from '../sla/page';
import StatusPage from '../status/page';
import SupportPage from '../support/page';
import SystemStatusPage from '../system-status/page';
import TeamPage from '../team/page';
import TermsPage from '../terms/page';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/micro-saas" element={<MicroSAASPage />} />
        <Route path="/ai-services" element={<AIServicesPage />} />
        <Route path="/it-services" element={<ITServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        
        {/* AI Services */}
        <Route path="/ai-automation" element={<AIAutomationPage />} />
        <Route path="/ai-cloud-infrastructure" element={<AICloudInfrastructurePage />} />
        <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
        <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
        <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
        <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
        <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
        <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
        <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
        <Route path="/ai-fintech" element={<AIFintechPage />} />
        <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
        <Route path="/ai-lead-generation" element={<AILeadGenerationPage />} />
        <Route path="/ai-marketing" element={<AIMarketingPage />} />
        <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
        <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
        <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
        
        {/* IT Services */}
        <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
        <Route path="/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/cloud-services" element={<CloudServicesPage />} />
        <Route path="/database" element={<DatabasePage />} />
        <Route path="/networking" element={<NetworkingPage />} />
        <Route path="/devops" element={<DevOpsPage />} />
        
        {/* Specialized Services */}
        <Route path="/quantum-computing" element={<QuantumComputingPage />} />
        <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
        <Route path="/blockchain" element={<BlockchainPage />} />
        <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
        <Route path="/iot-edge" element={<IoTEdgePage />} />
        <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
        <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
        <Route path="/robotics" element={<RoboticsPage />} />
        
        {/* Tools & Apps */}
        <Route path="/analytics-tools" element={<AnalyticsToolsPage />} />
        <Route path="/business-apps" element={<BusinessAppsPage />} />
        <Route path="/developer-tools" element={<DeveloperToolsPage />} />
        <Route path="/marketing-tools" element={<MarketingToolsPage />} />
        <Route path="/productivity" element={<ProductivityPage />} />
        
        {/* Company Pages */}
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
        
        {/* Resources */}
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/api" element={<APIPage />} />
        <Route path="/api-docs" element={<APIDocsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/system-status" element={<SystemStatusPage />} />
        <Route path="/sla" element={<SLAPage />} />
        
        {/* Legal & Compliance */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/gdpr" element={<GDPRPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/security" element={<SecurityPage />} />
        
        {/* Other Pages */}
        <Route path="/offline" element={<OfflinePage />} />
        <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
        
        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;