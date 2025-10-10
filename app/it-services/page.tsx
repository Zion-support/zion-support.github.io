'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Star, Users, Clock } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    {
      id: 1,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions with AWS, Azure, and GCP',
      category: 'Cloud',
      icon: Cloud,
      features: [
        'Cloud migration and setup',
        'Auto-scaling capabilities',
        'Load balancing',
        'Disaster recovery',
        'Cost optimization',
        '24/7 monitoring'
      ],
      price: 'Starting at $999/month',
      popular: true
    },
    {
      id: 2,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      category: 'Security',
      icon: Shield,
      features: [
        'Threat detection and prevention',
        'Vulnerability assessments',
        'Compliance management',
        'Incident response',
        'Security training',
        'Regular security audits'
      ],
      price: 'Starting at $799/month',
      popular: false
    },
    {
      id: 3,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance',
      category: 'Database',
      icon: Database,
      features: [
        'Database design and architecture',
        'Performance optimization',
        'Data migration',
        'Backup and recovery',
        'Security implementation',
        'Monitoring and maintenance'
      ],
      price: 'Starting at $599/month',
      popular: false
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      category: 'Development',
      icon: Smartphone,
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Performance optimization',
        'Ongoing support and updates'
      ],
      price: 'Starting at $2,000/month',
      popular: true
    },
    {
      id: 5,
      title: 'Web Development',
      description: 'Modern, responsive web applications and websites',
      category: 'Development',
      icon: Globe,
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'Content management systems',
        'API development',
        'Performance optimization',
        'SEO optimization'
      ],
      price: 'Starting at $1,500/month',
      popular: false
    },
    {
      id: 6,
      title: 'IT Consulting',
      description: 'Strategic IT guidance and technology roadmaps',
      category: 'Consulting',
      icon: Settings,
      features: [
        'Technology strategy',
        'Digital transformation',
        'Process optimization',
        'Vendor management',
        'Project management',
        'Training and support'
      ],
      price: '$299/hour',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'Cloud', name: 'Cloud' },
    { id: 'Security', name: 'Security' },
    { id: 'Database', name: 'Database' },
    { id: 'Development', name: 'Development' },
    { id: 'Consulting', name: 'Consulting' }
  ];

  const benefits = [
    'Expert team with 10+ years experience',
    '24/7 technical support',
    'Scalable solutions that grow with your business',
    'Cutting-edge technology and best practices',
    'Competitive pricing and flexible plans',
    'Proven track record of successful implementations'
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, database management, and custom development solutions." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, database management, web development, mobile development" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to modernize your infrastructure, 
            enhance security, and drive business growth.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our IT Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our IT Services</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                service.popular
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-6">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                }`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert team help you modernize your IT infrastructure and 
              secure your business for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;
