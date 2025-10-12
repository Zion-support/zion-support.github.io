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

// AI Services Pages
const AIContentGeneratorPage = React.lazy(() => import('./app/ai-content-generator/page'))
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'))
const AITaskManagerPage = React.lazy(() => import('./app/ai-task-manager/page'))
const AIExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker/page'))
const AIPasswordManagerPage = React.lazy(() => import('./app/ai-password-manager/page'))
const AIAutomatedReportingPage = React.lazy(() => import('./app/ai-automated-reporting/page'))
const AIAnalyticsDashboardPage = React.lazy(() => import('./app/ai-analytics-dashboard/page'))
const AIEmailAssistantPage = React.lazy(() => import('./app/ai-email-assistant/page'))
const AIVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'))
const AIAutomationPage = React.lazy(() => import('./app/ai-automation/page'))

// IT Services Pages
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'))
const DevOpsSolutionsPage = React.lazy(() => import('./app/devops-solutions/page'))
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'))
const DataAnalyticsPage = React.lazy(() => import('./app/data-analytics/page'))
const APIDevelopmentPage = React.lazy(() => import('./app/api-development/page'))
const SystemIntegrationPage = React.lazy(() => import('./app/system-integration/page'))

// Company Pages
const TeamPage = React.lazy(() => import('./app/team/page'))
const CareersPage = React.lazy(() => import('./app/careers/page'))
const BlogPage = React.lazy(() => import('./app/blog/page'))
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'))
const PressPage = React.lazy(() => import('./app/press/page'))

// Support Pages
const HelpPage = React.lazy(() => import('./app/help/page'))
const DocsPage = React.lazy(() => import('./app/docs/page'))
const APIDocsPage = React.lazy(() => import('./app/api-docs/page'))
const StatusPage = React.lazy(() => import('./app/status/page'))
const CommunityPage = React.lazy(() => import('./app/community/page'))

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
                <Route path="/contact" element={<ContactPage />} />
                
                {/* AI Services Routes */}
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                <Route path="/ai-task-manager" element={<AITaskManagerPage />} />
                <Route path="/ai-expense-tracker" element={<AIExpenseTrackerPage />} />
                <Route path="/ai-password-manager" element={<AIPasswordManagerPage />} />
                <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage />} />
                <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                <Route path="/ai-automation" element={<AIAutomationPage />} />
                
                {/* IT Services Routes */}
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                <Route path="/devops-solutions" element={<DevOpsSolutionsPage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/api-development" element={<APIDevelopmentPage />} />
                <Route path="/system-integration" element={<SystemIntegrationPage />} />
                
                {/* Other Services Routes */}
                <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                
                {/* Company Routes */}
                <Route path="/team" element={<TeamPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/press" element={<PressPage />} />
                
                {/* Support Routes */}
                <Route path="/help" element={<HelpPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/api-docs" element={<APIDocsPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/community" element={<CommunityPage />} />
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