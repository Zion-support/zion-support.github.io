
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, Tag, ArrowRight, Filter, TrendingUp, Lightbulb, Target, Award, Eye, MessageCircle, Type, BarChart3, Settings, Rocket, Heart, Download, Share2, BookOpen, Brain, Shield, Database, Globe, Zap, Code, Users as UsersIcon, Star, Bookmark, ExternalLink } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 156 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 67 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 34 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 28 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 18 },
    { id: 'integration', name: 'Integrations', icon: Globe, count: 15 },
    { id: 'tutorials', name: 'Tutorials & Guides', icon: Code, count: 22 },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp, count: 12 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI-Powered Business Automation in 2024',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and what trends to expect in the coming year. From intelligent workflow automation to predictive analytics, learn how companies are leveraging AI to gain competitive advantages.',
      category: 'ai-ml',
      author: 'Dr. Sarah Chen',
      authorAvatar: '/images/authors/sarah-chen.jpg',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      views: 12450,
      likes: 892,
      comments: 156,
      tags: ['AI', 'Automation', 'Business', '2024 Trends'],
      featured: true,
      image: '/images/blog/ai-automation-2024.jpg',
      icon: Zap
    },
    {
      id: 2,
      title: 'Building Secure AI Applications: Best Practices for Developers',
      excerpt: 'Security is paramount when developing AI applications. This comprehensive guide covers essential security practices, common vulnerabilities, and proven strategies to protect your AI systems from cyber threats.',
      category: 'security',
      author: 'Alex Thompson',
      authorAvatar: '/images/authors/alex-thompson.jpg',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      views: 9876,
      likes: 654,
      comments: 89,
      tags: ['Security', 'AI', 'Best Practices', 'Development'],
      featured: true,
      image: '/images/blog/ai-security-best-practices.jpg',
      icon: Shield
    },
    {
      id: 3,
      title: 'Natural Language Processing: From Theory to Real-World Applications',
      excerpt: 'Explore the evolution of NLP technology and discover practical applications that are transforming industries. Learn about the latest breakthroughs and how to implement NLP solutions in your projects.',
      category: 'ai-ml',
      author: 'Dr. Elena Petrova',
      authorAvatar: '/images/authors/elena-petrova.jpg',
      publishDate: '2024-01-10',
      readTime: '15 min read',
      views: 15678,
      likes: 1123,
      comments: 234,
      tags: ['NLP', 'Machine Learning', 'AI Applications', 'Technology'],
      featured: false,
      image: '/images/blog/nlp-theory-applications.jpg',
      icon: Type
    },
    {
      id: 4,
      title: 'Data Analytics in the Age of AI: Transforming Business Intelligence',
      excerpt: 'How AI is revolutionizing data analytics and business intelligence. Discover new approaches to data processing, visualization, and decision-making that leverage the power of artificial intelligence.',
      category: 'data',
      author: 'Maria Garcia',
      authorAvatar: '/images/authors/maria-garcia.jpg',
      publishDate: '2024-01-08',
      readTime: '10 min read',
      views: 8765,
      likes: 567,
      comments: 123,
      tags: ['Data Analytics', 'Business Intelligence', 'AI', 'Data Science'],
      featured: false,
      image: '/images/blog/data-analytics-ai.jpg',
      icon: BarChart3
    },
    {
      id: 5,
      title: 'The Rise of Autonomous Business Operations: A Complete Guide',
      excerpt: 'Autonomous business operations are no longer science fiction. Learn how companies are implementing self-managing systems that optimize processes, reduce costs, and improve efficiency.',
      category: 'automation',
      author: 'David Kim',
      authorAvatar: '/images/authors/david-kim.jpg',
      publishDate: '2024-01-05',
      readTime: '14 min read',
      views: 11234,
      likes: 789,
      comments: 167,
      tags: ['Autonomous Operations', 'Automation', 'Business', 'AI'],
      featured: false,
      image: '/images/blog/autonomous-business-operations.jpg',
      icon: Rocket
    },
    {
      id: 6,
      title: 'API Integration Strategies for Modern AI Applications',
      excerpt: 'Master the art of integrating external APIs and services with your AI applications. Learn best practices, common pitfalls, and advanced techniques for seamless integration.',
      category: 'integration',
      author: 'Sarah Johnson',
      authorAvatar: '/images/authors/sarah-johnson.jpg',
      publishDate: '2024-01-03',
      readTime: '11 min read',
      views: 7654,
      likes: 456,
      comments: 98,
      tags: ['API Integration', 'AI', 'Web Services', 'Development'],
      featured: false,
      image: '/images/blog/api-integration-ai.jpg',
      icon: Globe
    },
    {
      id: 7,
      title: 'Computer Vision Applications: Transforming Industries with AI',
      excerpt: 'From healthcare to manufacturing, computer vision is revolutionizing how industries operate. Explore real-world applications and learn how to implement computer vision solutions.',
      category: 'ai-ml',
      author: 'Michael Rodriguez',
      authorAvatar: '/images/authors/michael-rodriguez.jpg',
      publishDate: '2024-01-01',
      readTime: '13 min read',
      views: 13456,
      likes: 987,
      comments: 189,
      tags: ['Computer Vision', 'AI', 'Industry Applications', 'Technology'],
      featured: false,
      image: '/images/blog/computer-vision-applications.jpg',
      icon: Eye
    },
    {
      id: 8,
      title: 'Machine Learning Model Deployment: From Development to Production',
      excerpt: 'Successfully deploying machine learning models requires careful planning and execution. This guide covers everything from model optimization to production deployment strategies.',
      category: 'tutorials',
      author: 'Dr. James Wilson',
      authorAvatar: '/images/authors/james-wilson.jpg',
      publishDate: '2023-12-28',
      readTime: '16 min read',
      views: 9876,
      likes: 654,
      comments: 145,
      tags: ['Machine Learning', 'Deployment', 'Production', 'MLOps'],
      featured: false,
      image: '/images/blog/ml-model-deployment.jpg',
      icon: Code
    },
    {
      id: 9,
      title: 'Cybersecurity Trends 2024: Protecting AI Systems in an Evolving Threat Landscape',
      excerpt: 'As AI systems become more prevalent, they also become targets for cyber attacks. Stay ahead of emerging threats with this comprehensive analysis of cybersecurity trends.',
      category: 'security',
      author: 'Lisa Chen',
      authorAvatar: '/images/authors/lisa-chen.jpg',
      publishDate: '2023-12-25',
      readTime: '9 min read',
      views: 14567,
      likes: 1123,
      comments: 234,
      tags: ['Cybersecurity', 'AI Security', 'Threat Landscape', '2024 Trends'],
      featured: false,
      image: '/images/blog/cybersecurity-trends-2024.jpg',
      icon: Shield
    },
    {
      id: 10,
      title: 'The Impact of AI on Healthcare: Current Applications and Future Possibilities',
      excerpt: 'Explore how artificial intelligence is transforming healthcare delivery, from diagnostic tools to personalized treatment plans. Discover the potential and challenges of AI in medicine.',
      category: 'industry',
      author: 'Dr. Robert Martinez',
      authorAvatar: '/images/authors/robert-martinez.jpg',
      publishDate: '2023-12-22',
      readTime: '12 min read',
      views: 18765,
      likes: 1345,
      comments: 289,
      tags: ['Healthcare', 'AI', 'Medicine', 'Industry Impact'],
      featured: false,
      image: '/images/blog/ai-healthcare-impact.jpg',
      icon: TrendingUp
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = blogPosts.filter(post => 
    (selectedCategory === 'all' || post.category === selectedCategory) &&
    (searchQuery === '' || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || 
     post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const stats = [
    { label: 'Total Articles', value: '156+', icon: BookOpen },
    { label: 'Monthly Readers', value: '50K+', icon: UsersIcon },
    { label: 'Expert Authors', value: '25+', icon: User },
    { label: 'Categories', value: '8', icon: Tag }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI & Technology <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with expert insights, tutorials, and analysis on the latest developments in artificial intelligence, 
            cybersecurity, and emerging technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              Subscribe to Newsletter
            </button>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Write for Us
            </Link>
          </div>
        </div>

        {/* Blog Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="text-xs opacity-75">({category.count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <div key={post.id} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-base mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{post.author}</div>
                          <div className="text-gray-400 text-xs">{formatDate(post.publishDate)}</div>
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Blog Posts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              Latest Articles
            </h2>
            <div className="text-gray-300">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <div key={post.id} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {post.featured && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-400 text-sm">{post.author}</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-400 text-xs">
                        {formatDate(post.publishDate)}
                      </div>
                      <div className="flex items-center gap-3 text-gray-400 text-xs">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{post.likes.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with AI & Tech Insights
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest articles, tutorials, and industry insights delivered directly to your inbox. 
              Join thousands of professionals staying ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

