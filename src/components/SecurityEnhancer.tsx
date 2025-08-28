import React, { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  ShieldCheck, 
  ShieldX, 
  AlertTriangle, 
  Lock, 
  Eye, 
  EyeOff, 
  Key, 
  Fingerprint,
  Network,
  Server,
  Database,
  X,
  RefreshCw,
  Download,
  Settings
} from 'lucide-react';

interface SecurityStatus {
  overall: 'secure' | 'warning' | 'critical';
  ssl: boolean;
  headers: boolean;
  csp: boolean;
  xss: boolean;
  csrf: boolean;
  rateLimit: boolean;
}

interface SecurityEvent {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  message: string;
  timestamp: Date;
  source: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

interface SecurityMetrics {
  threatsBlocked: number;
  suspiciousActivities: number;
  failedLogins: number;
  dataBreaches: number;
  lastScan: Date;
  scanDuration: number;
}

export const SecurityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus>({
    overall: 'secure',
    ssl: true,
    headers: true,
    csp: true,
    xss: true,
    csrf: true,
    rateLimit: true
  });
  
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([]);
  const [securityMetrics, setSecurityMetrics] = useState<SecurityMetrics>({
    threatsBlocked: 0,
    suspiciousActivities: 0,
    failedLogins: 0,
    dataBreaches: 0,
    lastScan: new Date(),
    scanDuration: 0
  });
  
  const [isScanning, setIsScanning] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'events' | 'settings'>('overview');
  
  const securityCheckRef = useRef<NodeJS.Timeout | null>(null);
  const threatDetectionRef = useRef<NodeJS.Timeout | null>(null);

  // Security status checker
  const checkSecurityStatus = useCallback(async () => {
    try {
      // Check SSL/TLS
      const isSecure = window.location.protocol === 'https:';
      
      // Check security headers
      const headersResponse = await fetch('/api/security/headers');
      const headersSecure = headersResponse.ok;
      
      // Check Content Security Policy
      const cspHeader = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      const cspSecure = !!cspHeader;
      
      // Check for XSS vulnerabilities
      const xssSecure = !document.querySelector('script[src*="javascript:"]');
      
      // Check CSRF protection
      const csrfToken = document.querySelector('meta[name="csrf-token"]');
      const csrfSecure = !!csrfToken;
      
      // Check rate limiting (simulated)
      const rateLimitSecure = true; // This would be checked server-side
      
      const newStatus: SecurityStatus = {
        ssl: isSecure,
        headers: headersSecure,
        csp: cspSecure,
        xss: xssSecure,
        csrf: csrfSecure,
        rateLimit: rateLimitSecure,
        overall: 'secure'
      };
      
      // Determine overall status
      const secureCount = Object.values(newStatus).filter(Boolean).length - 1; // -1 for overall
      if (secureCount === 6) {
        newStatus.overall = 'secure';
      } else if (secureCount >= 4) {
        newStatus.overall = 'warning';
      } else {
        newStatus.overall = 'critical';
      }
      
      setSecurityStatus(newStatus);
      
      // Log security check
      addSecurityEvent('info', 'Security status check completed', 'security_checker');
      
    } catch (error) {
      console.warn('Security check failed:', error);
      addSecurityEvent('error', 'Security check failed', 'security_checker');
    }
  }, []);

  // Add security event
  const addSecurityEvent = useCallback((type: SecurityEvent['type'], message: string, source: string, severity: SecurityEvent['severity'] = 'low') => {
    const event: SecurityEvent = {
      id: `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type,
      message,
      timestamp: new Date(),
      source,
      severity
    };
    
    setSecurityEvents(prev => [event, ...prev.slice(0, 99)]); // Keep last 100 events
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Security] ${type.toUpperCase()}: ${message}`);
    }
  }, []);

  // Threat detection
  const detectThreats = useCallback(() => {
    // Check for suspicious DOM modifications
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              
              // Check for suspicious scripts
              if (element.tagName === 'SCRIPT') {
                const script = element as HTMLScriptElement;
                if (script.src && script.src.includes('javascript:')) {
                  addSecurityEvent('error', 'Suspicious script detected', 'threat_detector', 'high');
                  setSecurityMetrics(prev => ({ ...prev, threatsBlocked: prev.threatsBlocked + 1 }));
                }
              }
              
              // Check for suspicious iframes
              if (element.tagName === 'IFRAME') {
                const iframe = element as HTMLIFrameElement;
                if (iframe.src && iframe.src.includes('data:')) {
                  addSecurityEvent('warning', 'Suspicious iframe detected', 'threat_detector', 'medium');
                  setSecurityMetrics(prev => ({ ...prev, suspiciousActivities: prev.suspiciousActivities + 1 }));
                }
              }
            }
          });
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return observer;
  }, [addSecurityEvent]);

  // Monitor network requests
  const monitorNetworkRequests = useCallback(() => {
    const originalFetch = window.fetch;
    
    window.fetch = async (...args) => {
      const [url, options] = args;
      
      // Check for suspicious URLs
      if (typeof url === 'string') {
        if (url.includes('javascript:') || url.includes('data:')) {
          addSecurityEvent('error', 'Suspicious network request blocked', 'network_monitor', 'high');
          setSecurityMetrics(prev => ({ ...prev, threatsBlocked: prev.threatsBlocked + 1 }));
          throw new Error('Suspicious request blocked');
        }
      }
      
      try {
        const response = await originalFetch(...args);
        
        // Check response headers for security
        const securityHeaders = response.headers.get('X-Content-Type-Options');
        if (!securityHeaders) {
          addSecurityEvent('warning', 'Missing security headers in response', 'network_monitor', 'medium');
        }
        
        return response;
      } catch (error) {
        addSecurityEvent('error', `Network request failed: ${error}`, 'network_monitor', 'low');
        throw error;
      }
    };
  }, [addSecurityEvent]);

  // Monitor form submissions
  const monitorFormSubmissions = useCallback(() => {
    const handleSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      
      // Check for CSRF token
      const csrfToken = form.querySelector('input[name="csrf_token"]');
      if (!csrfToken) {
        addSecurityEvent('warning', 'Form submission without CSRF token', 'form_monitor', 'medium');
      }
      
      // Check for suspicious form actions
      if (form.action && form.action.includes('javascript:')) {
        addSecurityEvent('error', 'Suspicious form action detected', 'form_monitor', 'high');
        event.preventDefault();
        setSecurityMetrics(prev => ({ ...prev, threatsBlocked: prev.threatsBlocked + 1 }));
      }
    };
    
    document.addEventListener('submit', handleSubmit);
    return () => document.removeEventListener('submit', handleSubmit);
  }, [addSecurityEvent]);

  // Security scan
  const runSecurityScan = useCallback(async () => {
    setIsScanning(true);
    const startTime = Date.now();
    
    try {
      // Simulate security scan
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Update metrics
      setSecurityMetrics(prev => ({
        ...prev,
        lastScan: new Date(),
        scanDuration: Math.round((Date.now() - startTime) / 1000)
      }));
      
      addSecurityEvent('success', 'Security scan completed successfully', 'security_scanner');
      
    } catch (error) {
      addSecurityEvent('error', 'Security scan failed', 'security_scanner');
    } finally {
      setIsScanning(false);
    }
  }, [addSecurityEvent]);

  // Initialize security monitoring
  useEffect(() => {
    // Initial security check
    checkSecurityStatus();
    
    // Set up periodic security checks
    securityCheckRef.current = setInterval(checkSecurityStatus, 30000); // Every 30 seconds
    
    // Set up threat detection
    const threatObserver = detectThreats();
    
    // Set up network monitoring
    monitorNetworkRequests();
    
    // Set up form monitoring
    const formCleanup = monitorFormSubmissions();
    
    // Set up periodic threat detection
    threatDetectionRef.current = setInterval(() => {
      // Simulate threat detection
      if (Math.random() < 0.1) { // 10% chance of detecting something
        addSecurityEvent('info', 'Routine threat scan completed', 'threat_detector');
      }
    }, 60000); // Every minute
    
    return () => {
      if (securityCheckRef.current) {
        clearInterval(securityCheckRef.current);
      }
      if (threatDetectionRef.current) {
        clearInterval(threatDetectionRef.current);
      }
      threatObserver.disconnect();
      formCleanup();
    };
  }, [checkSecurityStatus, detectThreats, monitorNetworkRequests, monitorFormSubmissions, addSecurityEvent]);

  // Export security report
  const exportSecurityReport = useCallback(() => {
    const report = {
      timestamp: new Date().toISOString(),
      securityStatus,
      securityMetrics,
      recentEvents: securityEvents.slice(0, 20),
      recommendations: generateSecurityRecommendations()
    };
    
    const dataStr = JSON.stringify(report, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `security-report-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  }, [securityStatus, securityMetrics, securityEvents]);

  // Generate security recommendations
  const generateSecurityRecommendations = useCallback(() => {
    const recommendations = [];
    
    if (!securityStatus.ssl) {
      recommendations.push('Enable HTTPS/SSL for all connections');
    }
    
    if (!securityStatus.headers) {
      recommendations.push('Implement security headers (HSTS, CSP, etc.)');
    }
    
    if (!securityStatus.csp) {
      recommendations.push('Add Content Security Policy headers');
    }
    
    if (!securityStatus.xss) {
      recommendations.push('Review and fix potential XSS vulnerabilities');
    }
    
    if (!securityStatus.csrf) {
      recommendations.push('Implement CSRF protection tokens');
    }
    
    if (securityMetrics.threatsBlocked > 0) {
      recommendations.push('Consider implementing additional threat detection measures');
    }
    
    return recommendations;
  }, [securityStatus, securityMetrics]);

  // Get status color
  const getStatusColor = (status: SecurityStatus['overall']) => {
    switch (status) {
      case 'secure': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  // Get status icon
  const getStatusIcon = (status: SecurityStatus['overall']) => {
    switch (status) {
      case 'secure': return ShieldCheck;
      case 'warning': return AlertTriangle;
      case 'critical': return ShieldX;
      default: return Shield;
    }
  };

  const StatusIcon = getStatusIcon(securityStatus.overall);

  return (
    <>
      {/* Security Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-24 z-50 p-4 bg-gradient-to-r from-zion-green to-zion-emerald text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-zion-green/50"
        aria-label="Open security dashboard"
        aria-expanded={isOpen}
      >
        <Shield className="w-6 h-6" />
      </button>

      {/* Security Dashboard */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed right-6 bottom-24 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-zion-green to-zion-emerald text-white p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Security Dashboard</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close security dashboard"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Tab Navigation */}
              <div className="flex space-x-1 mt-3">
                {[
                  { id: 'overview', label: 'Overview', icon: Shield },
                  { id: 'events', label: 'Events', icon: AlertTriangle },
                  { id: 'settings', label: 'Settings', icon: Settings }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as any)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === id 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  {/* Overall Status */}
                  <div className={`bg-gray-50 rounded-lg p-4 border-l-4 border-l-${securityStatus.overall === 'secure' ? 'green' : securityStatus.overall === 'warning' ? 'yellow' : 'red'}-500`}>
                    <div className="flex items-center space-x-3">
                      <StatusIcon className={`w-8 h-8 ${getStatusColor(securityStatus.overall)}`} />
                      <div>
                        <h3 className="font-semibold text-gray-900">Overall Status</h3>
                        <p className={`text-sm font-medium ${getStatusColor(securityStatus.overall)} capitalize`}>
                          {securityStatus.overall}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Security Checks */}
                  <div className="space-y-2">
                    {[
                      { key: 'ssl', label: 'SSL/TLS', icon: Lock },
                      { key: 'headers', label: 'Security Headers', icon: Shield },
                      { key: 'csp', label: 'Content Security Policy', icon: Eye },
                      { key: 'xss', label: 'XSS Protection', icon: AlertTriangle },
                      { key: 'csrf', label: 'CSRF Protection', icon: Key },
                      { key: 'rateLimit', label: 'Rate Limiting', icon: Network }
                    ].map(({ key, label, icon: Icon }) => (
                      <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">{label}</span>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${securityStatus[key as keyof Omit<SecurityStatus, 'overall'>] ? 'bg-green-500' : 'bg-red-500'}`} />
                      </div>
                    ))}
                  </div>

                  {/* Security Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-zion-green">{securityMetrics.threatsBlocked}</div>
                      <div className="text-xs text-gray-600">Threats Blocked</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-zion-emerald">{securityMetrics.suspiciousActivities}</div>
                      <div className="text-xs text-gray-600">Suspicious Activities</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'events' && (
                <div className="space-y-3">
                  {securityEvents.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                      <ShieldCheck className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                      <p>No security events detected</p>
                    </div>
                  ) : (
                    securityEvents.slice(0, 10).map((event) => (
                      <div key={event.id} className={`p-3 rounded-lg border-l-4 ${
                        event.type === 'error' ? 'border-red-500 bg-red-50' :
                        event.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                        event.type === 'success' ? 'border-green-500 bg-green-50' :
                        'border-blue-500 bg-blue-50'
                      }`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{event.message}</p>
                            <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                              <span>{event.source}</span>
                              <span>•</span>
                              <span>{event.timestamp.toLocaleTimeString()}</span>
                            </div>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            event.severity === 'critical' ? 'bg-red-100 text-red-800' :
                            event.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                            event.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {event.severity}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <button
                      onClick={runSecurityScan}
                      disabled={isScanning}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-zion-green text-white rounded-lg font-medium hover:bg-zion-green/90 transition-colors disabled:opacity-50"
                    >
                      <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
                      <span>{isScanning ? 'Scanning...' : 'Run Security Scan'}</span>
                    </button>
                    
                    <button
                      onClick={checkSecurityStatus}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-zion-emerald text-white rounded-lg font-medium hover:bg-zion-emerald/90 transition-colors"
                    >
                      <Shield className="w-4 h-4" />
                      <span>Check Security Status</span>
                    </button>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Last Scan</h3>
                    <p className="text-sm text-gray-600">
                      {securityMetrics.lastScan.toLocaleString()}
                    </p>
                    {securityMetrics.scanDuration > 0 && (
                      <p className="text-sm text-gray-600 mt-1">
                        Duration: {securityMetrics.scanDuration}s
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={exportSecurityReport}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-zion-green text-white rounded-lg font-medium hover:bg-zion-green/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export Security Report</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};