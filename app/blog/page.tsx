'use client';
import React from 'react';
import { Calendar, User, ArrowRight, Tag, Clock, Eye, ThumbsUp, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping business operations and discover how companies are leveraging artificial intelligence for unprecedented growth.',
      author: 'Dr. Kleber Santos',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '🤖',
      views: 1250,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Barriers in 2024',
      excerpt: 'Quantum computing is no longer science fiction. Learn about the latest breakthroughs and how quantum algorithms are solving real-world problems.',
      author: 'Sarah Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Quantum Computing',
      image: '⚛️',
      views: 2100,
      likes: 156,
      comments: 45
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'As AI becomes more prevalent, cybersecurity threats evolve. Discover the latest security strategies and AI-powered protection methods.',
      author: 'Emily Johnson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cybersecurity',
      image: '🛡️',
      views: 1800,
      likes: 134,
      comments: 38
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Complete Guide for 2024',
      excerpt: 'Planning to migrate to the cloud? Our comprehensive guide covers everything you need to know about successful cloud migration strategies.',
      author: 'Michael Rodriguez',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'Cloud Computing',
      image: '☁️',
      views: 3200,
      likes: 245,
      comments: 67
    },
    {
      id: 5,
      title: 'AI-Powered Supply Chain Optimization: Real-World Success Stories',
      excerpt: 'See how leading companies are using AI to optimize their supply chains, reduce costs, and improve efficiency by up to 40%.',
      author: 'Dr. Kleber Santos',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Supply Chain',
      image: '🚚',
      views: 1650,
      likes: 112,
      comments: 29
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Bringing AI Closer to Data',
      excerpt: 'Edge computing is revolutionizing how we process data. Learn about its benefits, challenges, and implementation strategies.',
      author: 'Sarah Chen',
      date: '2024-01-03',
      readTime: '11 min read',
      category: 'Edge Computing',
      image: '🌐',
      views: 1400,
      likes: 98,
      comments: 22
    },
    {
      id: 7,
      title: 'Machine Learning in Healthcare: Transforming Patient Care',
      excerpt: 'Discover how machine learning is revolutionizing healthcare, from diagnosis to treatment, and improving patient outcomes worldwide.',
      author: 'Dr. Kleber Santos',
      date: '2024-01-01',
      readTime: '13 min read',
      category: 'Healthcare AI',
      image: '🏥',
      views: 2800,
      likes: 198,
      comments: 54
    },
    {
      id: 8,
      title: 'Blockchain and AI: A Powerful Combination for the Future',
      excerpt: 'Explore how blockchain technology and AI are working together to create more secure, transparent, and efficient systems.',
      author: 'Michael Rodriguez',
      date: '2023-12-28',
      readTime: '14 min read',
      category: 'Blockchain',
      image: '⛓️',
      views: 1950,
      likes: 167,
      comments: 41
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Computing',
    'Supply Chain',
    'Edge Computing',
    'Healthcare AI',
    'Blockchain',
    'Industry Insights'
  ];

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Our Blog">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Stay updated with the latest insights, trends, and innovations in AI, IT, and technology. 
            Our expert team shares knowledge to help you stay ahead of the curve.
          </p>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Featured Article
          </h2>
          <div className="cyber-card p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="text-6xl mb-4">{featuredPost.image}</div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-400 text-slate-900 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-4 neon-text">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={`/blog/${featuredPost.id}`}
                  className="cyber-button px-6 py-3 text-sm font-medium hover:scale-105 transition-all duration-300 inline-flex items-center"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-cyan-400 text-slate-900'
                    : 'bg-slate-800 text-gray-300 hover:bg-cyan-400 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{post.image}</div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-purple-400 text-slate-900 rounded text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-gray-400 text-xs">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-400 text-xs">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <a
                    href={`/blog/${post.id}`}
                    className="text-cyan-400 hover:text-white text-sm font-medium transition-colors flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="cyber-card p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter and get the latest AI and IT insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="cyber-button px-6 py-3 font-semibold hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;