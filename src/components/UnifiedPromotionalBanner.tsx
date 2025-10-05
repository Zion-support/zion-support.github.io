import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Rocket, Star, ArrowRight } from 'lucide-react';

export interface FeaturedItem {
  title: string;
  category: string;
  link: string;
  metrics?: string;
}

export interface UnifiedPromotionalBannerProps {
  title: string;
  subtitle: string;
  description: string;
  primaryAction: {
    label: string;
    link: string;
  };
  secondaryAction?: {
    label: string;
    link: string;
  };
  featuredItems?: FeaturedItem[];
  variant?: 'default' | 'gradient' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const UnifiedPromotionalBanner: React.FC<UnifiedPromotionalBannerProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  featuredItems = [],
  variant = 'default',
  size = 'md'
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white';
      case 'dark':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-white border border-gray-200 text-gray-900';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'py-8 px-6';
      case 'lg':
        return 'py-16 px-8';
      default:
        return 'py-12 px-6';
    }
  };

  return (
    <div className={`rounded-2xl shadow-lg ${getVariantClasses()} ${getSizeClasses()}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 mr-2 text-yellow-400" />
            <span className="text-sm font-semibold uppercase tracking-wider opacity-90">
              {subtitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {featuredItems.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredItems.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-80 mb-2">{item.category}</p>
                {item.metrics && (
                  <p className="text-xs font-mono bg-white/20 px-2 py-1 rounded">
                    {item.metrics}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryAction.link}
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Rocket className="w-5 h-5 mr-2" />
            {primaryAction.label}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          {secondaryAction && (
            <Link
              to={secondaryAction.link}
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              <Star className="w-4 h-4 mr-2" />
              {secondaryAction.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnifiedPromotionalBanner;