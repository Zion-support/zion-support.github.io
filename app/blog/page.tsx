'use client';
import React from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Filter, Tag, TrendingUp, Star, Eye, MessageSquare, Share2, BookOpen, Brain, Cloud, Shield, Code, BarChart, Zap, Target, Globe, Database, Smartphone, Settings, Lock, Users, Award, Phone, Mail } from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPost = {
    title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
    excerpt: 'Explore the latest AI trends shaping enterprise technology in 2024, from quantum computing integration to autonomous business processes.',
    author: 'Dr. Kleber Santos',
    date: 'January 15, 2024',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    image: '/blog/ai-enterprise-2024.jpg',
    tags: ['AI', 'Enterprise', 'Trends', '2024'],
    views: '2.3k',
    likes: '156'
  };

  const blogPosts = [
    {
      title: 'How AI is Revolutionizing Customer Service',
      excerpt: 'Discover how AI-powered chatbots and virtual assistants are transforming customer service operations.',
      author: 'Sarah Chen',
      date: 'January 12, 2024',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-customer-service.jpg',
      tags: ['AI', 'Customer Service', 'Automation'],
      views: '1.8k',
      likes: '89'
    },
    {
      title: 'Cloud Migration Best Practices for 2024',
      excerpt: 'A comprehensive guide to successful cloud migration strategies and implementation.',
      author: 'Michael Rodriguez',
      date: 'January 10, 2024',
      readTime: '6 min read',
      category: 'Cloud Computing',
      image: '/blog/cloud-migration-2024.jpg',
      tags: ['Cloud', 'Migration', 'Best Practices'],
      views: '1.5k',
      likes: '72'
    },
    {
      title: 'Cybersecurity Trends: Protecting Your Digital Assets',
      excerpt: 'Learn about the latest cybersecurity threats and how to protect your organization.',
      author: 'Emily Johnson',
      date: 'January 8, 2024',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity-trends.jpg',
      tags: ['Cybersecurity', 'Security', 'Threats'],
      views: '2.1k',
      likes: '134'
    },
    {
      title: 'The Rise of Micro SAAS: Building Scalable Solutions',
      excerpt: 'Explore how micro SAAS applications are changing the software landscape.',
      author: 'Dr. Kleber Santos',
      date: 'January 5, 2024',
      readTime: '4 min read',
      category: 'Software Development',
      image: '/blog/micro-saas-rise.jpg',
      tags: ['SAAS', 'Microservices', 'Scalability'],
      views: '1.2k',
      likes: '67'
    },
    {
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'How advanced data analytics can help businesses make better decisions.',
      author: 'Sarah Chen',
      date: 'January 3, 2024',
      readTime: '5 min read',
      category: 'Data Analytics',
      image: '/blog/data-analytics-insights.jpg',
      tags: ['Data Analytics', 'Insights', 'Business Intelligence'],
      views: '1.6k',
      likes: '91'
    },
    {
      title: 'DevOps Automation: Streamlining Development Workflows',
      excerpt: 'Best practices for implementing DevOps automation in your organization.',
      author: 'Michael Rodriguez',
      date: 'January 1, 2024',
      readTime: '6 min read',
      category: 'DevOps',
      image: '/blog/devops-automation.jpg',
      tags: ['DevOps', 'Automation', 'CI/CD'],
      views: '1.4k',
      likes: '78'
    }
  ];

  const categories = [
    { name: 'All', count: 24, icon: BookOpen },
    { name: 'AI & Machine Learning', count: 8, icon: Brain },
    { name: 'Cloud Computing', count: 5, icon: Cloud },
    { name: 'Cybersecurity', count: 4, icon: Shield },
    { name: 'Software Development', count: 3, icon: Code },
    { name: 'Data Analytics', count: 2, icon: BarChart },
    { name: 'DevOps', count: 2, icon: Settings }
  ];

  const popularTags = [
    'AI', 'Machine Learning', 'Cloud', 'Security', 'Automation', 'DevOps', 'Data Analytics', 'Enterprise', 'Technology', 'Innovation'
  ];

  return (
    <>
      <SEOOptimizer
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends. Expert articles and industry analysis from Zion Tech Group."
        keywords={['AI blog', 'technology blog', 'cloud computing', 'cybersecurity', 'machine learning', 'tech insights', 'industry trends']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Insights, Trends & Technology News
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, and the latest technology trends. 
                Our team of experts shares their knowledge to help you navigate the digital landscape.
              </p>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="cyber-card p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <select className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400">
                      <option>All Categories</option>
                      {categories.slice(1).map((category, index) => (
                        <option key={index} value={category.name}>{category.name}</option>
                      ))}
                    </select>
                    <button className="cyber-button flex items-center space-x-2">
                      <Filter className="w-4 h-4" />
                      <span>Filter</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Post */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 neon-text">Featured Article</h2>
              <div className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-400 text-sm">Featured</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 neon-text">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{featuredPost.views}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{featuredPost.likes}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="cyber-button inline-flex items-center space-x-2"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-300">Featured Article Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-white mb-6 neon-text">Latest Articles</h2>
                  <div className="space-y-8">
                    {blogPosts.map((post, index) => (
                      <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <span className="text-gray-400 text-sm">{post.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 neon-text">{post.title}</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300 text-sm">{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300 text-sm">{post.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Eye className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300 text-sm">{post.views}</span>
                            </div>
                          </div>
                          <a
                            href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-1"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Categories */}
                  <div className="cyber-card p-6">
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <a
                          key={index}
                          href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center justify-between p-3 hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <category.icon className="w-5 h-5 text-cyan-400" />
                            <span className="text-gray-300">{category.name}</span>
                          </div>
                          <span className="text-gray-400 text-sm">{category.count}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className="cyber-card p-6">
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <a
                          key={index}
                          href={`/blog/tag/${tag.toLowerCase()}`}
                          className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition-colors"
                        >
                          #{tag}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="cyber-card p-6">
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">Stay Updated</h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      Subscribe to our newsletter for the latest insights and technology trends.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      />
                      <button className="w-full cyber-button">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
                Ready to Implement These Insights?
              </h2>
              <p className="text-lg text-gray-300 mb-12">
                Let our expert team help you apply these technologies and strategies to your business. 
                Get a free consultation and discover how we can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Us</span>
                </a>
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