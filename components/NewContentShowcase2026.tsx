'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Globe, 
  ArrowRight,
  Star,
  CheckCircle,
  Rocket,
  Shield,
  Lightbulb,
  BarChart3,
  Cpu,
  Database,
  Cloud,
  Lock,
  Award,
  Clock
} from 'lucide-react';

const NewContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = [
    {
      id: 'ai-breakthroughs',
      title: 'AI Breakthroughs 2026',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: {
        headline: 'Revolutionary AI Technologies Reshaping Industries',
        description: 'Discover the latest AI breakthroughs that are transforming how businesses operate, from quantum-enhanced machine learning to neural interface technologies.',
        features: [
          'Quantum-Enhanced Machine Learning',
          'Neural Interface Integration',
          'Autonomous Decision Systems',
          'Real-time Predictive Analytics',
          'Advanced Natural Language Processing',
          'Computer Vision Breakthroughs'
        ],
        stats: [
          { label: 'Performance Increase', value: '500%', icon: TrendingUp },
          { label: 'Processing Speed', value: '10x Faster', icon: Zap },
          { label: 'Accuracy Rate', value: '99.8%', icon: Target }
        ]
      }
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Cpu,
      color: 'from-cyan-600 to-teal-600',
      content: {
        headline: 'Quantum Computing Revolution 2026',
        description: 'Explore the quantum computing breakthroughs that are solving previously impossible problems and creating new possibilities in cryptography, optimization, and simulation.',
        features: [
          'Quantum Supremacy Achieved',
          'Quantum Error Correction',
          'Quantum Machine Learning',
          'Quantum Cryptography',
          'Quantum Simulation',
          'Quantum Optimization'
        ],
        stats: [
          { label: 'Quantum Qubits', value: '1000+', icon: Cpu },
          { label: 'Processing Power', value: 'Exponential', icon: Rocket },
          { label: 'Security Level', value: 'Unbreakable', icon: Shield }
        ]
      }
    },
    {
      id: 'automation-solutions',
      title: 'Smart Automation',
      icon: Zap,
      color: 'from-orange-600 to-red-600',
      content: {
        headline: 'Intelligent Automation Solutions',
        description: 'Transform your business operations with cutting-edge automation technologies that learn, adapt, and optimize themselves continuously.',
        features: [
          'Self-Learning Workflows',
          'Intelligent Process Mining',
          'Adaptive Automation',
          'Predictive Maintenance',
          'Smart Resource Allocation',
          'Autonomous Operations'
        ],
        stats: [
          { label: 'Efficiency Gain', value: '300%', icon: BarChart3 },
          { label: 'Cost Reduction', value: '60%', icon: TrendingUp },
          { label: 'Error Reduction', value: '95%', icon: CheckCircle }
        ]
      }
    },
    {
      id: 'future-tech',
      title: 'Future Technologies',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      content: {
        headline: 'Next-Generation Technologies',
        description: 'Get ahead with emerging technologies that will define the next decade, from edge computing to blockchain innovations.',
        features: [
          'Edge AI Computing',
          'Blockchain 3.0',
          '5G/6G Networks',
          'IoT Revolution',
          'AR/VR Integration',
          'Sustainable Tech'
        ],
        stats: [
          { label: 'Market Growth', value: '400%', icon: Globe },
          { label: 'Adoption Rate', value: 'Rapid', icon: Clock },
          { label: 'Innovation Index', value: 'Top 1%', icon: Award }
        ]
      }
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechCorp',
      content: 'The AI solutions transformed our entire operation. We saw a 500% increase in efficiency within the first month.',
      avatar: 'SC',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO, InnovateLab',
      content: 'Quantum computing capabilities opened doors we never knew existed. Revolutionary technology.',
      avatar: 'MR',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director, FutureTech',
      content: 'The automation solutions are incredibly intelligent. They adapt and learn continuously.',
      avatar: 'EW',
      rating: 5
    }
  ];

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            New Content 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the cutting-edge technologies and innovations that are reshaping industries and creating new possibilities for the future.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contentSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <Icon className="w-5 h-5" />
                {section.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {contentSections[activeTab].content.headline}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {contentSections[activeTab].content.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {contentSections[activeTab].content.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {contentSections[activeTab].content.stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${contentSections[activeTab].color} text-white mb-2`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className={`h-96 rounded-2xl bg-gradient-to-br ${contentSections[activeTab].color} p-8 flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      {React.createElement(contentSections[activeTab].icon, { className: "w-12 h-12" })}
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{contentSections[activeTab].title}</h4>
                    <p className="text-white/80">Revolutionary Technology</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Industry Leaders Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of companies already using our revolutionary technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;