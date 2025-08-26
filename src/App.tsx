import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load pages for better performance
const Index = lazy(() => import('../pages/index'))
const Services = lazy(() => import('../pages/services'))
const Contact = lazy(() => import('../pages/contact'))
const CuttingEdgeInnovativeServices2025 = lazy(() => import('./pages/CuttingEdgeInnovativeServices2025'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cutting-edge-innovative-services-2025" element={<CuttingEdgeInnovativeServices2025 />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App