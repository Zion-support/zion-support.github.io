import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  Users,
  MessageSquare,
  FileText,
  Globe,
  Cpu,
  Database,
  Cloud,
  Lock,
  Play,
  Activity,
  Target,
  AlertTriangle,
  LineChart,
  Stethoscope,
  Pill,
  Microscope,
  UserCheck,
  Calendar,
  TrendingUp,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Hospital,
  Ambulance,
  User,
  Clipboard,
  PenTool,
  Atom,
  Heart,
  BarChart3,
  PieChart,
  DollarSign,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck,
  Building2,
  Warehouse,
  Store,
  Bank,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [activeCategory, setActiveCategory] = useState('all');

  const pricingPlans = [
    {
      id: 'monthly',
      name: 'Monthly',
      description: 'Flexible monthly billing',
      discount: 0
    },
    {
      id: 'annual',
      name: 'Annual',
      description: 'Save 20% with annual billing',
      discount: 20
    }
  ];

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'ai-saas',
      name: 'AI Micro SAAS',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'financial',
      name: 'Financial Tech',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Building,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const allServices = [
    {
      id: 'ai-project-management',
      title: 'AI Intelligent Project Management Platform',
      description: 'Transform project management with AI-driven insights and automation',
      category: 'ai-saas',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'AI-powered task prioritization',
        'Predictive resource allocation',
        'Real-time risk assessment',
        'Automated progress tracking',
        'Intelligent communication hub',
        'Advanced analytics & insights',
        'Up to 10 team members',
        '5GB storage',
        'Email support'
      ],
      href: '/services/ai-intelligent-project-management-platform',
      featured: true,
      popular: true
    },
    {
      id: 'ai-financial-analytics',
      title: 'AI Financial Analytics Platform',
      description: 'Revolutionize financial operations with AI-driven insights and risk management',
      category: 'financial',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        'Real-time market intelligence',
        'Risk assessment & management',
        'Portfolio optimization',
        'Fraud detection & prevention',
        'Predictive financial modeling',
        'Regulatory compliance automation',
        'Up to 5 user accounts',
        '10GB data storage',
        'Basic risk assessment'
      ],
      href: '/services/ai-financial-analytics-platform',
      featured: true,
      popular: false
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'Transform healthcare delivery with AI-driven insights and clinical decision support',
      category: 'healthcare',
      icon: Heart,
      color: 'from-blue-500 to-green-500',
      monthlyPrice: 299,
      annualPrice: 239,
      features: [
        'Predictive patient analytics',
        'Clinical decision support',
        'Population health management',
        'Drug interaction analysis',
        'Medical image analysis',
        'Healthcare fraud detection',
        'Up to 10 healthcare providers',
        '25GB data storage',
        'Basic risk assessment'
      ],
      href: '/services/ai-healthcare-analytics-platform',
      featured: true,
      popular: false
    },
    {
      id: 'ai-content-creation',
      title: 'AI Content Creation Studio Pro',
      description: 'Advanced AI content creation platform for marketing and creative professionals',
      category: 'ai-saas',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      monthlyPrice: 149,
      annualPrice: 119,
      features: [
        'AI-powered content generation',
        'Multi-format support',
        'Brand voice consistency',
        'SEO optimization',
        'Content analytics',
        'Collaboration tools',
        'Unlimited content generation',
        '50GB storage',
        'Priority support'
      ],
      href: '/services/AI-Content-Creation-Studio-Pro',
      featured: true,
      popular: false
    },
    {
      id: 'quantum-ai-trading',
      title: 'Quantum AI Trading Platform',
      description: 'Next-generation quantum trading platform with AI-powered market analysis',
      category: 'quantum',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        'Quantum computing algorithms',
        'AI market prediction',
        'Real-time trading signals',
        'Risk management',
        'Portfolio optimization',
        'Advanced analytics',
        'Real-time market data',
        '100GB storage',
        'API access'
      ],
      href: '/services/Quantum-AI-Trading-Platform',
      featured: true,
      popular: false
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity solutions for enterprise threat detection',
      category: 'enterprise',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      monthlyPrice: 399,
      annualPrice: 319,
      features: [
        'AI threat detection',
        'Behavioral analysis',
        'Automated response',
        'Threat intelligence',
        'Compliance monitoring',
        '24/7 monitoring',
        'Advanced security features',
        'Unlimited storage',
        'Dedicated support'
      ],
      href: '/services/ai-cybersecurity',
      featured: false,
      popular: false
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const getPrice = (service: any) => {
    const basePrice = selectedPlan === 'annual' ? service.annualPrice : service.monthlyPrice;
    return selectedPlan === 'annual' ? basePrice * 0.8 : basePrice;
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              2025 Comprehensive Pricing Guide
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transparent Pricing
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                For Every Business
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All our AI-powered solutions come with 
              transparent pricing, no hidden fees, and a 14-day free trial.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              {pricingPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {plan.name}
                  {plan.discount > 0 && (
                    <span className="ml-2 text-xs bg-yellow-500 text-black px-2 py-1 rounded">
                      Save {plan.discount}%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-lg border rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${
                  service.featured ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/10'
                } ${service.popular ? 'ring-2 ring-blue-500/50' : ''}`}
              >
                {service.featured && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}

                {service.popular && (
                  <div className="absolute -top-3 -left-3">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-green-400">${getPrice(service)}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  {selectedPlan === 'annual' && (
                    <p className="text-sm text-green-400 mt-1">Billed annually (save 20%)</p>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 6).map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.href}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need Custom Pricing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team for enterprise solutions and custom pricing options.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300 text-sm">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download Pricing Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2025;