
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SecurityHeaders {
  name: string;
  present: boolean;
  value?: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
}

export const SecurityHeadersValidator: React.FC = () => {
  const [headers, setHeaders] = useState<SecurityHeaders[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  const securityHeaders: SecurityHeaders[] = [
    {
      name: 'Content-Security-Policy',
      present: false,
      severity: 'high',
      description: 'Prevents XSS attacks by controlling resource loading'
    },
    {
      name: 'X-Frame-Options',
      present: false,
      severity: 'high',
      description: 'Prevents clickjacking attacks'
    },
    {
      name: 'X-Content-Type-Options',
      present: false,
      severity: 'medium',
      description: 'Prevents MIME type sniffing'
    },
    {
      name: 'Referrer-Policy',
      present: false,
      severity: 'medium',
      description: 'Controls referrer information'
    },
    {
      name: 'Permissions-Policy',
      present: false,
      severity: 'medium',
      description: 'Controls browser features'
    },
    {
      name: 'Strict-Transport-Security',
      present: false,
      severity: 'high',
      description: 'Enforces HTTPS connections'
    }
  ];

  const scanHeaders = async () => {
    setIsScanning(true);
    
    try {
      // In a real implementation, you would check actual headers
      // For demo purposes, we'll simulate the scan
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const scannedHeaders = securityHeaders.map(header => ({
        ...header,
        present: Math.random() > 0.3, // Simulate some headers being present
        value: header.present ? `sample-${header.name.toLowerCase()}` : undefined
      }));
      
      setHeaders(scannedHeaders);
    } catch (error) {
      console.error('Error scanning headers:', error);
    } finally {
      setIsScanning(false);
    }
  };

  useEffect(() => {
    scanHeaders();
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityBg = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500/20 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 border-green-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  const securityScore = headers.length > 0 
    ? Math.round((headers.filter(h => h.present).length / headers.length) * 100)
    : 0;

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Security Headers Validator</h1>
          <button
            onClick={scanHeaders}
            disabled={isScanning}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isScanning ? 'Scanning...' : 'Rescan'}
          </button>
        </div>

        {/* Security Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`p-6 rounded-lg border-2 mb-8 ${
            securityScore >= 80 ? 'bg-green-500/20 border-green-500/30' :
            securityScore >= 60 ? 'bg-yellow-500/20 border-yellow-500/30' :
            'bg-red-500/20 border-red-500/30'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{securityScore}%</div>
            <div className="text-gray-300">Security Headers Score</div>
          </div>
        </motion.div>

        {/* Headers List */}
        <div className="space-y-4">
          {headers.map((header, index) => (
            <motion.div
              key={header.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg border ${getSeverityBg(header.severity)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">{header.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-medium ${getSeverityColor(header.severity)}`}>
                    {header.severity.toUpperCase()}
                  </span>
                  <div className={`w-3 h-3 rounded-full ${
                    header.present ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-2">{header.description}</p>
              
              {header.present && header.value && (
                <div className="bg-gray-800 p-2 rounded text-xs font-mono text-gray-300">
                  {header.value}
                </div>
              )}
              
              {!header.present && (
                <div className="text-red-400 text-sm">
                  ⚠️ This header is missing and should be implemented
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SecurityHeadersValidator;
