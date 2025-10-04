import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import UserFriendlyErrorBoundary from './components/UserFriendlyErrorBoundary';
import SEOHead from './components/SEOHead';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SecurityEnhancer from './components/SecurityEnhancer';
import { LoadingSpinner } from './components/LoadingSpinner';

// Import improvement system
import './utils/improvementRunner';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.4,
};

// Lazy loaded components for better performance with error boundaries
const HomePage = React.lazy(() => 
  import('./pages/HomePage').catch(() => ({
    default: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Failed to load page</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }))
);

const AboutPage = React.lazy(() => 
  import('./pages/About').catch(() => ({
    default: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Failed to load page</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }))
);

const ContactPage = React.lazy(() => 
  import('./pages/Contact').catch(() => ({
    default: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Failed to load page</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }))
);

const ServicesPage = React.lazy(() => 
  import('./pages/Services').catch(() => ({
    default: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Failed to load page</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }))
);

const BlogPage = React.lazy(() => 
  import('./pages/Blog').catch(() => ({
    default: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Failed to load page</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }))
);


function App() {
  return (
    <HelmetProvider>
      <UserFriendlyErrorBoundary>
        <Router>
          {/* SEO and Performance Monitoring */}
          <SEOHead />
          <PerformanceMonitor
            reportToAnalytics={process.env.NODE_ENV === 'production'}
            logToConsole={process.env.NODE_ENV === 'development'}
          />
          <PerformanceOptimizer
            enableReporting={process.env.NODE_ENV === 'production'}
          />
          <SecurityEnhancer
            enableCSP={true}
            enableHSTS={true}
            enableXSSProtection={true}
            enableClickjackingProtection={true}
          />
          <AccessibilityEnhancer
            enableAutoFocus={true}
            enableKeyboardNavigation={true}
            enableScreenReaderOptimization={true}
            enableContrastMonitoring={true}
          />

          <div className='min-h-screen bg-gray-50'>
            <EnhancedErrorBoundary
              fallback={<div>Enhanced error occurred</div>}
            >
              <Header />

              {/* Main Content */}
              <motion.main
                initial='initial'
                animate='in'
                exit='out'
                variants={pageVariants}
                transition={pageTransition}
                className='relative z-10'
              >
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                  <div id='main-content' className='flex-1' tabIndex={-1}>
                    <React.Suspense
                      fallback={
                        <LoadingSpinner size='lg' message='Loading page...' />
                      }
                    >
                      <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/services/*' element={<ServicesPage />} />
                        <Route path='/blog' element={<BlogPage />} />
                        <Route path='/blog/:slug' element={<BlogPage />} />

                        {/* 404 Fallback */}
                        <Route
                          path='*'
                          element={
                            <div className='min-h-screen flex items-center justify-center'>
                              <div className='text-center'>
                                <h1 className='text-6xl font-bold text-gray-300 mb-4'>
                                  404
                                </h1>
                                <p className='text-xl text-gray-600 mb-8'>
                                  Page not found
                                </p>
                                <a
                                  href='/'
                                  className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                                >
                                  Return Home
                                </a>
                              </div>
                            </div>
                          }
                        />
                      </Routes>
                    </React.Suspense>
                  </div>
                </div>
              </motion.main>

              {/* Footer */}
              <Footer />
            </EnhancedErrorBoundary>
          </div>
        </Router>
      </UserFriendlyErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
