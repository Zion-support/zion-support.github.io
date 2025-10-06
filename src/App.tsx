import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { PromotionalBanner } from './components/PromotionalBanner';
import { NewContentPromotionalBanner } from './components/NewContentPromotionalBanner';
// Removed direct import to avoid name collision with lazy import below
import { ServicesHighlight } from './components/ServicesHighlight';
import { LoggingTest } from './components/LoggingTest';
import './index.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Team = lazy(() => import('./pages/Team'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function App() {
  useEffect(() => {
    // Initialize all optimization systems
    const initializeOptimizations = () => {
      try {
        // Initialize performance monitoring
        performanceOptimizer.startPerformanceMonitoring();
        performanceMonitor.startMonitoring();
        
        // Initialize security enhancements
        // securityEnhancer.setupSecurityMonitoring();
        
        // Initialize SEO tracking
        // seoOptimizer.trackPageView();
        
        // Set up error reporting
        // errorHandler.setReportingEnabled(true);
        
        console.log('All optimization systems initialized successfully');
      } catch (error) {
        console.error('Failed to initialize optimization systems:', error);
        // errorHandler.handleError({
        //   type: 'Initialization Error' 
        //   message: 'Failed to initialize optimization systems' 
        //   error: error.message 
        //   timestamp: new Date().toISOString()
        // });
      }
    };

    // Initialize optimizations after component mount
    initializeOptimizations();

    // Cleanup on unmount
    return () => {
      performanceOptimizer.cleanup();
      performanceMonitor.stopMonitoring();
    };
  }, []);

  return (
    <div>
      {/* <EnhancedSEO /> */}
      <Router>
        <Suspense fallback={<EnhancedLoading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/team' element={<Team />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/terms' element={<Terms />} />
          </Routes>
        </Suspense>
      </Router>
      <SystemMonitor />
    </div>
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

// Simple Error Boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
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

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                    <p className="text-gray-600 mb-8">Page not found</p>
                    <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;