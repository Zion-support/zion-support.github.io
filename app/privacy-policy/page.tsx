'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  FileText,
  Users,
  Globe,
  Settings
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      content: [
        'Personal information you provide directly (name, email, phone number)',
        'Usage data and analytics information',
        'Device information and IP addresses',
        'Cookies and similar tracking technologies',
        'Communication records and support interactions'
      ]
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: <Settings className="w-6 h-6 text-blue-400" />,
      content: [
        'Provide and improve our services',
        'Process transactions and payments',
        'Send important service updates and notifications',
        'Respond to your inquiries and support requests',
        'Analyze usage patterns to enhance user experience'
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: <Users className="w-6 h-6 text-green-400" />,
      content: [
        'We do not sell your personal information to third parties',
        'We may share information with trusted service providers',
        'We may disclose information if required by law',
        'We may share aggregated, non-personal information',
        'We may share information in case of business transfers'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      content: [
        'We use industry-standard encryption to protect your data',
        'We implement strict access controls and monitoring',
        'We regularly update our security measures',
        'We conduct security audits and assessments',
        'We train our staff on data protection best practices'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: <CheckCircle className="w-6 h-6 text-purple-400" />,
      content: [
        'Right to access your personal information',
        'Right to correct inaccurate information',
        'Right to delete your personal information',
        'Right to restrict processing of your information',
        'Right to data portability and withdrawal of consent'
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      icon: <Eye className="w-6 h-6 text-orange-400" />,
      content: [
        'We use cookies to enhance your browsing experience',
        'You can control cookie settings in your browser',
        'We use analytics cookies to understand usage patterns',
        'We use functional cookies for essential website features',
        'We use marketing cookies with your consent'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn about how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy covers data collection, usage, and protection." />
        <meta name="keywords" content="privacy policy, data protection, privacy, personal information, zion tech group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Privacy Policy - Zion Tech Group" />
        <meta property="og:description" content="Learn about how Zion Tech Group protects your privacy and handles your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/privacy-policy" />
        <meta property="og:image" content="https://ziontechgroup.com/og-privacy-policy.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Zion Tech Group" />
        <meta name="twitter:description" content="Learn about how Zion Tech Group protects your privacy and handles your personal information." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-privacy-policy.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <FileText className="w-4 h-4" />
                  <span>Last updated: January 15, 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <span>Effective immediately</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-8 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">privacy@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+1 (302) 464-0950</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-white">364 E Main St STE 1008, Middletown, DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Sections */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    {section.icon}
                    <span className="ml-3">{section.title}</span>
                  </h2>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Important Notice</h2>
                  <p className="text-gray-300 mb-4">
                    This privacy policy may be updated from time to time. We will notify you of any material changes by posting the new privacy policy on this page and updating the "Last updated" date.
                  </p>
                  <p className="text-gray-300">
                    By using our services, you agree to the collection and use of information in accordance with this policy. If you have any questions about this privacy policy, please contact us using the information provided above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Questions About Your Privacy?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  We're here to help. Contact our privacy team if you have any questions or concerns about how we handle your personal information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Privacy Team
                  </Link>
                  <Link 
                    to="/terms-of-service" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}