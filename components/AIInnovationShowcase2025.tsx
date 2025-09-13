'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Rocket, 
  Star,
  ArrowRight,
  Play,
  BookOpen,
  Users,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

const AIInnovationShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');
  const [currentSlide, setCurrentSlide] = useState(0);

  const innovations = [
    {
      id: 'quantum-ai',
      title: 'Quantum-AI Fusion Technology',
      description: 'Revolutionary fusion of quantum computing and artificial intelligence, delivering unprecedented processing power and problem-solving capabilities.',
      icon: Brain,
      category: 'breakthroughs',
      impact: '10,000x faster processing',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces that enable seamless interaction between human consciousness and AI systems.',
      icon: Zap,
      category: 'breakthroughs',
      impact: 'Mind-controlled computing',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Business Systems',
      description: 'Self-managing business operations powered by advanced AI that can make decisions, optimize processes, and drive growth.',
      icon: Rocket,
      category: 'automation',
      impact: '95% operational efficiency',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics Engine',
      description: 'Advanced AI that can predict market trends, customer behavior, and business outcomes with 99.7% accuracy.',
      icon: TrendingUp,
      category: 'analytics',
      impact: '99.7% prediction accuracy',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-security',
      title: 'AI-Powered Security Suite',
      description: 'Next-generation cybersecurity powered by AI that can detect and prevent threats in real-time.',
      icon: Shield,
      category: 'security',
      impact: 'Zero-day threat prevention',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'global-ai',
      title: 'Global AI Network',
      description: 'Worldwide AI infrastructure that connects businesses, governments, and individuals in a unified intelligence network.',
      icon: Globe,
      category: 'infrastructure',
      impact: 'Global connectivity',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const categories = [
    { id: 'breakthroughs', label: 'Breakthroughs', icon: Lightbulb },
    { id: 'automation', label: 'Automation', icon: Zap },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'infrastructure', label: 'Infrastructure', icon: Globe }
  ];

  const filteredInnovations = innovations.filter(innovation => 
    activeTab === 'all' || innovation.category === activeTab
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredInnovations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredInnovations.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4 mr-2" />
            AI Innovation Showcase 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Revolutionary AI
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Breakthroughs</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the cutting-edge AI technologies that are reshaping industries and transforming the future of business.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Innovation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {filteredInnovations.map((innovation, index) => {
              const Icon = innovation.icon;
              return (
                <motion.div
                  key={innovation.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${innovation.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {innovation.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {innovation.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {innovation.impact}
                    </span>
                    <Link
                      href={`/ai-innovations/${innovation.id}`}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already leveraging these revolutionary AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              href="/ai-solutions"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIInnovationShowcase2025;