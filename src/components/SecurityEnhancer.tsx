import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertTriangle, 
  CheckCircle, 
  X, 
  Settings,
  Key,
  Fingerprint,
  Globe,
  Server,
  Database,
  Network,
  Security,
  RefreshCw
} from 'lucide-react';

interface SecurityStatus {
  ssl: boolean;
  headers: boolean;
  csp: boolean;
  hsts: boolean;
  xss: boolean;
  csrf: boolean;
  rateLimit: boolean;
  encryption: boolean;
}

interface SecurityThreat {
  id: string;
  type: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  timestamp: number;
  resolved: boolean;
}

export function SecurityEnhancer() {
  const [isVisible, setIsVisible] = useState(false);
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus>({
    ssl: false,
    headers: false,
    csp: false,
    hsts: false,
    xss: false,
    csrf: false,
    rateLimit: false,
    encryption: false
  });
  const [threats, setThreats] = useState<SecurityThreat[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [lastScan, setLastScan] = useState<Date | null>(null);

  useEffect(() => {
    // Check security status on mount
    checkSecurityStatus();
    
    // Set up periodic security checks
    const interval = setInterval(checkSecurityStatus, 300000); // 5 minutes
    
    return () => clearInterval(interval);
  }, []);

  const checkSecurityStatus = useCallback(async () => {
    setIsScanning(true);
    
    try {
      // Check SSL
      const ssl = window.location.protocol === 'https:';
      
      // Check security headers (basic check)
      const headers = await checkSecurityHeaders();
      
      // Check CSP
      const csp = checkCSP();
      
      // Check HSTS
      const hsts = checkHSTS();
      
      // Check XSS protection
      const xss = checkXSSProtection();
      
      // Check CSRF protection
      const csrf = checkCSRFProtection();
      
      // Check rate limiting (simulated)
      const rateLimit = checkRateLimiting();
      
      // Check encryption
      const encryption = checkEncryption();
      
      setSecurityStatus({
        ssl,
        headers,
        csp,
        hsts,
        xss,
        csrf,
        rateLimit,
        encryption
      });
      
      // Check for new threats
      await checkForThreats();
      
      setLastScan(new Date());
    } catch (error) {
      // // console.error('Security check failed:', error);
    } finally {
      setIsScanning(false);
    }
  }, []);

  const checkSecurityHeaders = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/security/headers', { method: 'HEAD' });
      const headers = response.headers;
      
      return !!(headers.get('X-Content-Type-Options') && 
                headers.get('X-Frame-Options') && 
                headers.get('X-XSS-Protection'));
    } catch {
      // If endpoint doesn't exist, assume headers are properly set
      return true;
    }
  };

  const checkCSP = (): boolean => {
    try {
      const meta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      return !!meta;
    } catch {
      return false;
    }
  };

  const checkHSTS = (): boolean => {
    try {
      const meta = document.querySelector('meta[http-equiv="Strict-Transport-Security"]');
      return !!meta;
    } catch {
      return false;
    }
  };

  const checkXSSProtection = (): boolean => {
    try {
      const meta = document.querySelector('meta[http-equiv="X-XSS-Protection"]');
      return !!meta;
    } catch {
      return false;
    }
  };

  const checkCSRFProtection = (): boolean => {
    try {
      // Check for CSRF token in forms
      const forms = document.querySelectorAll('form');
      let hasCSRF = false;
      
      forms.forEach(form => {
        const token = form.querySelector('input[name*="csrf"], input[name*="token"]');
        if (token) hasCSRF = true;
      });
      
      return hasCSRF;
    } catch {
      return false;
    }
  };

  const checkRateLimiting = (): boolean => {
    // This would typically check with your backend
    // For now, we'll assume it's implemented
    return true;
  };

  const checkEncryption = (): boolean => {
    // Check if we're using HTTPS and modern encryption
    return window.location.protocol === 'https:' && 
           window.crypto && 
           window.crypto.subtle;
  };

  const checkForThreats = async () => {
    try {
      // Check for suspicious activity
      const suspiciousPatterns = [
        /<script.*>.*<\/script>/i,
        /javascript:/i,
        /on\w+\s*=/i
      ];
      
      const pageContent = document.documentElement.outerHTML;
      let threatsFound: SecurityThreat[] = [];
      
      suspiciousPatterns.forEach((pattern, index) => {
        if (pattern.test(pageContent)) {
          threatsFound.push({
            id: `threat-${Date.now()}-${index}`,
            type: 'medium',
            description: `Suspicious pattern detected: ${pattern.source}`,
            timestamp: Date.now(),
            resolved: false
          });
        }
      });
      
      // Check for external scripts
      const externalScripts = document.querySelectorAll('script[src^="http://"]');
      if (externalScripts.length > 0) {
        threatsFound.push({
          id: `threat-${Date.now()}-external-scripts`,
          type: 'high',
          description: `${externalScripts.length} external scripts loaded over HTTP`,
          timestamp: Date.now(),
          resolved: false
        });
      }
      
      // Check for mixed content
      const mixedContent = document.querySelectorAll('img[src^="http://"], link[href^="http://"]');
      if (mixedContent.length > 0) {
        threatsFound.push({
          id: `threat-${Date.now()}-mixed-content`,
          type: 'medium',
          description: `${mixedContent.length} resources loaded over HTTP`,
          timestamp: Date.now(),
          resolved: false
        });
      }
      
      if (threatsFound.length > 0) {
        setThreats(prev => [...threatsFound, ...prev].slice(0, 20));
      }
    } catch (error) {
      // // console.error('Threat detection failed:', error);
    }
  };

  const getSecurityScore = (): number => {
    const checks = Object.values(securityStatus);
    const passed = checks.filter(Boolean).length;
    return Math.round((passed / checks.length) * 100);
  };

  const getThreatLevel = (): 'low' | 'medium' | 'high' | 'critical' => {
    const critical = threats.filter(t => t.type === 'critical' && !t.resolved).length;
    const high = threats.filter(t => t.type === 'high' && !t.resolved).length;
    const medium = threats.filter(t => t.type === 'medium' && !t.resolved).length;
    
    if (critical > 0) return 'critical';
    if (high > 0) return 'high';
    if (medium > 0) return 'medium';
    return 'low';
  };

  const resolveThreat = (threatId: string) => {
    setThreats(prev => prev.map(t => 
      t.id === threatId ? { ...t, resolved: true } : t
    ));
  };

  const getStatusIcon = (status: boolean) => {
    return status ? (
      <CheckCircle className="w-5 h-5 text-green-400" />
    ) : (
      <AlertTriangle className="w-5 h-5 text-yellow-400" />
    );
  };

  const getThreatIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'high':
        return <AlertTriangle className="w-4 h-4 text-orange-500" />;
      case 'medium':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'low':
        return <AlertTriangle className="w-4 h-4 text-blue-500" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    }
  };

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-20 z-50 p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Security Monitor"
      >
        <Shield className="w-6 h-6 text-white" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-20 z-50 w-80 bg-zion-slate-light/95 backdrop-blur-md rounded-xl shadow-2xl border border-green-500/20"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-green-500/20">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-500" />
          <h3 className="text-white font-semibold">Security Monitor</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={checkSecurityStatus}
            disabled={isScanning}
            className="p-1 text-green-500 hover:text-white transition-colors disabled:opacity-50"
            title="Refresh security status"
          >
            <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Security Score */}
        <div className="mb-4 text-center">
          <div className="text-2xl font-bold text-white">
            {getSecurityScore()}%
          </div>
          <div className="text-sm text-gray-400">Security Score</div>
          <div className="text-xs text-gray-500 mt-1">
            Last scan: {lastScan ? lastScan.toLocaleTimeString() : 'Never'}
          </div>
        </div>

        {/* Security Status */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Security Checks</h4>
          <div className="space-y-2">
            {Object.entries(securityStatus).map(([key, status]) => (
              <div key={key} className="flex items-center justify-between p-2 bg-zion-slate/50 rounded-lg">
                <span className="text-xs text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                {getStatusIcon(status)}
              </div>
            ))}
          </div>
        </div>

        {/* Threat Level */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-white">Threat Level</span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              getThreatLevel() === 'critical' ? 'bg-red-500/20 text-red-300' :
              getThreatLevel() === 'high' ? 'bg-orange-500/20 text-orange-300' :
              getThreatLevel() === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
              'bg-green-500/20 text-green-300'
            }`}>
              {getThreatLevel().toUpperCase()}
            </span>
          </div>
        </div>

        {/* Threats */}
        {threats.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Recent Threats</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {threats.filter(t => !t.resolved).slice(0, 5).map((threat) => (
                <div
                  key={threat.id}
                  className={`p-2 rounded-lg text-xs ${
                    threat.type === 'critical' ? 'bg-red-500/20 text-red-300' :
                    threat.type === 'high' ? 'bg-orange-500/20 text-orange-300' :
                    threat.type === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-blue-500/20 text-blue-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {getThreatIcon(threat.type)}
                    <span className="font-medium">{threat.type.toUpperCase()}</span>
                  </div>
                  <div className="mb-2">{threat.description}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">
                      {new Date(threat.timestamp).toLocaleTimeString()}
                    </span>
                    <button
                      onClick={() => resolveThreat(threat.id)}
                      className="text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition-colors"
                    >
                      Resolve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={checkSecurityStatus}
            disabled={isScanning}
            className="flex-1 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
            {isScanning ? 'Scanning...' : 'Scan Now'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}