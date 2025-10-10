'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const BlogPage: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and what to expect in the coming years.',
      author: 'John Smith',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      tags: ['AI', 'Business', 'Technology'],
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud with minimal downtime.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud',
      tags: ['Cloud', 'Migration', 'DevOps'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'The latest cybersecurity threats and trends that businesses need to be aware of in 2024.',
      author: 'Mike Chen',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      tags: ['Security', 'Cybersecurity', 'Trends'],
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | AI and IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from our expert team." />
        <meta name="keywords" content="blog, AI insights, IT solutions, technology trends, tech news" />
      </Helmet>
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, IT solutions, and technology trends 
              from our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-semibold">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-300 mb-3">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">By {post.author}</span>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest insights and updates 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;