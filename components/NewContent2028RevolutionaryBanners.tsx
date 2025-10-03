// @ts-nocheck
'use client';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

interface PromotionalBannerProps {
  message: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor?: string;
  textColor?: string;
  showClose?: boolean;
  autoHide?: boolean;
  hideAfter?: number; // in seconds
}

export default function PromotionalBanner({
  message,
  ctaText,
  ctaLink,
  backgroundColor = "bg-gradient-to-r from-blue-600 to-purple-600",
  textColor = "text-white",
  showClose = true,
  autoHide = false,
  hideAfter = 10
}: PromotionalBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        handleClose();
      }, hideAfter * 1000);
      return () => clearTimeout(timer);
    }
  }, [autoHide, hideAfter]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`relative ${backgroundColor} ${textColor} py-3 px-4 transition-all duration-300 ${
      isClosing ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'
    }`}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
            <span className="font-medium text-sm md:text-base">{message}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link
              href={ctaLink}
              className="bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 border border-white/30"
            >
              {ctaText}
            </Link>
            
            {showClose && (
              <button
                onClick={handleClose}
                className="hover:bg-white/20 p-1 rounded-full transition-colors duration-200"
                aria-label="Close banner"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// NEW 2028 REVOLUTIONARY CONTENT BANNERS
export const AI2028AutonomousEnterpriseRevolutionBanner = () => (
  <PromotionalBanner
    message="🚀 BREAKTHROUGH 2028: AI Autonomous Enterprise Revolution - 99.9% Automation & $50M+ ROI"
    ctaText="Read Article"
    ctaLink="/blog/ai-2028-autonomous-enterprise-revolution"
    backgroundColor="bg-gradient-to-r from-purple-600 to-indigo-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);

export const AIQuantumComputingBreakthrough2028Banner = () => (
  <PromotionalBanner
    message="⚛️ QUANTUM BREAKTHROUGH 2028: 1000x Faster AI Processing & $100M+ ROI Revolution"
    ctaText="Discover Quantum AI"
    ctaLink="/blog/ai-quantum-computing-breakthrough-2028"
    backgroundColor="bg-gradient-to-r from-indigo-600 to-purple-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={22}
  />
);

export const AI2028MegaTransformationSuccessBanner = () => (
  <PromotionalBanner
    message="🏆 MEGA SUCCESS 2028: $200M ROI Case Study - Fortune 500 AI Transformation Breakthrough"
    ctaText="View Case Study"
    ctaLink="/case-studies/ai-2028-mega-transformation-success"
    backgroundColor="bg-gradient-to-r from-green-600 to-blue-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={25}
  />
);

export const NewContent2028MegaShowcaseBanner = () => (
  <PromotionalBanner
    message="🎉 JUST RELEASED: 3 Revolutionary AI 2028 Articles & Case Studies - $350M+ Combined Value!"
    ctaText="Explore All New Content"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={25}
  />
);

export const AI2028FutureOfEnterpriseBanner = () => (
  <PromotionalBanner
    message="🔮 THE FUTURE IS HERE: AI 2028 Technologies Transforming Enterprise Operations Forever"
    ctaText="Learn More"
    ctaLink="/blog/ai-2028-autonomous-enterprise-revolution"
    backgroundColor="bg-gradient-to-r from-cyan-600 to-blue-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={18}
  />
);

export const QuantumAIRevolutionBanner = () => (
  <PromotionalBanner
    message="⚡ QUANTUM AI REVOLUTION: 1000x Performance Gains & Unprecedented Enterprise Results"
    ctaText="Read Breakthrough"
    ctaLink="/blog/ai-quantum-computing-breakthrough-2028"
    backgroundColor="bg-gradient-to-r from-purple-600 to-fuchsia-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);

export const EnterpriseTransformation2028Banner = () => (
  <PromotionalBanner
    message="🏢 ENTERPRISE TRANSFORMATION 2028: Complete Digital Revolution with $200M+ Success Stories"
    ctaText="View Success Stories"
    ctaLink="/case-studies/ai-2028-mega-transformation-success"
    backgroundColor="bg-gradient-to-r from-blue-600 to-teal-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={22}
  />
);

export const LatestAI2028BreakthroughsBanner = () => (
  <PromotionalBanner
    message="✨ LATEST AI 2028: Autonomous Enterprise, Quantum Computing & $350M Success Stories"
    ctaText="Discover Breakthroughs"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-teal-600 to-cyan-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);

export const RevolutionaryContent2028Banner = () => (
  <PromotionalBanner
    message="🚀 REVOLUTIONARY 2028: The Most Advanced AI Content Ever Published - Enterprise Transformation Guide"
    ctaText="Read Now"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-indigo-600 to-purple-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={18}
  />
);

export const AI2028UltimateGuideBanner = () => (
  <PromotionalBanner
    message="📚 ULTIMATE GUIDE 2028: Everything You Need to Know About AI Enterprise Transformation"
    ctaText="Get the Guide"
    ctaLink="/blog/ai-2028-autonomous-enterprise-revolution"
    backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);

// Site-wide banner to promote newly added content
export const NewJanuary2028PromotionsBanner = () => (
  <PromotionalBanner
    message="🔥 New: AI 2028 Autonomous Enterprise, Quantum Computing Breakthrough & $200M Success Stories"
    ctaText="Read the latest"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-purple-600 to-indigo-600"
    autoHide={true}
    hideAfter={22}
  />
);