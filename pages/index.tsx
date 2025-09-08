import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { additionalRealServices } from '../data/additional-real-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeMicroSaasServicesV3 } from '../data/innovative-micro-saas-v3';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { quantumAIServices2025 } from '../data/quantum-ai-services-2025';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { professionalServices } from '../data/professional-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { emergingTechServices2025 } from '../data/emerging-tech-services-2025';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { realMarketServices } from '../data/real-market-services';
import { serviceExpansions2025 } from '../data/service-expansions-2025';
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2';
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
import { emergingTech2028Services as emergingTech2026ServicesV2 } from '../data/2028-emerging-tech-services';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';
import { nextGenAI2026Services } from '../data/next-gen-ai-2026-services';
import { aiAutonomousServices2026 } from '../data/2026-ai-autonomous-services';
import { quantumSpaceTechServices2026 } from '../data/2026-quantum-space-tech-services';
import { metaverseDigitalRealityServices2026 } from '../data/2026-metaverse-digital-reality-services';
import { innovative2026AIServicesV3 } from '../data/innovative-2026-ai-services-v3';
import { emergingTech2026ServicesV3 } from '../data/emerging-tech-2026-services-v3';
import { enterpriseIT2026ServicesV3 } from '../data/enterprise-it-2026-services-v3';
import { ultimate2026Services } from '../data/ultimate-2026-services';
import { cuttingEdge2027Innovations } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027 } from '../data/2027-practical-micro-saas';
import { revolutionary2026MicroSaasServices } from '../data/revolutionary-2026-micro-saas-services';
import { revolutionary2026ITServices } from '../data/revolutionary-2026-it-services';
import { revolutionary2026AIServices } from '../data/revolutionary-2026-ai-services';
import { revolutionary2027Services } from '../data/revolutionary-2027-services';
import { emergingTech2027Services } from '../data/emerging-tech-2027-services';
import { revolutionary2027AIServices } from '../data/revolutionary-2027-ai-services';
import { revolutionary2027ITServices } from '../data/revolutionary-2027-it-services';
import { revolutionary2027MicroSaasServices } from '../data/revolutionary-2027-micro-saas';
import { futuristic2028Services } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';
import { futuristic2029AIServices } from '../data/2029-futuristic-ai-services';
import { quantumInnovation2029Services } from '../data/2029-quantum-innovation-services';
import { emergingTech2029Services } from '../data/2029-emerging-tech-services';
import { enterpriseIT2029Services } from '../data/2029-enterprise-it-services';
import { practicalBusiness2029Solutions } from '../data/2029-practical-business-solutions';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$100B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '1200%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

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
    ...innovativeMicroSaasServicesV3,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...quantumAIServices2025,
    ...enterpriseITServices,
    ...nextGenerationAIServices,
    ...emergingTechnologyServices,
    ...emergingTechServices2025,
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
    ...futuristic2028Services,
    ...emergingTech2028Services,
    ...innovative2026Services,
    ...emergingTech2026Services,
    ...enterpriseIT2026Services,
    ...innovative2026MicroSaasServices,
    ...emergingTech2026ServicesNew,
    ...enterpriseIT2026ServicesNew,
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...revolutionary2026Innovations,
    ...nextGenAI2026Services,
    ...aiAutonomousServices2026,
    ...quantumSpaceTechServices2026,
    ...metaverseDigitalRealityServices2026,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3,
    ...ultimate2026Services,
    ...cuttingEdge2027Innovations,
    ...practicalMicroSaas2027,
    ...revolutionary2026MicroSaasServices,
    ...revolutionary2026ITServices,
    ...revolutionary2026AIServices,
    ...revolutionary2027Services,
    ...emergingTech2027Services,
    ...revolutionary2027AIServices,
    ...revolutionary2027ITServices,
    ...revolutionary2027MicroSaasServices,
    ...cuttingEdge2028MicroSaas,
    ...practicalBusinessSolutions2028,
    ...futuristic2029AIServices,
    ...quantumInnovation2029Services,
    ...emergingTech2029Services,
    ...enterpriseIT2029Services,
    ...practicalBusiness2029Solutions
  ];

  // Combine all services for comprehensive display
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeMicroSaasServices,
    ...advancedAIServices,
    ...blockchainEmergingTechServices
  ];

  // Service statistics
  const serviceStats = {
    totalServices: allServices.length,
    aiServices: nextGenerationAIServices.length + innovativeAIServices.length + realMarketServices.filter(s => s.category.includes('AI')).length + revolutionary2025Services.filter(s => s.category.includes('AI')).length + nextGenInnovations2025.filter(s => s.category.includes('AI')).length + innovative2026Services.filter(s => s.category.includes('AI')).length + emergingTech2026Services.filter(s => s.category.includes('AI')).length + innovative2026MicroSaasServices.filter(s => s.category.includes('AI')).length + innovative2026MicroSaasServicesV2.filter(s => s.category.includes('AI')).length + emergingTech2026ServicesV2.filter(s => s.category.includes('AI')).length + enterpriseIT2026ServicesV2.filter(s => s.category.includes('AI')).length + revolutionary2026AIServices.length + revolutionary2027Services.filter(s => s.category.includes('AI')).length + emergingTech2027Services.filter(s => s.category.includes('AI')).length + futuristic2029AIServices.length + emergingTech2029Services.filter(s => s.category.includes('AI')).length + enterpriseIT2029Services.filter(s => s.category.includes('AI')).length + practicalBusiness2029Solutions.filter(s => s.category.includes('AI')).length,
    quantumServices: quantumSpaceServices.length + quantumAIServices2025.length + revolutionary2027Services.filter(s => s.category.includes('Quantum')).length + quantumInnovation2029Services.length,
    spaceServices: quantumSpaceServices.length + revolutionary2027Services.filter(s => s.category.includes('Space')).length + emergingTech2029Services.filter(s => s.category.includes('Space')).length,
    biotechServices: revolutionary2027Services.filter(s => s.category.includes('Biotech')).length + emergingTech2027Services.filter(s => s.category.includes('Biotech')).length + emergingTech2029Services.filter(s => s.category.includes('Biotech')).length
  };

const heroFeatures = [
  {
    title: 'AI Consciousness Evolution',
    description: 'Revolutionary AI that develops emotional intelligence and self-awareness',
    icon: <Brain className="w-6 h-6" />,
    href: '/ai-consciousness-evolution-2025'
  },
  {
    title: 'AI Code Generation & Review Platform',
    description: 'Advanced AI platform for automated code generation, review, and optimization across multiple languages.',
    price: '$199/month',
    category: 'AI Automation',
    icon: '💻',
    color: 'from-emerald-500 to-teal-600',
    href: '/ai-code-generation-review'
  },
  {
    title: 'Zero Trust Security Platform',
    description: 'Comprehensive zero trust security with continuous verification and adaptive access controls.',
    price: '$599/month',
    category: 'Cybersecurity',
    icon: '🔒',
    color: 'from-red-500 to-pink-600',
    href: '/zero-trust-security-platform'
  },
  {
    title: 'DeFi Yield Optimization Platform',
    description: 'Intelligent DeFi yield farming optimization across multiple protocols and chains.',
    price: '$99/month',
    category: 'Blockchain & Web3',
    icon: '🌾',
    color: 'from-green-500 to-emerald-600',
    href: '/defi-yield-optimization'
  },
  {
    title: 'AI Drug Discovery Platform',
    description: 'AI-powered drug discovery through molecular modeling and predictive analytics.',
    price: '$2,999/month',
    category: 'Healthcare & Biotech',
    icon: '🧬',
    color: 'from-green-500 to-emerald-600',
    href: '/ai-drug-discovery-platform'
  },
  {
    title: 'Space Mining Platform',
    description: 'Revolutionary asteroid mining and space resource extraction platform with advanced robotics.',
    price: '$500,000/month',
    category: 'Space Technology',
    icon: '🚀',
    color: 'from-purple-500 to-indigo-600',
    href: '/space-mining-platform'
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Head>
          <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
          <meta name="description" content="Discover 500+ revolutionary micro SaaS services, quantum AI solutions, and cutting-edge technology platforms. Achieve 1200% ROI with our innovative services." />
          <meta name="keywords" content="micro SaaS, AI services, quantum computing, blockchain, cybersecurity, space technology, biotech AI, financial trading, metaverse, IoT, cloud computing" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
          <meta property="og:description" content="500+ revolutionary micro SaaS services with quantum AI and cutting-edge technology" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

              <UltraFuturisticBackground2029>
        {/* Ultra Advanced Navigation */}
        <UltraFuturisticNavigation2029 />

                                      {/* Ultra Futuristic Hero Section 2029 */}
                    <UltraFuturisticHero2029 />

        {/* Revolutionary 2027 Hero Section */}
        <Revolutionary2027Hero />

        {/* Revolutionary 2027 Services Showcase */}
        <Revolutionary2027ServicesShowcase />

        {/* Enhanced 2026 Services Showcase */}
        <Enhanced2026ServicesShowcase />

        {/* Revolutionary 2026 Services Showcase */}
        <Revolutionary2026ServiceShowcase />

        {/* Enhanced Services Showcase */}
        <EnhancedServiceShowcase 
          services={allServices.filter(service => 'variant' in service).slice(0, 12)}
          title="Enhanced Services Showcase"
          subtitle="Discover our comprehensive range of innovative solutions"
          maxServices={12}
        />
        <meta property="og:title" content="Zion Tech Group — AI-Powered Technology Solutions" />
        <meta property="og:description" content="Cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
          </p>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
              About Us
            </Link>
            <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
              Our Services
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 border border-purple-400/50 rounded-lg transition-all duration-200">
              Get Started
            </Link>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Innovative Technology Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Business Intelligence */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI Business Intelligence</h3>
              <p className="text-white/80 mb-4">
                Advanced AI-powered business intelligence with predictive analytics, automated insights, and real-time decision support.
              </p>
              <Link href="/services" className="inline-block px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                Learn More
              </Link>
            </div>

            {/* Quantum Computing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Quantum Computing</h3>
              <p className="text-white/80 mb-4">
                Enterprise-grade quantum computing platform for complex optimization problems including logistics and financial modeling.
              </p>
              <Link href="/services" className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                Learn More
              </Link>
            </div>

            {/* Blockchain & Web3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Blockchain & Web3</h3>
              <p className="text-white/80 mb-4">
                Scalable enterprise blockchain solution with smart contract automation and decentralized identity management.
              </p>
              <Link href="/services" className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                Contact Us Today
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technologies We Master
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready-to-Deploy Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our portfolio of micro SAAS applications, AI services, and enterprise solutions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Rocket,
                title: 'Micro SAAS Solutions',
                description: 'Ready-to-deploy software solutions for immediate business value',
                features: ['ZionTask Pro', 'ZionCRM Hub', 'ZionAnalytics'],
                color: 'from-purple-500 to-pink-600',
                href: '/products#micro-saas'
              },
              {
                icon: Brain,
                title: 'AI-Powered Services',
                description: 'Intelligent automation and machine learning solutions',
                features: ['ZionAI Assistant', 'ZionPredict', 'ZionVision'],
                color: 'from-blue-500 to-cyan-600',
                href: '/products#ai-services'
              },
              {
                icon: Cloud,
                title: 'Cloud Infrastructure',
                description: 'Scalable cloud platforms and infrastructure services',
                features: ['ZionCloud Platform', 'ZionKubernetes', 'ZionServerless'],
                color: 'from-green-500 to-emerald-600',
                href: '/products#cloud-solutions'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={product.href}>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <product.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-slate-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                      Explore Products
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <Eye className="w-5 h-5 mr-2" />
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group to drive innovation, 
                enhance security, and accelerate growth through cutting-edge technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Link>
                
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Learn More About Us
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Proven Track Record</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Innovation Focus</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="group"
              >
                View All 500+ Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Contact us today to discover how our revolutionary services can drive unprecedented growth and ROI
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                  <Phone className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">{contactInfo.mobile}</p>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                  <Mail className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6">
                  <MapPin className="h-8 w-8 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                >
                  View Pricing
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      {/* Footer */}
      <UltraFuturisticFooter2029 />
    </UltraAdvancedFuturisticBackground>
  );
}
