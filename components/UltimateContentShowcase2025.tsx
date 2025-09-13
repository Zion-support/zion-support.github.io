'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Shield, 
  Globe, 
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  ChevronRight,
  Play,
  Star,
  CheckCircle
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-solutions': {
      title: 'Revolutionary AI Solutions',
      subtitle: 'Transform Your Business with Cutting-Edge AI Technology',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      features: [
        {
          title: 'Advanced Machine Learning',
          description: 'Deploy state-of-the-art ML models that learn and adapt in real-time',
          icon: Brain,
          stats: '99.7% Accuracy'
        },
        {
          title: 'Natural Language Processing',
          description: 'Understand and process human language with unprecedented precision',
          icon: MessageSquare,
          stats: '50+ Languages'
        },
        {
          title: 'Computer Vision',
          description: 'Analyze and interpret visual data with human-level accuracy',
          icon: Eye,
          stats: 'Real-time Processing'
        },
        {
          title: 'Predictive Analytics',
          description: 'Forecast trends and behaviors with advanced predictive models',
          icon: TrendingUp,
          stats: '95% Prediction Accuracy'
        }
      ]
    },
    'automation': {
      title: 'Intelligent Automation',
      subtitle: 'Streamline Operations with Smart Automation Solutions',
      icon: Zap,
      color: 'from-green-600 to-teal-600',
      features: [
        {
          title: 'Workflow Automation',
          description: 'Automate complex business processes with intelligent workflows',
          icon: Workflow,
          stats: '80% Time Savings'
        },
        {
          title: 'Document Processing',
          description: 'Extract and process information from any document format',
          icon: FileText,
          stats: '1000+ Documents/Hour'
        },
        {
          title: 'Customer Service Bots',
          description: 'Provide 24/7 intelligent customer support with AI chatbots',
          icon: MessageCircle,
          stats: '99% Uptime'
        },
        {
          title: 'Data Integration',
          description: 'Seamlessly connect and synchronize data across all systems',
          icon: Database,
          stats: 'Real-time Sync'
        }
      ]
    },
    'cloud-infrastructure': {
      title: 'Cloud Infrastructure',
      subtitle: 'Scalable, Secure, and High-Performance Cloud Solutions',
      icon: Cloud,
      color: 'from-blue-600 to-indigo-600',
      features: [
        {
          title: 'Multi-Cloud Strategy',
          description: 'Optimize performance and reduce costs with multi-cloud architecture',
          icon: Globe,
          stats: '99.99% Uptime'
        },
        {
          title: 'Auto-Scaling',
          description: 'Automatically scale resources based on demand and usage patterns',
          icon: TrendingUp,
          stats: '50% Cost Reduction'
        },
        {
          title: 'Security & Compliance',
          description: 'Enterprise-grade security with full compliance and monitoring',
          icon: Shield,
          stats: 'SOC 2 Certified'
        },
        {
          title: 'Disaster Recovery',
          description: 'Comprehensive backup and recovery solutions for business continuity',
          icon: ShieldCheck,
          stats: 'RTO < 1 Hour'
        }
      ]
    },
    'micro-saas': {
      title: 'Micro SaaS Solutions',
      subtitle: 'Powerful, Focused Applications for Specific Business Needs',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      features: [
        {
          title: 'Custom Applications',
          description: 'Build tailored solutions that perfectly fit your business requirements',
          icon: Code,
          stats: '100% Customizable'
        },
        {
          title: 'API Integration',
          description: 'Connect with existing systems through robust API integrations',
          icon: Link,
          stats: '500+ APIs'
        },
        {
          title: 'User Management',
          description: 'Comprehensive user authentication, authorization, and management',
          icon: Users,
          stats: 'Unlimited Users'
        },
        {
          title: 'Analytics Dashboard',
          description: 'Real-time insights and analytics for data-driven decisions',
          icon: BarChart3,
          stats: 'Real-time Data'
        }
      ]
    }
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire infrastructure. The AI solutions increased our efficiency by 300%.',
      rating: 5,
      company: 'TechCorp'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      content: 'Their automation solutions saved us 40 hours per week. The ROI was evident within the first month.',
      rating: 5,
      company: 'InnovateLabs'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'The cloud infrastructure they built is rock-solid. We\'ve had zero downtime in 18 months.',
      rating: 5,
      company: 'DataFlow'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99.8%', icon: Star },
    { label: 'Years Experience', value: '10+', icon: Award },
    { label: 'Team Members', value: '50+', icon: Users }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary Technology Solutions
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the future of technology with our comprehensive suite of AI-powered solutions, 
            intelligent automation, and cutting-edge cloud infrastructure designed to transform your business.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(contentSections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 shadow-sm'
                }`}
              >
                <section.icon className="w-5 h-5 mr-2" />
                {section.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
            >
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${contentSections[activeTab].color} text-white mb-6`}>
                  <contentSections[activeTab].icon className="w-10 h-10" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {contentSections[activeTab].title}
                </h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {contentSections[activeTab].subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {contentSections[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${contentSections[activeTab].color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 mb-3">
                          {feature.description}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                          {feature.stats}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-xl text-gray-600">
              Join hundreds of satisfied customers who have transformed their businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 mr-2" />
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;