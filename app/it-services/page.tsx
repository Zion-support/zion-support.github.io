'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Settings, Database, Globe, Users, Cloud, Shield, ArrowRight } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      name: 'IT Services',
      description: 'Comprehensive IT solutions for your business needs.',
      icon: Settings,
      href: '/it-services'
    },
    {
      name: 'Database Management',
      description: 'Expert database administration and optimization services.',
      icon: Database,
      href: '/database-management'
    },
    {
      name: 'Global IT Support',
      description: '24/7 IT support services worldwide.',
      icon: Globe,
      href: '/global-it-support'
    },
    {
      name: 'IT Training',
      description: 'Professional IT training and certification programs.',
      icon: Users,
      href: '/it-training'
    },
    {
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: Cloud,
      href: '/cloud-solutions'
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business.',
      icon: Shield,
      href: '/cybersecurity'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion AI | Professional IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including support, training, cloud solutions, and cybersecurity." />
        <meta name="keywords" content="IT services, IT support, cloud solutions, cybersecurity, database management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                That Scale
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional IT services designed to support your business growth with reliable, 
              scalable, and secure technology solutions.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.name}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 hover:border-cyan-400 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <a
                      href={service.href}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:translate-x-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our IT experts help you build a robust, scalable, and secure technology foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/consultation"
                className="px-8 py-4 bg-white/10 text-white border border-gray-600 font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ItServicesPage;
