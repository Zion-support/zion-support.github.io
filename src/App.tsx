import React, { useCallback, useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { AppRouter } from './router';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import SEOOptimizer from './components/SEOOptimizer';
import { analytics } from './utils/analytics';
import { seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import { AccessibilityEnhancer } from './utils/accessibilityEnhancer';
import { SecurityEnhancer } from './utils/securityEnhancer';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { useAppInitialization } from './hooks/useAppInitialization';
import { useSEOData } from './components/SEOOptimizer';
import './index.css';

// Lazy load heavy components for better performance
const EnhancedSystemDashboard = lazy(() => import('./components/EnhancedSystemDashboard'));
const AIPerformanceDashboard = lazy(() => import('./components/AIPerformanceDashboard'));
const WebsiteEnhancements = lazy(() => import('./components/WebsiteEnhancements'));
const AdvancedAnalytics = lazy(() => import('./components/AdvancedAnalytics'));
const PerformanceDashboard = lazy(() => import('./components/PerformanceDashboard'));
const SystemMonitoringDashboard = lazy(() => import('./components/SystemMonitoringDashboard'));
const ComprehensiveImprovements = lazy(() => import('./components/ComprehensiveImprovements'));

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAIDashboard, setShowAIDashboard] = useState(false);
  const [showSEOOptimizer, setShowSEOOptimizer] = useState(false);
  const [showRealTimeMetrics, setShowRealTimeMetrics] = useState(false);
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);
  const [showSystemStatus, setShowSystemStatus] = useState(true);
  const [showComprehensiveImprovements, setShowComprehensiveImprovements] = useState(false);

  // Initialize app with custom configuration
  const { isLoading, loadingProgress, handleScroll, handleClick, trackEngagement: originalTrackEngagement } = useAppInitialization({
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSecurity: true,
    enableAnalytics: true,
    enableNotifications: true,
    enableCaching: true,
  });

  // Get current pathname for SEO
  const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const seoData = useSEOData(currentPathname);

  // Performance optimization hook
  const { preloadResource } = usePerformanceOptimization({
    enablePreloading: true,
    enableResourceHints: true,
    enableImageOptimization: true,
  });

  // Initialize comprehensive enhancements
  useEffect(() => {
    try {
      // Initialize enhanced systems
      enhancedPerformanceMonitor.startMonitoring();
      enhancedAnalytics.initialize();
      advancedCacheSystem.initialize();
      
      // Initialize accessibility and security enhancers
      AccessibilityEnhancer.getInstance();
      SecurityEnhancer.getInstance();
      
      // Get comprehensive enhancements
      const enhancements = getComprehensiveEnhancements({
        enableAdvancedPerformance: true,
        enableSecurityFeatures: true,
        enableAccessibilityFeatures: true,
        enableSEOFeatures: true,
        enableUXFeatures: true,
        enableAnalytics: true,
        enableOfflineSupport: true,
        enablePWA: true
      });

      // Store enhancements globally for debugging
      (window as unknown as Record<string, unknown>).enhancements = enhancements;
    } catch (error) {
      console.error('Error initializing enhancements:', error);
    }
  }, []);

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
      setShowPerformanceMonitor(prev => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
      event.preventDefault();
      setShowAIDashboard(prev => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'S') {
      event.preventDefault();
      setShowSEOOptimizer(prev => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'I') {
      event.preventDefault();
      setShowComprehensiveImprovements(prev => !prev);
    }
  }, []);

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);

  // Enhanced track engagement function
  const trackEngagement = useCallback(() => {
    try {
      const timeOnPage = Date.now() - engagementData.startTime;
      seoAnalytics.trackUserEngagement(window.location.pathname, {
        timeOnPage,
        scrollDepth: engagementData.scrollDepth,
        clicks: engagementData.clicks,
      });
      // Also call the original trackEngagement from useAppInitialization
      originalTrackEngagement();
    } catch (error) {
      console.error('Error tracking engagement:', error);
    }
  }, [engagementData.clicks, engagementData.scrollDepth, engagementData.startTime, originalTrackEngagement]);

  // Simple SEO manager
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
      
      // Initialize analytics system
      analytics.initialize();
      analytics.trackPageView();

      // Set default SEO data using the correct method
      seoManagerInstance.updateMetaTags(seoData);
    } catch (error) {
      console.error('Error in main initialization effect:', error);
    }
  }, [seoData, handleScroll, handleClick, handleKeyDown, preloadResource, seoManagerInstance]);

  // Main initialization and cleanup effect
  React.useEffect(() => {
    try {
      // Mark app as fully initialized
      if (typeof window !== 'undefined' && window.performance && 
          typeof performance.mark === 'function' && 
          typeof performance.measure === 'function') {
        performance.mark('app-init-complete');
        performance.measure('app-initialization', 'app-init-start', 'app-init-complete');
      }

      // Basic performance monitoring
      if (typeof window !== 'undefined') {
        console.log('🚀 Zion Tech Group App initialized');
      }

      // Track engagement on page unload
      window.addEventListener('beforeunload', trackEngagement);
      
      // Cleanup function
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('beforeunload', trackEngagement);
        
        // Final engagement tracking
        trackEngagement();
        
        // Remove event listeners
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('click', handleClick);
      };
    } catch (error) {
      console.error('Error in cleanup effect:', error);
    }
  }, [trackEngagement, handleKeyDown, handleScroll, handleClick]);

  // Show loading screen while initializing
  if (isLoading) {
    return (
      <EnhancedErrorBoundary>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <ModernLoadingSpinner progress={loadingProgress} />
        </div>
      </EnhancedErrorBoundary>
    );
  }

  return (
    <EnhancedErrorBoundary>
      <SEOOptimizer seoData={seoData} />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AppRouter />
        
        {/* System Dashboard - Toggle with Ctrl+Shift+D */}
        {showSystemDashboard && (
          <Suspense fallback={<div>Loading...</div>}>
            <EnhancedSystemDashboard
              onClose={() => setShowSystemDashboard(false)}
            />
          </Suspense>
        )}
        
        {/* AI Performance Dashboard - Toggle with Ctrl+Shift+A */}
        {showAIDashboard && (
          <Suspense fallback={<div>Loading...</div>}>
            <AIPerformanceDashboard
              onClose={() => setShowAIDashboard(false)}
            />
          </Suspense>
        )}
        
        {/* Performance Optimizer - Toggle with Ctrl+Shift+P */}
        {showPerformanceOptimizer && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Performance Optimizer</h2>
                <button
                  onClick={() => setShowPerformanceOptimizer(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <PerformanceOptimizer />
            </div>
          </div>
        )}

        {/* SEO Optimizer - Toggle with Ctrl+Shift+S */}
        {showSEOOptimizer && (
          <Suspense fallback={<div>Loading...</div>}>
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
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
          </Suspense>
        )}

        {/* Comprehensive Improvements - Toggle with Ctrl+Shift+I */}
        {showComprehensiveImprovements && (
          <Suspense fallback={<div>Loading...</div>}>
            <ComprehensiveImprovements
              onClose={() => setShowComprehensiveImprovements(false)}
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

        {/* System Status Indicator */}
        {showSystemStatus && (
          <div className="fixed top-4 right-4 z-40">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              System Online
            </div>
          </div>
        )}
      </div>
    </EnhancedErrorBoundary>
  );
}