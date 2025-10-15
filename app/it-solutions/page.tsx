import React from 'react';
import SEOHead from '../components/SEOHead';
import { Server, Shield, Cloud, Database, Network, Settings, CheckCircle } from 'lucide-react';

const ItSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance for optimal performance.',
      features: ['Server Management', 'Network Monitoring', 'Performance Optimization', '24/7 Support']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your business from cyber threats.',
      features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Compliance Management']
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions and migration services for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Backup Solutions', 'Disaster Recovery']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance services.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery']
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Network Solutions',
      description: 'Robust network infrastructure design and implementation.',
      features: ['Network Design', 'Wireless Solutions', 'VPN Setup', 'Network Security']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with business goals.',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Vendor Management']
    }
  ];

  return (
    <>
      <SEOHead
        title="IT Solutions - Zion Tech Group"
        description="Comprehensive IT solutions including infrastructure management, cybersecurity, cloud services, and technical support for modern businesses."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT infrastructure, support, and consulting services to keep your business running smoothly and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our IT Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with 10+ years of experience</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-gray-300">99% uptime guarantee and client satisfaction</p>
              </div>
            </div>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Get IT Support Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItSolutionsPage;