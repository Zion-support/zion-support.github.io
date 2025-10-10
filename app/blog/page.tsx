'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Filter, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts data
  const samplePosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in artificial intelligence and how they\'re transforming businesses across industries.',
      content: 'Full article content...',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      category: 'AI',
      tags: ['AI', 'Business', 'Technology', 'Future'],
      readTime: '5 min read',
      image: '/images/blog/ai-future.jpg'
    },
    {
      id: '2',
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Learn essential cybersecurity measures to protect your small business from digital threats.',
      content: 'Full article content...',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      category: 'Security',
      tags: ['Cybersecurity', 'Small Business', 'Security', 'Best Practices'],
      readTime: '7 min read',
      image: '/images/blog/cybersecurity.jpg'
    },
    {
      id: '3',
      title: 'Cloud Migration: A Step-by-Step Guide',
      excerpt: 'Everything you need to know about migrating your business to the cloud successfully.',
      content: 'Full article content...',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      category: 'Cloud',
      tags: ['Cloud', 'Migration', 'Infrastructure', 'Guide'],
      readTime: '10 min read',
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: '4',
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Discover how data analytics can help your business make better decisions and drive growth.',
      content: 'Full article content...',
      author: 'Zion Tech Group',
      date: '2024-01-01',
      category: 'Analytics',
      tags: ['Data Analytics', 'Business Intelligence', 'Insights', 'Growth'],
      readTime: '6 min read',
      image: '/images/blog/data-analytics.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'AI', name: 'AI & Machine Learning' },
    { id: 'Security', name: 'Cybersecurity' },
    { id: 'Cloud', name: 'Cloud Computing' },
    { id: 'Analytics', name: 'Data Analytics' },
    { id: 'Development', name: 'Development' }
  ];

  useEffect(() => {
    setPosts(samplePosts);
    setFilteredPosts(samplePosts);
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, technology trends, IT solutions, cybersecurity, cloud computing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Insights, trends, and expert advice on AI, IT solutions, and technology
            </p>
          </section>

          {/* Search and Filter Section */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="w-full px-4 py-3 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="mb-16">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <div className="text-6xl text-cyan-400/50">📝</div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <div className="mb-3">
                        <span className="inline-block bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>

                      <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>

          {/* Newsletter Signup */}
          <section className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights on AI, technology, and business solutions delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogPage;