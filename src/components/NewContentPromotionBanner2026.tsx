import {
  ArrowRight,
  Brain,
  Sparkles,
  Star,
  TrendingUp,
  X,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewContentPromotionBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const features = [
    "Latest AI Trends 2026",
    "Revolutionary Business Solutions",
    "300% ROI Guarantee",
    "24/7 AI Support"
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 border-b border-blue-400/30">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Main content */}
          <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start mb-3">
              <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold mr-3">
                <Sparkles className="h-4 w-4 mr-1" />
                NEW
              </div>
              <div className="flex items-center text-blue-300 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                Trending Now
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              🚀 Discover AI 2026: The Future is Here
            </h2>
            <p className="text-blue-200 text-lg mb-4">
              Explore revolutionary AI trends and business solutions that are transforming industries worldwide
            </p>
            
            {/* Feature tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
              {features.map((feature, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white"
                >
                  <Zap className="h-3 w-3 mr-1 text-yellow-400" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <Link 
              to="/ai-2026-latest-trends"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Brain className="h-5 w-5 mr-2" />
              Explore Trends
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            
            <Link 
              to="/ai-business-solutions-2026"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Star className="h-5 w-5 mr-2" />
              View Solutions
            </Link>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200"
            aria-label="Close banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-4 w-full bg-white/10 rounded-full h-1">
          <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-1 rounded-full animate-pulse" style={{width: '75%'}}></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-2 left-8 text-blue-300/30 text-xs animate-bounce">
        ⚡
      </div>
      <div className="absolute top-4 right-12 text-purple-300/30 text-xs animate-bounce delay-1000">
        🎯
      </div>
      <div className="absolute bottom-2 left-1/3 text-indigo-300/30 text-xs animate-bounce delay-500">
        🚀
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;