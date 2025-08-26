import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load pages for better performance
const Index = lazy(() => import('../pages/index'))
const Services = lazy(() => import('../pages/services'))
const Contact = lazy(() => import('../pages/contact'))
const Innovative2026Showcase = lazy(() => import('../pages/services/innovative-2026-showcase'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/innovative-2026-showcase" element={<Innovative2026Showcase />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App