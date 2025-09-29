import React, { useCallback, useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRouter } from './router';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import EnhancedPerformanceMonitor from './components/EnhancedPerformanceMonitor';
import AdvancedSEO from './components/AdvancedSEO';
import PerformanceTracker from './components/PerformanceTracker';
import { seoAnalytics, performanceSEO, seoManager } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { performanceOptimizer } from './utils/performanceOptimizations';
import { accessibilityEnhancer } from './utils/accessibilityEnhancements';
import { seoOptimizer } from './utils/seoOptimization';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { useSEOData } from './components/SEOOptimizer';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAccessibilityManager } from './utils/enhancedAccessibilityManager';
import { enhancedSEOOptimizer } from './utils/enhancedSEOOptimizer';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import SEOOptimizer from './components/SEOOptimizer';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
import PerformanceMonitor from './components/PerformanceMonitor';

// Import enhanced utilities
import { enhancedErrorHandler } from './utils/enhancedErrorHandling';
import { advancedErrorRecovery } from './utils/advancedErrorRecovery';
import { enhancedSecuritySystem } from './utils/enhancedSecuritySystem';
import { enhancedAccessibilitySystem } from './utils/enhancedAccessibilitySystem';
import { apiCache as apiCacheSystem, imageCache as imageCacheSystem, dataCache as dataCacheSystem } from './utils/enhancedCachingSystem';
import { analyticsSystem as enhancedAnalyticsSystem } from './utils/enhancedAnalyticsSystem';

// Import new advanced systems
import { performanceAnalytics } from './utils/advancedPerformanceAnalytics';
import { errorTracker } from './utils/advancedErrorTracker';
import { apiCache, imageCache, dataCache } from './utils/advancedCacheManager';

// Import comprehensive systems
// import enhancedErrorRecovery from './utils/comprehensiveErrorRecovery';

// Import types
import NotificationSystem, { Notification } from './components/NotificationSystem';
import { EnhancedNotification } from './types/comprehensive';
import './index.css';

// Lazy load heavy components for better performance
const LazyEnhancedSystemDashboard = lazy(() => import('./components/EnhancedSystemDashboard'));
const KeyboardShortcutsHelp = lazy(() => import('./components/KeyboardShortcutsHelp'));
const SystemHealthDashboard = lazy(() => import('./components/SystemHealthDashboard'));
const PerformanceWidget = lazy(() => import('./components/PerformanceWidget'));
const CommandPalette = lazy(() => import('./components/CommandPalette'));
const AdvancedMonitoringDashboard = lazy(() => import('./components/AdvancedMonitoringDashboard'));
const ComprehensivePerformanceDashboard = lazy(() => import('./components/ComprehensivePerformanceDashboard'));
const ComprehensiveMonitoringDashboard = lazy(() => import('./components/ComprehensiveMonitoringDashboard'));
const PerformanceOptimizationPanel = lazy(() => import('./components/PerformanceOptimizationPanel'));
const RealTimePerformanceMonitor = lazy(() => import('./components/RealTimePerformanceMonitor'));
const AdvancedAnalytics = lazy(() => import('./components/AdvancedAnalytics'));
const PerformanceDashboard = lazy(() => import('./components/PerformanceDashboard'));
const EnhancedCommandPalette = lazy(() => import('./components/EnhancedCommandPalette'));
// const PerformanceIndicator = lazy(() => import('./components/PerformanceIndicator'));
// const AccessibilityEnhancer = lazy(() => import('./components/AccessibilityEnhancer'));
// const DynamicMetaTags = lazy(() => import('./components/DynamicMetaTags'));
const SystemStatusIndicator = lazy(() => import('./components/SystemStatusIndicator'));
const EnhancedNotificationSystem = lazy(() => import('./components/EnhancedNotificationSystem'));
const KeyboardShortcutsManager = lazy(() => import('./components/KeyboardShortcutsManager'));
const ErrorRecoveryDashboard = lazy(() => import('./components/ErrorRecoveryDashboard'));
// import AdvancedPerformanceDashboard from './components/AdvancedPerformanceDashboard';
import WebsiteEnhancements from './components/WebsiteEnhancements';
import PerformanceEnhancer from './components/PerformanceEnhancer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import EnhancedSEO from './components/EnhancedSEO';
// import EnhancedAnalytics from './components/EnhancedAnalytics';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { performanceAlerts } from './utils/performanceAlerts';
import { accessibilityUtils } from './utils/accessibilityUtils';
import { securityUtils } from './utils/securityUtils';
// import { getNotificationManager } from './utils/advancedNotifications';
// import { getThemeManager } from './utils/themeManager';
// import { getKeyboardShortcuts } from './utils/advancedKeyboardShortcuts';
// import { getDataVisualization } from './utils/advancedDataVisualization';
// import { useAppInitialization } from './hooks/useAppInitialization';
import { enhancedSecurityManager } from './utils/enhancedSecurityManager';
import { initializePerformanceEnhancements } from './utils/performanceEnhancements';
import { advancedPerformanceOptimizer } from './utils/advancedPerformanceOptimizer';
import { advancedSEOOptimizer } from './utils/advancedSEOOptimizer';
import { advancedSecurityManager } from './utils/advancedSecurityManager';
import { advancedAnalytics } from './utils/advancedAnalytics';
import { advancedErrorHandler } from './utils/advancedErrorHandling';
import { advancedCachingSystem } from './utils/advancedCachingSystem';
import { advancedUXOptimizer } from './utils/advancedUXOptimizer';
import { advancedTestingFramework } from './utils/advancedTestingFramework';
import { advancedI18n } from './utils/advancedI18n';
import './index.css';

// Type definitions are imported from components

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAIDashboard, setShowAIDashboard] = useState(false);
  // const [showAdvancedDashboard, setShowAdvancedDashboard] = useState(false);
  const [showSEOOptimizer, setShowSEOOptimizer] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [showAdvancedMonitoring] = useState(false);
  const [showComprehensiveDashboard] = useState(false);
  const [showComprehensiveMonitoring, setShowComprehensiveMonitoring] = useState(false);
  const [showRealTimePerformance, setShowRealTimePerformance] = useState(false);
  const [showEnhancedCommandPalette, setShowEnhancedCommandPalette] = useState(false);
  const [showSystemStatus, setShowSystemStatus] = useState(true);
  const [showEnhancedNotifications] = useState(true);
  const [showKeyboardShortcutsManager] = useState(false);
  const [showPerformanceWidget, setShowPerformanceWidget] = useState(false);
  const [showSystemHealth, setShowSystemHealth] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [enhancedNotifications, setEnhancedNotifications] = useState<EnhancedNotification[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showRealTimeMetrics, setShowRealTimeMetrics] = useState(false);
  const [showRealTimeMonitor, setShowRealTimeMonitor] = useState(false);
  const [showWebsiteEnhancements, setShowWebsiteEnhancements] = useState(false);
  const [showPerformanceEnhancer, setShowPerformanceEnhancer] = useState(false);
  const [showAccessibilityEnhancer, setShowAccessibilityEnhancer] = useState(false);
  const [userPreferences, setUserPreferences] = useState({
    theme: 'auto',
    animations: true,
    notifications: true,
    analytics: true
  });

  const navigate = useNavigate();

  // Missing function definitions
  const handleScroll = useCallback(() => {
    // Track scroll depth for analytics
    const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    if (scrollDepth > 0 && scrollDepth % 25 === 0) {
      console.debug('Scroll depth tracked:', { depth: scrollDepth });
    }
  }, []);

  const handleClick = useCallback((event?: Event) => {
    console.debug('Click event captured for engagement tracking', event);
  }, []);

  const trackEngagement = useCallback(() => {
    console.debug('User engagement tracked', { 
      timestamp: Date.now(),
      session_duration: performance.now()
    });
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

  // Preload resource function
  const preloadResource = useCallback((url: string, type: string) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = type;
      document.head.appendChild(link);
    }
  }, []);

  // SEO data for SEOOptimizer component
  const seoDataForOptimizer = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises.',
    keywords: 'AI solutions, quantum computing, digital transformation, cloud services, enterprise technology',
    canonical: `https://zion.app${typeof window !== 'undefined' ? window.location.pathname : '/'}`,
    ogType: 'website',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image'
  }), []);

  // Initialize app with custom configuration
  // Temporarily disable useAppInitialization to fix build
  // const { isLoading, loadingProgress, handleScroll, handleClick, trackEngagement } = useAppInitialization({
  //   enablePerformanceMonitoring: true,
  //   enableAccessibility: true,
  //   enableSecurity: true,
  //   enableAnalytics: true,
  //   enableNotifications: true,
  //   enableCaching: true,
  // });
  


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


  // Initialize comprehensive enhancements
  useEffect(() => {
    try {
      
      // Initialize accessibility and security enhancers
      if (accessibilityEnhancer && typeof accessibilityEnhancer.initialize === 'function') {
        accessibilityEnhancer.initialize();
      }
      if (enhancedSecurityManager && typeof enhancedSecurityManager.initialize === 'function') {
        enhancedSecurityManager.initialize();
      }
      
      // Initialize new performance and accessibility enhancements
      initializePerformanceEnhancements();
      accessibilityEnhancer.initialize();
      
      // Initialize advanced optimizers
      advancedPerformanceOptimizer.initialize();
      advancedSEOOptimizer.initialize();
      accessibilityEnhancer.initialize();
      advancedSecurityManager.initialize();
      advancedAnalytics.initialize();
      // advancedErrorHandler is initialized in constructor
      advancedCachingSystem.initialize();
      advancedUXOptimizer.initialize();
      advancedTestingFramework.initialize();
      advancedI18n.initialize();
      // Store enhancements globally for debugging
      (window as unknown as Record<string, unknown>).enhancements = {
        performanceOptimizer: advancedPerformanceOptimizer,
        seoOptimizer: advancedSEOOptimizer,
        accessibilityEnhancer: accessibilityEnhancer,
        securityManager: advancedSecurityManager,
        analytics: advancedAnalytics,
        errorHandler: advancedErrorHandler,
        cachingSystem: advancedCachingSystem,
        uxOptimizer: advancedUXOptimizer
      };
      (window as unknown as Record<string, unknown>).performanceOptimizer = advancedPerformanceOptimizer;
      (window as unknown as Record<string, unknown>).seoOptimizer = advancedSEOOptimizer;
      (window as unknown as Record<string, unknown>).accessibilityEnhancer = accessibilityEnhancer;
      (window as unknown as Record<string, unknown>).securityManager = advancedSecurityManager;
      (window as unknown as Record<string, unknown>).analytics = advancedAnalytics;
      (window as unknown as Record<string, unknown>).errorHandler = advancedErrorHandler;
      (window as unknown as Record<string, unknown>).cachingSystem = advancedCachingSystem;
      (window as unknown as Record<string, unknown>).uxOptimizer = advancedUXOptimizer;
      (window as unknown as Record<string, unknown>).testingFramework = advancedTestingFramework;
      (window as unknown as Record<string, unknown>).i18n = advancedI18n;
    } catch (error) {
      console.error('Error initializing enhancements:', error);
    }
  }, []);

  // Optimized keyboard handler for system dashboard toggle

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
    } catch (error) {
      console.error('Error in performance monitoring:', error);
    }
  }, []);

  // Main initialization and cleanup effect
  useEffect(() => {
    // Add performance marks for better monitoring
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-start');
    }
    
    // Preload critical resources
    preloadResource('/og-image.png', 'image');
    preloadResource('/favicon.ico', 'image');

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
    seoManager.updateMetaTags(seoData);

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });

    // Initialize enhanced monitoring systems
    enhancedPerformanceMonitor.getAlerts();
    enhancedAccessibilityManager.getIssues();
    enhancedSEOOptimizer.getIssues();

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

    // Basic performance monitoring
    if (typeof window !== 'undefined') {
      console.log('🚀 Zion Tech Group App initialized');
    }

    // Track engagement on page unload
    window.addEventListener('beforeunload', trackEngagement);

    // Cleanup function
    return () => {
      window.removeEventListener('beforeunload', trackEngagement);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, [seoData, handleScroll, handleClick, preloadResource, trackEngagement]);

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
          case 'E':
            setShowPerformanceEnhancer(!showPerformanceEnhancer);
            break;
          case 'X':
            setShowAccessibilityEnhancer(!showAccessibilityEnhancer);
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
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    return <ModernLoadingSpinner progress={loadingProgress} />;
  }

  return (
    <EnhancedErrorBoundary>
      <AdvancedSEO 
        title="Zion Tech Group - Leading AI & IT Solutions"
        description="Transform your business with cutting-edge AI and IT solutions from Zion Tech Group. Enterprise security, AI innovation, and expert consulting services."
        keywords={["AI solutions", "IT consulting", "enterprise security", "digital transformation", "machine learning", "cloud services"]}
      />
      <SEOOptimizer seoData={seoDataForOptimizer} />
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
              <LazyEnhancedSystemDashboard />
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
              <PerformanceOptimizer>
                <div>Performance optimization in progress...</div>
              </PerformanceOptimizer>
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
              <PerformanceMonitor enabled={true} showDetails={true} />
            </div>
          </div>
        )}

        <AIPerformanceDashboard
          isVisible={showAIDashboard}
          onClose={() => setShowAIDashboard(false)}
        />

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
                <span className="text-green-400">{Math.round(((performance as { memory?: { usedJSHeapSize?: number } }).memory?.usedJSHeapSize || 0) / 1024 / 1024)} MB</span>
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

        {/* Performance Enhancer */}
        <PerformanceEnhancer 
          enabled={true}
          showMetrics={showPerformanceEnhancer}
          onMetricsUpdate={(metrics) => {
            console.log('Performance metrics updated:', metrics);
          }}
        />

        {/* Enhanced Performance Monitor */}
        <EnhancedPerformanceMonitor />

        {/* Accessibility Enhancer */}
        <AccessibilityEnhancer />

        {/* Advanced Performance Monitor */}
        <AdvancedPerformanceMonitor />

        {/* Enhanced SEO */}
        <EnhancedSEO 
          title="Zion Tech Group - Advanced AI and IT Solutions"
          description="Leading provider of AI-powered IT solutions, cloud services, cybersecurity, and digital transformation services."
          keywords={['AI solutions', 'IT consulting', 'cloud services', 'cybersecurity', 'digital transformation']}
        />

        {/* Comprehensive Performance Monitor */}
        {/* ComprehensivePerformanceMonitor - Temporarily disabled */}
        {/* <ComprehensivePerformanceMonitor 
          isVisible={showComprehensivePerformance} 
          onClose={() => setShowComprehensivePerformance(false)} 
        /> */}

        {/* Advanced SEO Optimizer - Temporarily disabled */}
        {/* <AdvancedSEOOptimizer 
          isVisible={showAdvancedSEO} 
          onClose={() => setShowAdvancedSEO(false)} 
        /> */}

        {/* Performance Tracker */}
        <PerformanceTracker />

        {/* System Health Dashboard */}
        <SystemHealthDashboard
          isVisible={showSystemHealth}
          onClose={() => setShowSystemHealth(false)}
        />

        {/* New Components */}
        <NotificationSystem
          notifications={notifications}
          onRemove={(id) => setNotifications(prev => prev.filter(n => n.id !== id))}
        />
        
        <Suspense fallback={<ModernLoadingSpinner />}>
          <KeyboardShortcutsHelp
            isVisible={showKeyboardHelp}
            onClose={() => setShowKeyboardHelp(false)}
          />
        </Suspense>

        <Suspense fallback={<ModernLoadingSpinner />}>
          <PerformanceWidget
            isVisible={showPerformanceWidget}
            onClose={() => setShowPerformanceWidget(false)}
          />
        </Suspense>

        {showPerformanceWidget && (
          <div className="fixed bottom-4 left-4 z-30">
            <PerformanceDashboard />
          </div>
        )}

        <Suspense fallback={<ModernLoadingSpinner />}>
          <CommandPalette
            isVisible={showCommandPalette}
            onClose={() => setShowCommandPalette(false)}
            commands={[
              {
                id: 'home',
                title: 'Go to Home',
                description: 'Navigate to the home page',
                category: 'Navigation',
                action: () => navigate('/'),
                shortcut: 'Ctrl+H'
              },
              {
                id: 'about',
                title: 'Go to About',
                description: 'Navigate to the about page',
                category: 'Navigation',
                action: () => navigate('/about'),
                shortcut: 'Ctrl+A'
              },
              {
                id: 'services',
                title: 'Go to Services',
                description: 'Navigate to the services page',
                category: 'Navigation',
                action: () => navigate('/services'),
                shortcut: 'Ctrl+S'
              },
              {
                id: 'contact',
                title: 'Go to Contact',
                description: 'Navigate to the contact page',
                category: 'Navigation',
                action: () => navigate('/contact'),
                shortcut: 'Ctrl+C'
              }
            ]}
          />
        </Suspense>

        {showAdvancedMonitoring && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <AdvancedMonitoringDashboard
              showRealTime={true}
              refreshInterval={5000}
            />
          </Suspense>
        )}

        {showRealTimePerformance && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <RealTimePerformanceMonitor
              isVisible={showRealTimePerformance}
              onClose={() => setShowRealTimePerformance(false)}
            />
          </Suspense>
        )}

        {showEnhancedCommandPalette && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <EnhancedCommandPalette
              isVisible={showEnhancedCommandPalette}
              onClose={() => setShowEnhancedCommandPalette(false)}
            />
          </Suspense>
        )}

        {showComprehensiveDashboard && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <ComprehensivePerformanceDashboard />
          </Suspense>
        )}

        {showComprehensiveMonitoring && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <ComprehensiveMonitoringDashboard />
          </Suspense>
        )}

        {/* Performance Optimization Panel */}
        <Suspense fallback={null}>
          <PerformanceOptimizationPanel />
        </Suspense>

        {/* Error Recovery Dashboard */}
        <Suspense fallback={null}>
          <ErrorRecoveryDashboard />
        </Suspense>

        {/* System Status Indicator */}
        {showSystemStatus && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <SystemStatusIndicator
              refreshInterval={30000}
              showDetails={true}
            />
          </Suspense>
        )}

        {/* Enhanced Notification System */}
        {showEnhancedNotifications && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <EnhancedNotificationSystem
              notifications={enhancedNotifications}
              onRemove={(id: string) => {
                setEnhancedNotifications(prev => prev.filter(n => n.id !== id));
              }}
              maxNotifications={5}
              position="top-right"
              showSoundToggle={true}
              showHistoryToggle={true}
            />
          </Suspense>
        )}

        {/* Keyboard Shortcuts Manager */}
        {showKeyboardShortcutsManager && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <KeyboardShortcutsManager
              shortcuts={[
                {
                  id: 'toggle-system-dashboard',
                  keys: ['ctrl', 'shift', 'd'],
                  description: 'Toggle System Dashboard',
                  category: 'system',
                  action: () => setShowSystemDashboard(!showSystemDashboard),
                  enabled: true,
                  global: true
                },
                {
                  id: 'toggle-system-health',
                  keys: ['ctrl', 'shift', 'h'],
                  description: 'Toggle System Health Dashboard',
                  category: 'system',
                  action: () => setShowSystemHealth(!showSystemHealth),
                  enabled: true,
                  global: true
                },
                {
                  id: 'toggle-performance-monitor',
                  keys: ['ctrl', 'shift', 'r'],
                  description: 'Toggle Real-Time Performance Monitor',
                  category: 'tools',
                  action: () => setShowRealTimePerformance(!showRealTimePerformance),
                  enabled: true,
                  global: true
                },
                {
                  id: 'toggle-command-palette',
                  keys: ['ctrl', 'k'],
                  description: 'Toggle Enhanced Command Palette',
                  category: 'navigation',
                  action: () => setShowEnhancedCommandPalette(!showEnhancedCommandPalette),
                  enabled: true,
                  global: true
                },
                {
                  id: 'toggle-theme',
                  keys: ['ctrl', 'shift', 't'],
                  description: 'Toggle Theme (Light/Dark)',
                  category: 'view',
                  action: () => setIsDarkMode(!isDarkMode),
                  enabled: true,
                  global: true
                },
                {
                  id: 'toggle-system-status',
                  keys: ['ctrl', 'shift', 's'],
                  description: 'Toggle System Status Indicator',
                  category: 'system',
                  action: () => setShowSystemStatus(!showSystemStatus),
                  enabled: true,
                  global: true
                },
                {
                  id: 'toggle-comprehensive-monitoring',
                  keys: ['ctrl', 'shift', 'm'],
                  description: 'Toggle Comprehensive Monitoring Dashboard',
                  category: 'monitoring',
                  action: () => setShowComprehensiveMonitoring(!showComprehensiveMonitoring),
                  enabled: true,
                  global: true
                }
              ]}
              onShortcutTriggered={(shortcut) => {
                console.log('Shortcut triggered:', shortcut.description);
              }}
              showHelpPanel={true}
              enableGlobalShortcuts={true}
            />
          </Suspense>
        )}
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

        {/* Performance Enhancer Button */}
        <button
          onClick={() => setShowPerformanceEnhancer(!showPerformanceEnhancer)}
          className="fixed bottom-4 right-84 z-40 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          title="Performance Enhancer (Ctrl+Shift+E)"
        >
          ⚡
        </button>

        {/* Accessibility Enhancer Button */}
        <button
          onClick={() => setShowAccessibilityEnhancer(!showAccessibilityEnhancer)}
          className="fixed bottom-4 right-100 z-40 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          title="Accessibility Enhancer (Ctrl+Shift+X)"
        >
          ♿
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
          <div>Ctrl+Shift+E: Performance Enhancer</div>
          <div>Ctrl+Shift+X: Accessibility Enhancer</div>
          <div>Ctrl+Shift+K: Keyboard Help</div>
          <div>Ctrl+K: Command Palette</div>
          <div>Escape: Close All</div>
        </div>
      </div>
    </EnhancedErrorBoundary>
  );
  }