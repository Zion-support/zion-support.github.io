import React from 'react';
import { Link } from 'react-router-dom';

const GlobalAITransformationHub = () => {
  const transformationAreas = [
    {
      title: 'Enterprise Automation',
      description: 'Complete business process automation with 95% efficiency gains',
      value: '$2.3B',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500',
      link: '/services/enterprise-automation-transformation'
    },
    {
      title: 'Quantum Consciousness AI',
      description: 'Revolutionary AI consciousness integration with infinite scalability',
      value: '$500B',
      icon: '🧠',
      color: 'from-purple-500 to-violet-500',
      link: '/services/quantum-consciousness-ai-services'
    },
    {
      title: 'Autonomous Operations',
      description: 'Self-managing systems with 99.99% uptime and self-healing capabilities',
      value: '$1.8B',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500',
      link: '/services/autonomous-operations-suite'
    },
    {
      title: 'Meta-Cognitive AI',
      description: 'AI systems that think about their own thinking processes',
      value: '$3.2B',
      icon: '🔮',
      color: 'from-orange-500 to-red-500',
      link: '/services/meta-cognitive-ai-frameworks'
    },
    {
      title: 'Neural Edge Computing',
      description: 'Distributed AI processing at the edge with quantum-classical hybrid systems',
      value: '$4.1B',
      icon: '🌐',
      color: 'from-teal-500 to-blue-500',
      link: '/services/neural-edge-computing'
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced forecasting with 99.97% accuracy in business predictions',
      value: '$2.7B',
      icon: '📊',
      color: 'from-pink-500 to-rose-500',
      link: '/services/predictive-analytics-ai'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Global AI Transformation Hub
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Leading the worldwide transformation of enterprises through revolutionary AI technologies and breakthrough innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformationAreas.map((area, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {area.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-400">{area.value}</div>
                  <div className="text-sm text-blue-200">Market Value</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {area.title}
              </h3>

              <p className="text-blue-100 mb-6 leading-relaxed">
                {area.description}
              </p>

              <Link
                to={area.link}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors group-hover:bg-white/30"
              >
                Explore Solution
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-xl text-blue-200 mb-8">
              Join 500+ Fortune 500 companies already transforming with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalAITransformationHub;