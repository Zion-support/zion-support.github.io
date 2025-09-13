import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Globe, Shield, Cpu } from 'lucide-react';

const AI2025_2030ComprehensivePredictionsPromotionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            🚀 AI 2025-2030: Comprehensive Future Predictions
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore the complete roadmap of AI evolution from 2025 to 2030, featuring breakthrough technologies, 
            revolutionary capabilities, and unprecedented business transformation opportunities.
          </p>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-semibold text-lg">
              ⚡ Revolutionary Breakthroughs
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold text-lg">
              🧠 Quantum-Neural Fusion
            </span>
            <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-full font-semibold text-lg">
              🎯 1,000,000% ROI Potential
            </span>
          </div>

          {/* Technology Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">Neural Intelligence</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Quantum Computing</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Lightning Speed</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">Unbreakable Security</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2025-2030-predictions"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all hover:from-yellow-500 hover:to-orange-600 hover:scale-105 flex items-center justify-center group"
            >
              Explore AI 2025-2030 Predictions
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
              Join thousands of companies already achieving unprecedented success with our revolutionary AI solutions
            </p>
            <div className="flex justify-center items-center mt-4 space-x-8 text-gray-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">15,000%</div>
                <div className="text-xs">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">99.9%</div>
                <div className="text-xs">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">10,000x</div>
                <div className="text-xs">Faster Processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030ComprehensivePredictionsPromotionBanner;