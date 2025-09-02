import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Privacy: NextPage = () => {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are transparent about what data we collect, how we use it, and with whom we share it. You have the right to know and control your data.'
    },
    {
      icon: Lock,
      title: 'Data Minimization',
      description: 'We only collect the minimum amount of personal data necessary to provide our services and improve your experience.'
    },
    {
      icon: Database,
      title: 'Secure Storage',
      description: 'Your data is stored securely using encryption and other security measures, and we regularly review and update our security practices.'
    }
  ];

  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information in accordance with applicable laws and regulations."
      keywords="privacy policy, data protection, GDPR, personal information, data security"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
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
        </div>
      </section>

      {/* Privacy Principles */}
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
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
    </MainLayout>
  );
};

export default Privacy;