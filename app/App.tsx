'use client'
import React, { Suspense } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ErrorBoundary } from 'react-error-boundary'

// Import the main page component
import HomePage from './page'

// Import other page components
import AboutPage from './about/page'
import AccessibilityPage from './accessibility/page'
import FiveGImplementationPage from './5g-implementation/page'

// Components
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import AppLoadingSpinner from './components/AppLoadingSpinner'

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="App">
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/accessibility" element={<AccessibilityPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                
                {/* Add more routes as needed */}
              </Routes>
            </Suspense>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App
