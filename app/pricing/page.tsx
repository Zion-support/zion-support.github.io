'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Globe
    },
    {
      id: 'ai',
      name: 'AI Services',
      icon: Brain
    },
    {
      id: 'it',
      name: 'IT Services',
      icon: Cpu
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      icon: Code
    },
    {
      id: 'specialized',
      name: 'Specialized',
      icon: Zap
    }
  ];

  const allServices = [
    // AI Services
    {
      category: 'ai',
      name: 'AI Consulting & Strategy',
      price: '$2,500',
      period: '/month',
      description: 'Comprehensive AI strategy development and implementation planning',
      features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'],
      popular: false
    },
    {
      category: 'ai',
      name: 'Machine Learning Solutions',
      price: '$1,500',
      period: '/month',
      description: 'Custom ML models for predictive analytics and decision-making',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      popular: true
    },
    {
      category: 'ai',
      name: 'Natural Language Processing',
      price: '$1,200',
      period: '/month',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      popular: false
    },
    {
      category: 'ai',
      name: 'Computer Vision',
      price: '$1,800',
      period: '/month',
      description: 'Image and video analysis solutions for object detection and recognition',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      popular: false
    },
    {
      category: 'ai',
      name: 'AI Automation',
      price: '$1,400',
      period: '/month',
      description: 'Intelligent process automation with decision-making capabilities',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      popular: false
    },
    {
      category: 'ai',
      name: 'AI Chatbots',
      price: '$800',
      period: '/month',
      description: 'Intelligent conversational AI for customer service and support',
      features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
      popular: false
    },

    // IT Services
    {
      category: 'it',
      name: 'IT Infrastructure',
      price: '$999',
      period: '/month',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee',
      features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions'],
      popular: false
    },
    {
      category: 'it',
      name: 'Cloud Services',
      price: '$1,299',
      period: '/month',
      description: 'Cloud migration, setup, and optimization services',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      popular: true
    },
    {
      category: 'it',
      name: 'Cybersecurity',
      price: '$1,599',
      period: '/month',
      description: 'Advanced security solutions with threat detection and prevention',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      popular: false
    },
    {
      category: 'it',
      name: 'DevOps & CI/CD',
      price: '$1,199',
      period: '/month',
      description: 'Streamlined development workflows with automated testing and deployment',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      popular: false
    },
    {
      category: 'it',
      name: 'Database Services',
      price: '$899',
      period: '/month',
      description: 'Database design, optimization, and management with AI-powered tuning',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      popular: false
    },
    {
      category: 'it',
      name: 'Network Services',
      price: '$1,099',
      period: '/month',
      description: 'Network design, implementation, and monitoring solutions',
      features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'],
      popular: false
    },

    // Micro SAAS Services
    {
      category: 'micro-saas',
      name: 'AI Code Review Assistant',
      price: '$199',
      period: '/month',
      description: 'Automated code analysis and quality improvement suggestions',
      features: ['Code Quality Analysis', 'Security Vulnerability Detection', 'Performance Optimization', 'Best Practice Recommendations'],
      popular: false
    },
    {
      category: 'micro-saas',
      name: 'AI SEO Optimizer',
      price: '$299',
      period: '/month',
      description: 'AI-powered SEO analysis and optimization recommendations',
      features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis'],
      popular: true
    },
    {
      category: 'micro-saas',
      name: 'AI Analytics Dashboard',
      price: '$399',
      period: '/month',
      description: 'Business intelligence and analytics with AI insights',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports'],
      popular: false
    },
    {
      category: 'micro-saas',
      name: 'AI Content Generator',
      price: '$199',
      period: '/month',
      description: 'AI-powered content creation for blogs, social media, and marketing',
      features: ['Blog Writing', 'Social Media Posts', 'Email Templates', 'Ad Copy Generation'],
      popular: false
    },
    {
      category: 'micro-saas',
      name: 'AI Marketing Automation',
      price: '$249',
      period: '/month',
      description: 'Marketing automation and campaign optimization tools',
      features: ['Email Campaigns', 'Social Media Management', 'Lead Scoring', 'A/B Testing'],
      popular: false
    },
    {
      category: 'micro-saas',
      name: 'AI Document Processing',
      price: '$179',
      period: '/month',
      description: 'Intelligent document analysis and data extraction',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation'],
      popular: false
    },
    {
      category: 'micro-saas',
      name: 'AI Customer Support Bot',
      price: '$149',
      period: '/month',
      description: 'Automated customer support and ticket management',
      features: ['24/7 Support', 'Ticket Routing', 'Knowledge Base', 'Escalation Management'],
      popular: false
    },
    {
      category: 'micro-saas',
      name: 'AI Data Visualization',
      price: '$299',
      period: '/month',
      description: 'Advanced data visualization and reporting tools',
      features: ['Interactive Charts', 'Custom Dashboards', 'Real-time Updates', 'Export Options'],
      popular: false
    },
    {
      category: 'micro-saas',
      name: 'AI Email Assistant',
      price: '$99',
      period: '/month',
      description: 'Smart email management and response suggestions',
      features: ['Email Classification', 'Response Suggestions', 'Scheduling', 'Follow-up Reminders'],
      popular: false
    },
    {
      category: 'micro-saas',
      name: 'AI Lead Generation',
      price: '$349',
      period: '/month',
      description: 'Automated lead generation and qualification system',
      features: ['Lead Scoring', 'Contact Discovery', 'Email Outreach', 'CRM Integration'],
      popular: false
    },
    {
      category: 'micro-saas',
      name: 'AI Sales Automation',
      price: '$399',
      period: '/month',
      description: 'Intelligent sales process automation and optimization',
      features: ['Sales Pipeline Management', 'Deal Tracking', 'Forecasting', 'Performance Analytics'],
      popular: false
    },
    {
      category: 'micro-saas',
      name: 'AI E-commerce Solutions',
      price: '$499',
      period: '/month',
      description: 'AI-powered e-commerce optimization and management',
      features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights'],
      popular: false
    },

    // Specialized Services
    {
      category: 'specialized',
      name: 'Quantum Computing',
      price: 'Custom',
      period: '',
      description: 'Next-generation quantum algorithms and quantum security implementations',
      features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development'],
      popular: false
    },
    {
      category: 'specialized',
      name: 'Autonomous Systems',
      price: 'Custom',
      period: '',
      description: 'Self-managing and self-optimizing systems for enterprise operations',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring'],
      popular: false
    },
    {
      category: 'specialized',
      name: 'Blockchain & Web3',
      price: '$1,999',
      period: '/month',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions'],
      popular: true
    },
    {
      category: 'specialized',
      name: 'IoT & Edge Computing',
      price: '$1,499',
      period: '/month',
      description: 'Connected devices and edge computing solutions',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation'],
      popular: false
    },
    {
      category: 'specialized',
      name: 'Business Intelligence',
      price: '$1,799',
      period: '/month',
      description: 'Data-driven insights and predictive analytics for decision-making',
      features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards'],
      popular: false
    },
    {
      category: 'specialized',
      name: 'Robotics Solutions',
      price: 'Custom',
      period: '',
      description: 'Intelligent robotic solutions for manufacturing and service industries',
      features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems'],
      popular: false
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Comprehensive pricing for AI and IT services. Starting at $99/month. Transparent pricing for all our AI solutions, IT services, and micro SAAS products." />
        <meta name="keywords" content="pricing, ai services pricing, it services pricing, micro saas pricing, transparent pricing, enterprise pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All our services come with transparent pricing, 
            no hidden fees, and flexible options to scale with your growth.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            {selectedCategory === 'all' ? 'All Services' : serviceCategories.find(c => c.id === selectedCategory)?.name} Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 cyber-card relative hover:bg-white/20 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-300 ml-1">{service.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name} - ${service.price}${service.period}`}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact us today to discuss your specific needs and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;