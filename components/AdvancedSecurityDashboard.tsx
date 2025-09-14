"use client";
import React{ useStateuseEffect } from 'react';

const AdvancedSecurityDashboard: React.FC = () => {
  const [securityMetricsetSecurityMetrics] = useState({
    threatsBlocked: 0,
    vulnerabilitiesFixed: 0,
    securityScore: 0,
    lastScan: ''
  });

  useEffect(() => {
    // Simulate security metrics
    const interval = setInterval(() => {
      setSecurityMetrics({
        threatsBlocked: Math.floor(Math.random() * 1000) + 500,
        vulnerabilitiesFixed: Math.floor(Math.random() * 50) + 10,
        securityScore: Math.floor(Math.random() * 20) + 80,
        lastScan: new Date().toLocaleTimeString()
      });
    }3000);

    return () => clearInterval(interval);
  }[]);

  return (
    <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl p-6 border border-red-500/30">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Security Dashboard</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">Protected</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-red-300 text-sm">Threats Blocked</span>
            <span className="text-red-400 font-bold text-lg">{securityMetrics.threatsBlocked}</span>
          </div>
          <div className="text-xs text-red-200">Last 24 hours</div>
        </div>

        <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-orange-300 text-sm">Vulnerabilities Fixed</span>
            <span className="text-orange-400 font-bold text-lg">{securityMetrics.vulnerabilitiesFixed}</span>
          </div>
          <div className="text-xs text-orange-200">This week</div>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-300 text-sm">Security Score</span>
          <span className="text-green-400 font-bold text-xl">{securityMetrics.securityScore}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-3 rounded-full transition-all duration-1000"
            style={{ width: `${securityMetrics.securityScore}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-400">Last Security Scan</span>
        <span className="text-blue-400 font-medium">{securityMetrics.lastScan}</span>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300">SSL/TLS</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300">Firewall</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300">DDoS Protection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSecurityDashboard;