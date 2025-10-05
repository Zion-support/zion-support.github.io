import React from 'react';
import { Link } from 'react-router-dom';

interface AdvertisingBannerProps {
  className?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
}

const AdvertisingBanner: React.FC<AdvertisingBannerProps> = ({
  className = '',
  title = 'Transform Your Business with AI',
  description = 'Join thousands of companies already using our AI solutions to boost productivity by 99.9%',
  ctaText = 'Get Started Today',
  ctaLink = '/contact',
  variant = 'primary'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white';
      case 'secondary':
        return 'bg-gradient-to-r from-gray-600 to-gray-800 text-white';
      case 'success':
        return 'bg-gradient-to-r from-green-600 to-emerald-600 text-white';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      case 'info':
        return 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white';
      default:
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white';
    }
  };

  return (
    <div className={`py-12 px-4 ${getVariantStyles()} ${className}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to={ctaLink}
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {ctaText}
          </Link>
          <Link
            to="/about"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBanner;