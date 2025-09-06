import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { Footer } from './components/Footer'
import Sidebar from './components/layout/Sidebar'
import ErrorBoundary from './components/ErrorBoundary'
// Import pages
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import PricingPage from './pages/Pricing'
import ContactPage from './pages/Contact'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="flex">
            <Sidebar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App