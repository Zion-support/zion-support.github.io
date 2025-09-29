import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { AppRouter } from './router';
import { initializeErrorReporting } from './utils/errorReporting';
import { initOptimizations } from './utils/buildOptimizations';
import { seoManager, seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { accessibilityManager } from './utils/accessibility';
import { PerformanceMonitor as UtilsPerformanceMonitor, ResourceMonitor, MemoryMonitor } from './utils/performance';
import { analytics } from './utils/analytics';
import { seoOptimizer } from './utils/seoOptimization';
import { cacheManager } from './utils/cacheManager';
import { apiClient } from './utils/apiClient';
import { notificationManager } from './utils/notificationManager';
import { userFeedback } from './utils/userFeedbackManager';
import PerformanceDashboard from './components/PerformanceDashboard';
import RealTimeMonitor from './components/RealTimeMonitor';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { enhancedPerformanceOptimizer } from './utils/enhancedPerformance';
import { enhancedSecurityManager } from './utils/enhancedSecurity';
import { enhancedAccessibilityManager } from './utils/enhancedAccessibility';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { useSEOData } from './components/SEOOptimizer';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedSEOOptimizer } from './utils/enhancedSEOOptimizer';
import { performanceOptimizer as advancedPerformanceOptimizer } from './utils/advancedPerformanceOptimizer';
import { accessibilityEnhancer } from './utils/advancedAccessibilityEnhancer';
import { seoOptimizer as advancedSEOOptimizer } from './utils/advancedSEOOptimizer';
import { securityEnhancer } from './utils/advancedSecurityEnhancer';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceMonitor from './components/PerformanceMonitor';
import SEOOptimizer from './components/SEOOptimizer';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
import SystemMetricsDashboard from './components/SystemMetricsDashboard';
import EnhancedNotificationSystem from './components/EnhancedNotificationSystem';
import { useAppInitialization } from './hooks/useAppInitialization';

// Import enhanced utilities
import { enhancedErrorHandler } from './utils/enhancedErrorHandling';
import { advancedErrorRecovery } from './utils/advancedErrorRecovery';
import { enhancedSecuritySystem } from './utils/enhancedSecuritySystem';
import { enhancedAccessibilitySystem } from './utils/enhancedAccessibilitySystem';
import { apiCache as apiCacheSystem, imageCache as imageCacheSystem, dataCache as dataCacheSystem } from './utils/enhancedCachingSystem';
import { analyticsSystem as enhancedAnalyticsSystem } from './utils/enhancedAnalyticsSystem';

// Import new advanced systems
import { performanceAnalytics } from './utils/advancedPerformanceAnalytics';
import { errorTracker } from './utils/advancedErrorTracker';
import { apiCache, imageCache, dataCache } from './utils/advancedCacheManager';

// Import comprehensive systems
// import enhancedErrorRecovery from './utils/comprehensiveErrorRecovery';

// Import types
import NotificationSystem, { Notification } from './components/NotificationSystem';
import { EnhancedNotification } from './types/comprehensive';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';
import './styles/modern-utilities.css';

export default function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);

  const {
    isLoading: appLoading,
    loadingProgress,
    engagementData,
    seoData,
    handleScroll,
    handleClick,
    trackEngagement
  } = useAppInitialization();

  // Initialize app
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Initialize error reporting
        initializeErrorReporting();
        
        // Initialize optimizations
        initOptimizations();
        
        // Initialize SEO
        // seoManager.initialize?.(); // Method doesn't exist
        seoAnalytics.trackPageView(window.location.pathname);
        
        // Initialize accessibility
        accessibilityManager.initialize();
        
        // Initialize analytics
        analytics.initialize();
        
        // Initialize performance monitoring
        // PerformanceMonitor.initialize?.(); // Method doesn't exist
        
        // Initialize caching
        // cacheManager.initialize?.(); // Method doesn't exist
        
        // Initialize API client
        // apiClient.initialize?.(); // Method doesn't exist
        
        // Initialize notifications
        // notificationManager.initialize?.(); // Method doesn't exist
        
        // Initialize user feedback
        // userFeedback.initialize?.(); // Method doesn't exist
        
        // Initialize enhanced systems
        // enhancedSecurityManager.initialize?.(); // Method doesn't exist
        // enhancedAccessibilityManager.initialize?.(); // Method doesn't exist
        // enhancedPerformanceMonitor.initialize?.(); // Method doesn't exist
        // enhancedSEOOptimizer.initialize?.(); // Method doesn't exist
        
        // Initialize advanced optimizations
        advancedPerformanceOptimizer.optimize();
        accessibilityEnhancer.getMetrics();
        advancedSEOOptimizer.getMetrics();
        securityEnhancer.getMetrics();
        
        // Initialize performance optimizations
        // performanceOptimizer.initialize?.(); // Method doesn't exist
        // enhancedPerformanceOptimizer.initialize?.(); // Method doesn't exist
        
        console.log('App initialized successfully');
      } catch (error) {
        console.error('Failed to initialize app:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  const handleError = useCallback((error: Error, errorInfo: React.ErrorInfo) => {
    console.error('App Error:', error, errorInfo);
    setError(error.message);
  }, []);

  const appContent = useMemo(() => {
    if (isLoading || appLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <ModernLoadingSpinner progress={loadingProgress || 100} />
            <p className="mt-4 text-gray-600">Initializing application...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Application Error</h1>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return <AppRouter />;
  }, [isLoading, appLoading, error, loadingProgress]);

  return (
    <EnhancedErrorBoundary onError={handleError}>
      <div className="App">
        {appContent}
        
        {/* Performance Dashboard */}
        <PerformanceDashboard />
        
        {/* Real-time Monitor */}
        <RealTimeMonitor />
        
        {/* System Metrics Dashboard */}
        <SystemMetricsDashboard
          isVisible={false}
          onClose={() => {}}
        />
        
        {/* Enhanced System Dashboard */}
        <EnhancedSystemDashboard
          isVisible={false}
          onClose={() => {}}
        />
        
        {/* Enhanced Notification System */}
        <EnhancedNotificationSystem
          notifications={[]}
          onRemove={() => {}}
        />
        
        {/* Performance Optimizer */}
        <PerformanceOptimizer
          isVisible={showPerformanceOptimizer}
          onClose={() => setShowPerformanceOptimizer(false)}
        />
        
        {/* Performance Monitor Modal */}
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
              <EnhancedSystemDashboard />
            </div>
          </div>
        )}
      </div>
    </EnhancedErrorBoundary>
  );
}
