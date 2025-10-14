import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline'
const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and what to expect in the coming years.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every business should implement to protect against evolving cyber threats.',
      author: 'Security Team',
      date: '2024-01-10',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      author: 'Cloud Team',
      date: '2024-01-05',
      category: 'Cloud Computing',
      readTime: '6 min read',
      image: '/api/placeholder/600/400'
    }
  ]
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity tips, cloud computing, digital transformation" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Insights, trends, and expert knowledge on AI, cybersecurity, cloud computing, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with our expert insights and industry analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-700 transition-all duration-300 group">
                <div className="aspect-w-16 aspect-h-9 bg-slate-700">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <UserIcon className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group"
                    >
                      Read More
                      <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
export default BlogPage