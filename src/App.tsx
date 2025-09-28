import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import SEOOptimizer from './components/SEOOptimizer';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
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
import { createAdvancedAppEnhancements } from './utils/advancedAppEnhancements';
import { getPerformanceMonitor } from './utils/advancedPerformanceMonitor';
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
  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
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

  // Get current pathname for SEO (removed unused variable)
  // const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  // Performance optimization hook
  const { preloadResource } = usePerformanceOptimization({
    enablePreloading: true,
    enableResourceHints: true,
    enableCriticalCSS: true,
    enableImageOptimization: true,
  });

<<<<<<< HEAD
  // Enhanced keyboard handler for all dashboard toggles
=======
  // Initialize comprehensive enhancement suite
  const comprehensiveEnhancements = useMemo(() => {
    return getComprehensiveEnhancements({
      enableAdvancedAnalytics: true,
      enablePerformanceOptimization: true,
      enableAccessibilityEnhancements: true,
      enableSecurityFeatures: true,
      enableAutomation: true,
      enableCaching: true,
      enableSEOOptimization: true
    });
  }, []);

  // Initialize advanced app enhancements
  const advancedAppEnhancements = useMemo(() => {
    return createAdvancedAppEnhancements({
      enableAdvancedAnalytics: true,
      enablePerformanceOptimization: true,
      enableAccessibilityEnhancements: true,
      enableSecurityFeatures: true,
      enableAutomation: true,
      enableCaching: true,
      enableSEOOptimization: true,
      enableRealTimeMonitoring: true,
      enableErrorRecovery: true,
      enableUserExperienceOptimization: true
    });
  }, []);

  // Initialize advanced performance monitor
  const performanceMonitor = useMemo(() => {
    return getPerformanceMonitor();
  }, []);

  // Optimized keyboard handler for system dashboard toggle
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-993e
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey) {
      event.preventDefault();
<<<<<<< HEAD
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
          break;
      }
=======
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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-993e
    }
  }, []);

  // Memoize the SEO data to prevent unnecessary re-renders
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology', 'machine learning', 'automation', 'blockchain'],
    ogType: 'website',
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image' as const,
    structuredData: []
  }), []);
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
<<<<<<< HEAD

  // Memoize the SEO data to prevent unnecessary re-renders
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology', 'machine learning', 'automation', 'blockchain'],
    ogType: 'website' as const,
    ogUrl: typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image' as const
  }), []);

=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-993e
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
<<<<<<< HEAD

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
=======
  useEffect(() => {
    // Add performance marks for better monitoring
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-start');
    }
    
    // Preload critical resources
    const preloadResource = (href: string, as: string) => {
      if (typeof document !== 'undefined') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        document.head.appendChild(link);
      }
    };
    
    preloadResource('/og-image.png', 'image');
    preloadResource('/favicon.ico', 'image');

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    // Initialize basic systems
    analytics.initialize();
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-993e
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.optimizeFonts();
    performanceSEO.optimizeCSS();

    // Initialize comprehensive enhancement suite
    if (comprehensiveEnhancements) {
      comprehensiveEnhancements.initialize();
    }

    // Initialize advanced app enhancements
    if (advancedAppEnhancements) {
      advancedAppEnhancements.initialize();
    }

    // Initialize advanced performance monitor
    if (performanceMonitor) {
      performanceMonitor.start();
    }

    // Initialize advanced systems
    enhancedAnalytics.initialize();
    enhancedPerformanceMonitor.start();
    advancedCacheSystem.initialize();
    accessibilityEnhancer.initialize();
    performanceOptimizer.initialize();
    seoOptimizer.initialize();

    // Set default SEO data using the correct method
<<<<<<< HEAD
    updateMetaTags(seoData);
    
    // Add performance marks for better monitoring
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-start');
    }
    
    // Preload critical resources
    preloadResource('/og-image.png', 'image');
    preloadResource('/favicon.ico', 'image');
=======
    // seoManager.updateMetaTags(seoData);

    // Update meta tags
    updateMetaTags(seoData);

    // Basic performance monitoring
    if (typeof window !== 'undefined') {
      console.log('🚀 Zion Tech Group App initialized');
      
      // Enhanced performance monitoring
      if (enhancedPerformanceMonitor) {
        enhancedPerformanceMonitor.trackAppInitialization();
      }
      
      // Track performance metrics
      if (typeof performance !== 'undefined' && performance.mark) {
        performance.mark('app-fully-loaded');
        performance.measure('app-load-time', 'app-init-start', 'app-fully-loaded');
      }
    }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-993e

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
  }, [handleClick, handleKeyDown, handleScroll, seoData, preloadResource, updateMetaTags]);

<<<<<<< HEAD
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

=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-993e
  // Add keyboard event listener
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    
<<<<<<< HEAD
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
    }

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeunload', enhancedTrackEngagement);
      
      // Final engagement tracking
      trackEngagement();
    };
  }, [enhancedTrackEngagement, trackEngagement, handleKeyDown]);

  // Performance optimization is handled by the hook automatically
=======
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Main initialization and cleanup effect
  React.useEffect(() => {
    // Track engagement on page unload
    window.addEventListener('beforeunload', enhancedTrackEngagement);
    // Mark app as fully initialized
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-complete');
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
      
      // Cleanup enhanced systems
      if (enhancedPerformanceMonitor) {
        enhancedPerformanceMonitor.stop();
      }
      if (advancedCacheSystem) {
        advancedCacheSystem.cleanup();
      }
      if (comprehensiveEnhancements) {
        comprehensiveEnhancements.cleanup();
      }
      if (advancedAppEnhancements) {
        advancedAppEnhancements.cleanup();
      }
      if (performanceMonitor) {
        performanceMonitor.stop();
      }
    };
  }, [handleScroll, handleClick, handleKeyDown, seoData, preloadResource, updateMetaTags]);

  // Main initialization and cleanup effect
  React.useEffect(() => {
    // Track engagement on page unload
    window.addEventListener('beforeunload', enhancedTrackEngagement);

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeunload', enhancedTrackEngagement);
      
      // Final engagement tracking
      enhancedTrackEngagement();
      
      // Remove event listeners
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enhancedTrackEngagement, handleKeyDown, handleScroll, handleClick]);

  // Performance optimization hook
  const { optimizePerformance } = usePerformanceOptimization();

  // Optimize performance on mount
  useEffect(() => {
    optimizePerformance();
  }, [optimizePerformance]);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-993e

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

<<<<<<< HEAD
  // Performance monitoring effect
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-end');
      performance.measure('app-initialization', 'app-init-start', 'app-init-end');
    }
  }, []);

  // Loading state
=======
  // Show loading spinner while initializing
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-993e
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
<<<<<<< HEAD
=======
      <SEOOptimizer seoData={seoData} />
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-993e
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AppRouter />
        
        {/* System Dashboard */}
        {showSystemDashboard && (
          <EnhancedSystemDashboard
            isVisible={showSystemDashboard}
            onClose={() => setShowSystemDashboard(false)}
          />
        )}

        {/* Performance Optimizer */}
        {showPerformanceOptimizer && (
          <PerformanceOptimizer
            isVisible={showPerformanceOptimizer}
            onClose={() => setShowPerformanceOptimizer(false)}
          />
        )}

<<<<<<< HEAD
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
              <PerformanceMonitor />
            </div>
          </div>
        )}

        {/* AI Performance Dashboard */}
=======
        {/* Performance Monitor - Toggle with Ctrl+Shift+M */}
        <PerformanceMonitor 
          showDashboard={showPerformanceMonitor}
          onMetricsUpdate={(metrics) => {
            console.log('Performance metrics:', metrics);
          }}
        />
        
        {/* AI Performance Dashboard - Toggle with Ctrl+Shift+A */}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-993e
        <AIPerformanceDashboard
          isVisible={showAIDashboard}
          onClose={() => setShowAIDashboard(false)}
        />
<<<<<<< HEAD

        {/* SEO Optimizer */}
        {showSEOOptimizer && (
          <SEOOptimizer
            seoData={seoData}
          />
        )}

        {/* Keyboard shortcuts help */}
        <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-3 rounded-lg opacity-50 hover:opacity-100 transition-opacity">
          <div className="font-semibold mb-1">Keyboard Shortcuts:</div>
          <div>Ctrl+Shift+D: System Dashboard</div>
          <div>Ctrl+Shift+P: Performance Optimizer</div>
          <div>Ctrl+Shift+M: Performance Monitor</div>
          <div>Ctrl+Shift+A: AI Dashboard</div>
          <div>Ctrl+Shift+S: SEO Optimizer</div>
          <div>Ctrl+Shift+T: Toggle Theme</div>
          <div>Escape: Close All</div>
        </div>
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-993e
      </div>
    </EnhancedErrorBoundary>
  );
}