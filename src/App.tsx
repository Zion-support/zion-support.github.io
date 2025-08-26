import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import EnhancedLoadingSpinner from './components/EnhancedLoadingSpinner'
import PerformanceMonitor from './components/PerformanceMonitor'

// Lazy load pages for better performance
const Index = lazy(() => import('../pages/index'))
const Services = lazy(() => import('../pages/services'))
const Contact = lazy(() => import('../pages/contact'))

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <Suspense fallback={<EnhancedLoadingSpinner size="lg" text="Loading page..." />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <PerformanceMonitor />
      </Layout>
    </HelmetProvider>
  )
}

export default App