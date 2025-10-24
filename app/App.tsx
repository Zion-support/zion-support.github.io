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
const AccessibilityPage = lazy(() => import('./accessibility/page'))
const AiAccountingAssistantPage = lazy(() => import('./ai-accounting-assistant/page'))
const AiAgriculturalIntelligenceProPage = lazy(() => import('./ai-agricultural-intelligence-pro/page'))

// Loading component
const AppLoadingSpinner = () => <LoadingSpinner />

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor>
              <AccessibilityEnhancer />
              <Suspense fallback={<AppLoadingSpinner />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/accessibility" element={<AccessibilityPage />} />
                  
                  {/* AI Services */}
                  <Route path="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
                  <Route path="/ai-agricultural-intelligence-pro" element={<AiAgriculturalIntelligenceProPage />} />
                </Routes>
              </Suspense>
            </PerformanceMonitor>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App