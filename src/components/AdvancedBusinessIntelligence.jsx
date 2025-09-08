import React, { useState, useRef, useEffect } from 'react';
import { BarChart3, TrendingUp, Brain, Zap, Target, AlertTriangle, Download, RefreshCw, X, Maximize2, Minimize2, Calendar, Activity } from 'lucide-react';

const mockMetrics = [
    {
        id: 'revenue',
        name: 'Monthly Revenue',
        value: 2847500,
        target: 3000000,
        unit: 'USD',
        trend: 'up',
        change: 8.5,
        category: 'Financial',
        priority: 'high',
        lastUpdated: '2024-01-15T10:00:00.000Z'
    },
    {
        id: 'customers',
        name: 'Active Customers',
        value: 15420,
        target: 15000,
        unit: 'Users',
        trend: 'up',
        change: 12.3,
        category: 'Customer',
        priority: 'high',
        lastUpdated: '2024-01-15T10:00:00.000Z'
    },
    {
        id: 'satisfaction',
        name: 'Customer Satisfaction',
        value: 94.2,
        target: 90,
        unit: '%',
        trend: 'up',
        change: 2.1,
        category: 'Customer',
        priority: 'medium',
        lastUpdated: '2024-01-15T10:00:00.000Z'
    },
    {
        id: 'efficiency',
        name: 'Operational Efficiency',
        value: 87.5,
        target: 85,
        unit: '%',
        trend: 'up',
        change: 1.8,
        category: 'Operations',
        priority: 'medium',
        lastUpdated: '2024-01-15T10:00:00.000Z'
    },
    {
        id: 'costs',
        name: 'Operating Costs',
        value: 1250000,
        target: 1200000,
        unit: 'USD',
        trend: 'down',
        change: -3.2,
        category: 'Financial',
        priority: 'high',
        lastUpdated: '2024-01-15T10:00:00.000Z'
  {/* Removed stray closing brace */}
];

const mockInsights = [
    {
        id: 'insight-1',
        type: 'prediction',
        title: 'Revenue Growth Prediction',
        description: 'Based on current trends, monthly revenue is predicted to reach $3.2M by Q2 2024, representing a 15% increase.',
        confidence: 87,
        impact: 'high',
        category: 'Financial',
        timestamp: '2024-01-15T10:00:00.000Z',
        actionable: true,
        actions['Increase marketing budget', 'Optimize pricing strategy', 'Expand sales team']
    },
    {
        id: 'insight-2',
        type: 'anomaly',
        title: 'Customer Churn Anomaly',
        description: 'Unusual spike in customer churn rate detected in the SaaS segment. 23% higher than historical average.',
        confidence: 92,
        impact: 'high',
        category: 'Customer',
        timestamp: '2024-01-15T09:30:00.000Z',
        actionable: true,
        actions['Investigate customer feedback', 'Review product updates', 'Enhance support response']
    },
    {
        id: 'insight-3',
        type: 'opportunity',
        title: 'Market Expansion Opportunity',
        description: 'AI analysis suggests high potential for expansion into the APAC region with estimated 40% market opportunity.',
        confidence: 78,
        impact: 'medium',
        category: 'Growth',
        timestamp: '2024-01-15T08:45:00.000Z',
        actionable: true,
        actions['Conduct market research', 'Develop localization strategy', 'Establish partnerships']
  {/* Removed stray closing brace */}
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
  {/* Removed stray closing brace */}
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
        currency: 'USD'
      }).format(value);
    }
    return `${value}${unit}`;
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Open Business Intelligence"
      >
        <Brain className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-300 ${
      isMinimized ? 'w-64 h-12' : isFullscreen ? 'w-screen h-screen bottom-0 right-0' : 'w-96 h-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Business Intelligence</h3>
        </div>
        
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-gray-200 rounded"
            title={isMinimized ? 'Maximize' : 'Minimize'}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1 hover:bg-gray-200 rounded"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-gray-200 rounded"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="p-4 h-full overflow-y-auto">
          {/* Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 text-xs rounded-full ${
                    selectedCategory === category
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className="p-2 hover:bg-gray-100 rounded"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 gap-3 mb-6">
            {filteredMetrics.map(metric => (
              <div key={metric.id} className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                  {getTrendIcon(metric.trend)}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    {formatValue(metric.value, metric.unit)}
                  </span>
                  <span className={`text-xs ${
                    metric.change > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change > 0 ? '+' : ''}{metric.change}%
                  </span>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div 
                      className="bg-blue-500 h-1 rounded-full transition-all duration-1000"
                      style={{ width: `${(metric.value / metric.target) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Insights */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">AI Insights</h4>
            <div className="space-y-3">
              {insights.map(insight => (
                <div key={insight.id} className={`p-3 border-l-4 rounded-r-lg ${getPriorityColor(insight.priority)}`}>
                  <div className="flex items-start gap-2 mb-2">
                    {getInsightIcon(insight.type)}
                    <div className="flex-1">
                      <h5 className="text-sm font-medium text-gray-900">{insight.title}</h5>
                      <p className="text-xs text-gray-600">{insight.description}</p>
                    </div>
                    <span className="text-xs text-gray-500">{insight.confidence}%</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <strong>Actions:</strong> {insight.actions.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Models */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">ML Models</h4>
            <div className="space-y-2">
              {models.map(model => (
                <div key={model.id} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{model.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      model.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {model.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600">
                    Accuracy: {model.accuracy}% | Predictions: {model.predictions.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
