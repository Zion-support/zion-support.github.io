import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, incident response, and compliance.',
      features: ['24/7 Security Operations Center (SOC)', 'Threat detection and response', 'Vulnerability assessment', 'Security awareness training']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Advanced data encryption and protection services to safeguard your sensitive information.',
      features: ['End-to-end encryption', 'Data loss prevention', 'Secure data storage', 'Access control management']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: 'Real-time security monitoring and threat detection to keep your systems safe.',
      features: ['SIEM Solutions', 'Threat Intelligence', 'Incident Response', 'Real-time Alerts']
    },
    {
      icon: AlertTriangle,
      title: 'Compliance',
      description: 'Ensure compliance with industry standards and regulations.',
      features: ['GDPR Compliance', 'SOC 2', 'ISO 27001', 'HIPAA']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Security Services</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive security solutions to protect your business from cyber threats and ensure compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <service.icon className="w-8 h-8 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Security Solutions?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our security experts to discuss your specific needs and get a customized security solution.
          </p>
          <a
            href="tel:+13024640950"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Us - (302) 464-0950
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;