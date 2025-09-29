import { ArrowRight, Sparkles, Star, TrendingUp } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface NewContentPromotionBannerProps {
  variant?: 'default' | 'success' | 'warning' | 'info' | 'premium';
  title: string;
  description?: string;
  ctaText: string;
  ctaLink: string;
  className?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  featuredItems?: Array<{
    title: string;
    category: string;
    link: string;
  }>;
  showBadge?: boolean;
  badgeText?: string;
}

export const NewContentPromotionBanner: React.FC<NewContentPromotionBannerProps> = ({
  variant = 'default',
  title,
  description,
  ctaText,
  ctaLink,
  className = "",
  dismissible = false,
  onDismiss,
  featuredItems = [],
  showBadge = true,
  badgeText = "NEW CONTENT"
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
    info: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    premium: 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600'
  };

  const badgeColors = {
    default: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-orange-500',
    info: 'bg-cyan-500',
    premium: 'bg-purple-500'
  };

  return (
    <div className={`relative overflow-hidden ${variantStyles[variant]} ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-8 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-8 right-12 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-6 left-16 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1">
              {/* Badge */}
              {showBadge && (
                <div className="flex items-center gap-2 mb-3">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white ${badgeColors[variant]} animate-pulse`}>
                    <Sparkles className="w-3 h-3 mr-1" />
                    {badgeText}
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Trending
                  </div>
                </div>
              )}

              {/* Title and Description */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {title}
                </h3>
                {description && (
                  <p className="text-white/90 text-lg leading-relaxed">
                    {description}
                  </p>
                )}
              </div>

              {/* Featured Items */}
              {featuredItems.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-4">
                  {featuredItems.slice(0, 3).map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 border border-white/20"
                    >
                      <span className="text-xs text-white/70 mr-1">•</span>
                      {item.title}
                    </Link>
                  ))}
                  {featuredItems.length > 3 && (
                    <span className="text-white/70 text-sm px-2 py-1">
                      +{featuredItems.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
            
            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:flex-shrink-0">
              <Link
                to={ctaLink}
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 group"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {dismissible && (
                <button
                  onClick={handleDismiss}
                  className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  aria-label="Dismiss banner"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Bottom Stats/Highlights */}
          <div className="mt-6 pt-4 border-t border-white/20">
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-300 fill-current" />
                <span>4 New Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <span>3 Service Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span>Latest AI Trends</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;
