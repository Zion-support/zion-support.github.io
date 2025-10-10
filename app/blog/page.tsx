'use client';
<<<<<<< HEAD

import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Search, Calendar, User, Clock, ArrowRight}}from 'lucide-react';

const BlogPage: React.FC = () => {,
  const [searchQuery, setSearchQuery] = useState('');

=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Explore how artificial intelligence is transforming modern business operations and creating new opportunities for growth.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
<<<<<<< HEAD
      image: '/images/blog/ai-business.jpg',},
    {id: 2,
=======
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 2,
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
      title: 'Cloud Migration Best Practices',
      excerpt: 'Learn the essential strategies for successful cloud migration and how to avoid common pitfalls.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Cloud Computing',
<<<<<<< HEAD
      image: '/images/blog/cloud-migration.jpg',},
    {id: 3,
      title: 'Cybersecurity in the Digital Age',
      excerpt: 'Understanding the latest cybersecurity threats and how to protect your business.',
      author: 'Zion Tech Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      image: '/images/blog/cybersecurity.jpg',},
    {id: 4,
      title: 'Micro SaaS Development Guide',
      excerpt: 'Building scalable micro SaaS applications that solve real business problems.',
      author: 'Zion Tech Team',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Development',
      image: '/images/blog/micro-saas.jpg',}];
  const categories = ['All', 'AI & Technology', 'Cloud Computing', 'Security', 'Development']

  const filteredPosts = blogPosts.filter(post =>)
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return(<>)
      <Helmet />
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, cloud computing, cybersecurity, micro SaaS, tech trends" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
                Tech Insights & Blog;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Stay ahead with the latest trends, insights, and best practices in AI, cloud computing, and technology.</p>
              </p>
=======
      image: '/api/placeholder/600/300'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Stay ahead of the latest cybersecurity threats and learn about emerging protection strategies.',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Security',
      image: '/api/placeholder/600/300'
    },
    {
      id: 4,
      title: 'Building Scalable Web Applications',
      excerpt: 'Discover the key principles and technologies for creating web applications that can handle massive growth.',
      author: 'Alex Rodriguez',
      date: '2024-01-08',
      readTime: '8 min read',
      category: 'Development',
      image: '/api/placeholder/600/300'
    },
    {
      id: 5,
      title: 'Data Analytics for Business Intelligence',
      excerpt: 'Transform your business data into actionable insights with advanced analytics and visualization techniques.',
      author: 'Emily Davis',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Data Science',
      image: '/api/placeholder/600/300'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing',
      excerpt: 'Understanding how edge computing is revolutionizing data processing and improving application performance.',
      author: 'David Kim',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Infrastructure',
      image: '/api/placeholder/600/300'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Cloud Computing', 'Security', 'Development', 'Data Science', 'Infrastructure'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tech Insights
            </span>
            <br />
            <span className="text-white">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in AI, cloud computing, 
            cybersecurity, and modern software development.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Link
                  to={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
            <div className="mb-12">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}onChange={(e) => setSearchQuery(e.target.value)}className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20",
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">{categories.map((category) => (</div>
                <button;
                  key={category}className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover: bg-white/20 transition-all duration-300",
                >{category</button>} </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
              {filteredPosts.map((post) => (
                <article;
                  key={post.id}className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover: border-cyan-400/30 transition-all duration-300 group",
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📝</div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date} </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover: text-cyan-400 transition-colors">,</h2>
                    {post.title} </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt</p>} </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      {post.author} </div>
                    <button className="flex items-center gap-2 text-cyan-400 hover: text-cyan-300 transition-colors">,</button>
                      Read More;
=======
      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-4xl">📊</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
<<<<<<< HEAD
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search.</p>
              </div>
            )} </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
=======
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get the latest tech insights and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
