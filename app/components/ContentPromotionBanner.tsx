'use client';

import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Star, Users, Zap, CheckCircle } from 'lucide-react';

interface ContentPromotionBannerProps {
  onClose?: () => void;
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({ 
  onClose, 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show banner after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  if (!isVisible) return null;

  const promotions = [
    {
      id: 1,
      title: '🚀 New AI Services Available',
      description: 'Discover our latest AI-powered solutions for your business',
      cta: 'Explore Now',
      link: '/ai-services',
      type: 'new'
    },
    {
      id: 2,
      title: '💡 Free Consultation',
      description: 'Get expert advice on your technology needs',
      cta: 'Book Free Call',
      link: '/consultation',
      type: 'consultation'
    },
    {
      id: 3,
      title: '🎯 Micro SaaS Solutions',
      description: 'Specialized tools for specific business challenges',
      cta: 'View Products',
      link: '/micro-saas',
      type: 'products'
    }
  ];

  const [currentPromotion, setCurrentPromotion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  const promotion = promotions[currentPromotion];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'new':
        return 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20 text-green-400';
      case 'consultation':
        return 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-400';
      case 'products':
        return 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-400';
      default:
        return 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-400';
    }
  };

  return (
    <div className={`fixed top-20 left-4 right-4 z-40 transition-all duration-500 ${
      isClosing ? 'opacity-0 transform translate-y-[-100%]' : 'opacity-100 transform translate-y-0'
    } ${className}`}>
      <div className={`relative max-w-4xl mx-auto bg-slate-800/95 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 shadow-2xl ${getTypeStyles(promotion.type)}`}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Close banner"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-8">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-bold text-white">
                {promotion.title}
              </h3>
              <div className="flex gap-1">
                {promotions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPromotion ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {promotion.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={promotion.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                {promotion.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span>2.5K+ Users</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="hidden md:block">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>Free Setup</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>No Long-term Contracts</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>30-day Money Back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;