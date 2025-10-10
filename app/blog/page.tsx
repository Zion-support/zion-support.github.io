'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and decision-making processes.',
      category: 'AI',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Quantum Computing: A Game Changer',
      excerpt: 'Understanding the potential of quantum computing and its impact on various industries.',
      category: 'Technology',
      date: '2024-01-10',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Blockchain Beyond Cryptocurrency',
      excerpt: 'Discovering practical applications of blockchain technology in supply chain, healthcare, and more.',
      category: 'Blockchain',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      excerpt: 'Essential security measures every business should implement to protect their digital assets.',
      category: 'Security',
      date: '2024-01-01',
      readTime: '4 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Cloud Migration Strategies',
      excerpt: 'A comprehensive guide to successfully migrating your business to the cloud.',
      category: 'Cloud',
      date: '2023-12-28',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Data Analytics for Growth',
      excerpt: 'How to leverage data analytics to drive business growth and make informed decisions.',
      category: 'Analytics',
      date: '2023-12-25',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['all', 'AI', 'Technology', 'Blockchain', 'Security', 'Cloud', 'Analytics'];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, blockchain, and more from Zion Tech Group's expert team." />
        <meta name="keywords" content="tech blog, AI insights, technology trends, blockchain, cybersecurity, cloud computing" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-slate-900 to-purple-900 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Tech Insights & Updates
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the curve with our latest insights on AI, technology trends, and industry innovations.
              </p>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-8 bg-white border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Posts' : category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-4xl">📝</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-cyan-600 font-medium">{post.category}</span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <button className="text-cyan-600 hover:text-cyan-700 font-medium">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-16 bg-gradient-to-r from-cyan-600 to-purple-600">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest tech insights and industry updates.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;