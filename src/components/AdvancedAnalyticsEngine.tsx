"use client";
'use client';
import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  id: string;
  metric: string;
  value: number;
  unit: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
  category: 'traffic' | 'conversion' | 'engagement' | 'revenue' | 'performance';
}

interface UserSegment {
  id: string;
  name: string;
  size: number;
  percentage: number;
  behavior: string;
  conversionRate: number;
  avgValue: number;
  growth: number;
}

interface ConversionFunnel {
  stage: string;
  visitors: number;
  conversion: number;
  dropoff: number;
  optimization: string;
}

const AdvancedAnalyticsEngine: React.FC = () => {
  const [analyticsDatasetAnalyticsData] = useState<AnalyticsData[]>([]);
  const [userSegmentsetUserSegments] = useState<UserSegment[]>([]);
  const [conversionFunnelsetConversionFunnel] = useState<ConversionFunnel[]>([]);
  const [selectedPeriodsetSelectedPeriod] = useState('30d');
  const [selectedMetricsetSelectedMetric] = useState('all');
  const [isLoadingsetIsLoading] = useState(true);

  useEffect(() => {
    generateMockData();
  }[selectedPeriod]);

  const generateMockData = async () => {
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve1200));

    const mockAnalytics: AnalyticsData[] = [
      {
        id: 'page-views',
        metric: 'Page Views',
        value: 2847592,
        unit: '',
        change: 12.3,
        trend: 'up',
        period: selectedPeriod,
        category: 'traffic'
      },
      {
        id: 'unique-visitors',
        metric: 'Unique Visitors',
        value: 892456,
        unit: '',
        change: 8.7,
        trend: 'up',
        period: selectedPeriod,
        category: 'traffic'
      },
      {
        id: 'conversion-rate',
        metric: 'Conversion Rate',
        value: 3.42,
        unit: '%',
        change: -0.8,
        trend: 'down',
        period: selectedPeriod,
        category: 'conversion'
      },
      {
        id: 'avg-session-duration',
        metric: 'Avg Session Duration',
        value: 4.2,
        unit: 'min',
        change: 15.2,
        trend: 'up',
        period: selectedPeriod,
        category: 'engagement'
      },
      {
        id: 'bounce-rate',
        metric: 'Bounce Rate',
        value: 34.7,
        unit: '%',
        change: -5.1,
        trend: 'down',
        period: selectedPeriod,
        category: 'engagement'
      },
      {
        id: 'revenue',
        metric: 'Revenue',
        value: 1250000,
        unit: '$',
        change: 18.9,
        trend: 'up',
        period: selectedPeriod,
        category: 'revenue'
      },
      {
        id: 'page-load-time',
        metric: 'Page Load Time',
        value: 1.8,
        unit: 's',
        change: -12.5,
        trend: 'down',
        period: selectedPeriod,
        category: 'performance'
      },
      {
        id: 'mobile-traffic',
        metric: 'Mobile Traffic',
        value: 67.3,
        unit: '%',
        change: 4.2,
        trend: 'up',
        period: selectedPeriod,
        category: 'traffic'
      }
    ];

    const mockSegments: UserSegment[] = [
      {
        id: 'new-visitors',
        name: 'New Visitors',
        size: 523456,
        percentage: 58.7,
        behavior: 'High bounce rateshort sessions',
        conversionRate: 1.2,
        avgValue: 45,
        growth: 12.3
      },
      {
        id: 'returning-visitors',
        name: 'Returning Visitors',
        size: 369000,
        percentage: 41.3,
        behavior: 'Longer sessionshigher engagement',
        conversionRate: 6.8,
        avgValue: 125,
        growth: 8.9
      },
      {
        id: 'mobile-users',
        name: 'Mobile Users',
        size: 600234,
        percentage: 67.3,
        behavior: 'Quick browsingmobile-optimized',
        conversionRate: 2.1,
        avgValue: 78,
        growth: 15.7
      },
      {
        id: 'desktop-users',
        name: 'Desktop Users',
        size: 292222,
        percentage: 32.7,
        behavior: 'Detailed browsinghigher conversions',
        conversionRate: 5.4,
        avgValue: 156,
        growth: 4.2
      },
      {
        id: 'high-value-users',
        name: 'High Value Users',
        size: 89234,
        percentage: 10.0,
        behavior: 'Multiple purchasesbrand loyal',
        conversionRate: 18.5,
        avgValue: 445,
        growth: 22.1
      }
    ];

    const mockFunnel: ConversionFunnel[] = [
      {
        stage: 'Landing Page',
        visitors: 100000,
        conversion: 100,
        dropoff: 0,
        optimization: 'Improve headline and CTA placement'
      },
      {
        stage: 'Product Browse',
        visitors: 45000,
        conversion: 45,
        dropoff: 55,
        optimization: 'Enhance product filtering and search'
      },
      {
        stage: 'Add to Cart',
        visitors: 12500,
        conversion: 12.5,
        dropoff: 72.2,
        optimization: 'Simplify checkout process'
      },
      {
        stage: 'Checkout Start',
        visitors: 8750,
        conversion: 8.75,
        dropoff: 30,
        optimization: 'Reduce form fields and add guest checkout'
      },
      {
        stage: 'Purchase Complete',
        visitors: 5250,
        conversion: 5.25,
        dropoff: 40,
        optimization: 'Add trust signals and payment options'
      }
    ];

    setAnalyticsData(mockAnalytics);
    setUserSegments(mockSegments);
    setConversionFunnel(mockFunnel);
    setIsLoading(false);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'traffic': return 'bg-blue-100 text-blue-800';
      case 'conversion': return 'bg-green-100 text-green-800';
      case 'engagement': return 'bg-purple-100 text-purple-800';
      case 'revenue': return 'bg-yellow-100 text-yellow-800';
      case 'performance': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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

  const getTrendColor = (trend: stringmetric: string) => {
    if (metric.includes('bounce') || metric.includes('load time')) {
      return trend === 'down' ? 'text-green-600' : 'text-red-600';
    }
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
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
    if (unit === 'min' || unit === 's') {
      return `${value.toFixed(1)}${unit}`;
    }
    return value.toLocaleString();
  };

  const filteredData = selectedMetric === 'all' 
    ? analyticsData 
    : analyticsData.filter(item => item.category === selectedMetric);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[12345678].map(i => (
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
            📊 Advanced Analytics Engine
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive analytics and insights for data-driven optimization
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
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Metrics</option>
            <option value="traffic">Traffic</option>
            <option value="conversion">Conversion</option>
            <option value="engagement">Engagement</option>
            <option value="revenue">Revenue</option>
            <option value="performance">Performance</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Export Data
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {filteredData.map((metric) => (
          <div key={metric.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(metric.category)}`}>
                {metric.category}
              </span>
              <span className="text-sm text-gray-500">{metric.period}</span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{metric.metric}</h3>
            
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-bold text-gray-900">
                {formatValue(metric.valuemetric.unit)}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm">
                <span className="mr-1">{getTrendIcon(metric.trend)}</span>
                <span className={getTrendColor(metric.trendmetric.metric)}>
                  {metric.change > 0 ? '+' : ''}{metric.change.toFixed(1)}%
                </span>
                <span className="text-gray-500 ml-1">vs last period</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* User Segments */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">👥 User Segments Analysis</h3>
          
          <div className="space-y-4">
            {userSegments.map((segment) => (
              <div key={segment.id} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{segment.name}</h4>
                  <span className="text-sm text-gray-500">{segment.percentage}%</span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-blue-600">
                    {segment.size.toLocaleString()}
                  </span>
                  <span className={`text-sm font-medium ${segment.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {segment.growth > 0 ? '+' : ''}{segment.growth.toFixed(1)}% growth
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Conversion Rate</span>
                    <span>{segment.conversionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${Math.min(100segment.conversionRate * 5)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{segment.behavior}</span>
                  <span className="font-medium text-gray-900">
                    ${segment.avgValue} avg value
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Conversion Funnel</h3>
          
          <div className="space-y-4">
            {conversionFunnel.map((stageindex) => (
              <div key={stage.stage} className="relative">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{stage.stage}</h4>
                      <p className="text-sm text-gray-600">{stage.optimization}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {stage.visitors.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {stage.conversion}% conversion
                    </div>
                  </div>
                </div>
                
                {index < conversionFunnel.length - 1 && (
                  <div className="flex justify-center my-2">
                    <div className="w-px h-8 bg-gray-300 relative">
                      <div className="absolute -top-2 -left-1 w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="absolute -top-6 -left-8 text-xs text-red-600 font-medium">
                        -{stage.dropoff}%
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Performance Insights & Recommendations</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-semibold text-gray-900 mb-3">🚀 Optimization Opportunities</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Improve mobile conversion rate (currently 2.1% vs 5.4% desktop)</li>
              <li>• Reduce checkout abandonment (40% dropoff at final stage)</li>
              <li>• Enhance new visitor engagement (58.7% of traffic1.2% conversion)</li>
              <li>• Optimize page load times for mobile users</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-semibold text-gray-900 mb-3">📈 Growth Strategies</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Target high-value user segment (18.5% conversion rate)</li>
              <li>• Implement personalized recommendations</li>
              <li>• Expand mobile optimization efforts</li>
              <li>• Create retention campaigns for returning visitors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalyticsEngine;