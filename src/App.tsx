import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AppRouter } from './router';
import { initializeErrorReporting } from './utils/errorReporting';
import { initOptimizations } from './utils/buildOptimizations';
import { seoManager, seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { accessibilityManager } from './utils/accessibility';
import { PerformanceMonitor, ResourceMonitor, MemoryMonitor } from './utils/performance';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { analytics } from './utils/analytics';
import { seoOptimizer } from './utils/seoOptimization';
import { cacheManager } from './utils/cacheManager';
import { apiClient } from './utils/apiClient';
import { notificationManager } from './utils/notificationManager';
import { userFeedback } from './utils/userFeedbackManager';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import RealTimeMonitor from './components/RealTimeMonitor';
import { advancedPerformanceOptimizer } from './utils/performanceOptimizer';
import { enhancedPerformanceOptimizer } from './utils/enhancedPerformance';
import { enhancedSecurityManager } from './utils/enhancedSecurity';
import { enhancedAccessibilityManager } from './utils/enhancedAccessibility';
import AdvancedPerformanceMonitor from './utils/advancedPerformanceMonitor';
import AccessibilityEnhancer from './utils/accessibilityEnhancer';
import SecurityEnhancer from './utils/securityEnhancer';
import SystemMetricsDashboard from './components/SystemMetricsDashboard';
import AdvancedAccessibilityManager from './utils/advancedAccessibilityManager';
import AdvancedSecurityManager from './utils/advancedSecurityManager';
import EnhancedUXManager from './utils/enhancedUXManager';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { enhancedSEO } from './utils/enhancedSEO';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import { advancedErrorRecovery } from './utils/advancedErrorRecovery';
import { advancedAutomationSystem } from './utils/advancedAutomationSystem';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import performanceEnhancer from './utils/performanceEnhancements';
import EnhancedNotificationSystem from './components/EnhancedNotificationSystem';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import AdvancedPerformanceMonitorComponent from './components/AdvancedPerformanceMonitor';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import { analytics } from './utils/advancedAnalytics';
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';

export default function App(): React.JSX.Element {
  // Initialize performance optimizations
  const { preloadResource, recordMetric } = usePerformanceOptimization();
  
  // State for system metrics dashboard
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  
  // State for performance optimizer
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  
  // State for advanced performance monitor
  const [showAdvancedMonitor, setShowAdvancedMonitor] = useState(false);

  // Track user engagement with throttling for better performance
  const [engagementData, setEngagementData] = useState({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  });

  // Optimized scroll handler with requestAnimationFrame
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const newScrollDepth = Math.max(engagementData.scrollDepth, scrollTop / documentHeight);
    
    setEngagementData(prev => ({ ...prev, scrollDepth: newScrollDepth }));
    
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      recordMetric('scrollDepth', newScrollDepth);
    });
  }, [recordMetric, engagementData.scrollDepth]);

  // Optimized click handler with better event delegation
  const handleClick = useCallback((event: Event) => {
    const newClicks = engagementData.clicks + 1;
    setEngagementData(prev => ({ ...prev, clicks: newClicks }));
    
    // Debounce click tracking
    setTimeout(() => {
      recordMetric('userClicks', newClicks);
      
      // Track specific interaction types with better performance
      const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      
      switch (tagName) {
        case 'button':
          recordMetric('buttonClicks', 1);
          break;
        case 'a':
          recordMetric('linkClicks', 1);
          break;
        case 'input':
          recordMetric('inputClicks', 1);
          break;
        default:
          recordMetric('otherClicks', 1);
      }
    }, 100);
  }, [recordMetric, engagementData.clicks]);

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
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
      event.preventDefault();
      setShowAdvancedMonitor(prev => !prev);
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
    structuredData: [
      seoManager.generateOrganizationStructuredData(),
      seoManager.generateWebsiteStructuredData()
    ]
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
    
    // Initialize security features
    // SecurityManager.getInstance(); // Replaced with new security enhancer
    
    // Initialize enhanced performance optimizer
    enhancedPerformanceOptimizer.initialize();
    
    // Initialize enhanced security manager
    enhancedSecurityManager.initialize();
    
    // Initialize enhanced accessibility manager
    enhancedAccessibilityManager.initialize();
    
    // Initialize advanced performance monitor
    const advancedPerformanceMonitor = AdvancedPerformanceMonitor.getInstance();
    advancedPerformanceMonitor.configure({
      enableRealTimeMonitoring: true,
      enableMemoryTracking: true,
      enableNetworkTracking: true,
      enableRenderTracking: true,
      reportInterval: 5000,
      maxMetricsHistory: 100
    });
    advancedPerformanceMonitor.startMonitoring();
    
    // Initialize new advanced performance optimizer
    import('./utils/performanceOptimizer').then(({ advancedPerformanceOptimizer }) => {
      advancedPerformanceOptimizer.startMonitoring();
      console.log('🚀 Advanced Performance Optimizer initialized');
    }).catch((error) => {
      console.error('❌ Failed to initialize advanced performance optimizer:', error);
    });
    
    // Initialize CSS optimizer
    import('./utils/cssOptimizer').then(({ cssOptimizer }) => {
      cssOptimizer.initialize();
      console.log('🎨 CSS Optimizer initialized');
    }).catch((error) => {
      console.error('❌ Failed to initialize CSS optimizer:', error);
    });
    
    // Initialize accessibility enhancer
    const accessibilityEnhancer = AccessibilityEnhancer.getInstance();
    accessibilityEnhancer.initialize({
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrastMode: true,
      enableReducedMotion: true,
      enableFocusIndicators: true,
      enableAriaLabels: true,
      announceChanges: true,
      enableSkipLinks: true
    });
    
    // Initialize security enhancer
    const securityEnhancer = SecurityEnhancer.getInstance();
    // Set global reference for XMLHttpRequest monitoring
    (window as Window & { __securityEnhancerInstance?: SecurityEnhancer }).__securityEnhancerInstance = securityEnhancer;
    securityEnhancer.initialize({
      enableCSP: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableClickjackingProtection: true,
      enableContentSecurityPolicy: true,
      enableSecureHeaders: true,
      enableInputSanitization: true,
      enableSecurityMonitoring: true
    });
    
    // Initialize additional advanced managers
    AdvancedAccessibilityManager.getInstance().initialize();
    AdvancedSecurityManager.getInstance().initialize();
    EnhancedUXManager.getInstance().initialize();
    
    // Initialize enhanced systems
    enhancedPerformanceMonitor.startMonitoring();
    enhancedAnalytics.initialize();
    enhancedSEO.initialize();
    
    // Initialize advanced systems
    advancedCacheSystem.initialize({
      maxSize: 200,
      ttl: 15 * 60 * 1000, // 15 minutes
      compressionEnabled: true,
      encryptionEnabled: false,
      storageType: 'localStorage',
      enableAnalytics: true,
      enablePersistence: true
    });
    
    advancedErrorRecovery.initialize({
      maxRetries: 3,
      retryDelay: 1000,
      exponentialBackoff: true,
      enableUserGuidance: true,
      enableAutomaticRecovery: true,
      enableErrorReporting: true,
      enableFallbackStrategies: true,
      enableCircuitBreaker: true,
      circuitBreakerThreshold: 5,
      circuitBreakerTimeout: 30000
    });
    
    advancedAutomationSystem.initialize({
      enableTesting: true,
      enableDeployment: false, // Disabled for client-side
      enableMonitoring: true,
      enableMaintenance: true,
      enableReporting: true,
      scheduleInterval: 60000,
      maxConcurrency: 3,
      retryAttempts: 2,
      timeout: 120000
    });
    
    // Initialize advanced performance optimizer
    advancedPerformanceOptimizer.addResourceHints();
    
    // Initialize new enhancement utilities
    console.log('Initializing performance enhancements...');
    performanceEnhancer.initialize();
    performanceEnhancer.optimizeBundle();
    performanceEnhancer.preloadResource('/static/js/main.js', 'script');
    
    console.log('Initializing security enhancements...');
    // const securityReport = securityEnhancer.generateSecurityReport();
    // console.log('Security Report:', securityReport);
    
    console.log('Initializing accessibility enhancements...');
    // const accessibilityMetrics = accessibilityEnhancer.getAccessibilityMetrics();
    // console.log('Accessibility Metrics:', accessibilityMetrics);
    advancedPerformanceOptimizer.optimizeCriticalCSS();
    advancedPerformanceOptimizer.setupWebVitalsMonitoring();
    
    // Register service worker with optimized configuration
    import('./utils/serviceWorker').then(({ serviceWorkerManager }) => {
      serviceWorkerManager.register().then((registration) => {
        if (registration) {
          console.log('✅ Service Worker registered successfully');
        }
      });
    }).catch((error) => {
      console.error('❌ Failed to load service worker manager:', error);
      recordMetric('serviceWorkerRegistrationError', 1);
    });
    
    // Initialize performance monitoring
    const performanceMonitor = PerformanceMonitor.getInstance();
    performanceMonitor.measurePageLoad();
    
    const resourceMonitor = ResourceMonitor.getInstance();
    resourceMonitor.startMonitoring();
    
    const memoryMonitor = MemoryMonitor.getInstance();
    memoryMonitor.startMonitoring();
    
    // Initialize accessibility features
    accessibilityManager.initialize({
      announceChanges: true,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      highContrast: window.matchMedia('(prefers-contrast: high)').matches
    });

    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.preloadCriticalResources();
    performanceSEO.optimizeFonts();
    
    // Advanced performance optimizer is now handled by the new utility

    // Initialize advanced analytics system
    analytics.enable();
    analytics.trackEvent('page_view', {
      page: window.location.pathname,
      referrer: document.referrer,
      timestamp: Date.now()
    });

    // Initialize enhanced SEO optimizer
    seoOptimizer.updatePageSEO({
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords,
      image: seoData.ogImage,
      url: window.location.href,
      type: seoData.ogType as 'website' | 'article' | 'product'
    });

    // Initialize enhanced security features
    // const securityManagerInstance = SecurityManager.getInstance();
    // securityManagerInstance.monitorSecurityEvents();

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

    // Preload critical resources
    preloadResource('/og-image.png', 'image');
    preloadResource('/favicon.ico', 'image');

    // Set default SEO data
    seoManager.updateSEO(seoData);

    // Track user engagement with throttling for better performance
    const trackEngagement = () => {
      const timeOnPage = Date.now() - engagementData.startTime;
      seoAnalytics.trackUserEngagement(window.location.pathname, {
        timeOnPage,
        scrollDepth: engagementData.scrollDepth,
        clicks: engagementData.clicks,
        // userAgent: navigator.userAgent,
        // viewport: `${window.innerWidth}x${window.innerHeight}`,
        // connection: (navigator as Navigator & { connection?: { effectiveType?: string } }).connection?.effectiveType || 'unknown'
      });
    };

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

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
      
      // Clear timeouts (if any exist)
      // Note: Timeout variables are now managed by the component state
      
      // Stop monitoring
      memoryMonitor.stopMonitoring();
      
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
    };
  }, [preloadResource, recordMetric, seoData, engagementData.clicks, engagementData.scrollDepth, engagementData.startTime, handleClick, handleKeyDown, handleScroll]);

  return (
    <>
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
      <AdvancedPerformanceMonitorComponent 
        isVisible={showAdvancedMonitor}
        onToggle={() => setShowAdvancedMonitor(!showAdvancedMonitor)}
      />
      <ThemeToggle className="fixed top-4 left-4 z-50" />
      <ScrollToTop />
    </>
  );
}
