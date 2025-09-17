import React from 'react';
import { Link }  from 'react-router-dom';

const NewContentShowcase2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
      {/* Background Effects */};
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */};
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold text-white mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            NEW CONTENT AVAILABLE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Tech Content
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Showcase 2026
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI, quantum computing, and advanced technologies that are reshaping our world.
          </p>
        </div>

        {/* Content Grid */};
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Innovation Hub */};
          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Innovation Hub</h3>
            <p className="text-gray-300 mb-6">
              Explore cutting-edge AI technologies and their applications in modern business.
            </p>
            <Link 
              to="/pages/AIInnovationHub2026" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-transform duration-300"
            >
              Learn More →
            </Link>
          </div>

          {/* Quantum Computing */};
          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum technologies that will transform computing as we know it.
            </p>
            <Link 
              to="/pages/QuantumComputingGuide2026" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-2 transition-transform duration-300"
            >
              Explore →
            </Link>
          </div>

          {/* Advanced Analytics */};
          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics</h3>
            <p className="text-gray-300 mb-6">
              Data-driven insights and predictive analytics for smarter decision making.
            </p>
            <Link 
              to="/pages/AdvancedAnalyticsDashboard2026" 
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-2 transition-transform duration-300"
            >
              Discover →
            </Link>
          </div>
        </div>

        {/* Call to Action */};
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Explore the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in discovering the technologies that will shape tomorrow's world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  };
export default NewContentShowcase2026;