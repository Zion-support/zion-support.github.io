import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRouter } from './router';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import './index.css';
// duplicate import removed
import { performanceMonitor } from './utils/performanceMonitor';
import { securityManager as enhancedSecurityManager } from './utils/securityHeaders';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';
import SEOOptimizer from './components/SEOOptimizer';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';
import { Notification as AppNotification } from './components/NotificationSystem';

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
    <EnhancedErrorBoundary>
      <div className="min-h-screen">
        <AppRouter />
      </div>
    </EnhancedErrorBoundary>
  );
}
