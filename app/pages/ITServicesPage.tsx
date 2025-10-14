import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: ServerIcon,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.',
      features: ['Server Configuration', 'Network Setup', 'Hardware Maintenance', 'Performance Monitoring']
    },
    {
      icon: CloudIcon,
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud and optimize your cloud infrastructure for scalability and cost-effectiveness.',
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Disaster Recovery']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and threat monitoring.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response']
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Technical Support',
      description: '24/7 technical support and maintenance to keep your systems running smoothly.',
      features: ['Help Desk Support', 'Remote Monitoring', 'Preventive Maintenance', 'Emergency Response']
    },
    {
      icon: ComputerDesktopIcon,
      title: 'System Integration',
      description: 'Seamlessly integrate different systems and applications for improved workflow efficiency.',
      features: ['API Integration', 'Data Synchronization', 'Workflow Automation', 'Legacy System Modernization']
    },
    {
      icon: CircleStackIcon,
      title: 'Data Management',
      description: 'Organize, secure, and optimize your data infrastructure for better insights and compliance.',
      features: ['Database Design', 'Data Backup', 'Data Migration', 'Performance Tuning']
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="IT services, infrastructure, cloud computing, cybersecurity, technical support, system integration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running efficiently and securely. 
              From infrastructure to support, we've got you covered.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Need Reliable IT Support?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our IT experts are ready to help you maintain, secure, and optimize your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Support
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;