import React, { useCallback, useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRouter } from './router';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceTracker from './components/PerformanceTracker';
import PerformanceMonitor from './components/PerformanceMonitor';
// import EnhancedPerformanceMonitor from './components/EnhancedPerformanceMonitor';
import PerformanceDashboard from './components/PerformanceDashboard';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import NotificationSystem, { Notification } from './components/NotificationSystem';
import './index.css';

// Import new advanced systems
import { performanceAnalytics } from './utils/advancedPerformanceAnalytics';
import { seoManager } from './utils/advancedSEOManager';
import { errorTracker } from './utils/advancedErrorTracker';
import { apiCache, imageCache, dataCache } from './utils/advancedCacheManager';

// Import new comprehensive systems
import { performanceOptimizer } from './utils/performanceOptimizations';
import { accessibilityEnhancer } from './utils/accessibilityEnhancements';
import { securityEnhancer } from './utils/securityEnhancements';
import ComprehensiveMonitoringDashboard from './components/ComprehensiveMonitoringDashboard';

// Import enhanced utilities
import { enhancedErrorHandler } from './utils/enhancedErrorHandling';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitoring';
import { enhancedAccessibilityManager } from './utils/enhancedAccessibility';
import { advancedErrorRecovery } from './utils/advancedErrorRecovery';
import { enhancedSEOOptimizer } from './utils/enhancedSEOOptimizer';
import { enhancedSecuritySystem } from './utils/enhancedSecuritySystem';
import { enhancedAccessibilitySystem } from './utils/enhancedAccessibilitySystem';

// Lazy load heavy components for better performance
const EnhancedSystemDashboard = lazy(() => import('./components/EnhancedSystemDashboard'));
const KeyboardShortcutsHelp = lazy(() => import('./components/KeyboardShortcutsHelp'));
const SystemHealthDashboard = lazy(() => import('./components/SystemHealthDashboard'));
const PerformanceWidget = lazy(() => import('./components/PerformanceWidget'));
const CommandPalette = lazy(() => import('./components/CommandPalette'));
const AdvancedMonitoringDashboard = lazy(() => import('./components/AdvancedMonitoringDashboard'));
const ComprehensivePerformanceDashboard = lazy(() => import('./components/ComprehensivePerformanceDashboard'));
const RealTimePerformanceMonitor = lazy(() => import('./components/RealTimePerformanceMonitor'));
const EnhancedCommandPalette = lazy(() => import('./components/EnhancedCommandPalette'));
const PerformanceIndicator = lazy(() => import('./components/PerformanceIndicator'));
const AccessibilityEnhancer = lazy(() => import('./components/AccessibilityEnhancer'));
const DynamicMetaTags = lazy(() => import('./components/DynamicMetaTags'));
const ModernFeatures = lazy(() => import('./components/ModernFeatures'));
const EnhancedPerformanceDashboard = lazy(() => import('./components/EnhancedPerformanceDashboard'));

export default function App(): React.JSX.Element {
  const navigate = useNavigate();
  
  // State for system dashboard
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showSystemHealth, setShowSystemHealth] = useState(false);
  const [showPerformanceWidget, setShowPerformanceWidget] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [showAdvancedMonitoring, setShowAdvancedMonitoring] = useState(false);
  const [showComprehensiveDashboard, setShowComprehensiveDashboard] = useState(false);
  const [showRealTimePerformance, setShowRealTimePerformance] = useState(false);
  const [showEnhancedCommandPalette, setShowEnhancedCommandPalette] = useState(false);
  // const [showPerformanceDashboard, setShowPerformanceDashboard] = useState(false);

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
  
  const originalTrackEngagement = useCallback(() => {
    console.debug('User engagement tracked', { 
      timestamp: Date.now(),
      session_duration: performance.now()
    });
  }, []);

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
  
  // SEO data
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: 'AI solutions, quantum computing, digital transformation, cloud services, enterprise technology',
    canonicalUrl: `https://zion.app${currentPathname}`,
    ogType: 'website' as const,
    ogUrl: `https://zion.app${currentPathname}`,
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image' as const
  }), [currentPathname]);

  // Simple preload function
  const preloadResource = useCallback((url: string, type: string) => {
    try {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = type;
      document.head.appendChild(link);
    } catch (error) {
      console.error('Error preloading resource:', error);
    }
  }, []);

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
        keywords: seoData.keywords.split(', '),
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
        keywords: seoData.keywords.split(', '),
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
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'D') {
      event.preventDefault();
      setShowSystemDashboard((prev: boolean) => !prev);
      seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+shift+d', action: 'toggle_system_dashboard' });
      addNotification({ type: 'info', title: 'Dashboard', message: 'System dashboard toggled' });
      console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+d', action: 'toggle_system_dashboard' });
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'H') {
      event.preventDefault();
      setShowSystemHealth((prev: boolean) => !prev);
      console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+h', action: 'toggle_system_health' });
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'K') {
      event.preventDefault();
      setShowKeyboardHelp((prev: boolean) => !prev);
      console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+k', action: 'toggle_keyboard_help' });
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'P') {
      event.preventDefault();
      setShowPerformanceWidget((prev: boolean) => !prev);
      console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+p', action: 'toggle_performance_widget' });
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'C') {
      event.preventDefault();
      setShowComprehensiveDashboard((prev: boolean) => !prev);
      seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+shift+c', action: 'toggle_comprehensive_dashboard' });
    }
    // Performance dashboard toggle removed - state variable not defined
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      setShowEnhancedCommandPalette((prev: boolean) => !prev);
      seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+k', action: 'toggle_enhanced_command_palette' });
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'R') {
      event.preventDefault();
      setShowRealTimePerformance((prev: boolean) => !prev);
      seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+shift+r', action: 'toggle_real_time_performance' });
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
      event.preventDefault();
      setShowAdvancedMonitoring((prev: boolean) => !prev);
      console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+m', action: 'toggle_advanced_monitoring' });
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'T') {
      event.preventDefault();
      setIsDarkMode((prev: boolean) => !prev);
      console.debug('Keyboard shortcut used:', { shortcut: 'cmd+shift+t', action: 'toggle_theme' });
    }
    if (event.key === 'Escape') {
      setShowCommandPalette(false);
      setShowSystemDashboard(false);
      setShowSystemHealth(false);
      setShowPerformanceWidget(false);
      setShowKeyboardHelp(false);
      setShowAdvancedMonitoring(false);
      setShowComprehensiveDashboard(false);
      setShowRealTimePerformance(false);
      setShowEnhancedCommandPalette(false);
      seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'escape', action: 'close_modals' });
    }
  }, [addNotification]);

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);


  // Enhanced track engagement function
  const trackEngagement = useCallback(() => {
    try {
      originalTrackEngagement();
    } catch (error) {
      console.error('Error tracking engagement:', error);
    }
  }, [originalTrackEngagement]);

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

  // Main initialization effect
  useEffect(() => {
    try {
      // Add performance marks for better monitoring
      if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
        performance.mark('app-init-start');
        enhancedPerformanceMonitor.markMilestone('app-init-start');
        
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

      // Initialize comprehensive systems
      console.debug('Initializing comprehensive systems');
      
      // Initialize performance optimizer
      performanceOptimizer.optimizeImages();
      performanceOptimizer.preloadCriticalResources();
      performanceOptimizer.enableCaching();
      performanceOptimizer.optimizeBundleSize();
      
      // Initialize accessibility enhancer
      accessibilityEnhancer.announce('Application loaded successfully');
      
      // Initialize security enhancer
      console.debug('Security system initialized');
      
      // Initialize analytics system
      
      // Initialize SEO analytics
      seoAnalytics.trackPageView(window.location.pathname);
      
      // Initialize performance SEO optimizations
      performanceSEO.optimizeImages();
      performanceSEO.preloadCriticalResources();
      performanceSEO.optimizeFonts();
      performanceSEO.optimizeCSS();
      
      // Initialize analytics system
      seoAnalytics.trackPageView(window.location.pathname);

      // Set default SEO data using the correct method
      seoManagerInstance.updateMetaTags(seoData);
    } catch (error) {
      console.error('Error in main initialization effect:', error);
    }
  }, [seoData, handleScroll, handleClick, handleKeyDown, preloadResource, seoManagerInstance]);

  // Main initialization and cleanup effect
  useEffect(() => {
    try {
      // Mark app as fully initialized
      if (typeof window !== 'undefined' && window.performance && 
          typeof performance.mark === 'function' && 
          typeof performance.measure === 'function') {
        performance.mark('app-init-complete');
        performance.measure('app-initialization', 'app-init-start', 'app-init-complete');
        enhancedPerformanceMonitor.markMilestone('app-init-complete');
        enhancedPerformanceMonitor.measurePerformance('app-initialization', 'app-init-start', 'app-init-complete');
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

  // Track engagement on scroll and click
  useEffect(() => {
    const handleScrollWithEngagement = () => {
      handleScroll();
      // Track engagement without calling hooks inside callback
      try {
        const timeOnPage = Date.now() - engagementData.startTime;
        // Simple engagement tracking without hooks
        console.debug('Scroll engagement tracked', { timeOnPage });
      } catch (error) {
        console.error('Error tracking scroll engagement:', error);
      }
    };

    const handleClickWithEngagement = () => {
      handleClick();
      // Track engagement without calling hooks inside callback
      try {
        const timeOnPage = Date.now() - engagementData.startTime;
        // Simple engagement tracking without hooks
        console.debug('Click engagement tracked', { timeOnPage });
      } catch (error) {
        console.error('Error tracking click engagement:', error);
      }
    };

    window.addEventListener('scroll', handleScrollWithEngagement, { passive: true });
    document.addEventListener('click', handleClickWithEngagement, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollWithEngagement);
      document.removeEventListener('click', handleClickWithEngagement);
    };
  }, [handleScroll, handleClick, engagementData.startTime]);

  if (isLoading) {
    return <ModernLoadingSpinner progress={loadingProgress} />;
  }

  return (
    <PerformanceOptimizer enableMonitoring={true} enableOptimizations={true}>
      <EnhancedErrorBoundary>
        <Suspense fallback={<ModernLoadingSpinner />}>
          <AccessibilityEnhancer>
            <Suspense fallback={null}>
              <DynamicMetaTags
                title="Zion Tech Group - Advanced AI and IT Solutions"
                description="Leading provider of cutting-edge AI and IT solutions, cloud services, cybersecurity, and digital transformation services for modern enterprises."
                keywords="AI solutions, IT services, cloud computing, cybersecurity, digital transformation, enterprise software, machine learning, data analytics"
                canonicalUrl={window.location.href}
                structuredData={{
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Zion Tech Group",
                  "description": "Leading provider of cutting-edge AI and IT solutions",
                  "url": "https://ziontechgroup.com",
                  "logo": "https://ziontechgroup.com/logo.png",
                  "sameAs": [
                    "https://linkedin.com/company/ziontechgroup",
                    "https://twitter.com/ziontechgroup"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-0123",
                    "contactType": "customer service",
                    "areaServed": "US",
                    "availableLanguage": "English"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "123 Tech Street",
                    "addressLocality": "San Francisco",
                    "addressRegion": "CA",
                    "postalCode": "94105",
                    "addressCountry": "US"
                  }
                }}
              />
            </Suspense>
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
              <Suspense fallback={<ModernLoadingSpinner />}>
                <EnhancedSystemDashboard />
              </Suspense>
            </div>
          </div>
        )}

        {/* Performance Components */}
        <PerformanceTracker />
        
        {/* System Health Dashboard */}
        <Suspense fallback={<ModernLoadingSpinner />}>
          <SystemHealthDashboard
            isVisible={showSystemHealth}
            onClose={() => setShowSystemHealth(false)}
          />
        </Suspense>

        {/* New Components */}
        <NotificationSystem
          notifications={notifications}
          onRemove={removeNotification}
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

        <PerformanceDashboard
          className="fixed bottom-4 left-4 z-30"
          isVisible={showPerformanceWidget}
        />

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
              refreshInterval={1000}
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

        {/* Theme Toggle Button */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed bottom-4 right-4 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          title="Toggle Theme (Ctrl+Shift+T)"
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        {/* Keyboard Shortcuts Help Panel */}
        <div className="fixed bottom-4 left-4 z-40 bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm opacity-75 hover:opacity-100 transition-opacity duration-200 max-w-xs">
          <div className="font-semibold mb-1">Keyboard Shortcuts:</div>
          <div>Ctrl+Shift+D: System Dashboard</div>
          <div>Ctrl+Shift+H: System Health</div>
          <div>Ctrl+Shift+M: Advanced Monitoring</div>
          <div>Ctrl+Shift+R: Real-Time Performance</div>
          <div>Ctrl+Shift+K: Keyboard Help</div>
          <div>Ctrl+Shift+T: Toggle Theme</div>
          <div>Ctrl+K: Enhanced Command Palette</div>
          <div>Esc: Close All Modals</div>
        </div>
      </div>
      
      {/* Performance Indicator */}
      <Suspense fallback={null}>
        <PerformanceIndicator showDetails={showAdvancedMonitoring} />
      </Suspense>
      
      {/* Performance Monitor */}
      <PerformanceMonitor 
        showDetails={showAdvancedMonitoring}
        enableAlerts={true}
        onPerformanceIssue={(metric, value, threshold) => {
          console.warn(`Performance issue detected: ${metric} = ${value} (threshold: ${threshold})`);
        }}
      />
    </AccessibilityEnhancer>
    </Suspense>
    </EnhancedErrorBoundary>
    </PerformanceOptimizer>
  );
}
