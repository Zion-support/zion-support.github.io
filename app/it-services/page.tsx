'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Code, Database, Smartphone, Globe, Settings, Users, BarChart3, CheckCircle, ArrowRight, Search, Filter } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    {
      id: 1,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions using AWS, Azure, and GCP for optimal performance and reliability.',
      icon: Cloud,
      category: 'cloud',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'Auto-scaling'],
      price: 'Starting at $499/month',
      popular: true
    },
    {
      id: 2,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: Shield,
      category: 'security',
      features: ['Threat Detection', 'Compliance Management', 'Security Audits', 'Incident Response'],
      price: 'Starting at $399/month'
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      icon: Globe,
      category: 'development',
      features: ['React/Next.js', 'Responsive Design', 'SEO Optimization', 'Performance Tuning'],
      price: 'Starting at $5,000/project'
    },
    {
      id: 4,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      icon: Smartphone,
      category: 'development',
      features: ['iOS & Android Apps', 'Cross-platform Development', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting at $8,000/project'
    },
    {
      id: 5,
      title: 'API Development',
      description: 'Robust and scalable API solutions for seamless integration and data exchange.',
      icon: Code,
      category: 'development',
      features: ['RESTful APIs', 'GraphQL', 'API Documentation', 'Rate Limiting'],
      price: 'Starting at $2,500/project'
    },
    {
      id: 6,
      title: 'Database Management',
      description: 'Optimized database solutions for efficient data processing, storage, and retrieval.',
      icon: Database,
      category: 'data',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery'],
      price: 'Starting at $299/month'
    },
    {
      id: 7,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management for faster, more reliable releases.',
      icon: Settings,
      category: 'devops',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Automated Testing'],
      price: 'Starting at $599/month'
    },
    {
      id: 8,
      title: 'IT Support',
      description: '24/7 technical support and maintenance services to keep your systems running smoothly.',
      icon: Users,
      category: 'support',
      features: ['24/7 Support', 'Remote Assistance', 'System Maintenance', 'Performance Monitoring'],
      price: 'Starting at $199/month'
    },
    {
      id: 9,
      title: 'Data Analytics & BI',
      description: 'Business intelligence solutions to transform your data into actionable insights.',
      icon: BarChart3,
      category: 'data',
      features: ['Data Visualization', 'Custom Dashboards', 'Real-time Analytics', 'Predictive Modeling'],
      price: 'Starting at $399/month'
    }
  ];

  const categories = ['all', 'cloud', 'security', 'development', 'data', 'devops', 'support'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and more. Complete technology solutions for your business." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps, database management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete technology infrastructure solutions to power your business growth and digital transformation.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 w-full md:w-80"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="all">All Categories</option>
                <option value="cloud">Cloud Infrastructure</option>
                <option value="security">Cybersecurity</option>
                <option value="development">Development</option>
                <option value="data">Data Management</option>
                <option value="devops">DevOps & CI/CD</option>
                <option value="support">IT Support</option>
              </select>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <span className="text-sm text-purple-400 capitalize">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No IT services found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our IT experts help you build a robust, scalable, and secure technology foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;