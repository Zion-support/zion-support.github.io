<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
=======
<<<<<<< HEAD
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
<<<<<<< HEAD
import { Suspense, useEffect } from 'react';
=======
<<<<<<< HEAD
import { Suspense, useEffect } from 'react';
=======
<<<<<<< HEAD
import React, { Suspense, useEffect } from 'react';
=======
<<<<<<< HEAD
import React, { Suspense, useEffect } from 'react';
=======
<<<<<<< HEAD
import { Suspense, useEffect } from 'react';
=======
<<<<<<< HEAD
import React, { Suspense, useEffect } from 'react';
=======
<<<<<<< HEAD
import { Suspense, useEffect } from 'react';
=======
import React, { Suspense, useEffect } from 'react';
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import performanceOptimizer from './utils/performanceOptimizer';
=======
<<<<<<< HEAD
// import performanceOptimizer from './utils/performanceOptimizer'; // Unused import
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
import './index.css';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d

// Components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import LoadingSpinner from './components/LoadingSpinner';

<<<<<<< HEAD
// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
=======
const About = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>About Us</h1>
      <p className='text-xl text-gray-600'>
        Leading AI and IT Solutions Provider
      </p>
    </div>
  </div>
);

<<<<<<< HEAD
=======
// About component is now imported from app/about/page

<<<<<<< HEAD
function App() {
  const initializeOptimizations = useCallback(() => {
    try {
      // Initialize performance optimizer
      // performanceOptimizer.initialize(); // Method doesn't exist
      
      // Preload critical resources
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Preload critical pages
          import('./pages/Home');
          import('./pages/About');
        });
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
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

const Team = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>Our Team</h1>
      <p className='text-xl text-gray-600'>Meet our expert professionals</p>
    </div>
  </div>
);

const Privacy = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>Privacy Policy</h1>
      <p className='text-xl text-gray-600'>Your privacy is important to us</p>
    </div>
  </div>
);

const Terms = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>
        Terms of Service
      </h1>
      <p className='text-xl text-gray-600'>Terms and conditions</p>
    </div>
  </div>
);

function App(): React.JSX.Element {
  useEffect(() => {
    // Initialize basic optimizations
    const initializeOptimizations = () => {
      try {
<<<<<<< HEAD
        // All optimization systems initialized successfully
      } catch (error) {
        // Failed to initialize optimization systems
=======
<<<<<<< HEAD
        console.log('All optimization systems initialized successfully');
      } catch (error) {
        console.error('Failed to initialize optimization systems:', error);
=======
        // App initialized successfully
      } catch (error) {
<<<<<<< HEAD
        // Failed to initialize app
=======
        console.error('Failed to initialize app:', error);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
        console.log('All optimization systems initialized successfully');
      } catch (error) {
        console.error('Failed to initialize optimization systems:', error);
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
      }
    };

    // Initialize optimizations after component mount
    initializeOptimizations();
  }, []);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e98c

const App: React.FC = () => {
  return (
<<<<<<< HEAD
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer>
          <AccessibilityEnhancer>
            <Router>
              <div className="App">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                  </Routes>
                </Suspense>
                <PerformanceMonitor />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
=======
    <div>
      <Router>
<<<<<<< HEAD
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading...</p>
              </div>
            </div>
          }
        >
<<<<<<< HEAD
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
=======
<<<<<<< HEAD
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='/privacy' element={<PrivacyPage />} />
            <Route path='/terms' element={<TermsPage />} />
>>>>>>> main
>>>>>>> main
          </Routes>
        </Suspense>
      </Router>
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
  );
};

<<<<<<< HEAD
export default App;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======
// Simple Error Boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
  static getDerivedStateFromError(_error: Error) { // eslint-disable-line @typescript-eslint/no-unused-vars
    return { hasError: true };
  }

<<<<<<< HEAD
  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Error caught by boundary
=======
<<<<<<< HEAD
>>>>>>> main
  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Log to external service in production
    if (process.env['NODE_ENV'] === 'production') {
      // Add error reporting service here
      console.log('Error reported to monitoring service');
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

<<<<<<< HEAD
=======
=======
  override componentDidCatch(_error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', errorInfo);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
  }

>>>>>>> main
>>>>>>> main
  override render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };

export default App;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e98c
=======
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
