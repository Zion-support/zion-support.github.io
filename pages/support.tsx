import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  HelpCircle, MessageCircle, Phone, Mail, Clock
  BookOpen, Video, FileText, Search, Filter
  CheckCircle, ArrowRight, Brain, Atom, Rocket
  Shield, Zap, Users, Star, TrendingUp, Code
} from 'lucide-react'
export default function Support() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const supportCategories = [
    {
      id: 'ai-services'
      name: 'AI Services'
      icon: <Brain className="w-8 h-8 text-cyan-400" />
      description: 'Support for AI consciousness and autonomous systems'
      articles: 25
    }
    {
      id: 'quantum-solutions'
      name: 'Quantum Solutions'
      icon: <Atom className="w-8 h-8 text-purple-400" />
      description: 'Help with quantum computing and cryptography'
      articles: 18
    }
    {
      id: 'autonomous-systems'
      name: 'Autonomous Systems'
      icon: <Rocket className="w-8 h-8 text-green-400" />
      description: 'Support for self-managing business operations'
      articles: 32
    }
    {
      id: 'enterprise-it'
      name: 'Enterprise IT'
      icon: <Shield className="w-8 h-8 text-blue-400" />
      description: 'Infrastructure and security support'
      articles: 28
    }
    {
      id: 'billing'
      name: 'Billing & Account'
      icon: <Zap className="w-8 h-8 text-yellow-400" />
      description: 'Payment, invoices, and account management'
      articles: 15
    }
    {
      id: 'technical'
      name: 'Technical Issues'
      icon: <Code className="w-8 h-8 text-orange-400" />
      description: 'Bug reports and technical troubleshooting'
      articles: 42
    }
  ]
  const quickActions = [
    {
      title: 'Live Chat'
      description: 'Get instant help from our support team'
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />
      action: 'Start Chat'
      color: 'from-cyan-500 to-blue-600'
      available: true
    }
    {
      title: 'Phone Support'
      description: 'Speak directly with our experts'
      icon: <Phone className="w-8 h-8 text-green-400" />
      action: 'Call Now'
      color: 'from-green-500 to-emerald-600'
      available: true
    }
    {
      title: 'Email Support'
      description: 'Send us a detailed message'
      icon: <Mail className="w-8 h-8 text-purple-400" />
      action: 'Send Email'
      color: 'from-purple-500 to-pink-600'
      available: true
    }
    {
      title: 'Video Call'
      description: 'Screen share and visual assistance'
      icon: <Video className="w-8 h-8 text-orange-400" />
      action: 'Schedule Call'
      color: 'from-orange-500 to-red-600'
      available: true
    }
  ]
  const popularArticles = [
    {
      title: 'Getting Started with AI Consciousness Platform'
      category: 'AI Services'
      readTime: '5 min read'
      views: '2.4k'
      helpful: '98%'
    }
    {
      title: 'Setting Up Quantum-Secure Infrastructure'
      category: 'Quantum Solutions'
      readTime: '8 min read'
      views: '1.8k'
      helpful: '95%'
    }
    {
      title: 'Troubleshooting Autonomous System Errors'
      category: 'Autonomous Systems'
      readTime: '6 min read'
      views: '3.1k'
      helpful: '92%'
    }
    {
      title: 'API Integration Best Practices'
      category: 'Technical Issues'
      readTime: '7 min read'
      views: '4.2k'
      helpful: '96%'
    }
    {
      title: 'Understanding Your Invoice and Billing'
      category: 'Billing & Account'
      readTime: '3 min read'
      views: '1.5k'
      helpful: '89%'
    }
  ]
  const supportHours = [
    {
      day: 'Monday - Friday'
      hours: '9:00 AM - 8:00 PM EST'
      status: 'Available'
    }
    {
      day: 'Saturday'
      hours: '10:00 AM - 6:00 PM EST'
      status: 'Available'
    }
    {
      day: 'Sunday'
      hours: '12:00 PM - 6:00 PM EST'
      status: 'Limited'
    }
  ]
  const filteredCategories = selectedCategory === 'all'
    ? supportCategories
    : supportCategories.filter(cat => cat.id === selectedCategory)
=======
import React, { useState } from 'react',
import { motion } from 'framer-motion',
import {
  HelpCircle, MessageCircle, Phone, Mail, Clock,
  BookOpen, Video, FileText, Search, Filter,
  CheckCircle, ArrowRight, Brain, Atom, Rocket,
  Shield, Zap, Users, Star, TrendingUp, Code;
} from 'lucide-react',
export default /**
 * Support - Function description
 */
function Support() {
  const [search_query, setSearchQuery] = useState (''),
  const [selected_category, setSelectedCategory] = useState ('all'),
  const support_categories = [;
    {
      id: 'ai - services',
      name: 'AI Services',
      icon: <Brain className="w - 8 h - 8 text - cyan - 400" />,
      description: 'Support for AI consciousness and autonomous systems',
      articles: 25;
    },
    {
      id: 'quantum - solutions',
      name: 'Quantum Solutions',
      icon: <Atom className="w - 8 h - 8 text - purple - 400" />,
      description: 'Help with quantum computing and cryptography',
      articles: 18;
    },
    {
      id: 'autonomous - systems',
      name: 'Autonomous Systems',
      icon: <Rocket className="w - 8 h - 8 text - green - 400" />,
      description: 'Support for self - managing business operations',
      articles: 32;
    },
    {
      id: 'enterprise - it',
      name: 'Enterprise IT',
      icon: <Shield className="w - 8 h - 8 text - blue - 400" />,
      description: 'Infrastructure and security support',
      articles: 28;
    },
    {
      id: 'billing',
      name: 'Billing & Account',
      icon: <Zap className="w - 8 h - 8 text - yellow - 400" />,
      description: 'Payment, invoices, and account management',
      articles: 15;
    },
    {
      id: 'technical',
      name: 'Technical Issues',
      icon: <Code className="w - 8 h - 8 text - orange - 400" />,
      description: 'Bug reports and technical troubleshooting',
      articles: 42;
    }
  ],
  const quick_actions = [;
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w - 8 h - 8 text - cyan - 400" />,
      action: 'Start Chat',
      color: 'from - cyan - 500 to - blue - 600',
      available: true;
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: <Phone className="w - 8 h - 8 text - green - 400" />,
      action: 'Call Now',
      color: 'from - green - 500 to - emerald - 600',
      available: true;
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: <Mail className="w - 8 h - 8 text - purple - 400" />,
      action: 'Send Email',
      color: 'from - purple - 500 to - pink - 600',
      available: true;
    },
    {
      title: 'Video Call',
      description: 'Screen share and visual assistance',
      icon: <Video className="w - 8 h - 8 text - orange - 400" />,
      action: 'Schedule Call',
      color: 'from - orange - 500 to - red - 600',
      available: true;
    }
  ],
  const popular_articles = [;
    {
      title: 'Getting Started with AI Consciousness Platform',
      category: 'AI Services',
      read_time: '5 min read',
      views: '2.4k',
      helpful: '98%';
    },
    {
      title: 'Setting Up Quantum - Secure Infrastructure',
      category: 'Quantum Solutions',
      read_time: '8 min read',
      views: '1.8k',
      helpful: '95%';
    },
    {
      title: 'Troubleshooting Autonomous System Errors',
      category: 'Autonomous Systems',
      read_time: '6 min read',
      views: '3.1k',
      helpful: '92%';
    },
    {
      title: 'API Integration Best Practices',
      category: 'Technical Issues',
      read_time: '7 min read',
      views: '4.2k',
      helpful: '96%';
    },
    {
      title: 'Understanding Your Invoice and Billing',
      category: 'Billing & Account',
      read_time: '3 min read',
      views: '1.5k',
      helpful: '89%';
    }
  ],
  const support_hours = [;
    {
      day: 'Monday - Friday',
      hours: '9:00 AM - 8:00 PM EST',
      status: 'Available';
    },
    {
      day: 'Saturday',
      hours: '10:00 AM - 6:00 PM EST',
      status: 'Available';
    },
    {
      day: 'Sunday',
      hours: '12:00 PM - 6:00 PM EST',
      status: 'Limited';
    }
  ],
  const filtered_categories = selected_category === 'all';
    ? support_categories;
    : support_categories.filter (cat => cat.id === selected_category),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <div className="min - h-screen bg - black text - white">;
      {/* Hero Section */}
      <section className="relative pt - 32 pb - 20 overflow - hidden">;
        <div className="absolute inset - 0 bg - gradient - to - br from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20" />;
        <div className="relative z - 10 container mx - auto px - 4">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
      {/* Quick Actions */}
      <section className="py - 20">;
        <div className="container mx - auto px - 4">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
                key={action.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor - pointer";
              >;
                <div className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - black / 50 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300">;
                  <div className="flex justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300">;
                    {action.icon}
      {/* Support Categories */}
      <section className="py - 20 bg - gradient - to - r from - gray - 900 / 50 to - black">;
        <div className="container mx - auto px - 4">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          {/* Category Filter */}
          <div className="flex justify - center mb - 12">;
            <div className="flex flex - wrap gap - 3">;
              <button;
                on_click={() => setSelectedCategory ('all')}
                className={`px - 6 py - 3 rounded - xl font - medium transition - all duration - 300 ${
                  selected_category === 'all';
                    ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                    : 'bg - gray - 800 / 50 text - gray - 300 hover:bg - gray - 700 / 50';
                }`}
              >;
                All Categories;
              </button>;
              {support_categories.map ((category) => (
                <button;
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 6 py - 3 rounded - xl font - medium transition - all duration - 300 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                      : 'bg - gray - 800 / 50 text - gray - 300 hover:bg - gray - 700 / 50';
                  }`}
                >;
                  {category.name}
                key={category.id}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor - pointer";
              >;
                <div className="p - 6 bg - gradient - to - br from - gray - 900 / 30 to - black / 30 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300">;
                  <div className="flex items - start gap - 4 mb - 4">;
                    <div className="flex - shrink - 0">{category.icon}</div>;
                    <div>;
                      <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300">;
                        {category.name}
        {/* Support Channels */}
        <section className="py - 20 px - 4 bg - gradient - to - r from - gray - 900 / 50 to - black / 50">;
          <div className="max - w-6xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              transition={{ duration: 0.6 }}
                  key={channel.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text - center p - 6 bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 rounded - 2xl border border - gray - 700 / 30 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <div className="flex justify - center mb - 4">;
                    {channel.icon}
=======
                  </div>;
                  <h3 className="text - xl font - bold text - white mb - 3">{channel.title}</h3>;
                  <p className="text - gray - 300 text - sm mb - 4">{channel.description}</p>;
                  <div className="space - y-2 text - sm">;
                    <div className="flex justify - between">;
                      <span className="text - gray - 400">Availability:</span>;
                      <span className="text - cyan - 400">{channel.availability}</span>;
                    </div>;
                    <div className="flex justify - between">;
                      <span className="text - gray - 400">Response:</span>;
                      <span className="text - green - 400">{channel.response_time}</span>;
                    </div>;
                    <div className="flex justify - between">;
                      <span className="text - gray - 400">Priority:</span>;
                      <span className="text - purple - 400">{channel.priority}</span>;
                    </div>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        {/* Search and Filter */}
        <section className="py - 12 px - 4">;
          <div className="max - w-6xl mx - auto">;
            <div className="flex flex - col lg:flex - row gap - 6 items - center">;
              {/* Search Bar */}
              {/* Category Filter */}
              <div className="flex flex - wrap gap - 2">;
                {support_categories.map ((category) => (
                  <button;
                    key={category.id}
                    on_click={() => setSelectedCategory (category.id)}
                    className={`px - 4 py - 2 rounded - lg border transition - all duration - 300 flex items - center gap - 2 ${
                      selected_category === category.id;
                        ? 'bg - cyan - 500 / 20 border - cyan - 500 / 50 text - cyan - 400';
                        : 'bg - gray - 800 / 50 border - gray - 600 text - gray - 300 hover:bg - cyan - 500 / 20 hover:border - cyan - 500 / 50';
                    }`}
                  >;
                    {category.icon}
                    {category.name}
        {/* FAQ Section */}
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
            {[;
              {
              }
            ].map ((faq, index) => (
              <div key={index} className="p - 6 rounded - 2xl bg - gradient - to - br from - white / 5 to - white / 10 border border - white / 10">;
                <h3 className="text - lg font - semibold mb - 3 text - white">{faq.question}</h3>;
                <p className="text - gray - 300 leading - relaxed">{faq.answer}</p>;
              </div>;
      {/* FAQs */}
      <section className="py - 20 bg - gradient - to - r from - gray - 900 / 50 to - black / 50">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
      {/* Popular Articles */}
      <section className="py - 20">;
        <div className="container mx - auto px - 4">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
        <section id="knowledge - base" className="py - 20 px - 4 bg - gradient - to - r from - black / 50 to - gray - 900 / 50">;
          <div className="max - w-6xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
            {filteredFAQs.length === 0 ? (
              <div className="text - center py - 20">;
                <HelpCircle className="w - 16 h - 16 text - gray - 400 mx - auto mb - 4" />;
                <h3 className="text - 2xl font - semibold text - white mb - 4">No results found</h3>;
                <p className="text - gray - 300">Try adjusting your search terms or category filter.</p>;
              </div>) : (
              <div className="space - y-6">;
                {filteredFAQs.map ((faq, index) => (
                  <motion.div;
                    key={index}
                    initial={{ opacity: 0, coordinate_y: 20 }}
                    whileInView={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p - 6 bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 rounded - 2xl border border - gray - 700 / 30";
                  >;
                    <h3 className="text - lg font - semibold text - white mb - 3">{faq.question}</h3>;
                    <p className="text - gray - 300 mb - 4">{faq.answer}</p>;
                    <div className="flex flex - wrap gap - 2">;
                      {faq.tags.map ((tag) => (
                        <span;
                          key={tag}
                          className="px - 3 py - 1 bg - cyan - 500 / 20 text - cyan - 400 rounded - full text - sm border border - cyan - 500 / 30";
                        >;
                          {tag}
        {/* Support Resources */}
        <section className="py - 20 px - 4">;
          <div className="max - w-6xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
                  key={resource.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p - 6 bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 rounded - 2xl border border - gray - 700 / 30 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <div className="flex justify - center mb - 4">;
                    {resource.icon}
                  </div>;
                  <h3 className="text - lg font - bold text - white mb - 2">{resource.title}</h3>;
                  <p className="text - gray - 300 text - sm mb - 4">{resource.description}</p>;
                  <div className="flex items - center justify - between">;
                    <span className="px - 2 py - 1 bg - gray - 700 / 50 text - gray - 300 rounded - full text - xs">;
                      {resource.category}
                    </span>;
                    <a;
                      href={resource.link}
                key={article.title}
                initial={{ opacity: 0, coordinate_x: -20 }}
                whileInView={{ opacity: 1, coordinate_x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor - pointer";
              >;
                <div className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - black / 50 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300">;
                  <div className="flex items - start justify - between gap - 4">;
                    <div className="flex - 1">;
                      <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300">;
                        {article.title}
                      </h3>;
                      <div className="flex items - center gap - 4 text - sm text - gray - 400">;
                        <span className="flex items - center gap - 1">;
                          <BookOpen className="w - 4 h - 4" />;
                          {article.category}
      {/* Support Hours & Contact */}
      <section className="py - 20 bg - gradient - to - r from - gray - 900 / 50 to - black">;
        <div className="container mx - auto px - 4">;
          <div className="grid lg:grid - cols - 2 gap - 12 items - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_x: -20 }}
              whileInView={{ opacity: 1, coordinate_x: 0 }}
              transition={{ duration: 0.8 }}
      {/* Contact CTA */}
      <section className="py - 20 bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20">;
        <div className="container mx - auto px - 4 text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
        {/* Contact Support */}
        <section id="contact - support" className="py - 20 px - 4 bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
=======
            >;
              <h2 className="text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
                Still Need Help?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                Our expert support team is ready to assist you with any questions or technical issues;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 inline - flex items - center";
                >;
                  Contact Support;
                  <ArrowRight className="w - 5 h - 5 ml - 2" />;
                </a>;
                <a;
                  href="tel:+13024640950";
                  className="px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 inline - flex items - center";
                >;
                  <Phone className="w - 5 h - 5 mr - 2" />;
                  Call Now;
                </a>;
              </div>;
              <div className="mt - 8 p - 6 bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 rounded - 2xl border border - gray - 700 / 30">;
                <h3 className="text - xl font - bold text - white mb - 4">Emergency Support</h3>;
                <p className="text - gray - 300 mb - 4">;
                  For critical issues affecting production systems, contact our emergency support line: </p>;
                <div className="text - 2xl font - bold text - cyan - 400">+1 (302) 464 - 0950</div>;
                <p className="text - sm text - gray - 400 mt - 2">Available 24 / 7 for enterprise clients</p>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </main>;
    </Layout>);
},
export default SupportPage,
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
