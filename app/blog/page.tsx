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
    title: 'AI Enterprise Transformation: Complete Implementation Guide',
    slug: 'ai-enterprise-transformation-guide',
    excerpt: 'Complete guide to AI enterprise transformation. Learn proven strategies, implementation frameworks, and best practices for successful AI adoption.',
    category: 'Implementation Guide',
    readTime: '20 min read',
    publishedAt: 'January 10, 2026',
    image: '🏢',
    color: 'purple'
  },
  {
    title: 'Autonomous AI Systems: The Future of Enterprise Operations',
    slug: 'autonomous-ai-systems-future',
    excerpt: 'Explore how autonomous AI systems are revolutionizing enterprise operations with self-managing infrastructure and intelligent decision-making.',
    category: 'Technology Deep Dive',
    readTime: '18 min read',
    publishedAt: 'January 5, 2026',
    image: '🤖',
    color: 'indigo'
  }
];

const categories = ['All', 'Featured Article', 'Implementation Guide', 'Technology Deep Dive', 'ROI Guide', 'NEW ARTICLE', 'FEATURED'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Insights & Trends
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with the latest AI insights, breakthrough technologies, and proven strategies 
              that are transforming enterprise operations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-${post.color}-100 rounded-xl flex items-center justify-center`}>
                        <span className="text-2xl">{post.image}</span>
                      </div>
                      <div>
                        <span className={`bg-${post.color}-100 text-${post.color}-800 px-3 py-1 rounded-full text-xs font-semibold`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.readTime}</span>
                      <span>{post.publishedAt}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Implement These Insights?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Our expert team can help you implement these AI strategies and achieve similar results 
            in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Explore Our Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}