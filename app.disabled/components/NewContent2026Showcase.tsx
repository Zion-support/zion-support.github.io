import React from 'react';
import Link from 'next/link';

export default function NewContent2026Showcase() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 JUST RELEASED: 2026 CONTENT</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Latest AI 2026 Revolutionary Content
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our newest content covering the most advanced AI technologies and autonomous business systems transforming enterprises worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Blog Post */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">🤖</div>
                <div className="text-sm font-medium opacity-90">AUTONOMOUS BUSINESS</div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">NEW</span>
                <span className="text-gray-500 text-sm ml-2">January 14, 2025</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                AI 2026: Next-Generation Autonomous Business Revolution
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                Discover the revolutionary autonomous business systems that will transform enterprises in 2026. Learn how next-generation AI agents are creating fully autonomous business operations.
              </p>
              <Link 
                href="/blog/ai-2026-next-generation-autonomous-business-revolution-ultimate-guide"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
              >
                Read Full Guide →
              </Link>
            </div>
          </div>
          
          {/* Featured Case Study */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">📊</div>
                <div className="text-sm font-medium opacity-90">SUCCESS STORY</div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">FEATURED</span>
                <span className="text-gray-500 text-sm ml-2">January 14, 2025</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                AI 2026 Global Autonomous Transformation Success
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                Fortune 100 company achieves 2,400% ROI through complete autonomous business transformation. Comprehensive case study of revolutionary AI implementation.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-600">2,400%</div>
                <div className="text-sm text-gray-500">ROI</div>
              </div>
              <Link 
                href="/case-studies/ai-2026-global-autonomous-transformation-ultimate-success-story"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors"
              >
                View Case Study →
              </Link>
            </div>
          </div>
          
          {/* Technology Spotlight */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-sm font-medium opacity-90">TECH SPOTLIGHT</div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">HOT</span>
                <span className="text-gray-500 text-sm ml-2">January 14, 2025</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                Autonomous Business Systems Technology Stack
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                Explore the cutting-edge technology stack powering autonomous business operations. From quantum-enhanced computing to self-healing networks.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Quantum AI</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Multi-Agent</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Self-Healing</span>
              </div>
              <Link 
                href="/services/autonomous-business-systems"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI 2026?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join the autonomous business revolution. Get your personalized transformation roadmap and achieve unprecedented efficiency and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Transformation Roadmap
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}