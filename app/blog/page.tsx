'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise Solutions',
    excerpt: 'Exploring how artificial intelligence is transforming enterprise operations and what businesses need to know.',
    content: 'Full article content here...',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI',
    tags: ['AI', 'Enterprise', 'Technology'],
    image: '/api/placeholder/400/200',
    featured: true
  },
  {
    id: '2',
    title: 'Cloud Migration Best Practices',
    excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
    content: 'Full article content here...',
    author: 'Mike Chen',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Cloud',
    tags: ['Cloud', 'Migration', 'Best Practices'],
    image: '/api/placeholder/400/200',
    featured: false
  },
  {
    id: '3',
    title: 'Cybersecurity Trends for 2024',
    excerpt: 'Stay ahead of the latest cybersecurity threats and protection strategies.',
    content: 'Full article content here...',
    author: 'Alex Rodriguez',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Security',
    tags: ['Security', 'Cybersecurity', 'Trends'],
    image: '/api/placeholder/400/200',
    featured: true
  },
  {
    id: '4',
    title: 'Building Scalable Web Applications',
    excerpt: 'Learn how to design and build web applications that can handle millions of users.',
    content: 'Full article content here...',
    author: 'Emily Davis',
    date: '2024-01-01',
    readTime: '8 min read',
    category: 'Development',
    tags: ['Web Development', 'Scalability', 'Architecture'],
    image: '/api/placeholder/400/200',
    featured: false
  }
];

const categories = ['All', 'AI', 'Cloud', 'Security', 'Development'];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from Zion Tech Group." />
        <meta name="keywords" content="blog, AI, cloud computing, cybersecurity, technology trends, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Tech
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 ${post.featured ? 'ring-2 ring-blue-400' : ''}`}>
                  {post.featured && (
                    <div className="px-6 pt-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Read More
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;