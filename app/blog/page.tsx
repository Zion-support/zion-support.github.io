import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI & Tech Blog - Latest Insights & Innovations | Zion Tech Group',
  description: 'Stay ahead with the latest AI insights, tech innovations, and industry trends. Expert analysis, case studies, and implementation guides.',
  keywords: 'AI blog, tech insights, AI trends, technology news, AI implementation, digital transformation',
  openGraph: {
    title: 'AI & Tech Blog - Latest Insights & Innovations',
    description: 'Stay ahead with the latest AI insights, tech innovations, and industry trends.',
    type: 'website',
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'AI Enterprise Transformation 2026: Complete Implementation Guide',
      slug: 'ai-enterprise-transformation-2026',
      excerpt: 'Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI and 70% cost reduction.',
      readTime: '20 min read',
      category: 'Featured Article',
      publishedDate: '2026-01-20',
      featured: true,
    },
    {
      title: 'AI Autonomous Systems 2026: Enterprise Implementation Guide',
      slug: 'ai-autonomous-systems-2026',
      excerpt: 'Master autonomous AI systems with 300% ROI strategies and enterprise-ready deployment patterns. Achieve 80% automation and 90% efficiency gains.',
      readTime: '18 min read',
      category: 'Featured Article',
      publishedDate: '2026-01-20',
      featured: true,
    },
    {
      title: 'AI Multimodal Integration 2025: The Future of Enterprise AI',
      slug: 'ai-multimodal-integration-2025',
      excerpt: 'Discover how multimodal AI is revolutionizing enterprise operations with text, image, voice, and video integration. Achieve 250% efficiency gains.',
      readTime: '22 min read',
      category: 'Featured Article',
      publishedDate: '2025-01-20',
      featured: false,
    },
    {
      title: 'AI Enterprise Adoption 2025: Complete Implementation Guide',
      slug: 'ai-enterprise-adoption-2025',
      excerpt: 'Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI.',
      readTime: '20 min read',
      category: 'New Article',
      publishedDate: '2025-01-20',
      featured: false,
    },
    {
      title: 'AI Trends 2025: Top 10 Predictions & Industry Insights',
      slug: 'ai-trends-2025-predictions',
      excerpt: 'Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies.',
      readTime: '15 min read',
      category: 'Featured Article',
      publishedDate: '2025-01-20',
      featured: false,
    },
    {
      title: 'AI Autonomous Agents 2025: Enterprise Implementation Guide',
      slug: 'ai-autonomous-agents-2025',
      excerpt: 'Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns.',
      readTime: '18 min read',
      category: 'New Article',
      publishedDate: '2025-01-20',
      featured: false,
    },
    {
      title: 'AI Governance Framework 2025: Enterprise Implementation Guide',
      slug: 'ai-governance-framework-2025',
      excerpt: 'Master AI governance with 70% risk reduction and comprehensive enterprise frameworks.',
      readTime: '15 min read',
      category: 'Featured Article',
      publishedDate: '2025-01-20',
      featured: false,
    },
    {
      title: 'LLM Cost Optimization in 2025: Practical Strategies',
      slug: 'llm-cost-optimization-2025',
      excerpt: 'Cut LLM spend by 30–70% with routing, caching, and quantization patterns.',
      readTime: '9 min read',
      category: 'Popular Article',
      publishedDate: '2025-01-20',
      featured: false,
    },
    {
      title: 'Edge LLM Latency Patterns: Sub-200ms Interactions',
      slug: 'edge-llm-latency-patterns',
      excerpt: 'Streaming, prefetch, and edge compute patterns for instant-feel AI UX.',
      readTime: '7 min read',
      category: 'New Article',
      publishedDate: '2025-01-20',
      featured: false,
    },
    {
      title: 'GenAI Guardrails 2025: Practical Playbook for Reliable AI',
      slug: 'genai-guardrails-2025',
      excerpt: 'Practical patterns to ship safe, reliable, and auditable GenAI systems in production.',
      readTime: '11 min read',
      category: 'New Article',
      publishedDate: '2025-01-20',
      featured: false,
    },
    {
      title: 'AI Revolution 2025: Complete Business Transformation Guide',
      slug: 'ai-revolution-2025',
      excerpt: 'Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025.',
      readTime: '12 min read',
      category: 'New Article',
      publishedDate: '2025-01-20',
      featured: false,
    },
    {
      title: 'AI Agents in the Enterprise: 2025 Adoption Playbook',
      slug: 'ai-agents-in-the-enterprise-2025',
      excerpt: 'Practical guide to rolling out autonomous AI agents across enterprise workflows with ROI.',
      readTime: '10 min read',
      category: 'New Article',
      publishedDate: '2025-01-20',
      featured: false,
    },
    {
      title: 'AI-Powered Customer Service Revolution',
      slug: 'ai-customer-service-2025',
      excerpt: '80% faster response times, 90% cost reduction - discover how AI is transforming customer support.',
      readTime: '15 min read',
      category: 'New Article',
      publishedDate: '2025-01-20',
      featured: false,
    },
    {
      title: 'AI Healthcare Transformation Guide',
      slug: 'ai-healthcare-transformation-2025',
      excerpt: '40% better diagnostics, 60% improved outcomes - how AI is revolutionizing patient care.',
      readTime: '18 min read',
      category: 'Featured Article',
      publishedDate: '2025-01-20',
      featured: false,
    },
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI & Tech Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay ahead with the latest AI insights, tech innovations, and industry trends. 
          Expert analysis, case studies, and implementation guides from our team of experts.
        </p>
      </header>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Published {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Read Article →
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
          {regularPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    post.category === 'Featured Article' ? 'bg-purple-100 text-purple-800' :
                    post.category === 'New Article' ? 'bg-blue-100 text-blue-800' :
                    post.category === 'Popular Article' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Read More →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Get weekly updates on AI trends, tech innovations, and exclusive content delivered to your inbox.
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