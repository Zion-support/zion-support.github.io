import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './app/components/Header'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/EnhancedErrorBoundary'
import Breadcrumb from './app/components/Breadcrumb'
import CookieConsent from './app/components/CookieConsent'
import PerformanceMonitor from './app/components/PerformanceMonitor'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const PricingPage = React.lazy(() => import('./app/pricing/page'))
const BlogPage = React.lazy(() => import('./app/blog/page'))
const CareersPage = React.lazy(() => import('./app/careers/page'))
const NewsPage = React.lazy(() => import('./app/news/page'))
const PressPage = React.lazy(() => import('./app/press/page'))
const PartnersPage = React.lazy(() => import('./app/partners/page'))
const InvestorsPage = React.lazy(() => import('./app/investors/page'))
const CommunityPage = React.lazy(() => import('./app/community/page'))
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'))

// Core Services Pages
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'))
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'))
const DataAnalyticsPage = React.lazy(() => import('./app/data-analytics/page'))
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'))
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'))
const DevOpsPage = React.lazy(() => import('./app/devops/page'))

// Enhanced loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-cyan-500/20 border-t-cyan-500 mx-auto"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-white mb-2">Loading Zion Tech Group</h3>
        <p className="text-gray-300 text-sm">Preparing your experience...</p>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Header />
            <Breadcrumb />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/press" element={<PressPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/investors" element={<InvestorsPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                
                {/* Core Services */}
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/devops" element={<DevOpsPage />} />
                
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
            <CookieConsent />
            <PerformanceMonitor />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App