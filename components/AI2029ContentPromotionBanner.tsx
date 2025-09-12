import React from 'react';
import Link from 'next/link';

export default function AI2029ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-4">
            🔮 AI 2029 BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Future of AI is Here
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the groundbreaking AI 2029 predictions, quantum breakthroughs, and implementation strategies 
            that will transform your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link 
            href="/blog/ai-2029-future-predictions"
            className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-3">AI 2029 Future Predictions</h3>
            <p className="text-sm opacity-90 mb-4">
              Comprehensive analysis of quantum AI, neural interfaces, and autonomous systems that will define the next decade.
            </p>
            <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
              Read Predictions
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link 
            href="/case-studies/ai-2029-quantum-breakthrough"
            className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum AI Breakthrough</h3>
            <p className="text-sm opacity-90 mb-4">
              Real-world case study showing 3,000% ROI using quantum AI for financial services transformation.
            </p>
            <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
              View Case Study
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link 
            href="/resources/ai-2029-implementation-master-guide"
            className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">Implementation Master Guide</h3>
            <p className="text-sm opacity-90 mb-4">
              Complete roadmap for implementing quantum AI, neural interfaces, and autonomous systems in your organization.
            </p>
            <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
              Get Guide
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">3,000%</span>
              <span className="text-sm opacity-90">ROI Achieved</span>
            </div>
            <div className="w-px h-8 bg-white bg-opacity-30"></div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">$2.4B</span>
              <span className="text-sm opacity-90">Additional Revenue</span>
            </div>
            <div className="w-px h-8 bg-white bg-opacity-30"></div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">95%</span>
              <span className="text-sm opacity-90">Risk Reduction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}