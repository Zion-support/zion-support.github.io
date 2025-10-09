import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Import all page components
import HomePage from './page';
import AboutPage from './about/page';
import AIServicesPage from './ai-services/page';
import ContactPage from './contact/page';
import BlogPage from './blog/page';
import MicroSaasPage from './micro-saas/page';
import QuantumComputingPage from './quantum-computing/page';
import RoboticsPage from './robotics/page';
import IoTEdgeComputingPage from './iot-edge-computing/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import BusinessIntelligencePage from './business-intelligence/page';
import AutonomousSystemsPage from './autonomous-systems/page';
import ITServicesPage from './it-services/page';
import ITInfrastructurePage from './it-infrastructure/page';
import CybersecurityPage from './cybersecurity/page';
import DevOpsPage from './devops/page';
import DatabasePage from './database/page';
import CloudServicesPage from './cloud-services/page';
import NetworkingPage from './networking/page';
import ManagedITPage from './managed-it/page';
import PricingPage from './pricing/page';
import CaseStudiesPage from './case-studies/page';
import CareersPage from './careers/page';
import NewsPage from './news/page';
import PrivacyPage from './privacy/page';
import TermsPage from './terms/page';
import CookiesPage from './cookies/page';
import GDPRPage from './gdpr/page';
import CompliancePage from './compliance/page';
import EnterprisePage from './enterprise/page';
import ConsultationPage from './consultation/page';
import DemoPage from './demo/page';
import DocumentationPage from './docs/page';
import APIDocsPage from './api-docs/page';
import SitemapPage from './sitemap/page';

// AI Service Pages
import AIMarketingPage from './ai-marketing/page';
import AIAutomationPage from './ai-automation/page';
import AIHealthcarePage from './ai-healthcare/page';
import AIFintechPage from './ai-fintech/page';
import AIContentGenerationPage from './ai-content-generation/page';
import AIDataAnalyticsPage from './ai-data-analytics/page';
import AICybersecurityPage from './ai-cybersecurity/page';
import AIEcommerceSolutionsPage from './ai-ecommerce-solutions/page';
import AIMobileAppDevelopmentPage from './ai-mobile-app-development/page';
import AICustomerSupportPage from './ai-customer-support/page';
import AISalesAutomationPage from './ai-sales-automation/page';
import AIWorkflowAutomationPage from './ai-workflow-automation/page';
import AIDataVisualizationPage from './ai-data-visualization/page';
import AILeadGenerationPage from './ai-lead-generation/page';
import AIDocumentProcessingPage from './ai-document-processing/page';
import AIWritingAssistantPage from './ai-writing-assistant/page';
import AISchedulerPage from './ai-scheduler/page';
import ExpenseTrackerPage from './expense-tracker/page';
import SmartAnalyticsPage from './smart-analytics/page';
import ProductivityPage from './productivity/page';
import MarketingToolsPage from './marketing-tools/page';
import DeveloperToolsPage from './developer-tools/page';
import BusinessAppsPage from './business-apps/page';
import AnalyticsToolsPage from './analytics-tools/page';
import SecurityPage from './security/page';
import ITConsultingPage from './it-consulting/page';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/gdpr" element={<GDPRPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/docs" element={<DocumentationPage />} />
            <Route path="/api-docs" element={<APIDocsPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />

            {/* AI Services */}
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/ai-marketing" element={<AIMarketingPage />} />
            <Route path="/ai-automation" element={<AIAutomationPage />} />
            <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
            <Route path="/ai-fintech" element={<AIFintechPage />} />
            <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
            <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
            <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
            <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
            <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
            <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
            <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
            <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
            <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
            <Route path="/ai-lead-generation" element={<AILeadGenerationPage />} />
            <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />

            {/* IT Services */}
            <Route path="/it-services" element={<ITServicesPage />} />
            <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/devops" element={<DevOpsPage />} />
            <Route path="/database" element={<DatabasePage />} />
            <Route path="/cloud-services" element={<CloudServicesPage />} />
            <Route path="/networking" element={<NetworkingPage />} />
            <Route path="/managed-it" element={<ManagedITPage />} />
            <Route path="/it-consulting" element={<ITConsultingPage />} />

            {/* Micro SAAS */}
            <Route path="/micro-saas" element={<MicroSaasPage />} />
            <Route path="/ai-writing-assistant" element={<AIWritingAssistantPage />} />
            <Route path="/ai-scheduler" element={<AISchedulerPage />} />
            <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
            <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
            <Route path="/productivity" element={<ProductivityPage />} />
            <Route path="/marketing-tools" element={<MarketingToolsPage />} />
            <Route path="/developer-tools" element={<DeveloperToolsPage />} />
            <Route path="/business-apps" element={<BusinessAppsPage />} />
            <Route path="/analytics-tools" element={<AnalyticsToolsPage />} />

            {/* Emerging Technologies */}
            <Route path="/quantum-computing" element={<QuantumComputingPage />} />
            <Route path="/robotics" element={<RoboticsPage />} />
            <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
            <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
            <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
            <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />

            {/* Security */}
            <Route path="/security" element={<SecurityPage />} />

            {/* Catch all route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;