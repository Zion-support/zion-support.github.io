'use client';
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromotion, setCurrentPromotion] = useState(0);

  const promotions = [
    {
      title: '🚀 New AI Solutions Available',
      description: 'Discover our latest AI-powered tools and get 30% off your first month',
      cta: 'Explore Now',
      link: '/ai-services',
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: '⚡ Free Consultation',
      description: 'Get expert advice on your AI and IT strategy - completely free',
      cta: 'Book Now',
      link: '/consultation',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      title: '🎯 Micro SAAS Launch',
      description: '50+ new micro SAAS solutions now available with special pricing',
      cta: 'View Solutions',
      link: '/micro-saas',
      color: 'from-green-500 to-blue-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const currentPromo = promotions[currentPromotion];

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <div className="text-white">
              <span className="font-semibold">{currentPromo.title}</span>
              <span className="text-gray-300 ml-2">{currentPromo.description}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href={currentPromo.link}
              className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentPromo.color} text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-300`}
            >
              {currentPromo.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
    </div>
  );
};

export default ContentPromotionBanner;