'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  Brain,
  Cpu,
  Database,
  Cloud,
  Lock,
  CheckCircle,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-solutions': {
      title: 'AI Solutions 2025',
      description: 'Revolutionary AI technologies transforming businesses',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Advanced AI Automation',
          description: 'Streamline operations with intelligent automation',
          features: ['Process Automation', 'Predictive Analytics', 'Natural Language Processing'],
          stats: '95% Efficiency Increase'
        },
        {
          title: 'Machine Learning Platforms',
          description: 'Build and deploy ML models at scale',
          features: ['AutoML', 'Model Training', 'Real-time Inference'],
          stats: '10x Faster Deployment'
        },
        {
          title: 'AI-Powered Analytics',
          description: 'Unlock insights from your data',
          features: ['Data Visualization', 'Pattern Recognition', 'Trend Analysis'],
          stats: '300% Better Insights'
        }
      ]
    },
    'cloud-infrastructure': {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: 'Multi-Cloud Architecture',
          description: 'Optimize across AWS, Azure, and GCP',
          features: ['Cost Optimization', 'High Availability', 'Disaster Recovery'],
          stats: '40% Cost Reduction'
        },
        {
          title: 'Container Orchestration',
          description: 'Kubernetes and Docker solutions',
          features: ['Auto-scaling', 'Service Mesh', 'CI/CD Integration'],
          stats: '99.9% Uptime'
        },
        {
          title: 'Serverless Computing',
          description: 'Event-driven serverless applications',
          features: ['Function as a Service', 'Event Processing', 'Pay-per-use'],
          stats: '90% Cost Savings'
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions',
      icon: Cpu,
      color: 'from-indigo-600 to-purple-600',
      content: [
        {
          title: 'Quantum Algorithms',
          description: 'Optimize complex problems with quantum computing',
          features: ['Quantum Optimization', 'Cryptography', 'Simulation'],
          stats: '1000x Speed Improvement'
        },
        {
          title: 'Quantum Machine Learning',
          description: 'ML algorithms enhanced by quantum computing',
          features: ['Quantum Neural Networks', 'Quantum SVM', 'Quantum Clustering'],
          stats: 'Exponential Speedup'
        },
        {
          title: 'Quantum Security',
          description: 'Unbreakable quantum encryption',
          features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random'],
          stats: '100% Secure'
        }
      ]
    },
    'neural-interfaces': {
      title: 'Neural Interfaces',
      description: 'Brain-computer interface technologies',
      icon: Database,
      color: 'from-pink-600 to-rose-600',
      content: [
        {
          title: 'BCI Development',
          description: 'Direct brain-computer communication',
          features: ['Neural Signal Processing', 'Real-time Translation', 'Motor Control'],
          stats: '95% Accuracy'
        },
        {
          title: 'Cognitive Enhancement',
          description: 'Augment human cognitive abilities',
          features: ['Memory Enhancement', 'Focus Improvement', 'Learning Acceleration'],
          stats: '200% Performance Boost'
        },
        {
          title: 'Medical Applications',
          description: 'Restore function through neural interfaces',
          features: ['Prosthetic Control', 'Speech Restoration', 'Mobility Recovery'],
          stats: 'Life-Changing Results'
        }
      ]
    }
  };

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our AI capabilities. The results exceeded our expectations.',
      rating: 5,
      company: 'TechCorp'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO, InnovateLabs',
      content: 'Their quantum computing solutions gave us a competitive edge we never had before.',
      rating: 5,
      company: 'InnovateLabs'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director, NeuroTech',
      content: 'The neural interface technology is revolutionary. It\'s changing lives every day.',
      rating: 5,
      company: 'NeuroTech'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Cost Savings', value: '$50M+', icon: TrendingUp },
    { label: 'Global Reach', value: '50+ Countries', icon: Globe }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-pink-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            New Content 2025 - Ultimate Showcase
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Revolutionary Technology
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Showcase 2025
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the most advanced AI, quantum computing, and neural interface technologies 
            that are reshaping the future of business and human potential.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <section.icon className="w-5 h-5 mr-2" />
              {section.title}
            </button>
          ))}
        </motion.div>

        {/* Content Section */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {contentSections[activeTab].title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {contentSections[activeTab].description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contentSections[activeTab].content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${contentSections[activeTab].color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <contentSections[activeTab].icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                
                <div className="space-y-2 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{item.stats}</div>
                  <Link
                    href={`/services/${activeTab}`}
                    className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-purple-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-12 border border-white/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our revolutionary technologies 
            to achieve unprecedented growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateShowcase;