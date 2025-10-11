'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, Users, Mail, Phone, Calendar } from 'lucide-react';

interface Section {
  icon: any;
  title: string;
  content: string[];
}

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'December 2024';

  const sections: Section[] = [
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
      title: 'Data Protection',
      content: [
        'Security Measures: We implement appropriate technical and organizational measures to protect your personal information.',
        'Data Encryption: Sensitive data is encrypted both in transit and at rest.',
        'Access Controls: Access to personal information is restricted to authorized personnel only.',
        'Regular Audits: We conduct regular security audits and assessments to ensure data protection.'
      ]
    },
    {
      icon: Lock,
      title: 'Your Rights',
      content: [
        'Access: You have the right to request access to your personal information.',
        'Correction: You can request correction of inaccurate or incomplete data.',
        'Deletion: You have the right to request deletion of your personal information.',
        'Portability: You can request a copy of your data in a portable format.',
        'Objection: You can object to certain processing of your personal information.'
      ]
    },
    {
      icon: Eye,
      title: 'Cookies and Tracking',
      content: [
        'Essential Cookies: Necessary for website functionality and security.',
        'Analytics Cookies: Help us understand how visitors interact with our website.',
        'Marketing Cookies: Used to deliver relevant advertisements and marketing content.',
        'Cookie Management: You can control cookie settings through your browser preferences.'
      ]
    },
    {
      icon: Mail,
      title: 'Contact Information',
      content: [
        'Email: privacy@ziontechgroup.com',
        'Phone: +1 (302) 464-0950',
        'Address: 123 Tech Street, Innovation District, San Francisco, CA 94105',
        'Data Protection Officer: Available for privacy-related inquiries and concerns.'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information in accordance with applicable data protection laws." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, data security" />
      </Helmet>
      
      <div className="min-h-screen pt-16">
        <main className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Privacy <span className="text-cyan-400">Policy</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <div className="mt-6 text-sm text-gray-400">
                Last updated: {lastUpdated}
              </div>
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-8 border border-cyan-500/20">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Questions About Your Privacy?
                </h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about this privacy policy or how we handle your personal information, please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:privacy@ziontechgroup.com"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Contact Privacy Team
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PrivacyPage;