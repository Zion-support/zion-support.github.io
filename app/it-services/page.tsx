'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Server, Shield, Cloud, Code, Database, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for your business needs',
      icon: Cloud,
      features: [
        'AWS, Azure, GCP expertise',
        'Auto-scaling solutions',
        'Disaster recovery',
        'Cost optimization'
      ],
      price: 'Starting at $599/month'
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      icon: Shield,
      features: [
        'Security audits',
        'Threat monitoring',
        'Incident response',
        'Compliance management'
      ],
      price: 'Starting at $799/month'
    },
    {
      id: 3,
      title: 'Custom Development',
      description: 'Tailored software solutions for your specific requirements',
      icon: Code,
      features: [
        'Web applications',
        'Mobile apps',
        'API development',
        'System integration'
      ],
      price: 'Starting at $999/month'
    },
    {
      id: 4,
      title: 'Database Management',
      description: 'Optimized database solutions for performance and reliability',
      icon: Database,
      features: [
        'Database design',
        'Performance tuning',
        'Backup strategies',
        'Migration services'
      ],
      price: 'Starting at $499/month'
    },
    {
      id: 5,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications',
      icon: Smartphone,
      features: [
        'iOS development',
        'Android development',
        'React Native',
        'Flutter apps'
      ],
      price: 'Starting at $1,299/month'
    },
    {
      id: 6,
      title: 'Server Management',
      description: 'Complete server infrastructure management and maintenance',
      icon: Server,
      features: [
        'Server setup',
        'Performance monitoring',
        'Security updates',
        '24/7 support'
      ],
      price: 'Starting at $399/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete technology infrastructure solutions for your business. From cloud migration to cybersecurity, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-3">{service.price}</div>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center justify-center mx-auto">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let our experts help you build a robust, scalable, and secure technology foundation for your business.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ItServicesPage;