import React, { useEffect, useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Lock, Database, Activity } from 'lucide-react';

interface SecurityMetrics {
  threatsBlocked: number;
  vulnerabilities: number;
  securityScore: number;
  lastScan: Date;
  sslStatus: 'active' | 'expired' | 'warning';
  firewallStatus: 'active' | 'inactive';
}

interface SecurityDashboardProps {
  className?: string;
}

const SecurityDashboard: React.FC<SecurityDashboardProps> = ({ className = "" }) => {
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    threatsBlocked: 0,
    vulnerabilities: 0,
    securityScore: 0,
    lastScan: new Date(),
    sslStatus: 'active',
    firewallStatus: 'active'
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading security metrics
    const loadMetrics = () => {
      setTimeout(() => {
        setMetrics({
          threatsBlocked: Math.floor(Math.random() * 1000) + 500,
          vulnerabilities: Math.floor(Math.random() * 10),
          securityScore: Math.floor(Math.random() * 20) + 80,
          lastScan: new Date(),
          sslStatus: 'active',
          firewallStatus: 'active'
        });
        setIsLoading(false);
      }, 1000);
    };

    loadMetrics();
  }, []);

  const getSecurityScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSecurityScoreIcon = (score: number) => {
    if (score >= 90) return CheckCircle;
    if (score >= 70) return AlertTriangle;
    return AlertTriangle;
  };

  if (isLoading) {
    return (
      <div className={`bg-white rounded-lg shadow-lg border p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  const SecurityScoreIcon = getSecurityScoreIcon(metrics.securityScore);

  return (
    <div className={`bg-white rounded-lg shadow-lg border p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Security Dashboard</h3>
          <p className="text-sm text-gray-600">Real-time security monitoring</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Security Score */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <SecurityScoreIcon className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Security Score</span>
            </div>
            <span className={`text-sm font-medium ${getSecurityScoreColor(metrics.securityScore)}`}>
              {metrics.securityScore >= 90 ? 'Excellent' : metrics.securityScore >= 70 ? 'Good' : 'Needs Attention'}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{metrics.securityScore}/100</div>
        </div>

        {/* Threats Blocked */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium text-gray-700">Threats Blocked</span>
            </div>
            <span className="text-sm font-medium text-green-600">Today</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{metrics.threatsBlocked}</div>
        </div>

        {/* Vulnerabilities */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-medium text-gray-700">Vulnerabilities</span>
            </div>
            <span className="text-sm font-medium text-yellow-600">Active</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{metrics.vulnerabilities}</div>
        </div>
      </div>

      {/* Security Status */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">Security Status</h4>
        
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Database className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">SSL Certificate</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              metrics.sslStatus === 'active' ? 'bg-green-500' : 
              metrics.sslStatus === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
            }`} />
            <span className="text-sm font-medium text-gray-900 capitalize">{metrics.sslStatus}</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Activity className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Firewall</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              metrics.firewallStatus === 'active' ? 'bg-green-500' : 'bg-red-500'
            }`} />
            <span className="text-sm font-medium text-gray-900 capitalize">{metrics.firewallStatus}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Last scan: {metrics.lastScan.toLocaleString()}</span>
          <button className="text-blue-600 hover:text-blue-800 transition-colors">
            Run Security Scan
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;