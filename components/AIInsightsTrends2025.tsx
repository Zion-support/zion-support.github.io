import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Brain, Zap, Target, BarChart3, Users, Globe, Shield } from 'lucide-react';

const AIInsightsTrends2025: React.FC = () => {
  const insights = [
    {
      id: 1,
      title: "AI Adoption Surges 400% in Enterprise",
      description: "Companies implementing AI solutions report unprecedented growth in efficiency and ROI.",
      icon: TrendingUp,
      stats: "400% increase",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      description: "Error-corrected quantum computers achieve 99.9% accuracy in real-world applications.",
      icon: Brain,
      stats: "99.9% accuracy",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Autonomous Operations Revolution",
      description: "AI-powered systems now handle 85% of routine business operations autonomously.",
      icon: Zap,
      stats: "85% automation",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "ROI Reaches 2,500% Average",
      description: "Organizations report average ROI of 2,500% within first year of AI implementation.",
      icon: Target,
      stats: "2,500% ROI",
      color: "from-orange-500 to-red-500"
    }
  ];

  const trends = [
    {
      category: "Machine Learning",
      trend: "Neural Architecture Search",
      impact: "High",
      description: "Automated model design reduces development time by 90%"
    },
    {
      category: "Quantum AI",
      trend: "Quantum Machine Learning",
      impact: "Revolutionary",
      description: "Quantum algorithms solve complex problems 10,000x faster"
    },
    {
      category: "Edge Computing",
      trend: "AI at the Edge",
      impact: "Critical",
      description: "Real-time AI processing enables instant decision making"
    },
    {
      category: "Ethics & Safety",
      trend: "Responsible AI",
      impact: "Essential",
      description: "New frameworks ensure AI systems are safe and fair"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Insights & Trends 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs, market insights, and revolutionary trends shaping the future of artificial intelligence
          </p>
        </div>

        {/* Key Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {insights.map((insight) => (
            <div key={insight.id} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${insight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <insight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {insight.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {insight.description}
                </p>
                <div className="text-2xl font-bold text-white">
                  {insight.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trends Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Emerging Technology Trends
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trends.map((trend, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-400 bg-blue-400/20 px-3 py-1 rounded-full">
                    {trend.category}
                  </span>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    trend.impact === 'Revolutionary' ? 'text-purple-400 bg-purple-400/20' :
                    trend.impact === 'High' ? 'text-green-400 bg-green-400/20' :
                    trend.impact === 'Critical' ? 'text-red-400 bg-red-400/20' :
                    'text-yellow-400 bg-yellow-400/20'
                  }`}>
                    {trend.impact}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {trend.trend}
                </h4>
                <p className="text-gray-300">
                  {trend.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the AI Revolution
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our latest AI insights, trend reports, and implementation guides. 
              Join thousands of forward-thinking organizations already transforming their future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ai-insights" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore AI Insights
              </Link>
              <Link 
                to="/trend-reports" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Download Trend Reports
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInsightsTrends2025;