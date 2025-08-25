import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  Rocket, Cpu, Shield, Zap, Globe, Star, Users,
  Target, Microscope, Database, Lock, Cloud, 
  BarChart3, Settings, Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck, ZapIcon, GlobeIcon, 
  StarIcon, TrendingUpIcon, UsersIcon, CheckCircleIcon, 
  ArrowRightIcon, CpuIcon, DollarSign, Phone, 
  ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Infinity, Target as TargetIcon, 
  Award, MessageCircle, ChevronRight, FileText, Building
} from 'lucide-react';

const microSaasServices = [
  {
    id: 'ai-content-factory-enterprise',
    name: 'AI Content Factory Enterprise',
    description: 'Enterprise AI content generation platform for scalable content creation and management',
    features: [
      'AI Content Generation',
      'Multi-Format Support',
      'Brand Voice Consistency',
      'Content Analytics',
      'Team Collaboration'
    ],
    pricing: '$18,000/month',
    isNew: true,
    badge: 'New',
    color: 'from-teal-500 to-emerald-600'
  },
  {
    id: 'quantum-crm-suite-enterprise',
    name: 'Quantum CRM Suite Enterprise',
    description: 'Quantum-enhanced CRM platform with advanced analytics and customer insights',
    features: [
      'Quantum Analytics',
      'Customer Intelligence',
      'Predictive Modeling',
      'Sales Automation',
      'Integration Hub'
    ],
    pricing: '$22,000/month',
    isHot: true,
    badge: 'Hot',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'ai-autonomous-decision-engine',
    name: 'AI Autonomous Decision Engine',
    description: 'Autonomous AI decision making platform for business process optimization',
    features: [
      'Autonomous Decision Making',
      'Process Optimization',
      'Risk Assessment',
      'Performance Monitoring',
      'Learning Algorithms'
    ],
    pricing: '$25,000/month',
    isNew: true,
    badge: 'New',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'ai-legal-contract-analyzer',
    name: 'AI Legal Contract Analyzer',
    description: 'AI-powered legal analysis platform for contract review and risk assessment',
    features: [
      'Contract Analysis',
      'Risk Assessment',
      'Legal Compliance',
      'Document Review',
      'Automated Reporting'
    ],
    pricing: '$20,000/month',
    isNew: true,
    badge: 'New',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'ai-healthcare-diagnostics-pro',
    name: 'AI Healthcare Diagnostics Pro',
    description: 'Advanced medical AI diagnostics platform for healthcare professionals',
    features: [
      'Medical Image Analysis',
      'Diagnostic Support',
      'Patient Data Management',
      'Clinical Decision Support',
      'Compliance & Security'
    ],
    pricing: '$35,000/month',
    isPremium: true,
    badge: 'Premium',
    color: 'from-red-500 to-pink-600'
  }
];

const benefits = [
  {
    icon: <Rocket className="w-8 h-8 text-teal-400" />,
    title: 'Rapid Deployment',
    description: 'Quick implementation and deployment of business solutions'
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    title: 'Scalable Solutions',
    description: 'Flexible platforms that grow with your business needs'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    title: 'Enterprise Security',
    description: 'Built-in security and compliance for business applications'
  },
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: 'User-Friendly',
    description: 'Intuitive interfaces designed for business users'
  }
];

export default function MicroSaas() {
  return (
    <>
      <Head>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Innovative business solutions for modern enterprises. Micro SAAS platforms that transform business operations." />
        <meta name="keywords" content="micro SAAS, business solutions, AI content, CRM, decision engine, legal analysis, healthcare diagnostics" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-black to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
  Rocket, Zap, Target, Users, 
  Shield, Globe, Sparkles, TrendingUp,
  Check, ArrowRight, Star, Award,
  Code, Database, Network, Lock, Cpu, Building2, Brain
} from 'lucide-react';

export default function MicroSaas() {
  const solutions = [
    {
      name: 'AI Content Factory Enterprise',
      description: 'Enterprise-grade AI content generation and management platform',
      features: [
        'Multi-format Content Creation',
        'Brand Voice Consistency',
        'SEO Optimization',
        'Content Analytics',
        'Team Collaboration',
        'API Integration'
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      link: '/ai-content-factory-enterprise'
    },
    {
      name: 'Quantum CRM Suite Enterprise',
      description: 'Next-generation CRM powered by quantum computing and AI',
      features: [
        'Quantum-Enhanced Analytics',
        'AI-Powered Insights',
        'Predictive Lead Scoring',
        'Automated Workflows',
        'Multi-channel Integration',
        'Advanced Reporting'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      link: '/quantum-crm-suite-enterprise'
    },
    {
      name: 'AI Autonomous Decision Engine',
      description: 'Intelligent decision-making system for business automation',
      features: [
        'Real-time Data Analysis',
        'Risk Assessment',
        'Predictive Modeling',
        'Automated Decisions',
        'Audit Trail',
        'Performance Monitoring'
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      link: '/ai-autonomous-decision-engine'
    },
    {
      name: 'AI Legal Contract Analyzer',
      description: 'Advanced legal document analysis and contract optimization',
      features: [
        'Document Analysis',
        'Risk Identification',
        'Compliance Checking',
        'Clause Optimization',
        'Legal Research',
        'Due Diligence'
      ],
      icon: <Lock className="w-8 h-8" />,
      color: 'from-red-500 to-pink-600',
      link: '/ai-legal-contract-analyzer'
    },
    {
      name: 'AI Healthcare Diagnostics Pro',
      description: 'Revolutionary medical diagnosis and treatment system',
      features: [
        'Medical Image Analysis',
        'Symptom Assessment',
        'Treatment Recommendations',
        'Drug Interaction Checking',
        'Patient Monitoring',
        'Research Integration'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-teal-500 to-blue-600',
      link: '/ai-healthcare-diagnostics-pro'
    },
    {
      name: 'Space Mining Platform',
      description: 'Advanced platform for space resource exploration and mining',
      features: [
        'Resource Mapping',
        'Mining Operations',
        'Logistics Management',
        'Safety Protocols',
        'Environmental Monitoring',
        'ROI Analysis'
      ],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600',
      link: '/space-mining-platform'
    }
  ];

  const benefits = [
    {
      title: 'Rapid Deployment',
      description: 'Get your SaaS solution up and running in weeks, not months',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business from startup to enterprise',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'AI-Powered Features',
      description: 'Cutting-edge AI and quantum computing capabilities built-in',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const useCases = [
    {
      industry: 'Startups',
      applications: ['MVP Development', 'Rapid Prototyping', 'Market Validation', 'User Acquisition'],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      industry: 'SMBs',
      applications: ['Business Automation', 'Process Optimization', 'Customer Management', 'Growth Scaling'],
      icon: <Target className="w-6 h-6" />
    },
    {
      industry: 'Enterprises',
      applications: ['Digital Transformation', 'Legacy Modernization', 'Innovation Labs', 'Competitive Advantage'],
      icon: <Building2 className="w-6 h-6" />
    },
    {
      industry: 'Developers',
      applications: ['API Integration', 'Custom Development', 'White-label Solutions', 'Plugin Ecosystem'],
      icon: <Code className="w-6 h-6" />
    }
  ];

  const features = [
    {
      title: 'Cloud-Native Architecture',
      description: 'Built on modern cloud technologies for maximum scalability and reliability',
      icon: <Globe className="w-6 h-6" />,
      examples: ['Microservices', 'Containerization', 'Auto-scaling', 'Multi-region']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent features that learn and adapt to your business needs',
      icon: <Brain className="w-6 h-6" />,
      examples: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Engines']
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with industry-standard compliance',
      icon: <Shield className="w-6 h-6" />,
      examples: ['SOC 2', 'GDPR', 'HIPAA', 'ISO 27001']
    },
    {
      title: 'API-First Design',
      description: 'RESTful APIs and webhooks for seamless integration',
      icon: <Network className="w-6 h-6" />,
      examples: ['REST APIs', 'GraphQL', 'Webhooks', 'SDKs']
    }
  ];

  return (
    <>
      <Head>
        <title>Micro-SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary micro-SaaS solutions powered by AI and quantum computing. Rapid deployment, scalable architecture, and cutting-edge features." />
        <meta name="keywords" content="micro-SaaS, SaaS solutions, AI-powered SaaS, quantum computing SaaS, business automation" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Micro SAAS
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Innovative business solutions for modern enterprises that transform operations and drive growth
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-teal-500/50 text-teal-400 rounded-lg font-semibold hover:bg-teal-500/10 transition-all duration-200"
                >
                  View All Services
                </Link>
=======
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Micro-SaaS
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Micro-SaaS Solutions
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionary micro-SaaS solutions powered by AI and quantum computing. 
                Deploy, scale, and innovate faster than ever before.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Micro-SaaS Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Micro-SaaS Solutions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-4`}>
                      {solution.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{solution.name}</h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={solution.link} className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                ))}
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
        {/* Key Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS Services?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience innovative business solutions that streamline operations and drive productivity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose Micro-SaaS?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
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
          </div>
        </section>

        {/* Use Cases */}
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
              <h2 className="text-4xl font-bold text-white mb-4">Our Micro SAAS Services</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of innovative business solutions and platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-200 hover:shadow-2xl hover:shadow-teal-500/10"
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
                    <div className="text-2xl font-bold text-teal-400">{service.pricing}</div>
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 flex items-center"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
=======
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {useCase.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-4">{useCase.industry}</h3>
                    
                    <div className="space-y-2">
                      {useCase.applications.map((application, appIndex) => (
                        <div key={appIndex} className="text-sm text-gray-400">
                          {application}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    
                    <div className="space-y-2">
                      {feature.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-sm text-gray-400">
                          <Star className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-teal-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business Operations?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Streamline your business with innovative micro SAAS solutions. Contact us today to get started with your digital transformation journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-teal-500/50 text-teal-400 rounded-lg font-semibold hover:bg-teal-500/10 transition-all duration-200"
                >
                  View All Services
=======
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Your Micro-SaaS?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start building the future with our revolutionary micro-SaaS solutions. 
                Deploy faster, scale smarter, and innovate continuously.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
                  View Case Studies
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}