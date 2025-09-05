<<<<<<< HEAD
import React, { useState } from 'react',
import { motion } from 'framer-motion',
import { 
  HelpCircle, MessageCircle, Phone, Mail, Clock,
  BookOpen, Video, FileText, Search, Filter,
  CheckCircle, ArrowRight, Brain, Atom, Rocket,
  Shield, Zap, Users, Star, TrendingUp, Code
} from 'lucide-react',

export default function Support() {
  const [searchQuery, setSearchQuery] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
=======
import React, {_useState} from 'react';
import {_HelpCircle, _MessageCircle, _Phone, _Mail, _Clock, _BookOpen, _Video, _FileText, _Search, _Filter, _CheckCircle, _ArrowRight, _Brain, _Atom, _Rocket, _Shield, _Zap, _Users, _Star, _TrendingUp, _Code} from 'lucide-react';

export default function Support() {_const [searchQuery, _setSearchQuery] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _supportCategories = [
    {
<<<<<<< HEAD
      id: 'ai-services',
      name: 'AI Services',
      icon: <Brain className=&quot;w-8 h-8 text-cyan-400&quot; />,
      description: 'Support for AI consciousness and autonomous systems',
      articles: 25
    },
    {
      id: 'quantum-solutions',
      name: 'Quantum Solutions',
      icon: <Atom className=&quot;w-8 h-8 text-purple-400&quot; />,
      description: 'Help with quantum computing and cryptography',
      articles: 18
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous Systems',
      icon: <Rocket className=&quot;w-8 h-8 text-green-400&quot; />,
      description: 'Support for self-managing business operations',
      articles: 32
    },
    {
      id: 'enterprise-it',
      name: 'Enterprise IT',
      icon: <Shield className=&quot;w-8 h-8 text-blue-400&quot; />,
      description: 'Infrastructure and security support',
      articles: 28
    },
    {
      id: 'billing',
      name: 'Billing & Account',
      icon: <Zap className=&quot;w-8 h-8 text-yellow-400&quot; />,
      description: 'Payment, invoices, and account management',
      articles: 15
    },
    {
      id: 'technical',
      name: 'Technical Issues',
      icon: <Code className=&quot;w-8 h-8 text-orange-400&quot; />,
      description: 'Bug reports and technical troubleshooting',
      articles: 42
    }
  ],

  const quickActions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className=&quot;w-8 h-8 text-cyan-400&quot; />,
      action: 'Start Chat',
      color: 'from-cyan-500 to-blue-600',
      available: true
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: <Phone className=&quot;w-8 h-8 text-green-400&quot; />,
      action: 'Call Now',
      color: 'from-green-500 to-emerald-600',
      available: true
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: <Mail className=&quot;w-8 h-8 text-purple-400&quot; />,
      action: 'Send Email',
      color: 'from-purple-500 to-pink-600',
      available: true
    },
    {
      title: 'Video Call',
      description: 'Screen share and visual assistance',
      icon: <Video className=&quot;w-8 h-8 text-orange-400&quot; />,
      action: 'Schedule Call',
      color: 'from-orange-500 to-red-600',
      available: true
    }
  ],

  const popularArticles = [
    {
      title: 'Getting Started with AI Consciousness Platform',
      category: 'AI Services',
      readTime: '5 min read',
      views: '2.4k',
      helpful: '98%'
    },
    {
      title: 'Setting Up Quantum-Secure Infrastructure',
      category: 'Quantum Solutions',
      readTime: '8 min read',
      views: '1.8k',
      helpful: '95%'
    },
    {
      title: 'Troubleshooting Autonomous System Errors',
      category: 'Autonomous Systems',
      readTime: '6 min read',
      views: '3.1k',
      helpful: '92%'
    },
    {
      title: 'API Integration Best Practices',
      category: 'Technical Issues',
      readTime: '7 min read',
      views: '4.2k',
      helpful: '96%'
    },
    {
      title: 'Understanding Your Invoice and Billing',
      category: 'Billing & Account',
      readTime: '3 min read',
      views: '1.5k',
      helpful: '89%'
    }
  ],

  const supportHours = [
    {
      day: 'Monday - Friday',
      hours: '9:00 AM - 8:00 PM EST',
      status: 'Available'
    },
    {
      day: 'Saturday',
      hours: '10:00 AM - 6:00 PM EST',
      status: 'Available'
    },
    {
      day: 'Sunday',
      hours: '12:00 PM - 6:00 PM EST',
      status: 'Limited'
    }
  ],
=======
      id: 'ai-services', _name: 'AI Services', _icon: <Brain className="w-8 h-8 text-cyan-400" />, _description: 'Support for AI consciousness and autonomous systems', _articles: 25},
    {_id: 'quantum-solutions', _name: 'Quantum Solutions', _icon: <Atom className="w-8 h-8 text-purple-400" />, _description: 'Help with quantum computing and cryptography', _articles: 18},
    {_id: 'autonomous-systems', _name: 'Autonomous Systems', _icon: <Rocket className="w-8 h-8 text-green-400" />, _description: 'Support for self-managing business operations', _articles: 32},
    {_id: 'enterprise-it', _name: 'Enterprise IT', _icon: <Shield className="w-8 h-8 text-blue-400" />, _description: 'Infrastructure and security support', _articles: 28},
    {_id: 'billing', _name: 'Billing & Account', _icon: <Zap className="w-8 h-8 text-yellow-400" />, _description: 'Payment, _invoices, _and account management', _articles: 15},
    {_id: 'technical', _name: 'Technical Issues', _icon: <Code className="w-8 h-8 text-orange-400" />, _description: 'Bug reports and technical troubleshooting', _articles: 42}
  ];

  const _quickActions = [
    {_title: 'Live Chat', _description: 'Get instant help from our support team', _icon: <MessageCircle className="w-8 h-8 text-cyan-400" />, _action: 'Start Chat', _color: 'from-cyan-500 to-blue-600', _available: true},
    {_title: 'Phone Support', _description: 'Speak directly with our experts', _icon: <Phone className="w-8 h-8 text-green-400" />, _action: 'Call Now', _color: 'from-green-500 to-emerald-600', _available: true},
    {_title: 'Email Support', _description: 'Send us a detailed message', _icon: <Mail className="w-8 h-8 text-purple-400" />, _action: 'Send Email', _color: 'from-purple-500 to-pink-600', _available: true},
    {_title: 'Video Call', _description: 'Screen share and visual assistance', _icon: <Video className="w-8 h-8 text-orange-400" />, _action: 'Schedule Call', _color: 'from-orange-500 to-red-600', _available: true}
  ];

  const _popularArticles = [
    {_title: 'Getting Started with AI Consciousness Platform', _category: 'AI Services', _readTime: '5 min read', _views: '2.4k', _helpful: '98%'},
    {_title: 'Setting Up Quantum-Secure Infrastructure', _category: 'Quantum Solutions', _readTime: '8 min read', _views: '1.8k', _helpful: '95%'},
    {_title: 'Troubleshooting Autonomous System Errors', _category: 'Autonomous Systems', _readTime: '6 min read', _views: '3.1k', _helpful: '92%'},
    {_title: 'API Integration Best Practices', _category: 'Technical Issues', _readTime: '7 min read', _views: '4.2k', _helpful: '96%'},
    {_title: 'Understanding Your Invoice and Billing', _category: 'Billing & Account', _readTime: '3 min read', _views: '1.5k', _helpful: '89%'}
  ];

  const _supportHours = [
    {_day: 'Monday - Friday', _hours: '9:00 AM - 8:00 PM EST', _status: 'Available'},
    {_day: 'Saturday', _hours: '10:00 AM - 6:00 PM EST', _status: 'Available'},
    {_day: 'Sunday', _hours: '12:00 PM - 6:00 PM EST', _status: 'Limited'}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredCategories = selectedCategory === 'all' 
    ? supportCategories 
    : supportCategories.filter(cat => cat.id === selectedCategory),

<<<<<<< HEAD
  return (
    <div className=&quot;min-h-screen bg-black text-white&quot;>
      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20&quot; />
        <div className=&quot;relative z-10 container mx-auto px-4&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center max-w-4xl mx-auto&quot;
=======
  return (_<div className="min-h-screen bg-black text-white">
      {_/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-center max-w-4xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;>
              How Can We Help?
            </h1>
<<<<<<< HEAD
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed&quot;>
              Get the support you need for our AI consciousness, quantum computing, 
              and autonomous systems. Our expert team is here to help 24/7.
            </p>
            
            {/* Search Bar */}
            <div className=&quot;max-w-2xl mx-auto mb-8&quot;>
              <div className=&quot;relative&quot;>
                <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search for help articles, guides, and solutions...&quot;
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className=&quot;w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300&quot;
=======
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Get the support you need for our AI consciousness, _quantum computing, _and autonomous systems. Our expert team is here to help 24/7.
            </p>
            
            {_/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, _guides, _and solutions..."
                  value={_searchQuery}
                  onChange={_(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>
            </div>
            
            <div className=&quot;flex flex-wrap justify-center gap-6&quot;>
              <div className=&quot;flex items-center gap-2 text-cyan-400&quot;>
                <HelpCircle className=&quot;w-6 h-6&quot; />
                <span>24/7 Support</span>
              </div>
              <div className=&quot;flex items-center gap-2 text-purple-400&quot;>
                <Users className=&quot;w-6 h-6&quot; />
                <span>Expert Team</span>
              </div>
              <div className=&quot;flex items-center gap-2 text-green-400&quot;>
                <CheckCircle className=&quot;w-6 h-6&quot; />
                <span>Quick Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Quick Actions */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
              Get Help Fast
            </h2>
            <p className=&quot;text-xl text-gray-400&quot;>Choose your preferred support method</p>
          </motion.div>
          
<<<<<<< HEAD
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className=&quot;group cursor-pointer&quot;
              >
                <div className=&quot;p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300&quot;>
                  <div className=&quot;flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                    {action.icon}
                  </div>
                  
                  <h3 className=&quot;text-xl font-bold text-white mb-3 text-center&quot;>{action.title}</h3>
                  <p className=&quot;text-gray-300 mb-4 text-center leading-relaxed&quot;>{action.description}</p>
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_quickActions.map(_(action, _index) => (
              <motion.div
                key={action.title}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {_action.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{_action.title}</h3>
                  <p className="text-gray-300 mb-4 text-center leading-relaxed">{_action.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  
                  <button className={_`w-full py-3 px-4 bg-gradient-to-r ${action.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>
                    {_action.action}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Support Categories */}
      <section className=&quot;py-20 bg-gradient-to-r from-gray-900/50 to-black&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Support Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
              Browse Help Categories
            </h2>
            <p className=&quot;text-xl text-gray-400&quot;>Find solutions organized by topic and service area</p>
          </motion.div>
          
<<<<<<< HEAD
          {/* Category Filter */}
          <div className=&quot;flex justify-center mb-12&quot;>
            <div className=&quot;flex flex-wrap gap-3&quot;>
=======
          {_/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-3">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <button
                onClick={_() => setSelectedCategory('all')}
                className={_`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'}`}
              >
                All Categories
              </button>
              {_supportCategories.map(_(category) => (_<button
                  key={category.id}
                  onClick={_() => setSelectedCategory(category.id)}
                  className={_`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'}`}
                >
                  {_category.name}
                </button>
              ))}
            </div>
          </div>
          
<<<<<<< HEAD
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className=&quot;group cursor-pointer&quot;
              >
                <div className=&quot;p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300&quot;>
                  <div className=&quot;flex items-start gap-4 mb-4&quot;>
                    <div className=&quot;flex-shrink-0&quot;>{category.icon}</div>
                    <div>
                      <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                        {category.name}
                      </h3>
                      <p className=&quot;text-gray-300 text-sm leading-relaxed&quot;>{category.description}</p>
                    </div>
                  </div>
                  
                  <div className=&quot;flex items-center justify-between pt-4 border-t border-gray-800/50&quot;>
                    <span className=&quot;text-sm text-gray-400&quot;>{category.articles} articles</span>
                    <div className=&quot;flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300&quot;>
                      <span className=&quot;text-sm font-medium&quot;>Browse</span>
                      <ArrowRight className=&quot;w-4 h-4 group-hover:translate-x-1 transition-transform duration-300&quot; />
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_filteredCategories.map(_(category, _index) => (
              <motion.div
                key={category.id}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">{_category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {_category.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{_category.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <span className="text-sm text-gray-400">{_category.articles} articles</span>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Browse</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

<<<<<<< HEAD
        {/* Support Channels */}
        <section className=&quot;py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Support Channels */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                How Can We Help?
              </h2>
              <p className=&quot;text-xl text-gray-300&quot;>
                Multiple support channels to meet your needs
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className=&quot;text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300&quot;
                >
                  <div className=&quot;flex justify-center mb-4&quot;>
                    {channel.icon}
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{channel.title}</h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{channel.description}</p>
                  <div className=&quot;space-y-2 text-sm&quot;>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-gray-400&quot;>Availability:</span>
                      <span className=&quot;text-cyan-400&quot;>{channel.availability}</span>
                    </div>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-gray-400&quot;>Response:</span>
                      <span className=&quot;text-green-400&quot;>{channel.responseTime}</span>
                    </div>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-gray-400&quot;>Priority:</span>
                      <span className=&quot;text-purple-400&quot;>{channel.priority}</span>
=======
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {_supportChannels.map(_(channel, _index) => (
                <motion.div
                  key={channel.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {_channel.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{_channel.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{_channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-cyan-400">{_channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-green-400">{_channel.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Priority:</span>
                      <span className="text-purple-400">{_channel.priority}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search and Filter */}
        <section className=&quot;py-12 px-4&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <div className=&quot;flex flex-col lg:flex-row gap-6 items-center&quot;>
              {/* Search Bar */}
              <div className=&quot;flex-1 w-full lg:w-auto&quot;>
                <div className=&quot;relative&quot;>
                  <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                  <input
                    type=&quot;text&quot;
                    placeholder=&quot;Search for help topics, questions, or solutions...&quot;
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=&quot;w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
=======
        {_/* Search and Filter */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {_/* Search Bar */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help topics, questions, or solutions..."
                    value={_searchTerm}
                    onChange={_(_e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </div>
              </div>

<<<<<<< HEAD
              {/* Category Filter */}
              <div className=&quot;flex flex-wrap gap-2&quot;>
                {supportCategories.map((category) => (
                  <button
=======
              {_/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {_supportCategories.map(_(category) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    key={category.id}
                    onClick={_() => setSelectedCategory(category.id)}
                    className={_`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50'}`}
                  >
<<<<<<< HEAD
                    {category.icon}
                    {category.name}
                    <span className=&quot;text-sm text-gray-400&quot;>({category.count})</span>
=======
                    {_category.icon}
                    {_category.name}
                    <span className="text-sm text-gray-400">({_category.count})</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* FAQ Section */}
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {[
              {
                question: &quot;What is AI Consciousness Evolution?&quot;,
                answer: &quot;AI Consciousness Evolution is our revolutionary platform that creates truly conscious, self-aware, and emotionally intelligent AI systems that transcend traditional artificial intelligence.&quot;
              },
              {
                question: &quot;How does Quantum Neural Ecosystem work?&quot;,
                answer: &quot;Our Quantum Neural Ecosystem combines quantum computing with neural networks to solve previously impossible problems, leveraging quantum superposition and entanglement for exponential computational power.&quot;
              },
              {
                question: &quot;What makes Space Resource Intelligence unique?&quot;,
                answer: &quot;Our space technology uses AI-powered autonomous exploration to discover and extract extraterrestrial resources, enabling sustainable space colonization and resource utilization.&quot;
              },
              {
                question: &quot;How secure is your Quantum Cybersecurity platform?&quot;,
                answer: &quot;Our quantum cybersecurity provides unbreakable encryption using quantum key distribution and quantum-resistant algorithms that future-proof your security beyond current technological limitations.&quot;
              },
              {
                question: &quot;Can I integrate your AI with my existing systems?&quot;,
                answer: &quot;Yes! We provide comprehensive integration support, APIs, and custom development services to seamlessly integrate our revolutionary AI solutions with your existing infrastructure.&quot;
              },
              {
                question: &quot;What support do you offer for enterprise deployments?&quot;,
                answer: &quot;We provide dedicated enterprise support including 24/7 technical assistance, custom training programs, and dedicated account managers for large-scale deployments.&quot;
              }
            ].map((faq, index) => (
              <div key={index} className=&quot;p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10&quot;>
                <h3 className=&quot;text-lg font-semibold mb-3 text-white&quot;>{faq.question}</h3>
                <p className=&quot;text-gray-300 leading-relaxed&quot;>{faq.answer}</p>
              </div>
      {/* FAQs */}
      <section className=&quot;py-20 bg-gradient-to-r from-gray-900/50 to-black/50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
      {/* Popular Articles */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        <section id=&quot;knowledge-base&quot; className=&quot;py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* FAQ Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_[
              {
                question: "What is AI Consciousness Evolution?", _answer: "AI Consciousness Evolution is our revolutionary platform that creates truly conscious, _self-aware, _and emotionally intelligent AI systems that transcend traditional artificial intelligence."},
              {_question: "How does Quantum Neural Ecosystem work?", _answer: "Our Quantum Neural Ecosystem combines quantum computing with neural networks to solve previously impossible problems, _leveraging quantum superposition and entanglement for exponential computational power."},
              {_question: "What makes Space Resource Intelligence unique?", _answer: "Our space technology uses AI-powered autonomous exploration to discover and extract extraterrestrial resources, _enabling sustainable space colonization and resource utilization."},
              {_question: "How secure is your Quantum Cybersecurity platform?", _answer: "Our quantum cybersecurity provides unbreakable encryption using quantum key distribution and quantum-resistant algorithms that future-proof your security beyond current technological limitations."},
              {_question: "Can I integrate your AI with my existing systems?", _answer: "Yes! We provide comprehensive integration support, _APIs, _and custom development services to seamlessly integrate our revolutionary AI solutions with your existing infrastructure."},
              {_question: "What support do you offer for enterprise deployments?", _answer: "We provide dedicated enterprise support including 24/7 technical assistance, _custom training programs, _and dedicated account managers for large-scale deployments."}
            ].map(_(faq, _index) => (
              <div key={_index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white">{_faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{_faq.answer}</p>
              </div>
      {_/* FAQs */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {_/* Popular Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
        <section id="knowledge-base" className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Frequently Asked Questions
              </h2>
              <p className=&quot;text-xl text-gray-300&quot;>
                Quick answers to common questions and solutions
              </p>
            </motion.div>

<<<<<<< HEAD
            {filteredFAQs.length === 0 ? (
              <div className=&quot;text-center py-20&quot;>
                <HelpCircle className=&quot;w-16 h-16 text-gray-400 mx-auto mb-4&quot; />
                <h3 className=&quot;text-2xl font-semibold text-white mb-4&quot;>No results found</h3>
                <p className=&quot;text-gray-300&quot;>Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              <div className=&quot;space-y-6&quot;>
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className=&quot;p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30&quot;
                  >
                    <h3 className=&quot;text-lg font-semibold text-white mb-3&quot;>{faq.question}</h3>
                    <p className=&quot;text-gray-300 mb-4&quot;>{faq.answer}</p>
                    <div className=&quot;flex flex-wrap gap-2&quot;>
                      {faq.tags.map((tag) => (
=======
            {_filteredFAQs.length === 0 ? (
              <div className="text-center py-20">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">No results found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (_<div className="space-y-6">
                {filteredFAQs.map((faq, _index) => (_<motion.div
                    key={index}
                    initial={_{ opacity: 0, _y: 20}}
                    whileInView={_{ opacity: 1, _y: 0}}
                    transition={_{ duration: 0.6, _delay: index * 0.1}}
                    className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{_faq.question}</h3>
                    <p className="text-gray-300 mb-4">{_faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {_faq.tags.map((tag) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <span
                          key={tag}
                          className=&quot;px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30&quot;
                        >
                          {_tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

<<<<<<< HEAD
        {/* Support Resources */}
        <section className=&quot;py-20 px-4&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Support Resources */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Support Resources
              </h2>
              <p className=&quot;text-xl text-gray-300&quot;>
                Comprehensive documentation and learning materials
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className=&quot;p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300&quot;
                >
                  <div className=&quot;flex justify-center mb-4&quot;>
                    {resource.icon}
                  </div>
                  <h3 className=&quot;text-lg font-bold text-white mb-2&quot;>{resource.title}</h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{resource.description}</p>
                  <div className=&quot;flex items-center justify-between&quot;>
                    <span className=&quot;px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs&quot;>
                      {resource.category}
                    </span>
                    <a
                      href={resource.link}
                      className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium&quot;
=======
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {_resources.map(_(resource, _index) => (
                <motion.div
                  key={resource.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {_resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{_resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{_resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                      {_resource.category}
                    </span>
                    <a
                      href={_resource.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      Access
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
              Popular Help Articles
            </h2>
            <p className=&quot;text-xl text-gray-400&quot;>Most viewed and helpful support content</p>
          </motion.div>
          
<<<<<<< HEAD
          <div className=&quot;max-w-4xl mx-auto space-y-4&quot;>
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className=&quot;group cursor-pointer&quot;
              >
                <div className=&quot;p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300&quot;>
                  <div className=&quot;flex items-start justify-between gap-4&quot;>
                    <div className=&quot;flex-1&quot;>
                      <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                        {article.title}
                      </h3>
                      <div className=&quot;flex items-center gap-4 text-sm text-gray-400&quot;>
                        <span className=&quot;flex items-center gap-1&quot;>
                          <BookOpen className=&quot;w-4 h-4&quot; />
                          {article.category}
                        </span>
                        <span className=&quot;flex items-center gap-1&quot;>
                          <Clock className=&quot;w-4 h-4&quot; />
                          {article.readTime}
                        </span>
                        <span className=&quot;flex items-center gap-1&quot;>
                          <TrendingUp className=&quot;w-4 h-4&quot; />
                          {article.views} views
                        </span>
                        <span className=&quot;flex items-center gap-1&quot;>
                          <Star className=&quot;w-4 h-4&quot; />
                          {article.helpful} helpful
=======
          <div className="max-w-4xl mx-auto space-y-4">
            {_popularArticles.map(_(article, _index) => (
              <motion.div
                key={article.title}
                initial={_{ opacity: 0, _x: -20}}
                whileInView={_{ opacity: 1, _x: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {_article.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {_article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {_article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {_article.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {_article.helpful} helpful
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </span>
                      </div>
                    </div>
                    
                    <div className=&quot;flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300&quot;>
                      <span className=&quot;text-sm font-medium&quot;>Read</span>
                      <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform duration-300&quot; />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Support Hours & Contact */}
      <section className=&quot;py-20 bg-gradient-to-r from-gray-900/50 to-black&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;grid lg:grid-cols-2 gap-12 items-center&quot;>
=======
      {_/* Support Hours & Contact */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _x: -20}}
              whileInView={_{ opacity: 1, _x: 0}}
              transition={_{ duration: 0.8}}
            >
              <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Support Hours & Availability
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 leading-relaxed&quot;>
                Our expert support team is available to help you succeed with our 
                revolutionary technology solutions.
              </p>
              
<<<<<<< HEAD
              <div className=&quot;space-y-4&quot;>
                {supportHours.map((schedule, index) => (
                  <div key={schedule.day} className=&quot;flex items-center justify-between p-4 bg-gray-800/30 rounded-xl&quot;>
                    <div>
                      <h3 className=&quot;font-semibold text-white&quot;>{schedule.day}</h3>
                      <p className=&quot;text-gray-400&quot;>{schedule.hours}</p>
=======
              <div className="space-y-4">
                {_supportHours.map(_(schedule, _index) => (
                  <div key={schedule.day} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                    <div>
                      <h3 className="font-semibold text-white">{_schedule.day}</h3>
                      <p className="text-gray-400">{_schedule.hours}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                    <span className={_`px-3 py-1 rounded-full text-sm font-medium ${
                      schedule.status === 'Available' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {_schedule.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;relative&quot;
=======
              initial={_{ opacity: 0, _x: 20}}
              whileInView={_{ opacity: 1, _x: 0}}
              transition={_{ duration: 0.8}}
              className="relative"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20&quot;>
                <h3 className=&quot;text-2xl font-bold mb-4 text-white&quot;>Need Immediate Help?</h3>
                <p className=&quot;text-gray-300 mb-6&quot;>
                  For urgent technical issues or critical support needs, 
                  our team is available around the clock.
                </p>
                
                <div className=&quot;space-y-4&quot;>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
                    <span className=&quot;text-white&quot;>+1 302 464 0950</span>
                  </div>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <Mail className=&quot;w-5 h-5 text-purple-400&quot; />
                    <span className=&quot;text-white&quot;>support@ziontechgroup.com</span>
                  </div>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <MessageCircle className=&quot;w-5 h-5 text-green-400&quot; />
                    <span className=&quot;text-white&quot;>Live Chat Available</span>
                  </div>
                </div>
                
                <div className=&quot;mt-6 pt-6 border-t border-cyan-500/20&quot;>
                  <a
                    href=&quot;/contact&quot;
                    className=&quot;inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300&quot;
                  >
                    Contact Support
                    <ArrowRight className=&quot;w-5 h-5&quot; />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact CTA */}
      <section className=&quot;py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
=======
      {_/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
              Still Need Help?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Our support team is dedicated to ensuring your success with our 
              revolutionary technology solutions. Don't hesitate to reach out.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <a
                href=&quot;/contact&quot;
                className=&quot;inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300&quot;
              >
                Get Support
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a
                href=&quot;/resources&quot;
                className=&quot;inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300&quot;
              >
                Browse Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
},

export default Support,
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Support */}
        <section id=&quot;contact-support&quot; className=&quot;py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
        {_/* Contact Support */}
        <section id="contact-support" className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
            >
              <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Still Need Help?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Our expert support team is ready to assist you with any questions or technical issues
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center&quot;
                >
                  Contact Support
                  <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                </Link>
                <a
                  href=&quot;tel:+13024640950&quot;
                  className=&quot;px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center&quot;
                >
                  <Phone className=&quot;w-5 h-5 mr-2&quot; />
                  Call Now
                </Link>
              </div>
<<<<<<< HEAD
              <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Emergency Support</h3>
                <p className="text-gray-300 mb-4">
                  For critical issues affecting production systems, contact our emergency support line: </p>
                <div className="text-2xl font-bold text-cyan-400">+1 (302) 464-0950</div>
                <p className="text-sm text-gray-400 mt-2">Available 24/7 for enterprise clients</p>
=======
              <div className=&quot;mt-8 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30&quot;>
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Emergency Support</h3>
                <p className=&quot;text-gray-300 mb-4&quot;>
                  For critical issues affecting production systems, contact our emergency support line:
                </p>
                <div className=&quot;text-2xl font-bold text-cyan-400&quot;>+1 (302) 464-0950</div>
                <p className=&quot;text-sm text-gray-400 mt-2&quot;>Available 24/7 for enterprise clients</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  )
},

export default SupportPage,
