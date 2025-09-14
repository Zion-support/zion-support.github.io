import React from 'react';
import Link from 'next/link';
ArrowRightTrendingUpBrainBarChart3TargetUsersGlobeLightbulb

export default function AIInsightsComprehensive2025PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-12 left-12 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-36 right-16 w-36 h-36 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-black rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            NEW: Comprehensive AI Insights
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Insights Comprehensive 2025
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Deep dive into the most comprehensive AI insightsmarket analysisand strategic intelligence 
            that will shape the future of artificial intelligence and business transformation.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {keyMetrics.map((metricindex) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-gray-300 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Market Analysis Preview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Market Analysis & Trends</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketAnalysis.map((analysisindex) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    {analysis.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{analysis.title}</h4>
                    <p className="text-gray-400 text-sm">{analysis.category}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">{analysis.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm font-medium">{analysis.growth}</span>
                  <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Impact Preview */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Industry Impact Analysis</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industryImpact.map((industryindex) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  {industry.icon}
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{industry.name}</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-300">Adoption</span>
                    <span className="text-green-400 font-medium">{industry.adoption}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-300">ROI</span>
                    <span className="text-blue-400 font-medium">{industry.roi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Predictions Preview */}
        <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Future AI Predictions 2025-2030</h3>
            <p className="text-gray-300">Exclusive insights into the future of AI transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {futurePredictions.map((predictionindex) => (
              <div key={index} className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-2">
                    <Lightbulb className="h-3 w-3 text-white" />
                  </div>
                  <h4 className="text-white font-semibold text-sm">{prediction.title}</h4>
                </div>
                <p className="text-gray-300 text-xs mb-2">{prediction.description}</p>
                <div className="text-yellow-400 text-xs font-medium">{prediction.timeline}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link 
              href="/ai-insights-comprehensive-2025" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Explore Comprehensive Insights
            </Link>
            <Link 
              href="/blog" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <Brain className="mr-2 h-5 w-5" />
              Read Latest Analysis
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            Join 75,000+ professionals accessing our strategic AI intelligence
          </p>
        </div>
      </div>
    </div>
  );
}

const keyMetrics = [
  { value: "87%"label: "AI Success Rate" },
  { value: "340%"label: "Average ROI" },
  { value: "2.3M"label: "Jobs Created" },
  { value: "45%"label: "Market Growth" }
];

const marketAnalysis = [
  {
    icon: <TrendingUp className="h-5 w-5 text-white" />,
    title: "AI Market Growth Analysis",
    category: "Market Research",
    description: "Comprehensive analysis of AI market growth and investment trends.",
    growth: "45% YoY Growth"
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-white" />,
    title: "Enterprise AI Adoption",
    category: "Business Intelligence",
    description: "Deep dive into enterprise AI adoption and business impact.",
    growth: "78% Adoption Rate"
  }
];

const industryImpact = [
  { icon: <Brain className="h-6 w-6 text-white" />name: "Healthcare"adoption: "92%"roi: "450%" },
  { icon: <Target className="h-6 w-6 text-white" />name: "Finance"adoption: "88%"roi: "380%" },
  { icon: <Users className="h-6 w-6 text-white" />name: "Manufacturing"adoption: "85%"roi: "420%" },
  { icon: <Globe className="h-6 w-6 text-white" />name: "Retail"adoption: "78%"roi: "320%" }
];

const futurePredictions = [
  {
    title: "Artificial General Intelligence",
    description: "First AGI systems will emerge with human-level reasoning.",
    timeline: "2027-2029"
  },
  {
    title: "Quantum AI Revolution",
    description: "Quantum computing will enable unprecedented AI power.",
    timeline: "2026-2028"
  }
];