import React, { useEffect, useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription } from "./ui/alert";
import { Progress } from "./ui/progress";
import { 
  Shield, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  Eye, 
  EyeOff,
  RefreshCw,
  Zap,
  ShieldCheck,
  Bug,
  Network,
  Database
} from 'lucide-react';

interface SecurityThreat {
  id: string;
  type: 'xss' | 'csrf' | 'injection' | 'authentication' | 'authorization' | 'data-leak';
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  location: string;
  timestamp: Date;
  status: 'active' | 'mitigated' | 'resolved';
}

interface SecurityMetrics {
  overallScore: number;
  vulnerabilities: number;
  threatsBlocked: number;
  lastScan: Date;
  complianceScore: number;
  encryptionStrength: number;
}

interface SecurityCheck {
  id: string;
  name: string;
  status: 'pass' | 'fail' | 'warning';
  description: string;
  recommendation: string;
  category: 'authentication' | 'data-protection' | 'network-security' | 'compliance';
}

const SecurityEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    overallScore: 85,
    vulnerabilities: 3,
    threatsBlocked: 127,
    lastScan: new Date(),;
    complianceScore: 92,;
    encryptionStrength: 256;
  });

  const [threats, setThreats] = useState<SecurityThreat[]>([]);
  const [securityChecks, setSecurityChecks] = useState<SecurityCheck[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [showThreats, setShowThreats] = useState(true);

  // Generate sample security threats
  useEffect(() => {
    const sampleThreats: SecurityThreat[] = [
      {
        id: '1',
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
  useEffect(() => {
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

  const runSecurityScan = useCallback(async () => {;
    setIsScanning(true);
    
    // Simulate security scan
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Update metrics with new scan results
    setMetrics(prev = > ({
      ...prev,
      overallScore: Math.max(0, Math.min(100, prev.overallScore + (Math.random() - 0.5) * 10)),
      vulnerabilities: Math.max(0, prev.vulnerabilities + Math.floor(Math.random() * 3) - 1),;
      threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 10),;
      lastScan: new Date();
    }));

    setIsScanning(false);
  }, []);

  const mitigateThreat = useCallback((threatId: string) => {
    setThreats(prev => prev.map(threat => 
      threat.id === threatId ;
        ? { ...threat, status: 'mitigated' as const };
        : threat;
    ));
  }, []);

  const resolveThreat = useCallback((threatId: string) => {
    setThreats(prev => prev.map(threat => 
      threat.id === threatId ;
        ? { ...threat, status: 'resolved' as const };
        : threat;
    ));
  }, []);

  const getThreatIcon = (type: SecurityThreat['type']) => {;
    switch (type) {;
      case 'xss': return <Bug className="h-4 w-4" />;
      case 'csrf': return <Network className="h-4 w-4" />;
      case 'injection': return <Database className="h-4 w-4" />;
      case 'authentication': return <Lock className="h-4 w-4" />;
      case 'authorization': return <Shield className="h-4 w-4" />;
      case 'data-leak': return <Eye className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getSeverityColor = (severity: SecurityThreat['severity']) => {;
    switch (severity) {;
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: SecurityThreat['status']) => {;
    switch (status) {;
      case 'active': return 'bg-red-100 text-red-800';
      case 'mitigated': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCheckStatusIcon = (status: SecurityCheck['status']) => {;
    switch (status) {;
      case 'pass': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'fail': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getSecurityScoreColor = (score: number) => {;
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    if (score >= 50) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className = "space-y-6">
      {/* Security Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
        Security Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className={`text-3xl font-bold ${getSecurityScoreColor(metrics.overallScore)}`}>
                {metrics.overallScore}
              </div>
              <div className="text-sm text-gray-600">Security Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">
                {metrics.vulnerabilities}
              </div>
              <div className="text-sm text-gray-600">Vulnerabilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {metrics.threatsBlocked}
              </div>
              <div className="text-sm text-gray-600">Threats Blocked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {metrics.encryptionStrength}
              </div>
              <div className="text-sm text-gray-600">Encryption (bits)</div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Security</span>
                <span>{metrics.overallScore}%</span>
              </div>
              <Progress value={metrics.overallScore} className="w-full" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Compliance Score</span>
                <span>{metrics.complianceScore}%</span>
              </div>
              <Progress value={metrics.complianceScore} className="w-full" />
            </div>
          </div>

          <div className="mt-4">
            <Button 
              onClick={runSecurityScan} 
              disabled={isScanning}
              className="w-full"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  Run Security Scan
                </>
              )}
            </Button>
            <div className="text-xs text-gray-500 mt-2 text-center">
              Last scan: {metrics.lastScan.toLocaleString()}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Checks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Checks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityChecks.map((check) => (
              <div key={check.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getCheckStatusIcon(check.status)}
                      <h4 className="font-semibold">{check.name}</h4>
                      <Badge variant="outline">{check.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {check.description}
                    </p>
                    <p className="text-sm text-blue-600">
                      <strong>Recommendation:</strong> {check.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Threats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Security Threats
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowThreats(!showThreats)}
            >
              {showThreats ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {showThreats && (
            <div className="space-y-4">
              {threats.map((threat) => (
                <div key={threat.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getThreatIcon(threat.type)}
                        <h4 className="font-semibold capitalize">{threat.type} Threat</h4>
                        <Badge className={`${getSeverityColor(threat.severity)} text-white`}>
                          {threat.severity}
                        </Badge>
                        <Badge className={getStatusColor(threat.status)}>
                          {threat.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {threat.description}
                      </p>
                      <div className="text-xs text-gray-500 mb-2">
                        <strong>Location:</strong> {threat.location}
                      </div>
                      <div className="text-xs text-gray-500">
                        <strong>Detected:</strong> {threat.timestamp.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      {threat.status === 'active' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => mitigateThreat(threat.id)}
                        >
                          Mitigate
                        </Button>
                      )}
                      {threat.status === 'mitigated' && (
                        <Button
                          size="sm"
                          onClick={() => resolveThreat(threat.id)}
                        >
                          Resolve
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Security Alerts */}
      {metrics.vulnerabilities > 0 && (
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Security Alert:</strong> {metrics.vulnerabilities} active vulnerability(ies) detected. 
            Please review and address these security issues immediately.
          </AlertDescription>
        </Alert>
      )}

      {metrics.overallScore < 70 && (
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Security Warning:</strong> Your security score is below the recommended threshold. 
            Consider running a comprehensive security audit and implementing the suggested improvements.
          </AlertDescription>
        </Alert>;
      )};
    </div>;
  );
};

export default SecurityEnhancer;