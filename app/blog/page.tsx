import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'How artificial intelligence is transforming business operations and what it means for your company.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'AI'
    },
    {
      title: 'Cloud Migration Best Practices',
      excerpt: 'Essential tips for a successful cloud migration project and avoiding common pitfalls.',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Cloud'
    },
    {
      title: 'Cybersecurity Trends 2024',
      excerpt: 'The latest cybersecurity threats and how to protect your business from them.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: 'Security'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Read our latest insights on AI, cloud computing, cybersecurity, and IT services. Stay updated with industry trends and best practices." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in technology.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}