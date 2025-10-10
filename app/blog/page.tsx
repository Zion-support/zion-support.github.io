'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Explore how artificial intelligence is transforming modern business operations and creating new opportunities.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/images/blog/ai-business.jpg'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      excerpt: 'Learn the essential strategies for successful cloud migration and avoiding common pitfalls.',
      author: 'Zion Tech Team',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud Computing',
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Digital Age',
      excerpt: 'Understanding the latest cybersecurity threats and how to protect your business.',
      author: 'Zion Tech Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      image: '/images/blog/cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Micro SaaS Development Guide',
      excerpt: 'Building scalable micro SaaS applications that solve real business problems.',
      author: 'Zion Tech Team',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Development',
      image: '/images/blog/micro-saas.jpg'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Cloud Computing', 'Security', 'Development'];
  
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business innovation from Zion Tech Group." />
        <meta name="keywords" content="AI blog, technology insights, business innovation, tech trends" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Stay ahead with the latest insights on AI, technology, and business innovation. 
                Discover trends, best practices, and expert advice from our team.
              </p>

              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400/30">📝</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      {post.readTime}
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      
                      <a 
                        href={`/blog/${post.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl text-gray-400 mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search terms or browse all categories.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
