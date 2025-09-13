import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Zap, Brain, Target, TrendingUp } from 'lucide-react';

const AI2027BreakthroughPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "🚀 AI 2027 Breakthrough Content Now Available!",
    "⚛️ Quantum-AI Fusion Revolution - 8000% ROI",
    "🧠 Neural Synthesis Breakthrough - 99.7% Accuracy",
    "🤖 Autonomous Systems Mastery - 3000% ROI",
    "🏢 Enterprise AI Transformation - 4000% ROI"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>

            {/* Animated Message */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm font-medium text-yellow-300">BREAKTHROUGH ALERT:</span>
                </div>
                <div className="overflow-hidden">
                  <div 
                    className="text-lg font-bold whitespace-nowrap transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateY(-${currentMessage * 100}%)` }}
                  >
                    {messages.map((message, index) => (
                      <div key={index} className="h-6 flex items-center">
                        {message}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <Link
                to="/ai-2027-breakthrough-content"
                className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-200 group"
              >
                <Target className="w-4 h-4 mr-2" />
                Explore Content
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/ai-2027-master-guide"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold rounded-lg transition-all duration-200 group shadow-lg"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Master Guide
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200 flex-shrink-0"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden mt-3 pt-3 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-yellow-300 mb-1">BREAKTHROUGH ALERT:</div>
              <div className="text-sm font-semibold truncate">
                {messages[currentMessage]}
              </div>
            </div>
            <div className="flex space-x-2 ml-3">
              <Link
                to="/ai-2027-breakthrough-content"
                className="px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded"
              >
                Explore
              </Link>
              <Link
                to="/ai-2027-master-guide"
                className="px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded"
              >
                Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pulse Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default AI2027BreakthroughPromotionBanner;