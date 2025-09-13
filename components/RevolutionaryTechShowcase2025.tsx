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
  Lock, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award
} from 'lucide-react';

const RevolutionaryTechShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 0,
      name: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700",
      description: "Advanced AI algorithms and machine learning models that power intelligent automation and decision-making systems.",
      features: [
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Deep Learning Models",
        "Real-time Processing"
      ],
      stats: { value: "95%", label: "Accuracy Rate" }
    },
    {
      id: 1,
      name: "Quantum Computing",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-purple-700",
      description: "Revolutionary quantum computing solutions that solve complex problems exponentially faster than classical computers.",
      features: [
        "Quantum Algorithms",
        "Quantum Cryptography",
        "Optimization Problems",
        "Quantum Simulation",
        "Quantum Machine Learning"
      ],
      stats: { value: "1000x", label: "Faster Processing" }
    },
    {
      id: 2,
      name: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-green-700",
      description: "Advanced cybersecurity solutions protecting enterprises from evolving threats with AI-powered threat detection.",
      features: [
        "AI Threat Detection",
        "Zero Trust Architecture",
        "Advanced Encryption",
        "Real-time Monitoring",
        "Automated Response"
      ],
      stats: { value: "99.9%", label: "Threat Detection" }
    },
    {
      id: 3,
      name: "Cloud Infrastructure",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-orange-700",
      description: "Scalable cloud infrastructure solutions that provide high availability, performance, and global reach.",
      features: [
        "Multi-Cloud Strategy",
        "Edge Computing",
        "Auto-scaling",
        "Global CDN",
        "Disaster Recovery"
      ],
      stats: { value: "99.99%", label: "Uptime SLA" }
    },
    {
      id: 4,
      name: "Blockchain & Web3",
      icon: <Lock className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-700",
      description: "Blockchain and Web3 technologies enabling decentralized applications and secure digital transactions.",
      features: [
        "Smart Contracts",
        "DeFi Solutions",
        "NFT Platforms",
        "Decentralized Identity",
        "Cross-chain Interoperability"
      ],
      stats: { value: "100%", label: "Transparency" }
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, QuantumTech",
      content: "The quantum computing implementation revolutionized our research capabilities. We're solving problems that were previously impossible.",
      rating: 5,
      company: "QuantumTech"
    },
    {
      name: "Michael Rodriguez",
      role: "Security Director, GlobalCorp",
      content: "Their AI-powered cybersecurity solutions detected threats we never knew existed. Our security posture improved dramatically.",
      rating: 5,
      company: "GlobalCorp"
    },
    {
      name: "Emily Watson",
      role: "VP Engineering, CloudFirst",
      content: "The cloud infrastructure solutions scaled seamlessly with our growth. We've never experienced such reliability.",
      rating: 5,
      company: "CloudFirst"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our cutting-edge technologies that are reshaping industries and driving the future of digital transformation.
          </p>
        </motion.div>

        {/* Technology Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {tech.icon}
                <span>{tech.name}</span>
              </button>
            ))}
          </div>

          {/* Technology Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${technologies[activeTab].color} p-8 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  {technologies[activeTab].icon}
                  <h3 className="text-3xl font-bold">{technologies[activeTab].name}</h3>
                </div>
                <p className="text-lg opacity-90 mb-6">{technologies[activeTab].description}</p>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold">{technologies[activeTab].stats.value}</div>
                    <div className="text-sm opacity-80">{technologies[activeTab].stats.label}</div>
                  </div>
                  <button className="ml-auto flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full font-semibold hover:bg-white/30 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {technologies[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: <Users className="w-8 h-8 text-blue-600" />, value: "10,000+", label: "Active Users" },
            { icon: <Award className="w-8 h-8 text-purple-600" />, value: "50+", label: "Industry Awards" },
            { icon: <Globe className="w-8 h-8 text-green-600" />, value: "150+", label: "Countries" },
            { icon: <TrendingUp className="w-8 h-8 text-orange-600" />, value: "400%", label: "Growth Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Industry Leaders Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of enterprises leveraging our revolutionary technology stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
                Contact Our Experts
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;