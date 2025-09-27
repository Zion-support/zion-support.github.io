import React, { useEffect, useMemo } from 'react';
import { AppRouter } from './router';
import { initializeErrorReporting } from './utils/errorReporting';
import { initOptimizations } from './utils/buildOptimizations';
import { seoManager, seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { accessibilityManager } from './utils/accessibility';
import { PerformanceMonitor, ResourceMonitor, MemoryMonitor } from './utils/performance';
import { performanceOptimizer } from './utils/optimization';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { analytics } from './utils/analytics';
import { seoOptimizer } from './utils/seoOptimization';
import { securityEnhancer } from './utils/securityEnhancements';
import { cacheManager } from './utils/cacheManager';
import { apiClient } from './utils/apiClient';
import { notificationManager } from './utils/notificationManager';
import './index.css';
import './styles/notifications.css';

export default function App(): React.JSX.Element {
  // Initialize performance optimizations
  const { preloadResource, recordMetric } = usePerformanceOptimization();

  // Memoize the SEO data to prevent unnecessary re-renders
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading Technology Solutions',
    description: 'Innovative technology solutions and consulting services for modern businesses. Expert development, cloud services, and digital transformation.',
    keywords: ['technology', 'consulting', 'development', 'cloud services', 'digital transformation'],
    ogType: 'website',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image' as const,
    structuredData: [
      seoManager.generateOrganizationStructuredData(),
      seoManager.generateWebsiteStructuredData()
    ]
  }), []);

  useEffect(() => {
    // Initialize error reporting
    initializeErrorReporting();
    
    // Initialize build optimizations
    initOptimizations();
    
    // Initialize security features
    securityManager.initialize();
    
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
    performanceOptimizer.preloadCriticalResources();
    performanceOptimizer.optimizeImages();

    // Initialize analytics system
    analytics.initialize();
    analytics.trackPageView();

    // Initialize enhanced SEO optimizer
    seoOptimizer.updateSEO({
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords,
      ogTitle: seoData.title,
      ogDescription: seoData.description,
      ogImage: seoData.ogImage,
      ogType: seoData.ogType,
      twitterCard: seoData.twitterCard,
      twitterTitle: seoData.title,
      twitterDescription: seoData.description,
      twitterImage: seoData.ogImage,
      structuredData: Array.isArray(seoData.structuredData) ? seoData.structuredData[0] : seoData.structuredData
    });

    // Initialize enhanced security features
    securityEnhancer.configure({
      enableCSP: true,
      enableHSTS: true,
      enableClickjackingProtection: true,
      enableXSSProtection: true,
      enableContentTypeSniffingProtection: true,
      allowedOrigins: [
        window.location.origin,
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://cdn.jsdelivr.net'
      ],
      reportUri: '/api/security/reports'
    });

    // Set up security violation handler
    securityEnhancer.setViolationHandler((violation) => {
      console.warn('Security violation detected:', violation);
      analytics.trackEvent('security_violation', {
        type: violation.type,
        source: violation.source,
        blockedURI: violation.blockedURI
      });
      
      // Show security notification
      notificationManager.error('Security Violation', `Blocked ${violation.type} from ${violation.source}`);
    });

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

    // Preload critical resources
    preloadResource('/og-image.png', 'image');
    preloadResource('/favicon.ico', 'image');

    // Set default SEO data
    seoManager.updateSEO(seoData);

    // Track user engagement
    let startTime = Date.now();
    let scrollDepth = 0;
    let clicks = 0;

    const trackEngagement = () => {
      const timeOnPage = Date.now() - startTime;
      seoAnalytics.trackUserEngagement(window.location.pathname, {
        timeOnPage,
        scrollDepth,
        clicks
      });
    };

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollDepth = Math.max(scrollDepth, scrollTop / documentHeight);
    };

    // Track clicks
    const handleClick = (event: Event) => {
      clicks++;
      recordMetric('userClicks', 1);
      
      // Track specific interaction types
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON') {
        recordMetric('buttonClicks', 1);
      } else if (target.tagName === 'A') {
        recordMetric('linkClicks', 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);

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
      window.removeEventListener('beforeunload', trackEngagement);
      memoryMonitor.stopMonitoring();
    };
  }, [preloadResource, recordMetric, seoData]);

  return <AppRouter />;
}
