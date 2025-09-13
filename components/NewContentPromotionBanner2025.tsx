import React from 'react';
import Link from 'next/link';

interface NewContentPromotionBanner2025Props {
  variant?: 'featured' | 'compact' | 'hero';
  className?: string;
}

export default function NewContentPromotionBanner2025({ 
  variant = 'featured', 
  className = '' 
}: NewContentPromotionBanner2025Props) {
  const content = {
    featured: {
      title: "🚀 NEW: AI 2025 Enterprise Success Stories",
      subtitle: "Real companies, real results. See how leading enterprises achieved 300%+ ROI through AI transformation.",
      cta: "Read Success Stories",
      href: "/blog/ai-2025-enterprise-success-stories",
      bgColor: "bg-gradient-to-r from-green-500 to-blue-600",
      textColor: "text-white"
    },
    compact: {
      title: "✨ New Content: AI Success Stories",
      subtitle: "300%+ ROI case studies now available",
      cta: "Explore",
      href: "/blog/ai-2025-enterprise-success-stories",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-600",
      textColor: "text-white"
    },
    hero: {
      title: "🎯 BREAKING: AI 2025 Quantum Computing Breakthrough",
      subtitle: "Discover the revolutionary quantum computing breakthroughs transforming AI capabilities. 1000x faster processing, 99.9% error correction, and unlimited possibilities.",
      cta: "Explore Quantum Future",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      bgColor: "bg-gradient-to-r from-indigo-600 to-purple-700",
      textColor: "text-white"
    }
  };

  const currentContent = content[variant];

  if (variant === 'hero') {
    return (
      <section className={`py-16 ${currentContent.bgColor} ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <span className="text-sm font-semibold text-white">NEW CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {currentContent.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              {currentContent.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={currentContent.href}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                {currentContent.cta}
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`${currentContent.bgColor} ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">
                {currentContent.title}
              </h3>
              <p className="text-sm text-white/90">
                {currentContent.subtitle}
              </p>
            </div>
            <Link
              href={currentContent.href}
              className="mt-4 sm:mt-0 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              {currentContent.cta}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-12 ${currentContent.bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-semibold text-white">NEW CONTENT</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {currentContent.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={currentContent.href}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {currentContent.cta}
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}