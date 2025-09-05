import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, User, Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

const privacyFeatures = [
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'We implement industry-standard security measures to protect your personal information.',
    features: ['SSL Encryption', 'Secure Servers', 'Regular Security Audits', 'Access Controls']
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We are transparent about how we collect, use, and share your information.',
    features: ['Clear Privacy Policy', 'Regular Updates', 'Easy to Understand', 'No Hidden Terms']
  },
  {
    icon: Lock,
    title: 'Data Control',
    description: 'You have full control over your personal data and can manage it at any time.',
    features: ['Data Access Rights', 'Data Deletion', 'Data Portability', 'Consent Management']
  },
  {
    icon: Database,
    title: 'Minimal Collection',
    description: 'We only collect the minimum amount of data necessary to provide our services.',
    features: ['Purpose Limitation', 'Data Minimization', 'Retention Limits', 'Anonymization']
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'privacy@ziontechgroup.com',
    description: 'For privacy-related inquiries'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 302 464 0950',
    description: 'For urgent privacy concerns'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '364 E Main St STE 1008\nMiddletown DE 19709',
    description: 'Our registered office'
  }
];

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy covers data collection, usage, and protection." />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, personal data, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-blue-100 mb-8">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
              <div className="flex items-center justify-center text-blue-200">
                <Shield className="w-6 h-6 mr-2" />
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Privacy Commitments</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Information We Collect</h2>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
                <p className="text-gray-600 mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support. This may include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Payment information (billing address, payment method details)</li>
                  <li>Communication preferences and support requests</li>
                  <li>Professional information (job title, company name, industry)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Usage Information</h3>
                <p className="text-gray-600 mb-6">
                  We automatically collect certain information about your use of our services, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, features used, time spent on our platform)</li>
                  <li>Log data (server logs, error reports, performance data)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Use Your Information</h2>
                <p className="text-gray-600 mb-6">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>Provide and deliver our technology solutions and services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Personalize and improve your experience</li>
                  <li>Detect, investigate, and prevent fraudulent transactions</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">Information Sharing</h2>
                <p className="text-gray-600 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety, or that of our users</li>
                  <li>With trusted service providers who assist us in operating our business</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Security</h2>
                <p className="text-gray-600 mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response procedures</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Rights</h2>
                <p className="text-gray-600 mb-6">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate or incomplete information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                  <li>Withdrawal of consent</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">Cookies and Tracking</h2>
                <p className="text-gray-600 mb-6">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">Changes to This Policy</h2>
                <p className="text-gray-600 mb-6">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions About Privacy?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                If you have any questions about this privacy policy or our data practices, please contact us.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg text-center"
                >
                  <contact.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 mb-2 whitespace-pre-line">{contact.value}</p>
                  <p className="text-sm text-gray-500">{contact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}