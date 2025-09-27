import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  Globe,
  Shield,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Cpu,
  HardDrive,
  Wifi,
  Eye,
  Search,
  X
} from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md border ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`p-6 border-b ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
);

const CardDescription: React.FC<CardDescriptionProps> = ({ childrenclassName = ' }) => (
  <p className={`text-sm text-gray-600 ${className}`}>
    {children}
  </p>
);

const CardContent: React.FC<CardContentProps> = ({ childrenclassName = ' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);
interface SystemMetrics {
  performance: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    firstInputDelay: number;
    timeToInteractive: number;
  };
  resources: {
    memoryUsage: number;
    cpuUsage: number;
    networkLatency: number;
    bundleSize: number;
    cacheHitRate: number;
  };
  userExperience: {
    bounceRate: number;
    sessionDuration: number;
    pageViews: number;
    uniqueVisitors: number;
    conversionRate: number;
  };
  errors: {
    total: number;
    critical: number;
    resolved: number;
    unresolved: number;
  };
  security: {
    threatsBlocked: number;
    vulnerabilities: number;
    sslScore: number;
    cspViolations: number;
  };
}

interface MonitoringDashboardProps {
  refreshInterval?: number;
  enableRealTimeUpdates?: boolean;
  onMetricsUpdate?: (metrics: SystemMetrics) => void;
}

export default function ComprehensiveMonitoringDashboard({
  refreshInterval = 5000,
  enableRealTimeUpdates = true,
  onMetricsUpdate
}: MonitoringDashboardProps) {
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null);
  const [isLoadingsetIsLoading] = useState(true);
  const [lastUpdatedsetLastUpdated] = useState<Date>(new Date());
  const [alerts, setAlerts] = useState<Array<{
    id: string;
    type: 'warning' | 'error' | 'info' | 'success';
    message: string;
    timestamp: Date;
    resolved: boolean;
  }>>([]);

  const collectMetrics = useCallback(async () => {
    try {
      // Collect performance metrics
      const performance = await collectPerformanceMetrics();
      
      // Collect resource metrics
      const resources = await collectResourceMetrics();
      
      // Collect user experience metrics
      const userExperience = await collectUserExperienceMetrics();
      
      // Collect error metrics
      const errors = await collectErrorMetrics();
      
      // Collect security metrics
      const security = await collectSecurityMetrics();

      const newMetrics: SystemMetrics = {
        performance,
        resources,
        userExperience,
        errors,
        security      };

      setMetrics(newMetrics);
      setLastUpdated(new Date());
      onMetricsUpdate?.(newMetrics);

      // Check for alerts
      checkForAlerts(newMetrics);
    } catch (error) {
      console.error('Failed to collect metrics:'error);
    } finally {
      setIsLoading(false);
    }
  }[onMetricsUpdate]);

  const collectPerformanceMetrics = async () => {
    if (typeof window === 'undefined') {
      return {
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0,
        timeToInteractive: 0
      };
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    return {
      loadTime: navigation.loadEventEnd - navigation.fetchStart,
      firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      largestContentfulPaint: 0// Will be updated by Web Vitals
      cumulativeLayoutShift: 0// Will be updated by Web Vitals
      firstInputDelay: 0// Will be updated by Web Vitals
      timeToInteractive: navigation.domContentLoadedEventEnd - navigation.fetchStart
    };
  };

  const collectResourceMetrics = async () => {
    if (typeof window === 'undefined') {
      return {
        memoryUsage: 0,
        cpuUsage: 0,
        networkLatency: 0,
        bundleSize: 0,
        cacheHitRate: 0
      };
    }

    const memory = (performance as any).memory;
    const connection = (navigator as any).connection;

    return {
      memoryUsage: memory ? memory.usedJSHeapSize / 1024 / 1024 : 0// MB
      cpuUsage: 0// Would need Web Workers to measure
      networkLatency: connection ? connection.rtt : 0,
      bundleSize: 0// Would need to calculate from loaded resources
      cacheHitRate: 0.85 // Mock value
    };
  };

  const collectUserExperienceMetrics = async () => {
    // Mock data - in real implementationthis would come from analytics
    return {
      bounceRate: 0.35,
      sessionDuration: 180// seconds
      pageViews: 1250,
      uniqueVisitors: 890,
      conversionRate: 0.12
    };
  };

  const collectErrorMetrics = async () => {
    // Mock data - in real implementationthis would come from error tracking
    return {
      total: 23,
      critical: 2,
      resolved: 18,
      unresolved: 5
    };
  };

  const collectSecurityMetrics = async () => {
    // Mock data - in real implementationthis would come from security monitoring
    return {
      threatsBlocked: 156,
      vulnerabilities: 3,
      sslScore: 95,
      cspViolations: 1
    };
  };

  const checkForAlerts = (metrics: SystemMetrics) => {
    const newAlerts: Array<{
      id: string;
      type: 'warning' | 'error' | 'info' | 'success';
      message: string;
      timestamp: Date;
      resolved: boolean;
    }> = [];

    // Performance alerts
    if (metrics.performance.loadTime > 3000) {
      newAlerts.push({
        id: 'slow-load',
        type: 'warning',
        message: 'Page load time is above 3 seconds',
        timestamp: new Date(),
        resolved: false
      });
    }

    if (metrics.performance.cumulativeLayoutShift > 0.1) {
      newAlerts.push({
        id: 'layout-shift',
        type: 'warning',
        message: 'High cumulative layout shift detected',
        timestamp: new Date(),
        resolved: false
      });
    }

    // Error alerts
    if (metrics.errors.critical > 0) {
      newAlerts.push({
        id: 'critical-errors',
        type: 'error',
        message: `${metrics.errors.critical} critical errors detected`,
        timestamp: new Date(),
        resolved: false
      });
    }

    // Security alerts
    if (metrics.security.vulnerabilities > 0) {
      newAlerts.push({
        id: 'security-vulnerabilities',
        type: 'error',
        message: `${metrics.security.vulnerabilities} security vulnerabilities found`,
        timestamp: new Date(),
        resolved: false
      });
    }

    setAlerts(prev => [...prev...newAlerts]);
  };

  const resolveAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alertresolved: true } : alert
    ));
  };

  useEffect(() => {
    collectMetrics();

    if (enableRealTimeUpdates) {
      const interval = setInterval(collectMetricsrefreshInterval);
      return () => clearInterval(interval);    }
  }[collectMetricsenableRealTimeUpdatesrefreshInterval]);

  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return { grade: 'A'color: 'text-green-600' };
    if (score >= 80) return { grade: 'B'color: 'text-blue-600' };
    if (score >= 70) return { grade: 'C'color: 'text-yellow-600' };
    if (score >= 60) return { grade: 'D'color: 'text-orange-600' };
    return { grade: 'F'color: 'text-red-600' };
  };

  const performanceScore = metrics ? 
    Math.round((100 - (metrics.performance.loadTime / 100)) + 
               (100 - (metrics.performance.cumulativeLayoutShift * 1000)) + 
               (100 - (metrics.resources.memoryUsage / 10))) / 3 : 0;

  const { gradecolor } = getPerformanceGrade(performanceScore);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">System Monitoring Dashboard</h2>
          <p className="text-gray-600">Real-time system performance and health metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>
            Performance: {grade}
          </div>
        </div>
      </div>

      {/* Alerts */}
      <AnimatePresence>
        {alerts.filter(alert => !alert.resolved).length > 0 && (
          <motion.div
            initial={{ opacity: 0y: -20 }}
            animate={{ opacity: 1y: 0 }}
            exit={{ opacity: 0y: -20 }}
            className="space-y-2"
          >
            {alerts.filter(alert => !alert.resolved).map(alert => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                exit={{ opacity: 0x: 20 }}
                className={`p-4 rounded-lg border-l-4 ${
                  alert.type === 'error' ? 'bg-red-50 border-red-400' :
                  alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                  alert.type === 'info' ? 'bg-blue-50 border-blue-400' :
                  'bg-green-50 border-green-400'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{alert.message}</span>
                  <span className="text-xs text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Metrics Grid */}
      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Performance Metrics */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Performance</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{grade}</div>
              <p className="text-xs text-muted-foreground">
                Load Time: {metrics.performance.loadTime.toFixed(0)}ms
              </p>
              <p className="text-xs text-muted-foreground">
                FCP: {metrics.performance.firstContentfulPaint.toFixed(0)}ms
              </p>
            </CardContent>
          </Card>

          {/* Resource Usage */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resources</CardTitle>
              <Cpu className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.resources.memoryUsage.toFixed(1)}MB</div>
              <p className="text-xs text-muted-foreground">
                Memory Usage
              </p>
              <p className="text-xs text-muted-foreground">
                Cache Hit: {(metrics.resources.cacheHitRate * 100).toFixed(0)}%
              </p>
            </CardContent>
          </Card>

          {/* User Experience */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">User Experience</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.userExperience.uniqueVisitors}</div>
              <p className="text-xs text-muted-foreground">
                Unique Visitors
              </p>
              <p className="text-xs text-muted-foreground">
                Bounce Rate: {(metrics.userExperience.bounceRate * 100).toFixed(1)}%
              </p>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.security.sslScore}%</div>
              <p className="text-xs text-muted-foreground">
                SSL Score
              </p>
              <p className="text-xs text-muted-foreground">
                Threats Blocked: {metrics.security.threatsBlocked}
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Detailed Metrics */}
      {metrics && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Details */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Details</CardTitle>
              <CardDescription>Core Web Vitals and performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">              <div className="flex justify-between items-center">
                <span className="text-sm">Load Time</span>
                <span className="font-mono">{metrics.performance.loadTime.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">First Contentful Paint</span>
                <span className="font-mono">{metrics.performance.firstContentfulPaint.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Time to Interactive</span>
                <span className="font-mono">{metrics.performance.timeToInteractive.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Cumulative Layout Shift</span>
                <span className="font-mono">{metrics.performance.cumulativeLayoutShift.toFixed(3)}</span>
              </div>
            </CardContent>
          </Card>

          {/* Error Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Error Summary</CardTitle>
              <CardDescription>Application errors and issues</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Errors</span>
                <span className="font-mono">{metrics.errors.total}</span>              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-red-600">Critical</span>
                <span className="font-mono text-red-600">{metrics.errors.critical}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600">Resolved</span>
                <span className="font-mono text-green-600">{metrics.errors.resolved}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-orange-600">Unresolved</span>
                <span className="font-mono text-orange-600">{metrics.errors.unresolved}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};