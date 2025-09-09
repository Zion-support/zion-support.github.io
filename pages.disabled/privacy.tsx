import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const Privacy: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const privacySections = [;
    {
      icon: Database,;
      title: 'Information We Collect',;
      content: [;
        'Personal information you provide directly (name, email, phone number)',;
        'Usage data and analytics from our website and services',;
        'Technical information such as IP address, browser type, and device information',;
        'Communication records when you contact us for support or inquiries';
      ]},;
    {
      icon: Eye,;
      title: 'How We Use Your Information',;
      content: [;
        'To provide and improve our technology services',;
        'To communicate with you about our services and updates',;
        'To process transactions and manage your account',;
        'To comply with legal obligations and protect our rights';
      ]},;
    {
      icon: Lock,;
      title: 'Data Security',;
      content: [;
        'We implement industry-standard security measures to protect your data',;
        'All data transmission is encrypted using SSL/TLS protocols',;
        'Access to personal information is restricted to authorized personnel only',;
        'Regular security audits and updates to maintain data protection';
      ]},;
    {
      icon: UserCheck,;
      title: 'Your Rights',;
      content: [;
        'Right to access your personal information',;
        'Right to correct inaccurate or incomplete data',;
        'Right to request deletion of your personal information',;
        'Right to opt-out of marketing communications';
      ];

const Privacy: NextPage = () => {
  const privacyPrinciples = [;
    {
      icon: Shield,;
      title: 'Data Protection',;
      description: 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.'},;
    {
      icon: Eye,;
      title: 'Transparency',;
      description: 'We are transparent about what data we collect, how we use it, and with whom we share it. You have the right to know and control your data.'},;
    {
      icon: Lock,;
      title: 'Data Minimization',;
      description: 'We only collect the minimum amount of personal data necessary to provide our services and improve your experience.'},;
    {
      icon: Database,;
      title: 'Secure Storage',;
      description: 'Your data is stored securely using encryption and other security measures, and we regularly review and update our security practices.'}
  ];

  return (;
    <MainLayout;
      title="Privacy Policy - Zion Tech Group";
      description="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy outlines our data practices and your rights.";
      keywords="privacy policy, data protection, personal information, GDPR compliance, privacy rights">;
      <div className="min-h-screen bg-gray-50">;
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <Shield className="w-16 h-16 mx-auto mb-6 text-blue-400" />;
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>;
              <p className="text-xl text-gray-200 mb-4">;
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.;
              </p>;
              <p className="text-sm text-gray-300">Last updated: {lastUpdated}</p>;
            </div>;
          </div>;
        </section>;

      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> January 27, 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Zion Tech Group ("we", "our", or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6">Information We Collect</h2>
                <p className="mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company information</li>
                  <li>Payment information</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Usage Information</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>How you use our services</li>
                  <li>Device information</li>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 mt-12">How We Use Your Information</h2>
                <p className="mb-6">
                  We use the information we collect to provide, maintain, and improve our services.
                </p>
                
                <ul className="list-disc pl-6 mb-6">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                  <li>Monitor and analyze usage and trends</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 mt-12">Information Sharing</h2>
                <p className="mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Data Security</h2>
                <p className="mb-6">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Your Rights</h2>
                <p className="mb-6">
                  You have the right to access, update, or delete your personal information. You may also 
                  opt out of certain communications from us.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Contact Us</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-start">
                    <User className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p>Zion Tech Group</p>
                      <p>364 E Main St STE 1008</p>
                      <p>Middletown, DE 19709</p>
                    </div>
                  </div>
                </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">7. International Data Transfers</h2>;
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">;
                <p className="text-gray-600">;
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.;
                </p>;
              </div>;

              <h2 className="text-3xl font-bold mb-6 text-gray-800">8. Changes to This Policy</h2>;
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">;
                <p className="text-gray-600">;
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.;
                </p>;
              </div>;

              <h2 className="text-3xl font-bold mb-6 text-gray-800">9. Contact Us</h2>;
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">;
                <p className="text-gray-600 mb-4">;
                  If you have any questions about this privacy policy or our data practices, please contact us:;
                </p>;
                <div className="space-y-3">;
                  <div className="flex items-center space-x-3">;
                    <Mail className="w-5 h-5 text-blue-600" />;
                    <span className="text-gray-600">kleber@ziontechgroup.com</span>;
                  </div>;
                  <div className="flex items-center space-x-3">;
                    <Phone className="w-5 h-5 text-blue-600" />;
                    <span className="text-gray-600">+1 302 464 0950</span>;
                  </div>;
                  <div className="text-gray-600">;
                    <strong>Address:</strong><br />;
                    Zion Tech Group<br />;
                    364 E Main St STE 1008<br />;
                    Middletown, DE 19709;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
            </div>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  )}
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';

const Privacy: NextPage = () => {
  const lastUpdated = "January 1, 2025";
  )}

}}