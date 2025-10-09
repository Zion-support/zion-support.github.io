'use client';
import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users, Settings, Globe, Clock, Phone, Mail, MapPin } from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        'By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all visitors, users, and others who access or use the service.'
      ]
    },
    {
      title: 'Description of Service',
      icon: Settings,
      content: [
        'Zion Tech Group provides AI and IT solutions including but not limited to artificial intelligence services, cloud infrastructure, cybersecurity, and digital transformation services.',
        'We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice.',
        'We are not responsible for any loss or damage arising from the modification, suspension, or discontinuation of any part of our services.'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: Users,
      content: [
        'You are responsible for maintaining the confidentiality of your account and password.',
        'You agree to provide accurate, current, and complete information during registration.',
        'You are responsible for all activities that occur under your account.',
        'You must notify us immediately of any unauthorized use of your account or any other breach of security.',
        'You agree not to use the service for any unlawful purpose or any purpose prohibited under this clause.'
      ]
    },
    {
      title: 'Intellectual Property Rights',
      icon: Shield,
      content: [
        'The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors.',
        'The service is protected by copyright, trademark, and other laws.',
        'Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.',
        'You retain ownership of any content you submit, post, or display on or through the service.'
      ]
    },
    {
      title: 'Payment Terms',
      icon: Scale,
      content: [
        'Payment terms are as specified in your service agreement or invoice.',
        'All fees are non-refundable unless otherwise specified in writing.',
        'We reserve the right to change our fees at any time with 30 days notice.',
        'Late payments may result in service suspension or termination.',
        'You are responsible for all taxes associated with the service.'
      ]
    },
    {
      title: 'Service Level Agreement',
      icon: Clock,
      content: [
        'We strive to maintain 99.9% uptime for our services.',
        'Scheduled maintenance will be announced at least 48 hours in advance.',
        'We will provide support during business hours (9 AM - 6 PM EST, Monday - Friday).',
        'Emergency support is available 24/7 for critical issues.',
        'Service credits may be provided for downtime exceeding our SLA commitments.'
      ]
    },
    {
      title: 'Data Protection and Privacy',
      icon: Shield,
      content: [
        'We are committed to protecting your data and privacy in accordance with our Privacy Policy.',
        'We implement appropriate technical and organizational measures to protect your data.',
        'We comply with applicable data protection laws including GDPR and CCPA.',
        'You retain ownership of your data and can request its deletion at any time.',
        'We will not sell or share your personal data with third parties without your consent.'
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        'In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'Our total liability to you for any damages arising from or related to the service shall not exceed the amount you paid us in the 12 months preceding the claim.',
        'Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so the above limitations may not apply to you.'
      ]
    },
    {
      title: 'Termination',
      icon: FileText,
      content: [
        'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever.',
        'Upon termination, your right to use the service will cease immediately.',
        'All provisions of the terms which by their nature should survive termination shall survive termination.',
        'You may terminate your account at any time by contacting us.',
        'We will return or delete your data within 30 days of termination.'
      ]
    },
    {
      title: 'Governing Law',
      icon: Globe,
      content: [
        'These terms shall be interpreted and governed by the laws of the State of Delaware.',
        'Any disputes arising from these terms or the service shall be resolved in the courts of Delaware.',
        'If any provision of these terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.',
        'These terms constitute the entire agreement between you and Zion Tech Group regarding the service.'
      ]
    }
  ];

  const contactInfo = {
    email: 'legal@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Terms of Service
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
          <p className="text-gray-300 mb-4">
            Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website, 
            services, and any related applications (collectively, the "Service") operated by Zion Tech Group 
            ("us", "we", or "our").
          </p>
          <p className="text-gray-300">
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any 
            part of these terms, then you may not access the Service.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12 mb-16">
          {sections.map((section, index) => (
            <div key={index} className="cyber-card p-8">
              <div className="flex items-center mb-6">
                <section.icon className="w-8 h-8 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Prohibited Uses */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
            Prohibited Uses
          </h2>
          <p className="text-gray-300 mb-4">
            You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts. 
            You may not use our service in any manner that could damage, disable, overburden, or impair our servers or networks.
          </p>
          <p className="text-gray-300 mb-4">Specifically, you agree not to:</p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
              Violate any applicable laws or regulations
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
              Transmit any viruses, malware, or other harmful code
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
              Attempt to gain unauthorized access to our systems
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
              Use the service for any commercial purpose without our written consent
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
              Interfere with or disrupt the service or servers
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
              Collect or harvest any personally identifiable information
            </li>
          </ul>
        </div>

        {/* Indemnification */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
          <p className="text-gray-300 mb-4">
            You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and licensors, 
            and their employees, contractors, agents, officers and directors, from and against any and all claims, 
            damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <FileText className="w-6 h-6 text-cyan-400 mr-3" />
            Changes to Terms
          </h2>
          <p className="text-gray-300 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
          <p className="text-gray-300">
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </div>

        {/* Contact Information */}
        <div className="cyber-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Mail className="w-6 h-6 text-cyan-400 mr-3" />
            Contact Information
          </h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Email</div>
                <div className="text-gray-400 text-sm">{contactInfo.email}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Phone</div>
                <div className="text-gray-400 text-sm">{contactInfo.phone}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Address</div>
                <div className="text-gray-400 text-sm">{contactInfo.address}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;