'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Eye, 
  Lock, 
  Key,
  Activity,
  TrendingUp,
  AlertCircle,
  RefreshCw
} from 'lucide-react';

const SecurityDashboard = () => {
  const [securityStatus, setSecurityStatus] = useState('secure');
  const [threats, setThreats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const securityMetrics = [
    { label: 'Threats Blocked', value: '2,847', icon: Shield, color: 'text-green-600' },
    { label: 'Active Alerts', value: '3', icon: AlertTriangle, color: 'text-yellow-600' },
    { label: 'Security Score', value: '98%', icon: CheckCircle, color: 'text-green-600' },
    { label: 'Last Scan', value: '2 min ago', icon: Activity, color: 'text-blue-600' }
  ];

  const recentThreats = [
    {
      id: 1,
      type: 'Malware',
      severity: 'High',
      source: '192.168.1.100',
      time: '2 minutes ago',
      status: 'Blocked'
    },
    {
      id: 2,
      type: 'Phishing',
      severity: 'Medium',
      source: 'suspicious-email.com',
      time: '15 minutes ago',
      status: 'Blocked'
    },
    {
      id: 3,
      type: 'DDoS',
      severity: 'High',
      source: 'Multiple IPs',
      time: '1 hour ago',
      status: 'Mitigated'
    }
  ];

  const securityFeatures = [
    {
      title: 'Real-time Threat Detection',
      description: 'Advanced AI algorithms monitor and detect threats in real-time',
      status: 'Active',
      icon: Eye
    },
    {
      title: 'Quantum Encryption',
      description: 'Unbreakable quantum encryption protects all data transmissions',
      status: 'Active',
      icon: Lock
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify security model implementation',
      status: 'Active',
      icon: Key
    },
    {
      title: 'Automated Response',
      description: 'AI-powered automated threat response and mitigation',
      status: 'Active',
      icon: Activity
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-red-600 bg-red-50 border-red-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Blocked': return 'text-green-600 bg-green-50';
      case 'Mitigated': return 'text-blue-600 bg-blue-50';
      case 'Investigating': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Security
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {' '}Dashboard
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI-powered security monitoring and threat detection 
            for comprehensive protection.
          </p>
        </div>

        {/* Security Status */}
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-blue-600" />
              Security Status
            </h3>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                securityStatus === 'secure' ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <span className="text-sm font-semibold text-gray-700">
                {securityStatus === 'secure' ? 'All Systems Secure' : 'Security Alert'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className={`w-8 h-8 mx-auto mb-2 ${metric.color}`} />
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Threats */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                Recent Threats
              </h3>
              <button className="text-blue-600 hover:text-blue-700 transition-colors">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {recentThreats.map((threat, index) => (
                <div key={threat.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      threat.severity === 'High' ? 'bg-red-500' : 
                      threat.severity === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div>
                      <div className="font-semibold text-gray-900">{threat.type}</div>
                      <div className="text-sm text-gray-600">{threat.source}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs px-2 py-1 rounded-full border ${getSeverityColor(threat.severity)}`}>
                      {threat.severity}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{threat.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Security Features */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Security Features
            </h3>

            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <feature.icon className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">{feature.title}</div>
                    <div className="text-sm text-gray-600 mb-2">{feature.description}</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600 font-semibold">{feature.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Advanced Security Protection</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Protect your organization with our cutting-edge AI-powered security solutions 
              and quantum encryption technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                View Security Report
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Configure Settings
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SecurityDashboard;