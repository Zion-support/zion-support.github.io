import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer'
import DynamicRouteLoader from './app/components/DynamicRouteLoader'
import { getAllRoutes } from './app/routes'

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    <span className="ml-3 text-white text-lg">Loading page...</span>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <PerformanceMonitor>
          <AccessibilityEnhancer>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Navigation />
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {/* Dynamic Routes - All pages are now dynamically loaded */}
                    {getAllRoutes().map((route) => (
                      <Route 
                        key={route.path} 
                        path={route.path} 
                        element={<DynamicRouteLoader path={route.path} />} 
                      />
                    ))}
                    
                    {/* 404 Route */}
                    <Route path="*" element={
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                        <div className="text-center">
                          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                          <p className="text-xl text-gray-300 mb-8">Page not found</p>
                          <a 
                            href="/" 
                            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                          >
                            Go Home
                          </a>
                        </div>
                      </div>
                    } />
                  </Routes>
                </Suspense>
                <Footer />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </PerformanceMonitor>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App