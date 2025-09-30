import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { AppRouter } from './router';

// import { resourcePreloader } from './utils/resourcePreloader';
// import { criticalCSSManager } from './utils/criticalCSSManager';
// import { sriUtility } from './security/sriUtility';
// import { csrfProtection } from './security/csrfProtection';
// import { structuredDataManager } from './seo/structuredDataManager';
// import { keyboardNavigationManager } from './accessibility/keyboardNavigationManager';
// import { screenReaderSupport } from './accessibility/screenReaderSupport';
import './index.css';
import { performanceMonitor } from './utils/performanceMonitor';
import { securityManager as enhancedSecurityManager } from './utils/securityHeaders';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';
import SEOOptimizer from './components/SEOOptimizer';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { NotificationProvider } from './components/NotificationSystem';
import AnalyticsTracker from './components/AnalyticsTracker';
import SystemDashboard from './components/SystemDashboard';

export default function App(): React.JSX.Element {
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [notifications, setNotifications] = useState<Array<{id: string; type: "success" | "error" | "warning" | "info"; title: string; message: string; duration?: number}>>([]);

  const seoDataForOptimizer = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises.',
    canonical: typeof window !== 'undefined' ? window.location.href : 'https://zion.app/',
  }), []);

  // Simple hotkeys for demo toggles
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.ctrlKey || !e.shiftKey) return;
      switch (e.key.toLowerCase()) {
        case 'p':
          e.preventDefault();
          setShowPerformanceOptimizer((v) => !v);
          break;
        case 'm':
          e.preventDefault();
          setShowPerformanceMonitor((v) => !v);
          break;
        default:
          break;
      }
    };

    // Initialize new performance and accessibility enhancements
    performanceMonitor.reportPerformance();
    
    // Initialize advanced optimizers
    // Guard optional advanced systems if present in global scope
    const advancedPerformanceOptimizer = (window as any).advancedPerformanceOptimizer;
    const advancedSEOOptimizer = (window as any).advancedSEOOptimizer;
    const advancedSecurityManager = (window as any).advancedSecurityManager;
    const advancedAnalytics = (window as any).advancedAnalytics;
    const advancedErrorHandler = (window as any).advancedErrorHandler;
    const advancedCachingSystem = (window as any).advancedCachingSystem;
    const advancedUXOptimizer = (window as any).advancedUXOptimizer;
    const advancedTestingFramework = (window as any).advancedTestingFramework;
    const advancedI18n = (window as any).advancedI18n;

    try {
      advancedPerformanceOptimizer?.initialize?.();
      advancedSEOOptimizer?.initialize?.();
      advancedSecurityManager?.initialize?.();
      advancedAnalytics?.initialize?.();
      // advancedErrorHandler is initialized in constructor
      advancedCachingSystem?.initialize?.();
      advancedUXOptimizer?.initialize?.();
      advancedTestingFramework?.initialize?.();
      advancedI18n?.initialize?.();
      // Store enhancements globally for debugging
      (window as unknown as Record<string, unknown>).enhancements = {
        performanceOptimizer: advancedPerformanceOptimizer,
        seoOptimizer: advancedSEOOptimizer,
        accessibilityEnhancer: accessibilityEnhancer,
        securityManager: advancedSecurityManager,
        analytics: advancedAnalytics,
        errorHandler: advancedErrorHandler,
        cachingSystem: advancedCachingSystem,
        uxOptimizer: advancedUXOptimizer,
        testingFramework: advancedTestingFramework,
        i18n: advancedI18n
      };
      (window as unknown as Record<string, unknown>).performanceOptimizer = advancedPerformanceOptimizer;
      (window as unknown as Record<string, unknown>).seoOptimizer = advancedSEOOptimizer;
      (window as unknown as Record<string, unknown>).accessibilityEnhancer = accessibilityEnhancer;
      (window as unknown as Record<string, unknown>).securityManager = advancedSecurityManager;
      (window as unknown as Record<string, unknown>).analytics = advancedAnalytics;
      (window as unknown as Record<string, unknown>).errorHandler = advancedErrorHandler;
      (window as unknown as Record<string, unknown>).cachingSystem = advancedCachingSystem;
      (window as unknown as Record<string, unknown>).uxOptimizer = advancedUXOptimizer;
      (window as unknown as Record<string, unknown>).testingFramework = advancedTestingFramework;
      (window as unknown as Record<string, unknown>).i18n = advancedI18n;
    } catch (error) {
      console.error('Error initializing enhancements:', error);
    }

    // Add event listener
    window.addEventListener('keydown', onKeyDown);

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="relative">
          {/* Spinner */}
          <div className="w-12 h-12 text-blue-500">
            <svg
              className="animate-spin w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>

          {/* Progress Ring */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="opacity-20"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - loadingProgress / 100)}`}
                className="transition-all duration-300 ease-in-out"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Progress Text */}
        <div className="mt-4 text-center">
          <div className="text-white text-lg font-semibold mb-2">
            Loading Zion AI Platform...
          </div>
          <div className="text-gray-300 text-sm">
            {Math.round(loadingProgress)}%
          </div>
        </div>

        {/* Loading Dots Animation */}
        <div className="flex space-x-1 mt-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    );
  }

  return (
    <EnhancedErrorBoundary>
      <SEOOptimizer 
        title={seoDataForOptimizer.title}
        description={seoDataForOptimizer.description}
        canonicalUrl={seoDataForOptimizer.canonical}
      />
      <AdvancedAnalytics enableConversionTracking enablePerformanceTracking enableErrorTracking />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AppRouter />

        {showPerformanceOptimizer && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Optimizer</h2>
                <button onClick={() => setShowPerformanceOptimizer(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
              </div>
              <PerformanceOptimizer isVisible={true} onClose={() => setShowPerformanceOptimizer(false)} />
            </div>
          </div>
        )}

        {showPerformanceMonitor && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Monitor</h2>
                <button onClick={() => setShowPerformanceMonitor(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
              </div>
              <PerformanceMonitor />
            </div>
          </div>
        )}

        <NotificationSystem notifications={notifications} onRemove={handleRemoveNotification} />
      </div>
    </EnhancedErrorBoundary>
  );
};

export default App;