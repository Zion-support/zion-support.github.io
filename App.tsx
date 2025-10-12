'use client'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './app/styles/futuristic.css'
import './app/styles/futuristic-enhanced.css'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import { PageLoader } from './app/components/LoadingStates'
import ErrorBoundary from './app/components/ErrorBoundary'
import SEOHead from './app/components/EnhancedSEOHead'
import Breadcrumb from './app/components/Breadcrumb'
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer'
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer'
import EnhancedAccessibility from './app/components/EnhancedAccessibility'
import { AnalyticsProvider } from './app/components/EnhancedAnalytics'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import FuturisticBackground from './app/components/FuturisticBackground'

// Lazy load pages
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const ServicesPage = React.lazy(() => import('./app/services/page'))
const PricingPage = React.lazy(() => import('./app/pricing/page'))
const BlogPage = React.lazy(() => import('./app/blog/page'))
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'))
const CareersPage = React.lazy(() => import('./app/careers/page'))
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'))
const ItServicesPage = React.lazy(() => import('./app/it-services/page'))
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'))
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'))
const ConsultationPage = React.lazy(() => import('./app/consultation/page'))
const DemoPage = React.lazy(() => import('./app/demo/page'))
const SupportPage = React.lazy(() => import('./app/support/page'))
const PrivacyPage = React.lazy(() => import('./app/privacy/page'))
const TermsPage = React.lazy(() => import('./app/terms/page'))
const CookiesPage = React.lazy(() => import('./app/cookies/page'))
const SitemapPage = React.lazy(() => import('./app/sitemap/page'))

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <FuturisticBackground />
            <SEOHead />
            <PerformanceOptimizer />
            <AccessibilityEnhancer />
            <EnhancedAccessibility />
            <AnalyticsProvider>
              <PerformanceMonitor />
              <Navigation />
              <Breadcrumb />
              <main className="relative z-10">
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
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </AnalyticsProvider>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App