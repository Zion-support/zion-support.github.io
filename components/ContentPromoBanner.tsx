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
    title: "🎉 BREAKTHROUGH: AI Healthcare Diagnosis 95% Accuracy",
    description: "See how AI saved 2,500+ lives and delivered $50M+ in savings - complete case study inside!",
    ctaText: "Read Case Study",
    ctaHref: "/case-studies/ai-healthcare-diagnosis-breakthrough-2026",
    variant: "success" as const
  },
  enterprise: {
    title: "🏢 AI Enterprise Transformation 2026",
    description: "Complete implementation guide with 400% ROI case studies from Fortune 500 companies",
    ctaText: "Read Guide",
    ctaHref: "/blog/ai-2026-enterprise-transformation",
    variant: "info" as const
  },
  predictions: {
    title: "🔮 AI Breakthrough Predictions 2026",
    description: "Discover the most significant AI breakthroughs predicted for 2026 - from AGI to quantum AI",
    ctaText: "Explore Predictions",
    ctaHref: "/blog/ai-2026-breakthrough-predictions",
    variant: "warning" as const
  },
  caseStudy: {
    title: "📊 95% Diagnostic Accuracy Case Study",
    description: "How AI transformed healthcare with 95% accuracy, 80% time reduction, and $50M+ savings",
    ctaText: "View Case Study",
    ctaHref: "/case-studies/ai-healthcare-diagnosis-breakthrough-2026",
    variant: "default" as const
  }
};