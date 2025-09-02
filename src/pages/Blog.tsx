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
=======
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag, Share2, BookmarkPlus } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');

  const categories = [
    'All',
    'Artificial Intelligence',
    'Quantum Computing',
    'Cloud Solutions',
    'Digital Transformation',
    'Cybersecurity',
    'Industry Insights',
    'Technology Trends',
    'Case Studies'
  ];

  const tags = [
    'AI', 'Machine Learning', 'Quantum', 'Cloud', 'Security', 'Innovation',
    'Automation', 'Data Science', 'IoT', 'Blockchain', 'Edge Computing'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Quantum Computing in Enterprise Applications',
      excerpt: 'Exploring how quantum computing is revolutionizing enterprise solutions and what businesses need to know to prepare for the quantum advantage.',
      category: 'Quantum Computing',
      tags: ['Quantum', 'Innovation', 'Enterprise'],
      author: 'Dr. Sarah Chen',
      authorRole: 'Quantum Research Director',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      image: '/images/blog/quantum-computing.jpg',
      featured: true,
      content: `Quantum computing represents one of the most significant technological breakthroughs of our time...`
    },
    {
      id: 2,
      title: 'AI-Driven Digital Transformation: A Comprehensive Guide',
      excerpt: 'Learn how artificial intelligence is accelerating digital transformation initiatives and best practices for implementation.',
      category: 'Digital Transformation',
      tags: ['AI', 'Digital Transformation', 'Automation'],
      author: 'Michael Rodriguez',
      authorRole: 'AI Solutions Architect',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      image: '/images/blog/ai-transformation.jpg',
      featured: true,
      content: `Digital transformation powered by AI is reshaping industries...`
    },
    {
      id: 3,
      title: 'Securing the Cloud: Advanced Cybersecurity Strategies',
      excerpt: 'Essential cybersecurity measures for protecting cloud infrastructure and data in an increasingly connected world.',
      category: 'Cybersecurity',
      tags: ['Security', 'Cloud', 'Data Protection'],
      author: 'Jennifer Park',
      authorRole: 'Security Consultant',
      publishDate: '2024-01-10',
      readTime: '6 min read',
      image: '/images/blog/cloud-security.jpg',
      featured: false,
      content: `As organizations migrate to cloud platforms, security becomes paramount...`
    },
    {
      id: 4,
      title: 'Machine Learning in Healthcare: Transforming Patient Care',
      excerpt: 'How machine learning algorithms are improving diagnosis accuracy and personalizing treatment plans in healthcare.',
      category: 'Artificial Intelligence',
      tags: ['AI', 'Machine Learning', 'Healthcare'],
      author: 'Dr. David Kim',
      authorRole: 'Healthcare AI Specialist',
      publishDate: '2024-01-08',
      readTime: '10 min read',
      image: '/images/blog/ai-healthcare.jpg',
      featured: false,
      content: `Machine learning is revolutionizing healthcare delivery...`
    },
    {
      id: 5,
      title: 'Edge Computing: Bringing Intelligence Closer to Data',
      excerpt: 'Understanding the benefits of edge computing and how it complements cloud infrastructure for real-time applications.',
      category: 'Technology Trends',
      tags: ['Edge Computing', 'IoT', 'Real-time'],
      author: 'Alex Thompson',
      authorRole: 'Edge Solutions Engineer',
      publishDate: '2024-01-05',
      readTime: '7 min read',
      image: '/images/blog/edge-computing.jpg',
      featured: false,
      content: `Edge computing is bringing processing power closer to data sources...`
    },
    {
      id: 6,
      title: 'Sustainable Technology: Green IT Initiatives for Modern Businesses',
      excerpt: 'Implementing environmentally conscious technology solutions while maintaining performance and efficiency.',
      category: 'Industry Insights',
      tags: ['Sustainability', 'Green IT', 'Innovation'],
      author: 'Emma Wilson',
      authorRole: 'Sustainability Consultant',
      publishDate: '2024-01-03',
      readTime: '9 min read',
      image: '/images/blog/green-tech.jpg',
      featured: false,
      content: `Sustainable technology practices are becoming essential...`
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
    
    return matchesSearch && matchesCategory && matchesTag;
  });

<<<<<<< HEAD
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
=======
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, quantum computing, cloud solutions, and technology trends from Zion Tech Group's expert team."
        keywords="technology blog, AI insights, quantum computing, cloud solutions, digital transformation, cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Insights & Innovation
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Explore the latest trends in technology, AI, quantum computing, and digital transformation.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-300 mr-2">Tags:</span>
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                      selectedTag === tag
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
            </div>
          </motion.div>

<<<<<<< HEAD
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
=======
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-6xl opacity-50">📰</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mr-3"></div>
                          <div>
                            <div className="text-sm font-semibold text-white">{post.author}</div>
                            <div className="text-xs text-gray-400">{post.authorRole}</div>
                          </div>
                        </div>
                        <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Regular Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-4xl opacity-50">📊</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-400">{post.author}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-white/10 rounded transition-colors">
                          <BookmarkPlus className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                        </button>
                        <button className="p-1 hover:bg-white/10 rounded transition-colors">
                          <Share2 className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search criteria or browse all articles.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedTag('');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}