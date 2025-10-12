import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  onClose?: () => void;
  variant?: 'default' | 'success' | 'warning' | 'info';
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Special Offer Available!",
  description = "Get 20% off on our premium AI solutions. Limited time offer.",
  buttonText = "Learn More",
  buttonLink = "/contact",
  onClose,
  variant = 'default'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-emerald-600';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'info':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      default:
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
    }
  };

  return (
    <div className={`${getVariantStyles()} text-white p-4 rounded-lg shadow-lg relative`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="font-bold text-lg mb-1">{title}</h4>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        
        <div className="flex items-center space-x-4 ml-4">
          <Link
            to={buttonLink}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          
          {onClose && (
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors duration-300"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;