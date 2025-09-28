import React, { useMemo, useEffect, useState, useCallback } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { seoAnalytics, performanceSEO, seoManager } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { seoOptimizer } from './utils/seoOptimization';
import { cacheManager } from './utils/cacheManager';
import { apiClient } from './utils/apiClient';
import { notificationManager } from './utils/notificationManager';
import { userFeedback } from './utils/userFeedbackManager';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import PerformanceDashboard from './components/PerformanceDashboard';
import RealTimeMonitor from './components/RealTimeMonitor';
import SystemMetricsDashboard from './components/SystemMetricsDashboard';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import EnhancedNotificationSystem from './components/EnhancedNotificationSystem';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAnalytics from './components/EnhancedAnalytics';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';
import './styles/modern-utilities.css';

export default function App(): React.JSX.Element {
  // State for system metrics dashboard
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  
  // State for performance optimizer
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);

  // Initialize app with custom configuration
  const { isLoading, loadingProgress, engagementData, handleScroll, handleClick } = useAppInitialization({
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
    twitterCard: 'summary_large_image' as const
  }), []);

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
    // Note: cacheManager, apiClient, and notificationManager are already initialized as singletons
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.optimizeFonts();
    // Note: optimizeCSS method doesn't exist, using available methods

    // Set default SEO data
    seoManager.updateSEO(seoData);

    // Basic performance monitoring
    if (typeof window !== 'undefined') {
      console.log('🚀 Zion Tech Group App initialized');
    }

    // Mark app as fully initialized
    if (typeof window !== 'undefined' && window.performance && 
        typeof performance.mark === 'function' && 
        typeof performance.measure === 'function') {
      performance.mark('app-init-complete');
      performance.measure('app-initialization', 'app-init-start', 'app-init-complete');
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleScroll, handleClick, handleKeyDown, seoData, preloadResource]);

  // Track engagement function
  const trackEngagement = useCallback(() => {
    const timeOnPage = Date.now() - engagementData.startTime;
    seoAnalytics.trackUserEngagement(window.location.pathname, {
      timeOnPage,
      scrollDepth: engagementData.scrollDepth,
      clicks: engagementData.clicks,
    });
  }, [engagementData]);

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

  // Show loading screen while initializing
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
      <AppRouter />
      <PerformanceDashboard />
      <RealTimeMonitor />
      <SystemMetricsDashboard 
        isVisible={showSystemDashboard}
        onClose={() => setShowSystemDashboard(false)}
      />
      {showSystemDashboard && <EnhancedSystemDashboard />}
      <EnhancedNotificationSystem 
        position="top-right"
        enableAnimations
        enableAccessibility
        maxNotifications={5}
      />
      <PerformanceOptimizer 
        isVisible={showPerformanceOptimizer}
        onClose={() => setShowPerformanceOptimizer(false)}
      />
      <EnhancedAnalytics />
    </EnhancedErrorBoundary>
  );
}