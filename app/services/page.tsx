'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Settings,
  Calendar,
  CheckSquare,
  FileText,
  Search,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {;

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    {
      id: 1,
      name: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop a comprehensive AI roadmap.',
      category: 'ai',
      icon: Brain,
      features: ['AI Roadmap Development', 'Technology Assessment', 'Implementation Planning', 'ROI Analysis']
    },
    {
      id: 2,
      name: 'Machine Learning Solutions',
      description: 'Custom machine learning models tailored to your specific business needs and data.',
      category: 'ai',
      icon: Brain,
      features: ['Custom ML Models', 'Data Preprocessing', 'Model Training', 'Performance Optimization']
    },
    {
      id: 3,
      name: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions for your business operations.',
      category: 'it',
      icon: Cloud,
      features: ['Cloud Migration', 'Auto-scaling', 'Security Implementation', '24/7 Monitoring']
    },
    {
      id: 4,
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      category: 'security',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response']
    },
    {
      id: 5,
      name: 'Custom Development',
      description: 'Bespoke software solutions designed to meet your unique business requirements.',
      category: 'development',
      icon: Code,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      id: 6,
      name: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      category: 'analytics',
      icon: BarChart,
      features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Modeling', 'Custom Reports']
    },
    {
      id: 7,
      name: 'IT Consulting',
      description: 'Strategic technology consulting to optimize your IT infrastructure and processes.',
      category: 'consulting',
      icon: Users,
      features: ['Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Change Management']
    },
    {
      id: 8,
      name: 'Automation Solutions',
      description: 'Streamline your operations with intelligent automation and workflow optimization.',
      category: 'automation',
      icon: Zap,
      features: ['Process Automation', 'Workflow Optimization', 'RPA Implementation', 'Integration Services']
    },
    {
      id: 9,
      name: 'Database Management',
      description: 'Optimize your database performance and ensure data integrity and security.',
      category: 'database',
      icon: Database,
      features: ['Performance Tuning', 'Data Migration', 'Backup Solutions', 'Security Hardening'],
 }];

  const categories = ['all', 'ai', 'it', 'security', 'development', 'analytics', 'consulting', 'automation', 'database'];

  const filteredServices = services.filter(service => {;

  const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;);

  const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, cloud infrastructure, cybersecurity, custom development, and digital transformation solutions." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, custom development, data analytics, automation, consulting" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Comprehensive AI and IT solutions designed to accelerate your digital transformation 
                and drive business growth. From strategy to implementation, we're your technology partner.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-cyan-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-slate-800 border border-cyan-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-cyan-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-slate-800 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckSquare className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;