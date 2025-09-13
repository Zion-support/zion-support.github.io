import React from 'react';
import Link from 'next/link';

export default function AI2025ContentShowcaseBanner() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🌟 AI 2025 Content Showcase
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Revolutionary content that's transforming businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              BREAKTHROUGH
            </span>
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              15,000% ROI
            </span>
            <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              REVOLUTIONARY
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-3">Breakthrough Innovations</h3>
            <p className="text-red-100 mb-4 text-sm">
              Revolutionary AI technologies delivering unprecedented results
            </p>
            <Link 
              href="/blog/ai-2025-breakthrough-innovations"
              className="inline-block bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Now
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-3">Mega Success Story</h3>
            <p className="text-green-100 mb-4 text-sm">
              15,000% ROI achieved through global AI transformation
            </p>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-mega-success"
              className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Story
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">Ultimate Playbook</h3>
            <p className="text-purple-100 mb-4 text-sm">
              Complete AI implementation guide with proven strategies
            </p>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-playbook"
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Guide
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Future Predictions</h3>
            <p className="text-blue-100 mb-4 text-sm">
              AI trends and predictions for 2025 and beyond
            </p>
            <Link 
              href="/blog/ai-2025-revolutionary-trends-predictions"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Trends
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🎯 Ready to Transform Your Business?</h3>
            <p className="text-lg text-blue-100 mb-6">
              Join thousands of companies already achieving breakthrough results with our AI solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all"
              >
                Get Started Today
              </Link>
              <Link 
                href="/tools/ai-2025-roi-calculator"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}