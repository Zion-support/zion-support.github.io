import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, Shield, Mail, MapPin, Rocket, Brain, Users, Globe, Award, Atom, Lock } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { professionalServices } from '../data/professional-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { realMarketServices } from '../data/real-market-services';
import { serviceExpansions2025 } from '../data/service-expansions-2025';
import { realOperationalServices } from '../data/real-operational-services';
import { newOperationalServices2025 } from '../data/new-operational-services-2025';
import { innovative2025Services } from '../data/innovative-2025-services';
import { revolutionary2025Services } from '../data/revolutionary-2025-services';
import { nextGenInnovations2025 } from '../data/next-gen-innovations-2025';
import { innovative2026Services } from '../data/innovative-2026-services';
import { emergingTech2026Services } from '../data/emerging-tech-2026-services';
import { enterpriseIT2026Services } from '../data/enterprise-it-2026-services';
import { innovative2026MicroSaasServices } from '../data/innovative-2026-micro-saas';
import { emergingTech2026Services as emergingTech2026ServicesNew } from '../data/emerging-tech-2026-services';
import { enterpriseIT2026Services as enterpriseIT2026ServicesNew } from '../data/enterprise-it-2026-services';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';
import { nextGenAI2026Services } from '../data/next-gen-ai-2026-services';
import { aiAutonomousServices2026 } from '../data/2026-ai-autonomous-services';
import { quantumSpaceTechServices2026 } from '../data/2026-quantum-space-tech-services';
import { metaverseDigitalRealityServices2026 } from '../data/2026-metaverse-digital-reality-services';
import { innovative2026AIServicesV3 } from '../data/innovative-2026-ai-services-v3';
import { emergingTech2026ServicesV3 } from '../data/emerging-tech-2026-services-v3';
import { enterpriseIT2026ServicesV3 } from '../data/enterprise-it-2026-services-v3';
import { ultimate2026Services } from '../data/ultimate-2026-services';
import { innovative2026MicroSaasV4Services } from '../data/innovative-2026-micro-saas-v4';
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4';

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services for comprehensive showcase
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...enterpriseITServices,
    ...nextGenerationAIServices,
    ...emergingTechnologyServices,
    ...comprehensiveITSolutions,
    ...realMarketServices,
    ...serviceExpansions2025,
    ...realOperationalServices,
    ...newOperationalServices2025,
    ...verifiedRealServices2025Batch2,
    ...innovative2025Services,
    ...emergingTechServices2025,
    ...revolutionary2025Services,
    ...nextGenInnovations2025,
    ...innovative2026Services,
    ...emergingTech2026Services,
    ...enterpriseIT2026Services,
    ...innovative2026MicroSaasServices,
    ...emergingTech2026ServicesNew,
    ...enterpriseIT2026ServicesNew,
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...revolutionary2026Innovations,
    ...nextGenAI2026Services,
    ...aiAutonomousServices2026,
    ...quantumSpaceTechServices2026,
    ...metaverseDigitalRealityServices2026,
    ...innovative2026MicroSaasV4Services,
    ...emergingTech2026ServicesV4,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3,
    ...ultimate2026Services
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
    services: innovativeRealMicroSaasServices2025.slice(0, 4),
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    href: '/micro-saas',
    features: ['Content Automation', 'CRM Intelligence', 'Decision Engine', 'HR Analytics']
  },
  {
    title: 'Advanced AI Automation',
    description: 'Revolutionary AI automation for development, testing, DevOps, and security',
    services: advancedAIAutomationServices2025.slice(0, 3),
    icon: Brain,
    color: 'from-emerald-500 to-teal-600',
    href: '/advanced-ai-automation-services',
    features: ['Code Review AI', 'Testing Automation', 'DevOps Intelligence']
  },
  {
    title: 'Advanced IT Infrastructure',
    description: 'Next-generation infrastructure with quantum computing and edge computing',
    services: advancedITInfrastructureServices2025.slice(0, 3),
    icon: Cloud,
    color: 'from-indigo-500 to-purple-600',
    href: '/advanced-it-infrastructure-services',
    features: ['Quantum Cloud', 'Edge Computing', 'Zero Trust Security']
  },
  {
    title: 'Innovative Business Solutions',
    description: 'AI-powered business intelligence, marketing, sales, and HR solutions',
    services: innovativeBusinessSolutions2025.slice(0, 3),
    icon: Target,
    color: 'from-green-500 to-emerald-600',
    href: '/innovative-business-solutions',
    features: ['Business Intelligence', 'Marketing Automation', 'Sales Intelligence']
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
    title: 'Future-Proof Solutions',
    description: 'Built with scalability and future technologies in mind, ensuring your investment grows with your business.',
    icon: Sparkles,
    gradient: 'bg-gradient-to-r from-pink-500 to-rose-600'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'Zion Tech Group transformed our infrastructure with their quantum cloud solutions. 10x performance improvement!',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Michael Chen',
    role: 'CEO, InnovateLab',
    content: 'Their AI services helped us automate 80% of our operations. Game-changing technology!',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Research Director, BioTech Institute',
    content: 'The quantum-bio computing platform accelerated our research by 1000x. Revolutionary technology!',
    rating: 5,
    avatar: '👩‍🔬'
  }
];

const pricingPlans = [
  {
    title: 'AI Consciousness Evolution Platform',
    description: 'Breakthrough platform enabling AI systems to develop genuine consciousness and emotional intelligence.',
    price: '$2,999/month',
    category: 'AI & Consciousness',
    icon: '🧠',
    color: 'from-violet-500 to-purple-600',
    href: '/ai-consciousness-evolution-2025'
  },
  {
    name: 'Professional',
    price: '$799',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 20 services',
      'Priority support',
      'Advanced features',
      'Phone support',
      'Advanced analytics',
      'Custom integrations'
    ],
    popular: true,
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Quantum Cloud Infrastructure',
    description: 'Next-generation quantum-enhanced cloud computing infrastructure with unprecedented power.',
    price: '$2,999/month',
    category: 'Quantum Infrastructure',
    icon: '☁️',
    color: 'from-blue-500 to-indigo-600',
    href: '/quantum-cloud-infrastructure-platform'
  },
  {
    title: 'AI Multimodal Fusion Platform',
    description: 'Unified AI processing across text, image, audio, and video with 95% accuracy.',
    price: '$1,999/month',
    category: 'AI Multimodal',
    icon: '🔗',
    color: 'from-indigo-500 to-purple-600',
    href: '/ai-multimodal-fusion-platform'
  },
  {
    title: 'Brain-Computer Interface Platform',
    description: 'Revolutionary neural interface technology for human-AI collaboration.',
    price: '$25,000/month',
    category: 'Neural Technology',
    icon: '🧠',
    color: 'from-pink-500 to-rose-600',
    href: '/brain-computer-interface-platform'
  },
  {
    title: 'Zero Trust Security Platform',
    description: 'Advanced zero trust architecture reducing security breaches by 95%.',
    price: '$1,499/month',
    category: 'Cybersecurity',
    icon: '🔒',
    color: 'from-red-500 to-pink-600',
    href: '/zero-trust-security-platform'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic-advanced">
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum & Emerging Technology Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions. 500+ services, 99.9% uptime, 300% average ROI." />
        <meta name="keywords" content="AI services, quantum computing, emerging technology, micro SAAS, enterprise IT, consciousness AI, space technology" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Future Technology
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Solutions Today
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with revolutionary AI, quantum computing, and emerging technology solutions. 
              We're not just building the future – we're living it.
            </p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/comprehensive-services-showcase-2025">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25">
                  Explore All Services
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 font-semibold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
                  Get Started Today
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Service Categories */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services organized by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Link href={category.href}>
                  <div className={`${category.color} p-1 rounded-xl`}>
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 h-full hover:bg-gray-800/90 transition-all duration-300 border border-white/10">
                      <div className="text-center">
                        <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                        <div className="space-y-2 mb-4">
                          {category.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 text-cyan-400 text-sm font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                          {category.services.length} Services →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Services */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and innovative technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {innovativeRealMicroSaasServices2025.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`${service.color} p-1 rounded-xl`}>
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 h-full border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{service.icon}</span>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <Link
                        href={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business solutions to deliver 
              unprecedented value and competitive advantages.
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
                <div className={`p-6 rounded-2xl ${feature.gradient} hover:scale-105 transition-all duration-300 h-full`}>
                  <div className="text-4xl mb-4">{feature.icon({ className: "w-12 h-12 text-white" })}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-100">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied clients who have transformed their businesses 
              with our revolutionary technology solutions.
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
                className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Innovations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Latest Innovations 2025
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our breakthrough technologies that are reshaping industries and creating new possibilities.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {latestInnovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                variants={itemVariants}
                className="group relative bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="text-4xl mb-4">{innovation.icon}</div>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${innovation.color} text-white text-xs font-semibold rounded-full`}>
                    {innovation.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {innovation.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {innovation.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-cyan-400">
                    {innovation.price}
                  </div>
                  <div className="text-sm text-gray-500">Starting from</div>
                </div>
                
                <Link
                  href={innovation.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  Explore Innovation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center px-4">
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
              Join the future of technology today. Get started with our revolutionary 
              solutions and experience unprecedented growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
