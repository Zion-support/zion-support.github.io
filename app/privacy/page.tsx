'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';
  
  const dataTypes = [
    {
      category: 'Personal Information',
      icon: User,
      items: [
        'Name and contact information',
        'Email address and phone number',
        'Company and job title',
        'Account credentials'
      ]
    },
    {
      category: 'Usage Data',
      icon: Eye,
      items: [
        'Website usage patterns',
        'Pages visited and time spent',
        'Click-through rates',
        'Device and browser information'
      ]
    },
    {
      category: 'Technical Data',
      icon: Server,
      items: [
        'IP address and location data',
        'Browser type and version',
        'Operating system information',
        'Cookies and tracking technologies'
      ]
    },
    {
      category: 'Communication Data',
      icon: Mail,
      items: [
        'Email communications',
        'Support tickets and inquiries',
        'Survey responses',
        'Feedback and testimonials'
      ]
    }
  ];

  const purposes = [
    {
      title: 'Service Delivery',
      icon: CheckCircle,
      description: 'To provide and maintain our AI and IT services, process transactions, and fulfill contractual obligations.'
    },
    {
      title: 'Communication',
      icon: Mail,
      description: 'To respond to inquiries, send important updates, and provide customer support.'
    },
    {
      title: 'Improvement',
      icon: Database,
      description: 'To analyze usage patterns, improve our services, and develop new features.'
    },
    {
      title: 'Marketing',
      icon: Globe,
      description: 'To send promotional materials, newsletters, and relevant business communications (with consent).'
    },
    {
      title: 'Legal Compliance',
      icon: Shield,
      description: 'To comply with legal obligations, protect our rights, and ensure security.'
    },
    {
      title: 'Analytics',
      icon: Eye,
      description: 'To understand user behavior, measure performance, and optimize user experience.'
    }
  ];

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data and information about how it is processed.'
    },
    {
      title: 'Rectification',
      description: 'Request correction of inaccurate or incomplete personal data.'
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data under certain circumstances.'
    },
    {
      title: 'Portability',
      description: 'Request a copy of your data in a structured, machine-readable format.'
    },
    {
      title: 'Restriction',
      description: 'Request restriction of processing of your personal data.'
    },
    {
      title: 'Objection',
      description: 'Object to processing of your personal data for marketing purposes.'
    }
  ];

  const securityMeasures = [
    'Encryption of data in transit and at rest',
    'Regular security audits and assessments',
    'Access controls and authentication systems',
    'Employee training on data protection',
    'Incident response and breach notification procedures',
    'Regular backups and disaster recovery plans'
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'privacy@ziontechgroup.com',
      href: 'mailto:privacy@ziontechgroup.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: Calendar,
      label: 'Business Hours',
      value: 'Mon-Fri 9AM-6PM EST',
      href: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection and Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Read our comprehensive privacy policy." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal data, privacy rights, data security" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information 
                when you use our website and services.
              </p>
              <div className="flex items-center justify-center text-sm text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We collect various types of information to provide and improve our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataTypes.map((dataType, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <dataType.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4">{dataType.category}</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {dataType.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Usage */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We use your information for various legitimate business purposes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {purposes.map((purpose, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <purpose.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-3">{purpose.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{purpose.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Your Privacy Rights</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                You have certain rights regarding your personal data under applicable privacy laws.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rights.map((right, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{right.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We implement comprehensive security measures to protect your personal information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <Lock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{measure}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Questions About Privacy?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                If you have any questions about this privacy policy or your data rights, please contact us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{contact.label}</h3>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{contact.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're committed to protecting your privacy while delivering exceptional AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPage;