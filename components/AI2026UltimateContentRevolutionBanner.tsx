import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Brain, Rocket } from 'lucide-react';

const AI2026UltimateContentRevolutionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-ping"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI 2026 Ultimate Content Revolution
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Ultimate AI Content Revolution
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              is Here in 2026
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the most comprehensive collection of AI breakthroughs, quantum computing innovations, 
            and revolutionary automation solutions that will transform your business in 2026 and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI Breakthroughs</h3>
            <p className="text-gray-300 text-sm">Revolutionary AI technologies and implementations</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
            <p className="text-gray-300 text-sm">Next-generation quantum solutions and applications</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Automation</h3>
            <p className="text-gray-300 text-sm">Advanced automation and autonomous systems</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Future Tech</h3>
            <p className="text-gray-300 text-sm">Cutting-edge technologies and predictions</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2026-ultimate-content-revolution"
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Ultimate Content
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/ai-2026-content-showcase"
              className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 border border-white/30"
            >
              View All Content
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            Join 50,000+ professionals already transforming their businesses with our content
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2026UltimateContentRevolutionBanner;