import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Technology Blog - Zion Tech Group',
  description: 'Latest insights on AI trends, enterprise solutions, and digital transformation from Zion Tech Group experts.',
};

const blogPosts = [
  {
    id: 'ai-2026-mega-breakthrough',
    title: 'AI 2026: The Mega Breakthrough Revolution',
    excerpt: 'Discover how 2026 is shaping up to be the year of unprecedented AI breakthroughs that will transform every industry.',
    date: '2026-01-15',
    category: 'AI Innovation',
    readTime: '8 min read',
    image: '/images/ai-breakthrough-2026.jpg'
  },
  {
    id: 'quantum-ai-enterprise',
    title: 'Quantum AI: The Next Frontier for Enterprise',
    excerpt: 'Explore how quantum computing is revolutionizing AI capabilities and what it means for your business.',
    date: '2026-01-12',
    category: 'Quantum Computing',
    readTime: '6 min read',
    image: '/images/quantum-ai-enterprise.jpg'
  },
  {
    id: 'autonomous-enterprise-systems',
    title: 'Building Autonomous Enterprise Systems in 2026',
    excerpt: 'Learn how to implement self-managing systems that can adapt and optimize without human intervention.',
    date: '2026-01-10',
    category: 'Automation',
    readTime: '10 min read',
    image: '/images/autonomous-systems.jpg'
  },
  {
    id: 'ai-sustainability-transformation',
    title: 'AI for Sustainability: Green Tech Transformation',
    excerpt: 'How AI is driving environmental sustainability and helping companies achieve their green goals.',
    date: '2026-01-08',
    category: 'Sustainability',
    readTime: '7 min read',
    image: '/images/ai-sustainability.jpg'
  },
  {
    id: 'neural-interfaces-enterprise',
    title: 'Neural Interfaces: The Future of Enterprise Computing',
    excerpt: 'Discover how brain-computer interfaces are revolutionizing how we interact with technology at work.',
    date: '2026-01-05',
    category: 'Emerging Tech',
    readTime: '9 min read',
    image: '/images/neural-interfaces.jpg'
  },
  {
    id: 'ai-cost-optimization-2026',
    title: 'AI Cost Optimization: Maximizing ROI in 2026',
    excerpt: 'Proven strategies for reducing AI implementation costs while maximizing business value.',
    date: '2026-01-03',
    category: 'Business Strategy',
    readTime: '5 min read',
    image: '/images/ai-cost-optimization.jpg'
  }
];

const categories = ['All', 'AI Innovation', 'Quantum Computing', 'Automation', 'Sustainability', 'Emerging Tech', 'Business Strategy'];

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
                key={category}
                className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer"
              >
                {category}
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
              <span className="text-gray-600 text-sm">{blogPosts[0].date}</span>
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
              href={`/blog/${blogPosts[0].id}`}
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
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">AI Innovation</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
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
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <Link
                      href={`/blog/${post.id}`}
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
        </div>
      </section>
    </div>
  );
}