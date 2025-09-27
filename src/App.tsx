import React, { useEffect, useMemo } from 'react';
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
import { performanceOptimizer as advancedPerformanceOptimizer } from './utils/performanceOptimizer';
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
    ogUrl: window.location.href,
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
    SecurityManager.getInstance();
    
    // Initialize advanced performance optimizer
    advancedPerformanceOptimizer.addResourceHints();
    advancedPerformanceOptimizer.optimizeCriticalCSS();
    advancedPerformanceOptimizer.setupWebVitalsMonitoring();
    
    // Register service worker for offline support and caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available
                  if (window.confirm('New version available! Reload to update?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
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

  return (
    <>
      <AppRouter />
      <PerformanceDashboard />
    </>
  );
}
