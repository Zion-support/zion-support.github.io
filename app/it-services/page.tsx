'use client';
import React from 'react';
import { CheckCircle, Star, Server, Shield, Cloud, Database, Phone, Mail } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure solutions including servers, networking, and data centers.',
      features: ['Server management', 'Network setup', 'Data center solutions', '24/7 monitoring'],
      price: '$999/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and management for AWS, Azure, and Google Cloud.',
      features: ['Cloud migration', 'Cost optimization', 'Security configuration', 'Backup solutions'],
      price: '$799/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      features: ['Threat detection', 'Vulnerability assessment', 'Security training', 'Incident response'],
      price: '$1,299/month'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Database design, optimization, and management for optimal performance.',
      features: ['Database design', 'Performance tuning', 'Backup strategies', 'Migration services'],
      price: '$599/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services to keep your business running smoothly. 
            From infrastructure to security, we provide complete IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-cyan-400">
                {service.price}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Upgrade Your IT?
          </h2>
          <p className="text-xl text-cyan-100 mb-6">
            Join 500+ companies already using our IT services to optimize their technology infrastructure.
          </p>
          <a
            href="tel:+13024640950"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call (302) 464-0950
          </a>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
