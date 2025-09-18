"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Cpu
  Database
  Cloud
  Shield
  Zap
  Target
  TrendingUp,
  Users,
  Globe,
  Rocket,
  Star,
  ChevronRight,
  Play,
  CheckCircle,
  ArrowRight,
  Settings,
  BarChart3,
  MessageSquare,
  Code,
  Palette,
  Search,
  Lock,
  RefreshCw,
  Monitor,
  Smartphone,
  Server,
  Network,
  Layers,
  PieChart,
  FileText,
  Mail,
  Phone,
  Calendar,
  Award,
  DollarSign,
  Clock,
  Download,
  Upload,
  Share2,
  Heart,
  ThumbsUp,
  MessageCircle,
  Eye,
  Bookmark
} from 'lucide-react';

const ComprehensiveServiceShowcase2025_2026 = () => {
  const [activeServicesetActiveService] = useState('ai-consulting');
  const [isVisiblesetIsVisible] = useState(false);
  const [hoveredServicesetHoveredService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const services = [
    {
      id: 'ai-consulting',
      title: 'AI Strategy Consulting',
      subtitle: 'Transform your business with AI',
      description: 'Comprehensive AI strategy developmentimplementation planningand digital transformation consulting.',
      icon: Brain,
      color: 'from-blue-600 to-purple-600',
      features: [
        'AI Readiness Assessment',
        'Custom AI Strategy Development',
        'Implementation Roadmap',
        'ROI Analysis & Projections',
        'Change Management Support',
        'Ongoing AI Advisory'
      ],
      pricing: {
        starter: '$5,000/month',
        professional: '$15,000/month',
        enterprise: 'Custom'
      },
      benefits: [
        '300% average ROI increase',
        '6-month implementation timeline',
        '24/7 expert support',
        'Custom AI solutions'
      ],
      caseStudies: [
        {
          company: 'TechCorp Inc.',
          result: '450% ROI increase',
          description: 'Implemented AI-driven customer service automation'
        },
        {
          company: 'FinanceFlow Ltd.',
          result: '60% cost reduction',
          description: 'Automated financial analysis and reporting'
        }
      ]
    },
    {
      id: 'ai-development',
      title: 'AI Development Services',
      subtitle: 'Custom AI solutions built for you',
      description: 'End-to-end AI application developmentfrom concept to deploymentailored to your specific needs.',
      icon: Code,
      color: 'from-emerald-600 to-cyan-600',
      features: [
        'Custom AI Model Development',
        'Machine Learning Pipeline',
        'API Integration & Development',
        'Real-time AI Applications',
        'Cloud & Edge Deployment',
        'Performance Optimization'
      ],
      pricing: {
        starter: '$10,000/project',
        professional: '$50,000/project',
        enterprise: 'Custom'
      },
      benefits: [
        '100% custom solutions',
        'Scalable architecture',
        'Industry best practices',
        'Comprehensive testing'
      ],
      caseStudies: [
        {
          company: 'RetailMax',
          result: '80% efficiency gain',
          description: 'Built intelligent inventory management system'
        },
        {
          company: 'HealthTech Solutions',
          result: '95% accuracy rate',
          description: 'Developed medical diagnosis AI assistant'
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions',
      subtitle: 'Next-generation computational power',
      description: 'Harness the power of quantum computing for complex problem-solving and optimization challenges.',
      icon: Cpu,
      color: 'from-purple-600 to-pink-600',
      features: [
        'Quantum Algorithm Development',
        'Quantum Machine Learning',
        'Optimization Problems',
        'Cryptography Solutions',
        'Quantum Simulation',
        'Hybrid Classical-Quantum Systems'
      ],
      pricing: {
        starter: '$25,000/month',
        professional: '$75,000/month',
        enterprise: 'Custom'
      },
      benefits: [
        'Exponential speed improvements',
        'Breakthrough problem solving',
        'Future-proof technology',
        'Competitive advantage'
      ],
      caseStudies: [
        {
          company: 'PharmaCorp',
          result: '1000x faster drug discovery',
          description: 'Quantum-accelerated molecular simulation'
        },
        {
          company: 'LogisticsPro',
          result: '40% cost reduction',
          description: 'Quantum-optimized supply chain routing'
        }
      ]
    },
    {
      id: 'automation',
      title: 'Intelligent Automation',
      subtitle: 'Automate everythingoptimize everything',
      description: 'Complete business process automation using AIRPAand intelligent workflows.',
      icon: Settings,
      color: 'from-orange-600 to-red-600',
      features: [
        'Process Discovery & Analysis',
        'RPA Implementation',
        'AI-Powered Workflows',
        'Document Processing',
        'Customer Service Automation',
        'Back-office Optimization'
      ],
      pricing: {
        starter: '$8,000/month',
        professional: '$25,000/month',
        enterprise: 'Custom'
      },
      benefits: [
        '90% process efficiency',
        '24/7 automated operations',
        'Error-free execution',
        'Rapid deployment'
      ],
      caseStudies: [
        {
          company: 'BankingFirst',
          result: '85% time savings',
          description: 'Automated loan processing workflow'
        },
        {
          company: 'E-commerce Giant',
          result: '70% cost reduction',
          description: 'Intelligent customer support automation'
        }
      ]
    },
    {
      id: 'data-intelligence',
      title: 'Data Intelligence Platform',
      subtitle: 'Turn data into competitive advantage',
      description: 'Advanced data analyticsbusiness intelligenceand predictive insights platform.',
      icon: BarChart3,
      color: 'from-indigo-600 to-blue-600',
      features: [
        'Real-time Data Processing',
        'Predictive Analytics',
        'Business Intelligence Dashboards',
        'Data Visualization',
        'Machine Learning Models',
        'Data Governance & Security'
      ],
      pricing: {
        starter: '$12,000/month',
        professional: '$35,000/month',
        enterprise: 'Custom'
      },
      benefits: [
        'Real-time insights',
        'Predictive accuracy',
        'Self-service analytics',
        'Enterprise-grade security'
      ],
      caseStudies: [
        {
          company: 'ManufacturingCo',
          result: '50% better forecasting',
          description: 'Predictive maintenance and demand planning'
        },
        {
          company: 'RetailChain',
          result: '35% sales increase',
          description: 'Customer behavior analytics and personalization'
        }
      ]
    },
    {
      id: 'ai-security',
      title: 'AI Security & Compliance',
      subtitle: 'Secure AI for enterprise',
      description: 'Comprehensive AI securityprivacy protectionand regulatory compliance solutions.',
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      features: [
        'AI Model Security',
        'Privacy-Preserving AI',
        'Regulatory Compliance',
        'Threat Detection & Response',
        'Data Protection',
        'Audit & Monitoring'
      ],
      pricing: {
        starter: '$15,000/month',
        professional: '$40,000/month',
        enterprise: 'Custom'
      },
      benefits: [
        'Zero-trust AI architecture',
        'GDPR/CCPA compliance',
        'Continuous monitoring',
        'Expert security team'
      ],
      caseStudies: [
        {
          company: 'HealthcarePlus',
          result: '100% compliance',
          description: 'HIPAA-compliant AI medical imaging'
        },
        {
          company: 'Financial Services',
          result: 'Zero security incidents',
          description: 'Banking-grade AI security implementation'
        }
      ]
    }
  ];

  const currentService = services.find(service => service.id === activeService) || services[0];

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Services 2025-2026
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Comprehensive AI solutions designed to transform your business and accelerate growth in the digital age.
        </p>
      </motion.div>

      {/* Service Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8delay: 0.2 }}
        className="container mx-auto px-4 mb-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((serviceindex) => {
            const Icon = service.icon;
            return (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6delay: 0.4 + index * 0.1 }}
                onClick={() => setActiveService(service.id)}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 text-white'
                    : 'bg-slate-800/50 border-white/20 text-gray-300 hover:border-purple-400/50 hover:text-white'
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeService === service.id
                      ? 'bg-white/20'
                      : 'bg-slate-700/50'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-sm">{service.title}</div>
                    <div className="text-xs opacity-80">{service.subtitle}</div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Service Details */}
      <motion.div
        key={activeService}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                {currentService.title}
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                {currentService.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService.features.map((featureindex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0x: -20 }}
                    animate={{ opacity: 1x: 0 }}
                    transition={{ duration: 0.6delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-white/20"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                {currentService.benefits.map((benefitindex) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0x: -20 }}
                    animate={{ opacity: 1x: 0 }}
                    transition={{ duration: 0.6delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="space-y-8">
            {/* Pricing */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Pricing Plans</h3>
              <div className="space-y-4">
                {Object.entries(currentService.pricing).map(([planprice]) => (
                  <div key={plan} className="flex justify-between items-center p-4 bg-slate-700/50 rounded-xl">
                    <span className="text-gray-300 capitalize font-medium">{plan}</span>
                    <span className="text-white font-bold text-lg">{price}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full mt-6 bg-gradient-to-r ${currentService.color} text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2`}>
                <ArrowRight className="w-5 h-5" />
                Get Started
              </button>
            </div>

            {/* Case Studies */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Success Stories</h3>
              <div className="space-y-6">
                {currentService.caseStudies.map((studyindex) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6delay: index * 0.2 }}
                    className="p-4 bg-slate-700/50 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white">{study.company}</span>
                      <span className="text-green-400 font-bold">{study.result}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{study.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8delay: 0.6 }}
        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-t border-white/20 py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI solutions to revolutionize their operations and achieve unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold flex items-center gap-3 hover:shadow-2xl transition-all duration-300"
            >
              <Rocket className="w-6 h-6" />
              Start Your AI Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold flex items-center gap-3 hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <Users className="w-6 h-6" />
              Schedule Consultation
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComprehensiveServiceShowcase2025_2026;