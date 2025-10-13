'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and what to expect in the coming years.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI & Technology'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential cybersecurity measures every business should implement to protect against evolving threats.',
      author: 'Security Team',
      date: '2024-01-10',
      category: 'Security'
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies',
      excerpt: 'A comprehensive guide to successfully migrating your business to the cloud.',
      author: 'Cloud Solutions Team',
      date: '2024-01-05',
      category: 'Cloud Computing'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights on AI, IT solutions, 
            and technology trends from our expert team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;