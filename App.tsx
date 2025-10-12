import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import LoadingSpinner from './app/components/LoadingSpinner'
import SEOHead from './app/components/SEOHead'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const MicroSAASServicesPage = React.lazy(() => import('./app/micro-saas-services/page'))
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'))
const DigitalTransformationPage = React.lazy(() => import('./app/digital-transformation/page'))

// AI Services
const AIContentGeneratorPage = React.lazy(() => import('./app/ai-content-generator/page'))
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'))
const AITaskManagerPage = React.lazy(() => import('./app/ai-task-manager/page'))
const AIExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker/page'))
const AIPasswordManagerPage = React.lazy(() => import('./app/ai-password-manager/page'))
const AIAnalyticsDashboardPage = React.lazy(() => import('./app/ai-analytics-dashboard/page'))
const AIAutomationPage = React.lazy(() => import('./app/ai-automation/page'))
const AICybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'))

// IT Services
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'))
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'))
const DataAnalyticsPage = React.lazy(() => import('./app/data-analytics/page'))
const CustomDevelopmentPage = React.lazy(() => import('./app/custom-development/page'))
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'))
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'))
const SystemIntegrationPage = React.lazy(() => import('./app/system-integration/page'))
const InfrastructureManagementPage = React.lazy(() => import('./app/infrastructure-management/page'))

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <LoadingSpinner size="lg" text="Loading page..." />
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <SEOHead />
            <Navigation />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                
                {/* AI Services Routes */}
                <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                <Route path="/ai-task-manager" element={<AITaskManagerPage />} />
                <Route path="/ai-expense-tracker" element={<AIExpenseTrackerPage />} />
                <Route path="/ai-password-manager" element={<AIPasswordManagerPage />} />
                <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                <Route path="/ai-automation" element={<AIAutomationPage />} />
                <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                
                {/* IT Services Routes */}
                <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/custom-development" element={<CustomDevelopmentPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/system-integration" element={<SystemIntegrationPage />} />
                <Route path="/infrastructure-management" element={<InfrastructureManagementPage />} />
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