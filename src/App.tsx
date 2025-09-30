import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { AppRouter } from './router';
import './index.css';
import { performanceMonitor } from './utils/performanceMonitor';
import { securityManager as enhancedSecurityManager } from './utils/securityHeaders';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';
import SEOOptimizer from './components/SEOOptimizer';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';

// Temporary fallbacks for referenced components not present in repo
const Placeholder: React.FC<{ name: string }> = ({ name }) => (
  <div role="note" aria-label={`${name} placeholder`} />
);
const EnhancedSystemDashboard = () => <Placeholder name="EnhancedSystemDashboard" />;
const KeyboardShortcutsHelp = (props: any) => <Placeholder name="KeyboardShortcutsHelp" />;
const PerformanceWidget = (props: any) => <Placeholder name="PerformanceWidget" />;
const PerformanceDashboard = () => <Placeholder name="PerformanceDashboard" />;
const CommandPalette = (props: any) => <Placeholder name="CommandPalette" />;
const AdvancedMonitoringDashboard = (props: any) => <Placeholder name="AdvancedMonitoringDashboard" />;
const RealTimePerformanceMonitor = (props: any) => <Placeholder name="RealTimePerformanceMonitor" />;
const EnhancedCommandPalette = (props: any) => <Placeholder name="EnhancedCommandPalette" />;
const ComprehensivePerformanceDashboard = () => <Placeholder name="ComprehensivePerformanceDashboard" />;
const ComprehensiveMonitoringDashboard = () => <Placeholder name="ComprehensiveMonitoringDashboard" />;
const PerformanceOptimizationPanel = () => <Placeholder name="PerformanceOptimizationPanel" />;
const ErrorRecoveryDashboard = () => <Placeholder name="ErrorRecoveryDashboard" />;
const SystemStatusIndicator = (props: any) => <Placeholder name="SystemStatusIndicator" />;
const EnhancedNotificationSystem = (props: any) => <Placeholder name="EnhancedNotificationSystem" />;
const KeyboardShortcutsManager = (props: any) => <Placeholder name="KeyboardShortcutsManager" />;
const SystemHealthDashboard = (props: any) => <Placeholder name="SystemHealthDashboard" />;
const AIPerformanceDashboard = (props: any) => <Placeholder name="AIPerformanceDashboard" />;
const WebsiteEnhancements = (props: any) => <Placeholder name="WebsiteEnhancements" />;

export default function App(): React.JSX.Element {
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const seoDataForOptimizer = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises.',
    canonical: typeof window !== 'undefined' ? window.location.href : 'https://zion.app/',
  }), []);

  // Simple hotkeys for demo toggles
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.ctrlKey || !e.shiftKey) return;
      try {
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

        if (enhancedSecurityManager && typeof enhancedSecurityManager.initialize === 'function') {
          enhancedSecurityManager.initialize();
        }
        
        // Initialize accessibility enhancer
        if (accessibilityEnhancer && typeof accessibilityEnhancer.initialize === 'function') {
          accessibilityEnhancer.initialize();
        }
      } catch (error) {
        console.error('Error initializing enhancements:', error);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const handleRemoveNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <div>
      <SEOOptimizer seoData={seoDataForOptimizer} />
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
              <PerformanceMonitor showDashboard={true} />
            </div>
          </div>
        )}

        <NotificationSystem notifications={notifications} onRemove={handleRemoveNotification} />
      </div>
    </div>
  );
}
