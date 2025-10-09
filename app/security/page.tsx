import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Threat Protection',
      description: 'Advanced threat detection and prevention systems',
      features: ['Real-time monitoring', 'Malware detection', 'Intrusion prevention', 'DDoS protection']
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data transmission and storage',
      features: ['AES-256 encryption', 'SSL/TLS protocols', 'Key management', 'Secure backups']
    },
    {
      icon: Eye,
      title: 'Access Control',
      description: 'Multi-factor authentication and role-based access control',
      features: ['MFA implementation', 'RBAC systems', 'Single sign-on', 'Audit logging']
    },
    {
      icon: CheckCircle,
      title: 'Compliance',
      description: 'Ensure compliance with industry standards',
      features: ['GDPR Compliance', 'SOC 2', 'ISO 27001', 'HIPAA']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Security
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Enterprise-Grade Security Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Protect your business with our comprehensive security solutions designed to keep your data safe and your operations secure.
            </p>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Security Measures
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-3">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us to learn more about our security solutions and how we can help protect your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;