import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
  Package,
  Truck,
  Warehouse,
  Route,
  BarChart,
  AlertTriangle,
  RefreshCw,
  BookOpen,
  Cpu,
  Lock,
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Rocket,
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  Globe,
  Users,
  Target,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Bot,
  Workflow,
  Eye,
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Car,
  Building
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const InnovativeServicesShowcase2028: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket },
    { id: 'it', name: 'IT Services', icon: Server },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'emerging', name: 'Emerging Tech', icon: TrendingUp }
  ];

  const innovativeServices = [
    // AI & Machine Learning Services
    {
      id: 'ai-autonomous-business-manager',
      category: 'ai',
      title: 'AI Autonomous Business Manager',
      description: 'Fully autonomous AI system that manages your entire business operations, from strategy to execution.',
      features: [
        '24/7 Business Monitoring & Optimization',
        'Automated Decision Making',
        'Real-time Performance Analytics',
        'Predictive Market Analysis',
        'Automated Resource Allocation',
        'Intelligent Risk Management'
      ],
      pricing: {
        starter: '$2,500/month',
        professional: '$5,000/month',
        enterprise: '$12,000/month'
      },
      marketPrice: '$8,000 - $25,000/month',
      benefits: [
        'Reduce operational costs by 40-60%',
        'Improve decision-making speed by 80%',
        'Increase business efficiency by 50%',
        '24/7 autonomous operation',
        'Real-time market adaptation'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      link: '/services/ai-autonomous-business-manager'
    },
    {
      id: 'ai-quantum-hybrid-platform',
      category: 'quantum',
      title: 'AI-Quantum Hybrid Computing Platform',
      description: 'Revolutionary platform combining AI and quantum computing for solving previously impossible problems.',
      features: [
        '1000+ Qubit Quantum Processing',
        'AI-Quantum Algorithm Optimization',
        'Real-time Problem Solving',
        'Quantum-Safe Cryptography',
        'Hybrid Neural Networks',
        'Quantum Machine Learning'
      ],
      pricing: {
        starter: '$8,500/month',
        professional: '$18,000/month',
        enterprise: '$45,000/month'
      },
      marketPrice: '$25,000 - $100,000/month',
      benefits: [
        'Solve complex problems 1000x faster',
        'Unbreakable quantum encryption',
        'Revolutionary AI capabilities',
        'Future-proof technology',
        'Competitive advantage'
      ],
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      link: '/services/quantum-ai-hybrid-platform'
    },
    {
      id: 'ai-autonomous-vehicle-management',
      category: 'ai',
      title: 'AI Autonomous Vehicle Management Platform',
      description: 'Complete platform for managing autonomous vehicle fleets with AI-powered optimization and safety.',
      features: [
        'Fleet Management & Optimization',
        'Real-time Safety Monitoring',
        'Predictive Maintenance',
        'Route Optimization',
        'Traffic Pattern Analysis',
        'Emergency Response Systems'
      ],
      pricing: {
        starter: '$3,500/month',
        professional: '$7,500/month',
        enterprise: '$18,000/month'
      },
      marketPrice: '$10,000 - $30,000/month',
      benefits: [
        'Reduce fleet costs by 35%',
        'Improve safety by 90%',
        'Optimize routes in real-time',
        'Predictive maintenance alerts',
        'Compliance automation'
      ],
      icon: Car,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      link: '/services/ai-autonomous-vehicle-management-platform'
    },
    {
      id: 'ai-smart-city-infrastructure',
      category: 'ai',
      title: 'AI Smart City Infrastructure Management',
      description: 'Intelligent platform for managing smart city infrastructure with real-time monitoring and optimization.',
      features: [
        'Infrastructure Monitoring',
        'Energy Optimization',
        'Traffic Management',
        'Waste Management',
        'Public Safety Systems',
        'Environmental Monitoring'
      ],
      pricing: {
        starter: '$5,000/month',
        professional: '$12,000/month',
        enterprise: '$30,000/month'
      },
      marketPrice: '$15,000 - $50,000/month',
      benefits: [
        'Reduce city operational costs by 25%',
        'Improve citizen satisfaction by 40%',
        'Optimize resource usage',
        'Real-time problem detection',
        'Data-driven decision making'
      ],
      icon: Building,
      color: 'from-indigo-500 to-purple-500',
      featured: true,
      link: '/services/ai-smart-city-infrastructure-management'
    },
    // Micro SAAS Services
    {
      id: 'ai-powered-seo-platform',
      category: 'micro-saas',
      title: 'AI-Powered SEO Platform',
      description: 'Complete SEO solution powered by AI for automatic optimization and ranking improvement.',
      features: [
        'AI Content Optimization',
        'Keyword Research & Analysis',
        'Competitor Monitoring',
        'Performance Tracking',
        'Automated Reporting',
        'Technical SEO Audits'
      ],
      pricing: {
        starter: '$99/month',
        professional: '$299/month',
        enterprise: '$799/month'
      },
      marketPrice: '$200 - $1,000/month',
      benefits: [
        'Improve search rankings by 40%',
        'Save 20+ hours per week',
        'Automated optimization',
        'Real-time performance tracking',
        'Competitive advantage'
      ],
      icon: Search,
      color: 'from-orange-500 to-red-500',
      featured: false,
      link: '/services/ai-seo'
    },
    {
      id: 'ai-customer-support-automation',
      category: 'micro-saas',
      title: 'AI Customer Support Automation',
      description: 'Intelligent customer support system that handles inquiries automatically with human-like responses.',
      features: [
        '24/7 Customer Support',
        'Multi-language Support',
        'Ticket Management',
        'Knowledge Base Integration',
        'Analytics & Reporting',
        'Human Handoff System'
      ],
      pricing: {
        starter: '$149/month',
        professional: '$399/month',
        enterprise: '$999/month'
      },
      marketPrice: '$300 - $1,500/month',
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 90%',
        '24/7 availability',
        'Scalable support',
        'Customer satisfaction improvement'
      ],
      icon: MessageCircle,
      color: 'from-blue-500 to-indigo-500',
      featured: false,
      link: '/services/ai-customer-support-automation'
    },
    {
      id: 'ai-project-management',
      category: 'micro-saas',
      title: 'AI Project Management Platform',
      description: 'Intelligent project management with AI-powered planning, tracking, and optimization.',
      features: [
        'AI Project Planning',
        'Resource Optimization',
        'Risk Assessment',
        'Progress Tracking',
        'Team Collaboration',
        'Automated Reporting'
      ],
      pricing: {
        starter: '$79/month',
        professional: '$199/month',
        enterprise: '$499/month'
      },
      marketPrice: '$150 - $600/month',
      benefits: [
        'Improve project success rate by 30%',
        'Reduce planning time by 50%',
        'Better resource utilization',
        'Risk mitigation',
        'Real-time insights'
      ],
      icon: Workflow,
      color: 'from-green-500 to-teal-500',
      featured: false,
      link: '/services/ai-project-management'
    },
    // IT Services
    {
      id: 'cloud-finops-optimizer',
      category: 'it',
      title: 'Cloud FinOps Optimization Platform',
      description: 'Complete cloud cost optimization and financial operations management platform.',
      features: [
        'Cost Monitoring & Analysis',
        'Resource Optimization',
        'Budget Management',
        'Cost Allocation',
        'Automated Scaling',
        'ROI Tracking'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$1,299/month'
      },
      marketPrice: '$400 - $2,000/month',
      benefits: [
        'Reduce cloud costs by 30-50%',
        'Improve resource utilization',
        'Better budget control',
        'Automated optimization',
        'ROI maximization'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      link: '/services/cloud-finops-optimizer'
    },
    {
      id: 'zero-trust-network-access',
      category: 'security',
      title: 'Zero Trust Network Access Platform',
      description: 'Advanced zero trust security platform for secure remote access and network protection.',
      features: [
        'Identity Verification',
        'Access Control',
        'Network Segmentation',
        'Threat Detection',
        'Compliance Management',
        'Audit Logging'
      ],
      pricing: {
        starter: '$299/month',
        professional: '$699/month',
        enterprise: '$1,799/month'
      },
      marketPrice: '$600 - $3,000/month',
      benefits: [
        'Eliminate network vulnerabilities',
        'Comply with security standards',
        'Secure remote access',
        'Real-time threat protection',
        'Comprehensive audit trails'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: false,
      link: '/services/zero-trust-network-access'
    },
    // Emerging Technology Services
    {
      id: 'space-tech-platform',
      category: 'emerging',
      title: 'Space Technology Platform',
      description: 'Cutting-edge platform for space technology applications and satellite management.',
      features: [
        'Satellite Management',
        'Space Data Analytics',
        'Orbital Calculations',
        'Launch Planning',
        'Mission Control',
        'Space Weather Monitoring'
      ],
      pricing: {
        starter: '$5,000/month',
        professional: '$15,000/month',
        enterprise: '$50,000/month'
      },
      marketPrice: '$20,000 - $100,000/month',
      benefits: [
        'Access to space technology',
        'Satellite data insights',
        'Launch optimization',
        'Mission success improvement',
        'Innovation leadership'
      ],
      icon: Satellite,
      color: 'from-purple-500 to-indigo-500',
      featured: false,
      link: '/services/space-tech'
    },
    {
      id: 'sustainable-technology-platform',
      category: 'emerging',
      title: 'Sustainable Technology Platform',
      description: 'Platform for implementing and managing sustainable technology solutions.',
      features: [
        'Carbon Footprint Tracking',
        'Energy Optimization',
        'Waste Management',
        'Sustainability Reporting',
        'Green Technology Integration',
        'Compliance Management'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$1,299/month'
      },
      marketPrice: '$400 - $2,000/month',
      benefits: [
        'Reduce environmental impact',
        'Meet sustainability goals',
        'Cost savings through efficiency',
        'Regulatory compliance',
        'Brand enhancement'
      ],
      icon: Leaf,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      link: '/services/sustainable-technology'
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
    }
  ];

  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];
  const innovationLevels = ['All', ...Array.from(new Set(allServices.map(service => service.innovationLevel)))];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesInnovationLevel = selectedInnovationLevel === 'All' || service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesCategory && matchesInnovationLevel;
  });

  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (category) {
      case 'Quantum Computing & AI':
        return <Brain className="w-6 h-6" />;
      case 'Manufacturing & AI':
        return <Zap className="w-6 h-6" />;
      case 'Healthcare & AI':
        return <Shield className="w-6 h-6" />;
      case 'Financial Services & AI':
        return <DollarSign className="w-6 h-6" />;
      case 'Smart Cities & AI':
        return <Globe className="w-6 h-6" />;
      case 'Agriculture & AI':
        return <Leaf className="w-6 h-6" />;
      case 'Legal Services & AI':
        return <Shield className="w-6 h-6" />;
      case 'Education & AI':
        return <Brain className="w-6 h-6" />;
      case 'Real Estate & AI':
        return <Globe className="w-6 h-6" />;
      case 'Blockchain & Supply Chain':
        return <Network className="w-6 h-6" />;
      case 'Autonomous Vehicles & AI':
        return <Car className="w-6 h-6" />;
      case 'Space Technology & AI':
        return <Satellite className="w-6 h-6" />;
      case 'Biotechnology & AI':
        return <Dna className="w-6 h-6" />;
      case 'Renewable Energy & AI':
        return <Wind className="w-6 h-6" />;
      case 'Climate Technology & AI':
        return <Cloud className="w-6 h-6" />;
      case 'Quantum Internet & AI':
        return <Network className="w-6 h-6" />;
      default:
        return <Rocket className="w-6 h-6" />;
    }
  };

  const getInnovationLevelColor = (level: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default:
        return 'bg-gradient-to-r from-gray-600 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="2028 Innovative Services Showcase - Zion Tech Group"
        description="Explore our cutting-edge AI services, micro SAAS solutions, IT infrastructure, and emerging technologies. Real market prices and proven ROI."
        keywords="AI services, micro SAAS, IT services, quantum computing, blockchain, IoT, green technology, space technology, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/innovative-services-showcase-2028"
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              2028 Innovative Services
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Discover our comprehensive portfolio of AI services, micro SAAS solutions, IT infrastructure, 
              and cutting-edge technologies. Real market prices, proven ROI, and expert implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="2028 Innovative Services Showcase - Zion Tech Group"
        description="Discover Zion Tech Group's cutting-edge 2028 services: AI, Quantum Computing, Micro SAAS, and emerging technologies. Transform your business with the future of technology."
        keywords="AI services, quantum computing, micro SAAS, IT services, cybersecurity, 2028 technology, Zion Tech Group"
        canonical="https://ziontechgroup.com/innovative-services-showcase-2028"
      />

      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2028 Innovative Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12">
              Pioneering the future with cutting-edge AI, Quantum Computing, Micro SAAS, and emerging technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
            </div>
          </motion.div>

      {/* Category Filter */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {categories.map(category              => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Innovation Level Filter */}
            <div className="relative">
              <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {innovationLevels.map(level              => (
                  <option key={level} value={level} className="bg-slate-800 text-white">
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 ${
                  service.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Starter:</span>
                      <span className="text-cyan-400 font-semibold">{service.pricing.starter}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Professional:</span>
                      <span className="text-cyan-400 font-semibold">{service.pricing.professional}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Enterprise:</span>
                      <span className="text-cyan-400 font-semibold">{service.pricing.enterprise}</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-slate-700 rounded text-xs text-slate-300">
                    Market Average: {service.marketPrice}
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-slate-300 text-sm">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    Contact
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <p className="text-gray-500">Try adjusting your search or category filters</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Let's discuss how our innovative 2028 services can drive your business forward and give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-slate-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2028;
