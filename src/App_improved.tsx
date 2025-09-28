import React, { useCallback, useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { AppRouter } from './router';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceTracker from './components/PerformanceTracker';
import { seoAnalytics } from './utils/seoEnhanced';
import { performanceOptimizer } from './utils/performanceOptimizations';
import { accessibilityEnhancer } from './utils/advancedAccessibilityEnhancer';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { performanceAlerts } from './utils/performanceAlerts';
import { enhancedSecurityManager } from './utils/enhancedSecurityManager';
import NotificationSystem, { Notification } from './components/NotificationSystem';
import './index.css';

// Lazy load heavy components for better performance
const EnhancedSystemDashboard = lazy(() => import('./components/EnhancedSystemDashboard'));
const PerformanceOptimizer = lazy(() => import('./components/PerformanceOptimizer'));
const PerformanceMonitor = lazy(() => import('./components/PerformanceMonitor'));
const AIPerformanceDashboard = lazy(() => import('./components/AIPerformanceDashboard'));
const WebsiteEnhancements = lazy(() => import('./components/WebsiteEnhancements'));
const SEOOptimizer = lazy(() => import('./components/SEOOptimizer'));
const AdvancedAnalytics = lazy(() => import('./components/AdvancedAnalytics'));
const KeyboardShortcutsHelp = lazy(() => import('./components/KeyboardShortcutsHelp'));
const CommandPalette = lazy(() => import('./components/CommandPalette'));
const RealTimePerformanceMonitor = lazy(() => import('./components/RealTimePerformanceMonitor'));
const SystemHealthDashboard = lazy(() => import('./components/SystemHealthDashboard'));
const PerformanceMetricsDashboard = lazy(() => import('./components/PerformanceMetricsDashboard'));

export default function App(): React.JSX.Element {
  // Consolidated state management
  const [uiState, setUiState] = useState({
    showSystemDashboard: false,
    showPerformanceOptimizer: false,
    showPerformanceMonitor: false,
    showAIDashboard: false,
    showSEOOptimizer: false,
    isDarkMode: false,
    showKeyboardHelp: false,
    showCommandPalette: false,
    showRealTimeMetrics: false,
  });

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoized UI state setters
  const updateUIState = useCallback((updates: Partial<typeof uiState>) => {
    setUiState(prev => ({ ...prev, ...updates }));
  }, []);

  // Performance optimization: memoize heavy computations
  useMemo(() => {
    return enhancedPerformanceMonitor.getMetrics();
  }, []);

  // Initialize app with error handling
  useEffect(() => {
    const initializeApp = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Initialize performance monitoring
        // Initialize performance optimizer
        performanceOptimizer.preloadCriticalResources();
        
        // Initialize accessibility enhancements
        await accessibilityEnhancer.initialize();
        
        // Initialize security manager
        await enhancedSecurityManager.initialize();
        
        // Initialize SEO analytics
        // Initialize SEO analytics
        seoAnalytics.startTracking();
        
        // Initialize comprehensive enhancements
        await getComprehensiveEnhancements();
        
        // Setup performance alerts
        // Setup performance alerts
        performanceAlerts.startMonitoring();
        
        setIsLoading(false);
        
        // Add success notification
        setNotifications(prev => [...prev, {
          id: Date.now().toString(),
          type: 'success',
          title: 'App Initialized',
          message: 'All systems are ready!',
          duration: 3000
        }]);
        
      } catch (err) {
        console.error('App initialization error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        setIsLoading(false);
        
        setNotifications(prev => [...prev, {
          id: Date.now().toString(),
          type: 'error',
          title: 'Initialization Error',
          message: 'Failed to initialize some features',
          duration: 5000
        }]);
      }
    };

    initializeApp();
  }, []);

  // Keyboard shortcuts handler
  useEffect(() => {
    const handleKeyboardShortcuts = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case 'k':
            event.preventDefault();
            updateUIState({ showCommandPalette: !uiState.showCommandPalette });
            break;
          case 'h':
            event.preventDefault();
            updateUIState({ showKeyboardHelp: !uiState.showKeyboardHelp });
            break;
          case 'd':
            event.preventDefault();
            updateUIState({ isDarkMode: !uiState.isDarkMode });
            break;
          case 's':
            event.preventDefault();
            updateUIState({ showSystemDashboard: !uiState.showSystemDashboard });
            break;
          case 'p':
            event.preventDefault();
            updateUIState({ showPerformanceOptimizer: !uiState.showPerformanceOptimizer });
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyboardShortcuts);
    return () => window.removeEventListener('keydown', handleKeyboardShortcuts);
  }, [uiState, updateUIState]);

  // Theme management
  useEffect(() => {
    document.documentElement.classList.toggle('dark', uiState.isDarkMode);
  }, [uiState.isDarkMode]);

  // Performance monitoring
  useEffect(() => {
    if (uiState.showPerformanceMonitor) {
      const interval = setInterval(() => {
        const metrics = enhancedPerformanceMonitor.getMetrics();
        const memoryMetric = metrics.get('memoryUsage') as { value: number } | undefined;
        if (memoryMetric && memoryMetric.value > 0.8) {
          setNotifications(prev => [...prev, {
            id: Date.now().toString(),
            type: 'warning',
            title: 'High Memory Usage',
            message: `Memory usage is at ${(memoryMetric.value * 100).toFixed(1)}%`,
            duration: 3000
          }]);
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [uiState.showPerformanceMonitor]);

  // Error boundary fallback
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Application Error</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Reload Application
          </button>
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <ModernLoadingSpinner />
          <p className="mt-4 text-gray-600 dark:text-gray-300">Initializing application...</p>
        </div>
      </div>
    );
  }

  return (
    <EnhancedErrorBoundary>
      <div className={`min-h-screen ${uiState.isDarkMode ? 'dark' : ''}`}>
        <PerformanceTracker />
        
        {/* Main Application */}
        <AppRouter />
        
        {/* Notification System */}
        <NotificationSystem
          notifications={notifications}
          onRemove={(id) => setNotifications(prev => prev.filter(n => n.id !== id))}
        />
        
        {/* Lazy-loaded Components */}
        <Suspense fallback={<ModernLoadingSpinner />}>
          {uiState.showSystemDashboard && <EnhancedSystemDashboard />}
          {uiState.showPerformanceOptimizer && <PerformanceOptimizer />}
          {uiState.showPerformanceMonitor && <PerformanceMonitor />}
          {uiState.showAIDashboard && <AIPerformanceDashboard isVisible={uiState.showAIDashboard} onClose={() => updateUIState({ showAIDashboard: false })} />}
          {uiState.showSEOOptimizer && <SEOOptimizer />}
          {uiState.showKeyboardHelp && <KeyboardShortcutsHelp isVisible={uiState.showKeyboardHelp} onClose={() => updateUIState({ showKeyboardHelp: false })} />}
          {uiState.showCommandPalette && <CommandPalette isVisible={uiState.showCommandPalette} onClose={() => updateUIState({ showCommandPalette: false })} commands={[]} />}
          {uiState.showRealTimeMetrics && <RealTimePerformanceMonitor isVisible={uiState.showRealTimeMetrics} onClose={() => updateUIState({ showRealTimeMetrics: false })} />}
        </Suspense>
        
        {/* Always-on Components */}
        <WebsiteEnhancements isVisible={true} onClose={() => {}} />
        <AdvancedAnalytics />
        <SystemHealthDashboard isVisible={true} onClose={() => {}} />
        <PerformanceMetricsDashboard isVisible={true} onClose={() => {}} />
      </div>
    </EnhancedErrorBoundary>
  );
}