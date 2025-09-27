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
        userAgent: 'Mozilla/5.0 (Windows NT10.0; Win64; x64) AppleWebKit/537.36',
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
        description: 'SSL certificate expired30days ago',
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
      case 'critical': return 'bg-red-100text-red-800border-red-200';
      case 'high': return 'bg-orange-100text-orange-800border-orange-200';
      case 'medium': return 'bg-yellow-100text-yellow-800border-yellow-200';
      case 'low': return 'bg-blue-100text-blue-800border-blue-200';
      default: return 'bg-gray-100 text-gray-800border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'login_attempt': return <Users className="h-4w-4" />;
      case 'data_breach': return <Database className="h-4w-4" />;
      case 'malware': return <AlertTriangle className="h-4w-4" />;
      case 'ddos': return <Globe className="h-4w-4" />;
      case 'unauthorized_access': return <Lock className="h-4w-4" />;
      case 'suspicious_activity': return <Eye className="h-4w-4" />;
      default: return <Activity className="h-4w-4" />;
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-6w-6text-red-600" />
              <span>Comprehensive Security Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3h-3rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}</div>
                <span className="text-sm text-gray-600">
                  {isMonitoring ? 'Monitoring' : 'Stopped'}
                </span>
              </div>
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3py-1border border-gray-300rounded-md text-sm"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last24Hours</option>
                <option value="7d">Last7Days</option>
                <option value="30d">Last30Days</option>
              </select>
            </div>
          </CardTitle>
          <CardDescription>
            Advanced security monitoring, threat detection, and compliance management
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Tab Navigation */}
          <div className="flex space-x-1mb-6border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2px-4 py-2text-sm font-medium border-b-2transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-500text-red-600'
                    : 'border-transparent text-gray-500hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Security Score */}
              <div className="grid grid-cols-1md:grid-cols-4gap-4">
                <div className="p-6border rounded-lg text-center">
                  <div className={`text-4xl font-bold ${getSecurityScoreColor(metrics.securityScore)}`}
                    {metrics.securityScore}
                  </div>
                  <div className="text-sm text-gray-600">Security Score</div>
                  <div className="text-xs text-gray-500mt-1">Out of100</div>
                </div>
                <div className="p-6border rounded-lg text-center">
                  <div className="text-4xl font-bold text-green-600">{metrics.threatsBlocked}</div>
                  <div className="text-sm text-gray-600">Threats Blocked</div>
                  <div className="text-xs text-gray-500mt-1">Last24h</div>
                </div>
                <div className="p-6border rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600">{metrics.vulnerabilities}</div>
                  <div className="text-sm text-gray-600">Vulnerabilities</div>
                  <div className="text-xs text-gray-500mt-1">Found</div>
                </div>
                <div className="p-6border rounded-lg text-center">
                  <div className="text-4xl font-bold text-purple-600">{metrics.patchesApplied}</div>
                  <div className="text-sm text-gray-600">Patches Applied</div>
                  <div className="text-xs text-gray-500mt-1">This Week</div>
                </div>
              </div>

              {/* Threat Distribution */}
              <div className="grid grid-cols-1lg:grid-cols-2gap-6">
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
                            <span className={`px-2py-1text-xs font-medium rounded-full border ${getSeverityColor(event.severity)}`}
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
                <h3className="text-lg font-semibold">Security Events</h3>
                <div className="flex space-x-2">
                  <button className="px-3py-1text-sm bg-red-600text-white rounded hover:bg-red-700">
                    Block All Threats
                  </button>
                  <button className="px-3py-1text-sm border border-gray-300rounded hover:bg-gray-50">
                    Export
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {events.map((event) => (
                  <div key={event.id} className="p-4border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2rounded-full ${
                          event.severity === 'critical' ? 'bg-red-100' :
                          event.severity === 'high' ? 'bg-orange-100' :
                          event.severity === 'medium' ? 'bg-yellow-100' :
                          'bg-blue-100'
                        }`}
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
                        <span className={`px-2py-1text-xs font-medium rounded-full border ${getSeverityColor(event.severity)}`}
                          {event.severity.toUpperCase()}
                        </span>
                        {event.resolved ? (
                          <CheckCircle className="h-4w-4text-green-600" />
                        ) : (
                          <Clock className="h-4w-4text-yellow-600" />
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2md:grid-cols-4gap-4text-sm text-gray-600">
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
                <h3className="text-lg font-semibold">Security Vulnerabilities</h3>
                <div className="flex space-x-2">
                  <button className="px-3py-1text-sm bg-blue-600text-white rounded hover:bg-blue-700">
                    Scan Now
                  </button>
                  <button className="px-3py-1text-sm border border-gray-300rounded hover:bg-gray-50">
                    View All
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {vulnerabilities.map((vuln) => (
                  <div key={vuln.id} className="p-4border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-medium">{vuln.name}</div>
                        <div className="text-sm text-gray-500">{vuln.description}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2py-1text-xs font-medium rounded-full border ${getSeverityColor(vuln.severity)}`}
                          {vuln.severity.toUpperCase()}
                        </span>
                        {vuln.patched ? (
                          <CheckCircle className="h-4w-4text-green-600" />
                        ) : (
                          <XCircle className="h-4w-4text-red-600" />
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2md:grid-cols-4gap-4text-sm text-gray-600">
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
                      <div className="flex flex-wrap gap-1mt-1">
                        {vuln.affectedSystems.map((system, index) => (
                          <span key={index} className="px-2py-1bg-gray-100 text-gray-700text-xs rounded">
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
                <h3className="text-lg font-semibold">Security Policies</h3>
                <button className="px-3py-1text-sm bg-green-600text-white rounded hover:bg-green-700">
                  Add Policy
                </button>
              </div>

              <div className="space-y-3">
                {policies.map((policy) => (
                  <div key={policy.id} className="p-4border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-medium">{policy.name}</div>
                        <div className="text-sm text-gray-500">{policy.description}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2py-1text-xs font-medium rounded-full ${
                          policy.status === 'active' ? 'bg-green-100text-green-800' :
                          policy.status === 'pending' ? 'bg-yellow-100text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}
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
                      <div className="w-32bg-gray-200rounded-full h-2">
                        <div 
                          className="bg-blue-600h-2rounded-full" 
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
              <div className="grid grid-cols-1md:grid-cols-3gap-4">
                <div className="p-4border rounded-lg text-center">
                  <CheckCircle className="h-8w-8text-green-600mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Overall Compliance</div>
                </div>
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Standards Met</div>
                </div>
                <div className="p-4border rounded-lg text-center">
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
                    <div className="flex items-center justify-between p-3border rounded-lg">
                      <div>
                        <div className="font-medium">ISO27001</div>
                        <div className="text-sm text-gray-500">Information Security Management</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5w-5text-green-600" />
                        <span className="text-sm text-green-600">Compliant</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3border rounded-lg">
                      <div>
                        <div className="font-medium">GDPR</div>
                        <div className="text-sm text-gray-500">General Data Protection Regulation</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5w-5text-green-600" />
                        <span className="text-sm text-green-600">Compliant</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3border rounded-lg">
                      <div>
                        <div className="font-medium">SOC2</div>
                        <div className="text-sm text-gray-500">Service Organization Control</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5w-5text-yellow-600" />
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