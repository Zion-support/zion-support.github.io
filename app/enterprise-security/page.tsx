import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, Clock, DollarSign, Star, Target, Award, Zap, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const EnterpriseSecurityPage: React.FC = () => {
  const securityServices = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model for comprehensive protection.',
      price: '$2,500/month',
      features: ['Identity verification', 'Device trust', 'Network segmentation', 'Continuous monitoring']
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: 'Advanced Threat Protection',
      description: 'AI-powered threat detection and prevention systems.',
      price: '$1,999/month',
      features: ['Malware detection', 'Phishing protection', 'Ransomware prevention', 'Real-time alerts']
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response.',
      price: '$1,500/month',
      features: ['SIEM implementation', 'Log analysis', 'Threat hunting', 'Incident response']
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Identity & Access Management',
      description: 'Comprehensive IAM solutions for enterprise security.',
      price: '$1,200/month',
      features: ['Single sign-on', 'Multi-factor authentication', 'Role-based access', 'Privileged access management']
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards and regulations.',
      price: '$1,800/month',
      features: ['GDPR compliance', 'HIPAA compliance', 'SOX compliance', 'Audit support']
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure and applications.',
      price: '$1,600/month',
      features: ['Cloud access security', 'Data encryption', 'API security', 'Container security']
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Security Uptime', icon: <Shield className="w-6 h-6 text-green-400" /> },
    { number: '50+', label: 'Security Projects', icon: <Lock className="w-6 h-6 text-blue-400" /> },
    { number: '< 5min', label: 'Response Time', icon: <Zap className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Monitoring', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  const complianceStandards = [
    { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'SOX', description: 'Sarbanes-Oxley Act compliance' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'ISO 27001', description: 'Information Security Management System' },
    { name: 'SOC 2', description: 'Service Organization Control 2 compliance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Enterprise Security Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise security solutions including zero trust architecture, threat protection, and compliance management. Protect your business with advanced security." />
        <meta name="keywords" content="enterprise security, zero trust, threat protection, compliance management, cybersecurity, security monitoring" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Enterprise Security
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Comprehensive enterprise security solutions designed to protect your business 
              from evolving threats and ensure compliance with industry standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Enterprise Security Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive security solutions for enterprise protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="mr-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-300 transition-colors">{service.title}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Compliance Standards</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We help you meet and maintain compliance with industry standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>
                <p className="text-gray-300 text-sm">{standard.description}</p>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Enterprise?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our security solutions can protect your business and ensure compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
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

      <Footer />
    </div>
  );
};

export default EnterpriseSecurityPage;