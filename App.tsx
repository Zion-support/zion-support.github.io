import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary'
import OptimizedLoading from './app/components/OptimizedLoading'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import PricingPage from './app/pricing/page'
import BlogPage from './app/blog/page'
import NewsPage from './app/news/page'
import SupportPage from './app/support/page'
import CareersPage from './app/careers/page'
import InvestorsPage from './app/investors/page'
import StatusPage from './app/status/page'
import SystemStatusPage from './app/system-status/page'
import NotFoundPage from './app/not-found'
import MicroSaasPage from './app/micro-saas/page'
import MicroSaasAnalyticsDashboardPage from './app/micro-saas/analytics-dashboard/page'
import MicroSaasAppointmentSchedulerPage from './app/micro-saas/appointment-scheduler/page'
import MicroSaasChatAnalyticsPage from './app/micro-saas/chat-analytics/page'
import MicroSaasContentGeneratorPage from './app/micro-saas/content-generator/page'
import MicroSaasDocumentProcessorPage from './app/micro-saas/document-processor/page'
import MicroSaasEmailMarketingPage from './app/micro-saas/email-marketing/page'
import MicroSaasExpenseTrackerPage from './app/micro-saas/expense-tracker/page'
import MicroSaasInventoryManagementPage from './app/micro-saas/inventory-management/page'
import MicroSaasLeadScoringPage from './app/micro-saas/lead-scoring/page'
import MicroSaasSeoOptimizerPage from './app/micro-saas/seo-optimizer/page'
import MicroSaasSocialManagerPage from './app/micro-saas/social-manager/page'
import MicroSaasSupportBotPage from './app/micro-saas/support-bot/page'
import AIAutomatedReportingPage from './app/ai-automated-reporting/page'
import AIChatbotBuilderPage from './app/ai-chatbot-builder/page'
import AIExpenseTrackerPage from './app/ai-expense-tracker/page'
import AIPasswordManagerPage from './app/ai-password-manager/page'
import AITaskManagerPage from './app/ai-task-manager/page'
import BusinessIntelligencePage from './app/business-intelligence/page'
import ITConsultingPage from './app/it-consulting/page'
import ITServicesPage from './app/it-services/page'
import CybersecurityPage from './app/cybersecurity/page'
import DataCenterPage from './app/data-center/page'
import DatabaseServicesPage from './app/database-services/page'
import DatabasePage from './app/database/page'
import DevOpsPage from './app/devops/page'
import EnterprisePage from './app/enterprise/page'
import EnterpriseSecurityPage from './app/enterprise-security/page'
import GDPRPage from './app/gdpr/page'
import IOTEdgeComputingPage from './app/iot-edge-computing/page'
import RoboticsPage from './app/robotics/page'
import SmartCityInfrastructurePage from './app/smart-city-infrastructure/page'
import TaskManagerProPage from './app/task-manager-pro/page'
import TrainingPage from './app/training/page'
import ServicesAdvertisingPage from './app/services-advertising/page'
import FiveGImplementationPage from './app/5g-implementation/page'

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <main className="min-h-screen">
              <Suspense fallback={<OptimizedLoading fullScreen showLogo text="Loading Zion Tech Group..." />}>
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
            <PerformanceMonitor />
          </div>
        </Router>
      </GlobalErrorBoundary>
    </HelmetProvider>
  )
}

export default App