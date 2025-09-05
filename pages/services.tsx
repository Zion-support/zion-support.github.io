import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Cloud, 
  Shield, 
  Zap, 
  Building, 
  Smartphone, 
  Database, 
  BarChart3, 
  Globe, 
  Lock, 
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityProvider from '../components/AccessibilityProvider';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  pricing: string;
  href: string;
  color: string;
  category: string;
  popular?: boolean;
}

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Code },
    { id: 'ai', name: 'AI Services', icon: Cpu },
    { id: 'it', name: 'IT & Cloud', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'performance', name: 'Performance', icon: Zap },
    { id: 'enterprise', name: 'Enterprise', icon: Building }
  ];

  const services: Service[] = [
    // Micro SaaS Products
    {
      id: 'video-clip-maker',
      title: 'AI-Powered Video Clip Maker',
      description: 'Automatically create engaging video clips from long-form content using advanced AI algorithms.',
      icon: Code,
      features: ['AI-powered content analysis', 'Automatic clip generation', 'Custom branding options', 'Multi-platform export'],
      pricing: 'Starting at $99/month',
      href: '/services/video-clip-maker',
      color: 'blue',
      category: 'micro-saas',
      popular: true
    },
    {
      id: 'smart-contract-analyzer',
      title: 'Smart Contract Analyzer',
      description: 'Comprehensive analysis and security auditing for blockchain smart contracts.',
      icon: Shield,
      features: ['Security vulnerability detection', 'Gas optimization suggestions', 'Code quality analysis', 'Automated reporting'],
      pricing: 'Starting at $199/month',
      href: '/services/smart-contract-analyzer',
      color: 'purple',
      category: 'micro-saas'
    },
    {
      id: 'cybersecurity-intelligence',
      title: 'Cybersecurity Threat Intelligence',
      description: 'Real-time threat monitoring and intelligence gathering for enhanced security.',
      icon: Lock,
      features: ['Real-time threat monitoring', 'Automated incident response', 'Threat intelligence feeds', 'Custom security reports'],
      pricing: 'Starting at $299/month',
      href: '/services/cybersecurity-intelligence',
      color: 'red',
      category: 'micro-saas'
    },
    {
      id: 'website-translator',
      title: 'Multi-Language Website Translator',
      description: 'AI-powered website translation with context-aware localization.',
      icon: Globe,
      features: ['100+ language support', 'Context-aware translation', 'SEO optimization', 'Real-time updates'],
      pricing: 'Starting at $149/month',
      href: '/services/website-translator',
      color: 'green',
      category: 'micro-saas'
    },

    // AI Services
    {
      id: 'autonomous-agents',
      title: 'Autonomous AI Agents',
      description: 'Intelligent agents that can perform complex tasks autonomously with minimal human intervention.',
      icon: Cpu,
      features: ['Natural language processing', 'Task automation', 'Learning capabilities', 'API integrations'],
      pricing: 'Starting at $399/month',
      href: '/services/autonomous-agents',
      color: 'purple',
      category: 'ai',
      popular: true
    },
    {
      id: 'ai-trading',
      title: 'AI-Powered Financial Trading',
      description: 'Advanced AI algorithms for automated trading and financial analysis.',
      icon: BarChart3,
      features: ['Market analysis', 'Risk management', 'Automated trading', 'Performance analytics'],
      pricing: 'Starting at $599/month',
      href: '/services/ai-trading',
      color: 'blue',
      category: 'ai'
    },
    {
      id: 'legal-document-analysis',
      title: 'AI Legal Document Analysis',
      description: 'Intelligent analysis of legal documents with contract review and compliance checking.',
      icon: Database,
      features: ['Contract analysis', 'Compliance checking', 'Risk assessment', 'Document summarization'],
      pricing: 'Starting at $299/month',
      href: '/services/legal-document-analysis',
      color: 'indigo',
      category: 'ai'
    },
    {
      id: 'voice-analytics',
      title: 'AI-Powered Voice Analytics',
      description: 'Advanced voice analysis for sentiment, emotion, and content extraction.',
      icon: Users,
      features: ['Sentiment analysis', 'Emotion detection', 'Content extraction', 'Real-time processing'],
      pricing: 'Starting at $199/month',
      href: '/services/voice-analytics',
      color: 'pink',
      category: 'ai'
    },

    // IT & Cloud Services
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Consulting',
      description: 'Expert consultation on quantum computing applications and implementation strategies.',
      icon: Cpu,
      features: ['Quantum algorithm design', 'Implementation strategies', 'Performance optimization', 'Training programs'],
      pricing: 'Starting at $999/month',
      href: '/services/quantum-computing',
      color: 'cyan',
      category: 'it'
    },
    {
      id: 'blockchain-web3',
      title: 'Blockchain & Web3 Solutions',
      description: 'Comprehensive blockchain development and Web3 integration services.',
      icon: Shield,
      features: ['Smart contract development', 'DApp creation', 'DeFi solutions', 'NFT platforms'],
      pricing: 'Starting at $799/month',
      href: '/services/blockchain-web3',
      color: 'purple',
      category: 'it',
      popular: true
    },
    {
      id: 'devsecops',
      title: 'DevSecOps & Security Automation',
      description: 'Integrated development, security, and operations with automated security practices.',
      icon: Lock,
      features: ['CI/CD pipeline security', 'Automated testing', 'Vulnerability scanning', 'Compliance automation'],
      pricing: 'Starting at $499/month',
      href: '/services/devsecops',
      color: 'red',
      category: 'it'
    },
    {
      id: 'enterprise-data-platform',
      title: 'Enterprise Data Platform',
      description: 'Scalable data platform for enterprise-level data management and analytics.',
      icon: Database,
      features: ['Data warehousing', 'Real-time analytics', 'Data governance', 'Scalable infrastructure'],
      pricing: 'Starting at $1299/month',
      href: '/services/enterprise-data-platform',
      color: 'blue',
      category: 'it'
    },

    // Security Services
    {
      id: 'threat-intelligence',
      title: 'Advanced Threat Intelligence',
      description: 'Comprehensive threat intelligence and security monitoring services.',
      icon: Shield,
      features: ['Threat hunting', 'Incident response', 'Security monitoring', 'Threat intelligence feeds'],
      pricing: 'Starting at $399/month',
      href: '/services/threat-intelligence',
      color: 'red',
      category: 'security'
    },
    {
      id: 'security-audits',
      title: 'Security Audits & Assessments',
      description: 'Comprehensive security audits and vulnerability assessments for your infrastructure.',
      icon: Lock,
      features: ['Penetration testing', 'Vulnerability assessment', 'Compliance auditing', 'Security recommendations'],
      pricing: 'Starting at $299/month',
      href: '/services/security-audits',
      color: 'orange',
      category: 'security'
    },

    // Performance Services
    {
      id: 'performance-audits',
      title: 'Performance Audits & Optimization',
      description: 'Comprehensive performance analysis and optimization for web applications.',
      icon: Zap,
      features: ['Performance auditing', 'Code optimization', 'Database tuning', 'Caching strategies'],
      pricing: 'Starting at $199/month',
      href: '/services/performance-audits',
      color: 'yellow',
      category: 'performance'
    },

    // Enterprise Services
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed specifically for your business needs.',
      icon: Building,
      features: ['Custom development', 'System integration', 'API development', 'Maintenance support'],
      pricing: 'Starting at $799/month',
      href: '/services/custom-software',
      color: 'indigo',
      category: 'enterprise'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes.',
      icon: Globe,
      features: ['Process automation', 'Technology migration', 'Staff training', 'Change management'],
      pricing: 'Starting at $1999/month',
      href: '/services/digital-transformation',
      color: 'blue',
      category: 'enterprise',
      popular: true
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleServiceClick = (service: Service) => {
    setIsLoading(true);
    // Simulate loading for demo
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = service.href;
    }, 1000);
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen text="Loading services..." />;
  }

  return (
    <AccessibilityProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <SEOHead 
          title="Our Services - Zion Tech Group"
          description="Comprehensive technology services including micro SaaS products, AI services, IT solutions, cybersecurity, and enterprise solutions."
          keywords="micro SaaS, AI services, IT solutions, cybersecurity, enterprise solutions, cloud computing, blockchain, quantum computing"
        />
        
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
              >
                Our Services
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-slate-300 mb-8"
              >
                Comprehensive technology solutions designed to drive your business forward
              </motion.p>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group relative p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Popular
                        </span>
                      </div>
                    )}
                    
                    <service.icon className={`w-12 h-12 mb-6 ${
                      service.color === 'blue' ? 'text-blue-400' :
                      service.color === 'purple' ? 'text-purple-400' :
                      service.color === 'red' ? 'text-red-400' :
                      service.color === 'green' ? 'text-green-400' :
                      service.color === 'yellow' ? 'text-yellow-400' :
                      service.color === 'indigo' ? 'text-indigo-400' :
                      service.color === 'pink' ? 'text-pink-400' :
                      service.color === 'cyan' ? 'text-cyan-400' :
                      service.color === 'orange' ? 'text-orange-400' :
                      'text-blue-400'
                    }`} />
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-slate-300 mb-6">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-400">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                      <div className="text-slate-400 text-sm">per month</div>
                    </div>
                    
                    <button
                      onClick={() => handleServiceClick(service)}
                      className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                        service.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                        service.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                        service.color === 'red' ? 'bg-red-600 hover:bg-red-700' :
                        service.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                        service.color === 'yellow' ? 'bg-yellow-600 hover:bg-yellow-700' :
                        service.color === 'indigo' ? 'bg-indigo-600 hover:bg-indigo-700' :
                        service.color === 'pink' ? 'bg-pink-600 hover:bg-pink-700' :
                        service.color === 'cyan' ? 'bg-cyan-600 hover:bg-cyan-700' :
                        service.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' :
                        'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-slate-900/40">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-slate-400 mb-12">
                  Contact our experts to discuss your project requirements and get a customized quote.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    Get Custom Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href="tel:+13024640950" 
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        <PerformanceMonitor />
      </div>
    </AccessibilityProvider>
  );
}