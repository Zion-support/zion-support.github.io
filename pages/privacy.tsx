import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, User, Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

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

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - ZION TECH GROUP</title>
        <meta name="description" content="Learn about how ZION TECH GROUP protects your privacy and handles your personal information in compliance with GDPR and other privacy regulations." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, privacy rights" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Your privacy is important to us. Learn how we protect and handle your information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Privacy Commitment</h2>
              <p className="text-lg text-gray-600">
                We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {privacyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
                    <p className="mb-4">
                      We collect information you provide directly to us, such as when you create an account, 
                      use our services, or contact us for support. This may include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Name and contact information</li>
                      <li>Email address and phone number</li>
                      <li>Company information</li>
                      <li>Payment and billing information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">2. How We Use Your Information</h3>
                    <p className="mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices and support messages</li>
                      <li>Respond to your comments and questions</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Information Sharing</h3>
                    <p className="mb-4">
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      without your consent, except as described in this policy. We may share your information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>With service providers who assist us in operating our business</li>
                      <li>When required by law or to protect our rights</li>
                      <li>In connection with a business transfer or acquisition</li>
                      <li>With your explicit consent</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Data Security</h3>
                    <p className="mb-4">
                      We implement appropriate technical and organizational measures to protect your personal 
                      information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure servers and databases</li>
                      <li>Regular security audits and updates</li>
                      <li>Access controls and authentication</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Your Rights</h3>
                    <p className="mb-4">
                      You have the right to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate or incomplete information</li>
                      <li>Delete your personal information</li>
                      <li>Object to processing of your information</li>
                      <li>Data portability</li>
                      <li>Withdraw consent at any time</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Contact Us</h3>
                    <p className="mb-4">
                      If you have any questions about this Privacy Policy or our data practices, 
                      please contact us using the information below.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-lg text-gray-600">
                Get in touch with our privacy team for any questions or concerns
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 mb-2 whitespace-pre-line">{contact.value}</p>
                  <p className="text-sm text-gray-500">{contact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600">
              <p>
                This Privacy Policy was last updated on January 15, 2024. 
                We may update this policy from time to time, and we will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}