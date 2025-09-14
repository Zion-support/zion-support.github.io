import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Award, Star } from 'lucide-react';

const RevolutionaryAI2025BreakthroughBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Revolutionary Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Zap className="w-4 h-4 mr-2" />
            🚀 REVOLUTIONARY AI 2025 BREAKTHROUGH
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent leading-tight">
            Autonomous Enterprise Revolution
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Discover the <span className="text-yellow-400 font-bold">Revolutionary AI Breakthrough</span> that's transforming enterprises with 
            <span className="text-orange-400 font-bold"> 847% ROI</span> and <span className="text-red-400 font-bold">$2.3B Revenue Increases</span>
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">847%</div>
              <div className="text-sm text-gray-200">Average ROI Increase</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-orange-400 mb-2">$2.3B</div>
              <div className="text-sm text-gray-200">Revenue Increase</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-red-400 mb-2">92%</div>
              <div className="text-sm text-gray-200">Error Reduction</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-green-400 mb-2">156%</div>
              <div className="text-sm text-gray-200">Efficiency Gain</div>
            </div>
          </div>

          {/* Revolutionary Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <TrendingUp className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-lg font-bold">Autonomous Decision-Making</h3>
              </div>
              <p className="text-gray-200 text-sm">
                AI systems making complex business decisions with human-level reasoning and superhuman speed
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Award className="w-6 h-6 text-orange-400 mr-2" />
                <h3 className="text-lg font-bold">Quantum-Enhanced AI</h3>
              </div>
              <p className="text-gray-200 text-sm">
                Revolutionary neural architectures leveraging quantum computing for exponential processing power
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Star className="w-6 h-6 text-red-400 mr-2" />
                <h3 className="text-lg font-bold">Self-Optimizing Systems</h3>
              </div>
              <p className="text-gray-200 text-sm">
                AI that continuously improves its own performance without human intervention
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-revolutionary-autonomous-enterprise-breakthrough-ultimate-guide"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center">
                Read the Revolutionary Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
            
            <Link
              href="/case-studies/ai-2025-revolutionary-autonomous-enterprise-transformation-ultimate-success"
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center">
                View Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
          </div>

          {/* Urgency Message */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <div className="animate-pulse bg-white rounded-full p-2 mr-3">
                <Zap className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Limited Time: Revolutionary Access</h3>
            </div>
            <p className="text-gray-100 text-lg">
              Join the <span className="font-bold text-yellow-300">Fortune 500 companies</span> already achieving unprecedented success with our revolutionary AI breakthrough. 
              <span className="font-bold text-orange-300"> Don't get left behind</span> in the autonomous enterprise revolution.
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-10 text-center">
            <p className="text-gray-300 text-sm mb-4">Trusted by Fortune 500 leaders worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">Fortune 500</div>
              <div className="text-2xl font-bold">Global Enterprises</div>
              <div className="text-2xl font-bold">Tech Leaders</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements animation */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 bg-opacity-20 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-orange-400 bg-opacity-20 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-red-400 bg-opacity-20 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 bg-opacity-20 rounded-full animate-bounce delay-2000"></div>
    </div>
  );
};

export default RevolutionaryAI2025BreakthroughBanner;