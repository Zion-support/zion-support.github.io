"use client";
import React, { useState, useEffect } from 'react';
BarChart3TrendingUpUsersEyeClockStarShare2BookOpen

const ContentAnalyticsDashboard = () => {
  const [analyticsetAnalytics] = useState({
    totalViews: 0,
    engagementRate: 0,
    averageReadTime: 0,
    topContent: [],
    userGrowth: 0,
    socialShares: 0
  });

  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    // Simulate analytics data loading
    const loadAnalytics = () => {
      setAnalytics({
        totalViews: 1250000 + Math.floor(Math.random() * 100000),
        engagementRate: 85 + Math.floor(Math.random() * 10),
        averageReadTime: 4.2 + Math.random() * 1.5,
        topContent: [
          { title: "AI 2025 Revolutionary Automation"views: 45000engagement: 92 },
          { title: "Quantum Computing Breakthroughs"views: 38000engagement: 88 },
          { title: "Fortune 500 Success Stories"views: 32000engagement: 95 },
          { title: "Neural Interface Revolution"views: 28000engagement: 87 },
          { title: "Edge Computing Solutions"views: 25000engagement: 90 }
        ],
        userGrowth: 45 + Math.floor(Math.random() * 15),
        socialShares: 12500 + Math.floor(Math.random() * 5000)
      });
    };

    loadAnalytics();
    setIsVisible(true);
    
    // Update analytics every 30 seconds
    const interval = setInterval(loadAnalytics30000);
    return () => clearInterval(interval);
  }[]);

  const metrics = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Total Views",
      value: analytics.totalViews.toLocaleString(),
      change: "+12.5%",
      color: "text-blue-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Engagement Rate",
      value: `${analytics.engagementRate}%`,
      change: "+8.2%",
      color: "text-green-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Avg. Read Time",
      value: `${analytics.averageReadTime.toFixed(1)} min`,
      change: "+15.3%",
      color: "text-purple-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Growth",
      value: `+${analytics.userGrowth}%`,
      change: "This month",
      color: "text-orange-600"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Shares",
      value: analytics.socialShares.toLocaleString(),
      change: "+22.1%",
      color: "text-pink-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Content Rating",
      value: "4.9/5",
      change: "+0.3",
      color: "text-yellow-600"
    }
  ];

  return (
    <div className={`py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <BarChart3 className="w-10 h-10 mr-3 text-blue-400" />
            Content Performance Analytics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time insights into content performanceuser engagementand growth metrics
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metricindex) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${metric.color} p-3 rounded-lg bg-gray-700/50`}>
                  {metric.icon}
                </div>
                <span className="text-sm text-green-400 font-medium">
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
              <p className="text-gray-400 text-sm">{metric.title}</p>
            </div>
          ))}
        </div>

        {/* Top Content Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-blue-400" />
            Top Performing Content
          </h3>
          
          <div className="space-y-4">
            {analytics.topContent.map((contentindex) => (
              <div
                key={index}
                className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {content.title}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {content.views.toLocaleString()} views
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {content.engagement}% engagement
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">
                      #{index + 1}
                    </div>
                    <div className="text-sm text-gray-400">Rank</div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Engagement</span>
                    <span>{content.engagement}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${content.engagement}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Updates Indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-green-400">Live Analytics • Updated every 30 seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAnalyticsDashboard;