'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn how to successfully migrate your infrastructure to the cloud with our comprehensive guide.',
      author: 'Zion Tech Team',
      date: '2024-01-10',
      category: 'Cloud & Infrastructure',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Discover the latest cybersecurity threats and how to protect your business from them.',
      author: 'Zion Tech Team',
      date: '2024-01-05',
      category: 'Security',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'The Rise of Edge Computing: What It Means for Your Business',
      excerpt: 'Understand how edge computing is changing the way we process data and deliver services.',
      author: 'Zion Tech Team',
      date: '2024-01-01',
      category: 'Technology',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'AI-Powered Automation: Streamlining Business Processes',
      excerpt: 'See how AI automation can help your business become more efficient and productive.',
      author: 'Zion Tech Team',
      date: '2023-12-28',
      category: 'AI & Technology',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Learn how to leverage data analytics to make better business decisions.',
      author: 'Zion Tech Team',
      date: '2023-12-25',
      category: 'Analytics',
      readTime: '6 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business transformation from Zion Tech Group." />
        <meta name="keywords" content="AI blog, technology insights, business transformation, cloud computing, cybersecurity" />
      </Helmet>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, technology, and business transformation.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">📝</div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-600/20 text-purple-300">
                    {post.category}
                  </span>
                  
                  <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No articles found matching your search.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;