import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star } from 'lucide-react';

'use client';

interface ContentPromotionBannerProps {
  title?: string;
  subtitle?: string;
  features?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'default' | 'premium' | 'limited';
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Unlock Premium Features",
  subtitle = "Get access to advanced tools and exclusive content",
  features = [
    "Advanced Analytics",
    "Priority Support",
    "Custom Integrations",
    "24/7 Monitoring"
  ],
  buttonText = "Upgrade Now",
  onButtonClick,
  variant = 'default',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'premium':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'limited':
        return 'bg-gradient-to-r from-red-600 to-orange-600';
      default:
        return 'bg-gradient-to-r from-blue-600 to-purple-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`${getVariantStyles()} rounded-2xl p-8 md:p-12 text-white relative overflow-hidden`}>
          {/* Background decoration */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                <Star className="w-5 h-5" />
                <span className="text-sm font-medium">Premium</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">{subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={onButtonClick}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-white/70 text-sm mt-4">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
