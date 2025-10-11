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
    };
  ];
  const purposes = [
    {;
    };
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

  return (
    <>
      <Helmet>
        </Helmet><title>Privacy Policy - Zion Tech Group</title>
    }
  ]
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy Policy
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          <div className="flex items-center justify-center text-sm text-blue-200">
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction
              <p className="text-gray-700 leading-relaxed mb-4">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              <p className="text-gray-700 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy.
            {/* Information We Collect */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect
              <div className="grid md:grid-cols-3 gap-6">
                {dataTypes.map((type, index) => (</div>}
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <type.icon className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">{type.category}
                    <p className="text-gray-700 mb-3">{type.description}
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.examples.map((example, idx) => (;}
                        <li key={idx}>• {example}
                      ))}
                ))}
            {/* How We Use Information */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information
              <div className="grid md:grid-cols-2 gap-6">
                {purposes.map((purpose, index) => (</div>}
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <purpose.icon className="h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{purpose.title}
                      <p className="text-gray-700">{purpose.description}
                ))}
            {/* Data Security */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Measures
                    <p className="text-gray-700 mb-4">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    <ul className="text-gray-700 space-y-2">
                      <li>• Encryption of data in transit and at rest
                      <li>• Regular security audits and assessments
                      <li>• Access controls and authentication systems
                      <li>• Employee training on data protection
            {/* Your Rights */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights
              <div className="grid md:grid-cols-2 gap-6">
                {rights.map((right, index) => (</div>}
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <right.icon className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">{right.title}
                    <p className="text-gray-700">{right.description}
                ))}
            {/* Contact Information */}
            <section className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">privacy@ziontechgroup.com
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">(302) 464-0950
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">ziontechgroup.com
                <div className="flex items-center">
                  <User className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Zion Tech Group Privacy Team
            {/* Updates */}
            <section>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Policy Updates
                    <p className="text-gray-700">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
  )
}
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></p></p></p></p></p></p></p></p></p></p></h1></h2></h2></h2></h2></h2></h2></h3></h3></h3></h3></h3></ul></ul></li></li></li></li></li></section></section></section></section></section></section></section>
