'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
}

const BlogPage: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '8 min read',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successfully migrating your business to the cloud.',
      author: 'Mike Chen',
      date: '2024-01-12',
      category: 'Cloud Computing',
      readTime: '12 min read',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Discover how AI is both enhancing cybersecurity measures and creating new challenges for businesses.',
      author: 'Alex Rodriguez',
      date: '2024-01-10',
      category: 'Cybersecurity',
      readTime: '10 min read',
      featured: false
    },
    {
      id: '4',
      title: 'Digital Transformation: A Step-by-Step Implementation Guide',
      excerpt: 'A comprehensive guide to implementing digital transformation initiatives in your organization.',
      author: 'Emily Watson',
      date: '2024-01-08',
      category: 'Digital Transformation',
      readTime: '15 min read',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Digital Transformation'];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights and News</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation. Expert articles and industry news from Zion Tech Group." />
        <meta name="keywords" content="AI blog, IT insights, cloud computing news, cybersecurity articles, digital transformation, technology trends" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay informed with the latest insights, trends, and expert analysis 
                in AI, cloud computing, cybersecurity, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              {posts.filter(post => post.featured).map((post) => (
                <div key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                        <span className="text-cyan-400 text-sm">{post.category}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                      <p className="text-lg text-gray-300 mb-6">{post.excerpt}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg h-64 flex items-center justify-center">
                      <span className="text-gray-400">Featured Image</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-cyan-400 text-sm font-semibold">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{post.title}</h3>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates in AI and IT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;