'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Shield, FileText, Lock, Award, Users, Globe } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security Compliance',
      description: 'Comprehensive security frameworks including SOC 2, ISO 27001, and GDPR compliance.'
    },
    {
      icon: FileText,
      title: 'Regulatory Compliance',
      description: 'Stay compliant with industry regulations and standards across different sectors.'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Advanced data protection measures to safeguard sensitive information and privacy.'
    },
    {
      icon: Award,
      title: 'Certification Support',
      description: 'Expert guidance and support for obtaining and maintaining compliance certifications.'
    }
  ];

  const benefits = [
    'SOC 2 Type II certified',
    'ISO 27001 compliance',
    'GDPR and CCPA compliant',
    'HIPAA ready infrastructure',
    'Regular security audits',
    'Compliance monitoring and reporting',
    'Expert compliance consulting',
    'Automated compliance checks'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Compliance | Zion Tech Group</title>
        <meta name="description" content="Comprehensive compliance solutions by Zion Tech Group. Security, regulatory, and data protection compliance for your business." />
        <meta name="keywords" content="compliance, security compliance, regulatory compliance, data protection, SOC 2, ISO 27001, GDPR" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Compliance
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive compliance solutions to help your business meet regulatory requirements, 
            security standards, and data protection regulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive compliance solutions designed to meet your regulatory and security requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Compliance Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven compliance solutions and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our compliance experts to discuss your requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Shield className="mr-2 h-5 w-5" />
                Start Compliance Assessment
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                Contact Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;