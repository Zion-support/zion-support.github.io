'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
<<<<<<< HEAD
  Target, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Play,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Lightbulb
=======
  Shield, 
  Globe, 
  TrendingUp, 
  Users, 
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  BarChart3
>>>>>>> d60651499e30a371e45492ac1e477fd36b2b3b6c
} from 'lucide-react';

const UltimateContentRevolution2026 = () => {
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
      color: 'from-purple-600 to-pink-600',
<<<<<<< HEAD
      content: {
        headline: 'Revolutionary AI Technologies That Will Transform Your Business',
        description: 'Discover the latest AI innovations that are reshaping industries and creating unprecedented opportunities for growth.',
        features: [
          'Neural Interface Integration',
          'Quantum-Enhanced Machine Learning',
          'Autonomous Decision Making Systems',
          'Predictive Analytics 2.0',
          'Emotional Intelligence AI',
          'Real-time Language Processing'
        ],
        stats: [
          { label: 'ROI Increase', value: '340%', icon: TrendingUp },
          { label: 'Efficiency Gain', value: '85%', icon: Zap },
          { label: 'Cost Reduction', value: '60%', icon: Target }
        ]
      }
=======
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces enabling thought-controlled applications',
          impact: '500% productivity increase',
          status: 'Live Now'
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Quantum computing meets artificial intelligence for unprecedented processing power',
          impact: '1000x faster computations',
          status: 'Beta Testing'
        },
        {
          title: 'Consciousness AI',
          description: 'AI systems with self-awareness and emotional intelligence',
          impact: 'Revolutionary user experience',
          status: 'Research Phase'
        }
      ]
>>>>>>> d60651499e30a371e45492ac1e477fd36b2b3b6c
    },
    {
      id: 'automation-mastery',
      title: 'Automation Mastery',
<<<<<<< HEAD
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      content: {
        headline: 'Complete Business Automation Solutions',
        description: 'Transform your operations with our comprehensive automation platform that handles everything from data processing to customer service.',
        features: [
          'End-to-End Process Automation',
          'Intelligent Workflow Management',
          'Real-time Performance Monitoring',
          'Predictive Maintenance Systems',
          'Smart Resource Allocation',
          'Automated Quality Assurance'
        ],
        stats: [
          { label: 'Time Saved', value: '70%', icon: Clock },
          { label: 'Error Reduction', value: '95%', icon: Shield },
          { label: 'Productivity Boost', value: '200%', icon: TrendingUp }
        ]
      }
    },
    {
      id: 'future-tech',
      title: 'Future Technologies',
      icon: Sparkles,
      color: 'from-green-600 to-emerald-600',
      content: {
        headline: 'Next-Generation Technology Solutions',
        description: 'Stay ahead of the curve with cutting-edge technologies that will define the next decade of digital transformation.',
        features: [
          'Quantum Computing Integration',
          'Extended Reality (XR) Solutions',
          'Blockchain-Powered Security',
          'Edge Computing Networks',
          'IoT Ecosystem Management',
          'Sustainable Tech Solutions'
        ],
        stats: [
          { label: 'Innovation Score', value: '98%', icon: Award },
          { label: 'Future-Proof', value: '100%', icon: Globe },
          { label: 'Sustainability', value: '85%', icon: Lightbulb }
        ]
      }
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechForward Inc.',
      content: 'The AI solutions transformed our entire operation. We saw a 340% increase in ROI within just 6 months.',
      rating: 5,
      company: 'Fortune 500'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO, Innovation Labs',
      content: 'Their automation platform saved us 70% of our operational time while improving accuracy by 95%.',
      rating: 5,
      company: 'Tech Unicorn'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director, Future Systems',
      content: 'The quantum computing integration opened up possibilities we never thought possible.',
      rating: 5,
      company: 'Research Institute'
    }
  ];

  const currentContent = contentSections[activeTab];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Revolutionary Content 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ultimate Content
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Revolution
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology with our comprehensive showcase of AI breakthroughs, 
            automation mastery, and next-generation solutions that will transform your business.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contentSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
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
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <h2 className="text-4xl font-bold text-white mb-4">
                  {currentContent.content.headline}
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {currentContent.content.description}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              >
                {currentContent.content.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-3 gap-6 mb-8"
              >
                {currentContent.content.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">
                        <Icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
                <button className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>

            {/* Visual Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${currentContent.color} p-8 rounded-3xl shadow-2xl`}>
                <div className="text-center text-white">
                  <currentContent.icon className="w-24 h-24 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    {currentContent.title}
                  </h3>
                  <p className="text-lg opacity-90">
                    Experience the power of next-generation technology
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Star className="w-4 h-4 text-yellow-800" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-purple-400 mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies that have already revolutionized 
              their operations with our cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Start Your Journey
                <Rocket className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Schedule Consultation
                <Users className="w-5 h-5" />
=======
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Complete business process automation with zero human intervention',
          impact: '90% cost reduction',
          status: 'Deployed'
        },
        {
          title: 'Self-Healing Systems',
          description: 'AI systems that automatically detect and fix issues',
          impact: '99.9% uptime guarantee',
          status: 'Live Now'
        },
        {
          title: 'Predictive Maintenance',
          description: 'AI predicts and prevents system failures before they occur',
          impact: '75% fewer outages',
          status: 'Live Now'
        }
      ]
    },
    {
      id: 'security-revolution',
      title: 'Security Revolution',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      content: [
        {
          title: 'Quantum Encryption',
          description: 'Unbreakable encryption using quantum mechanics principles',
          impact: '100% security guarantee',
          status: 'Live Now'
        },
        {
          title: 'AI Threat Detection',
          description: 'Advanced AI systems that detect threats in real-time',
          impact: '99.99% threat detection rate',
          status: 'Live Now'
        },
        {
          title: 'Zero-Trust Architecture',
          description: 'Complete security model with continuous verification',
          impact: 'Zero breach guarantee',
          status: 'Deployed'
        }
      ]
    },
    {
      id: 'global-impact',
      title: 'Global Impact',
      icon: Globe,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Climate AI Solutions',
          description: 'AI-powered solutions for climate change mitigation',
          impact: '50% carbon footprint reduction',
          status: 'Pilot Program'
        },
        {
          title: 'Healthcare Revolution',
          description: 'AI diagnostics and treatment recommendations',
          impact: '95% accuracy in diagnosis',
          status: 'FDA Approved'
        },
        {
          title: 'Education Transformation',
          description: 'Personalized AI tutoring for every student',
          impact: '300% learning improvement',
          status: 'Global Rollout'
        }
      ]
    }
  ];

  const stats = [
    { label: 'Active Users', value: '2.5M+', icon: Users },
    { label: 'ROI Achieved', value: '500%', icon: TrendingUp },
    { label: 'Countries Served', value: '150+', icon: Globe },
    { label: 'Awards Won', value: '25+', icon: Award }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-200 font-medium">Ultimate Content Revolution 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              The Future is
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Here Now
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the most advanced AI and automation solutions that are transforming industries worldwide. 
            Join the revolution that's already delivering unprecedented results.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4">
                <stat.icon className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contentSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <section.icon className="w-5 h-5" />
                  <span>{section.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {contentSections[activeTab].content.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Live Now' ? 'bg-green-500/20 text-green-400' :
                        item.status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-400' :
                        item.status === 'Deployed' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center text-purple-400 font-medium">
                      <Target className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.impact}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join the Revolution?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for the future to arrive. Start implementing these breakthrough technologies today 
              and see immediate results in your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                <div className="flex items-center">
                  <span>Start Your Transformation</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  <span>Learn More</span>
                </div>
>>>>>>> d60651499e30a371e45492ac1e477fd36b2b3b6c
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentRevolution2026;