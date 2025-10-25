'use client';
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, TrendingUp, Star, Eye, MessageCircle, BookOpen, Brain, Cloud, Shield, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Posts', count: 24 },
    { name: 'ai', label: 'Artificial Intelligence', count: 8 },
    { name: 'cloud', label: 'Cloud Computing', count: 6 },
    { name: 'security', label: 'Cybersecurity', count: 4 },
    { name: 'business', label: 'Business', count: 3 },
    { name: 'technology', label: 'Technology', count: 3 }
  ];

  const featuredPost = {
    id: 1,
    title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
    excerpt: 'Explore the latest trends in enterprise AI adoption, from quantum computing integration to autonomous systems, and discover how businesses are leveraging AI for competitive advantage.',
    author: 'Dr. Sarah Chen',
    authorRole: 'Head of AI Research',
    authorImage: '/images/authors/sarah-chen.webp',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'ai',
    image: '/images/blog/ai-enterprise-future.webp',
    views: 12500,
    likes: 340,
    comments: 28,
    tags: ['AI', 'Enterprise', 'Future Tech', 'Machine Learning']
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration, including planning, execution, and post-migration optimization.',
      author: 'Michael Rodriguez',
      authorRole: 'Cloud Solutions Architect',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'cloud',
      image: '/images/blog/cloud-migration-guide.webp',
      views: 8900,
      likes: 245,
      comments: 15,
      tags: ['Cloud', 'Migration', 'Best Practices']
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Discover how AI is both a threat and a solution in cybersecurity, and learn best practices for protecting your organization.',
      author: 'Jennifer Kim',
      authorRole: 'Cybersecurity Expert',
      publishDate: '2024-01-10',
      readTime: '7 min read',
      category: 'security',
      image: '/images/blog/ai-cybersecurity.webp',
      views: 11200,
      likes: 298,
      comments: 22,
      tags: ['Cybersecurity', 'AI', 'Digital Security']
    },
    {
      id: 4,
      title: 'Building Scalable AI Applications: Architecture Patterns',
      excerpt: 'Explore proven architecture patterns for building scalable AI applications that can handle enterprise-level workloads.',
      author: 'David Park',
      authorRole: 'Senior AI Engineer',
      publishDate: '2024-01-08',
      readTime: '9 min read',
      category: 'ai',
      image: '/images/blog/scalable-ai-architecture.webp',
      views: 7600,
      likes: 189,
      comments: 12,
      tags: ['AI Architecture', 'Scalability', 'Enterprise']
    },
    {
      id: 5,
      title: 'The Business Impact of Digital Transformation',
      excerpt: 'Understand how digital transformation is reshaping industries and learn strategies for successful implementation.',
      author: 'Lisa Thompson',
      authorRole: 'Digital Transformation Consultant',
      publishDate: '2024-01-05',
      readTime: '5 min read',
      category: 'business',
      image: '/images/blog/digital-transformation.webp',
      views: 6800,
      likes: 156,
      comments: 8,
      tags: ['Digital Transformation', 'Business Strategy']
    },
    {
      id: 6,
      title: 'Edge Computing: Bringing AI Closer to the Data',
      excerpt: 'Learn about edge computing technologies and how they enable real-time AI processing at the network edge.',
      author: 'Alex Chen',
      authorRole: 'Edge Computing Specialist',
      publishDate: '2024-01-03',
      readTime: '6 min read',
      category: 'technology',
      image: '/images/blog/edge-computing-ai.webp',
      views: 5400,
      likes: 134,
      comments: 6,
      tags: ['Edge Computing', 'AI', 'Real-time Processing']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'cloud': return Cloud;
      case 'security': return Shield;
      case 'business': return TrendingUp;
      case 'technology': return Code;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'text-purple-400 bg-purple-500/10';
      case 'cloud': return 'text-blue-400 bg-blue-500/10';
      case 'security': return 'text-red-400 bg-red-500/10';
      case 'business': return 'text-green-400 bg-green-500/10';
      case 'technology': return 'text-cyan-400 bg-cyan-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation from our expert team."
        keywords={["blog","AI insights","cloud computing","cybersecurity","digital transformation","technology trends"]}
        canonicalUrl="https://ziontechgroup.com/blog"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation from our expert team.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                        selectedCategory === category.name
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category.label}
                      <span className="text-xs opacity-75">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Post</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                      {categories.find(c => c.name === featuredPost.category)?.label}
                    </div>
                    <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <img
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="text-white font-medium">{featuredPost.author}</div>
                        <div className="text-gray-400 text-sm">{featuredPost.authorRole}</div>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {new Date(featuredPost.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.comments}</span>
                    </div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:scale-105 transition-all duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-8 h-8 ${getCategoryColor(post.category).split(' ')[1]} rounded-lg flex items-center justify-center`}>
                          <CategoryIcon className={`w-4 h-4 ${getCategoryColor(post.category).split(' ')[0]}`} />
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                          {categories.find(c => c.name === post.category)?.label}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {post.likes}
                          </div>
                        </div>
                        <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest insights on AI, cloud computing, and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;