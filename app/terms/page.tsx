import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

const TermsPage: React.FC = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using our website or services, you accept and agree to be bound by these terms',
        'If you do not agree to these terms, you may not use our services',
        'We reserve the right to modify these terms at any time without prior notice',
        'Your continued use of our services constitutes acceptance of any changes'
      ]
    },
    {
      icon: <Scale className="w-6 h-6 text-green-500" />,
      title: 'Use of Services',
      content: [
        'Our services are intended for legitimate business purposes only',
        'You may not use our services for any illegal or unauthorized activities',
        'You are responsible for maintaining the confidentiality of your account information',
        'You must provide accurate and complete information when using our services'
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Intellectual Property',
      content: [
        'All content, trademarks, and intellectual property on our website are owned by Zion Tech Group',
        'You may not reproduce, distribute, or modify our content without written permission',
        'Any feedback or suggestions you provide may be used by us without compensation',
        'You retain ownership of any content you provide to us, but grant us a license to use it'
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      title: 'Limitation of Liability',
      content: [
        'Our services are provided "as is" without warranties of any kind',
        'We are not liable for any indirect, incidental, or consequential damages',
        'Our total liability is limited to the amount you paid for our services',
        'Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read the terms of service for using Zion Tech Group's AI and IT solutions." />
        <meta name="keywords" content="terms of service, legal terms, user agreement, Zion Tech Group" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These terms govern your use of our website and services. Please read them carefully.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
            <p className="text-gray-300 mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and Zion Tech Group ("Company," "we," "our," or "us") regarding your use of our website, services, and any related applications.
            </p>
            <p className="text-gray-300">
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
            </p>
          </div>

          {/* Main Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-white ml-4">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-300">
                      <span className="text-blue-400 mr-3 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Terms */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Additional Terms</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Service Availability</h3>
                <p className="text-gray-300">
                  We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. We may temporarily suspend services for maintenance, updates, or other reasons.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Payment Terms</h3>
                <p className="text-gray-300">
                  Payment terms for our services are outlined in separate service agreements. All fees are non-refundable unless otherwise specified in writing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Termination</h3>
                <p className="text-gray-300">
                  We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Governing Law</h3>
                <p className="text-gray-300">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Dispute Resolution</h3>
                <p className="text-gray-300">
                  Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Severability</h3>
                <p className="text-gray-300">
                  If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
                <p className="text-gray-300">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-3 space-y-1">
                  <p className="text-gray-300">Email: legal@ziontechgroup.com</p>
                  <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
                  <p className="text-gray-300">Address: 123 Tech Street, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsPage;