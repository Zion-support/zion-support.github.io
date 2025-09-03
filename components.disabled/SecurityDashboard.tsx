import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, Lock, Database, Activity } from 'lucide-react';

interface SecurityMetrics {
  overallScore: number;
  vulnerabilities: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  lastScan: Date;
}

const SecurityDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    overallScore: 85,
    vulnerabilities: {
      critical: 0,
      high: 2,
      medium: 5,
      low: 12
    },
    lastScan: new Date()
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Security Dashboard</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Activity className="h-4 w-4" />
          Last scan: {metrics.lastScan.toLocaleDateString()}
        </div>
      </div>

      {/* Overall Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-lg ${getScoreBgColor(metrics.overallScore)}`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Overall Security Score</h3>
            <p className="text-gray-600">Based on latest security assessment</p>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${getScoreColor(metrics.overallScore)}`}>
              {metrics.overallScore}
            </div>
            <div className="text-sm text-gray-600">/ 100</div>
          </div>
        </div>
      </motion.div>

      {/* Vulnerabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(metrics.vulnerabilities).map(([severity, count]) => {
          const severityColors = {
            critical: 'text-red-600 bg-red-100',
            high: 'text-orange-600 bg-orange-100',
            medium: 'text-yellow-600 bg-yellow-100',
            low: 'text-blue-600 bg-blue-100'
          };

          return (
            <motion.div
              key={severity}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg ${severityColors[severity as keyof typeof severityColors]}`}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">{count}</div>
                <div className="text-sm capitalize">{severity} Vulnerabilities</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Security Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Firewall Status</h3>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-600 font-medium">Active</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">SSL Certificate</h3>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-600 font-medium">Valid</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-6 w-6 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">Database Security</h3>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-600 font-medium">Secured</span>
          </div>
        </motion.div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Security Alerts</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <div>
              <div className="font-medium text-gray-900">High Priority Vulnerability Detected</div>
              <div className="text-sm text-gray-600">2 hours ago</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <div>
              <div className="font-medium text-gray-900">Security Update Applied</div>
              <div className="text-sm text-gray-600">1 day ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;