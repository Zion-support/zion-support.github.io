import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Tech Insights 2025"
        description="Discover our latest AI insights, case studies, and resources. Expert content covering AI automation, multimodal applications, sustainability, and business growth strategies."
        keywords="AI content, tech insights, case studies, resources, AI automation, multimodal AI, sustainability, 2025 trends"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 CONTENT SHOWCASE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Latest AI & Tech Insights 2025
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            Discover our comprehensive collection of AI insights, case studies, and resources. 
            From productivity automation to sustainability solutions, get the knowledge you need 
            to succeed in the AI-driven future.
          </p>
        </div>

        {/* Featured Content Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
                <span className="text-sm font-medium">🔥 FEATURED THIS WEEK</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fresh AI & Business Content
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                New this week: AI productivity automation, multimodal applications, sustainability solutions, 
                and comprehensive implementation guides.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/ai-productivity-automation-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                  <h3 className="text-lg font-semibold mb-2">AI Productivity Automation 2025</h3>
                  <p className="text-sm opacity-90 mb-3">Complete implementation guide with 40% efficiency gains</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>20 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-multimodal-applications-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎭</div>
                  <h3 className="text-lg font-semibold mb-2">AI Multimodal Applications 2025</h3>
                  <p className="text-sm opacity-90 mb-3">Beyond text to vision, audio, and beyond</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>15 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                  <h3 className="text-lg font-semibold mb-2">AI for Sustainability 2025</h3>
                  <p className="text-sm opacity-90 mb-3">Green tech solutions driving environmental impact</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>12 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Latest Articles */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            
            <div className="space-y-6">
              <Link href="/blog/ai-productivity-automation-2025" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">⚡</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">NEW</span>
                        <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                        AI Productivity Automation 2025
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Transform your business with 40% efficiency gains and proven implementation strategies
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>20 min read</span>
                        <span className="mx-2">•</span>
                        <span>AI & Automation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-multimodal-applications-2025" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🎭</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">NEW</span>
                        <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                        AI Multimodal Applications 2025
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Beyond text to vision, audio, and beyond - the future of AI
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>15 min read</span>
                        <span className="mx-2">•</span>
                        <span>AI & Technology</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-sustainability-green-tech-2025" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🌱</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">NEW</span>
                        <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                        AI for Sustainability 2025
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Green tech solutions driving environmental impact and carbon reduction
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>12 min read</span>
                        <span className="mx-2">•</span>
                        <span>Sustainability</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Free Resources */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Free Resources</h2>
              <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            
            <div className="space-y-6">
              <Link href="/resources/ai-multimodal-implementation-guide-2025" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📋</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">FREE</span>
                        <span className="text-gray-500 text-sm">Guide</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                        AI Multimodal Implementation Guide 2025
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Complete step-by-step guide to building multimodal AI applications
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>150+ pages</span>
                        <span className="mx-2">•</span>
                        <span>25+ code examples</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/sustainable-ai-playbook-2025" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🌱</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">FREE</span>
                        <span className="text-gray-500 text-sm">Playbook</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                        Sustainable AI Playbook 2025
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Build environmentally responsible AI systems with practical strategies
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>120+ pages</span>
                        <span className="mx-2">•</span>
                        <span>Implementation guide</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-implementation-checklist-2025" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✅</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">FREE</span>
                        <span className="text-gray-500 text-sm">Checklist</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                        AI Implementation Checklist 2025
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Step-by-step checklist for successful AI implementation
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>100+ items</span>
                        <span className="mx-2">•</span>
                        <span>Actionable steps</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Content</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Explore All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Download Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
