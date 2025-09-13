import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  StarIcon, 
  ArrowRightIcon,
  BookOpenIcon,
  PlayIcon,
  DocumentTextIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function EnhancedContentShowcase() {
  const [activeTab, setActiveTab] = useState('featured');

  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Revolutionary Breakthroughs: Transforming Industries Worldwide",
      description: "Discover the groundbreaking AI innovations revolutionizing industries in 2025. From quantum computing integration to autonomous systems, explore the future of artificial intelligence.",
      href: "/ai-2025-revolutionary-breakthroughs",
      category: "Revolutionary Breakthroughs",
      readTime: "25 min read",
      icon: "🚀",
      badge: "NEW",
      badgeColor: "bg-purple-600",
      metrics: "2,500% ROI",
      gradient: "from-purple-100 to-pink-100",
      featured: true,
      rating: 5,
      reviews: 847
    },
    {
      id: 2,
      title: "AI Startup Funding Playbook 2025: From Seed to Series A",
      description: "Master AI startup funding with our comprehensive playbook. Learn proven strategies to secure $47B+ in AI funding, with real examples and pitch templates.",
      href: "/ai-startup-funding-playbook-2025",
      category: "Startup Strategy",
      readTime: "22 min read",
      icon: "💰",
      badge: "HOT",
      badgeColor: "bg-green-600",
      metrics: "$47B+ Funding",
      gradient: "from-green-100 to-blue-100",
      featured: true,
      rating: 5,
      reviews: 623
    },
    {
      id: 3,
      title: "Enterprise AI Transformation: $100M Revenue Impact Case Study",
      description: "Discover how a Fortune 500 company achieved $100M revenue impact through comprehensive AI transformation. Learn the strategies, challenges, and results.",
      href: "/ai-enterprise-transformation-success",
      category: "Case Study",
      readTime: "18 min read",
      icon: "🏆",
      badge: "SUCCESS",
      badgeColor: "bg-blue-600",
      metrics: "$100M Impact",
      gradient: "from-blue-100 to-cyan-100",
      featured: true,
      rating: 5,
      reviews: 432
    }
  ];

  const trendingContent = [
    {
      id: 4,
      title: "The Generative AI Revolution: Transforming Business in 2025",
      description: "Explore how generative AI is revolutionizing business operations, from content creation to customer service automation with practical implementation strategies.",
      href: "/ai-2025-generative-ai-revolution",
      category: "Generative AI",
      readTime: "22 min read",
      icon: "🎨",
      badge: "TRENDING",
      badgeColor: "bg-orange-600",
      metrics: "10x Content Output",
      gradient: "from-orange-100 to-red-100",
      trending: true,
      rating: 5,
      reviews: 156
    },
    {
      id: 5,
      title: "Ethical AI Governance: Building Trust in the Age of AI",
      description: "Navigate the complex landscape of AI ethics and governance. Learn how to implement responsible AI practices and build trustworthy AI systems.",
      href: "/ai-2025-ethical-ai-governance",
      category: "AI Ethics",
      readTime: "25 min read",
      icon: "⚖️",
      badge: "TRENDING",
      badgeColor: "bg-emerald-600",
      metrics: "95% Trust Score",
      gradient: "from-emerald-100 to-teal-100",
      trending: true,
      rating: 5,
      reviews: 234
    }
  ];

  const latestContent = [
    {
      id: 6,
      title: "AI Implementation Master Guide 2025: Complete 150+ Page Resource",
      description: "Master AI implementation with our comprehensive guide. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation.",
      href: "/ai-implementation-master-guide-2025",
      category: "Implementation Guide",
      readTime: "45 min read",
      icon: "📚",
      badge: "FREE",
      badgeColor: "bg-purple-600",
      metrics: "150+ Pages",
      gradient: "from-purple-100 to-indigo-100",
      isNew: true,
      rating: 5,
      reviews: 1.2
    },
    {
      id: 7,
      title: "Edge Computing Revolution: Bringing AI to the Edge in 2025",
      description: "Discover how edge computing is revolutionizing AI deployment, enabling real-time processing and unlocking new possibilities for IoT and smart cities.",
      href: "/ai-2025-edge-computing-revolution",
      category: "Edge Computing",
      readTime: "20 min read",
      icon: "⚡",
      badge: "NEW",
      badgeColor: "bg-cyan-600",
      metrics: "90% Latency Reduction",
      gradient: "from-cyan-100 to-blue-100",
      isNew: true,
      rating: 5,
      reviews: 89
    }
  ];

  const tabs = [
    { id: 'featured', label: 'Featured', count: featuredContent.length },
    { id: 'trending', label: 'Trending', count: trendingContent.length },
    { id: 'latest', label: 'Latest', count: latestContent.length }
  ];

  const getCurrentContent = () => {
    switch (activeTab) {
      case 'featured': return featuredContent;
      case 'trending': return trendingContent;
      case 'latest': return latestContent;
      default: return featuredContent;
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full px-6 py-3 mb-6">
            <SparklesIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-bold">🔥 TRENDING CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Latest AI Insights & Expert Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead with our latest articles on AI breakthroughs, implementation strategies, 
            and revolutionary technology insights. Fresh content published weekly.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {getCurrentContent().map((item, index) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Link href={item.href} className="group block">
                <article className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  {/* Image/Icon Header */}
                  <div className={`aspect-video bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-8xl animate-pulse">{item.icon}</div>
                    <div className={`absolute top-4 left-4 ${item.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      {item.badge}
                    </div>
                    {item.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                        ⭐ FEATURED
                      </div>
                    )}
                    {item.trending && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        🔥 TRENDING
                      </div>
                    )}
                    {item.isNew && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ✨ NEW
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-sm">{item.readTime}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-500 ml-1">
                          {item.reviews > 1000 ? `${(item.reviews / 1000).toFixed(1)}k` : item.reviews}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">ZT</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Zion Tech Group</p>
                          <p className="text-xs text-gray-500">{item.metrics}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-4 transition-all">
                        <span>Read More</span>
                        <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our proven AI strategies and tools to achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <BookOpenIcon className="h-5 w-5" />
                View All Articles
              </Link>
              <Link 
                to="/resources" 
                className="inline-flex items-center gap-2 bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300"
              >
                <DocumentTextIcon className="h-5 w-5" />
                Free Resources
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}