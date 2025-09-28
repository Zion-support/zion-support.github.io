import React, { useCallback, useState, useEffect } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import PerformanceTracker from './components/PerformanceTracker';
import AccessibilityEnhancements from './components/AccessibilityEnhancements';
import { seoAnalytics } from './utils/seoEnhanced';
import { initializePerformanceEnhancements } from './utils/performanceEnhancements';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import RealTimeMonitor from './components/RealTimeMonitor';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import EnhancedNotificationSystem from './components/EnhancedNotificationSystem';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
import WebsiteEnhancements from './components/WebsiteEnhancements';
import ComprehensivePerformanceMonitor from './components/ComprehensivePerformanceMonitor';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import { AdvancedAutomationSystem } from './utils/advancedAutomationSystem';
import { AccessibilityEnhancer } from './utils/accessibilityEnhancer';
import { SecurityEnhancer } from './utils/securityEnhancer';
import { useSEOData } from './components/SEOOptimizer';
import { performanceAlerts } from './utils/performanceAlerts';
import { errorRecoverySystem } from './utils/errorRecovery';
import { accessibilityUtils } from './utils/accessibilityUtils';
import { securityUtils } from './utils/securityUtils';
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';
import './styles/modern-utilities.css';
import './styles/accessibility.css';

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAIDashboard, setShowAIDashboard] = useState(false);
  const [showSEOOptimizer, setShowSEOOptimizer] = useState(false);
  const [showRealTimeMetrics, setShowRealTimeMetrics] = useState(false);
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);
  const [showWebsiteEnhancements, setShowWebsiteEnhancements] = useState(false);
  const [showComprehensivePerformance, setShowComprehensivePerformance] = useState(false);
  const [showAdvancedSEO, setShowAdvancedSEO] = useState(false);

  // Engagement tracking data
  // const engagementData = useMemo(() => ({
  //   startTime: Date.now(),
  //   scrollDepth: 0,
  //   clicks: 0
  // }), []);

  // SEO data
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology', 'machine learning', 'automation', 'blockchain'],
    canonicalUrl: typeof window !== 'undefined' ? window.location.href : '',
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

  // Performance optimization hook
  usePerformanceOptimization({
    enablePreloading: true,
    enableResourceHints: true,
    enableCriticalCSS: true,
    enableImageOptimization: true,
  });
  // Initialize SEO analytics
  useEffect(() => {
    try {
      // Initialize comprehensive enhancements first
      const enhancements = getComprehensiveEnhancements();
      enhancements.initialize();
      
      // Initialize individual enhancement systems
      if ('startMonitoring' in enhancedPerformanceMonitor) {
        enhancedPerformanceMonitor.startMonitoring();
      } else if ('initialize' in enhancedPerformanceMonitor) {
        (enhancedPerformanceMonitor as any).initialize();
      }
      enhancedAnalytics.initialize();
      advancedCacheSystem.initialize();
      new AdvancedAutomationSystem().initialize();
      const accessibilityEnhancer = new AccessibilityEnhancer();
      if ('initialize' in accessibilityEnhancer) {
        (accessibilityEnhancer as any).initialize();
      }
      new SecurityEnhancer().initialize();
    } catch (error) {
      console.warn('Some enhancement systems failed to initialize:', error);
      // Use error recovery system
      errorRecoverySystem.handleError(error as Error, {
        component: 'App',
        action: 'initialization'
      });
    }
    
    // Initialize analytics
    analytics.initialize();
    seoAnalytics.trackPageView(window.location.pathname);
    performanceSEO.optimizeImages();
    seoManager.updateSEO({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content')?.split(',').map(k => k.trim()) || [],
      canonical: window.location.href
    });
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.optimizeFonts();
    performanceSEO.optimizeCSS();
=======
    if (typeof window !== 'undefined') {
      seoAnalytics.trackPageView(window.location.pathname);
    }
  }, []);

  // Initialize performance enhancements
  useEffect(() => {
    initializePerformanceEnhancements();
  }, []);

  // Initialize comprehensive enhancements
  useEffect(() => {
    const enhancements = getComprehensiveEnhancements();
    enhancements.initialize();
  }, []);
>>>>>>> 8bb5c4dacb8ba59b06aca384c4f464ce364b0839

  // Keyboard shortcuts
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      switch (event.key) {
        case 'd':
          event.preventDefault();
          setShowSystemDashboard(prev => !prev);
          break;
        case 'p':
          event.preventDefault();
          setShowPerformanceOptimizer(prev => !prev);
          break;
        case 'm':
          event.preventDefault();
          setShowPerformanceMonitor(prev => !prev);
          break;
        case 'a':
          event.preventDefault();
          setShowAIDashboard(prev => !prev);
          break;
        case 's':
          event.preventDefault();
          setShowSEOOptimizer(prev => !prev);
          break;
        case 'r':
          event.preventDefault();
          setShowRealTimeMetrics(prev => !prev);
          break;
        case 'h':
          event.preventDefault();
          setShowAccessibilityPanel(prev => !prev);
          break;
        case 'w':
          event.preventDefault();
          setShowWebsiteEnhancements(prev => !prev);
          break;
        case 'c':
          event.preventDefault();
          setShowComprehensivePerformance(prev => !prev);
          break;
        case 'e':
          event.preventDefault();
          setShowAdvancedSEO(prev => !prev);
          break;
      }
    }
    
    // Add performance marks for better monitoring
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-start');
    }
    
    // Preload critical resources
    preloadResource('/og-image.png', 'image');
    preloadResource('/favicon.ico', 'image');
    
    // Track engagement on page unload
    window.addEventListener('beforeunload', enhancedTrackEngagement);

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('keydown', handleKeyDown);
    // Mark app as fully initialized
    if (typeof window !== 'undefined' && window.performance && 
        typeof performance.mark === 'function' && 
        typeof performance.measure === 'function') {
      performance.mark('app-init-complete');
      performance.measure('app-initialization', 'app-init-start', 'app-init-complete');
    }

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeunload', enhancedTrackEngagement);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleScroll, handleClick, handleKeyDown, seoData, preloadResource, updateMetaTags, enhancedTrackEngagement]);

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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-4efd

  // Track engagement on scroll and click
  useEffect(() => {
    const handleScrollWithEngagement = () => {
      handleScroll();
      enhancedTrackEngagement();
    };

    const handleClickWithEngagement = (event: Event) => {
      handleClick(event);
      enhancedTrackEngagement();
    };

    window.addEventListener('scroll', handleScrollWithEngagement, { passive: true });
    document.addEventListener('click', handleClickWithEngagement, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollWithEngagement);
      document.removeEventListener('click', handleClickWithEngagement);
    };
  }, [handleScroll, handleClick, enhancedTrackEngagement]);

  // Performance monitoring effect
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-end');
      performance.measure('app-initialization', 'app-init-start', 'app-init-end');
    }
=======
>>>>>>> 8bb5c4dacb8ba59b06aca384c4f464ce364b0839
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Enhanced scroll handler
  const handleEnhancedScroll = useCallback((event: Event) => {
    handleScroll(event);
    trackEngagement('scroll', { depth: window.scrollY });
  }, [handleScroll, trackEngagement]);

  // Enhanced click handler
  const handleEnhancedClick = useCallback((event: Event) => {
    handleClick(event);
    trackEngagement('click', { target: (event.target as Element)?.tagName });
  }, [handleClick, trackEngagement]);

  useEffect(() => {
    document.addEventListener('scroll', handleEnhancedScroll);
    document.addEventListener('click', handleEnhancedClick);
    
    return () => {
      document.removeEventListener('scroll', handleEnhancedScroll);
      document.removeEventListener('click', handleEnhancedClick);
    };
  }, [handleEnhancedScroll, handleEnhancedClick]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="text-center">
          <ModernLoadingSpinner progress={loadingProgress} />
          <p className="mt-4 text-white text-lg">Initializing Zion Tech Group Platform...</p>
        </div>
      </div>
    );
  }

  return (
    <AdvancedErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Main Application */}
        <AppRouter />
        
        {/* System Dashboard */}
        {showSystemDashboard && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">System Dashboard</h2>
                  <button
                    onClick={() => setShowSystemDashboard(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <EnhancedSystemDashboard />
              </div>
            </div>
          </div>
        )}

        {/* Performance Optimizer */}
        {showPerformanceOptimizer && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Performance Optimizer</h2>
                  <button
                    onClick={() => setShowPerformanceOptimizer(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <PerformanceOptimizer />
              </div>
            </div>
          </div>
        )}

        {/* Performance Monitor */}
        {showPerformanceMonitor && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Performance Monitor</h2>
                  <button
                    onClick={() => setShowPerformanceMonitor(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <PerformanceMonitor />
              </div>
            </div>
          </div>
        )}

        {/* AI Performance Dashboard */}
        {showAIDashboard && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">AI Performance Dashboard</h2>
                  <button
                    onClick={() => setShowAIDashboard(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <AIPerformanceDashboard isVisible={showAIDashboard} onClose={() => setShowAIDashboard(false)} />
              </div>
            </div>
          </div>
        )}

        {/* SEO Optimizer */}
        {showSEOOptimizer && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">SEO Optimizer</h2>
                  <button
                    onClick={() => setShowSEOOptimizer(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <AdvancedSEOOptimizer isVisible={showSEOOptimizer} onClose={() => setShowSEOOptimizer(false)} />
              </div>
            </div>
          </div>
        )}

        {/* Real-time Metrics */}
        {showRealTimeMetrics && (
          <div className="fixed top-4 right-4 z-40 bg-white rounded-lg shadow-lg p-4 max-w-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Real-time Metrics</h3>
              <button
                onClick={() => setShowRealTimeMetrics(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <RealTimeMonitor />
          </div>
        )}

        {/* Accessibility Panel */}
        {showAccessibilityPanel && (
          <div className="fixed bottom-4 left-4 z-40 bg-white rounded-lg shadow-lg p-4 max-w-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Accessibility</h3>
              <button
                onClick={() => setShowAccessibilityPanel(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <AccessibilityEnhancements />
          </div>
        )}

        {/* Website Enhancements */}
        <WebsiteEnhancements 
          isVisible={showWebsiteEnhancements} 
          onClose={() => setShowWebsiteEnhancements(false)} 
        />

        {/* Comprehensive Performance Monitor */}
        <ComprehensivePerformanceMonitor 
          isVisible={showComprehensivePerformance} 
          onClose={() => setShowComprehensivePerformance(false)} 
        />

        {/* Advanced SEO Optimizer */}
        <AdvancedSEOOptimizer 
          isVisible={showAdvancedSEO} 
          onClose={() => setShowAdvancedSEO(false)} 
        />

        {/* Performance Tracker */}
        <PerformanceTracker />
      </div>
    </AdvancedErrorBoundary>
  );
}