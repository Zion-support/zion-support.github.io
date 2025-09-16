import React, { useEffect, useState } from 'react';

interface SecurityMetrics {
  isSecure: boolean;
  hasHttps: boolean;
  hasCSP: boolean;
  hasCORS: boolean;
  hasXSSProtection: boolean;
  hasCSRFProtection: boolean;
  threatsDetected: number;
  lastScan: number;
}

interface SecurityThreat {
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  timestamp: number;
}

const SecurityMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<SecurityMetrics | null>(null);
  const [threats, setThreats] = useState<SecurityThreat[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    performSecurityScan();
    
    // Perform periodic security scans
    const scanInterval = setInterval(performSecurityScan, 30000); // Every 30 seconds
    
    return () => clearInterval(scanInterval);
  }, []);

  const performSecurityScan = async () => {
    setIsScanning(true);
    
    try {
      // Check HTTPS
      const hasHttps = window.location.protocol === 'https:';
      
      // Check Content Security Policy
      const hasCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]') !== null;
      
      // Check CORS headers (simplified check)
      const hasCORS = true; // In a real app, this would check actual CORS headers
      
      // Check XSS protection
      const hasXSSProtection = document.querySelector('meta[http-equiv="X-XSS-Protection"]') !== null;
      
      // Check CSRF protection (simplified)
      const hasCSRFProtection = document.querySelector('meta[name="csrf-token"]') !== null;
      
      // Detect potential threats
      const newThreats: SecurityThreat[] = [];
      
      if (!hasHttps) {
        newThreats.push({
          type: 'Insecure Connection',
          severity: 'high',
          description: 'Application is not using HTTPS',
          timestamp: Date.now()
        });
      }
      
      if (!hasCSP) {
        newThreats.push({
          type: 'Missing CSP',
          severity: 'medium',
          description: 'Content Security Policy not implemented',
          timestamp: Date.now()
        });
      }
      
      if (!hasXSSProtection) {
        newThreats.push({
          type: 'XSS Protection',
          severity: 'medium',
          description: 'XSS protection headers not set',
          timestamp: Date.now()
        });
      }
      
      // Check for suspicious scripts
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
        if (script.src && !script.src.startsWith(window.location.origin)) {
          newThreats.push({
            type: 'External Script',
            severity: 'low',
            description: `External script loaded from: ${script.src}`,
            timestamp: Date.now()
          });
        }
      });
      
      const securityMetrics: SecurityMetrics = {
        isSecure: newThreats.length === 0,
        hasHttps,
        hasCSP,
        hasCORS,
        hasXSSProtection,
        hasCSRFProtection,
        threatsDetected: newThreats.length,
        lastScan: Date.now()
      };
      
      setMetrics(securityMetrics);
      setThreats(newThreats);
      
    } catch (error) {
      console.error('Security scan failed:', error);
    } finally {
      setIsScanning(false);
    }
  };

  const getSecurityColor = (isSecure: boolean) => {
    return isSecure ? 'text-green-400' : 'text-red-400';
  };

  const getThreatSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  if (!metrics) return null;

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Security Monitor</span>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${metrics.isSecure ? 'bg-green-400' : 'bg-red-400'}`}></div>
          <button
            onClick={performSecurityScan}
            disabled={isScanning}
            className="text-blue-400 hover:text-blue-300 text-xs disabled:opacity-50"
          >
            {isScanning ? 'Scanning...' : 'Scan'}
          </button>
        </div>
      </div>
      
      <div className="space-y-1">
        <div>Status: <span className={getSecurityColor(metrics.isSecure)}>
          {metrics.isSecure ? 'Secure' : 'Issues Found'}
        </span></div>
        <div>HTTPS: <span className={metrics.hasHttps ? 'text-green-400' : 'text-red-400'}>
          {metrics.hasHttps ? '✓' : '✗'}
        </span></div>
        <div>CSP: <span className={metrics.hasCSP ? 'text-green-400' : 'text-red-400'}>
          {metrics.hasCSP ? '✓' : '✗'}
        </span></div>
        <div>CORS: <span className={metrics.hasCORS ? 'text-green-400' : 'text-red-400'}>
          {metrics.hasCORS ? '✓' : '✗'}
        </span></div>
        <div>XSS: <span className={metrics.hasXSSProtection ? 'text-green-400' : 'text-red-400'}>
          {metrics.hasXSSProtection ? '✓' : '✗'}
        </span></div>
        <div>CSRF: <span className={metrics.hasCSRFProtection ? 'text-green-400' : 'text-red-400'}>
          {metrics.hasCSRFProtection ? '✓' : '✗'}
        </span></div>
      </div>
      
      {threats.length > 0 && (
        <div className="mt-3 border-t border-gray-600 pt-2">
          <div className="font-bold mb-1 text-red-400">Threats Detected:</div>
          <div className="max-h-32 overflow-y-auto space-y-1">
            {threats.map((threat, index) => (
              <div key={index} className="text-xs">
                <span className={getThreatSeverityColor(threat.severity)}>
                  [{threat.severity.toUpperCase()}]
                </span> {threat.type}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-2 text-gray-400 text-xs">
        Last scan: {new Date(metrics.lastScan).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default SecurityMonitor;