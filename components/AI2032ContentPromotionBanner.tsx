import React from 'react';
import Link from 'next/link';

export default function AI2032ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 AI 2032 BREAKTHROUGH CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary AI 2032 Content Just Released!
          </h2>
          
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the most advanced AI technologies that will transform industries and create unprecedented opportunities. 
            Explore quantum AI breakthroughs, neural interfaces, and autonomous systems that will reshape the future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link
              href="/ai-2032-breakthrough-showcase"
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-30 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <div className="font-bold text-lg mb-2">AI 2032 Breakthrough Showcase</div>
              <div className="text-sm opacity-80">Revolutionary technologies and predictions</div>
            </Link>
            
            <Link
              href="/blog/ai-2032-future-predictions-breakthrough"
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-30 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔮</div>
              <div className="font-bold text-lg mb-2">Future Predictions</div>
              <div className="text-sm opacity-80">Comprehensive AI 2032 trend analysis</div>
            </Link>
            
            <Link
              href="/case-studies/ai-2032-quantum-ai-breakthrough-20000-roi"
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-30 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
              <div className="font-bold text-lg mb-2">20,000% ROI Case Study</div>
              <div className="text-sm opacity-80">Real-world implementation results</div>
            </Link>
            
            <Link
              href="/resources/ai-2032-ultimate-implementation-master-guide"
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-30 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
              <div className="font-bold text-lg mb-2">Master Implementation Guide</div>
              <div className="text-sm opacity-80">Complete deployment strategies</div>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2032-breakthrough-showcase"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              🚀 Explore AI 2032 Content
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}