import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Sparkles, Brain, Zap, Star, TrendingUp } from 'lucide-react';

const NewContentShowcase: React.FC = () => {
  const featuredContent = [
    {
      type: 'blog',
      title: 'The AI Revolution: How 2025 Will Transform Every Industry',
      description: 'Explore the groundbreaking AI innovations reshaping business in 2025. From autonomous systems to quantum-enhanced AI, discover the future of technology.',
      link: '/blog/ai-revolution-2025',
      image: '🤖',
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
      tags: ['AI Trends', 'Innovation', 'Future Tech'],
      readTime: '8 min read',
      date: 'January 15, 2025',
      featured: true
    },
    {
      type: 'service',
      title: 'Quantum Computing Solutions',
      description: 'Harness the exponential power of quantum computing to solve your most complex business challenges. From optimization to cryptography, unlock unprecedented computational capabilities.',
      link: '/services/quantum-computing-solutions',
      image: '⚛️',
      gradient: 'from-purple-500 to-cyan-600',
      bgGradient: 'from-purple-500/10 to-cyan-500/10',
      tags: ['Quantum Computing', 'Optimization', 'Technology'],
      readTime: 'Learn More',
      date: 'New Service',
      featured: true
    },
    {
      type: 'blog',
      title: 'Quantum Computing Revolution: Transforming Business in 2025',
      description: 'Discover how quantum computing is revolutionizing business operations, from financial modeling to drug discovery. Learn about practical applications and implementation strategies.',
      link: '/blog/quantum-computing-business',
      image: '📊',
      gradient: 'from-green-500 to-blue-600',
      bgGradient: 'from-green-500/10 to-blue-500/10',
      tags: ['Quantum Computing', 'Business', 'Technology'],
      readTime: '12 min read',
      date: 'January 20, 2025',
      featured: false
    },
    {
      type: 'service',
      title: 'AI-Powered Customer Success Platform',
      description: 'Transform your customer success with AI-driven insights, automated engagement, and predictive analytics. Reduce churn and maximize customer lifetime value.',
      link: '/services/ai-powered-customer-success-platform',
      image: '🤖',
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-500/10 to-purple-500/10',
      tags: ['AI', 'Customer Success', 'Automation'],
      readTime: 'Explore',
      date: 'New Service',
      featured: false
    }
  ];

  const stats = [
    {
      icon: Sparkles,
      number: '4',
      label: 'New Content Pieces',
      color: 'text-yellow-400'
    },
    {
      icon: Brain,
      number: '2',
      label: 'AI Services',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      number: '1',
      label: 'Quantum Solutions',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      number: '100%',
      label: 'Innovation Focus',
      color: 'text-green-400'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Latest Content & Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover Our Latest Innovations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our newest AI solutions, quantum computing services, 
            and cutting-edge technology insights.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 ${
                content.featured ? 'md:col-span-2' : ''
              }`}
            >
              {content.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                    Featured
                  </span>
                </div>
              )}

              <div className={`h-48 bg-gradient-to-r ${content.bgGradient} flex items-center justify-center`}>
                <div className="text-6xl">{content.image}</div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {content.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {content.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {content.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </div>
                </div>

                <Link
                  to={content.link}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${content.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  {content.type === 'blog' ? 'Read Article' : 'Explore Service'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to discover new AI solutions, 
              quantum computing breakthroughs, and technology insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Subscribe Now
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase;