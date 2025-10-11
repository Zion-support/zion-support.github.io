import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './app/layout'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import LoadingSpinner from './app/components/LoadingSpinner'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const MicroSAASServicesPage = React.lazy(() => import('./app/micro-saas-services/page'))
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'))
const DigitalTransformationPage = React.lazy(() => import('./app/digital-transformation/page'))

function App() {
  return (
    <Router>
      <PerformanceMonitor />
      <Suspense fallback={<LoadingSpinner size="lg" className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/ai-services" element={<Layout><AIServicesPage /></Layout>} />
          <Route path="/it-services" element={<Layout><ITServicesPage /></Layout>} />
          <Route path="/micro-saas-services" element={<Layout><MicroSAASServicesPage /></Layout>} />
          <Route path="/cloud-services" element={<Layout><CloudServicesPage /></Layout>} />
          <Route path="/digital-transformation" element={<Layout><DigitalTransformationPage /></Layout>} />
          <Route path="/5g-implementation" element={<Layout><FiveGImplementationPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App