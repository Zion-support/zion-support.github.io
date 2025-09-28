import React, { useMemo, useEffect, useCallback } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
// Component imports available for future use
// import PerformanceDashboard from './components/PerformanceDashboard';
// import RealTimeMonitor from './components/RealTimeMonitor';
// import SystemMetricsDashboard from './components/SystemMetricsDashboard';
// import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
// import EnhancedNotificationSystem from './components/EnhancedNotificationSystem';
// import PerformanceOptimizer from './components/PerformanceOptimizer';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
// Removed unused imports: seoOptimizer, cacheManager, apiClient, notificationManager, userFeedback
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import PerformanceDashboard from './components/PerformanceDashboard';
import RealTimeMonitor from './components/RealTimeMonitor';
import SystemMetricsDashboard from './components/SystemMetricsDashboard';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import EnhancedNotificationSystem from './components/EnhancedNotificationSystem';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAnalytics from './components/EnhancedAnalytics';
// Removed unused import: getComprehensiveEnhancements
import './index.css';

// Import utility modules
import { seoManager, seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { initializeErrorReporting } from './utils/errorReporting';
import { initOptimizations } from './utils/buildOptimizations';
import { performanceOptimizer } from './utils/optimization';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { enhancedSEO } from './utils/enhancedSEO';
import { enhancedPerformanceOptimizer } from './utils/enhancedPerformance';
import { enhancedSecurityManager } from './utils/enhancedSecurity';
import { enhancedAccessibilityManager } from './utils/enhancedAccessibility';
import { accessibilityManager } from './utils/accessibility';
import performanceEnhancer from './utils/performanceEnhancements';
import { PerformanceMonitor } from './utils/performanceMonitor';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import { advancedErrorRecovery } from './utils/advancedErrorRecovery';
import { advancedAutomationSystem } from './utils/advancedAutomationSystem';
import { advancedPerformanceOptimizer } from './utils/performanceOptimizer';
import { AccessibilityEnhancer } from './utils/accessibilityEnhancer';
import { SecurityEnhancer } from './utils/securityEnhancer';
import AdvancedPerformanceMonitor from './utils/advancedPerformanceMonitor';
import AdvancedAccessibilityManager from './utils/advancedAccessibilityManager';
import AdvancedSecurityManager from './utils/advancedSecurityManager';
import EnhancedUXManager from './utils/enhancedUXManager';
import { seoOptimizer } from './utils/seoOptimization';
import { cacheManager } from './utils/cacheManager';
import { apiClient } from './utils/apiClient';
import { notificationManager } from './utils/notificationManager';
export default function App(): React.JSX.Element {
  // State for system metrics dashboard (available for future use)
  // const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  
  // State for performance optimizer (available for future use)
  // const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);

  // Initialize app with custom configuration
<<<<<<< HEAD
  const { isLoading, loadingProgress, engagementData, handleScroll, handleClick } = useAppInitialization({
=======
  const { isLoading, loadingProgress, handleScroll, handleClick, trackEngagement } = useAppInitialization({
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-e4b2
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
    enableImageOptimization: true,
  });

<<<<<<< HEAD
  // Initialize comprehensive enhancements
  useEffect(() => {
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
    (window as Record<string, unknown>).enhancements = enhancements;
=======
  // Optimized keyboard handler for system dashboard toggle
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'D') {
      event.preventDefault();
      setShowSystemDashboard(prev => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'P') {
      event.preventDefault();
      setShowPerformanceOptimizer(prev => !prev);
    }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-e4b2
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

<<<<<<< HEAD
  // Track engagement function
  const trackEngagement = useCallback(() => {
    const timeOnPage = Date.now() - engagementData.startTime;
    seoAnalytics.trackUserEngagement(window.location.pathname, {
      timeOnPage,
      scrollDepth: engagementData.scrollDepth,
      clicks: engagementData.clicks,
    });
  }, [engagementData]);
=======

  // Simple SEO manager
  const seoManager = {
    updateMetaTags: (data: typeof seoData) => {
      if (typeof document !== 'undefined') {
        document.title = data.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', data.description);
        }
      }
    }
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-e4b2

  useEffect(() => {
    // Add performance marks for better monitoring
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-start');
    }
    
    // Preload critical resources
    preloadResource('/og-image.png', 'image');
    preloadResource('/favicon.ico', 'image');

<<<<<<< HEAD
=======
    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    // Initialize basic systems
    analytics.initialize();
    // Note: CacheManager, ApiClient, and NotificationManager don't have initialize methods
    // They are initialized when first used via their getInstance() methods
    
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-e4b2
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.preloadCriticalResources();
    performanceSEO.optimizeFonts();
<<<<<<< HEAD
    
    // Initialize analytics system
    analytics.initialize();
    analytics.trackPageView();

    // Initialize enhanced SEO optimizer
    seoOptimizer.updatePageSEO({
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords,
      image: seoData.ogImage,
      url: window.location.href,
      type: seoData.ogType as 'website' | 'article' | 'product'
    });

    // Initialize cache manager
    cacheManager.configure({
      maxSize: 100,
      ttl: 10 * 60 * 1000, // 10 minutes
      storageType: 'localStorage',
      enableCompression: true,
      enableEncryption: false
    });

    // Initialize API client
    apiClient.configure({
      baseURL: '/api',
      timeout: 30000,
      retries: 3,
      enableCaching: true,
      enableLogging: process.env.NODE_ENV === 'development'
    });

    // Initialize notification manager
    notificationManager.configure({
      position: 'top-right',
      duration: 5000,
      maxNotifications: 5,
      enableSound: true,
      enableVibration: true,
      enableBrowserNotifications: true,
      theme: 'auto'
    });

    // Show welcome notification
    notificationManager.info('Welcome to Zion Tech Group', 'Your advanced technology solutions platform is ready!');

    // Show welcome feedback
    userFeedback.showSuccess(
      'Welcome!',
      'Zion Tech Group is now ready with enhanced performance optimizations and user experience features.'
    );

    // Set default SEO data
    seoManager.updateSEO(seoData);

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
  }, [seoData, handleScroll, handleClick, preloadResource]);
=======
    // Note: optimizeCSS method doesn't exist in PerformanceSEO class

    // Set default SEO data using the correct method
    seoManager.updateMetaTags(seoData);
    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown);

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
  }, [seoData]);

  // Add keyboard event listener
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-e4b2

  // Main initialization and cleanup effect
  React.useEffect(() => {
    // Track engagement on page unload
    window.addEventListener('beforeunload', trackEngagement);

    // Mark app as fully initialized
    if (typeof window !== 'undefined' && window.performance && 
        typeof performance.mark === 'function' && 
        typeof performance.measure === 'function') {
      performance.mark('app-init-complete');
      performance.measure('app-initialization', 'app-init-start', 'app-init-complete');
    }

<<<<<<< HEAD
    // Set default SEO data
    seoManager.updateMetaTags(seoData);

    // Basic performance monitoring
    if (typeof window !== 'undefined') {
      console.log('🚀 Zion Tech Group App initialized');
    }
  }, [trackEngagement, seoData]);

  // Cleanup function for event listeners
  useEffect(() => {
    return () => {
      window.removeEventListener('beforeunload', trackEngagement);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, [trackEngagement, handleScroll, handleClick]);
=======
    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeunload', trackEngagement);
      
      // Clear timeouts (if any exist)
      // Note: Timeout variables are now managed by the component state
      
      // Stop monitoring
      // memoryMonitor.stopMonitoring(); // Not available
      
      // Cleanup new utilities
      const advancedPerformanceMonitor = AdvancedPerformanceMonitor.getInstance();
      advancedPerformanceMonitor.stopMonitoring();
      
      const accessibilityEnhancer = AccessibilityEnhancer.getInstance();
      accessibilityEnhancer.cleanup();
      
      const securityEnhancer = SecurityEnhancer.getInstance();
      securityEnhancer.cleanup();
      
      // Cleanup enhanced systems
      enhancedPerformanceMonitor.stopMonitoring();
      enhancedAnalytics.endSession();
      
      // Cleanup advanced systems
      advancedCacheSystem.clear();
      advancedAutomationSystem.stop();
      
      // Final engagement tracking
      trackEngagement();
      
      // Remove event listeners
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, [seoData, handleKeyDown, handleScroll, handleClick]);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-e4b2

  // Show loading screen while initializing
  if (isLoading) {
    return (
<<<<<<< HEAD
      <EnhancedErrorBoundary>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <ModernLoadingSpinner progress={loadingProgress} />
        </div>
      </EnhancedErrorBoundary>
=======
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <ModernLoadingSpinner progress={loadingProgress} />
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-e4b2
    );
  }

  return (
<<<<<<< HEAD
    <EnhancedErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AppRouter />
      </div>
    </EnhancedErrorBoundary>
=======
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
    </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-e4b2
  );
}