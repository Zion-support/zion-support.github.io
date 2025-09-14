import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  totalVisitors: number;
  engagementRate: number;
  conversionRate: number;
  averageSessionDuration: number;
  topContent: Array<{
    title: string;
    views: number;
    engagement: number;
    roi: number;
  }>;
  userSegments: Array<{
    segment: string;
    percentage: number;
    growth: number;
  }>;
  revenueMetrics: {
    totalRevenue: number;
    monthlyGrowth: number;
    roi: number;
    costPerAcquisition: number;
  };
  aiInsights: Array<{
    insight: string;
    impact: 'High' | 'Medium' | 'Low';
    recommendation: string;
  }>;
}

const AI2025AdvancedAnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [aiInsights, setAiInsights] = useState<string[]>([]);

  useEffect(() => {
    // Simulate loading analytics data
    const loadAnalyticsData = async () => {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockData: AnalyticsData = {
        totalVisitors: 125847,
        engagementRate: 87.3,
        conversionRate: 12.4,
        averageSessionDuration: 8.5,
        topContent: [
          {
            title: 'AI 2025 Ultimate Content Revolution',
            views: 45632,
            engagement: 94.2,
            roi: 50000
          },
          {
            title: 'Neural Superintelligence Breakthrough',
            views: 38921,
            engagement: 91.8,
            roi: 75000
          },
          {
            title: 'Quantum Machine Learning Guide',
            views: 32156,
            engagement: 89.5,
            roi: 100000
          },
          {
            title: 'Fortune 500 AI Transformation',
            views: 28743,
            engagement: 92.1,
            roi: 50000
          }
        ],
        userSegments: [
          { segment: 'Enterprise Leaders', percentage: 35, growth: 12.5 },
          { segment: 'AI Enthusiasts', percentage: 28, growth: 18.3 },
          { segment: 'Business Owners', percentage: 22, growth: 8.7 },
          { segment: 'Developers', percentage: 15, growth: 25.1 }
        ],
        revenueMetrics: {
          totalRevenue: 2847392,
          monthlyGrowth: 23.7,
          roi: 45000,
          costPerAcquisition: 45.2
        },
        aiInsights: [
          {
            insight: 'Content about AI automation shows 40% higher engagement during business hours',
            impact: 'High',
            recommendation: 'Schedule AI automation content for 9-11 AM and 2-4 PM'
          },
          {
            insight: 'Users spending 5+ minutes on ROI calculators have 85% higher conversion rate',
            impact: 'High',
            recommendation: 'Add more interactive ROI tools and calculators'
          },
          {
            insight: 'Mobile users prefer shorter content (under 5 minutes) with visual elements',
            impact: 'Medium',
            recommendation: 'Create mobile-optimized content with infographics and videos'
          },
          {
            insight: 'Enterprise segment responds best to case studies and implementation guides',
            impact: 'High',
            recommendation: 'Increase case study content by 30% and add implementation timelines'
          }
        ]
      };
      
      setAnalyticsData(mockData);
      setIsLoading(false);
    };

    loadAnalyticsData();
  }, [selectedTimeframe]);

  const generateAIInsights = () => {
    if (!analyticsData) return;
    
    const insights = [
      `🎯 Your top-performing content generates ${analyticsData.topContent[0].roi.toLocaleString()}% ROI`,
      `📈 Engagement rate of ${analyticsData.engagementRate}% is ${analyticsData.engagementRate > 80 ? 'excellent' : 'good'} - ${analyticsData.engagementRate > 80 ? 'maintain this momentum' : 'consider content optimization'}`,
      `💰 Revenue growth of ${analyticsData.revenueMetrics.monthlyGrowth}% indicates strong market demand`,
      `👥 ${analyticsData.userSegments[0].segment} segment shows ${analyticsData.userSegments[0].growth}% growth - focus content strategy here`,
      `⏱️ Average session duration of ${analyticsData.averageSessionDuration} minutes suggests high content quality`
    ];
    
    setAiInsights(insights);
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🤖 AI Analytics Dashboard Loading...
            </h2>
            <p className="text-xl text-gray-600">
              Analyzing your data with advanced AI algorithms
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!analyticsData) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🤖 AI 2025 Advanced Analytics Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powered by machine learning and neural networks, get real-time insights 
            and AI-powered recommendations to optimize your content strategy.
          </p>
          
          <div className="mt-6 flex justify-center space-x-4">
            {['7d', '30d', '90d', '1y'].map(timeframe => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedTimeframe === timeframe
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Visitors</p>
                <p className="text-3xl font-bold text-gray-900">
                  {analyticsData.totalVisitors.toLocaleString()}
                </p>
              </div>
              <div className="text-3xl">👥</div>
            </div>
            <div className="mt-2">
              <span className="text-green-600 text-sm font-medium">+12.5%</span>
              <span className="text-gray-500 text-sm ml-2">vs last period</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Engagement Rate</p>
                <p className="text-3xl font-bold text-gray-900">
                  {analyticsData.engagementRate}%
                </p>
              </div>
              <div className="text-3xl">📊</div>
            </div>
            <div className="mt-2">
              <span className="text-green-600 text-sm font-medium">+5.2%</span>
              <span className="text-gray-500 text-sm ml-2">vs last period</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                <p className="text-3xl font-bold text-gray-900">
                  {analyticsData.conversionRate}%
                </p>
              </div>
              <div className="text-3xl">🎯</div>
            </div>
            <div className="mt-2">
              <span className="text-green-600 text-sm font-medium">+2.1%</span>
              <span className="text-gray-500 text-sm ml-2">vs last period</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Session</p>
                <p className="text-3xl font-bold text-gray-900">
                  {analyticsData.averageSessionDuration}m
                </p>
              </div>
              <div className="text-3xl">⏱️</div>
            </div>
            <div className="mt-2">
              <span className="text-green-600 text-sm font-medium">+1.2m</span>
              <span className="text-gray-500 text-sm ml-2">vs last period</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Top Performing Content */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">🏆 Top Performing Content</h3>
            <div className="space-y-4">
              {analyticsData.topContent.map((content, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">{content.title}</h4>
                    <div className="flex items-center space-x-4 mt-1 text-xs text-gray-600">
                      <span>👀 {content.views.toLocaleString()} views</span>
                      <span>📊 {content.engagement}% engagement</span>
                      <span>💰 {content.roi.toLocaleString()}% ROI</span>
                    </div>
                  </div>
                  <div className="text-2xl">
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Segments */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">👥 User Segments</h3>
            <div className="space-y-4">
              {analyticsData.userSegments.map((segment, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{segment.segment}</span>
                      <span className="text-sm text-gray-600">{segment.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${segment.percentage}%` }}
                      ></div>
                    </div>
                    <div className="mt-1">
                      <span className="text-green-600 text-xs font-medium">+{segment.growth}%</span>
                      <span className="text-gray-500 text-xs ml-2">growth</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue Metrics */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">💰 Revenue Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">
                ${(analyticsData.revenueMetrics.totalRevenue / 1000000).toFixed(1)}M
              </p>
              <p className="text-sm text-gray-600">Total Revenue</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">
                +{analyticsData.revenueMetrics.monthlyGrowth}%
              </p>
              <p className="text-sm text-gray-600">Monthly Growth</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">
                {analyticsData.revenueMetrics.roi.toLocaleString()}%
              </p>
              <p className="text-sm text-gray-600">ROI</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">
                ${analyticsData.revenueMetrics.costPerAcquisition}
              </p>
              <p className="text-sm text-gray-600">Cost Per Acquisition</p>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">🤖 AI-Powered Insights</h3>
            <button
              onClick={generateAIInsights}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Generate New Insights
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {analyticsData.aiInsights.map((insight, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">
                    {insight.impact === 'High' ? '🔥' : insight.impact === 'Medium' ? '⚡' : '💡'}
                  </div>
                  <div>
                    <p className="font-medium mb-2">{insight.insight}</p>
                    <p className="text-sm opacity-90">{insight.recommendation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {aiInsights.length > 0 && (
            <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg">
              <h4 className="font-bold mb-3">🎯 Additional AI Insights:</h4>
              <ul className="space-y-2">
                {aiInsights.map((insight, index) => (
                  <li key={index} className="text-sm">{insight}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AI2025AdvancedAnalyticsDashboard;