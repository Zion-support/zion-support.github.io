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
  const [checks, setChecks] = useState<SecurityCheck[]>([
    {
      id: 'ssl-certificate',
      name: 'SSL Certificate',
      description: 'Check SSL certificate validity',
      status: 'pass',
      details: 'Valid SSL certificate found',
      recommendation: 'Certificate is valid and properly configured'
    },
    {
      id: 'security-headers',
      name: 'Security Headers',
      description: 'Check for security headers',
      status: 'warning',
      details: 'Some security headers are missing',
      recommendation: 'Add Content-Security-Policy and X-Frame-Options headers'
    },
    {
      id: 'vulnerability-scan',
      name: 'Vulnerability Scan',
      description: 'Scan for known vulnerabilities',
      status: 'pass',
      details: 'No critical vulnerabilities found',
      recommendation: 'Continue regular security monitoring'
    }
  ]);

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
      default:
        return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: SecurityCheck['status']) => {
    switch (status) {
      case 'pass':
        return 'bg-green-50 border-green-200';
      case 'fail':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Shield className="w-8 h-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Security Audit Panel</h2>
      </div>
      
      <div className="space-y-4">
        {checks.map((check) => (
          <motion.div
            key={check.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg border ${getStatusColor(check.status)}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {getStatusIcon(check.status)}
                <div>
                  <h3 className="font-semibold text-gray-900">{check.name}</h3>
                  <p className="text-sm text-gray-600">{check.description}</p>
                  {check.details && (
                    <p className="text-sm text-gray-700 mt-1">{check.details}</p>
                  )}
                  {check.recommendation && (
                    <p className="text-sm text-blue-600 mt-1 font-medium">
                      💡 {check.recommendation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SecurityAuditPanel;