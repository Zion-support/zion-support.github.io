import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'

// Layout Components
import { EnhancedHeader } from './components/EnhancedHeader'
import { EnhancedFooter } from './components/EnhancedFooter'
import { Sidebar } from './components/Sidebar'

// Loading component
const LoadingSpinner = () => (
  <div className='flex items-center justify-center min-h-screen'>
    <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600'></div>
  </div>
)

// Optimized lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn)
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'))
const About = createLazyComponent(() => import('./pages/About'))
const Contact = createLazyComponent(() => import('./pages/Contact'))
const Team = createLazyComponent(() => import('./pages/Team'))
const Partners = createLazyComponent(() => import('./pages/Partners'))
const HelpCenter = createLazyComponent(() => import('./pages/Help'))
const PrivacyPolicy = createLazyComponent(() => import('./pages/PrivacyPolicy'))
const TermsOfService = createLazyComponent(() => import('./pages/TermsOfService'))
const Services = createLazyComponent(() => import('./pages/Services'))
const Pricing = createLazyComponent(() => import('./pages/Pricing'))
const Blog = createLazyComponent(() => import('./pages/Blog'))
const News = createLazyComponent(() => import('./pages/News'))
const Careers = createLazyComponent(() => import('./pages/Careers'))
const Login = createLazyComponent(() => import('./pages/Login'))
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'))
const Documentation = createLazyComponent(() => import('./pages/Documentation'))
const Training = createLazyComponent(() => import('./pages/Training'))
const Webinars = createLazyComponent(() => import('./pages/Webinars'))
const Research = createLazyComponent(() => import('./pages/Research'))
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'))

// Additional required components
const FAQ = createLazyComponent(() => import('./pages/FAQ'))
const Privacy = createLazyComponent(() => import('./pages/Privacy'))
const Terms = createLazyComponent(() => import('./pages/Terms'))
const Cookies = createLazyComponent(() => import('./pages/Cookies'))
const DataProtection = createLazyComponent(() => import('./pages/DataProtection'))
const Accessibility = createLazyComponent(() => import('./pages/Accessibility'))
const SystemStatus = createLazyComponent(() => import('./pages/SystemStatus'))
const Search = createLazyComponent(() => import('./pages/Search'))
const Categories = createLazyComponent(() => import('./pages/Categories'))

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
    <div className='text-center text-white max-w-md mx-auto p-8'>
      <h1 className='text-4xl font-bold mb-4 text-red-400'>Something went wrong</h1>
      <p className='text-gray-300 mb-6'>
        {error.message || 'An unexpected error occurred'}
      </p>
      <div className='space-y-3'>
        <button
          onClick={resetErrorBoundary}
          className='w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors'
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className='w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors'
        >
          Go home
        </button>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>
        <Router>
          <div className='min-h-screen bg-gray-50'>
            <EnhancedHeader />
            <div className='flex'>
              <Sidebar />
              <main className='flex-1'>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Core Pages */}
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/careers' element={<Careers />} />
                    <Route path='/partners' element={<Partners />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/faq' element={<FAQ />} />
                    <Route path='/privacy' element={<Privacy />} />
                    <Route path='/terms' element={<Terms />} />
                    <Route path='/cookies' element={<Cookies />} />
                    <Route path='/data-protection' element={<DataProtection />} />
                    <Route path='/accessibility' element={<Accessibility />} />
                    <Route path='/sitemap' element={<Sitemap />} />
                    <Route path='/system-status' element={<SystemStatus />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/documentation' element={<Documentation />} />
                    <Route path='/marketplace' element={<Marketplace />} />
                    <Route path='/training' element={<Training />} />
                    <Route path='/webinars' element={<Webinars />} />
                    <Route path='/research' element={<Research />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/login' element={<Login />} />
                    
                    {/* 404 Page */}
                    <Route
                      path='*'
                      element={
                        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
                          <div className='text-center text-white'>
                            <h1 className='text-6xl font-bold mb-4'>404</h1>
                            <h2 className='text-2xl font-semibold mb-4'>Page Not Found</h2>
                            <p className='text-gray-300 mb-8'>
                              The page you're looking for doesn't exist or has been moved.
                            </p>
                            <button
                              onClick={() => window.history.back()}
                              className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-4'
                            >
                              Go Back
                            </button>
                            <button
                              onClick={() => window.location.href = '/'}
                              className='px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors'
                            >
                              Go Home
                            </button>
                          </div>
                        </div>
                      }
                    />
                  </Routes>
                </Suspense>
              </main>
            </div>
            <EnhancedFooter />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App