import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './app/components/ErrorBoundary'
import LoadingSpinner from './app/components/LoadingSpinner'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import SEOHead from './app/components/SEOHead'

// Lazy load components for better performance
const Navigation = React.lazy(() => import('./app/components/Navigation'))
const Footer = React.lazy(() => import('./app/components/Footer'))
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const MicroSAASServicesPage = React.lazy(() => import('./app/micro-saas-services/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <SEOHead />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Suspense fallback={<LoadingSpinner size="lg" variant="cyber" text="Loading navigation..." />}>
            <Navigation />
          </Suspense>
          
          <main>
            <Suspense fallback={<LoadingSpinner size="xl" variant="cyber" text="Loading page..." />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
          
          <Suspense fallback={<LoadingSpinner size="md" variant="dots" text="Loading footer..." />}>
            <Footer />
          </Suspense>
        </div>
        
        <PerformanceMonitor />
      </Router>
    </ErrorBoundary>
  )
}

export default App