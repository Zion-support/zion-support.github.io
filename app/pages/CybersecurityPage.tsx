import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Advanced Threat Protection',
      description: 'Comprehensive security solutions to protect against malware, ransomware, and advanced persistent threats.',
      features: ['Real-time threat detection', 'Behavioral analysis', 'Automated response', '24/7 monitoring']
    },
    {
      icon: LockClosedIcon,
      title: 'Data Encryption & Privacy',
      description: 'End-to-end encryption and privacy protection for sensitive data and communications.',
      features: ['AES-256 encryption', 'Zero-knowledge architecture', 'Secure key management', 'Compliance support']
    },
    {
      icon: EyeIcon,
      title: 'Security Monitoring',
      description: 'Continuous monitoring and analysis of your security posture with real-time alerts.',
      features: ['SIEM implementation', 'Log analysis', 'Incident response', 'Security dashboards']
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Vulnerability Assessment',
      description: 'Regular security assessments and penetration testing to identify and fix vulnerabilities.',
      features: ['Penetration testing', 'Vulnerability scanning', 'Security audits', 'Compliance checks']
    }
  ];

  const compliance = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' },
    { name: 'NIST', status: 'Compliant' }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat protection, data encryption, security monitoring, and vulnerability assessment." />
        <meta name="keywords" content="cybersecurity, threat protection, data encryption, security monitoring, vulnerability assessment, compliance" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Cybersecurity</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business with comprehensive cybersecurity solutions. From threat detection 
              to compliance management, we keep your digital assets secure.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Security Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Compliance & Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compliance.map((item, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-green-400 font-medium">{item.status}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Stats */}
          <div className="mb-16 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Security Track Record</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">0</div>
                <div className="text-gray-300">Security Breaches</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">100+</div>
                <div className="text-gray-300">Security Audits</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Secure Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for a security breach. Let's assess your current security posture 
              and implement comprehensive protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecurityPage;