'use client';

import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Lock, 
  FileText, 
  Users,
  Target,
  DollarSign,
  Clock,
  Globe,
  Settings,
  BarChart3
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const GDPRPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'GDPR Compliance',
      description: 'Comprehensive GDPR compliance solutions for your business',
      features: ['Data protection', 'Privacy policies', 'Consent management', 'Compliance monitoring']
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Security',
      description: 'Advanced security measures to protect personal data',
      features: ['Data encryption', 'Access control', 'Audit logging', 'Breach prevention']
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: 'Privacy Documentation',
      description: 'Complete privacy documentation and policy management',
      features: ['Privacy policies', 'Data processing agreements', 'Consent forms', 'Documentation updates']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Data Subject Rights',
      description: 'Support for data subject rights and requests',
      features: ['Right to access', 'Right to rectification', 'Right to erasure', 'Data portability']
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: 'Full Compliance',
      description: 'Ensure full GDPR compliance with comprehensive solutions'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      title: 'Risk Mitigation',
      description: 'Reduce the risk of costly GDPR violations and penalties'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: 'Ongoing Support',
      description: 'Continuous support to maintain compliance as regulations evolve'
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: 'Data Protection',
      description: 'Protect personal data with advanced security measures'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group</title>
        <meta name="description" content="Comprehensive GDPR compliance solutions for your business. Data protection, privacy policies, and compliance management services." />
        <meta name="keywords" content="GDPR compliance, data protection, privacy policies, data security, compliance management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            GDPR
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Compliance</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive GDPR compliance solutions to protect personal data and ensure regulatory compliance. 
            From data protection to privacy policies, we help you meet GDPR requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
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
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              GDPR Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive GDPR compliance solutions to protect personal data and ensure regulatory compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our GDPR Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our GDPR compliance solutions provide the protection and compliance your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Ensure GDPR Compliance?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our GDPR compliance solutions can help you protect personal data and meet regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get GDPR Assessment
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Compliance Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPRPage;
