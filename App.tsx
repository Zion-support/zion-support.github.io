import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './app/components/Header'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import FuturisticBackground from './app/components/FuturisticBackground'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))

// AI Services Pages
const AIContentGeneratorPage = React.lazy(() => import('./app/ai-content-generator/page'))
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'))
const AIAnalyticsDashboardPage = React.lazy(() => import('./app/ai-analytics-dashboard/page'))
const AIEmailAssistantPage = React.lazy(() => import('./app/ai-email-assistant/page'))
const AIVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'))
const AIAutomationPage = React.lazy(() => import('./app/ai-automation/page'))
const AI3DGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'))
const AIDrugDiscoveryProPage = React.lazy(() => import('./app/ai-drug-discovery-pro/page'))

// IT Services Pages
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'))
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'))
const DevOpsPage = React.lazy(() => import('./app/devops/page'))
const DataAnalyticsPage = React.lazy(() => import('./app/data-analytics/page'))
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'))
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'))

// 5G Services Pages
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./app/5g-network-infrastructure/page'))
const FiveGIoTSolutionsPage = React.lazy(() => import('./app/5g-iot-solutions/page'))
const FiveGEdgeComputingPage = React.lazy(() => import('./app/5g-edge-computing/page'))
const FiveGPrivateNetworksPage = React.lazy(() => import('./app/5g-private-networks/page'))
const FiveGMobileApplicationsPage = React.lazy(() => import('./app/5g-mobile-applications/page'))

// Micro SAAS Pages
const AITaskManagerPage = React.lazy(() => import('./app/ai-task-manager/page'))
const AIExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker/page'))
const AIPasswordManagerPage = React.lazy(() => import('./app/ai-password-manager/page'))
const AIInvoiceGeneratorPage = React.lazy(() => import('./app/ai-invoice-generator/page'))
const AIHealthTrackerPage = React.lazy(() => import('./app/ai-health-tracker/page'))
const AISmartCalendarPage = React.lazy(() => import('./app/ai-smart-calendar/page'))
const AIClimateSolutionsProPage = React.lazy(() => import('./app/ai-climate-solutions-pro/page'))

// Additional AI Services Pages
const AIMeetingAssistantPage = React.lazy(() => import('./app/ai-meeting-assistant/page'))
const AIProjectManagerPage = React.lazy(() => import('./app/ai-project-manager/page'))
const AICodeReviewerPage = React.lazy(() => import('./app/ai-code-reviewer/page'))
const AIVideoEditorPage = React.lazy(() => import('./app/ai-video-editor/page'))
const AIDataScientistPage = React.lazy(() => import('./app/ai-data-scientist/page'))
const AIPersonalTrainerPage = React.lazy(() => import('./app/ai-personal-trainer/page'))

// Additional IT Services Pages
const BlockchainPage = React.lazy(() => import('./app/blockchain/page'))
const QuantumComputingSolutionsPage = React.lazy(() => import('./app/quantum-computing-solutions/page'))
const QuantumCloudComputingPage = React.lazy(() => import('./app/quantum-cloud-computing/page'))

// Additional 5G Services Pages
const FiveGDataAnalyticsPage = React.lazy(() => import('./app/5g-data-analytics/page'))

// Legal and Support Pages
const PrivacyPage = React.lazy(() => import('./app/privacy/page'))
const TermsPage = React.lazy(() => import('./app/terms/page'))
const CookiesPage = React.lazy(() => import('./app/cookies/page'))
const HelpPage = React.lazy(() => import('./app/help/page'))
const DocsPage = React.lazy(() => import('./app/docs/page'))
const SupportPage = React.lazy(() => import('./app/support/page'))
const StatusPage = React.lazy(() => import('./app/status/page'))
const SLAPage = React.lazy(() => import('./app/sla/page'))

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    <span className="ml-3 text-white text-lg">Loading page...</span>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
            <FuturisticBackground />
            <Header />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                
                {/* AI Services Routes */}
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                <Route path="/ai-automation" element={<AIAutomationPage />} />
                <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
                <Route path="/ai-drug-discovery-pro" element={<AIDrugDiscoveryProPage />} />
                
                {/* IT Services Routes */}
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/devops" element={<DevOpsPage />} />
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                
                {/* 5G Services Routes */}
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                
                {/* Micro SAAS Routes */}
                <Route path="/ai-task-manager" element={<AITaskManagerPage />} />
                <Route path="/ai-expense-tracker" element={<AIExpenseTrackerPage />} />
                <Route path="/ai-password-manager" element={<AIPasswordManagerPage />} />
                <Route path="/ai-invoice-generator" element={<AIInvoiceGeneratorPage />} />
                <Route path="/ai-health-tracker" element={<AIHealthTrackerPage />} />
                <Route path="/ai-smart-calendar" element={<AISmartCalendarPage />} />
                <Route path="/ai-climate-solutions-pro" element={<AIClimateSolutionsProPage />} />
                
                {/* Additional AI Services Routes */}
                <Route path="/ai-meeting-assistant" element={<AIMeetingAssistantPage />} />
                <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
                <Route path="/ai-code-reviewer" element={<AICodeReviewerPage />} />
                <Route path="/ai-video-editor" element={<AIVideoEditorPage />} />
                <Route path="/ai-data-scientist" element={<AIDataScientistPage />} />
                <Route path="/ai-personal-trainer" element={<AIPersonalTrainerPage />} />
                
                {/* Additional IT Services Routes */}
                <Route path="/blockchain" element={<BlockchainPage />} />
                <Route path="/quantum-computing-solutions" element={<QuantumComputingSolutionsPage />} />
                <Route path="/quantum-cloud-computing" element={<QuantumCloudComputingPage />} />
                
                {/* Additional 5G Services Routes */}
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                
                {/* Legal and Support Routes */}
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/sla" element={<SLAPage />} />
                
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
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App