import React, { useMemo, useEffect, useCallback, useState } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';
import './styles/modern-utilities.css';

// Import utility modules
import { seoAnalytics, performanceSEO, seoManager } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { seoOptimizer } from './utils/seoOptimization';
import { cacheManager } from './utils/cacheManager';
import { apiClient } from './utils/apiClient';
import { notificationManager } from './utils/notificationManager';
import { userFeedback } from './utils/userFeedbackManager';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import { advancedAutomationSystem } from './utils/advancedAutomationSystem';
import { AccessibilityEnhancer } from './utils/accessibilityEnhancer';
import { SecurityEnhancer } from './utils/securityEnhancer';
import AdvancedPerformanceMonitor from './utils/advancedPerformanceMonitor';

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);

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

  // Performance optimization hook
  const { preloadResource } = usePerformanceOptimization({
    enablePreloading: true,
    enableResourceHints: true,
    enableImageOptimization: true,
  });

  // Initialize comprehensive enhancements
  useEffect(() => {
    // Initialize enhanced systems
    enhancedPerformanceMonitor.startMonitoring();
    enhancedAnalytics.initialize();
    advancedCacheSystem.initialize();
    advancedAutomationSystem.start();
    
    // Initialize accessibility and security enhancers
    const accessibilityEnhancer = AccessibilityEnhancer.getInstance();
    const securityEnhancer = SecurityEnhancer.getInstance();
    
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
    
    // Store enhancers globally for debugging
    (window as unknown as Record<string, unknown>).enhancements = {
      accessibilityEnhancer,
      securityEnhancer,
      enhancedPerformanceMonitor,
      enhancedAnalytics,
      advancedCacheSystem,
      advancedAutomationSystem,
      ...enhancements
    };
  }, []);

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
  }, []);
<<<<<<< HEAD
=======

>>>>>>> 054fcbbc76da5d048d426fc47efa18f1beaac27d
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

  // Simple SEO manager
  const seoManagerInstance = {
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
<<<<<<< HEAD

=======
>>>>>>> 054fcbbc76da5d048d426fc47efa18f1beaac27d
  useEffect(() => {
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

    // Initialize basic systems
    analytics.initialize();
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.preloadCriticalResources();
    performanceSEO.optimizeFonts();
<<<<<<< HEAD
=======
    
    // Initialize analytics system
    analytics.initialize();
    analytics.trackPageView();
>>>>>>> 054fcbbc76da5d048d426fc47efa18f1beaac27d

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

    // Set default SEO data using the correct method
<<<<<<< HEAD
    seoManagerInstance.updateMetaTags(seoData);
  }, [seoData, handleScroll, handleClick, handleKeyDown, preloadResource]);
=======
    seoManager.updateMetaTags(seoData);
    
    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown);

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
  }, [handleClick, handleKeyDown, handleScroll, seoData, preloadResource, seoManager]);
>>>>>>> 054fcbbc76da5d048d426fc47efa18f1beaac27d

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

    // Basic performance monitoring
    if (typeof window !== 'undefined') {
      console.log('🚀 Zion Tech Group App initialized');
    }
<<<<<<< HEAD

    // Cleanup function
=======
  }, [trackEngagement]);

  // Cleanup function for event listeners
  useEffect(() => {
>>>>>>> 054fcbbc76da5d048d426fc47efa18f1beaac27d
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeunload', trackEngagement);
      
<<<<<<< HEAD
=======
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
      
>>>>>>> 054fcbbc76da5d048d426fc47efa18f1beaac27d
      // Remove event listeners
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
<<<<<<< HEAD
  }, [trackEngagement, handleKeyDown, handleScroll, handleClick]);
=======
  }, [seoData, handleKeyDown, handleScroll, handleClick, trackEngagement]);
>>>>>>> 054fcbbc76da5d048d426fc47efa18f1beaac27d

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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <ModernLoadingSpinner progress={loadingProgress} />
      </div>
>>>>>>> 054fcbbc76da5d048d426fc47efa18f1beaac27d
    );
  }

  return (
    <EnhancedErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AppRouter />
        
<<<<<<< HEAD
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
=======
        {/* System Dashboard - Toggle with Ctrl+Shift+D */}
        {showSystemDashboard && (
          <EnhancedSystemDashboard
            onClose={() => setShowSystemDashboard(false)}
          />
        )}
        
        {/* Performance Optimizer - Toggle with Ctrl+Shift+P */}
        {showPerformanceOptimizer && (
          <PerformanceOptimizer
            onClose={() => setShowPerformanceOptimizer(false)}
          />
>>>>>>> 054fcbbc76da5d048d426fc47efa18f1beaac27d
        )}
      </div>
    </EnhancedErrorBoundary>
  );
}