import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/EnhancedErrorBoundary'
import CookieConsent from './app/components/CookieConsent'
import PerformanceMonitor from './app/components/PerformanceMonitor'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const PricingPage = React.lazy(() => import('./app/pricing/page'))
const BlogPage = React.lazy(() => import('./app/blog/page'))
const NewsPage = React.lazy(() => import('./app/news/page'))
const SupportPage = React.lazy(() => import('./app/support/page'))
const CareersPage = React.lazy(() => import('./app/careers/page'))
const InvestorsPage = React.lazy(() => import('./app/investors/page'))
const StatusPage = React.lazy(() => import('./app/status/page'))
const SystemStatusPage = React.lazy(() => import('./app/system-status/page'))

// Core Services Pages
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'))
const BusinessIntelligencePage = React.lazy(() => import('./app/business-intelligence/page'))

// 5G Services Pages
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))

// Micro SAAS Services Pages
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'))
const MicroSaasAnalyticsDashboardPage = React.lazy(() => import('./app/micro-saas/analytics-dashboard/page'))
const MicroSaasAppointmentSchedulerPage = React.lazy(() => import('./app/micro-saas/appointment-scheduler/page'))
const MicroSaasChatAnalyticsPage = React.lazy(() => import('./app/micro-saas/chat-analytics/page'))
const MicroSaasContentGeneratorPage = React.lazy(() => import('./app/micro-saas/content-generator/page'))
const MicroSaasDocumentProcessorPage = React.lazy(() => import('./app/micro-saas/document-processor/page'))
const MicroSaasEmailMarketingPage = React.lazy(() => import('./app/micro-saas/email-marketing/page'))
const MicroSaasExpenseTrackerPage = React.lazy(() => import('./app/micro-saas/expense-tracker/page'))
const MicroSaasInventoryManagementPage = React.lazy(() => import('./app/micro-saas/inventory-management/page'))

// AI Services Pages
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'))
const AIAutomatedReportingPage = React.lazy(() => import('./app/ai-automated-reporting/page'))
const AIPasswordManagerPage = React.lazy(() => import('./app/ai-password-manager/page'))
const AITaskManagerPage = React.lazy(() => import('./app/ai-task-manager/page'))

// Additional AI Services
const AIContentGeneratorPage = React.lazy(() => import('./app/ai-content-generator/page'))
const AIChatbotEnterprisePage = React.lazy(() => import('./app/ai-chatbot-enterprise/page'))
const AIAnalyticsDashboardPage = React.lazy(() => import('./app/ai-analytics-dashboard/page'))
const AI3DGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'))
const AIDrugDiscoveryProPage = React.lazy(() => import('./app/ai-drug-discovery-pro/page'))
const AICybersecuritySuitePage = React.lazy(() => import('./app/ai-cybersecurity-suite/page'))
const AICRMAssistantPage = React.lazy(() => import('./app/ai-crm-assistant/page'))
const AIEmailMarketingPage = React.lazy(() => import('./app/ai-email-marketing/page'))
const AIDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'))
const AIVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'))

// Additional IT Services
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'))
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'))
const APIDevelopmentPage = React.lazy(() => import('./app/api-development/page'))
const DatabaseManagementPage = React.lazy(() => import('./app/database-management/page'))
const NetworkInfrastructurePage = React.lazy(() => import('./app/network-infrastructure/page'))

// Micro SaaS Services
const AICRMPage = React.lazy(() => import('./app/ai-crm/page'))
const SmartAnalyticsPage = React.lazy(() => import('./app/smart-analytics/page'))
const AIAutomatedTestingPage = React.lazy(() => import('./app/ai-automated-testing/page'))
const AISocialMediaManagerPage = React.lazy(() => import('./app/ai-social-media-manager/page'))
const AIProjectManagementPage = React.lazy(() => import('./app/ai-project-management/page'))
const AICustomerSupportPage = React.lazy(() => import('./app/ai-customer-support/page'))
const AIInvoiceGeneratorPage = React.lazy(() => import('./app/ai-invoice-generator/page'))

// Company Pages
const TeamPage = React.lazy(() => import('./app/team/page'))
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'))
const HelpPage = React.lazy(() => import('./app/help/page'))
const DocsPage = React.lazy(() => import('./app/docs/page'))
const APIDocsPage = React.lazy(() => import('./app/api-docs/page'))
const CommunityPage = React.lazy(() => import('./app/community/page'))

// Additional Missing Pages
const DevOpsSolutionsPage = React.lazy(() => import('./app/devops-solutions/page'))
const SystemIntegrationPage = React.lazy(() => import('./app/system-integration/page'))
const AIContentManagementPage = React.lazy(() => import('./app/ai-content-management/page'))
const PressPage = React.lazy(() => import('./app/press/page'))
const CookiePolicyPage = React.lazy(() => import('./app/cookie-policy/page'))
const GDPRCompliancePage = React.lazy(() => import('./app/gdpr-compliance/page'))
const ResourcesPage = React.lazy(() => import('./app/resources/page'))

// Enhanced loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-cyan-500/20 border-t-cyan-500 mx-auto"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-white mb-2">Loading Zion Tech Group</h3>
        <p className="text-gray-300 text-sm">Preparing your experience...</p>
      </div>
    </div>
  </div>
)

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <main className="min-h-screen">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/investors" element={<InvestorsPage />} />
                  <Route path="/status" element={<StatusPage />} />
                  <Route path="/system-status" element={<SystemStatusPage />} />
                  
                  {/* Micro SaaS Services */}
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  <Route path="/micro-saas/analytics-dashboard" element={<MicroSaasAnalyticsDashboardPage />} />
                  <Route path="/micro-saas/appointment-scheduler" element={<MicroSaasAppointmentSchedulerPage />} />
                  <Route path="/micro-saas/chat-analytics" element={<MicroSaasChatAnalyticsPage />} />
                  <Route path="/micro-saas/content-generator" element={<MicroSaasContentGeneratorPage />} />
                  <Route path="/micro-saas/document-processor" element={<MicroSaasDocumentProcessorPage />} />
                  <Route path="/micro-saas/email-marketing" element={<MicroSaasEmailMarketingPage />} />
                  <Route path="/micro-saas/expense-tracker" element={<MicroSaasExpenseTrackerPage />} />
                  <Route path="/micro-saas/inventory-management" element={<MicroSaasInventoryManagementPage />} />
                  
                  {/* AI Services */}
                  <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage />} />
                  <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                  <Route path="/ai-password-manager" element={<AIPasswordManagerPage />} />
                  <Route path="/ai-task-manager" element={<AITaskManagerPage />} />
                  <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                  
                  {/* IT Services */}
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                  
                  {/* 5G Services */}
                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                  
                  {/* Additional AI Services */}
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
                  
                  {/* Additional IT Services */}
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
            </main>
            <Footer />
            <CookieConsent />
            <PerformanceMonitor />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App