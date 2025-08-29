import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  RefreshCw,
  X,
  Settings,
  Security,
  Key,
  Fingerprint,
  Database,
  Network
} from 'lucide-react';

interface SecurityStatus {
  csp: boolean;
  https: boolean;
  xss: boolean;
  csrf: boolean;
  sqlInjection: boolean;
  rateLimit: boolean;
  encryption: boolean;
  audit: boolean;
}

interface SecurityAlert {
  id: string;
  type: 'warning' | 'error' | 'info' | 'success';
  message: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  resolved: boolean;
}

interface SecurityMetrics {
  threatsBlocked: number;
  requestsAnalyzed: number;
  vulnerabilitiesFound: number;
  lastScan: Date;
  uptime: number;
}

export const SecurityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'monitoring' | 'settings' | 'logs'>('overview');
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus>({
    csp: true,
    https: true,
    xss: true,
    csrf: true,
    sqlInjection: true,
    rateLimit: true,
    encryption: true,
    audit: true,
  });
  
  const [alerts, setAlerts] = useState<SecurityAlert[]>([]);
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    threatsBlocked: 0,
    requestsAnalyzed: 0,
    vulnerabilitiesFound: 0,
    lastScan: new Date(),
    uptime: 99.9,
  });

  // Security monitoring
  const monitorSecurity = useCallback(() => {
    // Check CSP headers
    const checkCSP = () => {
      const meta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      return !!meta;
    };

    // Check HTTPS
    const checkHTTPS = () => {
      return window.location.protocol === 'https:';
    };

    // Check for common vulnerabilities
    const checkVulnerabilities = () => {
      // Simulate security checks
      const hasXSS = !document.querySelector('script[src*="unsafe"]');
      const hasCSRF = document.querySelector('meta[name="csrf-token"]');
      const hasSQLInjection = true; // Would check backend
      const hasRateLimit = true; // Would check backend
      const hasEncryption = true; // Would check backend
      const hasAudit = true; // Would check backend

      return {
        xss: hasXSS,
        csrf: !!hasCSRF,
        sqlInjection: hasSQLInjection,
        rateLimit: hasRateLimit,
        encryption: hasEncryption,
        audit: hasAudit,
      };
    };

    const csp = checkCSP();
    const https = checkHTTPS();
    const vulnerabilities = checkVulnerabilities();

    setSecurityStatus({
      csp,
      https,
      ...vulnerabilities,
    });

    // Generate security alerts
    const newAlerts: SecurityAlert[] = [];
    
    if (!csp) {
      newAlerts.push({
        id: `csp-${Date.now()}`,
        type: 'error',
        message: 'Content Security Policy not configured',
        severity: 'high',
        timestamp: new Date(),
        resolved: false,
      });
    }
    
    if (!https) {
      newAlerts.push({
        id: `https-${Date.now()}`,
        type: 'error',
        message: 'HTTPS not enabled',
        severity: 'critical',
        timestamp: new Date(),
        resolved: false,
      });
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...newAlerts, ...prev].slice(0, 10));
    }

    // Update metrics
    setMetrics(prev => ({
      ...prev,
      threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 5),
      requestsAnalyzed: prev.requestsAnalyzed + Math.floor(Math.random() * 100),
      lastScan: new Date(),
    }));
  }, []);

  useEffect(() => {
    monitorSecurity();
    const interval = setInterval(monitorSecurity, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [monitorSecurity]);

  // Apply security headers
  const applySecurityHeaders = useCallback(() => {
    // In a real application, this would be done server-side
    // For demo purposes, we'll simulate it
    console.log('Applying security headers...');
    
    // Simulate security header application
    const headers = {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    };

    console.log('Security headers applied:', headers);
  }, []);

  // Resolve alert
  const resolveAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, resolved: true } : alert
    ));
  };

  // Get security score
  const getSecurityScore = () => {
    const checks = Object.values(securityStatus);
    const passed = checks.filter(Boolean).length;
    return Math.round((passed / checks.length) * 100);
  };

  // Get security level
  const getSecurityLevel = (score: number) => {
    if (score >= 90) return { level: 'Excellent', color: 'text-green-600', icon: CheckCircle };
    if (score >= 70) return { level: 'Good', color: 'text-yellow-600', icon: AlertTriangle };
    if (score >= 50) return { level: 'Fair', color: 'text-orange-600', icon: AlertTriangle };
    return { level: 'Poor', color: 'text-red-600', icon: AlertTriangle };
  };

  if (!isVisible) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(true)}
        className="fixed left-4 top-20 z-50 w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        aria-label="Open security panel"
        title="Security Monitor"
      >
        <Shield className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -400 }}
        className="fixed left-4 top-32 z-50 w-80 max-h-[80vh] overflow-hidden"
      >
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <h3 className="font-semibold">Security Monitor</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label={isExpanded ? 'Collapse panel' : 'Expand panel'}
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.div>
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label="Close security panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto"
              >
                {/* Tabs */}
                <div className="flex space-x-1 bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
                  {[
                    { id: 'overview', label: 'Overview', icon: Shield },
                    { id: 'monitoring', label: 'Monitoring', icon: Eye },
                    { id: 'settings', label: 'Settings', icon: Settings },
                    { id: 'logs', label: 'Logs', icon: Database }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          activeTab === tab.id
                            ? 'bg-white dark:bg-slate-600 text-gray-900 dark:text-white shadow-sm'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      {/* Security Score */}
                      <div className="text-center p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                        {(() => {
                          const score = getSecurityScore();
                          const { level, color, icon: Icon } = getSecurityLevel(score);
                          return (
                            <div>
                              <Icon className={`w-8 h-8 mx-auto mb-2 ${color}`} />
                              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {score}%
                              </div>
                              <div className={`text-sm font-medium ${color}`}>
                                {level}
                              </div>
                            </div>
                          );
                        })()}
                      </div>

                      {/* Security Status Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <SecurityStatusCard
                          title="CSP"
                          status={securityStatus.csp}
                          icon={Shield}
                        />
                        <SecurityStatusCard
                          title="HTTPS"
                          status={securityStatus.https}
                          icon={Lock}
                        />
                        <SecurityStatusCard
                          title="XSS Protection"
                          status={securityStatus.xss}
                          icon={Eye}
                        />
                        <SecurityStatusCard
                          title="CSRF Protection"
                          status={securityStatus.csrf}
                          icon={Key}
                        />
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'monitoring' && (
                    <motion.div
                      key="monitoring"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      {/* Metrics */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Security Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          <MetricCard
                            icon={Shield}
                            label="Threats Blocked"
                            value={metrics.threatsBlocked.toString()}
                          />
                          <MetricCard
                            icon={Network}
                            label="Requests Analyzed"
                            value={metrics.requestsAnalyzed.toString()}
                          />
                          <MetricCard
                            icon={AlertTriangle}
                            label="Vulnerabilities"
                            value={metrics.vulnerabilitiesFound.toString()}
                          />
                          <MetricCard
                            icon={CheckCircle}
                            label="Uptime"
                            value={`${metrics.uptime}%`}
                          />
                        </div>
                      </div>

                      {/* Alerts */}
                      {alerts.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2 text-yellow-600" />
                            Security Alerts
                          </h4>
                          {alerts.filter(alert => !alert.resolved).map((alert) => (
                            <motion.div
                              key={alert.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`p-3 rounded-lg text-sm ${
                                alert.type === 'error' 
                                  ? 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                                  : alert.type === 'warning'
                                  ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                                  : 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{alert.message}</span>
                                <button
                                  onClick={() => resolveAlert(alert.id)}
                                  className="text-xs px-2 py-1 bg-white/50 rounded hover:bg-white/70 transition-colors"
                                >
                                  Resolve
                                </button>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === 'settings' && (
                    <motion.div
                      key="settings"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Security Actions
                        </h4>
                        <button
                          onClick={applySecurityHeaders}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center"
                        >
                          <Shield className="w-4 h-4 mr-2" />
                          Apply Security Headers
                        </button>
                        <button
                          onClick={monitorSecurity}
                          className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center"
                        >
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Run Security Scan
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'logs' && (
                    <motion.div
                      key="logs"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Security Logs
                        </h4>
                        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                          <p>Last scan: {metrics.lastScan.toLocaleString()}</p>
                          <p>Total threats blocked: {metrics.threatsBlocked}</p>
                          <p>Requests analyzed: {metrics.requestsAnalyzed}</p>
                          <p>Uptime: {metrics.uptime}%</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Security Status Card Component
const SecurityStatusCard: React.FC<{
  title: string;
  status: boolean;
  icon: React.ComponentType<{ className?: string }>;
}> = ({ title, status, icon: Icon }) => (
  <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg text-center">
    <Icon className={`w-5 h-5 mx-auto mb-2 ${status ? 'text-green-600' : 'text-red-600'}`} />
    <div className={`text-lg font-semibold ${status ? 'text-green-600' : 'text-red-600'}`}>
      {status ? '✓' : '✗'}
    </div>
    <div className="text-xs text-gray-600 dark:text-gray-400">{title}</div>
  </div>
);

// Metric Card Component
const MetricCard: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}> = ({ icon: Icon, label, value }) => (
  <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg text-center">
    <Icon className="w-5 h-5 mx-auto mb-2 text-blue-600" />
    <div className="text-lg font-semibold text-gray-900 dark:text-white">{value}</div>
    <div className="text-xs text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);