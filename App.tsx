'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));

// AI Services Pages
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AiContentGeneratorPage = React.lazy(() => import('./app/ai-content-generator/page'));
const AiCodeAssistantProPage = React.lazy(() => import('./app/ai-code-assistant-pro/page'));
const AiProjectManagementProPage = React.lazy(() => import('./app/ai-project-management-pro/page'));
const AiEmailAssistantPage = React.lazy(() => import('./app/ai-email-assistant/page'));
const AiVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'));
const AiVideoEditorPage = React.lazy(() => import('./app/ai-video-editor/page'));
const AiExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker/page'));
const AiInvoiceGeneratorPage = React.lazy(() => import('./app/ai-invoice-generator/page'));
const AiCustomerSupportChatbotPage = React.lazy(() => import('./app/ai-customer-support-chatbot/page'));
const AiCustomerInsightsPage = React.lazy(() => import('./app/ai-customer-insights/page'));
const AiContentModerationProPage = React.lazy(() => import('./app/ai-content-moderation-pro/page'));
const AiEmailMarketingAutomationPage = React.lazy(() => import('./app/ai-email-marketing-automation/page'));
const AiSocialMediaManagerPage = React.lazy(() => import('./app/ai-social-media-manager/page'));
const AiEcommerceOptimizerProPage = React.lazy(() => import('./app/ai-ecommerce-optimizer-pro/page'));
const AiBlockchainAnalyticsPage = React.lazy(() => import('./app/ai-blockchain-analytics/page'));
const AiAnalyticsDashboardProPage = React.lazy(() => import('./app/ai-analytics-dashboard-pro/page'));
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));

// IT Services Pages
const CloudMigrationProPage = React.lazy(() => import('./app/cloud-migration-pro/page'));
const SystemIntegrationPage = React.lazy(() => import('./app/system-integration/page'));
const AdvancedSecuritySuitePage = React.lazy(() => import('./app/advanced-security-suite/page'));
const MicroSaasServicesPage = React.lazy(() => import('./app/micro-saas-services/page'));

// 5G Solutions Pages
const FiveGSolutionsPage = React.lazy(() => import('./app/5g-solutions/page'));
const FiveGSmartCitySolutionsPage = React.lazy(() => import('./app/5g-smart-city-solutions/page'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-400 mx-auto mb-4"></div>
                <p className="text-white text-lg">Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/ai-services" element={<AiServicesPage />} />
              <Route path="/it-services" element={<ItServicesPage />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/tutorials" element={<TutorialsPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              
              {/* AI Services Routes */}
              <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
              <Route path="/ai-content-generator" element={<AiContentGeneratorPage />} />
              <Route path="/ai-code-assistant-pro" element={<AiCodeAssistantProPage />} />
              <Route path="/ai-project-management-pro" element={<AiProjectManagementProPage />} />
              <Route path="/ai-email-assistant" element={<AiEmailAssistantPage />} />
              <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
              <Route path="/ai-video-editor" element={<AiVideoEditorPage />} />
              <Route path="/ai-expense-tracker" element={<AiExpenseTrackerPage />} />
              <Route path="/ai-invoice-generator" element={<AiInvoiceGeneratorPage />} />
              <Route path="/ai-customer-support-chatbot" element={<AiCustomerSupportChatbotPage />} />
              <Route path="/ai-customer-insights" element={<AiCustomerInsightsPage />} />
              <Route path="/ai-content-moderation-pro" element={<AiContentModerationProPage />} />
              <Route path="/ai-email-marketing-automation" element={<AiEmailMarketingAutomationPage />} />
              <Route path="/ai-social-media-manager" element={<AiSocialMediaManagerPage />} />
              <Route path="/ai-ecommerce-optimizer-pro" element={<AiEcommerceOptimizerProPage />} />
              <Route path="/ai-blockchain-analytics" element={<AiBlockchainAnalyticsPage />} />
              <Route path="/ai-analytics-dashboard-pro" element={<AiAnalyticsDashboardProPage />} />
              <Route path="/ai-automation" element={<AiAutomationPage />} />
              
              {/* IT Services Routes */}
              <Route path="/cloud-migration-pro" element={<CloudMigrationProPage />} />
              <Route path="/system-integration" element={<SystemIntegrationPage />} />
              <Route path="/advanced-security-suite" element={<AdvancedSecuritySuitePage />} />
              <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
              
              {/* 5G Solutions Routes */}
              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
              <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
              
              {/* 404 Route */}
              <Route path="*" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                    <p className="text-xl text-gray-300 mb-8">Page not found</p>
                    <a 
                      href="/" 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
