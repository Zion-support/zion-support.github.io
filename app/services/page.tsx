'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Filter 
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      icon: Brain,
      category: 'ai',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $1,500/month'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      icon: Cloud,
      category: 'infrastructure',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery'],
      price: 'Starting at $999/month'
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      icon: Shield,
      category: 'security',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response'],
      price: 'Starting at $799/month'
    },
    {
      id: 4,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      icon: Code,
      category: 'development',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      price: 'Starting at $2,999/month'
    },
    {
      id: 5,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      icon: BarChart,
      category: 'analytics',
      features: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting'],
      price: 'Starting at $1,299/month'
    },
    {
      id: 6,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make the right technology decisions.',
      icon: Users,
      category: 'consulting',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training'],
      price: 'Starting at $299/hour'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Services' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'security', name: 'Security' },
    { id: 'development', name: 'Development' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'consulting', name: 'Consulting' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud infrastructure, cybersecurity, custom development, and more." />
        <meta name="keywords" content="AI services, IT services, cloud infrastructure, cybersecurity, custom development, data analytics, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business operations 
            and drive innovation across all industries.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <div className="text-lg font-bold text-cyan-400 mb-2">
                    {service.price}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;