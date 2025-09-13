"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Target,
  BarChart3
} from 'lucide-react';

const BusinessSolutionsShowcase2025: React.FC = () => {
  const solutions = [
    {
      id: 'enterprise-automation',
      title: 'Enterprise Automation Suite',
      description: 'Complete automation platform that streamlines operations, reduces costs by 60%, and increases productivity by 300%.',
      icon: Building2,
      color: 'from-blue-500 to-indigo-600',
      href: '/solutions/enterprise-automation',
      category: 'Automation',
      benefits: ['60% Cost Reduction', '300% Productivity', '99.9% Uptime'],
      price: 'Custom Pricing',
      rating: 4.9,
      clients: '500+',
      featured: true
    },
    {
      id: 'ai-analytics-platform',
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics platform that provides real-time insights, predictive modeling, and automated reporting.',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-600',
      href: '/solutions/ai-analytics-platform',
      category: 'Analytics',
      benefits: ['Real-time Insights', 'Predictive Modeling', 'Auto Reporting'],
      price: 'Starting at $5K/month',
      rating: 4.8,
      clients: '300+'
    },
    {
      id: 'customer-intelligence',
      title: 'Customer Intelligence Hub',
      description: 'Comprehensive customer data platform that personalizes experiences and increases conversion rates by 250%.',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
      href: '/solutions/customer-intelligence',
      category: 'Customer Experience',
      benefits: ['250% Conversion', '360° View', 'AI Personalization'],
      price: 'Starting at $3K/month',
      rating: 4.9,
      clients: '400+'
    },
    {
      id: 'security-framework',
      title: 'Advanced Security Framework',
      description: 'Enterprise-grade security solution protecting against cyber threats with 99.99% threat detection accuracy.',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      href: '/solutions/security-framework',
      category: 'Security',
      benefits: ['99.99% Detection', 'Zero Breaches', '24/7 Monitoring'],
      price: 'Starting at $2K/month',
      rating: 4.9,
      clients: '600+'
    },
    {
      id: 'global-deployment',
      title: 'Global Deployment Platform',
      description: 'Scalable cloud infrastructure that enables worldwide deployment with sub-100ms latency across all regions.',
      icon: Globe,
      color: 'from-cyan-500 to-blue-600',
      href: '/solutions/global-deployment',
      category: 'Infrastructure',
      benefits: ['Sub-100ms Latency', 'Global Scale', 'Auto Scaling'],
      price: 'Pay-as-you-scale',
      rating: 4.8,
      clients: '200+'
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization Suite',
      description: 'AI-driven optimization that improves application performance by 500% and reduces infrastructure costs by 40%.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      href: '/solutions/performance-optimization',
      category: 'Performance',
      benefits: ['500% Performance', '40% Cost Savings', 'Auto Tuning'],
      price: 'Starting at $1K/month',
      rating: 4.7,
      clients: '350+'
    }
  ];

  const stats = [
    { label: 'Enterprise Clients', value: '2,500+', icon: Building2 },
    { label: 'Average ROI', value: '340%', icon: TrendingUp },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Shield },
    { label: 'Countries Served', value: '50+', icon: Globe }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full px-6 py-3 mb-8">
            <Target className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">💼 BUSINESS SOLUTIONS 2025</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8">
            Enterprise-Grade Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your business with our comprehensive suite of AI-powered solutions. 
            Trusted by Fortune 500 companies worldwide to drive innovation, efficiency, and growth.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Solutions Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                className="group"
              >
                <Link href={solution.href}>
                  <article className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group-hover:scale-105 h-full">
                    {/* Header */}
                    <div className={`aspect-video bg-gradient-to-br ${solution.color} flex items-center justify-center relative overflow-hidden`}>
                      <IconComponent className="w-16 h-16 text-white" />
                      {solution.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          ⭐ FEATURED
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-300 fill-current" />
                          <span className="text-sm font-semibold text-white">{solution.rating}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`bg-gradient-to-r ${solution.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                          {solution.category}
                        </span>
                        <span className="text-sm text-gray-500">{solution.clients} clients</span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                        {solution.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                        {solution.description}
                      </p>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                        <div className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-gray-900">{solution.price}</div>
                          <div className="flex items-center gap-1 text-yellow-500">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium text-gray-700">{solution.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                          Learn More
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already leveraging our enterprise solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Custom Quote
              </Link>
              <Link 
                href="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSolutionsShowcase2025;