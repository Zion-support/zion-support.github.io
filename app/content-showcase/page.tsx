// @ts-nocheck
import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Tech Insights 2025"
        description="Explore our comprehensive library of AI insights, case studies, and resources. Fresh content covering AI trends, implementation guides, and success stories for 2025."
        keywords="AI content, tech insights, case studies, resources, AI trends 2025, implementation guides, success stories"
        url="/content-showcase"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 FRESH CONTENT</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Content Showcase</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest AI insights, case studies, and resources. From cutting-edge research to real-world success stories.
          </p>
        </header>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
                <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Fresh AI & Tech Content Just Dropped</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">New this week: Multimodal Applications, Sustainability, Cybersecurity, and a Retail Transformation Case Study.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog/ai-multimodal-applications-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎭</div>
                  <h3 className="text-lg font-semibold mb-2">AI Multimodal Applications</h3>
                  <p className="text-sm opacity-90 mb-3">Beyond text to vision, audio, and more</p>
                  <div className="flex items-center text-xs opacity-75"><span>15 min read</span><span className="mx-2">•</span><span>New</span></div>
                </div>
              </Link>
              <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                  <h3 className="text-lg font-semibold mb-2">AI for Sustainability</h3>
                  <p className="text-sm opacity-90 mb-3">Green tech solutions driving impact</p>
                  <div className="flex items-center text-xs opacity-75"><span>12 min read</span><span className="mx-2">•</span><span>New</span></div>
                </div>
              </Link>
              <Link href="/blog/ai-cybersecurity-threats-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                  <h3 className="text-lg font-semibold mb-2">AI Cybersecurity Threats</h3>
                  <p className="text-sm opacity-90 mb-3">Defending against next-gen attacks</p>
                  <div className="flex items-center text-xs opacity-75"><span>18 min read</span><span className="mx-2">•</span><span>New</span></div>
                </div>
              </Link>
              <Link href="/case-studies/ai-retail-transformation-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛒</div>
                  <h3 className="text-lg font-semibold mb-2">Retail Transformation</h3>
                  <p className="text-sm opacity-90 mb-3">300% revenue growth case study</p>
                  <div className="flex items-center text-xs opacity-75"><span>Case Study</span><span className="mx-2">•</span><span>New</span></div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Articles</h3>
              <p className="text-gray-600 mb-6">Expert insights on AI trends and implementation strategies.</p>
              <div className="space-y-3 mb-6">
                <Link href="/blog/ai-multimodal-applications-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"><div className="text-2xl">🎭</div><div><h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Multimodal Applications 2025</h4><p className="text-sm text-gray-600">15 min read • New</p></div></div>
                </Link>
                <Link href="/blog/ai-sustainability-green-tech-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"><div className="text-2xl">🌱</div><div><h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI for Sustainability 2025</h4><p className="text-sm text-gray-600">12 min read • New</p></div></div>
                </Link>
                <Link href="/blog/ai-cybersecurity-threats-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"><div className="text-2xl">🛡️</div><div><h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Cybersecurity Threats 2025</h4><p className="text-sm text-gray-600">18 min read • New</p></div></div>
                </Link>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">View All Articles<span>→</span></Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Stories</h3>
              <p className="text-gray-600 mb-6">Real-world case studies with measurable results.</p>
              <div className="space-y-3 mb-6">
                <Link href="/case-studies/ai-retail-transformation-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"><div className="text-2xl">🛒</div><div><h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Retail Transformation</h4><p className="text-sm text-gray-600">300% revenue growth • New</p></div></div>
                </Link>
                <Link href="/case-studies/ai-automation-manufacturing-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"><div className="text-2xl">🏭</div><div><h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Manufacturing Success</h4><p className="text-sm text-gray-600">40% cost reduction</p></div></div>
                </Link>
                <Link href="/case-studies/ai-financial-services-transformation-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"><div className="text-2xl">🏦</div><div><h4 className="font-medium text-gray-900 group-hover:text-blue-600">Financial Services AI</h4><p className="text-sm text-gray-600">$50M cost savings</p></div></div>
                </Link>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">View All Case Studies<span>→</span></Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Free Resources</h3>
              <p className="text-gray-600 mb-6">Downloadable tools and guides to accelerate your journey.</p>
              <div className="space-y-3 mb-6">
                <Link href="/resources/ai-transformation-readiness-assessment-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"><div className="text-2xl">📊</div><div><h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Readiness Assessment</h4><p className="text-sm text-gray-600">Free tool • New</p></div></div>
                </Link>
                <Link href="/resources/ai-implementation-playbook-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"><div className="text-2xl">📖</div><div><h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Implementation Playbook</h4><p className="text-sm text-gray-600">Step-by-step guide</p></div></div>
                </Link>
                <Link href="/resources/ai-implementation-checklist-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"><div className="text-2xl">✅</div><div><h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Implementation Checklist</h4><p className="text-sm text-gray-600">150+ actionable items</p></div></div>
                </Link>
              </div>
              <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">View All Resources<span>→</span></Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Latest Content</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Get weekly updates on AI trends, implementation guides, and exclusive content. Join 10,000+ professionals.</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Subscribe</button>
          </div>
          <p className="text-sm text-gray-500 mt-4">No spam. Unsubscribe anytime. Read our privacy policy.</p>
        </section>
      </div>
    </div>
  );
}

