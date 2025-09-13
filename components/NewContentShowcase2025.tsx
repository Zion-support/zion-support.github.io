'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe,
  Brain,
  Rocket,
  Target,
  CheckCircle,
  Play,
  ExternalLink
} from 'lucide-react';

const NewContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contentSections = {
    'ai-solutions': {
      title: 'Revolutionary AI Solutions',
      subtitle: 'Transform your business with cutting-edge artificial intelligence',
      features: [
        {
          icon: Brain,
          title: 'Advanced Machine Learning',
          description: 'Deploy sophisticated ML models that learn and adapt to your business needs',
          stats: '95% accuracy improvement'
        },
        {
          icon: Zap,
          title: 'Real-time Processing',
          description: 'Process data and make decisions in milliseconds with our optimized AI engines',
          stats: '10x faster processing'
        },
        {
          icon: Shield,
          title: 'Enterprise Security',
          description: 'Bank-grade security with end-to-end encryption and compliance standards',
          stats: '99.9% uptime guarantee'
        }
      ]
    },
    'automation': {
      title: 'Intelligent Automation',
      subtitle: 'Streamline operations with smart automation solutions',
      features: [
        {
          icon: Target,
          title: 'Workflow Automation',
          description: 'Automate complex business processes with intelligent workflow management',
          stats: '80% time reduction'
        },
        {
          icon: Users,
          title: 'Team Collaboration',
          description: 'Enhance team productivity with AI-powered collaboration tools',
          stats: '50% productivity boost'
        },
        {
          icon: TrendingUp,
          title: 'Performance Analytics',
          description: 'Gain insights into your operations with advanced analytics and reporting',
          stats: 'Real-time insights'
        }
      ]
    },
    'cloud-infrastructure': {
      title: 'Cloud Infrastructure',
      subtitle: 'Scalable, secure, and reliable cloud solutions for modern businesses',
      features: [
        {
          icon: Globe,
          title: 'Global Deployment',
          description: 'Deploy your applications across multiple regions for optimal performance',
          stats: '200+ data centers'
        },
        {
          icon: Rocket,
          title: 'Auto-scaling',
          description: 'Automatically scale resources based on demand and traffic patterns',
          stats: '99.99% availability'
        },
        {
          icon: CheckCircle,
          title: 'Compliance Ready',
          description: 'Meet industry standards with built-in compliance and governance',
          stats: 'SOC 2 Type II certified'
        }
      ]
    }
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire infrastructure. The AI solutions they implemented increased our efficiency by 300%.',
      rating: 5,
      company: 'TechCorp'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      content: 'Their automation solutions saved us millions in operational costs. The ROI was evident within the first month.',
      rating: 5,
      company: 'InnovateLabs'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'The cloud infrastructure they built for us is incredibly robust. We\'ve had zero downtime since implementation.',
      rating: 5,
      company: 'DataFlow'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Revolutionary Technology Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the future of business technology with our comprehensive suite of AI, automation, and cloud solutions designed to drive unprecedented growth and efficiency.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(contentSections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
              }`}
            >
              {contentSections[key as keyof typeof contentSections].title}
            </button>
          ))}
        </motion.div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {contentSections[activeTab as keyof typeof contentSections].title}
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {contentSections[activeTab as keyof typeof contentSections].subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contentSections[activeTab as keyof typeof contentSections].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-slate-900">{feature.title}</h4>
                      <p className="text-sm text-blue-600 font-medium">{feature.stats}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
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
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies already using our solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center group">
              <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2025;