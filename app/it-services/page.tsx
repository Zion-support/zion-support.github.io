'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Server, Users, Code } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions using AWS, Azure, and Google Cloud',
      icon: Cloud,
      category: 'cloud',
      features: [
        'Cloud migration and setup',
        'Auto-scaling and load balancing',
        'Cost optimization',
        'Disaster recovery planning'
      ],
      price: 'From $2,000'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management',
      icon: Settings,
      category: 'devops',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Monitoring and logging',
        'Automated testing'
      ],
      price: 'From $1,500'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: Shield,
      category: 'security',
      features: [
        'Security assessment',
        'Threat detection and prevention',
        'Compliance management',
        'Incident response'
      ],
      price: 'From $3,000'
    },
    {
      title: 'Managed IT Services',
      description: 'Complete IT infrastructure management and support',
      icon: Server,
      category: 'managed',
      features: [
        '24/7 monitoring and support',
        'Proactive maintenance',
        'Performance optimization',
        'Help desk services'
      ],
      price: 'From $500/month'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance services',
      icon: Database,
      category: 'database',
      features: [
        'Database design and optimization',
        'Performance tuning',
        'Backup and recovery',
        'Migration services'
      ],
      price: 'From $1,000'
    },
    {
      title: 'Network Solutions',
      description: 'Network design, implementation, and security solutions',
      icon: Globe,
      category: 'network',
      features: [
        'Network design and setup',
        'Security implementation',
        'Performance monitoring',
        'Troubleshooting and support'
      ],
      price: 'From $1,200'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting and technology planning',
      icon: Users,
      category: 'consulting',
      features: [
        'Technology strategy',
        'Digital transformation',
        'Process optimization',
        'Training and support'
      ],
      price: 'From $150/hour'
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions for your business needs',
      icon: Code,
      category: 'development',
      features: [
        'Web applications',
        'Mobile apps',
        'API development',
        'System integration'
      ],
      price: 'From $5,000'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'devops', name: 'DevOps' },
    { id: 'security', name: 'Security' },
    { id: 'managed', name: 'Managed IT' },
    { id: 'database', name: 'Database' },
    { id: 'network', name: 'Network' },
    { id: 'consulting', name: 'Consulting' },
    { id: 'development', name: 'Development' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
            IT <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to modernize your infrastructure, enhance security, 
            and optimize your business operations.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => (
              <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center mb-6">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  <a
                    href="/contact"
                    className="w-full cyber-button py-3 px-6 text-center font-semibold inline-flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* IT Process Section */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our IT Service Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
                <p className="text-gray-300">
                  We analyze your current IT infrastructure and identify areas for improvement
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Planning</h3>
                <p className="text-gray-300">
                  We create a detailed implementation plan tailored to your business needs
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">
                  We implement the solution with minimal disruption to your business operations
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Support</h3>
                <p className="text-gray-300">
                  We provide ongoing support and maintenance to ensure optimal performance
                </p>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Fast Implementation</h3>
                <p className="text-gray-300">
                  We deliver solutions quickly without compromising quality or security
                </p>
              </div>
            </div>
            
            <div className="cyber-card text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level security and compliance for all your critical data and systems
                </p>
              </div>
            </div>
            
            <div className="cyber-card text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Certified professionals with years of experience in enterprise IT solutions
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="cyber-card p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can help you improve efficiency, enhance security, 
                and scale your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
                >
                  <span>(302) 464-0950</span>
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