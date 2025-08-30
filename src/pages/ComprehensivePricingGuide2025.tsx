import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Globe, 
  Cpu, 
  Database, 
  Workflow,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  DollarSign,
  Target,
  Clock,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from "../data/innovativeMicroSaasServices2025";

<<<<<<< HEAD
const ComprehensivePricingGuide2025: React.FC = () => {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'price' | 'innovation' | 'roi'>('innovation');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length },
    { id: 'AI & Business Intelligence', name: 'AI & BI', icon: Brain, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Business Intelligence').length },
    { id: 'AI & Customer Experience', name: 'AI & CX', icon: Users, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Customer Experience').length },
    { id: 'AI & Finance', name: 'AI & Finance', icon: TrendingUp, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Finance').length },
    { id: 'AI & Logistics', name: 'AI & Logistics', icon: Globe, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Logistics').length },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: BarChart3, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Marketing').length },
    { id: 'AI & Project Management', name: 'AI & PM', icon: Workflow, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Project Management').length },
    { id: 'AI & Human Resources', name: 'AI & HR', icon: Users, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Human Resources').length },
    { id: 'AI & Cybersecurity', name: 'AI & Security', icon: Shield, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Cybersecurity').length },
    { id: 'AI & Data Management', name: 'AI & Data', icon: Database, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Data Management').length },
    { id: 'AI & Business Process', name: 'AI & Process', icon: Cpu, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Business Process').length },;
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'innovation':
          return a.innovationLevel === 'Revolutionary' ? -1 : 1;
        case 'roi':
          return parseInt(a.roi.split('-')[0]) - parseInt(b.roi.split('-')[0]);
        default:
          return 0;
      }
    });

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':;
        return 'text-purple-600 bg-purple-100 border-purple-200';
      case 'Advanced':
        return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'Cutting-edge':
        return 'text-green-600 bg-green-100 border-green-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getROIColor = (roi: string) => {;
    const minROI = parseInt(roi.split('-')[0]);
    if (minROI >= 500) return 'text-green-600 bg-green-100 border-green-200';
    if (minROI >= 300) return 'text-blue-600 bg-blue-100 border-blue-200';
    if (minROI >= 200) return 'text-yellow-600 bg-yellow-100 border-yellow-200';
    return 'text-gray-600 bg-gray-100 border-gray-200';
  };

  const getPriceTier = (price: number) => {;
    if (price <= 500) return 'text-green-600 bg-green-100 border-green-200';
    if (price <= 1000) return 'text-blue-600 bg-blue-100 border-blue-200';
    if (price <= 2000) return 'text-yellow-600 bg-yellow-100 border-yellow-200';
    return 'text-purple-600 bg-purple-100 border-purple-200';
  };

  const toggleServiceExpansion = (serviceId: string) => {;
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
=======
export default function ComprehensivePricingGuide2025() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: 'month',
      description: 'Perfect for small businesses and startups',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AI Content Creation (5 articles/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Security',
        '5GB Storage',
        'Basic API Access'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/request-quote'
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'month',
      description: 'Ideal for growing businesses',
      color: 'from-purple-500 to-pink-500',
      features: [
        'AI Content Creation (25 articles/month)',
        'Advanced Analytics & Reporting',
        'Priority Support',
        'Enhanced Security',
        '25GB Storage',
        'Full API Access',
        'Custom Integrations',
        'Training Sessions'
      ],
      popular: true,
      cta: 'Get Professional',
      href: '/request-quote'
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: 'month',
      description: 'For large organizations',
      color: 'from-emerald-500 to-green-500',
      features: [
        'Unlimited AI Content Creation',
        'Custom Analytics Platform',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Unlimited Storage',
        'Custom API Development',
        'White-label Solutions',
        'Dedicated Account Manager',
        'Custom Training Programs',
        'SLA Guarantees';
      ],;
      popular: false,;
      cta: 'Contact Sales',;
      href: '/contact';
    };
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Content Creation', price: '$50-500', description: 'Per article or monthly package' },
        { name: 'AI Business Intelligence', price: '$200-2000', description: 'Monthly subscription' },
        { name: 'Machine Learning Models', price: '$500-5000', description: 'Custom development' },
        { name: 'AI Automation', price: '$100-1000', description: 'Per workflow/month' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Cloud Migration', price: '$1000-10000', description: 'One-time project' },
        { name: 'DevOps Automation', price: '$200-2000', description: 'Monthly service' },
        { name: 'Infrastructure Management', price: '$500-5000', description: 'Monthly service' },
        { name: 'Security Audits', price: '$500-3000', description: 'Per audit' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Security Assessment', price: '$1000-5000', description: 'Per assessment' },
        { name: 'Penetration Testing', price: '$2000-10000', description: 'Per test' },
        { name: 'Security Monitoring', price: '$200-2000', description: 'Monthly service' },
        { name: 'Incident Response', price: '$500-5000', description: 'Per incident' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Data Analytics Platform', price: '$300-3000', description: 'Monthly subscription' },;
        { name: 'Business Intelligence', price: '$500-5000', description: 'Monthly service' },;
        { name: 'Data Migration', price: '$1000-10000', description: 'One-time project' },;
        { name: 'Custom Dashboards', price: '$200-2000', description: 'Per dashboard' };
      ];
    };
  ];

  const industrySolutions = [
    {
      title: 'Healthcare',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      pricing: 'Custom pricing based on patient volume and requirements'
    },
    {
      title: 'Financial Services',
      icon: TrendingUp,
      color: 'from-green-500 to-blue-500',
      pricing: 'Enterprise pricing with compliance requirements'
    },
    {
      title: 'Manufacturing',
      icon: Factory,
      color: 'from-orange-500 to-red-500',
      pricing: 'Volume-based pricing for production scale'
    },
    {;
      title: 'Retail & E-commerce',;
      icon: ShoppingCart,;
      color: 'from-purple-500 to-indigo-500',;
      pricing: 'Revenue-based pricing model';
    };
  ];

  const contactInfo = {
  phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',;
  ;
  ;
  ;
  address: '364 E Main St STE 1008 Middletown DE 19709';
  ;





};

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            animate = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Comprehensive Pricing Guide 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Discover transparent pricing for our innovative AI-powered micro SAAS solutions. 
              Find the perfect service for your business needs with competitive rates and exceptional ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Target className="w-5 h-5 text-blue-400" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Premium Quality</span>
              </div>
            </div>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-gray-100 hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Sales
                <Phone className="w-5 h-5" />
              </a>
=======
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className={`relative group ${
                  tier.popular ? 'lg:scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${tier.color} bg-opacity-10 border border-${tier.color.split('-')[1]}-500/20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-6">{tier.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-2">/{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={tier.href}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Pricing */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Detailed pricing for individual services and solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-white">{service.name}</h4>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Pricing */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Custom pricing models for different industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{solution.pricing}</p>
                
                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm mt-4"
                >
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator CTA */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-12 border border-slate-600/50">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calculator className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Quote?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our pricing is flexible and can be customized to meet your specific requirements. 
                Contact us for a personalized quote.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/request-quote"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Custom Quote
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
                >
                  Contact Sales Team
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 font-semibold rounded-xl transition-all duration-300"
                >
                  <Play className="w-5 h-5 inline mr-2" />
                  Schedule Demo
                </Link>
              </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Information Banner */}
      <section id="contact" className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-semibold text-gray-900">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-900">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-semibold text-gray-900">364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
=======
      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Pricing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help you understand our pricing and find the best solution for your needs.
            </p>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'innovation' | 'roi')}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are priced competitively to provide maximum value while ensuring accessibility 
              for businesses of all sizes. Each service includes comprehensive features and premium support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600 mb-2">$399 - $799</div>
              <div className="text-sm text-gray-600 mb-2">Entry Level</div>
              <div className="text-xs text-gray-500">Perfect for small businesses and startups</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600 mb-2">$800 - $1,499</div>
              <div className="text-sm text-gray-600 mb-2">Professional</div>
              <div className="text-xs text-gray-500">Ideal for growing businesses</div>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600 mb-2">$1,500 - $2,999</div>
              <div className="text-sm text-gray-600 mb-2">Enterprise</div>
              <div className="text-xs text-gray-500">For established companies</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-600 mb-2">$3,000+</div>
              <div className="text-sm text-gray-600 mb-2">Premium</div>
              <div className="text-xs text-gray-500">Custom solutions for large enterprises</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Service Pricing Details
          </h2>
          <p className="text-lg text-gray-600">
            Found {filteredServices.length} services matching your criteria
          </p>
        </div>

        <div className="space-y-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial = {
  { opacity: 0,
  y: 20 
}}
              animate = {
  { opacity: 1,
  y: 0 
}}
              transition = {
  { duration: 0.5,
  delay: index * 0.1 
}}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 5).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      {expandedService === service.id ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Show More Details
                        </>
                      )}
                    </button>

                    {expandedService === service.id && (
                      <motion.div
                        initial = {
  { opacity: 0,
  height: 0 
}}
                        animate = {
  { opacity: 1,
  height: 'auto' 
}}
                        exit = {
  { opacity: 0,
  height: 0 
}}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Use Cases:</h5>
                            <ul className="space-y-1">
                              {service.useCases.map((useCase, idx) => (
                                <li key={idx} className="text-sm text-gray-600">• {useCase}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Target Audience:</h5>
                            <ul className="space-y-1">
                              {service.targetAudience.map((audience, idx) => (
                                <li key={idx} className="text-sm text-gray-600">• {audience}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {service.technicalSpecs && (
                          <div className="mt-4">
                            <h5 className="font-semibold text-gray-900 mb-2">Technical Specifications:</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                              <div>
                                <strong>Technology:</strong> {service.technicalSpecs.technology.join(', ')}
                              </div>
                              <div>
                                <strong>Uptime:</strong> {service.technicalSpecs.uptime}
                              </div>
                              <div>
                                <strong>API Endpoints:</strong> {service.technicalSpecs.apiEndpoints}
                              </div>
                              <div>
                                <strong>Security:</strong> {service.technicalSpecs.security.join(', ')}
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Pricing and Actions */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-1">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 mb-2">per month</div>
                      <div className="text-xs text-gray-400">Market Price: {service.marketPrice}</div>
                    </div>

                    <div className="space-y-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium text-center border ${getInnovationColor(service.innovationLevel)}`}>
                        {service.innovationLevel}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium text-center border ${getROIColor(service.roi)}`}>
                        ROI: {service.roi}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium text-center border ${getPriceTier(service.price)}`}>
                        {service.price <= 500 ? 'Entry Level' : service.price <= 1000 ? 'Professional' : service.price <= 2000 ? 'Enterprise' : 'Premium'}
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 text-center space-y-1">
                      <div>Delivery: {service.estimatedDelivery}</div>
                      <div>Support: {service.supportLevel}</div>
                      {service.competitors && (
                        <div>Competitors: {service.competitors.slice(0, 2).join(', ')}</div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <a
                        href={`https://ziontechgroup.com/contact?service=${encodeURIComponent(service.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                      >
                        Get Started
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href="tel:+13024640950"
                        className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                      >
                        Call Sales: +1 302 464 0950
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through innovative technology, proven ROI, and unmatched support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
<<<<<<< HEAD
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-First Approach</h3>
              <p className="text-gray-600">
                All our services are built with cutting-edge AI technology, ensuring maximum efficiency and intelligence.
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-gray-600">
                Our services deliver measurable returns, with most customers seeing 200-600% ROI within the first year.
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Support</h3>
              <p className="text-gray-600">
                Dedicated support teams ensure your success with 24/7 assistance and rapid response times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact our sales team today to discuss your needs, get a custom quote, 
              and start transforming your business with our innovative AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales Team
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Call Now: +1 302 464 0950
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 mb-4">
                Leading provider of innovative AI-powered micro SAAS solutions, helping businesses 
                transform their operations with cutting-edge technology and intelligent automation.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone: +1 302 464 0950</p>
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="https://ziontechgroup.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
                <a
                  href="https://ziontechgroup.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
                <a
                  href="https://ziontechgroup.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">;
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
=======
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  );
};

export default ComprehensivePricingGuide2025;