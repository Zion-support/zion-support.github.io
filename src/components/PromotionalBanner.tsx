import React, { useState, useEffect } from 'react';

interface PromotionalBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor?: string;
  textColor?: string;
  autoHide?: boolean;
  hideDelay?: number;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  backgroundColor = 'bg-gradient-to-r from-blue-600 to-indigo-600',
  textColor = 'text-white',
  autoHide = false,
  hideDelay = 5000
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      icon: Zap,
      title: "NEW: AI Agent Observability",
      description: "Traces, policy checks, human feedback",
      color: "text-blue-400",
    },
    {
      icon: Bot,
      title: "Secure RAG 2025",
      description: "Auth-aware retrieval & prompt firewalls",
      color: "text-purple-400",
    },
    {
      icon: BarChart3,
      title: "Cost‑Aware Evals",
      description: "Quality at half the token budget",
      color: "text-green-400",
    },
  ];

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, hideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, hideDelay]);

  if (!isVisible) return null;

  return (
    <div className={`${backgroundColor} ${textColor} py-4 px-4 relative overflow-hidden`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={ctaLink}
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            {ctaText}
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors p-1"
            aria-label="Close banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
