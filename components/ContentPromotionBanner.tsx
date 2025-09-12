import React from 'react';
import Link from 'next/link';

interface ContentPromotionBannerProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  variant?: 'gradient' | 'solid' | 'outline';
  gradient?: string;
  icon?: string;
  stats?: Array<{
    value: string;
    label: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  gradient?: string;
  featuredContent?: Array<{
    title: string;
    description: string;
    link: string;
    icon: string;
    readTime?: string;
    type?: string;
  }>;
}

export default function ContentPromotionBanner({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  variant = 'gradient',
  gradient = 'from-blue-600 via-purple-600 to-pink-600',
  icon = '🚀',
  stats = []
}: ContentPromotionBannerProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'solid':
        return 'bg-blue-600 text-white';
      case 'outline':
        return 'bg-white border-2 border-blue-600 text-blue-600';
      default:
        return `bg-gradient-to-r ${gradient} text-white`;
    }
  };

  const getCtaClasses = () => {
    switch (variant) {
      case 'outline':
        return 'bg-blue-600 text-white hover:bg-blue-700';
      default:
        return 'bg-white text-blue-600 hover:bg-gray-100';
    }
  };

  const getSecondaryCtaClasses = () => {
    switch (variant) {
      case 'outline':
        return 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white';
      default:
        return 'border-2 border-white text-white hover:bg-white hover:text-blue-600';
    }
  };

  return (
    <section className={`py-16 relative overflow-hidden ${getVariantClasses()}`}>
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-black opacity-10"></div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {icon && (
            <div className="text-6xl mb-6">{icon}</div>
          )}
          
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">{subtitle}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>

          {stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-75">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaHref}
              className={`px-8 py-4 rounded-lg font-semibold transition-colors text-lg ${getCtaClasses()}`}
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className={`px-8 py-4 rounded-lg font-semibold transition-colors text-lg ${getSecondaryCtaClasses()}`}
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  gradient = "from-blue-600 via-purple-600 to-pink-600",
  featuredContent = []
}: ContentPromotionBannerProps) {
  return (
    <section className={`py-20 bg-gradient-to-r ${gradient} text-white relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href={ctaLink}
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>

        {featuredContent.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((content, index) => (
              <Link key={index} href={content.link} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {content.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{content.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{content.description}</p>
                  <div className="flex items-center text-xs opacity-75">
                    {content.readTime && <span>{content.readTime}</span>}
                    {content.readTime && content.type && <span className="mx-2">•</span>}
                    {content.type && <span>{content.type}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4"
          >
            View All Articles
          </Link>
          <Link
            href="/resources"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
          >
            Download Resources
          </Link>
        </div>
      </div>
    </section>
  );
}