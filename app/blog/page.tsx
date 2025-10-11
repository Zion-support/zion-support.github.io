'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Search, Calendar, User, Clock, ArrowRight, Tag, Filter } from 'lucide-react'

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
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: 'ai-transformation-guide',
      title: 'The Complete Guide to AI Transformation in 2024',
      excerpt: 'Discover how businesses are leveraging AI to transform their operations, increase efficiency, and drive innovation.',
      content: 'Full content here...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI',
      tags: ['Artificial Intelligence', 'Digital Transformation', 'Business Strategy'],
      image: '/images/blog/ai-transformation.jpg',
      featured: true
    },
    {
      id: 'micro-saas-trends',
      title: 'Micro SaaS: The Future of Business Software',
      excerpt: 'Explore how micro SaaS solutions are revolutionizing the way businesses operate and scale.',
      content: 'Full content here...',
      author: 'Mike Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'SaaS',
      tags: ['Micro SaaS', 'Business Tools', 'Productivity'],
      image: '/images/blog/micro-saas.jpg',
      featured: true
    },
    {
      id: 'cybersecurity-best-practices',
      title: 'Essential Cybersecurity Best Practices for 2024',
      excerpt: 'Learn the latest cybersecurity strategies to protect your business from evolving threats.',
      content: 'Full content here...',
      author: 'Alex Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Best Practices', 'Risk Management'],
      image: '/images/blog/cybersecurity.jpg',
      featured: false
    },
    {
      id: 'cloud-migration-strategies',
      title: 'Cloud Migration Strategies: A Step-by-Step Guide',
      excerpt: 'Navigate your cloud migration journey with proven strategies and best practices.',
      content: 'Full content here...',
      author: 'Jennifer Lee',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'Cloud',
      tags: ['Cloud Computing', 'Migration', 'Infrastructure'],
      image: '/images/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: 'data-analytics-trends',
      title: 'Data Analytics Trends Shaping 2024',
      excerpt: 'Explore the latest trends in data analytics and how they impact business decision-making.',
      content: 'Full content here...',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Analytics',
      tags: ['Data Analytics', 'Business Intelligence', 'Trends'],
      image: '/images/blog/data-analytics.jpg',
      featured: false
    },
    {
      id: 'ai-ethics-business',
      title: 'AI Ethics in Business: A Practical Framework',
      excerpt: 'Understand the ethical considerations of AI implementation in business environments.',
      content: 'Full content here...',
      author: 'Dr. Maria Garcia',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'AI',
      tags: ['AI Ethics', 'Responsible AI', 'Business Ethics'],
      image: '/images/blog/ai-ethics.jpg',
      featured: false
    }
  ];

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in AI, IT, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Tag className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                    <div className="text-white font-semibold">{post.title}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Read Article
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
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