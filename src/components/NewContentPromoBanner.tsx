import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Users, Award, Clock } from 'lucide-react';

interface NewContentPromoBannerProps {
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'info' | 'premium';
}

export const NewContentPromoBanner: React.FC<NewContentPromoBannerProps> = ({
  className = '',
  variant = 'default'
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/30 text-green-100';
      case 'warning':
        return 'bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-orange-400/30 text-orange-100';
      case 'info':
        return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/30 text-blue-100';
      case 'premium':
        return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 text-purple-100';
      default:
        return 'bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 border-zion-blue/30 text-zion-slate-light';
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case 'success':
        return 'text-green-400';
      case 'warning':
        return 'text-orange-400';
      case 'info':
        return 'text-blue-400';
      case 'premium':
        return 'text-purple-400';
      default:
        return 'text-zion-cyan';
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`relative overflow-hidden rounded-xl p-6 mb-8 animate-fade-in border backdrop-blur-sm ${getVariantStyles()} ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header with close button */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Sparkles className={`w-6 h-6 ${getIconColor()} animate-pulse`} />
            <span className="font-bold text-lg">🚀 NEW CONTENT ALERT</span>
            <Sparkles className={`w-6 h-6 ${getIconColor()} animate-pulse`} />
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close banner"
          >
            ×
          </button>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-3">
              📚 Fresh Insights & Expert Analysis
            </h3>
            <p className="mb-4 opacity-90">
              Discover our latest technology insights, AI implementation guides, and industry analysis 
              from our team of experts. Stay ahead with cutting-edge knowledge.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">15+ New Articles</span>
                </div>
                <div className="text-xs opacity-75">Fresh content weekly</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">10K+ Readers</span>
                </div>
                <div className="text-xs opacity-75">Growing community</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">🔥 Featured This Week</h4>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">AI Ethics Implementation Guide</span>
                </div>
                <div className="text-xs opacity-75">Practical framework for ethical AI</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">IoT Security Best Practices</span>
                </div>
                <div className="text-xs opacity-75">Comprehensive security strategies</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">20+ Quick Insights</span>
                </div>
                <div className="text-xs opacity-75">Latest technology trends</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/blog"
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm border border-white/20"
          >
            <Sparkles className="w-4 h-4" />
            Explore All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/insights"
            className="border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <TrendingUp className="w-4 h-4" />
            Browse Insights
          </Link>
          <Link
            to="/newsletter"
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm border border-white/20"
          >
            <Users className="w-4 h-4" />
            Subscribe
          </Link>
        </div>

        {/* Bottom text */}
        <div className="mt-4 text-center">
          <p className="text-sm opacity-75">
            Join thousands of professionals staying ahead with Zion Tech Group's expert insights
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromoBanner;