'use client';
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles, Zap, Brain, Target } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
      title: "🚀 AI 2026 Breakthrough",
      description: "Discover the latest autonomous enterprise automation mega breakthrough",
      link: "/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-r from-purple-900/20 to-pink-900/20"
    },
    {
      id: 2,
      title: "⚡ New AI Services",
      description: "Explore our expanded AI solutions and micro SAAS offerings",
      link: "/services",
      icon: Zap,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-gradient-to-r from-cyan-900/20 to-blue-900/20"
    },
    {
      id: 3,
      title: "🎯 Enterprise Solutions",
      description: "Transform your business with our cutting-edge AI technology",
      link: "/enterprise",
      icon: Target,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-r from-green-900/20 to-emerald-900/20"
    }
  ];

  useEffect(() => {
    // Show banner after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Rotate banners every 8 seconds
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentBannerData = banners[currentBanner];
  const IconComponent = currentBannerData.icon;

  return (
    <div className={`relative overflow-hidden transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
    }`}>
      <div className={`${currentBannerData.bgColor} border-b border-cyan-400/20`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-br ${currentBannerData.color} rounded-lg flex items-center justify-center`}>
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {currentBannerData.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {currentBannerData.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <a
                href={currentBannerData.link}
                className="flex items-center space-x-1 text-cyan-400 hover:text-white transition-colors text-sm font-medium"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Banner indicators */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-cyan-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentPromotionBanner;