'use client'
import Footer from './Footer'
import Navigation from './Navigation'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain } from 'lucide-react'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

    }
  }, []);

  // Initialize monitoring
  useEffect(() => {
    const initializeMonitoring = () => {
      // Start monitoring (placeholder - implement as needed)
      setIsMonitoring(true);
      updateMetrics();
    };

    initializeMonitoring();

    return () => {
      // Stop monitoring (placeholder - implement as needed)
      setIsMonitoring(false);
    };
  }, [updateMetrics]);

  // Update metrics periodically
  useEffect(() => {
    if (!isMonitoring) return;

    const _interval = setInterval(updateMetrics, refreshInterval);
    return () => clearInterval(interval);
  }, [isMonitoring, refreshInterval, updateMetrics]);

  // Get memory information
  const getMemoryInfo = () => {
    if ('memory' in performance) {
      const _memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      const used = memory.usedJSHeapSize / 1024 / 1024; // MB
      const total = memory.totalJSHeapSize / 1024 / 1024; // MB
      const limit = memory.jsHeapSizeLimit / 1024 / 1024; // MB
      const _percentage = (used / limit) * 100;

      return { used, total, limit, percentage };
    }

    return { used: 0, total: 0, limit: 0, percentage: 0 };
  };

  // Get network information
  const getNetworkInfo = () => {
    if ('connection' in navigator) {
      const _nav = navigator as NavigatorWithConnection;
      const _connection = nav.connection;
      return {
        effectiveType: connection?.effectiveType || 'unknown',
        downlink: connection?.downlink || 0,
        rtt: connection?.rtt || 0,
        saveData: connection?.saveData || false,
      };
    }

    return {
      effectiveType: 'unknown',
      downlink: 0,
      rtt: 0,
      saveData: false,
    };
  };

  // Export data
  const handleExport = () => {
    if (!metrics) return;

    const exportData = {
      metrics,
      performanceData: performanceOptimizer.getMetrics(),
      errorData: errorHandler.exportErrorData(),
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json',
    });
    const _url = URL.createObjectURL(blob);
    const _a = document.createElement('a');
    a.href = url;
    a.download = `system-metrics-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Get performance score color
  const getPerformanceScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-red-500 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (!metrics) {
    return (
      <div className={`p-4 bg-gray-100 rounded-lg ${className}`}>
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Loading system metrics...</span>
        </div>
      </div>
    );
  }

const SystemMonitor: React.FC<SystemMonitorProps> = ({ className = '' }) => {
  return (
    <>
      <Helmet>
        <title>SystemMonitor</title>
        <meta name="description" content="Advanced SystemMonitor solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, SystemMonitor, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              SystemMonitor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced SystemMonitor solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>

      {lastUpdate && (
        <p className="text-sm text-gray-500 mb-4">
          Last updated: {lastUpdate.toLocaleTimeString()}
        </p>
      )}

      {/* Performance Metrics */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Performance Score</span>
              <span className={`text-2xl font-bold ${getPerformanceScoreColor(metrics.performance.score)}`}>
                {metrics.performance.score}
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Load Time</span>
              <span className="text-lg font-semibold text-gray-900">
                {metrics.performance.loadTime.toFixed(0)}ms
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">FCP</span>
              <span className="text-lg font-semibold text-gray-900">
                {metrics.performance.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">LCP</span>
              <span className="text-lg font-semibold text-gray-900">
                {metrics.performance.largestContentfulPaint.toFixed(0)}ms
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">FID</span>
              <span className="text-lg font-semibold text-gray-900">
                {metrics.performance.firstInputDelay.toFixed(0)}ms
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">CLS</span>
              <span className="text-lg font-semibold text-gray-900">
                {metrics.performance.cumulativeLayoutShift.toFixed(3)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Error Metrics */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Errors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Total Errors</span>
              <span className="text-2xl font-bold text-red-600">
                {metrics.errors.total}
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Critical</span>
              <span className="text-lg font-semibold text-red-600">
                {metrics.errors.bySeverity.critical || 0}
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">High</span>
              <span className="text-lg font-semibold text-red-500">
                {metrics.errors.bySeverity.high || 0}
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Medium</span>
              <span className="text-lg font-semibold text-yellow-600">
                {metrics.errors.bySeverity.medium || 0}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Memory and Network */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Memory Usage</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Used</span>
                <span>{metrics.memory.used.toFixed(2)} MB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total</span>
                <span>{metrics.memory.total.toFixed(2)} MB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Limit</span>
                <span>{metrics.memory.limit.toFixed(2)} MB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    metrics.memory.percentage > 80 ? 'bg-red-500' :
                    metrics.memory.percentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${Math.min(metrics.memory.percentage, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Network</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Connection</span>
                <span>{metrics.network.effectiveType}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Downlink</span>
                <span>{metrics.network.downlink} Mbps</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>RTT</span>
                <span>{metrics.network.rtt} ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Save Data</span>
                <span>{metrics.network.saveData ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Errors */}
      {showDetails && metrics.errors.recent.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Errors</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {metrics.errors.recent.map((error) => (
              <div key={error.id} className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{error.message}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(error.severity)}`}>
                    {error.severity}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{error.type}</span>
                  <span>{new Date(error.timestamp).toLocaleTimeString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error Distribution */}
      {showDetails && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Error Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-2">By Type</h4>
              <div className="space-y-1">
                {Object.entries(metrics.errors.byType).map(([type, count]) => (
                  <div key={type} className="flex justify-between text-sm">
                    <span className="capitalize">{type}</span>
                    <span>{count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-2">By Category</h4>
              <div className="space-y-1">
                {Object.entries(metrics.errors.byCategory).map(([category, count]) => (
                  <div key={category} className="flex justify-between text-sm">
                    <span className="capitalize">{category}</span>
                    <span>{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemMonitor;