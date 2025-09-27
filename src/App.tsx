import React, { useEffect, useMemo, useState } from 'react';
import { AppRouter } from './router';
import { initializeErrorReporting } from './utils/errorReporting';
import { initOptimizations } from './utils/buildOptimizations';
import { seoManager, seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { accessibilityManager } from './utils/accessibility';
import { PerformanceMonitor, ResourceMonitor, MemoryMonitor } from './utils/performance';
import { PerformanceOptimizer } from './utils/performanceOptimizer';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { analytics } from './utils/analytics';
import { seoOptimizer } from './utils/seoOptimization';
import { SecurityManager } from './utils/securityEnhancements';
import { cacheManager } from './utils/cacheManager';
import { apiClient } from './utils/apiClient';
import { notificationManager } from './utils/notificationManager';
import { userFeedback } from './utils/userFeedbackManager';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import RealTimeMonitor from './components/RealTimeMonitor';
import { performanceOptimizer as advancedPerformanceOptimizer } from './utils/performanceOptimizer';
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
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';

export default function App(): React.JSX.Element {
  // Initialize performance optimizations
  const { preloadResource, recordMetric } = usePerformanceOptimization();
  
  // State for system metrics dashboard
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);

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
    SecurityManager.getInstance();
    
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
    (window as any).__securityEnhancerInstance = securityEnhancer;
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
    
    // Initialize advanced performance optimizer
    advancedPerformanceOptimizer.addResourceHints();
    advancedPerformanceOptimizer.optimizeCriticalCSS();
    advancedPerformanceOptimizer.setupWebVitalsMonitoring();
    
    // Register service worker for offline support and caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none'
      })
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available - show user-friendly notification
                  notificationManager.info(
                    'Update Available',
                    'A new version of the application is available. Click to update.',
                    {
                      duration: 10000,
                      onClick: () => window.location.reload()
                    }
                  );
                }
              });
            }
          });
          
          // Check for updates every 60 seconds
          setInterval(() => {
            registration.update();
          }, 60000);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
          // Track the error for monitoring
          recordMetric('serviceWorkerRegistrationError', 1);
        });
    }
    
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
    
    // Initialize advanced performance optimizer
    const performanceOptimizer = PerformanceOptimizer.getInstance();
    performanceOptimizer.addResourceHints();
    performanceOptimizer.optimizeCriticalCSS();
    performanceOptimizer.setupWebVitalsMonitoring();

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
    const securityManagerInstance = SecurityManager.getInstance();
    securityManagerInstance.monitorSecurityEvents();

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
    let startTime = Date.now();
    let scrollDepth = 0;
    let clicks = 0;
    let scrollTimeout: NodeJS.Timeout;
    let clickTimeout: NodeJS.Timeout;

    const trackEngagement = () => {
      const timeOnPage = Date.now() - startTime;
      seoAnalytics.trackUserEngagement(window.location.pathname, {
        timeOnPage,
        scrollDepth,
        clicks,
        userAgent: navigator.userAgent,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        connection: (navigator as any).connection?.effectiveType || 'unknown'
      } as any);
    };

    // Track scroll depth with throttling
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollDepth = Math.max(scrollDepth, scrollTop / documentHeight);
      
      // Throttle scroll tracking
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        recordMetric('scrollDepth', scrollDepth);
      }, 100);
    };

    // Track clicks with debouncing
    const handleClick = (event: Event) => {
      clicks++;
      
      // Debounce click tracking
      clearTimeout(clickTimeout);
      clickTimeout = setTimeout(() => {
        recordMetric('userClicks', clicks);
        
        // Track specific interaction types
        const target = event.target as HTMLElement;
        if (target.tagName === 'BUTTON') {
          recordMetric('buttonClicks', 1);
        } else if (target.tagName === 'A') {
          recordMetric('linkClicks', 1);
        } else if (target.tagName === 'INPUT') {
          recordMetric('inputClicks', 1);
        }
      }, 50);
    };

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
    
    // Handle system dashboard toggle (Ctrl/Cmd + Shift + D)
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'D') {
        event.preventDefault();
        setShowSystemDashboard(prev => !prev);
      }
    };
    
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
      
      // Clear timeouts
      clearTimeout(scrollTimeout);
      clearTimeout(clickTimeout);
      
      // Stop monitoring
      memoryMonitor.stopMonitoring();
      
      // Cleanup new utilities
      const advancedPerformanceMonitor = AdvancedPerformanceMonitor.getInstance();
      advancedPerformanceMonitor.stopMonitoring();
      
      const accessibilityEnhancer = AccessibilityEnhancer.getInstance();
      accessibilityEnhancer.cleanup();
      
      const securityEnhancer = SecurityEnhancer.getInstance();
      securityEnhancer.cleanup();
      
      // Final engagement tracking
      trackEngagement();
    };
  }, [preloadResource, recordMetric, seoData]);

  return (
    <>
      <AppRouter />
      <PerformanceDashboard />
      <RealTimeMonitor />
      <SystemMetricsDashboard 
        isVisible={showSystemDashboard}
        onClose={() => setShowSystemDashboard(false)}
      />
    </>
  );
}
