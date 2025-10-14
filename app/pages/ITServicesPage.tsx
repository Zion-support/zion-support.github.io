import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Wrench, Monitor, Database, CheckCircle } from 'lucide-react';

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
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services for modern businesses" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">IT Services</h1>
          <p className="text-lg text-gray-300 mb-12">
            Transform your business with our comprehensive IT services.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;