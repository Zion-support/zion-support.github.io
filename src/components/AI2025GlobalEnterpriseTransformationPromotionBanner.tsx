import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025GlobalEnterpriseTransformationPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 text-white py-8 relative overflow-hidden">
      {/* Animated success elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-yellow-400/20 rounded-full animate-bounce delay-3000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-semibold mb-4 animate-pulse">
            🏆 SUCCESS STORY - FORTUNE 500
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            AI 2025 Global Enterprise Transformation
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
            How a Fortune 500 company achieved <span className="text-green-400 font-bold text-2xl">1,200% ROI</span> through revolutionary AI implementation and autonomous systems
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-green-400/50">
              <span className="text-green-400 font-bold text-lg">1,200% ROI</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-blue-400/50">
              <span className="text-blue-400 font-bold text-lg">95% Cost Reduction</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-purple-400/50">
              <span className="text-purple-400 font-bold text-lg">10x Efficiency</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-yellow-400/50">
              <span className="text-yellow-400 font-bold text-lg">6 Months</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" 
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🏆 Read Success Story
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🚀 Start Your Transformation
            </a>
            <a 
              href="/webinars/enterprise-ai-transformation" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🎥 Watch Webinar
            </a>
          </div>
          
          <div className="mt-6 text-sm text-gray-400">
            💼 Free enterprise transformation consultation for companies with 500+ employees
          </div>
        </div>
      </div>
    </div>
  );
}