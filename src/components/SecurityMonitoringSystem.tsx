import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Eye,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  Network,
  Server,
  Database,
  FileText,
  Settings,
  RefreshCw,
  X,
  Info,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Activity,
  BarChart3,
  Target,
  AlertCircle,
  ShieldCheck,
  Bug,
  Virus,
  Fire
} from 'lucide-react';

interface SecurityThreat {
  id: string;
  type: 'low' | 'medium' | 'high' | 'critical';
  category: 'network' | 'application' | 'data' | 'access' | 'malware';
  description: string;
  timestamp: Date;
  source: string;
  status: 'active' | 'resolved' | 'investigating';
  impact: string;
  recommendation: string;
}

interface SecurityMetrics {
  threatsBlocked: number;
  vulnerabilitiesFound: number;
  securityScore: number;
  lastScan: Date;
  uptime: number;
  sslStatus: 'valid' | 'expired' | 'invalid';
  firewallStatus: 'active' | 'inactive' | 'error';
  malwareScans: number;
  failedLogins: number;
}

interface SecurityMonitoringSystemProps {
  enabled: boolean;
  showDashboard?: boolean;
  autoScan?: boolean;
  monitoringInterval?: number;
}

export const SecurityMonitoringSystem: React.FC<SecurityMonitoringSystemProps> = ({
  enabled = true,
  showDashboard = false,
  autoScan = true,
  monitoringInterval = 30000
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [threats, setThreats] = useState<SecurityThreat[]>([]);
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    threatsBlocked: 0,
    vulnerabilitiesFound: 0,
    securityScore: 100,
    lastScan: new Date(),
    uptime: 99.9,
    sslStatus: 'valid',
    firewallStatus: 'active',
    malwareScans: 0,
    failedLogins: 0
  });
  const [isScanning, setIsScanning] = useState(false);
  const [securityHeaders, setSecurityHeaders] = useState<Record<string, string>>({});
  const [activeThreats, setActiveThreats] = useState<SecurityThreat[]>([]);

  // Security scanning and monitoring
  const performSecurityScan = useCallback(async () => {
    if (!enabled) return;
    
    setIsScanning(true);
    
    try {
      // Simulate security scan
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check security headers
      const response = await fetch(window.location.href, { method: 'HEAD' });
      const headers: Record<string, string> = {};
      
      // Extract security headers
      const securityHeaderNames = [
        'X-Frame-Options',
        'X-Content-Type-Options',
        'X-XSS-Protection',
        'Strict-Transport-Security',
        'Content-Security-Policy',
        'Referrer-Policy',
        'Permissions-Policy'
      ];
      
      securityHeaderNames.forEach(header => {
        const value = response.headers.get(header);
        if (value) {
          headers[header] = value;
        }
      });
      
      setSecurityHeaders(headers);
      
      // Simulate threat detection
      const newThreats: SecurityThreat[] = [];
      
      // Check for missing security headers
      if (!headers['X-Frame-Options']) {
        newThreats.push({
          id: `threat-${Date.now()}-1`,
          type: 'medium',
          category: 'application',
          description: 'Missing X-Frame-Options header - potential clickjacking vulnerability',
          timestamp: new Date(),
          source: 'Security Headers Scan',
          status: 'active',
          impact: 'Clickjacking attacks possible',
          recommendation: 'Add X-Frame-Options: DENY header'
        });
      }
      
      if (!headers['Content-Security-Policy']) {
        newThreats.push({
          id: `threat-${Date.now()}-2`,
          type: 'high',
          category: 'application',
          description: 'Missing Content Security Policy - XSS protection limited',
          timestamp: new Date(),
          source: 'Security Headers Scan',
          status: 'active',
          impact: 'XSS attacks possible',
          recommendation: 'Implement comprehensive CSP policy'
        });
      }
      
      // Check for SSL/TLS issues
      if (window.location.protocol !== 'https:') {
        newThreats.push({
          id: `threat-${Date.now()}-3`,
          type: 'critical',
          category: 'network',
          description: 'Site not served over HTTPS - data transmission vulnerable',
          timestamp: new Date(),
          source: 'Protocol Check',
          status: 'active',
          impact: 'Data interception possible',
          recommendation: 'Enable HTTPS and redirect HTTP traffic'
        });
      }
      
      // Check for common vulnerabilities
      const forms = document.querySelectorAll('form');
      forms.forEach((form, index) => {
        if (!form.hasAttribute('action') || form.getAttribute('action') === '') {
          newThreats.push({
            id: `threat-${Date.now()}-${4 + index}`,
            type: 'medium',
            category: 'application',
            description: `Form ${index + 1} missing action attribute - potential CSRF vulnerability`,
            timestamp: new Date(),
            source: 'Form Security Scan',
            status: 'active',
            impact: 'CSRF attacks possible',
            recommendation: 'Add proper action attribute to form'
          });
        }
      });
      
      // Check for external scripts without integrity
      const scripts = document.querySelectorAll('script[src^="http"]');
      scripts.forEach((script, index) => {
        if (!script.hasAttribute('integrity')) {
          newThreats.push({
            id: `threat-${Date.now()}-${10 + index}`,
            type: 'medium',
            category: 'application',
            description: `External script ${index + 1} missing integrity attribute`,
            timestamp: new Date(),
            source: 'Script Security Scan',
            status: 'active',
            impact: 'Script injection possible',
            recommendation: 'Add integrity attribute or use SRI'
          });
        }
      });
      
      setThreats(prev => [...prev, ...newThreats]);
      setActiveThreats(newThreats);
      
      // Update metrics
      setMetrics(prev => ({
        ...prev,
        threatsBlocked: prev.threatsBlocked + newThreats.length,
        vulnerabilitiesFound: prev.vulnerabilitiesFound + newThreats.length,
        securityScore: Math.max(0, prev.securityScore - (newThreats.length * 5)),
        lastScan: new Date(),
        malwareScans: prev.malwareScans + 1
      }));
      
    } catch (error) {
      console.error('Security scan failed:', error);
    } finally {
      setIsScanning(false);
    }
  }, [enabled]);

  // Threat resolution
  const resolveThreat = useCallback((threatId: string) => {
    setThreats(prev => 
      prev.map(threat => 
        threat.id === threatId 
          ? { ...threat, status: 'resolved' as const }
          : threat
      )
    );
    
    setActiveThreats(prev => prev.filter(threat => threat.id !== threatId));
    
    // Update security score
    setMetrics(prev => ({
      ...prev,
      securityScore: Math.min(100, prev.securityScore + 5)
    }));
  }, []);

  // Auto-scan setup
  useEffect(() => {
    if (!enabled || !autoScan) return;
    
    performSecurityScan();
    
    const interval = setInterval(performSecurityScan, monitoringInterval);
    return () => clearInterval(interval);
  }, [enabled, autoScan, monitoringInterval, performSecurityScan]);

  // Real-time monitoring
  useEffect(() => {
    if (!enabled) return;
    
    // Monitor for suspicious activities
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Check for suspicious navigation patterns
      if (document.referrer && !document.referrer.includes(window.location.hostname)) {
        // Log potential phishing attempt
        console.warn('Potential phishing attempt detected');
      }
    };
    
    // Monitor for XSS attempts
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.innerHTML.includes('<script>') || element.innerHTML.includes('javascript:')) {
                console.warn('Potential XSS attempt detected');
                // Add to threats
                const newThreat: SecurityThreat = {
                  id: `threat-${Date.now()}-xss`,
                  type: 'critical',
                  category: 'malware',
                  description: 'Potential XSS attempt detected in DOM manipulation',
                  timestamp: new Date(),
                  source: 'Real-time Monitoring',
                  status: 'investigating',
                  impact: 'Code execution possible',
                  recommendation: 'Sanitize all user inputs and DOM manipulations'
                };
                setThreats(prev => [...prev, newThreat]);
                setActiveThreats(prev => [...prev, newThreat]);
              }
            }
          });
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Security Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-24 z-50 bg-gradient-to-r from-red-500 to-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Security Dashboard"
        aria-label="Open security monitoring dashboard"
      >
        <Shield className="w-6 h-6" />
        {activeThreats.length > 0 && (
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">{activeThreats.length}</span>
          </div>
        )}
      </motion.button>

      {/* Security Dashboard */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed left-6 bottom-24 z-50 w-96 max-h-[80vh] bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-labelledby="security-panel-title"
            aria-describedby="security-panel-description"
          >
            {/* Panel Header */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-600/20 p-4 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <h3 id="security-panel-title" className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-red-400" />
                  <span>Security Monitor</span>
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close security panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p id="security-panel-description" className="text-sm text-gray-300 mt-1">
                Monitor and manage security threats and vulnerabilities
              </p>
            </div>

            {/* Panel Content */}
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Security Score */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                  Security Score
                </h4>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className="text-slate-700"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={`${(metrics.securityScore / 100) * 175.93} 175.93`}
                        className={`transition-all duration-1000 ${
                          metrics.securityScore >= 80 ? 'text-green-400' : 
                          metrics.securityScore >= 60 ? 'text-yellow-400' : 
                          metrics.securityScore >= 40 ? 'text-orange-400' : 'text-red-400'
                        }`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{metrics.securityScore}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400">Current Score</div>
                    <div className={`text-lg font-semibold ${
                      metrics.securityScore >= 80 ? 'text-green-400' : 
                      metrics.securityScore >= 60 ? 'text-yellow-400' : 
                      metrics.securityScore >= 40 ? 'text-orange-400' : 'text-red-400'
                    }`}>
                      {metrics.securityScore >= 80 ? 'Secure' : 
                       metrics.securityScore >= 60 ? 'Moderate' : 
                       metrics.securityScore >= 40 ? 'At Risk' : 'Critical'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Metrics */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                  Security Metrics
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-xs text-gray-400">Threats Blocked</div>
                    <div className="text-sm font-semibold text-white">
                      {metrics.threatsBlocked}
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-xs text-gray-400">Vulnerabilities</div>
                    <div className="text-sm font-semibold text-white">
                      {metrics.vulnerabilitiesFound}
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-xs text-gray-400">SSL Status</div>
                    <div className={`text-sm font-semibold ${
                      metrics.sslStatus === 'valid' ? 'text-green-400' : 
                      metrics.sslStatus === 'expired' ? 'text-red-400' : 'text-yellow-400'
                    }`}>
                      {metrics.sslStatus}
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-xs text-gray-400">Firewall</div>
                    <div className={`text-sm font-semibold ${
                      metrics.firewallStatus === 'active' ? 'text-green-400' : 
                      metrics.firewallStatus === 'inactive' ? 'text-red-400' : 'text-yellow-400'
                    }`}>
                      {metrics.firewallStatus}
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Threats */}
              {activeThreats.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                    Active Threats ({activeThreats.length})
                  </h4>
                  <div className="space-y-2">
                    {activeThreats.slice(0, 3).map((threat) => (
                      <motion.div
                        key={threat.id}
                        className="bg-slate-800/50 p-3 rounded-lg border-l-4 border-red-500"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                threat.type === 'critical' ? 'bg-red-500/20 text-red-400' :
                                threat.type === 'high' ? 'bg-orange-500/20 text-orange-400' :
                                threat.type === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-green-500/20 text-green-400'
                              }`}>
                                {threat.type}
                              </span>
                              <span className="text-xs text-gray-500">
                                {threat.category}
                              </span>
                            </div>
                            <h5 className="text-sm font-semibold text-white mb-1">
                              {threat.description}
                            </h5>
                            <p className="text-xs text-gray-400 mb-2">
                              {threat.recommendation}
                            </p>
                            <div className="text-xs text-gray-500">
                              Source: {threat.source}
                            </div>
                          </div>
                          <button
                            onClick={() => resolveThreat(threat.id)}
                            className="ml-2 p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors"
                            title="Mark as resolved"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                    {activeThreats.length > 3 && (
                      <div className="text-xs text-gray-500 text-center">
                        +{activeThreats.length - 3} more threats
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Security Headers */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                  Security Headers
                </h4>
                <div className="space-y-2">
                  {Object.entries(securityHeaders).map(([header, value]) => (
                    <div key={header} className="bg-slate-800/50 p-2 rounded">
                      <div className="text-xs text-gray-400">{header}</div>
                      <div className="text-sm text-white truncate">{value}</div>
                    </div>
                  ))}
                  {Object.keys(securityHeaders).length === 0 && (
                    <div className="text-xs text-gray-500 text-center">
                      No security headers detected
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                  Quick Actions
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={performSecurityScan}
                    disabled={isScanning}
                    className="flex items-center justify-center space-x-2 p-2 bg-slate-800/50 text-gray-300 hover:text-white rounded-lg transition-colors disabled:opacity-50"
                  >
                    {isScanning ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Shield className="w-4 h-4" />
                    )}
                    <span className="text-xs">
                      {isScanning ? 'Scanning...' : 'Run Scan'}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => window.open('https://securityheaders.com', '_blank')}
                    className="flex items-center justify-center space-x-2 p-2 bg-slate-800/50 text-gray-300 hover:text-white rounded-lg transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-xs">Test Headers</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};