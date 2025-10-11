'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, Database, Users, Mail, Phone } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'December 2024';

  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal information you provide (name, email, phone number)',
        'Business information (company name, job title, industry)',
        'Usage data and analytics from our website and services',
        'Communication records and support interactions',
        'Technical information (IP address, browser type, device information)'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'Provide and improve our AI and IT services',
        'Communicate with you about our products and services',
        'Process your requests and provide customer support',
        'Send you relevant marketing communications (with your consent)',
        'Analyze usage patterns to improve our services',
        'Comply with legal obligations and protect our rights'
      ]
    },
    {
      title: 'Information Sharing',
      icon: Users,
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share information with trusted service providers who assist us in operating our business',
        'We may disclose information when required by law or to protect our rights',
        'We may share aggregated, non-personally identifiable information for business purposes',
        'In case of business transfers, your information may be transferred as part of the assets'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'We implement industry-standard security measures to protect your information',
        'All data is encrypted in transit and at rest',
        'We regularly update our security practices and conduct security audits',
        'Access to personal information is restricted to authorized personnel only',
        'We have incident response procedures in place for any security breaches'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Zion Tech Group - Data Protection & Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy outlines our data practices." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy rights, data security, personal information" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Last Updated: {lastUpdated}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Your Privacy Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Access & Portability</h3>
                  <p className="text-gray-300 text-sm">
                    You have the right to access your personal information and receive a copy in a portable format.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Correction</h3>
                  <p className="text-gray-300 text-sm">
                    You can request corrections to any inaccurate or incomplete personal information.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Deletion</h3>
                  <p className="text-gray-300 text-sm">
                    You have the right to request deletion of your personal information under certain circumstances.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Opt-out</h3>
                  <p className="text-gray-300 text-sm">
                    You can opt-out of marketing communications at any time by clicking unsubscribe links.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800/50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Questions About Your Privacy?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: (302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPage;