"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users,
  ArrowRight,
  Star,
  Clock,
  BookOpen
} from 'lucide-react';

const AIInnovationShowcase2025: React.FC = () => {
  const innovations = [
    {
      id: 'quantum-ai-fusion',
      title: 'Quantum-AI Fusion Technology',
      description: 'Revolutionary integration of quantum computing with artificial intelligence, delivering unprecedented processing power and decision-making capabilities.',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      href: '/innovations/quantum-ai-fusion',
      category: 'Breakthrough Technology',
      readTime: '12 min',
      rating: 4.9,
      featured: true
    },
    {
      id: 'neural-interface-platform',
      title: 'Advanced Neural Interface Platform',
      description: 'Direct brain-computer interface technology enabling seamless human-AI collaboration and enhanced cognitive capabilities.',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-600',
      href: '/innovations/neural-interface-platform',
      category: 'Human-AI Integration',
      readTime: '15 min',
      rating: 4.8
    },
    {
      id: 'autonomous-ai-systems',
      title: 'Fully Autonomous AI Systems',
      description: 'Self-evolving AI systems that can learn, adapt, and make decisions independently across complex business environments.',
      icon: Zap,
      color: 'from-emerald-500 to-teal-600',
      href: '/innovations/autonomous-ai-systems',
      category: 'Autonomous Systems',
      readTime: '18 min',
      rating: 4.9
    },
    {
      id: 'quantum-security-framework',
      title: 'Quantum-Secure AI Framework',
      description: 'Next-generation security framework protecting AI systems against quantum computing threats and ensuring data integrity.',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      href: '/innovations/quantum-security-framework',
      category: 'Security & Privacy',
      readTime: '10 min',
      rating: 4.7
    },
    {
      id: 'global-ai-network',
      title: 'Global AI Intelligence Network',
      description: 'Distributed AI network connecting systems worldwide, enabling real-time knowledge sharing and collaborative intelligence.',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600',
      href: '/innovations/global-ai-network',
      category: 'Global Infrastructure',
      readTime: '14 min',
      rating: 4.8
    },
    {
      id: 'predictive-analytics-engine',
      title: 'Advanced Predictive Analytics Engine',
      description: 'AI-powered analytics engine that predicts market trends, customer behavior, and business outcomes with 99.7% accuracy.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      href: '/innovations/predictive-analytics-engine',
      category: 'Business Intelligence',
      readTime: '16 min',
      rating: 4.9
    }
  ];

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
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">🚀 BREAKTHROUGH INNOVATIONS 2025</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent mb-8">
            Revolutionary AI Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover the most advanced AI technologies that are reshaping industries and transforming the future of business. 
            Our cutting-edge innovations are already delivering unprecedented results for Fortune 500 companies worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-600" />
              <span>500+ Enterprise Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span>300% Average ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>99.9% Uptime Guarantee</span>
            </div>
          </div>
        </motion.div>

        {/* Innovations Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {innovations.map((innovation, index) => {
            const IconComponent = innovation.icon;
            return (
              <motion.div
                key={innovation.id}
                variants={itemVariants}
                className="group"
              >
                <Link href={innovation.href}>
                  <article className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group-hover:scale-105">
                    {/* Image/Icon Section */}
                    <div className={`aspect-video bg-gradient-to-br ${innovation.color} flex items-center justify-center relative overflow-hidden`}>
                      <IconComponent className="w-16 h-16 text-white" />
                      {innovation.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          ⭐ FEATURED
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`bg-gradient-to-r ${innovation.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                          {innovation.category}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium text-gray-700">{innovation.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors leading-tight">
                        {innovation.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {innovation.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{innovation.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>Deep Dive</span>
                          </div>
                        </div>
                        <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                          Explore
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already leveraging our revolutionary AI innovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIInnovationShowcase2025;