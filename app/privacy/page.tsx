import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when contacting us or using our services',
        'Usage data and analytics to improve our website and services',
        'Cookies and similar technologies to enhance your browsing experience',
        'Information from third-party sources when legally permitted'
      ]
    },
    {
      icon: <Eye className="w-6 h-6 text-green-500" />,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our AI and IT services',
        'To communicate with you about our services and updates',
        'To analyze website usage and optimize performance',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Data Protection',
      content: [
        'We implement industry-standard security measures to protect your data',
        'Your information is encrypted in transit and at rest',
        'Access to personal data is restricted to authorized personnel only',
        'We regularly audit our security practices and update them as needed'
      ]
    },
    {
      icon: <Lock className="w-6 h-6 text-red-500" />,
      title: 'Your Rights',
      content: [
        'Access and review your personal information',
        'Request correction of inaccurate data',
        'Request deletion of your personal information',
        'Opt-out of marketing communications at any time'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, Zion Tech Group" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-300">
              By using our website or services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
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

          {/* Additional Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Additional Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Cookies and Tracking</h3>
                <p className="text-gray-300">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Third-Party Services</h3>
                <p className="text-gray-300">
                  We may use third-party services for analytics, marketing, and other business purposes. These services have their own privacy policies, and we encourage you to review them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Data Retention</h3>
                <p className="text-gray-300">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h3>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-3 space-y-1">
                  <p className="text-gray-300">Email: privacy@ziontechgroup.com</p>
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

export default PrivacyPage;