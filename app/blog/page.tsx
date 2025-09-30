import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Blog - Latest Insights, Trends & Breakthroughs | Zion Tech Group',
  description: 'Stay ahead with our comprehensive AI blog featuring the latest insights, trends, and breakthroughs in artificial intelligence, automation, and enterprise technology.',
  keywords: 'AI blog, artificial intelligence insights, AI trends, enterprise AI, automation, machine learning, AI breakthroughs',
};

const blogPosts = [
  {
    title: 'AI 2026 Enterprise Automation Revolution: Complete Transformation Guide',
    slug: 'ai-2026-enterprise-automation-revolution',
    excerpt: 'Discover how AI enterprise automation is revolutionizing business operations in 2026. Achieve 95% automation, $50M+ savings, and complete digital transformation with our proven framework.',
    category: 'Featured Article',
    readTime: '25 min read',
    publishedAt: 'January 20, 2025',
    image: '🤖',
    color: 'blue'
  },
  {
    title: 'AI 2026 Mega Trends: Revolutionary Predictions & Industry Insights',
    slug: 'ai-2026-mega-trends-predictions',
    excerpt: 'Discover the groundbreaking AI mega trends shaping 2026. From quantum-enhanced AI to autonomous business ecosystems, explore the technologies that will revolutionize enterprise operations.',
    category: 'Featured Article',
    readTime: '30 min read',
    publishedAt: 'January 20, 2025',
    image: '🔮',
    color: 'purple'
  },
  {
    title: 'AI 2026 Mega Breakthrough Innovations: Revolutionary Technologies Transforming Enterprise',
    slug: 'ai-2026-mega-breakthrough-innovations',
    excerpt: 'Discover the groundbreaking AI innovations of 2026 that are revolutionizing enterprise operations, from quantum-enhanced neural networks to autonomous business systems.',
    category: 'Featured Article',
    readTime: '25 min read',
    publishedAt: 'January 20, 2025',
    image: '🚀',
    color: 'blue'
  },
  {
    title: 'AI Autonomous Enterprise Transformation 2026: Complete Implementation Guide',
    slug: 'ai-autonomous-enterprise-transformation-2026',
    excerpt: 'Master autonomous enterprise transformation with AI. Achieve 95% automation, $50M+ savings, and complete business process optimization with our proven framework.',
    category: 'Implementation Guide',
    readTime: '30 min read',
    publishedAt: 'January 20, 2025',
    image: '🤖',
    color: 'green'
  },
  {
    title: 'AI Enterprise Adoption 2025: Complete Implementation Guide',
    slug: 'ai-enterprise-adoption-2025',
    excerpt: 'Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI and transform your business operations.',
    category: 'New Article',
    readTime: '20 min read',
    publishedAt: 'January 20, 2025',
    image: '🏢',
    color: 'purple'
  },
  {
    title: 'AI Trends 2025: Top 10 Predictions & Industry Insights',
    slug: 'ai-trends-2025-predictions',
    excerpt: 'Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies that will reshape industries.',
    category: 'Featured Article',
    readTime: '15 min read',
    publishedAt: 'January 20, 2025',
    image: '📊',
    color: 'indigo'
  },
  {
    title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain',
    slug: 'ai-supply-chain-optimization-2025',
    excerpt: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually with AI-powered supply chain optimization.',
    category: 'Success Story',
    readTime: '12 min read',
    publishedAt: 'January 20, 2025',
    image: '📦',
    color: 'orange'
  },
  {
    title: 'AI Autonomous Agents 2025: Enterprise Implementation Guide',
    slug: 'ai-autonomous-agents-2025',
    excerpt: 'Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns. Learn how to implement self-managing business systems.',
    category: 'New Article',
    readTime: '18 min read',
    publishedAt: 'January 20, 2025',
    image: '🤖',
    color: 'teal'
  },
  {
    title: 'AI Governance Framework 2025: Enterprise Implementation Guide',
    slug: 'ai-governance-framework-2025',
    excerpt: 'Master AI governance with 70% risk reduction and comprehensive enterprise frameworks. Ensure responsible AI deployment across your organization.',
    category: 'Featured Article',
    readTime: '15 min read',
    publishedAt: 'January 20, 2025',
    image: '🛡️',
    color: 'red'
  },
  {
    title: 'FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings',
    slug: 'fintech-ai-risk-compliance-2025',
    excerpt: 'See how a leading fintech achieved 70% risk reduction with automated governance frameworks and AI-powered compliance monitoring.',
    category: 'Success Story',
    readTime: '10 min read',
    publishedAt: 'January 20, 2025',
    image: '💰',
    color: 'green'
  },
  {
    title: 'LLM Cost Optimization in 2025: Practical Strategies',
    slug: 'llm-cost-optimization-2025',
    excerpt: 'Cut LLM spend by 30–70% with routing, caching, and quantization patterns. Learn practical strategies to optimize your AI infrastructure costs.',
    category: 'Popular Article',
    readTime: '9 min read',
    publishedAt: 'January 20, 2025',
    image: '⚡',
    color: 'yellow'
  },
  {
    title: 'Edge LLM Latency Patterns: Sub-200ms Interactions',
    slug: 'edge-llm-latency-patterns',
    excerpt: 'Streaming, prefetch, and edge compute patterns for instant-feel AI UX. Achieve sub-200ms response times with optimized edge AI deployment.',
    category: 'New Article',
    readTime: '7 min read',
    publishedAt: 'January 20, 2025',
    image: '⚡',
    color: 'blue'
  },
  {
    title: 'GenAI Guardrails 2025: Practical Playbook for Reliable AI',
    slug: 'genai-guardrails-2025',
    excerpt: 'Practical patterns to ship safe, reliable, and auditable GenAI systems in production. Learn how to implement effective AI safety measures.',
    category: 'New Article',
    readTime: '11 min read',
    publishedAt: 'January 20, 2025',
    image: '🔒',
    color: 'purple'
  },
  {
    title: 'AI Revolution 2025: Complete Business Transformation Guide',
    slug: 'ai-revolution-2025',
    excerpt: 'Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025. Complete guide to AI business transformation.',
    category: 'New Article',
    readTime: '12 min read',
    publishedAt: 'January 20, 2025',
    image: '🚀',
    color: 'orange'
  }
];

const categories = [
  { name: 'All Articles', count: blogPosts.length, active: true },
  { name: 'Featured', count: blogPosts.filter(post => post.category === 'Featured Article').length },
  { name: 'Implementation', count: blogPosts.filter(post => post.category === 'Implementation Guide').length },
  { name: 'Success Stories', count: blogPosts.filter(post => post.category === 'Success Story').length },
  { name: 'New Articles', count: blogPosts.filter(post => post.category === 'New Article').length }
];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Insights & Breakthroughs
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay ahead with our comprehensive AI blog featuring the latest insights, trends, 
          and breakthroughs in artificial intelligence, automation, and enterprise technology.
        </p>
      </header>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              category.active
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Featured Articles */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`bg-${post.color}-100 text-${post.color}-800 px-2 py-1 rounded-full text-xs font-semibold`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <div className="text-4xl mb-4">{post.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.publishedAt}</span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Articles */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`bg-${post.color}-100 text-${post.color}-800 px-2 py-1 rounded-full text-xs font-semibold`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <div className="text-2xl mb-3">{post.image}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.publishedAt}</span>
                  <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Insights</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get the latest AI breakthroughs, implementation guides, and industry insights 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Join 10,000+ professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}