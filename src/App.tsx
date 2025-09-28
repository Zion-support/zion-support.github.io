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
import { performanceOptimizer } from './utils/performanceOptimizer';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';
import { seoOptimizer } from './utils/seoOptimizer';
import './index.css';

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

  // Get current pathname for SEO
  const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  // Get SEO data using current pathname
  const seoData = useSEOData(currentPathname);

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

  // Memoize the SEO data to prevent unnecessary re-renders
  const memoizedSeoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology'],
    canonical: `https://zion.app${currentPathname}`,
    ogTitle: 'Zion Tech Group - AI & Technology Solutions',
    ogDescription: 'Transform your business with cutting-edge AI and technology solutions.',
    ogImage: 'https://zion.app/og-image.jpg',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Zion Tech Group - AI & Technology Solutions',
    twitterDescription: 'Transform your business with cutting-edge AI and technology solutions.',
    twitterImage: 'https://zion.app/twitter-image.jpg'
  }), [currentPathname]);

  // Performance optimization hook
  const { optimizePerformance, clearCache, getPerformanceMetrics } = usePerformanceOptimization();

  // Update meta tags function
  const updateMetaTags = useCallback((data: typeof memoizedSeoData) => {
    if (typeof document === 'undefined') return;

    // Update title
    document.title = data.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', data.description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', data.keywords.join(', '));
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', data.canonical);

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', data.ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', data.ogDescription);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', data.ogImage);
    }

    // Update Twitter Card tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard) {
      twitterCard.setAttribute('content', data.twitterCard);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', data.twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', data.twitterDescription);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', data.twitterImage);
    }
  }, []);

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
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, [handleScroll, handleClick, enhancedTrackEngagement]);

  // SEO and performance effect
  React.useEffect(() => {
    // Update meta tags
    updateMetaTags(memoizedSeoData);
    
    // Basic performance monitoring
    if (typeof window !== 'undefined') {
      console.log('🚀 Zion Tech Group App initialized');
    }
  }, [memoizedSeoData, updateMetaTags]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl+Shift+D for System Dashboard
      if (event.ctrlKey && event.shiftKey && event.key === 'D') {
        event.preventDefault();
        setShowSystemDashboard(!showSystemDashboard);
      }
      // Ctrl+Shift+P for Performance Optimizer
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        setShowPerformanceOptimizer(!showPerformanceOptimizer);
      }
      // Ctrl+Shift+M for Performance Monitor
      if (event.ctrlKey && event.shiftKey && event.key === 'M') {
        event.preventDefault();
        setShowPerformanceMonitor(!showPerformanceMonitor);
      }
      // Ctrl+Shift+A for AI Dashboard
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setShowAIDashboard(!showAIDashboard);
      }
      // Ctrl+Shift+S for SEO Optimizer
      if (event.ctrlKey && event.shiftKey && event.key === 'S') {
        event.preventDefault();
        setShowSEOOptimizer(!showSEOOptimizer);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showSystemDashboard, showPerformanceOptimizer, showPerformanceMonitor, showAIDashboard, showSEOOptimizer]);

  if (isLoading) {
    return <ModernLoadingSpinner progress={loadingProgress} />;
  }

  return (
    <EnhancedErrorBoundary>
      <div className="app">
        <AppRouter />
        
        {/* System Dashboard - Toggle with Ctrl+Shift+D */}
        {showSystemDashboard && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">System Dashboard</h2>
                <button
                  onClick={() => setShowSystemDashboard(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              <EnhancedSystemDashboard />
            </div>
          </div>
        )}

        {/* Performance Optimizer - Toggle with Ctrl+Shift+P */}
        {showPerformanceOptimizer && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Optimizer</h2>
                <button
                  onClick={() => setShowPerformanceOptimizer(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              <PerformanceOptimizer />
            </div>
          </div>
        )}

        {/* Performance Monitor - Toggle with Ctrl+Shift+M */}
        {showPerformanceMonitor && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Monitor</h2>
                <button
                  onClick={() => setShowPerformanceMonitor(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              <PerformanceMonitor />
            </div>
          </div>
        )}

        {/* SEO Optimizer - Toggle with Ctrl+Shift+S */}
        {showSEOOptimizer && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">SEO Optimizer</h2>
                <button
                  onClick={() => setShowSEOOptimizer(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              <SEOOptimizer />
            </div>
          </div>
        )}
        
        {/* AI Performance Dashboard - Toggle with Ctrl+Shift+A */}
        <AIPerformanceDashboard
          isVisible={showAIDashboard}
          onClose={() => setShowAIDashboard(false)}
        />
      </div>
    </EnhancedErrorBoundary>
  );
}