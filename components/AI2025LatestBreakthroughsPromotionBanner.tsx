import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';

const AI2025LatestBreakthroughsPromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-cyan-500/20 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">Latest AI Breakthroughs 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Solutions
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transforming Business Operations
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI breakthroughs that are revolutionizing how businesses operate, 
            from neural computing to quantum AI applications. Stay ahead of the competition with 
            cutting-edge technology solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/blog/ai-2025-next-generation-business-automation"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore AI Automation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/blog/quantum-computing-business-applications-2025"
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-400 hover:bg-purple-400/10 text-purple-300 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Quantum Computing
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Featured content grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI Automation Revolution</h3>
            <p className="text-gray-300 mb-4">
              Next-generation business automation delivering unprecedented efficiency and competitive advantages.
            </p>
            <Link 
              to="/blog/ai-2025-next-generation-business-automation"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform"
            >
              Read More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
            <p className="text-gray-300 mb-4">
              Business applications of quantum computing revolutionizing optimization and cryptography.
            </p>
            <Link 
              to="/blog/quantum-computing-business-applications-2025"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-transform"
            >
              Explore Now <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Neural Computing</h3>
            <p className="text-gray-300 mb-4">
              The 2026 neural computing revolution transforming business with brain-inspired AI systems.
            </p>
            <Link 
              to="/blog/ai-2026-neural-computing-revolution"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-1 transition-transform"
            >
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Success story highlight */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/20 rounded-xl p-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-300 text-sm font-medium">Success Story</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">
            Enterprise AI Transformation: 300% ROI Achieved
          </h3>
          
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Discover how a Fortune 500 company achieved remarkable success through comprehensive AI transformation, 
            resulting in 300% ROI and industry-leading efficiency.
          </p>
          
          <Link 
            to="/case-studies/enterprise-ai-transformation-2025-success"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Read Success Story
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
            <div className="text-gray-300 text-sm">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
            <div className="text-gray-300 text-sm">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-300 text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Autonomous Operation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025LatestBreakthroughsPromotionBanner;