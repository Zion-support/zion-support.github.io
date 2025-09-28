import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import PerformanceDashboard from './components/PerformanceDashboard';
import RealTimeMonitor from './components/RealTimeMonitor';
import SystemMetricsDashboard from './components/SystemMetricsDashboard';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import EnhancedNotificationSystem from './components/EnhancedNotificationSystem';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';
import './styles/modern-utilities.css';

// Import utility functions and managers
import { initializeErrorReporting } from './utils/errorReporting';
import { initOptimizations } from './utils/buildOptimizations';

export default function App(): React.JSX.Element {
  // State for system metrics dashboard
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  
  // State for performance optimizer
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);

  // Scroll handler for engagement tracking
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollDepth = Math.min(scrollTop / scrollHeight, 1);
    engagementData.scrollDepth = Math.max(engagementData.scrollDepth, scrollDepth);
  }, [engagementData]);

  // Click handler for engagement tracking
  const handleClick = useCallback(() => {
    engagementData.clicks += 1;
  }, [engagementData]);

  // Initialize app with custom configuration
  const { isLoading, loadingProgress } = useAppInitialization({
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSecurity: true,
    enableAnalytics: true,
    enableNotifications: true,
    enableCaching: true,
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

  useEffect(() => {
    // Initialize error reporting with enhanced configuration
    initializeErrorReporting();
    
    // Initialize build optimizations with performance monitoring
    initOptimizations();
    
    // Add performance marks for better monitoring
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-start');
    }

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
  }, [seoData, handleScroll, handleClick]);

  // Add keyboard event listener
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Track user engagement with throttling for better performance
  const trackEngagement = useCallback(() => {
    const timeOnPage = Date.now() - engagementData.startTime;
    console.log('User engagement tracked:', {
      timeOnPage,
      scrollDepth: engagementData.scrollDepth,
      clicks: engagementData.clicks,
    });
  }, [engagementData]);

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
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeunload', trackEngagement);
      
      // Final engagement tracking
      trackEngagement();
    };
  }, [trackEngagement, handleScroll, handleClick, handleKeyDown]);

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
    </EnhancedErrorBoundary>
  );
}
