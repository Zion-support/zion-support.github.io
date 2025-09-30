import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionalBanner2026() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              🚀 New Content Alert: AI Enterprise Automation 2026
            </h2>
            <p className="text-lg text-blue-100 mb-4">
              Discover the latest insights on AI enterprise automation, featuring real success stories 
              and proven strategies that deliver 300% ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/blog/ai-enterprise-automation-2026"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Read Latest Blog Post
              </Link>
              <Link
                href="/case-studies/ai-transformation-mega-success-2026"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Success Story
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-white mb-1">300%</div>
              <div className="text-sm text-blue-100">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}