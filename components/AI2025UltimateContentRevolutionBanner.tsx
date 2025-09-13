import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, TrendingUp, Users, Award } from 'lucide-react';

const AI2025UltimateContentRevolutionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                AI 2025 Ultimate Content Revolution
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the most comprehensive AI content ecosystem ever created. 
              Revolutionary breakthroughs, quantum computing solutions, and autonomous systems 
              that deliver unprecedented ROI and transformation.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Revolutionary AI</h3>
              <p className="text-gray-300 text-sm">
                Next-generation AI systems with 99.9% accuracy and 10,000x faster processing
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum Computing</h3>
              <p className="text-gray-300 text-sm">
                Breakthrough quantum solutions for complex problem-solving and optimization
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Massive ROI</h3>
              <p className="text-gray-300 text-sm">
                Proven results with 2,500-5,000% ROI and exponential business growth
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">5,000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Autonomous Operation</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/ai-2025-ultimate-content-revolution"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            >
              Explore Ultimate Content
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/roi-calculator"
              className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center gap-2"
            >
              Calculate Your ROI
              <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-sm">50,000+ Satisfied Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Industry Leading Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="text-sm">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateContentRevolutionBanner;