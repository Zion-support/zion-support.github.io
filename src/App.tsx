import React, { useMemo, useEffect, useCallback } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { analytics } from './utils/analytics';
import { seoAnalytics, performanceSEO } from './utils/seoEnhanced';
// Available for future use:
// import { seoManager } from './utils/seoEnhanced';
// import { seoOptimizer } from './utils/seoOptimization';
// import { cacheManager } from './utils/cacheManager';
// import { apiClient } from './utils/apiClient';
// import { notificationManager } from './utils/notificationManager';
// import { userFeedback } from './utils/userFeedbackManager';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import { AdvancedAutomationSystem } from './utils/advancedAutomationSystem';
import { AccessibilityEnhancer } from './utils/accessibilityEnhancer';
import { SecurityEnhancer } from './utils/securityEnhancer';
import './index.css';

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer (for future use)
  // const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  // const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);

  // Initialize app with custom configuration
  const { isLoading, loadingProgress, handleScroll, handleClick, trackEngagement: originalTrackEngagement } = useAppInitialization({
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSecurity: true,
    enableAnalytics: true,
    enableNotifications: true,
    enableCaching: true,
  });

  // Initialize comprehensive enhancements
  useEffect(() => {
    // Initialize enhanced systems
    enhancedPerformanceMonitor.startMonitoring();
    enhancedAnalytics.initialize();
    advancedCacheSystem.initialize();
    AdvancedAutomationSystem.getInstance().initialize();
    
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
  }, []);

  // Optimized keyboard handler for system dashboard toggle
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'D') {
      event.preventDefault();
      // setShowSystemDashboard(prev => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'P') {
      event.preventDefault();
      // setShowPerformanceOptimizer(prev => !prev);
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

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);

  // Enhanced track engagement function
  const trackEngagement = useCallback(() => {
    const timeOnPage = Date.now() - engagementData.startTime;
    seoAnalytics.trackUserEngagement(window.location.pathname, {
      timeOnPage,
      scrollDepth: engagementData.scrollDepth,
      clicks: engagementData.clicks,
    });
    // Also call the original trackEngagement from useAppInitialization
    originalTrackEngagement();
  }, [engagementData.clicks, engagementData.scrollDepth, engagementData.startTime, originalTrackEngagement]);

  // Simple SEO manager
  const seoManagerInstance = useMemo(() => ({
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

  // SEO and performance optimization effect
  useEffect(() => {
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
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.preloadCriticalResources();
    performanceSEO.optimizeFonts();
    performanceSEO.optimizeCSS();

    // Set default SEO data using the correct method
    seoManagerInstance.updateMetaTags(seoData);
  }, [seoData, handleScroll, handleClick, handleKeyDown, seoManagerInstance]);

  // Main initialization and cleanup effect
  React.useEffect(() => {
    // Mark app as fully initialized
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-complete');
    }

    // Cleanup function
    return () => {
      // Remove event listeners
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleScroll, handleClick, handleKeyDown]);

  // Performance optimization hook
  const { optimizePerformance } = usePerformanceOptimization();

  // Optimize performance on mount
  useEffect(() => {
    optimizePerformance();
  }, [optimizePerformance]);

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
    return (
      <EnhancedErrorBoundary>
        <div className="min-h-screen flex items-center justify-center bg-zion-dark">
          <ModernLoadingSpinner progress={loadingProgress} />
        </div>
      </EnhancedErrorBoundary>
    );
  }

  return (
    <EnhancedErrorBoundary>
      <div className="min-h-screen bg-zion-dark text-white">
        {/* System Dashboard - Available via Ctrl+Shift+D */}
        {/* <EnhancedSystemDashboard 
          isOpen={showSystemDashboard}
          onClose={() => setShowSystemDashboard(false)}
        /> */}
        
        {/* Performance Optimizer - Available via Ctrl+Shift+P */}
        {/* <PerformanceOptimizer 
          isOpen={showPerformanceOptimizer}
          onClose={() => setShowPerformanceOptimizer(false)}
        /> */}
        
        {/* Main Application Router */}
        <AppRouter />
      </div>
    </EnhancedErrorBoundary>
  );
}