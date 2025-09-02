import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, Lock, Database, Activity } from 'lucide-react';

interface SecurityMetric {
  name: string;
  status: 'secure' | 'warning' | 'critical';
  score: number;
  description: string;
}

interface SecurityDashboardProps {
  showDetails?: boolean;
}

const SecurityDashboard: React.FC<SecurityDashboardProps> = ({ 
  showDetails = true 
}) => {
  const [metrics, setMetrics] = useState<SecurityMetric[]>([]);
  const [overallScore, setOverallScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock security metrics - replace with real security API
    const mockMetrics: SecurityMetric[] = [
      {
        name: 'SSL/TLS Security',
        status: 'secure',
        score: 98,
        description: 'Strong encryption and valid certificates'
      },
      {
        name: 'Data Protection',
        status: 'secure',
        score: 95,
        description: 'Encrypted data storage and transmission'
      },
      {
        name: 'Access Control',
        status: 'warning',
        score: 85,
        description: 'Some users have elevated permissions'
      },
      {
        name: 'Vulnerability Scan',
        status: 'secure',
        score: 92,
        description: 'No critical vulnerabilities detected'
      },
      {
        name: 'Backup Security',
        status: 'secure',
        score: 88,
        description: 'Regular encrypted backups maintained'
      }
    ];

    setMetrics(mockMetrics);
    const avgScore = mockMetrics.reduce((sum, metric) => sum + metric.score, 0) / mockMetrics.length;
    setOverallScore(avgScore);
    setIsLoading(false);
  }, []);

  const getStatusIcon = (status: SecurityMetric['status']) => {
    switch (status) {
      case 'secure':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'critical':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return <Shield className="w-5 h-5 text-gray-500" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Overall Security Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm border p-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Security Score</h2>
              <p className="text-sm text-gray-600">Overall system security rating</p>
            </div>
          </div>
          <div className={`text-3xl font-bold ${getScoreColor(overallScore)}`}>
            {Math.round(overallScore)}%
          </div>
        </div>
      </motion.div>

      {/* Security Metrics */}
      {showDetails && (
        <div className="grid gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-sm border p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {getStatusIcon(metric.status)}
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">
                      {metric.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {metric.description}
                    </p>
                  </div>
                </div>
                <div className={`text-lg font-semibold ${getScoreColor(metric.score)}`}>
                  {metric.score}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Security Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-blue-50 rounded-lg p-4"
      >
        <div className="flex items-start">
          <Lock className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-blue-900 mb-1">
              Security Recommendations
            </h3>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• Review user access permissions regularly</li>
              <li>• Enable two-factor authentication for all accounts</li>
              <li>• Update security patches monthly</li>
              <li>• Conduct quarterly security audits</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SecurityDashboard;