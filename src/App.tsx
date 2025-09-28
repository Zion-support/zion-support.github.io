import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { AppRouter } from './router';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceTracker from './components/PerformanceTracker';
import { seoAnalytics, performanceSEO, seoManager } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { performanceOptimizer } from './utils/performanceOptimizations';
import { advancedAccessibilityEnhancer } from './utils/advancedAccessibilityEnhancer';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { useAppInitialization } from './hooks/useAppInitialization';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
import WebsiteEnhancements from './components/WebsiteEnhancements';
import SEOOptimizer from './components/SEOOptimizer';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { performanceAlerts } from './utils/performanceAlerts';
import { accessibilityUtils } from './utils/accessibilityUtils';
import { securityUtils } from './utils/securityUtils';
import { enhancedSecurityManager } from './utils/enhancedSecurityManager';
import { initializePerformanceEnhancements } from './utils/performanceEnhancements';
import { initializeAccessibilityEnhancements } from './utils/accessibilityEnhancements';
import { advancedPerformanceOptimizer } from './utils/advancedPerformanceOptimizer';
import { advancedSEOOptimizer } from './utils/advancedSEOOptimizer';
import { advancedAccessibilityEnhancer } from './utils/advancedAccessibilityEnhancer';
import { advancedSecurityManager } from './utils/advancedSecurityManager';
import { advancedAnalytics } from './utils/advancedAnalytics';
import { advancedErrorHandler } from './utils/advancedErrorHandler';
import { advancedCachingSystem } from './utils/advancedCachingSystem';
import { advancedUXOptimizer } from './utils/advancedUXOptimizer';
import { advancedTestingFramework } from './utils/advancedTestingFramework';
import { advancedI18n } from './utils/advancedI18n';
import { advancedAIAssistant } from './utils/advancedAIAssistant';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import AdvancedMonitoringDashboard from './components/AdvancedMonitoringDashboard';
import AdvancedAnalyticsDashboard from './components/AdvancedAnalyticsDashboard';
import AdvancedAIAssistant from './components/AdvancedAIAssistant';
import NotificationSystem, { Notification } from './components/NotificationSystem';
import KeyboardShortcutsHelp from './components/KeyboardShortcutsHelp';
import CommandPalette from './components/CommandPalette';
import RealTimePerformanceMonitor from './components/RealTimePerformanceMonitor';
import SystemHealthDashboard from './components/SystemHealthDashboard';
import PerformanceMetricsDashboard from './components/PerformanceMetricsDashboard';
import ComprehensiveImprovements from './components/ComprehensiveImprovements';
import './index.css';

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAIDashboard, setShowAIDashboard] = useState(false);
  const [showSEOOptimizer, setShowSEOOptimizer] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [showRealTimeMetrics, setShowRealTimeMetrics] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showWebsiteEnhancements, setShowWebsiteEnhancements] = useState(false);
  const [showAccessibilityPanel] = useState(false);
  const [showPerformanceMetrics, setShowPerformanceMetrics] = useState(false);
  const [showRealTimeMonitor, setShowRealTimeMonitor] = useState(false);
  const [showSystemHealth, setShowSystemHealth] = useState(false);
  const [showComprehensiveImprovements, setShowComprehensiveImprovements] = useState(false);
  const [showAdvancedMonitoring, setShowAdvancedMonitoring] = useState(false);
  const [showAdvancedAnalytics, setShowAdvancedAnalytics] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  // Initialize app with custom configuration
  const { isLoading, loadingProgress, handleScroll, handleClick, trackEngagement: originalTrackEngagement } = useAppInitialization({
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSecurity: true,
    enableAnalytics: true,
    enableNotifications: true,
    enableCaching: true,
  });

  // Get current pathname for SEO
  const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  // Simple SEO data
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology'],
    canonicalUrl: `https://zion.app${currentPathname}`,
    ogImage: 'https://zion.app/og-image.jpg',
    ogUrl: `https://zion.app${currentPathname}`,
    ogType: 'website' as const,
    twitterCard: 'summary_large_image' as const,
    siteName: 'Zion Tech Group'
  }), [currentPathname]);

  // Performance optimization hook
  const { preloadResource } = usePerformanceOptimization({
    enablePreloading: true,
    enableResourceHints: true,
    enableImageOptimization: true,
  });

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);

  // Command palette commands
  const commandPaletteCommands = useMemo(() => [
    {
      id: 'system-dashboard',
      title: 'Toggle System Dashboard',
      description: 'Open/close the system metrics dashboard',
      category: 'Dashboard',
      action: () => setShowSystemDashboard(prev => !prev),
      shortcut: 'Ctrl+Shift+D'
    },
    {
      id: 'performance-optimizer',
      title: 'Toggle Performance Optimizer',
      description: 'Open/close the performance optimization panel',
      category: 'Performance',
      action: () => setShowPerformanceOptimizer(prev => !prev),
      shortcut: 'Ctrl+Shift+P'
    },
    {
      id: 'performance-monitor',
      title: 'Toggle Performance Monitor',
      description: 'Open/close the performance monitoring panel',
      category: 'Performance',
      action: () => setShowPerformanceMonitor(prev => !prev),
      shortcut: 'Ctrl+Shift+M'
    },
    {
      id: 'ai-dashboard',
      title: 'Toggle AI Dashboard',
      description: 'Open/close the AI performance dashboard',
      category: 'AI',
      action: () => setShowAIDashboard(prev => !prev),
      shortcut: 'Ctrl+Shift+A'
    },
    {
      id: 'keyboard-help',
      title: 'Show Keyboard Shortcuts',
      description: 'Display all available keyboard shortcuts',
      category: 'Help',
      action: () => setShowKeyboardHelp(true),
      shortcut: 'Ctrl+Shift+H'
    },
    {
      id: 'close-all',
      title: 'Close All Modals',
      description: 'Close all open modals and dashboards',
      category: 'Navigation',
      action: () => {
        setShowSystemDashboard(false);
        setShowPerformanceOptimizer(false);
        setShowPerformanceMonitor(false);
        setShowAIDashboard(false);
        setShowRealTimeMetrics(false);
        setShowCommandPalette(false);
        setShowKeyboardHelp(false);
      },
      shortcut: 'Escape'
    }
  ], []);

  // Enhanced track engagement function
  const trackEngagement = useCallback(() => {
    try {
      const timeOnPage = Date.now() - engagementData.startTime;
      seoAnalytics.trackUserEngagement(window.location.pathname, {
        timeOnPage,
        scrollDepth: engagementData.scrollDepth,
        clicks: engagementData.clicks,
      });
      // Also call the original trackEngagement from useAppInitialization
      originalTrackEngagement();
    } catch (error) {
      console.error('Error tracking engagement:', error);
    }
  }, [engagementData.clicks, engagementData.scrollDepth, engagementData.startTime, originalTrackEngagement]);

  // Simple SEO manager
  const seoManagerInstance = useMemo(() => ({
    updateMetaTags: (data: typeof seoData) => {
      try {
        if (typeof document !== 'undefined') {
          document.title = data.title;
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', data.description);
          }
        }
      } catch (error) {
        console.error('Error updating meta tags:', error);
      }
    }
  }), []);

  // Initialize comprehensive enhancements
  useEffect(() => {
    try {
      // Initialize enhanced systems
      enhancedPerformanceMonitor.startMonitoring();
      analytics.initialize();
      
      // Initialize accessibility and security enhancers
      if (advancedAccessibilityEnhancer && typeof advancedAccessibilityEnhancer.initialize === 'function') {
        advancedAccessibilityEnhancer.initialize();
      }
      if (enhancedSecurityManager && typeof enhancedSecurityManager.initialize === 'function') {
        enhancedSecurityManager.initialize();
      }
      
      // Initialize new performance and accessibility enhancements
      initializePerformanceEnhancements();
      initializeAccessibilityEnhancements();
      
      // Initialize advanced optimizers
      advancedPerformanceOptimizer.initialize();
      advancedSEOOptimizer.initialize();
      advancedAccessibilityEnhancer.initialize();
      advancedSecurityManager.initialize();
      advancedAnalytics.initialize();
      advancedErrorHandler.initialize();
      advancedCachingSystem.initialize();
      advancedUXOptimizer.initialize();
      advancedTestingFramework.initialize();
      advancedI18n.initialize();
      advancedAIAssistant.initialize();
      
      // Get comprehensive enhancements
      const enhancements = getComprehensiveEnhancements();

      // Store enhancements globally for debugging
      (window as unknown as Record<string, unknown>).enhancements = enhancements;
      (window as unknown as Record<string, unknown>).performanceOptimizer = advancedPerformanceOptimizer;
      (window as unknown as Record<string, unknown>).seoOptimizer = advancedSEOOptimizer;
      (window as unknown as Record<string, unknown>).accessibilityEnhancer = advancedAccessibilityEnhancer;
      (window as unknown as Record<string, unknown>).securityManager = advancedSecurityManager;
      (window as unknown as Record<string, unknown>).analytics = advancedAnalytics;
      (window as unknown as Record<string, unknown>).errorHandler = advancedErrorHandler;
      (window as unknown as Record<string, unknown>).cachingSystem = advancedCachingSystem;
      (window as unknown as Record<string, unknown>).uxOptimizer = advancedUXOptimizer;
      (window as unknown as Record<string, unknown>).testingFramework = advancedTestingFramework;
      (window as unknown as Record<string, unknown>).i18n = advancedI18n;
      (window as unknown as Record<string, unknown>).aiAssistant = advancedAIAssistant;
    } catch (error) {
      console.error('Error initializing enhancements:', error);
    }
  }, []);

  // Optimized keyboard handler for system dashboard toggle
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'D') {
      event.preventDefault();
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
  }, []);

  useEffect(() => {
    try {
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
      
      // Initialize analytics system
      analytics.initialize();
      analytics.trackPageView();

      // Set default SEO data using the correct method
      seoManagerInstance.updateMetaTags(seoData);
    } catch (error) {
      console.error('Error in main initialization effect:', error);
    }
  }, [seoData, handleScroll, handleClick, handleKeyDown, preloadResource, seoManagerInstance]);

  // Main initialization and cleanup effect
  React.useEffect(() => {
    try {
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

      // Track engagement on page unload
      window.addEventListener('beforeunload', trackEngagement);
      
      // Cleanup function
      return () => {
        try {
          document.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('beforeunload', trackEngagement);
          
          // Final engagement tracking
          trackEngagement();
          
          // Remove event listeners
          window.removeEventListener('scroll', handleScroll);
          document.removeEventListener('click', handleClick);
        } catch (error) {
          console.error('Error in cleanup effect:', error);
        }
      };
    } catch (error) {
      console.error('Error in cleanup effect:', error);
    }
  }, [trackEngagement, handleKeyDown, handleScroll, handleClick]);

  // Enhanced keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Dashboard shortcuts
      if (event.ctrlKey && event.shiftKey) {
        event.preventDefault();
        switch (event.key) {
          case 'D':
            setShowSystemDashboard(!showSystemDashboard);
            break;
          case 'P':
            setShowPerformanceOptimizer(!showPerformanceOptimizer);
            break;
          case 'M':
            setShowPerformanceMonitor(!showPerformanceMonitor);
            break;
          case 'A':
            setShowAIDashboard(!showAIDashboard);
            break;
          case 'S':
            setShowSEOOptimizer(!showSEOOptimizer);
            break;
          case 'T':
            setIsDarkMode(!isDarkMode);
            break;
          case 'R':
            setShowRealTimeMonitor(!showRealTimeMonitor);
            break;
          case 'H':
            setShowSystemHealth(!showSystemHealth);
            break;
          case 'K':
            setShowKeyboardHelp(!showKeyboardHelp);
            break;
          case 'X':
            setShowPerformanceMetrics(!showPerformanceMetrics);
            break;
          case 'I':
            setShowComprehensiveImprovements(!showComprehensiveImprovements);
            break;
          case 'O':
            setShowAdvancedMonitoring(!showAdvancedMonitoring);
            break;
          case 'L':
            setShowAdvancedAnalytics(!showAdvancedAnalytics);
            break;
          case 'B':
            setShowAIAssistant(!showAIAssistant);
            break;
          case 'N':
            // Show notification
            if ((window as any).notifications) {
              (window as any).notifications.add({
                type: 'info',
                title: 'Notification Test',
                message: 'This is a test notification!',
                duration: 3000
              });
            }
            break;
          case 'C':
            // Clear notifications
            if ((window as any).notifications) {
              (window as any).notifications.clear();
            }
            break;
        }
      }
      
      // Command palette shortcut
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        setShowCommandPalette(!showCommandPalette);
      }
      
      // Help shortcut
      if (event.ctrlKey && event.key === '/') {
        event.preventDefault();
        setShowKeyboardHelp(!showKeyboardHelp);
      }
      
      // Escape to close all modals
      if (event.key === 'Escape') {
        setShowSystemDashboard(false);
        setShowPerformanceOptimizer(false);
        setShowPerformanceMonitor(false);
        setShowAIDashboard(false);
        setShowSEOOptimizer(false);
        setShowKeyboardHelp(false);
        setShowCommandPalette(false);
        setShowRealTimeMonitor(false);
        setShowSystemHealth(false);
        setShowComprehensiveImprovements(false);
        setShowAdvancedMonitoring(false);
        setShowAdvancedAnalytics(false);
        setShowAIAssistant(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showSystemDashboard, showPerformanceOptimizer, showPerformanceMonitor, showAIDashboard, showSEOOptimizer, isDarkMode, showKeyboardHelp, showCommandPalette, showRealTimeMonitor, showSystemHealth, showPerformanceMetrics]);

  // Track engagement on scroll and click
  useEffect(() => {
    const handleScrollWithEngagement = () => {
      handleScroll();
      trackEngagement();
    };

    const handleClickWithEngagement = (_event: Event) => {
      handleClick(new Event('click'));
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
    return <ModernLoadingSpinner progress={loadingProgress} />;
  }

  return (
    <EnhancedErrorBoundary>
      <SEOOptimizer seoData={seoData} />
      <AdvancedAnalytics 
        enableHeatmaps={true}
        enableUserJourney={true}
        enableConversionTracking={true}
        enablePerformanceTracking={true}
        enableErrorTracking={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AppRouter />
        
        {/* System Dashboard - Toggle with Ctrl+Shift+D */}
        {showSystemDashboard && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="system-dashboard-title"
          >
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
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="performance-optimizer-title"
          >
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
              <PerformanceMonitor showDashboard={true} />
            </div>
          </div>
        )}

        {/* AI Performance Dashboard */}
        <AIPerformanceDashboard
          isVisible={showAIDashboard}
          onClose={() => setShowAIDashboard(false)}
        />

        {/* Real-time Metrics */}
        {showRealTimeMetrics && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="real-time-metrics-title"
            onClick={(e) => e.target === e.currentTarget && setShowRealTimeMetrics(false)}
          >
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 id="real-time-metrics-title" className="text-2xl font-bold">Real-time Metrics</h2>
                <button
                  onClick={() => setShowRealTimeMetrics(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <p>Real-time performance metrics will be displayed here.</p>
              </div>
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
              <SEOOptimizer seoData={seoData} />
            </div>
          </div>
        )}

        {/* Real-time Metrics Display */}
        {showRealTimeMetrics && (
          <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-90 text-white p-4 rounded-lg shadow-lg min-w-[300px]">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold">Real-time Metrics</h3>
              <button
                onClick={() => setShowRealTimeMetrics(false)}
                className="text-gray-300 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Memory Usage:</span>
                <span className="text-green-400">{Math.round(((performance as Performance & { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize || 0) / 1024 / 1024)} MB</span>
              </div>
              <div className="flex justify-between">
                <span>Render Time:</span>
                <span className="text-blue-400">{Math.round(performance.now())} ms</span>
              </div>
              <div className="flex justify-between">
                <span>Network Latency:</span>
                <span className="text-yellow-400">0 ms</span>
              </div>
              <div className="flex justify-between">
                <span>Errors:</span>
                <span className="text-red-400">0</span>
              </div>
            </div>
          </div>
        )}

        {/* Real-Time Performance Monitor */}
        <RealTimePerformanceMonitor
          isVisible={showRealTimeMonitor}
          onClose={() => setShowRealTimeMonitor(false)}
        />

        {/* Website Enhancements */}
        <WebsiteEnhancements 
          isVisible={showWebsiteEnhancements} 
          onClose={() => setShowWebsiteEnhancements(false)} 
        />

        {/* Performance Tracker */}
        <PerformanceTracker />

        {/* System Health Dashboard */}
        <SystemHealthDashboard
          isVisible={showSystemHealth}
          onClose={() => setShowSystemHealth(false)}
        />

        {/* Performance Metrics Dashboard - Toggle with Ctrl+Shift+X */}
        <PerformanceMetricsDashboard
          isVisible={showPerformanceMetrics}
          onClose={() => setShowPerformanceMetrics(false)}
        />

        {/* Comprehensive Improvements Dashboard - Toggle with Ctrl+Shift+I */}
        <ComprehensiveImprovements
          isVisible={showComprehensiveImprovements}
          onClose={() => setShowComprehensiveImprovements(false)}
        />

        {/* Advanced Monitoring Dashboard - Toggle with Ctrl+Shift+M */}
        <AdvancedMonitoringDashboard
          isVisible={showAdvancedMonitoring}
          onClose={() => setShowAdvancedMonitoring(false)}
        />

        {/* Advanced Analytics Dashboard - Toggle with Ctrl+Shift+L */}
        <AdvancedAnalyticsDashboard
          isVisible={showAdvancedAnalytics}
          onClose={() => setShowAdvancedAnalytics(false)}
        />

        {/* AI Assistant - Toggle with Ctrl+Shift+B */}
        <AdvancedAIAssistant
          isVisible={showAIAssistant}
          onClose={() => setShowAIAssistant(false)}
        />

        {/* New Components */}
        <NotificationSystem
          notifications={notifications}
          onRemove={(id) => setNotifications(prev => prev.filter(n => n.id !== id))}
        />
        
        <KeyboardShortcutsHelp
          isVisible={showKeyboardHelp}
          onClose={() => setShowKeyboardHelp(false)}
        />
        
        <CommandPalette
          isVisible={showCommandPalette}
          onClose={() => setShowCommandPalette(false)}
          commands={commandPaletteCommands}
        />

        {/* Theme Toggle Button */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed bottom-4 right-4 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          title="Toggle Theme (Ctrl+Shift+T)"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        {/* Keyboard Shortcuts Help Button */}
        <button
          onClick={() => setShowKeyboardHelp(true)}
          className="fixed bottom-4 right-20 z-40 bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          title="Keyboard Shortcuts (Ctrl+/)"
        >
          ⌨️
        </button>

        {/* Command Palette Button */}
        <button
          onClick={() => setShowCommandPalette(true)}
          className="fixed bottom-4 right-36 z-40 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          title="Command Palette (Ctrl+K)"
        >
          ⌘
        </button>

        {/* Real-Time Monitor Button */}
        <button
          onClick={() => setShowRealTimeMonitor(true)}
          className="fixed bottom-4 right-52 z-40 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          title="Real-Time Monitor (Ctrl+Shift+R)"
        >
          📊
        </button>

        {/* System Health Button */}
        <button
          onClick={() => setShowSystemHealth(true)}
          className="fixed bottom-4 right-68 z-40 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          title="System Health (Ctrl+Shift+H)"
        >
          🏥
        </button>

        {/* Comprehensive Improvements Button */}
        <button
          onClick={() => setShowComprehensiveImprovements(true)}
          className="fixed bottom-4 right-84 z-40 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          title="Comprehensive Improvements (Ctrl+Shift+I)"
        >
          🚀
        </button>

        {/* Advanced Monitoring Button */}
        <button
          onClick={() => setShowAdvancedMonitoring(true)}
          className="fixed bottom-4 right-100 z-40 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          title="Advanced Monitoring (Ctrl+Shift+O)"
        >
          📊
        </button>

        {/* Advanced Analytics Button */}
        <button
          onClick={() => setShowAdvancedAnalytics(true)}
          className="fixed bottom-4 right-116 z-40 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          title="Advanced Analytics (Ctrl+Shift+L)"
        >
          📈
        </button>

        {/* AI Assistant Button */}
        <button
          onClick={() => setShowAIAssistant(true)}
          className="fixed bottom-4 right-132 z-40 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          title="AI Assistant (Ctrl+Shift+B)"
        >
          🤖
        </button>

        {/* Keyboard Shortcuts Help Panel */}
        <div className="fixed bottom-4 left-4 z-40 bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm opacity-75 hover:opacity-100 transition-opacity duration-200">
          <div className="font-semibold mb-1">Keyboard Shortcuts:</div>
          <div>Ctrl+Shift+D: System Dashboard</div>
          <div>Ctrl+Shift+P: Performance Optimizer</div>
          <div>Ctrl+Shift+M: Performance Monitor</div>
          <div>Ctrl+Shift+A: AI Dashboard</div>
          <div>Ctrl+Shift+S: SEO Optimizer</div>
          <div>Ctrl+Shift+T: Toggle Theme</div>
          <div>Ctrl+Shift+R: Real-Time Monitor</div>
          <div>Ctrl+Shift+H: System Health</div>
          <div>Ctrl+Shift+I: Comprehensive Improvements</div>
          <div>Ctrl+Shift+O: Advanced Monitoring</div>
          <div>Ctrl+Shift+L: Advanced Analytics</div>
          <div>Ctrl+Shift+B: AI Assistant</div>
          <div>Ctrl+Shift+K: Keyboard Help</div>
          <div>Ctrl+K: Command Palette</div>
          <div>Escape: Close All</div>
        </div>
      </div>
    </EnhancedErrorBoundary>
  );
}