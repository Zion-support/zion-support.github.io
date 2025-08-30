import React, { useEffect, useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Progress } from './ui/progress';
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

const SecurityEnhancer: React.FC = (): JSX.Element => {
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    overallScore: 85,
    vulnerabilities: 3,
    threatsBlocked: 127,
    lastScan: new Date(),
    complianceScore: 92,
    encryptionStrength: 256
  });

  const [threats, setThreats] = useState<SecurityThreat[]>([]);
  const [securityChecks, setSecurityChecks] = useState<SecurityCheck[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Simulate security scan
  const runSecurityScan = useCallback(async () => {
    setIsScanning(true);
    
    // Simulate scan delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate mock threats
    const mockThreats: SecurityThreat[] = [
      {
        id: '1',
        type: 'xss',
        severity: 'medium',
        description: 'Potential XSS vulnerability in user input field',
        location: '/components/UserInput.tsx:45',
        timestamp: new Date(),
        status: 'active'
      },
      {
        id: '2',
        type: 'authentication',
        severity: 'high',
        description: 'Weak password policy detected',
        location: '/utils/auth.ts:23',
        timestamp: new Date(),
        status: 'active'
      }
    ];

    // Generate mock security checks
    const mockChecks: SecurityCheck[] = [
      {
        id: '1',
        name: 'HTTPS Enforcement',
        status: 'pass',
        description: 'All connections use HTTPS',
        recommendation: 'Continue enforcing HTTPS',
        category: 'network-security'
      },
      {
        id: '2',
        name: 'Input Validation',
        status: 'warning',
        description: 'Some input fields lack proper validation',
        recommendation: 'Implement comprehensive input validation',
        category: 'data-protection'
      },
      {
        id: '3',
        name: 'Authentication Strength',
        status: 'fail',
        description: 'Password policy too weak',
        recommendation: 'Implement stronger password requirements',
        category: 'authentication'
      }
    ];

    setThreats(mockThreats);
    setSecurityChecks(mockChecks);
    
    // Update metrics
    setMetrics(prev => ({
      ...prev,
      vulnerabilities: mockThreats.length,
      lastScan: new Date(),
      overallScore: Math.max(0, prev.overallScore - mockThreats.length * 5)
    }));
    
    setIsScanning(false);
  }, []);

  // Auto-run scan on component mount
  useEffect(() => {
    runSecurityScan();
  }, [runSecurityScan]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return 'bg-green-500';
      case 'fail': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'authentication': return <Lock className="w-4 h-4" />;
      case 'data-protection': return <Shield className="w-4 h-4" />;
      case 'network-security': return <Network className="w-4 h-4" />;
      case 'compliance': return <CheckCircle className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Security Enhancement</h2>
            <p className="text-gray-600">Monitor and improve your application security</p>
          </div>
        </div>
        <Button 
          onClick={runSecurityScan} 
          disabled={isScanning}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
        >
          {isScanning ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Scanning...
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 mr-2" />
              Run Scan
            </>
          )}
        </Button>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Overall Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.overallScore}%</div>
            <Progress value={metrics.overallScore} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Vulnerabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{metrics.vulnerabilities}</div>
            <p className="text-xs text-gray-500">Active threats</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Threats Blocked</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{metrics.threatsBlocked}</div>
            <p className="text-xs text-gray-500">Total blocked</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.complianceScore}%</div>
            <Progress value={metrics.complianceScore} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Security Threats */}
      {threats.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Security Threats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {threats.map((threat) => (
                <Alert key={threat.id} className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={getSeverityColor(threat.severity)}>
                            {threat.severity.toUpperCase()}
                          </Badge>
                          <span className="font-medium">{threat.type.toUpperCase()}</span>
                        </div>
                        <p className="text-sm text-red-800">{threat.description}</p>
                        <p className="text-xs text-red-600 mt-1">Location: {threat.location}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Mitigate
                      </Button>
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Security Checks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
            Security Checks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityChecks.map((check) => (
              <div key={check.id} className="flex items-start gap-4 p-4 border rounded-lg">
                <div className={`w-3 h-3 rounded-full mt-2 ${getStatusColor(check.status)}`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(check.category)}
                    <h4 className="font-medium">{check.name}</h4>
                    <Badge variant={check.status === 'pass' ? 'default' : check.status === 'warning' ? 'secondary' : 'destructive'}>
                      {check.status.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{check.description}</p>
                  <p className="text-sm text-blue-600">
                    <strong>Recommendation:</strong> {check.recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              View Details
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              Export Report
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Bug className="w-4 h-4" />
              Report Issue
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { SecurityEnhancer };