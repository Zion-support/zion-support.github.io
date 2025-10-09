'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const messages = [
    {
      icon: Sparkles,
      text: "🚀 New AI Solutions Available - Transform Your Business Today!",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Zap,
      text: "⚡ 300% ROI Guaranteed with Our AI-Powered Solutions",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Brain,
      text: "🧠 Quantum Computing & Autonomous Systems Now Available",
      color: "from-green-400 to-cyan-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  const current = messages[currentMessage];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    }`}>
      <div className={`bg-gradient-to-r ${current.color} text-white py-4 px-4 relative`}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center text-center sm:text-left relative z-10">
          <div className="flex items-center space-x-3 mb-2 sm:mb-0">
            <current.icon className="w-5 h-5 animate-pulse" />
            <span className="font-semibold text-sm sm:text-base">
              {current.text}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="/contact"
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm font-medium">Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => setCurrentMessage((prev) => (prev + 1) % messages.length)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Next message"
            >
              <ArrowRight className="w-4 h-4 rotate-90" />
            </button>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-white transition-all duration-5000 ease-linear"
            style={{ 
              width: '100%',
              animation: 'progressBar 5s linear infinite'
            }}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes progressBar {
          0% { width: 100%; }
          100% { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default ContentPromotionBanner;