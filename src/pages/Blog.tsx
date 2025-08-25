
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  ChevronDown,
  Filter,
  BookOpen,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  Cloud,
  Database,
  Network,
  Star,
  Eye,
  MessageCircle,
  Share2
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All Posts', count: 45, icon: BookOpen },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 18, icon: Brain },
    { id: 'quantum', name: 'Quantum Technology', count: 12, icon: Zap },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 8, icon: Shield },
    { id: 'infrastructure', name: 'IT Infrastructure', count: 7, icon: Cloud },
    { id: 'industry', name: 'Industry Insights', count: 10, icon: TrendingUp }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI: Autonomous Systems in 2025 and Beyond",
      excerpt: "Explore how autonomous AI systems are revolutionizing industries and what this means for the future of business automation and decision-making.",
      content: "Artificial Intelligence has evolved from simple rule-based systems to sophisticated autonomous agents that can learn, adapt, and make decisions independently. In 2025, we're witnessing a paradigm shift where AI systems don't just assist humans but operate autonomously across complex business environments...",
      author: "Dr. Sarah Chen",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      publishDate: "2025-01-15",
      readTime: "8 min read",
      category: "ai-ml",
      tags: ["AI", "Autonomous Systems", "Future Tech", "Business Automation"],
      featured: true,
      views: "12.5k",
      likes: 342,
      comments: 89,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Quantum Neural Networks: Breaking the Limits of Classical Computing",
      excerpt: "Discover how quantum neural networks are solving problems that were previously impossible for classical computers, opening new frontiers in AI research.",
      content: "Quantum computing represents one of the most significant technological breakthroughs of our time. When combined with neural network architectures, it creates a powerful new paradigm for solving complex optimization problems...",
      author: "Prof. Michael Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      publishDate: "2025-01-12",
      readTime: "12 min read",
      category: "quantum",
      tags: ["Quantum Computing", "Neural Networks", "AI Research", "Optimization"],
      featured: true,
      views: "9.8k",
      likes: 287,
      comments: 67,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "SOC2 Compliance Automation: Streamlining Security Audits",
      excerpt: "Learn how automated compliance tools are reducing audit time by 80% while improving security posture and reducing human error.",
      content: "Security compliance is a critical concern for organizations handling sensitive data. Traditional manual compliance processes are not only time-consuming but also prone to human error...",
      author: "Alex Thompson",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      publishDate: "2025-01-10",
      readTime: "10 min read",
      category: "cybersecurity",
      tags: ["SOC2", "Compliance", "Automation", "Security"],
      featured: false,
      views: "7.2k",
      likes: 156,
      comments: 34,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "5G Enterprise Solutions: Transforming Business Connectivity",
      excerpt: "Explore how 5G technology is enabling new business models and revolutionizing enterprise connectivity with ultra-low latency and massive bandwidth.",
      content: "The rollout of 5G networks represents a fundamental shift in how businesses connect and operate. With speeds up to 100 times faster than 4G and latency as low as 1 millisecond...",
      author: "Dr. Emily Watson",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      publishDate: "2025-01-08",
      readTime: "15 min read",
      category: "infrastructure",
      tags: ["5G", "Enterprise", "Connectivity", "Network Infrastructure"],
      featured: false,
      views: "6.8k",
      likes: 134,
      comments: 28,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "AI-Powered Business Intelligence: From Data to Decisions",
      excerpt: "Discover how AI is transforming business intelligence, enabling real-time insights and predictive analytics that drive better decision-making.",
      content: "Business intelligence has evolved significantly over the past decade. What once required weeks of manual data processing and analysis can now be accomplished in real-time...",
      author: "David Kim",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      publishDate: "2025-01-05",
      readTime: "9 min read",
      category: "ai-ml",
      tags: ["Business Intelligence", "AI", "Analytics", "Decision Making"],
      featured: false,
      views: "5.9k",
      likes: 98,
      comments: 23,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "The Rise of Autonomous DevOps: Self-Healing Infrastructure",
      excerpt: "Learn how autonomous DevOps platforms are reducing deployment failures by 95% and accelerating time-to-market for software products.",
      content: "DevOps has revolutionized software development and deployment, but traditional approaches still require significant human intervention. Autonomous DevOps platforms are changing this paradigm...",
      author: "Lisa Chen",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      publishDate: "2025-01-03",
      readTime: "11 min read",
      category: "infrastructure",
      tags: ["DevOps", "Automation", "Infrastructure", "Software Development"],
      featured: false,
      views: "4.7k",
      likes: 76,
      comments: 19,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return parseInt(b.views.replace('k', '000')) - parseInt(a.views.replace('k', '000'));
      case 'trending':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Insights & Innovation
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, quantum technology, cybersecurity, 
              and the latest innovations shaping the future of business and technology.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, insights, and trends..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Updates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500/30 hover:bg-gray-800/70'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800/50 border border-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-300">
                Must-read insights from our expert team
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/50">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishDate)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        {categories.find(c => c.id === post.category)?.name}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="text-white font-semibold">{post.author}</p>
                          <p className="text-gray-400 text-sm">Author</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-sm rounded-full border border-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300">
              Stay updated with our latest articles and industry analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-white text-sm font-medium">{post.author}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {post.likes}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {sortedPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-300">Try adjusting your search or category filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Never Miss an Insight
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest AI, quantum technology, and cybersecurity insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

