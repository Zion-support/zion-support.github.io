import React, { Suspense, lazy, useEffect, memo } from "react"
import { HelmetProvider } from "react-helmet-async"
import "./app/styles/futuristic.css"

// Components
import Navigation from "./app/components/Navigation"
import Footer from "./app/components/Footer"
import ErrorBoundary from "./app/components/ErrorBoundary"
import GlobalErrorBoundary from "./app/components/GlobalErrorBoundary"
import PerformanceMonitor from "./app/components/PerformanceMonitor"
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer"
import LoadingSpinner from "./app/components/LoadingSpinner"
import SEOOptimizer from "./app/components/SEOOptimizer"

// Hooks
import { usePerformanceOptimization } from "./hooks/usePerformanceOptimization"

// App Loading Spinner Component
const AppLoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div>
)

// Error fallback component
export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error
  resetErrorBoundary: () => void
}) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-900">
          Something went wrong
        </h3>
        <p className="mt-2 text-sm text-gray-500">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  </div>
)

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div>
)

const App = memo(() => {
  // Initialize performance optimizations
  usePerformanceOptimization()
  
  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => {
          // Service worker registered successfully
        })
        .catch(() => {
          // Service worker registration failed
        })
    }
    
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement("link")
      criticalCSS.rel = "preload"
      criticalCSS.href = "/app/styles/futuristic.css"
      criticalCSS.as = "style"
      document.head.appendChild(criticalCSS)
      
      // Preload critical fonts
      const fontPreload = document.createElement("link")
      fontPreload.rel = "preload"
      fontPreload.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      fontPreload.as = "style"
      fontPreload.crossOrigin = "anonymous"
      document.head.appendChild(fontPreload)
      
      // Preload critical pages
      const criticalPages = ["/about", "/contact", "/services"]
      criticalPages.forEach((page) => {
        const link = document.createElement("link")
        link.rel = "prefetch"
        link.href = page
        document.head.appendChild(link)
      })
    }
    
    // Only preload in production
    if (process.env.NODE_ENV === "production") {
      preloadCriticalResources()
    }
  }, [])

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <div className="min-h-screen bg-gray-50">
          <main className="flex-1">
            <ErrorBoundary>
              <PerformanceMonitor />
              <AccessibilityEnhancer>
                <SEOOptimizer>
                  <Suspense fallback={<LoadingFallback />}>
                    <ErrorBoundary>
                      <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center">
                          <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Welcome to Zion Tech Group
                          </h1>
                          <p className="text-gray-600 mb-8">
                            AI & IT Solutions for Modern Businesses
                          </p>
                          <a
                            href="/"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Go to Home Page
                          </a>
                        </div>
                      </div>
                    </ErrorBoundary>
                  </Suspense>
                </SEOOptimizer>
              </AccessibilityEnhancer>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    </GlobalErrorBoundary>
  )
})

App.displayName = "App"
export default App