import React from 'react';
import Link from 'next/link';

export default function UltimateAI2026PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-6 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-3">
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mr-3 animate-pulse">
              🚀 BREAKTHROUGH 2026
            </span>
            <span className="text-2xl font-bold">Revolutionary AI Innovations</span>
          </div>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            Discover the breakthrough technologies that are reshaping industries with unprecedented ROI improvements. 
            From quantum AI to neural interfaces, explore the future of artificial intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-semibold mb-2">🧠 Breakthrough Innovations</h3>
            <p className="text-sm opacity-90 mb-3">Quantum-enhanced neural networks and autonomous systems</p>
            <Link 
              href="/blog/ai-2026-breakthrough-innovations"
              className="text-yellow-300 hover:text-yellow-100 text-sm font-medium"
            >
              Explore Now →
            </Link>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-semibold mb-2">💰 5,000% ROI Case Study</h3>
            <p className="text-sm opacity-90 mb-3">Global enterprise transformation success story</p>
            <Link 
              href="/case-studies/ai-2026-global-enterprise-transformation-breakthrough"
              className="text-yellow-300 hover:text-yellow-100 text-sm font-medium"
            >
              View Case Study →
            </Link>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-semibold mb-2">🔮 Future Predictions</h3>
            <p className="text-sm opacity-90 mb-3">Revolutionary breakthrough technologies forecast</p>
            <Link 
              href="/blog/ai-2026-future-predictions-breakthrough"
              className="text-yellow-300 hover:text-yellow-100 text-sm font-medium"
            >
              Read Predictions →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/resources/ai-2026-implementation-guide"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}