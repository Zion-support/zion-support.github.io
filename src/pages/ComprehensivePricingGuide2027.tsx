import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Workflow, 
  Database, 
  Lock, 
  Eye,
  Target,
  TrendingUp,
  MessageCircle,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  Cpu,
  Network,
  Bot,
  Settings,
  FileText,
  Search,
  Globe,
  Smartphone,
  Tablet,
  Monitor,
  Heart,
  Activity,
  ShoppingCart,
  Rocket,
  Sparkles,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CreditCard,
  ShieldCheck,
  Zap as ZapIcon
} from 'lucide-react';

export default function ComprehensivePricingGuide2027() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: 25 },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: 12 },
    { id: 'security', name: 'Security', icon: Shield, count: 6 },
    { id: 'analytics', icon: BarChart3, count: 4 },
    { id: 'automation', name: 'Automation', icon: Workflow, count: 5 },
    { id: 'data', name: 'Data', icon: Database, count: 3 }
  ];

  const allServices = [
    // AI & ML Services
    {
      id: 'ai-workflow-orchestrator',
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent workflow automation with AI-powered optimization',
      category: 'ai',
      icon: Workflow,
      color: 'from-cyan-500 to-blue-500',
      pricing: {
        starter: { price: 99, period: 'month', features: ['Up to 10 workflows', 'Basic AI optimization', 'Standard integrations', 'Email support'] },
        professional: { price: 299, period: 'month', features: ['Up to 50 workflows', 'Advanced AI optimization', 'Premium integrations', 'Priority support', 'Custom templates'] },
        enterprise: { price: 799, period: 'month', features: ['Unlimited workflows', 'Custom AI models', 'White-label solution', 'Dedicated support', 'Custom integrations'] }
      },
      link: '/services/ai-workflow-orchestrator',
      popular: true,
      savings: 'Save up to 40% with annual plans'
    },
    {
      id: 'ai-data-governance',
      title: 'AI Data Governance Platform',
      description: 'Comprehensive data governance with AI-powered compliance monitoring',
      category: 'data',
      icon: Shield,
      color: 'from-green-500 to-blue-500',
      pricing: {
        foundation: { price: 199, period: 'month', features: ['Up to 10 data sources', 'Basic AI discovery', 'Standard compliance templates', 'Email support'] },
        enterprise: { price: 499, period: 'month', features: ['Up to 100 data sources', 'Advanced AI capabilities', 'Custom compliance policies', 'Priority support', 'API access'] },
        global: { price: 1299, period: 'month', features: ['Unlimited data sources', 'Custom AI models', 'Multi-region compliance', 'Dedicated support', 'White-label solution'] }
      },
      link: '/services/ai-data-governance-platform',
      popular: false,
      savings: 'Save up to 35% with annual plans'
    },
    {
      id: 'ai-customer-analytics',
      title: 'AI Customer Experience Analytics',
      description: 'Deep customer insights with AI-powered sentiment analysis',
      category: 'analytics',
      icon: Users,
      color: 'from-pink-500 to-purple-500',
      pricing: {
        starter: { price: 149, period: 'month', features: ['Up to 10K interactions/month', 'Basic sentiment analysis', 'Standard dashboards', 'Email support'] },
        professional: { price: 399, period: 'month', features: ['Up to 100K interactions/month', 'Advanced AI analytics', 'Custom dashboards', 'Priority support', 'Predictive modeling'] },
        enterprise: { price: 999, period: 'month', features: ['Unlimited interactions', 'Custom AI models', 'White-label solution', 'Dedicated support', 'Multi-tenant architecture'] }
      },
      link: '/services/ai-customer-experience-analytics',
      popular: false,
      savings: 'Save up to 30% with annual plans'
    },
    {
      id: 'ai-financial-analytics',
      title: 'AI Financial Analytics',
      description: 'Intelligent financial insights and risk management',
      category: 'ai',
      icon: BarChart3,
      color: 'from-emerald-500 to-teal-500',
      pricing: {
        starter: { price: 299, period: 'month', features: ['Basic risk assessment', 'Financial forecasting', 'Standard reporting', 'Email support'] },
        professional: { price: 599, period: 'month', features: ['Advanced risk modeling', 'Portfolio optimization', 'Custom dashboards', 'Priority support', 'API access'] },
        enterprise: { price: 1499, period: 'month', features: ['Custom AI models', 'White-label solution', 'Dedicated support', 'Advanced integrations', 'SLA guarantees'] }
      },
      link: '/services/ai-financial-analytics',
      popular: false,
      savings: 'Save up to 25% with annual plans'
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation',
      description: 'Smart marketing campaigns with AI-driven personalization',
      category: 'automation',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      pricing: {
        starter: { price: 199, period: 'month', features: ['Basic personalization', 'Campaign automation', 'Standard analytics', 'Email support'] },
        professional: { price: 499, period: 'month', features: ['Advanced personalization', 'A/B testing', 'Custom workflows', 'Priority support', 'API access'] },
        enterprise: { price: 1299, period: 'month', features: ['Custom AI models', 'White-label solution', 'Dedicated support', 'Advanced integrations', 'Multi-brand support'] }
      },
      link: '/services/ai-marketing-automation',
      popular: false,
      savings: 'Save up to 30% with annual plans'
    },
    {
      id: 'ai-project-management',
      title: 'AI Project Management',
      description: 'Intelligent project planning and execution with AI insights',
      category: 'ai',
      icon: Target,
      color: 'from-indigo-500 to-purple-500',
      pricing: {
        starter: { price: 179, period: 'month', features: ['Smart scheduling', 'Basic resource optimization', 'Standard reporting', 'Email support'] },
        professional: { price: 399, period: 'month', features: ['Advanced scheduling', 'Resource optimization', 'Risk prediction', 'Priority support', 'Custom workflows'] },
        enterprise: { price: 999, period: 'month', features: ['Custom AI models', 'White-label solution', 'Dedicated support', 'Advanced integrations', 'Multi-project portfolio'] }
      },
      link: '/services/ai-project-management',
      popular: false,
      savings: 'Save up to 35% with annual plans'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Automation',
      description: 'Automated customer support with intelligent routing',
      category: 'automation',
      icon: MessageCircle,
      color: 'from-blue-500 to-indigo-500',
      pricing: {
        starter: { price: 159, period: 'month', features: ['Basic chatbot', 'Ticket routing', 'Standard analytics', 'Email support'] },
        professional: { price: 399, period: 'month', features: ['Advanced chatbot', 'Intelligent routing', 'Sentiment analysis', 'Priority support', 'API access'] },
        enterprise: { price: 999, period: 'month', features: ['Custom AI models', 'White-label solution', 'Dedicated support', 'Advanced integrations', 'Multi-language support'] }
      },
      link: '/services/ai-customer-support-automation',
      popular: false,
      savings: 'Save up to 30% with annual plans'
    },
    {
      id: 'ai-code-review',
      title: 'AI Code Review Security Scanner',
      description: 'Automated code security analysis with vulnerability detection',
      category: 'security',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      pricing: {
        starter: { price: 249, period: 'month', features: ['Basic vulnerability detection', 'Code quality analysis', 'Standard reporting', 'Email support'] },
        professional: { price: 599, period: 'month', features: ['Advanced vulnerability detection', 'Custom rules', 'Integration APIs', 'Priority support', 'Compliance reporting'] },
        enterprise: { price: 1499, period: 'month', features: ['Custom AI models', 'White-label solution', 'Dedicated support', 'Advanced integrations', 'SLA guarantees'] }
      },
      link: '/services/ai-code-review-security-scanner',
      popular: false,
      savings: 'Save up to 25% with annual plans'
    },
    {
      id: 'zero-trust-network',
      title: 'Zero Trust Network Access',
      description: 'Modern security architecture with continuous verification',
      category: 'security',
      icon: Lock,
      color: 'from-purple-500 to-indigo-500',
      pricing: {
        starter: { price: 399, period: 'month', features: ['Basic access control', 'Identity management', 'Standard security', 'Email support'] },
        professional: { price: 799, period: 'month', features: ['Advanced access control', 'Micro-segmentation', 'Threat detection', 'Priority support', 'API access'] },
        enterprise: { price: 1999, period: 'month', features: ['Custom security policies', 'White-label solution', 'Dedicated support', 'Advanced integrations', 'SLA guarantees'] }
      },
      link: '/services/zero-trust-network-access',
      popular: false,
      savings: 'Save up to 30% with annual plans'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const annualSavings = {
    'ai-workflow-orchestrator': 40,
    'ai-data-governance': 35,
    'ai-customer-analytics': 30,
    'ai-financial-analytics': 25,
    'ai-marketing-automation': 30,
    'ai-project-management': 35,
    'ai-customer-support': 30,
    'ai-code-review': 25,
    'zero-trust-network': 30
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6">
              <DollarSign className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">2027 Comprehensive Pricing Guide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Complete Service
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pricing Guide
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our AI-powered services and micro SAAS solutions. 
              Choose the perfect plan for your business needs and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {selectedCategory === 'all' ? 'All Services Pricing' : `${categories.find(c => c.id === selectedCategory)?.name} Pricing`}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare pricing across all plans and find the perfect solution for your business.
            </p>
          </motion.div>

          <div className="space-y-12">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border ${
                  service.popular 
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                    : 'border-slate-600/50'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex flex-col lg:flex-row items-start justify-between mb-8">
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-4`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-300">{service.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:ml-8">
                    <div className="text-center mb-4">
                      <p className="text-sm text-cyan-400 font-medium">{service.savings}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(service.pricing).map(([planName, planDetails]) => (
                    <div
                      key={planName}
                      className={`bg-gradient-to-br from-slate-700/50 to-slate-600/50 p-6 rounded-xl border ${
                        planName === 'professional' ? 'border-cyan-500/50' : 'border-slate-500/50'
                      }`}
                    >
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2 capitalize">{planName}</h4>
                        <div className="mb-2">
                          <span className="text-3xl font-bold text-white">${planDetails.price}</span>
                          <span className="text-gray-400">/{planDetails.period}</span>
                        </div>
                        {planName === 'professional' && (
                          <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                            Best Value
                          </span>
                        )}
                      </div>

                      <ul className="space-y-3 mb-6">
                        {planDetails.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-3">
                        <Link
                          to={service.link}
                          className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center text-sm"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-2 px-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center text-sm"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Watch Demo
                        </motion.button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team to discuss your needs and get a personalized quote for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-sm">{contactInfo.address}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                ziontechgroup.com
              </a>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center mx-auto"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
