
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import OptimizedLoading from './app/components/OptimizedLoading'
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const PricingPage = React.lazy(() => import('./app/pricing/page'))
const BlogPage = React.lazy(() => import('./app/blog/page'))
const NewsPage = React.lazy(() => import('./app/news/page'))
const SupportPage = React.lazy(() => import('./app/support/page'))
const CareersPage = React.lazy(() => import('./app/careers/page'))
const InvestorsPage = React.lazy(() => import('./app/investors/page'))
const StatusPage = React.lazy(() => import('./app/status/page'))
const SystemStatusPage = React.lazy(() => import('./app/system-status/page'))
const NotFoundPage = React.lazy(() => import('./app/not-found'))
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'))
const MicroSaasAnalyticsDashboardPage = React.lazy(() => import('./app/micro-saas/analytics-dashboard/page'))
const MicroSaasAppointmentSchedulerPage = React.lazy(() => import('./app/micro-saas/appointment-scheduler/page'))
const MicroSaasChatAnalyticsPage = React.lazy(() => import('./app/micro-saas/chat-analytics/page'))
const MicroSaasContentGeneratorPage = React.lazy(() => import('./app/micro-saas/content-generator/page'))
const MicroSaasDocumentProcessorPage = React.lazy(() => import('./app/micro-saas/document-processor/page'))
const MicroSaasEmailMarketingPage = React.lazy(() => import('./app/micro-saas/email-marketing/page'))
const MicroSaasExpenseTrackerPage = React.lazy(() => import('./app/micro-saas/expense-tracker/page'))
const MicroSaasInventoryManagementPage = React.lazy(() => import('./app/micro-saas/inventory-management/page'))
const MicroSaasLeadScoringPage = React.lazy(() => import('./app/micro-saas/lead-scoring/page'))
const MicroSaasSeoOptimizerPage = React.lazy(() => import('./app/micro-saas/seo-optimizer/page'))
const MicroSaasSocialManagerPage = React.lazy(() => import('./app/micro-saas/social-manager/page'))
const MicroSaasSupportBotPage = React.lazy(() => import('./app/micro-saas/support-bot/page'))
const AIAutomatedReportingPage = React.lazy(() => import('./app/ai-automated-reporting/page'))
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'))
const AIExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker/page'))
const AIPasswordManagerPage = React.lazy(() => import('./app/ai-password-manager/page'))
const AITaskManagerPage = React.lazy(() => import('./app/ai-task-manager/page'))
const BusinessIntelligencePage = React.lazy(() => import('./app/business-intelligence/page'))
const ITConsultingPage = React.lazy(() => import('./app/it-consulting/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'))
const DataCenterPage = React.lazy(() => import('./app/data-center/page'))
const DatabaseServicesPage = React.lazy(() => import('./app/database-services/page'))
const DatabasePage = React.lazy(() => import('./app/database/page'))
const DevOpsPage = React.lazy(() => import('./app/devops/page'))
const EnterprisePage = React.lazy(() => import('./app/enterprise/page'))
const EnterpriseSecurityPage = React.lazy(() => import('./app/enterprise-security/page'))
const GDPRPage = React.lazy(() => import('./app/gdpr/page'))
const IOTEdgeComputingPage = React.lazy(() => import('./app/iot-edge-computing/page'))
const RoboticsPage = React.lazy(() => import('./app/robotics/page'))
const SmartCityInfrastructurePage = React.lazy(() => import('./app/smart-city-infrastructure/page'))
const TaskManagerProPage = React.lazy(() => import('./app/task-manager-pro/page'))
const TrainingPage = React.lazy(() => import('./app/training/page'))
const ServicesAdvertisingPage = React.lazy(() => import('./app/services-advertising/page'))
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    <span className="ml-3 text-white text-lg">Loading page...</span>
  </div>
)

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <Navigation />
            <main id="main-content" className="min-h-screen">
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
                  <Route path="/micro-saas/lead-scoring" element={<MicroSaasLeadScoringPage />} />
                  <Route path="/micro-saas/seo-optimizer" element={<MicroSaasSeoOptimizerPage />} />
                  <Route path="/micro-saas/social-manager" element={<MicroSaasSocialManagerPage />} />
                  <Route path="/micro-saas/support-bot" element={<MicroSaasSupportBotPage />} />
                  
                  {/* AI Services */}
                  <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage />} />
                  <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                  <Route path="/ai-expense-tracker" element={<AIExpenseTrackerPage />} />
                  <Route path="/ai-password-manager" element={<AIPasswordManagerPage />} />
                  <Route path="/ai-task-manager" element={<AITaskManagerPage />} />
                  <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                  
                  {/* IT Services */}
                  <Route path="/it-consulting" element={<ITConsultingPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                  <Route path="/data-center" element={<DataCenterPage />} />
                  <Route path="/database-services" element={<DatabaseServicesPage />} />
                  <Route path="/database" element={<DatabasePage />} />
                  <Route path="/devops" element={<DevOpsPage />} />
                  <Route path="/enterprise" element={<EnterprisePage />} />
                  <Route path="/enterprise-security" element={<EnterpriseSecurityPage />} />
                  <Route path="/gdpr" element={<GDPRPage />} />
                  <Route path="/iot-edge-computing" element={<IOTEdgeComputingPage />} />
                  <Route path="/robotics" element={<RoboticsPage />} />
                  <Route path="/smart-city-infrastructure" element={<SmartCityInfrastructurePage />} />
                  <Route path="/task-manager-pro" element={<TaskManagerProPage />} />
                  <Route path="/training" element={<TrainingPage />} />
                  <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
                  
                  {/* 5G Services */}
                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                  
                  {/* 404 Page */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <AccessibilityEnhancer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App