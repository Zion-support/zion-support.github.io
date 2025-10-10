'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Settings,
  Calendar,
  CheckSquare,
  FileText,
  MessageCircle,
  Heart,
  DollarSign,
  Box,
  Monitor,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI analytics, predictive modeling, and automated reporting.',
      icon: Brain,
      category: 'AI',
      price: 'Starting at $3,500/month',
      features: ['Predictive Analytics', 'Automated Reporting', 'Real-time Dashboards', 'Machine Learning Models', 'Data Visualization', 'Custom AI Solutions']
    },
    {
      id: 2,
      title: 'Intelligent Customer Service AI',
      description: 'Deploy AI-powered chatbots and virtual assistants to provide 24/7 customer support with natural language processing.',
      icon: MessageCircle,
      category: 'AI',
      price: 'Starting at $2,200/month',
      features: ['Chatbot Development', 'Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Custom Training']
    },
    {
      id: 3,
      title: 'AI Marketing Automation',
      description: 'Automate your marketing campaigns with AI-driven personalization, lead scoring, and customer journey optimization.',
      icon: Target,
      category: 'AI',
      price: 'Starting at $2,800/month',
      features: ['Personalized Campaigns', 'Lead Scoring', 'Customer Segmentation', 'A/B Testing', 'Performance Analytics', 'ROI Optimization']
    },
    {
      id: 4,
      title: 'AI Healthcare Solutions',
      description: 'Specialized AI solutions for healthcare including diagnostic assistance, patient monitoring, and medical data analysis.',
      icon: Heart,
      category: 'AI',
      price: 'Starting at $4,500/month',
      features: ['Diagnostic AI', 'Patient Monitoring', 'Medical Data Analysis', 'HIPAA Compliance', 'Integration Support', 'Custom Development']
    },
    {
      id: 5,
      title: 'AI Financial Services',
      description: 'AI-powered financial solutions including fraud detection, risk assessment, and automated trading algorithms.',
      icon: DollarSign,
      category: 'AI',
      price: 'Starting at $3,800/month',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Regulatory Compliance', 'Real-time Monitoring']
    },

    // Cloud & Infrastructure
    {
      id: 6,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud Platform expertise.',
      icon: Cloud,
      category: 'Cloud',
      price: 'Starting at $4,200/month',
      features: ['Multi-cloud Architecture', 'Migration Planning', 'Cost Optimization', 'Security Implementation', '24/7 Monitoring', 'Disaster Recovery']
    },
    {
      id: 7,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Streamline your development process with automated deployment, continuous integration, and infrastructure as code.',
      icon: Settings,
      category: 'DevOps',
      price: 'Starting at $2,600/month',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Automated Testing', 'Deployment Automation', 'Performance Monitoring']
    },
    {
      id: 8,
      title: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, migration, and 24/7 monitoring.',
      icon: Database,
      category: 'Database',
      price: 'Starting at $1,800/month',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery', 'Security Hardening', '24/7 Monitoring']
    },
    {
      id: 9,
      title: 'Managed IT Services',
      description: 'Complete IT management including helpdesk, monitoring, maintenance, and strategic technology planning.',
      icon: Monitor,
      category: 'Managed',
      price: 'Starting at $2,800/month',
      features: ['24/7 Helpdesk', 'Proactive Monitoring', 'Patch Management', 'Asset Management', 'User Training', 'Vendor Management']
    },
    
    // Development Services
    {
      id: 10,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices for your specific business needs.',
      icon: Code,
      category: 'Development',
      price: 'Starting at $6,000/project',
      features: ['Custom Applications', 'API Development', 'Microservices Architecture', 'Cloud Integration', 'Performance Optimization', 'Ongoing Support']
    },
    {
      id: 11,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      icon: Smartphone,
      category: 'Development',
      price: 'Starting at $8,000/project',
      features: ['Native iOS/Android', 'Cross-platform Development', 'UI/UX Design', 'API Integration', 'App Store Deployment', 'Maintenance & Updates']
    },
    {
      id: 12,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment processing, inventory management, and customer analytics.',
      icon: Globe,
      category: 'Development',
      price: 'Starting at $10,000/project',
      features: ['Online Store Setup', 'Payment Integration', 'Inventory Management', 'Customer Analytics', 'SEO Optimization', 'Mobile Responsive']
    },
    
    // Analytics & Business Intelligence
    {
      id: 13,
      title: 'Advanced Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics, visualization, and business intelligence tools.',
      icon: BarChart,
      category: 'Analytics',
      price: 'Starting at $3,200/month',
      features: ['Real-time Analytics', 'Data Visualization', 'Business Intelligence', 'Custom Dashboards', 'Data Warehousing', 'Predictive Modeling']
    },
    {
      id: 14,
      title: 'Marketing Automation Platform',
      description: 'Comprehensive marketing automation solution with email campaigns, lead nurturing, and customer journey mapping.',
      icon: Target,
      category: 'Marketing',
      price: 'Starting at $2,600/month',
      features: ['Email Marketing', 'Lead Nurturing', 'Customer Journey Mapping', 'A/B Testing', 'Analytics & Reporting', 'CRM Integration']
    },
    
    // Security Services
    {
      id: 15,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat assessment, penetration testing, and security monitoring.',
      icon: Shield,
      category: 'Security',
      price: 'Starting at $3,000/month',
      features: ['Security Assessment', 'Penetration Testing', 'Threat Monitoring', 'Incident Response', 'Compliance Auditing', 'Security Training']
    },
    {
      id: 16,
      title: 'Blockchain Solutions',
      description: 'Blockchain development and implementation services for secure, transparent, and decentralized applications.',
      icon: Lock,
      category: 'Blockchain',
      price: 'Starting at $5,000/project',
      features: ['Smart Contract Development', 'DApp Development', 'Blockchain Integration', 'Cryptocurrency Solutions', 'Security Auditing', 'Consulting Services']
    },
    
    // Specialized Services
    {
      id: 17,
      title: 'IoT Solutions & Management',
      description: 'Internet of Things solutions including device management, data collection, and real-time monitoring systems.',
      icon: Box,
      category: 'IoT',
      price: 'Starting at $2,400/month',
      features: ['Device Management', 'Data Collection', 'Real-time Monitoring', 'Edge Computing', 'Cloud Integration', 'Analytics Dashboard']
    },
    {
      id: 18,
      title: 'API Development & Management',
      description: 'Custom API development, integration, and management services with comprehensive documentation and monitoring.',
      icon: Code,
      category: 'API',
      price: 'Starting at $2,400/month',
      features: ['Custom API Development', 'Third-party Integrations', 'API Documentation', 'Rate Limiting', 'Authentication', 'Performance Monitoring']
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'DevOps', 'Database', 'Managed', 'Development', 'Analytics', 'Marketing', 'Security', 'Blockchain', 'IoT', 'API'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud services, cybersecurity, data analytics, and more." />
        <meta name="keywords" content="services, AI solutions, cloud services, cybersecurity, data analytics, mobile development, database services" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth through innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/about"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="capitalize">
                      {category === 'all' ? 'All Services' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                      <span className="text-sm text-cyan-400 capitalize">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckSquare className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our services can help you achieve your goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;