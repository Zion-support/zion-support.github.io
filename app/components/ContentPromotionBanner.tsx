'use client';
import React from 'react';
import { ArrowRight, Star, Zap, Shield } from 'lucide-react';

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
    "Exclusive Content"
  ],
  buttonText = "Upgrade Now",
  onButtonClick,
  variant = 'default'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'premium':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
      case 'limited':
        return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
      default:
        return 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white';
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'premium':
        return <Star className="w-6 h-6" />;
      case 'limited':
        return <Zap className="w-6 h-6" />;
      default:
        return <Shield className="w-6 h-6" />;
    }
  };

  return (
    <div className={`${getVariantStyles()} rounded-lg p-6 mb-8`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            {getIcon()}
            <h3 className="text-xl font-bold ml-2">{title}</h3>
          </div>
          <p className="text-sm opacity-90 mb-4">{subtitle}</p>
          <ul className="flex flex-wrap gap-4 text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={onButtonClick}
          className="ml-6 px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg font-semibold transition-all duration-200 flex items-center"
        >
          {buttonText}
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;