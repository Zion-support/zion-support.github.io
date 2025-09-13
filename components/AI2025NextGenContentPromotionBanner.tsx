import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Rocket, Star } from 'lucide-react';

const AI2025NextGenContentPromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-black" />
              <span className="text-black font-bold">NEW 2025 CONTENT</span>
              <Star className="w-5 h-5 text-black" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Next-Gen AI Content Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover breakthrough AI solutions, quantum computing insights, and revolutionary automation technologies that are reshaping industries worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Brain className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Neural Networks</h3>
              <p className="text-gray-300">Advanced AI architectures with 99.97% accuracy</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Quantum Processing</h3>
              <p className="text-gray-300">50,000x faster computation capabilities</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Auto Automation</h3>
              <p className="text-gray-300">Self-managing systems with zero downtime</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ai-2025-next-gen-solutions" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Next-Gen Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-2025-case-studies" 
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-white/30 flex items-center justify-center"
            >
              View Success Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>Join 10,000+ companies already transforming their operations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025NextGenContentPromotionBanner;