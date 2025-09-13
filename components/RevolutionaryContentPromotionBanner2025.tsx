import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Star, Users, Clock, Zap, Brain } from 'lucide-react';

const RevolutionaryContentPromotionBanner2025: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-cyan-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 mb-8">
            <Sparkles className="w-6 h-6 text-yellow-400 mr-3" />
            <span className="text-yellow-400 font-bold text-lg">REVOLUTIONARY CONTENT 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            The Ultimate Content
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Revolution
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI breakthroughs, quantum computing innovations, 
            and revolutionary technology content that will transform your business and accelerate your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/ai-2025-2030-ultimate-content-revolution" 
              className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-2xl"
            >
              Explore Revolutionary Content
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              to="/ai-2025-2030-predictions" 
              className="group bg-transparent border-3 border-white/40 hover:border-white/70 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white/10 flex items-center justify-center backdrop-blur-sm"
            >
              View Future Predictions
              <TrendingUp className="w-6 h-6 ml-3 group-hover:translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Feature highlights with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Neural Synthesis</h3>
            <p className="text-gray-300 text-lg">Advanced AI neural networks with 99.9% accuracy and 10,000x processing speed</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300 text-lg">Error-corrected quantum systems for exponential speed and unbreakable security</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Systems</h3>
            <p className="text-gray-300 text-lg">Self-managing AI agents delivering 2,500% ROI and 95% efficiency gains</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Revolutionary Tech</h3>
            <p className="text-gray-300 text-lg">Breakthrough innovations transforming industries and reshaping the future</p>
          </div>
        </div>

        {/* Enhanced stats section */}
        <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-12 border border-white/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">2,500%</div>
              <div className="text-gray-300 text-xl font-semibold">Average ROI</div>
              <div className="text-gray-400 text-sm mt-2">Proven results across industries</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-300 text-xl font-semibold">Accuracy Rate</div>
              <div className="text-gray-400 text-sm mt-2">Industry-leading precision</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">10,000x</div>
              <div className="text-gray-300 text-xl font-semibold">Faster Processing</div>
              <div className="text-gray-400 text-sm mt-2">Revolutionary speed improvements</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">50,000+</div>
              <div className="text-gray-300 text-xl font-semibold">Active Users</div>
              <div className="text-gray-400 text-sm mt-2">Trusted by leading companies</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already transforming with our revolutionary content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentPromotionBanner2025;