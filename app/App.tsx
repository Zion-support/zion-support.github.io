'use client'
import React, { Suspense } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './styles/futuristic.css'
import './styles/futuristic-enhanced.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './page'
import { PageLoader } from './components/LoadingStates'
import ErrorBoundary from './components/ErrorBoundary'
import SEOHead from './components/EnhancedSEOHead'
import SkipLink from './components/SkipLink'
import Breadcrumb from './components/Breadcrumb'
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import EnhancedAccessibility from './components/EnhancedAccessibility'
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor'
import { AnalyticsProvider } from './components/EnhancedAnalytics'
import PerformanceMonitor from './components/PerformanceMonitor'
import ServiceWorker from './components/ServiceWorker'
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary'
import FuturisticBackground from './components/FuturisticBackground'

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./about/page'))
const ContactPage = React.lazy(() => import('./contact/page'))
const ServicesPage = React.lazy(() => import('./services/page'))
const PricingPage = React.lazy(() => import('./pricing/page'))
const BlogPage = React.lazy(() => import('./blog/page'))
const CaseStudiesPage = React.lazy(() => import('./case-studies/page'))
const CareersPage = React.lazy(() => import('./careers/page'))
const AiServicesPage = React.lazy(() => import('./ai-services/page'))
const ItServicesPage = React.lazy(() => import('./it-services/page'))
const MicroSaasPage = React.lazy(() => import('./micro-saas/page'))
const TutorialsPage = React.lazy(() => import('./tutorials/page'))
const ConsultationPage = React.lazy(() => import('./consultation/page'))
const DemoPage = React.lazy(() => import('./demo/page'))
const SupportPage = React.lazy(() => import('./support/page'))
const PrivacyPage = React.lazy(() => import('./privacy/page'))
const TermsPage = React.lazy(() => import('./terms/page'))
const CookiesPage = React.lazy(() => import('./cookies/page'))
const SitemapPage = React.lazy(() => import('./sitemap/page'))

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import('./ai-analytics/page'))
const AiAutomationPage = React.lazy(() => import('./ai-automation/page'))
const AiChatbotBuilderPage = React.lazy(() => import('./ai-chatbot-builder/page'))
const AiCybersecurityPage = React.lazy(() => import('./ai-cybersecurity/page'))

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import('./cloud-infrastructure/page'))
const CybersecuritySolutionsPage = React.lazy(() => import('./cybersecurity-solutions/page'))
const WebDevelopmentPage = React.lazy(() => import('./web-development/page'))
const MobileDevelopmentPage = React.lazy(() => import('./mobile-development/page'))

// Company Pages
const TeamPage = React.lazy(() => import('./team/page'))

// Additional Service Pages
const CybersecurityPage = React.lazy(() => import('./cybersecurity/page'))
const DataAnalyticsPage = React.lazy(() => import('./data-analytics/page'))

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor()
  return <React.Fragment>{children}</React.Fragment>
}

// Main App Component
const App: React.FC = () => {
  return (
    <EnhancedErrorBoundary>
      <HelmetProvider>
        <SEOHead 
          title="Zion Tech Group - AI & IT Solutions"
          description="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
          keywords={['AI solutions', 'IT services', 'quantum computing', 'digital transformation', 'enterprise software', 'automation', 'machine learning']}
          canonicalUrl="https://ziontechgroup.com"
        />
        <SkipLink />
        <ServiceWorker />
        <Router>
          <AppWithPerformanceMonitoring>
            <AnalyticsProvider>
              <PerformanceOptimizer>
                <EnhancedAccessibility>
                  <AccessibilityEnhancer
                    enableKeyboardNavigation={true}
                    enableScreenReaderSupport={true}
                    enableHighContrast={false}
                    enableFocusManagement={true}
                  >
                    <PerformanceMonitor />
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
                      <FuturisticBackground />
                      <Navigation />
                      <Breadcrumb />
                      <main id="main-content" className="flex-1" tabIndex={-1}>
                        <Suspense fallback={<PageLoader />}>
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/ai-services" element={<AiServicesPage />} />
                            <Route path="/it-services" element={<ItServicesPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/tutorials" element={<TutorialsPage />} />
                            <Route path="/consultation" element={<ConsultationPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/cookies" element={<CookiesPage />} />
                            <Route path="/sitemap" element={<SitemapPage />} />
                            
                            {/* AI Service Pages */}
                            <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                            <Route path="/ai-automation" element={<AiAutomationPage />} />
                            <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                            <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                            
                            {/* IT Service Pages */}
                            <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                            <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                            <Route path="/web-development" element={<WebDevelopmentPage />} />
                            <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                            
                            {/* Company Pages */}
                            <Route path="/team" element={<TeamPage />} />
                            
                            {/* Additional Service Pages */}
                            <Route path="/cybersecurity" element={<CybersecurityPage />} />
                            <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                          </Routes>
                        </Suspense>
                      </main>
                      <Footer />
                    </div>
                  </AccessibilityEnhancer>
                </EnhancedAccessibility>
              </PerformanceOptimizer>
            </AnalyticsProvider>
          </AppWithPerformanceMonitoring>
        </Router>
      </HelmetProvider>
    </EnhancedErrorBoundary>
  )
}

App.displayName = 'App'
export default App