import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';

interface SecurityCheck {
  id: string;
  name: string;
  description: string;
  status: 'pass' | 'fail' | 'warning' | 'info';
  details?: string;
  recommendation?: string;
}

const SecurityAuditPanel: React.FC = () => {
  const [checks, setChecks] = useState<SecurityCheck[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate security checks
    const securityChecks: SecurityCheck[] = [
      {
        id: '1',
        name: 'HTTPS Configuration',
        description: 'Verify SSL/TLS certificate is properly configured',
        status: 'pass',
        details: 'Valid SSL certificate found with strong encryption',
        recommendation: 'Continue monitoring certificate expiration'
      },
      {
        id: '2',
        name: 'Content Security Policy',
        description: 'Check for proper CSP headers',
        status: 'warning',
        details: 'CSP header present but could be more restrictive',
        recommendation: 'Implement stricter CSP rules'
      },
      {
        id: '3',
        name: 'Authentication Security',
        description: 'Verify secure authentication mechanisms',
        status: 'pass',
        details: 'Strong password policies and secure session management',
        recommendation: 'Consider implementing 2FA'
      },
      {
        id: '4',
        name: 'Data Encryption',
        description: 'Check data encryption at rest and in transit',
        status: 'info',
        details: 'Data encrypted in transit, checking at rest status',
        recommendation: 'Implement database encryption'
      }
    ];

    setTimeout(() => {
      setChecks(securityChecks);
      setIsLoading(false);
    }, 2000);
  }, []);

  const getStatusIcon = (status: SecurityCheck['status']) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'fail':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStatusColor = (status: SecurityCheck['status']) => {
    switch (status) {
      case 'pass':
        return 'border-green-200 bg-green-50';
      case 'fail':
        return 'border-red-200 bg-red-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'info':
        return 'border-blue-200 bg-blue-50';
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold">Security Audit</h3>
        </div>
        <div className="animate-pulse">
          <div className="space-y-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Shield className="w-6 h-6 text-blue-600" />
        <h3 className="text-lg font-semibold">Security Audit</h3>
      </div>

      <div className="space-y-4">
        {checks.map((check, index) => (
          <motion.div
            key={check.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`border rounded-lg p-4 ${getStatusColor(check.status)}`}
          >
            <div className="flex items-start space-x-3">
              {getStatusIcon(check.status)}
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{check.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{check.description}</p>
                
                {check.details && (
                  <p className="text-sm text-gray-700 mt-2">{check.details}</p>
                )}
                
                {check.recommendation && (
                  <div className="mt-3 p-3 bg-gray-100 rounded-md">
                    <p className="text-sm font-medium text-gray-800">Recommendation:</p>
                    <p className="text-sm text-gray-700">{check.recommendation}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">Security Summary</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {checks.filter(c => c.status === 'pass').length}
            </div>
            <div className="text-gray-600">Passed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">
              {checks.filter(c => c.status === 'fail').length}
            </div>
            <div className="text-gray-600">Failed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {checks.filter(c => c.status === 'warning').length}
            </div>
            <div className="text-gray-600">Warnings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {checks.filter(c => c.status === 'info').length}
            </div>
            <div className="text-gray-600">Info</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAuditPanel;