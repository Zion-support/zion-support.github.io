import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Server, Wrench, Database, Headphones } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with AWS, Azure, and Google Cloud expertise.',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Setup', 'Hybrid Cloud Solutions'],
      price: 'Starting at $2,500',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
      price: 'Starting at $1,800',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Server,
      title: 'Network Management',
      description: 'Optimize your network infrastructure for maximum performance and reliability.',
      features: ['Network Design', 'Performance Monitoring', 'Troubleshooting', 'Maintenance'],
      price: 'Starting at $1,200',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description: '24/7 technical support to keep your systems running smoothly.',
      features: ['Remote Support', 'On-site Visits', 'System Maintenance', 'Emergency Response'],
      price: 'Starting at $800',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Secure and efficient data storage, backup, and recovery solutions.',
      features: ['Data Backup', 'Recovery Planning', 'Storage Optimization', 'Data Security'],
      price: 'Starting at $1,500',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Headphones,
      title: 'Help Desk Services',
      description: 'Professional help desk support for all your IT needs.',
      features: ['User Support', 'Issue Resolution', 'Training', 'Documentation'],
      price: 'Starting at $600',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, network management, and technical support." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold">{service.price}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Modernize Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your IT needs and create a customized solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link 
                to="/about" 
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;