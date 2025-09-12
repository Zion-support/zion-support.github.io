import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <span className="animate-pulse mr-2">🚀</span>
            <span className="text-sm font-medium">NEW CONTENT 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content Just Dropped
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI 2026: Advanced Autonomous Systems, 
            Complete Implementation Master Guide, and Global Logistics Success Stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">🤖</span>
              <h3 className="text-lg font-bold">Advanced Autonomous Systems</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Explore the revolutionary advances in autonomous systems powered by AI in 2026. 
              From self-driving vehicles to smart cities and industrial automation.
            </p>
            <Link 
              href="/blog/ai-2026-advanced-autonomous-systems"
              className="inline-flex items-center text-sm font-medium bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">📚</span>
              <h3 className="text-lg font-bold">Implementation Master Guide</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              The ultimate comprehensive guide to implementing AI solutions in 2026. 
              From strategy to execution, this master guide covers everything you need to know.
            </p>
            <Link 
              href="/resources/ai-2026-complete-implementation-master-guide"
              className="inline-flex items-center text-sm font-medium bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              Download Guide
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">📈</span>
              <h3 className="text-lg font-bold">Logistics Success Story</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Discover how a global logistics company achieved 60% efficiency gains and 
              $200M in cost savings through AI transformation in 2026.
            </p>
            <Link 
              href="/case-studies/ai-2026-global-logistics-transformation-success"
              className="inline-flex items-center text-sm font-medium bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              View Case Study
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span>Fresh Content</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              <span>Expert Insights</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              <span>Real Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}