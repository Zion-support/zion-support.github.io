'use client'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  ArrowRight,
  Search,
  Filter,
  Eye,
  CheckCircle
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      name: 'AI-Powered Analytics',
      category: 'ai',
      description: 'Transform your data into actionable insights with advanced AI analytics.',
      icon: Brain,
      features: ['Machine Learning Models', 'Predictive Analytics', 'Real-time Insights']
    },
    {
      id: 2,
      name: 'Cloud Infrastructure',
      category: 'infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Auto-scaling', '24/7 Monitoring']
    },
    {
      id: 3,
      name: 'Cybersecurity Solutions',
      category: 'security',
      description: 'Protect your business with enterprise-grade security measures.',
      icon: Shield,
      features: ['Threat Detection', 'Data Encryption', 'Compliance']
    },
    {
      id: 4,
      name: 'Custom Software Development',
      category: 'development',
      description: 'Tailored software solutions built for your specific needs.',
      icon: Code,
      features: ['Web Applications', 'Mobile Apps', 'API Development']
    },
    {
      id: 5,
      name: 'Business Intelligence',
      category: 'analytics',
      description: 'Turn your data into strategic business intelligence.',
      icon: BarChart,
      features: ['Data Visualization', 'KPI Dashboards', 'Reporting']
    },
    {
      id: 6,
      name: 'IT Consulting',
      category: 'consulting',
      description: 'Expert guidance for your technology strategy and implementation.',
      icon: Users,
      features: ['Strategy Planning', 'Technology Assessment', 'Implementation Support']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'infrastructure', name: 'Cloud Infrastructure' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'development', name: 'Development' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'consulting', name: 'Consulting' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive AI and IT solutions designed to transform your business and drive growth.
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-colors">
              <div className="flex items-center mb-4">
                <service.icon className="w-12 h-12 text-cyan-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help your business grow.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;