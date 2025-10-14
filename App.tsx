import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ErrorBoundary } from 'react-error-boundary'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import AnalyticsProvider from './app/components/AnalyticsProvider'
import LoadingStates from './app/components/LoadingStates'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import ServicesPage from './app/services/page'
import BlogPage from './app/blog/page'
import TutorialsPage from './app/tutorials/page'
import DemoPage from './app/demo/page'
import SupportPage from './app/support/page'
import PrivacyPage from './app/privacy/page'
import TermsPage from './app/terms/page'
import PricingPage from './app/pricing/page'
// Components
// Pages
// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50>
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className=flex items-center mb-4">
        <div className="flex-shrink-0>
          <svg className="h-8 w-8 text-red-400" fill=none" viewBox="0 0 24 24 stroke="currentColor">
            <path strokeLinecap=round" strokeLinejoin="round strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div className=ml-3">
          <h3 className="text-lg font-medium text-gray-900>Something went wrong</h3>
        </div>
      </div>
      <div className="mt-2">
        <p className=text-sm text-gray-500">
          {error.message || 'An unexpected error occurred'}
        </p>
      </div>
      <div className="mt-4 flex space-x-3>
        <button
          onClick={resetErrorBoundary}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className=bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Go home
        </button>
      </div>
    </div>
  </div>
  );
function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AnalyticsProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
              <Navigation />
              <main className="relative z-10" id=main-content" role="main>
                <Suspense fallback={<LoadingStates />}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<HomePage />} />
                    <Route path=/about" element={<AboutPage />} />
                    <Route path="/contact element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path=/blog" element={<BlogPage />} />
                    <Route path="/tutorials element={<TutorialsPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route path=/support" element={<SupportPage />} />
                    <Route path="/privacy element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path=/pricing" element={<PricingPage />} />
                    {/* Catch all route */}
                    <Route path="* element={>                      <div className="min-h-screen flex items-center justify-center">
                        <div className=text-center">
                          <h1 className="text-4xl font-bold text-white mb-4>404 - Page Not Found</h1>
                          <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                          <a href=/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Go Home
                          </a>
                        </div>
                      </div>
                    } />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </AnalyticsProvider>
      </ErrorBoundary>
    </HelmetProvider>
  )
}
export default App;