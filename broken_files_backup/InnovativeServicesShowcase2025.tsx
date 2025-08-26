import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Shield,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Zap,
  Globe,
  Lock,
  Cpu,
  Sparkles,
  ShieldCheck,
  Globe2,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
const InnovativeServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-600 to-pink-600' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-blue-600 to-cyan-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-pink-600' },
    { id: 'cloud-infrastructure', name: 'Cloud & Infrastructure', icon: Cloud, color: 'from-indigo-600 to-purple-600' },
    { id: 'quantum', name: 'Quantum Technology', icon: Globe2, color: 'from-violet-600 to-purple-600' },
    { id: 'healthcare', name: 'Healthcare Tech', icon: Target, color: 'from-green-600 to-emerald-600' },
    { id: 'fintech', name: 'Financial Technology', icon: BarChart3, color: 'from-yellow-600 to-orange-600' },
    { id: 'legal-tech', name: 'Legal Technology', icon: Lock, color: 'from-purple-600 to-indigo-600' },
    { id: 'edge-computing', name: 'Edge Computing', icon: Cpu, color: 'from-cyan-600 to-blue-600' },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Network, color: 'from-orange-600 to-red-600' }
  ];
  const innovativeServices = [
    // AI & Machine Learning Services
    {
      id: 'ai-legal-document-analyzer',
      name: 'AI Legal Document Analyzer',
      tagline: 'Intelligent legal document review and analysis with AI-powered insights',
      price: '$299',
      period: '/month',
      description: 'Advanced AI platform that analyzes legal documents, contracts, and agreements to identify risks, opportunities, and compliance issues.',
      features: [
        'AI-powered contract analysis with 95% accuracy',
        'Risk assessment and compliance checking',
        'Automated legal document summarization',
        'Contract clause comparison and benchmarking',
        'Legal precedent research and citation'
      ],
      category: 'ai-ml',
      icon: '⚖️',
      color: 'from-purple-600 to-indigo-600',
      popular: true,
      link: 'https://ziontechgroup.com/ai-legal-analyzer',
      marketPosition: 'Competes with DocuSign ($25/user/month), ContractPodAi ($50/user/month)',
      targetAudience: 'Law firms, Legal departments, Contract managers, Compliance officers',
      roi: '500% ROI through reduced review time and improved accuracy',
      competitors: ['DocuSign', 'ContractPodAi', 'Kira Systems', 'eBrevia'],
      marketSize: '$2.8B legal tech market',
      growthRate: '28% annual growth'
    },
    {
      id: 'ai-healthcare-diagnostics',
      name: 'AI Healthcare Diagnostics Platform',
      tagline: 'Advanced medical imaging analysis and diagnostic support',
      price: '$899',
      period: '/month',
      description: 'Comprehensive AI platform for medical imaging analysis, diagnostic support, and patient care optimization.',
      features: [
        'AI-powered medical image analysis (95%+ accuracy)',
        'Support for X-ray, MRI, CT, ultrasound, and pathology images',
        'Automated abnormality detection and classification',
        'Diagnostic report generation and recommendations',
        'Patient history integration and trend analysis'
      ],
      category: 'healthcare',
      icon: '🏥',
      color: 'from-blue-600 to-cyan-600',
      popular: true,
      link: 'https://ziontechgroup.com/ai-healthcare-diagnostics',
      marketPosition: 'Competes with Aidoc ($500/study), Arterys ($200/study)',
      targetAudience: 'Hospitals, Imaging centers, Radiology practices, Healthcare systems',
      roi: '400% ROI through improved diagnostic accuracy and efficiency',
      competitors: ['Aidoc', 'Arterys', 'Zebra Medical Vision', 'Enlitic'],
      marketSize: '$45B medical imaging market',
      growthRate: '32% annual growth in AI segment'
    },
    {
      id: 'ai-content-creation-studio',
      name: 'AI Content Creation Studio',
      tagline: 'Professional content creation powered by artificial intelligence',
      price: '$399',
      period: '/month',
      description: 'Comprehensive AI-powered content creation platform that generates high-quality text, images, videos, and audio content.',
      features: [
        'AI-powered text, image, video, and audio generation',
        'Brand voice training and consistency',
        'Multi-format content creation (blog, social, video)',
        'Advanced editing and customization tools',
        'SEO optimization and keyword research'
      ],
      category: 'ai-ml',
      icon: '🎨',
      color: 'from-pink-600 to-rose-600',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-studio',
      marketPosition: 'Competes with Jasper ($39/month), Copy.ai ($36/month), Midjourney ($30/month)',
      targetAudience: 'Marketing agencies, Content creators, E-commerce businesses, Social media managers',
      roi: '300% ROI through improved content quality and reduced creation time',
      competitors: ['Jasper', 'Copy.ai', 'Midjourney', 'DALL-E', 'Canva'],
      marketSize: '$18B content creation market',
      growthRate: '35% annual growth'
    },
    // Cybersecurity Services
    {
      id: 'quantum-safe-cybersecurity',
      name: 'Quantum-Safe Cybersecurity Platform',
      tagline: 'Post-quantum cryptography for future-proof security',
      price: '$1,299',
      period: '/month',
      description: 'Next-generation cybersecurity platform that implements post-quantum cryptography algorithms to protect against future quantum computing threats.',
      features: [
        'Post-quantum cryptography algorithms (NIST standards)',
        'Quantum-resistant key management',
        'Real-time threat detection and response',
        'Zero-trust security architecture',
        'Advanced encryption standards (AES-256, ChaCha20)'
      ],
      category: 'cybersecurity',
      icon: '🔐',
      color: 'from-green-600 to-emerald-600',
      popular: false,
      link: 'https://ziontechgroup.com/quantum-safe-cybersecurity',
      marketPosition: 'Leading edge in quantum-safe security',
      targetAudience: 'Financial institutions, Government agencies, Healthcare organizations, Defense contractors',
      roi: '300% ROI through reduced security risks and compliance benefits',
      competitors: ['Traditional cybersecurity vendors', 'Quantum-safe startups'],
      marketSize: '$150B cybersecurity market',
      growthRate: '45% annual growth in quantum-safe segment'
    },
    {
      id: 'ai-cybersecurity-soc',
      name: 'AI Cybersecurity Operations Center',
      tagline: 'Intelligent security operations with AI-powered threat detection',
      price: '$1,899',
      period: '/month',
      description: 'Advanced cybersecurity operations center that uses AI and machine learning to detect, analyze, and respond to security threats in real-time.',
      features: [
        'AI-powered threat detection and analysis',
        'Real-time security monitoring',
        'Automated incident response',
        'Threat intelligence and correlation',
        'Vulnerability assessment and management'
      ],
      category: 'cybersecurity',
      icon: '🛡️',
      color: 'from-red-600 to-pink-600',
      popular: true,
      link: 'https://ziontechgroup.com/ai-cybersecurity-soc',
      marketPosition: 'Competes with Splunk ($150/GB/month), IBM QRadar ($1,000/month)',
      targetAudience: 'Enterprises, Government agencies, Financial institutions, Healthcare organizations',
      roi: '400% ROI through improved security posture and reduced incident response time',
      competitors: ['Splunk', 'IBM QRadar', 'Exabeam', 'Rapid7'],
      marketSize: '$45B cybersecurity market',
      growthRate: '28% annual growth'
    },
    // Cloud & Infrastructure Services
    {
      id: 'multi-cloud-orchestration',
      name: 'Multi-Cloud Orchestration Platform',
      tagline: 'Unified management across AWS, Azure, Google Cloud, and private clouds',
      price: '$1,299',
      period: '/month',
      description: 'Enterprise-grade multi-cloud orchestration platform that provides unified management, monitoring, and optimization across multiple cloud providers.',
      features: [
        'Unified dashboard for multiple cloud providers',
        'Intelligent workload placement optimization',
        'Automated cost optimization and savings',
        'Seamless cloud migration and portability',
        'Multi-cloud security and compliance management'
      ],
      category: 'cloud-infrastructure',
      icon: '☁️',
      color: 'from-blue-600 to-cyan-600',
      popular: true,
      link: 'https://ziontechgroup.com/multi-cloud-orchestration',
      marketPosition: 'Competes with HashiCorp ($0.50/hour), Terraform Cloud ($20/user/month)',
      targetAudience: 'Enterprises, Cloud architects, DevOps teams, IT operations',
      roi: '400% ROI through reduced cloud costs and improved efficiency',
      competitors: ['HashiCorp', 'Terraform Cloud', 'CloudBolt', 'RightScale'],
      marketSize: '$25B multi-cloud management market',
      growthRate: '35% annual growth'
    },
    {
      id: 'ai-devops-automation',
      name: 'AI-Powered DevOps Automation Platform',
      tagline: 'Intelligent automation for development and operations',
      price: '$899',
      period: '/month',
      description: 'Comprehensive DevOps automation platform that uses AI and machine learning to optimize CI/CD pipelines, infrastructure management, and operational processes.',
      features: [
        'AI-powered CI/CD pipeline optimization',
        'Intelligent infrastructure as code',
        'Automated testing and quality assurance',
        'Performance monitoring and optimization',
        'Incident prediction and prevention'
      ],
      category: 'cloud-infrastructure',
      icon: '⚡',
      color: 'from-yellow-600 to-orange-600',
      popular: true,
      link: 'https://ziontechgroup.com/ai-devops-automation',
      marketPosition: 'Competes with GitLab ($99/user/month), GitHub Actions ($4/month), Jenkins (free)',
      targetAudience: 'Development teams, DevOps engineers, IT operations, Software companies',
      roi: '300% ROI through reduced deployment time and improved reliability',
      competitors: ['GitLab', 'GitHub Actions', 'Jenkins', 'CircleCI', 'Travis CI'],
      marketSize: '$8B DevOps market',
      growthRate: '28% annual growth'
    },
    // Quantum Technology Services
    {
      id: 'quantum-machine-learning',
      name: 'Quantum Machine Learning Platform',
      tagline: 'Revolutionary machine learning powered by quantum computing',
      price: '$2,999',
      period: '/month',
      description: 'Cutting-edge quantum machine learning platform that leverages quantum computing to solve complex optimization problems, accelerate AI training, and provide quantum advantage.',
      features: [
        'Quantum machine learning algorithms',
        'Hybrid quantum-classical computing',
        'Quantum optimization and sampling',
        'Quantum neural networks',
        'Integration with classical ML frameworks'
      ],
      category: 'quantum',
      icon: '🔮',
      color: 'from-violet-600 to-purple-600',
      popular: false,
      link: 'https://ziontechgroup.com/quantum-ml',
      marketPosition: 'Leading edge in quantum machine learning',
      targetAudience: 'Research institutions, Pharmaceutical companies, Financial services, Aerospace',
      roi: '600% ROI through accelerated discoveries and breakthroughs',
      competitors: ['IBM Quantum', 'Google Quantum', 'AWS Braket', 'Azure Quantum'],
      marketSize: '$1.8B quantum computing market',
      growthRate: '55% annual growth'
    },
    {
      id: 'quantum-internet-infrastructure',
      name: 'Quantum Internet Infrastructure Platform',
      tagline: 'Next-generation quantum networking for ultra-secure communications',
      price: '$3,999',
      period: '/month',
      description: 'Cutting-edge quantum internet infrastructure platform that enables ultra-secure quantum communications and networking.',
      features: [
        'Quantum key distribution (QKD)',
        'Quantum repeater networks',
        'Quantum network management',
        'Quantum-safe communications',
        'Integration with classical networks'
      ],
      category: 'quantum',
      icon: '🌐🔮',
      color: 'from-violet-600 to-purple-600',
      popular: false,
      link: 'https://ziontechgroup.com/quantum-internet',
      marketPosition: 'Leading edge in quantum internet',
      targetAudience: 'Government agencies, Defense contractors, Financial institutions, Research institutions',
      roi: '800% ROI through enhanced security and capabilities',
      competitors: ['Traditional networking vendors', 'Quantum networking startups'],
      marketSize: '$1.2B quantum networking market',
      growthRate: '70% annual growth'
    },
    // Financial Technology Services
    {
      id: 'ai-financial-risk-management',
      name: 'AI Financial Risk Management Platform',
      tagline: 'Intelligent risk assessment and portfolio optimization',
      price: '$1,499',
      period: '/month',
      description: 'Advanced financial risk management platform that uses AI and machine learning to assess market risks, optimize portfolios, and provide real-time risk monitoring.',
      features: [
        'AI-powered risk assessment and modeling',
        'Real-time portfolio risk monitoring',
        'Stress testing and scenario analysis',
        'Regulatory compliance (Basel III, Solvency II)',
        'Multi-asset class support'
      ],
      category: 'fintech',
      icon: '💰',
      color: 'from-yellow-600 to-orange-600',
      popular: true,
      link: 'https://ziontechgroup.com/ai-financial-risk',
      marketPosition: 'Competes with RiskMetrics ($2,000/month), Bloomberg Risk ($1,500/month)',
      targetAudience: 'Banks, Investment firms, Insurance companies, Asset managers, Hedge funds',
      roi: '450% ROI through improved risk management and compliance',
      competitors: ['RiskMetrics', 'Bloomberg Risk', 'MSCI', 'FactSet'],
      marketSize: '$8.5B risk management market',
      growthRate: '25% annual growth'
    },
    // Blockchain & Web3 Services
    {
      id: 'blockchain-supply-chain',
      name: 'Blockchain Supply Chain Transparency Platform',
      tagline: 'End-to-end supply chain visibility with blockchain technology',
      price: '$599',
      period: '/month',
      description: 'Comprehensive supply chain transparency platform using blockchain technology to provide real-time tracking, verification, and compliance across the entire supply chain.',
      features: [
        'Blockchain-based supply chain tracking',
        'Real-time product traceability',
        'Smart contract automation for compliance',
        'Supplier verification and certification',
        'Product authenticity verification'
      ],
      category: 'blockchain',
      icon: '🔗',
      color: 'from-orange-600 to-red-600',
      popular: false,
      link: 'https://ziontechgroup.com/blockchain-supply-chain',
      marketPosition: 'Competes with IBM Food Trust ($100/month), VeChain ($50/month)',
      targetAudience: 'Manufacturers, Retailers, Logistics companies, Food producers, Pharmaceutical companies',
      roi: '350% ROI through improved transparency and reduced fraud',
      competitors: ['IBM Food Trust', 'VeChain', 'Provenance', 'Ambrosus'],
      marketSize: '$3.2B blockchain supply chain market',
      growthRate: '38% annual growth'
    },
    // Edge Computing Services
    {
      id: 'edge-ai-computing',
      name: 'Edge AI Computing Platform',
      tagline: 'Distributed AI processing at the edge for real-time intelligence',
      price: '$799',
      period: '/month',
      description: 'Revolutionary edge AI computing platform that brings artificial intelligence processing to the edge of networks, enabling real-time decision making and reduced latency.',
      features: [
        'Distributed AI processing at network edge',
        'Real-time inference and decision making',
        'Low-latency AI model deployment',
        'Edge device management and monitoring',
        'Federated learning capabilities'
      ],
      category: 'edge-computing',
      icon: '🌐',
      color: 'from-indigo-600 to-purple-600',
      popular: false,
      link: 'https://ziontechgroup.com/edge-ai-computing',
      marketPosition: 'Leading edge in distributed AI computing',
      targetAudience: 'IoT companies, Autonomous vehicle manufacturers, Smart city developers, Industrial automation',
      roi: '400% ROI through improved real-time capabilities and reduced latency',
      competitors: ['Traditional cloud AI platforms', 'Edge computing startups'],
      marketSize: '$12B edge AI market',
      growthRate: '42% annual growth'
    },
    // Advanced Computing Services
    {
      id: 'neuromorphic-computing',
      name: 'Neuromorphic Computing Platform',
      tagline: 'Brain-inspired computing for ultra-efficient AI processing',
      price: '$3,999',
      period: '/month',
      description: 'Revolutionary neuromorphic computing platform that mimics the human brain\'s neural structure for ultra-efficient AI processing.',
      features: [
        'Neuromorphic computing architecture',
        'Spiking neural networks',
        'Ultra-low power consumption',
        'Real-time learning and adaptation',
        'Custom neuromorphic chip design'
      ],
      category: 'ai-ml',
      icon: '🧠',
      color: 'from-cyan-600 to-blue-600',
      popular: false,
      link: 'https://ziontechgroup.com/neuromorphic-computing',
      marketPosition: 'Leading edge in neuromorphic computing',
      targetAudience: 'Research institutions, AI companies, Semiconductor manufacturers, Government agencies',
      roi: '800% ROI through breakthrough discoveries and energy savings',
      competitors: ['Intel Loihi', 'IBM TrueNorth', 'BrainChip', 'SynSense'],
      marketSize: '$2.1B neuromorphic computing market',
      growthRate: '65% annual growth'
    }
  ];
  const filteredServices = selectedCategory === 'all'
    ? innovativeServices
    : innovativeServices.filter(service => service.category === selectedCategory);
  const selectedServiceData = selectedService
    ? innovativeServices.find(service => service.id === selectedService)
    : null;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead
        config={{
          title: "Innovative Services Showcase 2025 | Zion Tech Group",
          description: "Discover our cutting-edge micro SAAS services, IT solutions, and AI platforms. From quantum computing to AI-powered healthcare diagnostics.",
          keywords: "AI services, micro SAAS, IT solutions, quantum computing, cybersecurity, healthcare AI, blockchain, edge computing"
        }}
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services Showcase
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI platforms that are transforming industries and driving innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Real, Market-Ready Solutions
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Competitive Pricing
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Expert Support
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400">{service.period}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                    {service.category.replace('-', ' ').toUpperCase()}
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Detail Modal */}
      {selectedServiceData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-6xl">{selectedServiceData.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedServiceData.name}</h2>
                    <p className="text-xl text-gray-300">{selectedServiceData.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-gray-300 mb-6">{selectedServiceData.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {selectedServiceData.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Target Audience</h4>
                    <p className="text-gray-300">{selectedServiceData.targetAudience}</p>
                  </div>
                </div>
                <div>
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing & Market</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Price:</span>
                        <span className="text-white font-semibold">{selectedServiceData.price}{selectedServiceData.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 font-semibold">{selectedServiceData.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-white font-semibold">{selectedServiceData.marketSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Growth Rate:</span>
                        <span className="text-blue-400 font-semibold">{selectedServiceData.growthRate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Competitive Analysis</h4>
                    <p className="text-gray-300 mb-3">{selectedServiceData.marketPosition}</p>
                    <div>
                      <span className="text-gray-400 text-sm">Competitors:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedServiceData.competitors.map((competitor, index) => (
                          <span key={index} className="bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded">
                            {competitor}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedServiceData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Service
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com?subject=Inquiry about service"
                      className="flex-1 bg-white/10 text-white py-3 px-6 rounded-xl font-semibold text-center hover:bg-white/20 transition-all duration-300"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our innovative services are designed to give you a competitive edge in today's rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service consultation request"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default InnovativeServicesShowcase2025;