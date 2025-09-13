import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Cpu, Sparkles } from 'lucide-react';

const AI2025LatestBreakthroughsPromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            NEW: AI 2025 Breakthroughs
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Breakthroughs
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Transforming 2025
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the latest AI innovations that are reshaping industries, from autonomous systems to quantum-enhanced machine learning. 
            Experience breakthrough technologies delivering unprecedented performance and capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Neural Synthesis</h3>
            <p className="text-gray-300 text-sm mb-4">
              Advanced neural networks achieving 99.9% accuracy in complex decision-making processes.
            </p>
            <div className="text-yellow-400 font-semibold text-sm">+2,500% Performance</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quantum AI</h3>
            <p className="text-gray-300 text-sm mb-4">
              Quantum-enhanced algorithms processing data 10,000x faster than traditional systems.
            </p>
            <div className="text-yellow-400 font-semibold text-sm">10,000x Speed</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Autonomous Systems</h3>
            <p className="text-gray-300 text-sm mb-4">
              Self-managing AI systems operating with 99.9% uptime and zero human intervention.
            </p>
            <div className="text-yellow-400 font-semibold text-sm">99.9% Uptime</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Edge Intelligence</h3>
            <p className="text-gray-300 text-sm mb-4">
              Real-time AI processing at the edge with ultra-low latency and maximum efficiency.
            </p>
            <div className="text-yellow-400 font-semibold text-sm">Ultra-Low Latency</div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/ai-2025-breakthroughs" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center gap-2"
            >
              Explore Breakthroughs
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/case-studies" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Join 10,000+ companies already transforming with AI 2025 breakthroughs
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2025LatestBreakthroughsPromotionBanner;