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
  const [security, setSecurity] = useState<SecurityMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock security data
    const mockData: SecurityMetrics = {
      overallScore: Math.floor(Math.random() * 20) + 80,
      vulnerabilities: {
        critical: Math.floor(Math.random() * 2),
        high: Math.floor(Math.random() * 5),
        medium: Math.floor(Math.random() * 8),
        low: Math.floor(Math.random() * 15)
      },
      lastScan: new Date()
    };

    setTimeout(() => {
      setSecurity(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading || !security) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          <Shield className="w-6 h-6 mr-2 text-blue-600" />
          Security Dashboard
        </h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last scan: {security.lastScan.toLocaleDateString()}
        </div>
      </div>

      {/* Overall Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Overall Security Score
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Based on vulnerability assessment
              </p>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${getScoreColor(security.overallScore)}`}>
                {security.overallScore}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">/ 100</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Vulnerabilities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-600 dark:text-red-400">Critical</p>
              <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                {security.vulnerabilities.critical}
              </p>
            </div>
            <AlertTriangle className="w-6 h-6 text-red-500" />
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600 dark:text-orange-400">High</p>
              <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                {security.vulnerabilities.high}
              </p>
            </div>
            <AlertTriangle className="w-6 h-6 text-orange-500" />
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Medium</p>
              <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
                {security.vulnerabilities.medium}
              </p>
            </div>
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Low</p>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                {security.vulnerabilities.low}
              </p>
            </div>
            <CheckCircle className="w-6 h-6 text-blue-500" />
          </div>
        </div>
      </motion.div>

      {/* Security Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Security Status
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Firewall Protection
              </span>
            </div>
            <span className="text-sm text-green-600 dark:text-green-400">Active</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center">
              <Lock className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                SSL Certificate
              </span>
            </div>
            <span className="text-sm text-green-600 dark:text-green-400">Valid</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Data Encryption
              </span>
            </div>
            <span className="text-sm text-green-600 dark:text-green-400">Enabled</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center">
              <Activity className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Intrusion Detection
              </span>
            </div>
            <span className="text-sm text-green-600 dark:text-green-400">Monitoring</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SecurityDashboard;