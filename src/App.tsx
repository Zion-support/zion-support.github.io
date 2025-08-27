import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load pages for better performance
const Index = lazy(() => import('../pages/index'))
const About = lazy(() => import('../pages/about'))
const Services = lazy(() => import('../pages/services'))
const Contact = lazy(() => import('../pages/contact'))
const Careers = lazy(() => import('../pages/careers'))
const News = lazy(() => import('../pages/news'))
const Events = lazy(() => import('../pages/events'))
const ResearchDevelopment = lazy(() => import('../pages/research-development'))
const CaseStudies = lazy(() => import('../pages/case-studies'))
const Privacy = lazy(() => import('../pages/privacy'))
const Terms = lazy(() => import('../pages/terms'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/research-development" element={<ResearchDevelopment />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Suspense>
    </Layout>
  )

}

export default App