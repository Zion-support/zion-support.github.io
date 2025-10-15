import { Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import styles
import './app/styles/globals.css'

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';

// Import components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
    <div className="text-center space-y-4">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      <p className="text-cyan-400 font-medium">Loading...</p>
    </div>
  </div>
)

export default function App() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreload = document.createElement('link')
      fontPreload.rel = 'preload'
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      fontPreload.as = 'style'
      document.head.appendChild(fontPreload)
    }

    preloadCriticalResources()
  }, [])

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
            <Navigation />
            <Sidebar />
            
            <main className="flex-1 relative">
              <PerformanceMonitor />
              <AccessibilityEnhancer />
              
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  
                  {/* AI Services */}
                  <Route path="/ai-services" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">AI Services</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/ai-development" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">AI Development</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/ai-consulting" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">AI Consulting</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/ai-content-generator" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">AI Content Generator</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/ai-customer-support" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">AI Customer Support</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  
                  {/* Micro SAAS */}
                  <Route path="/micro-saas-solutions" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Micro SAAS Solutions</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/zion-task-manager-pro" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Task Manager Pro</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/zion-smart-expense-tracker" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Smart Expense Tracker</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/zion-ai-email-marketing-pro" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">AI Email Marketing Pro</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/zion-ai-social-scheduler-pro" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">AI Social Scheduler Pro</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  
                  {/* IT Solutions */}
                  <Route path="/it-services" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">IT Services</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/cloud-infrastructure" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Cloud Infrastructure</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/cybersecurity" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Cybersecurity</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/data-analytics" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Data Analytics</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/web-development" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Web Development</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  
                  {/* Other Pages */}
                  <Route path="/team" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Our Team</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/careers" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Careers</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/case-studies" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Case Studies</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/partnerships" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Partnerships</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/help" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Help Center</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/api-docs" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">API Documentation</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/privacy" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Privacy Policy</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  <Route path="/terms" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold gradient-text mb-4">Terms of Service</h1><p className="text-gray-400">Coming Soon</p></div></div>} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
                      <p className="text-gray-400 mb-8 text-xl">Page not found</p>
                      <a href="/" className="text-cyan-400 hover:text-cyan-300 text-lg font-medium transition-colors">Go back home</a>
                    </div>
                  </div>} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  )
}