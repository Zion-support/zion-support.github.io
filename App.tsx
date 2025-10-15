import { Suspense, lazy, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import components
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary'
import Navigation from './app/components/Navigation'
import Sidebar from './app/components/Sidebar'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import AccessibilityEnhancer from './app/components/EnhancedAccessibilityEnhancer'
import LoadingFallback from './app/components/LoadingStates'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'

// Import pages
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/AboutPage';
import ServicesPage from './app/pages/ServicesPage';
import ContactPage from './app/pages/ContactPage';
import NotFoundPage from './app/pages/NotFoundPage';

// Lazy load additional pages
const PricingPage = lazy(() => import('./app/pages/PricingPage'))
const CaseStudiesPage = lazy(() => import('./app/pages/CaseStudiesPage'))
const BlogPage = lazy(() => import('./app/pages/BlogPage'))
const TeamPage = lazy(() => import('./app/pages/TeamPage'))
const CareersPage = lazy(() => import('./app/pages/CareersPage'))
const PrivacyPage = lazy(() => import('./app/pages/PrivacyPage'))
const TermsPage = lazy(() => import('./app/pages/TermsPage'))
const CookiesPage = lazy(() => import('./app/pages/CookiesPage'))
const AIServicesPage = lazy(() => import('./app/pages/AIServicesPage'))
const AISolutionsPage = lazy(() => import('./app/pages/AISolutionsPage'))
const ITServicesPage = lazy(() => import('./app/pages/ITServicesPage'))
const CloudInfrastructurePage = lazy(() => import('./app/pages/CloudInfrastructurePage'))
const DigitalTransformationPage = lazy(() => import('./app/pages/DigitalTransformationPage'))
const FiveGSolutionsPage = lazy(() => import('./app/pages/FiveGSolutionsPage'))
const MicroSAASSolutionsPage = lazy(() => import('./app/pages/MicroSAASSolutionsPage'))
const AIContentGeneratorPage = lazy(() => import('./app/pages/AIContentGeneratorPage'))
const DataAnalyticsPage = lazy(() => import('./app/pages/DataAnalyticsPage'))
const WebDevelopmentPage = lazy(() => import('./app/pages/WebDevelopmentPage'))
const MobileDevelopmentPage = lazy(() => import('./app/pages/MobileDevelopmentPage'))
const DatabaseManagementPage = lazy(() => import('./app/pages/DatabaseManagementPage'))
const NetworkInfrastructurePage = lazy(() => import('./app/pages/NetworkInfrastructurePage'))
const PartnershipsPage = lazy(() => import('./app/pages/PartnershipsPage'))
const HelpPage = lazy(() => import('./app/pages/HelpPage'))
const APIDocsPage = lazy(() => import('./app/pages/APIDocsPage'))

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div role="alert" className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Something went wrong</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreload = document.createElement('link')
      fontPreload.rel = 'preload'
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      fontPreload.as = 'style'
      document.head.appendChild(fontPreload)
    }

    preloadCriticalResources()
  }, [])

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Sidebar />
            
            <main className="flex-1">
              <ErrorBoundary>
                <PerformanceMonitor />
                <AccessibilityEnhancer />
                
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/cookies" element={<CookiesPage />} />
                    
                    {/* AI Services */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/ai-solutions" element={<AISolutionsPage />} />
                    
                    {/* IT Services */}
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                    
                    {/* 5G Solutions */}
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                    
                    {/* Micro SaaS Solutions */}
                    <Route path="/micro-saas-solutions" element={<MicroSAASSolutionsPage />} />
                    <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                    
                    {/* Service-specific Pages */}
                    <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                    <Route path="/web-development" element={<WebDevelopmentPage />} />
                    <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                    <Route path="/database-management" element={<DatabaseManagementPage />} />
                    <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                    <Route path="/partnerships" element={<PartnershipsPage />} />
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="/api-docs" element={<APIDocsPage />} />
                    
                    {/* Catch all route */}
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </main>
            
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  )
}

export default App
