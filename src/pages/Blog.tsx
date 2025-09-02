import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Code,
  Cloud,
  Shield,
  Brain,
  Globe,
  Zap
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'innovation', name: 'Innovation', icon: Lightbulb },
    { id: 'business', name: 'Business & Strategy', icon: TrendingUp }
  ];

  const tags = [
    { id: 'all', name: 'All Tags' },
    { id: 'artificial-intelligence', name: 'Artificial Intelligence' },
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'cloud-computing', name: 'Cloud Computing' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'digital-transformation', name: 'Digital Transformation' },
    { id: 'automation', name: 'Automation' },
    { id: 'data-analytics', name: 'Data Analytics' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'iot', name: 'Internet of Things' }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief AI Officer',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'ai-ml',
      tags: ['artificial-intelligence', 'machine-learning', 'enterprise'],
      featured: true,
      image: '/blog/ai-enterprise-2024.jpg',
      views: 15420,
      likes: 892
    },
    {
      id: 2,
      title: 'Building Secure Cloud Infrastructure: Best Practices for 2024',
      excerpt: 'Learn the essential security practices for building and maintaining secure cloud infrastructure in today\'s threat landscape.',
      author: 'Michael Rodriguez',
      authorRole: 'Head of Cloud Security',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      category: 'cloud',
      tags: ['cloud-computing', 'cybersecurity', 'infrastructure'],
      featured: true,
      image: '/blog/cloud-security-2024.jpg',
      views: 12850,
      likes: 756
    },
    {
      id: 3,
      title: 'Digital Transformation Success Stories: Lessons from Industry Leaders',
      excerpt: 'Explore real-world examples of successful digital transformation initiatives and the key factors that drove their success.',
      author: 'Jennifer Kim',
      authorRole: 'Digital Strategy Director',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'business',
      tags: ['digital-transformation', 'strategy', 'leadership'],
      featured: true,
      image: '/blog/digital-transformation-success.jpg',
      views: 11230,
      likes: 634
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Machine Learning Model Deployment: From Development to Production',
      excerpt: 'A comprehensive guide to deploying machine learning models in production environments with best practices and common pitfalls.',
      author: 'Alex Thompson',
      authorRole: 'ML Engineer',
      publishDate: '2024-01-08',
      readTime: '15 min read',
      category: 'ai-ml',
      tags: ['machine-learning', 'deployment', 'production'],
      featured: false,
      image: '/blog/ml-deployment.jpg',
      views: 8950,
      likes: 445
    },
    {
      id: 5,
      title: 'Zero Trust Security Architecture: Implementing Modern Security Models',
      excerpt: 'Understanding and implementing zero trust security architecture for enhanced enterprise security and compliance.',
      author: 'David Park',
      authorRole: 'Security Architect',
      publishDate: '2024-01-05',
      readTime: '14 min read',
      category: 'security',
      tags: ['cybersecurity', 'zero-trust', 'architecture'],
      featured: false,
      image: '/blog/zero-trust-security.jpg',
      views: 7230,
      likes: 389
    },
    {
      id: 6,
      title: 'Cloud-Native Application Development: Building for Scale',
      excerpt: 'Learn how to design and develop cloud-native applications that can scale efficiently and handle modern workloads.',
      author: 'Rachel Green',
      authorRole: 'Senior Developer',
      publishDate: '2024-01-03',
      readTime: '11 min read',
      category: 'development',
      tags: ['cloud-computing', 'development', 'scalability'],
      featured: false,
      image: '/blog/cloud-native-development.jpg',
      views: 6540,
      likes: 312
    },
    {
      id: 7,
      title: 'Data Privacy in the Age of AI: Balancing Innovation and Protection',
      excerpt: 'Exploring the critical balance between AI innovation and data privacy, with practical approaches to ethical AI development.',
      author: 'Dr. Lisa Wang',
      authorRole: 'Privacy & Ethics Lead',
      publishDate: '2024-01-01',
      readTime: '9 min read',
      category: 'ai-ml',
      tags: ['artificial-intelligence', 'privacy', 'ethics'],
      featured: false,
      image: '/blog/ai-privacy-ethics.jpg',
      views: 5890,
      likes: 278
    },
    {
      id: 8,
      title: 'Automation in Manufacturing: Industry 4.0 Implementation Guide',
      excerpt: 'A practical guide to implementing Industry 4.0 automation solutions in manufacturing environments.',
      author: 'Carlos Mendez',
      authorRole: 'Industrial Automation Specialist',
      publishDate: '2023-12-28',
      readTime: '13 min read',
      category: 'innovation',
      tags: ['automation', 'manufacturing', 'industry-4-0'],
      featured: false,
      image: '/blog/manufacturing-automation.jpg',
      views: 5120,
      likes: 245
    },
    {
      id: 9,
      title: 'Blockchain in Supply Chain: Transparency and Traceability Solutions',
      excerpt: 'How blockchain technology is revolutionizing supply chain management with enhanced transparency and traceability.',
      author: 'Emma Wilson',
      authorRole: 'Blockchain Solutions Architect',
      publishDate: '2023-12-25',
      readTime: '10 min read',
      category: 'innovation',
      tags: ['blockchain', 'supply-chain', 'transparency'],
      featured: false,
      image: '/blog/blockchain-supply-chain.jpg',
      views: 4780,
      likes: 223
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.icon || BookOpen;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.name || 'Uncategorized';
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zion-cyan mb-6">
              Insights & Innovation
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Explore the latest insights, trends, and thought leadership in AI, technology, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search articles, authors, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-zion-slate-dark border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            <div className="lg:w-64">
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              >
                {tags.map((tag) => (
                  <option key={tag.id} value={tag.id}>
                    {tag.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-zion-slate-light">
              Our most popular and insightful content
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-xl overflow-hidden border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
              >
                <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-zion-cyan" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                      {getCategoryName(post.category)}
                    </span>
                    <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-zion-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.publishDate)}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-zion-slate-light">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-zion-slate-dark text-zion-slate-light text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-zion-cyan hover:text-zion-cyan/80 text-sm font-medium flex items-center transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-zion-slate-light">
              Stay updated with our newest insights and analysis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark rounded-xl overflow-hidden border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
              >
                <div className="h-40 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-zion-cyan" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                      {getCategoryName(post.category)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 hover:text-zion-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-xs text-zion-slate-light">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-xs text-zion-slate-light">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 1).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-zion-slate-darker text-zion-slate-light text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-zion-cyan hover:text-zion-cyan/80 text-xs font-medium flex items-center transition-colors">
                      Read
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <p className="text-xl text-zion-slate-light mb-2">
                No articles found
              </p>
              <p className="text-zion-slate-light">
                Try adjusting your search criteria or browse all categories.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get the latest insights, trends, and updates delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-zion-slate-dark border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              />
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-zion-slate-light">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Popular Topics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our most-read content categories and trending topics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.filter(cat => cat.id !== 'all').map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-xl p-6 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-zion-cyan mb-3 text-center">{category.name}</h3>
                <div className="text-center">
                  <span className="text-zion-slate-light text-sm">
                    {allPosts.filter(post => post.category === category.id).length} articles
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}