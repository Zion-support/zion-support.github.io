import React, { memo, useMemo, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import HomePage from './app/page';

// Memoized components for better performance
const UnifiedContentPromotion = memo(() => (
  <div className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-bold mb-4'>Latest AI Innovations</h2>
      <p className='text-xl'>
        Discover cutting-edge AI solutions for your business
      </p>
    </div>
  </div>
));
const InteractiveAIROICalculator = memo(() => (
  <div className='bg-gray-50 py-16'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-bold mb-4'>AI ROI Calculator</h2>
      <p className='text-xl text-gray-600'>
        Calculate your potential AI investment returns
      </p>
    </div>
  </div>
));
const ContentShowcase = memo(() => (
  <div className='py-16'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-bold mb-4'>Featured Content</h2>
      <p className='text-xl text-gray-600'>
        Explore our latest insights and case studies
      </p>
    </div>
  </div>
));
const InteractiveContentShowcase2026 = memo(() => (
  <div className='bg-blue-50 py-16'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-bold mb-4'>2026 Content Showcase</h2>
      <p className='text-xl text-gray-600'>
        Latest trends and innovations for 2026
      </p>
    </div>
  </div>
));
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
  </div>
));
const App = () => {
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
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </HelmetProvider>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;
