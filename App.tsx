<<<<<<< HEAD
import React, { memo, useMemo, useCallback, Suspense } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Memoized components for better performance
const UnifiedContentPromotion = memo(() => (
  <div className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-bold mb-4'>Latest AI Innovations</h2>
      <p className='text-xl'>
        Discover cutting-edge AI solutions for your business
      </p>
=======
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { HelmetProvider } from 'react-helmet-async';
import './src/index.css';
=======
import './assets/style.css';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-fe96

// Import page components
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import ServicesPage from './app/services/page';
import TeamPage from './app/team/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';

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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
    </div>
  </div>
));

<<<<<<< HEAD
const InteractiveAIROICalculator = memo(() => (
  <div className='bg-gray-50 py-16'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-bold mb-4'>AI ROI Calculator</h2>
      <p className='text-xl text-gray-600'>
        Calculate your potential AI investment returns
      </p>
=======
const Services = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
      <p className="text-xl text-gray-600">Comprehensive AI and IT Solutions</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
    </div>
  </div>
));

<<<<<<< HEAD
const ContentShowcase = memo(() => (
  <div className='py-16'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-bold mb-4'>Featured Content</h2>
      <p className='text-xl text-gray-600'>
        Explore our latest insights and case studies
      </p>
=======
const Blog = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
      <p className="text-xl text-gray-600">Latest AI and Technology Insights</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
    </div>
  </div>
));

<<<<<<< HEAD
const InteractiveContentShowcase2026 = memo(() => (
  <div className='bg-blue-50 py-16'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-bold mb-4'>2026 Content Showcase</h2>
      <p className='text-xl text-gray-600'>
        Latest trends and innovations for 2026
      </p>
=======
const Contact = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-xl text-gray-600">Get in touch with our experts</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
    </div>
  </div>
));
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cea4
// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
interface ErrorBoundaryProps {
  children: React.ReactNode;
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cea4
  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error Boundary caught an error:', error, errorInfo);
  }
  override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-4">
              We're working to fix this issue. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
// Loading component
const LoadingSpinner = memo(() => (
  <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
    <div className="text-gray-500">Loading...</div>
=======
const Team = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
      <p className="text-xl text-gray-600">Meet our expert professionals</p>
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
  </div>
));
<<<<<<< HEAD

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

<<<<<<< HEAD
  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error Boundary caught an error:', error, errorInfo);
=======
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Add error reporting service here
      console.log('Error reported to monitoring service');
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
  }

  override render() {
    if (this.state.hasError) {
<<<<<<< HEAD
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-4">
              We're sorry, but something unexpected happened.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Reload Page
=======
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Try again
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cea4
export default function App() {
  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description:
        'Leading provider of AI-powered enterprise solutions and digital transformation services',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US',
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
      ],
      offers: {
        '@type': 'Offer',
        name: 'AI Enterprise Transformation Services',
        description:
          'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
        price: '50000',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    }),
    []
  );
  // Performance optimization: Preload critical resources
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
      // Preload critical images
      const preloadImages = [
        'https://ziontechgroup.com/og-image.jpg',
        'https://ziontechgroup.com/logo.png'
      ];
      preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
      // Add performance monitoring
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (perfData) {
            console.log('Page Load Performance:', {
              domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
              loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
              totalTime: perfData.loadEventEnd - perfData.fetchStart
            });
          }
        });
      }
    }
  }, []);
  // Memoized event handlers for better performance
  const handleNewsletterSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const email = (target.elements.namedItem('email') as HTMLInputElement)?.value;
    if (email) {
      console.log('Newsletter signup:', email);
      // Add actual newsletter signup logic here
      alert('Thank you for subscribing!');
    }
  }, []);
  const handlePhoneClick = useCallback(() => {
    // Track phone clicks for analytics
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
      ((window as unknown as { gtag: Function }).gtag)('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
=======
export { AppErrorBoundary as ErrorBoundary };

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      console.log('App initialized');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-fe96
    }
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
          <title>Zion Tech Group - AI & IT Solutions</title>
          <meta
            name="description"
            content="Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology."
          />
          <meta name="keywords" content="AI, artificial intelligence, enterprise solutions, digital transformation, IT services" />
          <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta property="og:description" content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta name="twitter:description" content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains" />
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
        
        <div className="min-h-screen bg-white">
          <Suspense fallback={<LoadingSpinner />}>
            <UnifiedContentPromotion />
            <InteractiveAIROICalculator />
            <ContentShowcase />
            <InteractiveContentShowcase2026 />
          </Suspense>
          
          {/* Scroll to top button */}
          <button
            onClick={handleScrollToTop}
            className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </HelmetProvider>
    </ErrorBoundary>
  );
}