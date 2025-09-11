import React from 'react';
import Link from 'next/link';

interface ContentPromoBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  variant?: 'default' | 'success' | 'warning' | 'info';
  isVisible?: boolean;
}

export default function ContentPromoBanner({
  title,
  description,
  ctaText,
  ctaHref,
  variant = 'default',
  isVisible = true
}: ContentPromoBannerProps) {
  if (!isVisible) return null;

  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return {
          container: 'bg-gradient-to-r from-green-500 to-emerald-600',
          text: 'text-white',
          button: 'bg-white text-green-600 hover:bg-gray-100'
        };
      case 'warning':
        return {
          container: 'bg-gradient-to-r from-orange-500 to-red-500',
          text: 'text-white',
          button: 'bg-white text-orange-600 hover:bg-gray-100'
        };
      case 'info':
        return {
          container: 'bg-gradient-to-r from-blue-500 to-indigo-600',
          text: 'text-white',
          button: 'bg-white text-blue-600 hover:bg-gray-100'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-purple-500 to-pink-600',
          text: 'text-white',
          button: 'bg-white text-purple-600 hover:bg-gray-100'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`${styles.container} py-4 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <h3 className={`text-lg font-bold ${styles.text} mb-1`}>
              {title}
            </h3>
            <p className={`text-sm ${styles.text} opacity-90`}>
              {description}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href={ctaHref}
              className={`${styles.button} px-6 py-2 rounded-lg font-semibold transition-colors text-sm`}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Predefined banner configurations
export const contentPromoBanners = {
  newGuide: {
    title: "🎉 NEW: AI Implementation Master Guide 2026",
    description: "200+ pages of proven strategies, templates, and case studies - completely free!",
    ctaText: "Download Now",
    ctaHref: "/resources/ai-implementation-master-guide-2026",
    variant: "success" as const
  },
  productivity: {
    title: "🚀 10x Your Team's Productivity",
    description: "Learn the proven AI strategies that deliver 300% productivity gains in our latest guide",
    ctaText: "Read Guide",
    ctaHref: "/blog/ai-2025-productivity-revolution",
    variant: "info" as const
  },
  funding: {
    title: "💰 Master AI Startup Funding",
    description: "Get insider strategies, pitch templates, and real-world case studies from successful AI companies",
    ctaText: "Learn More",
    ctaHref: "/blog/ai-startup-funding-2025",
    variant: "warning" as const
  },
  caseStudy: {
    title: "📊 300% Revenue Growth Case Study",
    description: "See how a major retail chain achieved massive growth with AI transformation",
    ctaText: "View Case Study",
    ctaHref: "/case-studies/ai-retail-transformation-2025",
    variant: "default" as const
  }
};