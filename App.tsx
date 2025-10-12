import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import OptimizedLoading from './app/components/OptimizedLoading'
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
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <main className="min-h-screen">
              <Suspense fallback={<OptimizedLoading />}>
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
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App