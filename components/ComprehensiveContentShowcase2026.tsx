import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  TrendingUp, 
  Users, 
  Clock, 
  ArrowRight,
  Brain,
  Zap,
  Rocket,
  Shield,
  Cpu,
  Database,
  Network,
  Globe,
  Lock,
  Target,
  Lightbulb,
  CheckCircle,
  Eye,
  Heart,
  Share2,
  Bookmark,
  Play,
  Download,
  ExternalLink,
  Filter,
  Search,
  Grid,
  List,
  ChevronDown,
  Sparkles,
  Award,
  Crown,
  Gem,
  Flame,
  Thunder,
  Sun,
  Moon
} from 'lucide-react';

const ComprehensiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('trending');
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    { id: 'featured', name: 'Featured', icon: Star },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'latest', name: 'Latest', icon: Clock },
    { id: 'popular', name: 'Popular', icon: Users },
    { id: 'premium', name: 'Premium', icon: Crown }
  ];

  const comprehensiveContent = [
    {
      id: 'ai-consciousness-masterclass',
      title: 'AI Consciousness Masterclass 2026',
      description: 'Complete guide to achieving artificial general intelligence with consciousness and reasoning capabilities.',
      category: 'AI Masterclass',
      type: 'Course',
      price: '$999',
      originalPrice: '$2,999',
      rating: 4.9,
      reviews: 1247,
      students: 15420,
      duration: '12 hours',
      level: 'Advanced',
      instructor: 'Dr. Sarah Chen',
      tags: ['AI', 'Consciousness', 'AGI', 'Masterclass'],
      isFeatured: true,
      isTrending: true,
      isPremium: true,
      isNew: true,
      thumbnail: '/api/placeholder/400/250',
      link: '/ai-consciousness-masterclass-2026',
      badges: ['NEW', 'FEATURED', 'PREMIUM'],
      stats: {
        completionRate: '94%',
        satisfaction: '4.9/5',
        successRate: '89%'
      }
    },
    {
      id: 'quantum-ai-fusion-workshop',
      title: 'Quantum-AI Fusion Workshop 2026',
      description: 'Hands-on workshop on integrating quantum computing with artificial intelligence for breakthrough results.',
      category: 'Workshop',
      type: 'Workshop',
      price: '$1,499',
      originalPrice: '$3,999',
      rating: 4.8,
      reviews: 892,
      students: 12850,
      duration: '8 hours',
      level: 'Expert',
      instructor: 'Prof. Michael Rodriguez',
      tags: ['Quantum', 'AI', 'Fusion', 'Workshop'],
      isFeatured: true,
      isTrending: true,
      isPremium: true,
      isNew: true,
      thumbnail: '/api/placeholder/400/250',
      link: '/quantum-ai-fusion-workshop-2026',
      badges: ['NEW', 'TRENDING', 'PREMIUM'],
      stats: {
        completionRate: '91%',
        satisfaction: '4.8/5',
        successRate: '86%'
      }
    },
    {
      id: 'autonomous-business-certification',
      title: 'Autonomous Business Certification 2026',
      description: 'Professional certification program for implementing autonomous business operations and AI-driven decision making.',
      category: 'Certification',
      type: 'Certification',
      price: '$799',
      originalPrice: '$1,999',
      rating: 4.7,
      reviews: 634,
      students: 9650,
      duration: '20 hours',
      level: 'Intermediate',
      instructor: 'Alex Thompson',
      tags: ['Business', 'Automation', 'AI', 'Certification'],
      isFeatured: false,
      isTrending: true,
      isPremium: false,
      isNew: false,
      thumbnail: '/api/placeholder/400/250',
      link: '/autonomous-business-certification-2026',
      badges: ['TRENDING', 'CERTIFICATION'],
      stats: {
        completionRate: '88%',
        satisfaction: '4.7/5',
        successRate: '82%'
      }
    },
    {
      id: 'neural-interface-revolution-guide',
      title: 'Neural Interface Revolution Guide 2026',
      description: 'Comprehensive guide to brain-computer interface technology and seamless human-AI interaction.',
      category: 'Guide',
      type: 'Guide',
      price: '$599',
      originalPrice: '$1,499',
      rating: 4.9,
      reviews: 445,
      students: 11200,
      duration: '15 hours',
      level: 'Advanced',
      instructor: 'Dr. Elena Vasquez',
      tags: ['Neural', 'Interface', 'BCI', 'Guide'],
      isFeatured: true,
      isTrending: false,
      isPremium: true,
      isNew: true,
      thumbnail: '/api/placeholder/400/250',
      link: '/neural-interface-revolution-guide-2026',
      badges: ['NEW', 'FEATURED', 'PREMIUM'],
      stats: {
        completionRate: '92%',
        satisfaction: '4.9/5',
        successRate: '87%'
      }
    },
    {
      id: 'space-technology-platform-course',
      title: 'Space Technology Platform Course 2026',
      description: 'Advanced course on commercial space operations, satellite management, and space resource optimization.',
      category: 'Course',
      type: 'Course',
      price: '$1,299',
      originalPrice: '$2,999',
      rating: 4.6,
      reviews: 312,
      students: 8750,
      duration: '18 hours',
      level: 'Expert',
      instructor: 'Commander James Wilson',
      tags: ['Space', 'Technology', 'Commercial', 'Operations'],
      isFeatured: false,
      isTrending: false,
      isPremium: true,
      isNew: true,
      thumbnail: '/api/placeholder/400/250',
      link: '/space-technology-platform-course-2026',
      badges: ['NEW', 'PREMIUM'],
      stats: {
        completionRate: '85%',
        satisfaction: '4.6/5',
        successRate: '79%'
      }
    },
    {
      id: 'cybersecurity-ai-defense-program',
      title: 'AI-Powered Cybersecurity Defense Program 2026',
      description: 'Complete program on next-generation cybersecurity with AI-driven threat detection and autonomous defense.',
      category: 'Program',
      type: 'Program',
      price: '$899',
      originalPrice: '$2,499',
      rating: 4.8,
      reviews: 567,
      students: 10300,
      duration: '25 hours',
      level: 'Advanced',
      instructor: 'Security Expert Team',
      tags: ['Cybersecurity', 'AI', 'Defense', 'Program'],
      isFeatured: true,
      isTrending: true,
      isPremium: false,
      isNew: false,
      thumbnail: '/api/placeholder/400/250',
      link: '/cybersecurity-ai-defense-program-2026',
      badges: ['FEATURED', 'TRENDING'],
      stats: {
        completionRate: '89%',
        satisfaction: '4.8/5',
        successRate: '84%'
      }
    }
  ];

  const filteredContent = comprehensiveContent.filter(content => {
    switch (activeTab) {
      case 'featured':
        return content.isFeatured;
      case 'trending':
        return content.isTrending;
      case 'latest':
        return content.isNew;
      case 'popular':
        return content.students > 10000;
      case 'premium':
        return content.isPremium;
      default:
        return true;
    }
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0) || b.students - a.students;
      case 'rating':
        return b.rating - a.rating;
      case 'students':
        return b.students - a.students;
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            Comprehensive Content Showcase 2026
            <Sparkles className="w-5 h-5 ml-2" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Learning
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience 2026
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the most comprehensive collection of revolutionary technology content, courses, workshops, 
            and certifications designed to transform your expertise and career.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-400 text-sm">Revolutionary Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100K+</div>
              <div className="text-gray-400 text-sm">Successful Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {tab.name}
              </button>
            );
          })}
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
        >
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="trending" className="bg-slate-800">Trending</option>
              <option value="rating" className="bg-slate-800">Rating</option>
              <option value="students" className="bg-slate-800">Students</option>
              <option value="price" className="bg-slate-800">Price</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Content Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
          }`}
        >
          {sortedContent.map((content, index) => (
            <motion.div
              key={content.id}
              variants={itemVariants}
              className={`group relative ${
                viewMode === 'list' 
                  ? 'flex bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10' 
                  : 'bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300'
              }`}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {content.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      badge === 'NEW' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                      badge === 'FEATURED' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                      badge === 'TRENDING' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' :
                      badge === 'PREMIUM' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                      'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {viewMode === 'grid' ? (
                <>
                  {/* Grid Layout */}
                  <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative text-center z-10">
                      <Play className="w-12 h-12 text-white mx-auto mb-2 opacity-80" />
                      <span className="text-white font-semibold">{content.type}</span>
                    </div>
                    <button className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
                      <Bookmark className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{content.rating}</span>
                      <span className="text-gray-400 text-sm">({content.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{content.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="text-sm text-cyan-400 font-medium mb-2">
                    {content.category} • {content.level}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {content.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-bold text-white">{content.price}</span>
                      <span className="text-gray-400 text-sm line-through ml-2">{content.originalPrice}</span>
                    </div>
                    <span className="text-green-400 text-sm font-medium">
                      Save {Math.round((1 - parseFloat(content.price.replace('$', '').replace(',', '')) / parseFloat(content.originalPrice.replace('$', '').replace(',', ''))) * 100)}%
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.duration}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {content.instructor}
                    </span>
                  </div>

                  <Link
                    to={content.link}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center justify-center group-hover:scale-105"
                  >
                    Start Learning
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              ) : (
                <>
                  {/* List Layout */}
                  <div className="w-48 h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mr-6 flex items-center justify-center flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                    <div className="relative text-center z-10">
                      <Play className="w-8 h-8 text-white mx-auto mb-1 opacity-80" />
                      <span className="text-white text-sm font-semibold">{content.type}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-medium">{content.rating}</span>
                          <span className="text-gray-400 text-sm">({content.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <Users className="w-4 h-4" />
                          <span>{content.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{content.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                          <Bookmark className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                          <Share2 className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>

                    <div className="text-sm text-cyan-400 font-medium mb-2">
                      {content.category} • {content.level} • {content.instructor}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {content.title}
                    </h3>

                    <p className="text-gray-300 mb-3">
                      {content.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {content.tags.map((tag, idx) => (
                        <span key={idx} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div>
                          <span className="text-2xl font-bold text-white">{content.price}</span>
                          <span className="text-gray-400 text-sm line-through ml-2">{content.originalPrice}</span>
                        </div>
                        <span className="text-green-400 text-sm font-medium">
                          Save {Math.round((1 - parseFloat(content.price.replace('$', '').replace(',', '')) / parseFloat(content.originalPrice.replace('$', '').replace(',', ''))) * 100)}%
                        </span>
                        <div className="text-sm text-gray-400">
                          <div>Completion: {content.stats.completionRate}</div>
                          <div>Satisfaction: {content.stats.satisfaction}</div>
                        </div>
                      </div>
                      <Link
                        to={content.link}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center"
                      >
                        Start Learning
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have already revolutionized their careers with our comprehensive learning programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/comprehensive-content-2026"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore All Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Personalized Recommendations
                <Lightbulb className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase2026;