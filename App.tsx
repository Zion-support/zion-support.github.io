import { Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import Sidebar from './app/components/Sidebar';
import ErrorBoundary from './app/components/ErrorBoundary';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityManager';
import LoadingSpinner from './app/components/LoadingSpinner';

// Import pages
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/AboutPage';
import ServicesPage from './app/pages/ServicesPage';
import ContactPage from './app/pages/ContactPage';
import PricingPage from './app/pages/PricingPage';
import CaseStudiesPage from './app/pages/CaseStudiesPage';
import BlogPage from './app/pages/BlogPage';
import TeamPage from './app/pages/TeamPage';
import CareersPage from './app/pages/CareersPage';
import PrivacyPage from './app/pages/PrivacyPage';
import TermsPage from './app/pages/TermsPage';
import AIServicesPage from './app/pages/AIServicesPage';
import AISolutionsPage from './app/pages/AISolutionsPage';
import ITServicesPage from './app/pages/ITServicesPage';
import CloudInfrastructurePage from './app/pages/CloudInfrastructurePage';
import DigitalTransformationPage from './app/pages/DigitalTransformationPage';
import FiveGSolutionsPage from './app/pages/FiveGSolutionsPage';
import MicroSaaSPage from './app/pages/MicroSaaSPage';
import PartnershipsPage from './app/pages/PartnershipsPage';
import HelpPage from './app/pages/HelpPage';
import APIDocsPage from './app/pages/APIDocsPage';
import NotFoundPage from './app/pages/NotFoundPage';

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
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
                    <Route path="/micro-saas-solutions" element={<MicroSaaSPage />} />
                    
                    {/* Service-specific Pages */}
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