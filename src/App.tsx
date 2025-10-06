import React, { Suspense, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

<<<<<<< HEAD
// Import components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e62
import LoadingSpinner from '../app/components/LoadingSpinner';
=======
// Import page components
import HomePage from '../app/page';
import AboutPage from '../app/about/page';
import ContactPage from '../app/contact/page';
import ServicesPage from '../app/services/page';
import TeamPage from '../app/team/page';
import PrivacyPage from '../app/privacy/page';
import TermsPage from '../app/terms/page';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc

// Simple placeholder components
const Home = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Zion Tech Group</h1>
      <p className="text-xl text-gray-600">Advanced AI and IT Solutions</p>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
      <p className="text-xl text-gray-600">Leading AI and IT Solutions Provider</p>
    </div>
  </div>
);
<<<<<<< HEAD

const Services = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
      <p className="text-xl text-gray-600">Comprehensive AI and IT Solutions</p>
    </div>
  </div>
);

const Blog = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
      <p className="text-xl text-gray-600">Latest AI and Technology Insights</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-xl text-gray-600">Get in touch with our experts</p>
    </div>
  </div>
);

const Team = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
      <p className="text-xl text-gray-600">Meet our expert professionals</p>
    </div>
  </div>
);

const Privacy = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-xl text-gray-600">Your privacy is important to us</p>
    </div>
  </div>
);

const Terms = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
      <p className="text-xl text-gray-600">Terms and conditions</p>
    </div>
  </div>
);

function App(): React.JSX.Element {
  const initializeOptimizations = useCallback(() => {
    try {
      console.log('App initialized successfully');

const Services = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
      <p className="text-xl text-gray-600">Comprehensive AI and IT Solutions</p>
    </div>
  </div>
);

const Blog = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
      <p className="text-xl text-gray-600">Latest AI and Technology Insights</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-xl text-gray-600">Get in touch with our experts</p>
    </div>
  </div>
);

const Team = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
      <p className="text-xl text-gray-600">Meet our expert professionals</p>
    </div>
  </div>
);

const Privacy = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-xl text-gray-600">Your privacy is important to us</p>
    </div>
  </div>
);

const Terms = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
      <p className="text-xl text-gray-600">Terms and conditions</p>
    </div>
  </div>
);

function App() {
  const initializeOptimizations = useCallback(() => {
    try {
      console.log('App initialized successfully');
      
      // Preload critical resources
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Preload critical pages
          import('./pages/Home');
          import('./pages/About');
        });
// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));

// Import components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import LoadingSpinner from '../app/components/LoadingSpinner';

function App() {
  useEffect(() => {
    // Initialize basic optimizations
    const initializeOptimizations = () => {
      try {
        console.log('App initialized successfully');
      } catch (error) {
        console.error('Failed to initialize optimization systems:', error);
>>>>>>> cursor/fix-errors-and-merge-to-main-cfe1
      }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e62
    } catch (error) {
      console.error('Failed to initialize app:', error);
    }
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
              <div className="App">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                  </Routes>
                </Suspense>
                <PerformanceMonitor>
                  <div></div>
                </PerformanceMonitor>
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOOptimizer>
        <Router>
          <div className="App">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<Team />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e62
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
export default App;
>>>>>>> cursor/fix-errors-and-merge-to-main-cfe1
=======

const Services = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
      <p className="text-xl text-gray-600">Comprehensive AI and IT Solutions</p>
    </div>
  </div>
);

const Blog = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
      <p className="text-xl text-gray-600">Latest AI and Technology Insights</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-xl text-gray-600">Get in touch with our experts</p>
    </div>
  </div>
);

const Team = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
      <p className="text-xl text-gray-600">Meet our expert professionals</p>
    </div>
  </div>
);

const Privacy = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-xl text-gray-600">Your privacy is important to us</p>
    </div>
  </div>
);

const Terms = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
      <p className="text-xl text-gray-600">Terms and conditions</p>
    </div>
  </div>
);

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

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Add error reporting service here
      console.log('Error reported to monitoring service');
    }
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

// Simple Loading Spinner
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Initialize basic optimizations
    const initializeOptimizations = () => {
      try {
        console.log('App initialized successfully');
      } catch (error) {
        console.error('Failed to initialize app:', error);
      }
    };

    // Initialize optimizations after component mount
    initializeOptimizations();
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
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
                <Route path="/blog" element={<Blog />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
