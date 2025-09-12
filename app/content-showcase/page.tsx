import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - AI & Technology Resources, Articles, and Case Studies"
        description="Explore our comprehensive library of AI insights, implementation guides, case studies, and resources. Stay ahead with the latest trends and expert analysis."
        keywords="AI content, technology resources, implementation guides, case studies, AI articles, tech insights, business automation"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive library of AI insights, implementation guides, 
            case studies, and resources. Stay ahead with the latest trends and expert 
            analysis from industry leaders.
          </p>
        </header>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🔥 HOT THIS WEEK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fresh AI & Tech Content Just Dropped
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              New this week: AI 2025 Year in Review, Multimodal AI Revolution, Retail Transformation 
              Case Study, and comprehensive implementation guides. Expert insights to accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                📋 Download Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles</h3>
            <p className="text-gray-600 mb-6">
              Stay ahead with our latest insights on AI trends, implementation strategies, 
              and industry analysis. Fresh content published weekly.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">AI 2025 Year in Review</h4>
                <p className="text-sm text-gray-600">Comprehensive review of AI breakthroughs and transformations</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <span>25 min read</span>
                  <span>•</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">NEW</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">AI Multimodal Revolution</h4>
                <p className="text-sm text-gray-600">Beyond text to vision, audio, and beyond</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <span>18 min read</span>
                  <span>•</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">NEW</span>
                </div>
              </div>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-4"
            >
              View All Articles
              <span>→</span>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Resources</h3>
            <p className="text-gray-600 mb-6">
              Download our comprehensive guides, checklists, and templates to accelerate 
              your AI implementation and business growth.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">AI Multimodal Implementation Guide</h4>
                <p className="text-sm text-gray-600">Complete 150-page implementation guide</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <span>45 min read</span>
                  <span>•</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">FREE</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">AI Implementation Checklist</h4>
                <p className="text-sm text-gray-600">Step-by-step implementation checklist</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <span>Quick reference</span>
                  <span>•</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">FREE</span>
                </div>
              </div>
            </div>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mt-4"
            >
              View All Resources
              <span>→</span>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
            <p className="text-gray-600 mb-6">
              Real-world case studies showcasing how organizations achieved remarkable 
              results with AI implementation and digital transformation.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">AI Retail Transformation</h4>
                <p className="text-sm text-gray-600">340% revenue growth with AI automation</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <span>12 min read</span>
                  <span>•</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">NEW</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">Manufacturing AI Success</h4>
                <p className="text-sm text-gray-600">40% cost reduction in manufacturing</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <span>Case study</span>
                  <span>•</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">POPULAR</span>
                </div>
              </div>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mt-4"
            >
              View All Case Studies
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Latest Articles */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium text-blue-600">Latest Article</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI 2025 Year in Review: The Breakthrough Year
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive review of AI breakthroughs, trends, and transformations in 2025. 
                From GPT-5 to quantum AI, discover what shaped the future of artificial intelligence.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>25 min read</span>
                  <span>•</span>
                  <span>Jan 15, 2025</span>
                </div>
                <Link
                  href="/blog/ai-2025-year-in-review"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read Article →
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎭</span>
                <span className="text-sm font-medium text-purple-600">AI Technology</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI Multimodal Revolution 2025
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore the multimodal AI revolution transforming how machines understand 
                and interact with the world. From GPT-5 to vision-language models.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>18 min read</span>
                  <span>•</span>
                  <span>Jan 18, 2025</span>
                </div>
                <Link
                  href="/blog/ai-multimodal-revolution-2025"
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  Read Article →
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📋</span>
                <span className="text-sm font-medium text-green-600">Free Resource</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI Multimodal Implementation Guide
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete 150-page implementation guide with templates, checklists, and 
                best practices for successful multimodal AI deployment.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>45 min read</span>
                  <span>•</span>
                  <span>150 pages</span>
                </div>
                <Link
                  href="/resources/ai-multimodal-implementation-guide-2025"
                  className="text-green-600 hover:text-green-700 font-medium text-sm"
                >
                  Download →
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🛒</span>
                <span className="text-sm font-medium text-orange-600">Case Study</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI Retail Transformation Success
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                How TechMart achieved 340% revenue growth, 60% cost reduction, and 95% 
                customer satisfaction through AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>12 min read</span>
                  <span>•</span>
                  <span>Success Story</span>
                </div>
                <Link
                  href="/case-studies/ai-retail-transformation-2025"
                  className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                >
                  Read Case Study →
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🏢</span>
                <span className="text-sm font-medium text-blue-600">Enterprise AI</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI Enterprise Integration 2025
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete guide to AI enterprise integration with best practices, 
                implementation strategies, and common pitfalls to avoid.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>20 min read</span>
                  <span>•</span>
                  <span>Implementation</span>
                </div>
                <Link
                  href="/blog/ai-enterprise-integration-2025"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read Article →
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💰</span>
                <span className="text-sm font-medium text-green-600">Startup Strategy</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI Startup Funding Playbook 2025
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Master the $47B AI funding landscape with proven strategies, pitch templates, 
                and investor insights for AI startups.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>25 min read</span>
                  <span>•</span>
                  <span>Funding Guide</span>
                </div>
                <Link
                  href="/blog/ai-startup-funding-playbook-2025"
                  className="text-green-600 hover:text-green-700 font-medium text-sm"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Statistics */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Library Statistics</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog?category=ai-technology" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI & Technology
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Latest AI trends, breakthroughs, and technological innovations
                </p>
                <div className="text-xs text-gray-500">45+ articles</div>
              </div>
            </Link>

            <Link href="/blog?category=implementation" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  Implementation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Step-by-step guides and best practices for AI implementation
                </p>
                <div className="text-xs text-gray-500">30+ articles</div>
              </div>
            </Link>

            <Link href="/blog?category=business-strategy" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                  Business Strategy
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  AI strategy, ROI, and business transformation insights
                </p>
                <div className="text-xs text-gray-500">25+ articles</div>
              </div>
            </Link>

            <Link href="/blog?category=case-studies" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 mb-2">
                  Success Stories
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Real-world case studies and implementation success stories
                </p>
                <div className="text-xs text-gray-500">25+ case studies</div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Get weekly updates on new articles, resources, and case studies. 
            Join 10,000+ professionals who trust our content.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </section>
      </div>
    </div>
  );
}