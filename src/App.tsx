import React, { Suspense, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

// Import components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';

// Import page components
import AboutPage from '../app/about/page';
import PrivacyPage from '../app/privacy/page';
import TeamPage from '../app/team/page';
import TermsPage from '../app/terms/page';

// Simple placeholder components
const Home = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>
        Welcome to Zion Tech Group
      </h1>
      <p className='text-xl text-gray-600'>Advanced AI and IT Solutions</p>
    </div>
  </div>
);

const Services = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>Our Services</h1>
      <p className='text-xl text-gray-600'>Comprehensive AI and IT Solutions</p>
    </div>
  </div>
);

const Blog = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>Blog</h1>
      <p className='text-xl text-gray-600'>Latest AI and Technology Insights</p>
    </div>
  </div>
);

const Contact = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>Contact Us</h1>
      <p className='text-xl text-gray-600'>Get in touch with our experts</p>
    </div>
  </div>
);

function App(): React.JSX.Element {
  const initializeOptimizations = useCallback(() => {
    try {
      console.log('All optimization systems initialized successfully');
      
      // Preload critical resources
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Preload critical pages
          import('./pages/Home');
          import('./pages/About');
        });
      }
    } catch (error) {
      console.error('Failed to initialize optimization systems:', error);
    }

    initializeOptimizations();
  }, []);

  useEffect(() => {
    initializeOptimizations();
  }, [initializeOptimizations]);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer>
          <AccessibilityEnhancer>
            <Router>
              <div className='App'>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/team' element={<TeamPage />} />
                    <Route path='/privacy' element={<PrivacyPage />} />
                    <Route path='/terms' element={<TermsPage />} />
                  </Routes>
                </Suspense>
                <PerformanceMonitor>
                  <div></div>
                </PerformanceMonitor>
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
