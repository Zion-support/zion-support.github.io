import React, { useEffect, useState } from 'react';
import { AppRouter } from './router';
import { initializeErrorReporting } from './utils/errorReporting';
import { initOptimizations } from './utils/buildOptimizations';
import { seoManager, seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { accessibilityManager } from './utils/accessibility';
import { PerformanceMonitor, ResourceMonitor, MemoryMonitor } from './utils/performance';
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
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedSEOOptimizer } from './utils/enhancedSEOOptimizer';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
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
        seoManager.initialize();
        seoAnalytics.trackPageView();
        
        // Initialize accessibility
        accessibilityManager.initialize();
        
        // Initialize analytics
        analytics.initialize();
        
        // Initialize performance monitoring
        PerformanceMonitor.initialize();
        
        // Initialize caching
        cacheManager.initialize();
        
        // Initialize API client
        apiClient.initialize();
        
        // Initialize notifications
        notificationManager.initialize();
        
        // Initialize user feedback
        userFeedback.initialize();
        
        // Initialize enhanced systems
        enhancedSecurityManager.initialize();
        enhancedAccessibilityManager.initialize();
        enhancedPerformanceMonitor.initialize();
        enhancedSEOOptimizer.initialize();
        
        // Initialize performance optimizations
        performanceOptimizer.initialize();
        enhancedPerformanceOptimizer.initialize();
        
        console.log('App initialized successfully');
      } catch (error) {
        console.error('Failed to initialize app:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

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
    </EnhancedErrorBoundary>
  );
}