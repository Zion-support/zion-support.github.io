<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Shield, Lock, Eye, Database, User, Settings, AlertTriangle } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <Layout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information."
      keywords="privacy policy, data protection, GDPR, privacy rights, data security"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, User } from 'lucide-react';
import Layout from '../components/Layout';

const privacySections = [
  {
    title: 'Information We Collect',
    description: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.',
    icon: User,
    details: [
      'Account information (name, email, company)',
      'Service usage data',
      'Communication records',
      'Payment information'
    ]
  },
  {
    title: 'How We Use Information',
    description: 'We use the information we collect to provide, maintain, and improve our services and communicate with you.',
    icon: Eye,
    details: [
      'Provide and maintain our services',
      'Process transactions',
      'Send technical notices and updates',
      'Respond to your inquiries'
    ]
  },
  {
    title: 'Information Sharing',
    description: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.',
    icon: Lock,
    details: [
      'We do not sell personal information',
      'Limited sharing with service providers',
      'Legal compliance requirements',
      'Business transfers (with notice)'
    ]
  },
  {
    title: 'Data Security',
    description: 'We implement appropriate security measures to protect your personal information against unauthorized access.',
    icon: Shield,
    details: [
      'Encryption in transit and at rest',
      'Regular security audits',
      'Access controls and monitoring',
      'Employee training and awareness'
    ]
  }
];

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how we collect, use, and protect your personal information in accordance with privacy laws and best practices." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
>>>>>>> pr-11913
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
<<<<<<< HEAD
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
                <Shield className="w-4 h-4" />
                <span>Last updated: January 15, 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Overview</h2>
                <p className="text-gray-600 mb-4">
                  At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
                <p className="text-gray-600">
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not use our services.
                </p>
              </motion.div>

              {/* Information We Collect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-6 h-6 text-blue-600 mr-3" />
                  Information We Collect
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-600 mb-3">
                      We may collect personal information that you voluntarily provide to us, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Name and contact information (email address, phone number, mailing address)</li>
                      <li>Account credentials and profile information</li>
                      <li>Payment and billing information</li>
                      <li>Communication preferences and feedback</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
                    <p className="text-gray-600 mb-3">
                      We automatically collect certain information about your use of our services:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage patterns and preferences</li>
                      <li>Log files and analytics data</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* How We Use Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="w-6 h-6 text-green-600 mr-3" />
                  How We Use Your Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Provide and maintain our services</li>
                      <li>Process transactions and payments</li>
                      <li>Communicate with you about your account</li>
                      <li>Provide customer support</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement & Analytics</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Analyze usage patterns and trends</li>
                      <li>Improve our services and user experience</li>
                      <li>Develop new features and products</li>
                      <li>Conduct research and analytics</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Data Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-6 h-6 text-red-600 mr-3" />
                  Data Security
                </h2>
                
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Safeguards</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Encryption in transit and at rest</li>
                      <li>Secure data centers and infrastructure</li>
                      <li>Regular security audits and assessments</li>
                      <li>Access controls and authentication</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Organizational Measures</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Employee training on data protection</li>
                      <li>Confidentiality agreements</li>
                      <li>Incident response procedures</li>
                      <li>Regular policy reviews and updates</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="w-6 h-6 text-purple-600 mr-3" />
                  Your Privacy Rights
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Access & Control</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Access your personal information</li>
                      <li>Update or correct your data</li>
                      <li>Delete your account and data</li>
                      <li>Export your data</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Opt-out of marketing communications</li>
                      <li>Control cookie preferences</li>
                      <li>Request data portability</li>
                      <li>Object to certain processing</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-6 h-6 text-indigo-600 mr-3" />
                  Contact Us
                </h2>
                
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy Officer</h3>
                    <div className="text-gray-600 space-y-2">
                      <p>Email: privacy@ziontechgroup.com</p>
                      <p>Phone: +1 (555) 123-4567</p>
                      <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection</h3>
                    <div className="text-gray-600 space-y-2">
                      <p>For GDPR-related inquiries:</p>
                      <p>Email: dpo@ziontechgroup.com</p>
                      <p>Response time: Within 30 days</p>
                    </div>
                  </div>
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn how we collect, use, and protect your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {privacySections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
                          <p className="text-gray-600 mb-4">{section.description}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {section.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-gray-600">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Technology Drive, San Francisco, CA 94105</p>
>>>>>>> pr-11913
                </div>
              </motion.div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Updates Notice */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                <p className="text-gray-600 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                <p className="text-gray-600">
                  We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
=======
      </main>
>>>>>>> pr-11913
    </Layout>
  );
}