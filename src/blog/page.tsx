'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
      excerpt: "Discover the latest AI trends shaping enterprise technology in 2024, from quantum computing to autonomous systems.",
      content: "Artificial Intelligence continues to revolutionize enterprise operations, with 2024 bringing unprecedented advancements in quantum computing, autonomous systems, and machine learning applications. Companies are seeing 300% ROI on AI investments...",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      category: "AI Technology",
      tags: ["AI", "Enterprise", "Machine Learning", "Quantum Computing"],
      readTime: "8 min read",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "How AI-Powered Automation is Transforming Business Operations",
      excerpt: "Learn how businesses are achieving 70% cost reduction and 95% process automation with AI solutions.",
      content: "AI-powered automation is no longer a luxury but a necessity for competitive businesses. Our latest case studies show companies achieving remarkable efficiency gains...",
      author: "Michael Rodriguez",
      date: "2024-01-10",
      category: "Automation",
      tags: ["Automation", "Business Process", "Efficiency", "ROI"],
      readTime: "6 min read",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 3,
      title: "Quantum Computing: The Next Frontier in AI Development",
      excerpt: "Explore how quantum computing is revolutionizing AI algorithms and enabling breakthrough applications.",
      content: "Quantum computing represents a paradigm shift in computational power, enabling AI algorithms to solve problems previously considered impossible...",
      author: "Dr. Emily Watson",
      date: "2024-01-05",
      category: "Quantum Computing",
      tags: ["Quantum Computing", "AI", "Technology", "Innovation"],
      readTime: "10 min read",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 4,
      title: "Building Secure AI Systems: Best Practices for Enterprise",
      excerpt: "Essential security considerations for implementing AI solutions in enterprise environments.",
      content: "Security is paramount when implementing AI systems in enterprise environments. This comprehensive guide covers best practices for data protection...",
      author: "James Thompson",
      date: "2024-01-01",
      category: "Security",
      tags: ["Security", "AI", "Enterprise", "Data Protection"],
      readTime: "7 min read",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "The ROI of AI Implementation: Real-World Case Studies",
      excerpt: "Discover how companies achieved 300% ROI with strategic AI implementation across different industries.",
      content: "Real-world case studies demonstrate the tangible benefits of AI implementation. From healthcare to finance, companies are seeing unprecedented returns...",
      author: "Lisa Park",
      date: "2023-12-28",
      category: "Case Studies",
      tags: ["ROI", "Case Studies", "AI Implementation", "Business Value"],
      readTime: "9 min read",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "Autonomous Systems: The Future of Business Intelligence",
      excerpt: "How autonomous systems are creating self-managing business processes and intelligent decision-making.",
      content: "Autonomous systems represent the pinnacle of AI development, creating self-managing processes that adapt and optimize in real-time...",
      author: "Dr. Robert Kim",
      date: "2023-12-20",
      category: "Autonomous Systems",
      tags: ["Autonomous Systems", "Business Intelligence", "AI", "Future Tech"],
      readTime: "8 min read",
      image: "/api/placeholder/600/400",
      featured: true
    }
  ];

  const categories = ['all', 'AI Technology', 'Automation', 'Quantum Computing', 'Security', 'Case Studies', 'Autonomous Systems'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <SEOOptimizer
        title="AI & Technology Blog - Zion Tech Group"
        description="Stay updated with the latest AI trends, enterprise solutions, and technology insights from Zion Tech Group's expert team."
        keywords={['AI blog', 'technology insights', 'enterprise AI', 'machine learning', 'quantum computing', 'automation']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              AI & Technology Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest AI trends, enterprise solutions, and technology insights from our expert team.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div className="sm:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          {selectedCategory === 'all' && searchTerm === '' && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 neon-text">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-6xl">📊</div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8 neon-text">
              {selectedCategory === 'all' && searchTerm === '' ? 'All Articles' : 'Search Results'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl">📊</div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;