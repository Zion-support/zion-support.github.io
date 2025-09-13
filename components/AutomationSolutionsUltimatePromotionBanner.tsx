import React from 'react';
import { Link } from 'react-router-dom';

const AutomationSolutionsUltimatePromotionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Automation Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-20 w-24 h-24 bg-emerald-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-36 right-28 w-20 h-20 bg-teal-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-28 left-1/4 w-16 h-16 bg-cyan-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-36 right-1/3 w-32 h-32 bg-emerald-500/10 rounded-full animate-pulse delay-3000"></div>
        
        {/* Automation Grid Patterns */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-emerald-400 font-medium text-sm">🤖 ULTIMATE AUTOMATION</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Automation Solutions Ultimate Showcase
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Beyond Human Limits
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced automation solutions that will revolutionize how we work, live, and interact 
            with technology. From autonomous AI agents to omniversal automation systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/automation-solutions"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Automation Solutions
            </Link>
            <Link
              to="/automation-solutions/demo"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20"
            >
              Live Demo
            </Link>
          </div>

          {/* Automation Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous AI Agents</h3>
              <p className="text-gray-300 text-sm">Self-managing intelligent systems</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Automation</h3>
              <p className="text-gray-300 text-sm">Quantum-powered optimization</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Neural Networks</h3>
              <p className="text-gray-300 text-sm">Brain-inspired automation</p>
            </div>
          </div>

          {/* Automation Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">95%</div>
              <div className="text-gray-400 text-sm">Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">24/7</div>
              <div className="text-gray-400 text-sm">Continuous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">99.9%</div>
              <div className="text-gray-400 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">∞</div>
              <div className="text-gray-400 text-sm">Scalability</div>
            </div>
          </div>

          {/* Industry Applications */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl mb-2">🏭</div>
              <div className="text-white font-medium">Manufacturing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl mb-2">🏥</div>
              <div className="text-white font-medium">Healthcare</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl mb-2">🚗</div>
              <div className="text-white font-medium">Transportation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl mb-2">🏦</div>
              <div className="text-white font-medium">Finance</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl mb-2">🌱</div>
              <div className="text-white font-medium">Agriculture</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl mb-2">🏠</div>
              <div className="text-white font-medium">Smart Homes</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-lg text-gray-300 mb-4">
              <strong className="text-white">Exclusive Access:</strong> Get early access to our automation solutions research and implementation guides
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/automation-solutions/subscribe"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Subscribe for Updates
              </Link>
              <Link
                to="/automation-solutions/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                Contact Automation Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSolutionsUltimatePromotionBanner;