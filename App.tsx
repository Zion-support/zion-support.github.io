import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import ITServicesPage from './app/it-services/page'
import MicroSaasPage from './app/micro-saas/page'
import AIContentWriterProPage from './app/micro-saas/ai-content-writer-pro/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'
import CareersPage from './app/careers/page'
import BlogPage from './app/blog/page'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/micro-saas/ai-content-writer-pro" element={<AIContentWriterProPage />} />
              <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
              <Route path="/cloud-services" element={<CloudServicesPage />} />
              <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App