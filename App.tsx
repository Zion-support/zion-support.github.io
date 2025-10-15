import { Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import styles
import './app/styles/futuristic-theme.css'

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import AIServicesPage from './app/ai-services/page';
import ITServicesPage from './app/it-services/page';
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import FiveGSolutionsPage from './app/5g-solutions/page';
import TeamPage from './app/team/page';
import CareersPage from './app/careers/page';
import HelpPage from './app/help/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import PricingPage from './app/pricing/page';
import BlogPage from './app/blog/page';
import CaseStudiesPage from './app/case-studies/page';
import PartnershipsPage from './app/partnerships/page';
import APIDocsPage from './app/api-docs/page';
import AccessibilityPage from './app/accessibility/page';
import AISolutionsPage from './app/ai-solutions/page';
import DigitalTransformationPage from './app/digital-transformation/page';
import MicroSAASSolutionsPage from './app/micro-saas-solutions/page';
import AIContentGeneratorPage from './app/ai-content-generator/page';
import DataAnalyticsPage from './app/data-analytics/page';
import WebDevelopmentPage from './app/web-development/page';
import MobileDevelopmentPage from './app/mobile-development/page';
import DatabaseManagementPage from './app/database-management/page';
import NetworkInfrastructurePage from './app/network-infrastructure/page';
import CookiesPage from './app/cookies/page';

// Import components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// Loading component with futuristic design
const LoadingFallback = () => (
  <div className="min-h-screen futuristic-bg flex items-center justify-center">
    <div className="relative">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 glow-effect"></div>
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      <div className="absolute inset-2 rounded-full border-2 border-transparent border-r-green-400 animate-spin" style={{ animationDuration: '2s' }}></div>
    </div>
  </div>
)

export default function App() {
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
          <div className="min-h-screen futuristic-bg matrix-bg">
            <Navigation />
            <Sidebar />
            
            <main className="flex-1 relative">
              <PerformanceMonitor />
              <AccessibilityEnhancer />
              
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  
                  {/* Service Pages */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/ai-solutions" element={<AISolutionsPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  <Route path="/micro-saas-solutions" element={<MicroSAASSolutionsPage />} />
                  <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                  <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                  
                  {/* Company Pages */}
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  
                  {/* Support Pages */}
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  
                  {/* Additional Pages */}
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/partnerships" element={<PartnershipsPage />} />
                  <Route path="/api-docs" element={<APIDocsPage />} />
                  <Route path="/accessibility" element={<AccessibilityPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<div className="min-h-screen futuristic-bg flex items-center justify-center">
                    <div className="text-center cyber-card">
                      <h1 className="text-6xl font-bold neon-text mb-4">404</h1>
                      <p className="text-xl text-gray-300 mb-8">Page not found in the digital realm</p>
                      <a href="/" className="neon-button">Return to Base</a>
                    </div>
                  </div>} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  )
}