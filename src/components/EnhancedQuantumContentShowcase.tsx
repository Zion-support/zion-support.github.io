import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  BookOpen, 
  FileText, 
  Users, 
  Star, 
  ArrowRight, 
  Play,
  Clock,
  Eye,
  ThumbsUp,
  Share2,
  Zap,
  Target,
  Award
} from 'lucide-react';

const EnhancedQuantumContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const contentItems = [
    {
      id: 1,
      title: "Quantum-AI Fusion: The 2025 Breakthrough That's Reshaping Everything",
      description: "Discover how quantum-AI fusion is creating unprecedented computational capabilities, solving problems previously thought impossible, and opening doors to revolutionary applications.",
      type: "blog",
      category: "Quantum Computing",
      author: "Zion Tech Group",
      date: "2025-01-17",
      readTime: "12 min read",
      views: "15.2k",
      likes: "2.1k",
      featured: true,
      trending: true,
      link: "/blog/quantum-ai-fusion-2025-breakthrough",
      image: "/api/placeholder/400/250",
      tags: ["Quantum Computing", "AI", "Breakthrough", "2025"],
      metrics: {
        impact: "10,000x faster processing",
        accuracy: "99.9% accuracy",
        roi: "2,500% ROI"
      }
    },
    {
      id: 2,
      title: "TechBank's Quantum-AI Transformation: 99.9% Trading Accuracy and $2.5B Revenue Growth",
      description: "How TechBank achieved unprecedented success with quantum-AI fusion, delivering 99.9% trading accuracy and generating $2.5B in additional revenue within 8 months.",
      type: "case-study",
      category: "Financial Services",
      author: "Zion Tech Group",
      date: "2025-01-17",
      readTime: "15 min read",
      views: "8.7k",
      likes: "1.8k",
      featured: true,
      trending: true,
      link: "/case-studies/quantum-ai-financial-transformation-success",
      image: "/api/placeholder/400/250",
      tags: ["Case Study", "Financial Services", "ROI", "Transformation"],
      metrics: {
        impact: "$2.5B revenue growth",
        accuracy: "99.9% trading accuracy",
        roi: "12,500% ROI"
      }
    },
    {
      id: 3,
      title: "The Complete Quantum-AI Implementation Master Guide 2025",
      description: "Comprehensive roadmap for implementing quantum-AI fusion in your organization, delivering unprecedented competitive advantages and 2,500-5,000% ROI within 12 months.",
      type: "resource",
      category: "Implementation Guide",
      author: "Zion Tech Group",
      date: "2025-01-17",
      readTime: "25 min read",
      views: "12.4k",
      likes: "3.2k",
      featured: true,
      trending: true,
      link: "/resources/quantum-ai-implementation-master-guide-2025",
      image: "/api/placeholder/400/250",
      tags: ["Implementation", "Guide", "ROI", "Strategy"],
      metrics: {
        impact: "Complete roadmap",
        accuracy: "Proven results",
        roi: "5,000% ROI"
      }
    },
    {
      id: 4,
      title: "AI 2025: The Autonomous Business Operations Revolution",
      description: "Discover how AI-powered autonomous business operations are transforming enterprises in 2025, delivering unprecedented efficiency and ROI.",
      type: "blog",
      category: "AI Innovation",
      author: "Zion Tech Group",
      date: "2025-01-17",
      readTime: "10 min read",
      views: "9.3k",
      likes: "1.5k",
      featured: false,
      trending: true,
      link: "/blog/ai-2025-autonomous-business-operations",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Automation", "Business Operations", "2025"],
      metrics: {
        impact: "800-1500% ROI",
        accuracy: "99.5% improvement",
        roi: "Autonomous operations"
      }
    },
    {
      id: 5,
      title: "Enterprise AI Transformation: GlobalCorp's 300% ROI Success Story",
      description: "How GlobalCorp achieved 300% ROI in 6 months through comprehensive AI implementation, reducing operational costs by $2.3M annually.",
      type: "case-study",
      category: "Manufacturing",
      author: "Zion Tech Group",
      date: "2025-01-15",
      readTime: "12 min read",
      views: "6.8k",
      likes: "1.2k",
      featured: false,
      trending: false,
      link: "/case-studies/enterprise-ai-transformation-success-story",
      image: "/api/placeholder/400/250",
      tags: ["Case Study", "Manufacturing", "ROI", "Transformation"],
      metrics: {
        impact: "$2.3M annual savings",
        accuracy: "300% ROI",
        roi: "6-month payback"
      }
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Content', icon: FileText },
    { id: 'blog', label: 'Blog Posts', icon: BookOpen },
    { id: 'case-study', label: 'Case Studies', icon: TrendingUp },
    { id: 'resource', label: 'Resources', icon: Brain }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return BookOpen;
      case 'case-study': return TrendingUp;
      case 'resource': return Brain;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-violet-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            REVOLUTIONARY CONTENT
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum-AI <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Breakthrough</span> Content
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the latest breakthroughs in quantum-AI fusion that are transforming industries, 
            delivering unprecedented results, and reshaping the future of technology.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            {filteredContent.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <motion.div
                  key={item.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        {item.featured && (
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            FEATURED
                          </div>
                        )}
                        {item.trending && (
                          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            TRENDING
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className={`bg-gradient-to-r ${getTypeColor(item.type)} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}>
                          <TypeIcon className="w-3 h-3" />
                          {item.category}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-2 text-center">
                          <div className="text-xs font-semibold text-green-400">Impact</div>
                          <div className="text-xs text-white">{item.metrics.impact}</div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-2 text-center">
                          <div className="text-xs font-semibold text-blue-400">Accuracy</div>
                          <div className="text-xs text-white">{item.metrics.accuracy}</div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-lg p-2 text-center">
                          <div className="text-xs font-semibold text-purple-400">ROI</div>
                          <div className="text-xs text-white">{item.metrics.roi}</div>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {item.views}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" />
                          {item.likes}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link
                        to={item.link}
                        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/30 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with Quantum-AI?
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
              Join industry leaders who are already achieving 2,500-5,000% ROI with our quantum-AI fusion solutions. 
              Get started with our comprehensive implementation guide today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resources/quantum-ai-implementation-master-guide-2025"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Get Implementation Guide
              </Link>
              <Link
                to="/case-studies"
                className="bg-white/10 backdrop-blur-lg border border-white/30 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Award className="w-5 h-5" />
                View Success Stories
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedQuantumContentShowcase;