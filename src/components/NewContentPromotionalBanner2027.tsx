import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles, Zap, Brain, Globe } from 'lucide-react';
const NewContentPromotionalBanner2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      text: "AI Revolution 2027: True General Intelligence",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Quantum Consciousness: Multi-Dimensional Awareness",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: "Interdimensional Business: Infinite Growth",
      color: "from-indigo-500 to-indigo-600"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  if (!isVisible) return null;
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-indigo-900/50"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Promotional content */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="font-bold text-sm">NEW CONTENT 2027</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 bg-gradient-to-r ${features[currentFeature].color} rounded-lg flex items-center justify-center text-white transition-all duration-500`}>
                {features[currentFeature].icon}
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{features[currentFeature].text}</p>
              </div>
            </div>
          </div>
          {/* Center - CTA Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold text-sm hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="flex items-center space-x-2">
                <span>Explore Revolutionary Content</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
          {/* Right side - Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* Mobile version */}
        <div className="lg:hidden mt-3 pt-3 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium">{features[currentFeature].text}</p>
            </div>
            <button className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold text-sm hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              <div className="flex items-center space-x-1">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default NewContentPromotionalBanner2027;
