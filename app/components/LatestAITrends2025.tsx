import React from 'react';
import Link from 'next/link';

const LatestAITrends2025: React.FC = () => {
  const trends = [
    {
      title: "Generative AI Revolution",
      description: "Transform content creation with advanced AI models that generate text, images, and code automatically.",
      icon: "🎨",
      stats: "500% increase in productivity",
      link: "/ai-2025/generative-ai-revolution"
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing workflows that optimize operations 24/7 without human intervention.",
      icon: "🤖",
      stats: "90% reduction in manual tasks",
      link: "/ai-2025/autonomous-systems"
    },
    {
      title: "Quantum-Neural Computing",
      description: "Next-generation computing that combines quantum mechanics with neural networks.",
      icon: "⚛️",
      stats: "1000x faster processing",
      link: "/ai-2025/quantum-neural"
    },
    {
      title: "Predictive Analytics 2.0",
      description: "Advanced forecasting that predicts market trends, customer behavior, and business outcomes.",
      icon: "📊",
      stats: "95% accuracy rate",
      link: "/ai-2025/predictive-analytics"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 2025 TRENDS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest AI Trends Revolutionizing Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the cutting-edge AI technologies that are transforming industries and driving unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trends.map((trend, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {trend.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {trend.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {trend.description}
                </p>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-3 mb-4">
                  <span className="text-sm font-semibold text-green-800">{trend.stats}</span>
                </div>
                <Link 
                  href={trend.link}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Explore Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/ai-2025"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All AI Trends 2025
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestAITrends2025;