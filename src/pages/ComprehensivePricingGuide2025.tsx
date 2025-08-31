<<<<<<< HEAD
import React, { useState } from 'react';
import { 
=======
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
<<<<<<< HEAD
import { Brain, Shield, Cloud, Server, BarChart3, Users, ShoppingCart,
  MessageCircle, HelpCircle, DollarSign, Target, TrendingUp,
  Atom, Network, Eye, PenTool, Heart, Building, Truck,
  Lock, Smartphone, Mail, Video, Satellite, Leaf, Code,
  Zap, Star, Rocket, Globe, Cpu, ArrowRight, FileText,
  CheckCircle, Clock, Users as UsersIcon, Zap as ZapIcon,
  Award, TrendingUp as TrendingUpIcon, Globe as GlobeIcon,
  Calculator, PieChart, BarChart
import {
  revolutionaryMicroSaasServices2025,
  advancedITInfrastructureServices2025,
  revolutionaryAIServices2025
             } from '../data/comprehensiveServices2025';
=======
import { Link              } from 'react-router-dom.ts';
import { DollarSign, 
  Star, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  CheckCircle, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Cpu, 
  Database,
  Globe,
  Users,
  Target,
  DollarSign,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
<<<<<<< HEAD
  ExternalLink,
  Filter,
  Search
} from 'lucide-react';
import enhancedInnovativeServices2025 from '../data/enhancedInnovativeServices2025';
import enhancedITandAIServices2025 from '../data/enhancedITandAIServices2025';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
=======
  Linkedin,
  Twitter,
  Github
             } from 'lucide-react.ts';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

const ComprehensivePricingGuide2025: React.FC = (): JSX.Element => {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Workflow Orchestrator',
          description: 'Intelligent process automation with AI-driven optimization',
          starter: { price: '$99', features: ['Up to 10 workflows', 'Basic AI process mapping', 'Standard integrations'] },
          professional: { price: '$299', features: ['Up to 50 workflows', 'Advanced AI orchestration', 'Custom integrations', 'Priority support'] },
          enterprise: { price: '$799', features: ['Unlimited workflows', 'Custom AI models', 'White-label solution', '24/7 support'] },
          href: '/services/ai-workflow-orchestrator',
          popular: true
        },
        {
          name: 'AI Data Governance Platform',
          description: 'Enterprise data protection and compliance automation',
          starter: { price: '$149', features: ['Up to 10TB data', 'Basic AI discovery', 'GDPR compliance tools'] },
          professional: { price: '$399', features: ['Up to 100TB data', 'Advanced AI discovery', 'Multi-compliance framework'] },
          enterprise: { price: '$999', features: ['Unlimited data', 'Custom AI models', 'White-label solution'] },
          href: '/services/ai-data-governance-platform',
          popular: false
        },
        {
          name: 'AI Customer Experience Analytics',
          description: 'Intelligent analytics and insights for data-driven decisions',
          starter: { price: '$99', features: ['Up to 10K interactions', 'Basic sentiment analysis', 'Standard reporting'] },
          professional: { price: '$299', features: ['Up to 100K interactions', 'Advanced AI analytics', 'Full journey mapping'] },
          enterprise: { price: '$799', features: ['Unlimited interactions', 'Custom AI models', 'White-label solution'] },
          href: '/services/ai-customer-experience-analytics',
          popular: false
        },
        {
          name: 'AI Sales Assistant',
          description: 'Intelligent lead qualification and personalized outreach',
          starter: { price: '$199', features: ['Basic lead scoring', 'Email automation', 'Standard integrations'] },
          professional: { price: '$399', features: ['Advanced lead scoring', 'Multi-channel automation', 'Custom integrations'] },
          enterprise: { price: '$999', features: ['Custom AI models', 'White-label solution', 'Dedicated support'] },
          href: '/services/ai-sales-assistant',
          popular: false
        }
      ]
    },
    {
      name: 'IT & Infrastructure Solutions',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud DevOps Platform',
          description: 'Streamlined cloud infrastructure and deployment automation',
          starter: { price: '$299', features: ['Basic CI/CD', 'Standard monitoring', 'Email support'] },
          professional: { price: '$599', features: ['Advanced CI/CD', 'Custom monitoring', 'Priority support'] },
          enterprise: { price: '$1,299', features: ['Custom solutions', 'White-label', '24/7 support'] },
          href: '/services/cloud-devops',
          popular: false
        },
        {
          name: 'IT Infrastructure Management',
          description: 'Comprehensive IT infrastructure monitoring and optimization',
          starter: { price: '$399', features: ['Basic monitoring', 'Standard support', 'Basic reporting'] },
          professional: { price: '$799', features: ['Advanced monitoring', 'Priority support', 'Custom dashboards'] },
          enterprise: { price: '$1,999', features: ['Custom solutions', 'Dedicated support', 'SLA guarantees'] },
          href: '/services/it-infrastructure',
          popular: false
        },
        {
          name: 'Zero Trust Network Access',
          description: 'Advanced network security with identity-based access control',
          starter: { price: '$249', features: ['Basic access control', 'Standard security', 'Email support'] },
          professional: { price: '$499', features: ['Advanced access control', 'Custom policies', 'Priority support'] },
          enterprise: { price: '$1,199', features: ['Custom solutions', 'White-label', '24/7 support'] },
          href: '/services/zero-trust-network-access',
          popular: false
        }
      ]
    },
    {
      name: 'Business Intelligence & Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Intelligent analytics and insights for data-driven decisions',
          starter: { price: '$399', features: ['Basic analytics', 'Standard dashboards', 'Email support'] },
          professional: { price: '$799', features: ['Advanced analytics', 'Custom dashboards', 'Priority support'] },
          enterprise: { price: '$1,999', features: ['Custom AI models', 'White-label', 'Dedicated support'] },
          href: '/services/ai-business-intelligence',
          popular: false
        },
        {
          name: 'AI Financial Analytics',
          description: 'Advanced financial modeling and risk assessment',
          starter: { price: '$299', features: ['Basic modeling', 'Standard reporting', 'Email support'] },
          professional: { price: '$599', features: ['Advanced modeling', 'Custom reporting', 'Priority support'] },
          enterprise: { price: '$1,499', features: ['Custom models', 'White-label', '24/7 support'] },
          href: '/services/ai-financial-analytics',
          popular: false
        },
        {
          name: 'Website Analytics Platform',
          description: 'Comprehensive website performance and user behavior tracking',
          starter: { price: '$99', features: ['Basic tracking', 'Standard reports', 'Email support'] },
          professional: { price: '$299', features: ['Advanced tracking', 'Custom reports', 'Priority support'] },
          enterprise: { price: '$799', features: ['Custom solutions', 'White-label', 'Dedicated support'] },
          href: '/services/website-analytics',
          popular: false
        }
      ]
    },
    {
      name: 'Development & Automation Tools',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Developer Productivity Copilot',
          description: 'AI-powered development assistance and code optimization',
          starter: { price: '$199', features: ['Basic assistance', 'Standard features', 'Email support'] },
          professional: { price: '$399', features: ['Advanced assistance', 'Custom features', 'Priority support'] },
          enterprise: { price: '$999', features: ['Custom AI models', 'White-label', '24/7 support'] },
          href: '/services/developer-productivity-copilot',
          popular: false
        },
        {
          name: 'AI Content Creation Suite',
          description: 'Automated content generation and optimization',
          starter: { price: '$149', features: ['Basic generation', 'Standard templates', 'Email support'] },
          professional: { price: '$299', features: ['Advanced generation', 'Custom templates', 'Priority support'] },
          enterprise: { price: '$799', features: ['Custom AI models', 'White-label', 'Dedicated support'] },
          href: '/services/ai-content-creation-suite',
          popular: false
        },
        {
          name: 'Landing Page Generator',
          description: 'AI-powered landing page creation and optimization',
          starter: { price: '$79', features: ['Basic templates', 'Standard optimization', 'Email support'] },
          professional: { price: '$199', features: ['Advanced templates', 'Custom optimization', 'Priority support'] },
          enterprise: { price: '$499', features: ['Custom solutions', 'White-label', '24/7 support'] },
          href: '/services/landing-page-generator',
          popular: false
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
  freeTier?: boolean;
  trialPeriod?: string;
  setupTime?: string;
  growthRate?: string;
  compliance?: string[];
}

export default function ComprehensivePricingGuide2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Combine all services
  const allServices: Service[] = [
    ...enhancedInnovativeServices2025,
    ...enhancedITandAIServices2025
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      
      return matchesSearch && matchesCategory && matchesInnovation;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const innovationLevels = ['all', ...Array.from(new Set(allServices.map(s => s.innovationLevel)))];

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'text-purple-400 border-purple-400';
      case 'Cutting-edge':
        return 'text-blue-400 border-blue-400';
      case 'Advanced':
        return 'text-green-400 border-green-400';
      default:
        return 'text-gray-400 border-gray-400';
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise':
        return 'bg-purple-500 text-white';
      case 'premium':
        return 'bg-blue-500 text-white';
      case 'standard':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Comprehensive
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Pricing Guide 2025
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Explore our complete portfolio of 50+ innovative micro SAAS, IT infrastructure, and AI solutions. 
              From revolutionary AI-Quantum hybrid computing to cutting-edge AI cybersecurity platforms, 
              find the perfect solution for your business needs with transparent pricing and proven ROI.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 mb-12 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-10 h-10 text-purple-400 mb-3" />
                  <p className="text-white font-semibold text-lg mb-2">Phone</p>
                  <a href="tel:+13024640950" className="text-purple-300 hover:text-purple-200 transition-colors text-lg">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-10 h-10 text-purple-400 mb-3" />
                  <p className="text-white font-semibold text-lg mb-2">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:text-purple-200 transition-colors text-lg">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-10 h-10 text-purple-400 mb-3" />
                  <p className="text-white font-semibold text-lg mb-2">Address</p>
                  <p className="text-purple-300 text-lg">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="py-8 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Innovation Level Filter */}
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'All Innovation Levels' : level}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="roi">ROI: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover the perfect solution for your business needs with our comprehensive portfolio
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
=======
          <div className="grid gap-8 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3">
            {services.map((service, index)              => (
              <motion.div
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSupportLevelColor(service.supportLevel)}`}>
                      {service.supportLevel}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{service.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>Delivery: {service.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-purple-400">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-slate-400">/{service.pricingModel}</span>
                  </div>
                  
                  {service.marketPrice && (
                    <div className="text-sm text-slate-400 mb-2">
                      Market Price: {service.marketPrice}
                    </div>
                  )}
                  
                  {service.roi && (
                    <div className="text-sm text-green-400 font-semibold">
                      ROI: {service.roi}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-slate-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      Technical Specs
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Uptime:</span>
                        <div className="text-white font-semibold">{service.technicalSpecs.uptime}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">API Endpoints:</span>
                        <div className="text-white font-semibold">{service.technicalSpecs.apiEndpoints}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Trial & Setup */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {service.freeTier && (
                      <div className="text-center">
                        <span className="text-slate-400 block">Free Tier</span>
                        <span className="text-green-400 font-semibold">Available</span>
                      </div>
                    )}
                    {service.trialPeriod && (
                      <div className="text-center">
                        <span className="text-slate-400 block">Trial Period</span>
                        <span className="text-blue-400 font-semibold">{service.trialPeriod}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Get Quote
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-slate-400 mb-8">
                Try adjusting your search criteria or filters to find the services you're looking for.
=======

              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  Ready to start your transformation journey?
                </p>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=ROI Consultation Request"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"

                  <Mail className="w-5 h-5 mr-2" />
                  Get ROI Consultation
                </a>
              </div>
=======
        {/* Pricing Benefits */}
        <motion.section 
          className="py-16 px-6 bg-gradient-to-br from-purple-900/20 via-slate-900/50 to-pink-900/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Our Pricing?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
              {pricingBenefits.map((benefit, index)              => (
                <motion.div
                  key={benefit}
                  className="flex items-start gap-4 p-4 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </div>
        </motion.section>

        {/* Service Categories with Pricing */}
        {serviceCategories.map((category, categoryIndex) => (
          <motion.section 
            key={category.name}
            className="py-20 px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact Zion Tech Group today to discuss your specific needs and get a customized pricing proposal
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
=======
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className={`inline-flex items-center gap-3 p-3 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20 mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {category.name}
                  </h2>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the perfect plan for your {category.name.toLowerCase()} needs. All plans include our core capabilities and expert support.
                </p>
              </div>
<<<<<<< HEAD

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <p className="text-cyan-400">ziontechgroup.com</p>
=======
              
              <div className="space-y-12">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (categoryIndex * 0.2) + (serviceIndex * 0.1), duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300 text-lg">{service.description}</p>
                        </div>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        )}
                      </div>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Starter Plan */}
                      <div className="p-6 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                        <h4 className="text-lg font-semibold text-white mb-2">Starter</h4>
                        <div className="text-3xl font-bold text-purple-400 mb-4">{service.starter.price}<span className="text-lg text-gray-400">/month</span></div>
                        <ul className="space-y-3 mb-6">
                          {service.starter.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <motion.button 
                          className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Get Started
                        </motion.button>
                      </div>
                      
                      {/* Professional Plan */}
                      <div className="p-6 rounded-xl border-2 border-purple-500 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                        <h4 className="text-lg font-semibold text-white mb-2">Professional</h4>
                        <div className="text-3xl font-bold text-purple-400 mb-4">{service.professional.price}<span className="text-lg text-gray-400">/month</span></div>
                        <ul className="space-y-3 mb-6">
                          {service.professional.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <motion.button 
                          className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Get Started
                        </motion.button>
                      </div>
                      
                      {/* Enterprise Plan */}
                      <div className="p-6 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                        <h4 className="text-lg font-semibold text-white mb-2">Enterprise</h4>
                        <div className="text-3xl font-bold text-purple-400 mb-4">{service.enterprise.price}<span className="text-lg text-gray-400">/month</span></div>
                        <ul className="space-y-3 mb-6">
                          {service.enterprise.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <motion.button 
                          className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Contact Sales
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </div>
            </div>
          </motion.section>
        ))}

        {/* Contact & CTA Section */}
        <motion.section 
          className="py-20 px-6 bg-gradient-to-br from-purple-900/20 via-slate-900/50 to-pink-900/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact our team to discuss your needs and find the perfect solution for your business.
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedInnovationLevel('all');
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Contact us today to discuss your specific needs and get a customized quote for any of our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Custom Service Quote Request"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Request Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </div>

          <div className="text-slate-400">
            <p className="text-lg">
              Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}