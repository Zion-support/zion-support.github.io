import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load pages for better performance
const Index = lazy(() => import('../pages/index'))
const EnhancedIndex = lazy(() => import('../pages/enhanced-index'))
const Services = lazy(() => import('../pages/services'))
const EnhancedServices = lazy(() => import('../pages/enhanced-services'))
const Contact = lazy(() => import('../pages/contact'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/enhanced" element={<EnhancedIndex />} />
          <Route path="/services" element={<Services />} />
          <Route path="/enhanced-services" element={<EnhancedServices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App