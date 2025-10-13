import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Threat Detection',
      description: 'Advanced AI-powered threat detection and prevention systems.',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Threat Intelligence', 'Automated Response'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data encryption and protection solutions.',
      features: ['End-to-End Encryption', 'Data Loss Prevention', 'Access Control', 'Compliance'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response services.',
      features: ['SOC Services', 'Incident Response', 'Forensic Analysis', 'Recovery Planning'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security assessments and penetration testing.',
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audits', 'Risk Assessment'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: CheckCircle,
      title: 'Compliance',
      description: 'Ensure compliance with industry standards and regulations.',
      features: ['GDPR Compliance', 'HIPAA Compliance', 'SOC 2', 'ISO 27001'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Security Training',
      description: 'Employee security awareness and training programs.',
      features: ['Phishing Simulation', 'Security Awareness', 'Incident Response Training', 'Best Practices'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity services including threat detection, data protection, security monitoring, and compliance solutions." />
        <meta name="keywords" content="cybersecurity, threat detection, data protection, security monitoring, compliance, penetration testing" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Cybersecurity</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Protect your business from cyber threats with our comprehensive security solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Our Cybersecurity Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-slate-900 p-8 rounded-lg hover:bg-slate-800 transition-colors group">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-white mb-8">
                Let's discuss how our cybersecurity solutions can protect your business from threats.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;
