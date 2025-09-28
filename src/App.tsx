import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { seoAnalytics, performanceSEO, seoManager } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
// import { performanceOptimizer } from './utils/performanceOptimizations';
// import { accessibilityEnhancer } from './utils/accessibilityEnhancements';
// import { seoOptimizer } from './utils/seoOptimizations';
// import PerformanceDashboard from './components/PerformanceDashboard';
// import RealTimeMonitor from './components/RealTimeMonitor';
// import SystemMetricsDashboard from './components/SystemMetricsDashboard';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
import AdvancedPerformanceDashboard from './components/AdvancedPerformanceDashboard';
import ComprehensiveSystemDashboard from './components/ComprehensiveSystemDashboard';
import { SEOOptimizer, useSEOData } from './components/SEOOptimizer';
import EnhancedAnalytics from './components/EnhancedAnalytics';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import { AdvancedAutomationSystem } from './utils/advancedAutomationSystem';
import { AccessibilityEnhancer } from './utils/accessibilityEnhancer';
import { SecurityEnhancer } from './utils/securityEnhancer';
import CommandPalette from './components/CommandPalette';
import KeyboardShortcutsHelp from './components/KeyboardShortcutsHelp';
import NotificationSystem, { Notification } from './components/NotificationSystem';
import RealTimePerformanceMonitor from './components/RealTimePerformanceMonitor';
import SystemHealthDashboard from './components/SystemHealthDashboard';
import { performanceAlerts } from './utils/performanceAlerts';
import { errorRecovery } from './utils/errorRecovery';
import { accessibilityUtils } from './utils/accessibilityUtils';
import { securityUtils } from './utils/securityUtils';
import { advancedPerformanceOptimizer } from './utils/advancedPerformanceOptimizer';
import { enhancedSecurityManager } from './utils/enhancedSecurityManager';
import './index.css';

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAIDashboard, setShowAIDashboard] = useState(false);
  const [showAdvancedPerformanceDashboard, setShowAdvancedPerformanceDashboard] = useState(false);
  const [showComprehensiveSystemDashboard, setShowComprehensiveSystemDashboard] = useState(false);
  const [showRealTimeMetrics, setShowRealTimeMetrics] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showSEOOptimizer, setShowSEOOptimizer] = useState(false);
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showRealTimeMonitor, setShowRealTimeMonitor] = useState(false);
  const [showSystemHealth, setShowSystemHealth] = useState(false);
  // const [userPreferences, setUserPreferences] = useState({
  //   theme: 'auto',
  //   animations: true,
  //   notifications: true,
  //   analytics: true
  // });
  // Performance metrics state
  const [performanceMetrics, setPerformanceMetrics] = useState({
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0,
    errorCount: 0
  });

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

  // Command palette commands
<<<<<<< HEAD
  const commandPaletteCommands = useMemo(() => [
=======
  const commands = useMemo(() => [
>>>>>>> d198976932ef256b976dc7406ae7fd29019b4667
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
<<<<<<< HEAD
=======
      id: 'advanced-performance-dashboard',
      title: 'Toggle Advanced Performance Dashboard',
      description: 'Open/close the advanced performance dashboard',
      category: 'Performance',
      action: () => setShowAdvancedPerformanceDashboard(prev => !prev),
      shortcut: 'Ctrl+Shift+V'
    },
    {
      id: 'comprehensive-system-dashboard',
      title: 'Toggle Comprehensive System Dashboard',
      description: 'Open/close the comprehensive system dashboard',
      category: 'System',
      action: () => setShowComprehensiveSystemDashboard(prev => !prev),
      shortcut: 'Ctrl+Shift+Q'
    },
    {
>>>>>>> d198976932ef256b976dc7406ae7fd29019b4667
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
<<<<<<< HEAD
=======
        setShowAdvancedPerformanceDashboard(false);
        setShowComprehensiveSystemDashboard(false);
>>>>>>> d198976932ef256b976dc7406ae7fd29019b4667
        setShowRealTimeMetrics(false);
        setShowCommandPalette(false);
        setShowKeyboardHelp(false);
      },
      shortcut: 'Escape'
    }
  ], []);
<<<<<<< HEAD

  // Optimized keyboard handler for system dashboard toggle - removed unused function
=======
>>>>>>> d198976932ef256b976dc7406ae7fd29019b4667

  // Optimized keyboard handler for system dashboard toggle
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey) {
      event.preventDefault();
      switch (event.key) {
        case 'D':
          setShowSystemDashboard(prev => !prev);
          break;
        case 'P':
          setShowPerformanceOptimizer(prev => !prev);
          break;
        case 'R':
          setShowRealTimeMetrics(prev => !prev);
          break;
        case 'M':
          setShowPerformanceMonitor(prev => !prev);
          break;
        case 'A':
          setShowAIDashboard(prev => !prev);
          break;
        case 'V':
          setShowAdvancedPerformanceDashboard(prev => !prev);
          break;
        case 'Q':
          setShowComprehensiveSystemDashboard(prev => !prev);
          break;
        case 'C':
          setShowCommandPalette(prev => !prev);
          break;
        case 'H':
          setShowKeyboardHelp(prev => !prev);
          break;
        case 'S':
          setShowSEOOptimizer(prev => !prev);
          break;
        case 'Escape':
          // Close all modals and dashboards
          setShowSystemDashboard(false);
          setShowPerformanceOptimizer(false);
          setShowPerformanceMonitor(false);
          setShowAIDashboard(false);
          setShowRealTimeMetrics(false);
          setShowCommandPalette(false);
          setShowKeyboardHelp(false);
          setShowSEOOptimizer(false);
          setShowAccessibilityPanel(false);
          break;
      }
    }
  }, []);
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
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology', 'machine learning', 'automation', 'blockchain'],
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
  // const { getPerformanceMetrics } = usePerformanceOptimization();

  // Initialize comprehensive enhancements
  useEffect(() => {
    try {
      // Initialize comprehensive enhancements first
      const enhancements = getComprehensiveEnhancements();
      enhancements.initialize();
      
      // Initialize individual enhancement systems
      if ('startMonitoring' in enhancedPerformanceMonitor) {
        enhancedPerformanceMonitor.startMonitoring();
      } else if ('initialize' in enhancedPerformanceMonitor) {
        (enhancedPerformanceMonitor as any).initialize();
      }
      enhancedAnalytics.initialize();
      advancedCacheSystem.initialize();
      
      // Initialize new advanced systems
      advancedPerformanceOptimizer.initialize();
      enhancedSecurityManager.initialize();
      new AdvancedAutomationSystem().initialize();
      // Initialize enhancement systems
      new AccessibilityEnhancer();
      new SecurityEnhancer();
    } catch (error) {
      console.warn('Some enhancement systems failed to initialize:', error);
      // Log error for debugging
      console.error('Initialization error:', error);
    }
    
    // Initialize basic systems
    analytics.initialize();
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.optimizeFonts();
    performanceSEO.optimizeCSS();

    // Initialize new utility systems
    performanceAlerts.checkMetric('loadTime', performance.now(), 3000);
    accessibilityUtils.announce('Application initialized');
    securityUtils.getSecurityScore();

    // Set default SEO data using the correct method
    seoManager.updateMetaTags(seoData);

    // Update meta tags
    updateMetaTags(memoizedSeoData);
  }, [seoData]);

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
    // Add performance marks for better monitoring
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-start');
    }
    
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

  // Real-time performance metrics monitoring
  useEffect(() => {
    if (!showRealTimeMetrics) return;

    const updateMetrics = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const memory = (window.performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        setPerformanceMetrics(prev => ({
          memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0,
          renderTime: navigation ? Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart) : 0,
          networkLatency: navigation ? Math.round(navigation.responseEnd - navigation.requestStart) : 0,
          errorCount: prev.errorCount
        }));
      }
    };

    const interval = setInterval(updateMetrics, 1000);
    updateMetrics(); // Initial update

    return () => clearInterval(interval);
  }, [showRealTimeMetrics]);

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
            setShowRealTimeMetrics(!showRealTimeMetrics);
            setShowRealTimeMonitor(!showRealTimeMonitor);
            break;
          case 'H':
            setShowSystemHealth(!showSystemHealth);
            break;
          case 'K':
            setShowKeyboardHelp(!showKeyboardHelp);
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
        setShowRealTimeMetrics(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showSystemDashboard, showPerformanceOptimizer, showPerformanceMonitor, showAIDashboard, showSEOOptimizer, isDarkMode, showKeyboardHelp, showCommandPalette, showRealTimeMonitor, showSystemHealth, showRealTimeMetrics]);

<<<<<<< HEAD
=======
  // Command palette commands
  const commandPaletteCommands = [
    {
      id: 'toggle-system-dashboard',
      title: 'Toggle System Dashboard',
      description: 'Open or close the system dashboard',
      category: 'Dashboard',
      action: () => setShowSystemDashboard(!showSystemDashboard),
      shortcut: 'Ctrl+Shift+D'
    },
    {
      id: 'toggle-performance-optimizer',
      title: 'Toggle Performance Optimizer',
      description: 'Open or close the performance optimizer',
      category: 'Dashboard',
      action: () => setShowPerformanceOptimizer(!showPerformanceOptimizer),
      shortcut: 'Ctrl+Shift+P'
    },
    {
      id: 'toggle-performance-monitor',
      title: 'Toggle Performance Monitor',
      description: 'Open or close the performance monitor',
      category: 'Dashboard',
      action: () => setShowPerformanceMonitor(!showPerformanceMonitor),
      shortcut: 'Ctrl+Shift+M'
    },
    {
      id: 'toggle-ai-dashboard',
      title: 'Toggle AI Dashboard',
      description: 'Open or close the AI performance dashboard',
      category: 'Dashboard',
      action: () => setShowAIDashboard(!showAIDashboard),
      shortcut: 'Ctrl+Shift+A'
    },
    {
      id: 'toggle-seo-optimizer',
      title: 'Toggle SEO Optimizer',
      description: 'Open or close the SEO optimizer',
      category: 'Dashboard',
      action: () => setShowSEOOptimizer(!showSEOOptimizer),
      shortcut: 'Ctrl+Shift+S'
    },
    {
      id: 'toggle-theme',
      title: 'Toggle Theme',
      description: 'Switch between dark and light theme',
      category: 'Appearance',
      action: () => setIsDarkMode(!isDarkMode),
      shortcut: 'Ctrl+Shift+T'
    },
    {
      id: 'toggle-real-time-monitor',
      title: 'Toggle Real-Time Monitor',
      description: 'Open or close the real-time performance monitor',
      category: 'Dashboard',
      action: () => setShowRealTimeMonitor(!showRealTimeMonitor),
      shortcut: 'Ctrl+Shift+R'
    },
    {
      id: 'toggle-system-health',
      title: 'Toggle System Health',
      description: 'Open or close the system health dashboard',
      category: 'Dashboard',
      action: () => setShowSystemHealth(!showSystemHealth),
      shortcut: 'Ctrl+Shift+H'
    },
    {
      id: 'show-keyboard-help',
      title: 'Show Keyboard Shortcuts',
      description: 'Display all available keyboard shortcuts',
      category: 'Help',
      action: () => setShowKeyboardHelp(true),
      shortcut: 'Ctrl+Shift+K'
    },
    {
      id: 'show-notifications',
      title: 'Test Notifications',
      description: 'Show a test notification',
      category: 'Testing',
      action: () => {
        if ((window as any).notifications) {
          (window as any).notifications.add({
            type: 'success',
            title: 'Command Executed',
            message: 'Test notification sent successfully!',
            duration: 3000
          });
        }
      },
      shortcut: 'Ctrl+Shift+N'
    }
  ];

>>>>>>> d198976932ef256b976dc7406ae7fd29019b4667
  // Track engagement on scroll and click
  useEffect(() => {
    const handleScrollWithEngagement = () => {
      handleScroll();
      trackEngagement();
    };

<<<<<<< HEAD
    const handleClickWithEngagement = () => {
      handleClick();
=======
    const handleClickWithEngagement = (event: Event) => {
      handleClick(event);
>>>>>>> d198976932ef256b976dc7406ae7fd29019b4667
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
    return <ModernLoadingSpinner progress={loadingProgress} />;
  }

  return (
    <EnhancedErrorBoundary>
      <SEOOptimizer seoData={seoData} />
      <EnhancedAnalytics />
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
              <PerformanceMonitor />
            </div>
          </div>
        )}

        {/* AI Performance Dashboard */}
        <AIPerformanceDashboard
          isVisible={showAIDashboard}
          onClose={() => setShowAIDashboard(false)}
        />

        {/* Advanced Performance Dashboard */}
        <AdvancedPerformanceDashboard
          isVisible={showAdvancedDashboard}
          onClose={() => setShowAdvancedDashboard(false)}
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
        
        {/* AI Performance Dashboard - Toggle with Ctrl+Shift+A */}
        <AIPerformanceDashboard
          isVisible={showAIDashboard}
          onClose={() => setShowAIDashboard(false)}
        />

        {/* Advanced Performance Dashboard - Toggle with Ctrl+Shift+P */}
        <AdvancedPerformanceDashboard
          isVisible={showAdvancedPerformanceDashboard}
          onClose={() => setShowAdvancedPerformanceDashboard(false)}
        />

        {/* Comprehensive System Dashboard - Toggle with Ctrl+Shift+S */}
        <ComprehensiveSystemDashboard
          isVisible={showComprehensiveSystemDashboard}
          onClose={() => setShowComprehensiveSystemDashboard(false)}
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
                <span className="text-green-400">{performanceMetrics.memoryUsage} MB</span>
              </div>
              <div className="flex justify-between">
                <span>Render Time:</span>
                <span className="text-blue-400">{performanceMetrics.renderTime} ms</span>
              </div>
              <div className="flex justify-between">
                <span>Network Latency:</span>
                <span className="text-yellow-400">{performanceMetrics.networkLatency} ms</span>
              </div>
              <div className="flex justify-between">
                <span>Errors:</span>
                <span className="text-red-400">{performanceMetrics.errorCount}</span>
              </div>
            </div>
          </div>
        )}

        {/* Real-Time Performance Monitor */}
        <RealTimePerformanceMonitor
          isVisible={showRealTimeMonitor}
          onClose={() => setShowRealTimeMonitor(false)}
        />

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

        {/* Keyboard Shortcuts Help Panel */}
        <div className="fixed bottom-4 left-4 z-40 bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm opacity-75 hover:opacity-100 transition-opacity duration-200">
          <div className="font-semibold mb-1">Keyboard Shortcuts:</div>
          <div>Ctrl+Shift+D: System Dashboard</div>
          <div>Ctrl+Shift+V: Advanced Performance Dashboard</div>
          <div>Ctrl+Shift+M: Performance Monitor</div>
          <div>Ctrl+Shift+A: AI Dashboard</div>
          <div>Ctrl+Shift+Q: Comprehensive System Dashboard</div>
          <div>Ctrl+Shift+S: SEO Optimizer</div>
          <div>Ctrl+Shift+T: Toggle Theme</div>
          <div>Ctrl+Shift+R: Real-Time Monitor</div>
          <div>Ctrl+Shift+H: System Health</div>
          <div>Ctrl+Shift+K: Keyboard Help</div>
          <div>Ctrl+K: Command Palette</div>
          <div>Escape: Close All</div>
        </div>
      </div>
      
      {/* Additional components */}
      <AIPerformanceDashboard 
        isVisible={showPerformanceOptimizer}
        onClose={() => setShowPerformanceOptimizer(false)}
      />
      <EnhancedSystemDashboard />
      <NotificationSystem
        notifications={notifications}
        onRemove={(id) => setNotifications(prev => prev.filter(n => n.id !== id))}
      />
      <SEOOptimizer seoData={seoData} />
      <EnhancedAnalytics />
      
      {/* Command Palette */}
      <CommandPalette
        isVisible={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
        commands={commands}
      />
      
      {/* Keyboard Shortcuts Help */}
      <KeyboardShortcutsHelp
        isVisible={showKeyboardHelp}
        onClose={() => setShowKeyboardHelp(false)}
      />
      
      {/* Notification System */}
      <NotificationSystem
        notifications={notifications}
        onRemove={(id) => setNotifications(prev => prev.filter(n => n.id !== id))}
      />
    </EnhancedErrorBoundary>
  );
}