import React, { useState, useEffect } from 'react';';
import {

} from 'framer-motion';';
import {

} from 'lucide-react';
interface SecurityCheck {
id: string;
name: string;
description: string;
status: 'pass' | 'fail' | 'warning' | 'info';
severity: 'low' | 'medium' | 'high' | 'critical';
category: 'headers' | 'content' | 'network' | 'authentication' | 'data';
recommendation?: string;
details?: string;
}

interface SecurityReport {
overallScore: number;
totalChecks: number;
passedChecks: number;
failedChecks: number;
warnings: number;
checks: SecurityCheck[];
lastUpdated: number;
}

const SecurityAuditPanel: React.FC = () => {
  const [report, setReport] = useState<SecurityReport | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const securityChecks: SecurityCheck[] = [,
    {
      id: 'https-check',
      name: 'HTTPS Enforcement',
      description: 'Verify that the site is served over HTTPS',
      status: 'pass',
      severity: 'high',
      category: 'headers',
      recommendation: 'Ensure all traffic is redirected to HTTPS'
    },
    {
      id: 'hsts-header',
      name: 'HSTS Header',
      description: 'Check for HTTP Strict Transport Security header',
      status: 'pass',
      severity: 'high',
      category: 'headers',
      recommendation: 'Implement HSTS header with appropriate max-age'
    },
    {
      id: 'csp-header',
      name: 'Content Security Policy',
      description: 'Verify Content Security Policy is implemented',
      status: 'warning',
      severity: 'medium',
      category: 'headers',
      recommendation: 'Implement comprehensive CSP to prevent XSS attacks',
      details: 'Current CSP may be too permissive'
    },
    {
      id: 'x-frame-options',
      name: 'X-Frame-Options',
      description: 'Check for clickjacking protection',
      status: 'pass',
      severity: 'medium',
      category: 'headers'
    },
    {
      id: 'x-content-type',
      name: 'X-Content-Type-Options',
      description: 'Verify MIME type sniffing protection',
      status: 'pass',
      severity: 'medium',
      category: 'headers'
    },
    {
      id: 'referrer-policy',
      name: 'Referrer Policy',
      description: 'Check referrer information leakage protection',
      status: 'pass',
      severity: 'low',
      category: 'headers'
    },
    {
      id: 'mixed-content',
      name: 'Mixed Content Check',
      description: 'Scan for HTTP resources on HTTPS pages',
      status: 'pass',
      severity: 'high',
      category: 'content'
    },
    {
      id: 'sensitive-data',
      name: 'Sensitive Data Exposure',
      description: 'Check for exposed sensitive information',
      status: 'pass',
      severity: 'critical',
      category: 'data'
    },
    {
      id: 'authentication',
      name: 'Authentication Security',
      description: 'Verify secure authentication practices',
      status: 'info',
      severity: 'medium',
      category: 'authentication',
      recommendation: 'Implement multi-factor authentication'
    },
    {
      id: 'session-security',
      name: 'Session Security',
      description: 'Check session management security',
      status: 'warning',
      severity: 'medium',
      category: 'authentication',
      recommendation: 'Implement secure session management'
    },
    {
      id: 'input-validation',
      name: 'Input Validation',
      description: 'Check for proper input validation',
      status: 'pass',
      severity: 'high',
      category: 'content'
    },
    {
      id: 'error-handling',
      name: 'Error Handling',
      description: 'Verify secure error handling',
      status: 'warning',
      severity: 'low',
      category: 'content',
      recommendation: 'Ensure errors don\'t leak sensitive information'
    }
=======
  const [selectedCategory, setSelectedCategory] = useState<string>('all');';
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');';

  const securityChecks: SecurityCheck[] = [,
    {
      id: 'https-check',';
      name: 'HTTPS Enforcement',';
      description: 'Verify that the site is served over HTTPS',';
      status: 'pass',';
      severity: 'high',';
      category: 'headers',';
      recommendation: 'Ensure all traffic is redirected to HTTPS',';
    },
    {
      id: 'hsts-header',';
      name: 'HSTS Header',';
      description: 'Check for HTTP Strict Transport Security header',';
      status: 'pass',';
      severity: 'high',';
      category: 'headers',';
      recommendation: 'Implement HSTS header with appropriate max-age',';
    },
    {
      id: 'csp-header',';
      name: 'Content Security Policy',';
      description: 'Verify Content Security Policy is implemented',';
      status: 'warning',';
      severity: 'medium',';
      category: 'headers',';
      recommendation: 'Implement comprehensive CSP to prevent XSS attacks',';
      details: 'Current CSP may be too permissive',';
    },
    {
      id: 'x-frame-options',';
      name: 'X-Frame-Options',';
      description: 'Check for clickjacking protection',';
      status: 'pass',';
      severity: 'medium',';
      category: 'headers',';
    },
    {
      id: 'x-content-type',';
      name: 'X-Content-Type-Options',';
      description: 'Verify MIME type sniffing protection',';
      status: 'pass',';
      severity: 'medium',';
      category: 'headers',';
    },
    {
      id: 'referrer-policy',';
      name: 'Referrer Policy',';
      description: 'Check referrer information leakage protection',';
      status: 'pass',';
      severity: 'low',';
      category: 'headers',';
    },
    {
      id: 'mixed-content',';
      name: 'Mixed Content Check',';
      description: 'Scan for HTTP resources on HTTPS pages',';
      status: 'pass',';
      severity: 'high',';
      category: 'content',';
    },
    {
      id: 'sensitive-data',';
      name: 'Sensitive Data Exposure',';
      description: 'Check for exposed sensitive information',';
      status: 'pass',';
      severity: 'critical',';
      category: 'data',';
    },
    {
      id: 'authentication',';
      name: 'Authentication Security',';
      description: 'Verify secure authentication practices',';
      status: 'info',';
      severity: 'medium',';
      category: 'authentication',';
      recommendation: 'Implement multi-factor authentication',';
    },
    {
      id: 'session-security',';
      name: 'Session Security',';
      description: 'Check session management security',';
      status: 'warning',';
      severity: 'medium',';
      category: 'authentication',';
      recommendation: 'Implement secure session management',';
    },
    {
      id: 'input-validation',';
      name: 'Input Validation',';
      description: 'Check for proper input validation',';
      status: 'pass',';
      severity: 'high',';
      category: 'content',';
    },
    {
      id: 'error-handling',';
      name: 'Error Handling',';
      description: 'Verify secure error handling',';
      status: 'warning',';
      severity: 'low',';
      category: 'content',';
      recommendation: 'Ensure errors don\'t leak sensitive information',';
    }
  ];

  const runSecurityAudit = async () => {
    setIsRunning(true);
    
    // Simulate audit process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const checks = securityChecks.map(check => {
      // Simulate some checks failing based on current state
      let status = check.status;
      if (check.id === 'csp-header' && Math.random() > 0.5) {;
        status = 'warning';
      } else if (check.id === 'session-security' && Math.random() > 0.3) {;
        status = 'warning';
      } else if (check.id === 'error-handling' && Math.random() > 0.4) {;
        status = 'warning';
=======
      if (check.id === 'csp-header' && Math.random() > 0.5) {';
        status = 'warning';';
      } else if (check.id === 'session-security' && Math.random() > 0.3) {';
        status = 'warning';';
      } else if (check.id === 'error-handling' && Math.random() > 0.4) {';
        status = 'warning';';
      }
      
      return { ...check, status };
    });

    const passedChecks = checks.filter(c => c.status === 'pass').length;';
    const failedChecks = checks.filter(c => c.status === 'fail').length;';
    const warnings = checks.filter(c => c.status === 'warning').length;';
    const overallScore = Math.round((passedChecks / checks.length) * 100);

    setReport({
      overallScore,
      totalChecks: checks.length,,
      passedChecks,
      failedChecks,
      warnings,
      checks,
      lastUpdated: Date.now(),
=======
      lastUpdated: Date.now()});
    
    setIsRunning(false);
  };

  const getStatusIcon = (status: string) => {
switch (status) {
case 'pass':
return <CheckCircle className="w-5 h-5 text-green-600" />;
case 'fail':
return <XCircle className="w-5 h-5 text-red-600" />;
case 'warning':
return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
default:
return <Eye className="w-5 h-5 text-blue-600" />;
}
=======
case 'pass':';
return <CheckCircle className="w-5 h-5 text-green-600" />;";
case 'fail':';
return <XCircle className="w-5 h-5 text-red-600" />;";
case 'warning':';
return <AlertTriangle className="w-5 h-5 text-yellow-600" />;";
default:
return <Eye className="w-5 h-5 text-blue-600" />;";
};
  };

  const getSeverityColor = (severity: string) => {
switch (severity) {
case 'critical':
return 'bg-red-100 text-red-800 border-red-200';
case 'high':
return 'bg-orange-100 text-orange-800 border-orange-200';
case 'medium':
return 'bg-yellow-100 text-yellow-800 border-yellow-200';
default:
return 'bg-blue-100 text-blue-800 border-blue-200';
=======
case 'critical':';
return 'bg-red-100 text-red-800 border-red-200';';
case 'high':';
return 'bg-orange-100 text-orange-800 border-orange-200';';
case 'medium':';
return 'bg-yellow-100 text-yellow-800 border-yellow-200';';
default:
return 'bg-blue-100 text-blue-800 border-blue-200';';
};
  };

  const getCategoryIcon = (category: string) => {
switch (category) {
case 'headers':
return <Globe className="w-4 h-4" />;
case 'authentication':
return <Lock className="w-4 h-4" />;
default:
return <Shield className="w-4 h-4" />;
}
=======
case 'headers':';
return <Globe className="w-4 h-4" />;";
case 'authentication':';
return <Lock className="w-4 h-4" />;";
default:
return <Shield className="w-4 h-4" />;";
};
  };

  const filteredChecks = report?.checks.filter(check => {
    const categoryMatch = selectedCategory === 'all' || check.category === selectedCategory;';
    const severityMatch = selectedSeverity === 'all' || check.severity === selectedSeverity;';
    return categoryMatch && severityMatch;
  }) || [];

  const categories = ['all', ...Array.from(new Set(securityChecks.map(c => c.category)))];
  const severities = ['all', 'critical', 'high', 'medium', 'low'];
=======
  const categories = ['all', ...Array.from(new Set(securityChecks.map(c => c.category)))];';
  const severities = ['all', 'critical', 'high', 'medium', 'low'];';

  useEffect(() => {
    // Run initial audit
    runSecurityAudit();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">";
      <div className="flex justify-between items-center mb-6">";
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Shield className="w-6 h-6/>
=======
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">";
            <Shield className="w-6 h-6" />";
            Security Audit Panel
          </h2>
          <p className="text-gray-600 mt-1">Comprehensive security assessment for your website</p>";
        </div>
        <button
          onClick={runSecurityAudit}
          disabled={isRunning}
          className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${`;
            isRunning
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-blue-600 text-white hover: bg-blue-700}`}`;
=======
              : 'bg-blue-600 text-white hover: bg-blue-700'
          }`}`;
        >
          {
isRunning ? (
<>
<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>";
Running Audit...
</>
) : (,
<>
<Shield className="w-4 h-4/>
=======
<Shield className="w-4 h-4" />";
Run Security Audit
</>
)
}
        </button>
      </div>

      {report && (
        <>
          {/* Security Score Overview */}
          <div className="grid grid-cols-1 md: grid-cols-4 gap-4 mb-6">"
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
              <div className="flex justify-between items-center">
=======
          <div className="grid grid-cols-1 md: grid-cols-4 gap-4 mb-6">";
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">";
              <div className="flex justify-between items-center">";
                <div>
                  <p className="text-blue-100 text-sm">Security Score</p>";
                  <p className="text-3xl font-bold">{report.overallScore}%</p>";
                </div>
                <Shield className="w-8 h-8 text-blue-200/>
=======
                <Shield className="w-8 h-8 text-blue-200" />";
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">";
              <div className="flex justify-between items-center">";
                <div>
                  <p className="text-green-600 text-sm">Passed</p>";
                  <p className="text-2xl font-bold text-green-700">{report.passedChecks}</p>";
                </div>
                <CheckCircle className="w-6 h-6 text-green-500/>
=======
                <CheckCircle className="w-6 h-6 text-green-500" />";
              </div>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4">";
              <div className="flex justify-between items-center">";
                <div>
                  <p className="text-yellow-600 text-sm">Warnings</p>";
                  <p className="text-2xl font-bold text-yellow-700">{report.warnings}</p>";
                </div>
                <AlertTriangle className="w-6 h-6 text-yellow-500/>
=======
                <AlertTriangle className="w-6 h-6 text-yellow-500" />";
              </div>
            </div>
            
            <div className="bg-red-50 rounded-lg p-4">";
              <div className="flex justify-between items-center">";
                <div>
                  <p className="text-red-600 text-sm">Failed</p>";
                  <p className="text-2xl font-bold text-red-700">{report.failedChecks}</p>";
                </div>
                <XCircle className="w-6 h-6 text-red-500/>
=======
                <XCircle className="w-6 h-6 text-red-500" />";
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">";
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>";
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>";
              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                {severities.map(severity => (
                  <option key={severity} value={severity}>
                    {severity.charAt(0).toUpperCase() + severity.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Security Checks */}
          <div className="space-y-3">";
            <h3 className="text-lg font-semibold text-gray-900">Security Checks</h3>";
            <AnimatePresence>
              {filteredChecks.map((check) => (
                <motion.div
                  key={check.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="border border-gray-200 rounded-lg p-4 hover: shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">";
                    <div className="flex items-start gap-3 flex-1">";
                      {getStatusIcon(check.status)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{check.name}</h4>
=======
                      <div className="flex-1">";
                        <div className="flex items-center gap-2 mb-1">";
                          <h4 className="font-semibold text-gray-900">{check.name}</h4>";
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(check.severity)}`}>`;
                            {check.severity}
                          </span>
                          <span className="flex items-center gap-1 text-gray-500 text-sm">";
                            {getCategoryIcon(check.category)}
                            {check.category}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{check.description}</p>";
                        {
check.recommendation && (
<div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
<p className="text-blue-800 text-sm font-medium">Recommendation:</p>
<p className="text-blue-700 text-sm">{check.recommendation
=======
<div className="bg-blue-50 border border-blue-200 rounded-lg p-3">";
<p className="text-blue-800 text-sm font-medium">Recommendation: </p>,";
<p className="text-blue-700 text-sm">{check.recommendation";
}</p>
                          </div>
                        )}
                        {check.details && (
                          <p className="text-gray-500 text-xs mt-2">{check.details}</p>";
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Last Updated */}
          <div className="mt-6 text-center text-sm text-gray-500">";
            Last updated: {new Date(report.lastUpdated).toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
};

export default SecurityAuditPanel;