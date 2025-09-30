import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Blog - Latest Insights, Trends & Success Stories | Zion Tech Group',
  description: 'Stay ahead with our latest AI insights, industry trends, and success stories. Discover cutting-edge strategies and real-world implementations.',
  keywords: 'AI blog, AI insights, AI trends, AI articles, artificial intelligence, AI consulting, AI implementation',
  openGraph: {
    title: 'AI Blog - Latest Insights, Trends & Success Stories',
    description: 'Stay ahead with our latest AI insights, industry trends, and success stories.',
    type: 'website',
    url: 'https://ziontechgroup.com/blog',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Blog',
      },
    ],
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'AI Enterprise Transformation 2026: Complete Implementation Guide',
      slug: 'ai-enterprise-transformation-2026',
      excerpt: 'Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
      category: 'Featured Article',
      readTime: '20 min read',
      publishedDate: 'January 20, 2026',
      image: '/blog/ai-enterprise-transformation.jpg',
      featured: true
    },
    {
      title: 'AI Autonomous Systems 2026: Enterprise Implementation Guide',
      slug: 'ai-autonomous-systems-2026',
      excerpt: 'Master autonomous AI systems with 300% ROI strategies and enterprise-ready deployment patterns. Achieve 90% automation and 70% cost reduction through intelligent autonomous agents.',
      category: 'New Article',
      readTime: '18 min read',
      publishedDate: 'January 20, 2026',
      image: '/blog/ai-autonomous-systems.jpg',
      featured: true
    },
    {
      title: 'AI Multimodal Integration 2025: The Future of Enterprise AI',
      slug: 'ai-multimodal-integration-2025',
      excerpt: 'Discover how multimodal AI is revolutionizing enterprise operations with text, image, voice, and video integration. Achieve 250% efficiency gains.',
      category: 'Featured Article',
      readTime: '22 min read',
      publishedDate: 'January 15, 2026',
      image: '/blog/ai-multimodal-integration.jpg',
      featured: false
    },
    {
      title: 'AI Enterprise Adoption 2025: Complete Implementation Guide',
      slug: 'ai-enterprise-adoption-2025',
      excerpt: 'Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI.',
      category: 'New Article',
      readTime: '20 min read',
      publishedDate: 'January 15, 2026',
      image: '/blog/ai-enterprise-adoption.jpg',
      featured: false
    },
    {
      title: 'AI Trends 2025: Top 10 Predictions & Industry Insights',
      slug: 'ai-trends-2025-predictions',
      excerpt: 'Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies.',
      category: 'Featured Article',
      readTime: '15 min read',
      publishedDate: 'January 10, 2026',
      image: '/blog/ai-trends-2025.jpg',
      featured: false
    },
    {
      title: 'AI Autonomous Agents 2025: Enterprise Implementation Guide',
      slug: 'ai-autonomous-agents-2025',
      excerpt: 'Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns.',
      category: 'New Article',
      readTime: '18 min read',
      publishedDate: 'January 10, 2026',
      image: '/blog/ai-autonomous-agents.jpg',
      featured: false
    },
    {
      title: 'AI Governance Framework 2025: Enterprise Implementation Guide',
      slug: 'ai-governance-framework-2025',
      excerpt: 'Master AI governance with 70% risk reduction and comprehensive enterprise frameworks.',
      category: 'Featured Article',
      readTime: '15 min read',
      publishedDate: 'January 5, 2026',
      image: '/blog/ai-governance-framework.jpg',
      featured: false
    },
    {
      title: 'LLM Cost Optimization in 2025: Practical Strategies',
      slug: 'llm-cost-optimization-2025',
      excerpt: 'Cut LLM spend by 30–70% with routing, caching, and quantization patterns.',
      category: 'Popular Article',
      readTime: '9 min read',
      publishedDate: 'January 5, 2026',
      image: '/blog/llm-cost-optimization.jpg',
      featured: false
    },
    {
      title: 'Edge LLM Latency Patterns: Sub-200ms Interactions',
      slug: 'edge-llm-latency-patterns',
      excerpt: 'Streaming, prefetch, and edge compute patterns for instant-feel AI UX.',
      category: 'New Article',
      readTime: '7 min read',
      publishedDate: 'December 30, 2025',
      image: '/blog/edge-llm-latency.jpg',
      featured: false
    },
    {
      title: 'GenAI Guardrails 2025: Practical Playbook for Reliable AI',
      slug: 'genai-guardrails-2025',
      excerpt: 'Practical patterns to ship safe, reliable, and auditable GenAI systems in production.',
      category: 'New Article',
      readTime: '11 min read',
      publishedDate: 'December 30, 2025',
      image: '/blog/genai-guardrails.jpg',
      featured: false
    },
    {
      title: 'AI Revolution 2025: Complete Business Transformation Guide',
      slug: 'ai-revolution-2025',
      excerpt: 'Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025.',
      category: 'New Article',
      readTime: '12 min read',
      publishedDate: 'December 25, 2025',
      image: '/blog/ai-revolution-2025.jpg',
      featured: false
    },
    {
      title: 'AI Agents in the Enterprise: 2025 Adoption Playbook',
      slug: 'ai-agents-in-the-enterprise-2025',
      excerpt: 'Practical guide to rolling out autonomous AI agents across enterprise workflows with ROI.',
      category: 'New Article',
      readTime: '10 min read',
      publishedDate: 'December 25, 2025',
      image: '/blog/ai-agents-enterprise.jpg',
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Blog: Latest Insights & Success Stories
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay ahead with our latest AI insights, industry trends, and success stories. 
          Discover cutting-edge strategies and real-world implementations.
        </p>
      </header>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <span className="text-6xl">📚</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.category === 'Featured Article' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'New Article' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.publishedDate}</span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200">
                <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <span className="text-4xl">📖</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      post.category === 'Featured Article' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'New Article' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.publishedDate}</span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Insights</h2>
        <p className="text-xl mb-8 opacity-90">
          Get the latest AI trends, insights, and success stories delivered to your inbox weekly.
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
      </section>
    </div>
  );
}