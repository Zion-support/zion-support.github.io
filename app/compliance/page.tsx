'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, FileCheck, Lock, AlertTriangle, Users } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceFeatures = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Regulatory Compliance',
      description: 'Ensure adherence to industry regulations and standards.',
      benefits: ['GDPR compliance', 'HIPAA compliance', 'SOX compliance', 'PCI DSS compliance']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Audits',
      description: 'Comprehensive security audits and vulnerability assessments.',
      benefits: ['Penetration testing', 'Security scanning', 'Risk assessment', 'Compliance reporting']
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Data Protection',
      description: 'Advanced data protection and privacy measures.',
      benefits: ['Data encryption', 'Access controls', 'Data retention', 'Privacy policies']
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Risk Management',
      description: 'Identify and mitigate potential compliance risks.',
      benefits: ['Risk assessment', 'Mitigation strategies', 'Monitoring systems', 'Incident response']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Training & Education',
      description: 'Compliance training and awareness programs.',
      benefits: ['Staff training', 'Policy education', 'Best practices', 'Certification programs']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Standards',
      description: 'Compliance with international standards and regulations.',
      benefits: ['ISO 27001', 'SOC 2', 'NIST framework', 'International standards']
    }
  ];

  const benefits = [
    'Reduced Compliance Risk',
    'Improved Security Posture',
    'Regulatory Compliance',
    'Cost Savings',
    'Enhanced Reputation',
    'Peace of Mind'
  ];

  const complianceStandards = [
    { name: 'GDPR', description: 'General Data Protection Regulation' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'SOX', description: 'Sarbanes-Oxley Act' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'ISO 27001', description: 'Information Security Management System' },
    { name: 'SOC 2', description: 'Service Organization Control 2' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Compliance | Zion Tech Group</title>
        <meta name="description" content="Professional compliance services by Zion Tech Group. Advanced compliance and security solutions for your business." />
        <meta name="keywords" content="compliance, security, regulatory compliance, data protection, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Compliance
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ensure your business meets all regulatory requirements with our comprehensive 
              compliance solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Compliance Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive compliance solutions designed to meet your regulatory requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Compliance Standards</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help you meet the most important compliance standards and regulations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                <p className="text-gray-300">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Compliance Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven compliance approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our compliance experts to discuss your requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;