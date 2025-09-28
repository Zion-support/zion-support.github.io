import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { seoAnalytics, performanceSEO, seoManager } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
import SEOOptimizer from './components/SEOOptimizer';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import { AdvancedAutomationSystem } from './utils/advancedAutomationSystem';
import { AccessibilityEnhancer } from './utils/accessibilityEnhancer';
import { SecurityEnhancer } from './utils/securityEnhancer';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';
import { seoOptimizer } from './utils/seoOptimizer';
import { securityEnhancer } from './utils/securityEnhancer';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import NotificationSystem from './components/NotificationSystem';
import KeyboardShortcutsHelp from './components/KeyboardShortcutsHelp';
import CommandPalette from './components/CommandPalette';
import RealTimePerformanceMonitor from './components/RealTimePerformanceMonitor';
import SystemHealthDashboard from './components/SystemHealthDashboard';
import './index.css';

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAIDashboard, setShowAIDashboard] = useState(false);
  const [showSEOOptimizer, setShowSEOOptimizer] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [showRealTimeMonitor, setShowRealTimeMonitor] = useState(false);
  const [showSystemHealth, setShowSystemHealth] = useState(false);
  const [userPreferences, setUserPreferences] = useState({
    theme: 'auto',
    animations: true,
    notifications: true,
    analytics: true
  });

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);

  // Initialize app with custom configuration
  const { isLoading, loadingProgress, handleScroll, handleClick, trackEngagement } = useAppInitialization({
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSecurity: true,
    enableAnalytics: true,
    enableNotifications: true,
    enableCaching: true,
  });

  // Get current pathname for SEO
  const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  // Get SEO data using current pathname
  const seoData = { 
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered IT solutions, cloud computing, cybersecurity, and digital transformation services for enterprises worldwide.',
    keywords: 'AI, IT Solutions, Cloud Computing, Cybersecurity, Digital Transformation',
    image: '/images/og-default.jpg',
    url: `https://ziontechgroup.com${currentPathname}`,
    type: 'website' as const
  };

  // Enhanced engagement tracking function
  const enhancedTrackEngagement = useCallback(() => {
    const timeOnPage = Date.now() - engagementData.startTime;
    seoAnalytics.trackUserEngagement(window.location.pathname, {
      timeOnPage,
      scrollDepth: engagementData.scrollDepth,
      clicks: engagementData.clicks,
    });
    trackEngagement();
  }, [engagementData.clicks, engagementData.scrollDepth, engagementData.startTime, trackEngagement]);

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

  // Performance optimization hook
  const { getPerformanceMetrics } = usePerformanceOptimization();

  // Initialize comprehensive enhancements
  useEffect(() => {
    const enhancements = getComprehensiveEnhancements();
    enhancements.initialize();
    
    // Initialize individual enhancement systems
    enhancedPerformanceMonitor.startMonitoring();
    // enhancedAnalytics.initialize(); // Method doesn't exist
    // advancedCacheSystem.initialize(); // Method doesn't exist
    // new AdvancedAutomationSystem().initialize(); // Method doesn't exist
    // new AccessibilityEnhancer().initialize(); // Method doesn't exist
    // new SecurityEnhancer().initialize(); // Method doesn't exist
    
    // Initialize analytics
    // analytics.initialize(); // Method doesn't exist
    // seoAnalytics.initialize(); // Method doesn't exist
    // performanceSEO.initialize(); // Method doesn't exist
    // seoManager.initialize(); // Method doesn't exist
    
    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.optimizeFonts();
    performanceSEO.optimizeCSS();

    // Set default SEO data using the correct method
    const seoDataFormatted = { ...seoData, keywords: seoData.keywords ? [seoData.keywords] : ['AI'] };
    seoManager.updateMetaTags(seoDataFormatted);
    
    // Initialize advanced optimization systems
    // performanceOptimizer.optimizeBundle(); // Method doesn't exist
    // accessibilityEnhancer.initialize(); // Method doesn't exist
    // seoOptimizer.optimizePage(seoData); // Method doesn't exist
    // securityEnhancer.initialize(); // Method doesn't exist
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
            if ((window as any).notifications) {
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
            if ((window as any).notifications) {
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
  }, [showSystemDashboard, showPerformanceOptimizer, showPerformanceMonitor, showAIDashboard, showSEOOptimizer, isDarkMode, showKeyboardHelp, showCommandPalette]);

  // Command palette commands
  const commandPaletteCommands = [
    {
      id: 'toggle-system-dashboard',
      title: 'Toggle System Dashboard',
      description: 'Open or close the system dashboard',
      category: 'Dashboard',
      action: () => setShowSystemDashboard(!showSystemDashboard),
      shortcut: 'Ctrl+Shift+D'
    },
    {
      id: 'toggle-performance-optimizer',
      title: 'Toggle Performance Optimizer',
      description: 'Open or close the performance optimizer',
      category: 'Dashboard',
      action: () => setShowPerformanceOptimizer(!showPerformanceOptimizer),
      shortcut: 'Ctrl+Shift+P'
    },
    {
      id: 'toggle-performance-monitor',
      title: 'Toggle Performance Monitor',
      description: 'Open or close the performance monitor',
      category: 'Dashboard',
      action: () => setShowPerformanceMonitor(!showPerformanceMonitor),
      shortcut: 'Ctrl+Shift+M'
    },
    {
      id: 'toggle-ai-dashboard',
      title: 'Toggle AI Dashboard',
      description: 'Open or close the AI performance dashboard',
      category: 'Dashboard',
      action: () => setShowAIDashboard(!showAIDashboard),
      shortcut: 'Ctrl+Shift+A'
    },
    {
      id: 'toggle-seo-optimizer',
      title: 'Toggle SEO Optimizer',
      description: 'Open or close the SEO optimizer',
      category: 'Dashboard',
      action: () => setShowSEOOptimizer(!showSEOOptimizer),
      shortcut: 'Ctrl+Shift+S'
    },
    {
      id: 'toggle-theme',
      title: 'Toggle Theme',
      description: 'Switch between dark and light theme',
      category: 'Appearance',
      action: () => setIsDarkMode(!isDarkMode),
      shortcut: 'Ctrl+Shift+T'
    },
    {
      id: 'toggle-real-time-monitor',
      title: 'Toggle Real-Time Monitor',
      description: 'Open or close the real-time performance monitor',
      category: 'Dashboard',
      action: () => setShowRealTimeMonitor(!showRealTimeMonitor),
      shortcut: 'Ctrl+Shift+R'
    },
    {
      id: 'toggle-system-health',
      title: 'Toggle System Health',
      description: 'Open or close the system health dashboard',
      category: 'Dashboard',
      action: () => setShowSystemHealth(!showSystemHealth),
      shortcut: 'Ctrl+Shift+H'
    },
    {
      id: 'show-keyboard-help',
      title: 'Show Keyboard Shortcuts',
      description: 'Display all available keyboard shortcuts',
      category: 'Help',
      action: () => setShowKeyboardHelp(true),
      shortcut: 'Ctrl+Shift+K'
    },
    {
      id: 'show-notifications',
      title: 'Test Notifications',
      description: 'Show a test notification',
      category: 'Testing',
      action: () => {
        if ((window as any).notifications) {
          (window as any).notifications.add({
            type: 'success',
            title: 'Command Executed',
            message: 'Test notification sent successfully!',
            duration: 3000
          });
        }
      },
      shortcut: 'Ctrl+Shift+N'
    }
  ];

  if (isLoading) {
    return <ModernLoadingSpinner progress={loadingProgress} />;
  }

  return (
    <EnhancedErrorBoundary>
      <SEOOptimizer seoData={seoData} />
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
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
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
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
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
              <PerformanceOptimizer />
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
              <PerformanceMonitor />
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
              <SEOOptimizer seoData={seoData} />
            </div>
          </div>
        )}
        
        {/* AI Performance Dashboard - Toggle with Ctrl+Shift+A */}
        <AIPerformanceDashboard
          isVisible={showAIDashboard}
          onClose={() => setShowAIDashboard(false)}
        />

        {/* Real-Time Performance Monitor */}
        <RealTimePerformanceMonitor
          isVisible={showRealTimeMonitor}
          onClose={() => setShowRealTimeMonitor(false)}
        />

        {/* System Health Dashboard */}
        <SystemHealthDashboard
          isVisible={showSystemHealth}
          onClose={() => setShowSystemHealth(false)}
        />

        {/* New Components */}
        <NotificationSystem notifications={[]} onRemove={() => {}} />
        
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