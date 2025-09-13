import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Cpu, Sparkles, TrendingUp } from 'lucide-react';

const AI2025_2030UltimateBreakthroughContentBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-cyan-500/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">2025-2030 ULTIMATE BREAKTHROUGH</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolution 2025-2030
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI breakthroughs, quantum computing innovations, 
            and autonomous systems that will reshape the future of technology and business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/ai-2025-2030-ultimate-content-revolution" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Ultimate Content
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/ai-2025-2030-predictions" 
              className="group bg-transparent border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 flex items-center justify-center"
            >
              View Future Predictions
              <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Neural Synthesis</h3>
            <p className="text-gray-300">Advanced AI neural networks with 99.9% accuracy</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quantum Computing</h3>
            <p className="text-gray-300">Error-corrected quantum systems for exponential speed</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Autonomous Systems</h3>
            <p className="text-gray-300">Self-managing AI agents with 10,000x efficiency</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Revolutionary Tech</h3>
            <p className="text-gray-300">Breakthrough innovations transforming industries</p>
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">2,500%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030UltimateBreakthroughContentBanner;