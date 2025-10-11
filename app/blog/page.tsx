import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping enterprise technology and how businesses can leverage these innovations for competitive advantage.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Through Traditional Barriers',
      excerpt: 'Discover how quantum computing is revolutionizing data processing and what it means for the future of technology.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Quantum Computing',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Challenges and Solutions',
      excerpt: 'Learn about the evolving cybersecurity landscape and how AI is both creating new threats and providing innovative solutions.',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Cybersecurity',
      featured: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and innovations in AI, technology, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">Featured</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{post.excerpt}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="text-gray-300">Featured Article</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm flex items-center">
                  Read More
                  <ArrowRight className="h-3 w-3 ml-1" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter and never miss the latest insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage