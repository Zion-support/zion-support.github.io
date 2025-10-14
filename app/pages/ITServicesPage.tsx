import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Wrench, Monitor, Database } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.',
      features: ['Server Setup & Configuration', 'Network Management', 'Hardware Maintenance', 'Performance Monitoring']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate and manage your IT infrastructure in the cloud with our expert cloud services.',
      features: ['Cloud Migration', 'Multi-Cloud Strategy', 'Cost Optimization', 'Security & Compliance']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions and best practices.',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance Management']
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description: '24/7 technical support and maintenance services to keep your systems running smoothly.',
      features: ['24/7 Monitoring', 'Remote Support', 'On-site Service', 'Preventive Maintenance']
    },
    {
      icon: Monitor,
      title: 'Software Solutions',
      description: 'Custom software development and integration services tailored to your business needs.',
      features: ['Custom Development', 'System Integration', 'API Development', 'Legacy Modernization']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Secure and efficient data management solutions for your business information.',
      features: ['Database Design', 'Data Migration', 'Backup & Recovery', 'Data Analytics']
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, technical support" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services designed to keep your business running smoothly and securely. 
              From infrastructure management to cybersecurity, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services to support and enhance your business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
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
        <section className="py-20 px-4 bg-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need IT Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert IT team is ready to help you with all your technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Support
              </a>
              <a
                href="/demo"
                className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;