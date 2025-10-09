'use client';
import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Star, Zap, TrendingUp, Users } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    {
      icon: Sparkles,
      text: "New AI Solutions Available",
      description: "Transform your business with cutting-edge AI technology",
      color: "from-cyan-600 via-purple-600 to-pink-600"
    },
    {
      icon: Zap,
      text: "300% ROI Guaranteed",
      description: "Our clients see average 300% ROI within the first year",
      color: "from-green-600 via-blue-600 to-purple-600"
    },
    {
      icon: TrendingUp,
      text: "90% Efficiency Boost",
      description: "Boost productivity by 90% with intelligent automation",
      color: "from-orange-600 via-red-600 to-pink-600"
    },
    {
      icon: Users,
      text: "50+ Enterprise Clients",
      description: "Trusted by leading companies worldwide",
      color: "from-indigo-600 via-purple-600 to-pink-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  const current = messages[currentMessage];

  return (
    <div className={`bg-gradient-to-r ${current.color} text-white py-4 relative overflow-hidden transition-all duration-1000`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <current.icon className="w-5 h-5 animate-pulse" />
            <span className="font-semibold text-sm sm:text-base transition-all duration-500">
              {current.text}
            </span>
            <Star className="w-4 h-4 text-yellow-300 animate-bounce" />
          </div>
          
          <div className="flex items-center space-x-4 ml-0 sm:ml-6">
            <span className="text-sm sm:text-base transition-all duration-500">
              {current.description}
            </span>
            <a
              href="/services"
              className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
