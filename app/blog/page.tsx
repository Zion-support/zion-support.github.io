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
    title: 'AI Enterprise Automation Revolution 2026: Complete Business Transformation Guide',
    slug: 'ai-2026-enterprise-automation-revolution',
    excerpt: 'Discover how AI automation is revolutionizing enterprise operations in 2026. Achieve 400% efficiency gains, 80% cost reduction, and complete digital transformation.',
    category: 'Featured Article',
    readTime: '25 min read',
    publishedAt: 'January 20, 2026',
    image: '🚀',
    color: 'purple'
  },
  {
    title: 'AI Neural Superintelligence 2026: The Dawn of Cognitive Revolution',
    slug: 'ai-2026-neural-superintelligence',
    excerpt: 'Explore the revolutionary advances in AI neural superintelligence for 2026. Discover how cognitive AI systems are transforming enterprise operations with unprecedented intelligence.',
    category: 'Breakthrough Technology',
    readTime: '18 min read',
    publishedAt: 'January 18, 2026',
    image: '🧠',
    color: 'purple'
  },
  {
    title: 'AI Quantum Computing Breakthrough 2026: Revolutionary Enterprise Applications',
    slug: 'ai-2026-quantum-computing-breakthrough',
    excerpt: 'Discover how quantum computing breakthroughs are revolutionizing AI in 2026. Achieve 1000x faster processing and solve previously impossible enterprise problems.',
    category: 'Breakthrough Technology',
    readTime: '20 min read',
    publishedAt: 'January 17, 2026',
    image: '⚛️',
    color: 'blue'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Blog: Latest Insights & Breakthroughs
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stay ahead with comprehensive AI insights, revolutionary trends, and breakthrough technologies 
              that are transforming enterprise operations in 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link 
                key={index} 
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{post.image}</span>
                    <div className="flex-1">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        post.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                        post.color === 'green' ? 'bg-green-100 text-green-800' :
                        post.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.publishedAt}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className={`h-1 ${
                  post.color === 'blue' ? 'bg-blue-500' :
                  post.color === 'green' ? 'bg-green-500' :
                  post.color === 'purple' ? 'bg-purple-500' :
                  'bg-gray-500'
                }`}></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stay Updated with AI Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest AI insights, trends, and breakthrough technologies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}