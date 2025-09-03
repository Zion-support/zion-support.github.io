import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })))
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })))
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })))
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })))

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">
      <div className="text-red-400 text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Go home
        </button>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <main className="flex-1">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-center">Loading...</div></div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App