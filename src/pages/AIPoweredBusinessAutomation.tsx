import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Users, BarChart3, Shield, Cloud, Rocket, 
  CheckCircle, Star, ArrowRight, Phone, Mail, MapPin,
  Bot, GitFork, Sparkles, Workflow, Target, Lock, 
  Eye, Search, Filter, ExternalLink, Download, Upload,
  Share, Bookmark, MessageCircle, PhoneCall, VideoCall,
  MailOpen, Send, Plus, Minus, Database, Server, Network,
  Cpu, Code, Palette, Camera, Video, Music, Gamepad2,
  Car, Plane, Ship, Leaf, Sun, Wind, Smartphone, Watch,
  Headphones, Printer, Wifi, Bluetooth, Satellite, Telescope,
  Microscope, Beaker, Pill, Stethoscope, Calculator, BookOpen,
  GraduationCap, DollarSign, CreditCard, ShoppingCart, Truck,
  Warehouse, Factory, Building2, Home, Store, Bank, Insurance,
  Law, Gavel, FileText, Calendar, Clock, Timer, Stopwatch,
  Thermometer, Gauge, Compass, Map, SortAsc, SortDesc,
  ChevronDown, ChevronUp
} from 'lucide-react';

interface AutomationService {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  pricing: string;
  benefits: string[];
  icon: any;
  color: string;
  featured: boolean;
  cta: string;
  ctaLink: string;
  marketPrice: string;
  roi: string;
  useCases: string[];
}

const AIPoweredBusinessAutomation: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Automation', icon: Sparkles, count: 0 },
    { id: 'sales', name: 'Sales Automation', icon: Users, count: 0 },
    { id: 'marketing', name: 'Marketing Automation', icon: Target, count: 0 },
    { id: 'operations', name: 'Operations', icon: Workflow, count: 0 },
    { id: 'finance', name: 'Finance & HR', icon: DollarSign, count: 0 },
    { id: 'customer-service', name: 'Customer Service', icon: MessageCircle, count: 0 },
    { id: 'analytics', name: 'Analytics & BI', icon: BarChart3, count: 0 }
  ];

  const automationServices: AutomationService[] = [
    // SALES AUTOMATION
    {
      id: 'ai-sales-pipeline',
      title: 'AI Sales Pipeline Optimizer',
      description: 'Intelligent sales pipeline management that predicts deal outcomes and automates follow-ups',
      category: 'sales',
      features: [
        'Deal Probability Prediction',
        'Automated Follow-up Sequences',
        'Lead Scoring & Prioritization',
        'CRM Integration (Salesforce, HubSpot)',
        'Sales Performance Analytics',
        'Pipeline Health Monitoring',
        'Custom Workflow Automation',
        'Real-time Notifications'
      ],
      pricing: '$399 - $1,999/month',
      benefits: [
        'Increase win rates by 35%',
        'Reduce sales cycle by 40%',
        'Automate 80% of follow-ups',
        'Improve forecast accuracy',
        'Scale sales operations efficiently'
      ],
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      cta: 'Optimize Sales',
      ctaLink: '/contact',
      marketPrice: '$600 - $2,500/month',
      roi: '420% ROI in 6 months',
      useCases: [
        'B2B Sales Teams',
        'Enterprise Sales',
        'SaaS Companies',
        'Consulting Firms'
      ]
    },
    {
      id: 'ai-lead-generation',
      title: 'AI Lead Generation Engine',
      description: 'Automated lead generation using AI to find, qualify, and nurture prospects',
      category: 'sales',
      features: [
        'AI-Powered Prospect Discovery',
        'Intent-Based Lead Scoring',
        'Automated Outreach Sequences',
        'Multi-channel Lead Capture',
        'Lead Qualification Automation',
        'CRM Integration',
        'Performance Analytics',
        'Custom Lead Sources'
      ],
      pricing: '$299 - $1,499/month',
      benefits: [
        'Generate 3x more qualified leads',
        'Reduce cost per lead by 60%',
        'Automate lead nurturing',
        'Improve conversion rates',
        '24/7 lead generation'
      ],
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      cta: 'Generate Leads',
      ctaLink: '/contact',
      marketPrice: '$500 - $2,000/month',
      roi: '380% ROI in 4 months',
      useCases: [
        'Marketing Agencies',
        'B2B Companies',
        'Startups',
        'Consulting Services'
      ]
    },

    // MARKETING AUTOMATION
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation Suite',
      description: 'Comprehensive marketing automation platform with AI-powered personalization and optimization',
      category: 'marketing',
      features: [
        'AI-Powered Personalization',
        'Multi-channel Campaign Management',
        'Behavioral Segmentation',
        'A/B Testing Automation',
        'Content Optimization',
        'Email Marketing Automation',
        'Social Media Management',
        'ROI Tracking & Analytics'
      ],
      pricing: '$499 - $2,499/month',
      benefits: [
        'Increase engagement by 45%',
        'Improve conversion rates by 35%',
        'Reduce marketing costs by 40%',
        'Personalize customer experiences',
        'Automate complex campaigns'
      ],
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      cta: 'Automate Marketing',
      ctaLink: '/contact',
      marketPrice: '$800 - $3,000/month',
      roi: '450% ROI in 8 months',
      useCases: [
        'E-commerce Businesses',
        'SaaS Companies',
        'Digital Agencies',
        'Enterprise Marketing'
      ]
    },

    // OPERATIONS AUTOMATION
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent workflow automation that orchestrates complex business processes',
      category: 'operations',
      features: [
        'Visual Workflow Designer',
        'AI Decision Making',
        'Process Optimization',
        'Real-time Monitoring',
        'Custom Integrations',
        'Performance Analytics',
        'Error Handling',
        'Scalable Architecture'
      ],
      pricing: '$599 - $2,999/month',
      benefits: [
        'Reduce process time by 70%',
        'Eliminate manual errors',
        'Improve efficiency by 60%',
        'Scale operations easily',
        'Better compliance'
      ],
      icon: Workflow,
      color: 'from-indigo-500 to-purple-500',
      featured: false,
      cta: 'Orchestrate Workflows',
      ctaLink: '/contact',
      marketPrice: '$1,000 - $4,000/month',
      roi: '520% ROI in 9 months',
      useCases: [
        'Manufacturing',
        'Healthcare',
        'Financial Services',
        'Logistics Companies'
      ]
    },

    // FINANCE & HR AUTOMATION
    {
      id: 'ai-financial-automation',
      title: 'AI Financial Process Automation',
      description: 'Automate financial processes including invoicing, expense management, and reporting',
      category: 'finance',
      features: [
        'Automated Invoice Processing',
        'Expense Management',
        'Financial Reporting',
        'Budget Tracking',
        'Compliance Monitoring',
        'Audit Trail',
        'Multi-currency Support',
        'Integration with Accounting Software'
      ],
      pricing: '$349 - $1,799/month',
      benefits: [
        'Reduce processing time by 80%',
        'Improve accuracy by 95%',
        'Save 20+ hours per week',
        'Better compliance',
        'Real-time financial insights'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      cta: 'Automate Finance',
      ctaLink: '/contact',
      marketPrice: '$600 - $2,500/month',
      roi: '480% ROI in 6 months',
      useCases: [
        'Small Businesses',
        'Medium Enterprises',
        'Accounting Firms',
        'Financial Services'
      ]
    },

    // CUSTOMER SERVICE AUTOMATION
    {
      id: 'ai-customer-service',
      title: 'AI Customer Service Automation',
      description: 'Intelligent customer service automation with chatbots and ticket management',
      category: 'customer-service',
      features: [
        'AI Chatbots',
        'Ticket Auto-routing',
        'Knowledge Base Integration',
        'Sentiment Analysis',
        'Multi-language Support',
        '24/7 Availability',
        'Performance Analytics',
        'Custom Workflows'
      ],
      pricing: '$249 - $1,499/month',
      benefits: [
        'Reduce response time by 80%',
        'Handle 5x more inquiries',
        'Improve customer satisfaction',
        'Reduce support costs by 60%',
        'Always available support'
      ],
      icon: MessageCircle,
      color: 'from-orange-500 to-red-500',
      featured: false,
      cta: 'Automate Support',
      ctaLink: '/contact',
      marketPrice: '$400 - $2,000/month',
      roi: '410% ROI in 5 months',
      useCases: [
        'E-commerce',
        'SaaS Companies',
        'Retail Businesses',
        'Service Companies'
      ]
    },

    // ANALYTICS & BI AUTOMATION
    {
      id: 'ai-analytics-automation',
      title: 'AI Analytics & BI Automation',
      description: 'Automated business intelligence with AI-powered insights and reporting',
      category: 'analytics',
      features: [
        'Automated Data Collection',
        'AI-Powered Insights',
        'Custom Dashboard Creation',
        'Scheduled Reporting',
        'Anomaly Detection',
        'Predictive Analytics',
        'Data Visualization',
        'Multi-source Integration'
      ],
      pricing: '$449 - $2,299/month',
      benefits: [
        'Get insights 10x faster',
        'Automate reporting',
        'Uncover hidden patterns',
        'Make data-driven decisions',
        'Scale analytics operations'
      ],
      icon: BarChart3,
      color: 'from-teal-500 to-cyan-500',
      featured: false,
      cta: 'Automate Analytics',
      ctaLink: '/contact',
      marketPrice: '$700 - $3,000/month',
      roi: '380% ROI in 7 months',
      useCases: [
        'Data-driven Companies',
        'Consulting Firms',
        'Financial Services',
        'Manufacturing'
      ]
    }
  ];

  // Calculate category counts
  categories.forEach(cat => {
    cat.count = automationServices.filter(service => 
      cat.id === 'all' || service.category === cat.id
    ).length;
  });

  const filteredServices = automationServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-20 text-white">
        {/* Header */}
        <motion.header 
          className="text-center max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI-Powered Business Automation
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Transform your business operations with intelligent automation solutions that work 24/7 to increase efficiency and drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="inline-block w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="inline-block w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </a>
          </div>
        </motion.header>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search automation services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:border-cyan-400/40'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 ${
                service.featured ? 'ring-2 ring-cyan-400/50' : ''
              }`}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                {service.featured && (
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Service Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-300 mb-3 uppercase tracking-wide">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-cyan-400 font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-green-300 mb-3 uppercase tracking-wide">Benefits</h4>
                <ul className="space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-300">
                      <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wide">Perfect For</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, index) => (
                    <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing & ROI */}
              <div className="mb-6 p-4 bg-white/5 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold text-cyan-300">{service.pricing}</span>
                  <span className="text-sm text-green-400 font-medium">{service.roi}</span>
                </div>
                <div className="text-xs text-slate-400">
                  Market Price: {service.marketPrice}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={service.ctaLink}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.section 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get a personalized automation strategy and discover how AI can transform your operations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-slate-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-slate-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Automation Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AIPoweredBusinessAutomation;