import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog & Insights - Zion Tech Group',
  description: 'Stay updated with the latest AI trends, technology insights, and industry best practices from Zion Tech Group experts.',
  keywords: 'AI blog, technology insights, industry trends, AI news, tech articles',
};

export default function BlogPage() {
  const featuredPosts = [
    {
      title: 'Revolutionary AI Breakthroughs 2026: Quantum Computing & 1000x Performance Gains',
      excerpt: 'Discover the latest quantum AI breakthroughs achieving unprecedented 1000x performance improvements and $500B ROI potential.',
      date: 'November 2026',
      category: 'AI Breakthroughs',
      readTime: '8 min read',
      featured: true
    },
    {
      title: 'Enterprise AI Transformation: A Complete Guide for 2026',
      excerpt: 'Comprehensive guide to implementing AI in enterprise environments, covering strategy, implementation, and ROI measurement.',
      date: 'October 2026',
      category: 'Enterprise AI',
      readTime: '12 min read',
      featured: false
    },
    {
      title: 'Micro SaaS Architecture: Building Scalable Solutions',
      excerpt: 'Learn how to design and implement micro SaaS platforms that scale efficiently and deliver exceptional user experiences.',
      date: 'September 2026',
      category: 'Micro SaaS',
      readTime: '6 min read',
      featured: false
    },
    {
      title: 'AI Cybersecurity: Automated Threat Detection and Response',
      excerpt: 'Explore how AI is revolutionizing cybersecurity with automated threat detection, achieving 99.8% accuracy rates.',
      date: 'August 2026',
      category: 'Cybersecurity',
      readTime: '10 min read',
      featured: false
    },
    {
      title: 'Cloud Migration Best Practices: Zero Downtime Strategies',
      excerpt: 'Best practices for migrating enterprise systems to cloud with zero downtime and maximum performance gains.',
      date: 'July 2026',
      category: 'Cloud Computing',
      readTime: '7 min read',
      featured: false
    },
    {
      title: 'Data Analytics and Business Intelligence: AI-Powered Insights',
      excerpt: 'How AI-powered analytics platforms are transforming business intelligence and driving data-driven decisions.',
      date: 'June 2026',
      category: 'Data Analytics',
      readTime: '9 min read',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'AI Breakthroughs',
    'Enterprise AI',
    'Micro SaaS',
    'Cybersecurity',
    'Cloud Computing',
    'Data Analytics',
    'Case Studies'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Insights</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay ahead of the curve with the latest AI trends, technology insights, 
          and industry best practices from our expert team.
        </p>
      </div>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              index === 0 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Featured Post */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                {featuredPosts[0].category}
              </span>
              <span className="text-sm opacity-90">{featuredPosts[0].date}</span>
              <span className="text-sm opacity-90">{featuredPosts[0].readTime}</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">{featuredPosts[0].title}</h3>
            <p className="text-xl opacity-90 mb-6">{featuredPosts[0].excerpt}</p>
            <Link 
              href="/blog/ai-2026-november-quantum-superintelligence-breakthrough"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Full Article →
            </Link>
          </div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPosts.slice(1).map((post, index) => (
          <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
              <span className="text-white text-lg font-medium">Article {index + 2}</span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link 
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Newsletter Signup */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Get the latest AI insights and technology trends delivered to your inbox.
        </p>
        <div className="max-w-md mx-auto flex gap-4">
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
    </div>
  );
}