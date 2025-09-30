import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Technology Blog | Zion Tech Group',
  description: 'Stay updated with the latest AI trends, enterprise solutions, and technology insights from Zion Tech Group experts.',
  keywords: 'AI blog, technology trends, enterprise AI, automation, digital transformation',
};

const blogPosts = [
  {
    id: 'ai-trends-2026',
    title: 'AI Trends 2026: The Future of Enterprise AI',
    excerpt: 'Discover the latest AI trends shaping enterprise transformation in 2026. From autonomous operations to edge intelligence and quantum AI.',
    date: '2026-01-20',
    readTime: '8 min read',
    category: 'AI Trends',
    featured: true,
  },
  {
    id: 'ai-autonomous-operations',
    title: 'Autonomous AI Operations: The Next Frontier',
    excerpt: 'Learn how self-managing AI systems are revolutionizing business operations with 95% automation and $8M+ annual savings.',
    date: '2026-01-18',
    readTime: '6 min read',
    category: 'Automation',
    featured: true,
  },
  {
    id: 'edge-ai-implementation',
    title: 'Edge AI Implementation: Real-Time Intelligence',
    excerpt: 'Master edge AI deployment with sub-50ms latency and distributed intelligence for instant decision-making.',
    date: '2026-01-15',
    readTime: '7 min read',
    category: 'Edge Computing',
    featured: false,
  },
  {
    id: 'quantum-ai-enterprise',
    title: 'Quantum AI in Enterprise: Beyond Classical Computing',
    excerpt: 'Explore how quantum computing is transforming enterprise AI with breakthrough optimization and modeling capabilities.',
    date: '2026-01-12',
    readTime: '9 min read',
    category: 'Quantum Computing',
    featured: false,
  },
  {
    id: 'ai-governance-framework',
    title: 'AI Governance Framework: Ethics and Compliance',
    excerpt: 'Build comprehensive AI governance strategies for ethical deployment, regulatory compliance, and risk management.',
    date: '2026-01-10',
    readTime: '5 min read',
    category: 'Governance',
    featured: false,
  },
  {
    id: 'sustainable-ai-practices',
    title: 'Sustainable AI: Green Technology for the Future',
    excerpt: 'Implement environmentally conscious AI solutions that reduce carbon footprint while maintaining performance.',
    date: '2026-01-08',
    readTime: '6 min read',
    category: 'Sustainability',
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI & Technology Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI trends, enterprise solutions, 
              and cutting-edge technology from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get AI Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{post.date}</span>
                      <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with AI Trends
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest AI insights, trends, and enterprise solutions delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}