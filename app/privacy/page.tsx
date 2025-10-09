'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'December 8, 2024';

  const dataTypes = [
    {
      icon: UserCheck,
      title: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      examples: ['Contact details', 'Business information', 'Communication preferences']
    },
    {
      icon: Database,
      title: 'Usage Data',
      description: 'Information about how you use our website and services',
      examples: ['Page views', 'Time spent on site', 'Features used', 'Device information']
    },
    {
      icon: Eye,
      title: 'Technical Data',
      description: 'IP address, browser type, operating system, and device information',
      examples: ['IP addresses', 'Browser information', 'Device specifications', 'Location data']
    },
    {
      icon: Lock,
      title: 'AI Training Data',
      description: 'Anonymized data used to improve our AI models and services',
      examples: ['Usage patterns', 'Performance metrics', 'Anonymized user interactions']
    }
  ];

  const rights = [
    {
      title: 'Right to Access',
      description: 'You can request a copy of the personal data we hold about you',
      icon: Eye
    },
    {
      title: 'Right to Rectification',
      description: 'You can ask us to correct any inaccurate or incomplete data',
      icon: UserCheck
    },
    {
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data in certain circumstances',
      icon: AlertTriangle
    },
    {
      title: 'Right to Portability',
      description: 'You can request your data in a structured, machine-readable format',
      icon: Database
    },
    {
      title: 'Right to Object',
      description: 'You can object to processing of your data for certain purposes',
      icon: Shield
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You can ask us to limit how we process your data',
      icon: Lock
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our commitment to data protection and your rights." />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, personal data, privacy rights, data security" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Your Privacy is Our Priority
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">GDPR Compliant</h3>
              <p className="text-gray-300 text-sm">Fully compliant with European data protection regulations</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">Bank-level security for all your personal data</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Transparent</h3>
              <p className="text-gray-300 text-sm">Clear and honest about how we use your data</p>
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Information We Collect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-4">
                  <type.icon className="w-8 h-8 text-cyan-400 mr-4" />
                  <h3 className="text-xl font-bold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            How We Use Your Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">Service Delivery</h3>
              <p className="text-gray-300 text-sm mb-4">
                To provide, maintain, and improve our AI and IT services
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Process your requests</li>
                <li>• Deliver our services</li>
                <li>• Provide customer support</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">Communication</h3>
              <p className="text-gray-300 text-sm mb-4">
                To communicate with you about our services and updates
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Send service updates</li>
                <li>• Respond to inquiries</li>
                <li>• Share important notices</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">AI Improvement</h3>
              <p className="text-gray-300 text-sm mb-4">
                To improve our AI models and services (anonymized data only)
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Train AI models</li>
                <li>• Improve accuracy</li>
                <li>• Enhance performance</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">Security</h3>
              <p className="text-gray-300 text-sm mb-4">
                To protect our services and prevent fraud
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Monitor for abuse</li>
                <li>• Detect security threats</li>
                <li>• Prevent fraud</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">Legal Compliance</h3>
              <p className="text-gray-300 text-sm mb-4">
                To comply with legal obligations and regulations
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Meet legal requirements</li>
                <li>• Respond to legal requests</li>
                <li>• Maintain records</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">Analytics</h3>
              <p className="text-gray-300 text-sm mb-4">
                To understand how our services are used and improve them
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Analyze usage patterns</li>
                <li>• Improve user experience</li>
                <li>• Optimize performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            How We Protect Your Data
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Technical Safeguards</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                  <span>End-to-end encryption for all data transmission</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                  <span>Secure data centers with 24/7 monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                  <span>Regular security audits and penetration testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                  <span>Multi-factor authentication for all systems</span>
                </li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Organizational Measures</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                  <span>Strict access controls and role-based permissions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                  <span>Regular staff training on data protection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                  <span>Data minimization principles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                  <span>Incident response procedures</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Your Privacy Rights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <right.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{right.title}</h3>
                <p className="text-gray-300 text-sm">{right.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Retention */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Data Retention
          </h2>
          
          <div className="cyber-card hologram-card p-8">
            <p className="text-gray-300 text-lg mb-6 text-center">
              We retain your personal data only for as long as necessary to fulfill the purposes 
              outlined in this privacy policy, unless a longer retention period is required by law.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Retention Periods</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Account data</span>
                    <span className="text-cyan-400">Until account closure + 3 years</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Service usage data</span>
                    <span className="text-cyan-400">3 years</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Marketing data</span>
                    <span className="text-cyan-400">Until you opt out</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Legal compliance data</span>
                    <span className="text-cyan-400">As required by law</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Deletion Process</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                    <span>Secure deletion from all systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                    <span>Removal from backups within 30 days</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                    <span>Anonymization of aggregated data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                    <span>Confirmation of deletion provided</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card">
            <h2 className="text-2xl font-bold text-white text-center mb-8 neon-text">
              Questions About Your Privacy?
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              If you have any questions about this privacy policy or how we handle your personal data, 
              please don't hesitate to contact us. We're here to help and ensure your privacy is protected.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-cyan-400 font-medium">privacy@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">We'll respond within 48 hours</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
                <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Write Us</h3>
                <p className="text-cyan-400 font-medium">Middletown, DE</p>
                <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card hologram-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4 neon-text">
              Policy Updates
            </h2>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              We may update this privacy policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any material 
              changes by posting the new privacy policy on this page and updating the "Last Updated" date.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPage;