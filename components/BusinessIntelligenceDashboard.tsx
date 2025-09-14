"use client";
'use client';

import React{ useStateuseEffect } from 'react';

interface Metric {
  id: string;
  name: string;
  value: number;
  unit: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  target?: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

interface BusinessInsight {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'revenue' | 'efficiency' | 'growth' | 'risk';
  recommendation: string;
  priority: number;
}

const BusinessIntelligenceDashboard: React.FC = () => {
  const [metricsetMetrics] = useState<Metric[]>([]);
  const [insightsetInsights] = useState<BusinessInsight[]>([]);
  const [selectedPeriodsetSelectedPeriod] = useState('30d');
  const [isLoadingsetIsLoading] = useState(true);

  useEffect(() => {
    generateMockData();
  }[selectedPeriod]);

  const generateMockData = async () => {
    setIsLoading(true);
    
    // Simulate data loading
    await new Promise(resolve => setTimeout(resolve1000));

    const mockMetrics: Metric[] = [
      {
        id: 'revenue',
        name: 'Monthly Revenue',
        value: 1250000,
        unit: '$',
        change: 12.5,
        trend: 'up',
        target: 1000000,
        status: 'excellent'
      },
      {
        id: 'customers',
        name: 'Active Customers',
        value: 15420,
        unit: '',
        change: 8.3,
        trend: 'up',
        target: 15000,
        status: 'good'
      },
      {
        id: 'conversion',
        name: 'Conversion Rate',
        value: 3.2,
        unit: '%',
        change: -0.5,
        trend: 'down',
        target: 4.0,
        status: 'warning'
      },
      {
        id: 'satisfaction',
        name: 'Customer Satisfaction',
        value: 4.7,
        unit: '/5',
        change: 0.2,
        trend: 'up',
        target: 4.5,
        status: 'excellent'
      },
      {
        id: 'retention',
        name: 'Customer Retention',
        value: 87.3,
        unit: '%',
        change: 2.1,
        trend: 'up',
        target: 85.0,
        status: 'good'
      },
      {
        id: 'churn',
        name: 'Churn Rate',
        value: 4.2,
        unit: '%',
        change: -0.8,
        trend: 'down',
        target: 3.0,
        status: 'warning'
      }
    ];

    const mockInsights: BusinessInsight[] = [
      {
        id: '1',
        title: 'High-Value Customer Segment Growth',
        description: 'Premium tier customers have increased by 23% this quarterdriving 67% of revenue growth.',
        impact: 'high',
        category: 'revenue',
        recommendation: 'Increase investment in premium customer acquisition and retention programs.',
        priority: 1
      },
      {
        id: '2',
        title: 'Conversion Rate Decline',
        description: 'Overall conversion rate has decreased by 0.5% due to increased competition in Q4.',
        impact: 'medium',
        category: 'efficiency',
        recommendation: 'Implement A/B testing for landing pages and optimize checkout process.',
        priority: 2
      },
      {
        id: '3',
        title: 'Customer Satisfaction Improvement',
        description: 'Customer satisfaction scores have improved to 4.7/5indicating successful service improvements.',
        impact: 'high',
        category: 'growth',
        recommendation: 'Leverage positive feedback for marketing campaigns and case studies.',
        priority: 3
      },
      {
        id: '4',
        title: 'Seasonal Demand Pattern',
        description: 'Historical data shows 40% revenue increase during holiday season. Prepare for Q4 surge.',
        impact: 'medium',
        category: 'revenue',
        recommendation: 'Scale infrastructure and customer support for anticipated demand increase.',
        priority: 4
      },
      {
        id: '5',
        title: 'Churn Risk in Enterprise Segment',
        description: 'Enterprise customers show 15% higher churn risk due to contract renewals approaching.',
        impact: 'high',
        category: 'risk',
        recommendation: 'Proactive outreach to enterprise clients with renewal incentives.',
        priority: 5
      }
    ];

    setMetrics(mockMetrics);
    setInsights(mockInsights);
    setIsLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'revenue': return '💰';
      case 'efficiency': return '⚡';
      case 'growth': return '📈';
      case 'risk': return '⚠️';
      default: return '📊';
    }
  };

  const formatValue = (value: numberunit: string) => {
    if (unit === '$') {
      return new Intl.NumberFormat('en-US'{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    }
    if (unit === '%') {
      return `${value.toFixed(1)}%`;
    }
    if (unit === '/5') {
      return `${value.toFixed(1)}/5`;
    }
    return value.toLocaleString();
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[123456].map(i => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            📊 Business Intelligence Dashboard
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive insights and analytics for data-driven decisions
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {metrics.map((metric) => (
          <div key={metric.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{metric.name}</h3>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                {metric.status}
              </span>
            </div>
            
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-bold text-gray-900">
                {formatValue(metric.valuemetric.unit)}
              </span>
              {metric.target && (
                <span className="text-sm text-gray-500 ml-2">
                  / {formatValue(metric.targetmetric.unit)}
                </span>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm">
                <span className="mr-1">{getTrendIcon(metric.trend)}</span>
                <span className={metric.change > 0 ? 'text-green-600' : metric.change < 0 ? 'text-red-600' : 'text-gray-600'}>
                  {metric.change > 0 ? '+' : ''}{metric.change.toFixed(1)}%
                </span>
                <span className="text-gray-500 ml-1">vs last period</span>
              </div>
            </div>
            
            {/* Progress bar for targets */}
            {metric.target && (
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{Math.min(100(metric.value / metric.target * 100)).toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      metric.value >= metric.target ? 'bg-green-500' : 
                      metric.value >= metric.target * 0.8 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(100(metric.value / metric.target * 100))}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Business Insights */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900">💡 Business Insights & Recommendations</h3>
          <span className="text-sm text-gray-500">{insights.length} insights</span>
        </div>
        
        <div className="space-y-6">
          {insights.map((insight) => (
            <div key={insight.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{getCategoryIcon(insight.category)}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{insight.title}</h4>
                    <p className="text-gray-600 mb-4">{insight.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(insight.impact)}`}>
                    {insight.impact} impact
                  </span>
                  <span className="text-xs text-gray-500">#{insight.priority}</span>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h5 className="font-semibold text-blue-900 mb-2">💡 Recommendation:</h5>
                <p className="text-blue-800">{insight.recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Trends Chart */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Performance Trends</h3>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">📊</div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Interactive Performance Charts</h4>
          <p className="text-gray-600 mb-6">
            Revenuecustomer growthand conversion rate trends over time
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-1">+23%</div>
              <div className="text-sm text-gray-600">Revenue Growth</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-1">+8.3%</div>
              <div className="text-sm text-gray-600">Customer Growth</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-yellow-600 mb-1">-0.5%</div>
              <div className="text-sm text-gray-600">Conversion Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Priority Action Items</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-semibold text-gray-900 mb-3">🚀 Immediate Actions (This Week)</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Implement A/B testing for landing pages</li>
              <li>• Reach out to enterprise clients for renewals</li>
              <li>• Optimize checkout process flow</li>
              <li>• Prepare Q4 infrastructure scaling plan</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-semibold text-gray-900 mb-3">📋 Strategic Initiatives (Next Month)</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Launch premium customer acquisition campaign</li>
              <li>• Develop customer satisfaction case studies</li>
              <li>• Implement predictive churn analytics</li>
              <li>• Create seasonal demand forecasting model</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligenceDashboard;