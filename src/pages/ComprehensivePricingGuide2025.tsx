import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Brain, 
  Atom, 
  Workflow, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Users,
  Target,
  BarChart3,
  Phone,
  Mail,
  MapPin,
  Award,
  Calculator,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  BarChart,
  Rocket,
  Handshake,
  Building2,
  Cpu,
  Network,
  Lock,
  Cloud,
  Server,
  Database,
  MessageCircle,
  TrendingDown,
  Percent,
  Calendar,
  CreditCard,
  Gift,
  ExternalLink
} from 'lucide-react';

export default function ComprehensivePricingGuide2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState('all');

  const services = [
    // AI & Automation Services
    {
      name: "AI Business Intelligence Dashboard",
      category: "ai-automation",
      description: "Advanced AI-powered business intelligence with real-time analytics",
      price: 299,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$500-800/month",
      roi: "250% in 12 months",
      features: ["AI-powered insights", "Real-time dashboards", "Predictive analytics"],
      link: "/services/ai-business-intelligence-dashboard"
    },
    {
      name: "AI Customer Support Automation",
      category: "ai-automation",
      description: "Intelligent customer support automation with 24/7 availability",
      price: 199,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$300-600/month",
      roi: "300% in 9 months",
      features: ["24/7 support", "AI chatbots", "Multi-language support"],
      link: "/services/ai-customer-support-automation"
    },
    {
      name: "AI Project Management Platform",
      category: "ai-automation",
      description: "AI-enhanced project management with intelligent resource allocation",
      price: 399,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$600-1000/month",
      roi: "280% in 15 months",
      features: ["AI resource optimization", "Predictive timelines", "Risk assessment"],
      link: "/services/ai-project-management-platform"
    },
    {
      name: "AI Enterprise Workflow Automation",
      category: "ai-automation",
      description: "Intelligent workflow automation for enterprise processes",
      price: 499,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$800-1200/month",
      roi: "400% in 12 months",
      features: ["Process optimization", "AI learning", "Integration ready"],
      link: "/services/ai-enterprise-workflow-automation"
    },

    // IT & Infrastructure Services
    {
      name: "IT Infrastructure Management",
      category: "it-infrastructure",
      description: "Comprehensive IT infrastructure management and optimization",
      price: 799,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$1200-2000/month",
      roi: "200% in 18 months",
      features: ["24/7 monitoring", "Performance optimization", "Security management"],
      link: "/services/it-infrastructure-management"
    },
    {
      name: "Cloud & DevOps Solutions",
      category: "it-infrastructure",
      description: "Cloud-native DevOps with automated deployment and scaling",
      price: 599,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$900-1500/month",
      roi: "350% in 12 months",
      features: ["Auto-scaling", "CI/CD pipelines", "Multi-cloud support"],
      link: "/services/cloud-devops"
    },
    {
      name: "AI Cybersecurity Threat Intelligence",
      category: "it-infrastructure",
      description: "AI-powered cybersecurity with real-time threat detection",
      price: 799,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$1200-2000/month",
      roi: "400% in 12 months",
      features: ["99.9% detection", "Automated response", "Compliance ready"],
      link: "/services/ai-cybersecurity-threat-intelligence"
    },

    // Quantum & Advanced Computing
    {
      name: "AI Quantum Computing Solutions",
      category: "quantum-computing",
      description: "Quantum computing enhanced with AI algorithms",
      price: 2999,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$5000-8000/month",
      roi: "500% in 18 months",
      features: ["Quantum advantage", "AI optimization", "Research support"],
      link: "/services/ai-quantum-computing-solutions"
    },
    {
      name: "Quantum Edge Computing",
      category: "quantum-computing",
      description: "Quantum-enhanced edge computing for distributed systems",
      price: 1999,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$3000-5000/month",
      roi: "400% in 15 months",
      features: ["Edge optimization", "Quantum algorithms", "Low latency"],
      link: "/services/quantum-edge-computing-solutions"
    },

    // Micro SaaS Solutions
    {
      name: "Micro SaaS Platform",
      category: "micro-saas",
      description: "Complete micro SaaS platform with rapid deployment",
      price: 299,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$400-700/month",
      roi: "320% in 10 months",
      features: ["Quick setup", "Scalable architecture", "White-label options"],
      link: "/services/micro-saas-solutions-comprehensive"
    },
    {
      name: "AI Marketing Automation",
      category: "micro-saas",
      description: "AI-driven marketing automation platform",
      price: 199,
      currency: "$",
      pricingModel: "monthly",
      marketPrice: "$300-600/month",
      roi: "280% in 12 months",
      features: ["AI targeting", "Campaign optimization", "ROI tracking"],
      link: "/services/ai-marketing-automation-platform"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai-automation', name: 'AI & Automation', icon: Brain },
    { id: 'it-infrastructure', name: 'IT & Infrastructure', icon: Server },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Rocket }
  ];

  const pricingModels = [
    { id: 'all', name: 'All Pricing Models', icon: DollarSign },
    { id: 'monthly', name: 'Monthly', icon: Calendar },
    { id: 'annual', name: 'Annual', icon: Gift },
    { id: 'enterprise', name: 'Enterprise', icon: Building2 }
  ];

  const filteredServices = useMemo(() => {
    let filtered = services;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (selectedPricingModel !== 'all') {
      filtered = filtered.filter(service => service.pricingModel === selectedPricingModel);
    }
    
    return filtered;
  }, [services, selectedCategory, selectedPricingModel]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-automation':
        return 'from-purple-600 to-pink-600';
      case 'it-infrastructure':
        return 'from-blue-600 to-cyan-600';
      case 'quantum-computing':
        return 'from-green-600 to-emerald-600';
      case 'micro-saas':
        return 'from-indigo-600 to-purple-600';
      default:
        return 'from-gray-600 to-slate-600';
    }
  };

  const pricingTiers = [
    {
      name: "Starter",
      price: 299,
      period: "month",
      description: "Perfect for small businesses and startups",
      features: ["Basic features", "Standard support", "Community forum"],
      color: 'from-cyan-500 to-blue-600',
      popular: false
    },
    {
      name: "Professional",
      price: 999,
      period: "month",
      description: "Ideal for growing businesses",
      features: ["Advanced features", "Priority support", "Custom integrations"],
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      name: "Enterprise",
      price: 2999,
      period: "month",
      description: "For large organizations",
      features: ["Full feature set", "24/7 support", "White-label options"],
      color: 'from-indigo-500 to-purple-600',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4" />
                Pricing Guide 2025
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Comprehensive Pricing
                </span>
                <br />
                <span className="text-white">Guide</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transparent pricing for cutting-edge technology solutions. 
                Compare our competitive rates with market standards and see the real value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 rounded-xl border border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10 transition-colors">
                  <Download className="mr-2 w-5 h-5" />
                  Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Flexible Pricing Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20 scale-105' 
                    : 'border-zion-purple/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${tier.price}</span>
                    <span className="text-gray-400">/{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-blue-600 text-white hover:opacity-90'
                      : 'bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30 border border-zion-purple/30'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing Details */}
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Pricing Details</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for all our services with market comparisons and ROI calculations
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12 justify-center items-center">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-slate-dark/50 text-gray-300 hover:bg-zion-slate-dark/70'
                  }`}
                >
                  <category.icon className="w-4 h-4 inline mr-2" />
                  {category.name}
                </button>
              ))}
            </div>

            <select
              value={selectedPricingModel}
              onChange={(e) => setSelectedPricingModel(e.target.value)}
              className="px-4 py-2 bg-zion-slate-dark/50 text-white rounded-lg border border-zion-purple/30 focus:border-zion-cyan focus:outline-none"
            >
              {pricingModels.map(model => (
                <option key={model.id} value={model.id}>
                  {model.id === 'all' ? 'All Pricing Models' : model.name}
                </option>
              ))}
            </select>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-purple/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">per {service.pricingModel}</div>
                  </div>
                </div>

                {/* Market Price Comparison */}
                <div className="mb-4 p-3 bg-zion-slate-dark/30 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Market Price Range</div>
                  <div className="text-sm font-semibold text-white">{service.marketPrice}</div>
                  <div className="text-xs text-zion-cyan font-medium">
                    Our price: {service.currency}{service.price.toLocaleString()}/{service.pricingModel}
                  </div>
                </div>

                {/* ROI */}
                <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="text-xs text-gray-400 mb-1">Expected ROI</div>
                  <div className="text-sm font-semibold text-green-400">{service.roi}</div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-300 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-zion-cyan to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Reset Filters */}
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPricingModel('all');
              }}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30 transition-colors border border-zion-purple/30"
            >
              <Filter className="w-4 h-4 mr-2" />
              Reset Filters
            </button>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ROI Calculator</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Calculate the potential return on investment for our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
                  <div className="text-2xl font-bold text-zion-cyan">60-80%</div>
                  <div className="text-sm text-gray-400">Average savings</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-zion-purple" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Efficiency Gain</h3>
                  <div className="text-2xl font-bold text-zion-purple">3-5x</div>
                  <div className="text-sm text-gray-400">Productivity boost</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">ROI Timeline</h3>
                  <div className="text-2xl font-bold text-green-400">12-18</div>
                  <div className="text-sm text-gray-400">Months average</div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-zion-cyan to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Calculate Your ROI
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-12"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team of experts is ready to help you choose the right services and pricing plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-zion-cyan to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Contact Sales Team
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300">
              Our pricing experts are ready to help you find the perfect solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="p-4 bg-zion-cyan/20 rounded-xl inline-block mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-zion-cyan font-medium">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-zion-purple/20 rounded-xl inline-block mb-4">
                <Mail className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-zion-purple font-medium">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-zion-cyan/20 rounded-xl inline-block mb-4">
                <MapPin className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-cyan font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="text-center mt-12 p-6 bg-zion-slate-dark/30 rounded-2xl border border-zion-purple/20">
            <p className="text-gray-300 mb-4">
              All pricing includes comprehensive support, documentation, and integration assistance.
            </p>
            <p className="text-sm text-gray-400">
              * Prices are subject to change. Contact us for the most current pricing and custom enterprise solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}