import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import ModernHeader from './components/Header';
import ModernFooter from './components/Footer';
import ModernHomepage from './components/LatestContentBanner2025';
import SEOOptimizer from './components/SEOOptimizer';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';
import PerformanceMonitor from './components/PerformanceMonitor';
import PerformanceOptimizer from './components/PerformanceOptimizer';
// import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Types and interfaces
interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
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
  enhancements?: any;
  performanceOptimizer?: any;
  seoOptimizer?: any;
  securityManager?: any;
  analytics?: any;
  errorHandler?: any;
  cachingSystem?: any;
  uxOptimizer?: any;
  testingFramework?: any;
  i18n?: any;
}

// Initialize performance enhancements function
const initializePerformanceEnhancements = () => {
  // Performance enhancement initialization logic
  console.log('Performance enhancements initialized');
};

// Simple placeholder components for other routes
const ServicesPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
      <p className="text-lg text-gray-600">Comprehensive AI and IT solutions for modern enterprises.</p>
    </div>
  </div>
);

const CaseStudiesPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Case Studies</h1>
      <p className="text-lg text-gray-600">Real-world success stories from our clients.</p>
    </div>
  </div>
);

const BlogPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
      <p className="text-lg text-gray-600">Latest insights and breakthroughs in AI technology.</p>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
      <p className="text-lg text-gray-600">Leading the future of AI and autonomous systems.</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <a title="Internal link" href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <a title="Internal link" href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Address</h3>
              <p className="text-gray-600">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// App Router Component
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<ModernHomepage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/case-studies" element={<CaseStudiesPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);

// Main App Component
const App: React.FC = () => {
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

  // Simple hotkeys for demo toggles and initialization
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
    };

    window.addEventListener('keydown', onKeyDown);
    
    // Initialize performance enhancements
    try {
      initializePerformanceEnhancements();
    } catch (error) {
      console.error('Error initializing enhancements:', error);
    }

    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleRemoveNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <EnhancedErrorBoundary>
      {/* <AccessibilityEnhancer> */}
        <SEOOptimizer title={seoDataForOptimizer.title} description={seoDataForOptimizer.description} canonicalUrl={seoDataForOptimizer.canonical} />
        <AdvancedAnalytics enableConversionTracking enablePerformanceTracking enableErrorTracking />
        <div className="min-h-screen bg-white">
          <ModernHeader />
          <main>
            <AppRouter />
          </main>
          <ModernFooter />
        </div>

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
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Monitor</h2>
                <button onClick={() => setShowPerformanceMonitor(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
              </div>
              <PerformanceMonitor />
            </div>
          </div>
        )}

        <NotificationSystem notifications={notifications} onRemove={handleRemoveNotification} />
      {/* </AccessibilityEnhancer> */}
    </EnhancedErrorBoundary>
  );
};
export default App;