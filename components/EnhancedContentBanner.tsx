import React from 'react';
import Link from 'next/link';

interface ContentBannerProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  items: Array<{
    title: string;
    description: string;
    href: string;
    icon: string;
    readTime: string;
    isNew?: boolean;
  }>;
  gradient: string;
  className?: string;
}

const EnhancedContentBanner: React.FC<ContentBannerProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  items,
  gradient,
  className = ""
}) => {
  return (
    <section className={`py-20 ${gradient} text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">{subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href={ctaHref}
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              {ctaText}
            </Link>
            <Link
              href={secondaryCtaHref}
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              {secondaryCtaText}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90 mb-3">{item.description}</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>{item.readTime}</span>
                  {item.isNew && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                        New
                      </span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

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
};

export default EnhancedContentBanner;