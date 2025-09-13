import React from 'react';
import { Search, Globe, Target, BarChart3 } from 'lucide-react';

const SEOEnhancer = () => {
  const seoFeatures = [
    {
      icon: Search,
      title: "Advanced Keyword Optimization",
      description: "Strategic keyword placement and density optimization",
      impact: "High"
    },
    {
      icon: Globe,
      title: "Meta Tags & Schema",
      description: "Comprehensive meta tags and structured data markup",
      impact: "High"
    },
    {
      icon: Target,
      title: "Content Optimization",
      description: "SEO-optimized content structure and readability",
      impact: "Medium"
    },
    {
      icon: BarChart3,
      title: "Analytics Integration",
      description: "Advanced tracking and performance monitoring",
      impact: "Medium"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Our comprehensive SEO strategy ensures maximum visibility and organic traffic growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoFeatures.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
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
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEOEnhancer;