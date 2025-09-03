import React from 'react';
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const Privacy: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const privacySections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal information you provide directly (name, email, phone number)',
        'Usage data and analytics from our website and services',
        'Technical information such as IP address, browser type, and device information',
        'Communication records when you contact us for support or inquiries'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our technology services',
        'To communicate with you about our services and updates',
        'To process transactions and manage your account',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your data',
        'All data transmission is encrypted using SSL/TLS protocols',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and updates to maintain data protection'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Right to access your personal information',
        'Right to correct inaccurate or incomplete data',
        'Right to request deletion of your personal information',
        'Right to opt-out of marketing communications'
      ]
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Eye, Lock, Database, UserCheck, Globe } from 'lucide-react';
>>>>>>> main

const Privacy: NextPage = () => {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
<<<<<<< HEAD
      description: 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.'
=======
      description: 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.'
>>>>>>> main
    },
    {
      icon: Eye,
      title: 'Transparency',
<<<<<<< HEAD
      description: 'We are transparent about what data we collect, how we use it, and with whom we share it. You have the right to know and control your data.'
=======
      description: 'We are transparent about what data we collect, how we use it, and with whom we share it.'
>>>>>>> main
    },
    {
      icon: Lock,
      title: 'Data Minimization',
<<<<<<< HEAD
      description: 'We only collect the minimum amount of personal data necessary to provide our services and improve your experience.'
=======
      description: 'We only collect the data that is necessary for providing our services and improving your experience.'
>>>>>>> main
    },
    {
      icon: Database,
      title: 'Secure Storage',
<<<<<<< HEAD
      description: 'Your data is stored securely using encryption and other security measures, and we regularly review and update our security practices.'
=======
      description: 'Your data is stored securely using encryption and other security measures to prevent unauthorized access.'
    },
    {
      icon: UserCheck,
      title: 'User Control',
      description: 'You have control over your personal data, including the right to access, update, or delete your information.'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'We comply with applicable privacy laws and regulations, including GDPR, CCPA, and other regional requirements.'
>>>>>>> main
>>>>>>> main
    }
  ];

  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
<<<<<<< HEAD
      description="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy outlines our data practices and your rights."
      keywords="privacy policy, data protection, personal information, GDPR compliance, privacy rights"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-200 mb-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-300">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website or use our services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By using our website or services, you agree to the collection and use of information in accordance 
                  with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>

              {/* Privacy Sections */}
              <div className="space-y-8">
                {privacySections.map((section, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                      <section.icon className="w-8 h-8 text-blue-600 mr-4" />
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 rounded-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </div>

              {/* Updates */}
              <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Policy Updates</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review 
                  this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
=======
<<<<<<< HEAD
      description="Learn how Zion Tech Group protects your privacy and handles your personal information in accordance with applicable laws and regulations."
      keywords="privacy policy, data protection, GDPR, personal information, data security"
=======
      description="Learn about how Zion Tech Group collects, uses, and protects your personal information. Our commitment to your privacy and data security."
      keywords="privacy policy, data protection, GDPR, CCPA, personal information, data security"
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';

const Privacy: NextPage = () => {
  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information in accordance with applicable laws and regulations."
      keywords="privacy policy, data protection, GDPR, personal information, privacy rights"
>>>>>>> main
>>>>>>> main
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
<<<<<<< HEAD
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information.
          </motion.p>
          <motion.div
            className="text-sm text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Last updated: January 15, 2025
          </motion.div>
=======
<<<<<<< HEAD
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-gray-300">
            Last updated: January 27, 2025
          </p>
>>>>>>> main
        </div>
      </section>

      {/* Privacy Principles */}
<<<<<<< HEAD
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </motion.div>
=======
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Privacy Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting your privacy and maintaining the security of your personal information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <div key={principle.title} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <principle.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
>>>>>>> main
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
<<<<<<< HEAD
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">1. Information We Collect</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h3>
                <p className="text-gray-600 mb-4">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Company information and job title</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-gray-800">Automatically Collected Information</h3>
                <p className="text-gray-600 mb-4">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">2. How We Use Your Information</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Providing and improving our services</li>
                  <li>Processing transactions and payments</li>
                  <li>Communicating with you about our services</li>
                  <li>Sending newsletters and marketing communications (with your consent)</li>
                  <li>Responding to your inquiries and support requests</li>
                  <li>Analyzing website usage and improving user experience</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">3. Information Sharing and Disclosure</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">4. Data Security</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">5. Your Rights and Choices</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict processing of your information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">6. Cookies and Tracking Technologies</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">7. International Data Transfers</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">8. Changes to This Policy</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">9. Contact Us</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">+1 302 464 0950</span>
                  </div>
                  <div className="text-gray-600">
                    <strong>Address:</strong><br />
                    Zion Tech Group<br />
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
=======
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support. This may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials and profile information</li>
              <li>Payment and billing information</li>
              <li>Communications with us (support requests, feedback)</li>
              <li>Information you provide in surveys or forms</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to provide, maintain, and improve our services, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Providing and delivering our products and services</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending technical notices, updates, and support messages</li>
              <li>Responding to your comments and questions</li>
              <li>Improving our services and developing new features</li>
              <li>Personalizing your experience</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>With service providers who assist us in operating our business</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection practices</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <p className="text-gray-600 mb-6">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete your personal information</li>
              <li>Right to restrict processing of your information</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@ziontechgroup.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
              <p className="text-gray-600">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
=======
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-300 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Personal Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Name and contact information</li>
                    <li>• Email address and phone number</li>
                    <li>• Company information</li>
                    <li>• Payment and billing information</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Technical Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Website usage data</li>
                    <li>• Cookies and tracking technologies</li>
                    <li>• Log files and analytics data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Service Delivery</h3>
                  <p className="text-gray-700">To provide, maintain, and improve our services and customer support.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Communication</h3>
                  <p className="text-gray-700">To send you updates, newsletters, and respond to your inquiries.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Business Operations</h3>
                  <p className="text-gray-700">To process payments, manage accounts, and conduct business analytics.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Legal Compliance</h3>
                  <p className="text-gray-700">To comply with legal obligations and protect our rights and interests.</p>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <UserCheck className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Information Sharing</h2>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">We Do Not Sell Your Data</h3>
                </div>
                <p className="text-gray-700">
                  We do not sell, trade, or rent your personal information to third parties. We may share your 
                  information only in the following limited circumstances:
                </p>
              </div>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>With your explicit consent</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>With trusted service providers who assist in our operations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>When required by law or to protect our rights</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>In connection with a business transfer or merger</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">SSL/TLS encryption</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Secure data centers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Regular security audits</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Access controls</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Employee training</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Incident response plans</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Access & Portability</h3>
                  <p className="text-gray-700 mb-4">You have the right to access and receive a copy of your personal data.</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Correction</h3>
                  <p className="text-gray-700 mb-4">You can request correction of inaccurate or incomplete information.</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Deletion</h3>
                  <p className="text-gray-700 mb-4">You may request deletion of your personal information under certain circumstances.</p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Opt-out</h3>
                  <p className="text-gray-700 mb-4">You can opt-out of marketing communications at any time.</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
>>>>>>> main
            </div>
          </div>
        </div>
      </section>
>>>>>>> main
>>>>>>> main
    </MainLayout>
  );
};
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';

const Privacy: NextPage = () => {
  const lastUpdated = "January 1, 2025";
=======
>>>>>>> main

export default function PrivacyPolicyPage() {
  return (
<<<<<<< HEAD
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy outlines our data collection, usage, and protection practices."
      keywords="privacy policy, data protection, GDPR, personal information, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <Shield className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 mb-2">
              Your privacy is important to us at Zion Tech Group
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website 
                ziontechgroup.com or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website or services, you agree to the collection and use of information in accordance 
                with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Database className="w-6 h-6 text-blue-600 mr-3" />
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Company information and job title</li>
                    <li>Project requirements and technical specifications</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We automatically collect certain information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website information</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and managing accounts</li>
                <li>Communicating with you about our services</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure data storage and backup systems</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your personal information</li>
                <li>Right to restrict processing of your information</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
=======
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-700">Your privacy matters. This is a placeholder policy.</p>
    </main>
>>>>>>> main
  );
}
>>>>>>> main

