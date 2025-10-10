'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information you provide directly to us (name, email, phone number)',
        'Information collected automatically (IP address, browser type, device information)',
        'Cookies and similar tracking technologies',
        'Usage data and analytics information'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our services',
        'To communicate with you about our products and services',
        'To process transactions and send related information',
        'To personalize your experience and provide relevant content',
        'To analyze usage patterns and improve our website'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share information with trusted service providers who assist us in operating our website',
        'We may disclose information when required by law or to protect our rights',
        'We may share aggregated, non-personal information for business purposes'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We implement appropriate security measures to protect your personal information',
        'We use encryption and secure protocols for data transmission',
        'We regularly review and update our security practices',
        'We limit access to personal information to authorized personnel only'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Access: You can request access to your personal information we hold.',
        'Correction: You can request correction of inaccurate or incomplete information.',
        'Deletion: You can request deletion of your personal information, subject to legal obligations.',
        'Portability: You can request a copy of your data in a structured format.',
        'Opt-out: You can unsubscribe from marketing communications at any time.'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group collects, uses, and protects your personal information." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-300">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                  <ul className="space-y-4 text-gray-300">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:privacy@ziontechgroup.com"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPage;