import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AppRouter } from './router';

// import { resourcePreloader } from './utils/resourcePreloader';
// import { criticalCSSManager } from './utils/criticalCSSManager';
// import { sriUtility } from './security/sriUtility';
// import { csrfProtection } from './security/csrfProtection';
// import { structuredDataManager } from './seo/structuredDataManager';
// import { keyboardNavigationManager } from './accessibility/keyboardNavigationManager';
// import { screenReaderSupport } from './accessibility/screenReaderSupport';
import './index.css';
import { securityManager as enhancedSecurityManager } from './utils/securityHeaders';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';
import SEOOptimizer from './components/SEOOptimizer';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';
import PerformanceMonitor from './components/PerformanceMonitor';
import PerformanceOptimizer from './components/PerformanceOptimizer';

// Local stub to avoid type errors when optional performance init is not present
const initializePerformanceEnhancements = (): void => {};

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

interface WindowWithEnhancements extends Window {
  advancedPerformanceOptimizer?: { initialize?: () => void };
  advancedSEOOptimizer?: { initialize?: () => void };
  advancedSecurityManager?: { initialize?: () => void };
  advancedAnalytics?: { initialize?: () => void };
  advancedErrorHandler?: { initialize?: () => void };
  advancedCachingSystem?: { initialize?: () => void };
  advancedUXOptimizer?: { initialize?: () => void };
  advancedTestingFramework?: { initialize?: () => void };
  advancedI18n?: { initialize?: () => void };
  enhancements?: Record<string, unknown>;
  performanceOptimizer?: unknown;
  seoOptimizer?: unknown;
  accessibilityEnhancer?: unknown;
  securityManager?: unknown;
  analytics?: unknown;
  errorHandler?: unknown;
  cachingSystem?: unknown;
  uxOptimizer?: unknown;
  testingFramework?: unknown;
  i18n?: unknown;
}

interface SecurityManager {
  initialize?: () => void;
}

export default function App(): React.JSX.Element {
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  interface SEOData {
    title: string;
    description: string;
    canonical: string;
  }

  const seoDataForOptimizer: SEOData = useMemo(() => ({
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
      try {
        if (enhancedSecurityManager && typeof (enhancedSecurityManager as SecurityManager).initialize === 'function') {
          (enhancedSecurityManager as SecurityManager).initialize?.();
        }
      
        // Initialize new performance and accessibility enhancements
        initializePerformanceEnhancements();
        accessibilityEnhancer.initialize();
      
      // Initialize advanced optimizers
      // Guard optional advanced systems if present in global scope
      const windowWithEnhancements = window as WindowWithEnhancements;
      const advancedPerformanceOptimizer = windowWithEnhancements.advancedPerformanceOptimizer;
      const advancedSEOOptimizer = windowWithEnhancements.advancedSEOOptimizer;
      const advancedSecurityManager = windowWithEnhancements.advancedSecurityManager;
      const advancedAnalytics = windowWithEnhancements.advancedAnalytics;
      const advancedErrorHandler = windowWithEnhancements.advancedErrorHandler;
      const advancedCachingSystem = windowWithEnhancements.advancedCachingSystem;
      const advancedUXOptimizer = windowWithEnhancements.advancedUXOptimizer;
      const advancedTestingFramework = windowWithEnhancements.advancedTestingFramework;
      const advancedI18n = windowWithEnhancements.advancedI18n;

      advancedPerformanceOptimizer?.initialize?.();
      advancedSEOOptimizer?.initialize?.();
      accessibilityEnhancer.initialize();
      advancedSecurityManager?.initialize?.();
      advancedAnalytics?.initialize?.();
      // advancedErrorHandler is initialized in constructor
      advancedCachingSystem?.initialize?.();
      advancedUXOptimizer?.initialize?.();
      advancedTestingFramework?.initialize?.();
      advancedI18n?.initialize?.();
      // Store enhancements globally for debugging
      windowWithEnhancements.enhancements = {
        performanceOptimizer: advancedPerformanceOptimizer,
        seoOptimizer: advancedSEOOptimizer,
        accessibilityEnhancer: accessibilityEnhancer,
        securityManager: advancedSecurityManager,
        analytics: advancedAnalytics,
        errorHandler: advancedErrorHandler,
        cachingSystem: advancedCachingSystem,
        uxOptimizer: advancedUXOptimizer
      };
      windowWithEnhancements.performanceOptimizer = advancedPerformanceOptimizer;
      windowWithEnhancements.seoOptimizer = advancedSEOOptimizer;
      windowWithEnhancements.accessibilityEnhancer = accessibilityEnhancer;
      windowWithEnhancements.securityManager = advancedSecurityManager;
      windowWithEnhancements.analytics = advancedAnalytics;
      windowWithEnhancements.errorHandler = advancedErrorHandler;
      windowWithEnhancements.cachingSystem = advancedCachingSystem;
      windowWithEnhancements.uxOptimizer = advancedUXOptimizer;
      windowWithEnhancements.testingFramework = advancedTestingFramework;
      windowWithEnhancements.i18n = advancedI18n;
    } catch (error) {
      console.error('Error initializing enhancements:', error);
    }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleRemoveNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <EnhancedErrorBoundary>
      <SEOOptimizer title={seoDataForOptimizer.title} description={seoDataForOptimizer.description} canonicalUrl={seoDataForOptimizer.canonical} />
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
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
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
}
