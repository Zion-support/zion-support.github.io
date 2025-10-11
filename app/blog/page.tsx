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
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest AI and IT insights, trends, and best practices from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT blog, technology insights, AI trends, cloud computing, cybersecurity" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights and trends in AI and IT technology." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Blog
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights, trends, and best practices in AI and IT technology. 
                Our experts share their knowledge to help you stay ahead of the curve.
              </p>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search blog posts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                    <div className="mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </article>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-300 text-lg">No blog posts found matching your search.</p>
                </div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
