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
  error?: Error;
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error Boundary caught an error:', error, errorInfo);
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
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
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Spinner Component
const LoadingSpinner = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
));

// Main App Component
const App: React.FC = () => {
  const structuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered enterprise solutions and digital transformation services',
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
      addressCountry: 'US',
      addressLocality: 'Wilmington',
      addressRegion: 'DE',
    },
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
    ],
    offers: {
      '@type': 'Offer',
      description: 'AI Enterprise Transformation Services',
      price: '300% ROI Guaranteed',
      priceCurrency: 'USD',
    },
  }), []);

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
  const handleNewsletterSignup = useCallback((email: string) => {
    if (email) {
      console.log('Newsletter signup:', email);
      // Add actual newsletter signup logic here
      alert('Thank you for subscribing!');
    }
  }, []);

  const handlePhoneClick = useCallback(() => {
    // Track phone clicks for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
        </div>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;