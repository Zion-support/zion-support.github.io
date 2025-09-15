import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function NewContent2025RevolutionaryBanner() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium animate-pulse">🚀 REVOLUTIONARY CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Revolutionary Content Just Dropped
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content including AI trendsenterprise automation guides
            and real-world success stories delivering 500-2000% ROI.
          </p>
          
          {/* Featured Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a href="/blog/ai-2025-enterprise-automation-revolution" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                <h3 className="text-lg font-semibold mb-2">AI 2025 Enterprise Automation Revolution</h3>
                <p className="text-sm opacity-90 mb-3">Complete implementation guide with 500-2000% ROI strategies</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>25 min read</span>
                  <span className="mx-2">•</span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full">NEW</span>
                </div>
              </div>
            </a>

            <a href="/blog/ai-2025-trends-predictions" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                <h3 className="text-lg font-semibold mb-2">AI 2025 Trends & Predictions</h3>
                <p className="text-sm opacity-90 mb-3">Explore the future of AI with comprehensive trend analysis</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>20 min read</span>
                  <span className="mx-2">•</span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full">HOT</span>
                </div>
              </div>
            </a>

            <a href="/case-studies/ai-2025-global-enterprise-transformation-success" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <h3 className="text-lg font-semibold mb-2">Global Enterprise Transformation Success</h3>
                <p className="text-sm opacity-90 mb-3">Fortune 500 company achieves 1,200% ROI through AI transformation</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full">BREAKTHROUGH</span>
                </div>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/revolutionary-content-showcase-2025"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🔥 View All Revolutionary Content
            </a>
            <a
              href="/newsletter"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              📧 Get Updates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}