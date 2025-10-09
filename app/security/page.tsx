import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowLeft } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive security evaluation of your systems',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Assessment', 'Compliance Audit'],
      price: '$2,500/month'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Advanced encryption and data security solutions',
      features: ['End-to-End Encryption', 'Data Loss Prevention', 'Access Controls', 'Backup Security'],
      price: '$1,800/month'
    },
    {
      icon: Eye,
      title: 'Monitoring & Detection',
      description: '24/7 security monitoring and threat detection',
      features: ['SIEM Solutions', 'Threat Intelligence', 'Incident Response', 'Real-time Alerts'],
      price: '$3,000/month'
    },
    {
      icon: AlertTriangle,
      title: 'Compliance',
      description: 'Ensure compliance with industry standards',
      features: ['GDPR Compliance', 'SOC 2', 'ISO 27001', 'HIPAA'],
      price: '$2,200/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <a href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
            <h1 className="text-4xl font-bold text-white mb-4">Security Services</h1>
            <p className="text-gray-300 text-lg">
              Comprehensive security solutions to protect your business from cyber threats and ensure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-bold mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Security Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Expert Team</h3>
                <p className="text-gray-300 text-sm">
                  Our certified security professionals have years of experience in protecting 
                  businesses from cyber threats and ensuring compliance with industry standards.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">24/7 Monitoring</h3>
                <p className="text-gray-300 text-sm">
                  Round-the-clock security monitoring and incident response to ensure your 
                  systems are protected at all times.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Compliance Focus</h3>
                <p className="text-gray-300 text-sm">
                  We help you meet and maintain compliance with GDPR, SOC 2, ISO 27001, 
                  HIPAA, and other industry standards.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Proactive Approach</h3>
                <p className="text-gray-300 text-sm">
                  We don't just react to threats - we proactively identify and address 
                  potential vulnerabilities before they become problems.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Contact us today for a free security assessment and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;