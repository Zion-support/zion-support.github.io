import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, Clock, Users, TrendingUp, Award, Brain, Atom, 
  Rocket, Shield, Cpu, Database, Cloud, Sparkles, Eye, Heart, Share2,
  Calendar, Tag, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'service' | 'webinar' | 'tool' | 'whitepaper';
  category: string;
  readTime?: string;
  publishDate: string;
  featured: boolean;
  image?: string;
  href: string;
  tags: string[];
  author: string;
  stats?: {
    views?: number;
    likes?: number;
    shares?: number;
    comments?: number;
  };
  excerpt: string;
  trending?: boolean;
  new?: boolean;
}

const FeaturedContentShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-quantum-revolution-2025',
      title: 'The AI Quantum Revolution: How 2025 is Transforming Everything',
      description: 'Discover how quantum AI is revolutionizing industries in 2025. Explore cutting-edge technologies, real-world applications, and the future of artificial intelligence.',
      excerpt: 'We\'re witnessing an unprecedented convergence of artificial intelligence and quantum computing that\'s reshaping every industry. Here\'s what you need to know about the revolution happening right now.',
      type: 'blog',
      category: 'AI & Technology',
      readTime: '8 min read',
      publishDate: '2025-01-17',
      featured: true,
      trending: true,
      new: true,
      href: '/blog/ai-quantum-revolution-2025',
      tags: ['AI', 'Quantum Computing', 'Technology', 'Innovation', '2025'],
      author: 'Zion Tech Group',
      stats: {
        views: 12500,
        likes: 890,
        shares: 234,
        comments: 67
      }
    },
    {
      id: 'quantum-ai-healthcare-transformation',
      title: 'Quantum AI Healthcare Transformation: 300% Faster Drug Discovery',
      description: 'How we helped a major pharmaceutical company reduce drug discovery time from 10 years to 3 years using quantum AI technology.',
      excerpt: 'A comprehensive case study showing how quantum AI revolutionized drug discovery, reducing development time by 70% and increasing success rates by 300%.',
      type: 'case-study',
      category: 'Healthcare & Life Sciences',
      readTime: '12 min read',
      publishDate: '2025-01-15',
      featured: true,
      trending: true,
      href: '/case-studies/quantum-ai-healthcare-transformation',
      tags: ['Healthcare', 'Drug Discovery', 'Case Study', 'Success Story', 'Pharmaceutical'],
      author: 'Dr. Sarah Chen',
      stats: {
        views: 8900,
        likes: 567,
        shares: 189,
        comments: 34
      }
    },
    {
      id: 'quantum-ai-consulting-2025',
      title: 'Quantum AI Consulting 2025 - Transform Your Business',
      description: 'Expert quantum AI consulting services to revolutionize your business with cutting-edge AI solutions and strategies.',
      excerpt: 'Comprehensive AI transformation services including strategy development, quantum computing integration, and digital transformation solutions.',
      type: 'service',
      category: 'AI Consulting',
      readTime: '15 min read',
      publishDate: '2025-01-16',
      featured: true,
      new: true,
      href: '/services/quantum-ai-consulting-2025',
      tags: ['AI Consulting', 'Business Transformation', 'Quantum Computing', 'Strategy', 'Digital Transformation'],
      author: 'Zion Tech Group',
      stats: {
        views: 15600,
        likes: 1200,
        shares: 456,
        comments: 89
      }
    },
    {
      id: 'ai-2025-implementation-masterclass',
      title: 'AI 2025 Implementation Masterclass - Free Webinar',
      description: 'Join our exclusive webinar and learn how to implement cutting-edge AI solutions in your organization.',
      excerpt: 'A comprehensive masterclass covering AI strategy, implementation best practices, and real-world case studies from industry leaders.',
      type: 'webinar',
      category: 'Education & Training',
      readTime: '60 min',
      publishDate: '2025-01-20',
      featured: true,
      trending: true,
      href: '/webinars/ai-2025-implementation-masterclass',
      tags: ['Webinar', 'Masterclass', 'AI Implementation', 'Free', 'Education'],
      author: 'Dr. Marcus Johnson',
      stats: {
        views: 25000,
        likes: 1800,
        shares: 789,
        comments: 156
      }
    },
    {
      id: 'quantum-cybersecurity-guide-2025',
      title: 'Quantum Cybersecurity: Protecting Your Digital Future',
      description: 'Essential guide to quantum-resistant cybersecurity strategies for the post-quantum era.',
      excerpt: 'Learn how to protect your organization from quantum computing threats and implement future-proof security measures.',
      type: 'whitepaper',
      category: 'Cybersecurity',
      readTime: '20 min read',
      publishDate: '2025-01-14',
      featured: false,
      trending: true,
      href: '/resources/quantum-cybersecurity-guide-2025',
      tags: ['Cybersecurity', 'Quantum Security', 'Digital Protection', 'Whitepaper'],
      author: 'Lisa Wang',
      stats: {
        views: 6800,
        likes: 423,
        shares: 145,
        comments: 23
      }
    },
    {
      id: 'ai-roi-calculator-tool',
      title: 'AI ROI Calculator - Measure Your AI Investment Returns',
      description: 'Interactive tool to calculate the return on investment for your AI initiatives and projects.',
      excerpt: 'Calculate potential ROI, identify cost savings, and optimize your AI investment strategy with our comprehensive calculator.',
      type: 'tool',
      category: 'AI Tools',
      readTime: '5 min',
      publishDate: '2025-01-12',
      featured: false,
      new: true,
      href: '/tools/ai-roi-calculator',
      tags: ['ROI Calculator', 'AI Tools', 'Investment Analysis', 'Business Intelligence'],
      author: 'Zion Tech Group',
      stats: {
        views: 11200,
        likes: 678,
        shares: 234,
        comments: 45
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'AI & Technology', name: 'AI & Technology', count: contentItems.filter(item => item.category === 'AI & Technology').length },
    { id: 'Healthcare & Life Sciences', name: 'Healthcare', count: contentItems.filter(item => item.category === 'Healthcare & Life Sciences').length },
    { id: 'AI Consulting', name: 'AI Consulting', count: contentItems.filter(item => item.category === 'AI Consulting').length },
    { id: 'Education & Training', name: 'Education', count: contentItems.filter(item => item.category === 'Education & Training').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: contentItems.filter(item => item.category === 'Cybersecurity').length },
    { id: 'AI Tools', name: 'AI Tools', count: contentItems.filter(item => item.category === 'AI Tools').length }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return Brain;
      case 'case-study': return Award;
      case 'service': return Rocket;
      case 'webinar': return Users;
      case 'tool': return Cpu;
      case 'whitepaper': return Database;
      default: return Sparkles;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-cyan-500 to-blue-600';
      case 'case-study': return 'from-emerald-500 to-teal-600';
      case 'service': return 'from-purple-500 to-pink-600';
      case 'webinar': return 'from-orange-500 to-red-600';
      case 'tool': return 'from-yellow-500 to-orange-600';
      case 'whitepaper': return 'from-indigo-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const featuredContent = contentItems.filter(item => item.featured);
  const trendingContent = contentItems.filter(item => item.trending);
  const newContent = contentItems.filter(item => item.new);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Featured Content
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our latest insights, case studies, and resources on quantum AI, 
              cutting-edge technology, and digital transformation.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-black/30 border border-cyan-400/30 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Featured Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className="group relative"
            >
              <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${getTypeColor(item.type)} rounded-lg flex items-center justify-center`}>
                      {React.createElement(getTypeIcon(item.type), { className: "w-5 h-5 text-white" })}
                    </div>
                    <div>
                      <div className="text-cyan-400 text-sm font-semibold">{item.category}</div>
                      <div className="text-gray-400 text-xs">{item.publishDate}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {item.featured && (
                      <div className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                        FEATURED
                      </div>
                    )}
                    {item.trending && (
                      <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        TRENDING
                      </div>
                    )}
                    {item.new && (
                      <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        NEW
                      </div>
                    )}
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Author and Read Time */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{item.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* Stats */}
                {item.stats && (
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{item.stats.views?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>{item.stats.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-3 h-3" />
                      <span>{item.stats.shares}</span>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="text-gray-400 text-xs px-2 py-1">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <Link 
                  href={item.href}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:gap-3"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Content
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get notified about new articles, case studies, and resources delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Explore All Content
              </Link>
              <Link 
                href="/newsletter"
                className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedContentShowcase;