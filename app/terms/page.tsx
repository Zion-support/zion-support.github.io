'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const TermsPage: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      icon: Scale,
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on Zion Tech Group\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.'
    },
    {
      icon: Shield,
      title: 'Privacy Policy',
      content: 'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. Please review our Privacy Policy, which also governs your use of the service.'
    },
    {
      icon: AlertTriangle,
      title: 'Disclaimer',
      content: 'The materials on Zion Tech Group\'s website are provided on an \'as is\' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    }
  ];

  const terms = [
    {
      title: '1. Service Description',
      content: 'Zion Tech Group provides AI and IT solutions including but not limited to artificial intelligence services, cloud infrastructure, cybersecurity solutions, web development, and mobile application development.'
    },
    {
      title: '2. User Responsibilities',
      content: 'Users are responsible for providing accurate information, maintaining the confidentiality of their account credentials, and using our services in compliance with applicable laws and regulations.'
    },
    {
      title: '3. Intellectual Property',
      content: 'All content, trademarks, and intellectual property on this website are owned by Zion Tech Group or its licensors. Users may not reproduce, distribute, or create derivative works without written permission.'
    },
    {
      title: '4. Payment Terms',
      content: 'Payment terms are as specified in individual service agreements. Late payments may result in service suspension. Refunds are subject to our refund policy as outlined in the service agreement.'
    },
    {
      title: '5. Limitation of Liability',
      content: 'In no event shall Zion Tech Group be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.'
    },
    {
      title: '6. Termination',
      content: 'We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.'
    },
    {
      title: '7. Governing Law',
      content: 'These Terms shall be interpreted and governed by the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Delaware.'
    },
    {
      title: '8. Changes to Terms',
      content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service | Zion Tech Group</title>
        <meta name="description" content="Read our Terms of Service to understand the terms and conditions for using our AI and IT solutions. Learn about your rights and responsibilities." />
        <meta name="keywords" content="terms of service, terms and conditions, legal terms, user agreement" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these Terms of Service carefully before using our services. By using our services, you agree to be bound by these terms.
              </p>
              <div className="text-sm text-gray-400">
                Last updated: January 1, 2024
              </div>
            </div>
          </div>
        </section>

        {/* Key Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Terms
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Important information about using our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <section.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                  <p className="text-gray-600 text-sm">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Terms */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Detailed Terms
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Complete terms and conditions for using our services.
              </p>
            </div>
            
            <div className="space-y-8">
              {terms.map((term, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{term.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{term.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300 flex items-center justify-center">
                  Contact Legal Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default TermsPage;