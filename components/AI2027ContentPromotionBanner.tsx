import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Brain, TrendingUp } from 'lucide-react';

export default function AI2027ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold bg-yellow-400 text-purple-900 px-3 py-1 rounded-full">
                BREAKTHROUGH CONTENT
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              AI 2027 Revolutionary Breakthroughs
            </h2>
            <p className="text-purple-100 text-lg mb-4">
              Discover the future of AI with our latest predictions, case studies, and implementation guides. 
              Get ahead of the curve with 3000% ROI success stories.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                <span>Quantum AI</span>
              </div>
              <div className="flex items-center gap-1">
                <Brain className="w-4 h-4" />
                <span>Neural Interfaces</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span>3000% ROI</span>
              </div>
            </div>
          </div>

          {/* Right Content - Links */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2027-future-predictions"
              className="group bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
            >
              <span>Future Predictions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/case-studies/ai-2027-automotive-transformation-breakthrough"
              className="group border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center gap-2"
            >
              <span>Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/resources/ai-2027-ultimate-implementation-master-guide"
              className="group bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors flex items-center justify-center gap-2"
            >
              <span>Implementation Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}