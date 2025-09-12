import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2031ContentPromotionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium animate-pulse">🚀 BREAKTHROUGH CONTENT - JANUARY 2025</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🔮 AI 2031 Future Predictions: Revolutionary Breakthrough Technologies
          </h2>
          
          <p className="text-lg opacity-90 mb-6 max-w-4xl mx-auto">
            Discover the most revolutionary AI breakthroughs predicted for 2031: Quantum AI supremacy, 
            brain-computer interfaces, autonomous space exploration, and transformative enterprise solutions 
            that will reshape our world forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2031-future-predictions-breakthrough"
              className="bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🔮 Explore AI 2031 Predictions
            </Link>
            <Link
              href="/case-studies/ai-2031-enterprise-transformation-breakthrough"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors text-lg backdrop-blur-sm"
            >
              🏆 10,000% ROI Case Study
            </Link>
          </div>
          
          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">⚛️</div>
              <h3 className="font-semibold mb-2">Quantum AI Supremacy</h3>
              <p className="text-sm opacity-80">Revolutionary computational breakthroughs</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-semibold mb-2">Brain-Computer Interfaces</h3>
              <p className="text-sm opacity-80">Direct neural communication with AI</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold mb-2">Autonomous Space Exploration</h3>
              <p className="text-sm opacity-80">AI-powered missions beyond Earth</p>
            </div>
          </div>
          
          {/* Additional content links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/ai-2031-implementation-master-guide"
              className="text-white/80 hover:text-white text-sm underline hover:no-underline transition-colors"
            >
              📚 Implementation Master Guide
            </Link>
            <span className="text-white/40">•</span>
            <Link
              href="/blog/ai-2031-future-predictions-breakthrough"
              className="text-white/80 hover:text-white text-sm underline hover:no-underline transition-colors"
            >
              🔮 Future Predictions
            </Link>
            <span className="text-white/40">•</span>
            <Link
              href="/case-studies/ai-2031-enterprise-transformation-breakthrough"
              className="text-white/80 hover:text-white text-sm underline hover:no-underline transition-colors"
            >
              🏆 Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}