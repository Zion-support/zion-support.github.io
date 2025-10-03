// import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, Star, Award, Calendar } from 'lucide-react';

const NewContentAnnouncementBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border-y border-yellow-500/20 py-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Announcement */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-yellow-300 font-bold text-sm">NEW CONTENT</span>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 font-bold text-sm">JANUARY 2026</span>
            </div>

            <div className="text-white font-semibold text-lg">
              🚀 <span className="text-yellow-300">6 Revolutionary AI Articles</span> + <span className="text-blue-300">AI Advertising Services</span> + <span className="text-green-300">Enterprise Solutions</span>
            </div>
          </div>

          {/* Right side - CTAs */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="/blog"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 text-sm"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Read Articles</span>
            </a>
            
            <a
              href="/services-advertising"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-sm"
            >
              <Zap className="w-4 h-4" />
              <span>AI Advertising</span>
            </a>

            <a
              href="/enterprise"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/50 text-sm"
            >
              <Award className="w-4 h-4" />
              <span>Enterprise</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentAnnouncementBanner;