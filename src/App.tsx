import { Suspense, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import performanceOptimizer from './utils/performanceOptimizer';
import './index.css';

// Simple placeholder components
const Home = () => <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Zion Tech Group</h1>
    <p className="text-xl text-gray-600">Advanced AI and IT Solutions</p>
  </div>
</div>;

const About = () => <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
    <p className="text-xl text-gray-600">Leading AI and IT Solutions Provider</p>
  </div>
</div>;

const Services = () => <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
    <p className="text-xl text-gray-600">Comprehensive AI and IT Solutions</p>
  </div>
</div>;

const Blog = () => <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
    <p className="text-xl text-gray-600">Latest AI and Technology Insights</p>
  </div>
</div>;

const Contact = () => <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
    <p className="text-xl text-gray-600">Get in touch with our experts</p>
  </div>
</div>;

const Team = () => <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
    <p className="text-xl text-gray-600">Meet our expert professionals</p>
  </div>
</div>;

const Privacy = () => <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
    <p className="text-xl text-gray-600">Your privacy is important to us</p>
  </div>
</div>;

const Terms = () => <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
    <p className="text-xl text-gray-600">Terms and conditions</p>
  </div>
</div>;

function App() {
  const initializeOptimizations = useCallback(() => {
    try {
      // Initialize performance optimizer
      performanceOptimizer.lazyLoadImages();
      
      // Preload critical resources
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Preload critical pages
          import('./pages/Home');
          import('./pages/About');
        });
      }
    } catch (error) {
      console.error('Failed to initialize app:', error);
    }
  }, []);

  useEffect(() => {
    // Initialize basic optimizations

    // Initialize optimizations after component mount
    initializeOptimizations();
  }, []);

  return (
    <div>
      <Router>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>}>
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