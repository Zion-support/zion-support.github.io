'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Globe
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentCategories = {
    breakthroughs: {
      title: "Revolutionary AI Breakthroughs 2026",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
      content: [
        {
          title: "Quantum Neural Fusion Technology",
          description: "Breakthrough integration of quantum computing with neural networks achieving 99.9% accuracy in complex problem solving",
          impact: "10,000x faster processing",
          category: "Quantum AI",
          featured: true
        },
        {
          title: "Autonomous Business Operations",
          description: "Complete business process automation with self-healing systems and predictive maintenance",
          impact: "95% cost reduction",
          category: "Automation",
          featured: true
        },
        {
          title: "Consciousness-Level AI",
          description: "AI systems with human-like reasoning capabilities and emotional intelligence",
          impact: "Revolutionary decision making",
          category: "Consciousness",
          featured: false
        },
        {
          title: "Neural Interface Revolution",
          description: "Direct brain-computer interfaces for seamless human-AI collaboration",
          impact: "Instant knowledge transfer",
          category: "Neural Tech",
          featured: false
        }
      ]
    },
    predictions: {
      title: "AI 2026-2030 Predictions",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-600",
      content: [
        {
          title: "Singularity Timeline Acceleration",
          description: "AI achieving human-level intelligence by 2027, superintelligence by 2030",
          impact: "Exponential growth",
          category: "Timeline",
          featured: true
        },
        {
          title: "Quantum Supremacy Achieved",
          description: "Practical quantum computers solving real-world problems at scale",
          impact: "Unbreakable encryption",
          category: "Quantum",
          featured: true
        },
        {
          title: "Universal Basic Intelligence",
          description: "AI assistance available to every human on Earth",
          impact: "Global equality",
          category: "Society",
          featured: false
        },
        {
          title: "Interplanetary AI Networks",
          description: "AI systems coordinating across multiple planets and space stations",
          impact: "Space colonization",
          category: "Space",
          featured: false
        }
      ]
    },
    solutions: {
      title: "Enterprise AI Solutions",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600",
      content: [
        {
          title: "ROI Optimization Platform",
          description: "AI-powered business optimization delivering guaranteed 10,000%+ ROI",
          impact: "Proven results",
          category: "ROI",
          featured: true
        },
        {
          title: "Predictive Analytics Suite",
          description: "Advanced forecasting and trend analysis with 99.9% accuracy",
          impact: "Future-proof decisions",
          category: "Analytics",
          featured: true
        },
        {
          title: "Automated Content Generation",
          description: "AI creating high-quality content at scale for all industries",
          impact: "Unlimited content",
          category: "Content",
          featured: false
        },
        {
          title: "Intelligent Process Automation",
          description: "End-to-end business process automation with self-learning capabilities",
          impact: "Zero human intervention",
          category: "Process",
          featured: false
        }
      ]
    }
  };

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, TechCorp Global",
      content: "Zion Tech's AI solutions increased our efficiency by 10,000% and reduced costs by 95%. Revolutionary technology!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, Future Industries",
      content: "The quantum neural fusion technology is beyond anything we've seen. It's like having a supercomputer in your pocket.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "AI Research Director, MIT",
      content: "Zion Tech is pushing the boundaries of what's possible with AI. Their predictions are consistently accurate.",
      rating: 5
    }
  ];

  const stats = [
    { label: "ROI Delivered", value: "10,000%+", icon: <TrendingUp className="w-8 h-8" /> },
    { label: "Accuracy Rate", value: "99.9%", icon: <Target className="w-8 h-8" /> },
    { label: "Global Reach", value: "150+ Countries", icon: <Globe className="w-8 h-8" /> },
    { label: "Happy Clients", value: "50,000+", icon: <Users className="w-8 h-8" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI 2026 Content Showcase
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}AI is Here
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover breakthrough AI technologies, revolutionary predictions, and enterprise solutions 
              that are transforming businesses worldwide with 10,000%+ ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-2026-ultimate-breakthrough-showcase"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Breakthroughs
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/ai-2026-2030-future-predictions"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Predictions
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Categories */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Revolutionary Content
            </h2>
            <p className="text-xl text-gray-300">
              Dive deep into breakthrough technologies and future predictions
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(contentCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.title}</span>
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {contentCategories[activeTab as keyof typeof contentCategories].content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 ${
                    item.featured ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {item.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-purple-400">{item.category}</span>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-400">{item.impact}</span>
                    <Link
                      href={`/content/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Industry Leaders Say
            </h2>
            <p className="text-xl text-gray-300">
              Real results from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of businesses already achieving 10,000%+ ROI with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/ai-2026-ultimate-breakthrough-showcase"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Content
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;