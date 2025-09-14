'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp, Award, Globe, Zap, Brain, Cpu, Atom, Shield, Target } from 'lucide-react';
import Link from 'next/link';

const UltimateContentShowcase2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentSections = [
    {
      title: "AI 2025 Ultimate Innovation",
      description: "Revolutionary AI breakthroughs transforming industries worldwide",
      icon: Brain,
      color: "from-purple-600 to-blue-600",
      features: ["Quantum-AI Fusion", "Autonomous Operations", "Neural Interfaces", "Transcendent Intelligence"],
      link: "/ai-2025-ultimate-breakthrough"
    },
    {
      title: "Quantum Computing Revolution",
      description: "Quantum supremacy achieved with error-corrected quantum computers",
      icon: Atom,
      color: "from-blue-600 to-cyan-600",
      features: ["Error-Corrected Quantum", "Quantum Supremacy", "Quantum Internet", "Quantum-AI Fusion"],
      link: "/quantum-computing-2025"
    },
    {
      title: "Advanced Automation Solutions",
      description: "Intelligent process automation delivering unprecedented efficiency",
      icon: Cpu,
      color: "from-green-600 to-emerald-600",
      features: ["Intelligent Automation", "Process Optimization", "Business Intelligence", "ROI Maximization"],
      link: "/advanced-automation-solutions"
    },
    {
      title: "Enterprise Transformation",
      description: "Complete business transformation with cutting-edge technology",
      icon: Shield,
      color: "from-orange-600 to-red-600",
      features: ["Digital Transformation", "Enterprise Security", "Scalable Solutions", "Global Implementation"],
      link: "/enterprise-transformation"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "5,000%", label: "ROI Increase", color: "text-green-500" },
    { icon: Users, value: "10M+", label: "Users Impacted", color: "text-blue-500" },
    { icon: Award, value: "99.9%", label: "Success Rate", color: "text-purple-500" },
    { icon: Globe, value: "150+", label: "Countries", color: "text-orange-500" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Global",
      role: "CTO",
      content: "The AI 2025 innovations have completely transformed our operations. We've seen a 3,000% increase in efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Quantum Dynamics",
      role: "CEO",
      content: "Quantum computing solutions have given us an unprecedented competitive advantage in the market.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Future Systems Inc",
      role: "VP Innovation",
      content: "The automation solutions have revolutionized our business processes. ROI exceeded all expectations.",
      rating: 5
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Ultimate Content Showcase 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
            Revolutionary Technology Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the future of technology with our comprehensive suite of AI, quantum computing, and automation solutions that are transforming industries worldwide.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
            >
              <div className="inline-flex p-4 bg-gray-700 rounded-xl mb-4">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Sections */}
        <div className="mb-16">
          {/* Section Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {contentSections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {section.title}
              </button>
            ))}
          </motion.div>

          {/* Active Section Content */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${contentSections[activeSection].color} mb-6`}>
                  <contentSections[activeSection].icon className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{contentSections[activeSection].title}</h2>
                <p className="text-lg text-gray-300 mb-6">{contentSections[activeSection].description}</p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {contentSections[activeSection].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={contentSections[activeSection].link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-64 h-64 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                  <contentSections[activeSection].icon className="w-24 h-24 text-gray-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              Join thousands of enterprises already leveraging our revolutionary technology solutions for unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UltimateContentShowcase2025;