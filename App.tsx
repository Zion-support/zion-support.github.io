import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
import ErrorBoundary from './app/components/ErrorBoundary'
import LoadingSpinner from './app/components/LoadingSpinner'
import SEOHead from './app/components/SEOHead'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import ErrorBoundary from './app/components/ErrorBoundary'
import LoadingSpinner from './app/components/LoadingSpinner'
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
=======
import PerformanceMonitor from './app/components/PerformanceMonitor'
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer'
>>>>>>> cursor/analyze-improve-and-deploy-application-edcb
=======
import PerformanceMonitor from './app/components/PerformanceMonitor'
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer'
>>>>>>> cursor/analyze-improve-and-deploy-application-c354

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
<<<<<<< HEAD
=======
const AIContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'))
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'))
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const MicroSAASServicesPage = React.lazy(() => import('./app/micro-saas-services/page'))
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'))
const DigitalTransformationPage = React.lazy(() => import('./app/digital-transformation/page'))
<<<<<<< HEAD

// New AI Services
const AI3DGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'))
const AIDrugDiscoveryProPage = React.lazy(() => import('./app/ai-drug-discovery-pro/page'))

// New IT Services
const QuantumComputingSolutionsPage = React.lazy(() => import('./app/quantum-computing-solutions/page'))

// New Micro SAAS Services
const AIClimateSolutionsProPage = React.lazy(() => import('./app/ai-climate-solutions-pro/page'))
=======
const AIMeetingAssistantPage = React.lazy(() => import('./app/ai-meeting-assistant/page'))
const AIProjectManagerPage = React.lazy(() => import('./app/ai-project-manager/page'))
const AICustomerSupportBotPage = React.lazy(() => import('./app/ai-customer-support-bot/page'))
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <LoadingSpinner size="lg" text="Loading page..." />
  </div>
)
<<<<<<< HEAD

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <SEOHead />
            <PerformanceMonitor />
            <AccessibilityEnhancer />
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
                
                {/* New AI Services */}
                <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
                <Route path="/ai-drug-discovery-pro" element={<AIDrugDiscoveryProPage />} />
                
                {/* New IT Services */}
                <Route path="/quantum-computing-solutions" element={<QuantumComputingSolutionsPage />} />
                
                {/* New Micro SAAS Services */}
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
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
<<<<<<< HEAD
=======
=======
import FuturisticBackground from './app/components/FuturisticBackground'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import ITServicesPage from './app/it-services/page'
import MicroSaasServicesPage from './app/micro-saas-services/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'
import PrivacyPage from './app/privacy/page'
import TermsPage from './app/terms/page'
import AIContentGeneratorPage from './app/ai-content-generator/page'
import AIChatbotBuilderPage from './app/ai-chatbot-builder/page'
import AIAnalyticsDashboardPage from './app/ai-analytics-dashboard/page'
import AIEmailAssistantPage from './app/ai-email-assistant/page'
import AIVoiceAssistantPage from './app/ai-voice-assistant/page'
import AIAutomationPage from './app/ai-automation/page'
import CloudMigrationPage from './app/cloud-migration/page'
import CybersecuritySolutionsPage from './app/cybersecurity-solutions/page'
import DevOpsCICDPage from './app/devops-cicd/page'
import DataAnalyticsPage from './app/data-analytics/page'
import MobileDevelopmentPage from './app/mobile-development/page'
import WebDevelopmentPage from './app/web-development/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-futuristic-dark relative overflow-hidden">
        <FuturisticBackground />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
          
          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* AI Service Pages */}
          <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
          <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
          <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
          <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
          <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
          <Route path="/ai-automation" element={<AIAutomationPage />} />
          
          {/* IT Service Pages */}
          <Route path="/cloud-migration" element={<CloudMigrationPage />} />
          <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
          <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
          <Route path="/data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
>>>>>>> cursor/website-audit-and-update-with-deployment-c78e
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
=======

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/ai-meeting-assistant" element={<AIMeetingAssistantPage />} />
                <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
                <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
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
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
  )
}

export default App