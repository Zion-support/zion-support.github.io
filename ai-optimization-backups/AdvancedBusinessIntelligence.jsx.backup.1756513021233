import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Zap, 
  Target, 
  AlertTriangle, 
  Download, 
  RefreshCw, 
  X, 
  Maximize2, 
  Minimize2, 
  Calendar, 
  Activity,
  DollarSign,
  Users,
  ShoppingCart,
  Globe
} from 'lucide-react';

const mockMetrics = [
  {
    id: 'revenue',
    name: 'Total Revenue',
    value: 1250000,
    unit: 'USD',
    trend: 'up',
    change: 12.5,
    category: 'Financial'
  },
  {
    id: 'customers',
    name: 'Active Customers',
    value: 15420,
    unit: 'count',
    trend: 'up',
    change: 8.3,
    category: 'Customer'
  },
  {
    id: 'orders',
    name: 'Monthly Orders',
    value: 2847,
    unit: 'count',
    trend: 'up',
    change: 15.2,
    category: 'Operations'
  },
  {
    id: 'growth',
    name: 'Growth Rate',
    value: 23.4,
    unit: 'percent',
    trend: 'up',
    change: 5.7,
    category: 'Growth'
  }
];

const mockInsights = [
  {
    id: 'insight-1',
    title: 'Revenue Growth Opportunity',
    description: 'Customer segment A shows 40% higher conversion rate',
    type: 'opportunity',
    priority: 'high',
    actions: ['Conduct market research', 'Develop localization strategy', 'Establish partnerships']
  },
  {
    id: 'insight-2',
    title: 'Churn Risk Alert',
    description: '15% of premium customers showing inactivity patterns',
    type: 'risk',
    priority: 'medium',
    actions: ['Implement retention campaign', 'Analyze usage patterns', 'Contact at-risk customers']
  }
];

const mockModels = [
  {
    id: 'model-1',
    name: 'Customer Lifetime Value Predictor',
    accuracy: 94.2,
    lastTrained: '2024-01-10T00:00:00.000Z',
    status: 'active',
    predictions: 15420,
    category: 'Customer Analytics'
  },
  {
    id: 'model-2',
    name: 'Revenue Forecasting Model',
    accuracy: 89.7,
    lastTrained: '2024-01-08T00:00:00.000Z',
    status: 'active',
    predictions: 2847500,
    category: 'Financial Analytics'
  },
  {
    id: 'model-3',
    name: 'Churn Prediction Model',
    accuracy: 91.5,
    lastTrained: '2024-01-12T00:00:00.000Z',
    status: 'training',
    predictions: 15420,
    category: 'Customer Analytics'
  }
];

export function AdvancedBusinessIntelligence() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeRange, setTimeRange] = useState('30d');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showPredictions, setShowPredictions] = useState(true);
  const [data, setData] = useState(mockMetrics);
  const [insights, setInsights] = useState(mockInsights);
  const [models, setModels] = useState(mockModels);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const categories = ['all', 'Financial', 'Customer', 'Operations', 'Growth'];
  const timeRanges = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const filteredMetrics = selectedCategory === 'all'
    ? data
    : data.filter(metric => metric.category === selectedCategory);

  const refreshData = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRefreshing(false);
  };

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(refreshData, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium':
        return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      default:
        return 'border-green-500 bg-green-50 dark:bg-green-900/20';
    }
  };

  const getInsightIcon = (type) => {
    switch (type) {
      case 'prediction':
        return <Brain className="w-5 h-5 text-blue-500" />;
      case 'anomaly':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'opportunity':
        return <Target className="w-5 h-5 text-green-500" />;
      case 'risk':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      default:
        return <Zap className="w-5 h-5 text-purple-500" />;
    }
  };

  const formatValue = (value, unit) => {
    if (unit === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value);
    }
    if (unit === 'percent') {
      return `${value.toFixed(1)}%`;
    }
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 z-50 group"
      >
        <Brain className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl z-50">
        <div className="flex items-center gap-3 p-3">
          <Brain className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-sm">Business Intelligence</span>
          <button
            onClick={() => setIsMinimized(false)}
            className="ml-auto p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
      isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400px] h-[900px]'
    }`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Brain className="w-6 h-6" />
          <div>
            <h2 className="text-xl font-bold">Advanced Business Intelligence</h2>
            <p className="text-blue-100 text-sm">AI-powered insights and analytics</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {timeRanges.map(range => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          <button
            onClick={refreshData}
            disabled={isRefreshing}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
          >
            {isRefreshing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
            Refresh
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredMetrics.map(metric => (
            <div
              key={metric.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatValue(metric.value, metric.unit)}
                </div>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {metric.name}
              </div>
              <div className={`text-sm ${metric.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change > 0 ? '+' : ''}{metric.change}% vs last period
              </div>
            </div>
          ))}
        </div>

        {/* Insights */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AI Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.map(insight => (
              <div
                key={insight.id}
                className={`p-4 border rounded-lg ${getPriorityColor(insight.priority)}`}
              >
                <div className="flex items-start gap-3">
                  {getInsightIcon(insight.type)}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {insight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {insight.description}
                    </p>
                    <div className="space-y-1">
                      {insight.actions.map((action, index) => (
                        <div key={index} className="text-sm text-gray-600 dark:text-gray-400">
                          • {action}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Models */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AI Models</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {models.map(model => (
              <div
                key={model.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {model.name}
                  </h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    model.status === 'active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {model.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Accuracy:</span>
                    <span className="text-gray-900 dark:text-white">{model.accuracy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Predictions:</span>
                    <span className="text-gray-900 dark:text-white">{formatValue(model.predictions, 'count')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Category:</span>
                    <span className="text-gray-900 dark:text-white">{model.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
