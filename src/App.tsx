import React, { Suspense, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

// Import components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import LoadingSpinner from '../app/components/LoadingSpinner';
<<<<<<< HEAD
// import performanceOptimizer from './utils/performanceOptimizer';
=======
<<<<<<< HEAD
// import performanceOptimizer from './utils/performanceOptimizer';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-241d
>>>>>>> 37545c2e32f35044aa55b03169325560ba719e8b

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 37545c2e32f35044aa55b03169325560ba719e8b
// const Team = () => (
//   <div className='min-h-screen flex items-center justify-center bg-gray-50'>
//     <div className='text-center'>
//       <h1 className='text-4xl font-bold text-gray-900 mb-4'>Our Team</h1>
//       <p className='text-xl text-gray-600'>Meet our expert professionals</p>
//     </div>
//   </div>
// );

// const Privacy = () => (
//   <div className='min-h-screen flex items-center justify-center bg-gray-50'>
//     <div className='text-center'>
//       <h1 className='text-4xl font-bold text-gray-900 mb-4'>Privacy Policy</h1>
//       <p className='text-xl text-gray-600'>Your privacy is important to us</p>
//     </div>
//   </div>
// );

// const Terms = () => (
//   <div className='min-h-screen flex items-center justify-center bg-gray-50'>
//     <div className='text-center'>
//       <h1 className='text-4xl font-bold text-gray-900 mb-4'>
//         Terms of Service
//       </h1>
//       <p className='text-xl text-gray-600'>Terms and conditions</p>
//     </div>
//   </div>
// );
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-241d
>>>>>>> 37545c2e32f35044aa55b03169325560ba719e8b

function App(): React.JSX.Element {
  const initializeOptimizations = useCallback(() => {
    try {
<<<<<<< HEAD
      console.log('App initialized successfully');
<<<<<<< HEAD
=======
    } catch (error) {
      console.error('Failed to initialize app:', error);
    }
  }, []);

  useEffect(() => {
    // Initialize basic optimizations
    const initializeOptimizations = () => {
      try {
        console.log('All optimization systems initialized successfully');
      } catch (error) {
        console.error('Failed to initialize optimization systems:', error);
      }
    };

    // Preload critical resources
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Preload critical pages
        import('./pages/Home');
        import('./pages/About');
      });
=======
      console.log('All optimization systems initialized successfully');
>>>>>>> 37545c2e32f35044aa55b03169325560ba719e8b
      
      // Preload critical resources
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Preload critical pages
          import('./pages/Home');
          import('./pages/About');
        });
      }
    } catch (error) {
<<<<<<< HEAD
      console.error('Failed to initialize app:', error);
=======
      console.error('Failed to initialize optimization systems:', error);
>>>>>>> cursor/fix-errors-and-merge-to-main-241d
>>>>>>> 37545c2e32f35044aa55b03169325560ba719e8b
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

<<<<<<< HEAD
export default App;
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

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  override componentDidCatch(_error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', errorInfo);
  }

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
>>>>>>> cursor/fix-errors-and-merge-to-main-241d
