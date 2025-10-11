'use client'
import React, { useState, useMemo } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react'

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Innovation'],
      image: '/images/blog/ai-enterprise.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every organization should implement to protect against evolving cyber threats.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Best Practices', '2024'],
      image: '/images/blog/cybersecurity.jpg',
      featured: true
    },
    {
      id: '3',
      title: 'Cloud Migration Strategies That Work',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      content: 'Full article content...',
      author: 'Jennifer Liu',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'Strategy'],
      image: '/images/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: '4',
      title: 'DevOps Culture: Building Better Software',
      excerpt: 'How adopting DevOps practices can accelerate development and improve software quality.',
      content: 'Full article content...',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '4 min read',
      category: 'DevOps',
      tags: ['DevOps', 'Culture', 'Software Development'],
      image: '/images/blog/devops.jpg',
      featured: false
    },
    {
      id: '5',
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Leveraging data analytics to make informed business decisions and drive growth.',
      content: 'Full article content...',
      author: 'Emily Watson',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'Data Analytics',
      tags: ['Analytics', 'Data', 'Business Intelligence'],
      image: '/images/blog/data-analytics.jpg',
      featured: true
    },
    {
      id: '6',
      title: 'IoT Security: Protecting Connected Devices',
      excerpt: 'Critical security considerations for Internet of Things implementations.',
      content: 'Full article content...',
      author: 'Alex Thompson',
      date: '2023-12-25',
      readTime: '5 min read',
      category: 'IoT',
      tags: ['IoT', 'Security', 'Connected Devices'],
      image: '/images/blog/iot-security.jpg',
      featured: false
    }
  ];

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, blogPosts]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in AI and IT.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="ml-2 text-sm text-gray-400">Featured</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{post.title}</h3>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Category Filter */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                          : 'bg-white/20 text-gray-300 hover:bg-white/30'
                      }`}
                    >
                      {category === 'all' ? 'All Posts' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Posts Grid */}
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3 mb-4 md:mb-0">
                        <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-gray-400">Image Placeholder</span>
                        </div>
                      </div>
                      <div className="md:w-2/3 md:pl-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          {post.featured && (
                            <span className="ml-2 bg-yellow-500/20 text-yellow-300 text-sm font-medium px-3 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-3">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-400">
                            <User className="w-4 h-4 mr-1" />
                            <span>{post.author}</span>
                            <Calendar className="w-4 h-4 ml-3 mr-1" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <Clock className="w-4 h-4 ml-3 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full flex items-center"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-8 space-y-8">
                {/* Recent Posts */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded flex items-center justify-center">
                          <span className="text-gray-400 text-xs">IMG</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-white text-sm line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-400">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="block w-full text-left px-3 py-2 rounded hover:bg-white/20 transition-colors text-gray-300 hover:text-white"
                      >
                        {category}
                        <span className="float-right text-sm text-gray-400">
                          ({blogPosts.filter(post => post.category === category).length})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
                  <p className="text-gray-300 mb-4">
                    Get the latest technology insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 rounded transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-1 max-w-md"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage