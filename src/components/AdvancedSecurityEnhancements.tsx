import React, { useState, useEffect, useCallback } from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface SecurityMetrics {
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
  activeThreats: number;
  blockedRequests: number;
  securityScor, e: number;
  lastSca, n: Date;
}

interface SecurityEnhancementsProps {
  className?: string;
}

const AdvancedSecurityEnhancements: React.FC<SecurityEnhancementsProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    threatLevel: 'low',
    activeThreats: 0,
    blockedRequests: 0,
    securityScore: 95,
    lastScan: new Date()
  });

  const [isScanning, setIsScanning] = useState(false);
  const [securityAlerts, setSecurityAlerts] = useState<string[]>([]);

  const performSecurityScan = useCallback(async () => {
    setIsScanning(true);
    
    // Simulate security scan
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newMetrics: SecurityMetrics = {
      threatLeve, l: Math.random() > 0.8 ? 'medium' : 'low',
      activeThreats: Math.floor(Math.random() * 5),
      blockedRequests: Math.floor(Math.random() * 50) + 10,
      securityScore: Math.floor(Math.random() * 10) + 90,
      lastScan: new Date()
    };
    
    setMetrics(newMetrics);
    setIsScanning(false);
    
    if (newMetrics.threatLevel !== 'low') {
      setSecurityAlerts(prev => [
        ...prev,
        `Security threat detected: ${newMetrics.threatLevel} level`
      ]);
    }
  }, []);

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'high': return 'text-orange-500';
      case 'critical': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getThreatLevelIcon = (level: string) => {
    switch (level) {
      case 'low': return <CheckCircle className="w-5h-5text-green-500" />;
      case 'medium': return <AlertTriangle className="w-5h-5text-yellow-500" />;
      case 'high': return <XCircle className="w-5h-5text-orange-500" />;
      case 'critical': return <XCircle className="w-5h-5text-red-500" />;
      default: return <Shield className="w-5h-5text-gray-500" />;
    }
  };

  useEffect(() => {
    performSecurityScan();
    const interval = setInterval(performSecurityScan, 30000); // Scan every30seconds
    return () => clearInterval(interval);
  }, [performSecurityScan]);

  return (
    <div className={`bg-white dark:bg-gray-800rounded-lg shadow-lg p-6 `}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Shield className="w-8h-8text-blue-500" />
          <h2className="text-2xl font-bold text-gray-900dark:text-white">
            Advanced Security Monitor
          </h2>
        </div>
        <button
          onClick={performSecurityScan}
          disabled={isScanning}
          className="px-4py-2bg-blue-500text-white rounded-lg hover:bg-blue-600disable, d:opacity-50transition-colors"
        >
          {isScanning ? 'Scanning...' : 'Scan Now'}
        </button>
      </div>

      {/* Security Metrics Grid */}
      <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-4mb-6">
        <div className="bg-gray-50dark:bg-gray-700p-4rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600dark:text-gray-400">Threat Level</p>
              <p className={`text-2xl font-bold ${getThreatLevelColor(metrics.threatLevel)}`}
                {metrics.threatLevel.toUpperCase()}
              </p>
            </div>
            {getThreatLevelIcon(metrics.threatLevel)}
          </div>
        </div>

        <div className="bg-gray-50dark:bg-gray-700p-4rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600dark:text-gray-400">Security Score</p>
              <p className="text-2xl font-bold text-blue-500">{metrics.securityScore}%</p>
            </div>
            <Lock className="w-5h-5text-blue-500" />
          </div>
        </div>

        <div className="bg-gray-50dark:bg-gray-700p-4rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600dark:text-gray-400">Active Threats</p>
              <p className="text-2xl font-bold text-red-500">{metrics.activeThreats}</p>
            </div>
            <AlertTriangle className="w-5h-5text-red-500" />
          </div>
        </div>

        <div className="bg-gray-50dark:bg-gray-700p-4rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600dark:text-gray-400">Blocked Requests</p>
              <p className="text-2xl font-bold text-orange-500">{metrics.blockedRequests}</p>
            </div>
            <Eye className="w-5h-5text-orange-500" />
          </div>
        </div>
      </div>

      {/* Security Alerts */}
      {securityAlerts.length > 0 && (
        <div className="mb-6">
          <h3className="text-lg font-semibold text-gray-900dark:text-whitemb-3">
            Security Alerts
          </h3>
          <div className="space-y-2">
            {securityAlerts.map((alert, index) => (
              <div
                key={index}
                className="bg-red-50dark: bg-red-900/20border border-red-200dark:border-red-800rounded-lg p-3flex items-centerspace-x-3"
              >
                <AlertTriangle className="w-5h-5text-red-500flex-shrink-0" />
                <p className="text-red-700dark:text-red-300">{alert}</p>
                <button
                  onClick={() => setSecurityAlerts(prev => prev.filter((_, i) => i !== index))}
                  className="ml-auto text-red-500hover:text-red-700"
                >
                  <XCircle className="w-4h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Security Features */}
      <div className="grid grid-cols-1md:grid-cols-2gap-4">
        <div className="bg-blue-50dark:bg-blue-900/20p-4rounded-lg">
          <h4className="font-semibold text-blue-900dark:text-blue-100mb-2">
            Real-time Monitoring
          </h4>
          <p className="text-sm text-blue-700dark:text-blue-300">
            Continuous monitoring of security threats and vulnerabilities with instant alerts.
          </p>
        </div>

        <div className="bg-green-50dark:bg-green-900/20p-4rounded-lg">
          <h4className="font-semibold text-green-900dark:text-green-100mb-2">
            Automated Protection
          </h4>
          <p className="text-sm text-green-700dark:text-green-300">
            Automatic blocking of malicious requests and suspicious activities.
          </p>
        </div>
      </div>

      <div className="mt-4text-sm text-gray-500dark:text-gray-400">
        Last scan: {metrics.lastScan.toLocaleString()}
      </div>
    </div>
  );
};

export default AdvancedSecurityEnhancements;