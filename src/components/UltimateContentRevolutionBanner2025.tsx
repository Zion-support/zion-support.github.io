import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const UltimateContentRevolutionBanner2025 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 mb-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold mb-4">
              <Star className="w-4 h-4 mr-2" />
              Revolutionary Content Platform
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI 2025: Ultimate Content Revolution
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Transform your business with our revolutionary AI content platform that's generating 
              <span className="text-yellow-400 font-bold"> 50,000% ROI</span> for enterprises worldwide.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm text-gray-300">
                <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                Lightning-Fast Generation
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Target className="w-4 h-4 text-yellow-400 mr-2" />
                Precision Targeting
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <TrendingUp className="w-4 h-4 text-yellow-400 mr-2" />
                50,000% ROI
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/ai-2025-ultimate-content-revolution"
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:shadow-2xl transition-all duration-300"
              >
                Explore Revolution
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50,000%</div>
                <div className="text-gray-300 text-sm">Average ROI</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">10M+</div>
                <div className="text-gray-300 text-sm">Content Pieces</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Enterprise Clients</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentRevolutionBanner2025;