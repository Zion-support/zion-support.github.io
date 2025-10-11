'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { Cloud, Code, Smartphone, Globe, Database, Shield, Server, Wifi, ArrowRight, CheckCircle } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'development', name: 'Development' },
    { id: 'security', name: 'Security' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const itServices = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      category: 'cloud',
      icon: Cloud,
      description: 'Build and manage scalable cloud infrastructure solutions for your business.',
      features: [
        'Cloud Migration',
        'Infrastructure Setup',
        'Cloud Management',
        'Auto-scaling',
        'Cost Optimization'
      ],
      benefits: [
        '50% reduction in infrastructure costs',
        '99.9% uptime guarantee',
        'Scalable solutions'
      ]
    },
    {
      id: 'web-development',
      title: 'Web Development',
      category: 'development',
      icon: Code,
      description: 'Create modern, responsive web applications with cutting-edge technologies.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Integration',
        'API Development',
        'E-commerce Solutions'
      ],
      benefits: [
        '40% faster load times',
        'Mobile-first design',
        'SEO optimized'
      ]
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      category: 'mobile',
      icon: Smartphone,
      description: 'Develop native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-platform Apps',
        'App Store Optimization',
        'Push Notifications'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'App store ready'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      category: 'security',
      icon: Shield,
      description: 'Protect your business with comprehensive cybersecurity solutions.',
      features: [
        'Security Audits',
        'Threat Detection',
        'Incident Response',
        'Compliance Management',
        'Security Training'
      ],
      benefits: [
        '99.9% security coverage',
        '24/7 monitoring',
        'Compliance ready'
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & CI/CD',
      category: 'infrastructure',
      icon: Server,
      description: 'Implement automated deployment pipelines and infrastructure management.',
      features: [
        'CI/CD Setup',
        'Containerization',
        'Monitoring & Logging',
        'Infrastructure as Code',
        'Automated Testing'
      ],
      benefits: [
        '80% faster deployments',
        'Automated processes',
        'Reduced errors'
      ]
    },
    {
      id: 'database-management',
      title: 'Database Management',
      category: 'infrastructure',
      icon: Database,
      description: 'Design, optimize, and maintain database systems for optimal performance.',
      features: [
        'Database Design',
        'Performance Optimization',
        'Data Migration',
        'Backup & Recovery',
        'Security Implementation'
      ],
      benefits: [
        '60% performance improvement',
        'Data security',
        'Automated backups'
      ]
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumb items={[{ label: 'IT Services' }]} />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure, 
              enhance security, and drive business growth.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <ArrowRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Let our IT experts help you build a robust, scalable, and secure technology foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/case-studies"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ItServicesPage;