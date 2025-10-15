import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CalendarIcon,
  ClockIcon,
  TagIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Digital Transformation', 'Industry Insights', 'Technology Trends'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      content: 'Artificial Intelligence continues to revolutionize how businesses operate...',
      author: 'Dr. Sarah Johnson',
      authorRole: 'Chief AI Officer',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Machine Learning', 'Business Intelligence', 'Automation'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Remote Work Environments',
      excerpt: 'Essential security measures to protect your organization in the era of remote work.',
      content: 'With remote work becoming the new norm, cybersecurity has never been more critical...',
      author: 'Michael Chen',
      authorRole: 'Security Director',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'Remote Work', 'Security', 'Best Practices'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Learn how to successfully migrate your infrastructure to the cloud with minimal disruption.',
      content: 'Cloud migration is a complex process that requires careful planning and execution...',
      author: 'Emily Rodriguez',
      authorRole: 'Cloud Solutions Architect',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'Cloud Computing',
      tags: ['Cloud Computing', 'Migration', 'Infrastructure', 'AWS', 'Azure'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Digital Transformation: Where to Start and How to Succeed',
      excerpt: 'A comprehensive guide to planning and executing your digital transformation journey.',
      content: 'Digital transformation is more than just adopting new technologies...',
      author: 'David Kim',
      authorRole: 'Digital Transformation Lead',
      publishDate: '2024-01-08',
      readTime: '12 min read',
      category: 'Digital Transformation',
      tags: ['Digital Transformation', 'Strategy', 'Change Management', 'Innovation'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 5,
      title: '5G Technology: Revolutionizing Connectivity and Business Operations',
      excerpt: 'Discover how 5G is transforming industries and creating new business opportunities.',
      content: '5G technology promises to revolutionize connectivity and enable new applications...',
      author: 'Lisa Wang',
      authorRole: '5G Solutions Expert',
      publishDate: '2024-01-05',
      readTime: '7 min read',
      category: 'Technology Trends',
      tags: ['5G', 'Connectivity', 'IoT', 'Edge Computing', 'Innovation'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Micro SaaS: Building Scalable Software Solutions',
      excerpt: 'Learn how to build and scale micro SaaS applications for maximum impact.',
      content: 'Micro SaaS represents a new approach to software development and business models...',
      author: 'Alex Thompson',
      authorRole: 'Micro SaaS Specialist',
      publishDate: '2024-01-03',
      readTime: '9 min read',
      category: 'Industry Insights',
      tags: ['Micro SaaS', 'Software Development', 'SaaS', 'Scalability', 'Business Models'],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and digital transformation. Expert articles and industry trends from Zion Tech Group." />
        <meta name="keywords" content="tech blog, AI insights, cybersecurity news, cloud computing, digital transformation, technology trends, IT articles" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Tech Blog
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Stay ahead with the latest insights on AI, cybersecurity, cloud computing, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <FunnelIcon className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          {selectedCategory === 'All' && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-purple-500 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                      <div className="text-6xl text-purple-400">📝</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{post.author}</p>
                            <p className="text-xs text-gray-400">{post.authorRole}</p>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors font-medium"
                        >
                          Read More
                          <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Regular Posts */}
          <section>
            <h2 className="text-3xl font-bold mb-8">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-purple-500 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="text-4xl text-purple-400">📄</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-slate-700 text-gray-300 px-2 py-1 rounded-full text-xs flex items-center">
                          <TagIcon className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors font-medium text-sm"
                      >
                        Read
                        <ArrowRightIcon className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights on technology trends and industry developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogPage;