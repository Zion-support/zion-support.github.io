import React from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryAdBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center text-white">
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
            🚀 NEW IN 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Tech Insights & Case Studies
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto text-gray-300">
            Discover the latest breakthroughs in AI consciousness, quantum computing, neural interfaces, 
            and more. See how leading organizations are transforming their industries with our cutting-edge solutions.
          </p>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Consciousness</h3>
              <p className="text-gray-300 text-sm mb-4">Explore the evolution of artificial consciousness and its implications</p>
              <Link 
                to="/pages/RevolutionaryTechInsights2026" 
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Revolution</h3>
              <p className="text-gray-300 text-sm mb-4">Discover quantum computing breakthroughs and real-world applications</p>
              <Link 
                to="/pages/NextGenInnovationHub2026" 
                className="text-purple-400 hover:text-purple-300 font-semibold text-sm"
              >
                Explore →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Success Stories</h3>
              <p className="text-gray-300 text-sm mb-4">See how companies achieved 300%+ improvements with our solutions</p>
              <Link 
                to="/pages/RevolutionaryCaseStudies2026" 
                className="text-green-400 hover:text-green-300 font-semibold text-sm"
              >
                View Cases →
              </Link>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/pages/RevolutionaryTechInsights2026" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg w-full sm:w-auto"
            >
              Explore Tech Insights
            </Link>
            <Link 
              to="/pages/RevolutionaryCaseStudies2026" 
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold text-lg w-full sm:w-auto"
            >
              View Case Studies
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 font-semibold text-lg w-full sm:w-auto"
            >
              Get Started
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">500+</div>
              <div className="text-gray-300 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">$2B+</div>
              <div className="text-gray-300 text-sm">Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">99%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2026;
