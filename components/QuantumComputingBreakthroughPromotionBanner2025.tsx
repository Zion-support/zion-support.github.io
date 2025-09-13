import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Zap, Shield, Target, TrendingUp, Clock, Star } from 'lucide-react';

const QuantumComputingBreakthroughPromotionBanner2025: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-purple-600/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 mb-6">
            <Atom className="w-5 h-5 text-cyan-300 mr-2" />
            <span className="text-white font-semibold">BREAKTHROUGH: Quantum Computing 2025</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Breakthroughs 2025
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Revolutionary quantum processors that outperform classical computers by 100 million times, 
            unlocking unprecedented computational power for every industry
          </p>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center bg-white/20 backdrop-blur-lg rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-cyan-300 mr-2" />
              <span className="text-white font-semibold">100Mx Performance</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-lg rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-cyan-300 mr-2" />
              <span className="text-white font-semibold">Unbreakable Security</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-lg rounded-full px-4 py-2">
              <Target className="w-5 h-5 text-cyan-300 mr-2" />
              <span className="text-white font-semibold">Perfect Optimization</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-lg rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-cyan-300 mr-2" />
              <span className="text-white font-semibold">Light Speed Processing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quantum-computing-breakthroughs-2025"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              Explore Breakthroughs
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/quantum-implementation-guide"
              className="bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center group border border-white/30"
            >
              Get Implementation Guide
              <TrendingUp className="w-6 h-6 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-white/80 text-sm">
            <p>Transform your business with quantum-powered solutions delivering unprecedented results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingBreakthroughPromotionBanner2025;