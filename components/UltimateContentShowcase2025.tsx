'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Rocket, 
  Shield, 
  TrendingUp, 
  Users, 
  Star,
  ArrowRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    breakthroughs: {
      title: "Revolutionary AI Breakthroughs 2025",
      subtitle: "Discover the latest innovations transforming industries worldwide",
      items: [
        {
          title: "Quantum-Neural Fusion Architecture",
          description: "Breakthrough quantum computing integration with neural networks achieving 10,000x processing speed improvements",
          icon: Brain,
          category: "Quantum AI",
          impact: "10,000x Faster",
          featured: true
        },
        {
          title: "Autonomous Decision Intelligence",
          description: "Self-evolving AI systems that make complex business decisions with 99.9% accuracy",
          icon: Target,
          category: "Autonomous Systems",
          impact: "99.9% Accuracy"
        },
        {
          title: "Predictive Business Analytics",
          description: "Advanced forecasting models predicting market trends 6 months in advance",
          icon: TrendingUp,
          category: "Analytics",
          impact: "6 Month Forecast"
        },
        {
          title: "Neural Interface Revolution",
          description: "Direct brain-computer interfaces enabling seamless human-AI collaboration",
          icon: Users,
          category: "Neural Tech",
          impact: "Direct Interface"
        }
      ]
    },
    solutions: {
      title: "Enterprise AI Solutions",
      subtitle: "Comprehensive automation and intelligence platforms",
      items: [
        {
          title: "Intelligent Process Automation",
          description: "End-to-end business process automation with self-optimizing workflows",
          icon: Zap,
          category: "Automation",
          impact: "95% Efficiency"
        },
        {
          title: "Quantum Security Protocols",
          description: "Unbreakable encryption using quantum key distribution",
          icon: Shield,
          category: "Security",
          impact: "Unbreakable"
        },
        {
          title: "Global AI Infrastructure",
          description: "Worldwide distributed AI computing network with edge optimization",
          icon: Globe,
          category: "Infrastructure",
          impact: "Global Scale"
        },
        {
          title: "Space Technology Integration",
          description: "AI-powered space exploration and satellite management systems",
          icon: Rocket,
          category: "Space Tech",
          impact: "Space Ready"
        }
      ]
    },
    caseStudies: {
      title: "Success Stories & ROI",
      subtitle: "Real-world implementations delivering extraordinary results",
      items: [
        {
          title: "Fortune 500 Transformation",
          description: "Complete digital transformation achieving 2,500% ROI in 6 months",
          icon: Star,
          category: "Enterprise",
          impact: "2,500% ROI"
        },
        {
          title: "Manufacturing Revolution",
          description: "Smart factory implementation reducing costs by 60% and increasing output by 300%",
          icon: CheckCircle,
          category: "Manufacturing",
          impact: "300% Output"
        },
        {
          title: "Healthcare Breakthrough",
          description: "AI-powered diagnostics improving patient outcomes by 85%",
          icon: Lightbulb,
          category: "Healthcare",
          impact: "85% Improvement"
        },
        {
          title: "Financial Services Innovation",
          description: "Quantum-secured trading platform processing 1M transactions/second",
          icon: Sparkles,
          category: "FinTech",
          impact: "1M TPS"
        }
      ]
    }
  };

  const currentContent = contentSections[activeTab as keyof typeof contentSections];

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Ultimate Content Showcase 2025
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {section.title}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {currentContent.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  item.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl ${
                      item.featured 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  {item.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-500">Impact:</span>
                    <span className="text-lg font-bold text-green-600">
                      {item.impact}
                    </span>
                  </div>
                  <Link
                    href={`/ai-2025-${item.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already achieving extraordinary results with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Your Journey
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UltimateContentShowcase2025;