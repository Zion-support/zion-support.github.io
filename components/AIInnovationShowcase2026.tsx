"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Cpu
  Zap
  Eye
  MessageSquare
  BarChart3
  Shield
  Globe,
  ChevronRight,
  Play,
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  Target,
  Rocket
} from 'lucide-react';

const AIInnovationShowcase2026 = () => {
  const [activeInnovationsetActiveInnovation] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const innovations = [
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Technology',
      icon: Brain,
      color: 'from-purple-600 to-indigo-600',
      description: 'Direct brain-computer interfaces that enable seamless human-AI collaboration',
      features: [
        'Real-time thought-to-action translation',
        'Enhanced cognitive processing',
        'Intuitive AI interaction',
        'Memory augmentation systems',
        'Emotional intelligence integration',
        'Predictive decision support'
      ],
      impact: {
        efficiency: '300%',
        accuracy: '99.7%',
        speed: '10x faster'
      },
      applications: [', 'Healthcare', 'Education', 'Gaming', 'Professional Training']
    },
    {
      id: 'quantum-ai',
      title: 'Quantum-Enhanced AI',
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      description: 'Quantum computing power combined with artificial intelligence for unprecedented processing capabilities',
      features: [
        'Quantum machine learning algorithms',
        'Exponential data processing',
        'Complex optimization solutions',
        'Cryptographic security',
        'Parallel universe simulations',
        'Advanced pattern recognition'
      ],
      impact: {
        processing: '1000x faster',
        complexity: 'Unlimited',
        security: 'Unbreakable'
      },
      applications: ['Drug 'Discovery', 'Climate 'Modeling', 'Financial 'Analysis', 'Space Exploration']
    },
    {
      id: 'emotional-ai',
      title: 'Emotional Intelligence AI',
      icon: MessageSquare,
      color: 'from-pink-600 to-rose-600',
      description: 'AI systems that understandprocessand respond to human emotions with unprecedented accuracy',
      features: [
        'Real-time emotion detection',
        'Contextual response generation',
        'Empathy modeling',
        'Mood-based recommendations',
        'Therapeutic conversation support',
        'Cultural sensitivity adaptation'
      ],
      impact: {
        satisfaction: '95%',
        engagement: '400%',
        retention: '80%'
      },
      applications: ['Customer 'Service', 'Mental 'Health', 'Education'Entertainment']
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics 2.0',
      icon: BarChart3,
      color: 'from-green-600 to-emerald-600',
      description: 'Next-generation predictive systems that forecast trends with near-perfect accuracy',
      features: [
        'Multi-dimensional trend analysis',
        'Real-time market predictions',
        'Risk assessment algorithms',
        'Behavioral pattern recognition',
        'Scenario modeling',
        'Automated decision recommendations'
      ],
      impact: {
        accuracy: '98.5%',
        roi: '500%',
        risk: '90% reduction'
      },
      applications: [', 'Finance', 'Marketing'Supply 'Chain', 'Healthcare']
    }
  ];

  const currentInnovation = innovations[activeInnovation];

  const successStories = [
    {
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Diagnostic accuracy and speed',
      solution: 'Neural Interface Technology',
      results: '300% faster diagnosis99.7% accuracy',
      logo: '🏥'
    },
    {
      company: 'Quantum Finance',
      industry: 'Financial Services',
      challenge: 'Complex risk modeling',
      solution: 'Quantum-Enhanced AI',
      results: '1000x faster calculations90% risk reduction',
      logo: '💰'
    },
    {
      company: 'EduTech Global',
      industry: 'Education',
      challenge: 'Personalized learning',
      solution: 'Emotional Intelligence AI',
      results: '95% student satisfaction400% engagement',
      logo: '🎓'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366F1" fill-opacity="0.1"%3E%3Ccircle cx="20" cy="20" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.31],
            opacity: [0.20.50.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.21.2],
            opacity: [0.30.60.3],
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Brain className="w-4 h-4" />
            AI Innovation Showcase 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary AI
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Innovations
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge AI technologies that are reshaping industries and 
            creating unprecedented opportunities for innovation and growth.
          </p>
        </motion.div>

        {/* Innovation Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {innovations.map((innovationindex) => {
            const Icon = innovation.icon;
            return (
              <motion.button
                key={innovation.id}
                onClick={() => setActiveInnovation(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  activeInnovation === index
                    ? `bg-gradient-to-br ${innovation.color} text-white shadow-xl`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{innovation.title}</h3>
                <p className="text-sm opacity-90">{innovation.description}</p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Detailed Innovation Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeInnovation}
            initial={{ opacity: 0x: 50 }}
            animate={{ opacity: 1x: 0 }}
            exit={{ opacity: 0x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            {/* Innovation Details */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6delay: 0.1 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${currentInnovation.color} rounded-2xl flex items-center justify-center`}>
                    <currentInnovation.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {currentInnovation.title}
                    </h2>
                    <p className="text-gray-400">
                      Revolutionary AI Technology
                    </p>
                  </div>
                </div>
                <p className="text-xl text-gray-300 mb-8">
                  {currentInnovation.description}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              >
                {currentInnovation.features.map((featureindex) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* Impact Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6delay: 0.3 }}
                className="grid grid-cols-3 gap-6 mb-8"
              >
                {Object.entries(currentInnovation.impact).map(([keyvalue]index) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g' $1').trim()}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Applications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6delay: 0.4 }}
                className="mb-8"
              >
                <h4 className="text-lg font-semibold text-white mb-4">Key Applications:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentInnovation.applications.map((appindex) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  See in Action
                </button>
                <button className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>

            {/* Visual Representation */}
            <motion.div
              initial={{ opacity: 0scale: 0.8 }}
              animate={{ opacity: 1scale: 1 }}
              transition={{ duration: 0.8delay: 0.3 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${currentInnovation.color} p-8 rounded-3xl shadow-2xl`}>
                <div className="text-center text-white">
                  <currentInnovation.icon className="w-32 h-32 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    {currentInnovation.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    {currentInnovation.description}
                  </p>
                  
                  {/* Interactive Elements */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(currentInnovation.impact).map(([keyvalue]index) => (
                      <div key={key} className="bg-white/20 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">{value}</div>
                        <div className="text-sm opacity-80 capitalize">
                          {key.replace(/([A-Z])/g' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                animate={{
                  y: [0-10],
                  rotate: [0180360],
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
                  scale: [1.21],
                  opacity: [0.710.7],
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

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Real-World Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((storyindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-4xl mb-4">{story.logo}</div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {story.company}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {story.industry}
                </p>
                <div className="mb-4">
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Challenge:</strong> {story.challenge}
                  </p>
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Solution:</strong> {story.solution}
                  </p>
                  <p className="text-sm text-green-400 font-semibold">
                    <strong>Results:</strong> {story.results}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Implement AI Innovation?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the AI revolution and transform your business with cutting-edge 
              artificial intelligence solutions tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Start Your AI Journey
                <Rocket className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Schedule Demo
                <Users className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2026;