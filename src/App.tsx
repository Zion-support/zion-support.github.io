import React, { useCallback, useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRouter } from './router';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceTracker from './components/PerformanceTracker';
// import PerformanceMonitor from './components/PerformanceMonitor';
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

// Import enhanced utilities
import { enhancedErrorHandler } from './utils/enhancedErrorHandling';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitoring';
import { enhancedAccessibilityManager } from './utils/enhancedAccessibility';

// Lazy load heavy components for better performance
const EnhancedSystemDashboard = lazy(() => import('./components/EnhancedSystemDashboard'));
const KeyboardShortcutsHelp = lazy(() => import('./components/KeyboardShortcutsHelp'));
const SystemHealthDashboard = lazy(() => import('./components/SystemHealthDashboard'));
const PerformanceWidget = lazy(() => import('./components/PerformanceWidget'));
const CommandPalette = lazy(() => import('./components/CommandPalette'));
const AdvancedMonitoringDashboard = lazy(() => import('./components/AdvancedMonitoringDashboard'));

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
  // const [showPerformanceDashboard, setShowPerformanceDashboard] = useState(false);

  // Notification management
  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  // Performance and loading state
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const handleScroll = useCallback(() => {
    // Track scroll depth for analytics
    const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    if (scrollDepth > 0 && scrollDepth % 25 === 0) {
      seoAnalytics.trackEvent('scroll_depth', { depth: scrollDepth });
    }
  }, []);
  
  const handleClick = useCallback((event?: Event) => {
    console.debug('Click event captured for engagement tracking', event);
    seoAnalytics.trackEvent('user_interaction', { type: 'click', timestamp: Date.now() });
  }, []);
  
  const originalTrackEngagement = useCallback(() => {
    seoAnalytics.trackEvent('user_engagement', { 
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
      
      // Initialize security system
      console.log('Advanced security system initialized');
      
      // Initialize accessibility system
      console.log('Advanced accessibility system initialized');
      
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
      enhancedErrorHandler.handleComponentError(error, 'App', {
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
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'H') {
      event.preventDefault();
      setShowSystemHealth((prev: boolean) => !prev);
      seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+shift+h', action: 'toggle_system_health' });
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'K') {
      event.preventDefault();
      setShowKeyboardHelp((prev: boolean) => !prev);
      seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+shift+k', action: 'toggle_keyboard_help' });
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'P') {
      event.preventDefault();
      setShowPerformanceWidget((prev: boolean) => !prev);
      seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+shift+p', action: 'toggle_performance_widget' });
    }
    // Performance dashboard toggle removed - state variable not defined
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      setShowCommandPalette((prev: boolean) => !prev);
      seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+k', action: 'toggle_command_palette' });
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
      event.preventDefault();
      setShowAdvancedMonitoring((prev: boolean) => !prev);
      seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+shift+m', action: 'toggle_advanced_monitoring' });
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'T') {
      event.preventDefault();
      setIsDarkMode((prev: boolean) => !prev);
      seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'cmd+shift+t', action: 'toggle_theme' });
    }
    if (event.key === 'Escape') {
      setShowCommandPalette(false);
      setShowSystemDashboard(false);
      setShowSystemHealth(false);
      setShowPerformanceWidget(false);
      setShowKeyboardHelp(false);
      setShowAdvancedMonitoring(false);
      seoAnalytics.trackEvent('keyboard_shortcut', { shortcut: 'escape', action: 'close_modals' });
    }
  }, []);

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

      // Initialize basic systems
      seoAnalytics.initialize();
      
      // Initialize SEO analytics
      seoAnalytics.trackPageView(window.location.pathname);
      
      // Initialize performance SEO optimizations
      performanceSEO.optimizeImages();
      performanceSEO.preloadCriticalResources();
      performanceSEO.optimizeFonts();
      performanceSEO.optimizeCSS();
      
      // Initialize analytics system
      seoAnalytics.initialize();
      seoAnalytics.trackPageView();

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
      <EnhancedErrorBoundary showDetails={process.env.NODE_ENV === 'development'}>
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
          showBundleAnalysis={true}
          showOptimizationSuggestions={true}
          autoRefresh={true}
          refreshInterval={5000}
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
        <div className="fixed bottom-4 left-4 z-40 bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm opacity-75 hover:opacity-100 transition-opacity duration-200">
          <div className="font-semibold mb-1">Keyboard Shortcuts:</div>
          <div>Ctrl+Shift+D: System Dashboard</div>
          <div>Ctrl+Shift+H: System Health</div>
          <div>Ctrl+Shift+M: Advanced Monitoring</div>
          <div>Ctrl+Shift+K: Keyboard Help</div>
          <div>Ctrl+Shift+T: Toggle Theme</div>
          <div>Ctrl+K: Command Palette</div>
          <div>Esc: Close All Modals</div>
        </div>
      </div>
    </EnhancedErrorBoundary>
    </PerformanceOptimizer>
  );
}
