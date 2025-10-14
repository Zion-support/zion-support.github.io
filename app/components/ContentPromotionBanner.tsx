'use client';
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  subtitle?: string;
  features?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business",
  subtitle = "Discover how our solutions can revolutionize your operations",
  features = [],
  buttonText = "Get Started",
  onButtonClick,
  className = ""
}) => {
  return (
    <div className={`bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-cyan-100 text-lg">{subtitle}</p>
      </div>

      {features.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
              <span className="text-white">{feature}</span>
            </div>
          ))}
        </div>
      )}

      <div className="text-center">
        <button
          onClick={onButtonClick}
          className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;