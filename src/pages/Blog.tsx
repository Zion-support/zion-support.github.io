import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  Bookmark,
  Share2
} from 'lucide-react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'ai', name: 'Artificial Intelligence', count: 8 },
    { id: 'technology', name: 'Technology Trends', count: 6 },
    { id: 'business', name: 'Business Insights', count: 5 },
    { id: 'innovation', name: 'Innovation', count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is transforming business operations and what to expect in the coming year.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      tags: ["AI", "Business", "Trends", "2024"],
      image: "AI-Business-Trends",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity in the Age of AI: New Threats and Solutions",
      excerpt: "Explore the evolving cybersecurity landscape and how AI is both creating and solving security challenges.",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "cybersecurity",
      tags: ["Cybersecurity", "AI", "Security", "Threats"],
      image: "AI-Cybersecurity",
      featured: false
    },
    {
      id: 3,
      title: "Digital Transformation: A Complete Guide for Enterprises",
      excerpt: "Learn the essential steps and strategies for successful digital transformation in your organization.",
      author: "Jennifer Kim",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "business",
      tags: ["Digital Transformation", "Enterprise", "Strategy", "Technology"],
      image: "Digital-Transformation",
      featured: false
    },
    {
      id: 4,
      title: "Quantum Computing: Breaking Down the Hype vs. Reality",
      excerpt: "Separate fact from fiction in the world of quantum computing and understand its real-world applications.",
      author: "Dr. Alex Thompson",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "technology",
      tags: ["Quantum Computing", "Technology", "Innovation", "Computing"],
      image: "Quantum-Computing",
      featured: false
    },
    {
      id: 5,
      title: "Building Sustainable Technology: Green IT Best Practices",
      excerpt: "Discover how organizations can implement eco-friendly technology solutions without compromising performance.",
      author: "Emma Wilson",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "innovation",
      tags: ["Green IT", "Sustainability", "Technology", "Environment"],
      image: "Green-IT",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of Edge Computing: Why It Matters for AI",
      excerpt: "Understand how edge computing is revolutionizing AI deployment and enabling real-time intelligence.",
      author: "David Park",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "technology",
      tags: ["Edge Computing", "AI", "Technology", "Real-time"],
      image: "Edge-Computing",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
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
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              Insights, trends, and expert analysis on AI, technology, and digital transformation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-blue-light/10 text-zion-slate-light hover:bg-zion-blue-light/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
              <p className="text-xl text-zion-slate-light">Our latest insights and analysis</p>
            </div>
            
            {filteredPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-zion-blue-light/10 rounded-lg border border-zion-blue-light/20 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full uppercase font-medium">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full uppercase font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-6">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  
                  <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Tag className="w-12 h-12 text-zion-cyan" />
                      </div>
                      <p className="text-zion-slate-light text-sm">Featured Content</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-xl text-zion-slate-light">Explore our collection of insights and analysis</p>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-zion-blue-light/10 rounded-lg border border-zion-blue-light/20 overflow-hidden hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full uppercase font-medium">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full uppercase font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-xs text-zion-slate-light">+{post.tags.length - 3} more</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      
                      <div className="flex items-center gap-3">
                        <button className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Bookmark className="w-4 h-4" />
                        </button>
                        <button className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-zion-slate-light">Try adjusting your search terms or browse all categories above.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Get the latest articles, insights, and technology trends delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-zion-slate-light mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
