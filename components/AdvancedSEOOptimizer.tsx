import React from 'react';
SearchGlobeTargetBarChart3EyeZapShieldTrendingUp

const AdvancedSEOOptimizer = () => {
  const seoFeatures = [
    {
      icon: Search,
      title: "Advanced Keyword Optimization",
      description: "Strategic keyword placement and density optimization for maximum search visibility",
      impact: "High",
      status: "active"
    },
    {
      icon: Globe,
      title: "Meta Tags & Schema",
      description: "Comprehensive meta tags and structured data markup for better search understanding",
      impact: "High",
      status: "active"
    },
    {
      icon: Target,
      title: "Content Optimization",
      description: "SEO-optimized content structure and readability for improved rankings",
      impact: "Medium",
      status: "active"
    },
    {
      icon: BarChart3,
      title: "Analytics Integration",
      description: "Advanced tracking and performance monitoring for data-driven optimization",
      impact: "Medium",
      status: "active"
    },
    {
      icon: Eye,
      title: "User Experience",
      description: "Optimized user experience signals that directly impact search rankings",
      impact: "High",
      status: "active"
    },
    {
      icon: Zap,
      title: "Page Speed",
      description: "Lightning-fast loading times that boost search engine rankings",
      impact: "High",
      status: "active"
    }
  ];

  const seoMetrics = [
    { label: "Organic Traffic"value: "+150%"color: "text-green-400" },
    { label: "Search Rankings"value: "Top 3"color: "text-blue-400" },
    { label: "Click-Through Rate"value: "+85%"color: "text-purple-400" },
    { label: "Page Authority"value: "95/100"color: "text-yellow-400" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium mb-6">
            <Search className="w-4 h-4 mr-2" />
            Advanced SEO Optimization
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dominate Search
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Rankings</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive SEO strategy ensures maximum visibility and organic traffic growth through advanced optimization techniques
          </p>
        </div>

        {/* SEO Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {seoMetrics.map((metricindex) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className={`text-3xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
              <div className="text-white font-semibold mb-1">{metric.label}</div>
              <div className="text-gray-300 text-sm">Improvement</div>
            </div>
          ))}
        </div>

        {/* SEO Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {seoFeatures.map((featureindex) => (
            <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  feature.impact === 'High' ? 'bg-red-500' : 'bg-yellow-500'
                } text-white`}>
                  {feature.impact} Impact
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4">
                {feature.description}
              </p>
              
              <div className="flex items-center text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                {feature.status === 'active' ? 'Active' : 'Inactive'}
              </div>
            </div>
          ))}
        </div>

        {/* SEO Benefits */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">SEO Benefits</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Search Visibility</h4>
              <p className="text-gray-300 text-sm">Enhanced visibility in search results</p>
            </div>
            
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Traffic Growth</h4>
              <p className="text-gray-300 text-sm">Significant increase in organic traffic</p>
            </div>
            
            <div className="text-center">
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Targeted Audience</h4>
              <p className="text-gray-300 text-sm">Reach the right audience at the right time</p>
            </div>
            
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Analytics</h4>
              <p className="text-gray-300 text-sm">Comprehensive performance tracking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSEOOptimizer;