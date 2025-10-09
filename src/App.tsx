'use client';
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load components for better performance
const HomePage = lazy(() => import('../app/page'));

// Import enhancement utilities
import PerformanceEnhancer from './utils/performanceEnhancer';
import SEOEnhancer from './utils/seoEnhancer';
import AccessibilityEnhancer from './utils/accessibilityEnhancer';
import SecurityEnhancer from './utils/securityEnhancer';
import UserExperienceEnhancer from './utils/userExperienceEnhancer';

// Import components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancerComponent from './components/AccessibilityEnhancer';
import SecurityEnhancerComponent from './components/SecurityEnhancer';
import UserExperienceEnhancerComponent from './components/UserExperienceEnhancer';
import Analytics from './components/Analytics';

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [enhancers, setEnhancers] = useState<{
    performance?: PerformanceEnhancer;
    seo?: SEOEnhancer;
    accessibility?: AccessibilityEnhancer;
    security?: SecurityEnhancer;
    ux?: UserExperienceEnhancer;
  }>({});

  useEffect(() => {
    initializeEnhancers();
  }, []);

  const initializeEnhancers = async () => {
    try {
      // Initialize performance enhancer
      const performanceEnhancer = new PerformanceEnhancer({
        enableImageOptimization: true,
        enableLazyLoading: true,
        enableCodeSplitting: true,
        enablePrefetching: true,
        enableServiceWorker: true,
        enableResourceHints: true,
        enableCompression: true,
        enableCaching: true
      });

      // Initialize SEO enhancer
      const seoEnhancer = new SEOEnhancer({
        title: 'Zion Tech Group - Advanced AI and IT Solutions',
        description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
        keywords: ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services'],
        canonicalUrl: 'https://ziontechgroup.com',
        ogImage: 'https://ziontechgroup.com/og-image.jpg',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'TechCompany',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          services: [
            'AI Solutions',
            'Quantum Computing',
            'Autonomous Systems',
            'Digital Transformation',
            'Cloud Services',
            'Automation',
            'Business Intelligence'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: 'en'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US'
          }
        },
        robots: 'index, follow',
        language: 'en',
        author: 'Zion Tech Group',
        publisher: 'Zion Tech Group'
      });

      // Initialize accessibility enhancer
      const accessibilityEnhancer = new AccessibilityEnhancer({
        enableKeyboardNavigation: true,
        enableScreenReader: true,
        enableHighContrast: true,
        enableFocusManagement: true,
        enableReducedMotion: true,
        enableColorBlindSupport: true,
        enableVoiceControl: true
      });

      // Initialize security enhancer
      const securityEnhancer = new SecurityEnhancer({
        enableCSP: true,
        enableHSTS: true,
        enableXSSProtection: true,
        enableClickjackingProtection: true,
        enableContentTypeOptions: true,
        enableReferrerPolicy: true,
        enablePermissionsPolicy: true,
        enableCORS: true,
        enableSecureCookies: true
      });

      // Initialize UX enhancer
      const uxEnhancer = new UserExperienceEnhancer({
        enableSmoothScrolling: true,
        enableLoadingStates: true,
        enableErrorBoundaries: true,
        enableAnalytics: true,
        enableNotifications: true,
        enableProgressiveWebApp: true,
        enableOfflineSupport: true,
        enablePushNotifications: false,
        enableDarkMode: true,
        enableAnimations: true
      });

      setEnhancers({
        performance: performanceEnhancer,
        seo: seoEnhancer,
        accessibility: accessibilityEnhancer,
        security: securityEnhancer,
        ux: uxEnhancer
      });

      // Optimize for Core Web Vitals
      seoEnhancer.optimizeForCoreWebVitals();

      // Generate reports (for development)
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Report:', performanceEnhancer.getMetrics());
        console.log('Accessibility Report:', accessibilityEnhancer.generateReport());
        console.log('Security Report:', securityEnhancer.generateSecurityReport());
        console.log('UX Report:', uxEnhancer.generateUXReport());
      }

      setIsInitialized(true);
    } catch (error) {
      console.error('Failed to initialize enhancers:', error);
      setIsInitialized(true); // Continue even if enhancers fail
    }
  };

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Performance Monitoring */}
            <PerformanceMonitor />
            
            {/* SEO Optimization */}
            <SEOOptimizer
              title="Zion Tech Group - Advanced AI and IT Solutions"
              description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
              keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
              canonicalUrl="https://ziontechgroup.com"
            />
            
            {/* Accessibility Enhancement */}
            <AccessibilityEnhancerComponent
              enableKeyboardNavigation={true}
              enableScreenReader={true}
              enableHighContrast={true}
              enableFocusManagement={true}
            />
            
            {/* Security Enhancement */}
            <SecurityEnhancerComponent
              enableCSP={true}
              enableHSTS={true}
              enableXSSProtection={true}
              enableClickjackingProtection={true}
            />
            
            {/* User Experience Enhancement */}
            <UserExperienceEnhancerComponent
              enableSmoothScrolling={true}
              enableLoadingStates={true}
              enableErrorBoundaries={true}
              enableAnalytics={true}
              enableNotifications={true}
            />
            
            {/* Analytics */}
            <Analytics />
            
            {/* Navigation */}
            <Navigation />
            
            {/* Main Content */}
            <main id="main-content" role="main">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            
            {/* Footer */}
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

// 404 Page Component
const NotFoundPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="cyber-button inline-flex items-center px-6 py-3 text-lg font-semibold"
      >
        Go Home
      </a>
    </div>
  </div>
);

export default App;