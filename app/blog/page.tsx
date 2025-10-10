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
      excerpt: 'Learn the essential steps and strategies for a successful cloud migration that minimizes downtime and maximizes benefits.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      category: 'Cloud Computing',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of Remote Work',
      excerpt: 'Discover how to protect your organization from evolving cyber threats in a distributed work environment.',
      author: 'Mike Chen',
      date: '2024-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'The Rise of Micro SaaS: Building Profitable Small Software Businesses',
      excerpt: 'Explore the micro SaaS revolution and learn how to build and scale small, profitable software businesses.',
      author: 'Alex Rodriguez',
      date: '2024-01-01',
      category: 'Business Strategy',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Competitive Advantage',
      excerpt: 'Learn how to leverage data analytics to make informed business decisions and gain a competitive edge.',
      author: 'Emily Davis',
      date: '2023-12-28',
      category: 'Data Analytics',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'The Future of Work: How AI is Transforming the Workplace',
      excerpt: 'Examine the impact of AI on the modern workplace and what it means for the future of employment.',
      author: 'David Kim',
      date: '2023-12-25',
      category: 'AI & Technology',
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
        <title>Blog | Zion Tech Group - AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, cloud computing, cybersecurity, business technology" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tech Insights & News
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead with the latest insights on AI, IT solutions, and emerging technologies.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm">{post.category}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;