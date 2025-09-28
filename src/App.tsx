import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
  lazy,
  Suspense,
} from "react";
import { useNavigate } from 'react-router-dom';
import { AppRouter } from './router';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceTracker from './components/PerformanceTracker';
import PerformanceMonitor from './components/PerformanceMonitor';
import PerformanceDashboard from './components/PerformanceDashboard';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { performanceOptimizer } from './utils/performanceOptimizations';
import { advancedAccessibilityEnhancer } from './utils/advancedAccessibilityEnhancer';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { useAppInitialization } from './hooks/useAppInitialization';
import { useSEOData } from './hooks/useSEOData';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
import WebsiteEnhancements from './components/WebsiteEnhancements';
import SEOOptimizer from './components/SEOOptimizer';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { performanceAlerts } from './utils/performanceAlerts';
import { accessibilityUtils } from './utils/accessibilityUtils';
import { securityUtils } from './utils/securityUtils';
import { enhancedSecurityManager } from './utils/enhancedSecurityManager';
import { advancedPerformanceOptimizer } from './utils/advancedPerformanceOptimizer';
import { advancedSEOOptimizer } from './utils/advancedSEOOptimizer';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import NotificationSystem, { Notification } from './components/NotificationSystem';
import PerformanceMetricsDashboard from './components/PerformanceMetricsDashboard';
import ComprehensiveImprovements from './components/ComprehensiveImprovements';
import { EnhancedNotification } from './types/comprehensive';
import "./index.css";

// Import new advanced systems
import { performanceAnalytics } from './utils/advancedPerformanceAnalytics';
import { seoManager } from './utils/advancedSEOManager';
import { errorTracker } from './utils/advancedErrorTracker';
import { apiCache, imageCache, dataCache } from './utils/advancedCacheManager';

// Import new comprehensive systems
import { buildOptimizer } from './utils/advancedBuildOptimizer';
import { errorRecovery } from './utils/enhancedErrorRecovery';
import { analyticsSystem } from './utils/enhancedAnalyticsSystem';
import { performanceOptimizer as comprehensivePerformanceOptimizer } from './utils/performanceOptimizations';
import { accessibilityEnhancer } from './utils/accessibilityEnhancements';
// import { securityEnhancer } from './utils/securityEnhancements';
// import ComprehensiveMonitoringDashboard from './components/ComprehensiveMonitoringDashboard';
// Import enhanced utilities
import { enhancedErrorHandler } from './utils/enhancedErrorHandling';
import { enhancedPerformanceMonitor as enhancedPerfMonitor } from './utils/enhancedPerformanceMonitoring';
import { enhancedAccessibilityManager } from './utils/enhancedAccessibility';
import { advancedErrorRecovery } from './utils/advancedErrorRecovery';
import { enhancedSEOOptimizer } from './utils/enhancedSEOOptimizer';
import { enhancedSecuritySystem } from './utils/enhancedSecuritySystem';
import { enhancedAccessibilitySystem } from './utils/enhancedAccessibilitySystem';
import { apiCache as apiCacheSystem, imageCache as imageCacheSystem, dataCache as dataCacheSystem } from './utils/enhancedCachingSystem';
import { analyticsSystem as enhancedAnalyticsSystem } from './utils/enhancedAnalyticsSystem';
import { advancedAppEnhancements } from './utils/advancedAppEnhancements';
import { errorHandler, ErrorBoundary } from './utils/errorHandler';
import { performanceMonitor } from './utils/performanceMonitoring';
<<<<<<< HEAD
import { advancedErrorReporter } from './utils/advancedErrorReporting';
import { advancedPerformanceMonitor } from './utils/advancedPerformanceMonitoring';
import { enhancedSEOOptimizer as enhancedSEOOpt } from './utils/enhancedSEOOptimization';
=======
import { advancedErrorHandler } from './utils/advancedErrorHandling';
import SystemMonitoringDashboard from './components/SystemMonitoringDashboard';
// import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
// import { advancedCacheSystem } from './utils/advancedCacheSystem';
// import { enhancedAnalytics } from './utils/enhancedAnalytics';
// import { advancedErrorRecovery } from './utils/advancedErrorRecovery';
// import { AccessibilityEnhancer, SecurityEnhancer } from './utils/enhancementClasses';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-cdef

// Lazy load heavy components
const AdvancedAnalyticsDashboard = lazy(() => import('./components/AdvancedAnalyticsDashboard'));
const AdvancedMonitoringDashboard = lazy(() => import('./components/AdvancedMonitoringDashboard'));
const AdvancedPerformanceDashboard = lazy(() => import('./components/AdvancedPerformanceDashboard'));
const ComprehensiveMonitoringDashboard = lazy(() => import('./components/ComprehensiveMonitoringDashboard'));
const ComprehensivePerformanceDashboard = lazy(() => import('./components/ComprehensivePerformanceDashboard'));
const RealTimePerformanceMonitor = lazy(() => import('./components/RealTimePerformanceMonitor'));
const EnhancedCommandPalette = lazy(() => import('./components/EnhancedCommandPalette'));
const PerformanceIndicator = lazy(() => import('./components/PerformanceIndicator'));
const AccessibilityEnhancer = lazy(() => import('./components/AccessibilityEnhancer'));
const DynamicMetaTags = lazy(() => import('./components/DynamicMetaTags'));
const SystemStatusIndicator = lazy(() => import('./components/SystemStatusIndicator'));

// Lazy load additional components
const KeyboardShortcutsManager = lazy(() => import('./components/KeyboardShortcutsManager'));
const ErrorRecoveryDashboard = lazy(() => import('./components/ErrorRecoveryDashboard'));

// Define types
interface AppState {
  isLoading: boolean;
  error: Error | null;
  performanceMetrics: any;
  accessibilityMetrics: any;
  securityMetrics: any;
  seoMetrics: any;
  userPreferences: any;
  systemHealth: any;
}

const App: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);
  const [accessibilityMetrics, setAccessibilityMetrics] = useState<any>(null);
  const [securityMetrics, setSecurityMetrics] = useState<any>(null);
  const [seoMetrics, setSeoMetrics] = useState<any>(null);
  const [userPreferences, setUserPreferences] = useState<any>(null);
  const [systemHealth, setSystemHealth] = useState<any>(null);

  // State for various features
  const [showSystemStatus, setShowSystemStatus] = useState(false);
  const [showEnhancedNotifications, setShowEnhancedNotifications] = useState(false);
  const [showKeyboardShortcutsManager, setShowKeyboardShortcutsManager] = useState(false);
  const [showComprehensiveImprovements, setShowComprehensiveImprovements] = useState(false);
  const [showPerformanceWidget, setShowPerformanceWidget] = useState(false);
  const [showSystemHealth, setShowSystemHealth] = useState(false);

  // Notification states
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [enhancedNotifications, setEnhancedNotifications] = useState<EnhancedNotification[]>([]);

  // Notification handlers
  const addNotification = useCallback((notification: Notification) => {
    setNotifications(prev => [...prev, notification]);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const addEnhancedNotification = useCallback((notification: EnhancedNotification) => {
    setEnhancedNotifications(prev => [...prev, notification]);
  }, []);

  const removeEnhancedNotification = useCallback((id: string) => {
    setEnhancedNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // Initialize app
  const { initialized, initializationError } = useAppInitialization();

  // Performance optimization hook
  const {
    optimizedComponents,
    performanceInsights,
    optimizationSuggestions,
    isOptimizing,
    optimizeComponent,
    getPerformanceReport,
  } = usePerformanceOptimization();

  // Initialize comprehensive enhancements
  const enhancements = useMemo(() => getComprehensiveEnhancements(), []);

  // Error handler
  const errorHandler = useCallback((error: Error, errorInfo?: any) => {
    console.error('App Error:', error, errorInfo);
    setError(error);
    
    // Report to error tracking system
    if (errorTracker) {
      errorTracker.reportError(error, errorInfo);
    }
  }, []);

<<<<<<< HEAD
  // Advanced error handler
  const advancedErrorHandler = useCallback((error: Error, context?: any) => {
    console.error('Advanced Error:', error, context);
    setError(error);
    
    // Enhanced error reporting
    if (advancedErrorReporter) {
      advancedErrorReporter.reportError(error, context);
=======
  // Performance metrics state
  const [performanceMetrics, setPerformanceMetrics] = useState({
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0,
    errorCount: 0
  });

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);


  // Enhanced keyboard handler for all dashboard toggles
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey) {
      event.preventDefault();
      switch (event.key) {
        case 'D':
          setShowSystemDashboard(prev => !prev);
          break;
        case 'P':
          setShowPerformanceOptimizer(prev => !prev);
          break;
        case 'M':
          setShowPerformanceMonitor(prev => !prev);
          break;
        case 'A':
          setShowAIDashboard(prev => !prev);
          break;
        case 'S':
          setShowSEOOptimizer(prev => !prev);
          break;
        case 'R':
          setShowRealTimeMetrics(prev => !prev);
          break;
        case 'H':
          setShowAccessibilityPanel(prev => !prev);
          break;
        case 'K':
          setShowKeyboardShortcutsManager(prev => !prev);
          break;
        case 'I':
          setShowComprehensiveImprovements(prev => !prev);
          break;
        default:
          break;
      }
    }
  }, [setShowSystemDashboard, setShowPerformanceOptimizer, setShowPerformanceMonitor, setShowAIDashboard, setShowSEOOptimizer, setShowRealTimeMetrics, setShowAccessibilityPanel, setShowKeyboardShortcutsManager, setShowComprehensiveImprovements]);

  // Main initialization effect
  useEffect(() => {
    try {
      // Initialize enhanced systems
      enhancedPerfMonitor.initialize();
      analytics.initialize();
      
      // Initialize accessibility and security enhancers
      if (advancedAccessibilityEnhancer && typeof advancedAccessibilityEnhancer.initialize === 'function') {
        advancedAccessibilityEnhancer.initialize();
      }
      if (enhancedSecurityManager && typeof enhancedSecurityManager.initialize === 'function') {
        enhancedSecurityManager.initialize();
      }
      
      // Initialize new performance and accessibility enhancements
      initializePerformanceEnhancements();
      initializeAccessibilityEnhancements();
      
      // Initialize advanced optimizers
      advancedPerformanceOptimizer.initialize();
      seoOptimizer.initialize();
      advancedAccessibilityEnhancer.initialize();
      
      // Initialize new comprehensive systems
      buildOptimizer.initialize();
      errorRecovery.initialize();
      analyticsSystem.initialize();
      
      // Initialize new monitoring and optimization systems
      // Note: PerformanceMonitor is auto-initialized in constructor
      // seoOptimizer and errorHandler will be initialized by their respective classes
      
      // Get comprehensive enhancements
      const enhancements = getComprehensiveEnhancements();

      // Store enhancements globally for debugging
      (window as unknown as Record<string, unknown>).enhancements = enhancements;
      (window as unknown as Record<string, unknown>).performanceOptimizer = advancedPerformanceOptimizer;
      (window as unknown as Record<string, unknown>).seoOptimizer = seoOptimizer;
      (window as unknown as Record<string, unknown>).accessibilityEnhancer = advancedAccessibilityEnhancer;
      (window as unknown as Record<string, unknown>).buildOptimizer = buildOptimizer;
      (window as unknown as Record<string, unknown>).errorRecovery = errorRecovery;
      (window as unknown as Record<string, unknown>).analyticsSystem = analyticsSystem;
    } catch (error) {
      console.error('Error initializing enhancements:', error);
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-cdef
    }
  }, []);

  // Initialize app on mount
  useEffect(() => {
    const initializeApp = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Initialize performance monitoring
        if (performanceMonitor) {
          await performanceMonitor.initialize();
          const metrics = await performanceMonitor.getMetrics();
          setPerformanceMetrics(metrics);
        }

        // Initialize accessibility monitoring
        if (advancedAccessibilityEnhancer) {
          await advancedAccessibilityEnhancer.initialize();
          const accessibilityData = await advancedAccessibilityEnhancer.getMetrics();
          setAccessibilityMetrics(accessibilityData);
        }

        // Initialize security monitoring
        if (enhancedSecurityManager) {
          await enhancedSecurityManager.initialize();
          const securityData = await enhancedSecurityManager.getMetrics();
          setSecurityMetrics(securityData);
        }

        // Initialize SEO monitoring
        if (advancedSEOOptimizer) {
          await advancedSEOOptimizer.initialize();
          const seoData = await advancedSEOOptimizer.getMetrics();
          setSeoMetrics(seoData);
        }

        // Initialize user preferences
        const savedPreferences = localStorage.getItem('userPreferences');
        if (savedPreferences) {
          setUserPreferences(JSON.parse(savedPreferences));
        }

        // Initialize system health monitoring
        if (enhancedPerformanceMonitor) {
          const healthData = await enhancedPerformanceMonitor.getSystemHealth();
          setSystemHealth(healthData);
        }

        setIsLoading(false);
      } catch (err) {
        errorHandler(err as Error);
        setIsLoading(false);
      }
    };

    if (initialized && !initializationError) {
      initializeApp();
    } else if (initializationError) {
      errorHandler(initializationError);
      setIsLoading(false);
    }
  }, [initialized, initializationError, errorHandler]);

  // Enhanced SEO data effect
  useEffect(() => {
    if (enhancedSEOOpt && seoMetrics) {
      const enhancedSeoData = enhancedSEOOpt.generateEnhancedData(seoMetrics);
      if (enhancedSeoData) {
        // Apply enhanced SEO data
        enhancedSeoData.applyToDocument();
      }
    }
  }, [seoMetrics]);

  // Performance optimization effect
  useEffect(() => {
    if (performanceOptimizer && performanceMetrics) {
      const optimizations = performanceOptimizer.analyzeMetrics(performanceMetrics);
      if (optimizations.length > 0) {
        optimizations.forEach(optimization => {
          if (optimization.apply) {
            optimization.apply();
          }
        });
      }
    }
  }, [performanceMetrics]);

  // Accessibility optimization effect
  useEffect(() => {
    if (advancedAccessibilityEnhancer && accessibilityMetrics) {
      const improvements = advancedAccessibilityEnhancer.getImprovements(accessibilityMetrics);
      improvements.forEach(improvement => {
        if (improvement.apply) {
          improvement.apply();
        }
      });
    }
  }, [accessibilityMetrics]);

  // Security optimization effect
  useEffect(() => {
    if (enhancedSecurityManager && securityMetrics) {
      const securityImprovements = enhancedSecurityManager.getSecurityImprovements(securityMetrics);
      securityImprovements.forEach(improvement => {
        if (improvement.apply) {
          improvement.apply();
        }
      });
    }
  }, [securityMetrics]);

  // Handle global errors
  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      errorHandler(event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      errorHandler(new Error(event.reason));
    };

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [errorHandler]);

  // Render loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <ModernLoadingSpinner />
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <EnhancedErrorBoundary
        error={error}
        resetError={() => setError(null)}
        fallback={
          <div className="flex items-center justify-center min-h-screen bg-red-50">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
              <p className="text-red-500 mb-4">{error.message}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Reload Page
              </button>
            </div>
          </div>
        }
      />
    );
  }

  return (
    <EnhancedErrorBoundary
      onError={errorHandler}
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-600 mb-4">Application Error</h1>
            <p className="text-gray-500 mb-4">An unexpected error occurred</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      }
    >
      <div className="min-h-screen bg-gray-50">
        {/* Performance Tracker */}
        <PerformanceTracker />
        
        {/* Performance Monitor */}
        <PerformanceMonitor />
        
        {/* Performance Dashboard */}
        {showPerformanceWidget && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <PerformanceDashboard />
          </Suspense>
        )}

        {/* System Health Dashboard */}
        {showSystemHealth && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <SystemStatusIndicator />
          </Suspense>
        )}

        {/* Advanced Analytics */}
        <Suspense fallback={<ModernLoadingSpinner />}>
          <AdvancedAnalytics />
        </Suspense>

        {/* AI Performance Dashboard */}
        <Suspense fallback={<ModernLoadingSpinner />}>
          <AIPerformanceDashboard />
        </Suspense>

        {/* Website Enhancements */}
        <WebsiteEnhancements />

        {/* SEO Optimizer */}
        <SEOOptimizer />

        {/* Comprehensive Improvements */}
        {showComprehensiveImprovements && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <ComprehensiveImprovements />
          </Suspense>
        )}

        {/* Enhanced Command Palette */}
        {showKeyboardShortcutsManager && (
          <Suspense fallback={<ModernLoadingSpinner />}>
            <EnhancedCommandPalette />
          </Suspense>
        )}

        {/* Performance Optimizer */}
        <PerformanceOptimizer />

        {/* Notification System */}
        <NotificationSystem
          notifications={notifications}
          onRemoveNotification={removeNotification}
          onAddNotification={addNotification}
        />

        {/* Enhanced Notifications */}
        {showEnhancedNotifications && (
          <div className="fixed top-4 right-4 z-50">
            {enhancedNotifications.map(notification => (
              <div
                key={notification.id}
                className="mb-2 p-4 bg-blue-100 border border-blue-300 rounded-lg shadow-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-blue-800">{notification.title}</h4>
                    <p className="text-blue-600">{notification.message}</p>
                  </div>
                  <button
                    onClick={() => removeEnhancedNotification(notification.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main App Router */}
        <AppRouter />

        {/* Lazy loaded advanced components */}
        <Suspense fallback={<ModernLoadingSpinner />}>
          <AdvancedAnalyticsDashboard />
        </Suspense>

        <Suspense fallback={<ModernLoadingSpinner />}>
          <AdvancedMonitoringDashboard />
        </Suspense>

        <Suspense fallback={<ModernLoadingSpinner />}>
          <AdvancedPerformanceDashboard />
        </Suspense>

        <Suspense fallback={<ModernLoadingSpinner />}>
          <ComprehensiveMonitoringDashboard />
        </Suspense>

        <Suspense fallback={<ModernLoadingSpinner />}>
          <ComprehensivePerformanceDashboard />
        </Suspense>

        <Suspense fallback={<ModernLoadingSpinner />}>
          <RealTimePerformanceMonitor />
        </Suspense>

        <Suspense fallback={<ModernLoadingSpinner />}>
          <PerformanceIndicator />
        </Suspense>

        <Suspense fallback={<ModernLoadingSpinner />}>
          <AccessibilityEnhancer />
        </Suspense>

        <Suspense fallback={<ModernLoadingSpinner />}>
          <DynamicMetaTags />
        </Suspense>

        <Suspense fallback={<ModernLoadingSpinner />}>
          <KeyboardShortcutsManager />
        </Suspense>

        <Suspense fallback={<ModernLoadingSpinner />}>
          <ErrorRecoveryDashboard />
        </Suspense>
      </div>
    </EnhancedErrorBoundary>
  );
};

export default App;