import React from 'react';
import Link from 'next/link';

// Simple PromotionalBanner component
const PromotionalBanner = ({ message, ctaText, ctaLink, backgroundColor, textColor }) => (
  <div className={`w-full ${backgroundColor} ${textColor} py-4 px-6 text-center`}>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-bold text-sm md:text-base">{message}</span>
      <Link 
        href={ctaLink}
        className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
      >
        {ctaText} →
      </Link>
    </div>
  </div>
);

export const AIEnterpriseRevolutionBanner = () => (
  <PromotionalBanner
    message="🚀 REVOLUTION: AI Enterprise Revolution 2026 - Achieve 300% ROI & 90% Efficiency Gains"
    ctaText="Read Guide"
    ctaLink="/blog/ai-2026-enterprise-revolution"
    backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={15}
  />
);

export const AIAutonomousSystemsBanner = () => (
  <PromotionalBanner
    message="🤖 AUTONOMOUS: AI Autonomous Systems 2026 - 95% Automation & 80% Cost Reduction"
    ctaText="Explore Guide"
    ctaLink="/blog/ai-autonomous-systems-2026"
    backgroundColor="bg-gradient-to-r from-teal-600 to-cyan-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={15}
  />
);

export const AIEnterpriseTransformationMegaSuccessBanner = () => (
  <PromotionalBanner
    message="🏆 MEGA SUCCESS: Fortune 500 AI Transformation - 400% ROI & $50M Annual Savings"
    ctaText="View Case Study"
    ctaLink="/case-studies/ai-enterprise-transformation-mega-success-2026"
    backgroundColor="bg-gradient-to-r from-yellow-600 to-orange-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={15}
  />
);

export const AIRevolutionaryContentShowcaseBanner = () => (
  <PromotionalBanner
    message="✨ SHOWCASE: Discover Our Latest Revolutionary AI Content - Guides, Case Studies & Insights"
    ctaText="View All Content"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-indigo-600 to-blue-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={15}
  />
);

export const AI2026MegaBreakthroughBanner = () => (
  <PromotionalBanner
    message="💡 BREAKTHROUGH: AI 2026 Mega Innovations - Reshaping Industries with Next-Gen AI"
    ctaText="Learn More"
    ctaLink="/blog/ai-2026-mega-breakthrough"
    backgroundColor="bg-gradient-to-r from-red-600 to-purple-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={15}
  />
);

// Default export
export default function NewContent2026RevolutionaryBanners() {
  return (
    <div>
      <AIEnterpriseRevolutionBanner />
      <AIAutonomousSystemsBanner />
      <AI2026MegaBreakthroughBanner />
    </div>
  );
}