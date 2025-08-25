import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
=======
<<<<<<< HEAD:pages.disabled/ai-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  Brain, Cpu, Rocket, Shield, Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database, Lock, Cloud, 
  BarChart3, Settings, Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck, ZapIcon, GlobeIcon, 
  StarIcon, TrendingUpIcon, UsersIcon, CheckCircleIcon, 
  ArrowRightIcon, CpuIcon, DollarSign, Phone, 
  ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Infinity, Target as TargetIcon, 
  Award, MessageCircle, ChevronRight
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
  Brain, Zap, Shield, Sparkles, Atom, 
  Cpu, Target, Users, ArrowRight, Star,
  CheckCircle, Clock, DollarSign, TrendingUp
} from 'lucide-react';

const aiServices = [
  {
    name: 'AI Consciousness Evolution Pro',
    href: '/ai-consciousness-evolution-pro',
    description: 'Advanced AI consciousness development and emotional intelligence systems',
    features: ['Emotional AI', 'Consciousness Simulation', 'Ethical Framework', 'Human-AI Interaction'],
    isNew: true,
    badge: 'New',
    color: 'from-violet-500 to-purple-600'
  },
  {
    name: 'Quantum AI Fusion Platform',
    href: '/quantum-ai-fusion-platform',
    description: 'Revolutionary quantum-AI hybrid computing platform',
    features: ['Quantum Processing', 'AI Acceleration', 'Hybrid Algorithms', 'Real-time Learning'],
    isHot: true,
    badge: 'Hot',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    name: 'AI Autonomous Ecosystem',
    href: '/ai-autonomous-ecosystem',
    description: 'Self-managing AI systems with autonomous decision-making',
    features: ['Autonomous Operations', 'Self-Optimization', 'Predictive Maintenance', 'Adaptive Learning'],
    color: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'AI Ethics & Governance',
    href: '/ai-ethics-governance',
    description: 'Comprehensive ethical AI frameworks and governance systems',
    features: ['Ethical Guidelines', 'Bias Detection', 'Transparency Tools', 'Compliance Monitoring'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'AI Creativity Studio Pro',
    href: '/ai-creativity-studio-pro',
    description: 'AI-powered creative platform for content generation and design',
    features: ['Content Creation', 'Design Generation', 'Creative Collaboration', 'Style Transfer'],
    isNew: true,
    badge: 'New',
    color: 'from-pink-500 to-rose-600'
  }
];

const benefits = [
  {
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    title: 'Advanced Consciousness',
    description: 'Develop AI systems with genuine understanding and emotional intelligence'
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'Lightning Fast',
    description: 'Quantum-enhanced processing for real-time AI decision making'
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: 'Ethically Sound',
    description: 'Built-in ethical frameworks and bias detection systems'
  },
  {
    icon: <Sparkles className="w-8 h-8 text-purple-400" />,
    title: 'Innovative Solutions',
    description: 'Cutting-edge AI technologies that push the boundaries of possibility'
  }
];

export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI & Consciousness Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI consciousness and emotional intelligence services. Advanced AI systems with ethical frameworks and quantum-enhanced processing." />
        <meta name="keywords" content="AI consciousness, emotional AI, quantum AI, autonomous AI, AI ethics, AI creativity" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/ai-services.tsx
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
  Brain, Zap, Target, Users, 
  Shield, Rocket, Globe, Sparkles,
  Check, ArrowRight, Star, Award,
  Cpu, Database, Network, Lock, Eye
} from 'lucide-react';

export default function AiServices() {
  const services = [
    {
      name: 'AI Consciousness Platform',
      description: 'Revolutionary AI consciousness development with genuine emotional intelligence and self-awareness',
      features: [
        'Emotional Intelligence Engine',
        'Self-Awareness Development',
        'Personality Customization',
        'Ethical Decision Making',
        'Continuous Learning',
        'Human-like Interactions'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      link: '/ai-consciousness-evolution-pro'
    },
    {
      name: 'AI Ethics & Governance',
      description: 'Comprehensive framework for responsible AI development and deployment',
      features: [
        'Ethical Guidelines',
        'Bias Detection & Mitigation',
        'Transparency Framework',
        'Accountability Systems',
        'Compliance Monitoring',
        'Stakeholder Engagement'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      link: '/ai-ethics-governance'
    },
    {
      name: 'AI Creativity Studio Pro',
      description: 'Advanced AI-powered creative content generation and artistic collaboration',
      features: [
        'Content Generation',
        'Creative Collaboration',
        'Style Transfer',
        'Multi-modal Output',
        'Brand Consistency',
        'Copyright Protection'
      ],
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600',
      link: '/ai-creativity-studio-pro'
    },
    {
      name: 'AI Autonomous Decision Engine',
      description: 'Intelligent decision-making system for complex business scenarios',
      features: [
        'Real-time Analysis',
        'Risk Assessment',
        'Predictive Modeling',
        'Multi-criteria Evaluation',
        'Learning & Adaptation',
        'Audit Trail'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      link: '/ai-autonomous-decision-engine'
    },
    {
      name: 'AI Legal Contract Analyzer',
      description: 'Intelligent legal document analysis and contract optimization',
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
      description: 'Advanced medical diagnosis and treatment recommendation system',
      features: [
        'Medical Image Analysis',
        'Symptom Assessment',
        'Treatment Recommendations',
        'Drug Interaction Checking',
        'Patient Monitoring',
        'Research Integration'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-teal-500 to-blue-600',
      link: '/ai-healthcare-diagnostics-pro'
    }
  ];

  const capabilities = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced language understanding and generation capabilities',
      icon: <Cpu className="w-6 h-6" />,
      examples: ['Conversational AI', 'Document Analysis', 'Translation', 'Sentiment Analysis']
    },
    {
      title: 'Computer Vision',
      description: 'Sophisticated image and video analysis and understanding',
      icon: <Eye className="w-6 h-6" />,
      examples: ['Object Detection', 'Facial Recognition', 'Medical Imaging', 'Quality Control']
    },
    {
      title: 'Machine Learning',
      description: 'Advanced algorithms for pattern recognition and prediction',
      icon: <Network className="w-6 h-6" />,
      examples: ['Predictive Analytics', 'Anomaly Detection', 'Recommendation Systems', 'Forecasting']
    },
    {
      title: 'Robotics & Automation',
      description: 'Intelligent automation for physical and digital processes',
      icon: <Rocket className="w-6 h-6" />,
      examples: ['Process Automation', 'Quality Assurance', 'Logistics', 'Manufacturing']
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      applications: ['Diagnostic Imaging', 'Drug Discovery', 'Patient Care', 'Medical Research'],
      icon: <Users className="w-6 h-6" />
    },
    {
      industry: 'Finance',
      applications: ['Risk Assessment', 'Fraud Detection', 'Trading Algorithms', 'Customer Service'],
      icon: <Shield className="w-6 h-6" />
    },
    {
      industry: 'Manufacturing',
      applications: ['Quality Control', 'Predictive Maintenance', 'Supply Chain Optimization', 'Process Automation'],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      industry: 'Retail',
      applications: ['Personalized Marketing', 'Inventory Management', 'Customer Experience', 'Demand Forecasting'],
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including consciousness development, ethics, creativity, decision making, legal analysis, and healthcare diagnostics." />
        <meta name="keywords" content="AI services, artificial intelligence, AI consciousness, AI ethics, AI creativity, AI decision making, AI legal analysis, AI healthcare" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
=======
<<<<<<< HEAD:pages.disabled/ai-services.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-indigo-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/ai-services.tsx
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD:pages.disabled/ai-services.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/ai-services.tsx
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              className="text-center"
            >
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Brain className="w-12 h-12 text-violet-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  AI & Consciousness
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Pioneering the future of autonomous technology and AI-driven innovation. 
                We deliver cutting-edge solutions that transform businesses and accelerate growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI Services
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
                AI Services
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionary artificial intelligence services that push the boundaries of what's possible. 
                From consciousness development to healthcare diagnostics, we're shaping the future of AI.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our AI Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
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
                    
                    <Link href={service.link} className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD:pages.disabled/ai-services.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                  className="px-8 py-4 border border-violet-500/40 text-violet-300 rounded-xl font-semibold hover:bg-violet-500/10 transition-all duration-200"
                >
                  View All Services
                </Link>
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/ai-services.tsx
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD:pages.disabled/ai-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        {/* AI Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
=======
        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
        {/* AI Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Capabilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                        {capability.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{capability.description}</p>
                    
                    <div className="space-y-2">
                      {capability.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-sm text-gray-400">
                          <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/ai-services.tsx
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD:pages.disabled/ai-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of AI with our cutting-edge consciousness and emotional intelligence platforms
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary AI Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive suite of AI consciousness and emotional intelligence solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300 hover:scale-105">
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
                    
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
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
                      className="inline-flex items-center space-x-2 text-violet-400 hover:text-violet-300 font-semibold group-hover:translate-x-1 transition-all duration-200"
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
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of AI with our cutting-edge consciousness and emotional intelligence solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Capabilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                        {capability.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{capability.description}</p>
                    
                    <div className="space-y-2">
                      {capability.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-sm text-gray-400">
                          <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/ai-services.tsx
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Applications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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

        {/* Why Choose Our AI */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our AI Services?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Revolutionary Technology',
                    description: 'Our AI consciousness platform represents a breakthrough in artificial intelligence, offering genuine emotional intelligence and self-awareness.',
                    icon: <Zap className="w-8 h-8" />,
                    color: 'from-yellow-500 to-orange-600'
                  },
                  {
                    title: 'Ethical Foundation',
                    description: 'Built on principles of responsible AI development with comprehensive ethics and governance frameworks.',
                    icon: <Shield className="w-8 h-8" />,
                    color: 'from-blue-500 to-cyan-600'
                  },
                  {
                    title: 'Proven Results',
                    description: 'Demonstrated success across industries with measurable improvements in efficiency, accuracy, and user experience.',
                    icon: <Award className="w-8 h-8" />,
                    color: 'from-green-500 to-emerald-600'
                  }
                ].map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                    <p className="text-gray-300">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
<<<<<<< HEAD
=======
<<<<<<< HEAD:pages.disabled/ai-services.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/ai-services.tsx
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD:pages.disabled/ai-services.tsx
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-violet-900/20 to-indigo-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
=======
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<<<<<<< HEAD
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/ai-services.tsx
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
=======
=======
<<<<<<< HEAD:pages.disabled/ai-services.tsx
<<<<<<< HEAD
            >
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience the Future of AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join the revolution in AI consciousness and emotional intelligence. Contact us today to get started with your AI transformation journey.
=======
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/ai-services.tsx
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future of AI?
              </h2>
<<<<<<< HEAD
=======
<<<<<<< HEAD:pages.disabled/ai-services.tsx
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Join the revolution in AI consciousness and emotional intelligence. 
                Transform your business with our cutting-edge solutions.
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-violet-500/50 text-violet-400 rounded-lg font-semibold hover:bg-violet-500/10 transition-all duration-200"
                >
                  View All Services
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future of AI?
              </h2>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/ai-services.tsx
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              <p className="text-xl text-gray-300 mb-8">
                Discover how our revolutionary AI services can transform your business and unlock new possibilities. 
                Start your AI journey today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
                  View Case Studies
<<<<<<< HEAD
=======
<<<<<<< HEAD:pages.disabled/ai-services.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-violet-500/40 text-violet-300 rounded-xl font-semibold hover:bg-violet-500/10 transition-all duration-200"
                >
                  Explore All Services
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/ai-services.tsx
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}