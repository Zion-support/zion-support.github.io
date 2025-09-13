import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Target, Users, TrendingUp } from 'lucide-react';

const RevolutionaryContentPromotionBanner2025: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-8">
            <Sparkles className="w-6 h-6 text-blue-400 mr-3" />
            <span className="text-blue-300 font-semibold text-lg">Revolutionary Content 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            The Future of
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Content
            </span>
            is Here
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Experience the most advanced AI content collection ever created. 
            Revolutionary insights, breakthrough implementations, and future predictions 
            that will transform your understanding of artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/revolutionary-content-2025"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore Revolutionary Content
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link 
              to="/ai-2025-content-hub"
              className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              View Content Hub
            </Link>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
            <p className="text-gray-300 text-lg">
              10,000x faster content processing and generation with our revolutionary AI systems.
            </p>
          </div>

          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">99.9% Accuracy</h3>
            <p className="text-gray-300 text-lg">
              Unprecedented accuracy in AI predictions and content generation across all domains.
            </p>
          </div>

          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">500+ Experts</h3>
            <p className="text-gray-300 text-lg">
              Content created by leading AI researchers, engineers, and industry experts.
            </p>
          </div>

          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">2,500% ROI</h3>
            <p className="text-gray-300 text-lg">
              Proven return on investment for businesses implementing our AI solutions.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">1,000+</div>
              <div className="text-gray-400 text-lg">Content Pieces</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50,000+</div>
              <div className="text-gray-400 text-lg">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-lg">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-lg">Availability</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who are already transforming their businesses with our AI content.
          </p>
          <Link 
            to="/get-started-2025"
            className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Get Started Today
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentPromotionBanner2025;