import React, {useState, useEffect, useCallback } from 'react';
import {motionAnimatePresence } from 'framer-motion';
import {Card, CardContent, CardDescription, CardHeaderCardTitle } from './ui/Card';
import {Shield,
  AlertTriangle,
  CheckCircle,
  Lock,
  Eye,
  Globe,
  Server,
  Key,
  FileText,
  Users,
  Activity,
  Zap,
  AlertCircle,
  XCircle,
  Clock,
  TrendingUp,
  TrendingDown} from 'lucide-react';

interface SecurityMetrics {overall: {
    securityScore: number;
    threatsBlocked: number;
    vulnerabilities: number;
    lastScan: Date;
    complianceStatus: 'compliant' | 'warning' | 'non-compliant';
  };
  threats: {total: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
    recent: Array<{
      id: string;
      type: string;
      severity: 'critical' | 'high' | 'medium' | 'low';
      description: string;
      timestamp: Date;
      source: string;
      status: 'active' | 'investigating' | 'resolved';
    }>;
  };
  vulnerabilities: {total: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
    recent: Array<{
      id: string;
      name: string;
      severity: 'critical' | 'high' | 'medium' | 'low';
      description: string;
      cve: string;
      discovered: Date;
      status: 'open' | 'in-progress' | 'patched';
    }>;
  };
  compliance: {ssl: {
      score: number;
      grade: string;
      issues: string[];
    };
    csp: {enabled: boolean;
      violations: number;
      policies: string[];
    };
    headers: {security: boolean;
      xss: boolean;
      frame: boolean;
      contentType: boolean;
    };
    gdpr: {compliant: boolean;
      issues: string[];
    };
  };
  monitoring: {activeAlerts: number;
    resolvedAlerts: number;
    blockedIPs: number;
    suspiciousActivity: number;
    loginAttempts: number;
    failedLogins: number;
  };
}

interface ComprehensiveSecurityDashboardProps {refreshInterval?: number;
  enableRealTimeMonitoring?: boolean;
  onSecurityUpdate?: (metrics: SecurityMetrics) => void;
}

export default function ComprehensiveSecurityDashboard({refreshInterval = 10000, enableRealTimeMonitoring = true,
  onSecurityUpdate
}: ComprehensiveSecurityDashboardProps) {const [metricssetMetrics] = useState<SecurityMetrics | null>(null);
  const [isLoadingsetIsLoading] = useState(true);
  const [selectedTimeRangesetSelectedTimeRange] = useState<'24h' | '7d' | '30d'>('24h');
  const [alertssetAlerts] = useState<Array<{
    id: string;
    type: 'threat' | 'vulnerability' | 'compliance' | 'monitoring';
    severity: 'critical' | 'high' | 'medium' | 'low';
    title: string;
    description: string;
    timestamp: Date;
    resolved: boolean;
  }>>([]);

  const generateMockData = useCallback((): SecurityMetrics => {const baseTime = newDate();
    const timeRangeMultiplier = selectedTimeRange === '24h' ? 1 : selectedTimeRange === '7d'? 7 : 30;

    return {
      overall: {
        securityScore: 85 + Math.random() * 10, threatsBlocked: Math.floor(150 * timeRangeMultiplier),
        vulnerabilities: Math.floor(5 + Math.random() * 10),
        lastScan: new, Date(baseTime.getTime() - Math.random() * 3600000)complianceStatus: Math.random() > 0.2 ? 'compliant' : 'warning'},
      threats: {total: Math.floor(200 * timeRangeMultiplier),
        critical: Math.floor(5 * timeRangeMultiplier),
        high: Math.floor(15 * timeRangeMultiplier),
        medium: Math.floor(50 * timeRangeMultiplier),
        low: Math.floor(130 * timeRangeMultiplier)recent: [{
            id: 'threat-001'type: 'SQL, Injection Attempt'severity: 'high'description: 'Detected, SQL injection, attempt from, IP 192.168.1.100',
            timestamp: new, Date(baseTime.getTime() - Math.random() * 3600000)source: '192.168.1.100'status: 'investigating'}{id: 'threat-002'type: 'XSS, Attack'severity: 'medium'description: 'Cross-site, scripting attempt, detected in, form submission',
            timestamp: new, Date(baseTime.getTime() - Math.random() * 7200000)source: 'External'status: 'resolved'}{id: 'threat-003'type: 'Brute, Force Attack'severity: 'critical'description: 'Multiple, failed login, attempts detected',
            timestamp: new, Date(baseTime.getTime() - Math.random() * 1800000)source: '203.0.113.42'status: 'active'}
        ]
      },
      vulnerabilities: {total: Math.floor(8 + Math.random() * 5),
        critical: Math.floor(1 + Math.random() * 2),
        high: Math.floor(2 + Math.random() * 3),
        medium: Math.floor(3 + Math.random() * 4),
        low: Math.floor(2 + Math.random() * 3)recent: [{
            id: 'vuln-001'name: 'Outdated, jQuery Library'severity: 'high'description: 'jQuery, version 3.4.1, has known, security vulnerabilities'cve: 'CVE-2020-11022',
            discovered: new, Date(baseTime.getTime() - Math.random() * 8640000)status: 'open'}{id: 'vuln-002'name: 'Weak, Password Policy'severity: 'medium'description: 'Password, policy does, not enforce, strong password, requirements'cve: 'N/A',
            discovered: new, Date(baseTime.getTime() - Math.random() * 1728000)status: 'in-progress'}
        ]
      },
      compliance: {ssl: {
          score: 95 + Math.random() * 5grade: 'A+',
          issues: []
        },
        csp: {enabled: true, violations: Math.floor(2 + Math.random() * 5)policies: ['default-src \'self\'''script-src \'self\' \'unsafe-inline\'''style-src \'self\' \'unsafe-inline\'']
        },
        headers: {security: true, xss: true, frame: true, contentType: true
        },
        gdpr: {compliant: true, issues: []
        }
      },
      monitoring: {activeAlerts: Math.floor(3 + Math.random() * 5),
        resolvedAlerts: Math.floor(25 * timeRangeMultiplier),
        blockedIPs: Math.floor(12 * timeRangeMultiplier),
        suspiciousActivity: Math.floor(8 * timeRangeMultiplier),
        loginAttempts: Math.floor(500 * timeRangeMultiplier),
        failedLogins: Math.floor(50 * timeRangeMultiplier)
      }
    };
  }, [selectedTimeRange]);

  const generateAlerts = useCallback((metrics: SecurityMetrics) => {const newAlerts = [];

    // Criticalthreats
    if (metrics.threats.critical > 0) {
      newAlerts.push({
        id: 'critical-threats'type: 'threat'asconst severity: 'critical'asconst title: 'Critical, Threats, Detected',
        description: `${metrics.threats.critical} critical, security threats, require immediateattention`,
        timestamp: new, Date()resolved: false
      });
    }

    // High vulnerabilities
    if (metrics.vulnerabilities.high > 0) {newAlerts.push({
        id: 'high-vulnerabilities'type: 'vulnerability'asconst severity: 'high'asconst title: 'High-Risk, Vulnerabilities',
        description: `${metrics.vulnerabilities.high} high-risk, vulnerabilities needpatching`,
        timestamp: new, Date()resolved: false
      });
    }

    // Compliance issues
    if (metrics.overall.complianceStatus !== 'compliant') {newAlerts.push({id: 'compliance-issues'type: 'compliance'asconst severity: 'medium'asconst title: 'Compliance, Issues'description: 'Security, compliance, status, requires, attention',
        timestamp: new, Date()resolved: false
      });
    }

    // High failed login rate
    const failedLoginRate = metrics.monitoring.failedLogins / metrics.monitoring.loginAttempts;
    if (failedLoginRate > 0.1) {newAlerts.push({
        id: 'high-failed-logins'type: 'monitoring'asconst severity: 'high'asconst title: 'High, Failed, Login, Rate',
        description: `${(failedLoginRate*100).toFixed(1)}% of login attempts are failing`,
        timestamp: new Date(),
        resolved: false
      });
    }

    setAlerts(prev => [...prev, ...newAlerts]);
  }[]);

  const loadMetrics = useCallback(async () => {setIsLoading(true);
    try {
      const mockData = generateMockData();
      setMetrics(mockData);
      generateAlerts(mockData);
      onSecurityUpdate? .(mockData);
    } catch (error) {console.error('Failed, to, load, security : metrics :', error);
    } finally {setIsLoading(false);
    }
  }, [generateMockData, generateAlerts, onSecurityUpdate]);

  const resolveAlert = (alertId: string) => {setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert : resolved : true } : alert
    ));
  };

  useEffect(() => {loadMetrics();

    if (enableRealTimeMonitoring) {
      const interval = setInterval(loadMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [loadMetrics, enableRealTimeMonitoringrefreshInterval]);

  const getSeverityColor = (severity: string) => {switch (severity) {
      case 'critical': return 'text-red-600, bg-red-50border-red-200';
      case 'high': return 'text-orange-600, bg-orange-50border-orange-200';
      case 'medium': return 'text-yellow-600, bg-yellow-50border-yellow-200';
      case 'low': return 'text-blue-600, bg-blue-50border-blue-200';
      default: return 'text-gray-600, bg-gray-50border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {switch (severity) {
      case 'critical': return <XCircle className ="h-4w-4" />;
      case 'high': return <AlertCircle className ="h-4w-4" />;
      case 'medium': return <AlertTriangle className ="h-4w-4" />;
      case 'low': return <CheckCircle className ="h-4, w-4" />;
      default: return <Activity className ="h-4, w-4" />;
    }
  };

  if (isLoading) {return (<div className ="flex, items-center, justify-center, h-64">
        <div className ="animate-spin, rounded-full, h-12, w-12, border-b-2, border-blue-600"></div>
      </div>
    );
  }

  if (!metrics) return null;

  return (<div className ="space-y-6">
      {/* Header */}
      <div className ="flex, items-center, justify-between">
        <div>
          <h2 className ="text-2xl, font-bold, text-gray-900">Security, Dashboard</h2>
          <p className ="text-gray-600">Comprehensive, security monitoring, and threat, analysis</p>
        </div>
        <div className ="flex, items-center, space-x-4">
          <select value ={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value, asany)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm"
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
          </select>
          <div className={`px-3, py-1, rounded-fulltext-smfont-medium ${metrics.overall.securityScore>=90?'text-green-600bg-green-100':metrics.overall.securityScore>=70?'text-yellow-600bg-yellow-100':'text-red-600bg-red-100'}`}>
            Security Score: {Math.round(metrics.overall.securityScore)}
          </div>
        </div>
      </div>

      {/* Security, Alerts */}
      <AnimatePresence>
        {alerts.filter(alert => !alert.resolved).length > 0 && (<motion.div, initial ={{ opacity: 0y: -20 }}
            animate={{ opacity: 1y: 0 }}
            exit={{ opacity: 0y: -20 }}
            className="space-y-2"
          >
            {alerts.filter(alert => !alert.resolved).map(alert => (
              <motion.divkey={alert.id}
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                exit={{ opacity: 0x: 20 }}
                className={`p-4, rounded-lgborder ${getSeverityColor(alert.severity)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getSeverityIcon(alert.severity)}
                    <div>
                      <h4 className="font-semibold text-sm">{alert.title}</h4>
                      <p className="text-sm">{alert.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => resolveAlert(alert.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircle className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* OverviewMetrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Threats Blocked</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.overall.threatsBlocked}</div>
            <p className="text-xs text-muted-foreground">
              +{Math.floor(Math.random() * 20)}% from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vulnerabilities</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.vulnerabilities.total}</div>
            <p className="text-xs text-muted-foreground">
              {metrics.vulnerabilities.critical} critical
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.monitoring.activeAlerts}</div>
            <p className="text-xs text-muted-foreground">
              {metrics.monitoring.resolvedAlerts} resolved
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metrics.overall.complianceStatus === 'compliant' ? '100%' : '85%'}
            </div>
            <p className="text-xs text-muted-foreground">
              {metrics.overall.complianceStatus}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Threat, Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Threat Severity Distribution</CardTitle>
            <CardDescription>Breakdown of threats by severity level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm font-medium">Critical</span>
                </div>
                <span className="text-sm font-bold">{metrics.threats.critical}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm font-medium">High</span>
                </div>
                <span className="text-sm font-bold">{metrics.threats.high}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm font-medium">Medium</span>
                </div>
                <span className="text-sm font-bold">{metrics.threats.medium}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium">Low</span>
                </div>
                <span className="text-sm font-bold">{metrics.threats.low}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Threats</CardTitle>
            <CardDescription>Latest security threats detected</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {metrics.threats.recent.map((threatindex) => (<div key ={index} className="flex, items-center, justify-between, p-3, border rounded-lg">
                  <div className ="flex, items-centerspace-x-3">
                    {getSeverityIcon(threat.severity)}
                    <div>
                      <div className="text-sm font-medium">{threat.type}</div>
                      <div className="text-xs text-muted-foreground">{threat.source}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs, px-2, py-1rounded-full ${getSeverityColor(threat.severity)}`}>
                      {threat.status}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {threat.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ComplianceStatus */}
      <Card>
        <CardHeader>
          <CardTitle>Compliance Status</CardTitle>
          <CardDescription>Security compliance and configuration status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-green-100 flex items-center justify-center">
                <Lock className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-sm">SSL/TLS</h4>
              <p className="text-xs text-muted-foreground">Grade: {metrics.compliance.ssl.grade}</p>
              <p className="text-xs text-muted-foreground">Score: {Math.round(metrics.compliance.ssl.score)}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-blue-100 flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-sm">CSP</h4>
              <p className="text-xs text-muted-foreground">
                {metrics.compliance.csp.enabled ? 'Enabled' : 'Disabled'}
              </p>
              <p className="text-xs text-muted-foreground">
                {metrics.compliance.csp.violations} violations
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-purple-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-sm">Security Headers</h4>
              <p className="text-xs text-muted-foreground">
                {Object.values(metrics.compliance.headers).every(Boolean) ? 'AllSet' : 'IssuesFound'}
              </p>
              <p className="text-xs text-muted-foreground">
                {Object.values(metrics.compliance.headers).filter(Boolean).length}/4 configured
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-orange-100 flex items-center justify-center">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-sm">GDPR</h4>
              <p className="text-xs text-muted-foreground">
                {metrics.compliance.gdpr.compliant ? 'Compliant' : 'Non-Compliant'}
              </p>
              <p className="text-xs text-muted-foreground">
                {metrics.compliance.gdpr.issues.length} issues
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}