import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './app/components/Header'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/EnhancedErrorBoundary'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import Breadcrumb from './app/components/Breadcrumb'
import CookieConsent from './app/components/CookieConsent'

// Main Pages
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import PricingPage from './app/pricing/page'
import DemoPage from './app/demo/page'
import BlogPage from './app/blog/page'
import CareersPage from './app/careers/page'
import NewsPage from './app/news/page'
import PartnersPage from './app/partners/page'
import InvestorsPage from './app/investors/page'
// import PageLoader from './app/components/PageLoader'
import NotFoundPage from './app/not-found/page'

// Additional AI Services
import AIContentGeneratorPage from './app/ai-content-generator/page'
import AIChatbotEnterprisePage from './app/ai-chatbot-enterprise/page'
import AIAnalyticsDashboardPage from './app/ai-analytics-dashboard/page'
import AI3DGenerationPage from './app/ai-3d-generation/page'
import AIDrugDiscoveryProPage from './app/ai-drug-discovery-pro/page'
import AICybersecuritySuitePage from './app/ai-cybersecurity-suite/page'
import AICRMAssistantPage from './app/ai-crm-assistant/page'
import AIEmailMarketingPage from './app/ai-email-marketing/page'
import AIDocumentProcessingPage from './app/ai-document-processing/page'
import AIVoiceAssistantPage from './app/ai-voice-assistant/page'

// Additional IT Services
import CloudMigrationPage from './app/cloud-migration/page'
import MobileDevelopmentPage from './app/mobile-development/page'
import APIDevelopmentPage from './app/api-development/page'
import DatabaseManagementPage from './app/database-management/page'
import NetworkInfrastructurePage from './app/network-infrastructure/page'

// Micro SaaS Services
import AICRMPage from './app/ai-crm/page'
import SmartAnalyticsPage from './app/smart-analytics/page'
import AIAutomatedTestingPage from './app/ai-automated-testing/page'
import AISocialMediaManagerPage from './app/ai-social-media-manager/page'
import AIProjectManagementPage from './app/ai-project-management/page'
import AICustomerSupportPage from './app/ai-customer-support/page'
import AIInvoiceGeneratorPage from './app/ai-invoice-generator/page'

// Company Pages
import TeamPage from './app/team/page'
import CaseStudiesPage from './app/case-studies/page'
import HelpPage from './app/help/page'
import DocsPage from './app/docs/page'
import APIDocsPage from './app/api-docs/page'
import CommunityPage from './app/community/page'

// Additional Missing Pages
import DevOpsSolutionsPage from './app/devops-solutions/page'
import SystemIntegrationPage from './app/system-integration/page'
import AIContentManagementPage from './app/ai-content-management/page'
import PressPage from './app/press/page'
import CookiePolicyPage from './app/cookie-policy/page'
import GDPRCompliancePage from './app/gdpr-compliance/page'
import ResourcesPage from './app/resources/page'

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Header />
          <Breadcrumb />
          <main>
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div></div>}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/press" element={<PressPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/investors" element={<InvestorsPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                
                {/* AI Services */}
                <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />
                <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
                <Route path="/ai-drug-discovery-pro" element={<AIDrugDiscoveryProPage />} />
                <Route path="/ai-cybersecurity-suite" element={<AICybersecuritySuitePage />} />
                <Route path="/ai-crm-assistant" element={<AICRMAssistantPage />} />
                <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
                <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                
                {/* IT Services */}
                <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/api-development" element={<APIDevelopmentPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                
                {/* Micro SaaS Services */}
                <Route path="/ai-crm" element={<AICRMPage />} />
                <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
                <Route path="/ai-automated-testing" element={<AIAutomatedTestingPage />} />
                <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
                <Route path="/ai-project-management" element={<AIProjectManagementPage />} />
                <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                <Route path="/ai-invoice-generator" element={<AIInvoiceGeneratorPage />} />
                
                {/* Company Pages */}
                <Route path="/team" element={<TeamPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/api-docs" element={<APIDocsPage />} />
                <Route path="/community" element={<CommunityPage />} />
                
                {/* Additional Missing Pages */}
                <Route path="/devops-solutions" element={<DevOpsSolutionsPage />} />
                <Route path="/system-integration" element={<SystemIntegrationPage />} />
                <Route path="/ai-content-management" element={<AIContentManagementPage />} />
                <Route path="/press" element={<PressPage />} />
                <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                <Route path="/gdpr-compliance" element={<GDPRCompliancePage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                
                {/* 404 Page */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <CookieConsent />
          <PerformanceMonitor />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;