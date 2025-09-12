import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, X, Brain, Zap, Target, TrendingUp, Calendar } from 'lucide-react';

const AI2027FuturePredictionsPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ai-2027-predictions-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ai-2027-predictions-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-blue-600/90 to-indigo-600/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left side - Main content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  <Brain className="w-4 h-4" />
                  FUTURE PREDICTIONS 2027
                </div>
                <div className="hidden sm:flex items-center gap-1 bg-green-500 px-3 py-1 rounded-full text-sm font-bold">
                  <Calendar className="w-4 h-4" />
                  NEW
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                🔮 AI 2027 Future Predictions
              </h2>
              
              <p className="text-lg md:text-xl mb-4 opacity-90 max-w-2xl mx-auto lg:mx-0">
                Discover the revolutionary AI breakthroughs predicted for 2027. 
                <span className="font-semibold"> Neural synthesis, autonomous systems, and quantum AI</span> 
                that will transform industries worldwide.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Zap className="w-4 h-4" />
                  <span className="font-semibold">25,000% ROI</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Target className="w-4 h-4" />
                  <span className="font-semibold">99.9% Accuracy</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-semibold">Revolutionary</span>
                </div>
              </div>
            </div>
            
            {/* Right side - CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <Link
                href="/ai-2027-future-predictions"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                Explore Predictions
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/ai-2027-readiness-assessment"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                Take Assessment
              </Link>
            </div>
            
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default AI2027FuturePredictionsPromotionBanner;