import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Zap,
  Brain,
  Shield,
  Rocket,
  Cpu,
  Database,
  Lock,
  Cloud,
  Code,
  Server,
  Cpu,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  TrendingUp,
  CheckCircle,
  Star,
  Target,
  Handshake,
  Lightbulb,
  Globe,
  Users,
  Award,
  MessageSquare,
  FileText,
  BarChart3
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 25 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 18 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 15 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, count: 12 },
    { id: 'data-science', name: 'Data Science', icon: BarChart3, count: 20 },
    { id: 'blockchain', name: 'Blockchain', icon: Chip, count: 10 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Wifi, count: 8 },
    { id: 'industry-insights', name: 'Industry Insights', icon: TrendingUp, count: 15 },
    { id: 'company-news', name: 'Company News', icon: MessageSquare, count: 12 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI: Transformative Trends in 2025',
      excerpt: 'Explore the cutting-edge AI technologies that will reshape industries and create new opportunities for businesses worldwide.',
      content: 'Artificial Intelligence continues to evolve at an unprecedented pace, bringing transformative changes across all sectors. In 2025, we\'re seeing the emergence of more sophisticated AI models, increased automation, and new applications that were once considered science fiction...',
      author: 'Dr. Sarah Chen',
      authorAvatar: '/images/team/sarah-chen.jpg',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'ai-ml',
      tags: ['AI', 'Machine Learning', 'Future Tech', 'Innovation'],
      featured: true,
      views: 15420,
      likes: 892,
      comments: 156,
      image: '/images/blog/ai-future-2025.jpg'
    },
    {
      id: 2,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How artificial intelligence is both creating new security challenges and providing innovative solutions to protect digital assets.',
      content: 'As AI becomes more sophisticated, cybercriminals are leveraging these technologies to create more sophisticated attacks. However, AI is also proving to be a powerful ally in cybersecurity, helping organizations detect and respond to threats faster than ever before...',
      author: 'David Kim',
      authorAvatar: '/images/team/david-kim.jpg',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Digital Protection'],
      featured: true,
      views: 12850,
      likes: 745,
      comments: 98,
      image: '/images/blog/ai-cybersecurity.jpg'
    },
    {
      id: 3,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'A realistic look at where quantum computing stands today and what businesses can expect in the coming years.',
      content: 'Quantum computing has been the subject of much hype and speculation. While the technology is still in its early stages, significant progress has been made in recent years. This article explores the current state of quantum computing and its practical applications...',
      author: 'Dr. Emily Watson',
      authorAvatar: '/images/team/emily-watson.jpg',
      publishDate: '2025-01-10',
      readTime: '10 min read',
      category: 'quantum-computing',
      tags: ['Quantum Computing', 'Emerging Tech', 'Research', 'Future Computing'],
      featured: false,
      views: 9870,
      likes: 623,
      comments: 87,
      image: '/images/blog/quantum-computing.jpg'
    },
    {
      id: 4,
      title: 'Cloud-Native Architecture: Best Practices for 2025',
      excerpt: 'Essential strategies and patterns for building scalable, resilient cloud applications in the modern era.',
      content: 'Cloud-native architecture has become the standard for modern applications. This comprehensive guide covers the best practices, design patterns, and tools that developers and architects need to know in 2025...',
      author: 'Priya Patel',
      authorAvatar: '/images/team/priya-patel.jpg',
      publishDate: '2025-01-08',
      readTime: '12 min read',
      category: 'cloud-devops',
      tags: ['Cloud Computing', 'DevOps', 'Architecture', 'Best Practices'],
      featured: false,
      views: 8760,
      likes: 534,
      comments: 76,
      image: '/images/blog/cloud-native.jpg'
    },
    {
      id: 5,
      title: 'Data Privacy in the AI Era: Balancing Innovation and Protection',
      excerpt: 'How organizations can leverage AI while maintaining strict data privacy standards and building customer trust.',
      content: 'As AI systems become more data-hungry, organizations face the challenge of balancing innovation with privacy protection. This article explores strategies for maintaining data privacy while harnessing the power of AI...',
      author: 'Alex Thompson',
      authorAvatar: '/images/team/alex-thompson.jpg',
      publishDate: '2025-01-05',
      readTime: '7 min read',
      category: 'data-science',
      tags: ['Data Privacy', 'AI Ethics', 'Compliance', 'Customer Trust'],
      featured: false,
      views: 7650,
      likes: 456,
      comments: 65,
      image: '/images/blog/data-privacy-ai.jpg'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Bringing AI Closer to Users',
      excerpt: 'How edge computing is revolutionizing AI deployment and enabling real-time applications across industries.',
      content: 'Edge computing is transforming how AI applications are deployed and used. By bringing computation closer to data sources, edge computing enables real-time AI applications that were previously impossible...',
      author: 'Marcus Rodriguez',
      authorAvatar: '/images/team/marcus-rodriguez.jpg',
      publishDate: '2025-01-03',
      readTime: '9 min read',
      category: 'iot',
      tags: ['Edge Computing', 'IoT', 'Real-time AI', '5G'],
      featured: false,
      views: 6540,
      likes: 398,
      comments: 54,
      image: '/images/blog/edge-computing.jpg'
    },
    {
      id: 7,
      title: 'Blockchain Beyond Cryptocurrency: Enterprise Applications',
      excerpt: 'Exploring the real-world business applications of blockchain technology beyond digital currencies.',
      content: 'While blockchain is often associated with cryptocurrency, its applications extend far beyond digital money. This article explores how enterprises are using blockchain for supply chain management, identity verification, and more...',
      author: 'Dr. Sarah Chen',
      authorAvatar: '/images/team/sarah-chen.jpg',
      publishDate: '2024-12-30',
      readTime: '11 min read',
      category: 'blockchain',
      tags: ['Blockchain', 'Enterprise', 'Supply Chain', 'Digital Identity'],
      featured: false,
      views: 5430,
      likes: 345,
      comments: 43,
      image: '/images/blog/blockchain-enterprise.jpg'
    },
    {
      id: 8,
      title: 'Digital Transformation: Lessons from Industry Leaders',
      excerpt: 'Key insights and strategies from companies that have successfully navigated digital transformation.',
      content: 'Digital transformation is not just about technology—it\'s about fundamentally changing how organizations operate and deliver value. This article shares lessons learned from companies that have successfully transformed...',
      author: 'Kleber Santos',
      authorAvatar: '/images/team/kleber-santos.jpg',
      publishDate: '2024-12-28',
      readTime: '8 min read',
      category: 'industry-insights',
      tags: ['Digital Transformation', 'Strategy', 'Leadership', 'Innovation'],
      featured: false,
      views: 4320,
      likes: 287,
      comments: 38,
      image: '/images/blog/digital-transformation.jpg'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const featuredPosts = blogPosts.filter(post => post.featured);

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
    return category ? category.icon : BookOpen;
  };

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Blog</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Insights, analysis, and thought leadership on the latest trends in AI, 
              cybersecurity, cloud computing, and emerging technologies.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-blue-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4 inline mr-2" />
                  {category.name}
                  {category.count > 0 && (
                    <span className="ml-2 px-2 py-1 bg-zion-purple/20 rounded-full text-xs">
                      {category.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Articles
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our most popular and insightful content on cutting-edge technology trends.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-blue-dark border border-zion-cyan/30 rounded-xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-zion-cyan/25"
                >
                  <div className="h-48 bg-gradient-to-r from-zion-cyan to-zion-purple flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full font-medium">
                        Featured
                      </span>
                      <span className="text-zion-slate-light text-sm">
                        {(() => {
                          const IconComponent = getCategoryIcon(post.category);
                          return IconComponent ? <IconComponent className="w-4 h-4 inline mr-1" /> : null;
                        })()}
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-zion-cyan transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.publishDate)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-zion-cyan text-sm font-medium">{post.author}</span>
                      </div>
                      
                      <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                        Read More <ArrowRight className="w-4 h-4 inline ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Stay updated with our latest insights and analysis.
            </p>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-40 bg-gradient-to-r from-zion-purple to-zion-blue flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-zion-slate-light text-sm">
                      {(() => {
                        const IconComponent = getCategoryIcon(post.category);
                        return IconComponent ? <IconComponent className="w-4 h-4 inline mr-1" /> : null;
                      })()}
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 hover:text-zion-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(post.publishDate)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {post.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                        <User className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-zion-cyan text-xs font-medium">{post.author}</span>
                    </div>
                    
                    <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                      Read More <ArrowRight className="w-3 h-3 inline ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 text-zion-slate-light hover:text-zion-cyan disabled:text-zion-slate-light/50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 text-zion-slate-light hover:text-zion-cyan disabled:text-zion-slate-light/50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-zion-slate-light mb-4">
                Try adjusting your search or category filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Get the latest insights, trends, and analysis delivered to your inbox. 
              Join thousands of technology professionals staying ahead of the curve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-cyan/25">
                Subscribe
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
            </div>
            
            <p className="text-zion-slate-light text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}