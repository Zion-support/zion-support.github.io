import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD:pages.disabled/enterprise-it.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  Shield, Cpu, Rocket, Zap, Globe, Star, Users,
  Target, Microscope, Database, Lock, Cloud, 
  BarChart3, Settings, Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck, ZapIcon, GlobeIcon, 
  StarIcon, TrendingUpIcon, UsersIcon, CheckCircleIcon, 
  ArrowRightIcon, CpuIcon, DollarSign, Phone, 
  ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Infinity, Target as TargetIcon, 
  Award, MessageCircle, ChevronRight, Building
=======
  Shield, Cloud, Server, ShieldCheck, Settings, Database, 
  Zap, Building, ArrowRight, Star, CheckCircle, 
  Lock, Network, Cpu, BarChart3
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
} from 'lucide-react';

const enterpriseServices = [
  {
<<<<<<< HEAD
    id: 'quantum-cloud-infrastructure-pro',
    name: 'Quantum Cloud Infrastructure Pro',
    description: 'Quantum-enhanced cloud computing platform with advanced security and scalability',
    features: [
      'Quantum-Enhanced Security',
      'Auto-Scaling Infrastructure',
      'Multi-Cloud Management',
      'Real-time Monitoring',
      'Disaster Recovery'
    ],
    pricing: '$30,000/month',
=======
    name: 'Quantum Cloud Infrastructure Pro',
    href: '/quantum-cloud-infrastructure-pro',
    description: 'Quantum-enhanced cloud computing with advanced security and performance optimization',
    features: ['Quantum Processing', 'Cloud Security', 'Performance Optimization', 'Scalable Infrastructure'],
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    isNew: true,
    badge: 'New',
    color: 'from-blue-500 to-cyan-600'
  },
  {
<<<<<<< HEAD
    id: 'edge-computing-orchestrator-pro',
    name: 'Edge Computing Orchestrator Pro',
    description: 'Advanced edge computing platform for distributed processing and real-time analytics',
    features: [
      'Edge Node Management',
      'Real-time Analytics',
      'Distributed Processing',
      'Low-Latency Operations',
      'IoT Integration'
    ],
    pricing: '$25,000/month',
=======
    name: 'Edge Computing Orchestrator Pro',
    href: '/edge-computing-orchestrator-pro',
    description: 'Advanced edge computing platform for distributed processing and real-time analytics',
    features: ['Edge Processing', 'Real-time Analytics', 'Distributed Computing', 'Low Latency'],
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    isHot: true,
    badge: 'Hot',
    color: 'from-green-500 to-emerald-600'
  },
  {
<<<<<<< HEAD
    id: 'zero-trust-security-platform',
    name: 'Zero Trust Security Platform',
    description: 'Comprehensive zero trust security framework for enterprise protection',
    features: [
      'Identity Verification',
      'Continuous Monitoring',
      'Threat Detection',
      'Access Control',
      'Security Analytics'
    ],
    pricing: '$22,000/month',
    isNew: true,
    badge: 'New',
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 'ai-powered-devops-platform',
    name: 'AI-Powered DevOps Platform',
    description: 'Intelligent DevOps automation with AI-driven optimization and deployment',
    features: [
      'AI-Driven Automation',
      'Intelligent Testing',
      'Deployment Optimization',
      'Performance Monitoring',
      'Continuous Integration'
    ],
    pricing: '$28,000/month',
=======
    name: 'Zero Trust Security Platform',
    href: '/zero-trust-security-platform',
    description: 'Comprehensive zero trust security framework for enterprise-grade protection',
    features: ['Zero Trust Architecture', 'Identity Verification', 'Continuous Monitoring', 'Threat Detection'],
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    isNew: true,
    badge: 'New',
    color: 'from-purple-500 to-pink-600'
  },
  {
<<<<<<< HEAD
    id: 'quantum-data-center-platform',
    name: 'Quantum Data Center Platform',
    description: 'Quantum data center management with advanced optimization and security',
    features: [
      'Quantum Resource Management',
      'Advanced Cooling Systems',
      'Energy Optimization',
      'Security Monitoring',
      'Predictive Maintenance'
    ],
    pricing: '$40,000/month',
=======
    name: 'AI-Powered DevOps Platform',
    href: '/ai-powered-devops-platform',
    description: 'Intelligent DevOps automation with AI-driven optimization and monitoring',
    features: ['AI Automation', 'DevOps Optimization', 'Continuous Monitoring', 'Predictive Analytics'],
    isNew: true,
    badge: 'New',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    name: 'Quantum Data Center Platform',
    href: '/quantum-data-center-platform',
    description: 'Quantum data center management with advanced resource optimization',
    features: ['Quantum Management', 'Resource Optimization', 'Energy Efficiency', 'Advanced Analytics'],
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    isPremium: true,
    badge: 'Premium',
    color: 'from-yellow-500 to-orange-600'
  }
];

const benefits = [
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: 'Enterprise Security',
<<<<<<< HEAD
    description: 'Military-grade security with zero trust architecture and quantum encryption'
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    title: 'High Performance',
    description: 'Optimized infrastructure for maximum performance and reliability'
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-400" />,
    title: 'Scalable Solutions',
    description: 'Flexible infrastructure that grows with your business needs'
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    title: 'Future-Ready',
    description: 'Cutting-edge technology that keeps you ahead of the competition'
=======
    description: 'Military-grade security with zero trust architecture and continuous monitoring'
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    title: 'Scalable Infrastructure',
    description: 'Cloud-native solutions that grow with your business needs'
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'High Performance',
    description: 'Quantum-enhanced processing for lightning-fast enterprise operations'
  },
  {
    icon: <Building className="w-8 h-8 text-purple-400" />,
    title: 'Enterprise Ready',
    description: 'Built for large-scale deployments with enterprise-grade reliability'
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
  }
];

export default function EnterpriseIT() {
  return (
    <>
      <Head>
        <title>Enterprise IT Services - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Advanced enterprise infrastructure and security solutions. Enterprise-grade IT services for modern businesses." />
=======
        <meta name="description" content="Advanced enterprise infrastructure and security solutions. Quantum cloud infrastructure, edge computing, zero trust security, and AI-powered DevOps." />
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
        <meta name="keywords" content="enterprise IT, cloud infrastructure, edge computing, zero trust security, DevOps, data center" />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-it" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
<<<<<<< HEAD
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/enterprise-it.tsx
  Building2, Zap, Target, Users, 
  Shield, Rocket, Globe, Sparkles,
  Check, ArrowRight, Star, Award,
  Server, Database, Network, Lock, Cpu, BarChart3
} from 'lucide-react';

export default function EnterpriseIT() {
  const services = [
    {
      name: 'IT Infrastructure Management',
      description: 'Comprehensive management of enterprise IT infrastructure and systems',
      features: [
        'Server & Storage Management',
        'Network Infrastructure',
        'Cloud Migration',
        'Disaster Recovery',
        'Performance Optimization',
        '24/7 Monitoring'
      ],
      icon: <Server className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      link: '/it-infrastructure-management'
    },
    {
      name: 'Zero Trust Security Platform',
      description: 'Advanced security framework for enterprise-grade protection',
      features: [
        'Identity Verification',
        'Access Control',
        'Threat Detection',
        'Data Encryption',
        'Compliance Management',
        'Security Analytics'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      link: '/zero-trust-security-platform'
    },
    {
      name: 'Edge Computing Orchestrator',
      description: 'Intelligent edge computing management and optimization',
      features: [
        'Edge Node Management',
        'Load Distribution',
        'Real-time Processing',
        'Latency Optimization',
        'Scalable Architecture',
        'Performance Monitoring'
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      link: '/edge-computing-orchestrator-pro'
    },
    {
      name: 'AI-Powered DevOps Platform',
      description: 'Intelligent automation for development and operations',
      features: [
        'CI/CD Automation',
        'Code Quality Analysis',
        'Deployment Management',
        'Performance Testing',
        'Infrastructure as Code',
        'Monitoring & Alerting'
      ],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      link: '/ai-powered-devops-platform'
    },
    {
      name: 'Data Center Optimization',
      description: 'Enterprise data center management and optimization',
      features: [
        'Capacity Planning',
        'Energy Efficiency',
        'Cooling Management',
        'Space Optimization',
        'Cost Reduction',
        'Sustainability Metrics'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-teal-500 to-blue-600',
      link: '/quantum-data-center-platform'
    },
    {
      name: 'Enterprise Integration',
      description: 'Seamless integration of enterprise systems and applications',
      features: [
        'API Management',
        'Data Integration',
        'Workflow Automation',
        'System Connectivity',
        'Real-time Sync',
        'Error Handling'
      ],
      icon: <Network className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600',
      link: '/enterprise-integration'
    }
  ];

  const solutions = [
    {
      title: 'Cloud Strategy & Migration',
      description: 'Comprehensive cloud adoption and migration strategies',
      icon: <Globe className="w-6 h-6" />,
      benefits: ['Cost Optimization', 'Scalability', 'Security', 'Compliance']
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: <Sparkles className="w-6 h-6" />,
      benefits: ['Process Automation', 'Customer Experience', 'Operational Efficiency', 'Innovation']
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Advanced security solutions and regulatory compliance',
      icon: <Lock className="w-6 h-6" />,
      benefits: ['Threat Protection', 'Data Security', 'Regulatory Compliance', 'Risk Management']
    },
    {
      title: 'Data Analytics & BI',
      description: 'Enterprise data analytics and business intelligence solutions',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ['Data Insights', 'Decision Making', 'Performance Metrics', 'Predictive Analytics']
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      solutions: ['Regulatory Compliance', 'Risk Management', 'Fraud Detection', 'High-Frequency Trading'],
      icon: <Building2 className="w-6 h-6" />
    },
    {
      name: 'Healthcare',
      solutions: ['HIPAA Compliance', 'Patient Data Security', 'Medical Device Integration', 'Clinical Analytics'],
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'Manufacturing',
      solutions: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain Optimization', 'Quality Control'],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      name: 'Retail',
      solutions: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Omnichannel Integration'],
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const enterpriseBenefits = [
    {
      title: 'Scalability',
      description: 'Grow your IT infrastructure seamlessly as your business expands',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security with zero-trust architecture and advanced threat protection',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Efficiency',
      description: 'Optimize operations and reduce costs through intelligent automation and AI',
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Enterprise IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise IT solutions including infrastructure management, security, DevOps, and digital transformation services." />
        <meta name="keywords" content="enterprise IT, IT infrastructure, cybersecurity, DevOps, digital transformation, cloud migration" />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-it" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD:pages.disabled/enterprise-it.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-cyan-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/enterprise-it.tsx
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD:pages.disabled/enterprise-it.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/enterprise-it.tsx
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Enterprise IT
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Advanced enterprise infrastructure and security solutions designed for modern businesses
=======
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Shield className="w-12 h-12 text-green-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Enterprise IT
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Advanced enterprise infrastructure and security solutions designed for large-scale deployments. 
                Experience enterprise-grade reliability with cutting-edge technology.
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200 hover:scale-105"
=======
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200 hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
                >
                  Get Started
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
<<<<<<< HEAD
                  className="px-8 py-4 border border-green-500/50 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200"
                >
                  View All Services
                </Link>
=======
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                Enterprise IT
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Enterprise IT Solutions
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your enterprise with cutting-edge IT solutions. From infrastructure management 
                to digital transformation, we deliver scalable, secure, and efficient technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Enterprise IT Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise IT Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={service.link} className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                ))}
<<<<<<< HEAD:pages.disabled/enterprise-it.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
                  className="px-8 py-4 border border-green-500/40 text-green-300 rounded-xl font-semibold hover:bg-green-500/10 transition-all duration-200"
                >
                  View All Services
                </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/enterprise-it.tsx
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD:pages.disabled/enterprise-it.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
        {/* Enterprise Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
        {/* Enterprise Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise Solutions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                        {solution.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    
                    <div className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/enterprise-it.tsx
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD:pages.disabled/enterprise-it.tsx
<<<<<<< HEAD
<<<<<<< HEAD
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Enterprise IT Services?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience enterprise-grade solutions that provide security, performance, and scalability for your business
=======
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise-Grade Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive suite of enterprise IT infrastructure and security solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                    {service.isNew && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        {service.badge}
                      </span>
                    )}
                    {service.isHot && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                        {service.badge}
                      </span>
                    )}
                    {service.isPremium && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                        {service.badge}
                      </span>
                    )}
                    
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-1 transition-all duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/30 to-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Enterprise Solutions?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience enterprise-grade reliability with our cutting-edge infrastructure and security solutions
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
<<<<<<< HEAD
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
=======
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise Solutions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                        {solution.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    
                    <div className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Enterprise IT Services</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of enterprise infrastructure and security solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {enterpriseServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-green-500/50 transition-all duration-200 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    {service.badge && (
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        service.isNew ? 'bg-green-500 text-white' :
                        service.isHot ? 'bg-red-500 text-white' :
                        service.isPremium ? 'bg-yellow-500 text-black' :
                        'bg-blue-500 text-white'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-lg">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-400">{service.pricing}</div>
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 flex items-center"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/enterprise-it.tsx
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Solutions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {industry.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-4">{industry.name}</h3>
                    
                    <div className="space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="text-sm text-gray-400">
                          {solution}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our Enterprise IT Solutions?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {enterpriseBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
<<<<<<< HEAD:pages.disabled/enterprise-it.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/enterprise-it.tsx
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD:pages.disabled/enterprise-it.tsx
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/enterprise-it.tsx
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD:pages.disabled/enterprise-it.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/enterprise-it.tsx
            >
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise IT?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Upgrade your enterprise infrastructure with cutting-edge technology and security. Contact us today to get started with your IT transformation journey.
=======
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Join the future of enterprise IT with our cutting-edge infrastructure and security solutions. 
                Scale your business with enterprise-grade reliability and performance.
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200 hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-green-500/50 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200"
                >
                  View All Services
=======
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise IT?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Partner with us to build a future-ready IT infrastructure that drives innovation, 
                security, and operational excellence across your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                  View Case Studies
<<<<<<< HEAD:pages.disabled/enterprise-it.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-green-500/40 text-green-300 rounded-xl font-semibold hover:bg-green-500/10 transition-all duration-200"
                >
                  Explore All Services
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/enterprise-it.tsx
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}