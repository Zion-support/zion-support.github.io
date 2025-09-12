import React from 'react';
import Link from 'next/link';

interface ContentPromotionBannerProps {
  variant?: 'primary' | 'secondary' | 'accent';
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  featuredContent?: Array<{
    title: string;
    description: string;
    href: string;
    icon: string;
    badge?: string;
  }>;
}

export default function ContentPromotionBanner({
  variant = 'primary',
  title,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  featuredContent = []
}: ContentPromotionBannerProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600',
          text: 'text-white',
          cta: 'bg-white text-blue-600 hover:bg-gray-100',
          secondaryCta: 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
        };
      case 'secondary':
        return {
          background: 'bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600',
          text: 'text-white',
          cta: 'bg-white text-green-600 hover:bg-gray-100',
          secondaryCta: 'border-2 border-white text-white hover:bg-white hover:text-green-600'
        };
      case 'accent':
        return {
          background: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600',
          text: 'text-white',
          cta: 'bg-white text-indigo-600 hover:bg-gray-100',
          secondaryCta: 'border-2 border-white text-white hover:bg-white hover:text-indigo-600'
        };
      default:
        return {
          background: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600',
          text: 'text-white',
          cta: 'bg-white text-blue-600 hover:bg-gray-100',
          secondaryCta: 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section className={`py-20 ${styles.background} ${styles.text} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 mb-8">
            <span className="text-lg font-bold">🔥 HOT THIS WEEK - JANUARY 2025</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            {title}
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-10 max-w-5xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href={ctaHref}
              className={`${styles.cta} px-12 py-5 rounded-lg font-bold transition-colors text-xl shadow-lg`}
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className={`${styles.secondaryCta} px-12 py-5 rounded-lg font-bold transition-colors text-xl`}
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>

        {featuredContent.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {content.icon}
                  </div>
                  {content.badge && (
                    <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-3 py-1 mb-3">
                      <span className="text-xs font-medium">{content.badge}</span>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-2">{content.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{content.description}</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Read More</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Link
            href={ctaHref}
            className={`${styles.cta} px-8 py-3 rounded-lg font-semibold transition-colors inline-block mr-4`}
          >
            View All Content
          </Link>
          {secondaryCtaText && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className={`${styles.secondaryCta} px-8 py-3 rounded-lg font-semibold transition-colors inline-block`}
            >
              Download Resources
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}