import React from 'react';
import Link from 'next/link';

interface ContentPromotionBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export default function ContentPromotionBanner({ 
  title, 
  description, 
  ctaText, 
  ctaLink 
}: ContentPromotionBannerProps) {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg opacity-90 mb-6">
          {description}
        </p>
        <Link
          href={ctaLink}
          className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}