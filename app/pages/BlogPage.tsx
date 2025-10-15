import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Explore how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      author: 'Zion Tech Team',
      date: 'December 15, 2024',
      category: 'AI Technology',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: '5G Technology: Revolutionizing Connectivity',
      excerpt: 'Discover how 5G networks are enabling new applications and transforming industries worldwide.',
      author: 'Zion Tech Team',
      date: 'December 10, 2024',
      category: '5G Technology',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Learn essential cybersecurity measures to protect your business from evolving threats.',
      author: 'Zion Tech Team',
      date: 'December 5, 2024',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cloud Migration: A Complete Guide',
      excerpt: 'Step-by-step guide to successfully migrating your infrastructure to the cloud.',
      author: 'Zion Tech Team',
      date: 'November 28, 2024',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    }
  ]

  const categories = ['All', 'AI Technology', '5G Technology', 'Cybersecurity', 'Cloud Computing', 'DevOps']

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, 5G, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, 5G technology, cybersecurity, cloud computing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, 5G, cybersecurity, and technology trends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe to Newsletter
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View All Posts
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400/50">📝</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Subscribe to our newsletter for the latest technology insights and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage