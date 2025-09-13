import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Calendar, Users, Brain, Zap, BookOpen, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'service' | 'webinar';
  href: string;
  icon: React.ComponentType<any>;
  color: string;
  featured?: boolean;
  readTime?: string;
  publishDate?: string;
  views?: number;
  rating?: number;
}

const FeaturedContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const featuredContent: ContentItem[] = [
    {
      id: 'ai-2026-revolutionary-trends',
      title: 'AI 2026: Revolutionary Trends That Will Transform Every Industry',
      description: 'Discover the groundbreaking AI trends of 2026 that are set to revolutionize industries, from quantum AI to autonomous business ecosystems.',
      href: '/blog/ai-2026-revolutionary-trends',
      type: 'blog',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
      readTime: '30 min read',
      featured: true
    },
    {
      id: 'ai-2026-agent-economy',
      title: 'AI Agent Economy 2026: How Autonomous Agents Create New Markets',
      description: 'Why autonomous agents are moving into production and how new marketplaces, protocols, and ROI models are forming.',
      href: '/blog/ai-2026-agent-economy',
      type: 'blog',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      readTime: '18 min read',
      featured: true
    },
    {
      id: 'ai-2025-industry-disruption',
      title: 'AI Industry Disruption 2025: How Every Sector is Changing',
      description: 'Deep analysis of AI-driven disruption across 12 industries with quantified impacts, adoption timelines, and risk controls.',
      href: '/blog/ai-2025-industry-disruption',
      type: 'blog',
      icon: Brain,
      color: 'from-emerald-500 to-teal-600',
      readTime: '25 min read',
      featured: true
    },
    {
      id: 'ai-2025-enterprise-implementation-masterclass',
      title: 'AI Enterprise Implementation Masterclass 2025',
      description: 'Comprehensive, 45-minute masterclass covering governance, data, architecture, security, and ROI for enterprise AI.',
      href: '/blog/ai-2025-enterprise-implementation-masterclass',
      type: 'blog',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-600',
      readTime: '45 min read',
      featured: true
    },
    {
      id: 'ai-2025-go-to-market-playbook',
      title: 'AI Go-To-Market 2025: From Zero to Traction',
      description: 'Positioning, pricing, distribution, and growth loops that work for AI products in 2025.',
      href: '/blog/ai-2025-go-to-market-playbook',
      type: 'blog',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-600',
      readTime: '22 min read'
    },
    {
      id: 'ai-manufacturing-transformation-2025',
      title: 'AI Manufacturing Transformation: 75% Efficiency Gain Case Study',
      description: 'How a Fortune 500 manufacturer achieved 75% efficiency gains, 50% cost reduction, and zero-defect production through comprehensive AI transformation.',
      href: '/case-studies/ai-manufacturing-transformation-2025',
      type: 'case-study',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      readTime: '20 min read',
      featured: true
    },
    {
      id: 'ai-2026-strategy-playbook',
      title: 'AI 2026 Strategy Playbook: Complete Guide to Future-Proof Your Business',
      description: 'Download our comprehensive 250-page AI 2026 strategy playbook with frameworks, templates, and actionable strategies.',
      href: '/resources/ai-2026-strategy-playbook',
      type: 'service',
      icon: BookOpen,
      color: 'from-red-500 to-pink-600',
      readTime: '250+ pages',
      featured: true
    },
    {
      id: 'ai-transformation-healthcare-2025',
      title: 'AI Healthcare Transformation: 60% Faster Diagnosis Case Study',
      description: 'How a major healthcare system achieved 60% faster diagnosis times, 40% cost reduction, and 95% patient satisfaction through comprehensive AI transformation.',
      href: '/case-studies/ai-transformation-healthcare-2025',
      type: 'case-study',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      readTime: '15 min read'
    },
    {
      id: 'ai-implementation-master-guide-2025',
      title: 'AI Implementation Master Guide 2025: Complete Playbook',
      description: 'The definitive guide to implementing AI in your organization. 200+ pages of strategies, frameworks, and best practices for successful AI transformation.',
      href: '/resources/ai-implementation-master-guide-2025',
      type: 'service',
      icon: BookOpen,
      color: 'from-orange-500 to-red-600',
      readTime: '200+ pages'
    },
    {
      id: 'ai-2025-breakthrough-innovations',
      title: 'AI Breakthrough Innovations 2025: The Technologies Reshaping Business',
      description: 'Explore the most significant AI breakthrough innovations of 2025 that are transforming industries and creating new business opportunities.',
      href: '/blog/ai-2025-breakthrough-innovations',
      type: 'blog',
      icon: Zap,
      color: 'from-violet-500 to-purple-600',
      readTime: '25 min read'
    }
  ];

  const contentItems: ContentItem[] = [
    ...featuredContent,
    {
      id: 'ai-quantum-breakthrough',
      title: 'Revolutionary AI-Quantum Breakthrough 2025',
      description: 'Discover how our latest quantum AI consciousness platform is revolutionizing business intelligence and transforming industries worldwide.',
      type: 'blog',
      href: '/blog/ai-quantum-breakthrough-2025',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
      featured: true,
      readTime: '8 min read',
      publishDate: 'Jan 15, 2025',
      views: 12500,
      rating: 4.9
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 AI Transformation Success',
      description: 'How a leading Fortune 500 company achieved 300% operational efficiency increase and $50M+ in cost savings using our AI platform.',
      type: 'case-study',
      href: '/case-studies/fortune-500-ai-transformation',
      icon: Users,
      color: 'from-purple-500 to-pink-600',
      featured: true,
      readTime: '12 min read',
      publishDate: 'Jan 10, 2025',
      views: 8900,
      rating: 4.8
    },
    {
      id: 'ai-quantum-platform',
      title: 'AI-Quantum Consciousness Platform',
      description: 'The world\'s first fully conscious AI system powered by quantum computing, delivering unprecedented business intelligence capabilities.',
      type: 'service',
      href: '/services/ai-quantum-consciousness-platform',
      icon: Zap,
      color: 'from-emerald-500 to-teal-600',
      featured: true,
      readTime: '15 min read',
      publishDate: 'Jan 12, 2025',
      views: 15600,
      rating: 4.9
    },
    {
      id: 'ai-implementation-masterclass',
      title: 'AI Implementation Masterclass 2025',
      description: 'Join our exclusive masterclass on implementing AI solutions in your organization with hands-on workshops and expert guidance.',
      type: 'webinar',
      href: '/webinars/ai-implementation-masterclass-2025',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-600',
      featured: false,
      readTime: '2 hours',
      publishDate: 'Jan 20, 2025',
      views: 3200,
      rating: 4.7
    }
  ];

  const tabs = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'blog', name: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'service', name: 'Services', count: contentItems.filter(item => item.type === 'service').length },
    { id: 'webinar', name: 'Webinars', count: contentItems.filter(item => item.type === 'webinar').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'service': return 'Service';
      case 'webinar': return 'Webinar';
      default: return 'Content';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-cyan-500/20 text-cyan-400 border-cyan-400/30';
      case 'case-study': return 'bg-purple-500/20 text-purple-400 border-purple-400/30';
      case 'service': return 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30';
      case 'webinar': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest insights, success stories, and revolutionary AI solutions 
            that are transforming businesses worldwide.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'bg-black/30 border border-cyan-400/30 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
              }`}
            >
              {tab.name} ({tab.count})
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                    {item.featured && (
                      <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                  {item.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.readTime}</span>
                    </div>
                  )}
                  {item.views && (
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{item.views.toLocaleString()} views</span>
                    </div>
                  )}
                  {item.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <Link href={item.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  
                  {item.publishDate && (
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{item.publishDate}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Content
            </h3>
            <p className="text-gray-300 mb-6">
              Get notified about new blog posts, case studies, and revolutionary AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  View All Content
                </motion.button>
              </Link>
              <Link href="/newsletter">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                >
                  Subscribe to Newsletter
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedContentShowcase;