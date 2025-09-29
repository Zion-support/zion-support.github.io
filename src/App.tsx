import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import PerformanceDashboard from './components/PerformanceDashboard';
import RealTimeMonitor from './components/RealTimeMonitor';
import SystemMetricsDashboard from './components/SystemMetricsDashboard';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import EnhancedNotificationSystem from './components/EnhancedNotificationSystem';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';
import './styles/modern-utilities.css';

export default function App(): React.ReactElement {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    performanceMetrics,
    systemMetrics,
    accessibilityMetrics,
    seoMetrics,
    securityMetrics,
    isLoading: appLoading,
    error: appError
  } = useAppInitialization();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Add performance marks for better monitoring
        if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
          performance.mark('app-init-start');
        }
        
        // Simulate initialization time
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsInitialized(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to initialize app');
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
            <ModernLoadingSpinner size="xl" />
            <p className="mt-4 text-gray-600">Initializing application...</p>
          </div>
        </div>
      );
    }

    if (error || appError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Application Error</h1>
            <p className="text-gray-600 mb-4">{error || appError}</p>
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
  }, [isLoading, appLoading, error, appError]);

  return (
    <EnhancedErrorBoundary onError={handleError}>
      <div className="App">
        {appContent}
        
        {/* Performance Dashboard */}
        <PerformanceDashboard
          isVisible={false}
          onClose={() => {}}
        />
        
        {/* Real-time Monitor */}
        <RealTimeMonitor
          isVisible={false}
          onClose={() => {}}
        />
        
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
          isVisible={false}
          onClose={() => {}}
        />
      </div>
    </EnhancedErrorBoundary>
  );
}