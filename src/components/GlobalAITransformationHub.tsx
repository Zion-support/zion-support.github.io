import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Brain, Zap, Shield, ArrowRight } from 'lucide-react';

const GlobalAITransformationHub: React.FC = () => {
  const transformationAreas = [
    {
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development and implementation consulting.',
      icon: <Brain className="w-8 h-8" />,
      link: '/services/ai-strategy',
      color: 'from-blue-500 to-purple-600',
      value: '500+'
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms for business optimization.',
      icon: <Zap className="w-8 h-8" />,
      link: '/services/ml-solutions',
      color: 'from-green-500 to-teal-600',
      value: '300+'
    },
    {
      title: 'Data Analytics & Insights',
      description: 'Advanced analytics and data-driven decision making tools.',
      icon: <Target className="w-8 h-8" />,
      link: '/services/data-analytics',
      color: 'from-orange-500 to-red-600',
      value: '200+'
    },
    {
      title: 'AI Security & Compliance',
      description: 'Secure AI implementations with full compliance and governance.',
      icon: <Shield className="w-8 h-8" />,
      link: '/services/ai-security',
      color: 'from-purple-500 to-pink-600',
      value: '150+'
    }
  ];

  const successMetrics = [
    { metric: '500+', label: 'AI Projects Delivered' },
    { metric: '98%', label: 'Client Satisfaction' },
    { metric: '300%', label: 'Average ROI' },
    { metric: '50+', label: 'Countries Served' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Transforming Business Operations Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the global AI transformation with cutting-edge solutions that drive innovation, efficiency, and growth across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {transformationAreas.map((area, index) => (
            <Link
              key={index}
              to={area.link}
              className={`bg-gradient-to-br ${area.color} rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl group`}
            >
              <div className="mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                {area.title}
              </h3>
              <p className="text-sm mb-4 opacity-90">{area.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold bg-white/20 px-3 py-1 rounded-full">
                  {area.value}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {successMetrics.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
              <div className="text-sm text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Start Your AI Transformation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GlobalAITransformationHub;