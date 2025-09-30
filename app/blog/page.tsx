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
    title: 'AI 2026: The Complete Future Guide',
    slug: 'ai-2026-comprehensive-future-guide',
    excerpt: 'Discover the revolutionary AI technologies that will reshape enterprise operations in 2026. From quantum computing to neural interfaces, explore breakthrough innovations delivering unprecedented ROI.',
    category: 'Comprehensive Guide',
    readTime: '25 min read',
    publishedAt: 'January 20, 2025',
    image: '🚀',
    color: 'purple',
    featured: true
  },
  {
    title: 'AI 2026: Revolutionary Trends Transforming Enterprise',
    slug: 'ai-2026-revolutionary-trends',
    excerpt: 'Discover the revolutionary AI trends shaping 2026. From autonomous enterprise systems to quantum AI, explore how these breakthroughs are transforming business operations.',
    category: 'Featured Article',
    readTime: '15 min read',
    publishedAt: 'January 20, 2026',
    image: '🚀',
    color: 'blue'
  },
  {
    title: 'AI Cost Optimization 2026: Achieve 70% Cost Reduction',
    slug: 'ai-cost-optimization-2026',
    excerpt: 'Learn proven AI cost optimization strategies that reduce operational expenses by 70% while improving performance. Complete guide with ROI calculations and implementation tips.',
    category: 'ROI Guide',
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
    title: 'Quantum AI Computing: The Next Frontier',
    slug: 'quantum-ai-computing-next-frontier',
    excerpt: 'Explore how quantum computing is revolutionizing AI processing, delivering 1000x faster results and solving previously impossible optimization problems.',
    category: 'Technology Deep Dive',
    readTime: '18 min read',
    publishedAt: 'January 18, 2026',
    image: '⚛️',
    color: 'purple'
  },
  {
    title: 'Neural Interfaces: Direct Brain-AI Communication',
    slug: 'neural-interfaces-brain-ai-communication',
    excerpt: 'Discover how neural interfaces are enabling direct brain-computer communication, revolutionizing human-AI collaboration and productivity.',
    category: 'Breakthrough Technology',
    readTime: '20 min read',
    publishedAt: 'January 16, 2026',
    image: '🧠',
    color: 'indigo'
  },
  {
    title: 'Autonomous AI Agents: Self-Managing Enterprise Systems',
    slug: 'autonomous-ai-agents-enterprise',
    excerpt: 'Learn how autonomous AI agents are creating self-managing enterprise systems that operate independently with 99.9% accuracy.',
    category: 'Enterprise AI',
    readTime: '14 min read',
    publishedAt: 'January 14, 2026',
    image: '🤖',
    color: 'green'
  },
  {
    title: 'Multimodal AI Integration: The Future of Enterprise AI',
    slug: 'multimodal-ai-integration-future',
    excerpt: 'Explore how multimodal AI systems are processing text, images, audio, and video simultaneously to create more natural human-AI interactions.',
    category: 'AI Integration',
    readTime: '16 min read',
    publishedAt: 'January 12, 2026',
    image: '🎯',
    color: 'orange'
  }
];

const categories = [
  { name: 'All', count: blogPosts.length },
  { name: 'Featured Article', count: blogPosts.filter(post => post.category === 'Featured Article').length },
  { name: 'Comprehensive Guide', count: blogPosts.filter(post => post.category === 'Comprehensive Guide').length },
  { name: 'Technology Deep Dive', count: blogPosts.filter(post => post.category === 'Technology Deep Dive').length },
  { name: 'Enterprise AI', count: blogPosts.filter(post => post.category === 'Enterprise AI').length },
  { name: 'ROI Guide', count: blogPosts.filter(post => post.category === 'ROI Guide').length }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Blog
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Latest Insights & Breakthroughs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay ahead with cutting-edge AI insights, revolutionary technologies, 
              and proven strategies that are transforming enterprise operations worldwide.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span className="text-lg font-semibold">Latest Trends</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-lg font-semibold">Breakthrough Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <span className="text-lg font-semibold">Expert Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                FEATURED ARTICLE
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-Read Content</h2>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-purple-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-600 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Read Full Article
                    </Link>
                    <div className="text-gray-500 text-sm">
                      Published {featuredPost.publishedAt}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">{featuredPost.image}</div>
                  <div className="text-2xl font-bold text-gray-900">AI 2026</div>
                  <div className="text-gray-600">Revolutionary Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors border border-gray-200 hover:border-blue-300"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600">
              Discover the latest insights, trends, and breakthroughs in AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      post.color === 'green' ? 'bg-green-100 text-green-800' :
                      post.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                      post.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                      post.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <div className="text-4xl mb-4">{post.image}</div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Read Article →
                    </div>
                    <div className="text-gray-500 text-sm">
                      {post.publishedAt}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Insights</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest AI trends, breakthroughs, and enterprise insights delivered to your inbox
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
          <p className="text-sm text-blue-200 mt-4">
            Join 10,000+ professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}