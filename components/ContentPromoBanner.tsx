<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ContentPromoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show banner after scrolling 50% of the page
      if (scrollPosition > windowHeight * 0.5 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-2xl border border-white border-opacity-20 backdrop-blur-sm">
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium bg-white bg-opacity-20 px-2 py-1 rounded-full">
                  🚀 NEW CONTENT
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1">
                15+ New AI Resources Just Dropped!
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Interactive tools, guides, and case studies to accelerate your success.
              </p>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white hover:text-gray-200 transition-colors ml-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex gap-2">
            <Link
              href="/content-showcase"
              className="flex-1 bg-white text-purple-600 px-3 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center text-sm"
            >
              Explore Now
            </Link>
            <Link
              href="/resources"
              className="flex-1 border border-white text-white px-3 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center text-sm"
            >
              Download Free
>>>>>>> cursor/create-and-deploy-new-content-28f5
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
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
=======
}
>>>>>>> cursor/create-and-deploy-new-content-28f5
