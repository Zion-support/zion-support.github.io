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
// import { performanceMonitor } from './utils/performanceMonitor';
import { securityManager as enhancedSecurityManager } from './utils/securityHeaders';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';
import SEOOptimizer from './components/SEO';
const AdvancedAnalytics = () => null;
const PerformanceOptimizer = (props: any) => null;
const PerformanceMonitor = (props: any) => null;
const EnhancedErrorBoundary = ({ children }: { children: React.ReactNode }) => <>{children}</>;
import NotificationSystem from './components/NotificationSystem';

// Local stub to avoid type errors when optional performance init is not present
const initializePerformanceEnhancements = (): void => {};

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
  return (
    <div className="min-h-screen">
      <AppRouter />
    </div>
  );
}