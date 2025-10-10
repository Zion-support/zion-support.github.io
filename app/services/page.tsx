'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Code, Zap, Shield, BarChart3, Users, 
  MessageSquare, Target, FileText, Video, Image, 
  Settings, Globe, Smartphone, Monitor, Database, 
  Network, Lock, Wifi, Server, HardDrive, Cpu, 
  MemoryStick, Wrench, Hammer, Paintbrush, Scissors, 
  BookOpen, Calculator, Calendar, Clock, Compass, 
  Navigation as NavIcon, PieChart, TrendingDown, 
  Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, 
  CheckCircle as CheckIcon, ArrowRight as Arrow,
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,
  Award, DollarSign, TrendingUp, CheckCircle, Star,
  Search, ExternalLink, Sparkles, Atom, Truck, 
  ChefHat, Rocket, Sprout, Scale, Stethoscope, 
  GraduationCap, Briefcase, Factory, Car, Plane, 
  Ship, Train, Home, Heart, Gamepad2, ShoppingCart,
  CreditCard, Building, Music, Camera, Printer,
  Headphones, Eye, Edit, Trash2, Plus, Minus, 
  X, Check, AlertCircle, Info, HelpCircle, Bot,
  Layers, BarChart, LineChart, Activity as ActivityIcon,
  Phone, Mail, MapPin, Clock, MessageSquare as MessageSquareIcon,
  Share2, Robot
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: React.ComponentType<any>;
  popular?: boolean;
  comingSoon?: boolean;
  link: string;
  trial: string;
  roi: string;
  useCases: string[];
  industries: string[];
  color: string;
  bgColor: string;
}

const services: Service[] = [
  // AI Services
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence Pro',
    description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting.',
    features: [
      'Natural language queries',
      'Automated report generation',
      'Predictive analytics',
      'Real-time dashboards',
      'Data visualization',
      'Anomaly detection',
      'Custom KPI tracking',
      'API integrations'
    ],
    pricing: { monthly: 499, yearly: 4990, setup: 999 },
    category: 'AI Services',
    icon: Brain,
    popular: true,
    link: 'https://ziontechgroup.com/ai-business-intelligence',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    useCases: ['Financial forecasting', 'Market analysis', 'Performance optimization', 'Risk assessment'],
    industries: ['Finance', 'Retail', 'Healthcare', 'Manufacturing'],
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    id: 'ai-content-generation',
    name: 'AI Content Generation Pro',
    description: 'Create high-quality content at scale with AI-powered writing, editing, and optimization tools.',
    features: [
      'GPT-4 powered content generation',
      'SEO optimization suggestions',
      'Multiple content formats',
      'Brand voice customization',
      'Plagiarism detection',
      'Content calendar integration',
      'Multi-language support',
      'Team collaboration tools'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'AI Services',
    icon: FileText,
    popular: true,
    link: 'https://ziontechgroup.com/ai-content-generation',
    trial: '7-day free trial',
    roi: '250% ROI in 3 months',
    useCases: ['Blog writing', 'Social media content', 'Email campaigns', 'Product descriptions'],
    industries: ['Marketing', 'E-commerce', 'Publishing', 'Education'],
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Pro',
    description: '24/7 intelligent customer support with natural language processing, sentiment analysis, and escalation management.',
    features: [
      '24/7 availability',
      'Multi-language support',
      'Sentiment analysis',
      'Escalation management',
      'Knowledge base integration',
      'Voice and text support',
      'A/B testing capabilities',
      'Custom integrations'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 499 },
    category: 'AI Services',
    icon: MessageSquare,
    popular: true,
    link: 'https://ziontechgroup.com/ai-customer-support',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months',
    useCases: ['FAQ automation', 'Ticket routing', 'Live chat support', 'Voice assistance'],
    industries: ['E-commerce', 'SaaS', 'Healthcare', 'Financial Services'],
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },

  // IT Services
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Pro',
    description: 'Comprehensive cloud solutions with AWS, Azure, and Google Cloud integration, automated scaling, and 24/7 monitoring.',
    features: [
      'Multi-cloud deployment',
      'Automated scaling',
      '24/7 monitoring',
      'Disaster recovery',
      'Security compliance',
      'Cost optimization',
      'Performance tuning',
      'Migration services'
    ],
    pricing: { monthly: 999, yearly: 9990, setup: 1999 },
    category: 'IT Services',
    icon: Cloud,
    popular: true,
    link: 'https://ziontechgroup.com/cloud-infrastructure',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    useCases: ['Application hosting', 'Data backup', 'Disaster recovery', 'Scalable infrastructure'],
    industries: ['SaaS', 'E-commerce', 'Healthcare', 'Finance'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Pro',
    description: 'Comprehensive security solutions with threat detection, vulnerability assessment, and incident response.',
    features: [
      'Threat detection & response',
      'Vulnerability assessment',
      'Penetration testing',
      'Security monitoring',
      'Compliance management',
      'Incident response',
      'Security training',
      '24/7 SOC support'
    ],
    pricing: { monthly: 1299, yearly: 12990, setup: 2499 },
    category: 'IT Services',
    icon: Shield,
    popular: true,
    link: 'https://ziontechgroup.com/cybersecurity',
    trial: '30-day free trial',
    roi: '500% ROI in 8 months',
    useCases: ['Threat protection', 'Compliance management', 'Security monitoring', 'Incident response'],
    industries: ['Finance', 'Healthcare', 'Government', 'E-commerce'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    id: 'network-management',
    name: 'Network Management Pro',
    description: 'Complete network infrastructure management with monitoring, optimization, and security.',
    features: [
      'Network monitoring',
      'Performance optimization',
      'Security management',
      'Traffic analysis',
      'Bandwidth management',
      'Fault detection',
      'Capacity planning',
      '24/7 support'
    ],
    pricing: { monthly: 699, yearly: 6990, setup: 1399 },
    category: 'IT Services',
    icon: Network,
    popular: false,
    link: 'https://ziontechgroup.com/network-management',
    trial: '14-day free trial',
    roi: '300% ROI in 5 months',
    useCases: ['Network monitoring', 'Performance optimization', 'Security management', 'Capacity planning'],
    industries: ['Enterprise', 'Education', 'Healthcare', 'Manufacturing'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },

  // Micro SAAS
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager Pro',
    description: 'Intelligent project management with predictive analytics, automated resource allocation, and smart task prioritization.',
    features: [
      'AI-powered task prioritization',
      'Predictive timeline forecasting',
      'Resource optimization algorithms',
      'Risk assessment and mitigation',
      'Team workload balancing',
      'Progress tracking automation',
      'Stakeholder communication tools',
      'Integration with 50+ tools'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 199 },
    category: 'Micro SAAS',
    icon: BarChart3,
    popular: true,
    link: 'https://ziontechgroup.com/ai-project-manager',
    trial: '14-day free trial',
    roi: '300% ROI in 6 months',
    useCases: ['Project planning', 'Resource management', 'Timeline optimization', 'Team coordination'],
    industries: ['Software Development', 'Consulting', 'Construction', 'Marketing'],
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager Pro',
    description: 'Automated social media content creation, optimal posting scheduling, and engagement optimization across all platforms.',
    features: [
      'AI content generation',
      'Optimal posting time prediction',
      'Hashtag optimization',
      'Engagement analytics',
      'Multi-platform management',
      'Competitor analysis',
      'Influencer collaboration tools',
      'White-label options'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 99 },
    category: 'Micro SAAS',
    icon: Share2,
    popular: true,
    link: 'https://ziontechgroup.com/ai-social-media-manager',
    trial: '7-day free trial',
    roi: '250% ROI in 3 months',
    useCases: ['Content creation', 'Post scheduling', 'Engagement optimization', 'Analytics tracking'],
    industries: ['Marketing', 'E-commerce', 'Entertainment', 'Non-profit'],
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard Pro',
    description: 'Real-time business intelligence with predictive insights, automated reporting, and data visualization.',
    features: [
      'Real-time analytics',
      'Predictive insights',
      'Custom dashboard creation',
      'Automated report generation',
      'Data visualization tools',
      'Anomaly detection',
      'Custom KPI tracking',
      'API integrations'
    ],
    pricing: { monthly: 399, yearly: 3990, setup: 299 },
    category: 'Micro SAAS',
    icon: BarChart,
    popular: true,
    link: 'https://ziontechgroup.com/ai-analytics-dashboard',
    trial: '14-day free trial',
    roi: '400% ROI in 4 months',
    useCases: ['Business intelligence', 'Performance monitoring', 'Predictive analytics', 'Custom reporting'],
    industries: ['Retail', 'Finance', 'Healthcare', 'Manufacturing'],
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },

  // Specialized Services
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Revolutionary quantum computing solutions for complex optimization problems and advanced simulations.',
    features: [
      'Quantum algorithm development',
      'Optimization problem solving',
      'Advanced simulations',
      'Quantum machine learning',
      'Cryptography solutions',
      'Research collaboration',
      'Custom quantum applications',
      'Expert consultation'
    ],
    pricing: { monthly: 4999, yearly: 49990, setup: 9999 },
    category: 'Specialized',
    icon: Atom,
    popular: false,
    link: 'https://ziontechgroup.com/quantum-computing',
    trial: '60-day free trial',
    roi: '1000% ROI in 24 months',
    useCases: ['Optimization problems', 'Cryptography', 'Machine learning', 'Scientific research'],
    industries: ['Finance', 'Pharmaceuticals', 'Research', 'Government'],
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },
  {
    id: 'autonomous-systems',
    name: 'Autonomous Systems Pro',
    description: 'Advanced autonomous systems with AI-powered decision making, sensor integration, and real-time control.',
    features: [
      'AI decision making',
      'Sensor integration',
      'Real-time control',
      'Machine learning algorithms',
      'Safety protocols',
      'Performance optimization',
      'Custom development',
      'Integration support'
    ],
    pricing: { monthly: 2999, yearly: 29990, setup: 5999 },
    category: 'Specialized',
    icon: Robot,
    popular: false,
    link: 'https://ziontechgroup.com/autonomous-systems',
    trial: '30-day free trial',
    roi: '500% ROI in 12 months',
    useCases: ['Autonomous vehicles', 'Robotic systems', 'Industrial automation', 'Smart cities'],
    industries: ['Automotive', 'Manufacturing', 'Logistics', 'Agriculture'],
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },
  {
    id: 'blockchain-web3',
    name: 'Blockchain & Web3 Pro',
    description: 'Comprehensive blockchain solutions with smart contracts, DeFi protocols, and Web3 applications.',
    features: [
      'Smart contract development',
      'DeFi protocol design',
      'Web3 applications',
      'Token economics',
      'Security auditing',
      'Integration services',
      'Custom blockchain solutions',
      'Expert consultation'
    ],
    pricing: { monthly: 1999, yearly: 19990, setup: 3999 },
    category: 'Specialized',
    icon: Lock,
    popular: false,
    link: 'https://ziontechgroup.com/blockchain-web3',
    trial: '30-day free trial',
    roi: '400% ROI in 8 months',
    useCases: ['DeFi protocols', 'NFT platforms', 'Smart contracts', 'Web3 applications'],
    industries: ['Finance', 'Gaming', 'Art', 'Real Estate'],
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  }
];

const categories = [
  'All',
  'AI Services',
  'IT Services',
  'Micro SAAS',
  'Specialized'
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our solutions deliver an average ROI of 350% within 6 months',
    stat: '350%'
  },
  {
    icon: Clock,
    title: 'Rapid Implementation',
    description: 'Get up and running in under 48 hours with our streamlined setup',
    stat: '48h'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with 99.9% uptime guarantee and compliance',
    stat: '99.9%'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 support from our team of certified professionals',
    stat: '24/7'
  }
];

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    company: 'MedTech Solutions',
    role: 'CTO',
    content: 'AI Business Intelligence Pro revolutionized our data analysis. We saw a 400% improvement in decision-making speed within 3 months.',
    rating: 5,
    avatar: '/images/testimonials/sarah-chen.jpg'
  },
  {
    name: 'Michael Rodriguez',
    company: 'FinTech Innovations',
    role: 'CEO',
    content: 'The cloud infrastructure solution transformed our scalability. We reduced costs by 40% while improving performance by 60%.',
    rating: 5,
    avatar: '/images/testimonials/michael-rodriguez.jpg'
  },
  {
    name: 'Emily Johnson',
    company: 'Manufacturing Corp',
    role: 'Operations Director',
    content: 'AI Project Manager Pro helped us reduce project delays by 45% and improve team productivity by 70%. The ROI was evident within 2 months.',
    rating: 5,
    avatar: '/images/testimonials/emily-johnson.jpg'
  }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    let filtered = services;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
        service.useCases.some(useCase => useCase.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Our Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-text-advanced">
              Comprehensive Technology Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              From AI-powered business intelligence to cloud infrastructure and specialized solutions, 
              we provide the technology foundation your business needs to succeed in the digital age.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">350% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Industry Leading</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white shadow-lg'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 group relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{formatPrice(service.pricing.monthly)}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.useCases.slice(0, 3).map((useCase, index) => (
                      <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trial:</span>
                    <span className="text-cyan-400 font-medium">{service.trial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their businesses with our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-advanced p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}