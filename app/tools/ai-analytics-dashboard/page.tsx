import React, { useState, useEffect } from 'react';
import SEO from "../../components/SEO";
import Card from '../../../components/ui/Card';

export default function AIAnalyticsDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('overview');
  const [dashboardData, setDashboardData] = useState({
    overview: {
      totalAIProjects: 47,
      activeModels: 23,
      totalPredictions: 1250000,
      accuracyRate: 94.2,
      costSavings: 1250000,
      roi: 340
    },
    performance: {
      modelAccuracy: 94.2,
      predictionLatency: 45,
      systemUptime: 99.9,
      errorRate: 0.8,
      throughput: 1250
    },
    business: {
      revenueImpact: 2500000,
      costReduction: 850000,
      processEfficiency: 35,
      customerSatisfaction: 92,
      employeeProductivity: 28
    }
  });

  const metrics = [
    {
      id: 'overview',
      name: 'Overview',
      icon: '📊',
      description: 'High-level AI performance metrics and business impact'
    },
    {
      id: 'performance',
      name: 'Performance',
      icon: '⚡',
      description: 'Model performance, latency, and system metrics'
    },
    {
      id: 'business',
      name: 'Business Impact',
      icon: '💰',
      description: 'Revenue impact, cost savings, and efficiency gains'
    },
    {
      id: 'usage',
      name: 'Usage Analytics',
      icon: '👥',
      description: 'User adoption, feature usage, and engagement metrics'
    }
  ];

  const timeframeOptions = [
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' },
    { value: '1y', label: 'Last Year' }
  ];

  const aiProjects = [
    {
      name: 'Customer Sentiment Analysis',
      status: 'active',
      accuracy: 96.8,
      predictions: 125000,
      impact: 'high',
      lastUpdated: '2 hours ago'
    },
    {
      name: 'Fraud Detection System',
      status: 'active',
      accuracy: 99.2,
      predictions: 85000,
      impact: 'critical',
      lastUpdated: '5 minutes ago'
    },
    {
      name: 'Recommendation Engine',
      status: 'active',
      accuracy: 92.5,
      predictions: 450000,
      impact: 'high',
      lastUpdated: '1 hour ago'
    },
    {
      name: 'Predictive Maintenance',
      status: 'training',
      accuracy: 89.3,
      predictions: 15000,
      impact: 'medium',
      lastUpdated: '3 hours ago'
    },
    {
      name: 'Content Moderation',
      status: 'active',
      accuracy: 94.7,
      predictions: 180000,
      impact: 'medium',
      lastUpdated: '30 minutes ago'
    }
  ];

  const trends = [
    { date: '2025-01-01', accuracy: 93.2, predictions: 120000, cost: 45000 },
    { date: '2025-01-02', accuracy: 93.8, predictions: 125000, cost: 47000 },
    { date: '2025-01-03', accuracy: 94.1, predictions: 130000, cost: 49000 },
    { date: '2025-01-04', accuracy: 94.5, predictions: 135000, cost: 51000 },
    { date: '2025-01-05', accuracy: 94.2, predictions: 140000, cost: 53000 },
    { date: '2025-01-06', accuracy: 94.8, predictions: 145000, cost: 55000 },
    { date: '2025-01-07', accuracy: 94.2, predictions: 150000, cost: 57000 }
  ];

  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Model Accuracy Drop',
      message: 'Customer Sentiment Analysis accuracy dropped below 95%',
      timestamp: '15 minutes ago',
      action: 'Review training data'
    },
    {
      id: 2,
      type: 'info',
      title: 'New Model Deployed',
      message: 'Fraud Detection System v2.1 successfully deployed',
      timestamp: '2 hours ago',
      action: 'Monitor performance'
    },
    {
      id: 3,
      type: 'success',
      title: 'Cost Optimization',
      message: 'Infrastructure costs reduced by 15% this month',
      timestamp: '1 day ago',
      action: 'View report'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'training': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-orange-600';
      case 'medium': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'error': return '🔴';
      case 'warning': return '🟡';
      case 'info': return '🔵';
      case 'success': return '🟢';
      default: return '⚪';
    }
  };

  const currentData = dashboardData[selectedMetric];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Analytics Dashboard - Zion Tech Group"
        description="Comprehensive AI analytics dashboard with real-time insights, performance metrics, business impact analysis, and predictive analytics for your AI initiatives."
        keywords="AI analytics, AI dashboard, AI metrics, AI performance, AI insights, AI monitoring, AI reporting"
        url="/tools/ai-analytics-dashboard"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              📊 AI Analytics Dashboard
            </h1>
            <p className="text-xl">
              Comprehensive analytics and insights for your AI initiatives with real-time monitoring and business impact analysis.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Metric Category</label>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {metrics.map((metric) => (
                <option key={metric.id} value={metric.id}>
                  {metric.icon} {metric.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Range</label>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {timeframeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(currentData).map(([key, value], index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                {typeof value === 'number' && value > 1000000 
                  ? `$${(value / 1000000).toFixed(1)}M`
                  : typeof value === 'number' && value > 1000
                  ? `${(value / 1000).toFixed(1)}K`
                  : typeof value === 'number' && value < 1
                  ? `${(value * 100).toFixed(1)}%`
                  : value}
              </div>
              <h3 className="text-lg font-semibold mb-2 capitalize">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </h3>
              <p className="text-sm text-gray-600">
                {key === 'totalAIProjects' && 'Active AI initiatives'}
                {key === 'activeModels' && 'Models in production'}
                {key === 'totalPredictions' && 'Predictions made'}
                {key === 'accuracyRate' && 'Average accuracy'}
                {key === 'costSavings' && 'Total cost savings'}
                {key === 'roi' && 'Return on investment %'}
                {key === 'modelAccuracy' && 'Model accuracy rate'}
                {key === 'predictionLatency' && 'Avg response time (ms)'}
                {key === 'systemUptime' && 'System availability'}
                {key === 'errorRate' && 'Error rate %'}
                {key === 'throughput' && 'Requests per second'}
                {key === 'revenueImpact' && 'Revenue impact'}
                {key === 'costReduction' && 'Cost reduction'}
                {key === 'processEfficiency' && 'Efficiency improvement %'}
                {key === 'customerSatisfaction' && 'Customer satisfaction %'}
                {key === 'employeeProductivity' && 'Productivity gain %'}
              </p>
            </Card>
          ))}
        </div>

        {/* Charts and Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Performance Trends */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">📈 Performance Trends</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <p className="text-gray-600">Interactive performance trend chart</p>
                <p className="text-sm text-gray-500 mt-2">Showing accuracy, predictions, and costs over time</p>
              </div>
            </div>
          </Card>

          {/* AI Projects Status */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">🤖 AI Projects Status</h3>
            <div className="space-y-4">
              {aiProjects.map((project, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-sm text-gray-600">
                        {project.predictions.toLocaleString()} predictions
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium mr-2 ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className={`text-sm font-semibold ${getImpactColor(project.impact)}`}>
                        {project.impact}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{project.accuracy}% accuracy</p>
                    <p className="text-xs text-gray-500">{project.lastUpdated}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Alerts and Notifications */}
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold mb-6">🚨 Recent Alerts & Notifications</h3>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl mr-4">{getAlertIcon(alert.type)}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold">{alert.title}</h4>
                    <span className="text-sm text-gray-500">{alert.timestamp}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{alert.message}</p>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    {alert.action} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold mb-2">Generate Report</h3>
            <p className="text-sm text-gray-600">Create detailed analytics report</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="font-semibold mb-2">Optimize Performance</h3>
            <p className="text-sm text-gray-600">Get optimization recommendations</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-semibold mb-2">View Trends</h3>
            <p className="text-sm text-gray-600">Analyze performance trends</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="font-semibold mb-2">Configure Alerts</h3>
            <p className="text-sm text-gray-600">Set up monitoring alerts</p>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Deeper AI Insights?</h3>
            <p className="text-lg mb-6">
              Connect with our AI experts to set up advanced analytics and monitoring for your AI initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Schedule Consultation
              </a>
              <a
                href="/tools/ai-model-monitor"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                📊 View Model Monitor
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                🔧 AI Analytics Services
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}