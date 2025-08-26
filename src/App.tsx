import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load pages for better performance
const Index = lazy(() => import('../pages/index'))
const Services = lazy(() => import('../pages/services'))
const Contact = lazy(() => import('../pages/contact'))
const About = lazy(() => import('../pages/about'))
const Privacy = lazy(() => import('../pages/privacy'))
const Terms = lazy(() => import('../pages/terms'))
const News = lazy(() => import('../pages/news'))
const CookiePolicy = lazy(() => import('../pages/cookie-policy'))
const NotFound = lazy(() => import('../pages/404'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/news" element={<News />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App