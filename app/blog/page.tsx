import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - AI, Quantum Computing & Technology Insights',
  description: 'Stay updated with the latest insights, trends, and innovations in AI, quantum computing, and technology from Zion Tech Group experts.',
  keywords: ['blog', 'AI insights', 'quantum computing', 'technology trends', 'innovation', 'tech news']
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Future of AI: 2025 Predictions and Beyond',
      excerpt: 'Exploring the revolutionary AI technologies that will reshape industries in 2025 and beyond.',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'AI',
      href: '/blog/ai-2025-predictions',
      image: '🤖'
    },
    {
      title: 'Quantum Computing Breakthrough: What It Means for Business',
      excerpt: 'Understanding the latest quantum computing advances and their practical business applications.',
      date: '2025-01-12',
      readTime: '7 min read',
      category: 'Quantum Computing',
      href: '/blog/quantum-computing-breakthrough',
      image: '⚛️'
    },
    {
      title: 'Automation Revolution: Transforming Enterprise Operations',
      excerpt: 'How intelligent automation is revolutionizing business processes and driving efficiency.',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Automation',
      href: '/blog/automation-revolution',
      image: '⚙️'
    },
    {
      title: 'AI Ethics: Building Responsible Technology',
      excerpt: 'The importance of ethical AI development and implementation in modern enterprises.',
      date: '2025-01-08',
      readTime: '8 min read',
      category: 'Ethics',
      href: '/blog/ai-ethics',
      image: '⚖️'
    },
    {
      title: 'Digital Transformation: A Complete Guide',
      excerpt: 'A comprehensive guide to successful digital transformation strategies and implementation.',
      date: '2025-01-05',
      readTime: '10 min read',
      category: 'Digital Transformation',
      href: '/blog/digital-transformation-guide',
      image: '🚀'
    },
    {
      title: 'Machine Learning in Production: Best Practices',
      excerpt: 'Essential practices for deploying and maintaining machine learning models in production environments.',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'Machine Learning',
      href: '/blog/ml-production-best-practices',
      image: '🧠'
    }
  ]

  const categories = ['All', 'AI', 'Quantum Computing', 'Automation', 'Ethics', 'Digital Transformation', 'Machine Learning']

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Technology <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stay ahead of the curve with expert insights, trends, and innovations in AI, quantum computing, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  category === 'All' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800/50 rounded-xl overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</span>
                  <span className="text-gray-400 text-sm">AI</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  The Future of AI: 2025 Predictions and Beyond
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Exploring the revolutionary AI technologies that will reshape industries in 2025 and beyond. 
                  From advanced neural networks to autonomous systems, discover what's coming next.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                  <span>January 15, 2025</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <Link
                  href="/blog/ai-2025-predictions"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-8xl">
                🤖
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Link key={index} href={post.href} className="group">
                <div className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-700/50 transition-colors group-hover:scale-105 transform duration-200">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-center text-6xl">
                    {post.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest insights, trends, and innovations delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}