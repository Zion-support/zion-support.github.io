import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import SEOHead from './components/SEOHead';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
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
  useEffect(() => {
    // Initialize basic optimizations
    const initializeOptimizations = () => {
      try {
        console.log('App initialized successfully');
        
        // Add performance monitoring
        if (typeof window !== 'undefined' && 'performance' in window) {
          console.log('Performance monitoring enabled');
        }
      } catch (error) {
        console.error('Failed to initialize app:', error);
      }
    };

    // Initialize optimizations after component mount
    initializeOptimizations();
  }, []);

  return (
    <ErrorBoundary>
      <SEOHead />
      <PerformanceMonitor>
        <AccessibilityEnhancer>
          <Router>
            <Suspense fallback={<LoadingSpinner size="xl" fullScreen text="Loading application..." />}>
              <main id="main-content">
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
              </main>
            </Suspense>
          </Router>
        </AccessibilityEnhancer>
      </PerformanceMonitor>
    </ErrorBoundary>
  );
}

export default App;