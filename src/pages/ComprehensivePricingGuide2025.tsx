import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Brain, 
  Cloud, 
  Lock, 
  BarChart3, 
  TrendingUp, 
  FileText, 
  Video, 
  Truck, 
  Workflow, 
  MessageCircle, 
  Calendar, 
  PenTool, 
  Activity, 
  Cpu, 
  Network, 
  Atom, 
  Target, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  X,
  Info,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai-core', name: 'AI Core Services', icon: Brain },
    { id: 'ai-specialized', name: 'AI Specialized', icon: Zap },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Cloud },
    { id: 'micro-saas', name: 'Micro SaaS', icon: FileText },
    { id: 'quantum', name: 'Quantum & Edge', icon: Atom }
  ];

  const allServices = [
    // AI Core Services
    {
      id: 'ai-enterprise-automation',
      name: 'AI Enterprise Automation Platform',
      category: 'ai-core',
      description: 'End-to-end business process automation with AI',
      pricing: {
        starter: { price: '$299', period: '/month', features: ['Up to 10 workflows', 'Basic AI models', 'Email support'] },
        professional: { price: '$799', period: '/month', features: ['Up to 50 workflows', 'Advanced AI models', 'Priority support', 'API access'] },
        enterprise: { price: 'Custom', period: '', features: ['Unlimited workflows', 'Custom AI models', 'Dedicated support', 'On-premise'] }
      },
      features: ['Process automation', 'AI decision making', 'Workflow orchestration', 'Integration APIs'],
      useCases: ['Business process automation', 'Customer service automation', 'Operations optimization'],
      marketPrice: '$500-2000/month',
      savings: '40-60%',
      link: '/services/ai-enterprise-automation-platform'
    },
    {
      id: 'ai-enterprise-intelligence',
      name: 'AI Enterprise Intelligence Platform',
      category: 'ai-core',
      description: 'Comprehensive business intelligence and analytics platform',
      pricing: {
        starter: { price: '$199', period: '/month', features: ['Up to 5 data sources', 'Basic analytics', 'Standard reports'] },
        professional: { price: '$599', period: '/month', features: ['Up to 25 data sources', 'Advanced analytics', 'Custom dashboards', 'API access'] },
        enterprise: { price: 'Custom', period: '', features: ['Unlimited data sources', 'Custom models', 'Dedicated support', 'White-label'] }
      },
      features: ['Data integration', 'AI-powered insights', 'Real-time analytics', 'Predictive modeling'],
      useCases: ['Business intelligence', 'Data analytics', 'Performance monitoring'],
      marketPrice: '$300-1500/month',
      savings: '35-55%',
      link: '/services/ai-enterprise-intelligence-platform'
    },
    {
      id: 'ai-intelligent-document-processing',
      name: 'AI Intelligent Document Processing',
      category: 'ai-specialized',
      description: 'Advanced OCR, document classification, and data extraction',
      pricing: {
        starter: { price: '$99', period: '/month', features: ['Up to 1,000 documents/month', 'Basic OCR', 'Standard types', 'Email support'] },
        professional: { price: '$299', period: '/month', features: ['Up to 10,000 documents/month', 'Advanced AI', 'All types', 'Priority support', 'API access'] },
        enterprise: { price: 'Custom', period: '', features: ['Unlimited documents', 'Custom models', 'On-premise', 'Dedicated support'] }
      },
      features: ['AI-powered OCR', 'Intelligent classification', 'Data extraction', 'Process automation'],
      useCases: ['Invoice processing', 'Contract management', 'Form processing', 'Legal document review'],
      marketPrice: '$150-800/month',
      savings: '45-65%',
      link: '/services/ai-intelligent-document-processing'
    },
    {
      id: 'ai-video-analytics',
      name: 'AI Video Analytics Platform',
      category: 'ai-specialized',
      description: 'Real-time video intelligence and behavioral analytics',
      pricing: {
        starter: { price: '$199', period: '/month', features: ['Up to 4 camera feeds', 'Basic detection', 'Standard analytics', 'Email support'] },
        professional: { price: '$499', period: '/month', features: ['Up to 16 camera feeds', 'Advanced AI', 'Behavioral analysis', 'Priority support', 'API access'] },
        enterprise: { price: 'Custom', period: '', features: ['Unlimited feeds', 'Custom models', 'On-premise', 'Dedicated support'] }
      },
      features: ['Real-time analysis', 'Object detection', 'Behavioral analytics', 'Anomaly detection'],
      useCases: ['Retail analytics', 'Security surveillance', 'Manufacturing quality', 'Traffic management'],
      marketPrice: '$300-1200/month',
      savings: '40-60%',
      link: '/services/ai-video-analytics-platform'
    },
    {
      id: 'ai-supply-chain-advanced',
      name: 'AI Supply Chain Optimization Advanced',
      category: 'ai-specialized',
      description: 'End-to-end supply chain optimization with predictive analytics',
      pricing: {
        starter: { price: '$299', period: '/month', features: ['Up to 5 locations', 'Basic optimization', 'Standard analytics', 'Email support'] },
        professional: { price: '$799', period: '/month', features: ['Up to 25 locations', 'Advanced AI', 'Predictive analytics', 'Priority support', 'API access'] },
        enterprise: { price: 'Custom', period: '', features: ['Unlimited locations', 'Custom models', 'On-premise', 'Dedicated support'] }
      },
      features: ['AI optimization', 'End-to-end visibility', 'Predictive analytics', 'Risk management'],
      useCases: ['Inventory optimization', 'Transportation optimization', 'Supplier management', 'Demand planning'],
      marketPrice: '$500-2000/month',
      savings: '35-55%',
      link: '/services/ai-supply-chain-optimization-advanced'
    },
    {
      id: 'ai-business-intelligence-dashboard',
      name: 'AI Business Intelligence Dashboard',
      category: 'micro-saas',
      description: 'Intelligent business intelligence and analytics dashboard',
      pricing: {
        starter: { price: '$49', period: '/month', features: ['Up to 3 dashboards', 'Basic metrics', 'Standard reports', 'Email support'] },
        professional: { price: '$149', period: '/month', features: ['Up to 15 dashboards', 'Advanced metrics', 'Custom reports', 'Priority support', 'API access'] },
        enterprise: { price: 'Custom', period: '', features: ['Unlimited dashboards', 'Custom metrics', 'White-label', 'Dedicated support'] }
      },
      features: ['Real-time dashboards', 'AI insights', 'Custom metrics', 'Data visualization'],
      useCases: ['Business intelligence', 'Performance monitoring', 'KPI tracking', 'Executive reporting'],
      marketPrice: '$100-500/month',
      savings: '50-70%',
      link: '/services/ai-business-intelligence-dashboard'
    },
    {
      id: 'ai-customer-support-automation',
      name: 'AI Customer Support Automation',
      category: 'micro-saas',
      description: 'Intelligent customer support automation and chatbot platform',
      pricing: {
        starter: { price: '$79', period: '/month', features: ['Up to 1,000 interactions/month', 'Basic chatbot', 'Email support', 'Standard templates'] },
        professional: { price: '$199', period: '/month', features: ['Up to 10,000 interactions/month', 'Advanced AI', 'Multi-channel support', 'Priority support', 'API access'] },
        enterprise: { price: 'Custom', period: '', features: ['Unlimited interactions', 'Custom AI models', 'White-label', 'Dedicated support'] }
      },
      features: ['AI chatbot', 'Multi-channel support', 'Ticket automation', 'Knowledge base'],
      useCases: ['Customer service', 'Support automation', 'FAQ management', 'Ticket routing'],
      marketPrice: '$150-600/month',
      savings: '45-65%',
      link: '/services/ai-customer-support-automation'
    },
    {
      id: 'ai-project-management',
      name: 'AI Project Management Platform',
      category: 'micro-saas',
      description: 'Intelligent project management with AI-powered insights',
      pricing: {
        starter: { price: '$39', period: '/month', features: ['Up to 10 projects', 'Basic AI insights', 'Standard templates', 'Email support'] },
        professional: { price: '$99', period: '/month', features: ['Up to 50 projects', 'Advanced AI', 'Custom templates', 'Priority support', 'API access'] },
        enterprise: { price: 'Custom', period: '', features: ['Unlimited projects', 'Custom AI models', 'White-label', 'Dedicated support'] }
      },
      features: ['AI insights', 'Project tracking', 'Resource management', 'Risk assessment'],
      useCases: ['Project management', 'Team collaboration', 'Resource planning', 'Risk management'],
      marketPrice: '$80-300/month',
      savings: '50-70%',
      link: '/services/ai-project-management-platform'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation Platform',
      category: 'micro-saas',
      description: 'Intelligent marketing automation with AI-powered optimization',
      pricing: {
        starter: { price: '$89', period: '/month', features: ['Up to 5,000 contacts', 'Basic automation', 'Standard templates', 'Email support'] },
        professional: { price: '$199', period: '/month', features: ['Up to 25,000 contacts', 'Advanced AI', 'Custom templates', 'Priority support', 'API access'] },
        enterprise: { price: 'Custom', period: '', features: ['Unlimited contacts', 'Custom AI models', 'White-label', 'Dedicated support'] }
      },
      features: ['AI optimization', 'Campaign automation', 'Lead scoring', 'Analytics'],
      useCases: ['Email marketing', 'Lead generation', 'Campaign management', 'Customer engagement'],
      marketPrice: '$150-600/month',
      savings: '45-65%',
      link: '/services/ai-marketing-automation-platform'
    },
    {
      id: 'ai-hr-platform',
      name: 'AI HR Platform',
      category: 'micro-saas',
      description: 'Intelligent HR management with AI-powered insights',
      pricing: {
        starter: { price: '$59', period: '/month', features: ['Up to 50 employees', 'Basic AI insights', 'Standard modules', 'Email support'] },
        professional: { price: '$149', period: '/month', features: ['Up to 250 employees', 'Advanced AI', 'Custom modules', 'Priority support', 'API access'] },
        enterprise: { price: 'Custom', period: '', features: ['Unlimited employees', 'Custom AI models', 'White-label', 'Dedicated support'] }
      },
      features: ['AI insights', 'Employee management', 'Performance tracking', 'Recruitment'],
      useCases: ['HR management', 'Performance management', 'Recruitment', 'Employee engagement'],
      marketPrice: '$100-400/month',
      savings: '50-70%',
      link: '/services/ai-hr-platform'
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      category: 'ai-specialized',
      description: 'AI-powered predictive maintenance and equipment monitoring',
      pricing: {
        starter: { price: '$199', period: '/month', features: ['Up to 10 assets', 'Basic predictions', 'Standard alerts', 'Email support'] },
        professional: { price: '$499', period: '/month', features: ['Up to 100 assets', 'Advanced AI', 'Custom alerts', 'Priority support', 'API access'] },
        enterprise: { price: 'Custom', period: '', features: ['Unlimited assets', 'Custom AI models', 'On-premise', 'Dedicated support'] }
      },
      features: ['Predictive analytics', 'Asset monitoring', 'Failure prediction', 'Maintenance scheduling'],
      useCases: ['Manufacturing', 'Facility management', 'Equipment monitoring', 'Preventive maintenance'],
      marketPrice: '$300-1200/month',
      savings: '40-60%',
      link: '/services/ai-predictive-maintenance'
    },
    {
      id: 'ai-financial-trading-risk',
      name: 'AI Financial Trading Risk Management',
      category: 'ai-specialized',
      description: 'AI-powered financial trading and risk management platform',
      pricing: {
        starter: { price: '$299', period: '/month', features: ['Basic risk models', 'Standard alerts', 'Email support', 'Basic analytics'] },
        professional: { price: '$799', period: '/month', features: ['Advanced AI models', 'Custom alerts', 'Priority support', 'API access', 'Advanced analytics'] },
        enterprise: { price: 'Custom', period: '', features: ['Custom AI models', 'White-label', 'On-premise', 'Dedicated support'] }
      },
      features: ['Risk assessment', 'Trading algorithms', 'Portfolio optimization', 'Compliance monitoring'],
      useCases: ['Financial trading', 'Risk management', 'Portfolio management', 'Compliance'],
      marketPrice: '$500-2000/month',
      savings: '35-55%',
      link: '/services/ai-financial-trading-risk-management'
    },
    {
      id: 'cloud-finops-optimizer',
      name: 'Cloud FinOps Optimizer',
      category: 'it-infrastructure',
      description: 'AI-powered cloud cost optimization and FinOps management',
      pricing: {
        starter: { price: '$99', period: '/month', features: ['Basic optimization', 'Cost tracking', 'Email support', 'Standard reports'] },
        professional: { price: '$299', period: '/month', features: ['Advanced AI', 'Custom optimization', 'Priority support', 'API access', 'Advanced reports'] },
        enterprise: { price: 'Custom', period: '', features: ['Custom AI models', 'White-label', 'On-premise', 'Dedicated support'] }
      },
      features: ['Cost optimization', 'Resource management', 'Budget tracking', 'Automated scaling'],
      useCases: ['Cloud cost management', 'Resource optimization', 'Budget planning', 'Cost governance'],
      marketPrice: '$200-800/month',
      savings: '50-70%',
      link: '/services/cloud-finops-optimizer'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Platform',
      category: 'ai-specialized',
      description: 'Advanced AI-powered cybersecurity and threat detection',
      pricing: {
        starter: { price: '$199', period: '/month', features: ['Basic threat detection', 'Standard monitoring', 'Email support', 'Basic reports'] },
        professional: { price: '$499', period: '/month', features: ['Advanced AI', 'Custom monitoring', 'Priority support', 'API access', 'Advanced reports'] },
        enterprise: { price: 'Custom', period: '', features: ['Custom AI models', 'White-label', 'On-premise', 'Dedicated support'] }
      },
      features: ['Threat detection', 'Incident response', 'Vulnerability assessment', 'Compliance monitoring'],
      useCases: ['Security monitoring', 'Threat prevention', 'Incident response', 'Compliance'],
      marketPrice: '$300-1200/month',
      savings: '40-60%',
      link: '/services/ai-cybersecurity-platform'
    },
    {
      id: 'ai-quantum-neural-network',
      name: 'AI Quantum Neural Network Platform',
      category: 'quantum',
      description: 'Next-generation quantum computing and AI integration',
      pricing: {
        starter: { price: '$399', period: '/month', features: ['Basic quantum models', 'Standard access', 'Email support', 'Basic documentation'] },
        professional: { price: '$999', period: '/month', features: ['Advanced quantum models', 'Priority access', 'Priority support', 'API access', 'Advanced documentation'] },
        enterprise: { price: 'Custom', period: '', features: ['Custom quantum models', 'White-label', 'On-premise', 'Dedicated support'] }
      },
      features: ['Quantum algorithms', 'Neural networks', 'Hybrid computing', 'Quantum simulation'],
      useCases: ['Scientific research', 'Financial modeling', 'Drug discovery', 'Optimization problems'],
      marketPrice: '$600-2500/month',
      savings: '35-55%',
      link: '/services/ai-quantum-neural-network-platform'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      features: ['Basic AI capabilities', 'Standard support', 'Cloud deployment', 'Basic analytics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      features: ['Advanced AI capabilities', 'Priority support', 'API access', 'Advanced analytics', 'Custom integrations'],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Tailored solutions for large organizations',
      features: ['Custom AI models', 'Dedicated support', 'On-premise deployment', 'White-label options', 'SLA guarantees'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Comprehensive Pricing Guide 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Zion Tech Group Pricing Guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transparent, competitive pricing for all our AI and technology services. 
              Compare plans, features, and savings across our comprehensive service portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
              >
                Request Custom Quote
              </Link>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">40-70%</div>
              <div className="text-gray-400">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-400">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-gray-400">Pricing Tiers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plan Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three flexible pricing tiers designed to scale with your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 border rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/25 scale-105'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                      <Check className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-20 bg-gray-800/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Filter services by category to find the perfect solution for your needs.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Market Price</div>
                    <div className="text-lg font-semibold text-gray-300">{service.marketPrice}</div>
                    <div className="text-sm text-green-400">Save {service.savings}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {Object.entries(service.pricing).map(([plan, details]) => (
                    <div key={plan} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{details.price}</div>
                      <div className="text-sm text-gray-400 mb-2">{details.period}</div>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {details.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="block w-full text-center py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl p-12 md:p-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. Start with a free trial 
                and scale as you grow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <span className="flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link
                  to="/request-quote"
                  className="px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
                >
                  Get Custom Quote
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Setup in minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Enterprise security</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Have questions about pricing or need a custom quote? Our team is here 
                to help you find the perfect solution.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Request a Custom Quote</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <textarea
                  placeholder="Tell us about your needs and budget"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                  Request Quote
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2025;