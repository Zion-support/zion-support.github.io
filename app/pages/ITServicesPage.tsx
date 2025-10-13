import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Code, Database, Wrench } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure solutions including server management, networking, and data center services.',
      features: ['Server Administration', 'Network Design', 'Data Center Management', 'Performance Optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud with confidence. We provide end-to-end cloud strategy and implementation.',
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Security & Compliance']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced cybersecurity solutions and threat monitoring.',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance Management']
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies and best practices.',
      features: ['Custom Applications', 'API Development', 'Legacy Modernization', 'Quality Assurance']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data solutions including storage, backup, recovery, and analytics.',
      features: ['Data Storage Solutions', 'Backup & Recovery', 'Data Analytics', 'Database Optimization']
    },
    {
      icon: Wrench,
      title: 'IT Support & Maintenance',
      description: '24/7 IT support and maintenance services to keep your systems running smoothly.',
      features: ['24/7 Support', 'Proactive Monitoring', 'System Updates', 'Troubleshooting']
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services including infrastructure management, cloud solutions, cybersecurity, and software development." />
        <meta name="keywords" content="IT services, infrastructure, cloud solutions, cybersecurity, software development, IT support" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to keep your business running efficiently and securely. 
                From infrastructure to cloud migration, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </a>
                <a href="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Professional IT solutions designed to support and enhance your business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Professional IT Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert team help you optimize your IT infrastructure and operations.
            </p>
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-block">
              Get IT Support
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;