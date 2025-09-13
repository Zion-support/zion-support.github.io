import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Star, Sparkles } from 'lucide-react';

interface BannerItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
  readTime?: string;
  isNew?: boolean;
  category?: string;
}

interface EnhancedContentBannerProps {
  title: string;
  subtitle: string;
  items: BannerItem[];
  ctaText: string;
  ctaHref: string;
  variant?: 'gradient' | 'solid' | 'outline';
  colorScheme?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
  className?: string;
}

const EnhancedContentBanner: React.FC<EnhancedContentBannerProps> = ({
  title,
  subtitle,
  items,
  ctaText,
  ctaHref,
  variant = 'gradient',
  colorScheme = 'blue',
  className = ''
}) => {
  const getColorClasses = (scheme: string) => {
    switch (scheme) {
      case 'blue':
        return {
          gradient: 'from-blue-600 to-purple-600',
          solid: 'bg-blue-600',
          outline: 'border-blue-600 text-blue-600',
          accent: 'text-blue-100',
          hover: 'hover:from-blue-700 hover:to-purple-700'
        };
      case 'green':
        return {
          gradient: 'from-green-600 to-emerald-600',
          solid: 'bg-green-600',
          outline: 'border-green-600 text-green-600',
          accent: 'text-green-100',
          hover: 'hover:from-green-700 hover:to-emerald-700'
        };
      case 'purple':
        return {
          gradient: 'from-purple-600 to-pink-600',
          solid: 'bg-purple-600',
          outline: 'border-purple-600 text-purple-600',
          accent: 'text-purple-100',
          hover: 'hover:from-purple-700 hover:to-pink-700'
        };
      case 'orange':
        return {
          gradient: 'from-orange-600 to-red-600',
          solid: 'bg-orange-600',
          outline: 'border-orange-600 text-orange-600',
          accent: 'text-orange-100',
          hover: 'hover:from-orange-700 hover:to-red-700'
        };
      case 'red':
        return {
          gradient: 'from-red-600 to-pink-600',
          solid: 'bg-red-600',
          outline: 'border-red-600 text-red-600',
          accent: 'text-red-100',
          hover: 'hover:from-red-700 hover:to-pink-700'
        };
      default:
        return {
          gradient: 'from-blue-600 to-purple-600',
          solid: 'bg-blue-600',
          outline: 'border-blue-600 text-blue-600',
          accent: 'text-blue-100',
          hover: 'hover:from-blue-700 hover:to-purple-700'
        };
    }
  };

  const colors = getColorClasses(colorScheme);

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return `bg-gradient-to-r ${colors.gradient} text-white`;
      case 'solid':
        return `${colors.solid} text-white`;
      case 'outline':
        return `border-2 ${colors.outline} bg-white`;
      default:
        return `bg-gradient-to-r ${colors.gradient} text-white`;
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`rounded-2xl p-8 md:p-12 ${getVariantClasses()}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className={`text-sm font-semibold ${colors.accent} opacity-90`}>
                Fresh Content
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Content Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                {/* New Badge */}
                {item.isNew && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full mb-4">
                    <Star className="w-3 h-3" />
                    New
                  </div>
                )}

                {/* Icon */}
                {item.icon && (
                  <div className="text-3xl mb-4">
                    {item.icon}
                  </div>
                )}

                {/* Category */}
                {item.category && (
                  <div className="flex items-center gap-1 mb-3">
                    <Tag className="w-4 h-4 opacity-70" />
                    <span className="text-sm opacity-70">{item.category}</span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 group-hover:opacity-90 transition-opacity">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm opacity-80 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm opacity-70">
                  {item.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1 group-hover:opacity-100 transition-opacity">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href={ctaHref}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                variant === 'outline'
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContentBanner;