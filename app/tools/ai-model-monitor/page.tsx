import React, { useState, useEffect } from 'react';
import SEO from '../../../components/SEO';
import Card from '../../../components/ui/Card';

export default function AIModelMonitor() {
  const [selectedModel, setSelectedModel] = useState('model1');
  const [timeRange, setTimeRange] = useState('24h');
  const [metrics, setMetrics] = useState({
    accuracy: 94.2,
    precision: 92.8,
    recall: 91.5,
    f1Score: 92.1,
    latency: 45,
    throughput: 1250,
    errorRate: 0.8,
    availability: 99.9
  });

  const models = [
    { id: 'model1', name: 'Customer Sentiment Analysis', status: 'healthy' },
    { id: 'model2', name: 'Fraud Detection', status: 'warning' },
    { id: 'model3', name: 'Recommendation Engine', status: 'healthy' },
    { id: 'model4', name: 'Image Classification', status: 'error' },
    { id: 'model5', name: 'Natural Language Processing', status: 'healthy' }
  ];

  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Model accuracy dropped below threshold (92%)',
      timestamp: '2 minutes ago',
      model: 'Fraud Detection'
    },
    {
      id: 2,
      type: 'error',
      message: 'Model deployment failed - Image Classification',
      timestamp: '15 minutes ago',
      model: 'Image Classification'
    },
    {
      id: 3,
      type: 'info',
      message: 'New model version deployed successfully',
      timestamp: '1 hour ago',
      model: 'Customer Sentiment Analysis'
    }
  ];

  const performanceHistory = [
    { time: '00:00', accuracy: 94.1, latency: 42, throughput: 1200 },
    { time: '04:00', accuracy: 94.3, latency: 45, throughput: 1180 },
    { time: '08:00', accuracy: 94.0, latency: 48, throughput: 1350 },
    { time: '12:00', accuracy: 93.8, latency: 52, throughput: 1420 },
    { time: '16:00', accuracy: 94.2, latency: 44, throughput: 1280 },
    { time: '20:00', accuracy: 94.4, latency: 41, throughput: 1150 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'error': return '🔴';
      case 'warning': return '🟡';
      case 'info': return '🔵';
      default: return '⚪';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Model Performance Monitor - Zion Tech Group"
        description="Monitor and optimize your AI model performance with real-time analytics, alerts, and insights. Track accuracy, latency, throughput, and more."
        keywords="AI model monitoring, MLOps, model performance, AI analytics, model optimization, machine learning monitoring"
        url="/tools/ai-model-monitor"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              📊 AI Model Performance Monitor
            </h1>
            <p className="text-xl">
              Real-time monitoring and optimization for your AI models with comprehensive analytics and alerts.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Model</label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Range</label>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
          </div>
        </div>

        {/* Model Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {models.map((model) => (
            <Card key={model.id} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm">{model.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
                  {model.status}
                </span>
              </div>
              <div className="text-xs text-gray-600">
                <div>Accuracy: 94.2%</div>
                <div>Latency: 45ms</div>
                <div>Uptime: 99.9%</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{metrics.accuracy}%</div>
            <h3 className="text-lg font-semibold mb-2">Accuracy</h3>
            <p className="text-sm text-gray-600">Model prediction accuracy</p>
            <div className="mt-2 text-xs text-green-600">↑ +0.3% from yesterday</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{metrics.latency}ms</div>
            <h3 className="text-lg font-semibold mb-2">Latency</h3>
            <p className="text-sm text-gray-600">Average response time</p>
            <div className="mt-2 text-xs text-blue-600">↓ -5ms from yesterday</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{metrics.throughput}/s</div>
            <h3 className="text-lg font-semibold mb-2">Throughput</h3>
            <p className="text-sm text-gray-600">Requests per second</p>
            <div className="mt-2 text-xs text-purple-600">↑ +50 from yesterday</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{metrics.errorRate}%</div>
            <h3 className="text-lg font-semibold mb-2">Error Rate</h3>
            <p className="text-sm text-gray-600">Failed predictions</p>
            <div className="mt-2 text-xs text-red-600">↑ +0.1% from yesterday</div>
          </Card>
        </div>

        {/* Performance Chart */}
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold mb-6">Performance Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <p className="text-gray-600">Interactive performance chart would be displayed here</p>
              <p className="text-sm text-gray-500 mt-2">Showing accuracy, latency, and throughput over time</p>
            </div>
          </div>
        </Card>

        {/* Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">🚨 Recent Alerts</h3>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl mr-3">{getAlertIcon(alert.type)}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{alert.model}</span>
                      <span className="text-xs text-gray-500">{alert.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-700">{alert.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">⚡ Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                🔄 Retrain Model
              </button>
              <button className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                📊 Generate Report
              </button>
              <button className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                ⚙️ Optimize Performance
              </button>
              <button className="w-full p-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                🔔 Configure Alerts
              </button>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-8 mt-8 bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your AI Models?</h3>
            <p className="text-lg mb-6">
              Get expert consultation on model optimization, performance tuning, and MLOps best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Schedule Consultation
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                🔧 View MLOps Services
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}