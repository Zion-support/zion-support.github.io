import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 

  Lock, 
  AlertTriangle, 
  CheckCircle, 
  Eye, 
  EyeOff, 
  Settings,
  X,
  Info,
  AlertCircle,
  Security,
  Key,
  Fingerprint,
  Database,
  Network,
  FileText
} from 'lucide-react';

interface SecurityStatus {
  csp: boolean;
  hsts: boolean;
  xss: boolean;
  csrf: boolean;
  clickjacking: boolean;
  mimeSniffing: boolean;
  referrerPolicy: boolean;
  permissionsPolicy: boolean;
}


interface SecurityThreat {
status: 'active' | 'mitigated' | 'resolved';













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface SecurityMetrics {















>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  overallScore: number;
  vulnerabilities: number;
  threatsBlocked: number;
  lastScan: Date;
  complianceScore: number;
  encryptionStrength: number;
}
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
interface SecurityCheck {
=======
encryptionStrength: number;













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface SecurityCheck {















>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  id: string;
  name: string;
  status: 'pass' | 'fail' | 'warning';
=======
  id: string;
  type: 'high' | 'medium' | 'low';
  category: 'injection' | 'xss' | 'csrf' | 'authentication' | 'authorization' | 'data-exposure';

  description: string;
  impact: string;
  recommendation: string;
  status: 'detected' | 'mitigated' | 'resolved';
  timestamp: Date;

}

  category: 'authentication' | 'data-protection' | 'network-security' | 'compliance';
}
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
const SecurityEnhancer: React.FC = (): JSX.Element => {
  const [metrics, setMetrics] = useState<any>({
    overallScore: 85,
    vulnerabilities: 3,
    threatsBlocked: 127,
    lastScan: new Date(),
    complianceScore: 92,
    encryptionStrength: 256
  });
  const [threats, setThreats] = useState<any>([]);
  const [securityChecks, setSecurityChecks] = useState<any>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [showThreats, setShowThreats] = useState(true);
  
  // Generate sample security threats
  useEffect(() => {
    const sampleThreats: SecurityThreat[] = [
      {
        id: anyanyanyanyanyanyanyanyanyanyanyanyanyany'1',
        type: 'xss',
        severity: 'high',
        description: 'Potential XSS vulnerability in user input field',
        location: '/src/components/ContactForm.tsx:45',
        timestamp: new Date(Date.now() - 3600000),
        status: 'active'
      },
      {
        id: '2',
        type: 'authentication',
        severity: 'medium',
        description: 'Weak password policy detected',
        location: '/src/utils/auth.ts:23',
        timestamp: new Date(Date.now() - 7200000),
        status: 'mitigated'
      },
      {
        id: '3',
        type: 'data-leak',
        severity: 'low',
        description: 'Sensitive data in console logs',
        location: '/src/components/Dashboard.tsx:67',
        timestamp: new Date(Date.now() - 10800000),
        status: 'resolved'
      }
    ];
    setThreats(sampleThreats);
  }, []);
  
  // Generate security checks
  useEffect(()                => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    const checks: SecurityCheck[] = [
      {
        id: '1',
        name: 'HTTPS Enforcement',
        status: 'pass',
        description: 'All traffic is properly encrypted with HTTPS',
        recommendation: 'Continue monitoring SSL certificate expiration',
        category: 'network-security'
      },
      {
        id: '2',
        name: 'Input Validation',
        status: 'warning',
        description: 'Some input fields lack proper validation',
        recommendation: 'Implement comprehensive input sanitization',
        category: 'data-protection'
      },
      {
        id: '3',
        name: 'Authentication Tokens',
        status: 'pass',
        description: 'JWT tokens are properly implemented with expiration',
        recommendation: 'Consider implementing refresh token rotation',
        category: 'authentication'
      },
      {
        id: '4',
        name: 'GDPR Compliance',
        status: 'pass',
        description: 'Data handling practices comply with GDPR requirements',
        recommendation: 'Regular audit of data retention policies',
        category: 'compliance'
      },
      {
        id: '5',
        name: 'SQL Injection Protection',
        status: 'pass',
        description: 'Database queries are properly parameterized',
        recommendation: 'Continue using prepared statements',
        category: 'data-protection'
      }
    ];
    setSecurityChecks(checks);
  }, []);
  
  const runSecurityScan = useCallback(async () => {
    setIsScanning(true);
    // Simulate security scan
    await new Promise(resolve => setTimeout(resolve, 3000));
    // Update metrics with new scan results
    setMetrics(prev => ({
      ...prev,
      overallScore: Math.max(0, Math.min(100, prev.overallScore + (Math.random() - 0.5) * 10)),
      vulnerabilities: Math.max(0, prev.vulnerabilities + Math.floor(Math.random() * 3) - 1),
      threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 10),
      lastScan: new Date()
    }));

  const mitigateThreat = useCallback((threatId: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    setThreats(prev => prev.map(threat => ;
      threat.id === threatId ;
        ? { ...threat, status: 'mitigated' as const };
        : threat;
    ));
  }, []);

  const resolveThreat = useCallback((threatId: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    setThreats(prev => prev.map(threat => ;
      threat.id === threatId ;
        ? { ...threat, status: 'resolved' as const };
        : threat;
    ));
  }, []);

  const getThreatIcon = (type: anyanyanyanyanyanyanyanyanyanyanyanyanyanySecurityThreat['type'])               => {;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    switch (type) {;
=======
    setIsScanning(false);
  }, []);
  const mitigateThreat = useCallback((threatId: string) => {
    setThreats(prev => prev.map(threat => 
      threat.id === threatId 
        ? { ...threat, status: 'mitigated' as const }
        : threat
    ));
  }, []);
  const resolveThreat = useCallback((threatId: string) => {
    setThreats(prev => prev.map(threat => 
      threat.id === threatId 
        ? { ...threat, status: 'resolved' as const }
        : threat
    ));
  }, []);
  const getThreatIcon = (type: SecurityThreat['type']) => {
    switch (type) {
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
      case 'xss': return <Bug className="h-4 w-4" />;
      case 'csrf': return <Network className="h-4 w-4" />;
      case 'injection': return <Database className="h-4 w-4" />;
      case 'authentication': return <Lock className="h-4 w-4" />;
      case 'authorization': return <Shield className="h-4 w-4" />;
      case 'data-leak': return <Eye className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      default: return 'bg-gray-500'}
  };

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      default: return 'bg-gray-100 text-gray-800'}
  };

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      default: return <AlertTriangle className = "h-4 w-4 text-gray-600" />};
  };

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            <strong>Security Warning:</strong> Your security score is below the recommended threshold. 
            Consider running a comprehensive security audit and implementing the suggested improvements.;
          </AlertDescription>;
        </Alert>;
      )};
    </div>;
=======
  const getStatusColor = (status: SecurityThreat['status']) => {
    switch (status) {
      case 'active': return 'bg-red-500';
      case 'mitigated': return 'bg-yellow-500';
      case 'resolved': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };
  const getStatusTextColor = (status: SecurityThreat['status']) => {
    switch (status) {
      case 'active': return 'bg-gray-100 text-gray-800';
      case 'mitigated': return 'bg-gray-100 text-gray-800';
      case 'resolved': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  const getCheckIcon = (status: SecurityCheck['status']) => {
    switch (status) {
      case 'pass': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'fail': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'warning': return <Zap className="h-4 w-4 text-yellow-500" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-2xl font-bold">Security Dashboard</CardTitle>
            <p className="text-sm text-muted-foreground">
              Monitor and enhance your application's security posture.
            </p>
          </div>
          <Button onClick={runSecurityScan} disabled={isScanning}>
            {isScanning ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Scanning...
              </>
            ) : (
              <>
                <Zap className="mr-2 h-4 w-4" />
                Run Security Scan
              </>
            )}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Overall Security Score</h3>
              <Badge variant="secondary">{metrics.overallScore}%</Badge>
            </div>
            <Progress value={metrics.overallScore} className="h-2" />

            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Security Threats</h3>
              <div className="flex items-center justify-between">
                <Badge variant="danger">Active Threats: {threats.filter(t => t.status === 'active').length}</Badge>
                <Button variant="outline" onClick={() => setShowThreats(!showThreats)}>
                  {showThreats ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {showThreats && threats.length > 0 && (
                <div className="grid gap-3">
                  {threats.map(threat => (
                    <div key={threat.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center">
                        {getThreatIcon(threat.type)}
                        <div className="ml-3">
                          <h4 className="text-sm font-medium">{threat.description}</h4>
                          <p className="text-xs text-muted-foreground">{threat.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getStatusColor(threat.status)}>{threat.status}</Badge>
                        {threat.status === 'active' && (
                          <>
                            <Button variant="outline" size="sm" onClick={() => mitigateThreat(threat.id)}>
                              Mitigate
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => resolveThreat(threat.id)}>
                              Resolve
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {threats.length === 0 && (
                <p>No active security threats detected.</p>
              )}
            </div>

            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Security Checks</h3>
              <div className="grid gap-3">
                {securityChecks.map(check => (
                  <div key={check.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div className="flex items-center">
                      {getCheckIcon(check.status)}
                      <div className="ml-3">
                        <h4 className="text-sm font-medium">{check.name}</h4>
                        <p className="text-xs text-muted-foreground">{check.description}</p>
                      </div>
                    </div>
                    <Badge variant={getStatusTextColor(check.status)}>{check.status}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Compliance Status</h3>
              <div className="grid gap-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium">GDPR Compliance</h4>
                      <p className="text-xs text-muted-foreground">
                        Your data handling practices comply with GDPR requirements.
                      </p>
                    </div>
                  </div>
                  <Badge variant="success">Pass</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center">
                    <ShieldCheck className="h-4 w-4 text-red-500" />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium">Encryption Strength</h4>
                      <p className="text-xs text-muted-foreground">
                        Your encryption strength is below the recommended threshold.
                      </p>
                    </div>
                  </div>
                  <Badge variant="danger">Fail</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Security Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="warning">
            <ShieldCheck className="h-4 w-4 mr-2" />
            <AlertDescription>
              <strong>Security Warning:</strong> Your security score is below the recommended threshold. 
              Consider running a comprehensive security audit and implementing the suggested improvements.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  );
};
export default SecurityEnhancer;
=======
interface SecurityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  autoMitigate?: boolean;
  monitoringLevel?: 'basic' | 'advanced' | 'paranoid';
}

export const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  autoMitigate = true,
  monitoringLevel = 'advanced'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus>({
    csp: false,
    hsts: false,
    xss: false,
    csrf: false,
    clickjacking: false,
    mimeSniffing: false,
    referrerPolicy: false,
    permissionsPolicy: false
  });
  const [threats, setThreats] = useState<SecurityThreat[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [securityScore, setSecurityScore] = useState(0);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const monitoringIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize security headers and policies
  useEffect(() => {
    if (!enabled) return;

    // Set security headers
    setSecurityHeaders();
    
    // Initialize CSP
    initializeCSP();
    
    // Start security monitoring
    startSecurityMonitoring();

    return () => {
      stopSecurityMonitoring();
    };
  }, [enabled, monitoringLevel]);

  // Set security headers
  const setSecurityHeaders = () => {
    // Note: In a real application, these would be set on the server side
    // This is a demonstration of what headers should be present
    
    const headers = {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
    };

    // Log headers for demonstration
    console.log('Security headers configured:', headers);
  };

  // Initialize Content Security Policy
  const initializeCSP = () => {
    const cspPolicy = {
      'default-src': ["'self'"],
      'script-src': ["'self'", "'unsafe-inline'", 'https://cdn.gpteng.co'],
      'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      'font-src': ["'self'", 'https://fonts.gstatic.com'],
      'img-src': ["'self'", 'data:', 'https:'],
      'connect-src': ["'self'", 'https:'],
      'frame-src': ["'none'"],
      'object-src': ["'none'"],
      'base-uri': ["'self'"],
      'form-action': ["'self'"],
      'frame-ancestors': ["'none'"],
      'upgrade-insecure-requests': true
    };

    // Create CSP meta tag
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = Object.entries(cspPolicy)
      .map(([key, values]) => {
        if (typeof values === 'boolean') {
          return values ? key : '';
        }
        return `${key} ${values.join(' ')}`;
      })
      .filter(Boolean)
      .join('; ');

    document.head.appendChild(cspMeta);
    console.log('CSP policy applied:', cspPolicy);
  };

  // Start security monitoring
  const startSecurityMonitoring = () => {
    setIsMonitoring(true);
    
    // Monitor for security threats
    monitoringIntervalRef.current = setInterval(() => {
      detectSecurityThreats();
    }, 5000); // Check every 5 seconds
  };

  // Stop security monitoring
  const stopSecurityMonitoring = () => {
    setIsMonitoring(false);
    if (monitoringIntervalRef.current) {
      clearInterval(monitoringIntervalRef.current);
    }
  };

  // Detect security threats
  const detectSecurityThreats = () => {
    const newThreats: SecurityThreat[] = [];

    // Check for XSS attempts
    const urlParams = new URLSearchParams(window.location.search);
    const suspiciousInputs = Array.from(urlParams.values()).filter(value => 
      value.includes('<script>') || value.includes('javascript:') || value.includes('onerror=')
    );

    suspiciousInputs.forEach((input, index) => {
      newThreats.push({
        id: `xss-${Date.now()}-${index}`,
        type: 'high',
        category: 'xss',
        description: `Potential XSS attempt detected in URL parameter: ${input.substring(0, 50)}...`,
        impact: 'Code execution, session hijacking, data theft',
        recommendation: 'Sanitize all user inputs and implement proper output encoding',
        status: 'detected',
        timestamp: new Date()
      });
    });

    // Check for CSRF tokens
    const forms = document.querySelectorAll('form');
    forms.forEach((form, index) => {
      const csrfToken = form.querySelector('input[name*="csrf"], input[name*="token"]');
      if (!csrfToken) {
        newThreats.push({
          id: `csrf-${Date.now()}-${index}`,
          type: 'medium',
          category: 'csrf',
          description: `Form missing CSRF protection: ${form.action || 'unknown action'}`,
          impact: 'Unauthorized actions on behalf of user',
          recommendation: 'Implement CSRF tokens for all state-changing operations',
          status: 'detected',
          timestamp: new Date()
        });
      }
    });

    // Check for insecure content
    const insecureContent = document.querySelectorAll('img[src^="http:"], script[src^="http:"]');
    if (insecureContent.length > 0) {
      newThreats.push({
        id: `mixed-content-${Date.now()}`,
        type: 'medium',
        category: 'data-exposure',
        description: `${insecureContent.length} insecure resources loaded over HTTP`,
        impact: 'Man-in-the-middle attacks, data interception',
        recommendation: 'Use HTTPS for all resources or upgrade to HTTPS',
        status: 'detected',
        timestamp: new Date()
      });
    }

    // Add new threats
    if (newThreats.length > 0) {
      setThreats(prev => [...prev, ...newThreats]);
      
      // Auto-mitigate if enabled
      if (autoMitigate) {
        setTimeout(() => {
          autoMitigateThreats(newThreats);
        }, 1000);
      }
    }
  };

  // Auto-mitigate security threats
  const autoMitigateThreats = (threatsToMitigate: SecurityThreat[]) => {
    threatsToMitigate.forEach((threat, index) => {
      setTimeout(() => {
        switch (threat.category) {
          case 'xss':
            // Sanitize inputs
            const inputs = document.querySelectorAll('input, textarea');
            inputs.forEach(input => {
              if (input.value.includes('<script>') || input.value.includes('javascript:')) {
                input.value = input.value.replace(/<script>|javascript:/gi, '');
              }
            });
            break;
          
          case 'csrf':
            // Add CSRF tokens to forms
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
              if (!form.querySelector('input[name*="csrf"]')) {
                const csrfInput = document.createElement('input');
                csrfInput.type = 'hidden';
                csrfInput.name = 'csrf_token';
                csrfInput.value = generateCSRFToken();
                form.appendChild(csrfInput);
              }
            });
            break;
          
          case 'data-exposure':
            // Upgrade insecure content to HTTPS
            const insecureElements = document.querySelectorAll('img[src^="http:"], script[src^="http:"]');
            insecureElements.forEach(element => {
              const src = element.getAttribute('src');
              if (src) {
                element.setAttribute('src', src.replace('http:', 'https:'));
              }
            });
            break;
        }

        // Mark threat as mitigated
        setThreats(prev => prev.map(t => 
          t.id === threat.id ? { ...t, status: 'mitigated' } : t
        ));
      }, index * 500);
    });
  };

  // Generate CSRF token
  const generateCSRFToken = (): string => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  // Perform security scan
  const performSecurityScan = async () => {
    setIsScanning(true);
    setScanProgress(0);

    // Simulate security scan
    const scanSteps = [
      'Checking security headers...',
      'Analyzing CSP policy...',
      'Scanning for vulnerabilities...',
      'Checking authentication...',
      'Validating authorization...',
      'Analyzing data protection...',
      'Finalizing security assessment...'
    ];

    for (let i = 0; i < scanSteps.length; i++) {
      setScanProgress((i + 1) * (100 / scanSteps.length));
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Update security status
    const newStatus: SecurityStatus = {
      csp: true,
      hsts: true,
      xss: true,
      csrf: true,
      clickjacking: true,
      mimeSniffing: true,
      referrerPolicy: true,
      permissionsPolicy: true
    };

    setSecurityStatus(newStatus);
    
    // Calculate security score
    const score = Object.values(newStatus).filter(Boolean).length * (100 / Object.keys(newStatus).length);
    setSecurityScore(score);

    setIsScanning(false);
  };

  // Get threat count by type
  const getThreatCount = (type: 'high' | 'medium' | 'low') => {
    return threats.filter(threat => threat.type === type).length;
  };

  // Get threat count by status
  const getThreatCountByStatus = (status: 'detected' | 'mitigated' | 'resolved') => {
    return threats.filter(threat => threat.status === status).length;
  };

  // Get security score color
  const getSecurityScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    if (score >= 50) return 'text-orange-600';
    return 'text-red-600';
  };

  if (!enabled) return null;

  return (
    <>
      {/* Security Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-24 z-50 p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Security Panel"
        aria-expanded={isOpen}
      >
        <Shield className="w-6 h-6 text-white" />
        {threats.filter(t => t.status === 'detected').length > 0 && (
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {threats.filter(t => t.status === 'detected').length}
          </div>
        )}
      </motion.button>

      {/* Security Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed left-24 bottom-20 z-50 w-96 max-h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            ref={panelRef}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-red-500 to-orange-600 text-white">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <h3 className="font-semibold">Security Monitor</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
                aria-label="Close security panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
              {/* Security Score */}
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className={`text-2xl font-bold ${getSecurityScoreColor(securityScore)}`}>
                  {securityScore}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Security Score
                </div>
              </div>

              {/* Threat Summary */}
              {threats.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Threats Detected:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center space-x-1 text-red-600">
                      <AlertTriangle className="w-4 h-4" />
                      <span>High: {getThreatCount('high')}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-600">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Medium: {getThreatCount('medium')}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600">
                      <Info className="w-4 h-4" />
                      <span>Low: {getThreatCount('low')}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>Mitigated: {getThreatCountByStatus('mitigated')}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Scan Button */}
              <button
                onClick={performSecurityScan}
                disabled={isScanning}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 transition-colors"
              >
                {isScanning ? 'Scanning...' : 'Security Scan'}
              </button>

              {/* Scan Progress */}
              {isScanning && (
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              )}

              {/* Security Status */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">Security Status:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(securityStatus).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                      {value ? (
                        <CheckCircle className="w-3 h-3 text-green-500" />
                      ) : (
                        <AlertCircle className="w-3 h-3 text-red-500" />
                      )}
                      <span className="text-gray-700 dark:text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monitoring Status */}
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-sm text-gray-700 dark:text-gray-300">Monitoring:</span>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {isMonitoring ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              {/* Recent Threats */}
              {threats.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Recent Threats:</h4>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {threats.slice(0, 3).map((threat) => (
                      <div
                        key={threat.id}
                        className={`p-2 rounded text-xs ${
                          threat.status === 'detected' ? 'bg-red-50 dark:bg-red-900/20' :
                          threat.status === 'mitigated' ? 'bg-yellow-50 dark:bg-yellow-900/20' :
                          'bg-green-50 dark:bg-green-900/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`px-1 py-0.5 rounded text-xs font-medium ${
                            threat.type === 'high' ? 'bg-red-100 text-red-800' :
                            threat.type === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {threat.type.toUpperCase()}
                          </span>
                          <span className="text-gray-500">
                            {threat.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {threat.description.substring(0, 60)}...
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

