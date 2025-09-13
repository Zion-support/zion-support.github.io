import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, BookOpen, Award } from 'lucide-react';

interface NewContent2026PromotionalBannerProps {
  variant?: 'hero' | 'floating' | 'inline';
  showStats?: boolean;
  autoHide?: boolean;
}

export default function NewContent2026PromotionalBanner({ 
  variant = 'hero', 
  showStats = true,
  autoHide = true 
}: NewContent2026PromotionalBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (!autoHide) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show banner after scrolling 30% of the page
      if (scrollPosition > windowHeight * 0.3 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed, autoHide]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (isDismissed && autoHide) return null;

  const content = {
    title: "🚀 Revolutionary AI Content Just Dropped!",
    subtitle: "Discover the latest AI trends, case studies, and implementation guides for 2026",
    features: [
      "AI Transformation Playbook 2026",
      "TechCorp's $500M ROI Case Study", 
      "Revolutionary AI Trends Predictions",
      "Complete Implementation Framework"
    ],
    stats: showStats ? [
      { label: "New Articles", value: "25+", icon: BookOpen },
      { label: "Case Studies", value: "15+", icon: Award },
      { label: "Success Rate", value: "300%", icon: TrendingUp },
      { label: "ROI Achieved", value: "$500M+", icon: Sparkles }
    ] : []
  };

  if (variant === 'floating' && autoHide) {
    if (!isVisible) return null;
    
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 max-w-lg mx-auto">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl shadow-2xl border border-white border-opacity-20 backdrop-blur-sm">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-bold bg-white bg-opacity-20 px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    NEW 2026 CONTENT
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2">
                  {content.title}
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  {content.subtitle}
                </p>
                {showStats && (
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {content.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold">{stat.value}</div>
                        <div className="text-xs opacity-80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
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
            
            <div className="flex gap-3">
              <Link
                href="/blog/ai-2026-revolutionary-trends-predictions"
                className="flex-1 bg-white text-purple-600 px-4 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center text-sm"
              >
                Read Latest
              </Link>
              <Link
                href="/case-studies/techcorp-ai-transformation-2026-500-million-roi"
                className="flex-1 border border-white text-white px-4 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors text-center text-sm"
              >
                View Case Study
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl shadow-xl overflow-hidden my-8">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-bold bg-white bg-opacity-20 px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  NEW 2026 CONTENT
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-3">
                {content.title}
              </h3>
              <p className="text-lg opacity-90 mb-6">
                {content.subtitle}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {content.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog/ai-2026-revolutionary-trends-predictions"
              className="flex-1 bg-white text-purple-600 px-6 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center text-lg"
            >
              Read Latest Trends
            </Link>
            <Link
              href="/case-studies/techcorp-ai-transformation-2026-500-million-roi"
              className="flex-1 border-2 border-white text-white px-6 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors text-center text-lg"
            >
              View Success Story
            </Link>
            <Link
              href="/resources/ai-transformation-playbook-2026-complete-guide"
              className="flex-1 border-2 border-white text-white px-6 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors text-center text-lg"
            >
              Get Playbook
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Hero variant (default)
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-lg font-bold bg-white bg-opacity-20 px-4 py-2 rounded-full flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              REVOLUTIONARY NEW CONTENT 2026
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {content.title}
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            {content.subtitle}
          </p>
          
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {content.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-12 h-12 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                  <div className="text-lg opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-revolutionary-trends-predictions"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              Read Latest Trends →
            </Link>
            <Link
              href="/case-studies/techcorp-ai-transformation-2026-500-million-roi"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              View $500M Success Story →
            </Link>
            <Link
              href="/resources/ai-transformation-playbook-2026-complete-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Get Complete Playbook →
            </Link>
          </div>
          
          <div className="text-center">
            <p className="text-lg opacity-80 mb-4">What's Inside:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {content.features.map((feature, index) => (
                <span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { NewContent2026PromotionalBanner };