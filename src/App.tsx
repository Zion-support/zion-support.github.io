import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceTracker from './components/PerformanceTracker';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { seoAnalytics, performanceSEO, seoManager } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { performanceOptimizer } from './utils/performanceOptimizations';
import { accessibilityEnhancer } from './utils/advancedAccessibilityEnhancer';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
import WebsiteEnhancements from './components/WebsiteEnhancements';
import { SEOOptimizer, useSEOData } from './components/SEOOptimizer';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import { AdvancedAutomationSystem } from './utils/advancedAutomationSystem';
import { AccessibilityEnhancer } from './utils/accessibilityEnhancer';
import { SecurityEnhancer } from './utils/securityEnhancer';
import { performanceAlerts } from './utils/performanceAlerts';
import { accessibilityUtils } from './utils/accessibilityUtils';
import { securityUtils } from './utils/securityUtils';
import { enhancedSecurityManager } from './utils/enhancedSecurityManager';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import NotificationSystem, { Notification } from './components/NotificationSystem';
import KeyboardShortcutsHelp from './components/KeyboardShortcutsHelp';
import CommandPalette from './components/CommandPalette';
import RealTimePerformanceMonitor from './components/RealTimePerformanceMonitor';
import SystemHealthDashboard from './components/SystemHealthDashboard';
import PerformanceMetricsDashboard from './components/PerformanceMetricsDashboard';
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
  const [showRealTimeMetrics, setShowRealTimeMetrics] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showWebsiteEnhancements, setShowWebsiteEnhancements] = useState(false);
  const [showAccessibilityPanel] = useState(false);
  const [showPerformanceMetrics, setShowPerformanceMetrics] = useState(false);
  const [showRealTimeMonitor, setShowRealTimeMonitor] = useState(false);
  const [showSystemHealth, setShowSystemHealth] = useState(false);

  // Initialize app with custom configuration
  const { isLoading, loadingProgress, handleScroll, handleClick, trackEngagement: originalTrackEngagement } = useAppInitialization({
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSecurity: true,
    enableAnalytics: true,
    enableNotifications: true,
    enableCaching: true,
  });

  // Get current pathname for SEO
  const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const seoData = useSEOData(currentPathname);

  // Performance optimization hook
  const { preloadResource } = usePerformanceOptimization({
    enablePreloading: true,
    enableResourceHints: true,
    enableImageOptimization: true,
  });

  // Initialize comprehensive enhancements
  useEffect(() => {
    try {
      // Initialize enhanced systems
      enhancedPerformanceMonitor.startMonitoring();
      enhancedAnalytics.initialize();
      advancedCacheSystem.initialize();
      AdvancedAutomationSystem.getInstance().initialize();
      
      // Initialize accessibility and security enhancers
      AccessibilityEnhancer.getInstance();
      SecurityEnhancer.getInstance();
      
      // Get comprehensive enhancements
      const enhancements = getComprehensiveEnhancements({
        enableAdvancedPerformance: true,
        enableSecurityFeatures: true,
        enableAccessibilityFeatures: true,
        enableSEOFeatures: true,
        enableUXFeatures: true,
        enableAnalytics: true,
        enableOfflineSupport: true,
        enablePWA: true
      });

      // Store enhancements globally for debugging
      (window as unknown as Record<string, unknown>).enhancements = enhancements;

    } catch (error) {
      console.error('Error initializing enhancements:', error);
    }
  }, []);

  // Optimized keyboard handler for system dashboard toggle
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'D') {
      event.preventDefault();
      setShowSystemDashboard((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'P') {
      event.preventDefault();
      setShowPerformanceOptimizer((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
      event.preventDefault();
      setShowPerformanceMonitor((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
      event.preventDefault();
      setShowAIDashboard((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'S') {
      event.preventDefault();
      setShowSEOOptimizer((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'H') {
      event.preventDefault();
      setShowKeyboardHelp((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      setShowCommandPalette((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'R') {
      event.preventDefault();
      setShowRealTimeMetrics((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'W') {
      event.preventDefault();
      setShowWebsiteEnhancements((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'N') {
      event.preventDefault();
      setShowPerformanceMetrics((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'T') {
      event.preventDefault();
      setShowRealTimeMonitor((prev: boolean) => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'U') {
      event.preventDefault();
      setShowSystemHealth((prev: boolean) => !prev);
    }
  }, []);

  // Enhanced track engagement function
  const trackEngagement = useCallback((action: string, data?: Record<string, unknown>) => {
    try {
      // Call original tracking
      originalTrackEngagement(action, data);
      
      // Additional analytics tracking
      analytics.track(action, data);
      seoAnalytics.trackUserEngagement(action, data);
      
      // Performance tracking
      performanceSEO.trackUserAction(action, data);
    } catch (error) {
      console.error('Error tracking engagement:', error);
    }
  }, [originalTrackEngagement]);

  // Enhanced click handler
  const handleClickWithTracking = useCallback((event: React.MouseEvent) => {
    try {
      // Call original handler
      handleClick(event);
      
      // Track click engagement
      const target = event.target as HTMLElement;
      const elementType = target.tagName.toLowerCase();
      const elementId = target.id || target.className || 'unknown';
      
      trackEngagement('click', {
        elementType,
        elementId,
        timestamp: Date.now(),
        url: window.location.href
      });
    } catch (error) {
      console.error('Error in click handler:', error);
    }
  }, [handleClick, trackEngagement]);

  // Enhanced scroll handler
  const handleScrollWithTracking = useCallback((event: Event) => {
    try {
      // Call original handler
      handleScroll(event);
      
      // Track scroll engagement
      const scrollY = window.scrollY;
      const scrollPercent = Math.round((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      
      trackEngagement('scroll', {
        scrollY,
        scrollPercent,
        timestamp: Date.now(),
        url: window.location.href
      });
    } catch (error) {
      console.error('Error in scroll handler:', error);
    }
  }, [handleScroll, trackEngagement]);

  // Set up event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickWithTracking);
    document.addEventListener('scroll', handleScrollWithTracking);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickWithTracking);
      document.removeEventListener('scroll', handleScrollWithTracking);
    };
  }, [handleKeyDown, handleClickWithTracking, handleScrollWithTracking]);

  // Memoized performance metrics
  const performanceMetrics = useMemo(() => {
    try {
      return {
        loadTime: performance.now(),
        memoryUsage: (performance as unknown as { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize || 0,
        connectionType: (navigator as unknown as { connection?: { effectiveType: string } }).connection?.effectiveType || 'unknown',
        timestamp: Date.now()
      };
    } catch (error) {
      console.error('Error getting performance metrics:', error);
      return {
        loadTime: 0,
        memoryUsage: 0,
        connectionType: 'unknown',
        timestamp: Date.now()
      };
    }
  }, []);

  // Add notification function
  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: Date.now()
    };
    setNotifications(prev => [...prev, newNotification]);
  }, []);

  // Remove notification function
  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  // Theme toggle function
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  }, []);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }
  }, []);

  // Preload critical resources
  useEffect(() => {
    try {
      // Preload critical images and resources
      preloadResource('/images/hero-bg.jpg', 'image');
      preloadResource('/images/logo.svg', 'image');
      preloadResource('/fonts/inter.woff2', 'font');
    } catch (error) {
      console.error('Error preloading resources:', error);
    }
  }, [preloadResource]);

  // Show loading spinner while initializing
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <ModernLoadingSpinner progress={loadingProgress} />
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Initializing Zion Tech Group Platform...
          </p>
        </div>
      </div>
    );
  }

  return (
    <EnhancedErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Main Application Router */}
        <AppRouter />

        {/* System Dashboard */}
        {showSystemDashboard && (
          <EnhancedSystemDashboard
            onClose={() => setShowSystemDashboard(false)}
            performanceMetrics={performanceMetrics}
          />
        )}

        {/* Performance Optimizer */}
        {showPerformanceOptimizer && (
          <PerformanceOptimizer
            onClose={() => setShowPerformanceOptimizer(false)}
            onOptimize={() => {
              addNotification({
                type: 'success',
                title: 'Performance Optimized',
                message: 'System performance has been optimized successfully.',
                duration: 5000
              });
            }}
          />
        )}

        {/* Performance Monitor */}
        {showPerformanceMonitor && (
          <PerformanceMonitor
            onClose={() => setShowPerformanceMonitor(false)}
            onAlert={(alert) => {
              addNotification({
                type: 'warning',
                title: 'Performance Alert',
                message: alert.message,
                duration: 8000
              });
            }}
          />
        )}

        {/* AI Performance Dashboard */}
        {showAIDashboard && (
          <AIPerformanceDashboard
            onClose={() => setShowAIDashboard(false)}
            onInsight={(insight) => {
              addNotification({
                type: 'info',
                title: 'AI Insight',
                message: insight.message,
                duration: 6000
              });
            }}
          />
        )}

        {/* SEO Optimizer */}
        {showSEOOptimizer && (
          <SEOOptimizer
            onClose={() => setShowSEOOptimizer(false)}
            seoData={seoData}
            onOptimize={(optimization) => {
              addNotification({
                type: 'success',
                title: 'SEO Optimized',
                message: optimization.message,
                duration: 5000
              });
            }}
          />
        )}

        {/* Website Enhancements */}
        {showWebsiteEnhancements && (
          <WebsiteEnhancements
            onClose={() => setShowWebsiteEnhancements(false)}
            onEnhancement={(enhancement) => {
              addNotification({
                type: 'info',
                title: 'Enhancement Applied',
                message: enhancement.message,
                duration: 4000
              });
            }}
          />
        )}

        {/* Real-time Performance Monitor */}
        {showRealTimeMonitor && (
          <RealTimePerformanceMonitor
            onClose={() => setShowRealTimeMonitor(false)}
            onMetric={(metric) => {
              console.log('Performance metric:', metric);
            }}
          />
        )}

        {/* System Health Dashboard */}
        {showSystemHealth && (
          <SystemHealthDashboard
            onClose={() => setShowSystemHealth(false)}
            onHealthCheck={(status) => {
              if (status.overall === 'warning' || status.overall === 'error') {
                addNotification({
                  type: status.overall === 'error' ? 'error' : 'warning',
                  title: 'System Health Alert',
                  message: status.message,
                  duration: 10000
                });
              }
            }}
          />
        )}

        {/* Performance Metrics Dashboard */}
        {showPerformanceMetrics && (
          <PerformanceMetricsDashboard
            onClose={() => setShowPerformanceMetrics(false)}
            onMetricUpdate={(metric) => {
              console.log('Performance metric updated:', metric);
            }}
          />
        )}

        {/* Advanced Analytics */}
        {showRealTimeMetrics && (
          <AdvancedAnalytics
            onClose={() => setShowRealTimeMetrics(false)}
            onDataUpdate={(data) => {
              console.log('Analytics data updated:', data);
            }}
          />
        )}

        {/* Keyboard Shortcuts Help */}
        {showKeyboardHelp && (
          <KeyboardShortcutsHelp
            onClose={() => setShowKeyboardHelp(false)}
            shortcuts={[
              { key: 'Ctrl+Shift+D', description: 'Toggle System Dashboard' },
              { key: 'Ctrl+Shift+P', description: 'Toggle Performance Optimizer' },
              { key: 'Ctrl+Shift+M', description: 'Toggle Performance Monitor' },
              { key: 'Ctrl+Shift+A', description: 'Toggle AI Dashboard' },
              { key: 'Ctrl+Shift+S', description: 'Toggle SEO Optimizer' },
              { key: 'Ctrl+Shift+H', description: 'Toggle Help' },
              { key: 'Ctrl+K', description: 'Toggle Command Palette' },
              { key: 'Ctrl+Shift+R', description: 'Toggle Real-time Metrics' },
              { key: 'Ctrl+Shift+W', description: 'Toggle Website Enhancements' },
              { key: 'Ctrl+Shift+N', description: 'Toggle Performance Metrics' },
              { key: 'Ctrl+Shift+T', description: 'Toggle Real-time Monitor' },
              { key: 'Ctrl+Shift+U', description: 'Toggle System Health' }
            ]}
          />
        )}

        {/* Command Palette */}
        {showCommandPalette && (
          <CommandPalette
            onClose={() => setShowCommandPalette(false)}
            onCommand={(command) => {
              switch (command) {
                case 'toggle-dashboard':
                  setShowSystemDashboard(true);
                  break;
                case 'toggle-performance':
                  setShowPerformanceOptimizer(true);
                  break;
                case 'toggle-monitor':
                  setShowPerformanceMonitor(true);
                  break;
                case 'toggle-ai':
                  setShowAIDashboard(true);
                  break;
                case 'toggle-seo':
                  setShowSEOOptimizer(true);
                  break;
                case 'toggle-theme':
                  toggleTheme();
                  break;
                case 'toggle-help':
                  setShowKeyboardHelp(true);
                  break;
                default:
                  console.log('Unknown command:', command);
              }
            }}
          />
        )}

        {/* Notification System */}
        <NotificationSystem
          notifications={notifications}
          onRemove={removeNotification}
        />

        {/* Performance Tracker */}
        <PerformanceTracker
          onPerformanceIssue={(issue) => {
            addNotification({
              type: 'warning',
              title: 'Performance Issue Detected',
              message: issue.message,
              duration: 8000
            });
          }}
        />
      </div>
    </EnhancedErrorBoundary>
  );
}