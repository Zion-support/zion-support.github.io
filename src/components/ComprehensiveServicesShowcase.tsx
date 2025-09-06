import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Code, 
  Database, 
  Globe, 
  Lock, 
  Rocket, 
  Shield,
  ArrowRight,
  Zap,
  Users,
  TrendingUp,
  Search,
  Filter,
  Star,
  Clock,
  DollarSign,
  CheckCircle,
  Sparkles,
  Target,
  BarChart3,
  Cpu,
  Network,
  Smartphone,
  Palette,
  ShieldCheck,
  Globe2,
  Database2,
  Code2,
  Zap2,
  Brain2,
  Cloud2
} from 'lucide-react';

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  features: string[];
  benefits: string[];
  pricing: {
    startingPrice: number;
    currency: string;
    model: string;
    details: string;
  };
  deliveryTime: string;
  technologyStack: string[];
  aiScore?: number;
  badge?: string;
  path: string;
  color: string;
  featured: boolean;
}

export const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'aiScore' | 'delivery'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'ai-machine-learning',
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation, predictive analytics, and custom AI solutions that transform your business operations.',
      category: 'Artificial Intelligence',
      subcategory: 'Machine Learning',
      features: [
        'Custom AI Model Development',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Recommendation Systems',
        'Automated Decision Making'
      ],
      benefits: [
        'Increase operational efficiency by 60%',
        'Reduce manual processing time by 80%',
        'Improve decision accuracy by 95%',
        'Enable 24/7 automated operations'
      ],
      pricing: {
        startingPrice: 2500,
        currency: '$',
        model: 'monthly',
        details: 'Starting from $2,500/month'
      },
      deliveryTime: '4-6 weeks',
      technologyStack: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js'],
      aiScore: 98,
      badge: 'Popular',
      path: '/ai-services',
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      id: 'cloud-devops',
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure, automated deployments, and robust DevOps practices for modern applications.',
      category: 'Infrastructure',
      subcategory: 'Cloud Computing',
      features: [
        'Cloud Migration & Strategy',
        'CI/CD Pipeline Automation',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Alerting',
        'Security & Compliance'
      ],
      benefits: [
        'Reduce deployment time by 90%',
        'Improve system reliability to 99.9%',
        'Cut infrastructure costs by 40%',
        'Enable rapid scaling'
      ],
      pricing: {
        startingPrice: 1800,
        currency: '$',
        model: 'monthly',
        details: 'Starting from $1,800/month'
      },
      deliveryTime: '3-5 weeks',
      technologyStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      aiScore: 95,
      badge: 'Trending',
      path: '/cloud-devops-solutions',
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      id: 'micro-saas-development',
      icon: Code,
      title: 'Micro SAAS Development',
      description: 'Custom software solutions designed to solve specific business problems with rapid development cycles.',
      category: 'Software Development',
      subcategory: 'SaaS Solutions',
      features: [
        'Custom Application Development',
        'API Development & Integration',
        'Third-party Service Integration',
        'User Management Systems',
        'Payment Processing',
        'Analytics & Reporting'
      ],
      benefits: [
        'Launch MVP in 4-6 weeks',
        'Reduce development costs by 50%',
        'Faster time to market',
        'Scalable architecture from day one'
      ],
      pricing: {
        startingPrice: 3500,
        currency: '$',
        model: 'project-based',
        details: 'Starting from $3,500'
      },
      deliveryTime: '4-8 weeks',
      technologyStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
      aiScore: 92,
      badge: 'New',
      path: '/micro-saas-services',
      color: 'from-green-500 to-emerald-500',
      featured: true
    },
    {
      id: 'data-solutions',
      icon: Database,
      title: 'Data Solutions',
      description: 'Comprehensive data management, analytics, and business intelligence solutions for data-driven decisions.',
      category: 'Data & Analytics',
      subcategory: 'Business Intelligence',
      features: [
        'Data Warehousing & ETL',
        'Business Intelligence Dashboards',
        'Advanced Analytics & Reporting',
        'Data Governance & Security',
        'Real-time Data Processing',
        'Predictive Modeling'
      ],
      benefits: [
        'Unlock insights from 100% of your data',
        'Reduce reporting time by 70%',
        'Improve decision making with real-time data',
        'Ensure data compliance and security'
      ],
      pricing: {
        startingPrice: 2200,
        currency: '$',
        model: 'monthly',
        details: 'Starting from $2,200/month'
      },
      deliveryTime: '5-7 weeks',
      technologyStack: ['Snowflake', 'Tableau', 'Python', 'Apache Kafka', 'MongoDB'],
      aiScore: 96,
      badge: 'Featured',
      path: '/data-solutions',
      color: 'from-orange-500 to-red-500',
      featured: false
    },
    {
      id: 'digital-transformation',
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and technology stack.',
      category: 'Business Strategy',
      subcategory: 'Digital Innovation',
      features: [
        'Process Automation & Optimization',
        'Legacy System Modernization',
        'Digital Strategy Consulting',
        'Change Management',
        'Technology Roadmapping',
        'Performance Optimization'
      ],
      benefits: [
        'Transform business processes in 90 days',
        'Reduce operational costs by 35%',
        'Improve customer satisfaction by 60%',
        'Enable digital-first operations'
      ],
      pricing: {
        startingPrice: 5000,
        currency: '$',
        model: 'project-based',
        details: 'Starting from $5,000'
      },
      deliveryTime: '8-12 weeks',
      technologyStack: ['Process Mining', 'RPA', 'BPM', 'Cloud Platforms', 'APIs'],
      aiScore: 94,
      badge: 'Hot',
      path: '/digital-transformation',
      color: 'from-indigo-500 to-blue-500',
      featured: false
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance with industry standards.',
      category: 'Security',
      subcategory: 'Cyber Protection',
      features: [
        'Security Audits & Assessments',
        'Compliance Management',
        'Threat Detection & Response',
        'Vulnerability Management',
        'Security Training',
        'Incident Response'
      ],
      benefits: [
        'Protect against 99.9% of cyber threats',
        'Ensure compliance with industry standards',
        'Reduce security incidents by 80%',
        'Build customer trust and confidence'
      ],
      pricing: {
        startingPrice: 2800,
        currency: '$',
        model: 'monthly',
        details: 'Starting from $2,800/month'
      },
      deliveryTime: '2-4 weeks',
      technologyStack: ['SIEM', 'EDR', 'Firewalls', 'VPN', 'Encryption Tools'],
      aiScore: 97,
      badge: 'Critical',
      path: '/cybersecurity',
      color: 'from-red-500 to-pink-500',
      featured: true
    },
    {
      id: 'blockchain-web3',
      icon: Network,
      title: 'Blockchain & Web3',
      description: 'Next-generation blockchain solutions, smart contracts, and decentralized applications for the future of business.',
      category: 'Emerging Tech',
      subcategory: 'Blockchain',
      features: [
        'Smart Contract Development',
        'DeFi Applications',
        'NFT Marketplaces',
        'Blockchain Integration',
        'Cryptocurrency Solutions',
        'Web3 Infrastructure'
      ],
      benefits: [
        'Enable transparent and secure transactions',
        'Reduce intermediary costs by 30%',
        'Create new revenue streams',
        'Build trust through decentralization'
      ],
      pricing: {
        startingPrice: 4000,
        currency: '$',
        model: 'project-based',
        details: 'Starting from $4,000'
      },
      deliveryTime: '6-10 weeks',
      technologyStack: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'MetaMask'],
      aiScore: 93,
      badge: 'Emerging',
      path: '/blockchain-web3',
      color: 'from-yellow-500 to-orange-500',
      featured: false
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      category: 'Software Development',
      subcategory: 'Mobile Apps',
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      benefits: [
        'Reach customers on any device',
        'Improve user engagement by 200%',
        'Reduce development time by 40%',
        'Ensure consistent user experience'
      ],
      pricing: {
        startingPrice: 3000,
        currency: '$',
        model: 'project-based',
        details: 'Starting from $3,000'
      },
      deliveryTime: '6-12 weeks',
      technologyStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      aiScore: 91,
      badge: 'Popular',
      path: '/mobile-development',
      color: 'from-teal-500 to-green-500',
      featured: false
    }
  ];

  const categories = useMemo(() => ['all', ...new Set(services.map(s => s.category))], [services]);
  const subcategories = useMemo(() => {
    const allSubcategories = services.map(s => s.subcategory);
    return ['all', ...new Set(allSubcategories)];
  }, [services]);

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSubcategory && matchesSearch;
    });
  }, [services, selectedCategory, selectedSubcategory, searchTerm]);

  const sortedServices = useMemo(() => {
    return [...filteredServices].sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.pricing.startingPrice - b.pricing.startingPrice;
        case 'aiScore':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'delivery':
          return parseInt(a.deliveryTime.split('-')[0]) - parseInt(b.deliveryTime.split('-')[0]);
        default:
          return a.title.localeCompare(b.title);
      }
    });
  }, [filteredServices, sortBy]);

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Zap, value: '99.9%', label: 'Uptime' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI' },
    { icon: Rocket, value: '24/7', label: 'Support' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' },
    { icon: Clock, value: '<8 weeks', label: 'Avg Delivery' }
  ];

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
            Comprehensive Technology Solutions
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Solutions That Drive
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
              Business Growth
            </span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end technology solutions that 
            accelerate your business transformation and competitive advantage. Choose from our 
            comprehensive suite of AI-powered, cloud-native, and cutting-edge services.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="text-zion-cyan w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subcategory Filter */}
              <div className="flex items-center gap-2">
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="px-4 py-3 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                >
                  {subcategories.map(subcategory => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory === 'all' ? 'All Subcategories' : subcategory}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="aiScore">Sort by AI Score</option>
                  <option value="delivery">Sort by Delivery Time</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-zion-blue-light/20 text-zion-cyan hover:bg-zion-cyan/20'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-1 w-5 h-5">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-zion-blue-light/20 text-zion-cyan hover:bg-zion-cyan/20'
                  }`}
                >
                  <div className="space-y-1 w-5 h-5">
                    <div className="bg-current rounded-sm h-1"></div>
                    <div className="bg-current rounded-sm h-1"></div>
                    <div className="bg-current rounded-sm h-1"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
        } mb-20`}>
          <AnimatePresence>
            {sortedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative ${
                    viewMode === 'list' ? 'bg-zion-blue-light/5 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-6' : ''
                  }`}
                >
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <span className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-semibold rounded-full shadow-lg">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute -top-3 -left-3 z-10">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className={`h-full ${
                    viewMode === 'grid' 
                      ? 'bg-zion-blue-light/5 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group-hover:-translate-y-2'
                      : 'hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300'
                  }`}>
                    {/* Header */}
                    <div className={`flex ${viewMode === 'list' ? 'items-start gap-6' : 'flex-col'} mb-6`}>
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      
                      {/* Title and Category */}
                      <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                            {service.category}
                          </span>
                          <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple-light text-xs rounded-full border border-zion-purple/30">
                            {service.subcategory}
                          </span>
                        </div>
                        <p className="text-zion-slate-light leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* AI Score */}
                    {service.aiScore && (
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          <Brain2 className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm text-zion-cyan font-medium">AI Score:</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-16 h-2 bg-zion-blue-light/30 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full transition-all duration-300"
                              style={{ width: `${service.aiScore}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-white font-medium">{service.aiScore}%</span>
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Key Features
                      </h4>
                      <div className={`grid ${viewMode === 'list' ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
                        {service.features.slice(0, viewMode === 'list' ? 6 : 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-zion-purple-light mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Key Benefits
                      </h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-3 flex items-center gap-2">
                        <Code2 className="w-4 h-4" />
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologyStack.slice(0, 4).map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded border border-zion-cyan/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and Delivery */}
                    <div className="flex items-center justify-between mb-6 pt-4 border-t border-zion-cyan/20">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-zion-cyan" />
                          <span className="text-lg font-bold text-white">{service.pricing.currency}{service.pricing.startingPrice.toLocaleString()}</span>
                          <span className="text-sm text-zion-slate-light">/{service.pricing.model}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm text-zion-slate-light">{service.deliveryTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleServiceExpansion(service.id)}
                        className="text-zion-cyan hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
                      >
                        {expandedService === service.id ? 'Show Less' : 'Show More Details'}
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                          expandedService === service.id ? 'rotate-90' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {expandedService === service.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-zion-cyan/20"
                          >
                            <div className="space-y-4">
                              <div>
                                <h5 className="text-sm font-semibold text-zion-cyan mb-2">All Features</h5>
                                <div className="grid grid-cols-1 gap-2">
                                  {service.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                                      {feature}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-sm font-semibold text-zion-cyan mb-2">All Benefits</h5>
                                <div className="space-y-2">
                                  {service.benefits.map((benefit, benefitIndex) => (
                                    <div key={benefitIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                                      {benefit}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-sm font-semibold text-zion-cyan mb-2">Full Tech Stack</h5>
                                <div className="flex flex-wrap gap-2">
                                  {service.technologyStack.map((tech, techIndex) => (
                                    <span key={techIndex} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded border border-zion-cyan/30">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Link
                        to={service.path}
                        className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300 font-medium"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      
                      <Link
                        to="/request-quote"
                        className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="bg-zion-blue-light/5 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">
              Trusted by Industry Leaders
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-zion-cyan/20 group-hover:border-zion-cyan/40 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-zion-cyan" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-zion-slate-light text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our comprehensive technology solutions can accelerate your growth and 
              give you a competitive edge in the market. Our experts are ready to help you choose the 
              right services for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                <Target className="w-5 h-5" />
                Contact Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};