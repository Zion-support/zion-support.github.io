'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Clock,
  Tag,
  Search,
  Filter,
  Brain,
  Cloud,
  Shield,
  Smartphone,
  Database,
  Zap,
  Globe,
  TrendingUp
} from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Future of AI in Enterprise: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping enterprise technology and how businesses can prepare for the future of artificial intelligence.',
      author: 'Dr. Kleber Santos',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Future Tech', 'Trends'],
      image: '/blog/ai-enterprise-future.jpg',
      featured: true
    },
    {
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration, including common pitfalls to avoid and optimization techniques.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
      image: '/blog/cloud-migration-guide.jpg',
      featured: true
    },
    {
      title: 'Cybersecurity in 2024: Emerging Threats and Defense Strategies',
      excerpt: 'Stay ahead of the latest cybersecurity threats and learn about new defense strategies to protect your business in 2024.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Threats', 'Defense', '2024'],
      image: '/blog/cybersecurity-2024.jpg',
      featured: false
    },
    {
      title: '5G Implementation: Transforming Industries with Next-Gen Connectivity',
      excerpt: 'Discover how 5G technology is revolutionizing various industries and creating new opportunities for businesses worldwide.',
      author: 'Michael Chen',
      date: '2024-01-08',
      readTime: '9 min read',
      category: '5G Technology',
      tags: ['5G', 'Connectivity', 'IoT', 'Innovation'],
      image: '/blog/5g-implementation.jpg',
      featured: false
    },
    {
      title: 'Mobile App Development: React Native vs Flutter in 2024',
      excerpt: 'Compare the latest features and performance of React Native and Flutter to choose the best framework for your mobile app project.',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Mobile Development',
      tags: ['Mobile', 'React Native', 'Flutter', 'Comparison'],
      image: '/blog/react-native-flutter.jpg',
      featured: false
    },
    {
      title: 'Data Analytics: Turning Big Data into Business Insights',
      excerpt: 'Learn how to leverage data analytics to gain valuable business insights and drive data-driven decision making.',
      author: 'Lisa Wang',
      date: '2024-01-03',
      readTime: '11 min read',
      category: 'Data Analytics',
      tags: ['Data', 'Analytics', 'Insights', 'Business'],
      image: '/blog/data-analytics-insights.jpg',
      featured: false
    }
  ];

  const categories = [
    { name: 'AI & Machine Learning', icon: Brain, count: 15 },
    { name: 'Cloud Computing', icon: Cloud, count: 12 },
    { name: 'Cybersecurity', icon: Shield, count: 10 },
    { name: 'Mobile Development', icon: Smartphone, count: 8 },
    { name: 'Data Analytics', icon: Database, count: 6 },
    { name: '5G Technology', icon: Globe, count: 4 }
  ];

  const popularTags = [
    'AI', 'Cloud', 'Security', 'Mobile', 'Data', '5G', 'Enterprise', 'Innovation', 'Technology', 'Trends'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology insights, industry trends, and expert analysis from Zion Tech Group's blog. AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, mobile development, 5G, data analytics, Zion Tech Group" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Technology insights and industry news from our expert team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Zion Tech Group" />
        <meta name="twitter:description" content="Technology insights and industry news from our expert team." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Technology{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with our expert insights on AI, cloud computing, cybersecurity, 
            and the latest technology trends shaping the future of business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-64"
              />
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
              <p className="text-lg text-gray-300 mb-6">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center text-gray-400">
                  <User className="w-4 h-4 mr-2" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="w-4 h-4 mr-2" />
                  {featuredPost.readTime}
                </div>
                <span className="bg-white/10 text-cyan-400 px-2 py-1 rounded text-sm">
                  {featuredPost.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                to="#"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
            </div>
            
            <div className="space-y-8">
              {regularPosts.map((post, index) => (
                <article key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="bg-white/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="#"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="flex items-center justify-between text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <div className="flex items-center">
                        <category.icon className="w-4 h-4 mr-3" />
                        {category.name}
                      </div>
                      <span className="bg-white/10 text-gray-400 px-2 py-1 rounded text-sm">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-500/30">
                <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Subscribe to our newsletter for the latest technology insights and industry news.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                  />
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}