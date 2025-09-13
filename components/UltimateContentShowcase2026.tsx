'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Users, 
  Target, 
  Award,
  ChevronRight,
  Play,
  Star,
  ArrowRight,
  Sparkles,
  Rocket,
  Shield,
  Globe
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    breakthroughs: {
      title: "Revolutionary AI Breakthroughs 2026",
      description: "Discover the most advanced AI technologies transforming industries worldwide",
      icon: Brain,
      color: "from-purple-600 to-blue-600",
      items: [
        {
          title: "Quantum-Neural Fusion AI",
          description: "Breakthrough technology combining quantum computing with neural networks for unprecedented processing power",
          impact: "10,000x faster processing",
          roi: "50,000% ROI",
          category: "Quantum AI",
          featured: true
        },
        {
          title: "Consciousness-Level AI Systems",
          description: "AI systems achieving human-level consciousness and decision-making capabilities",
          impact: "99.9% accuracy",
          roi: "25,000% ROI",
          category: "Consciousness AI",
          featured: true
        },
        {
          title: "Autonomous Business Operations",
          description: "Complete business process automation with intelligent decision-making systems",
          impact: "100% automation",
          roi: "15,000% ROI",
          category: "Business AI",
          featured: false
        },
        {
          title: "Neural Interface Technology",
          description: "Direct brain-computer interfaces for seamless human-AI collaboration",
          impact: "Real-time processing",
          roi: "30,000% ROI",
          category: "Neural Tech",
          featured: false
        }
      ]
    },
    caseStudies: {
      title: "Success Stories & Case Studies",
      description: "Real-world implementations delivering extraordinary results",
      icon: Award,
      color: "from-green-600 to-emerald-600",
      items: [
        {
          title: "Fortune 500 Manufacturing Revolution",
          description: "Complete transformation of manufacturing operations using AI automation",
          impact: "500% efficiency increase",
          roi: "50,000% ROI",
          category: "Manufacturing",
          featured: true
        },
        {
          title: "Global Financial Services Breakthrough",
          description: "Revolutionary AI implementation in financial services achieving unprecedented accuracy",
          impact: "99.99% accuracy",
          roi: "75,000% ROI",
          category: "Finance",
          featured: true
        },
        {
          title: "Healthcare Diagnostic Revolution",
          description: "AI-powered diagnostic systems achieving superhuman accuracy in medical diagnosis",
          impact: "95% faster diagnosis",
          roi: "40,000% ROI",
          category: "Healthcare",
          featured: false
        },
        {
          title: "Retail Personalization Mastery",
          description: "Advanced AI personalization systems transforming customer experience",
          impact: "300% engagement increase",
          roi: "20,000% ROI",
          category: "Retail",
          featured: false
        }
      ]
    },
    tools: {
      title: "Advanced AI Tools & Solutions",
      description: "Cutting-edge tools and platforms for enterprise implementation",
      icon: Zap,
      color: "from-orange-600 to-red-600",
      items: [
        {
          title: "AI Implementation Platform",
          description: "Complete platform for implementing AI solutions across any industry",
          impact: "90% faster deployment",
          roi: "35,000% ROI",
          category: "Platform",
          featured: true
        },
        {
          title: "Quantum Computing Solutions",
          description: "Quantum-powered AI solutions for complex problem solving",
          impact: "Exponential speedup",
          roi: "60,000% ROI",
          category: "Quantum",
          featured: true
        },
        {
          title: "Neural Network Architectures",
          description: "Advanced neural network designs for specific business applications",
          impact: "10x performance",
          roi: "25,000% ROI",
          category: "Neural Networks",
          featured: false
        },
        {
          title: "Automation Workflow Engine",
          description: "Intelligent workflow automation for complex business processes",
          impact: "100% automation",
          roi: "18,000% ROI",
          category: "Automation",
          featured: false
        }
      ]
    }
  };

  const tabs = [
    { id: 'breakthroughs', label: 'AI Breakthroughs', icon: Brain },
    { id: 'caseStudies', label: 'Success Stories', icon: Award },
    { id: 'tools', label: 'AI Tools', icon: Zap }
  ];

  const currentSection = contentSections[activeTab];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Ultimate Content Showcase 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Revolutionary AI
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Content Revolution
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the most advanced AI technologies, success stories, and tools that are transforming 
            industries and delivering unprecedented ROI across the globe.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <currentSection.icon className="w-4 h-4" />
                {currentSection.title}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {currentSection.title}
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {currentSection.description}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {currentSection.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative group cursor-pointer ${
                    item.featured ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${currentSection.color} p-8 h-full transition-all duration-300 ${
                    hoveredCard === index ? 'scale-105 shadow-2xl' : 'shadow-xl'
                  }`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
                    
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium">
                          {item.category}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{item.impact}</div>
                          <div className="text-sm text-white/80">Impact</div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-white/90 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                          {item.roi}
                        </div>
                        
                        <div className="flex items-center gap-2 text-white group-hover:text-yellow-300 transition-colors">
                          <span className="text-sm font-medium">Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already achieving extraordinary results with our 
              revolutionary AI solutions and tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                <Rocket className="w-5 h-5" />
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                View All Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;