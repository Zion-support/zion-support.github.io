import React from 'react';
import { Shield, Eye, Lock, Database, User, Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: 'Information We Collect',
      content: [
        'Personal information you provide (name, email, phone number)',
        'Business information for service delivery',
        'Website usage data and analytics',
        'Communication records and support interactions',
        'Payment and billing information (processed securely)'
      ]
    },
    {
      icon: <Eye className="w-6 h-6 text-green-500" />,
      title: 'How We Use Your Information',
      content: [
        'Provide and improve our AI and IT services',
        'Process transactions and manage accounts',
        'Send important service updates and notifications',
        'Respond to inquiries and provide customer support',
        'Analyze usage patterns to enhance our services'
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Data Security',
      content: [
        'Industry-standard encryption for data transmission',
        'Secure servers with regular security audits',
        'Access controls and authentication protocols',
        'Regular backups and disaster recovery procedures',
        'Employee training on data protection best practices'
      ]
    },
    {
      icon: <Lock className="w-6 h-6 text-red-500" />,
      title: 'Your Rights',
      content: [
        'Access your personal data we hold',
        'Request correction of inaccurate information',
        'Request deletion of your personal data',
        'Object to processing of your data',
        'Data portability and withdrawal of consent'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group Privacy Policy - Learn how we collect, use, and protect your personal information and data." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, data security, Zion Tech Group" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-green-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

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
                      <span className="text-purple-400 mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Your Privacy?</h2>
            <p className="text-white/90 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Contact Us
              </Link>
              <Link 
                to="/terms" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;