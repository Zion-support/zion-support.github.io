'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Database, Shield, Users, Eye } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.',
        'We automatically collect certain information about your device and usage of our services, including your IP address, browser type, and pages visited.',
        'We may collect information from third-party sources, such as social media platforms, when you choose to connect your accounts.'
      ]
    },
    {
      icon: Users,
      title: 'How We Use Your Information',
      content: [
        'To provide, maintain, and improve our services and customer support.',
        'To process transactions and send related information, including confirmations and invoices.',
        'To send technical notices, updates, security alerts, and support messages.',
        'To respond to your comments, questions, and requests and provide customer service.'
      ]
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.',
        'We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you.',
        'We may release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others\' rights, property, or safety.'
      ]
    },
    {
      icon: Eye,
      title: 'Data Security',
      content: [
        'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'We use industry-standard encryption to protect sensitive information transmitted online.',
        'We regularly review our data collection, storage, and processing practices to ensure we only collect, store, and process the minimum amount of data necessary.'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Zion Tech Group - Data Protection & Privacy</title>
        <meta name="description" content="Learn about how Zion Tech Group collects, uses, and protects your personal information. Read our comprehensive privacy policy." />
        <meta name="keywords" content="privacy policy, data protection, personal information, data security, privacy rights" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      {section.content.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Your Rights
                </h3>
                <p className="text-green-800 mb-4">
                  You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
                </p>
                <p className="text-green-800">
                  To exercise these rights, please contact us at privacy@ziontechgroup.com.
                </p>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Contact Information
                </h3>
                <p className="text-blue-800">
                  If you have any questions about this Privacy Policy, please contact us at privacy@ziontechgroup.com.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're committed to protecting your privacy. Contact us if you have any questions or concerns.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPage;