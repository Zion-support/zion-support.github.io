import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Users, Clock } from 'lucide-react';

const NewContentPromotionBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              NEW CONTENT
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, space technology, and more
          </p>

          {/* Content highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">7 New Articles</h3>
              <p className="text-blue-200">Latest insights on cutting-edge technology</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Expert Authors</h3>
              <p className="text-blue-200">Written by industry leaders and researchers</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fresh Content</h3>
              <p className="text-blue-200">Published this week with latest developments</p>
            </div>
          </div>

          {/* Featured topics */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Featured Topics</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Metaverse AI Integration',
                'Autonomous Business Operations',
                'Space Tech Revolution',
                'Holographic Interfaces',
                'Climate AI Solutions',
                'Edge AI Revolution',
                'AI Cybersecurity'
              ].map((topic, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/comprehensive-tech-insights-2026"
              className="group inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              View Tech Insights
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">47+</div>
              <div className="text-blue-200">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">15+</div>
              <div className="text-blue-200">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">100+</div>
              <div className="text-blue-200">Tags</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-blue-200">Updates</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;