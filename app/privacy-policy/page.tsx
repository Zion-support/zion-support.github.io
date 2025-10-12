import React from 'react';
import { Shield, Lock, Eye, Database, Mail, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: <Database className="w-6 h-6 text-blue-500" />,
      content: [
        'Personal Information: Name, email address, phone number, company information, and other details you provide when contacting us or using our services.',
        'Usage Data: Information about how you use our website, including pages visited, time spent, and interactions with our content.',
        'Technical Data: IP address, browser type, device information, and other technical details collected automatically.',
        'Cookies: We use cookies and similar technologies to enhance your experience and analyze website usage.'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: <Eye className="w-6 h-6 text-green-500" />,
      content: [
        'Service Delivery: To provide and maintain our AI and IT services, respond to inquiries, and fulfill contracts.',
        'Communication: To send you updates about our services, respond to your questions, and provide customer support.',
        'Improvement: To analyze usage patterns and improve our website, services, and user experience.',
        'Marketing: To send you relevant information about our services, with your consent where required by law.',
        'Legal Compliance: To comply with applicable laws, regulations, and legal processes.'
      ]
    },
    {
      title: 'Information Sharing',
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      content: [
        'We do not sell, trade, or rent your personal information to third parties.',
        'We may share information with trusted service providers who assist us in operating our website and providing services.',
        'We may disclose information when required by law or to protect our rights and the rights of others.',
        'In the event of a business transfer, your information may be transferred as part of the assets.'
      ]
    },
    {
      title: 'Data Security',
      icon: <Lock className="w-6 h-6 text-red-500" />,
      content: [
        'We implement appropriate technical and organizational measures to protect your personal information.',
        'We use encryption, secure servers, and other security measures to safeguard your data.',
        'While we strive to protect your information, no method of transmission over the internet is 100% secure.',
        'We regularly review and update our security practices to maintain the highest standards.'
      ]
    },
    {
      title: 'Your Rights',
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      content: [
        'Access: You have the right to request access to your personal information.',
        'Correction: You can request correction of inaccurate or incomplete information.',
        'Deletion: You may request deletion of your personal information, subject to certain exceptions.',
        'Portability: You have the right to receive your data in a structured, machine-readable format.',
        'Objection: You can object to certain processing of your personal information.',
        'Withdrawal: You can withdraw consent for marketing communications at any time.'
      ]
    },
    {
      title: 'Cookies and Tracking',
      icon: <Eye className="w-6 h-6 text-cyan-500" />,
      content: [
        'We use cookies to enhance your browsing experience and analyze website traffic.',
        'Essential cookies are necessary for the website to function properly.',
        'Analytics cookies help us understand how visitors use our website.',
        'Marketing cookies are used to deliver relevant advertisements.',
        'You can control cookie settings through your browser preferences.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group collects, uses, and protects your personal information. Our comprehensive privacy policy explains your rights and our data practices." />
        <meta name="keywords" content="privacy policy, data protection, personal information, Zion Tech Group, GDPR, data security" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: January 15, 2024
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website or use our services.
            </p>
            <p className="text-gray-300">
              By using our website or services, you consent to the data practices described in this policy. 
              If you do not agree with the terms of this policy, please do not use our website or services.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-white ml-4">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">privacy@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-3" />
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
              legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website 
              and updating the "Last updated" date.
            </p>
            <p className="text-gray-300">
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;