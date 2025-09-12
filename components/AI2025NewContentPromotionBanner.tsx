import React from 'react';
import Link from 'next/link';

export default function AI2025NewContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium">🔥 NEW CONTENT DROP - JANUARY 2025</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Revolutionary AI 2025 Content Just Released!
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-4xl mx-auto">
            Discover our most comprehensive AI analysis yet: Complete trends breakdown, breakthrough case studies, 
            and the ultimate implementation master guide. Everything you need to dominate AI in 2025.
          </p>
          
          {/* Content Highlights */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-bold text-sm mb-1">Comprehensive Trends Analysis</h3>
              <p className="text-xs opacity-80">15 critical AI trends reshaping 2025</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-bold text-sm mb-1">900% ROI Case Study</h3>
              <p className="text-xs opacity-80">Real Fortune 500 transformation story</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-bold text-sm mb-1">Master Implementation Guide</h3>
              <p className="text-xs opacity-80">Complete blueprint for AI success</p>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog/ai-2025-comprehensive-trends-analysis"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              🔮 Explore AI 2025 Trends
            </Link>
            <Link
              href="/case-studies/ai-2025-global-tech-transformation-breakthrough"
              className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-30 transition-colors text-lg border border-white border-opacity-30 backdrop-blur-sm"
            >
              🏆 View 900% ROI Success
            </Link>
            <Link
              href="/resources/ai-2025-comprehensive-implementation-master-guide"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              📚 Get Master Guide
            </Link>
          </div>
          
          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/content-showcase" className="text-white hover:text-yellow-300 transition-colors underline">
              📚 View All Content
            </Link>
            <span className="text-white opacity-50">•</span>
            <Link href="/webinars" className="text-white hover:text-yellow-300 transition-colors underline">
              🎥 Watch Webinars
            </Link>
            <span className="text-white opacity-50">•</span>
            <Link href="/tools/ai-roi-calculator-2026" className="text-white hover:text-yellow-300 transition-colors underline">
              💰 Calculate ROI
            </Link>
            <span className="text-white opacity-50">•</span>
            <Link href="/contact" className="text-white hover:text-yellow-300 transition-colors underline">
              🤝 Get Expert Help
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute top-8 right-8 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
    </div>
  );
}