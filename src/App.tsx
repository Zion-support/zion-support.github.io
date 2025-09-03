import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Core Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer'
import { SEO } from './components/SEO'
import { ErrorBoundary } from './components/ErrorBoundary'
import { LoadingSpinner } from './components/ui/loading-spinner'

// Layout Components
import { EnhancedHeader } from './components/EnhancedHeader'
import { EnhancedFooter } from './components/EnhancedFooter'

// Optimized lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn)
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'))
const About = createLazyComponent(() => import('./pages/About'))
const Contact = createLazyComponent(() => import('./pages/Contact'))
const Careers = createLazyComponent(() => import('./pages/Careers'))
const Services = createLazyComponent(() => import('./pages/Services'))
const Solutions = createLazyComponent(() => import('./pages/Solutions'))
const News = createLazyComponent(() => import('./pages/News'))
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'))
const Privacy = createLazyComponent(() => import('./pages/Privacy'))
const Terms = createLazyComponent(() => import('./pages/Terms'))

// Service pages
const AIServices = createLazyComponent(() => import('./pages/AIServices'))
const CloudServices = createLazyComponent(() => import('./pages/CloudServices'))
const CybersecurityServices = createLazyComponent(() => import('./pages/CybersecurityServices'))
const InfrastructureServices = createLazyComponent(() => import('./pages/InfrastructureServices'))
const TransformationServices = createLazyComponent(() => import('./pages/TransformationServices'))
const ConsultingServices = createLazyComponent(() => import('./pages/ConsultingServices'))

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">
      <div className="text-red-400 text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
)

function App() {
  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <PerformanceOptimizer>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <SEO 
            title="Zion Tech Group - Professional Technology Services"
            description="Leading provider of AI, cloud, cybersecurity, and digital transformation services. Expert technology solutions for modern businesses."
            keywords="technology services, AI, cloud computing, cybersecurity, digital transformation, IT consulting"
          />
          
          <EnhancedHeader />
          
          <main className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/services" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/news" element={<News />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Service Routes */}
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/infrastructure" element={<InfrastructureServices />} />
              <Route path="/services/transformation" element={<TransformationServices />} />
              <Route path="/services/consulting" element={<ConsultingServices />} />
            </Routes>
          </main>
          
          <EnhancedFooter />
        </div>
      </PerformanceOptimizer>
    </ErrorBoundary>
  )
}

export default App