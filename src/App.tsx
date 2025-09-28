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
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
import { SEOOptimizer, useSEOData } from './components/SEOOptimizer';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import { AdvancedAutomationSystem } from './utils/advancedAutomationSystem';
import { AccessibilityEnhancer } from './utils/accessibilityEnhancer';
import { SecurityEnhancer } from './utils/securityEnhancer';
<<<<<<< HEAD
=======
import { performanceOptimizer } from './utils/performanceOptimizer';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';
import { seoOptimizer } from './utils/seoOptimizer';
>>>>>>> 096e1c5f4cb1b59160bae4e84d482bdeaef6dab2
import './index.css';

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAIDashboard, setShowAIDashboard] = useState(false);
<<<<<<< HEAD
=======
  
>>>>>>> 096e1c5f4cb1b59160bae4e84d482bdeaef6dab2
  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);

<<<<<<< HEAD
  // Simple SEO manager
  const seoManager = useMemo(() => ({
    updateMetaTags: (data: typeof seoData) => {
      if (typeof document !== 'undefined') {
        document.title = data.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', data.description);
        }
      }
    }
  }), []);

=======
  // Engagement tracking data (currently unused but available for future features)
  // const engagementData = useMemo(() => ({
  //   startTime: Date.now(),
  //   scrollDepth: 0,
  //   clicks: 0
  // }), []);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a0bd
=======
>>>>>>> 096e1c5f4cb1b59160bae4e84d482bdeaef6dab2
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
<<<<<<< HEAD
<<<<<<< HEAD
      setShowSystemDashboard(prev => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'P') {
      event.preventDefault();
      setShowPerformanceOptimizer(prev => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
      event.preventDefault();
      setShowPerformanceMonitor(prev => !prev);
=======
      setShowSystemDashboard((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'P') {
      event.preventDefault();
      setShowPerformanceOptimizer((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
      event.preventDefault();
      setShowPerformanceMonitor((prev: boolean) => !prev);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a0bd
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
      event.preventDefault();
      setShowAIDashboard((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
      event.preventDefault();
      setShowPerformanceMonitor(prev => !prev);
    }
  }, []);
<<<<<<< HEAD

  // Memoize the SEO data to prevent unnecessary re-renders
  const seoData = useSEOData(currentPathname);
  // Enhanced engagement tracking function
=======
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
        case 'Escape':
          // Close all dashboards
          setShowSystemDashboard(false);
          setShowPerformanceOptimizer(false);
          setShowPerformanceMonitor(false);
          setShowAIDashboard(false);
          break;
      }
    }
  }, []);

  // Enhanced track engagement function
>>>>>>> 096e1c5f4cb1b59160bae4e84d482bdeaef6dab2
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
=======
  // Memoize the SEO data to prevent unnecessary re-renders
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology', 'machine learning', 'automation', 'blockchain'],
    ogType: 'website',
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image' as const
  }), []);

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a0bd
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
=======

  // Memoize the SEO data to prevent unnecessary re-renders
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology', 'machine learning', 'automation', 'blockchain'],
    canonicalUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogType: 'website' as const,
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image' as const
  }), []);

>>>>>>> 096e1c5f4cb1b59160bae4e84d482bdeaef6dab2
  // Initialize comprehensive enhancements
  useEffect(() => {
    const enhancements = getComprehensiveEnhancements();
    // Remove the initialize call since it's private
    
    // Initialize individual enhancement systems
    // Remove initialize calls for classes that don't have this method
    new AccessibilityEnhancer().initialize();
<<<<<<< HEAD
    new SecurityEnhancer().initialize();
    
    // Initialize analytics
    analytics.initialize();
    seoAnalytics.initialize();
    performanceSEO.initialize();
    seoManager.initialize();
=======
  useEffect(() => {
=======
    new AdvancedAutomationSystem();
    new SecurityEnhancer();
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.optimizeFonts();
    performanceSEO.optimizeCSS();

    // Set default SEO data using the correct method
    seoManager.updateMetaTags(seoData);
    
    // Initialize advanced optimization systems
    performanceOptimizer.optimizeBundle();
    accessibilityEnhancer.initialize();
    seoOptimizer.optimizePage(seoData);

>>>>>>> 096e1c5f4cb1b59160bae4e84d482bdeaef6dab2
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

<<<<<<< HEAD
    // Initialize basic systems
    analytics.initialize();
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a0bd
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.optimizeFonts();
    performanceSEO.optimizeCSS();

    // Set default SEO data using the correct method
    seoManager.updateMetaTags(seoData);

    // Update meta tags
    updateMetaTags(seoData);
<<<<<<< HEAD
    
    // Track engagement on page unload
    window.addEventListener('beforeunload', enhancedTrackEngagement);
    
=======

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a0bd
    // Basic performance monitoring
    if (typeof window !== 'undefined') {
      console.log('🚀 Zion Tech Group App initialized');
    }
=======
    // Track engagement on page unload
    window.addEventListener('beforeunload', enhancedTrackEngagement);
>>>>>>> 096e1c5f4cb1b59160bae4e84d482bdeaef6dab2

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
<<<<<<< HEAD
<<<<<<< HEAD
  }, [handleScroll, handleClick, handleKeyDown, seoData, preloadResource, seoManager, updateMetaTags, enhancedTrackEngagement]);

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

=======
  }, [handleScroll, handleClick, handleKeyDown, seoData, preloadResource, updateMetaTags]);

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
    window.addEventListener('beforeunload', trackEngagement);

    // Cleanup function
    return () => {
      window.removeEventListener('beforeunload', trackEngagement);
      
      // Final engagement tracking
      trackEngagement();
    };
  }, [trackEngagement]);

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

  // Show loading spinner while initializing
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a0bd
=======
  }, [trackEngagement, handleKeyDown, handleScroll, handleClick, enhancedTrackEngagement, seoData, preloadResource]);

>>>>>>> 096e1c5f4cb1b59160bae4e84d482bdeaef6dab2
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
    <EnhancedErrorBoundary>
      <SEOOptimizer seoData={seoData} />
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 096e1c5f4cb1b59160bae4e84d482bdeaef6dab2
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
<<<<<<< HEAD
=======
        {/* Performance Monitor - Toggle with Ctrl+Shift+M */}
        <PerformanceMonitor 
          showDashboard={showPerformanceMonitor}
          onMetricsUpdate={(metrics) => {
            console.log('Performance metrics:', metrics);
          }}
        />
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a0bd
        
        {/* AI Performance Dashboard - Toggle with Ctrl+Shift+A */}
=======

        {/* AI Performance Dashboard */}
>>>>>>> 096e1c5f4cb1b59160bae4e84d482bdeaef6dab2
        <AIPerformanceDashboard
          isVisible={showAIDashboard}
          onClose={() => setShowAIDashboard(false)}
        />
      </div>
    </EnhancedErrorBoundary>
  );
}