import React from 'react';
import Link from 'next/link';

export default function AI2025NewContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-8 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4 animate-pulse">
            🚀 NEW CONTENT RELEASED
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI 2025 Revolutionary Breakthrough Content
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI 2025 breakthrough content, 
            case studies, and implementation guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-2xl mb-3">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Ultimate Breakthrough</h3>
            <p className="text-sm opacity-90 mb-4">
              Complete guide to AI 2025 revolutionary breakthrough with 10,000% ROI potential.
            </p>
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="text-white font-semibold hover:underline"
            >
              Explore Now →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-2xl mb-3">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
            <p className="text-sm opacity-90 mb-4">
              Real case studies showcasing 10,000% ROI achievements and transformation results.
            </p>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough" 
              className="text-white font-semibold hover:underline"
            >
              View Stories →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-2xl mb-3">🔮</div>
            <h3 className="text-xl font-semibold mb-2">Future Predictions</h3>
            <p className="text-sm opacity-90 mb-4">
              Revolutionary AI trends and predictions for 2025 and beyond.
            </p>
            <Link 
              href="/blog/ai-2025-revolutionary-trends-predictions" 
              className="text-white font-semibold hover:underline"
            >
              Read Predictions →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-showcase" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Content
            </Link>
            <Link 
              href="/resources/ai-2025-revolutionary-implementation-guide" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Implementation Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}