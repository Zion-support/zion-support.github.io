import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { AppRouter } from './router';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceTracker from './components/PerformanceTracker';
import { seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
// import { performanceOptimizer } from './utils/performanceOptimizations';
// import { accessibilityEnhancer } from './utils/advancedAccessibilityEnhancer';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
import WebsiteEnhancements from './components/WebsiteEnhancements';
import SEOOptimizer from './components/SEOOptimizer';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
// import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
// import { performanceAlerts } from './utils/performanceAlerts';
// import { accessibilityUtils } from './utils/accessibilityUtils';
// import { securityUtils } from './utils/securityUtils';
// import { enhancedSecurityManager } from './utils/enhancedSecurityManager';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import NotificationSystem, { Notification } from './components/NotificationSystem';
import KeyboardShortcutsHelp from './components/KeyboardShortcutsHelp';
import CommandPalette from './components/CommandPalette';
import RealTimePerformanceMonitor from './components/RealTimePerformanceMonitor';
import SystemHealthDashboard from './components/SystemHealthDashboard';
import PerformanceMetricsDashboard from './components/PerformanceMetricsDashboard';
import './index.css';

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAIDashboard, setShowAIDashboard] = useState(false);
  const [showSEOOptimizer, setShowSEOOptimizer] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [showRealTimeMetrics, setShowRealTimeMetrics] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showWebsiteEnhancements, setShowWebsiteEnhancements] = useState(false);
  const [showPerformanceMetrics, setShowPerformanceMetrics] = useState(false);
  const [showRealTimeMonitor, setShowRealTimeMonitor] = useState(false);
  const [showSystemHealth, setShowSystemHealth] = useState(false);

  // Initialize app with custom configuration
  const { isLoading, error } = usePerformanceOptimization();

  // SEO data for the current page
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered IT solutions, cloud computing, and digital transformation services.',
    keywords: 'AI, IT solutions, cloud computing, digital transformation, technology consulting',
    ogImage: '/og-image.png',
    canonical: window.location.href
  }), []);

  // Comprehensive enhancements
  // const comprehensiveEnhancements = useMemo(() => {
  //   try {
  //     return getComprehensiveEnhancements();
  //   } catch (error) {
  //     console.error('Error initializing enhancements:', error);
  //     return null;
  //   }
  // }, []);

  // Optimized keyboard handler for system dashboard toggle
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'D') {
      event.preventDefault();
      setShowSystemDashboard((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'P') {
      event.preventDefault();
      setShowPerformanceOptimizer((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
      event.preventDefault();
      setShowPerformanceMonitor((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
      event.preventDefault();
      setShowAIDashboard((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'S') {
      event.preventDefault();
      setShowSEOOptimizer((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'T') {
      event.preventDefault();
      setIsDarkMode((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'K') {
      event.preventDefault();
      setShowKeyboardHelp((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      setShowCommandPalette((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'R') {
      event.preventDefault();
      setShowRealTimeMonitor((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'H') {
      event.preventDefault();
      setShowSystemHealth((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'E') {
      event.preventDefault();
      setShowWebsiteEnhancements((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'V') {
      event.preventDefault();
      setShowPerformanceMetrics((prev: boolean) => !prev);
    }
  }, []);

  // Scroll handler for performance tracking
  const handleScroll = useCallback(() => {
    // Track scroll depth for analytics
    const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    if (scrollDepth > 0) {
      // Track scroll depth
      console.log('Scroll depth:', scrollDepth);
    }
  }, []);

  // Click handler for engagement tracking
  const handleClick = useCallback(() => {
    // Track clicks for analytics
    console.log('User click tracked');
  }, []);

  // Resource preloader
  const preloadResource = useCallback((href: string, as: string) => {
    try {
      if (typeof document !== 'undefined') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        document.head.appendChild(link);
      }
    } catch (error) {
      console.error('Error preloading resource:', error);
    }
  }, []);

  // SEO manager instance
  const seoManagerInstance = useMemo(() => ({
    updateMetaTags: (data: typeof seoData) => {
      try {
        if (typeof document !== 'undefined') {
          document.title = data.title;
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', data.description);
          }
        }
      } catch (error) {
        console.error('Error updating meta tags:', error);
      }
    }
  }), []);

  // Main initialization effect
  useEffect(() => {
    try {
      // Add performance marks for better monitoring
      if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
        performance.mark('app-init-start');
        
        // Add performance observer for better monitoring
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'navigation') {
                console.log('Navigation timing:', entry);
              }
            }
          });
          observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
        }
      }
      
      // Preload critical resources
      preloadResource('/og-image.png', 'image');
      preloadResource('/favicon.ico', 'image');

      // Use passive listeners for better performance
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('click', handleClick, { passive: true });
      document.addEventListener('keydown', handleKeyDown);

      // Initialize basic systems
      analytics.initialize();
      
      // Initialize SEO analytics
      seoAnalytics.trackPageView(window.location.pathname);
      
      // Initialize performance SEO optimizations
      performanceSEO.optimizeImages();
      performanceSEO.preloadCriticalResources();
      performanceSEO.optimizeFonts();
      performanceSEO.optimizeCSS();
      
      // Set default SEO data using the correct method
      seoManagerInstance.updateMetaTags(seoData);

      // Mark app as fully initialized
      if (typeof window !== 'undefined' && window.performance && 
          typeof performance.mark === 'function' && 
          typeof performance.measure === 'function') {
        performance.mark('app-init-complete');
        performance.measure('app-initialization', 'app-init-start', 'app-init-complete');
      }

      console.log('🚀 Zion Tech Group App initialized');

      // Cleanup function
      return () => {
        try {
          document.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('scroll', handleScroll);
          document.removeEventListener('click', handleClick);
        } catch (error) {
          console.error('Error in cleanup effect:', error);
        }
      };
    } catch (error) {
      console.error('Error in main initialization effect:', error);
    }
  }, [seoData, handleScroll, handleClick, handleKeyDown, preloadResource, seoManagerInstance]);

  // Show loading spinner while initializing
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <ModernLoadingSpinner />
      </div>
    );
  }

  // Show error boundary if there's an error
  if (error) {
    return (
      <EnhancedErrorBoundary>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
              Initialization Error
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {error.message || 'An error occurred while initializing the application.'}
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reload Application
            </button>
          </div>
        </div>
      </EnhancedErrorBoundary>
    );
  }

  return (
    <EnhancedErrorBoundary>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        {/* Performance Tracker */}
        <PerformanceTracker />
        
        {/* Notification System */}
        <NotificationSystem 
          notifications={notifications}
          onRemoveNotification={(id: string) => {
            setNotifications(prev => prev.filter(n => n.id !== id));
          }}
        />

        {/* Keyboard Shortcuts Help */}
        {showKeyboardHelp && (
          <KeyboardShortcutsHelp 
            onClose={() => setShowKeyboardHelp(false)}
          />
        )}

        {/* Command Palette */}
        {showCommandPalette && (
          <CommandPalette 
            onClose={() => setShowCommandPalette(false)}
          />
        )}

        {/* System Dashboard */}
        {showSystemDashboard && (
          <EnhancedSystemDashboard 
            onClose={() => setShowSystemDashboard(false)}
          />
        )}

        {/* Performance Optimizer */}
        {showPerformanceOptimizer && (
          <PerformanceOptimizer 
            onClose={() => setShowPerformanceOptimizer(false)}
          />
        )}

        {/* Performance Monitor */}
        {showPerformanceMonitor && (
          <PerformanceMonitor 
            onClose={() => setShowPerformanceMonitor(false)}
          />
        )}

        {/* AI Dashboard */}
        {showAIDashboard && (
          <AIPerformanceDashboard 
            onClose={() => setShowAIDashboard(false)}
          />
        )}

        {/* SEO Optimizer */}
        {showSEOOptimizer && (
          <SEOOptimizer 
            onClose={() => setShowSEOOptimizer(false)}
          />
        )}

        {/* Website Enhancements */}
        {showWebsiteEnhancements && (
          <WebsiteEnhancements 
            onClose={() => setShowWebsiteEnhancements(false)}
          />
        )}

        {/* Advanced Analytics */}
        {showRealTimeMetrics && (
          <AdvancedAnalytics 
            onClose={() => setShowRealTimeMetrics(false)}
          />
        )}

        {/* Real-time Performance Monitor */}
        {showRealTimeMonitor && (
          <RealTimePerformanceMonitor 
            onClose={() => setShowRealTimeMonitor(false)}
          />
        )}

        {/* System Health Dashboard */}
        {showSystemHealth && (
          <SystemHealthDashboard 
            onClose={() => setShowSystemHealth(false)}
          />
        )}

        {/* Performance Metrics Dashboard */}
        {showPerformanceMetrics && (
          <PerformanceMetricsDashboard 
            onClose={() => setShowPerformanceMetrics(false)}
          />
        )}

        {/* Main App Router */}
        <AppRouter />
      </div>
    </EnhancedErrorBoundary>
  );
}