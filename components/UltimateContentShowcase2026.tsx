'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Rocket, 
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Lightbulb
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2026',
      subtitle: 'Next-Generation Artificial Intelligence',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      features: [
        'Advanced Neural Networks',
        'Quantum-Enhanced Learning',
        'Autonomous Decision Making',
        'Real-time Adaptation'
      ],
      description: 'Experience the future of AI with our revolutionary 2026 technology stack that combines quantum computing, neural interfaces, and advanced machine learning algorithms.',
      stats: { value: '99.9%', label: 'Accuracy Rate' },
      cta: 'Explore AI Solutions'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      subtitle: 'Breakthrough Processing Power',
      icon: Zap,
      color: 'from-cyan-600 to-teal-600',
      features: [
        'Quantum Supremacy',
        'Exponential Speed',
        'Complex Problem Solving',
        'Secure Communications'
      ],
      description: 'Harness the power of quantum computing to solve complex problems that were previously impossible with classical computers.',
      stats: { value: '10,000x', label: 'Faster Processing' },
      cta: 'Discover Quantum'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces',
      subtitle: 'Direct Brain-Computer Connection',
      icon: Globe,
      color: 'from-green-600 to-emerald-600',
      features: [
        'Thought Control',
        'Enhanced Cognition',
        'Seamless Integration',
        'Mind-Machine Sync'
      ],
      description: 'Connect directly with technology through advanced neural interfaces that bridge the gap between human consciousness and digital systems.',
      stats: { value: '100%', label: 'Neural Sync' },
      cta: 'Experience Neural Tech'
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Systems',
      subtitle: 'Self-Managing Technology',
      icon: Shield,
      color: 'from-red-600 to-pink-600',
      features: [
        'Self-Healing Systems',
        'Predictive Maintenance',
        'Autonomous Operations',
        'Intelligent Adaptation'
      ],
      description: 'Deploy autonomous systems that manage themselves, adapt to changing conditions, and optimize performance without human intervention.',
      stats: { value: '24/7', label: 'Autonomous Operation' },
      cta: 'Deploy Autonomy'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, TechCorp',
      content: 'The 2026 technology stack has revolutionized our entire infrastructure. We\'ve seen a 300% increase in efficiency.',
      avatar: 'SC',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'CEO, InnovateLab',
      content: 'This is the future of technology. The neural interfaces have completely transformed how we interact with our systems.',
      avatar: 'MJ',
      rating: 5
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Research Director, QuantumTech',
      content: 'The quantum computing capabilities are beyond anything we\'ve seen before. It\'s truly revolutionary.',
      avatar: 'ER',
      rating: 5
    }
  ];

  const achievements = [
    { icon: Award, label: 'Industry Awards', value: '50+' },
    { icon: Users, label: 'Global Clients', value: '10,000+' },
    { icon: TrendingUp, label: 'Success Rate', value: '99.8%' },
    { icon: Lightbulb, label: 'Innovations', value: '500+' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            Ultimate Technology Showcase 2026
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future is
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {' '}Here
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the most advanced technology solutions of 2026. From quantum computing to neural interfaces, 
            discover innovations that will reshape the future of humanity.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <achievement.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{achievement.value}</div>
              <div className="text-gray-300 text-sm">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contentSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${contentSections[activeTab].color} mr-4`}>
                      <contentSections[activeTab].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{contentSections[activeTab].title}</h3>
                      <p className="text-purple-400">{contentSections[activeTab].subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {contentSections[activeTab].description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {contentSections[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{contentSections[activeTab].stats.value}</div>
                      <div className="text-gray-400 text-sm">{contentSections[activeTab].stats.label}</div>
                    </div>
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center">
                      {contentSections[activeTab].cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className={`w-full h-80 bg-gradient-to-br ${contentSections[activeTab].color} rounded-2xl flex items-center justify-center`}>
                    <contentSections[activeTab].icon className="w-32 h-32 text-white opacity-80" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What Industry Leaders Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already using our 2026 technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;