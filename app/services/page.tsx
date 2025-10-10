'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  Settings
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Comprehensive artificial intelligence solutions including chatbots, content generation, and predictive analytics.',
      icon: Brain,
      category: 'AI',
      features: ['AI Chatbots', 'Content Generation', 'Predictive Analytics', 'Computer Vision', 'Natural Language Processing', 'Machine Learning'],
      price: 'Starting at $299/month',
      link: '/ai-services'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Complete cloud solutions with AWS, Azure, and GCP setup, migration, and optimization.',
      icon: Cloud,
      category: 'Cloud',
      features: ['Multi-cloud Setup', 'Cloud Migration', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization', 'Security Hardening'],
      price: 'Starting at $2,500/month',
      link: '/it-services'
    },
    {
      id: 3,
      title: 'Cybersecurity Solutions',
      description: 'Advanced security services including threat detection, penetration testing, and compliance management.',
      icon: Shield,
      category: 'Security',
      features: ['Threat Detection', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Incident Response', 'Security Training'],
      price: 'Starting at $1,800/month',
      link: '/it-services'
    },
    {
      id: 4,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      icon: BarChart3,
      category: 'Analytics',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization', 'ETL Pipelines', 'Performance Metrics'],
      price: 'Starting at $399/month',
      link: '/ai-services'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern frameworks.',
      icon: Smartphone,
      category: 'Development',
      features: ['Native iOS & Android', 'Cross-platform Apps', 'UI/UX Design', 'API Integration', 'App Store Optimization', 'Maintenance & Support'],
      price: 'Starting at $8,000/project',
      link: '/it-services'
    },
    {
      id: 6,
      title: 'Micro SaaS Solutions',
      description: '50+ specialized business tools including CRM, project management, and analytics dashboards.',
      icon: Zap,
      category: 'Micro SaaS',
      features: ['Analytics Dashboard', 'CRM Suite', 'Project Management', 'Email Marketing', 'Security Tools', 'Content Creation'],
      price: 'Starting at $19/month',
      link: '/micro-saas'
    },
    {
      id: 7,
      title: 'DevOps & CI/CD',
      description: 'Complete DevOps implementation with automated deployment, monitoring, and infrastructure management.',
      icon: Settings,
      category: 'DevOps',
      features: ['CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code', 'Automated Testing', 'Monitoring & Logging', 'Team Training'],
      price: 'Starting at $3,200/month',
      link: '/it-services'
    },
    {
      id: 8,
      title: 'Database Management',
      description: 'Database design, optimization, migration, and ongoing management for all major database systems.',
      icon: Database,
      category: 'Database',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery', 'Security Hardening', 'Monitoring & Maintenance'],
      price: 'Starting at $1,200/month',
      link: '/it-services'
    },
    {
      id: 9,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize technology investments and digital transformation initiatives.',
      icon: Globe,
      category: 'Consulting',
      features: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Vendor Management', 'Risk Assessment'],
      price: 'Starting at $200/hour',
      link: '/it-services'
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Security', 'Analytics', 'Development', 'Micro SaaS', 'DevOps', 'Database', 'Consulting'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud services, cybersecurity, data analytics, and more." />
        <meta name="keywords" content="services, AI solutions, cloud services, cybersecurity, data analytics, mobile development, database services" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business 
              and drive growth.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
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
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold">{service.price}</span>
                    <Link 
                      to={service.link}
                      className="flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get a customized solution.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-white">Middletown, DE</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Quote
                </Link>
                <Link 
                  to="/pricing"
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  View Pricing
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