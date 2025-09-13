import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Search, 
  Filter,
  TrendingUp,
  Star,
  BookOpen,
  Download,
  Play,
  Zap,
  Brain,
  Target,
  Award,
  Calendar,
  Eye,
  Heart,
  Share2
} from 'lucide-react';

const InteractiveContentDiscoveryWidget = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('trending');

  const categories = [
    { id: 'all', name: 'All Content', icon: <Eye className="w-4 h-4" /> },
    { id: 'neural', name: 'Neural Architectures', icon: <Brain className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum AI', icon: <Zap className="w-4 h-4" /> },
    { id: 'autonomous', name: 'Autonomous Operations', icon: <Target className="w-4 h-4" /> },
    { id: 'case-studies', name: 'Case Studies', icon: <Award className="w-4 h-4" /> },
    { id: 'guides', name: 'Implementation Guides', icon: <BookOpen className="w-4 h-4" /> }
  ];

  const content = [
    {
      id: 1,
      title: 'Neural Architecture Revolution: Next-Generation AI Systems in 2025',
      description: 'Explore the revolutionary neural architectures that are transforming AI capabilities and enabling unprecedented autonomous operations.',
      type: 'blog',
      category: 'neural',
      link: '/blog/neural-architecture-revolution-next-generation-ai-systems-2025',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400',
      readTime: '15 min read',
      views: '12.5K',
      likes: '1.2K',
      featured: true,
      trending: true,
      publishDate: '2025-01-25',
      tags: ['Neural Architecture', 'AI Revolution', 'Quantum Computing']
    },
    {
      id: 2,
      title: 'Autonomous Business Operations: The Complete Transformation Guide',
      description: 'Learn how to achieve complete business autonomy with AI-driven operations that require zero human intervention.',
      type: 'blog',
      category: 'autonomous',
      link: '/blog/autonomous-business-operations-complete-transformation-guide',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=400',
      readTime: '18 min read',
      views: '8.7K',
      likes: '890',
      featured: true,
      trending: true,
      publishDate: '2025-01-23',
      tags: ['Autonomous Operations', 'Business Automation', 'AI Transformation']
    },
    {
      id: 3,
      title: '$2 Billion ROI Transformation: Quantum AI Autonomous Operations',
      description: 'How a Fortune 500 company achieved $2 billion ROI through quantum AI autonomous transformation in just 18 months.',
      type: 'case-study',
      category: 'case-studies',
      link: '/case-studies/fortune-500-company-achieves-2-billion-roi-quantum-ai-autonomous-operations',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=400',
      readTime: '12 min read',
      views: '15.2K',
      likes: '2.1K',
      featured: true,
      trending: true,
      publishDate: '2025-01-20',
      tags: ['ROI', 'Quantum AI', 'Enterprise', 'Autonomous Operations']
    },
    {
      id: 4,
      title: 'Quantum AI Implementation Guide: Step-by-Step Transformation',
      description: 'Complete guide to implementing quantum AI autonomous operations in your organization with proven strategies.',
      type: 'guide',
      category: 'guides',
      link: '/resources/quantum-ai-autonomous-operations-implementation-guide-2025',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=400',
      readTime: '25 min read',
      views: '6.3K',
      likes: '567',
      featured: false,
      trending: false,
      publishDate: '2025-01-18',
      tags: ['Implementation Guide', 'Quantum AI', 'Transformation']
    },
    {
      id: 5,
      title: 'AI-Powered Content Generation: Revolutionizing Digital Marketing',
      description: 'Discover how AI content generation is transforming digital marketing and driving unprecedented engagement.',
      type: 'blog',
      category: 'neural',
      link: '/blog/ai-powered-content-generation-revolutionizing-digital-marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400',
      readTime: '12 min read',
      views: '9.1K',
      likes: '743',
      featured: true,
      trending: false,
      publishDate: '2025-01-21',
      tags: ['Content Generation', 'AI Marketing', 'Digital Marketing']
    },
    {
      id: 6,
      title: 'Healthcare System Achieves 98% Accuracy in AI-Powered Diagnosis',
      description: 'Case study showing how advanced medical systems achieved unprecedented accuracy in AI-powered diagnosis.',
      type: 'case-study',
      category: 'case-studies',
      link: '/case-studies/healthcare-system-achieves-98-accuracy-ai-powered-diagnosis',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=400',
      readTime: '10 min read',
      views: '7.8K',
      likes: '654',
      featured: false,
      trending: true,
      publishDate: '2025-01-19',
      tags: ['Healthcare', 'AI Diagnosis', 'Neural Architecture']
    }
  ];

  const filteredContent = content.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return (b.trending ? 1 : 0) - (a.trending ? 1 : 0) || b.views.localeCompare(a.views);
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      case 'recent':
        return new Date(b.publishDate) - new Date(a.publishDate);
      case 'popular':
        return parseInt(b.views.replace('K', '000')) - parseInt(a.views.replace('K', '000'));
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Search className="w-4 h-4" />
            <span>Interactive Content Discovery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Explore cutting-edge AI insights, neural architectures, and proven strategies. 
            Find exactly what you need with our intelligent content discovery system.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-zion-slate-light" />
              <span className="text-zion-slate-light text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-zion-cyan"
              >
                <option value="trending">Trending</option>
                <option value="featured">Featured</option>
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {sortedContent.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layout
                className="group relative"
              >
                <Link
                  to={item.link}
                  className="block h-full bg-gradient-to-br from-zion-blue-dark/80 to-zion-slate/80 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.featured && (
                      <div className="bg-gradient-to-r from-zion-cyan to-zion-blue text-zion-blue-dark px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                    {item.trending && (
                      <div className="bg-gradient-to-r from-zion-purple to-zion-blue text-white px-3 py-1 rounded-full text-xs font-bold">
                        Trending
                      </div>
                    )}
                    <div className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.type === 'case-study' ? 'Case Study' : 
                       item.type === 'guide' ? 'Guide' : 'Blog Post'}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl mb-4 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-white/10 text-zion-slate-light px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-zion-slate-light text-xs mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                      </span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-zion-slate-light text-sm">
                      <span className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{item.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{item.likes}</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-zion-cyan group-hover:text-white transition-colors duration-300">
                      <span className="text-sm font-medium">
                        {item.type === 'case-study' ? 'Read Case Study' :
                         item.type === 'guide' ? 'Download Guide' : 'Read More'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transform transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/resources"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25"
          >
            <span>Explore All Content</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget;