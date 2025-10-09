import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Code, Database, Users, Settings, CheckCircle } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management for your business.',
      icon: Cloud,
      features: ['Network Setup', 'Server Management', 'Hardware Installation', 'System Monitoring'],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Security Audits', 'Threat Detection', 'Firewall Management', 'Incident Response'],
      price: 'Starting at $2,499/month'
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific needs.',
      icon: Code,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      price: 'Custom Pricing'
    },
    {
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance services.',
      icon: Database,
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup Solutions'],
      price: 'Starting at $1,499/month'
    },
    {
      title: 'IT Support',
      description: '24/7 comprehensive IT support and maintenance services.',
      icon: Users,
      features: ['Help Desk', 'Remote Support', 'System Maintenance', 'User Training'],
      price: 'Starting at $999/month'
    },
    {
      title: 'Managed IT',
      description: 'Complete IT management and monitoring for your business.',
      icon: Settings,
      features: ['Proactive Monitoring', 'System Updates', 'Security Patches', 'Performance Optimization'],
      price: 'Starting at $1,799/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure, cybersecurity, and custom development solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to support and accelerate your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold">{service.price}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Enhance Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can support your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;
