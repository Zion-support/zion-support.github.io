import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Wrench, Monitor, Database } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="IT services, infrastructure, cloud computing, cybersecurity, technical support, system integration" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-12 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT environment that supports your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a
              href="/demo"
              className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;