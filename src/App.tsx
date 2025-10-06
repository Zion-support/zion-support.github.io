import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import performanceOptimizer from './utils/performanceOptimizer';
import './index.css';

// Import page components
import AboutPage from '../app/about/page';
import ContactPage from '../app/contact/page';
import EnterprisePage from '../app/enterprise/page';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));

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

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    performanceOptimizer.lazyLoadImages();
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics = performanceOptimizer.measurePageLoad();
      if (metrics) {
        performanceOptimizer.reportWebVitals(metrics);
      }
    }
    
    console.log('Performance monitoring initialized');
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className='App'>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading...</p>
            </div>
          </div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/enterprise' element={<EnterprisePage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
