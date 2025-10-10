'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Server, Key } from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';
  
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: 'Use License',
      icon: Key,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.'
    },
    {
      title: 'Service Availability',
      icon: Server,
      content: 'We strive to maintain high service availability but do not guarantee uninterrupted access. Scheduled maintenance will be announced in advance.'
    },
    {
      title: 'User Responsibilities',
      icon: User,
      content: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.'
    },
    {
      title: 'Prohibited Uses',
      icon: AlertTriangle,
      content: 'You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts, or to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.'
    },
    {
      title: 'Intellectual Property',
      icon: FileText,
      content: 'The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors.'
    },
    {
      title: 'Privacy Policy',
      icon: Shield,
      content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.'
    },
    {
      title: 'Termination',
      icon: Lock,
      content: 'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever.'
    },
    {
      title: 'Disclaimer',
      icon: AlertTriangle,
      content: 'The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms.'
    },
    {
      title: 'Limitation of Liability',
      icon: Scale,
      content: 'In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.'
    },
    {
      title: 'Governing Law',
      icon: Scale,
      content: 'These terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States.'
    }
  ];

  const contactInfo = {
    email: 'legal@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service. Understand your rights and responsibilities when using our AI and IT services." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, legal terms, service agreement" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text-enhanced">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              These terms and conditions outline the rules and regulations for the use of Zion Tech Group's website and services.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
              <Globe className="w-4 h-4" />
              <span>Effective immediately</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              These Terms of Service ("Terms") govern your use of our website located at ziontechgroup.com (the "Service") operated by Zion Tech Group ("us", "we", or "our").
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8 mb-12">
            {sections.map((section, index) => (
              <div key={index} className="cyber-card-enhanced p-8">
                <div className="flex items-start mb-4">
                  <section.icon className="w-8 h-8 text-cyan-400 mr-4 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                    <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service-Specific Terms */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Service-Specific Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Database className="w-6 h-6 text-cyan-400 mr-3" />
                  AI Services
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>AI services are provided "as is" and may not be 100% accurate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Users are responsible for reviewing AI-generated content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Data used to train AI models may be anonymized and used for improvement</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Server className="w-6 h-6 text-green-400 mr-3" />
                  IT Services
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Service level agreements (SLAs) are defined in separate contracts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Clients must provide necessary access and credentials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Emergency support is available 24/7 for critical issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Billing</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Invoices are generated monthly or as per service agreement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Payment is due within 30 days of invoice date</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Late payments may incur additional fees</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Refunds</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Refunds are considered on a case-by-case basis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Service credits may be offered instead of refunds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Refund requests must be submitted within 30 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Indemnification */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Indemnification</h2>
            <p className="text-gray-300 mb-6">
              You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
            </p>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Your Indemnification Obligations Include:</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Your use and access of the Service</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Your violation of any term of these Terms</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Your violation of any third party right, including without limitation any copyright, property, or privacy right</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Any claim that your content caused damage to a third party</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Severability */}
          <div className="cyber-card-enhanced p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Severability</h2>
            <p className="text-gray-300 mb-6">
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
            </p>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Changes to Terms</h3>
              <p className="text-gray-300 text-sm">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;