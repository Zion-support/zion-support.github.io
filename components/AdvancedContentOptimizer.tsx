"use client";
import React, { useState, useEffect } from 'react';
SearchTrendingUpUsersClockStarTargetBarChart3Zap

const AdvancedContentOptimizer = () => {
  const [contentMetricsetContentMetrics] = useState({
    engagement: 0,
    readability: 0,
    seoScore: 0,
    conversionRate: 0
  });

  const [optimizationsetOptimizations] = useState([
    {
      id: 'headline-optimization',
      name: 'Headline Optimization',
      description: 'Craft compelling headlines that drive engagement',
      impact: 'High',
      status: 'active',
      icon: Target,
      metrics: { before: 2.1after: 4.7unit: 'CTR%' }
    },
    {
      id: 'content-structure',
      name: 'Content Structure',
      description: 'Optimize content hierarchy and readability',
      impact: 'High',
      status: 'active',
      icon: BarChart3,
      metrics: { before: 6.2after: 8.9unit: 'Readability' }
    },
    {
      id: 'keyword-optimization',
      name: 'Keyword Optimization',
      description: 'Strategic keyword placement and density',
      impact: 'Medium',
      status: 'active',
      icon: Search,
      metrics: { before: 65after: 89unit: 'SEO Score' }
    },
    {
      id: 'visual-optimization',
      name: 'Visual Optimization',
      description: 'Optimize images and visual elements',
      impact: 'Medium',
      status: 'active',
      icon: Zap,
      metrics: { before: 3.2after: 4.8unit: 'Engagement' }
    },
    {
      id: 'conversion-optimization',
      name: 'Conversion Optimization',
      description: 'Optimize for user actions and conversions',
      impact: 'High',
      status: 'active',
      icon: TrendingUp,
      metrics: { before: 2.3after: 5.1unit: 'Conversion%' }
    },
    {
      id: 'user-experience',
      name: 'User Experience',
      description: 'Enhance overall user experience and flow',
      impact: 'High',
      status: 'active',
      icon: Users,
      metrics: { before: 7.1after: 9.2unit: 'UX Score' }
    }
  ]);

  useEffect(() => {
    // Simulate content metrics collection
    const collectMetrics = () => {
      setContentMetrics({
        engagement: 87,
        readability: 92,
        seoScore: 89,
        conversionRate: 5.1
      });
    };

    collectMetrics();
  }[]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Advanced Content Optimization
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Content That
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Converts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our advanced content optimization techniques ensure your content engages users
            drives conversionsand delivers measurable results.
          </p>
        </div>

        {/* Content Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">{contentMetrics.engagement}%</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Engagement</h3>
            <p className="text-gray-300 text-sm">User interaction rate</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">{contentMetrics.readability}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Readability</h3>
            <p className="text-gray-300 text-sm">Content clarity score</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Search className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-white">{contentMetrics.seoScore}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">SEO Score</h3>
            <p className="text-gray-300 text-sm">Search optimization</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">{contentMetrics.conversionRate}%</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Conversion</h3>
            <p className="text-gray-300 text-sm">Action completion rate</p>
          </div>
        </div>

        {/* Optimizations */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Content Optimizations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizations.map((optimization) => (
              <div key={optimization.id} className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                    <optimization.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    optimization.impact === 'High' ? 'bg-red-500' :
                    optimization.impact === 'Medium' ? 'bg-yellow-500' :
                    'bg-green-500'
                  } text-white`}>
                    {optimization.impact} Impact
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {optimization.name}
                </h4>
                
                <p className="text-gray-300 text-sm mb-4">
                  {optimization.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-400">
                    Before: {optimization.metrics.before}{optimization.metrics.unit}
                  </div>
                  <div className="text-green-400 font-semibold">
                    After: {optimization.metrics.after}{optimization.metrics.unit}
                  </div>
                </div>

                <div className="mt-2 flex items-center text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  {optimization.status === 'active' ? 'Active' : 'Inactive'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Performance */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Content Performance</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">3.2x</div>
              <div className="text-white font-semibold mb-2">Higher Engagement</div>
              <div className="text-gray-300 text-sm">Compared to unoptimized content</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">2.1x</div>
              <div className="text-white font-semibold mb-2">Better Conversion</div>
              <div className="text-gray-300 text-sm">Optimized content performance</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">45%</div>
              <div className="text-white font-semibold mb-2">Faster Loading</div>
              <div className="text-gray-300 text-sm">Optimized content delivery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedContentOptimizer;