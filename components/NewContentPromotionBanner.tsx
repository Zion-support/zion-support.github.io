import React from 'react';
import Link from 'next/link';

interface NewContentPromotionBannerProps {
  className?: string;
}

export default function NewContentPromotionBanner({ className = '' }: NewContentPromotionBannerProps) {
  return (
    <div className={`bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-white/20 text-white text-xs font-medium px-2 py-1 rounded-full">
                NEW CONTENT
              </span>
              <span className="text-white/80 text-sm">Just Published</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Discover Our Latest AI Insights & Resources
            </h2>
            <p className="text-white/90 text-lg mb-4">
              Explore cutting-edge AI trends, real-world case studies, and comprehensive guides 
              to prepare your business for the AI revolution of 2026.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">AI 2026 Trends</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Manufacturing AI</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Strategy Playbook</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2026-revolutionary-trends"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read Latest Article
            </Link>
            <Link 
              href="/resources/ai-2026-strategy-playbook"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              Download Playbook
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}