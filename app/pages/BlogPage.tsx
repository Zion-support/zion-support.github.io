import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CalendarIcon,
  UserIcon,
  ClockIcon,
  TagIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  CpuChipIcon,
  ServerIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/600/400',
      href: '/blog/ai-trends-2024',
      views: 1250,
      likes: 89
    },
    {
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential security measures every small business should implement to protect their digital assets.',
      author: 'Emily Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400',
      href: '/blog/cybersecurity-small-business',
      views: 980,
      likes: 67
    },
    {
      title: 'Cloud Migration: A Step-by-Step Guide for Enterprises',
      excerpt: 'Complete guide to migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/400',
      href: '/blog/cloud-migration-guide',
      views: 1450,
      likes: 112
    },
    {
      title: 'Building Scalable Micro SaaS Applications',
      excerpt: 'Learn how to design and develop micro SaaS applications that can scale with your business growth.',
      author: 'Sarah Johnson',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'Development',
      image: '/api/placeholder/600/400',
      href: '/blog/micro-saas-development',
      views: 1100,
      likes: 95
    },
    {
      title: 'Digital Transformation: Lessons from Successful Companies',
      excerpt: 'Real-world case studies and lessons learned from companies that successfully transformed their operations.',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/600/400',
      href: '/blog/digital-transformation-case-studies',
      views: 890,
      likes: 73
    },
    {
      title: 'IT Infrastructure Optimization: Reducing Costs While Improving Performance',
      excerpt: 'Strategies for optimizing your IT infrastructure to reduce costs while maintaining or improving performance.',
      author: 'Lisa Wang',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'IT Infrastructure',
      image: '/api/placeholder/600/400',
      href: '/blog/it-infrastructure-optimization',
      views: 750,
      likes: 58
    }
  ];

  const categories = [
    {
      name: 'AI & Machine Learning',
      count: 15,
      icon: CpuChipIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Cybersecurity',
      count: 12,
      icon: ShieldCheckIcon,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Cloud Computing',
      count: 18,
      icon: CloudIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Development',
      count: 22,
      icon: CodeBracketIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Digital Transformation',
      count: 8,
      icon: RocketLaunchIcon,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'IT Infrastructure',
      count: 14,
      icon: ServerIcon,
      color: 'from-gray-500 to-slate-500'
    }
  ];

  const featuredPost = blogPosts[0];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, IT solutions, cybersecurity, cloud computing, technology trends, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, IT solutions, cybersecurity, 
              and technology trends from our expert team.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Subscribe to Updates
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Article</span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                      <DocumentTextIcon className="w-24 h-24 text-purple-400" />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <UserIcon className="w-4 h-4 mr-2" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Link 
                        to={featuredPost.href}
                        className="text-purple-400 hover:text-purple-300 flex items-center"
                      >
                        Read More
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Browse by <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Category</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find articles on topics that interest you most
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold">{category.count} articles</span>
                    <Link to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-purple-400 hover:text-purple-300 flex items-center">
                      Explore
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Articles</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay informed with our latest insights and expert analysis
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <DocumentTextIcon className="w-16 h-16 text-purple-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <UserIcon className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <div className="flex items-center">
                          <EyeIcon className="w-4 h-4 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <HeartIcon className="w-4 h-4 mr-1" />
                          {post.likes}
                        </div>
                      </div>
                      <Link 
                        to={post.href}
                        className="text-purple-400 hover:text-purple-300 flex items-center"
                      >
                        Read More
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights on AI, IT solutions, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                Subscribe
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;