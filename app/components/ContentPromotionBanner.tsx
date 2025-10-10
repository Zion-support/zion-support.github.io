'use client';
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('promotion-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('promotion-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  const benefits = [
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🚀</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">
                Transform Your Business with AI Solutions
              </h3>
              <p className="text-sm opacity-90">
                Join 500+ companies already using our AI-powered tools to boost productivity and drive growth.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <button
              onClick={handleDismiss}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Dismiss banner"
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