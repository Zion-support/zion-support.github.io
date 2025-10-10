'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Shield, FileCheck, Lock, Users, AlertTriangle, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePage: React.FC = () => {
  const features = [
    {
      title: 'Regulatory Compliance',
      description: 'Ensure your business meets all regulatory requirements and standards',
      benefits: ['GDPR compliance', 'HIPAA compliance', 'SOX compliance', 'Industry standards']
    },
    {
      title: 'Security Audits',
      description: 'Comprehensive security audits to identify and address vulnerabilities',
      benefits: ['Vulnerability assessment', 'Penetration testing', 'Security monitoring', 'Incident response']
    },
    {
      title: 'Documentation Management',
      description: 'Streamline compliance documentation and reporting processes',
      benefits: ['Automated reporting', 'Document tracking', 'Audit trails', 'Compliance dashboards']
    }
  ];

  const benefits = [
    'Reduce compliance risks and penalties',
    'Streamline audit processes',
    'Improve security posture',
    'Automate compliance reporting',
    'Ensure regulatory adherence',
    'Protect sensitive data'
  ];

  const complianceStandards = [
    {
      icon: Shield,
      title: 'GDPR',
      description: 'General Data Protection Regulation compliance'
    },
    {
      icon: Lock,
      title: 'HIPAA',
      description: 'Healthcare data protection standards'
    },
    {
      icon: FileCheck,
      title: 'SOX',
      description: 'Sarbanes-Oxley Act compliance'
    },
    {
      icon: Award,
      title: 'ISO 27001',
      description: 'Information security management'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Compliance | Zion Tech Group</title>
        <meta name="description" content="Comprehensive compliance solutions by Zion Tech Group. Ensure regulatory adherence and security compliance." />
        <meta name="keywords" content="compliance, regulatory compliance, security audit, GDPR, HIPAA, SOX, Zion Tech Group" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Compliance Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ensure your business meets all regulatory requirements with our comprehensive compliance solutions. 
            Stay secure and compliant with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Compliance Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive compliance solutions to keep your business secure and compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help you meet various industry compliance standards and regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{standard.title}</h3>
                <p className="text-gray-300">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Choose Our Compliance Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with us to ensure your business stays compliant and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Ensure Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve and maintain compliance with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                Start Compliance Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompliancePage;