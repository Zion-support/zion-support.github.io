import React from 'react';
import { Link } from 'react-router-dom';

interface BannerData {
  id: string;
  title: string;
  description: string;
  variant: 'success' | 'warning' | 'info' | 'error';
  link?: string;
  linkText?: string;
}

interface EnhancedPromotionalBannerProps {
  banner: BannerData;
  className?: string;
}

const EnhancedPromotionalBanner: React.FC<EnhancedPromotionalBannerProps> = ({
  banner,
  className = '',
}) => {
  const variantStyles = {
    success: 'bg-gradient-to-r from-green-600 to-emerald-600',
    warning: 'bg-gradient-to-r from-yellow-600 to-orange-600',
    info: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    error: 'bg-gradient-to-r from-red-600 to-pink-600',
  };

  return (
    <div className={`${variantStyles[banner.variant]} text-white p-4 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">{banner.title}</h3>
            <p className="text-sm opacity-90">{banner.description}</p>
          </div>
          {banner.link && banner.linkText && (
            <div className="ml-4">
              <Link
                to={banner.link}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                {banner.linkText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnhancedPromotionalBanner;