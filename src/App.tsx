import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
// Removed unused import: getComprehensiveEnhancements
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';
import './styles/modern-utilities.css';

// Import utility modules
import { seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
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
    // Note: CacheManager, ApiClient, and NotificationManager don't have initialize methods
    // They are initialized when first used via their getInstance() methods
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.optimizeFonts();
    // Note: optimizeCSS method doesn't exist in PerformanceSEO class

    // Set default SEO data using the correct method
    seoManager.updateMetaTags(seoData);
    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown);

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
  }, [handleClick, handleKeyDown, handleScroll, seoData, preloadResource, seoManager]);

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
  }, [seoData, handleKeyDown, handleScroll, handleClick, trackEngagement]);

  // Show loading screen while initializing
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <ModernLoadingSpinner progress={loadingProgress} />
      </div>
    );
  }

  return (
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
  );
}