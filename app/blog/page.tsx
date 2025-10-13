'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and driving innovation.',
      date: '2024-01-15',
      author: 'John Doe',
      category: 'AI & Machine Learning',
      readTime: '5 min read'
    },
    {
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud with minimal downtime.',
      date: '2024-01-10',
      author: 'Jane Smith',
      category: 'Cloud Computing',
      readTime: '8 min read'
    },
    {
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Stay ahead of the latest cybersecurity threats and protection strategies for your organization.',
      date: '2024-01-05',
      author: 'Mike Johnson',
      category: 'Cybersecurity',
      readTime: '6 min read'
    },
    {
      title: '5G Technology Revolution',
      excerpt: 'How 5G networks are enabling new possibilities in IoT, edge computing, and real-time applications.',
      date: '2024-01-01',
      author: 'Sarah Wilson',
      category: '5G & Connectivity',
      readTime: '7 min read'
    },
    {
      title: 'Micro SAAS Success Stories',
      excerpt: 'Real-world examples of how micro SAAS solutions are transforming small and medium businesses.',
      date: '2023-12-28',
      author: 'David Chen',
      category: 'Software Development',
      readTime: '4 min read'
    },
    {
      title: 'Data Analytics for Decision Making',
      excerpt: 'Leverage data analytics to make informed business decisions and drive growth in your organization.',
      date: '2023-12-20',
      author: 'Lisa Rodriguez',
      category: 'Data & Analytics',
      readTime: '9 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and best practices in AI and IT from Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in AI and IT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition duration-300 group">
              <div className="mb-4">
                <span className="inline-block bg-purple-600/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <span className="text-xs">{post.readTime}</span>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights, trends, and updates from the world of AI and IT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;