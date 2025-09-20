"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Cpu
  Database
  Shield
  Zap
  Globe,
  ArrowRight,
  Play,
  Download,
  Star,
  Users,
  TrendingUp,
  Award,
  ChevronRight,
  ExternalLink,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  BarChart3,
  Lightbulb,
  Rocket,
  Settings
} from 'lucide-react';

const ComprehensiveServicesShowcase2025 = () => {
  const [activeServicesetActiveService] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  const services = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: [
        'Real-time Data Processing',
        'Predictive Analytics',
        'Custom Dashboard Creation',
        'Automated Reporting',
        'Machine Learning Models'
      ],
      benefits: [
        '300% faster decision making',
        '95% accuracy in predictions',
        '50% reduction in manual analysis',
        'ROI within 3 months'
      ],
      pricing: 'Starting at $299/month',
      href: '/ai-business-intelligence',
      stats: { users: '15,000+'rating: 4.9projects: '2,500+' }
    },
    {
      id: 2,
      title: 'Enterprise Automation Suite',
      description: 'Streamline operations with intelligent automation that adapts to your business needs.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: [
        'Workflow Automation',
        'Process Optimization',
        'API Integration',
        'Custom Triggers',
        'Performance Monitoring'
      ],
      benefits: [
        '60% cost reduction',
        '80% time savings',
        '99.9% uptime guarantee',
        '24/7 monitoring'
      ],
      pricing: 'Starting at $199/month',
      href: '/enterprise-automation',
      stats: { users: '25,000+'rating: 4.8projects: '5,000+' }
    },
    {
      id: 3,
      title: 'Quantum Computing Solutions',
      description: 'Harness the power of quantum computing for complex problem-solving and optimization.',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      features: [
        'Quantum Algorithm Development',
        'Secure Quantum Communication',
        'Optimization Problems',
        'Cryptographic Solutions',
        'Research & Development'
      ],
      benefits: [
        '1000x faster processing',
        'Unbreakable encryption',
        'Future-proof technology',
        'Competitive advantage'
      ],
      pricing: 'Starting at $999/month',
      href: '/quantum-computing-solutions',
      stats: { users: '2,000+'rating: 4.9projects: '500+' }
    },
    {
      id: 4,
      title: 'Cybersecurity & Compliance',
      description: 'Protect your business with comprehensive security solutions and compliance management.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      features: [
        'Zero-Trust Architecture',
        'Threat Detection & Response',
        'Compliance Management',
        'Security Auditing',
        'Incident Response'
      ],
      benefits: [
        '99.9% threat detection rate',
        'Zero security breaches',
        'Full compliance coverage',
        '24/7 security monitoring'
      ],
      pricing: 'Starting at $149/month',
      href: '/cybersecurity-solutions',
      stats: { users: '30,000+'rating: 4.9projects: '8,000+' }
    },
    {
      id: 5,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalablesecureand efficient cloud solutions with automated deployment pipelines.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      features: [
        'Multi-Cloud Architecture',
        'Container Orchestration',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Monitoring & Logging'
      ],
      benefits: [
        '99.99% uptime',
        'Auto-scaling capabilities',
        '50% faster deployments',
        'Reduced infrastructure costs'
      ],
      pricing: 'Starting at $399/month',
      href: '/cloud-infrastructure',
      stats: { users: '20,000+'rating: 4.8projects: '3,000+' }
    },
    {
      id: 6,
      title: 'Data Management & Analytics',
      description: 'Comprehensive data solutions from collection to visualization and insights.',
      icon: <Database className="w-8 h-8" />,
      color: 'from-teal-500 to-blue-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      features: [
        'Data Warehousing',
        'ETL/ELT Processes',
        'Real-time Analytics',
        'Data Visualization',
        'Data Governance'
      ],
      benefits: [
        'Unified data platform',
        'Real-time insights',
        'Data quality assurance',
        'Regulatory compliance'
      ],
      pricing: 'Starting at $249/month',
      href: '/data-management',
      stats: { users: '18,000+'rating: 4.7projects: '2,200+' }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }6000);
    return () => clearInterval(interval);
  }[]);

  const currentService = services[activeService];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Services Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Discover our full range of cutting-edge technology solutions designed to 
            transform your business and drive unprecedented growth.
          </motion.p>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15,000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </motion.div>
        </div>

        {/* Service Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {services.map((serviceindex) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-300 ${
                activeService === index
                  ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                  : `bg-white text-gray-700 hover:bg-gray-100 ${service.borderColor} border-2`
              }`}
            >
              {service.icon}
              <span className="font-semibold">{service.title}</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${
                activeService === index ? 'rotate-90' : 'group-hover:translate-x-1'
              }`} />
            </button>
          ))}
        </motion.div>

        {/* Featured Service */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${currentService.color} text-white`}>
                    {currentService.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{currentService.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-600">{currentService.stats.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{currentService.stats.users}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  {currentService.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentService.features.map((featureindex) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Proven Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentService.benefits.map((benefitindex) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentService.href}
                    className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${currentService.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className={`bg-gradient-to-br ${currentService.color} p-8 lg:p-12 flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 mx-auto">
                    {currentService.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                  <p className="text-white/90 mb-6">
                    Experience the power of our solutions with live demonstrations
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>15-minute setup</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      <span>{currentService.pricing}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Target className="w-5 h-5" />
                      <span>{currentService.stats.projects} projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((serviceindex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{service.stats.rating}</div>
                    <div className="text-sm opacity-90">Rating</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {service.features.slice(03).map((featureidx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{service.stats.users}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{service.pricing}</div>
                  </div>
                </div>
                
                <Link
                  href={service.href}
                  className={`group/btn inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our solutions to drive innovation
              efficiencyand growth in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
