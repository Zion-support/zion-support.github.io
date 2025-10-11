'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Zap, Cloud, Shield, Code, Users, Database, Globe, Smartphone, Settings, Monitor, Wifi, Server, Lock, BarChart, Workflow, Eye, Mic, MessageSquare, ShoppingCart, Heart, DollarSign, Box, Target, TrendingUp, Package } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions on AWS, Azure, and Google Cloud Platform.',
      category: 'cloud',
      icon: Cloud,
      features: ['Cloud Migration', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
      price: 'Starting at $2,000/month'
    },
    {
      id: 2,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code.',
      category: 'devops',
      icon: Workflow,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring'],
      price: 'Starting at $3,000/month'
    },
    {
      id: 3,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your digital assets.',
      category: 'security',
      icon: Shield,
      features: ['Security Audits', 'Penetration Testing', 'Firewall Management', 'Incident Response'],
      price: 'Starting at $2,500/month'
    },
    {
      id: 4,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with latest technologies.',
      category: 'web',
      icon: Globe,
      features: ['Responsive Design', 'Performance Optimization', 'SEO Integration', 'Cross-browser Support'],
      price: 'Starting at $1,500/month'
    },
    {
      id: 5,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      category: 'mobile',
      icon: Smartphone,
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'App Store Optimization'],
      price: 'Starting at $2,000/month'
    },
    {
      id: 6,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless system integration.',
      category: 'api',
      icon: Code,
      features: ['RESTful APIs', 'GraphQL APIs', 'API Documentation', 'Rate Limiting'],
      price: 'Starting at $1,500/month'
    },
    {
      id: 7,
      title: 'IT Support',
      description: '24/7 technical support and helpdesk services.',
      category: 'support',
      icon: Users,
      features: ['24/7 Support', 'Remote Assistance', 'Hardware Support', 'Software Updates'],
      price: 'Starting at $1,000/month'
    },
    {
      id: 8,
      title: 'Data Analytics & BI',
      description: 'Business intelligence solutions for data-driven decision making.',
      category: 'analytics',
      icon: BarChart,
      features: ['Data Visualization', 'Custom Dashboards', 'ETL Processes', 'Predictive Analytics'],
      price: 'Starting at $2,500/month'
    },
    {
      id: 9,
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance services.',
      category: 'database',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],
      price: 'Starting at $1,500/month'
    },
    {
      id: 10,
      title: 'Network Infrastructure',
      description: 'Design and implementation of secure network architectures.',
      category: 'network',
      icon: Wifi,
      features: ['Network Design', 'VPN Setup', 'Firewall Configuration', 'Network Monitoring'],
      price: 'Starting at $2,000/month'
    },
    {
      id: 11,
      title: 'Server Management',
      description: 'Complete server administration and maintenance services.',
      category: 'servers',
      icon: Server,
      features: ['Server Setup', 'Performance Monitoring', 'Security Hardening', 'Backup Management'],
      price: 'Starting at $1,500/month'
    },
    {
      id: 12,
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmap development.',
      category: 'consulting',
      icon: Settings,
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Roadmap'],
      price: 'Starting at $200/hour'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'devops', name: 'DevOps', icon: Workflow },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'web', name: 'Web Development', icon: Globe },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'api', name: 'API Development', icon: Code },
    { id: 'support', name: 'IT Support', icon: Users },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'network', name: 'Networking', icon: Wifi },
    { id: 'servers', name: 'Server Management', icon: Server },
    { id: 'consulting', name: 'Consulting', icon: Settings }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, and IT support. Complete technology solutions for your business." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile apps, DevOps, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete technology infrastructure solutions for your business. From cloud computing to cybersecurity, we provide comprehensive IT services to keep your business running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
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
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-cyan-400 font-semibold">{service.price}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our IT Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300">
                We combine technical expertise with business acumen to deliver IT solutions that drive growth and efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Technicians</h3>
                <p className="text-gray-300">Certified professionals with years of experience in enterprise IT solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
                <p className="text-gray-300">Quick implementation and deployment of IT solutions to minimize downtime.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security measures to protect your business data and systems.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring for all your IT infrastructure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our IT services can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ItServicesPage;