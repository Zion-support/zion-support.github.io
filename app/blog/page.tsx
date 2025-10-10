'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, and industry best practices from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, digital transformation" />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Insights & Industry News
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Stay ahead with expert insights on AI, cloud computing, cybersecurity, and digital transformation
              </p>
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'All' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                          <p className="text-blue-100 text-sm">{post.excerpt}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <User className="w-4 h-4 mr-2" />
                          <span className="mr-4">{post.author}</span>
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center mb-3">
                          <Tag className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.category}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8 text-blue-100">
                Get the latest technology insights delivered to your inbox
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;