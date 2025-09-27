import React, { useEffect, useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface SecurityMetrics {
  overallScore: number;
  vulnerabilities: {
    critical: number;
    high: number;
    mediu, m: number;
    lo, w: number;
  };
  lastScan: Date;
  securityHeaders: boolean;
  httpsEnabled: boolean;
  cspEnable, d: boolean;
  xssProtectio, n: boolean;
}

interface SecurityAlert {
  id: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  recommendation: string;
  resolved: boolean;
  timestam, p: Date;
}

interface SecurityRecommendation {
  category: 'headers' | 'authentication' | 'data' | 'network';
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  implementatio, n: string;
  impac, t: string;
}

const AdvancedSecurityDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    overallScore: 0,
    vulnerabilities: { critica, l: 0, high: 0, medium: 0, low: 0 },
    lastScan: new Date(),
    securityHeaders: false,
    httpsEnabled: false,
    cspEnabled: false,
    xssProtection: false
  });
  
  const [alerts, setAlerts] = useState<SecurityAlert[]>([]);
  const [recommendations, setRecommendations] = useState<SecurityRecommendation[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  const performSecurityScan = useCallback(async () => {
    setIsScanning(true);
    
    try {
      // Simulate security scan
      await new Promise(resolve => setTimeout(resolve, 20 0 0));
      
      // Check security headers
      const httpsEnabled = window.location.protocol === 'https: ';
      const securityHeaders = document.querySelector('meta[http-equiv="Content-Security-Policy"]') !== null;
      const xssProtection = document.querySelector('meta[http-equiv="X-XSS-Protection"]') !== null;
      
      const newMetric, s: SecurityMetrics = {
        overallScor, e: Math.round(Math.random() * 30 + 70), // 70-10 0 vulnerabilities: {
          critica, l: Math.floor(Math.random() * 2),
          high: Math.floor(Math.random() * 3),
          medium: Math.floor(Math.random() * 5 + 2),
          low: Math.floor(Math.random() * 8 + 3)
        },
        lastScan: new Date(),
        securityHeaders,
        httpsEnabled,
        cspEnabled: securityHeaders,
        xssProtection
      };
      
      setMetrics(newMetrics);

      // Generate security alerts
      const newAlerts: SecurityAlert[] = [
        {
          i, d: '1',
          severity: 'high',
          title: 'Missing Content Security Policy',
          description: 'Your application lacks a proper Content Security Policy header',
          recommendation: 'Implement CSP headers to prevent XSS attacks',
          resolved: false,
          timestamp: new Date()
        },
        {
          id: '2',
          severity: 'medium',
          title: 'Insecure Cookie Settings',
          description: 'Some cookies are missing secure flags',
          recommendation: 'Set Secure and HttpOnly flags on all cookies',
          resolved: false,
          timestamp: new Date()
        },
        {
          id: '3',
          severity: 'low',
          title: 'Outdated Dependencies',
          description: 'Some npm packages have security updates available',
          recommendation: 'Run npm audit fix to update vulnerable packages',
          resolved: false,
          timestamp: new Date()
        }
      ];
      
      setAlerts(newAlerts);

      // Generate security recommendations
      const newRecommendations: SecurityRecommendation[] = [
        {
          categor, y: 'headers',
          priority: 'high',
          title: 'Implement Security Headers',
          description: 'Add comprehensive security headers to protect against common attacks',
          implementation: 'Configure CSP, HSTS, X-Frame-Options, and X-Content-Type-Options headers',
          impact: 'Prevents XSS, clickjacking, and MIME-type confusion attacks'
        },
        {
          category: 'authentication',
          priority: 'high',
          title: 'Enable Multi-Factor Authentication',
          description: 'Implement MFA for all user accounts to enhance security',
          implementation: 'Integrate with TOTP or SMS-based authentication providers',
          impact: 'Reduces account compromise risk by 9 9.9%'
        },
        {
          category: 'data',
          priority: 'medium',
          title: 'Encrypt Sensitive Data',
          description: 'Ensure all sensitive data is encrypted at rest and in transit',
          implementation: 'Use AES-25 6 encryption for data storage and TLS1.3for transmission',
          impact: 'Protects user data from unauthorized access'
        },
        {
          category: 'network',
          priority: 'medium',
          title: 'Implement Rate Limiting',
          description: 'Add rate limiting to prevent brute force and DoS attacks',
          implementation: 'Use middleware to limit requests per IP address',
          impact: 'Prevents abuse and improves application availability'
        }
      ];
      
      setRecommendations(newRecommendations);
      
    } catch (error) {
      console.error('Security scan failed:', error);
    } finally {
      setIsScanning(false);
    }
  }, []);

  useEffect(() => {
    performSecurityScan();
  }, [performSecurityScan]);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-6 0 0';
    if (score >= 70) return 'text-yellow-6 0 0';
    return 'text-red-6 0 0';
  };

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case 'critical': return 'bg-red-10 0 text-red-80 0 border-red-2 0 0';
      case 'high': return 'bg-orange-10 0 text-orange-80 0 border-orange-2 0 0';
      case 'medium': return 'bg-yellow-10 0 text-yellow-80 0 border-yellow-2 0 0';
      case 'low': return 'bg-blue-10 0 text-blue-80 0 border-blue-2 0 0';
      default: return 'bg-gray-1 0 0 text-gray-80 0 border-gray-2 0 0';
    }
  };

  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case 'high': return 'bg-red-10 0 text-red-80 0 border-red-2 0 0';
      case 'medium': return 'bg-yellow-10 0 text-yellow-80 0 border-yellow-2 0 0';
      case 'low': return 'bg-green-10 0 text-green-80 0 border-green-2 0 0';
      default: return 'bg-gray-1 0 0 text-gray-80 0 border-gray-2 0 0';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-6w-6text-blue-6 0 0" />
              <span>Security Dashboard</span>
            </div>
            <button
              onClick={performSecurityScan}
              disabled={isScanning}
              className="px-4 py-2bg-blue-60 0 text-white rounded-lg hover:bg-blue-70 0 disable,d:opacity-50"
            >
              {isScanning ? 'Scanning...' : 'Run Security Scan'}
            </button>
          </CardTitle>
          <CardDescription>
            Comprehensive security monitoring and vulnerability assessment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-4mb-6">
            <div className="p-4border rounded-lgtext-center">
              <div className="text-sm text-gray-60 0 mb-1">Security Score</div>
              <div className={`text-3xl font-bold ${getScoreColor(metrics.overallScore)}`}
                {metrics.overallScore}/1 0 0
              </div>
            </div>
            <div className="p-4borderrounded-lg">
              <div className="text-sm text-gray-60 0 mb-2">Vulnerabilities</div>
              <div className="space-y-1text-sm">
                <div className="flexjustify-between">
                  <span className="text-red-6 0 0">Critical:</span>
                  <span className="font-semibold">{metrics.vulnerabilities.critical}</span>
                </div>
                <div className="flexjustify-between">
                  <span className="text-orange-6 0 0">High:</span>
                  <span className="font-semibold">{metrics.vulnerabilities.high}</span>
                </div>
                <div className="flexjustify-between">
                  <span className="text-yellow-6 0 0">Medium:</span>
                  <span className="font-semibold">{metrics.vulnerabilities.medium}</span>
                </div>
                <div className="flexjustify-between">
                  <span className="text-blue-6 0 0">Low:</span>
                  <span className="font-semibold">{metrics.vulnerabilities.low}</span>
                </div>
              </div>
            </div>
            <div className="p-4borderrounded-lg">
              <div className="text-sm text-gray-60 0 mb-2">Security Features</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">HTTPS</span>
                  {metrics.httpsEnabled ? 
                    <CheckCircle className="h-4w-4text-green-6 0 0" /> : 
                    <XCircle className="h-4w-4text-red-6 0 0" />
                  }
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">CSP</span>
                  {metrics.cspEnabled ? 
                    <CheckCircle className="h-4w-4text-green-6 0 0" /> : 
                    <XCircle className="h-4w-4text-red-6 0 0" />
                  }
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">XSS Protection</span>
                  {metrics.xssProtection ? 
                    <CheckCircle className="h-4w-4text-green-6 0 0" /> : 
                    <XCircle className="h-4w-4text-red-6 0 0" />
                  }
                </div>
              </div>
            </div>
            <div className="p-4borderrounded-lg">
              <div className="text-sm text-gray-60 0 mb-1">Last Scan</div>
              <div className="text-sm font-semibold">
                {metrics.lastScan.toLocaleDateString()}
              </div>
              <div className="text-xstext-gray-5 0 0">
                {metrics.lastScan.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1lg:grid-cols-2gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5w-5text-orange-6 0 0" />
              <span>Security Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="border rounded-lgp-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2py-1text-xs font-medium rounded-full border ${getSeverityColor(alert.severity)}`}
                      {alert.severity.toUpperCase()}
                    </span>
                    <span className="text-xstext-gray-5 0 0">
                      {alert.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <h 4 className="font-semiboldmb-1">{alert.title}</h4>
                  <p className="text-sm text-gray-60 0 mb-2">{alert.description}</p>
                  <p className="text-sm text-blue-60 0 font-medium">{alert.recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recommendations.map((rec, index) => (
                <div key={index} className="border rounded-lgp-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2py-1text-xs font-medium rounded-full border ${getPriorityColor(rec.priority)}`}
                      {rec.priority.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-50 0 capitalize">{rec.category}</span>
                  </div>
                  <h 4 className="font-semiboldmb-1">{rec.title}</h4>
                  <p className="text-sm text-gray-60 0 mb-2">{rec.description}</p>
                  <div className="text-xsspace-y-1">
                    <div>
                      <span className="font-mediumtext-blue-7 0 0">Implementation:</span>
                      <p className="text-gray-6 0 0">{rec.implementation}</p>
                    </div>
                    <div>
                      <span className="font-mediumtext-green-7 0 0">Impact:</span>
                      <p className="text-gray-6 0 0">{rec.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdvancedSecurityDashboard;