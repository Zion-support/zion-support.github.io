import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Server, Cloud, Shield, Wrench, Monitor, Database, ArrowRightIcon } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.',
      features: ['Server Configuration', 'Network Setup', 'Hardware Maintenance', 'Performance Monitoring']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud and optimize your cloud infrastructure for scalability and cost-effectiveness.',
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and threat monitoring.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response']
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description: '24/7 technical support and maintenance to keep your systems running smoothly.',
      features: ['Help Desk Support', 'Remote Monitoring', 'Preventive Maintenance', 'Emergency Response']
    },
    {
      icon: Monitor,
      title: 'System Integration',
      description: 'Seamlessly integrate different systems and applications for improved workflow efficiency.',
      features: ['API Integration', 'Data Synchronization', 'Workflow Automation', 'Legacy System Modernization']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Organize, secure, and optimize your data infrastructure for better insights and compliance.',
      features: ['Database Design', 'Data Backup', 'Data Migration', 'Performance Tuning']
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="IT services, infrastructure, cloud computing, cybersecurity, technical support, system integration" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-slate-900 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive IT solutions to keep your business running efficiently and securely. 
                From infrastructure to support, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-300">Complete technology solutions for modern businesses</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-cyan-500">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
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
        <section className="py-20 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">Need Reliable IT Support?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our IT experts are ready to help you maintain, secure, and optimize your technology infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Support
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;