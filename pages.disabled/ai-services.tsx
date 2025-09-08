import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
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
  Brain, Zap, Shield, Sparkles, Atom, 
  Cpu, Target, Users, ArrowRight, Star,
  CheckCircle, Clock, DollarSign, TrendingUp
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
} from 'lucide-react';

const aiServices = [
  {
<<<<<<< HEAD
    id: 'ai-consciousness-evolution-pro',
    name: 'AI Consciousness Evolution Pro',
    description: 'Advanced AI consciousness development platform with emotional intelligence and self-awareness capabilities',
    features: [
      'Emotional Intelligence Framework',
      'Consciousness Mapping',
      'Self-Learning Algorithms',
      'Ethical Decision Making',
      'Human-AI Collaboration Tools'
    ],
    pricing: '$15,000/month',
=======
    name: 'AI Consciousness Evolution Pro',
    href: '/ai-consciousness-evolution-pro',
    description: 'Advanced AI consciousness development and emotional intelligence systems',
    features: ['Emotional AI', 'Consciousness Simulation', 'Ethical Framework', 'Human-AI Interaction'],
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    isNew: true,
    badge: 'New',
    color: 'from-violet-500 to-purple-600'
  },
  {
<<<<<<< HEAD
    id: 'quantum-ai-fusion-platform',
    name: 'Quantum AI Fusion Platform',
    description: 'Revolutionary quantum-AI hybrid computing platform for unprecedented processing power',
    features: [
      'Quantum-AI Hybrid Processing',
      'Real-time Learning',
      'Quantum Neural Networks',
      'Advanced Pattern Recognition',
      'Scalable Architecture'
    ],
    pricing: '$25,000/month',
=======
    name: 'Quantum AI Fusion Platform',
    href: '/quantum-ai-fusion-platform',
    description: 'Revolutionary quantum-AI hybrid computing platform',
    features: ['Quantum Processing', 'AI Acceleration', 'Hybrid Algorithms', 'Real-time Learning'],
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    isHot: true,
    badge: 'Hot',
    color: 'from-indigo-500 to-blue-600'
  },
  {
<<<<<<< HEAD
    id: 'ai-autonomous-ecosystem',
    name: 'AI Autonomous Ecosystem',
    description: 'Self-managing AI systems that operate independently while maintaining human oversight',
    features: [
      'Autonomous Decision Making',
      'Self-Optimization',
      'Predictive Maintenance',
      'Resource Management',
      'Performance Monitoring'
    ],
    pricing: '$18,000/month',
    color: 'from-cyan-500 to-teal-600'
  },
  {
    id: 'ai-ethics-governance',
    name: 'AI Ethics & Governance',
    description: 'Comprehensive framework for ethical AI development and governance',
    features: [
      'Ethical Guidelines',
      'Bias Detection',
      'Transparency Tools',
      'Compliance Monitoring',
      'Audit Trails'
    ],
    pricing: '$12,000/month',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'ai-creativity-studio-pro',
    name: 'AI Creativity Studio Pro',
    description: 'AI-powered creative platform for content generation and artistic collaboration',
    features: [
      'Content Generation',
      'Creative Collaboration',
      'Style Transfer',
      'Multi-Media Support',
      'Brand Consistency'
    ],
    pricing: '$20,000/month',
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    isNew: true,
    badge: 'New',
    color: 'from-pink-500 to-rose-600'
  }
];

const benefits = [
  {
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
<<<<<<< HEAD
    title: 'Advanced Intelligence',
    description: 'State-of-the-art AI models with consciousness and emotional intelligence'
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    title: 'Lightning Fast',
    description: 'Quantum-enhanced processing for real-time AI operations'
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: 'Secure & Ethical',
    description: 'Built-in security and ethical frameworks for responsible AI'
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    title: 'Future-Ready',
    description: 'Cutting-edge technology that evolves with your business needs'
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
  }
];

export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI & Consciousness Services - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Revolutionary AI consciousness and emotional intelligence services. Advanced AI solutions for the future of technology." />
        <meta name="keywords" content="AI consciousness, emotional intelligence, quantum AI, autonomous AI, AI ethics, AI creativity" />
=======
        <meta name="description" content="Revolutionary AI consciousness and emotional intelligence services. Advanced AI systems with ethical frameworks and quantum-enhanced processing." />
        <meta name="keywords" content="AI consciousness, emotional AI, quantum AI, autonomous AI, AI ethics, AI creativity" />
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
<<<<<<< HEAD
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-indigo-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
  Brain, Zap, Target, Users, 
  Shield, Rocket, Globe, Sparkles,
  Check, ArrowRight, Star, Award,
  Cpu, Database, Network, Lock, Eye
} from 'lucide-react';

export default function AiServices() {
  const services = [
    {
      icon: Brain,
      title: 'AI Model Development',
      description: 'Custom AI models tailored to your specific business needs and use cases.',
      features: ['Machine Learning Models', 'Deep Learning Solutions', 'Natural Language Processing', 'Computer Vision']
    }, {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline your operations with intelligent automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Intelligent Document Processing', 'Predictive Analytics']
    }, {
      icon: Target,
      title: 'AI Strategy Consulting',
      description: 'Strategic guidance to help you leverage AI for maximum business impact.',
      features: ['AI Roadmap Planning', 'Technology Assessment', 'Implementation Strategy', 'ROI Analysis']
    }, {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI solutions are secure, compliant, and trustworthy.',
      features: ['AI Security Audits', 'Compliance Frameworks', 'Data Privacy Protection', 'Ethical AI Guidelines']
    }
  ];

  const capabilities = [
    {
      icon: BarChart3,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize processes for better productivity.'
    }, {
      icon: Target,
      title: 'Better Decision Making',
      description: 'Leverage data-driven insights to make informed business decisions.'
    }, {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Deliver personalized experiences and improved customer service.'
    }, {
      icon: Globe,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI capabilities.'
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
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-indigo-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                AI & Consciousness
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI consciousness and emotional intelligence solutions that redefine the boundaries of artificial intelligence
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
=======
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
                >
                  Get Started
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
<<<<<<< HEAD
                  className="px-8 py-4 border border-violet-500/50 text-violet-400 rounded-lg font-semibold hover:bg-violet-500/10 transition-all duration-200"
                >
                  View All Services
                </Link>
=======
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
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
                  className="px-8 py-4 border border-violet-500/40 text-violet-300 rounded-xl font-semibold hover:bg-violet-500/10 transition-all duration-200"
                >
                  View All Services
                </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )}"