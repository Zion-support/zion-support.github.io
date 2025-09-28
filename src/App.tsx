import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
// import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { seoAnalytics, performanceSEO, seoManager } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
// import EnhancedNotificationSystem from './components/EnhancedNotificationSystem';
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
// import AdvancedAnalytics from './components/AdvancedAnalytics';
import { comprehensivePerformanceMonitor } from './utils/comprehensivePerformanceMonitor';
import { enhancedErrorRecovery } from './utils/enhancedErrorRecovery';
import { accessibilityEnhancements } from './utils/accessibilityEnhancements';
import { pwaEnhancements } from './utils/pwaEnhancements';
import NotificationSystem from './components/NotificationSystem';
import KeyboardShortcutsHelp from './components/KeyboardShortcutsHelp';
import CommandPalette from './components/CommandPalette';
import RealTimePerformanceMonitor from './components/RealTimePerformanceMonitor';
import SystemHealthDashboard from './components/SystemHealthDashboard';
import { performanceAlerts } from './utils/performanceAlerts';
// import { errorRecovery } from './utils/errorRecovery';
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
  // const [showSEOOptimizer, setShowSEOOptimizer] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // Performance metrics state - commented out to reduce warnings
  // const [performanceMetrics, setPerformanceMetrics] = useState({
  //   loadTime: 0,
  //   renderTime: 0,
  //   memoryUsage: 0,
  //   errorCount: 0
  // });

  // Initialize app with custom configuration
  const { isLoading, loadingProgress, handleScroll, handleClick, trackEngagement } = useAppInitialization({
    enablePerformanceMonitoring: true,
    enableAnalytics: true,
    enableAccessibility: true
  });

  // Get current pathname for SEO
  const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  // Get SEO data using current pathname
  const seoData = useSEOData(currentPathname);

  // Command palette commands
  const commands = useMemo(() => [
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
        setShowAdvancedPerformanceDashboard(false);
        setShowComprehensiveSystemDashboard(false);
        setShowRealTimeMetrics(false);
        setShowCommandPalette(false);
        setShowKeyboardHelp(false);
      },
      shortcut: 'Escape'
    }
  ], []);

  // Optimized keyboard handler for system dashboard toggle
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey && event.shiftKey) {
      switch (event.key) {
        case 'D':
          event.preventDefault();
          setShowSystemDashboard(prev => !prev);
          break;
        case 'P':
          event.preventDefault();
          setShowPerformanceOptimizer(prev => !prev);
          break;
        case 'M':
          event.preventDefault();
          setShowPerformanceMonitor(prev => !prev);
          break;
        case 'A':
          event.preventDefault();
          setShowAIDashboard(prev => !prev);
          break;
        case 'R':
          event.preventDefault();
          setShowRealTimeMetrics(prev => !prev);
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
          event.preventDefault();
          setShowSEOOptimizer(prev => !prev);
          break;
      }
    }
  }, []);

  // Enhanced track engagement function
  // const engagementData = useMemo(() => ({
  //   clicks: 0,
  //   scrollDepth: 0,
  //   startTime: Date.now()
  // }), []);

  const enhancedTrackEngagement = useCallback(() => {
    trackEngagement();
  }, [trackEngagement]);

  // Memoize the SEO data to prevent unnecessary re-renders
  const memoizedSeoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology', 'machine learning', 'automation', 'blockchain'],
    canonicalUrl: `https://zion.app${typeof window !== 'undefined' ? window.location.pathname : ''}`,
    ogTitle: 'Zion Tech Group - AI & Technology Solutions',
    ogDescription: 'Transform your business with cutting-edge AI and technology solutions.',
    ogImage: 'https://zion.app/og-image.jpg',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Zion Tech Group - AI & Technology Solutions',
    twitterDescription: 'Transform your business with cutting-edge AI and technology solutions.',
    twitterImage: 'https://zion.app/twitter-image.jpg'
  }), []);

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
        (enhancedPerformanceMonitor as { initialize: () => void }).initialize();
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
    
    // Initialize individual enhancement systems
    enhancedPerformanceMonitor.startMonitoring();
    comprehensivePerformanceMonitor.startMonitoring();
    enhancedErrorRecovery.initialize();
    accessibilityEnhancements.initialize();
    pwaEnhancements.initialize();
    
    // Initialize basic systems
    analytics.initialize();
    
    // enhancedAnalytics.initialize(); // Method doesn't exist
    // advancedCacheSystem.initialize(); // Method doesn't exist
    // new AdvancedAutomationSystem().initialize(); // Method doesn't exist
    // new AccessibilityEnhancer().initialize(); // Method doesn't exist
    // new SecurityEnhancer().initialize(); // Method doesn't exist
    
    // Initialize analytics
    // seoAnalytics.initialize(); // Method doesn't exist
    // performanceSEO.initialize(); // Method doesn't exist
    // seoManager.initialize(); // Method doesn't exist
    
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
  }, [seoData, memoizedSeoData, updateMetaTags]);

  // Update meta tags function
  const updateMetaTags = useCallback((data: typeof seoData) => {
    if (typeof document === 'undefined') return;
    
    // Update title
    document.title = data.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', data.description);
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', data.canonicalUrl);
    }
  }, []);

  // Main initialization effect
  useEffect(() => {
    try {
      // Initialize core systems
      analytics.initialize();
      performanceSEO.optimizeImages();
      performanceSEO.optimizeFonts();
      performanceSEO.optimizeCSS();
      
      // Initialize advanced systems
      advancedCacheSystem.initialize();
      new AdvancedAutomationSystem().initialize();
      
      // Initialize enhancement systems
      new AccessibilityEnhancer();
      new SecurityEnhancer();
    } catch (error) {
      console.warn('Some enhancement systems failed to initialize:', error);
    }

    // Set default SEO data
    updateMetaTags(seoData);

    // Add performance marks for better monitoring
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-initialized');
    }

    // Preload critical resources
    const preloadResource = (href: string, as: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      document.head.appendChild(link);
    };
    
    preloadResource('/og-image.png', 'image');
    preloadResource('/favicon.ico', 'image');

    // Use passive listeners for better performance
    document.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    // Track engagement on page unload
    window.addEventListener('beforeunload', enhancedTrackEngagement);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleScroll, handleClick, handleKeyDown, seoData, updateMetaTags, enhancedTrackEngagement]);

  // Real-time performance metrics monitoring
  useEffect(() => {
    if (!showRealTimeMetrics) return;

    const updateMetrics = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
        
        setPerformanceMetrics({
          loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
          renderTime: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
          memoryUsage: memory ? memory.usedJSHeapSize / 1024 / 1024 : 0,
          errorCount: 0 // This would be tracked by error monitoring
        });
      }
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, [showRealTimeMetrics]);

  // Command palette commands
  const commandPaletteCommands = [
    { id: 'toggle-dashboard', title: 'Toggle System Dashboard', description: 'Open system dashboard', category: 'System', action: () => setShowSystemDashboard(prev => !prev) },
    { id: 'toggle-optimizer', title: 'Toggle Performance Optimizer', description: 'Open performance optimizer', category: 'Performance', action: () => setShowPerformanceOptimizer(prev => !prev) },
    { id: 'toggle-monitor', title: 'Toggle Performance Monitor', description: 'Open performance monitor', category: 'Performance', action: () => setShowPerformanceMonitor(prev => !prev) },
    { id: 'toggle-ai-dashboard', title: 'Toggle AI Dashboard', description: 'Open AI dashboard', category: 'AI', action: () => setShowAIDashboard(prev => !prev) },
    { id: 'toggle-metrics', title: 'Toggle Real-time Metrics', description: 'Open real-time metrics', category: 'Performance', action: () => setShowRealTimeMetrics(prev => !prev) },
    { id: 'toggle-seo', title: 'Toggle SEO Optimizer', description: 'Open SEO optimizer', category: 'SEO', action: () => setShowSEOOptimizer(prev => !prev) }
  ];

  if (isLoading) {
    return <ModernLoadingSpinner progress={loadingProgress} />;
  }

  return (
    <EnhancedErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AppRouter />
        
        {/* System Dashboard */}
        {showSystemDashboard && (
          <EnhancedSystemDashboard
            onClose={() => setShowSystemDashboard(false)}
          />
        )}

        {/* Performance Optimizer */}
        {showPerformanceOptimizer && (
          <PerformanceOptimizer
            isVisible={showPerformanceOptimizer}
            onClose={() => setShowPerformanceOptimizer(false)}
          />
        )}

        {/* Performance Monitor */}
        {showPerformanceMonitor && (
          <PerformanceMonitor />
        )}

        {/* AI Performance Dashboard */}
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
        {showRealTimeMetrics && (
          <RealTimePerformanceMonitor
            isVisible={showRealTimeMetrics}
            onClose={() => setShowRealTimeMetrics(false)}
          />
        )}

        {/* System Health Dashboard */}
        <SystemHealthDashboard
          isVisible={false}
          onClose={() => {}}
        />

        {/* Notification System */}
        <NotificationSystem 
          notifications={[]}
          onRemove={() => {}}
        />

        {/* Command Palette */}
        <CommandPalette
          isVisible={false}
          onClose={() => {}}
          commands={commandPaletteCommands}
        />

        {/* Keyboard Shortcuts Help */}
        <KeyboardShortcutsHelp
          isVisible={false}
          onClose={() => {}}
        />

        {/* SEO Optimizer */}
        <SEOOptimizer seoData={seoData} />
        
        {/* Enhanced Analytics */}
        <EnhancedAnalytics />

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
    </EnhancedErrorBoundary>
  );
}