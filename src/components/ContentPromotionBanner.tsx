import React, { useState, useEffect } from 'react';
import { X, Star, Zap, Award } from 'lucide-react';

interface ContentPromotionBannerProps {
  className?: string;
}

export default function ContentPromotionBanner({ className = '' }: ContentPromotionBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromotion, setCurrentPromotion] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "🚀 New AI Solutions Available",
      description: "Discover our latest AI-powered tools and services",
      cta: "Explore Now",
      link: "/ai-services",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      title: "⚡ Special Offer: 50% Off First Month",
      description: "Get started with our AI automation services",
      cta: "Claim Offer",
      link: "/ai-automation",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "🏆 Award-Winning Technology",
      description: "Recognized as the #1 AI Solutions Provider",
      cta: "Learn More",
      link: "/about",
      color: "from-green-500 to-emerald-600"
    }
  ];

  useEffect(() => {
    // Rotate promotions every 5 seconds
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = promotions[currentPromotion];

  return (
    <div className={`relative bg-gradient-to-r ${current.color} text-white py-3 px-4 ${className}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold text-sm sm:text-base">{current.title}</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-sm opacity-90">{current.description}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <a
            href={current.link}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
          >
            {current.cta}
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white/60 transition-all duration-5000 ease-linear"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}