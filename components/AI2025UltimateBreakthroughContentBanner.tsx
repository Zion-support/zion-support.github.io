import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Target, TrendingUp } from 'lucide-react';

const AI2025UltimateBreakthroughContentBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
            <Zap className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-semibold">NEW: AI 2025 Ultimate Breakthrough Content</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              That Changes Everything
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most advanced AI breakthroughs, implementation guides, and revolutionary content 
            that delivers unprecedented results. Get exclusive access to cutting-edge insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/ai-2025-ultimate-breakthrough-revolution"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Breakthrough Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-2025-content-showcase"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              View All Content
            </Link>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Advanced AI Insights</h3>
            <p className="text-gray-300">
              Deep dive into the latest AI breakthroughs, neural networks, and machine learning innovations.
            </p>
          </div>

          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Implementation Guides</h3>
            <p className="text-gray-300">
              Step-by-step guides to implement AI solutions with proven ROI of 2,500-5,000%.
            </p>
          </div>

          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Future Predictions</h3>
            <p className="text-gray-300">
              Exclusive insights into AI trends and predictions for 2025-2030 and beyond.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Content Pieces</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">10,000x</div>
            <div className="text-gray-400">Faster Processing</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">2,500%</div>
            <div className="text-gray-400">Average ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateBreakthroughContentBanner;