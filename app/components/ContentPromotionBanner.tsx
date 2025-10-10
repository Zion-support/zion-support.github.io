'use client';
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Star, Zap, Shield, Brain } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromotion, setCurrentPromotion] = useState(0);

  const promotions = [
    {
      icon: Star,
      title: 'New AI Solutions Available',
      description: 'Discover our latest AI-powered tools and services',
      cta: 'Explore Now',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Limited Time Offer',
      description: 'Get 30% off on all AI services this month',
      cta: 'Get Discount',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Enhanced Security Features',
      description: 'New cybersecurity solutions now available',
      cta: 'Learn More',
      color: 'from-green-500 to-teal-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  if (!isVisible) return null;

  const current = promotions[currentPromotion];

  return (
    <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 bg-gradient-to-r ${current.color} rounded-lg flex items-center justify-center`}>
              <current.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm md:text-base">
                {current.title}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm">
                {current.description}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              {current.cta}
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
