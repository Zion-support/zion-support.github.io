'use client';
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, TrendingUp, Star, Eye, MessageCircle, BookOpen, Brain, Cloud, Shield, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
<<<<<<< HEAD
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
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'Best Practices'],
      image: '/images/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'Stay ahead of the latest cybersecurity threats and protection strategies.',
      content: 'Full article content...',
      author: 'Alex Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Trends', 'Protection'],
      image: '/images/blog/cybersecurity.jpg',
      featured: true
    },
    {
      id: '4',
      title: 'Building Scalable Web Applications',
      excerpt: 'Learn the principles and techniques for creating applications that can handle millions of users.',
      content: 'Full article content...',
      author: 'Emma Wilson',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Development',
      tags: ['Web Development', 'Scalability', 'Architecture'],
      image: '/images/blog/scalable-apps.jpg',
      featured: false
    }
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
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Cloud Security Best Practices for 2024',
      excerpt: 'Learn the essential security measures every organization should implement to protect their cloud infrastructure.',
      author: 'Michael Rodriguez',
      authorRole: 'Head of Engineering',
      authorImage: '/images/authors/michael-rodriguez.webp',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'security',
      image: '/images/blog/cloud-security.webp',
      featured: false
    },
    {
      id: 3,
      title: 'Building Scalable AI Applications',
      excerpt: 'A comprehensive guide to designing and deploying AI applications that can handle enterprise-scale workloads.',
      author: 'Dr. Emily Watson',
      authorRole: 'Head of AI Research',
      authorImage: '/images/authors/emily-watson.webp',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'ai',
      image: '/images/blog/scalable-ai.webp',
      featured: false
    },
    {
      id: 4,
      title: 'The Business Impact of Digital Transformation',
      excerpt: 'How digital transformation is reshaping industries and what it means for your business strategy.',
      author: 'Kleber Santos',
      authorRole: 'CEO & Founder',
      authorImage: '/images/authors/kleber-santos.webp',
      publishDate: '2024-01-08',
      readTime: '7 min read',
      category: 'business',
      image: '/images/blog/digital-transformation.webp',
      featured: false
    },
    {
      id: 5,
      title: 'Cybersecurity Trends to Watch in 2024',
      excerpt: 'Stay ahead of emerging threats with our analysis of the latest cybersecurity trends and recommendations.',
      author: 'Michael Rodriguez',
      authorRole: 'Head of Engineering',
      authorImage: '/images/authors/michael-rodriguez.webp',
      publishDate: '2024-01-05',
      readTime: '9 min read',
      category: 'security',
      image: '/images/blog/cybersecurity-trends.webp',
      featured: false
    },
    {
      id: 6,
      title: 'Cloud Migration Strategies for Enterprise',
      excerpt: 'A step-by-step guide to successfully migrating your enterprise applications to the cloud.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Head of AI Research',
      authorImage: '/images/authors/sarah-chen.webp',
      publishDate: '2024-01-03',
      readTime: '8 min read',
      category: 'cloud',
      image: '/images/blog/cloud-migration.webp',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOOptimizer 
        title="Blog - AI & IT Insights | Zion Tech Group"
        description="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from our expert team."
        keywords="AI blog, technology insights, cloud computing, cybersecurity, business technology, IT trends"
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Our Blog
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Insights, trends, and expert perspectives on AI, technology, and business innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
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
                      className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                        selectedCategory === category.name
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
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
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {categories.find(cat => cat.name === featuredPost.category)?.label}
                      </span>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.authorImage}
                          alt={featuredPost.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="text-white font-semibold">{featuredPost.author}</p>
                          <p className="text-gray-400 text-sm">{featuredPost.authorRole}</p>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                          {categories.find(cat => cat.name === post.category)?.label}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p className="text-white text-sm font-semibold">{post.author}</p>
                            <p className="text-gray-400 text-xs">{post.authorRole}</p>
                          </div>
                        </div>
                        <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
