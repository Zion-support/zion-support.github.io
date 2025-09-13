import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Shield, Globe, Brain, Target, TrendingUp } from 'lucide-react';

const QuantumComputingBreakthroughPromotionBanner2025: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ⚡ Quantum Computing Breakthroughs 2025
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the future of computing with revolutionary quantum breakthroughs that deliver 
            unprecedented processing power, security, and intelligence capabilities.
          </p>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold text-lg">
              ⚡ 50,000x Faster Processing
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-lg">
              🛡️ Unbreakable Security
            </span>
            <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-full font-semibold text-lg">
              🎯 99.97% Accuracy
            </span>
          </div>

          {/* Technology Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Quantum Processors</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">Neural Integration</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">Quantum Security</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">Global Network</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quantum-computing-solutions"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:from-blue-600 hover:to-cyan-600 hover:scale-105 flex items-center justify-center group"
            >
              Explore Quantum Solutions
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:from-purple-700 hover:to-pink-700 hover:scale-105 flex items-center justify-center group"
            >
              View Success Stories
              <TrendingUp className="w-6 h-6 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Join the quantum computing revolution and transform your business with unprecedented processing power
            </p>
            <div className="flex justify-center items-center mt-4 space-x-8 text-gray-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">50,000x</div>
                <div className="text-xs">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">99.97%</div>
                <div className="text-xs">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-xs">Security</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingBreakthroughPromotionBanner2025;