import React, { useEffect, useCallback, useMemo, useState, lazy, Suspense } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import PerformanceDashboard from './components/PerformanceDashboard';
import ProductionMonitoringDashboard from './components/ProductionMonitoringDashboard';
import { analytics } from './utils/analytics';
import { seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import { AdvancedAutomationSystem } from './utils/advancedAutomationSystem';
import { AccessibilityEnhancer } from './utils/accessibilityEnhancer';
import { SecurityEnhancer } from './utils/securityEnhancer';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';
import { seoOptimizer } from './utils/seoOptimizer';
import { logger, performanceLogger } from './utils/logger';
import { productionOptimizer } from './utils/productionOptimizer';
import { errorMonitoring } from './utils/errorMonitoring';

// Lazy load heavy components for better performance
const EnhancedSystemDashboard = lazy(() => import('./components/EnhancedSystemDashboard'));
const PerformanceOptimizer = lazy(() => import('./components/PerformanceOptimizer'));
const PerformanceMonitor = lazy(() => import('./components/PerformanceMonitor'));
const SEOOptimizer = lazy(() => import('./components/SEOOptimizer'));
const AIPerformanceDashboard = lazy(() => import('./components/AIPerformanceDashboard'));
const PerformanceMetrics = lazy(() => import('./components/PerformanceMetrics'));
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';
import './styles/modern-utilities.css';

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAIDashboard, setShowAIDashboard] = useState(false);
  const [showSEOOptimizer, setShowSEOOptimizer] = useState(false);
  const [showPerformanceDashboard, setShowPerformanceDashboard] = useState(false);
  const [showPerformanceMetrics, setShowPerformanceMetrics] = useState(false);
  const [showProductionMonitoring, setShowProductionMonitoring] = useState(false);

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);

  // Memoize SEO data to prevent unnecessary re-renders
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered IT solutions, cloud services, and digital transformation consulting.',
    keywords: 'AI, IT solutions, cloud services, digital transformation, technology consulting',
    canonical: window.location.href,
    ogTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
    ogDescription: 'Leading provider of AI-powered IT solutions and digital transformation consulting.',
    ogImage: '/og-image.jpg',
    twitterCard: 'summary_large_image'
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

  // Performance optimization hook
  const { preloadResource } = usePerformanceOptimization({
    enablePreloading: true,
    enableResourceHints: true,
    enableCriticalCSS: true,
    enableImageOptimization: true,
  });

  // Enhanced keyboard handler for all dashboard toggles
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
        case 'B':
          setShowPerformanceDashboard(prev => !prev);
          break;
        case 'R':
          setShowPerformanceMetrics(prev => !prev);
          break;
        case 'O':
          setShowProductionMonitoring(prev => !prev);
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
          setShowPerformanceMetrics(false);
          break;
      }
    }
  }, []);

  // Enhanced engagement tracking function
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

  useEffect(() => {
    // Initialize comprehensive enhancements
    const enhancements = getComprehensiveEnhancements();
    enhancements.initialize();
    
    // Initialize individual enhancement systems
    enhancedPerformanceMonitor.initialize();
    enhancedAnalytics.initialize();
    advancedCacheSystem.initialize();
    new AdvancedAutomationSystem().initialize();
    new AccessibilityEnhancer().initialize();
    new SecurityEnhancer().initialize();
    
    // Initialize additional optimizers
    performanceOptimizer.initialize();
    accessibilityEnhancer.initialize();
    seoOptimizer.initialize();
    
    // Initialize analytics
    analytics.initialize();
    seoAnalytics.initialize();
    performanceSEO.initialize();
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.optimizeFonts();
    performanceSEO.optimizeCSS();
    
    // Initialize production optimizations
    logger.info('Initializing production optimizations', 'App');
    productionOptimizer.optimizeImages();
    productionOptimizer.enableServiceWorker();
    productionOptimizer.optimizeMemoryUsage();
    productionOptimizer.preloadCriticalResources();
    
    // Initialize error monitoring
    errorMonitoring.setUserId('anonymous'); // In a real app, set actual user ID
    logger.info('Error monitoring initialized', 'App');

    // Set default SEO data using the correct method
    updateMetaTags(seoData);
    
    // Add performance marks for better monitoring
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-start');
      performanceLogger.mark('app-initialization-start');
    }
    
    // Preload critical resources
    preloadResource('/og-image.png', 'image');
    preloadResource('/favicon.ico', 'image');

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    // Update meta tags
    updateMetaTags(seoData);

    // Basic performance monitoring
    if (typeof window !== 'undefined') {
      console.log('🚀 Zion Tech Group App initialized with comprehensive optimizations');
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClick, handleKeyDown, handleScroll, seoData, preloadResource, updateMetaTags]);

  // Add keyboard event listener
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Main initialization and cleanup effect
  React.useEffect(() => {
    // Track engagement on page unload
    window.addEventListener('beforeunload', enhancedTrackEngagement);

    // Mark app as fully initialized
    if (typeof window !== 'undefined' && window.performance && 
        typeof performance.mark === 'function' && 
        typeof performance.measure === 'function') {
      performance.mark('app-init-complete');
      performance.measure('app-initialization', 'app-init-start', 'app-init-complete');
      performanceLogger.mark('app-initialization-complete');
      performanceLogger.measure('app-initialization', 'app-initialization-start', 'app-initialization-complete');
    }
    
    logger.info('App initialization completed successfully', 'App');

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeunload', enhancedTrackEngagement);
      
      // Final engagement tracking
      trackEngagement();
    };
  }, [enhancedTrackEngagement, trackEngagement, handleKeyDown]);

  // Performance optimization is handled by the hook automatically

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

  // Performance monitoring effect
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-end');
      performance.measure('app-initialization', 'app-init-start', 'app-init-end');
    }
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <ModernLoadingSpinner />
          <div className="mt-4 text-white">
            <div className="text-lg font-semibold">Zion Tech Group</div>
            <div className="text-sm opacity-75">Loading advanced systems...</div>
            <div className="mt-2 w-64 bg-gray-700 rounded-full h-2 mx-auto">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <EnhancedErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AppRouter />
        
        {/* System Dashboard */}
        {showSystemDashboard && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <EnhancedSystemDashboard
              isVisible={showSystemDashboard}
              onClose={() => setShowSystemDashboard(false)}
            />
          </Suspense>
        )}

        {/* Performance Optimizer */}
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
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Performance Monitor</h2>
                <button
                  onClick={() => setShowPerformanceMonitor(false)}
                  className="text-gray-500 hover:text-gray-700"
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

        {/* AI Performance Dashboard */}
        <Suspense fallback={<ModernLoadingSpinner />}>
          <AIPerformanceDashboard
            isVisible={showAIDashboard}
            onClose={() => setShowAIDashboard(false)}
          />
        </Suspense>

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

        {/* Production Monitoring Dashboard */}
        <ProductionMonitoringDashboard
          isVisible={showProductionMonitoring}
          onClose={() => setShowProductionMonitoring(false)}
        />

        {/* SEO Optimizer */}
        {showSEOOptimizer && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <SEOOptimizer
              seoData={seoData}
            />
          </Suspense>
        )}

        {/* Performance Metrics */}
        {showPerformanceMetrics && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <PerformanceMetrics
              isVisible={showPerformanceMetrics}
              onClose={() => setShowPerformanceMetrics(false)}
            />
          </Suspense>
        )}

        {/* Keyboard shortcuts help */}
        <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-3 rounded-lg opacity-50 hover:opacity-100 transition-opacity">
          <div className="font-semibold mb-1">Keyboard Shortcuts:</div>
          <div>Ctrl+Shift+D: System Dashboard</div>
          <div>Ctrl+Shift+P: Performance Optimizer</div>
          <div>Ctrl+Shift+M: Performance Monitor</div>
          <div>Ctrl+Shift+R: Performance Metrics</div>
          <div>Ctrl+Shift+A: AI Dashboard</div>
          <div>Ctrl+Shift+S: SEO Optimizer</div>
          <div>Ctrl+Shift+T: Toggle Theme</div>
          <div>Escape: Close All</div>
        </div>
      </div>
    </EnhancedErrorBoundary>
  );
}