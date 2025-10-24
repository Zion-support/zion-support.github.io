'use client'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ErrorBoundary from './components/ErrorBoundary'
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'))
const AboutPage = lazy(() => import('./about/page'))
const ContactPage = lazy(() => import('./contact/page'))

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <PerformanceMonitor>
          <AccessibilityEnhancer>
            <BrowserRouter>
              <div className="min-h-screen bg-gray-50">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                </Suspense>
              </div>
            </BrowserRouter>
          </AccessibilityEnhancer>
        </PerformanceMonitor>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App
