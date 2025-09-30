import React from 'react';
import Link from 'next/link';

interface PromotionalBannerProps {
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
}

export default function PromotionalBanner({ variant = 'default', className = '' }: PromotionalBannerProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-emerald-600';
      case 'warning':
        return 'bg-gradient-to-r from-orange-500 to-red-500';
      case 'info':
        return 'bg-gradient-to-r from-blue-500 to-indigo-600';
      default:
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
    }
  };

  return (
    <div className={`${getVariantStyles()} py-12 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            New: AI 2026 Mega Breakthrough
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Business with Revolutionary AI
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover the 5 mega breakthroughs that are reshaping industries in 2026. 
            Learn how quantum AI, autonomous systems, and neural interfaces can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2026-mega-breakthrough"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Read the Full Report
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore AI Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}