import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import CookieConsent from './app/components/CookieConsent'
import PerformanceMonitor from './app/components/PerformanceMonitor'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))

// AI Services
const AIContentGeneratorPage = React.lazy(() => import('./app/ai-content-generator/page'))
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'))
const AIAnalyticsDashboardPage = React.lazy(() => import('./app/ai-analytics-dashboard/page'))
const AIEmailAssistantPage = React.lazy(() => import('./app/ai-email-assistant/page'))
const AIVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'))
const AICRMAssistantPage = React.lazy(() => import('./app/ai-crm-assistant/page'))
const AISocialMediaManagerPage = React.lazy(() => import('./app/ai-social-media-manager/page'))
const AIEmailMarketingPage = React.lazy(() => import('./app/ai-email-marketing-automation/page'))
const AIBusinessIntelligenceProPage = React.lazy(() => import('./app/ai-business-intelligence-pro/page'))
const AICybersecuritySuitePage = React.lazy(() => import('./app/ai-cybersecurity-suite/page'))
const AIAutomationPage = React.lazy(() => import('./app/ai-automation/page'))
const AI3DGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'))
const AIDrugDiscoveryProPage = React.lazy(() => import('./app/ai-drug-discovery-pro/page'))
const AIDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'))

// IT Services
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'))
const DevOpsPage = React.lazy(() => import('./app/devops/page'))
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'))
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'))
const DataAnalyticsPage = React.lazy(() => import('./app/data-analytics/page'))
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'))

// 5G Services
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./app/5g-network-infrastructure/page'))
const FiveGIoTSolutionsPage = React.lazy(() => import('./app/5g-iot-solutions/page'))
const FiveGEdgeComputingPage = React.lazy(() => import('./app/5g-edge-computing/page'))
const FiveGPrivateNetworksPage = React.lazy(() => import('./app/5g-private-networks/page'))
const FiveGMobileApplicationsPage = React.lazy(() => import('./app/5g-mobile-applications/page'))
const FiveGDataAnalyticsPage = React.lazy(() => import('./app/5g-data-analytics/page'))

// Micro SAAS Services
const AITaskManagerPage = React.lazy(() => import('./app/ai-task-manager/page'))
const AIExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker-pro/page'))
const AIPasswordManagerPage = React.lazy(() => import('./app/ai-password-manager/page'))
const AIInvoiceGeneratorPage = React.lazy(() => import('./app/ai-invoice-generator/page'))
const AIHealthTrackerPage = React.lazy(() => import('./app/ai-health-tracker/page'))
const AIMeetingTranscriberPage = React.lazy(() => import('./app/ai-meeting-transcriber/page'))
const AISmartCalendarPage = React.lazy(() => import('./app/ai-smart-calendar/page'))
const AIClimateSolutionsProPage = React.lazy(() => import('./app/ai-climate-solutions-pro/page'))

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

function App() {
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
                  
                  {/* AI Services */}
                  <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                  <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                  <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                  <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
                  <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                  <Route path="/ai-crm-assistant" element={<AICRMAssistantPage />} />
                  <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
                  <Route path="/ai-email-marketing-automation" element={<AIEmailMarketingPage />} />
                  <Route path="/ai-business-intelligence-pro" element={<AIBusinessIntelligenceProPage />} />
                  <Route path="/ai-cybersecurity-suite" element={<AICybersecuritySuitePage />} />
                  <Route path="/ai-automation" element={<AIAutomationPage />} />
                  <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
                  <Route path="/ai-drug-discovery-pro" element={<AIDrugDiscoveryProPage />} />
                  <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                  
                  {/* IT Services */}
                  <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                  <Route path="/devops" element={<DevOpsPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  
                  {/* 5G Services */}
                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                  <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                  <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                  <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                  <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                  <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                  <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                  
                  {/* Micro SAAS Services */}
                  <Route path="/ai-task-manager" element={<AITaskManagerPage />} />
                  <Route path="/ai-expense-tracker-pro" element={<AIExpenseTrackerPage />} />
                  <Route path="/ai-password-manager" element={<AIPasswordManagerPage />} />
                  <Route path="/ai-invoice-generator" element={<AIInvoiceGeneratorPage />} />
                  <Route path="/ai-health-tracker" element={<AIHealthTrackerPage />} />
                  <Route path="/ai-meeting-transcriber" element={<AIMeetingTranscriberPage />} />
                  <Route path="/ai-smart-calendar" element={<AISmartCalendarPage />} />
                  <Route path="/ai-climate-solutions-pro" element={<AIClimateSolutionsProPage />} />
                  
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