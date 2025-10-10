'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

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

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Innovation'],
      image: '/images/blog/ai-enterprise.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'Best Practices'],
      image: '/images/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'Stay ahead of the latest cybersecurity threats and protection strategies.',
      content: 'Full article content...',
      author: 'Alex Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Trends', 'Protection'],
      image: '/images/blog/cybersecurity.jpg',
      featured: true
    },
    {
      id: '4',
      title: 'Building Scalable Web Applications',
      excerpt: 'Learn the principles and techniques for creating applications that can handle millions of users.',
      content: 'Full article content...',
      author: 'Emma Wilson',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Development',
      tags: ['Web Development', 'Scalability', 'Architecture'],
      image: '/images/blog/scalable-apps.jpg',
      featured: false
    }
  ];

  const categories = ['all', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Development'];

  useEffect(() => {
    let filtered = blogPosts;

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
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, tech trends" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Technology Insights & News
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, and emerging technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="md:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          {filteredPosts.filter(post => post.featured).length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPosts
                  .filter(post => post.featured)
                  .map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                            <Calendar className="h-4 w-4 ml-2" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {selectedCategory === 'all' ? 'All Articles' : selectedCategory}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                        <Calendar className="h-4 w-4 ml-2" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or category filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;