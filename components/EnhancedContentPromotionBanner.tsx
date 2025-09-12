import React from 'react';
import Link from 'next/link';

export default function EnhancedContentPromotionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 LATEST BREAKTHROUGHS - JANUARY 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content That's Transforming Industries
          </h2>
          
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the latest AI breakthroughs, enterprise implementation guides, and billion-dollar 
            transformation success stories. Expert insights from industry leaders delivering measurable results.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link href="/blog/ai-2025-advanced-ai-agents" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🤖</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Advanced AI Agents</h3>
                  <p className="text-sm opacity-75">Enterprise Implementation Guide</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Complete guide to implementing autonomous AI agents with 340% ROI and real-world success stories.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">15 min read</span>
                <span className="text-xs font-medium">🔥 HOT</span>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2025-cybersecurity-revolution" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🛡️</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">AI Cybersecurity</h3>
                  <p className="text-sm opacity-75">Advanced Threat Detection</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                94% threat detection accuracy with zero-day attack prevention and autonomous security response.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">18 min read</span>
                <span className="text-xs font-medium">🆕 NEW</span>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-2025-global-manufacturing-ai-transformation-success" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🏭</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">$2.1B Success Story</h3>
                  <p className="text-sm opacity-75">Manufacturing Transformation</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Global manufacturing giant achieves 340% ROI across 47 facilities with comprehensive AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">Case Study</span>
                <span className="text-xs font-medium">💰 $2.1B</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Browse Articles
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              View Case Studies
            </Link>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span>25,000+ AI Professionals</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              <span>340% Average ROI</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              <span>Updated Weekly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}