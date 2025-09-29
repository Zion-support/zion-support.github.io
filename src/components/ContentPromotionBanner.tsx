import React from 'react';
import { Link } from 'react-router-dom';

interface ContentPromotionBannerProps {
  variant?: 'default' | 'success' | 'warning' | 'info';
  title: string;
  description?: string;
  ctaText: string;
  ctaLink: string;
  className?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  variant = 'default',
  title,
  description,
  ctaText,
  ctaLink,
  className = "",
  dismissible = false,
  onDismiss
}) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const variantStyles = {
    default: 'bg-gradient-to-r from-blue-600 to-purple-600',
    success: 'bg-gradient-to-r from-green-600 to-emerald-600',
    warning: 'bg-gradient-to-r from-orange-600 to-red-600',
    info: 'bg-gradient-to-r from-cyan-600 to-blue-600'
  };

  return (
    <div className={`relative overflow-hidden ${variantStyles[variant]} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {title}
                </h3>
                {description && (
                  <p className="text-sm text-white/90 mt-1">
                    {description}
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                to={ctaLink}
                className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {ctaText}
              </Link>
              
              {dismissible && (
                <button
                  onClick={handleDismiss}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Dismiss banner"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;