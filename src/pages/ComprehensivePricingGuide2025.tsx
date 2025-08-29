import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Users, 
  ArrowRight,
  Crown,
  Sparkles,
  Flame,
  Infinity,
  Target,
  Award,
  Code,
  Server,
  Database,
  Network,
  Lock,
  Globe,
  Rocket,
  Heart,
  Scale,
  Leaf,
  TrendingUp,
  DollarSign,
  Calendar,
  Clock,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  FileText,
  PenTool,
  MessageSquare,
  Settings,
  Gauge,
  Truck,
  BookOpen,
  Play,
  Atom,
  Cpu,
  ShoppingCart,
  Eye,
  Smartphone,
  Monitor,
  Car,
  Factory,
  Users as UsersIcon,
  BarChart3,
  ShieldCheck,
  Globe2,
  CheckCircle,
  ArrowUpRight,
  PlayCircle,
  MailIcon,
  Calendar as CalendarIcon,
  Award as AwardIcon,
  Crown as CrownIcon,
  Sparkles as SparklesIcon,
  Flame as FlameIcon,
  Infinity as InfinityIcon,
  Search
} from 'lucide-react';

export default function ComprehensivePricingGuide2025() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'ai-finance', name: 'AI & Finance', icon: TrendingUp, color: 'from-zion-purple to-zion-blue' },
    { id: 'ai-legal', name: 'AI & Legal', icon: Shield, color: 'from-zion-blue to-zion-cyan' },
    { id: 'ai-healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-zion-cyan to-zion-green' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'ai-education', name: 'AI & Education', icon: BookOpen, color: 'from-zion-blue to-zion-cyan' },
    { id: 'ai-real-estate', name: 'AI & Real Estate', icon: Building, color: 'from-zion-purple to-zion-green' },
    { id: 'ai-hospitality', name: 'AI & Hospitality', icon: Users, color: 'from-zion-orange to-zion-blue' },
    { id: 'ai-health', name: 'AI & Health', icon: Heart, color: 'from-zion-pink to-zion-purple' },
    { id: 'ai-energy', name: 'AI & Energy', icon: Zap, color: 'from-zion-green to-zion-blue' },
    { id: 'ai-ecommerce', name: 'AI & E-commerce', icon: ShoppingCart, color: 'from-zion-blue to-zion-orange' },
    { id: 'ai-content', name: 'AI & Content', icon: PenTool, color: 'from-zion-orange to-zion-red' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-zion-purple to-zion-pink' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'digital-twin', name: 'Digital Twin', icon: Globe, color: 'from-zion-blue to-zion-purple' },
    { id: 'cloud-devops', name: 'Cloud DevOps', icon: Cloud, color: 'from-zion-blue to-zion-cyan' }
  ];

  const services = [
    {
      id: 'ai-business-intelligence-platform',
      title: 'AI Business Intelligence Platform',
      description: 'Next-generation business intelligence platform that uses AI to automatically analyze data, generate insights, and create actionable reports.',
      category: 'ai-analytics',
      price: { monthly: 2999, annual: 29990 },
      features: [
        'AI-powered data analysis',
        'Automated insight generation',
        'Natural language queries',
        'Predictive analytics',
        'Custom dashboard creation',
        'Real-time data processing',
        'Multi-source data integration',
        'Advanced visualization tools',
        'Automated reporting',
        'Mobile app access'
      ],
      benefits: [
        'Reduce analysis time by 80%',
        'Improve decision accuracy by 60%',
        'Automated insight discovery',
        'Real-time business monitoring',
        'Scalable analytics infrastructure'
      ],
      icon: Brain,
      color: 'from-zion-cyan to-zion-purple',
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-8 weeks',
      roi: '250-400%',
      marketPrice: '$2,999 - $8,999/month'
    },
    {
      id: 'ai-financial-trading-platform-pro',
      title: 'AI Financial Trading Platform Pro',
      description: 'Advanced algorithmic trading platform with AI-powered market analysis, risk management, and automated trading strategies.',
      category: 'ai-finance',
      price: { monthly: 4999, annual: 49990 },
      features: [
        'AI-powered market prediction models',
        'Real-time risk assessment',
        'Automated trading algorithms',
        'Portfolio optimization',
        'Multi-exchange integration',
        'Advanced charting tools',
        'Risk management dashboard',
        'Compliance monitoring',
        'Performance analytics',
        'Mobile trading app'
      ],
      benefits: [
        'Increase trading efficiency by 300%',
        'Reduce risk exposure by 40%',
        '24/7 automated trading',
        'Real-time market insights',
        'Regulatory compliance automation'
      ],
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      innovationLevel: 'Cutting-edge',
      estimatedDelivery: '8-12 weeks',
      roi: '400-600%',
      marketPrice: '$4,999 - $15,999/month'
    },
    {
      id: 'ai-healthcare-diagnostics-platform',
      title: 'AI Healthcare Diagnostics Platform',
      description: 'Comprehensive AI-powered medical diagnostics platform that analyzes medical images, patient data, and symptoms.',
      category: 'ai-healthcare',
      price: { monthly: 3999, annual: 39990 },
      features: [
        'AI-powered medical image analysis',
        'Symptom assessment engine',
        'Patient data integration',
        'Treatment recommendation system',
        'Clinical decision support',
        'Electronic health records',
        'Telemedicine integration',
        'Medical report generation',
        'Compliance monitoring',
        'Mobile healthcare app'
      ],
      benefits: [
        'Improve diagnostic accuracy by 35%',
        'Reduce diagnosis time by 60%',
        'Lower healthcare costs by 25%',
        '24/7 diagnostic support',
        'Enhanced patient outcomes'
      ],
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      innovationLevel: 'Advanced',
      estimatedDelivery: '10-14 weeks',
      roi: '300-500%',
      marketPrice: '$3,999 - $12,999/month'
    },
    {
      id: 'ai-legal-document-analysis-platform',
      title: 'AI Legal Document Analysis Platform',
      description: 'Intelligent legal document analysis platform that uses AI to review contracts, legal documents, and compliance requirements.',
      category: 'ai-legal',
      price: { monthly: 2499, annual: 24990 },
      features: [
        'AI-powered contract analysis',
        'Legal document review',
        'Compliance checking',
        'Risk assessment',
        'Document comparison',
        'Legal research automation',
        'Case law analysis',
        'Regulatory updates',
        'Document generation',
        'Collaboration tools'
      ],
      benefits: [
        'Reduce document review time by 80%',
        'Improve accuracy by 45%',
        'Lower legal costs by 30%',
        '24/7 document processing',
        'Enhanced compliance monitoring'
      ],
      icon: Scale,
      color: 'from-blue-500 to-indigo-500',
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-10 weeks',
      roi: '250-400%',
      marketPrice: '$2,499 - $7,999/month'
    },
    {
      id: 'ai-supply-chain-optimization-platform',
      title: 'AI Supply Chain Optimization Platform',
      description: 'Intelligent supply chain optimization platform that uses AI to predict demand, optimize inventory, and streamline logistics operations.',
      category: 'ai-logistics',
      price: { monthly: 3499, annual: 34990 },
      features: [
        'AI-powered demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier management',
        'Real-time tracking',
        'Performance analytics',
        'Risk assessment',
        'Cost optimization',
        'Sustainability tracking',
        'Mobile logistics app'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Improve delivery times by 40%',
        'Increase efficiency by 35%',
        'Real-time visibility',
        'Cost savings optimization'
      ],
      icon: Truck,
      color: 'from-orange-500 to-red-500',
      innovationLevel: 'Advanced',
      estimatedDelivery: '8-12 weeks',
      roi: '300-450%',
      marketPrice: '$3,499 - $11,999/month'
    },
    {
      id: 'ai-cybersecurity-threat-intelligence',
      title: 'AI Cybersecurity Threat Intelligence Platform',
      description: 'Advanced cybersecurity platform that uses AI to detect, analyze, and respond to cyber threats in real-time.',
      category: 'cybersecurity',
      price: { monthly: 4499, annual: 44990 },
      features: [
        'AI-powered threat detection',
        'Real-time monitoring',
        'Automated incident response',
        'Threat hunting',
        'Vulnerability assessment',
        'Security analytics',
        'Compliance reporting',
        'Security orchestration',
        'Threat intelligence feeds',
        'Mobile security app'
      ],
      benefits: [
        'Reduce threat response time by 90%',
        'Improve threat detection by 60%',
        'Lower security incidents by 45%',
        '24/7 security monitoring',
        'Automated threat response'
      ],
      icon: Shield,
      color: 'from-green-500 to-blue-500',
      innovationLevel: 'Cutting-edge',
      estimatedDelivery: '10-14 weeks',
      roi: '350-500%',
      marketPrice: '$4,499 - $14,999/month'
    },
    {
      id: 'ai-education-personalization-platform',
      title: 'AI Education Personalization Platform',
      description: 'Intelligent education platform that personalizes learning experiences using AI to adapt content and track progress.',
      category: 'ai-education',
      price: { monthly: 1999, annual: 19990 },
      features: [
        'AI-powered learning paths',
        'Personalized content delivery',
        'Progress tracking',
        'Adaptive assessments',
        'Learning analytics',
        'Content recommendation',
        'Student engagement tools',
        'Teacher dashboard',
        'Parent portal',
        'Mobile learning app'
      ],
      benefits: [
        'Improve learning outcomes by 40%',
        'Increase student engagement by 60%',
        'Reduce dropout rates by 30%',
        'Personalized learning experience',
        'Data-driven insights'
      ],
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-500',
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-10 weeks',
      roi: '200-350%',
      marketPrice: '$1,999 - $6,999/month'
    },
    {
      id: 'ai-real-estate-investment-analyzer',
      title: 'AI Real Estate Investment Analyzer',
      description: 'Intelligent real estate investment platform that uses AI to analyze market trends, property values, and investment opportunities.',
      category: 'ai-real-estate',
      price: { monthly: 2999, annual: 29990 },
      features: [
        'AI-powered market analysis',
        'Property valuation',
        'Investment opportunity scoring',
        'Risk assessment',
        'Market trend prediction',
        'Portfolio optimization',
        'ROI calculations',
        'Market reports',
        'Investment recommendations',
        'Mobile investment app'
      ],
      benefits: [
        'Improve investment decisions by 50%',
        'Reduce analysis time by 70%',
        'Increase ROI by 25%',
        'Data-driven insights',
        'Risk mitigation'
      ],
      icon: Building,
      color: 'from-purple-500 to-green-500',
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-10 weeks',
      roi: '250-400%',
      marketPrice: '$2,999 - $9,999/month'
    },
    {
      id: 'ai-restaurant-management-system',
      title: 'AI Restaurant Management System',
      description: 'Comprehensive restaurant management platform that uses AI to optimize operations, manage inventory, and analyze customer preferences.',
      category: 'ai-hospitality',
      price: { monthly: 1499, annual: 14990 },
      features: [
        'AI-powered inventory management',
        'Customer preference analysis',
        'Menu optimization',
        'Staff scheduling',
        'Order management',
        'Customer relationship management',
        'Analytics dashboard',
        'Mobile ordering',
        'Payment processing',
        'Kitchen display system'
      ],
      benefits: [
        'Reduce food waste by 30%',
        'Increase customer satisfaction by 25%',
        'Improve operational efficiency by 40%',
        'Real-time insights',
        'Cost optimization'
      ],
      icon: Users,
      color: 'from-orange-500 to-blue-500',
      innovationLevel: 'Advanced',
      estimatedDelivery: '4-8 weeks',
      roi: '200-350%',
      marketPrice: '$1,499 - $4,999/month'
    },
    {
      id: 'ai-fitness-coaching-platform',
      title: 'AI Fitness Coaching Platform',
      description: 'Intelligent fitness platform that provides personalized workout plans, nutrition guidance, and progress tracking using AI.',
      category: 'ai-health',
      price: { monthly: 999, annual: 9990 },
      features: [
        'AI-powered workout plans',
        'Personalized nutrition guidance',
        'Progress tracking',
        'Form analysis',
        'Goal setting',
        'Community features',
        'Wearable integration',
        'Video coaching',
        'Progress reports',
        'Mobile fitness app'
      ],
      benefits: [
        'Improve fitness results by 35%',
        'Increase user engagement by 50%',
        'Personalized experience',
        '24/7 coaching support',
        'Data-driven insights'
      ],
      icon: Heart,
      color: 'from-pink-500 to-purple-500',
      innovationLevel: 'Advanced',
      estimatedDelivery: '4-8 weeks',
      roi: '150-300%',
      marketPrice: '$999 - $3,999/month'
    },
    {
      id: 'ai-energy-management-system',
      title: 'AI Energy Management System',
      description: 'Intelligent energy management platform that optimizes energy consumption, predicts demand, and manages renewable energy sources.',
      category: 'ai-energy',
      price: { monthly: 3999, annual: 39990 },
      features: [
        'AI-powered energy optimization',
        'Demand prediction',
        'Renewable energy management',
        'Smart grid integration',
        'Energy analytics',
        'Cost optimization',
        'Sustainability tracking',
        'Real-time monitoring',
        'Automated controls',
        'Mobile energy app'
      ],
      benefits: [
        'Reduce energy costs by 25%',
        'Improve efficiency by 35%',
        'Increase renewable energy usage by 40%',
        'Real-time optimization',
        'Sustainability improvements'
      ],
      icon: Zap,
      color: 'from-green-500 to-blue-500',
      innovationLevel: 'Advanced',
      estimatedDelivery: '8-12 weeks',
      roi: '300-450%',
      marketPrice: '$3,999 - $12,999/month'
    },
    {
      id: 'ai-ecommerce-personalization-engine',
      title: 'AI E-commerce Personalization Engine',
      description: 'Advanced e-commerce personalization platform that uses AI to deliver personalized shopping experiences and product recommendations.',
      category: 'ai-ecommerce',
      price: { monthly: 2499, annual: 24990 },
      features: [
        'AI-powered product recommendations',
        'Personalized search results',
        'Dynamic pricing',
        'Customer segmentation',
        'Behavioral analysis',
        'A/B testing automation',
        'Conversion optimization',
        'Customer journey mapping',
        'Real-time personalization',
        'Analytics dashboard'
      ],
      benefits: [
        'Increase conversion rates by 35%',
        'Improve customer lifetime value by 40%',
        'Reduce cart abandonment by 25%',
        'Personalized experiences',
        'Data-driven optimization'
      ],
      icon: ShoppingCart,
      color: 'from-blue-500 to-orange-500',
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-10 weeks',
      roi: '250-400%',
      marketPrice: '$2,499 - $7,999/month'
    },
    {
      id: 'ai-customer-churn-prediction-platform',
      title: 'AI Customer Churn Prediction Platform',
      description: 'Intelligent customer churn prediction platform that uses AI to identify at-risk customers and improve retention.',
      category: 'ai-analytics',
      price: { monthly: 1999, annual: 19990 },
      features: [
        'AI-powered churn prediction',
        'Customer risk scoring',
        'Behavioral analysis',
        'Retention strategies',
        'Customer segmentation',
        'Predictive analytics',
        'Automated alerts',
        'Retention campaigns',
        'Performance tracking',
        'Mobile analytics app'
      ],
      benefits: [
        'Reduce customer churn by 30%',
        'Increase retention rates by 25%',
        'Improve customer lifetime value by 35%',
        'Proactive retention',
        'Data-driven insights'
      ],
      icon: TrendingUp,
      color: 'from-cyan-500 to-blue-500',
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-10 weeks',
      roi: '200-350%',
      marketPrice: '$1,999 - $6,999/month'
    },
    {
      id: 'ai-video-content-creation-studio',
      title: 'AI Video Content Creation Studio',
      description: 'Advanced video content creation platform that uses AI to generate, edit, and optimize video content for marketing and entertainment.',
      category: 'ai-content',
      price: { monthly: 2999, annual: 29990 },
      features: [
        'AI-powered video generation',
        'Automated editing',
        'Content personalization',
        'Multi-format output',
        'Brand customization',
        'Performance analytics',
        'Template library',
        'Collaboration tools',
        'Asset management',
        'Mobile video app'
      ],
      benefits: [
        'Reduce video creation time by 80%',
        'Increase engagement by 45%',
        'Lower production costs by 60%',
        'Automated workflows',
        'Scalable content creation'
      ],
      icon: PenTool,
      color: 'from-orange-500 to-red-500',
      innovationLevel: 'Cutting-edge',
      estimatedDelivery: '8-12 weeks',
      roi: '250-400%',
      marketPrice: '$2,999 - $9,999/month'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const getDiscount = () => billingCycle === 'annual' ? 0.17 : 0; // 17% discount for annual

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2025 - Zion Tech Group"
        description="Explore our comprehensive pricing guide for innovative AI-powered micro SAAS services. From business intelligence to cybersecurity, find the perfect solution for your business needs."
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                {' '}2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover transparent pricing for our cutting-edge AI-powered micro SAAS services. 
              Choose the perfect solution that fits your business needs and budget.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-12 w-24 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-slate-900 ${
                  billingCycle === 'annual' ? 'bg-zion-cyan' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-8 w-8 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-12' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                    Save 17%
                  </span>
                )}
              </span>
            </div>

            {/* Contact Information */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2 text-zion-cyan" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2 text-zion-cyan" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="px-3 py-1 bg-slate-700 text-zion-cyan text-xs rounded-full">
                      {service.innovationLevel}
                    </span>
                    <span className="px-3 py-1 bg-slate-700 text-green-400 text-xs rounded-full">
                      ROI: {service.roi}
                    </span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    ${billingCycle === 'annual' 
                      ? Math.round(service.price.annual * (1 - getDiscount()) / 12)
                      : service.price.monthly
                    }
                    <span className="text-sm text-gray-400 font-normal">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <div className="text-sm text-gray-400">
                      <span className="line-through">${service.price.annual / 12}</span>
                      <span className="text-green-400 ml-2">Save 17%</span>
                    </div>
                  )}
                  <div className="text-sm text-gray-400">
                    Market: {service.marketPrice}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-start">
                        <Check className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-start">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Details */}
                <div className="bg-slate-700/50 rounded-xl p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Delivery:</span>
                      <div className="text-white font-medium">{service.estimatedDelivery}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">ROI:</span>
                      <div className="text-green-400 font-medium">{service.roi}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="w-full py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 text-center block"
                  >
                    Get Started
                  </Link>
                  <a
                    href={`tel:+13024640950`}
                    className="w-full py-3 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 text-center block"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Our team of AI experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss your specific needs and discover how our innovative 
              micro SAAS services can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us Now
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}