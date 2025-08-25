import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon, Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon, Sparkles as SparklesIcon, Brain as BrainIcon, Atom as AtomIcon, Rocket as RocketIcon } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';

export default function HomePage() {
  const heroStats = [
    { value: '600+', label: 'Revolutionary Services & Solutions', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '45+', label: 'Day Free Trials', color: 'text-cyan-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$150B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '1200%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Enhanced service advertising content with real market data and competitive advantages
  const serviceHighlights = [
    {
      title: '🧠 Revolutionary Neural Quantum Brain Interface',
      description: 'World\'s first direct neural interface with quantum AI for cognitive enhancement. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
      price: 'Starting at $25,999/month',
      features: ['Direct neural signal processing', 'Quantum AI cognitive enhancement', 'Real-time memory augmentation', 'Neural pattern recognition', 'Secure quantum encryption', 'Multi-modal interface support', 'Advanced analytics dashboard', 'API for research integration', 'Compliance with medical standards', '24/7 quantum AI support'],
      link: 'https://ziontechgroup.com/quantum-ai-brain-computer-interface',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$2B BCI market, 500% annual growth',
      competitors: 'Neuralink ($10,000+/month), Kernel ($50,000+/month)',
      savings: 'Save 60% vs. competitors with quantum AI integration',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '⚛️ AI Quantum Computing Platform',
      description: 'Enterprise quantum computing with AI optimization for financial modeling, drug discovery, and scientific research. Achieve quantum advantage with 800% ROI.',
      price: 'Starting at $25,999/month',
      features: ['Quantum processing units (QPUs)', 'AI-optimized quantum algorithms', 'Real-time quantum error correction', 'Hybrid classical-quantum computing', 'Advanced quantum simulation tools', 'API for quantum applications', '24/7 quantum operations support', 'Custom quantum algorithm development', 'Integration with existing IT infrastructure', 'Quantum security protocols'],
      link: 'https://ziontechgroup.com/ai-quantum-computing-platform',
      color: 'from-cyan-600 to-blue-700',
      marketData: '$1.8B quantum computing market, 400% annual growth',
      competitors: 'IBM Quantum ($10,000+/month), Google Quantum AI ($15,000+/month)',
      savings: 'Save 40% vs. competitors with AI optimization and hybrid computing',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🔐 Quantum Cybersecurity Suite',
      description: 'Post-quantum cryptography and quantum-resistant security for financial institutions and government agencies. Protect against future quantum threats.',
      price: 'Starting at $18,999/month',
      features: ['Post-quantum cryptography algorithms', 'Quantum-resistant encryption', 'Real-time threat detection', 'Advanced intrusion prevention', 'Zero-trust architecture', 'Quantum key distribution', 'Compliance with NIST standards', '24/7 security monitoring', 'AI-powered threat analysis', 'Integration with existing security tools'],
      link: 'https://ziontechgroup.com/quantum-cybersecurity-suite',
      color: 'from-red-600 to-orange-700',
      marketData: '$150B cybersecurity market, 400% annual growth in quantum security',
      competitors: 'Traditional cybersecurity ($50,000+/month)',
      savings: 'Save 70% vs. traditional cybersecurity with quantum-resistant technology',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🌐 Quantum Internet Security Platform',
      description: 'Unhackable quantum-secured internet infrastructure with quantum key distribution and post-quantum cryptography. First-to-market quantum internet security.',
      price: 'Starting at $12,999/month',
      features: ['Quantum key distribution (QKD)', 'Post-quantum cryptography', 'Quantum entanglement security', 'Real-time threat detection', 'Multi-node quantum network', 'Government compliance (FIPS 140-3)', 'Quantum network monitoring', 'API for enterprise integration', '24/7 quantum security operations', 'Unhackable communication channels'],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',
      color: 'from-indigo-600 to-purple-700',
      marketData: '$150B cybersecurity market, quantum segment growing 400% annually',
      competitors: 'Traditional cybersecurity (Palo Alto, CrowdStrike)',
      savings: 'First-to-market quantum internet security with no direct competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🏢 Enterprise IT Infrastructure Management',
      description: 'Complete enterprise IT infrastructure with 99.99% uptime guarantee. Modern technology stack with AI operations and competitive pricing.',
      price: 'Starting at $25,999/month',
      features: ['Network infrastructure management', 'Server and storage management', 'Security monitoring and management', '24/7 infrastructure monitoring', 'Performance optimization', 'Disaster recovery planning', 'Compliance management', 'IT asset management', 'Help desk support', 'Strategic IT consulting'],
      link: 'https://ziontechgroup.com/enterprise-it-infrastructure',
      color: 'from-gray-600 to-blue-700',
      marketData: '$1.2T IT services market, 8% annual growth',
      competitors: 'IBM Global Services ($100K+), Accenture ($150K+), Deloitte ($200K+)',
      savings: 'Save 75% vs. traditional consulting with modern technology stack',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '☁️ Cloud Migration & Optimization Service',
      description: 'Seamless cloud migration with 50% cost reduction guarantee. Fixed pricing vs. hourly consulting rates.',
      price: 'Starting at $15,999/month',
      features: ['Cloud migration planning', 'Workload assessment', 'Cost optimization', 'Performance optimization', 'Security migration', 'Data migration', 'Application modernization', 'Cloud governance', 'Training and support', 'Post-migration optimization'],
      link: 'https://ziontechgroup.com/cloud-migration-optimization',
      color: 'from-blue-600 to-cyan-700',
      marketData: '$400B cloud services market, 20% annual growth',
      competitors: 'AWS Professional Services ($200/hour), Microsoft Consulting ($250/hour), Google Cloud ($180/hour)',
      savings: 'Fixed pricing vs. hourly rates, guaranteed 50% cost reduction',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚗 AI-Powered Autonomous Vehicles Platform',
      description: 'Complete autonomous vehicle AI platform with advanced computer vision, sensor fusion, and safety systems. Achieve Level 4 autonomy.',
      price: 'Starting at $55,999/month',
      features: ['Advanced computer vision', 'Sensor fusion algorithms', 'Safety systems integration', 'Real-time decision making', 'Path planning optimization', 'Traffic prediction', 'Weather adaptation', 'Fleet management', 'Performance analytics', '24/7 AI monitoring'],
      link: 'https://ziontechgroup.com/ai-powered-autonomous-vehicles',
      color: 'from-blue-600 to-indigo-700',
      marketData: '$100B autonomous vehicle market, 30% annual growth',
      competitors: 'Waymo ($100M+ setup), Tesla ($50M+ setup), Cruise ($75M+ setup)',
      savings: 'Save 90%+ vs. building from scratch with complete AI platform',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧬 AI-Powered Biotech Drug Discovery',
      description: 'AI-powered biotech drug discovery platform with molecular modeling, protein folding, and clinical trial optimization. Achieve 10x faster drug development.',
      price: 'Starting at $85,999/month',
      features: ['AI molecular modeling', 'Protein folding prediction', 'Drug target identification', 'Clinical trial optimization', 'Toxicity prediction', 'Drug repurposing', 'Biomarker discovery', 'Real-time analytics', 'Research collaboration tools', '24/7 AI research support'],
      link: 'https://ziontechgroup.com/ai-powered-biotech-drug-discovery',
      color: 'from-green-600 to-emerald-700',
      marketData: '$50B AI drug discovery market, 40% annual growth',
      competitors: 'Insilico Medicine ($500K+ setup), Atomwise ($300K+ setup), BenevolentAI ($1M+ setup)',
      savings: 'Save 80% vs. competitors with subscription model and advanced AI',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: innovativeAIServicesEnhanced2025.slice(0, 3),
    icon: BrainIcon,
    color: 'from-violet-500 to-purple-600',
    href: '/ai-services',
    features: ['Emotional Intelligence', 'Self-Awareness', 'Consciousness Evolution']
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: emergingTechServicesEnhanced2025.slice(0, 3),
    icon: AtomIcon,
    color: 'from-indigo-500 to-blue-600',
    href: '/quantum-services',
    features: ['Quantum Computing', 'Space Mining', 'Brain-Computer Interface']
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: innovativeITServicesEnhanced2025.slice(0, 3),
    icon: ShieldIcon,
    color: 'from-blue-500 to-cyan-600',
    href: '/enterprise-it',
    features: ['Zero Trust Security', 'Quantum Cloud', 'Autonomous Operations']
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: innovativeRealMicroSaasServices2025.slice(0, 3),
    icon: RocketIcon,
    color: 'from-teal-500 to-emerald-600',
    href: '/micro-saas',
    features: ['Content Automation', 'CRM Intelligence', 'Decision Engine']
  }
];

const heroFeatures = [
  {
    title: 'Cutting-Edge Technology',
    description: 'Access to the latest AI, quantum computing, and emerging technologies that give you a competitive edge.',
    icon: ZapIcon,
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
  },
  {
    title: 'Rapid Implementation',
    description: 'Get up and running in under 24 hours with our streamlined setup process and expert guidance.',
    icon: RocketIcon,
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'
  },
  {
    title: 'Global Infrastructure',
    description: 'Enterprise-grade infrastructure available in 150+ countries worldwide with 99.9% uptime guarantee.',
    icon: GlobeIcon,
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'
  },
  {
    title: '24/7 Expert Support',
    description: 'Round-the-clock technical support and monitoring for all services with dedicated account managers.',
    icon: ShieldIcon,
    gradient: 'bg-gradient-to-r from-orange-500 to-red-600'
  },
  {
    title: 'AI-Powered Automation',
    description: 'Intelligent automation that reduces manual work by 80% and increases operational efficiency.',
    icon: BrainIcon,
    gradient: 'bg-gradient-to-r from-indigo-500 to-purple-600'
  },
  {
    title: 'Quantum Computing',
    description: 'Access to quantum computing resources that solve complex problems in seconds, not years.',
    icon: AtomIcon,
    gradient: 'bg-gradient-to-r from-teal-500 to-cyan-600'
  }
];

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'CTO, QuantumTech Solutions',
    company: 'QuantumTech Solutions',
    content: 'Zion Tech Group\'s quantum computing platform has revolutionized our research capabilities. We\'ve achieved breakthroughs in materials science that would have taken decades with traditional computing.',
    rating: 5,
    avatar: '👩‍🔬'
  },
  {
    name: 'Michael Rodriguez',
    role: 'CEO, AI Innovations Inc.',
    company: 'AI Innovations Inc.',
    content: 'The AI consciousness platform from Zion Tech Group is truly revolutionary. Our AI systems now demonstrate genuine emotional intelligence and self-awareness capabilities.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Research Director, Space Mining Corp',
    company: 'Space Mining Corp',
    content: 'Zion Tech Group\'s space mining platform has enabled us to identify and plan extraction of valuable resources from asteroids. This is the future of resource acquisition.',
    rating: 5,
    avatar: '👩‍🚀'
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$15,000',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic AI Services',
      'Standard Support',
      'Core Features',
      'Email Support',
      'Basic Analytics'
    ],
    popular: false,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Professional',
    price: '$35,000',
    period: '/month',
    description: 'Ideal for growing businesses and enterprises',
    features: [
      'Advanced AI Services',
      'Quantum Computing Access',
      'Priority Support',
      'Custom Integrations',
      'Advanced Analytics',
      'Dedicated Account Manager'
    ],
    popular: true,
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'Enterprise',
    price: '$75,000',
    period: '/month',
    description: 'For large enterprises and government agencies',
    features: [
      'Full Service Portfolio',
      'Quantum Infrastructure',
      '24/7 Premium Support',
      'Custom Development',
      'White-label Solutions',
      'Dedicated Team',
      'SLA Guarantees'
    ],
    popular: false,
    color: 'from-emerald-500 to-teal-600'
  }
];

export default function Home() {
  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic-advanced">
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
        <meta name="description" content="Leading provider of revolutionary AI consciousness, quantum computing, space technology, and emerging tech solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI consciousness, quantum computing, space mining, brain-computer interface, emerging technology, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI & Quantum Technology" />
        <meta property="og:description" content="Leading provider of revolutionary AI consciousness, quantum computing, and emerging technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary AI & Quantum Technology" />
        <meta name="twitter:description" content="Leading provider of revolutionary AI consciousness, quantum computing, and emerging technology solutions." />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),transparent_50%)]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              The Future of Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI consciousness, quantum computing, space technology, and emerging tech solutions that transform businesses and accelerate human progress.
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2 text-cyan-400">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/comprehensive-services-showcase-2025">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Get Started
                <Phone className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge services that are reshaping industries and accelerating human progress.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={category.href}>
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                    <div className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center text-cyan-400 group-hover:text-white transition-colors duration-300">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

      {/* Hero Features */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that transform businesses and accelerate progress.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future with our most innovative and transformative technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeAIServicesEnhanced2025.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.link}>
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/comprehensive-services-showcase-2025">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 mx-auto">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our revolutionary technology solutions are transforming businesses and accelerating progress.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-cyan-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet the needs of businesses at every stage of growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 ${
                  plan.popular ? 'border-cyan-400' : 'border-gray-700/50'
                } hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                    }`}>
                      Get Started
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with Zion Tech Group. Our revolutionary solutions are waiting to accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                  Start Your Journey
                  <Rocket className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/comprehensive-services-showcase-2025">
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-3">
                <Phone className="w-8 h-8 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-400">{contactInfo.mobile}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Mail className="w-8 h-8 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <MapPin className="w-8 h-8 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-400">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
