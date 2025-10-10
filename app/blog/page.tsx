'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      excerpt: 'Learn the essential steps and strategies for successful cloud migration that minimizes downtime and maximizes benefits.',
      author: 'Cloud Solutions Team',
      date: '2024-01-10',
      category: 'Cloud Services',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Discover how AI is both enhancing cybersecurity capabilities and creating new challenges that businesses must address.',
      author: 'Security Team',
      date: '2024-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Micro SaaS Solutions: Building Scalable AI-Powered Tools',
      excerpt: 'Learn how to create and scale micro SaaS applications that leverage AI to solve specific business problems.',
      author: 'Product Team',
      date: '2024-01-01',
      category: 'Micro SaaS',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Quantum Computing: The Next Frontier in Business Technology',
      excerpt: 'Understanding how quantum computing will revolutionize data processing and problem-solving in enterprise environments.',
      author: 'Research Team',
      date: '2023-12-28',
      category: 'AI & Technology',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Edge Computing: Bringing Intelligence Closer to the Source',
      excerpt: 'Explore how edge computing is enabling real-time AI processing and reducing latency in critical applications.',
      author: 'Infrastructure Team',
      date: '2023-12-20',
      category: 'Cloud Services',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Cloud Services', 'Cybersecurity', 'Micro SaaS', 'Industry Insights'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog | Zion Tech Group - AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, cloud computing, cybersecurity, micro SaaS, tech trends" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tech Insights & Updates
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest trends, insights, and best practices in AI, cloud computing, and technology.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                      : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl font-bold mb-2">{post.category.charAt(0)}</div>
                        <div className="text-sm opacity-80">{post.category}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results Message */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}

            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Load More Articles
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
