'use client';
import React from 'react';
import { ArrowRight, Star, CheckCircle, Zap, Shield } from 'lucide-react';

interface ContentPromotionBannerProps {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  variant?: 'default' | 'premium' | 'success';
  icon?: React.ComponentType<any>;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title,
  description,
  features,
  ctaText,
  ctaLink,
  variant = 'default',
  icon: Icon = Star
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'premium':
        return {
          background: 'bg-gradient-to-r from-yellow-500 to-orange-500',
          text: 'text-black',
          button: 'bg-black text-yellow-500 hover:bg-gray-800'
        };
      case 'success':
        return {
          background: 'bg-gradient-to-r from-green-500 to-emerald-500',
          text: 'text-white',
          button: 'bg-white text-green-600 hover:bg-gray-100'
        };
      default:
        return {
          background: 'bg-gradient-to-r from-purple-500 to-blue-500',
          text: 'text-white',
          button: 'bg-white text-purple-600 hover:bg-gray-100'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`${styles.background} rounded-2xl p-8 md:p-12 relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <span className={`text-sm font-medium ${styles.text} opacity-90`}>
                Special Offer
              </span>
            </div>

            <h2 className={`text-3xl md:text-4xl font-bold ${styles.text} mb-4`}>
              {title}
            </h2>
            
            <p className={`text-lg ${styles.text} opacity-90 mb-6 max-w-2xl`}>
              {description}
            </p>

            <ul className="space-y-2 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className={styles.text}>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={ctaLink}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${styles.button}`}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Visual Elements */}
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
              <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center">
                <Star className="w-8 h-8" />
              </div>
              <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;