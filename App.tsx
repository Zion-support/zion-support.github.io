import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import EnhancedErrorBoundary from './app/components/EnhancedErrorBoundary'
import SEOHead from './app/components/SEOHead'
import Footer from './app/components/Footer'
import { usePerformanceMonitor } from './app/components/PerformanceMonitor'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const ServicesPage = React.lazy(() => import('./app/services/page'))
const PricingPage = React.lazy(() => import('./app/pricing/page'))
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'))
const BlogPage = React.lazy(() => import('./app/blog/page'))
const TeamPage = React.lazy(() => import('./app/team/page'))
const CareersPage = React.lazy(() => import('./app/careers/page'))
const PrivacyPage = React.lazy(() => import('./app/privacy/page'))
const TermsPage = React.lazy(() => import('./app/terms/page'))
const CookiesPage = React.lazy(() => import('./app/cookies/page'))
const FAQPage = React.lazy(() => import('./app/faq/page'))
const DemoPage = React.lazy(() => import('./app/demo/page'))
const ConsultationPage = React.lazy(() => import('./app/consultation/page'))
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'))
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'))
const ItServicesPage = React.lazy(() => import('./app/it-services/page'))

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
        <SEOHead />
        <BrowserRouter>
          <AppWithPerformanceMonitoring>
            <Routes>
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
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/ai-services" element={<AiServicesPage />} />
              <Route path="/it-services" element={<ItServicesPage />} />
            </Routes>
            <Footer />
          </AppWithPerformanceMonitoring>
        </BrowserRouter>
      </HelmetProvider>
    </EnhancedErrorBoundary>
  )
}

App.displayName = 'App'
export default App