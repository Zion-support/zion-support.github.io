import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import { seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
import { useSEOData } from './components/SEOOptimizer';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import { AdvancedAutomationSystem } from './utils/advancedAutomationSystem';
import { AccessibilityEnhancer } from './utils/accessibilityEnhancer';
import { SecurityEnhancer } from './utils/securityEnhancer';
import PerformanceTracker from './components/PerformanceTracker';
import AccessibilityEnhancements from './components/AccessibilityEnhancements';
import './index.css';
import './styles/accessibility.css';

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAIDashboard, setShowAIDashboard] = useState(false);

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);

  // Enhanced SEO manager with better performance
  const seoManager = useMemo(() => ({
    updateMetaTags: (data: typeof seoData) => {
      if (typeof document !== 'undefined') {
        // Batch DOM updates for better performance
        requestAnimationFrame(() => {
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
          
          // Update Open Graph tags
          const ogTitle = document.querySelector('meta[property="og:title"]');
          if (ogTitle) {
            ogTitle.setAttribute('content', data.title);
          }
          
          const ogDescription = document.querySelector('meta[property="og:description"]');
          if (ogDescription) {
            ogDescription.setAttribute('content', data.description);
          }
        });
      }
    }
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

  // Optimized keyboard handler for system dashboard toggle with better performance
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Early return if not a relevant key combination
    if (!(event.ctrlKey || event.metaKey) || !event.shiftKey) return;
    
    const key = event.key.toLowerCase();
    const handlers: Record<string, () => void> = {
      'd': () => {
        event.preventDefault();
        setShowSystemDashboard(prev => !prev);
      },
      'p': () => {
        event.preventDefault();
        setShowPerformanceOptimizer(prev => !prev);
      },
      'm': () => {
        event.preventDefault();
        setShowPerformanceMonitor(prev => !prev);
      },
      'a': () => {
        event.preventDefault();
        setShowAIDashboard(prev => !prev);
      }
    };
    
    const handler = handlers[key];
    if (handler) {
      handler();
    }
  }, []);

  // Get SEO data using current pathname
  const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const seoData = useSEOData(currentPathname);
  const enhancedTrackEngagement = useCallback(() => {
    try {
      const timeOnPage = Date.now() - engagementData.startTime;
      seoAnalytics.trackUserEngagement(window.location.pathname, {
        timeOnPage,
        scrollDepth: engagementData.scrollDepth,
        clicks: engagementData.clicks,
      });
      trackEngagement();
    } catch (error) {
      console.warn('Engagement tracking failed:', error);
    }
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
    // Initialize systems in priority order for better performance
    const initializeSystems = async () => {
      try {
        // Critical systems first
        analytics.initialize();
        // seoAnalytics doesn't have initialize method
        
        // Performance optimizations
        // performanceSEO doesn't have initialize method
        performanceSEO.optimizeImages();
        performanceSEO.optimizeFonts();
        performanceSEO.optimizeCSS();
        
        // Enhanced systems
        const enhancements = getComprehensiveEnhancements();
        // enhancements doesn't have public initialize method
        
        // Initialize individual enhancement systems asynchronously
        Promise.all([
          enhancedPerformanceMonitor.startMonitoring(),
          enhancedAnalytics.initialize(),
          advancedCacheSystem.initialize(),
        ]).catch(console.error);
        
        // Initialize other systems with lower priority
        setTimeout(() => {
          try {
            new AdvancedAutomationSystem().initialize();
            new AccessibilityEnhancer().initialize();
            new SecurityEnhancer().initialize();
          } catch (error) {
            console.warn('Non-critical system initialization failed:', error);
          }
        }, 100);
        
        // SEO setup
        seoAnalytics.trackPageView(window.location.pathname);
        seoManager.updateMetaTags(seoData);
        
      } catch (error) {
        console.error('System initialization failed:', error);
      }
    };
    
    initializeSystems();
    enhancedAnalytics.initialize();
    advancedCacheSystem.initialize();
    new AdvancedAutomationSystem().initialize();
    new AccessibilityEnhancer().initialize();
    new SecurityEnhancer().initialize();
    
    // Initialize analytics
    analytics.initialize();
    // seoAnalytics and performanceSEO don't have initialize methods
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.optimizeFonts();
    performanceSEO.optimizeCSS();

    // Set default SEO data using the correct method
    seoManager.updateMetaTags(seoData);
    // Add performance marks for better monitoring
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-start');
    }
    
    // Preload critical resources
    preloadResource('/og-image.png', 'image');
    preloadResource('/favicon.ico', 'image');

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    // Update meta tags
    updateMetaTags({
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords || [],
      ogType: seoData.ogType || 'website',
      ogUrl: seoData.ogUrl || (typeof window !== 'undefined' ? window.location.href : ''),
      ogImage: seoData.ogImage || '/og-image.png',
      twitterCard: seoData.twitterCard || 'summary_large_image'
    });

    // Basic performance monitoring
    if (typeof window !== 'undefined') {
      console.log('🚀 Zion Tech Group App initialized');
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClick, handleKeyDown, handleScroll, seoData, preloadResource, seoManager, updateMetaTags]);

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
    }

    // Cleanup function
    return () => {
      window.removeEventListener('beforeunload', enhancedTrackEngagement);
      
      // Final engagement tracking
      trackEngagement();
    };
  }, [enhancedTrackEngagement, trackEngagement]);

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <ModernLoadingSpinner
          size="xl"
          variant="primary"
          text="Initializing Zion Tech Group..."
          showProgress
          progress={loadingProgress}
          className="animate-fade-in-scale"
        />
      </div>
    );
  }

  return (
    <AdvancedErrorBoundary
      onError={(error, errorInfo) => {
        console.error('App error:', error, errorInfo);
        // Send to error reporting service
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as { gtag: (event: string, action: string, params: Record<string, unknown>) => void }).gtag('event', 'exception', {
            description: error.message,
            fatal: true,
          });
        }
      }}
    >
      <EnhancedErrorBoundary>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AppRouter />
        
        {/* System Dashboard */}
        {showSystemDashboard && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">System Dashboard</h2>
                <button
                  onClick={() => setShowSystemDashboard(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <EnhancedSystemDashboard />
            </div>
          </div>
        )}

        {/* Performance Optimizer */}
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
        <AIPerformanceDashboard
          isVisible={showAIDashboard}
          onClose={() => setShowAIDashboard(false)}
        />
        
        {/* Performance Tracker - Background monitoring */}
        <PerformanceTracker
          onMetricsUpdate={(metrics) => {
            // Log performance metrics for debugging
            if (process.env.NODE_ENV === 'development') {
              console.log('Performance metrics:', metrics);
            }
          }}
          interval={10000} // Update every 10 seconds
        />
        
        {/* Accessibility Enhancements */}
        <AccessibilityEnhancements
          enableHighContrast={true}
          enableReducedMotion={true}
          enableFocusIndicators={true}
          enableScreenReader={true}
        />
        </div>
      </EnhancedErrorBoundary>
    </AdvancedErrorBoundary>
  );
}