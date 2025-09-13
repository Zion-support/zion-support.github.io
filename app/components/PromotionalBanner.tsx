import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface PromotionalBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  badge?: string;
  gradient?: string;
  animation?: boolean;
}

export default function PromotionalBanner({
  title,
  subtitle,
  ctaText,
  ctaLink,
  badge = "NEW",
  gradient = "from-blue-500 to-purple-600",
  animation = true
}: PromotionalBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r ${gradient} rounded-2xl p-8 text-white mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {animation && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
      )}
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                {badge}
              </span>
              <span className="text-white/80 text-sm">Limited Time Offer</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              {title}
            </h2>
            <p className="text-xl text-white/90 mb-6">
              {subtitle}
            </p>
            <Link 
              href={ctaLink}
              className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {ctaText}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-6xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BreakthroughBanner() {
  return (
    <PromotionalBanner
      title="AI 2025 Revolutionary Breakthrough"
      subtitle="Achieve 10,000% ROI with 99.9% accuracy and 10,000x faster processing speeds. The future is here."
      ctaText="Discover Breakthrough"
      ctaLink="/blog/ai-2025-revolutionary-breakthrough-announcement"
      badge="BREAKTHROUGH"
      gradient="from-red-500 to-pink-600"
    />
  );
}

export function QuantumBanner() {
  return (
    <PromotionalBanner
      title="AI 2026 Quantum-Neural Fusion"
      subtitle="Experience infinite processing power with quantum-enhanced neural networks delivering 15,000% ROI."
      ctaText="Enter Quantum Era"
      ctaLink="/blog/ai-2026-quantum-neural-fusion-breakthrough"
      badge="QUANTUM"
      gradient="from-purple-500 to-indigo-600"
    />
  );
}

export function ContentShowcaseBanner() {
  return (
    <PromotionalBanner
      title="Ultimate Content Revolution"
      subtitle="Explore 1000+ breakthrough articles, case studies, and resources covering AI 2025-2040 predictions."
      ctaText="Explore Content"
      ctaLink="/revolutionary-content-showcase-2025"
      badge="REVOLUTIONARY"
      gradient="from-green-500 to-emerald-600"
    />
  );
}

export function SuccessStoryBanner() {
  return (
    <PromotionalBanner
      title="Real Success Stories"
      subtitle="See how Fortune 500 companies achieved 2,000-15,000% ROI with our AI solutions."
      ctaText="View Case Studies"
      ctaLink="/case-studies"
      badge="SUCCESS"
      gradient="from-orange-500 to-red-600"
    />
  );
}