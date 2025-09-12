import React from 'react';
import Link from 'next/link';

export default function EnhancedContentPromotionBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 JUST PUBLISHED - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 Massive Content Drop: 25+ New AI Resources
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content: AI 2025 Breakthrough Innovations, Fortune 500 Success Stories, 
            Complete Implementation Guides, and Expert Case Studies. Everything you need to succeed with AI in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🎯 Explore All New Content
            </Link>
            <Link
              href="/resources/ai-implementation-master-guide-2025"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg" 
            >
              📚 Download Master Guide
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-lg font-semibold mb-2">AI 2025 Breakthrough Innovations</h3>
              <p className="text-sm opacity-90 mb-3">Multimodal AI, Quantum AI, Neural Interfaces, and Advanced Robotics</p>
              <div className="flex items-center text-xs opacity-75">
                <span>25 min read</span>
                <span className="mx-2">•</span>
                <span>New</span>
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-lg font-semibold mb-2">Fortune 500 AI Success</h3>
              <p className="text-sm opacity-90 mb-3">$50M savings, 300% ROI, complete transformation story</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Case Study</span>
                <span className="mx-2">•</span>
                <span>New</span>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-productivity-automation-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-lg font-semibold mb-2">AI Productivity Automation 2025</h3>
              <p className="text-sm opacity-90 mb-3">300% productivity gains, 40% cost reduction</p>
              <div className="flex items-center text-xs opacity-75">
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span>Trending</span>
              </div>
            </div>
          </Link>

          <Link href="/resources/ai-implementation-master-guide-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-lg font-semibold mb-2">AI Implementation Master Guide</h3>
              <p className="text-sm opacity-90 mb-3">150+ pages of templates, checklists, and frameworks</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Free Download</span>
                <span className="mx-2">•</span>
                <span>150+ pages</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">📖 Latest Articles</h3>
            <div className="space-y-3">
              <Link href="/blog/ai-2025-breakthrough-innovations" className="block text-sm hover:underline">
                AI 2025 Breakthrough Innovations
              </Link>
              <Link href="/blog/ai-productivity-automation-2025" className="block text-sm hover:underline">
                AI Productivity Automation 2025
              </Link>
              <Link href="/blog/ai-enterprise-transformation-2025" className="block text-sm hover:underline">
                AI Enterprise Transformation 2025
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:underline">
                View All Articles →
              </Link>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">📊 Success Stories</h3>
            <div className="space-y-3">
              <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="block text-sm hover:underline">
                Fortune 500 AI Success Story
              </Link>
              <Link href="/case-studies/ai-manufacturing-automation-success-2025" className="block text-sm hover:underline">
                Manufacturing Automation Success
              </Link>
              <Link href="/case-studies/ai-financial-services-transformation-success-2025" className="block text-sm hover:underline">
                Financial Services Transformation
              </Link>
              <Link href="/case-studies" className="text-sm font-medium hover:underline">
                View All Case Studies →
              </Link>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">📋 Free Resources</h3>
            <div className="space-y-3">
              <Link href="/resources/ai-implementation-master-guide-2025" className="block text-sm hover:underline">
                AI Implementation Master Guide
              </Link>
              <Link href="/resources/ai-automation-implementation-playbook-2025" className="block text-sm hover:underline">
                AI Automation Playbook
              </Link>
              <Link href="/resources/ai-implementation-checklist-2025" className="block text-sm hover:underline">
                AI Implementation Checklist
              </Link>
              <Link href="/resources" className="text-sm font-medium hover:underline">
                View All Resources →
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">New Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Case Studies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Free Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-sm opacity-90">Total Pages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}