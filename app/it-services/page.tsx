'use client';
import React from 'react';
import { CheckCircle, Star, Server, Shield, Cloud, Database, Users, Zap } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      title: 'IT Infrastructure Management',
      description: 'Complete infrastructure setup, monitoring, and maintenance',
      icon: Server,
      features: ['Server setup and configuration', 'Network monitoring', 'Backup and recovery', 'Performance optimization']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business',
      icon: Shield,
      features: ['Threat detection and prevention', 'Security audits', 'Incident response', 'Compliance management']
    },
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and optimization services',
      icon: Cloud,
      features: ['Cloud migration planning', 'Multi-cloud strategies', 'Cost optimization', 'Security implementation']
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance',
      icon: Database,
      features: ['Database design and setup', 'Performance tuning', 'Data migration', 'Backup strategies']
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Comprehensive IT solutions for modern businesses
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            From infrastructure management to cybersecurity, we provide end-to-end IT services 
            that keep your business running smoothly and securely.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Our IT Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <service.icon className="w-12 h-12 text-cyan-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Optimize Your IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you build a robust, secure, and scalable IT infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Free Consultation
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ITServicesPage;