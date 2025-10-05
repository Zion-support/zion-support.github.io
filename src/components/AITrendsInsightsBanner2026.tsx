import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, Brain, ArrowRight } from 'lucide-react';

const AITrendsInsightsBanner2026: React.FC = () => {
<<<<<<< HEAD
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            AI Trends & Insights 2026
          </h2>
          <p className="text-xl mb-8">
            Discover the latest AI innovations and breakthrough technologies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Autonomous Systems</h3>
              <p className="text-sm opacity-90">
                Self-managing AI systems that operate independently
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
              <p className="text-sm opacity-90">
                Next-generation computing power for AI applications
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Neural Networks</h3>
              <p className="text-sm opacity-90">
                Advanced machine learning architectures
              </p>
            </div>
=======
  const trends = [
    {
      title: 'AI-Powered Analytics',
      description: 'Real-time insights that drive business decisions',
      icon: BarChart3
    },
    {
      title: 'Machine Learning Trends',
      description: 'Stay ahead with the latest ML innovations',
      icon: Brain
    },
    {
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights',
      icon: TrendingUp
    }
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Trends & Insights 2026
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Discover the latest trends and insights shaping the future of artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {trends.map((trend, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <trend.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {trend.title}
                </h3>
                <p className="text-indigo-100">
                  {trend.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore AI Insights
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
>>>>>>> c2a466a0506dfb1ef7b624c2d9f0729509d2d8ce
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrendsInsightsBanner2026;