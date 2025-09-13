'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Database, 
  Cloud, 
  Lock,
  TrendingUp,
  Users,
  Target,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  BarChart3,
  Settings,
  Smartphone,
  Laptop,
  Server
} from 'lucide-react';

const RevolutionaryTechShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2025',
      subtitle: 'Next-Generation Artificial Intelligence',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      features: [
        'Advanced Neural Networks',
        'Real-time Decision Making',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Autonomous Systems'
      ],
      stats: {
        efficiency: '95%',
        accuracy: '99.7%',
        speed: '10x Faster',
        cost: '60% Less'
      }
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      subtitle: 'Breakthrough Processing Power',
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      features: [
        'Quantum Supremacy',
        'Exponential Speed',
        'Complex Problem Solving',
        'Cryptographic Security',
        'Optimization Algorithms',
        'Scientific Simulations'
      ],
      stats: {
        efficiency: '1000x',
        accuracy: '99.9%',
        speed: '100x Faster',
        cost: '80% Less'
      }
    },
    {
      id: 'blockchain',
      title: 'Blockchain Innovation',
      subtitle: 'Decentralized Future',
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      features: [
        'Smart Contracts',
        'Decentralized Finance',
        'NFT Technology',
        'Supply Chain Tracking',
        'Digital Identity',
        'Cross-chain Interoperability'
      ],
      stats: {
        efficiency: '90%',
        accuracy: '100%',
        speed: '5x Faster',
        cost: '70% Less'
      }
    },
    {
      id: 'iot-edge',
      title: 'IoT & Edge Computing',
      subtitle: 'Connected World',
      icon: Globe,
      color: 'from-orange-600 to-red-600',
      features: [
        'Real-time Processing',
        'Low Latency',
        'Distributed Computing',
        'Sensor Networks',
        'Edge AI',
        '5G Integration'
      ],
      stats: {
        efficiency: '85%',
        accuracy: '98%',
        speed: '20x Faster',
        cost: '50% Less'
      }
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Exponential Growth',
      description: 'Transform your business with cutting-edge technology that delivers measurable results'
    },
    {
      icon: Users,
      title: 'Enhanced User Experience',
      description: 'Create seamless, intuitive experiences that keep users engaged and satisfied'
    },
    {
      icon: Target,
      title: 'Precision Solutions',
      description: 'Targeted solutions that address specific business challenges with surgical precision'
    },
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description: 'Get up and running quickly with our streamlined implementation process'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'The AI solutions transformed our operations completely. We saw 300% improvement in efficiency.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      content: 'Quantum computing capabilities opened doors we never knew existed. Game-changing technology.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, FutureTech',
      content: 'The blockchain implementation secured our data and reduced costs by 70%. Incredible results.',
      rating: 5
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
            <Star className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-medium">Revolutionary Technology 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future is
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Now</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the most advanced technology solutions that are reshaping industries and creating unprecedented opportunities for growth and innovation.
          </p>
        </motion.div>

        {/* Technology Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <tech.icon className="w-5 h-5 inline mr-2" />
                {tech.title}
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${technologies[activeTab].color} mb-6`}>
                    <technologies[activeTab].icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {technologies[activeTab].title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    {technologies[activeTab].subtitle}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {Object.entries(technologies[activeTab].stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">Key Features</h4>
                  <div className="space-y-4">
                    {technologies[activeTab].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Technology?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 border border-purple-500/30"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our revolutionary technology to achieve unprecedented growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center">
              Start Your Journey
              <Rocket className="w-5 h-5 ml-2" />
            </button>
            <button className="bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center justify-center">
              Schedule Demo
              <Settings className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;