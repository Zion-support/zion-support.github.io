import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Eye, 
  Key, 
  Users, 
  Globe, 
  Database, 
  Server, 
  Activity,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface SecurityEvent {
  id: string;
  type: 'login_attempt' | 'data_breach' | 'malware' | 'ddos' | 'unauthorized_access' | 'suspicious_activity';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  source: string;
  target: string;
  timestamp: Date;
  resolved: boolean;
  ipAddress: string;
  userAgent: string;
  location: string;
}

interface SecurityMetrics {
  totalThreats: number;
  threatsBlocked: number;
  threatsResolved: number;
  activeThreats: number;
  securityScore: number;
  lastScan: Date;
  vulnerabilities: number;
  patchesApplied: number;
}

interface Vulnerability {
  id: string;
  name: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  affectedSystems: string[];
  discoveredAt: Date;
  patched: boolean;
  cveId?: string;
  cvssScore: number;
}

interface SecurityPolicy {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'pending';
  lastUpdated: Date;
  compliance: number;
}

const ComprehensiveSecurityDashboard: React.FC = () => {
  const [events, setEvents] = useState<SecurityEvent[]>([]);
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    totalThreats: 0,
    threatsBlocked: 0,
    threatsResolved: 0,
    activeThreats: 0,
    securityScore: 0,
    lastScan: new Date(),
    vulnerabilities: 0,
    patchesApplied: 0
  });
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);
  const [policies, setPolicies] = useState<SecurityPolicy[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [activeTab, setActiveTab] = useState('overview');

  const generateMockData = useCallback(() => {
    const now = new Date();
    
    // Generate security events
    const mockEvents: SecurityEvent[] = [
      {
        id: '1',
        type: 'login_attempt',
        severity: 'high',
        description: 'Multiple failed login attempts from suspicious IP',
        source: '192.168.1.100',
        target: 'admin@company.com',
        timestamp: new Date(now.getTime() - 1000 * 60 * 15),
        resolved: false,
        ipAddress: '192.168.1.100',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        location: 'Unknown'
      },
      {
        id: '2',
        type: 'malware',
        severity: 'critical',
        description: 'Malware detected in uploaded file',
        source: 'File Upload System',
        target: 'Web Server',
        timestamp: new Date(now.getTime() - 1000 * 60 * 30),
        resolved: true,
        ipAddress: '10.0.0.5',
        userAgent: 'File Upload Client',
        location: 'Internal Network'
      },
      {
        id: '3',
        type: 'unauthorized_access',
        severity: 'medium',
        description: 'Unauthorized access attempt to restricted resource',
        source: 'External User',
        target: '/admin/dashboard',
        timestamp: new Date(now.getTime() - 1000 * 60 * 45),
        resolved: false,
        ipAddress: '203.0.113.42',
        userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
        location: 'United States'
      },
      {
        id: '4',
        type: 'ddos',
        severity: 'high',
        description: 'DDoS attack detected on main server',
        source: 'Multiple IPs',
        target: 'Web Server',
        timestamp: new Date(now.getTime() - 1000 * 60 * 60),
        resolved: true,
        ipAddress: 'Multiple',
        userAgent: 'DDoS Botnet',
        location: 'Global'
      }
    ];

    setEvents(mockEvents);

    // Generate metrics
    const newMetrics: SecurityMetrics = {
      totalThreats: 1247,
      threatsBlocked: 1189,
      threatsResolved: 1156,
      activeThreats: 33,
      securityScore: 87,
      lastScan: new Date(now.getTime() - 1000 * 60 * 30),
      vulnerabilities: 12,
      patchesApplied: 8
    };

    setMetrics(newMetrics);

    // Generate vulnerabilities
    const mockVulnerabilities: Vulnerability[] = [
      {
        id: '1',
        name: 'SQL Injection in Login Form',
        severity: 'high',
        description: 'Login form vulnerable to SQL injection attacks',
        affectedSystems: ['Web Server', 'Database'],
        discoveredAt: new Date(now.getTime() - 1000 * 60 * 60 * 2),
        patched: false,
        cveId: 'CVE-2024-1234',
        cvssScore: 8.2
      },
      {
        id: '2',
        name: 'Outdated SSL Certificate',
        severity: 'medium',
        description: 'SSL certificate expired 30 days ago',
        affectedSystems: ['Web Server'],
        discoveredAt: new Date(now.getTime() - 1000 * 60 * 60 * 24),
        patched: true,
        cveId: 'CVE-2024-5678',
        cvssScore: 5.4
      },
      {
        id: '3',
        name: 'Weak Password Policy',
        severity: 'low',
        description: 'Password policy allows weak passwords',
        affectedSystems: ['User Management System'],
        discoveredAt: new Date(now.getTime() - 1000 * 60 * 60 * 48),
        patched: false,
        cvssScore: 3.1
      }
    ];

    setVulnerabilities(mockVulnerabilities);

    // Generate security policies
    const mockPolicies: SecurityPolicy[] = [
      {
        id: '1',
        name: 'Password Policy',
        description: 'Enforce strong password requirements',
        status: 'active',
        lastUpdated: new Date(now.getTime() - 1000 * 60 * 60 * 24),
        compliance: 95
      },
      {
        id: '2',
        name: 'Data Encryption',
        description: 'Encrypt all sensitive data at rest and in transit',
        status: 'active',
        lastUpdated: new Date(now.getTime() - 1000 * 60 * 60 * 12),
        compliance: 88
      },
      {
        id: '3',
        name: 'Access Control',
        description: 'Implement role-based access control',
        status: 'pending',
        lastUpdated: new Date(now.getTime() - 1000 * 60 * 60 * 6),
        compliance: 72
      }
    ];

    setPolicies(mockPolicies);
  }, []);

  useEffect(() => {
    generateMockData();
    setIsMonitoring(true);

    const interval = setInterval(generateMockData, 15000);
    return () => clearInterval(interval);
  }, [generateMockData]);

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'login_attempt': return <Users className="h-4 w-4" />;
      case 'data_breach': return <Database className="h-4 w-4" />;
      case 'malware': return <AlertTriangle className="h-4 w-4" />;
      case 'ddos': return <Globe className="h-4 w-4" />;
      case 'unauthorized_access': return <Lock className="h-4 w-4" />;
      case 'suspicious_activity': return <Eye className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getSecurityScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const pieData = [
    { name: 'Blocked', value: metrics.threatsBlocked, color: '#10B981' },
    { name: 'Resolved', value: metrics.threatsResolved, color: '#3B82F6' },
    { name: 'Active', value: metrics.activeThreats, color: '#EF4444' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Shield },
    { id: 'events', name: 'Security Events', icon: Activity },
    { id: 'vulnerabilities', name: 'Vulnerabilities', icon: AlertTriangle },
    { id: 'policies', name: 'Policies', icon: Lock },
    { id: 'compliance', name: 'Compliance', icon: CheckCircle }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Security Dashboard</h2>
          <p className="text-gray-600">Comprehensive security monitoring and threat analysis</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value as any)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm"
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
          </select>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            metrics.overall.securityScore >= 90 ? 'text-green-600 bg-green-100' :
            metrics.overall.securityScore >= 70 ? 'text-yellow-600 bg-yellow-100' :
            'text-red-600 bg-red-100'
          }`}>
            Security Score: {Math.round(metrics.overall.securityScore)}
          </div>
        </div>
      </div>

      {/* Security Alerts */}
      <AnimatePresence>
        {alerts.filter(alert => !alert.resolved).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-2"
          >
            {alerts.filter(alert => !alert.resolved).map(alert => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)}`}
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

      {/* Overview Metrics */}
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

      {/* Threat Analysis */}
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
              {metrics.threats.recent.map((threat, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getSeverityIcon(threat.severity)}
                    <div>
                      <div className="text-sm font-medium">{threat.type}</div>
                      <div className="text-xs text-muted-foreground">{threat.source}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(threat.severity)}`}>
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

      {/* Compliance Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-red-600" />
              <span>Comprehensive Security Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                <span className="text-sm text-gray-600">
                  {isMonitoring ? 'Monitoring' : 'Stopped'}
                </span>
              </div>
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
            </div>
          </CardTitle>
          <CardDescription>
            Advanced security monitoring, threat detection, and compliance management
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Security Score */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-6 border rounded-lg text-center">
                  <div className={`text-4xl font-bold ${getSecurityScoreColor(metrics.securityScore)}`}>
                    {metrics.securityScore}
                  </div>
                  <div className="text-sm text-gray-600">Security Score</div>
                  <div className="text-xs text-gray-500 mt-1">Out of 100</div>
                </div>
                <div className="p-6 border rounded-lg text-center">
                  <div className="text-4xl font-bold text-green-600">{metrics.threatsBlocked}</div>
                  <div className="text-sm text-gray-600">Threats Blocked</div>
                  <div className="text-xs text-gray-500 mt-1">Last 24h</div>
                </div>
                <div className="p-6 border rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600">{metrics.vulnerabilities}</div>
                  <div className="text-sm text-gray-600">Vulnerabilities</div>
                  <div className="text-xs text-gray-500 mt-1">Found</div>
                </div>
                <div className="p-6 border rounded-lg text-center">
                  <div className="text-4xl font-bold text-purple-600">{metrics.patchesApplied}</div>
                  <div className="text-sm text-gray-600">Patches Applied</div>
                  <div className="text-xs text-gray-500 mt-1">This Week</div>
                </div>
              </div>

              {/* Threat Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Threat Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Security Events Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {events.slice(0, 5).map((event) => (
                        <div key={event.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {getTypeIcon(event.type)}
                            <span className="text-sm font-medium">{event.description}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getSeverityColor(event.severity)}`}>
                              {event.severity.toUpperCase()}
                            </span>
                            <span className="text-xs text-gray-500">
                              {event.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Security Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Security Events</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700">
                    Block All Threats
                  </button>
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                    Export
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {events.map((event) => (
                  <div key={event.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${
                          event.severity === 'critical' ? 'bg-red-100' :
                          event.severity === 'high' ? 'bg-orange-100' :
                          event.severity === 'medium' ? 'bg-yellow-100' :
                          'bg-blue-100'
                        }`}>
                          {getTypeIcon(event.type)}
                        </div>
                        <div>
                          <div className="font-medium">{event.description}</div>
                          <div className="text-sm text-gray-500">
                            {event.source} → {event.target}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getSeverityColor(event.severity)}`}>
                          {event.severity.toUpperCase()}
                        </span>
                        {event.resolved ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clock className="h-4 w-4 text-yellow-600" />
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">IP Address:</span> {event.ipAddress}
                      </div>
                      <div>
                        <span className="font-medium">Location:</span> {event.location}
                      </div>
                      <div>
                        <span className="font-medium">Time:</span> {event.timestamp.toLocaleString()}
                      </div>
                      <div>
                        <span className="font-medium">Status:</span> {event.resolved ? 'Resolved' : 'Active'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vulnerabilities Tab */}
          {activeTab === 'vulnerabilities' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Security Vulnerabilities</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                    Scan Now
                  </button>
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                    View All
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {vulnerabilities.map((vuln) => (
                  <div key={vuln.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-medium">{vuln.name}</div>
                        <div className="text-sm text-gray-500">{vuln.description}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getSeverityColor(vuln.severity)}`}>
                          {vuln.severity.toUpperCase()}
                        </span>
                        {vuln.patched ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">CVSS Score:</span> {vuln.cvssScore}
                      </div>
                      <div>
                        <span className="font-medium">CVE ID:</span> {vuln.cveId || 'N/A'}
                      </div>
                      <div>
                        <span className="font-medium">Discovered:</span> {vuln.discoveredAt.toLocaleDateString()}
                      </div>
                      <div>
                        <span className="font-medium">Status:</span> {vuln.patched ? 'Patched' : 'Unpatched'}
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="font-medium text-sm">Affected Systems:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {vuln.affectedSystems.map((system, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {system}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Policies Tab */}
          {activeTab === 'policies' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Security Policies</h3>
                <button className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                  Add Policy
                </button>
              </div>

              <div className="space-y-3">
                {policies.map((policy) => (
                  <div key={policy.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-medium">{policy.name}</div>
                        <div className="text-sm text-gray-500">{policy.description}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          policy.status === 'active' ? 'bg-green-100 text-green-800' :
                          policy.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {policy.status.toUpperCase()}
                        </span>
                        <div className="text-sm text-gray-600">
                          {policy.compliance}% compliance
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Last updated: {policy.lastUpdated.toLocaleDateString()}
                      </div>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${policy.compliance}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Compliance Tab */}
          {activeTab === 'compliance' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Overall Compliance</div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Standards Met</div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-600">2</div>
                  <div className="text-sm text-gray-600">Needs Attention</div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Compliance Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">ISO 27001</div>
                        <div className="text-sm text-gray-500">Information Security Management</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-green-600">Compliant</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">GDPR</div>
                        <div className="text-sm text-gray-500">General Data Protection Regulation</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-green-600">Compliant</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">SOC 2</div>
                        <div className="text-sm text-gray-500">Service Organization Control</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-yellow-600" />
                        <span className="text-sm text-yellow-600">In Progress</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ComprehensiveSecurityDashboard;