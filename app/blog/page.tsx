import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Blog & Insights | Zion Tech Group',
  description: 'Stay ahead with the latest AI insights, trends, and success stories. Discover how AI is transforming enterprises and driving remarkable business results.',
  keywords: 'AI blog, AI insights, AI trends, enterprise AI, AI transformation, AI success stories',
  openGraph: {
    title: 'AI Blog & Insights | Zion Tech Group',
    description: 'Stay ahead with the latest AI insights, trends, and success stories.',
    type: 'website',
    url: 'https://ziontechgroup.com/blog',
  },
};

const blogPosts = [
  {
    title: 'AI Enterprise Transformation 2026: Complete Implementation Guide',
    excerpt: 'Master AI enterprise transformation with our comprehensive 2026 guide. Achieve 300% ROI, 90% efficiency gains, and $50M+ savings with proven strategies.',
    href: '/blog/ai-enterprise-transformation-2026',
    category: 'Featured Article',
    readTime: '25 min read',
    publishedDate: 'January 20, 2026',
    image: '/blog/ai-enterprise-transformation-2026.jpg',
    tags: ['AI Transformation', 'Enterprise AI', 'ROI', 'Implementation'],
    featured: true
  },
  {
    title: 'AI Trends 2026: Top 10 Predictions & Industry Insights',
    excerpt: 'Discover the top AI trends shaping 2026. From autonomous agents to edge computing, explore transformative technologies that will revolutionize enterprise operations.',
    href: '/blog/ai-trends-2026-predictions',
    category: 'Trends',
    readTime: '18 min read',
    publishedDate: 'January 20, 2026',
    image: '/blog/ai-trends-2026-predictions.jpg',
    tags: ['AI Trends', 'Predictions', 'Technology', 'Future'],
    featured: true
  },
  {
    title: 'AI Multimodal Integration 2025: The Future of Enterprise AI',
    excerpt: 'Discover how multimodal AI is revolutionizing enterprise operations with text, image, voice, and video integration. Achieve 250% efficiency gains.',
    href: '/blog/ai-multimodal-integration-2025',
    category: 'Technology',
    readTime: '22 min read',
    publishedDate: 'January 15, 2026',
    image: '/blog/ai-multimodal-integration-2025.jpg',
    tags: ['Multimodal AI', 'Integration', 'Enterprise', 'Efficiency'],
    featured: false
  },
  {
    title: 'AI Enterprise Adoption 2025: Complete Implementation Guide',
    excerpt: 'Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI and transform your business.',
    href: '/blog/ai-enterprise-adoption-2025',
    category: 'Implementation',
    readTime: '20 min read',
    publishedDate: 'January 10, 2026',
    image: '/blog/ai-enterprise-adoption-2025.jpg',
    tags: ['Adoption', 'Strategy', 'ROI', 'Implementation'],
    featured: false
  },
  {
    title: 'AI Cybersecurity: Next-Gen Protection for Enterprise',
    excerpt: 'Revolutionary threat detection with 99.7% accuracy. Autonomous incident response and zero-trust architecture for enterprise-grade security.',
    href: '/blog/ai-cybersecurity-2025',
    category: 'Security',
    readTime: '15 min read',
    publishedDate: 'January 5, 2026',
    image: '/blog/ai-cybersecurity-2025.jpg',
    tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Zero Trust'],
    featured: false
  },
  {
    title: 'Edge Computing AI: Real-Time Intelligence at the Edge',
    excerpt: 'Achieve sub-50ms response times with AI processing at the edge of networks. Perfect for autonomous vehicles, IoT devices, and real-time applications.',
    href: '/blog/ai-edge-computing-2025',
    category: 'Technology',
    readTime: '12 min read',
    publishedDate: 'December 28, 2025',
    image: '/blog/ai-edge-computing-2025.jpg',
    tags: ['Edge Computing', 'Real-time', 'IoT', 'Performance'],
    featured: false
  }
];

const categories = [
  { name: 'All', count: blogPosts.length },
  { name: 'Featured', count: blogPosts.filter(post => post.featured).length },
  { name: 'Technology', count: blogPosts.filter(post => post.category === 'Technology').length },
  { name: 'Implementation', count: blogPosts.filter(post => post.category === 'Implementation').length },
  { name: 'Security', count: blogPosts.filter(post => post.category === 'Security').length },
  { name: 'Trends', count: blogPosts.filter(post => post.category === 'Trends').length }
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Blog & Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay ahead with the latest AI insights, trends, and success stories. 
          Discover how AI is transforming enterprises and driving remarkable business results.
        </p>
      </header>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.name}
            className="px-6 py-3 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Link key={post.href} href={post.href} className="group">
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-6xl">📊</div>
                </div>
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
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.publishedDate}</span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Read Article →
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
          {blogPosts.map((post) => (
            <Link key={post.href} href={post.href} className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-white text-4xl">📈</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      post.category === 'Featured' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'Technology' ? 'bg-green-100 text-green-800' :
                      post.category === 'Implementation' ? 'bg-purple-100 text-purple-800' :
                      post.category === 'Security' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.publishedDate}</span>
                    <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">
          Stay Updated with AI Insights
        </h3>
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
      </section>
    </div>
  );
}