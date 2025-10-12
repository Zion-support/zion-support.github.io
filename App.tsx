import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const PricingPage = React.lazy(() => import('./app/pricing/page'))
const BlogPage = React.lazy(() => import('./app/blog/page'))
const NewsPage = React.lazy(() => import('./app/news/page'))
const SupportPage = React.lazy(() => import('./app/support/page'))
const CareersPage = React.lazy(() => import('./app/careers/page'))
const InvestorsPage = React.lazy(() => import('./app/investors/page'))
const StatusPage = React.lazy(() => import('./app/status/page'))
const SystemStatusPage = React.lazy(() => import('./app/system-status/page'))
const NotFoundPage = React.lazy(() => import('./app/not-found'))

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    <span className="ml-3 text-white text-lg">Loading page...</span>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <Navigation />
            <main id="main-content" className="min-h-screen">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/investors" element={<InvestorsPage />} />
                  <Route path="/status" element={<StatusPage />} />
                  <Route path="/system-status" element={<SystemStatusPage />} />
                  
                  {/* 404 Page */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App