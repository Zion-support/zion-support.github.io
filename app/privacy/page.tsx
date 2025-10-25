'use client';
import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, FileText, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.',
        'We collect information about your use of our services, including device information, IP address, browser type, and usage patterns.',
        'We may collect information from third-party sources, such as social media platforms, when you choose to connect your accounts.'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'To provide, maintain, and improve our services and customer support.',
        'To process transactions and send related information, including confirmations and invoices.',
        'To send technical notices, updates, security alerts, and support messages.',
        'To respond to your comments, questions, and requests and provide customer service.',
        'To monitor and analyze trends, usage, and activities in connection with our services.'
      ]
    },
    {
      title: 'Information Sharing',
      icon: UserCheck,
      content: [
        'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.',
        'We may share your information with service providers who assist us in operating our website, conducting our business, or serving our users.',
        'We may disclose your information if required to do so by law or in response to valid requests by public authorities.',
        'We may share your information in connection with any merger, sale of company assets, or acquisition of all or a portion of our business.'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'We use industry-standard encryption to protect sensitive information during transmission and storage.',
        'We regularly review our data collection, storage, and processing practices to ensure we only collect and store necessary information.',
        'However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.'
      ]
    },
    {
      title: 'Your Rights',
      icon: Shield,
      content: [
        'You have the right to access, update, or delete your personal information.',
        'You can opt out of receiving promotional communications from us by following the unsubscribe instructions in those messages.',
        'You can request a copy of your personal data in a structured, machine-readable format.',
        'You can object to the processing of your personal information for certain purposes.',
        'You can withdraw your consent at any time where we rely on consent to process your personal information.'
      ]
    },
    {
      title: 'Cookies and Tracking',
      icon: FileText,
      content: [
        'We use cookies and similar tracking technologies to collect and use personal information about you.',
        'Cookies are small data files that are placed on your device when you visit our website.',
        'We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until you delete them).',
        'You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.'
      ]
    },
    {
      title: 'Data Retention',
      icon: Database,
      content: [
        'We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy.',
        'We may retain certain information for longer periods for legitimate business purposes, such as fraud prevention and compliance with legal obligations.',
        'When we no longer need your personal information, we will securely delete or anonymize it.'
      ]
    },
    {
      title: 'Children\'s Privacy',
      icon: UserCheck,
      content: [
        'Our services are not intended for children under 13 years of age.',
        'We do not knowingly collect personal information from children under 13.',
        'If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.',
        'If you are a parent or guardian and believe your child has provided us with personal information, please contact us.'
      ]
    },
    {
      title: 'Changes to This Policy',
      icon: FileText,
      content: [
        'We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.',
        'We will notify you of any material changes by posting the new privacy policy on this page and updating the "Last Updated" date.',
        'Your continued use of our services after any changes constitutes your acceptance of the updated privacy policy.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Privacy Policy - Zion Tech Group"
        description="Learn how we collect, use, and protect your personal information when you use our AI, cloud, and cybersecurity services."
        keywords={["privacy policy","data protection","personal information","GDPR","privacy rights","Zion Tech Group"]}
        canonicalUrl="https://ziontechgroup.com/privacy"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {lastUpdated}
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Questions About Your Privacy?
              </h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this privacy policy or our data practices, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Email Privacy Team
                </a>
                <a
                  href="tel:+1-302-464-0950"
                  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;