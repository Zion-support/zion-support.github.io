'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  MessageSquare,
  FileText,
  Target,
  Shield,
  Cloud,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Settings,
  Heart,
  DollarSign,
  Box,
  Monitor,
  Link as LinkIcon,
  Server,
  Package,
  Mic,
  Workflow,
  Eye,
  Wifi,
  ShoppingCart,
  Brain,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Lock,
  Calendar,
  Headphones,
  Code,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Advanced data connectors',
        'Automated report generation',
        'Multi-tenant architecture',
        'API integration',
        'Mobile app access'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
        'Cost-effective solution',
        'Easy integration',
        'Scalable architecture',
        'Mobile accessibility'
      ],
      icon: BarChart3,
      category: 'Analytics',
      popular: true
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      price: '$179/month',
      marketPrice: '$300-800/month',
      features: [
        'AI-powered lead scoring',
        'Automated follow-ups',
        'Predictive analytics',
        'Sales forecasting',
        'Customer segmentation',
        'Integration hub',
        'Mobile CRM access',
        'Advanced reporting'
      ],
      benefits: [
        'Improved sales performance',
        'Better customer relationships',
        'Automated processes',
        'Data-driven insights',
        'Increased conversion rates',
        'Reduced manual work',
        'Better forecasting',
        'Enhanced productivity'
      ],
      icon: Users,
      category: 'Customer Service',
      popular: true
    },
    {
      id: 'zion-project-manager',
      name: 'Zion Project Manager',
      description: 'Comprehensive project management solution with AI-powered task optimization and team collaboration.',
      price: '$129/month',
      marketPrice: '$200-600/month',
      features: [
        'AI task optimization',
        'Team collaboration tools',
        'Resource management',
        'Timeline visualization',
        'Progress tracking',
        'Budget monitoring',
        'Risk assessment',
        'Integration capabilities'
      ],
      benefits: [
        'Improved project success rates',
        'Better resource utilization',
        'Enhanced team collaboration',
        'Reduced project delays',
        'Cost optimization',
        'Better risk management',
        'Improved communication',
        'Higher productivity'
      ],
      icon: Workflow,
      category: 'Project Management',
      popular: false
    },
    {
      id: 'zion-inventory-pro',
      name: 'Zion Inventory Pro',
      description: 'Smart inventory management system with AI-powered demand forecasting and automated reordering.',
      price: '$99/month',
      marketPrice: '$150-400/month',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost tracking',
        'Reporting dashboard',
        'Mobile access'
      ],
      benefits: [
        'Reduced stockouts',
        'Lower inventory costs',
        'Improved cash flow',
        'Better supplier relationships',
        'Automated processes',
        'Real-time visibility',
        'Cost savings',
        'Efficient operations'
      ],
      icon: Package,
      category: 'Inventory',
      popular: false
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Advanced email marketing automation platform with AI-powered personalization and analytics.',
      price: '$79/month',
      marketPrice: '$120-350/month',
      features: [
        'AI-powered personalization',
        'Automated email sequences',
        'A/B testing',
        'Advanced analytics',
        'List segmentation',
        'Template builder',
        'Integration hub',
        'Performance tracking'
      ],
      benefits: [
        'Higher email engagement',
        'Improved conversion rates',
        'Automated workflows',
        'Better targeting',
        'Time savings',
        'Data-driven insights',
        'Increased ROI',
        'Professional campaigns'
      ],
      icon: Mail,
      category: 'Marketing',
      popular: false
    },
    {
      id: 'zion-finance-tracker',
      name: 'Zion Finance Tracker',
      description: 'Comprehensive financial management and accounting solution with AI-powered insights and automation.',
      price: '$149/month',
      marketPrice: '$250-700/month',
      features: [
        'AI financial insights',
        'Automated bookkeeping',
        'Expense tracking',
        'Invoice management',
        'Tax preparation',
        'Financial reporting',
        'Budget planning',
        'Multi-currency support'
      ],
      benefits: [
        'Better financial control',
        'Automated processes',
        'Improved accuracy',
        'Time savings',
        'Better compliance',
        'Cost reduction',
        'Real-time insights',
        'Professional reporting'
      ],
      icon: DollarSign,
      category: 'Finance',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Project Management', name: 'Project Management', count: services.filter(s => s.category === 'Project Management').length },
    { id: 'Inventory', name: 'Inventory', count: services.filter(s => s.category === 'Inventory').length },
    { id: 'Marketing', name: 'Marketing', count: services.filter(s => s.category === 'Marketing').length },
    { id: 'Finance', name: 'Finance', count: services.filter(s => s.category === 'Finance').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Business Software Tools</title>
        <meta name="description" content="Comprehensive micro SaaS solutions including analytics, CRM, project management, and automation tools for small to medium businesses." />
        <meta name="keywords" content="micro saas, business software, analytics, CRM, project management, automation, small business tools" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Powerful micro SaaS tools to grow your business" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Powerful Business Software Tools
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations with our comprehensive suite of micro SaaS solutions. 
              From analytics and CRM to project management and automation, we provide the tools you need to grow and succeed.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search micro SaaS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Choose from our comprehensive suite of micro SaaS solutions or get a custom solution 
                built specifically for your business needs. Contact our experts for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;