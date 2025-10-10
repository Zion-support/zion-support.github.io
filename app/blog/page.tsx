'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping business operations and customer experiences.',
      content: 'Artificial Intelligence continues to evolve at an unprecedented pace, transforming how businesses operate and compete...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '8 min read',
      image: '/images/blog/ai-business-trends.jpg',
      tags: ['AI', 'Business', 'Trends', '2024']
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices for Enterprise Applications',
      excerpt: 'Essential security measures every organization should implement when migrating to the cloud.',
      content: 'As more organizations move their infrastructure to the cloud, security becomes paramount...',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/images/blog/cloud-security.jpg',
      tags: ['Cloud', 'Security', 'Enterprise', 'Best Practices']
    },
    {
      id: 3,
      title: 'Building Scalable Microservices with Modern DevOps',
      excerpt: 'Learn how to design and deploy microservices that can scale with your business growth.',
      content: 'Microservices architecture offers numerous benefits, but requires careful planning and execution...',
      author: 'Alex Thompson',
      date: '2024-01-10',
      category: 'DevOps',
      readTime: '10 min read',
      image: '/images/blog/microservices-devops.jpg',
      tags: ['Microservices', 'DevOps', 'Scalability', 'Architecture']
    },
    {
      id: 4,
      title: 'The Rise of Edge Computing: Bringing Intelligence Closer to Users',
      excerpt: 'Understanding how edge computing is revolutionizing data processing and user experiences.',
      content: 'Edge computing represents a paradigm shift in how we process and analyze data...',
      author: 'Dr. Emily Watson',
      date: '2024-01-08',
      category: 'Edge Computing',
      readTime: '7 min read',
      image: '/images/blog/edge-computing.jpg',
      tags: ['Edge Computing', 'IoT', 'Performance', 'Innovation']
    },
    {
      id: 5,
      title: 'Data Privacy in the Age of AI: Compliance and Best Practices',
      excerpt: 'Navigating the complex landscape of data privacy regulations while leveraging AI capabilities.',
      content: 'As AI systems become more sophisticated, data privacy concerns grow exponentially...',
      author: 'Jennifer Liu',
      date: '2024-01-05',
      category: 'Privacy & Compliance',
      readTime: '9 min read',
      image: '/images/blog/data-privacy-ai.jpg',
      tags: ['Privacy', 'AI', 'Compliance', 'GDPR']
    },
    {
      id: 6,
      title: 'Quantum Computing: The Next Frontier in Computational Power',
      excerpt: 'Exploring the potential of quantum computing and its implications for various industries.',
      content: 'Quantum computing promises to solve problems that are currently intractable for classical computers...',
      author: 'Prof. David Kim',
      date: '2024-01-03',
      category: 'Quantum Computing',
      readTime: '12 min read',
      image: '/images/blog/quantum-computing.jpg',
      tags: ['Quantum Computing', 'Innovation', 'Research', 'Future Tech']
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cybersecurity', 'DevOps', 'Edge Computing', 'Privacy & Compliance', 'Quantum Computing'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, cloud computing, cybersecurity, micro SaaS, tech trends" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tech Insights & Blog
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead with expert insights on AI, cloud computing, cybersecurity, and emerging technologies
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20">📝</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-cyan-400 font-medium">{post.category}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}

            {/* Newsletter Signup */}
            <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest tech insights, AI breakthroughs, and industry updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;