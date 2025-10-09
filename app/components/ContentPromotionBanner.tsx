'use client';
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Star, Zap, TrendingUp } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromotion, setCurrentPromotion] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "🚀 New AI Services Available!",
      description: "Discover our latest AI-powered solutions for enterprise transformation",
      cta: "Explore Now",
      link: "/ai-services",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-gradient-to-r from-cyan-500/20 to-blue-600/20"
    },
    {
      id: 2,
      title: "⚡ Micro SAAS Solutions",
      description: "50+ ready-to-use AI applications starting at $19/month",
      cta: "View Solutions",
      link: "/micro-saas",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-r from-purple-500/20 to-pink-600/20"
    },
    {
      id: 3,
      title: "🎯 Free Consultation",
      description: "Get a personalized AI strategy for your business - 100% free",
      cta: "Book Now",
      link: "/contact",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-gradient-to-r from-green-500/20 to-teal-600/20"
    },
    {
      id: 4,
      title: "🏆 300% Average ROI",
      description: "Our clients see incredible results with our AI solutions",
      cta: "See Case Studies",
      link: "/case-studies",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-r from-orange-500/20 to-red-600/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  if (!isVisible) return null;

  const current = promotions[currentPromotion];

  return (
    <div className={`relative overflow-hidden ${current.bgColor} border-b border-cyan-400/20`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-medium text-white">Featured</span>
            </div>
            <div className="flex items-center space-x-3">
              <h3 className="text-sm font-semibold text-white neon-pulse">
                {current.title}
              </h3>
              <p className="text-xs text-gray-300 hidden sm:block">
                {current.description}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <a
              href={current.link}
              className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${current.color} text-white text-xs font-medium rounded-lg hover:scale-105 transition-all duration-300`}
            >
              {current.cta}
              <ArrowRight className="w-3 h-3 ml-1" />
            </a>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/30">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-5000 ease-linear"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;