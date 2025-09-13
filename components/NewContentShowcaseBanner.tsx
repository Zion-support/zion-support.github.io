import React from 'react';
import Link from 'next/link';

export default function NewContentShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-3">
            <span className="text-sm font-medium">✨ NEW CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            🚀 Revolutionary AI 2026 Content Collection
          </h2>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            Explore our latest collection of AI 2026 breakthrough content including predictions, 
            case studies, and implementation guides featuring quantum-neural fusion and consciousness AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="text-lg font-bold mb-2">Revolutionary Predictions</h3>
            <p className="text-sm opacity-90 mb-4">
              Discover the most groundbreaking AI breakthroughs predicted for 2026, 
              including quantum consciousness and dimensional computing.
            </p>
            <Link
              href="/blog/ai-2026-revolutionary-breakthrough-predictions"
              className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              Read Predictions →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="text-lg font-bold mb-2">Breakthrough Case Study</h3>
            <p className="text-sm opacity-90 mb-4">
              How a Fortune 500 company achieved 25,000% ROI using AI 2026 quantum 
              breakthrough technology in just 6 months.
            </p>
            <Link
              href="/case-studies/ai-2026-quantum-breakthrough-enterprise-transformation"
              className="bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              View Case Study →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-lg font-bold mb-2">Implementation Master Guide</h3>
            <p className="text-sm opacity-90 mb-4">
              Complete 200-page guide for implementing AI 2026 revolutionary breakthroughs 
              with step-by-step instructions and ROI calculators.
            </p>
            <Link
              href="/resources/ai-2026-ultimate-implementation-master-guide"
              className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              Get Guide →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            🚀 Start Your AI 2026 Transformation
          </Link>
        </div>
      </div>
    </div>
  );
}