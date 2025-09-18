import React, { useEffect, useState } from 'react';

const SecurityMonitor: React.FC = () => {
  const [securityStatus, setSecurityStatus] = useState({
    threatsBlocked: 0,
    vulnerabilitiesFixed: 0,
    uptime: 99.99,
    lastScan: new Date()
  });
  useEffect(() => {
    // Simulate security metrics updates
    const updateSecurity = () => {
      setSecurityStatus(prev => ({
        ...prev,
        threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 5),
        vulnerabilitiesFixed: prev.vulnerabilitiesFixed + Math.floor(Math.random() * 3),
        uptime: 99.99 + (Math.random() - 0.5) * 0.01
      }));
    };
    updateSecurity();
    const interval = setInterval(updateSecurity, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-red-500/20">
      <h3 className="text-2xl font-bold mb-4 flex items-center text-red-400">
        <span className="text-3xl mr-3">🛡️</span>
        Security Monitor
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-400">{securityStatus.threatsBlocked}</div>
          <div className="text-sm text-gray-300">Threats Blocked</div>
        </div>
          <div className="text-2xl font-bold text-orange-400">{securityStatus.vulnerabilitiesFixed}</div>
          <div className="text-sm text-gray-300">Vulnerabilities Fixed</div>
          <div className="text-2xl font-bold text-green-400">{securityStatus.uptime.toFixed(2)}%</div>
          <div className="text-sm text-gray-300">Uptime</div>
          <div className="text-2xl font-bold text-blue-400">
            {securityStatus.lastScan.toLocaleTimeString()}
          </div>
          <div className="text-sm text-gray-300">Last Scan</div>
      </div>
      <div className="mt-4 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
          Security Active
    </div>
  );
};
export default SecurityMonitor;
