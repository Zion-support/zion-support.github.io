import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Bot,
  Workflow,
  Automation,
  Robot,
  Smartphone,
  Monitor,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Eye,
  Sparkles,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Users2,
  Settings,
  Palette,
  Handshake,
  Lightbulb,
  Users,
  Globe,
  Code,
  HardDrive,
  FileText,
  HelpCircle,
  BarChart3,
  Building2,
  GraduationCap,
  Briefcase,
  Heart,
  DollarSign,
  Target,
  Rocket,
  Clock,
  Gauge,
  BarChart4,
  PieChart,
  LineChart,
  AreaChart,
  ScatterChart,
  Calendar,
  AlertTriangle,
  Bell,
  Mail,
  Phone,
  Video,
  Camera,
  Microphone,
  Headphones,
  Printer,
  Scanner,
  Fax,
  Copier,
  Projector,
  Whiteboard,
  Flipchart,
  Easel,
  StickyNote,
  Paperclip,
  Folder,
  File,
  Archive,
  Trash2,
  Download,
  Upload,
  Share2,
  Link,
  ExternalLink,
  Copy,
  Cut,
  Paste,
  Undo,
  Redo,
  Save,
  Edit,
  Plus,
  Minus,
  X,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Columns,
  Rows,
  Layout,
  Sidebar,
  Menu,
  MoreHorizontal,
  MoreVertical,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  Move,
  RotateCw,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  RefreshCw,
  RefreshCw2,
  RefreshCw3,
  RefreshCw4,
  RefreshCw5,
  RefreshCw6,
  RefreshCw7,
  RefreshCw8,
  RefreshCw9,
  RefreshCw10,
  RefreshCw11,
  RefreshCw12,
  RefreshCw13,
  RefreshCw14,
  RefreshCw15,
  RefreshCw16,
  RefreshCw17,
  RefreshCw18,
  RefreshCw19,
  RefreshCw20,
  RefreshCw21,
  RefreshCw22,
  RefreshCw23,
  RefreshCw24,
  RefreshCw25,
  RefreshCw26,
  RefreshCw27,
  RefreshCw28,
  RefreshCw29,
  RefreshCw30,
  RefreshCw31,
  RefreshCw32,
  RefreshCw33,
  RefreshCw34,
  RefreshCw35,
  RefreshCw36,
  RefreshCw37,
  RefreshCw38,
  RefreshCw39,
  RefreshCw40,
  RefreshCw41,
  RefreshCw42,
  RefreshCw43,
  RefreshCw44,
  RefreshCw45,
  RefreshCw46,
  RefreshCw47,
  RefreshCw48,
  RefreshCw49,
  RefreshCw50,
  RefreshCw51,
  RefreshCw52,
  RefreshCw53,
  RefreshCw54,
  RefreshCw55,
  RefreshCw56,
  RefreshCw57,
  RefreshCw58,
  RefreshCw59,
  RefreshCw60,
  RefreshCw61,
  RefreshCw62,
  RefreshCw63,
  RefreshCw64,
  RefreshCw65,
  RefreshCw66,
  RefreshCw67,
  RefreshCw68,
  RefreshCw69,
  RefreshCw70,
  RefreshCw71,
  RefreshCw72,
  RefreshCw73,
  RefreshCw74,
  RefreshCw75,
  RefreshCw76,
  RefreshCw77,
  RefreshCw78,
  RefreshCw79,
  RefreshCw80,
  RefreshCw81,
  RefreshCw82,
  RefreshCw83,
  RefreshCw84,
  RefreshCw85,
  RefreshCw86,
  RefreshCw87,
  RefreshCw88,
  RefreshCw89,
  RefreshCw90,
  RefreshCw91,
  RefreshCw92,
  RefreshCw93,
  RefreshCw94,
  RefreshCw95,
  RefreshCw96,
  RefreshCw97,
  RefreshCw98,
  RefreshCw99,
  RefreshCw100,
  ShoppingCart,
  Truck,
  CreditCard,
  Wallet,
  PiggyBank,
  Banknote,
  Receipt,
  Calculator,
  Percent,
  Hash,
  Hash as HashIcon,
  Hash as HashIcon2,
  Hash as HashIcon3,
  Hash as HashIcon4,
  Hash as HashIcon5,
  Hash as HashIcon6,
  Hash as HashIcon7,
  Hash as HashIcon8,
  Hash as HashIcon9,
  Hash as HashIcon10
} from 'lucide-react';

export default function ComprehensivePricingGuide2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cpu },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Bot },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'automation', name: 'Automation', icon: Workflow }
  ];

  const services = [
    // AI Services
    {
      id: 'ai-quantum-neural-network',
      name: 'AI Quantum Neural Network Platform',
      category: 'ai',
      description: 'Revolutionary platform combining quantum computing with neural networks',
      icon: Brain,
      pricing: {
        starter: { price: 2500, period: 'month', features: ['Basic quantum neural processing', 'Up to 10 users', 'Standard security'] },
        professional: { price: 8500, period: 'month', features: ['Advanced processing', 'Up to 50 users', 'Priority support'] },
        enterprise: { price: 25000, period: 'month', features: ['Full processing', 'Unlimited users', '24/7 support'] }
      },
      features: ['Quantum advantage', 'Neural optimization', 'Real-time processing'],
      useCases: ['Financial trading', 'Drug discovery', 'Climate modeling'],
      link: '/services/ai-quantum-neural-network-platform'
    },
    {
      id: 'ai-autonomous-operations',
      name: 'AI Autonomous Business Operations Platform',
      category: 'ai',
      description: 'Transform business with autonomous operations powered by AI',
      icon: Bot,
      pricing: {
        starter: { price: 1500, period: 'month', features: ['Basic automation', 'Up to 5 workflows', 'Standard AI'] },
        professional: { price: 5000, period: 'month', features: ['Advanced automation', 'Up to 25 workflows', 'Priority support'] },
        enterprise: { price: 15000, period: 'month', features: ['Full automation', 'Unlimited workflows', 'Custom development'] }
      },
      features: ['Process automation', 'Autonomous decisions', 'Predictive operations'],
      useCases: ['Manufacturing', 'Supply chain', 'Customer service'],
      link: '/services/ai-autonomous-business-operations-platform'
    },
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI Cybersecurity Platform',
      category: 'cybersecurity',
      description: 'Advanced AI-powered threat detection and response system',
      icon: Shield,
      pricing: {
        starter: { price: 1200, period: 'month', features: ['Basic threat detection', 'Up to 100 endpoints', 'Email support'] },
        professional: { price: 3500, period: 'month', features: ['Advanced detection', 'Up to 1000 endpoints', 'Priority support'] },
        enterprise: { price: 12000, period: 'month', features: ['Full protection', 'Unlimited endpoints', '24/7 SOC'] }
      },
      features: ['Threat detection', 'Real-time response', 'Compliance automation'],
      useCases: ['Enterprise security', 'Compliance', 'Incident response'],
      link: '/services/ai-cybersecurity-platform'
    },
    {
      id: 'ai-healthcare-platform',
      name: 'AI Healthcare Analytics Platform',
      category: 'ai',
      description: 'Predictive diagnostics and care optimization powered by AI',
      icon: Heart,
      pricing: {
        starter: { price: 2000, period: 'month', features: ['Basic analytics', 'Up to 100 patients', 'Standard support'] },
        professional: { price: 6000, period: 'month', features: ['Advanced analytics', 'Up to 1000 patients', 'Priority support'] },
        enterprise: { price: 18000, period: 'month', features: ['Full platform', 'Unlimited patients', 'Custom integration'] }
      },
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization'],
      useCases: ['Hospitals', 'Clinics', 'Research institutions'],
      link: '/services/ai-healthcare-analytics-platform'
    },
    // IT Services
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps Solutions',
      category: 'it',
      description: 'Comprehensive cloud infrastructure and DevOps automation',
      icon: Cloud,
      pricing: {
        starter: { price: 800, period: 'month', features: ['Basic cloud setup', 'DevOps pipeline', 'Email support'] },
        professional: { price: 2500, period: 'month', features: ['Advanced cloud', 'CI/CD automation', 'Priority support'] },
        enterprise: { price: 8000, period: 'month', features: ['Full cloud migration', 'Custom automation', '24/7 support'] }
      },
      features: ['Cloud migration', 'DevOps automation', 'Infrastructure as code'],
      useCases: ['Startups', 'Enterprises', 'Digital transformation'],
      link: '/services/cloud-devops'
    },
    {
      id: 'it-onsite-services',
      name: 'IT Onsite Support Services',
      category: 'it',
      description: 'Professional IT support and infrastructure management',
      icon: Users,
      pricing: {
        starter: { price: 500, period: 'month', features: ['Basic support', '8/5 coverage', 'Email support'] },
        professional: { price: 1500, period: 'month', features: ['Priority support', '12/7 coverage', 'Phone support'] },
        enterprise: { price: 5000, period: 'month', features: ['Dedicated support', '24/7 coverage', 'Onsite engineer'] }
      },
      features: ['Infrastructure management', 'Technical support', 'System maintenance'],
      useCases: ['Small businesses', 'Medium enterprises', 'Large corporations'],
      link: '/services/it-onsite-services'
    },
    // Micro SAAS
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      category: 'micro-saas',
      description: 'Intelligent sales assistant for lead generation and conversion',
      icon: MessageCircle,
      pricing: {
        starter: { price: 99, period: 'month', features: ['Basic lead scoring', 'Up to 100 leads', 'Email support'] },
        professional: { price: 299, period: 'month', features: ['Advanced scoring', 'Up to 1000 leads', 'Priority support'] },
        enterprise: { price: 999, period: 'month', features: ['Full platform', 'Unlimited leads', 'Custom integration'] }
      },
      features: ['Lead scoring', 'Sales automation', 'Performance analytics'],
      useCases: ['Sales teams', 'Marketing agencies', 'Startups'],
      link: '/services/ai-sales-copilot'
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Assistant',
      category: 'micro-saas',
      description: 'Automated compliance monitoring and reporting',
      icon: ShieldCheck,
      pricing: {
        starter: { price: 150, period: 'month', features: ['Basic monitoring', 'Up to 5 regulations', 'Email support'] },
        professional: { price: 450, period: 'month', features: ['Advanced monitoring', 'Up to 20 regulations', 'Priority support'] },
        enterprise: { price: 1500, period: 'month', features: ['Full compliance', 'Unlimited regulations', 'Custom reporting'] }
      },
      features: ['Compliance monitoring', 'Automated reporting', 'Risk assessment'],
      useCases: ['Financial services', 'Healthcare', 'Manufacturing'],
      link: '/services/ai-compliance-assistant'
    },
    // Quantum Computing
    {
      id: 'quantum-ai-trading',
      name: 'Quantum AI Trading Platform',
      category: 'quantum',
      description: 'Next-generation quantum computing for financial trading',
      icon: Coins,
      pricing: {
        starter: { price: 5000, period: 'month', features: ['Basic quantum algorithms', 'Up to 10 strategies', 'Standard support'] },
        professional: { price: 15000, period: 'month', features: ['Advanced algorithms', 'Up to 50 strategies', 'Priority support'] },
        enterprise: { price: 50000, period: 'month', features: ['Full platform', 'Unlimited strategies', 'Custom development'] }
      },
      features: ['Quantum algorithms', 'Risk optimization', 'Real-time trading'],
      useCases: ['Hedge funds', 'Investment banks', 'Trading firms'],
      link: '/services/quantum-ai-trading-platform'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Comprehensive Pricing Guide 2025 - Zion Tech Group"
        description="Complete pricing guide for all Zion Tech Group services including AI, IT, Micro SAAS, and specialized solutions. Find the perfect plan for your business."
        keywords="pricing guide, service pricing, AI services pricing, IT services pricing, micro SAAS pricing, Zion Tech Group pricing"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-blue to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide 2025
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Complete pricing for all Zion Tech Group services. Find the perfect solution for your business needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Download Pricing PDF
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-light border border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Selector */}
      <section className="py-8 bg-zion-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-zion-blue-light border border-zion-purple/30 rounded-lg p-1">
              {['starter', 'professional', 'enterprise'].map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                    selectedPlan === plan
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'
                      : 'text-zion-slate-light hover:text-zion-cyan'
                  }`}
                >
                  {plan.charAt(0).toUpperCase() + plan.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose from our comprehensive range of services designed to meet every business need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-light border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <p className="text-sm text-zion-cyan capitalize">{service.category.replace('-', ' ')}</p>
                  </div>
                </div>

                <p className="text-zion-slate-light mb-4 text-sm">{service.description}</p>

                <div className="mb-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-zion-cyan">
                      {formatPrice(service.pricing[selectedPlan as keyof typeof service.pricing].price)}
                    </span>
                    <span className="text-zion-slate-light ml-1">
                      /{service.pricing[selectedPlan as keyof typeof service.pricing].period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.pricing[selectedPlan as keyof typeof service.pricing].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-white">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, idx) => (
                      <span key={idx} className="px-2 py-1 bg-zion-blue text-zion-slate-light text-xs rounded-full">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Plan Comparison
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Compare our different service tiers to find the perfect fit for your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['starter', 'professional', 'enterprise'].map((plan, index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-zion-blue-light border rounded-xl p-8 ${
                  plan === 'professional'
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan === 'professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan}</h3>
                  <p className="text-zion-slate-light">
                    {plan === 'starter' && 'Perfect for small businesses'}
                    {plan === 'professional' && 'Ideal for growing businesses'}
                    {plan === 'enterprise' && 'For large enterprises'}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="text-center">
                    <span className="text-sm text-zion-slate-light">Starting from</span>
                    <div className="text-2xl font-bold text-zion-cyan">
                      {plan === 'starter' && '$99'}
                      {plan === 'professional' && '$299'}
                      {plan === 'enterprise' && '$1,500'}
                    </div>
                    <span className="text-sm text-zion-slate-light">per month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan === 'starter' && [
                    'Basic features and support',
                    'Up to 100 users/endpoints',
                    'Email support',
                    'Standard security',
                    'Basic analytics'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan === 'professional' && [
                    'Advanced features and priority support',
                    'Up to 1,000 users/endpoints',
                    'Phone and email support',
                    'Enhanced security',
                    'Advanced analytics',
                    'Custom integrations',
                    'API access'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan === 'enterprise' && [
                    'Full feature set with dedicated support',
                    'Unlimited users/endpoints',
                    '24/7 dedicated support',
                    'Maximum security features',
                    'Custom development',
                    'On-premise deployment',
                    'SLA guarantees',
                    'White-label options'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan === 'professional'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-blue border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  {plan === 'starter' && 'Get Started'}
                  {plan === 'professional' && 'Start Free Trial'}
                  {plan === 'enterprise' && 'Contact Sales'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Custom Pricing?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Contact our sales team for custom pricing and enterprise solutions tailored to your specific needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-zion-slate-light">
                <Phone className="w-5 h-5 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-zion-slate-light">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-zion-slate-light">
                <MapPin className="w-5 h-5 text-zion-cyan" />
                <span>Middletown, DE</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Download Pricing PDF
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}