import React, { useEffect, useCallback, useMemo, useState, lazy, Suspense } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { useSEOData } from './components/SEOOptimizer';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAccessibilityManager } from './utils/enhancedAccessibilityManager';
import { enhancedSEOOptimizer } from './utils/enhancedSEOOptimizer';
import { advancedErrorRecoverySystem } from './utils/advancedErrorRecoverySystem';
import { advancedCachingSystem } from './utils/advancedCachingSystem';
import { advancedSecurityManager } from './utils/advancedSecurityManager';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import EnhancedNotificationSystem from './components/EnhancedNotificationSystem';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import SEOOptimizer from './components/SEOOptimizer';
import ComprehensiveSystemDashboard from './components/ComprehensiveSystemDashboard';
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAIDashboard, setShowAIDashboard] = useState(false);
  const [showSEOOptimizer, setShowSEOOptimizer] = useState(false);
  const [showComprehensiveDashboard, setShowComprehensiveDashboard] = useState(false);
  const [isDarkMode] = useState(false);
  const [userPreferences] = useState({
    theme: 'auto',
    animations: true,
    notifications: true,
    analytics: true
  });

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);

  // Memoize SEO data to prevent unnecessary re-renders
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology', 'machine learning', 'automation', 'blockchain'],
    ogType: 'website' as const,
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image' as const
  }), []);

  // Initialize app with custom configuration
  const { isLoading, loadingProgress, handleScroll, handleClick, trackEngagement } = useAppInitialization({
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSecurity: true,
    enableAnalytics: true,
    enableNotifications: true,
    enableCaching: true,
  });

  // Optimized keyboard handler for system dashboard toggle
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey) {
      event.preventDefault();
      switch (event.key) {
        case 'D':
          setShowSystemDashboard(prev => !prev);
          break;
        case 'P':
          setShowPerformanceOptimizer(prev => !prev);
          break;
        case 'M':
          setShowPerformanceMonitor(prev => !prev);
          break;
        case 'A':
          setShowAIDashboard(prev => !prev);
          break;
        case 'S':
          setShowSEOOptimizer(prev => !prev);
          break;
        case 'C':
          setShowComprehensiveDashboard(prev => !prev);
          break;
        case 'T':
          // Theme toggle functionality can be added here
          break;
        case 'Escape':
          // Close all dashboards
          setShowSystemDashboard(false);
          setShowPerformanceOptimizer(false);
          setShowPerformanceMonitor(false);
          setShowAIDashboard(false);
          setShowSEOOptimizer(false);
          setShowComprehensiveDashboard(false);
          break;
      }
    }
  }, []);

  // Enhanced track engagement function
  const enhancedTrackEngagement = useCallback(() => {
    const timeOnPage = Date.now() - engagementData.startTime;
    seoAnalytics.trackUserEngagement(window.location.pathname, {
      timeOnPage,
      scrollDepth: engagementData.scrollDepth,
      clicks: engagementData.clicks,
    });
    trackEngagement();
  }, [engagementData.clicks, engagementData.scrollDepth, engagementData.startTime, trackEngagement]);

  // Update meta tags function
  const updateMetaTags = useCallback((data: {
    title: string;
    description: string;
    keywords: string[];
    ogType: string;
    ogUrl: string;
    ogImage: string;
    twitterCard: string;
  }) => {
    if (typeof window !== 'undefined') {
      // Update title
      document.title = data.title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      if (metaDescription) {
        metaDescription.setAttribute('content', data.description);
      }
    }
  }, []);

  // Main initialization effect
  useEffect(() => {
    try {
      const enhancements = getComprehensiveEnhancements();
      enhancements.initialize();
      
      // Initialize individual enhancement systems
      enhancedPerformanceMonitor.startMonitoring();
      enhancedAnalytics.initialize();
      advancedCacheSystem.initialize();
      new AdvancedAutomationSystem().initialize();
      new AccessibilityEnhancer().initialize();
      new SecurityEnhancer().initialize();
    } catch (error) {
      console.warn('Some enhancement systems failed to initialize:', error);
    }
    
    // Initialize basic systems
    analytics.initialize();
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.optimizeFonts();
    performanceSEO.optimizeCSS();
    
    // Initialize advanced optimization systems
    // These are initialized automatically when imported
    void performanceOptimizer;
    void accessibilityEnhancer;
    void seoOptimizer;

    // Set default SEO data using the correct method
    seoManager.updateMetaTags(seoData);
    
    // Update meta tags
    updateMetaTags(seoData);

    // Initialize enhanced monitoring systems
    enhancedPerformanceMonitor.getAlerts();
    enhancedAccessibilityManager.getIssues();
    enhancedSEOOptimizer.getIssues();

    // Initialize advanced systems
    advancedErrorRecoverySystem.getErrorReports();
    advancedCachingSystem.getStatistics();
    advancedSecurityManager.getSecurityMetrics();

    // Basic performance monitoring
    if (typeof window !== 'undefined') {
      console.log('🚀 Zion Tech Group App initialized');
      
      // Add performance observer for better monitoring
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'navigation') {
                console.log('Navigation timing:', entry);
              }
            }
          });
          observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
        } catch (error) {
          console.warn('Performance observer failed to initialize:', error);
        }
      }
    }

    // Add performance marks for better monitoring
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-start');
    }
    
    // Preload critical resources
    const preloadResource = (href: string, as: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      document.head.appendChild(link);
    };
    
    preloadResource('/og-image.png', 'image');
    preloadResource('/favicon.ico', 'image');

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    // Track engagement on page unload
    window.addEventListener('beforeunload', enhancedTrackEngagement);

    // Mark app as fully initialized
    if (typeof window !== 'undefined' && window.performance && 
        typeof performance.mark === 'function' && 
        typeof performance.measure === 'function') {
      performance.mark('app-init-complete');
      performance.measure('app-initialization', 'app-init-start', 'app-init-complete');
    }

    // Cleanup function
    return () => {
      window.removeEventListener('beforeunload', enhancedTrackEngagement);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleScroll, handleClick, handleKeyDown, seoData, preloadResource, updateMetaTags, enhancedTrackEngagement, seoManager]);

  // Real-time performance metrics monitoring
  useEffect(() => {
    if (!showRealTimeMetrics) return;

    const updateMetrics = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const memory = (window.performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        setPerformanceMetrics(prev => ({
          memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0,
          renderTime: navigation ? Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart) : 0,
          networkLatency: navigation ? Math.round(navigation.responseEnd - navigation.requestStart) : 0,
          errorCount: prev.errorCount
        }));
      }
    };

    const interval = setInterval(updateMetrics, 1000);
    updateMetrics(); // Initial update

    return () => clearInterval(interval);
  }, [showRealTimeMetrics]);

  // Track engagement on scroll and click
  useEffect(() => {
    const handleScrollWithEngagement = () => {
      handleScroll();
      trackEngagement();
    };

    const handleClickWithEngagement = (event: Event) => {
      handleClick(event);
      trackEngagement();
    };

    window.addEventListener('scroll', handleScrollWithEngagement, { passive: true });
    document.addEventListener('click', handleClickWithEngagement, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollWithEngagement);
      document.removeEventListener('click', handleClickWithEngagement);
    };
  }, [handleScroll, handleClick, trackEngagement]);

  // Show loading spinner while initializing
  if (isLoading) {
    return <ModernLoadingSpinner progress={loadingProgress} />;
  }

  return (
    <EnhancedErrorBoundary>
      <div 
        className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        role="main"
        aria-label="Zion Tech Group Application"
      >
        <AppRouter />
        
        {/* System Dashboard - Toggle with Ctrl+Shift+D */}
        {showSystemDashboard && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <EnhancedSystemDashboard
              isVisible={showSystemDashboard}
              onClose={() => setShowSystemDashboard(false)}
            />
          </Suspense>
        )}

        {/* Performance Optimizer - Toggle with Ctrl+Shift+P */}
        {showPerformanceOptimizer && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <PerformanceOptimizer
              isVisible={showPerformanceOptimizer}
              onClose={() => setShowPerformanceOptimizer(false)}
            />
          </Suspense>
        )}

        {/* Performance Monitor */}
        {showPerformanceMonitor && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="performance-monitor-title"
          >
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 id="performance-monitor-title" className="text-2xl font-bold text-gray-900">Performance Monitor</h2>
                <button
                  onClick={() => setShowPerformanceMonitor(false)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label="Close performance monitor"
                >
                  ✕
                </button>
              </div>
              <Suspense fallback={<ModernLoadingSpinner />}>
                <PerformanceMonitor />
              </Suspense>
            </div>
          </div>
        )}

        {/* AI Performance Dashboard - Toggle with Ctrl+Shift+A */}
        {showAIDashboard && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">AI Performance Dashboard</h2>
                <button
                  onClick={() => setShowAIDashboard(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="text-gray-600">
                AI Performance Dashboard content will be implemented here.
              </div>
            </div>
          </div>
        )}

        {/* Performance Dashboard */}
        <PerformanceDashboard
          isVisible={showPerformanceDashboard}
          onClose={() => setShowPerformanceDashboard(false)}
        />

        {/* Performance Metrics */}
        <Suspense fallback={<ModernLoadingSpinner />}>
          <PerformanceMetrics
            isVisible={showPerformanceMetrics}
            onClose={() => setShowPerformanceMetrics(false)}
          />
        </Suspense>

        {/* SEO Optimizer */}
        {showSEOOptimizer && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <SEOOptimizer
              seoData={seoData}
            />
          </Suspense>
        )}

        {/* Performance Monitor - Toggle with Ctrl+Shift+M */}
        <PerformanceMonitor 
          showDashboard={showPerformanceMonitor}
          onMetricsUpdate={(metrics) => {
            console.log('Performance metrics:', metrics);
          }}
        />
        
        {/* AI Performance Dashboard - Toggle with Ctrl+Shift+A */}
        {showAIDashboard && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">AI Performance Dashboard</h2>
                <button
                  onClick={() => setShowAIDashboard(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="text-gray-600">
                AI Performance Dashboard content will be implemented here.
              </div>
            </div>
          </div>
        )}

        {/* SEO Optimizer Dashboard - Toggle with Ctrl+Shift+S */}
        {showSEOOptimizer && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">SEO Optimizer</h2>
                <button
                  onClick={() => setShowSEOOptimizer(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <SEOOptimizer seoData={seoData} />
            </div>
          </div>
        )}

        {/* Comprehensive System Dashboard - Toggle with Ctrl+Shift+C */}
        {showComprehensiveDashboard && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-7xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Comprehensive System Dashboard</h2>
                <button
                  onClick={() => setShowComprehensiveDashboard(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <ComprehensiveSystemDashboard />
            </div>
          </div>
        )}
      </div>
    </EnhancedErrorBoundary>
  );
}