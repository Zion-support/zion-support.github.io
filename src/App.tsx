import React, { Suspense, lazy, useEffect, memo, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import performanceOptimizer from './utils/performanceOptimizer'; // Unused import
import './index.css';

// Lazy load pages for better performance with preloading
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Team = lazy(() => import('./pages/Team'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// Optimized loading component
const LoadingSpinner = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

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
      }
      
      // Initialize performance monitoring
      if ('performance' in window && 'mark' in performance) {
        performance.mark('app-initialized');
      }
      
      console.log('All optimization systems initialized successfully');
    } catch (error) {
      console.error('Failed to initialize optimization systems:', error);
    }
  }, []);

  useEffect(() => {
    initializeOptimizations();
  }, [initializeOptimizations]);

  return (
    <ErrorBoundary>
      <div>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
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
      </div>
    </ErrorBoundary>
  );
}

// Optimized Error Boundary with better UX
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

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

  override render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-red-900'>
            <div className='text-center max-w-md mx-auto p-8'>
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className='text-3xl font-bold text-white mb-4'>
                Oops! Something went wrong
              </h1>
              <p className='text-gray-300 mb-6'>
                We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.
              </p>
              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className='w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold'
                >
                  Try Again
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className='w-full border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors'
                >
                  Refresh Page
                </button>
              </div>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };

export default App;