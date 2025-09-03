import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Rocket,
  Zap,
  Users,
  Globe,
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  Clock,
  DollarSign,
  Target,
  Workflow,
  Atom,
  Truck,
  Factory,
  Leaf,
  Satellite,
  Building,
  Gauge,
  MessageCircle,
  Calendar,
  Package,
  CreditCard,
  Globe2,
  ShieldCheck,
  Zap,
  CpuIcon,
  DatabaseIcon,
  NetworkIcon,
  SmartphoneIcon,
  BarChart3Icon,
  MessageSquareIcon,
  FileTextIcon,
  ShoppingCartIcon,
  HeadphonesIcon,
  MailIcon,
  SearchIcon,
  ClockIcon,
  DollarSignIcon,
  TargetIcon,
  WorkflowIcon,
  AtomIcon,
  TruckIcon,
  FactoryIcon,
  LeafIcon,
  SatelliteIcon,
  BuildingIcon,
  GaugeIcon,
  MessageCircleIcon,
  CalendarIcon,
  PackageIcon,
  CreditCardIcon,
  Globe2Icon,
  ShieldCheckIcon
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  priceRange: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  marketPrice: string;
  learnMoreUrl: string;
  ctaUrl: string;
  icon: React.ComponentType<any>;
  popular?: boolean;
  new?: boolean;
}

export default function EnhancedServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services: Service[] = [
    // AI-Powered Micro SAAS Services
    {
      id: 'ai-sales-copilot',
      title: 'AI Sales Copilot Pro',
      description: 'Intelligent sales automation platform that predicts customer behavior, automates follow-ups, and optimizes sales strategies using advanced AI.',
      category: 'ai-saas',
      priceRange: '$299 - $1,999/month',
      features: ['AI-powered lead scoring', 'Automated follow-up sequences', 'Sales forecasting', 'CRM integration', 'Performance analytics'],
      benefits: ['Increase sales by 40%', 'Reduce follow-up time by 60%', 'Improve conversion rates', '24/7 sales automation'],
      useCases: ['B2B sales teams', 'E-commerce businesses', 'Real estate agencies', 'Consulting firms'],
      marketPrice: '$2,500 - $5,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-sales-copilot',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Brain,
      popular: true
    },
    {
      id: 'cloud-finops-optimizer',
      title: 'Cloud FinOps Optimizer',
      description: 'Comprehensive cloud cost management and optimization platform that helps businesses reduce cloud spending by up to 40%.',
      category: 'cloud-saas',
      priceRange: '$199 - $999/month',
      features: ['Real-time cost monitoring', 'Automated optimization', 'Budget alerts', 'Multi-cloud support', 'Cost allocation'],
      benefits: ['Save up to 40% on cloud costs', 'Real-time cost visibility', 'Automated optimization', 'Compliance reporting'],
      useCases: ['Enterprise companies', 'Startups', 'DevOps teams', 'Finance departments'],
      marketPrice: '$1,500 - $3,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/cloud-finops-optimizer',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Cloud
    },
    {
      id: 'ai-compliance-assistant',
      title: 'AI Compliance Assistant',
      description: 'Automated compliance monitoring and reporting platform that ensures businesses meet regulatory requirements across multiple jurisdictions.',
      category: 'ai-saas',
      priceRange: '$399 - $1,499/month',
      features: ['Automated compliance checks', 'Real-time monitoring', 'Regulatory updates', 'Audit trails', 'Multi-jurisdiction support'],
      benefits: ['Reduce compliance risks', 'Automate reporting', 'Stay updated on regulations', 'Save legal costs'],
      useCases: ['Financial services', 'Healthcare', 'Manufacturing', 'Technology companies'],
      marketPrice: '$2,000 - $4,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-compliance-assistant',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Shield
    },
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Suite',
      description: 'Advanced analytics platform that transforms raw data into actionable insights using machine learning and predictive analytics.',
      category: 'ai-saas',
      priceRange: '$499 - $2,499/month',
      features: ['Predictive analytics', 'Custom dashboards', 'Data visualization', 'Real-time reporting', 'AI-powered insights'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Improve operational efficiency', 'Increase revenue'],
      useCases: ['Retail businesses', 'Manufacturing', 'Healthcare', 'Financial services'],
      marketPrice: '$3,000 - $6,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-business-intelligence',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: BarChart3
    },
    {
      id: 'ai-customer-support-automation',
      title: 'AI Customer Support Automation',
      description: 'Intelligent customer service platform that automates responses, routes inquiries, and provides 24/7 support.',
      category: 'ai-saas',
      priceRange: '$199 - $899/month',
      features: ['AI chatbot', 'Ticket routing', 'Knowledge base', 'Multi-channel support', 'Performance analytics'],
      benefits: ['24/7 customer support', 'Reduce response time', 'Lower support costs', 'Improve customer satisfaction'],
      useCases: ['E-commerce', 'SaaS companies', 'Customer service teams', 'Small businesses'],
      marketPrice: '$1,200 - $2,500/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-customer-support-automation',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: MessageCircle
    },
    {
      id: 'ai-project-management',
      title: 'AI Project Management Platform',
      description: 'Smart project management solution that uses AI to optimize workflows, predict delays, and improve team productivity.',
      category: 'ai-saas',
      priceRange: '$299 - $1,299/month',
      features: ['AI workflow optimization', 'Predictive analytics', 'Team collaboration', 'Resource management', 'Progress tracking'],
      benefits: ['Complete projects on time', 'Optimize resource allocation', 'Improve team productivity', 'Reduce project risks'],
      useCases: ['Project managers', 'Development teams', 'Marketing agencies', 'Construction companies'],
      marketPrice: '$2,000 - $4,500/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-project-management',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Workflow
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation Suite',
      description: 'Comprehensive marketing automation platform that personalizes campaigns, optimizes conversions, and tracks ROI.',
      category: 'ai-saas',
      priceRange: '$399 - $1,799/month',
      features: ['Personalized campaigns', 'A/B testing', 'Email automation', 'Social media management', 'ROI tracking'],
      benefits: ['Increase conversion rates', 'Personalize customer experience', 'Automate marketing tasks', 'Track campaign performance'],
      useCases: ['Marketing teams', 'E-commerce businesses', 'Agencies', 'B2B companies'],
      marketPrice: '$2,500 - $5,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-marketing-automation',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: TrendingUp
    },
    {
      id: 'ai-hr-platform',
      title: 'AI HR Management Platform',
      description: 'Intelligent human resources platform that streamlines recruitment, employee management, and performance evaluation.',
      category: 'ai-saas',
      priceRange: '$299 - $1,199/month',
      features: ['AI recruitment', 'Performance analytics', 'Employee engagement', 'Payroll integration', 'Compliance management'],
      benefits: ['Hire better candidates', 'Improve employee retention', 'Streamline HR processes', 'Reduce administrative costs'],
      useCases: ['HR departments', 'Recruitment agencies', 'Small businesses', 'Enterprise companies'],
      marketPrice: '$1,800 - $3,500/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-hr-platform',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Users
    },
    {
      id: 'ai-legal-automation',
      title: 'AI Legal Document Automation',
      description: 'Legal document generation and review platform that uses AI to create, analyze, and optimize legal documents.',
      category: 'ai-saas',
      priceRange: '$499 - $1,999/month',
      features: ['Document generation', 'Contract analysis', 'Legal research', 'Compliance checking', 'Template library'],
      benefits: ['Reduce legal costs', 'Speed up document creation', 'Improve accuracy', 'Ensure compliance'],
      useCases: ['Law firms', 'Corporate legal departments', 'Small businesses', 'Real estate agencies'],
      marketPrice: '$3,000 - $6,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-legal-automation',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: FileText
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'Advanced healthcare analytics platform that provides insights for patient care, operational efficiency, and clinical decision-making.',
      category: 'ai-saas',
      priceRange: '$799 - $2,999/month',
      features: ['Patient analytics', 'Clinical insights', 'Operational efficiency', 'Predictive modeling', 'Compliance reporting'],
      benefits: ['Improve patient outcomes', 'Reduce healthcare costs', 'Optimize operations', 'Ensure compliance'],
      useCases: ['Hospitals', 'Clinics', 'Healthcare networks', 'Medical research'],
      marketPrice: '$4,000 - $8,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-healthcare-analytics',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Heart
    },
    {
      id: 'ai-financial-trading',
      title: 'AI Financial Trading Platform',
      description: 'Intelligent trading platform that uses AI to analyze market data, predict trends, and execute trades automatically.',
      category: 'ai-saas',
      priceRange: '$999 - $4,999/month',
      features: ['Market analysis', 'Predictive modeling', 'Automated trading', 'Risk management', 'Portfolio optimization'],
      benefits: ['Increase trading profits', 'Reduce risks', '24/7 market monitoring', 'Data-driven decisions'],
      useCases: ['Investment firms', 'Traders', 'Financial institutions', 'Hedge funds'],
      marketPrice: '$5,000 - $12,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-financial-trading',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: TrendingUp
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain platform that optimizes inventory, predicts demand, and reduces operational costs.',
      category: 'ai-saas',
      priceRange: '$599 - $2,499/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Route optimization', 'Supplier management', 'Performance analytics'],
      benefits: ['Reduce inventory costs', 'Improve delivery times', 'Optimize operations', 'Increase efficiency'],
      useCases: ['Manufacturing', 'Retail', 'Logistics', 'Distribution'],
      marketPrice: '$3,500 - $7,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-supply-chain-optimization',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Truck
    },
    {
      id: 'ai-manufacturing-platform',
      title: 'AI Manufacturing Intelligence',
      description: 'Smart manufacturing platform that uses AI to optimize production, predict maintenance, and improve quality control.',
      category: 'ai-saas',
      priceRange: '$799 - $3,499/month',
      features: ['Production optimization', 'Predictive maintenance', 'Quality control', 'Energy management', 'Performance analytics'],
      benefits: ['Increase production efficiency', 'Reduce downtime', 'Improve product quality', 'Lower operational costs'],
      useCases: ['Manufacturing companies', 'Factories', 'Production facilities', 'Industrial companies'],
      marketPrice: '$4,500 - $9,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-manufacturing-platform',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Factory
    },
    {
      id: 'ai-real-estate-analytics',
      title: 'AI Real Estate Investment Analytics',
      description: 'Advanced real estate analytics platform that provides insights for investment decisions, market analysis, and property valuation.',
      category: 'ai-saas',
      priceRange: '$399 - $1,799/month',
      features: ['Market analysis', 'Property valuation', 'Investment insights', 'Trend prediction', 'Portfolio management'],
      benefits: ['Make better investment decisions', 'Identify market opportunities', 'Optimize portfolio', 'Reduce risks'],
      useCases: ['Real estate investors', 'Property managers', 'Real estate agencies', 'Investment firms'],
      marketPrice: '$2,500 - $5,500/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-real-estate-analytics',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Building
    },
    {
      id: 'ai-educational-content',
      title: 'AI Educational Content Creation',
      description: 'Intelligent platform that creates personalized educational content, assessments, and learning paths using AI.',
      category: 'ai-saas',
      priceRange: '$299 - $1,299/month',
      features: ['Content generation', 'Personalized learning', 'Assessment creation', 'Progress tracking', 'Adaptive curriculum'],
      benefits: ['Create engaging content', 'Personalize learning', 'Improve student outcomes', 'Reduce content creation time'],
      useCases: ['Educational institutions', 'Training companies', 'Corporate training', 'Online learning platforms'],
      marketPrice: '$2,000 - $4,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-educational-content',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: BookOpen
    },
    {
      id: 'ai-logistics-platform',
      title: 'AI Autonomous Logistics Platform',
      description: 'Intelligent logistics platform that optimizes routes, predicts delays, and automates logistics operations.',
      category: 'ai-saas',
      priceRange: '$599 - $2,999/month',
      features: ['Route optimization', 'Delay prediction', 'Fleet management', 'Warehouse optimization', 'Performance analytics'],
      benefits: ['Reduce delivery times', 'Lower logistics costs', 'Improve efficiency', 'Optimize operations'],
      useCases: ['Logistics companies', 'E-commerce', 'Manufacturing', 'Distribution'],
      marketPrice: '$3,500 - $8,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-logistics-platform',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Truck
    },
    {
      id: 'ai-enterprise-resource-planning',
      title: 'AI Enterprise Resource Planning',
      description: 'Intelligent ERP platform that integrates business processes, provides insights, and optimizes operations.',
      category: 'ai-saas',
      priceRange: '$1,999 - $7,999/month',
      features: ['Process integration', 'Business intelligence', 'Workflow automation', 'Performance analytics', 'Custom modules'],
      benefits: ['Streamline operations', 'Improve efficiency', 'Reduce costs', 'Better decision making'],
      useCases: ['Enterprise companies', 'Manufacturing', 'Retail', 'Service industries'],
      marketPrice: '$8,000 - $20,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-enterprise-resource-planning',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Database
    },
    {
      id: 'ai-quantum-neural-network',
      title: 'AI Quantum Neural Network Platform',
      description: 'Cutting-edge platform that combines quantum computing with neural networks for advanced AI applications.',
      category: 'ai-saas',
      priceRange: '$2,999 - $9,999/month',
      features: ['Quantum computing', 'Neural networks', 'Advanced algorithms', 'High-performance computing', 'Research tools'],
      benefits: ['Solve complex problems', 'Faster computations', 'Advanced AI capabilities', 'Research advancement'],
      useCases: ['Research institutions', 'Technology companies', 'Financial services', 'Healthcare'],
      marketPrice: '$12,000 - $30,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-quantum-neural-network',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Atom
    },
    {
      id: 'ai-space-technology',
      title: 'AI Space Technology Platform',
      description: 'Advanced platform for space technology applications, satellite management, and space data analytics.',
      category: 'ai-saas',
      priceRange: '$1,999 - $8,999/month',
      features: ['Satellite management', 'Space data analytics', 'Orbital calculations', 'Mission planning', 'Performance monitoring'],
      benefits: ['Optimize space operations', 'Improve satellite efficiency', 'Better mission planning', 'Advanced analytics'],
      useCases: ['Space agencies', 'Satellite companies', 'Aerospace', 'Research institutions'],
      marketPrice: '$10,000 - $25,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-space-technology',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Satellite
    },
    {
      id: 'ai-sustainability-tech',
      title: 'AI Sustainability Technology Platform',
      description: 'Intelligent platform that helps businesses reduce environmental impact and achieve sustainability goals.',
      category: 'ai-saas',
      priceRange: '$399 - $1,999/month',
      features: ['Carbon footprint tracking', 'Energy optimization', 'Waste reduction', 'Sustainability reporting', 'Goal tracking'],
      benefits: ['Reduce environmental impact', 'Lower energy costs', 'Meet sustainability goals', 'Improve brand image'],
      useCases: ['Manufacturing', 'Retail', 'Technology companies', 'Government agencies'],
      marketPrice: '$2,500 - $6,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-sustainability-tech',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Leaf
    },
    {
      id: 'ai-cybersecurity-threat-intelligence',
      title: 'AI Cybersecurity Threat Intelligence',
      description: 'Advanced cybersecurity platform that uses AI to detect, prevent, and respond to cyber threats in real-time.',
      category: 'ai-saas',
      priceRange: '$799 - $3,999/month',
      features: ['Threat detection', 'Real-time monitoring', 'Incident response', 'Vulnerability assessment', 'Compliance reporting'],
      benefits: ['Protect against cyber threats', 'Reduce security risks', 'Comply with regulations', 'Lower security costs'],
      useCases: ['Financial services', 'Healthcare', 'Technology companies', 'Government agencies'],
      marketPrice: '$4,500 - $12,000/month',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-cybersecurity-threat-intelligence',
      ctaUrl: 'https://ziontechgroup.com/contact',
      icon: Shield
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai-saas', name: 'AI SaaS', icon: Brain },
    { id: 'cloud-saas', name: 'Cloud SaaS', icon: Cloud },
    { id: 'security-saas', name: 'Security SaaS', icon: Shield },
    { id: 'business-saas', name: 'Business SaaS', icon: Building }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Enhanced Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology services. Transform your business with cutting-edge solutions." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, business automation, cloud services, cybersecurity, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/enhanced-services-showcase-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Enhanced Services Showcase
                <span className="text-zion-cyan"> 2025</span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive portfolio of AI-powered micro SAAS services, 
                cutting-edge IT solutions, and innovative technology services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'border-zion-cyan bg-zion-cyan text-white'
                          : 'border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-zion-slate-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-lg">
                        <Icon className="w-6 h-6 text-zion-cyan" />
                      </div>
                      <div className="flex gap-2">
                        {service.popular && (
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-semibold rounded-full">
                            Popular
                          </span>
                        )}
                        {service.new && (
                          <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-semibold rounded-full">
                            New
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Service Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>

                    {/* Price and Market Comparison */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-zion-cyan font-semibold">Our Price:</span>
                        <span className="text-white font-bold">{service.priceRange}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-light">Market Price:</span>
                        <span className="text-zion-slate-light line-through">{service.marketPrice}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                            <Star className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <Link
                        to={service.ctaUrl}
                        className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center py-2 px-4 rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 text-sm font-medium"
                      >
                        Get Started
                      </Link>
                      <Link
                        to={service.learnMoreUrl}
                        className="px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 text-sm font-medium"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
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
              <p className="text-xl text-zion-slate-light mb-8">
                Contact our team to discuss how our services can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Call +1 (302) 464-0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}