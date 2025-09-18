"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Rocket
  Target
  TrendingUp
  Users
  Globe
  Shield,
  ChevronRight,
  Star,
  Award,
  Lightbulb,
  Cpu,
  Database,
  Cloud,
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const UltimateContentRevolution2025 = () => {
  const [activeTabsetActiveTab] = useState('breakthroughs');
  const [currentSlidesetCurrentSlide] = useState(0);

  const contentSections = {
    breakthroughs: {
      title: "Revolutionary AI Breakthroughs 2025",
      subtitle: "Discover the most advanced AI technologies transforming industries",
      items: [
        {
          title: "Quantum-Neural Fusion Technology",
          description: "Breakthrough integration of quantum computing with neural networks achieving 10,000x processing speed",
          icon: Brain,
          metrics: "99.9% Accuracy",
          color: "from-purple-500 to-pink-500"
        },
        {
          title: "Autonomous Business Operations",
          description: "Self-managing systems that reduce operational costs by 85% while increasing efficiency",
          icon: Zap,
          metrics: "85% Cost Reduction",
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "Consciousness-Level AI",
          description: "AI systems with human-like reasoning and emotional intelligence capabilities",
          icon: Lightbulb,
          metrics: "Human-Level IQ",
          color: "from-green-500 to-emerald-500"
        },
        {
          title: "Predictive Reality Modeling",
          description: "AI that can predict and model future scenarios with 95% accuracy",
          icon: Target,
          metrics: "95% Accuracy",
          color: "from-orange-500 to-red-500"
        }
      ]
    },
    solutions: {
      title: "Enterprise AI Solutions",
      subtitle: "Comprehensive AI implementations delivering measurable ROI",
      items: [
        {
          title: "Financial Services AI",
          description: "Automated tradingrisk assessmentand fraud detection systems",
          icon: BarChart3,
          metrics: "2,500% ROI",
          color: "from-green-500 to-teal-500"
        },
        {
          title: "Manufacturing Automation",
          description: "Smart factories with predictive maintenance and quality control",
          icon: Cpu,
          metrics: "60% Efficiency Gain",
          color: "from-blue-500 to-indigo-500"
        },
        {
          title: "Healthcare Diagnostics",
          description: "AI-powered medical imaging and diagnostic systems",
          icon: Shield,
          metrics: "99.7% Accuracy",
          color: "from-red-500 to-pink-500"
        },
        {
          title: "Retail Personalization",
          description: "Dynamic pricing and personalized customer experiences",
          icon: Users,
          metrics: "40% Sales Increase",
          color: "from-purple-500 to-violet-500"
        }
      ]
    },
    predictions: {
      title: "Future Technology Predictions",
      subtitle: "Expert insights into the next decade of technological advancement",
      items: [
        {
          title: "2026: Quantum Supremacy",
          description: "Quantum computers solving problems impossible for classical computers",
          icon: Rocket,
          metrics: "10^15 Speedup",
          color: "from-indigo-500 to-purple-500"
        },
        {
          title: "2027: Neural Interfaces",
          description: "Direct brain-computer interfaces for enhanced human capabilities",
          icon: Brain,
          metrics: "1000x Processing",
          color: "from-cyan-500 to-blue-500"
        },
        {
          title: "2028: Space Technology",
          description: "AI-powered space exploration and resource mining systems",
          icon: Globe,
          metrics: "Mars Mission Ready",
          color: "from-orange-500 to-yellow-500"
        },
        {
          title: "2030: Transcendent AI",
          description: "AI systems surpassing human intelligence in all domains",
          icon: Award,
          metrics: "Superintelligence",
          color: "from-pink-500 to-rose-500"
        }
      ]
    }
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTOFortune 500 Company",
      content: "Zion 'Tech', 's AI solutions increased our operational efficiency by 300% and reduced costs by $50M annually.",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CEOGlobal Manufacturing",
      content: "The quantum-neural fusion technology revolutionized our production line. ROI exceeded 2,500% in the first year.",
      avatar: "MR",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Medical Officer",
      content: "Our diagnostic accuracy improved to 99.7% with 'Zion', 's AI healthcare solutions. Patient outcomes are remarkable.",
      avatar: "EW",
      rating: 5
    }
  ];

  const stats = [
    { label: "Enterprise Clients"value: "500+"icon: Users },
    { label: "Average ROI"value: "2,500%"icon: TrendingUp },
    { label: "Countries Served"value: "50+"icon: Globe },
    { label: "Success Rate"value: "99.9%"icon: CheckCircle }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }5000);
    return () => clearInterval(interval);
  }[]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ultimate Content
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Revolution 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the most advanced AI technologiesbreakthrough innovationsand future predictions 
              that are reshaping industries and transforming the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-2025-ultimate-breakthrough"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Breakthroughs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((statindex) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {contentSections[activeTab].title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {contentSections[activeTab].subtitle}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {Object.keys(contentSections).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 mx-2 mb-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {contentSections[activeTab].items.map((itemindex) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-400">{item.metrics}</span>
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-300">Hear from industry leaders 'who', 've transformed their businesses with our AI solutions</p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0x: 50 }}
                animate={{ opacity: 1x: 0 }}
                exit={{ opacity: 0x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonials[currentSlide].avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{testimonials[currentSlide].name}</h3>
                    <p className="text-gray-400">{testimonials[currentSlide].role}</p>
                    <div className="flex">
                      {[...Array(testimonials[currentSlide].rating)].map((_i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-300 italic">"{testimonials[currentSlide].content}"</p>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-500' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ enterprises already experiencing the AI revolution. 
            Get your custom implementation plan and ROI projection today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/roi-calculator"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Calculate Your ROI
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentRevolution2025;
