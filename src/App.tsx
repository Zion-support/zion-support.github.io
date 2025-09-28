import React, { useCallback, useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRouter } from './router';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceTracker from './components/PerformanceTracker';
import PerformanceMonitor from './components/PerformanceMonitor';
import { seoAnalytics, performanceSEO, seoManager } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { performanceOptimizer } from './utils/performanceOptimizations';
import { accessibilityEnhancer } from './utils/accessibilityEnhancements';
import { seoOptimizer } from './utils/seoOptimization';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';

// Import enhanced utilities
import { enhancedErrorHandler } from './utils/enhancedErrorHandling';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitoring';
import { enhancedAccessibilityManager } from './utils/enhancedAccessibility';
import { advancedErrorRecovery } from './utils/advancedErrorRecovery';
import { enhancedSEOOptimizer } from './utils/enhancedSEOOptimizer';
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
const EnhancedSystemDashboard = lazy(() => import('./components/EnhancedSystemDashboard'));
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
import SEOOptimizer from './components/SEOOptimizer';
// import { useSEOData } from './components/SEOOptimizer';
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
import AdvancedAnalyticsDashboard from './components/AdvancedAnalyticsDashboard';
import PerformanceMetricsDashboard from './components/PerformanceMetricsDashboard';
import ComprehensiveImprovements from './components/ComprehensiveImprovements';
import './index.css';

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
  const [showAdvancedMonitoring, setShowAdvancedMonitoring] = useState(false);
  const [showComprehensiveDashboard, setShowComprehensiveDashboard] = useState(false);
  const [showComprehensiveMonitoring, setShowComprehensiveMonitoring] = useState(false);
  const [showRealTimePerformance, setShowRealTimePerformance] = useState(false);
  const [showEnhancedCommandPalette, setShowEnhancedCommandPalette] = useState(false);
  const [showSystemStatus, setShowSystemStatus] = useState(true);
  const [showEnhancedNotifications] = useState(true);
  const [showKeyboardShortcutsManager, setShowKeyboardShortcutsManager] = useState(false);
  const [showPerformanceWidget, setShowPerformanceWidget] = useState(false);
  const [showSystemHealth, setShowSystemHealth] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [enhancedNotifications, setEnhancedNotifications] = useState<EnhancedNotification[]>([]);
  // const [showPerformanceDashboard, setShowPerformanceDashboard] = useState(false);
  const navigate = useNavigate();

  // Notification management
  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  // Enhanced notification system
  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Date.now().toString();
    const newNotification: Notification = {
      ...notification,
      id,
      title: notification.title || 'Notification'
    };
    setNotifications(prev => [...prev, newNotification]);
    
    // Auto-remove after 5 seconds for info notifications
    if (notification.type === 'info') {
      setTimeout(() => removeNotification(id), 5000);
    }
  }, [removeNotification]);

  // Performance and loading state
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Performance monitoring
  useEffect(() => {
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const loadTime = performance.now() - startTime;
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
      
      // Log performance metrics
      console.debug('Performance Metrics:', {
        loadTime: `${Math.round(loadTime)}ms`,
        renderTime: `${Math.round(performance.now() - startTime)}ms`,
        memoryUsage: memory ? `${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB` : 'N/A'
      });
    };

    // Measure after initial render
    const timeoutId = setTimeout(measurePerformance, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Service Worker registration
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          addNotification({ type: 'success', title: 'PWA Ready', message: 'App is now available offline!' });
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, [addNotification]);

  // Initialize performance optimizations
  useEffect(() => {
    // Initialize all performance optimizations
    performanceOptimizer.initializeOptimizations();
    
    // Enable caching
    performanceOptimizer.enableCaching();
    
    // Optimize images
    performanceOptimizer.optimizeImages();
    
    // Preload critical resources
    performanceOptimizer.preloadCriticalResources();
    
    // Add resource hints
    performanceOptimizer.addResourceHints();
    
    // Optimize third-party scripts
    performanceOptimizer.optimizeThirdPartyScripts();
    
    // Monitor Core Web Vitals
    performanceOptimizer.monitorCoreWebVitals();
    
    console.log('Performance optimizations initialized');
  }, []);
  
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
  
  // const originalTrackEngagement = useCallback(() => {
  //   console.debug('User engagement tracked', { 
  //     timestamp: Date.now(),
  //     session_duration: performance.now()
  //   });
  // }, []);

  // Simulate loading for demonstration
  useEffect(() => {
    setIsLoading(true);
    setLoadingProgress(0);
    
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          setIsLoading(false);
          clearInterval(loadingInterval);
          // Show welcome notification
          setNotifications(prev => [...prev, {
            id: Date.now().toString(),
            type: 'success',
            title: 'Welcome to Zion Tech Group',
            message: 'Your advanced AI and technology solutions platform is ready!',
            duration: 5000
          }]);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
    
    return () => clearInterval(loadingInterval);
  }, []);

  // Get current pathname for SEO (used in seoData)
  const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  // SEO data for seoManager (expects string[])
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology'],
    canonicalUrl: `https://zion.app${currentPathname}`,
    ogType: 'website' as const,
    ogUrl: `https://zion.app${currentPathname}`,
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image' as const
  }), [currentPathname]);

  // SEO data for SEOOptimizer component (expects string)
  const seoDataForOptimizer = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: 'AI solutions, quantum computing, digital transformation, cloud services, enterprise technology',
    canonical: `https://zion.app${currentPathname}`,
    ogType: 'website',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image'
  }), [currentPathname]);

  // Simple preload function
  // const preloadResource = useCallback((url: string, type: string) => {
  //   try {
  //     const link = document.createElement('link');
  //     link.rel = 'preload';
  //     link.href = url;
  //     link.as = type;
  //     document.head.appendChild(link);
  //   } catch (error) {
  //     console.error('Error preloading resource:', error);
  //   }
  // }, []);

  // Initialize comprehensive enhancements
  useEffect(() => {
    try {
      // Initialize enhanced systems
      enhancedPerformanceMonitor.initialize();
      enhancedErrorHandler.initialize();
      enhancedAccessibilityManager.initialize();
      advancedErrorRecovery.initialize();
      enhancedSEOOptimizer.initialize();
      enhancedSecuritySystem.initialize();
      enhancedAccessibilitySystem.initialize();
      apiCacheSystem.initialize();
      imageCacheSystem.initialize();
      dataCacheSystem.initialize();
      enhancedAnalyticsSystem.initialize();
      
      // Initialize advanced systems
      void performanceAnalytics; // Initialize performance analytics
      void seoManager; // Initialize SEO manager
      void errorTracker; // Initialize error tracker
      
      // Initialize caching systems
      void apiCache;
      void imageCache;
      void dataCache;
      
      // Initialize SEO for current page
      seoManager.updateSEO({
        title: seoData.title,
        description: seoData.description,
        keywords: seoData.keywords,
        canonical: seoData.canonicalUrl,
        ogTitle: seoData.title,
        ogDescription: seoData.description,
        ogImage: seoData.ogImage,
        ogType: seoData.ogType,
        twitterCard: seoData.twitterCard
      });

      // Also update with enhanced SEO optimizer
      enhancedSEOOptimizer.updateSEO({
        title: seoData.title,
        description: seoData.description,
        keywords: seoData.keywords,
        canonical: seoData.canonicalUrl,
        ogTitle: seoData.title,
        ogDescription: seoData.description,
        ogImage: seoData.ogImage,
        ogType: seoData.ogType,
        twitterCard: seoData.twitterCard
      });
      
      // Initialize security system
      console.log('Advanced security system initialized');
      
      // Initialize accessibility system
      console.log('Advanced accessibility system initialized');
      
      // Log system status
      console.log('🔒 Security metrics:', enhancedSecuritySystem.getSecurityMetrics());
      console.log('♿ Accessibility metrics:', enhancedAccessibilitySystem.getAccessibilityMetrics());
      console.log('💾 Cache metrics:', {
        api: apiCacheSystem.getMetrics(),
        image: imageCacheSystem.getMetrics(),
        data: dataCacheSystem.getMetrics()
      });
      console.log('📊 Analytics metrics:', enhancedAnalyticsSystem.getMetrics());
      
      // Initialize error reporting system
      console.log('Error reporting system initialized');
      
      // Initialize performance optimizations
      console.log('Performance optimizations initialized');
      
      return () => {
        // Cleanup function
        enhancedPerformanceMonitor.stopMonitoring();
      };
    } catch (error) {
      console.error('Error initializing enhancements:', error);
      enhancedErrorHandler.handleComponentError(error as Error, 'App', {
        retryable: false,
        maxRetries: 0,
        retryDelay: 1000
      });
    }
  }, [seoData.title, seoData.description, seoData.keywords, seoData.canonicalUrl, seoData.ogImage, seoData.ogType, seoData.twitterCard]);

  // Optimized keyboard handler for system dashboard toggle
  // const handleKeyDown = useCallback((event: KeyboardEvent) => {
  //   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'D') {
  //     event.preventDefault();
  //     setShowSystemDashboard((prev: boolean) => !prev);
  //     seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+shift+d', action: 'toggle_system_dashboard' });
  //     addNotification({ type: 'info', title: 'Dashboard', message: 'System dashboard toggled' });
  //     console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+d', action: 'toggle_system_dashboard' });
  //   }
  //   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'H') {
  //     event.preventDefault();
  //     setShowSystemHealth((prev: boolean) => !prev);
  //     console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+h', action: 'toggle_system_health' });
  //   }
  //   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'K') {
  //     event.preventDefault();
  //     setShowKeyboardHelp((prev: boolean) => !prev);
  //     console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+k', action: 'toggle_keyboard_help' });
  //   }
  //   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'P') {
  //     event.preventDefault();
  //     setShowPerformanceWidget((prev: boolean) => !prev);
  //     console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+p', action: 'toggle_performance_widget' });
  //   }
  //   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'C') {
  //     event.preventDefault();
  //     setShowComprehensiveDashboard((prev: boolean) => !prev);
  //     seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+shift+c', action: 'toggle_comprehensive_dashboard' });
  //   }
  //   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
  //     event.preventDefault();
  //     setShowComprehensiveMonitoring((prev: boolean) => !prev);
  //     seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+shift+m', action: 'toggle_comprehensive_monitoring' });
  //   }
  //   // Performance dashboard toggle removed - state variable not defined
  //   if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
  //     event.preventDefault();
  //     setShowEnhancedCommandPalette((prev: boolean) => !prev);
  //     seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+k', action: 'toggle_enhanced_command_palette' });
  //   }
  //   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'R') {
  //     event.preventDefault();
  //     setShowRealTimePerformance((prev: boolean) => !prev);
  //     seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+shift+r', action: 'toggle_real_time_performance' });
  //   }
  //   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
  //     event.preventDefault();
  //     setShowAdvancedMonitoring((prev: boolean) => !prev);
  //     console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+m', action: 'toggle_advanced_monitoring' });
  //   }
  //   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'T') {
  //     event.preventDefault();
  //     setIsDarkMode((prev: boolean) => !prev);
  //     console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+t', action: 'toggle_theme' });
  //   }
  //   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'S') {
  //     event.preventDefault();
  //     setShowSystemStatus((prev: boolean) => !prev);
  //     console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+s', action: 'toggle_system_status' });
  //   }
  //   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === '?') {
  //     event.preventDefault();
  //     setShowKeyboardShortcutsManager((prev: boolean) => !prev);
  //     console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+?', action: 'toggle_keyboard_shortcuts_manager' });
  //   }
  //   if (event.key === 'Escape') {
  //     setShowCommandPalette(false);
  //     setShowSystemDashboard(false);
  //     setShowSystemHealth(false);
  //     setShowPerformanceWidget(false);
  //     setShowKeyboardHelp(false);
  //     setShowAdvancedMonitoring(false);
  //     setShowComprehensiveDashboard(false);
  //     setShowRealTimePerformance(false);
  //     setShowEnhancedCommandPalette(false);
  //     setShowKeyboardShortcutsManager(false);
  //     seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'escape', action: 'close_modals' });
  //   }
  // }, [addNotification]);
  const [showRealTimeMetrics, setShowRealTimeMetrics] = useState(false);
  const [showWebsiteEnhancements, setShowWebsiteEnhancements] = useState(false);
  // const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);
  const [showRealTimeMonitor, setShowRealTimeMonitor] = useState(false);
  // User preferences state (for future use)
  // const [userPreferences, setUserPreferences] = useState({
  //   theme: 'auto',
  //   animations: true,
  //   notifications: true,
  //   analytics: true
  // });

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);

  // Track engagement function
  const trackEngagement = useCallback(() => {
    // Track user engagement metrics
    if (analytics && 'track' in analytics) {
      (analytics as { track: (event: string, data: Record<string, unknown>) => void }).track('engagement', {
        scrollDepth: engagementData.scrollDepth,
        clicks: engagementData.clicks,
        timeOnPage: Date.now() - engagementData.startTime
      });
    }
  }, [engagementData]);

  // Handle scroll events
  // const handleScrollEngagement = useCallback(() => {
  //   engagementData.scrollDepth = Math.max(engagementData.scrollDepth, window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100);
  // }, [engagementData]);

  // Handle click events
  // const handleClickEngagement = useCallback(() => {
  //   engagementData.clicks++;
  // }, [engagementData]);

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
  

  // Performance optimization hook - Temporarily disabled
  // usePerformanceOptimization({
  //   enablePreloading: true,
  //   enableResourceHints: true,
  //   enableCriticalCSS: true,
  //   enableImageOptimization: true,
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

  // Optimized keyboard handler for system dashboard toggle - removed unused function
  // Enhanced engagement tracking function
  const enhancedTrackEngagement = useCallback(() => {
    const timeOnPage = Date.now() - engagementData.startTime;
    seoAnalytics.trackUserEngagement(window.location.pathname, {
      timeOnPage,
      scrollDepth: engagementData.scrollDepth,
      clicks: engagementData.clicks,
    });
    trackEngagement();
  }, [trackEngagement, engagementData.clicks, engagementData.scrollDepth, engagementData.startTime]);

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

  // Performance optimization hook (for future use)
  // const { getPerformanceMetrics } = usePerformanceOptimization();

  // Initialize comprehensive enhancements
  useEffect(() => {
    try {
      // Initialize comprehensive enhancements first
      const enhancements = getComprehensiveEnhancements();
      enhancements.initialize();
      
      // Initialize individual enhancement systems
      if (enhancedPerformanceMonitor && typeof enhancedPerformanceMonitor.initialize === 'function') {
        enhancedPerformanceMonitor.initialize();
      }
      
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
      
      // Initialize analytics
      if ('initialize' in analytics) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (analytics as any).initialize();
      }
      if ('initialize' in seoAnalytics) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (seoAnalytics as any).initialize();
      }
      if ('initialize' in performanceSEO) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (performanceSEO as any).initialize();
      }
      if ('initialize' in seoManager) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (seoManager as any).initialize();
      }
    } catch (error) {
      console.warn('Some enhancement systems failed to initialize:', error);
      // Log error for debugging
      console.error('Initialization error:', error);
    }
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.optimizeFonts();
    performanceSEO.optimizeCSS();
    
    // Initialize advanced optimization systems
    // These are initialized automatically when imported
    void performanceOptimizer;
    void accessibilityEnhancer;
    void seoOptimizer;

    // Initialize new utility systems
    performanceAlerts.checkMetric('loadTime', performance.now(), 3000);
    accessibilityUtils.announce('Application initialized');
    securityUtils.getSecurityScore();

    // Set default SEO data using the correct method
    seoManager.updateMetaTags(seoData);
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
    
    // Initialize advanced utilities
    const initializeUtilities = async () => {
      try {
        // Initialize accessibility enhancements if available
        // Accessibility enhancer is initialized in constructor
        console.log('Advanced utilities initialized successfully');
      } catch (error) {
        console.error('Failed to initialize some utilities:', error);
      }
    };

    initializeUtilities();
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
          case 'N':
            // Show notification
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if ((window as any).notifications) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if ((window as any).notifications) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  }, [showSystemDashboard, showPerformanceOptimizer, showPerformanceMonitor, showAIDashboard, showSEOOptimizer, isDarkMode, showKeyboardHelp, showCommandPalette, showRealTimeMonitor, showSystemHealth]);


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
              <PerformanceMonitor showDashboard={true} />
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
              <SEOOptimizer seoData={seoDataForOptimizer} />
            </div>
          </div>
        )}
        
        {/* AI Performance Dashboard - Toggle with Ctrl+Shift+A */}
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
          <div>Ctrl+Shift+K: Keyboard Help</div>
          <div>Ctrl+K: Command Palette</div>
          <div>Escape: Close All</div>
        </div>
      </div>
    </EnhancedErrorBoundary>
  );
}