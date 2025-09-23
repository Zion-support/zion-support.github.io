'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, TrendingUp, Clock, Database, Globe, 
  Shield, CheckCircle, AlertCircle, Loader,
  BarChart3, Brain, ArrowRight
} from 'lucide-react';

interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

const AdvancedPerformanceOptimizer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationComplete, setOptimizationComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
    {
      id: 'page-load',
      name: 'Page Load Time',
      value: 1.2,
      target: 1.0,
      unit: 's',
      status: 'good',
      trend: 'down'
    },
    {
      id: 'lcp',
      name: 'Largest Contentful Paint',
      value: 0.8,
      target: 0.6,
      unit: 's',
      status: 'good',
      trend: 'down'
    },
    {
      id: 'fid',
      name: 'First Input Delay',
      value: 45,
      target: 30,
      unit: 'ms',
      status: 'warning',
      trend: 'stable'
    },
    {
      id: 'cls',
      name: 'Cumulative Layout Shift',
      value: 0.05,
      target: 0.03,
      unit: '',
      status: 'warning',
      trend: 'stable'
    },
    {
      id: 'ttfb',
      name: 'Time to First Byte',
      value: 120,
      target: 100,
      unit: 'ms',
      status: 'good',
      trend: 'down'
    },
    {
      id: 'bundle-size',
      name: 'JavaScript Bundle Size',
      value: 450,
      target: 300,
      unit: 'KB',
      status: 'warning',
      trend: 'up'
    }
  ]);

  const handleOptimize = async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Update metrics with optimized values
    setMetrics(prev => prev.map(metric => ({
      ...metric,
      value: metric.value * 0.7, // Simulate 30% improvement
      status: metric.value * 0.7 <= metric.target ? 'excellent' : 'good',
      trend: 'down'
    })));
    
    setIsOptimizing(false);
    setOptimizationComplete(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-500 bg-green-100';
      case 'good': return 'text-blue-500 bg-blue-100';
      case 'warning': return 'text-yellow-500 bg-yellow-100';
      case 'critical': return 'text-red-500 bg-red-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-green-500 rotate-180" />;
      case 'stable': return <BarChart3 className="w-4 h-4 text-blue-500" />;
      default: return null;
    }
  };

  if (!isVisible) return null;

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">ADVANCED PERFORMANCE OPTIMIZER</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lightning-Fast Performance
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time performance monitoring and optimization for maximum speed and efficiency
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{metric.name}</h3>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                  {metric.status}
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-gray-900">
                  {metric.value.toFixed(metric.unit === '' ? 3 : 1)}{metric.unit}
                </div>
                {getTrendIcon(metric.trend)}
              </div>
              
              <div className="text-sm text-gray-600">
                Target: {metric.target}{metric.unit}
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      metric.value <= metric.target ? 'bg-green-500' : 
                      metric.value <= metric.target * 1.2 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optimization Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our advanced AI-powered optimizer analyzes your website's performance and applies intelligent optimizations for maximum speed and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Code Optimization</h4>
              <p className="text-gray-600 text-sm">Intelligent code splitting and bundling optimization</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Optimization</h4>
              <p className="text-gray-600 text-sm">Efficient data loading and caching strategies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">CDN Optimization</h4>
              <p className="text-gray-600 text-sm">Global content delivery network optimization</p>
            </div>
          </div>

          {/* Optimization Button */}
          <div className="text-center">
            <button
              onClick={handleOptimize}
              disabled={isOptimizing || optimizationComplete}
              className={`px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                isOptimizing 
                  ? 'bg-yellow-500 cursor-not-allowed' 
                  : optimizationComplete
                  ? 'bg-green-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              {isOptimizing ? (
                <div className="flex items-center">
                  <Loader className="w-5 h-5 mr-2 animate-spin" />
                  Optimizing Performance...
                </div>
              ) : optimizationComplete ? (
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Optimization Complete!
                </div>
              ) : (
                <div className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Optimize Performance
                </div>
              )}
            </button>
          </div>

          {/* Optimization Results */}
          <AnimatePresence>
            {optimizationComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8 bg-green-50 rounded-lg p-6 border border-green-200"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h4 className="text-lg font-semibold text-green-800">Optimization Results</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">30%</div>
                    <div className="text-sm text-green-700">Faster Load Times</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">25%</div>
                    <div className="text-sm text-green-700">Smaller Bundle Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95</div>
                    <div className="text-sm text-green-700">Performance Score</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Performance Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-time Monitoring</h4>
            <p className="text-gray-600 text-sm">Continuous performance tracking and analysis</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Security Optimized</h4>
            <p className="text-gray-600 text-sm">Performance without compromising security</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Analytics Driven</h4>
            <p className="text-gray-600 text-sm">Data-driven optimization strategies</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Goal Oriented</h4>
            <p className="text-gray-600 text-sm">Optimization aligned with business objectives</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedPerformanceOptimizer;