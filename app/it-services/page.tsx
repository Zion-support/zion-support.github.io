'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Server, Shield, Cloud, Database, Wrench, CheckCircle } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'security', name: 'Security' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'database', name: 'Database' },
    { id: 'support', name: 'Support & Maintenance' }
  ];

  const services = [
    {
      id: 1,
      name: 'Cloud Infrastructure Setup',
      category: 'infrastructure',
      description: 'Complete cloud infrastructure design, implementation, and optimization.',
      features: [
        'Cloud architecture design',
        'Server provisioning',
        'Load balancing',
        'Auto-scaling',
        'Monitoring setup'
      ],
      benefits: [
        'Scalable infrastructure',
        'Cost optimization',
        'High availability',
        'Disaster recovery'
      ],
      price: 'Starting at $3,000',
      duration: '2-4 weeks',
      icon: Server,
      popular: true
    },
    {
      id: 2,
      name: 'Cybersecurity Solutions',
      category: 'security',
      description: 'Comprehensive security solutions to protect your business from threats.',
      features: [
        'Security assessment',
        'Firewall configuration',
        'Intrusion detection',
        'Vulnerability scanning',
        'Security training'
      ],
      benefits: [
        'Enhanced security posture',
        'Compliance assurance',
        'Threat prevention',
        'Peace of mind'
      ],
      price: 'Starting at $2,500',
      duration: '3-6 weeks',
      icon: Shield,
      popular: false
    },
    {
      id: 3,
      name: 'Cloud Migration Services',
      category: 'cloud',
      description: 'Seamless migration of your applications and data to the cloud.',
      features: [
        'Migration planning',
        'Data transfer',
        'Application migration',
        'Testing & validation',
        'Go-live support'
      ],
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability',
        'Enhanced performance',
        'Better security'
      ],
      price: 'Starting at $5,000',
      duration: '4-8 weeks',
      icon: Cloud,
      popular: true
    },
    {
      id: 4,
      name: 'Database Management',
      category: 'database',
      description: 'Professional database design, optimization, and maintenance services.',
      features: [
        'Database design',
        'Performance optimization',
        'Backup & recovery',
        'Security hardening',
        '24/7 monitoring'
      ],
      benefits: [
        'Optimized performance',
        'Data protection',
        'Reduced downtime',
        'Cost savings'
      ],
      price: 'Starting at $1,500',
      duration: '2-3 weeks',
      icon: Database,
      popular: false
    },
    {
      id: 5,
      name: 'IT Support & Maintenance',
      category: 'support',
      description: 'Comprehensive IT support and maintenance for your business systems.',
      features: [
        '24/7 technical support',
        'System monitoring',
        'Regular maintenance',
        'Software updates',
        'Hardware support'
      ],
      benefits: [
        'Reduced downtime',
        'Proactive maintenance',
        'Expert support',
        'Cost predictability'
      ],
      price: 'Starting at $800/month',
      duration: 'Ongoing',
      icon: Wrench,
      popular: true
    },
    {
      id: 6,
      name: 'Network Infrastructure',
      category: 'infrastructure',
      description: 'Design and implementation of robust network infrastructure solutions.',
      features: [
        'Network design',
        'Router configuration',
        'Switch setup',
        'Wireless deployment',
        'Security implementation'
      ],
      benefits: [
        'Reliable connectivity',
        'Enhanced security',
        'Improved performance',
        'Scalable design'
      ],
      price: 'Starting at $2,000',
      duration: '2-4 weeks',
      icon: Server,
      popular: false
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure, security, cloud, and support solutions." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">IT Services</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions to keep your business running smoothly and securely.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 ${
                    service.popular ? 'border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20' : 'border border-gray-700 hover:border-cyan-500/50'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Features</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Price</span>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white">{service.duration}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600">
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-300">Try selecting a different category.</p>
              </div>
            )}

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Upgrade Your IT Infrastructure?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your IT needs and create a custom solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600"
                >
                  Start Your IT Transformation
                </a>
                <a
                  href="/consultation"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ItServicesPage;
