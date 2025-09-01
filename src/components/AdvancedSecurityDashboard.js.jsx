import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Download, 
  RefreshCw, 
  X, 
  Maximize2, 
  Minimize2, 
  Activity, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Server, 
  FileText, 
  Bug 
} from 'lucide-react';

const mockThreatIntelligence = [
  {
    id: '1',
    threatType: 'Ransomware Campaign',
    description: 'Active ransomware campaign targeting healthcare organizations in the region.',
    riskScore: 9.2,
    affectedSystems: ['Windows Servers', 'File Shares', 'Backup Systems'],
    mitigationSteps: ['Update endpoint protection', 'Enable advanced threat protection', 'Review backup procedures'],
    lastSeen: '2024-01-15T09:00:00.000Z',
    frequency: 15
  },
  {
    id: '2',
    threatType: 'Phishing Attack',
    description: 'Sophisticated phishing campaign using executive impersonation.',
    riskScore: 7.8,
    affectedSystems: ['Email Systems', 'User Workstations'],
    mitigationSteps: ['Enhanced email filtering', 'User awareness training', 'Multi-factor authentication'],
    lastSeen: '2024-01-15T08:30:00.000Z',
    frequency: 8
  }
];

const mockSecurityEvents = [
  {
    id: '1',
    type: 'threat',
    severity: 'critical',
    title: 'Suspicious Login Attempt',
    description: 'Multiple failed login attempts from unknown IP address',
    timestamp: '2024-01-15T10:30:00.000Z',
    status: 'investigating'
  },
  {
    id: '2',
    type: 'vulnerability',
    severity: 'high',
    title: 'Outdated SSL Certificate',
    description: 'SSL certificate expired on production server',
    timestamp: '2024-01-15T09:15:00.000Z',
    status: 'resolved'
  }
];

const mockComplianceRequirements = [
  {
    id: '1',
    framework: 'SOC 2',
    requirement: 'Access Control',
    description: 'Implement proper access controls for all systems',
    status: 'compliant',
    lastAudit: '2024-01-10T00:00:00.000Z'
  },
  {
    id: '2',
    framework: 'GDPR',
    requirement: 'Data Encryption',
    description: 'Encrypt all personal data at rest and in transit',
    status: 'in_progress',
    lastAudit: '2024-01-08T00:00:00.000Z'
  }
];

const mockSecurityMetrics = {
  threatScore: 7.2,
  vulnerabilityCount: 15,
  complianceScore: 85,
  incidentResponseTime: 2.5,
  userTrainingCompletion: 92
};

export function AdvancedSecurityDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedFramework, setSelectedFramework] = useState('all');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showResolved, setShowResolved] = useState(false);
  const [securityEvents, setSecurityEvents] = useState(mockSecurityEvents);
  const [complianceRequirements, setComplianceRequirements] = useState(mockComplianceRequirements);
  const [securityMetrics, setSecurityMetrics] = useState(mockSecurityMetrics);
  const [threatIntelligence, setThreatIntelligence] = useState(mockThreatIntelligence);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const containerRef = useRef(null);
  const severities = ['all', 'critical', 'high', 'medium', 'low', 'info'];
  
  const filteredCompliance = selectedFramework === 'all'
    ? complianceRequirements
    : complianceRequirements.filter(req => req.framework === selectedFramework);

  const refreshData = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRefreshing(false);
  };

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(refreshData, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500 text-white';
      case 'high':
        return 'bg-orange-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-white';
      case 'low':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'compliant':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'non_compliant':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getRiskLevelColor = (riskLevel) => {
    switch (riskLevel) {
      case 'high':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'threat':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'vulnerability':
        return <Bug className="w-5 h-5 text-orange-500" />;
      case 'compliance':
        return <Shield className="w-5 h-5 text-blue-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Security Dashboard
          </h2>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={refreshData}
            disabled={isRefreshing}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
          
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      {!isMinimized && (
        <div className="p-4">
          {/* Tabs */}
          <div className="flex space-x-1 mb-4">
            {['overview', 'threats', 'compliance', 'events'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-red-600 dark:text-red-400">Threat Score</p>
                    <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                      {securityMetrics.threatScore}
                    </p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Vulnerabilities</p>
                    <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                      {securityMetrics.vulnerabilityCount}
                    </p>
                  </div>
                  <Bug className="w-8 h-8 text-orange-500" />
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">Compliance</p>
                    <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                      {securityMetrics.complianceScore}%
                    </p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Response Time</p>
                    <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                      {securityMetrics.incidentResponseTime}h
                    </p>
                  </div>
                  <Activity className="w-8 h-8 text-blue-500" />
                </div>
              </div>
            </div>
          )}

          {/* Threats Tab */}
          {activeTab === 'threats' && (
            <div className="space-y-4">
              {threatIntelligence.map(threat => (
                <div key={threat.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{threat.threatType}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{threat.description}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskLevelColor(threat.riskScore > 8 ? 'high' : 'medium')}`}>
                      Risk: {threat.riskScore}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">Affected Systems:</p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        {threat.affectedSystems.map(system => (
                          <li key={system}>{system}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">Mitigation Steps:</p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        {threat.mitigationSteps.map(step => (
                          <li key={step}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Compliance Tab */}
          {activeTab === 'compliance' && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <select
                  value={selectedFramework}
                  onChange={(e) => setSelectedFramework(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="all">All Frameworks</option>
                  <option value="SOC 2">SOC 2</option>
                  <option value="GDPR">GDPR</option>
                  <option value="HIPAA">HIPAA</option>
                  <option value="ISO 27001">ISO 27001</option>
                </select>
              </div>

              {filteredCompliance.map(requirement => (
                <div key={requirement.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {requirement.framework}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(requirement.status)}`}>
                          {requirement.status.replace('_', ' ')}
                        </span>
                      </div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                        {requirement.requirement}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {requirement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <select
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  {severities.map(severity => (
                    <option key={severity} value={severity}>
                      {severity.charAt(0).toUpperCase() + severity.slice(1)}
                    </option>
                  ))}
                </select>
                
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={showResolved}
                    onChange={(e) => setShowResolved(e.target.checked)}
                    className="rounded border-gray-300 dark:border-gray-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Show Resolved</span>
                </label>
              </div>

              {securityEvents.map(event => (
                <div key={event.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    {getEventIcon(event.type)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">{event.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(event.severity)}`}>
                          {event.severity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <span>{new Date(event.timestamp).toLocaleString()}</span>
                        <span className="capitalize">{event.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
