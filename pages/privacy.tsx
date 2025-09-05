import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Users, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

const sections = [
  {
    title: 'Information We Collect',
    icon: Database,
    content: [
      {
        subtitle: 'Personal Information',
        items: [
          'Name, email address, phone number, and company information',
          'Billing and payment information',
          'Communication preferences and correspondence',
          'Account credentials and authentication data'
        ]
      },
      {
        subtitle: 'Technical Information',
        items: [
          'IP address, browser type, and device information',
          'Website usage data and analytics',
          'Cookies and similar tracking technologies',
          'Server logs and system performance data'
        ]
      },
      {
        subtitle: 'Business Information',
        items: [
          'Project requirements and specifications',
          'Service usage patterns and preferences',
          'Support tickets and communication history',
          'Feedback and survey responses'
        ]
      }
    ]
  },
  {
    title: 'How We Use Your Information',
    icon: Users,
    content: [
      {
        subtitle: 'Service Delivery',
        items: [
          'Provide and maintain our AI, IT, and SaaS services',
          'Process transactions and manage billing',
          'Deliver customer support and technical assistance',
          'Customize services to meet your specific needs'
        ]
      },
      {
        subtitle: 'Communication',
        items: [
          'Send service updates and important notifications',
          'Respond to inquiries and support requests',
          'Provide marketing communications (with consent)',
          'Conduct surveys and gather feedback'
        ]
      },
      {
        subtitle: 'Business Operations',
        items: [
          'Improve our services and develop new features',
          'Analyze usage patterns and optimize performance',
          'Ensure security and prevent fraud',
          'Comply with legal and regulatory requirements'
        ]
      }
    ]
  },
  {
    title: 'Information Sharing',
    icon: Shield,
    content: [
      {
        subtitle: 'We Do Not Sell Personal Information',
        items: [
          'We never sell, rent, or trade your personal information',
          'We do not share personal information for marketing purposes',
          'We maintain strict confidentiality of client data',
          'We only share information as described in this policy'
        ]
      },
      {
        subtitle: 'Limited Sharing Scenarios',
        items: [
          'With your explicit consent',
          'To comply with legal obligations',
          'To protect our rights and prevent fraud',
          'With trusted service providers under strict agreements'
        ]
      },
      {
        subtitle: 'Business Transfers',
        items: [
          'In case of merger, acquisition, or asset sale',
          'With appropriate notice and consent',
          'Under the same privacy protections',
          'With continued service continuity'
        ]
      }
    ]
  },
  {
    title: 'Data Security',
    icon: Lock,
    content: [
      {
        subtitle: 'Security Measures',
        items: [
          'Encryption of data in transit and at rest',
          'Regular security audits and assessments',
          'Access controls and authentication systems',
          'Employee training on data protection'
        ]
      },
      {
        subtitle: 'Infrastructure Security',
        items: [
          'Secure cloud infrastructure and hosting',
          'Network security and firewalls',
          'Regular security updates and patches',
          'Incident response and monitoring systems'
        ]
      },
      {
        subtitle: 'Compliance',
        items: [
          'SOC 2 Type II compliance',
          'GDPR compliance for EU customers',
          'Industry-standard security frameworks',
          'Regular third-party security assessments'
        ]
      }
    ]
  }
];

const rights = [
  {
    title: 'Access Your Data',
    description: 'Request a copy of the personal information we hold about you',
    icon: Eye
  },
  {
    title: 'Correct Information',
    description: 'Update or correct inaccurate personal information',
    icon: CheckCircle
  },
  {
    title: 'Delete Data',
    description: 'Request deletion of your personal information',
    icon: Database
  },
  {
    title: 'Data Portability',
    description: 'Receive your data in a structured, machine-readable format',
    icon: ArrowRight
  },
  {
    title: 'Opt Out',
    description: 'Unsubscribe from marketing communications',
    icon: Mail
  },
  {
    title: 'Restrict Processing',
    description: 'Limit how we process your personal information',
    icon: Lock
  }
];

export default function PrivacyPage() {
  return (
    <Layout 
      title="Privacy Policy - Zion Tech Group | Data Protection & Privacy"
      description="Learn how Zion Tech Group protects your privacy and personal information. Our comprehensive privacy policy covers data collection, usage, and your rights."
      keywords="privacy policy, data protection, GDPR, personal information, privacy rights, data security"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
                <span className="block text-blue-400">Your Privacy Matters to Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are committed to protecting your privacy and personal information. 
                This policy explains how we collect, use, and safeguard your data.
              </p>
              <div className="text-sm text-blue-200">
                Last updated: January 15, 2024
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Privacy Commitment
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                At Zion Tech Group, we believe in transparency and respect for your privacy. 
                We handle your personal information with the highest standards of security and care.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Protected</h3>
                <p className="text-gray-600">We use industry-standard encryption and security measures to protect your data.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent</h3>
                <p className="text-gray-600">We clearly explain what data we collect and how we use it.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Control</h3>
                <p className="text-gray-600">You have full control over your personal information and privacy settings.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 mb-8"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>

                  <div className="space-y-8">
                    {section.content.map((subsection, subsectionIndex) => (
                      <div key={subsectionIndex}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{subsection.subtitle}</h3>
                        <ul className="space-y-3">
                          {subsection.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You have important rights regarding your personal information. 
                We respect and support these rights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rights.map((right, index) => (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <right.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{right.title}</h3>
                  <p className="text-gray-600">{right.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                If you have any questions about this privacy policy or how we handle your personal information, 
                please don't hesitate to contact us.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <div className="font-semibold mb-2">Email Us</div>
                  <div className="text-blue-100">privacy@ziontechgroup.com</div>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <div className="font-semibold mb-2">Call Us</div>
                  <div className="text-blue-100">+1 302 464 0950</div>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <div className="font-semibold mb-2">Response Time</div>
                  <div className="text-blue-100">Within 24 hours</div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-300 mr-2" />
                  <h3 className="text-lg font-semibold">Important Notice</h3>
                </div>
                <p className="text-blue-100">
                  This privacy policy may be updated from time to time. We will notify you of any material changes 
                  by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
                <a href="mailto:privacy@ziontechgroup.com" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Email Privacy Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}