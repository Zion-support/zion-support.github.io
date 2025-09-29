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
import { advancedPerformanceOptimizer } from './utils/advancedPerformanceOptimizer';
import { accessibilityEnhancer } from './utils/advancedAccessibilityEnhancer';
import { seoOptimizer as advancedSeoOptimizer } from './utils/advancedSEOOptimizer';
import { securityEnhancer } from './utils/advancedSecurityEnhancer';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceMonitor from './components/PerformanceMonitor';
import SEOOptimizer from './components/SEOOptimizer';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';

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
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);

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
        // seoOptimizer.getMetrics(); // Method not available
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

  // Show loading screen while initializing
  if (isLoading) {
    return <ModernLoadingSpinner progress={100} />;
  }

  return (
    <EnhancedErrorBoundary>
      <AppRouter />
      
      {/* Performance Optimizer Modal */}
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
            <PerformanceOptimizer isVisible={true} onClose={() => setShowPerformanceOptimizer(false)} />
          </div>
        </div>
      )}

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

      {/* AI Dashboard Modal */}
      {showAIDashboard && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">AI Performance Dashboard</h2>
              <button
                onClick={() => setShowAIDashboard(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>
            <AIPerformanceDashboard isVisible={true} onClose={() => setShowAIDashboard(false)} />
          </div>
        </div>
      )}

      {/* SEO Optimizer Modal */}
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

      {/* Comprehensive Dashboard Modal */}
      {showComprehensiveDashboard && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Comprehensive System Dashboard</h2>
              <button
                onClick={() => setShowComprehensiveDashboard(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>
            <ComprehensiveSystemDashboard isVisible={true} onClose={() => setShowComprehensiveDashboard(false)} />
          </div>
        </div>
      )}
    </EnhancedErrorBoundary>
  );
}