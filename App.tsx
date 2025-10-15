import { Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import AIServicesPage from './app/ai-services/page';
import MicroSAASPage from './app/micro-saas-solutions/page';
import ITServicesPage from './app/it-services/page';
import PricingPage from './app/pricing/page';
import CaseStudiesPage from './app/case-studies/page';
import TeamPage from './app/team/page';
import CareersPage from './app/careers/page';
import BlogPage from './app/blog/page';
import HelpPage from './app/help/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import AccessibilityPage from './app/accessibility/page';
import CookiesPage from './app/cookies/page';
import PartnershipsPage from './app/partnerships/page';
import APIDocsPage from './app/api-docs/page';

// Import components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
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
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Sidebar />
            
            <main className="flex-1">
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
                  <Route path="/micro-saas-solutions" element={<MicroSAASPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  
                  {/* Company Pages */}
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/partnerships" element={<PartnershipsPage />} />
                  
                  {/* Resource Pages */}
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/api-docs" element={<APIDocsPage />} />
                  
                  {/* Legal Pages */}
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/accessibility" element={<AccessibilityPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  
                  {/* Individual Service Pages - AI Services */}
                  <Route path="/ai-development" element={<AIServicesPage />} />
                  <Route path="/ai-consulting" element={<AIServicesPage />} />
                  <Route path="/ai-content-generator" element={<AIServicesPage />} />
                  <Route path="/ai-customer-support-pro" element={<AIServicesPage />} />
                  <Route path="/ai-solutions" element={<AIServicesPage />} />
                  
                  {/* Individual Service Pages - Micro SaaS */}
                  <Route path="/zion-ai-task-scheduler" element={<MicroSAASPage />} />
                  <Route path="/zion-smart-expense-tracker" element={<MicroSAASPage />} />
                  <Route path="/zion-ai-workflow-automator-pro" element={<MicroSAASPage />} />
                  <Route path="/zion-ai-email-marketing-pro" element={<MicroSAASPage />} />
                  <Route path="/zion-ai-social-scheduler-pro" element={<MicroSAASPage />} />
                  
                  {/* Individual Service Pages - IT Solutions */}
                  <Route path="/cloud-infrastructure" element={<ITServicesPage />} />
                  <Route path="/web-development" element={<ITServicesPage />} />
                  <Route path="/mobile-development" element={<ITServicesPage />} />
                  <Route path="/data-analytics" element={<ITServicesPage />} />
                  <Route path="/cybersecurity" element={<ITServicesPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                      <p className="text-gray-600 mb-8">Page not found</p>
                      <a href="/" className="text-blue-600 hover:text-blue-800">Go back home</a>
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