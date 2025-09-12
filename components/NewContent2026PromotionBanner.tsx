import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white py-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT DROP - JANUARY 2025</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Revolutionary AI Content for 2026
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Discover cutting-edge AI trends, implementation guides, and success stories that will transform your business in 2026
          </p>
          
          {/* Content Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-semibold mb-2">AI 2026 Trends</h3>
              <p className="text-sm text-blue-100">Revolutionary trends that will reshape industries</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold mb-2">Master Guide</h3>
              <p className="text-sm text-blue-100">Complete AI implementation blueprint</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold mb-2">Success Stories</h3>
              <p className="text-sm text-blue-100">$2.3B revenue increase case studies</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2026-revolutionary-trends"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore AI 2026 Trends
            </Link>
            <Link
              href="/resources/ai-2026-implementation-master-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Download Master Guide
            </Link>
          </div>
          
          {/* Additional Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/case-studies/ai-transformation-global-retail-giant-2026" className="text-blue-200 hover:text-white transition-colors">
              📊 Retail Transformation Case Study
            </Link>
            <Link href="/ai-2026-technology-showcase" className="text-blue-200 hover:text-white transition-colors">
              🔬 Technology Showcase
            </Link>
            <Link href="/ai-trends-2026-predictions" className="text-blue-200 hover:text-white transition-colors">
              📈 Future Predictions
            </Link>
            <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
              💬 Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}