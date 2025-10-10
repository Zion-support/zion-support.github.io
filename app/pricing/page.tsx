'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  Star,
  Zap,
  Brain,
  Cloud,
  Code,
  DollarSign,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  BarChart3,
  Users,
  Settings,
  Globe,
  Smartphone,
  Database,
  Eye,
  Mic,
  FileText,
  Target,
  Heart,
  Package,
  Wifi,
  Calendar,
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      price: { monthly: '$299', yearly: '$2,990', market: '$500-2000' },
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning'],
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses'],
      popular: true
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      price: { monthly: '$399', yearly: '$3,990', market: '$800-3000' },
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection'],
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting'],
      popular: false
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      price: { monthly: '$599', yearly: '$5,990', market: '$1000-5000' },
      features: ['Object Detection', 'Quality Control', 'Facial Recognition', 'Video Analytics'],
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring'],
      popular: false
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection',
      price: { monthly: '$799', yearly: '$7,990', market: '$1500-5000' },
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection'],
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction'],
      popular: true
    },
    {
      icon: Heart,
      title: 'AI Healthcare Diagnostics',
      price: { monthly: '$1,500', yearly: '$14,990', market: '$3000-15000' },
      features: ['Medical Image Analysis', 'Patient Monitoring', 'Treatment Recommendations', 'Drug Discovery'],
      benefits: ['Improved diagnostic accuracy', 'Faster diagnosis', 'Better patient outcomes'],
      popular: false
    },
    {
      icon: DollarSign,
      title: 'AI Financial Forecasting',
      price: { monthly: '$999', yearly: '$9,990', market: '$2000-10000' },
      features: ['Market Analysis', 'Risk Assessment', 'Portfolio Optimization', 'Algorithmic Trading'],
      benefits: ['Better investment decisions', 'Risk mitigation', 'Automated trading'],
      popular: false
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      price: { monthly: '$2,500', yearly: '$24,990', market: '$4000-15000' },
      features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery'],
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure'],
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      price: { monthly: '$1,800', yearly: '$17,990', market: '$3000-12000' },
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring'],
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance'],
      popular: false
    },
    {
      icon: Database,
      title: 'Database Management',
      price: { monthly: '$1,200', yearly: '$11,990', market: '$2000-8000' },
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
      benefits: ['Improved performance', 'Data security', 'Automated backups'],
      popular: false
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      price: { monthly: '$2,200', yearly: '$21,990', market: '$3500-10000' },
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality'],
      popular: true
    },
    {
      icon: Globe,
      title: 'E-commerce Development',
      price: { monthly: '$8,000', yearly: 'Project', market: '$15000-50000' },
      features: ['Custom E-commerce Platforms', 'Payment Gateway Integration', 'Mobile Optimization', 'SEO Optimization'],
      benefits: ['Increase online sales', 'Mobile-first design', 'SEO optimized'],
      popular: false
    },
    {
      icon: Code,
      title: 'API Development',
      price: { monthly: '$3,500', yearly: 'Project', market: '$7000-25000' },
      features: ['RESTful APIs', 'GraphQL APIs', 'Third-party Integrations', 'API Documentation'],
      benefits: ['Seamless integrations', 'Scalable architecture', 'Comprehensive documentation'],
      popular: false
    }
  ];

  const microSaasServices = [
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      price: { monthly: '$89', yearly: '$890', market: '$150-500' },
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors'],
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards'],
      popular: true
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      price: { monthly: '$149', yearly: '$1,490', market: '$300-800' },
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing'],
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction'],
      popular: true
    },
    {
      icon: FileText,
      title: 'Zion Invoice Genius',
      price: { monthly: '$49', yearly: '$490', market: '$100-300' },
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking'],
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups'],
      popular: false
    },
    {
      icon: Target,
      title: 'Zion Lead Magnet',
      price: { monthly: '$99', yearly: '$990', market: '$200-600' },
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration'],
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates'],
      popular: false
    },
    {
      icon: MessageSquare,
      title: 'Zion AI Email Assistant',
      price: { monthly: '$79', yearly: '$790', market: '$150-400' },
      features: ['Smart Email Writing', 'Auto-Response Generation', 'Email Scheduling', 'Sentiment Analysis'],
      benefits: ['Save 70% email time', 'Professional communication', 'Automated follow-ups'],
      popular: false
    },
    {
      icon: Calendar,
      title: 'Zion AI Meeting Scheduler',
      price: { monthly: '$49', yearly: '$490', market: '$100-300' },
      features: ['Smart Scheduling', 'Calendar Integration', 'Time Zone Management', 'Meeting Optimization'],
      benefits: ['Eliminate scheduling conflicts', 'Save 90% scheduling time', 'Optimize meeting times'],
      popular: false
    }
  ];

  const allServices = [...aiServices, ...itServices, ...microSaasServices];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : selectedCategory === 'ai' 
    ? aiServices 
    : selectedCategory === 'it' 
    ? itServices 
    : microSaasServices;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'ai', name: 'AI Services', count: aiServices.length },
    { id: 'it', name: 'IT Services', count: itServices.length },
    { id: 'saas', name: 'Micro SAAS', count: microSaasServices.length }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI, IT, and Micro SAAS services. Choose the perfect plan for your business needs." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Choose from our comprehensive range of AI, IT, and Micro SAAS services with transparent, competitive pricing
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`text-lg font-medium ${selectedPlan === 'monthly' ? 'text-cyan-400' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setSelectedPlan(selectedPlan === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      selectedPlan === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-lg font-medium ${selectedPlan === 'yearly' ? 'text-cyan-400' : 'text-gray-400'}`}>
                  Yearly
                </span>
                {selectedPlan === 'yearly' && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Save 20%
                  </span>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredServices.map((service, index) => (
                <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 group relative ${
                  service.popular ? 'ring-2 ring-cyan-500/50 shadow-lg shadow-cyan-500/25' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-cyan-400">
                        ${selectedPlan === 'yearly' && service.price.yearly !== 'Project' 
                          ? service.price.yearly 
                          : service.price.monthly}
                      </span>
                      <span className="text-gray-400">
                        /{selectedPlan === 'yearly' && service.price.yearly !== 'Project' ? 'year' : 'month'}
                      </span>
                    </div>
                    {service.price.market && (
                      <div className="text-sm text-gray-400 mt-1">
                        Market: {service.price.market}/month
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg text-center font-medium transition-all duration-300"
                    >
                      Get Started
                    </a>
                    <a
                      href="/contact"
                      className="w-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 py-3 rounded-lg text-center font-medium transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Enterprise Section */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 mb-16">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need Custom Solutions?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  We offer custom enterprise solutions tailored to your specific needs. 
                  Contact our team for a personalized quote and consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Contact Sales
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-2">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">24/7 Support Available</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-400">Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PricingPage;