import React, { useCallback, useState } from 'react';
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

export default function App(): React.JSX.Element {
  // State for system metrics dashboard
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  
  // State for performance optimizer
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);

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
    advancedPerformanceMonitor.updateConfig({
      enableWebVitals: true,
      enableMemoryMonitoring: true,
      enableNetworkMonitoring: true,
      enableCustomMetrics: true,
      samplingRate: 1.0,
      reportInterval: 5000,
      thresholds: {
        pageLoadTime: 3000,
        firstContentfulPaint: 1800,
        largestContentfulPaint: 2500,
        cumulativeLayoutShift: 0.1,
        firstInputDelay: 100,
        totalBlockingTime: 300
      }
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
    // performanceEnhancer.initialize(); // Initialize is called in constructor
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

    // Initialize analytics system
    analytics.initialize();
    analytics.trackPageView();

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
