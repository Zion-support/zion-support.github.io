'use client';
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, TrendingUp, Star, Eye, MessageCircle, BookOpen, Brain, Cloud, Shield, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function BlogPage() {
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
    tags: ['AI', 'Enterprise', 'Trends', '2024'],
    views: 1250,
    likes: 89
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Cloud Migration Strategies: A Complete Guide for 2024',
      excerpt: 'Learn the best practices for migrating your infrastructure to the cloud, including cost optimization, security considerations, and performance tuning.',
      author: 'Michael Rodriguez',
      authorRole: 'Head of Engineering',
      authorImage: '/images/authors/michael-rodriguez.webp',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'cloud',
      image: '/images/blog/cloud-migration-guide.webp',
      tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Remote Teams',
      excerpt: 'Essential security measures every remote team should implement to protect sensitive data and maintain compliance in a distributed work environment.',
      author: 'Emily Watson',
      authorRole: 'Security Specialist',
      authorImage: '/images/authors/emily-watson.webp',
      publishDate: '2024-01-10',
      readTime: '5 min read',
      category: 'security',
      image: '/images/blog/remote-security.webp',
      tags: ['Security', 'Remote Work', 'Compliance'],
      views: 750,
      likes: 45
    },
    {
      id: 4,
      title: 'Building Scalable Web Applications with Modern Frameworks',
      excerpt: 'Discover how to architect and build web applications that can handle millions of users using React, Node.js, and microservices architecture.',
      author: 'David Kim',
      authorRole: 'Senior Developer',
      authorImage: '/images/authors/david-kim.webp',
      publishDate: '2024-01-08',
      readTime: '7 min read',
      category: 'technology',
      image: '/images/blog/scalable-web-apps.webp',
      tags: ['Web Development', 'React', 'Node.js', 'Scalability'],
      views: 1100,
      likes: 78
    },
    {
      id: 5,
      title: 'The Business Impact of AI: ROI and Success Metrics',
      excerpt: 'Understanding how to measure the return on investment for AI implementations and the key metrics that matter for business success.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Head of AI Research',
      authorImage: '/images/authors/sarah-chen.webp',
      publishDate: '2024-01-05',
      readTime: '9 min read',
      category: 'business',
      image: '/images/blog/ai-business-impact.webp',
      tags: ['AI', 'ROI', 'Business', 'Metrics'],
      views: 890,
      likes: 56
    },
    {
      id: 6,
      title: 'Quantum Computing: The Next Frontier in Technology',
      excerpt: 'An in-depth look at quantum computing capabilities, current limitations, and potential applications in solving complex computational problems.',
      author: 'Dr. Emily Watson',
      authorRole: 'Quantum Computing Researcher',
      authorImage: '/images/authors/emily-watson.webp',
      publishDate: '2024-01-03',
      readTime: '10 min read',
      category: 'technology',
      image: '/images/blog/quantum-computing.webp',
      tags: ['Quantum Computing', 'Technology', 'Research'],
      views: 650,
      likes: 42
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOOptimizer
        title="Blog - Latest Technology Insights | Zion Tech Group"
        description="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from our expert team."
        keywords="technology blog, AI insights, cloud computing, cybersecurity, tech trends, Zion Tech Group blog"
      />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Technology <span className="text-blue-600">Insights</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest insights, trends, and best practices in AI, cloud computing, cybersecurity, and emerging technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {featuredPost.category.toUpperCase()}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.publishDate}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">{featuredPost.authorRole}</p>
                      </div>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {post.category.toUpperCase()}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.publishDate}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.authorRole}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {post.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}