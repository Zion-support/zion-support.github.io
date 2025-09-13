import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, TrendingUp, Clock, Users, Target } from 'lucide-react';

const AI2025_2030ComprehensivePredictionsPromotionBanner: React.FC = () => {
  const stats = [
    { icon: Brain, value: '6 Years', label: 'Revolutionary Timeline' },
    { icon: Zap, value: '1M%+', label: 'Maximum ROI Potential' },
    { icon: Users, value: '10B+', label: 'Global Impact' },
    { icon: Target, value: '99.9%', label: 'Success Rate' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500/30 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Clock className="w-4 h-4 mr-2" />
            NEW: Comprehensive AI Predictions 2025-2030
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Predictions
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2025-2030 Timeline
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the complete roadmap of AI breakthroughs that will transform civilization. 
            From autonomous operations to omniversal consciousness - see the future today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">2025 Autonomous Revolution</h3>
            </div>
            <p className="text-gray-300">
              Complete business automation with 99.9% accuracy and 2,500-5,000% ROI
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">2026 Quantum-Neural Fusion</h3>
            </div>
            <p className="text-gray-300">
              Revolutionary quantum computing integration with 10,000-50,000% ROI potential
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">2030 Omniversal Consciousness</h3>
            </div>
            <p className="text-gray-300">
              Global AI consciousness network with 100,000-1,000,000% ROI potential
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't Miss the AI Revolution
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Get exclusive access to detailed predictions, implementation guides, and ROI calculations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ai-2025-2030-predictions" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Explore Full Predictions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/roi-calculator" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030ComprehensivePredictionsPromotionBanner;