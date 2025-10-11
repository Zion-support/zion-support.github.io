import React from 'react';
import { CheckCircle, ArrowRight, Shield, Eye, Lock, AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection and rapid response to protect your organization.',
      features: ['24/7 Monitoring', 'Real-time Alerts', 'Incident Response', 'Forensic Analysis'],
      pricing: 'Starting at $2,000/month'
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-500" />,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities and risks.',
      features: ['Penetration Testing', 'Vulnerability Assessment', 'Compliance Audits', 'Security Reports'],
      pricing: 'Starting at $1,500'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Identity & Access Management',
      description: 'Secure identity management and access control solutions.',
      features: ['Multi-Factor Authentication', 'Single Sign-On', 'Role-Based Access', 'Privileged Access'],
      pricing: 'Starting at $800/month'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards and regulations.',
      features: ['GDPR Compliance', 'HIPAA Compliance', 'SOC 2', 'ISO 27001'],
      pricing: 'Starting at $1,200/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity solutions including threat detection, security audits, identity management, and compliance." />
        <meta name="keywords" content="cybersecurity, threat detection, security audits, identity management, compliance, data protection" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Protect your business with advanced cybersecurity solutions and expert threat monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Secure Your Business
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Security Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Security Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive cybersecurity solutions to protect your digital assets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-red-400 font-semibold mb-4">{service.pricing}</div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold transition-colors"
                >
                  Get Protected
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Don't Wait for a Breach</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Protect your business today with our comprehensive cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Security Assessment
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityPage;