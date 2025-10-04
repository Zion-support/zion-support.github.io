<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import core components
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';

// Simple Home component
const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Advanced AI and IT Solutions for Modern Businesses
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Solutions</h3>
              <p className="text-gray-600">Cutting-edge artificial intelligence implementations</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IT Infrastructure</h3>
              <p className="text-gray-600">Robust and scalable technology infrastructure</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Services</h3>
              <p className="text-gray-600">Comprehensive cloud migration and management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

=======
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';

// Pages
import HomePage from './page';

<<<<<<< HEAD
// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));
const BlogPage = lazy(() => import('./pages/Blog'));
const ServicesPage = lazy(() => import('./pages/Services'));
const TeamPage = lazy(() => import('./pages/Team'));
const PrivacyPage = lazy(() => import('./pages/Privacy'));
const TermsPage = lazy(() => import('./pages/Terms'));

// Performance monitoring state
>>>>>>> 88d0ea4f423ef5f1f930f657abc08e3e473524d9
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <SEOHead />
          <Header />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/contact" element={<Home />} />
              <Route path="/services" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
=======
// Utils
import {
  setupGlobalErrorHandling,
  monitorPerformance,
} from '../utils/errorHandling';
import { performanceOptimizer } from '../utils/performanceOptimizer';

// Styles
import '../src/index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    setupGlobalErrorHandling();

    // Initialize performance monitoring
    monitorPerformance();

    // Initialize performance optimizer
    performanceOptimizer.clearMetrics();

    console.log(
      '🚀 Zion Tech Group App initialized with comprehensive monitoring',
    );
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer>
          <AccessibilityEnhancer>
            <Router>
              <div className='App'>
                {/* Skip to main content link for accessibility */}
                <a
                  href='#main-content'
                  className='skip-link'
                  onClick={e => {
                    e.preventDefault();
                    const main =
                      document.querySelector('main') ||
                      document.querySelector('#main-content');
                    if (main) {
                      main.focus();
                      main.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Skip to main content
                </a>

                <Routes>
                  <Route path='/' element={<HomePage />} />
                  {/* Add more routes as needed */}
                </Routes>

                {/* Performance Dashboard */}
                <PerformanceDashboard />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOOptimizer>
      </ErrorBoundary>
>>>>>>> cursor/fix-errors-and-merge-to-main-80bc
    </HelmetProvider>
  );
};

export default App;
=======
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AppRouter } from './router';

// import { resourcePreloader } from './utils/resourcePreloader';
// import { criticalCSSManager } from './utils/criticalCSSManager';
// import { sriUtility } from './security/sriUtility';
// import { csrfProtection } from './security/csrfProtection';
// import { structuredDataManager } from './seo/structuredDataManager';
// import { keyboardNavigationManager } from './accessibility/keyboardNavigationManager';
// import { screenReaderSupport } from './accessibility/screenReaderSupport';
import './index.css';
import { securityManager as enhancedSecurityManager } from './utils/securityHeaders';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';
import SEOOptimizer from './components/SEOOptimizer';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';
import PerformanceMonitor from './components/PerformanceMonitor';
import PerformanceOptimizer from './components/PerformanceOptimizer';

// Local stub to avoid type errors when optional performance init is not present
const initializePerformanceEnhancements = (): void => {};

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

interface WindowWithEnhancements extends Window {
  advancedPerformanceOptimizer?: { initialize?: () => void };
  advancedSEOOptimizer?: { initialize?: () => void };
  advancedSecurityManager?: { initialize?: () => void };
  advancedAnalytics?: { initialize?: () => void };
  advancedErrorHandler?: { initialize?: () => void };
  advancedCachingSystem?: { initialize?: () => void };
  advancedUXOptimizer?: { initialize?: () => void };
  advancedTestingFramework?: { initialize?: () => void };
  advancedI18n?: { initialize?: () => void };
  enhancements?: Record<string, unknown>;
  performanceOptimizer?: unknown;
  seoOptimizer?: unknown;
  accessibilityEnhancer?: unknown;
  securityManager?: unknown;
  analytics?: unknown;
  errorHandler?: unknown;
  cachingSystem?: unknown;
  uxOptimizer?: unknown;
  testingFramework?: unknown;
  i18n?: unknown;
}

interface SecurityManager {
  initialize?: () => void;
}

export default function App(): React.JSX.Element {
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  interface SEOData {
    title: string;
    description: string;
    canonical: string;
  }

  const seoDataForOptimizer: SEOData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises.',
    canonical: typeof window !== 'undefined' ? window.location.href : 'https://zion.app/',
  }), []);

  // Simple hotkeys for demo toggles
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.ctrlKey || !e.shiftKey) return;
      switch (e.key.toLowerCase()) {
        case 'p':
          e.preventDefault();
          setShowPerformanceOptimizer((v) => !v);
          break;
        case 'm':
          e.preventDefault();
          setShowPerformanceMonitor((v) => !v);
          break;
        default:
          break;
      }
      try {
        if (enhancedSecurityManager && typeof (enhancedSecurityManager as SecurityManager).initialize === 'function') {
          (enhancedSecurityManager as SecurityManager).initialize?.();
        }
      
        // Initialize new performance and accessibility enhancements
        initializePerformanceEnhancements();
        accessibilityEnhancer.initialize();
      
      // Initialize advanced optimizers
      // Guard optional advanced systems if present in global scope
      const windowWithEnhancements = window as WindowWithEnhancements;
      const advancedPerformanceOptimizer = windowWithEnhancements.advancedPerformanceOptimizer;
      const advancedSEOOptimizer = windowWithEnhancements.advancedSEOOptimizer;
      const advancedSecurityManager = windowWithEnhancements.advancedSecurityManager;
      const advancedAnalytics = windowWithEnhancements.advancedAnalytics;
      const advancedErrorHandler = windowWithEnhancements.advancedErrorHandler;
      const advancedCachingSystem = windowWithEnhancements.advancedCachingSystem;
      const advancedUXOptimizer = windowWithEnhancements.advancedUXOptimizer;
      const advancedTestingFramework = windowWithEnhancements.advancedTestingFramework;
      const advancedI18n = windowWithEnhancements.advancedI18n;

      advancedPerformanceOptimizer?.initialize?.();
      advancedSEOOptimizer?.initialize?.();
      accessibilityEnhancer.initialize();
      advancedSecurityManager?.initialize?.();
      advancedAnalytics?.initialize?.();
      // advancedErrorHandler is initialized in constructor
      advancedCachingSystem?.initialize?.();
      advancedUXOptimizer?.initialize?.();
      advancedTestingFramework?.initialize?.();
      advancedI18n?.initialize?.();
      // Store enhancements globally for debugging
      windowWithEnhancements.enhancements = {
        performanceOptimizer: advancedPerformanceOptimizer,
        seoOptimizer: advancedSEOOptimizer,
        accessibilityEnhancer: accessibilityEnhancer,
        securityManager: advancedSecurityManager,
        analytics: advancedAnalytics,
        errorHandler: advancedErrorHandler,
        cachingSystem: advancedCachingSystem,
        uxOptimizer: advancedUXOptimizer
      };
      windowWithEnhancements.performanceOptimizer = advancedPerformanceOptimizer;
      windowWithEnhancements.seoOptimizer = advancedSEOOptimizer;
      windowWithEnhancements.accessibilityEnhancer = accessibilityEnhancer;
      windowWithEnhancements.securityManager = advancedSecurityManager;
      windowWithEnhancements.analytics = advancedAnalytics;
      windowWithEnhancements.errorHandler = advancedErrorHandler;
      windowWithEnhancements.cachingSystem = advancedCachingSystem;
      windowWithEnhancements.uxOptimizer = advancedUXOptimizer;
      windowWithEnhancements.testingFramework = advancedTestingFramework;
      windowWithEnhancements.i18n = advancedI18n;
    } catch (error) {
      console.error('Error initializing enhancements:', error);
    }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleRemoveNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <EnhancedErrorBoundary>
      <SEOOptimizer title={seoDataForOptimizer.title} description={seoDataForOptimizer.description} canonicalUrl={seoDataForOptimizer.canonical} />
      <AdvancedAnalytics enableConversionTracking enablePerformanceTracking enableErrorTracking />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AppRouter />

        {showPerformanceOptimizer && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Optimizer</h2>
                <button onClick={() => setShowPerformanceOptimizer(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
              </div>
              <PerformanceOptimizer isVisible={true} onClose={() => setShowPerformanceOptimizer(false)} />
            </div>
          </div>
        )}

        {showPerformanceMonitor && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Monitor</h2>
                <button onClick={() => setShowPerformanceMonitor(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
              </div>
              <PerformanceMonitor showDashboard={true} />
            </div>
          </div>
        )}

        <NotificationSystem notifications={notifications} onRemove={handleRemoveNotification} />
      </div>
    </EnhancedErrorBoundary>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-7608
