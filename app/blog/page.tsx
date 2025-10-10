'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, BookOpen, Eye, Star, MessageCircle, Search, Filter } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Posts' },
    { name: 'AI', label: 'Artificial Intelligence' },
    { name: 'Cloud', label: 'Cloud Computing' },
    { name: 'Security', label: 'Cybersecurity' },
    { name: 'Development', label: 'Software Development' },
    { name: 'Business', label: 'Business Insights' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in artificial intelligence and how they\'re transforming enterprise operations.',
      category: 'AI',
      author: 'Dr. Sarah Chen',
      authorRole: 'AI Research Lead',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      views: 1250,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration projects.',
      category: 'Cloud',
      author: 'Michael Rodriguez',
      authorRole: 'Cloud Solutions Architect',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      views: 980,
      likes: 67,
      comments: 18
    },
    {
      id: 3,
      title: 'Cybersecurity in 2024: Emerging Threats and Defense Strategies',
      excerpt: 'Stay ahead of the latest cybersecurity threats and learn effective defense mechanisms.',
      category: 'Security',
      author: 'Emily Watson',
      authorRole: 'Security Expert',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      views: 1450,
      likes: 95,
      comments: 31
    },
    {
      id: 4,
      title: 'Building Scalable Web Applications with Modern Frameworks',
      excerpt: 'Discover the best practices for creating scalable and maintainable web applications.',
      category: 'Development',
      author: 'David Kim',
      authorRole: 'Senior Developer',
      publishDate: '2024-01-08',
      readTime: '15 min read',
      views: 1100,
      likes: 78,
      comments: 25
    },
    {
      id: 5,
      title: 'Digital Transformation: How AI is Reshaping Business Operations',
      excerpt: 'Understand how artificial intelligence is driving digital transformation across industries.',
      category: 'Business',
      author: 'Kleber Santos',
      authorRole: 'CEO & Founder',
      publishDate: '2024-01-05',
      readTime: '9 min read',
      views: 1650,
      likes: 112,
      comments: 42
    },
    {
      id: 6,
      title: 'Machine Learning Model Deployment: From Development to Production',
      excerpt: 'A comprehensive guide to deploying machine learning models in production environments.',
      category: 'AI',
      author: 'Dr. Sarah Chen',
      authorRole: 'AI Research Lead',
      publishDate: '2024-01-03',
      readTime: '11 min read',
      views: 890,
      likes: 56,
      comments: 19
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, cloud computing, cybersecurity, software development, business technology" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Technology
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, 
            and the latest technology trends shaping the future.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-sm text-gray-300">Article Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                      {categories.find(c => c.name === post.category)?.label}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-2">
                        <span className="text-purple-400 text-xs font-semibold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{post.author}</div>
                        <div className="text-gray-400 text-xs">{post.authorRole}</div>
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs">
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {post.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </span>
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      Read More
                      <ArrowRight className="inline-block ml-1 w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and never miss the latest trends and insights in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Subscribe Now
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Browse All Articles
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;