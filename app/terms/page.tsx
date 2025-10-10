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
      content: 'We strive to maintain 99.9% uptime for our services, but we do not guarantee uninterrupted access and reserve the right to perform maintenance.'
    },
    {
      title: 'User Accounts',
      icon: User,
      content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.'
    },
    {
      title: 'Data Protection',
      icon: Shield,
      content: 'We implement industry-standard security measures to protect your data and comply with applicable data protection regulations.'
    },
    {
      title: 'Intellectual Property',
      icon: Lock,
      content: 'All content, trademarks, and intellectual property on our website and services are owned by Zion Tech Group or our licensors.'
    },
    {
      title: 'Payment Terms',
      icon: Database,
      content: 'Payment for services is due in advance. We reserve the right to suspend services for non-payment after appropriate notice.'
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: 'In no event shall Zion Tech Group be liable for any indirect, incidental, special, consequential, or punitive damages.'
    }
  ];

  const contactInfo = [
    {
      title: 'Email',
      value: 'legal@ziontechgroup.com',
      icon: Mail,
      link: 'mailto:legal@ziontechgroup.com'
    },
    {
      title: 'Phone',
      value: '+1 (302) 464-0950',
      icon: Phone,
      link: 'tel:+13024640950'
    },
    {
      title: 'Address',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      icon: Globe,
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008,+Middletown+DE+19709'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service | Zion Tech Group - Legal Terms & Conditions</title>
        <meta name="description" content="Read our terms of service and legal conditions for using Zion Tech Group's AI and IT solutions. Understand your rights and responsibilities." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, terms and conditions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms carefully before using our services. By using our website and services, 
                you agree to be bound by these terms and conditions.
              </p>
              <div className="text-sm text-gray-400">
                Last updated: {lastUpdated}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-invert max-w-none">
            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service ("Terms") govern your use of our website and services operated by Zion Tech Group ("us", "we", or "our"). By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8 mb-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                    <section.icon className="w-6 h-6 mr-3 text-cyan-400" />
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Additional Terms */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-cyan-400" />
                Additional Terms
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Modifications</h3>
                  <p className="text-gray-300">
                    We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on our website and updating the "Last Updated" date.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Governing Law</h3>
                  <p className="text-gray-300">
                    These terms shall be governed by and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Severability</h3>
                  <p className="text-gray-300">
                    If any provision of these terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Entire Agreement</h3>
                  <p className="text-gray-300">
                    These terms constitute the entire agreement between you and Zion Tech Group regarding the use of our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-cyan-400" />
                Contact Information
              </h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
                    <a
                      href={contact.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;