import React, { Suspense, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const ITConsultingPage = React.lazy(() => import('./app/it-consulting/page'));
const ITInfrastructurePage = React.lazy(() => import('./app/it-infrastructure/page'));
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'));
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'));
const SecurityPage = React.lazy(() => import('./app/security/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));

// Lazy load components
const Navigation = React.lazy(() => import('./app/components/Navigation'));
const Footer = React.lazy(() => import('./app/components/Footer'));
const PerformanceOptimizer = React.lazy(() => import('./app/components/PerformanceOptimizer'));
const SEOOptimizer = React.lazy(() => import('./app/components/SEOOptimizer'));
const AccessibilityEnhancer = React.lazy(() => import('./app/components/AccessibilityEnhancer'));

// Main page component
const HomePage = React.lazy(() => import('./app/page'));

// Loading component
const LoadingSpinner = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error; errorInfo?: React.ErrorInfo }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
    // Log error to monitoring service in production
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      // eslint-disable-next-line no-console
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix it.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
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

// Main App component
const App: React.FC = () => {
  const helmetContext = useMemo(() => ({}), []);

  return (
    <ErrorBoundary>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Zion Tech Group - Advanced AI and IT Solutions | AI Services, Cloud Infrastructure, Cybersecurity</title>
          <meta name="description" content="Leading provider of AI-powered solutions, IT consulting, cloud infrastructure, and cybersecurity services. Transform your business with cutting-edge technology solutions. Call (302) 464-0950." />
          <meta name="keywords" content="AI services, IT consulting, cloud infrastructure, cybersecurity, digital transformation, artificial intelligence, machine learning, business automation, Zion Tech Group" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <meta name="theme-color" content="#0f172a" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <link rel="canonical" href="https://ziontechgroup.com" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com/" />
          <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
          <meta property="og:description" content="Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide." />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Zion Tech Group" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ziontechgroup.com/" />
          <meta property="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
          <meta property="twitter:description" content="Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide." />
          <meta property="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
          
          {/* Additional SEO */}
          <meta name="author" content="Zion Tech Group" />
          <meta name="publisher" content="Zion Tech Group" />
          <meta name="copyright" content="Zion Tech Group" />
          <meta name="language" content="en-US" />
          <meta name="revisit-after" content="7 days" />
          <meta name="rating" content="general" />
          <meta name="distribution" content="global" />
          
          {/* Preconnect to external domains */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          
          {/* DNS Prefetch */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup",
                "https://facebook.com/ziontechgroup"
              ],
              "foundingDate": "2020",
              "numberOfEmployees": "10-50",
              "industry": "Information Technology",
              "services": [
                "AI Services",
                "IT Consulting", 
                "Cloud Infrastructure",
                "Cybersecurity",
                "Digital Transformation",
                "Micro SaaS Solutions"
              ]
            })}
          </script>
        </Helmet>
        
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Performance and SEO optimizations */}
            <Suspense fallback={null}>
              <PerformanceOptimizer />
            </Suspense>
            <Suspense fallback={null}>
              <SEOOptimizer />
            </Suspense>
            <Suspense fallback={null}>
              <AccessibilityEnhancer />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Navigation />
            </Suspense>
            
            <main id="main-content" className="min-h-screen" role="main">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  <Route path="/it-consulting" element={<ITConsultingPage />} />
                  <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                  <Route path="/security" element={<SecurityPage />} />
                  <Route path="/support" element={<SupportPage />} />
                </Routes>
              </Suspense>
            </main>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Footer />
            </Suspense>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
