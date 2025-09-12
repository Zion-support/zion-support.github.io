import React from 'react';
import Link from 'next/link';

export default function EnhancedContentPromotionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 LATEST RELEASES - JANUARY 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content: $8.9B in Success Stories
          </h2>
          
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover breakthrough AI technologies, enterprise transformation strategies, and real-world 
            success stories that are reshaping industries. From quantum AI to advanced agents, get 
            expert insights on the future of business.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link href="/blog/ai-2025-advanced-ai-agents" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 h-full">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
              <h3 className="text-lg font-semibold mb-2">AI Agents Revolution</h3>
              <p className="text-sm opacity-90 mb-3">340% productivity boost with autonomous AI agents</p>
              <div className="flex items-center text-xs opacity-75">
                <span>12 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-green-500 text-white px-2 py-1 rounded">NEW</span>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2025-quantum-ai-breakthrough" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 h-full">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚛️</div>
              <h3 className="text-lg font-semibold mb-2">Quantum AI Breakthrough</h3>
              <p className="text-sm opacity-90 mb-3">1Mx speedup with quantum computing + AI</p>
              <div className="flex items-center text-xs opacity-75">
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-purple-500 text-white px-2 py-1 rounded">BREAKTHROUGH</span>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-2025-enterprise-ai-transformation-success" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 h-full">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-lg font-semibold mb-2">$3.2B Enterprise Success</h3>
              <p className="text-sm opacity-90 mb-3">Fortune 500 transformation with 450% ROI</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Case Study</span>
                <span className="mx-2">•</span>
                <span className="bg-yellow-500 text-white px-2 py-1 rounded">$3.2B</span>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-2025-financial-services-ai-revolution" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 h-full">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏦</div>
              <h3 className="text-lg font-semibold mb-2">$5.7B Banking Revolution</h3>
              <p className="text-sm opacity-90 mb-3">Financial services AI with 680% ROI</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Case Study</span>
                <span className="mx-2">•</span>
                <span className="bg-yellow-500 text-white px-2 py-1 rounded">$5.7B</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Read Latest Articles
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              View Success Stories
            </Link>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span>50+ New Articles</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              <span>25+ Case Studies</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              <span>$8.9B+ Value Created</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}