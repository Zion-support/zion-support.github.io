import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for competitive advantage.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      tags: ['AI', 'Business', 'Technology'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Modern Enterprises',
      excerpt: 'Learn essential cybersecurity strategies to protect your organization from evolving threats in the digital age.',
      author: 'Security Team',
      date: '2024-01-10',
      readTime: '7 min read',
      tags: ['Cybersecurity', 'Enterprise', 'Security'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 3,
      title: '5G Technology: Transforming Industries and Creating New Opportunities',
      excerpt: 'Discover how 5G networks are revolutionizing industries and creating unprecedented opportunities for innovation.',
      author: '5G Solutions Team',
      date: '2024-01-05',
      readTime: '6 min read',
      tags: ['5G', 'Innovation', 'Technology'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 4,
      title: 'Micro SAAS: The New Era of Software Solutions',
      excerpt: 'Understanding the micro SAAS revolution and how small, focused applications are changing the software landscape.',
      author: 'Product Team',
      date: '2024-01-01',
      readTime: '4 min read',
      tags: ['SAAS', 'Software', 'Innovation'],
      image: '/api/placeholder/600/300'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Technology Insights & Industry News | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest technology insights, AI trends, cybersecurity best practices, and industry news from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity news, 5G technology, micro SAAS, tech trends, industry analysis" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Technology Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest insights, trends, and innovations in AI, cybersecurity, 5G, and emerging technologies.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl text-cyan-400/50">📝</div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest technology insights and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;