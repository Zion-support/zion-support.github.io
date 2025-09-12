import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 JUST RELEASED</span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎉 Massive Content Update: 3+ New Expert Resources Just Dropped!
          </h2>
          
          {/* Description */}
          <p className="text-lg opacity-90 mb-6 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content: <strong>AI Enterprise Integration Masterclass</strong>, 
            <strong> AI Trends 2025 Predictions</strong>, and <strong>Healthcare AI Success Story</strong>. 
            Get expert insights on the technologies and strategies transforming businesses in 2025.
          </p>
          
          {/* Content highlights */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20">
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="font-semibold mb-1">Enterprise Masterclass</h3>
              <p className="text-sm opacity-90">Complete AI integration guide</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20">
              <div className="text-2xl mb-2">🔮</div>
              <h3 className="font-semibold mb-1">Trend Predictions</h3>
              <p className="text-sm opacity-90">2025 AI trends analysis</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20">
              <div className="text-2xl mb-2">🏥</div>
              <h3 className="font-semibold mb-1">Healthcare Success</h3>
              <p className="text-sm opacity-90">$2.3M savings case study</p>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All New Content
            </Link>
            <Link
              href="/blog/ai-2025-enterprise-integration-masterclass"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Start with Masterclass
            </Link>
          </div>
          
          {/* Additional info */}
          <div className="mt-6 text-sm opacity-75">
            <p>📚 25+ min comprehensive guides • 🏆 Real-world case studies • 🎯 Actionable insights</p>
          </div>
        </div>
      </div>
    </div>
  );
}