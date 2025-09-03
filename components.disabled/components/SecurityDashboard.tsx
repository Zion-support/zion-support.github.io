import React { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Lock,
  Database,
  Activity } from 'lucide-react';

interface SecurityMetrics {
  overallScore: number;
  vulnerabilities: {
    critical: number;
    high: number;
    medium: number;
    low: number};
  lastScan: Date}

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
        low: Math.floor(Math.random() * 15) },
      lastScan: new Date() };

    setTimeout(() => {
      setSecurity(mockData);
      setIsLoading(false)}, 1000)}, []);

  if (isLoading || !security) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    )}

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600'};

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100'};

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Security Dashboard</h2>
        <div className="flex items-center text-sm text-gray-500">
          <Activity className="w-4 h-4 mr-2" />
          Last scan: {security.lastScan.toLocaleDateString()}
        </div>
      </div>

      {/* Overall Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div
          className={`${getScoreBgColor(security.overallScore)} rounded-lg p-6 text-center`}
        >
          <Shield className="w-12 h-12 mx-auto mb-4 text-gray-600" />
          <div
            className={`text-4xl font-bold ${getScoreColor(security.overallScore)} mb-2`}
          >
            {security.overallScore}
          </div>
          <div className="text-lg text-gray-600">Security Score</div>
        </div>
      </motion.div>

      {/* Vulnerabilities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-600" />
          <div className="text-2xl font-bold text-red-600">
            {security.vulnerabilities.critical}
          </div>
          <div className="text-sm text-red-600">Critical</div>
        </div>

        <div className="bg-orange-50 rounded-lg p-4 text-center">
          <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-orange-600" />
          <div className="text-2xl font-bold text-orange-600">
            {security.vulnerabilities.high}
          </div>
          <div className="text-sm text-orange-600">High</div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4 text-center">
          <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
          <div className="text-2xl font-bold text-yellow-600">
            {security.vulnerabilities.medium}
          </div>
          <div className="text-sm text-yellow-600">Medium</div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-blue-600" />
          <div className="text-2xl font-bold text-blue-600">
            {security.vulnerabilities.low}
          </div>
          <div className="text-sm text-blue-600">Low</div>
        </div>
      </motion.div>

      {/* Security Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="flex items-center p-4 bg-green-50 rounded-lg">
          <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
          <div>
            <div className="font-semibold text-green-800">Firewall Active</div>
            <div className="text-sm text-green-600">All ports secured</div>
          </div>
        </div>

        <div className="flex items-center p-4 bg-blue-50 rounded-lg">
          <Lock className="w-8 h-8 text-blue-600 mr-3" />
          <div>
            <div className="font-semibold text-blue-800">SSL Certificate</div>
            <div className="text-sm text-blue-600">Valid until 2025</div>
          </div>
        </div>

        <div className="flex items-center p-4 bg-purple-50 rounded-lg">
          <Database className="w-8 h-8 text-purple-600 mr-3" />
          <div>
            <div className="font-semibold text-purple-800">Data Encryption</div>
            <div className="text-sm text-purple-600">AES-256 enabled</div>
          </div>
        </div>
      </motion.div>
    </div>
  )};

export default SecurityDashboard;
