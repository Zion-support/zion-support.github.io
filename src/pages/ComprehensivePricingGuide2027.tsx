import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Search, 
  Filter, 
  Brain, 
  Shield, 
  Truck, 
  Cpu, 
  Zap, 
  Cloud, 
  Rocket, 
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Lock,
  Package,
  Warehouse,
  Route,
  Eye,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Calendar,
  Clock,
  Award,
  Sparkles,
  Link,
  Atom
} from 'lucide-react';

export default function ComprehensivePricingGuide2027() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-600' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-blue-500 to-cyan-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'supply-chain', name: 'Supply Chain', icon: Truck, color: 'from-green-500 to-emerald-600' },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Cpu, color: 'from-indigo-500 to-purple-600' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, color: 'from-yellow-500 to-orange-600' }
  ];

  const allServices = [
    // AI Services
    {
      id: 'ai-project-management-platform',
      name: 'AI Project Management Platform',
      description: 'Revolutionary AI-powered project management that automates workflows, predicts outcomes, and optimizes team performance.',
      category: 'ai',
      pricing: {
        starter: { price: 29, features: ['Up to 10 team members', 'AI task prioritization', 'Basic project templates', 'Email support', '5GB storage', 'Mobile app access'] },
        professional: { price: 79, features: ['Up to 50 team members', 'Advanced AI analytics', 'Custom workflows', 'Priority support', '25GB storage', 'API access', 'Advanced reporting', 'Team collaboration tools'] },
        enterprise: { price: 199, features: ['Unlimited team members', 'Full AI suite', 'Custom integrations', 'Dedicated support', 'Unlimited storage', 'Advanced security', 'White-label options', 'Custom training'] }
      },
      href: '/services/ai-project-management-platform',
      popular: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      marketPrice: '$29 - $199/month',
      savings: 'Save up to 40% vs competitors'
    },
    {
      id: 'ai-cybersecurity-threat-intelligence',
      name: 'AI Cybersecurity Threat Intelligence',
      description: 'Advanced AI-powered cybersecurity platform that detects, predicts, and responds to cyber threats in real-time.',
      category: 'cybersecurity',
      pricing: {
        starter: { price: 99, features: ['Up to 100 endpoints', 'Basic threat detection', 'Email alerts', 'Standard support', '10GB log storage', 'Mobile app access', 'Basic reporting', 'Threat intelligence feeds'] },
        professional: { price: 299, features: ['Up to 1000 endpoints', 'Advanced AI detection', 'Real-time monitoring', 'Priority support', '100GB log storage', 'API access', 'Advanced analytics', 'Custom threat feeds', 'Incident response automation', 'Threat hunting tools'] },
        enterprise: { price: 799, features: ['Unlimited endpoints', 'Full AI threat intelligence', 'Custom integrations', 'Dedicated support', 'Unlimited storage', 'Advanced security features', 'White-label options', 'Custom training', 'On-premise deployment', 'Compliance reporting'] }
      },
      href: '/services/ai-cybersecurity-threat-intelligence',
      popular: true,
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      marketPrice: '$99 - $799/month',
      savings: 'Save up to 35% vs competitors'
    },
    {
      id: 'ai-supply-chain-optimization-platform',
      name: 'AI Supply Chain Optimization Platform',
      description: 'Transform your supply chain with AI that optimizes inventory, routes, and operations in real-time.',
      category: 'supply-chain',
      pricing: {
        starter: { price: 149, features: ['Up to 5 locations', 'Basic demand forecasting', 'Inventory tracking', 'Email support', 'Basic reporting', 'Mobile app access', 'Supplier database', 'Purchase order management'] },
        professional: { price: 399, features: ['Up to 25 locations', 'Advanced AI forecasting', 'Route optimization', 'Priority support', 'Advanced analytics', 'API access', 'Risk management', 'Multi-warehouse support', 'Supplier performance tracking', 'Custom integrations'] },
        enterprise: { price: 999, features: ['Unlimited locations', 'Full AI optimization suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Compliance reporting', 'Multi-currency support'] }
      },
      href: '/services/ai-supply-chain-optimization-platform',
      popular: true,
      icon: Truck,
      color: 'from-blue-500 to-cyan-600',
      marketPrice: '$149 - $999/month',
      savings: 'Save up to 30% vs competitors'
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Advanced analytics and insights powered by artificial intelligence for data-driven decision making.',
      category: 'ai',
      pricing: {
        starter: { price: 199, features: ['Up to 10 users', 'Basic analytics', 'Standard dashboards', 'Email support', '10GB data storage', 'Basic reporting', 'Data visualization', 'Export capabilities'] },
        professional: { price: 499, features: ['Up to 50 users', 'Advanced AI analytics', 'Custom dashboards', 'Priority support', '100GB data storage', 'API access', 'Predictive analytics', 'Real-time monitoring', 'Advanced security', 'Custom integrations'] },
        enterprise: { price: 1299, features: ['Unlimited users', 'Full AI suite', 'Custom algorithms', 'Dedicated support', 'Unlimited storage', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Compliance reporting'] }
      },
      href: '/services/ai-business-intelligence',
      popular: false,
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-600',
      marketPrice: '$199 - $1,299/month',
      savings: 'Save up to 25% vs competitors'
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      description: 'AI-powered sales automation and optimization to boost revenue and improve customer relationships.',
      category: 'ai',
      pricing: {
        starter: { price: 79, features: ['Up to 5 sales users', 'Basic lead scoring', 'Email automation', 'Standard support', 'Basic reporting', 'CRM integration', 'Lead tracking', 'Sales analytics'] },
        professional: { price: 199, features: ['Up to 25 sales users', 'Advanced AI lead scoring', 'Predictive analytics', 'Priority support', 'Advanced reporting', 'API access', 'Custom workflows', 'Multi-channel automation', 'Performance optimization', 'Custom integrations'] },
        enterprise: { price: 599, features: ['Unlimited sales users', 'Full AI sales suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Compliance reporting', 'Multi-currency support'] }
      },
      href: '/services/ai-sales-copilot',
      popular: false,
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      marketPrice: '$79 - $599/month',
      savings: 'Save up to 30% vs competitors'
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Assistant',
      description: 'Automated regulatory compliance with AI-powered monitoring and reporting.',
      category: 'ai',
      pricing: {
        starter: { price: 149, features: ['Basic compliance monitoring', 'Standard reporting', 'Email support', 'Basic templates', 'Regulatory updates', 'Compliance tracking', 'Basic alerts', 'Document management'] },
        professional: { price: 399, features: ['Advanced AI monitoring', 'Custom reporting', 'Priority support', 'Advanced analytics', 'API access', 'Risk assessment', 'Automated workflows', 'Custom integrations', 'Multi-regulation support', 'Advanced security'] },
        enterprise: { price: 999, features: ['Full AI compliance suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Compliance reporting', 'Multi-jurisdiction support', 'Custom workflows'] }
      },
      href: '/services/ai-compliance-assistant',
      popular: false,
      icon: Lock,
      color: 'from-yellow-500 to-orange-600',
      marketPrice: '$149 - $999/month',
      savings: 'Save up to 35% vs competitors'
    },
    {
      id: 'llm-content-studio',
      name: 'LLM Content Studio',
      description: 'AI-powered content creation platform using advanced language models.',
      category: 'ai',
      pricing: {
        starter: { price: 49, features: ['Up to 10 content pieces/month', 'Basic AI generation', 'Standard templates', 'Email support', 'Basic SEO tools', 'Content optimization', 'Brand voice consistency', 'Multi-language support'] },
        professional: { price: 149, features: ['Up to 100 content pieces/month', 'Advanced AI generation', 'Custom templates', 'Priority support', 'Advanced SEO tools', 'API access', 'Custom workflows', 'Advanced analytics', 'Team collaboration', 'Custom integrations'] },
        enterprise: { price: 399, features: ['Unlimited content pieces', 'Full AI content suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Custom workflows', 'Multi-brand support'] }
      },
      href: '/services/llm-content-studio',
      popular: false,
      icon: MessageSquare,
      color: 'from-indigo-500 to-purple-600',
      marketPrice: '$49 - $399/month',
      savings: 'Save up to 40% vs competitors'
    },
    {
      id: 'ai-compliance-copilot',
      name: 'AI Compliance Copilot',
      description: 'AI-powered security and compliance automation for enterprise environments.',
      category: 'cybersecurity',
      pricing: {
        starter: { price: 199, features: ['Basic security automation', 'Standard compliance monitoring', 'Email support', 'Basic reporting', 'Risk management', 'Incident response', 'Basic security', 'Compliance tracking'] },
        professional: { price: 499, features: ['Advanced AI security', 'Custom compliance workflows', 'Priority support', 'Advanced analytics', 'API access', 'Custom integrations', 'Advanced security', 'Multi-regulation support', 'Custom reporting', 'Advanced monitoring'] },
        enterprise: { price: 1299, features: ['Full AI security suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Compliance reporting', 'Custom workflows', 'Multi-jurisdiction support'] }
      },
      href: '/services/ai-compliance-copilot',
      popular: false,
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      marketPrice: '$199 - $1,299/month',
      savings: 'Save up to 30% vs competitors'
    },
    {
      id: 'zero-trust-network-architecture',
      name: 'Zero Trust Network Architecture',
      description: 'Modern security framework implementing zero-trust principles for maximum protection.',
      category: 'cybersecurity',
      pricing: {
        starter: { price: 299, features: ['Basic zero-trust implementation', 'Standard monitoring', 'Email support', 'Basic reporting', 'Identity verification', 'Basic security', 'Network segmentation', 'Threat prevention'] },
        professional: { price: 699, features: ['Advanced zero-trust', 'Custom monitoring', 'Priority support', 'Advanced analytics', 'API access', 'Custom integrations', 'Advanced security', 'Custom workflows', 'Advanced reporting', 'Custom monitoring'] },
        enterprise: { price: 1799, features: ['Full zero-trust suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Custom workflows', 'Custom monitoring', 'Multi-site support'] }
      },
      href: '/services/zero-trust-network-architecture',
      popular: false,
      icon: Lock,
      color: 'from-red-500 to-pink-600',
      marketPrice: '$299 - $1,799/month',
      savings: 'Save up to 35% vs competitors'
    },
    {
      id: 'incident-response-platform',
      name: 'Incident Response Platform',
      description: 'Comprehensive security incident management and response automation.',
      category: 'cybersecurity',
      pricing: {
        starter: { price: 249, features: ['Basic incident detection', 'Standard response', 'Email support', 'Basic reporting', 'Forensic analysis', 'Basic recovery', 'Incident tracking', 'Basic automation'] },
        professional: { price: 599, features: ['Advanced incident detection', 'Custom response workflows', 'Priority support', 'Advanced analytics', 'API access', 'Custom integrations', 'Advanced automation', 'Custom workflows', 'Advanced reporting', 'Custom monitoring'] },
        enterprise: { price: 1499, features: ['Full incident response suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Custom workflows', 'Custom monitoring', 'Multi-site support'] }
      },
      href: '/services/incident-response-platform',
      popular: false,
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      marketPrice: '$249 - $1,499/month',
      savings: 'Save up to 30% vs competitors'
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin',
      description: 'Virtual simulation and monitoring for physical systems and processes.',
      category: 'emerging-tech',
      pricing: {
        starter: { price: 399, features: ['Basic simulation', 'Standard monitoring', 'Email support', 'Basic reporting', 'Real-time data', 'Basic analytics', 'Remote monitoring', 'Basic optimization'] },
        professional: { price: 899, features: ['Advanced simulation', 'Custom monitoring', 'Priority support', 'Advanced analytics', 'API access', 'Custom integrations', 'Advanced optimization', 'Custom workflows', 'Advanced reporting', 'Custom monitoring'] },
        enterprise: { price: 2299, features: ['Full digital twin suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Custom workflows', 'Custom monitoring', 'Multi-site support'] }
      },
      href: '/services/digital-twin',
      popular: false,
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600',
      marketPrice: '$399 - $2,299/month',
      savings: 'Save up to 35% vs competitors'
    },
    {
      id: 'iot-edge',
      name: 'IoT Edge Computing',
      description: 'Smart device networks with edge computing capabilities for real-time processing.',
      category: 'emerging-tech',
      pricing: {
        starter: { price: 199, features: ['Basic edge processing', 'Standard device management', 'Email support', 'Basic reporting', 'Real-time data', 'Basic analytics', 'Device monitoring', 'Basic optimization'] },
        professional: { price: 499, features: ['Advanced edge processing', 'Custom device management', 'Priority support', 'Advanced analytics', 'API access', 'Custom integrations', 'Advanced optimization', 'Custom workflows', 'Advanced reporting', 'Custom monitoring'] },
        enterprise: { price: 1299, features: ['Full IoT edge suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Custom workflows', 'Custom monitoring', 'Multi-site support'] }
      },
      href: '/services/iot-edge',
      popular: false,
      icon: Globe,
      color: 'from-green-500 to-emerald-600',
      marketPrice: '$199 - $1,299/month',
      savings: 'Save up to 30% vs competitors'
    },
    {
      id: 'blockchain-enterprise-solutions',
      name: 'Blockchain Enterprise Solutions',
      description: 'Distributed ledger technology for enterprise applications and secure transactions.',
      category: 'emerging-tech',
      pricing: {
        starter: { price: 299, features: ['Basic blockchain', 'Standard security', 'Email support', 'Basic reporting', 'Smart contracts', 'Basic transactions', 'Identity management', 'Basic tracking'] },
        professional: { price: 699, features: ['Advanced blockchain', 'Custom security', 'Priority support', 'Advanced analytics', 'API access', 'Custom integrations', 'Advanced contracts', 'Custom workflows', 'Advanced reporting', 'Custom monitoring'] },
        enterprise: { price: 1799, features: ['Full blockchain suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Custom workflows', 'Custom monitoring', 'Multi-site support'] }
      },
      href: '/services/blockchain-enterprise-solutions',
      popular: false,
      icon: Link,
      color: 'from-blue-500 to-indigo-600',
      marketPrice: '$299 - $1,799/month',
      savings: 'Save up to 35% vs competitors'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Next-generation computing solutions leveraging quantum mechanics.',
      category: 'emerging-tech',
      pricing: {
        starter: { price: 499, features: ['Basic quantum algorithms', 'Standard optimization', 'Email support', 'Basic reporting', 'Research support', 'Basic cryptography', 'Basic analytics', 'Basic monitoring'] },
        professional: { price: 1199, features: ['Advanced quantum algorithms', 'Custom optimization', 'Priority support', 'Advanced analytics', 'API access', 'Custom integrations', 'Advanced cryptography', 'Custom workflows', 'Advanced reporting', 'Custom monitoring'] },
        enterprise: { price: 2999, features: ['Full quantum computing suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Custom workflows', 'Custom monitoring', 'Multi-site support'] }
      },
      href: '/services/quantum-computing',
      popular: false,
      icon: Atom,
      color: 'from-purple-500 to-pink-600',
      marketPrice: '$499 - $2,999/month',
      savings: 'Save up to 40% vs competitors'
    },
    {
      id: 'space-tech',
      name: 'Space Technology',
      description: 'Space-based solutions and satellite technology for global applications.',
      category: 'emerging-tech',
      pricing: {
        starter: { price: 599, features: ['Basic satellite communications', 'Standard earth observation', 'Email support', 'Basic reporting', 'Navigation systems', 'Basic analytics', 'Space monitoring', 'Basic optimization'] },
        professional: { price: 1399, features: ['Advanced satellite communications', 'Custom earth observation', 'Priority support', 'Advanced analytics', 'API access', 'Custom integrations', 'Advanced navigation', 'Custom workflows', 'Advanced reporting', 'Custom monitoring'] },
        enterprise: { price: 3499, features: ['Full space technology suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Custom workflows', 'Custom monitoring', 'Multi-site support'] }
      },
      href: '/services/space-tech',
      popular: false,
      icon: Rocket,
      color: 'from-indigo-500 to-blue-600',
      marketPrice: '$599 - $3,499/month',
      savings: 'Save up to 45% vs competitors'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps',
      description: 'Infrastructure automation and modern development practices for cloud environments.',
      category: 'cloud-devops',
      pricing: {
        starter: { price: 199, features: ['Basic CI/CD pipelines', 'Standard automation', 'Email support', 'Basic reporting', 'Infrastructure as code', 'Basic monitoring', 'Basic security', 'Basic optimization'] },
        professional: { price: 499, features: ['Advanced CI/CD pipelines', 'Custom automation', 'Priority support', 'Advanced analytics', 'API access', 'Custom integrations', 'Advanced monitoring', 'Custom workflows', 'Advanced reporting', 'Custom monitoring'] },
        enterprise: { price: 1299, features: ['Full cloud DevOps suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Custom workflows', 'Custom monitoring', 'Multi-site support'] }
      },
      href: '/services/cloud-devops',
      popular: false,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      marketPrice: '$199 - $1,299/month',
      savings: 'Save up to 30% vs competitors'
    },
    {
      id: 'cloud-finops-optimizer',
      name: 'Cloud FinOps Optimizer',
      description: 'Cost optimization and financial operations management for cloud infrastructure.',
      category: 'cloud-devops',
      pricing: {
        starter: { price: 149, features: ['Basic cost monitoring', 'Standard optimization', 'Email support', 'Basic reporting', 'Budget management', 'Basic analytics', 'ROI analysis', 'Basic optimization'] },
        professional: { price: 399, features: ['Advanced cost monitoring', 'Custom optimization', 'Priority support', 'Advanced analytics', 'API access', 'Custom integrations', 'Advanced analytics', 'Custom workflows', 'Advanced reporting', 'Custom monitoring'] },
        enterprise: { price: 999, features: ['Full FinOps suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Custom workflows', 'Custom monitoring', 'Multi-site support'] }
      },
      href: '/services/cloud-finops-optimizer',
      popular: false,
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      marketPrice: '$149 - $999/month',
      savings: 'Save up to 35% vs competitors'
    },
    {
      id: 'finops-advisor',
      name: 'FinOps Advisor',
      description: 'Financial operations guidance and best practices for cloud environments.',
      category: 'cloud-devops',
      pricing: {
        starter: { price: 99, features: ['Basic financial planning', 'Standard cost analysis', 'Email support', 'Basic reporting', 'Optimization strategies', 'Basic best practices', 'Basic guidance', 'Basic monitoring'] },
        professional: { price: 299, features: ['Advanced financial planning', 'Custom cost analysis', 'Priority support', 'Advanced analytics', 'API access', 'Custom integrations', 'Advanced strategies', 'Custom workflows', 'Advanced reporting', 'Custom monitoring'] },
        enterprise: { price: 799, features: ['Full FinOps advisor suite', 'Custom algorithms', 'Dedicated support', 'Advanced security', 'White-label options', 'Custom training', 'On-premise deployment', 'Custom workflows', 'Custom monitoring', 'Multi-site support'] }
      },
      href: '/services/finops-advisor',
      popular: false,
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-600',
      marketPrice: '$99 - $799/month',
      savings: 'Save up to 40% vs competitors'
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Complete pricing guide for all our AI-powered services, cybersecurity solutions, and emerging technology services. Transparent pricing with significant savings compared to competitors."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Complete Pricing Guide 2027
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Comprehensive Pricing
              </span>
              <br />
              <span className="text-white">Guide 2027</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our AI-powered services with significant savings 
              compared to competitors. Find the perfect plan for your business needs.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50"
                />
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/30'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-1 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  {service.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Service Info */}
                    <div className="lg:col-span-1">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-green-400 font-semibold">{service.marketPrice}</span>
                        <div className="text-sm text-gray-400 mt-1">{service.savings}</div>
                      </div>
                      
                      <a
                        href={service.href}
                        className="inline-flex items-center text-green-400 hover:text-green-300 font-medium transition-colors duration-300 group-hover:translate-x-1"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                    
                    {/* Pricing Plans */}
                    <div className="lg:col-span-2">
                      <div className="grid md:grid-cols-3 gap-4">
                        {Object.entries(service.pricing).map(([plan, details]) => (
                          <div key={plan} className="relative p-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-600/50 border border-slate-500/30 hover:border-green-500/50 transition-all duration-300">
                            <div className="text-center mb-4">
                              <h4 className="text-lg font-semibold text-white mb-2 capitalize">{plan}</h4>
                              <div className="flex items-baseline justify-center mb-2">
                                <span className="text-3xl font-bold text-white">${details.price}</span>
                                <span className="text-gray-400 ml-1">/month</span>
                              </div>
                            </div>
                            
                            <ul className="space-y-2 mb-4">
                              {details.features.slice(0, 4).map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                              {details.features.length > 4 && (
                                <li className="text-gray-400 text-sm text-center">
                                  +{details.features.length - 4} more features
                                </li>
                              )}
                            </ul>
                            
                            <a
                              href="/request-quote"
                              className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-sm hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                            >
                              Get Started
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team to discuss custom pricing options, 
              volume discounts, and enterprise solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Request Custom Quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-green-500/30 text-green-300 font-semibold text-lg hover:bg-green-500/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
            
            <div className="mt-8 p-6 bg-slate-800/30 rounded-xl border border-slate-600/30">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2 text-green-400" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2 text-green-400" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-green-400" />
                  Middletown DE 19709
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
