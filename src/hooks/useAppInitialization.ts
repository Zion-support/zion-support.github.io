import { useCallback, useEffect, useMemo, useState } from 'react';
import { initializeErrorReporting } from '../utils/errorReporting';
import { initOptimizations } from '../utils/buildOptimizations';
import { seoManager, seoAnalytics, performanceSEO } from '../utils/seoEnhanced';
import { accessibilityManager } from '../utils/accessibility';
import { PerformanceMonitor, ResourceMonitor, MemoryMonitor } from '../utils/performance';
import { usePerformanceOptimization } from './usePerformanceOptimization';
import { analytics } from '../utils/analytics';
import { seoOptimizer } from '../utils/seoOptimization';
import { cacheManager } from '../utils/cacheManager';
import { apiClient } from '../utils/apiClient';
import { notificationManager } from '../utils/notificationManager';
import { userFeedback } from '../utils/userFeedbackManager';

interface AppInitializationConfig {
  enablePerformanceMonitoring?: boolean;
  enableAccessibility?: boolean;
  enableSecurity?: boolean;
  enableAnalytics?: boolean;
  enableNotifications?: boolean;
  enableCaching?: boolean;
}

interface EngagementData {
  startTime: number;
  scrollDepth: number;
  clicks: number;
}

export function useAppInitialization(config: AppInitializationConfig = {}) {
  const {
    enablePerformanceMonitoring = true,
    enableAccessibility = true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    enableSecurity = true,
    enableAnalytics = true,
    enableNotifications = true,
    enableCaching = true,
  } = config;

  const { preloadResource, recordMetric } = usePerformanceOptimization();
  
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [engagementData, setEngagementData] = useState<EngagementData>({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  });

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

  // Track engagement function
  const trackEngagement = useCallback(() => {
    const timeOnPage = Date.now() - engagementData.startTime;
    if (enableAnalytics) {
      seoAnalytics.trackUserEngagement(window.location.pathname, {
        timeOnPage,
        scrollDepth: engagementData.scrollDepth,
        clicks: engagementData.clicks,
      });
    }
  }, [engagementData, enableAnalytics]);

  // Initialize core systems
  const initializeCoreSystems = useCallback(async () => {
    try {
      // Initialize error reporting
      initializeErrorReporting();
      
      // Initialize build optimizations
      initOptimizations();
      
      // Add performance marks for better monitoring
      if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
        performance.mark('app-init-start');
      }

      // Initialize performance monitoring
      if (enablePerformanceMonitoring) {
        const performanceMonitor = PerformanceMonitor.getInstance();
        performanceMonitor.measurePageLoad();
        
        const resourceMonitor = ResourceMonitor.getInstance();
        resourceMonitor.startMonitoring();
        
        const memoryMonitor = MemoryMonitor.getInstance();
        memoryMonitor.startMonitoring();
      }

      // Initialize accessibility features
      if (enableAccessibility) {
        accessibilityManager.initialize({
          announceChanges: true,
          reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
          highContrast: window.matchMedia('(prefers-contrast: high)').matches
        });
      }

      // Initialize analytics
      if (enableAnalytics) {
        analytics.initialize();
        analytics.trackPageView();
        seoAnalytics.trackPageView(window.location.pathname);
      }

      // Initialize SEO optimizations
      performanceSEO.optimizeImages();
      performanceSEO.preloadCriticalResources();
      performanceSEO.optimizeFonts();

      // Initialize enhanced SEO optimizer
      seoOptimizer.updatePageSEO({
        title: seoData.title,
        description: seoData.description,
        keywords: seoData.keywords,
        image: seoData.ogImage,
        url: window.location.href,
        type: seoData.ogType as 'website' | 'article' | 'product'
      });

      // Initialize cache manager
      if (enableCaching) {
        cacheManager.configure({
          maxSize: 100,
          ttl: 10 * 60 * 1000, // 10 minutes
          storageType: 'localStorage',
          enableCompression: true,
          enableEncryption: false
        });
      }

      // Initialize API client
      apiClient.configure({
        baseURL: '/api',
        timeout: 30000,
        retries: 3,
        enableCaching: enableCaching,
        enableLogging: process.env.NODE_ENV === 'development'
      });

      // Initialize notification manager
      if (enableNotifications) {
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
      }

      // Preload critical resources
      preloadResource('/og-image.png', 'image');
      preloadResource('/favicon.ico', 'image');

      // Set default SEO data
      seoManager.updateSEO(seoData);

      console.log('✅ Core systems initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize core systems:', error);
      recordMetric('initializationError', 1);
    }
  }, [enablePerformanceMonitoring, enableAccessibility, enableAnalytics, enableCaching, enableNotifications, preloadResource, recordMetric, seoData]);

  // Initialize advanced systems
  const initializeAdvancedSystems = useCallback(async () => {
    try {
      // Initialize advanced performance monitor
      const { AdvancedPerformanceMonitor } = await import('../utils/advancedPerformanceMonitor');
      const advancedPerformanceMonitor = new AdvancedPerformanceMonitor();
      advancedPerformanceMonitor.start();

      // Initialize advanced cache system
      const { advancedCacheSystem } = await import('../utils/advancedCacheSystem');
      advancedCacheSystem.initialize({
        maxSize: 200,
        ttl: 15 * 60 * 1000, // 15 minutes
        compressionEnabled: true,
        encryptionEnabled: false,
        storageType: 'localStorage',
        enableAnalytics: true,
        enablePersistence: true
      });

      // Initialize advanced error recovery
      const { advancedErrorRecovery } = await import('../utils/advancedErrorRecovery');
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

      console.log('✅ Advanced systems initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize advanced systems:', error);
      recordMetric('advancedInitializationError', 1);
    }
  }, [recordMetric]);

  // Simulate loading progress
  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          setIsLoading(false);
          clearInterval(loadingInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(loadingInterval);
  }, []);

  // Initialize systems
  useEffect(() => {
    const initialize = async () => {
      await initializeCoreSystems();
      await initializeAdvancedSystems();
    };

    initialize();

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });

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
      
      // Final engagement tracking
      trackEngagement();
    };
  }, [initializeCoreSystems, initializeAdvancedSystems, handleScroll, handleClick, engagementData, enableAnalytics, trackEngagement]);

  return {
    isLoading,
    loadingProgress,
    engagementData,
    seoData,
    handleScroll,
    handleClick,
    trackEngagement
  };
}