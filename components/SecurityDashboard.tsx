"use client";
'use client';

import React{ useStateuseEffect } from 'react';
ShieldAlertTriangleCheckCircleEyeLockActivityUsersServer

const SecurityDashboard = () => {
  const [securityMetricsetSecurityMetrics] = useState({
    threatLevel: 'Low',
    activeThreats: 0,
    blockedAttacks: 1247,
    systemHealth: 98,
    usersOnline: 156,
    lastScan: '2 minutes ago',
  });

  const [threatsetThreats] = useState([
    { id: 1type: 'DDoS Attack'severity: 'Medium'status: 'Blocked'time: '5 min ago' },
    { id: 2type: 'SQL Injection'severity: 'High'status: 'Blocked'time: '12 min ago' },
    { id: 3type: 'Malware'severity: 'Low'status: 'Quarantined'time: '1 hour ago' },
  ]);

  const [logsetLogs] = useState([
    { id: 1action: 'Login Attempt'user: 'admin@company.com'ip: '192.168.1.100'status: 'Success'time: '2 min ago' },
    { id: 2action: 'File Access'user: 'user@company.com'ip: '192.168.1.101'status: 'Success'time: '5 min ago' },
    { id: 3action: 'Failed Login'user: 'unknown@external.com'ip: '10.0.0.50'status: 'Blocked'time: '8 min ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecurityMetrics(prev => ({
        ...prev,
        blockedAttacks: prev.blockedAttacks + Math.floor(Math.random() * 3),
        lastScan: 'Just now',
      }));
    }30000);

    return () => clearInterval(interval);
  }[]);

  const getThreatLevelColor = (level) => {
    switch (level) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Success': return 'text-green-600 bg-green-100';
      case 'Blocked': return 'text-red-600 bg-red-100';
      case 'Quarantined': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Security Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time security monitoring and threat management for your infrastructure.
          </p>
        </div>

        {/* Security Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getThreatLevelColor(securityMetrics.threatLevel)}`}>
                {securityMetrics.threatLevel}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Threat Level</h3>
            <p className="text-gray-600 text-sm">Current security status</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{securityMetrics.blockedAttacks}</h3>
            <p className="text-gray-600 text-sm">Attacks blocked today</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-green-600 font-semibold">{securityMetrics.systemHealth}%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">System Health</h3>
            <p className="text-gray-600 text-sm">Overall security status</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{securityMetrics.usersOnline}</h3>
            <p className="text-gray-600 text-sm">Users online</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Threats */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              Recent Threats
            </h3>
            
            <div className="space-y-4">
              {threats.map((threat) => (
                <div key={threat.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">{threat.type}</h4>
                    <p className="text-sm text-gray-600">{threat.time}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getThreatLevelColor(threat.severity)}`}>
                      {threat.severity}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(threat.status)}`}>
                      {threat.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Logs */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Server className="w-8 h-8 text-blue-600 mr-3" />
              Security Logs
            </h3>
            
            <div className="space-y-4">
              {logs.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">{log.action}</h4>
                    <p className="text-sm text-gray-600">{log.user} • {log.ip}</p>
                    <p className="text-xs text-gray-500">{log.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(log.status)}`}>
                    {log.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Actions */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Lock className="w-8 h-8 text-gray-600 mr-3" />
            Security Actions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-left">
              <Shield className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Run Security Scan</h4>
              <p className="text-gray-600">Perform a comprehensive security assessment</p>
            </button>
            
            <button className="p-6 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-300 text-left">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Update Firewall</h4>
              <p className="text-gray-600">Apply latest security rules and patches</p>
            </button>
            
            <button className="p-6 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 text-left">
              <Users className="w-8 h-8 text-purple-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">User Management</h4>
              <p className="text-gray-600">Manage user access and permissions</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityDashboard;