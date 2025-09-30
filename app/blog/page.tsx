import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Blog - Latest Insights, Trends & Breakthroughs | Zion Tech Group',
  description: 'Stay ahead with our comprehensive AI blog featuring the latest insights, trends, and breakthroughs in artificial intelligence, automation, and enterprise technology.',
  keywords: 'AI blog, artificial intelligence insights, AI trends, enterprise AI, automation, machine learning, AI breakthroughs',
};

const blogPosts = [
  {
    title: 'AI 2026: Enterprise Autonomous Systems Revolution',
    slug: 'ai-2026-enterprise-autonomous-systems',
    excerpt: 'Discover how autonomous AI systems are achieving 90% efficiency gains and transforming enterprise infrastructure across industries.',
    category: 'NEW ARTICLE',
    readTime: '15 min read',
    publishedAt: 'January 20, 2026',
    image: '🤖',
    color: 'cyan'
  },
  {
    title: 'AI Cost Optimization 2026: Advanced Strategies for 70% Savings',
    slug: 'ai-cost-optimization-2026-strategies',
    excerpt: 'Master AI cost optimization with proven strategies that deliver 70% cost reduction and 300% ROI. Learn advanced techniques for enterprise AI efficiency.',
    category: 'FEATURED',
    readTime: '12 min read',
    publishedAt: 'January 20, 2026',
    image: '💰',
    color: 'green'
  },
  {
    title: 'AI 2026 Mega Breakthrough: Revolutionary Technologies Transforming Enterprise',
    slug: 'ai-2026-mega-breakthrough',
    excerpt: 'Discover how 2026 is shaping up to be the year of unprecedented AI breakthroughs that will transform every industry.',
    category: 'Featured Article',
    readTime: '8 min read',
    publishedAt: 'January 15, 2026',
    image: '🚀',
    color: 'blue'
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI & Technology Insights
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Stay ahead with the latest trends, breakthroughs, and expert insights in AI, automation, and enterprise technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <span
                key={category.name}
                className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer"
              >
                {category.name} ({category.count})
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
              <span className="text-gray-600 text-sm">{blogPosts[0].publishedAt}</span>
              <span className="text-gray-600 text-sm">•</span>
              <span className="text-gray-600 text-sm">{blogPosts[0].readTime}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {blogPosts[0].title}
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl">
              {blogPosts[0].excerpt}
            </p>
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Read Full Article
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-3xl">{post.image}</span>
                    </div>
                    <p className="text-sm font-medium">{post.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`bg-${post.color}-100 text-${post.color}-800 px-2 py-1 rounded-full text-xs font-medium`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.publishedAt}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with AI Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest AI trends, case studies, and expert insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 text-blue-100">
            Join 10,000+ professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}