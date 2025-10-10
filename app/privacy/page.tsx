'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, Users, Mail, Phone, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'December 2024';

  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal Information: Name, email address, phone number, company information, and other contact details you provide when contacting us or using our services.',
        'Usage Data: Information about how you use our website and services, including pages visited, time spent, and interactions with our content.',
        'Technical Data: IP address, browser type, operating system, device information, and other technical details collected automatically.',
        'Cookies and Tracking: We use cookies and similar technologies to enhance your experience and analyze website performance.'
      ]
    },
    {
      icon: Users,
      title: 'How We Use Your Information',
      content: [
        'Service Delivery: To provide, maintain, and improve our AI and IT services.',
        'Communication: To respond to your inquiries, send service updates, and provide customer support.',
        'Marketing: To send you relevant information about our services, with your consent.',
        'Analytics: To analyze website usage and improve our services and user experience.',
        'Legal Compliance: To comply with applicable laws and regulations.'
      ]
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties.',
        'We may share information with trusted service providers who assist us in operating our business, subject to confidentiality agreements.',
        'We may disclose information when required by law or to protect our rights and safety.',
        'In case of business transfers, your information may be transferred as part of the business assets.'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your personal information.',
        'All data is encrypted in transit and at rest using advanced encryption technologies.',
        'We regularly review and update our security practices to maintain the highest standards.',
        'Access to personal information is restricted to authorized personnel only.'
      ]
    },
    {
      icon: Eye,
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
  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's privacy policy. Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <div className="mt-4 text-sm text-gray-400">
                Last updated: {lastUpdated}
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By using our website or services, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with the terms of this Privacy Policy, please do not use our services.
              </p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Cookies Section */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. 
                  Cookies are small data files stored on your device that help us remember your preferences and improve our services.
                </p>
                <p>
                  You can control cookie settings through your browser preferences. However, disabling cookies may affect 
                  the functionality of our website and services.
                </p>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Services</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may use third-party services for analytics, marketing, and other business purposes. These services 
                  may collect information about your use of our website and services.
                </p>
                <p>
                  We carefully select our third-party partners and ensure they comply with applicable privacy laws and 
                  maintain appropriate security measures.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">Data Retention</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                  Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <p>
                  When we no longer need your personal information, we will securely delete or anonymize it in accordance 
                  with our data retention policies.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">International Data Transfers</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">Children's Privacy</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                  information from children under 13. If we become aware that we have collected personal information from 
                  a child under 13, we will take steps to delete such information.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy 
                  Policy are effective when they are posted on this page.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-cyan-400 mt-1" />
                  <div className="text-gray-300">
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown, DE 19709</div>
                  </div>
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
